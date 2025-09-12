'use client';

import { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot, doc, updateDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Order } from '@/lib/types';
import { eachMonthOfInterval, format as formatDate, startOfMonth, endOfMonth, format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { MagnifyingGlassIcon, FunnelIcon, ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/outline';

export default function AdminDashboard() {
  // 주문 상세 모달 상태
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [detailModalData, setDetailModalData] = useState<Order | null>(null);
  // 상태 이력 모달 상태
  const [historyModalOpen, setHistoryModalOpen] = useState(false);
  const [historyModalData, setHistoryModalData] = useState<{
    companyName: string;
    statusHistory: { status: string; changedAt: Date; admin?: { name: string; email: string } }[];
  } | null>(null);
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
          companyName: '데모 제조업체',
          contactPerson: '김철수',
          email: 'demo@example.com',
          phone: '010-1234-5678',
          equipmentName: '공장모니터링시스템',
          quantity: 1,
          installationDate: '2024-12-01',
          description: '데모 주문입니다',
          status: 'pending',
          createdAt: new Date('2024-07-10'),
          updatedAt: new Date('2024-07-10')
        }
      ];
      setOrders(demoOrders);
      setLoading(false);
      return;
    }

    const q = query(collection(db, 'orders'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const ordersData: Order[] = [];
      querySnapshot.forEach((doc) => {
        ordersData.push({
          id: doc.id,
          ...doc.data(),
          createdAt: doc.data().createdAt?.toDate() || new Date(),
          updatedAt: doc.data().updatedAt?.toDate() || new Date()
        } as Order);
      });
      setOrders(ordersData);
      setLoading(false);
    }, (error) => {
      console.error('Firestore 연결 오류:', error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    let filtered = orders;
    // 검색 필터
    if (searchTerm) {
      filtered = filtered.filter(order =>
        order.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.contactPerson.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.equipmentName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    // 상태 필터
    if (statusFilter !== 'all') {
      filtered = filtered.filter(order => order.status === statusFilter);
    }
    // 정렬
    filtered = filtered.slice().sort((a, b) => {
      if (sortOrder === 'desc') {
        return b.createdAt.getTime() - a.createdAt.getTime();
      } else {
        return a.createdAt.getTime() - b.createdAt.getTime();
      }
    });
    setFilteredOrders(filtered);
  }, [orders, searchTerm, statusFilter, sortOrder]);

  // 월별 주문 건수 집계 (orders가 준비된 후에 계산)
  const now = new Date(); 
  const months = eachMonthOfInterval({ start: startOfMonth(new Date(now.getFullYear(), now.getMonth() - 5)), end: endOfMonth(now) }); 
  const monthlyCounts = months.map(month => { 
    const count = orders.filter((o: Order) => {
      const d = o.createdAt;
      return d.getFullYear() === month.getFullYear() && d.getMonth() === month.getMonth();
    }).length;
    return { label: formatDate(month, 'yyyy-MM'), count };
  });

  // 상태별 통계
  const stats = {
    total: orders.length,
    pending: orders.filter(o => o.status === 'pending').length,
    processing: orders.filter(o => o.status === 'processing').length,
    completed: orders.filter(o => o.status === 'completed').length,
    cancelled: orders.filter(o => o.status === 'cancelled').length
  };

  const updateOrderStatus = async (orderId: string, newStatus: Order['status']) => {
    try {
      // 관리자 정보 (실제 구현 시 Firebase Auth에서 가져와야 함)
      const adminInfo = isAdmin ? { email: 'admin@demo.com', name: '관리자' } : { email: 'user@demo.com', name: '사용자' };
      if (!db) {
        console.warn('Firebase가 설정되지 않았습니다. 데모 모드에서는 상태 변경이 적용되지 않습니다.');
        return;
      }
      // 기존 주문의 statusHistory 불러오기
      const prevOrder = orders.find(o => o.id === orderId);
      const prevHistory = prevOrder?.statusHistory || [];
      const now = new Date();
      await updateDoc(doc(db, 'orders', orderId), {
        status: newStatus,
        updatedAt: now,
        statusHistory: [
          ...prevHistory,
          { status: newStatus, changedAt: now, admin: adminInfo }
        ]
      });
    } catch (error) {
      console.error('상태 업데이트 중 오류가 발생했습니다:', error);
      alert('상태 업데이트 중 오류가 발생했습니다.');
    }
  };

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'processing':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">데이터를 불러오는 중...</p>
        </div>
      </div>
    );
  }

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

      {/* 월별 주문 추이 차트 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">월별 주문 추이</h3>
          <div className="flex items-end gap-4 h-40 w-full">
            {monthlyCounts.map((m) => (
              <div key={m.label} className="flex flex-col items-center flex-1">
                <div style={{height: `${m.count * 15}px`}} className="w-8 bg-blue-400 rounded-t-lg transition-all duration-500"></div>
                <span className="mt-2 text-xs text-gray-500">{m.label}</span>
                <span className="text-sm font-bold text-gray-700">{m.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* 상태별 주문 건수 차트 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">상태별 주문 현황</h3>
          <div className="w-full flex items-end gap-6 h-40">
            {/* Bar: 대기중 */}
            <div className="flex flex-col items-center flex-1">
              <div style={{height: `${stats.pending * 20}px`}} className="w-8 bg-yellow-400 rounded-t-lg transition-all duration-500"></div>
              <span className="mt-2 text-xs text-yellow-700 font-semibold">대기중</span>
              <span className="text-sm font-bold text-gray-700">{stats.pending}</span>
            </div>
            {/* Bar: 처리중 */}
            <div className="flex flex-col items-center flex-1">
              <div style={{height: `${stats.processing * 20}px`}} className="w-8 bg-blue-500 rounded-t-lg transition-all duration-500"></div>
              <span className="mt-2 text-xs text-blue-700 font-semibold">처리중</span>
              <span className="text-sm font-bold text-gray-700">{stats.processing}</span>
            </div>
            {/* Bar: 완료 */}
            <div className="flex flex-col items-center flex-1">
              <div style={{height: `${stats.completed * 20}px`}} className="w-8 bg-green-500 rounded-t-lg transition-all duration-500"></div>
              <span className="mt-2 text-xs text-green-700 font-semibold">완료</span>
              <span className="text-sm font-bold text-gray-700">{stats.completed}</span>
            </div>
            {/* Bar: 취소 */}
            <div className="flex flex-col items-center flex-1">
              <div style={{height: `${stats.cancelled * 20}px`}} className="w-8 bg-red-500 rounded-t-lg transition-all duration-500"></div>
              <span className="mt-2 text-xs text-red-700 font-semibold">취소</span>
              <span className="text-sm font-bold text-gray-700">{stats.cancelled}</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
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
        {/* Filters & 정렬 */}
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

        {/* Orders Table */}
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
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      주문 정보
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      연락처
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      장비/수량
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      설치 예정일
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      상태
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      접수일
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredOrders.map((order) => (
                    <tr
                      key={order.id}
                      className="hover:bg-blue-50 cursor-pointer"
                      onClick={() => {
                        setDetailModalData(order);
                        setDetailModalOpen(true);
                      }}
                    >
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
                          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(order.status)}`}>
                            {order.status === 'pending' ? '대기중' :
                              order.status === 'processing' ? '처리중' :
                              order.status === 'completed' ? '완료' :
                              order.status === 'cancelled' ? '취소' : order.status}
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {order.createdAt ? format(new Date(order.createdAt), 'yyyy-MM-dd', { locale: ko }) : ''}
                      </td>
                      {/* 상태 변경 이력 보기 버튼 (모달) */}
                      <td className="px-6 py-4 whitespace-nowrap" onClick={e => e.stopPropagation()}>
                        {Array.isArray(order.statusHistory) && order.statusHistory.length > 0 ? (
                          <button
                            className="text-xs text-blue-600 underline hover:text-blue-800"
                            onClick={() => {
                              setHistoryModalData({
                                companyName: order.companyName,
                                statusHistory: (order.statusHistory ?? []).map(h => ({
                                  status: h.status,
                                  changedAt: new Date(h.changedAt),
                                  admin: h.admin
                                }))
                              });
                              setHistoryModalOpen(true);
                            }}
                          >이력 보기</button>
                        ) : (
                          <span className="text-xs text-gray-400">-</span>
                        )}
                      </td>
      {/* 주문 상세 정보 모달 */}
      {detailModalOpen && detailModalData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative animate-fadeIn">
            <h4 className="text-lg font-bold mb-4">주문 상세 정보</h4>
            <div className="mb-4 space-y-1 text-sm">
              <div><span className="font-semibold">회사명:</span> {detailModalData.companyName}</div>
              <div><span className="font-semibold">담당자:</span> {detailModalData.contactPerson}</div>
              <div><span className="font-semibold">이메일:</span> {detailModalData.email}</div>
              <div><span className="font-semibold">연락처:</span> {detailModalData.phone}</div>
              <div><span className="font-semibold">장비명:</span> {detailModalData.equipmentName}</div>
              <div><span className="font-semibold">수량:</span> {detailModalData.quantity}개</div>
              <div><span className="font-semibold">설치 예정일:</span> {detailModalData.installationDate ? format(new Date(detailModalData.installationDate), 'yyyy-MM-dd', { locale: ko }) : '미지정'}</div>
              <div><span className="font-semibold">상태:</span> {detailModalData.status === 'pending' ? '대기중' : detailModalData.status === 'processing' ? '처리중' : detailModalData.status === 'completed' ? '완료' : detailModalData.status === 'cancelled' ? '취소' : detailModalData.status}</div>
              <div><span className="font-semibold">접수일:</span> {detailModalData.createdAt ? format(new Date(detailModalData.createdAt), 'yyyy-MM-dd', { locale: ko }) : ''}</div>
              <div><span className="font-semibold">요구사항:</span> {detailModalData.description || '-'}</div>
            </div>
            <div className="mb-4">
              <div className="font-semibold mb-1">상태 변경 이력</div>
              {Array.isArray(detailModalData.statusHistory) && detailModalData.statusHistory.length > 0 ? (
                <ul className="space-y-1 max-h-32 overflow-y-auto text-xs">
                  {(detailModalData.statusHistory ?? []).map((hist, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="font-semibold">{hist.status === 'pending' ? '대기중' : hist.status === 'processing' ? '처리중' : hist.status === 'completed' ? '완료' : hist.status === 'cancelled' ? '취소' : hist.status}</span>
                      <span className="text-gray-400">{format(new Date(hist.changedAt), 'yyyy-MM-dd HH:mm', { locale: ko })}</span>
                      {hist.admin && (
                        <span className="ml-2 text-gray-500 text-xs">{hist.admin.name} ({hist.admin.email})</span>
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                <span className="text-gray-400 text-xs">이력 없음</span>
              )}
            </div>
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-xl font-bold"
              onClick={() => setDetailModalOpen(false)}
              aria-label="닫기"
            >×</button>
            <button
              className="w-full py-2 mt-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold"
              onClick={() => setDetailModalOpen(false)}
            >닫기</button>
          </div>
        </div>
      )}
      {/* 상태 변경 이력 모달 */}
      {historyModalOpen && historyModalData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-xs sm:max-w-md p-6 relative animate-fadeIn">
            <h4 className="text-lg font-bold mb-4">상태 변경 이력<br /><span className="text-xs font-normal text-gray-500">{historyModalData.companyName}</span></h4>
            <ul className="space-y-2 mb-6 max-h-60 overflow-y-auto">
              {(historyModalData.statusHistory ?? []).map((hist, i) => (
                <li key={i} className="flex items-center gap-2 text-sm">
                  <span className="font-semibold">{hist.status === 'pending' ? '대기중' : hist.status === 'processing' ? '처리중' : hist.status === 'completed' ? '완료' : hist.status === 'cancelled' ? '취소' : hist.status}</span>
                  <span className="text-gray-400">{format(new Date(hist.changedAt), 'yyyy-MM-dd HH:mm', { locale: ko })}</span>
                  {hist.admin && (
                    <span className="ml-2 text-gray-500 text-xs">{hist.admin.name} ({hist.admin.email})</span>
                  )}
                </li>
              ))}
            </ul>
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-xl font-bold"
              onClick={() => setHistoryModalOpen(false)}
              aria-label="닫기"
            >×</button>
            <button
              className="w-full py-2 mt-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold"
              onClick={() => setHistoryModalOpen(false)}
            >닫기</button>
          </div>
        </div>
      )}
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
}