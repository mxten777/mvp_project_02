'use client';

import { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot, doc, updateDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Order } from '@/lib/types';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';

import { MagnifyingGlassIcon, FunnelIcon, ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/outline';

export default function AdminDashboard() {
  // 관리자 인증 여부 (실제 구현 시 Firebase Auth 연동 필요)
  const isAdmin = true; // TODO: 실제 인증 연동

  const [orders, setOrders] = useState<Order[]>([]);
  const [filteredOrders, setFilteredOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [sortOrder, setSortOrder] = useState<'desc' | 'asc'>('desc');

  useEffect(() => {
    // Firebase가 초기화되지 않은 경우 데모 데이터 사용
    if (!db) {
      console.warn('Firebase가 설정되지 않았습니다. 데모 데이터를 사용합니다.');
      const demoOrders: Order[] = [
        {
          id: 'demo-1',
          return (
            <div className="min-h-screen bg-gray-50">
              {/* Header */}
              <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex items-center justify-between py-6">
                    <div>
                      <h1 className="text-2xl font-bold text-gray-900">관리자 대시보드</h1>
                      <p className="text-gray-600">만송시스템 주문 관리</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-500">
                        총 {orders.length}건의 주문
                      </span>
                    </div>
                  </div>
                </div>
              </header>

              {/* 통계/차트: 관리자만 노출 */}
              {isAdmin && (
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                    {/* 상태별 주문 건수 차트 */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                      <h3 className="text-lg font-bold text-gray-900 mb-4">상태별 주문 현황</h3>
                      <div className="w-full flex items-end gap-6 h-40">
                        <div className="flex flex-col items-center flex-1">
                          <div style={{height: `${stats.pending * 20}px`}} className="w-8 bg-yellow-400 rounded-t-lg transition-all duration-500"></div>
                          <span className="mt-2 text-xs text-yellow-700 font-semibold">대기중</span>
                          <span className="text-sm font-bold text-gray-700">{stats.pending}</span>
                        </div>
                        <div className="flex flex-col items-center flex-1">
                          <div style={{height: `${stats.processing * 20}px`}} className="w-8 bg-blue-500 rounded-t-lg transition-all duration-500"></div>
                          <span className="mt-2 text-xs text-blue-700 font-semibold">처리중</span>
                          <span className="text-sm font-bold text-gray-700">{stats.processing}</span>
                        </div>
                        <div className="flex flex-col items-center flex-1">
                          <div style={{height: `${stats.completed * 20}px`}} className="w-8 bg-green-500 rounded-t-lg transition-all duration-500"></div>
                          <span className="mt-2 text-xs text-green-700 font-semibold">완료</span>
                          <span className="text-sm font-bold text-gray-700">{stats.completed}</span>
                        </div>
                        <div className="flex flex-col items-center flex-1">
                          <div style={{height: `${stats.cancelled * 20}px`}} className="w-8 bg-red-500 rounded-t-lg transition-all duration-500"></div>
                          <span className="mt-2 text-xs text-red-700 font-semibold">취소</span>
                          <span className="text-sm font-bold text-gray-700">{stats.cancelled}</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-blue-50 rounded-xl p-4 text-center shadow-sm">
                      <div className="text-xs text-blue-700 font-semibold mb-1">전체</div>
                      <div className="text-2xl font-bold text-blue-900">{stats.total}</div>
                    </div>
                    <div className="bg-yellow-50 rounded-xl p-4 text-center shadow-sm">
                      <div className="text-xs text-yellow-700 font-semibold mb-1">대기중</div>
                      <div className="text-2xl font-bold text-yellow-900">{stats.pending}</div>
                    </div>
                    <div className="bg-blue-100 rounded-xl p-4 text-center shadow-sm">
                      <div className="text-xs text-blue-800 font-semibold mb-1">처리중</div>
                      <div className="text-2xl font-bold text-blue-900">{stats.processing}</div>
                    </div>
                    <div className="bg-green-50 rounded-xl p-4 text-center shadow-sm">
                      <div className="text-xs text-green-700 font-semibold mb-1">완료</div>
                      <div className="text-2xl font-bold text-green-900">{stats.completed}</div>
                    </div>
                    <div className="bg-red-50 rounded-xl p-4 text-center shadow-sm">
                      <div className="text-xs text-red-700 font-semibold mb-1">취소</div>
                      <div className="text-2xl font-bold text-red-900">{stats.cancelled}</div>
                    </div>
                  </div>
                </div>
              )}

              {/* 필터/정렬 */}
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                  <div className="flex flex-col md:flex-row gap-4 items-center">
                    {/* 검색 */}
                    <div className="flex-1 relative">
                      <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        placeholder="회사명, 담당자, 장비명으로 검색..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    {/* 상태 필터 */}
                    <div className="relative">
                      <FunnelIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                      >
                        <option value="all">모든 상태</option>
                        <option value="pending">대기중</option>
                        <option value="processing">처리중</option>
                        <option value="completed">완료</option>
                        <option value="cancelled">취소</option>
                      </select>
                    </div>
                    {/* 정렬 옵션 */}
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc')}
                        className="flex items-center px-3 py-2 border border-gray-300 rounded-lg bg-white hover:bg-blue-50 text-gray-700 text-sm font-medium focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        title={sortOrder === 'desc' ? '최신순' : '과거순'}
                      >
                        {sortOrder === 'desc' ? <ArrowDownIcon className="h-4 w-4 mr-1" /> : <ArrowUpIcon className="h-4 w-4 mr-1" />}
                        {sortOrder === 'desc' ? '최신순' : '과거순'}
                      </button>
                    </div>
                  </div>
                </div>

                {/* 주문 테이블 */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  {filteredOrders.length === 0 ? (
                    <div className="p-12 text-center">
                      <p className="text-gray-500 text-lg">주문이 없습니다.</p>
                    </div>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">주문 정보</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">연락처</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">장비/수량</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">설치 예정일</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">상태</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">접수일</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {filteredOrders.map((order) => (
                            <tr key={order.id} className="hover:bg-gray-50">
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div>
                                  <div className="text-sm font-medium text-gray-900">{order.companyName}</div>
                                  <div className="text-sm text-gray-500">담당자: {order.contactPerson}</div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{order.email}</div>
                                <div className="text-sm text-gray-500">{order.phone}</div>
                              </td>
                              <td className="px-6 py-4">
                                <div className="text-sm text-gray-900">{order.equipmentName}</div>
                                <div className="text-sm text-gray-500">수량: {order.quantity}개</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                {order.installationDate ? format(new Date(order.installationDate), 'yyyy-MM-dd', { locale: ko }) : '미지정'}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                {isAdmin ? (
                                  <select
                                    value={order.status}
                                    onChange={(e) => updateOrderStatus(order.id!, e.target.value as Order['status'])}
                                    className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(order.status)} border-0 focus:ring-2 focus:ring-blue-500`}
                                  >
                                    <option value="pending">대기중</option>
                                    <option value="processing">처리중</option>
                                    <option value="completed">완료</option>
                                    <option value="cancelled">취소</option>
                                  </select>
                                ) : (
                                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(order.status)}`}>{
                                    order.status === 'pending' ? '대기중' :
                                    order.status === 'processing' ? '처리중' :
                                    order.status === 'completed' ? '완료' :
                                    order.status === 'cancelled' ? '취소' : order.status
                                  }</span>
                                )}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {format(order.createdAt, 'yyyy-MM-dd HH:mm', { locale: ko })}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
                            <span className="mt-2 text-xs text-green-700 font-semibold">완료</span>
                            <span className="text-sm font-bold text-gray-700">{stats.completed}</span>
                          </div>
                          <div className="flex flex-col items-center flex-1">
                            <div style={{height: `${stats.cancelled * 20}px`}} className="w-8 bg-red-500 rounded-t-lg transition-all duration-500"></div>
                            <span className="mt-2 text-xs text-red-700 font-semibold">취소</span>
                            <span className="text-sm font-bold text-gray-700">{stats.cancelled}</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-blue-50 rounded-xl p-4 text-center shadow-sm">
                        <div className="text-xs text-blue-700 font-semibold mb-1">전체</div>
                        <div className="text-2xl font-bold text-blue-900">{stats.total}</div>
                      </div>
                      <div className="bg-yellow-50 rounded-xl p-4 text-center shadow-sm">
                        <div className="text-xs text-yellow-700 font-semibold mb-1">대기중</div>
                        <div className="text-2xl font-bold text-yellow-900">{stats.pending}</div>
                      </div>
                      <div className="bg-blue-100 rounded-xl p-4 text-center shadow-sm">
                        <div className="text-xs text-blue-800 font-semibold mb-1">처리중</div>
                        <div className="text-2xl font-bold text-blue-900">{stats.processing}</div>
                      </div>
                      <div className="bg-green-50 rounded-xl p-4 text-center shadow-sm">
                        <div className="text-xs text-green-700 font-semibold mb-1">완료</div>
                        <div className="text-2xl font-bold text-green-900">{stats.completed}</div>
                      </div>
                      <div className="bg-red-50 rounded-xl p-4 text-center shadow-sm">
                        <div className="text-xs text-red-700 font-semibold mb-1">취소</div>
                        <div className="text-2xl font-bold text-red-900">{stats.cancelled}</div>
                      </div>
                    </div>
                  </div>
                )}
                      접수일
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {order.companyName}
                          </div>
                          <div className="text-sm text-gray-500">
                            담당자: {order.contactPerson}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{order.email}</div>
                        <div className="text-sm text-gray-500">{order.phone}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">{order.equipmentName}</div>
                        <div className="text-sm text-gray-500">수량: {order.quantity}개</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {order.installationDate ? 
                          format(new Date(order.installationDate), 'yyyy-MM-dd', { locale: ko }) :
                          '미지정'
                        }
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {isAdmin ? (
                          <select
                            value={order.status}
                            onChange={(e) => updateOrderStatus(order.id!, e.target.value as Order['status'])}
                            className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(order.status)} border-0 focus:ring-2 focus:ring-blue-500`}
                          >
                            <option value="pending">대기중</option>
                            <option value="processing">처리중</option>
                            <option value="completed">완료</option>
                            <option value="cancelled">취소</option>
                          </select>
                        ) : (
                          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(order.status)}`}>{
                            order.status === 'pending' ? '대기중' :
                            order.status === 'processing' ? '처리중' :
                            order.status === 'completed' ? '완료' :
                            order.status === 'cancelled' ? '취소' : order.status
                          }</span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {format(order.createdAt, 'yyyy-MM-dd HH:mm', { locale: ko })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* 요약 통계 */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="text-2xl font-bold text-gray-900">
              {orders.filter(o => o.status === 'pending').length}
            </div>
            <div className="text-sm text-gray-500">대기중</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="text-2xl font-bold text-blue-600">
              {orders.filter(o => o.status === 'processing').length}
            </div>
            <div className="text-sm text-gray-500">처리중</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="text-2xl font-bold text-green-600">
              {orders.filter(o => o.status === 'completed').length}
            </div>
            <div className="text-sm text-gray-500">완료</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="text-2xl font-bold text-red-600">
              {orders.filter(o => o.status === 'cancelled').length}
            </div>
            <div className="text-sm text-gray-500">취소</div>
          </div>
        </div>
      </div>
    </div>
  );

}

