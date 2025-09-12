// 주문 관리 탭: 검색/필터/정렬 UI 및 테이블
function OrderAdminTab({
  orders, filteredOrders, setFilteredOrders,
  searchTerm, setSearchTerm,
  statusFilter, setStatusFilter,
  sortOrder, setSortOrder,
  setDetailModalData, setDetailModalOpen,
  updateOrderStatus, getStatusColor, isAdmin,
  setHistoryModalData, setHistoryModalOpen
}: any) {
  // 검색/필터/정렬 적용
  useEffect(() => {
    let data = orders;
    if (searchTerm) {
      data = data.filter((o: any) =>
        o.companyName?.includes(searchTerm) ||
        o.contactPerson?.includes(searchTerm) ||
        o.email?.includes(searchTerm) ||
        o.phone?.includes(searchTerm)
      );
    }
    if (statusFilter !== 'all') {
      data = data.filter((o: any) => o.status === statusFilter);
    }
    data = [...data].sort((a: any, b: any) => {
      if (sortOrder === 'asc') return (a.createdAt > b.createdAt ? 1 : -1);
      return (a.createdAt < b.createdAt ? 1 : -1);
    });
    setFilteredOrders(data);
  }, [orders, searchTerm, statusFilter, sortOrder, setFilteredOrders]);

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex flex-wrap gap-2 mb-4 items-center">
        <input
          className="border rounded px-3 py-2 text-sm w-48"
          placeholder="검색(회사명/담당자/이메일/연락처)"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <select
          className="border rounded px-2 py-2 text-sm"
          value={statusFilter}
          onChange={e => setStatusFilter(e.target.value)}
        >
          <option value="all">전체 상태</option>
          <option value="pending">대기중</option>
          <option value="processing">처리중</option>
          <option value="completed">완료</option>
          <option value="cancelled">취소</option>
        </select>
        <button
          className="ml-2 px-2 py-2 rounded border text-sm flex items-center gap-1"
          onClick={() => setSortOrder((prev: string) => prev === 'desc' ? 'asc' : 'desc')}
        >
          {sortOrder === 'desc' ? <ArrowDownIcon className="w-4 h-4" /> : <ArrowUpIcon className="w-4 h-4" />}
          날짜순
        </button>
      </div>
      {/* 주문 테이블 (기존 테이블 코드 복사) */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">회사명/담당자</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">이메일/연락처</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">장비/수량</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">설치 예정일</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">상태</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">접수일</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">이력</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredOrders.map((order: any) => (
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
                <td className="px-6 py-4 whitespace-nowrap" onClick={e => e.stopPropagation()}>
                  {Array.isArray(order.statusHistory) && order.statusHistory.length > 0 ? (
                    <button
                      className="text-xs text-blue-600 underline hover:text-blue-800"
                      onClick={() => {
                        setHistoryModalData({
                          companyName: order.companyName,
                          statusHistory: (order.statusHistory ?? []).map((h: any) => ({
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}



// --- 하위 컴포넌트 선언부 (NoticeAdminTab, ContactAdminTab, NoticeModal 등) ---

function NoticeModal({ mode, notice, onSave, onClose }: { mode: 'add'|'edit', notice?: any, onSave: (n:any)=>void, onClose: ()=>void }) {
  const [title, setTitle] = useState(notice?.title || '');
  const [status, setStatus] = useState(notice?.status || '게시');
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative animate-fadeIn">
        <h4 className="text-lg font-bold mb-4">{mode === 'add' ? '새 공지 등록' : '공지 수정'}</h4>
        <div className="mb-4 space-y-2">
          <div>
            <label className="block text-sm font-semibold mb-1">제목</label>
            <input className="w-full border rounded px-3 py-2" value={title} onChange={e=>setTitle(e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">상태</label>
            <select className="w-full border rounded px-3 py-2" value={status} onChange={e=>setStatus(e.target.value)}>
              <option value="게시">게시</option>
              <option value="숨김">숨김</option>
            </select>
          </div>
        </div>
        <div className="flex gap-2 mt-4">
          <button
            className="flex-1 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
            onClick={()=>{
              if(title.trim()) onSave({ ...(notice||{}), title, status });
            }}
          >저장</button>
          <button
            className="flex-1 py-2 rounded bg-gray-100 text-gray-700 hover:bg-gray-200"
            onClick={onClose}
          >닫기</button>
        </div>
      </div>
    </div>
  );
}

function NoticeAdminTab() {
  const [notices, setNotices] = useState([
    { id: '1', title: '신제품 출시 안내', author: '관리자', date: '2025-09-10', status: '게시' },
    { id: '2', title: '추석 연휴 휴무 안내', author: '관리자', date: '2025-09-05', status: '게시' },
    { id: '3', title: '홈페이지 리뉴얼', author: '관리자', date: '2025-08-30', status: '숨김' },
  ]);
  const [modal, setModal] = useState<{mode: 'add'|'edit', notice?: any}|null>(null);

  function handleAdd(newNotice: any) {
    setNotices(prev => [
      { ...newNotice, id: Date.now().toString(), author: '관리자', date: new Date().toISOString().slice(0,10), status: '게시' },
      ...prev
    ]);
    setModal(null);
  }
  function handleEdit(edited: any) {
    setNotices(prev => prev.map(n => n.id === edited.id ? { ...n, ...edited } : n));
    setModal(null);
  }
  function handleDelete(id: string) {
    setNotices(prev => prev.filter(n => n.id !== id));
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold">공지/뉴스 목록</h3>
        <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700" onClick={() => setModal({mode:'add'})}>+ 새 공지 등록</button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">제목</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">작성자</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">날짜</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">상태</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">관리</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {notices.map((n) => (
              <tr key={n.id} className="hover:bg-blue-50">
                <td className="px-4 py-2">{n.title}</td>
                <td className="px-4 py-2">{n.author}</td>
                <td className="px-4 py-2 text-xs text-gray-500">{n.date}</td>
                <td className="px-4 py-2">
                  <span className={`px-2 py-1 text-xs rounded-full font-semibold ${n.status === '게시' ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-500'}`}>{n.status}</span>
                </td>
                <td className="px-4 py-2 flex gap-2">
                  <button className="px-2 py-1 text-xs rounded bg-gray-100 text-gray-700 hover:bg-gray-200" onClick={() => setModal({mode:'edit', notice:n})}>수정</button>
                  <button className="px-2 py-1 text-xs rounded bg-red-100 text-red-600 hover:bg-red-200" onClick={() => handleDelete(n.id)}>삭제</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 등록/수정 모달 */}
      {modal && (
        <NoticeModal
          mode={modal.mode}
          notice={modal.notice}
          onSave={modal.mode === 'add' ? handleAdd : handleEdit}
          onClose={() => setModal(null)}
        />
      )}
    </div>
  );
}


'use client';
import { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot, doc, updateDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Order } from '@/lib/types';
import { eachMonthOfInterval, format as formatDate, startOfMonth, endOfMonth, format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { MagnifyingGlassIcon, FunnelIcon, ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/outline';

export default function AdminDashboard() {
  // 관리자 인증 상태(가상)
  const [isAdmin, setIsAdmin] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPw, setLoginPw] = useState('');
  // ...기존 대시보드 상태...
  const [tab, setTab] = useState<'orders' | 'contact' | 'notice'>('orders');
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [detailModalData, setDetailModalData] = useState<Order | null>(null);
  const [historyModalOpen, setHistoryModalOpen] = useState(false);
  const [historyModalData, setHistoryModalData] = useState<{
  companyName: string;
  statusHistory: { status: string; changedAt: Date; admin?: { name: string; email: string } }[];
  } | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [filteredOrders, setFilteredOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [sortOrder, setSortOrder] = useState<'desc' | 'asc'>('desc');

  function getStatusColor(status: string) {
  switch (status) {
  case 'pending': return 'bg-yellow-100 text-yellow-800';
  case 'processing': return 'bg-blue-100 text-blue-800';
  case 'completed': return 'bg-green-100 text-green-800';
  case 'cancelled': return 'bg-gray-200 text-gray-500';
  default: return 'bg-gray-100 text-gray-800';
  }
  }

  async function updateOrderStatus(orderId: string, newStatus: Order['status']) {
  setOrders((prev) => prev.map((o) => o.id === orderId ? { ...o, status: newStatus } : o));
  }

  // 가상 로그인/로그아웃
  function handleLogin(e: React.FormEvent) {
  e.preventDefault();
  // 실제 인증 연동 시 Firebase Auth 사용
  if (loginEmail === 'admin@mansong.com' && loginPw === 'admin1234') {
  setIsAdmin(true);
  } else {
  alert('관리자 계정이 아닙니다.');
  }
  }
  function handleLogout() {
  setIsAdmin(false);
  setLoginEmail('');
  setLoginPw('');
  }

  if (!isAdmin) {
  // 로그인 화면 (UI/구조)
  return (
  <main className="min-h-screen flex items-center justify-center bg-gray-50">
  <form className="bg-white rounded-lg shadow-lg p-8 w-full max-w-xs space-y-4" onSubmit={handleLogin}>
          <h2 className="text-xl font-bold mb-2 text-center">관리자 로그인</h2>
          <input
            className="w-full border rounded px-3 py-2"
            type="email"
            placeholder="이메일"
            value={loginEmail}
            onChange={e => setLoginEmail(e.target.value)}
            required
          />
          <input
            className="w-full border rounded px-3 py-2"
            type="password"
            placeholder="비밀번호"
            value={loginPw}
            onChange={e => setLoginPw(e.target.value)}
            required
          />
          <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 font-semibold">로그인</button>
  </form>
  </main>
  );
  }

  // 관리자 대시보드 화면
  // --- 대시보드 통계/요약/차트용 가상 데이터 ---
  // 카운트업 애니메이션용 상태
  const [count, setCount] = useState({
    orders: 0, ordersCompleted: 0, ordersProcessing: 0, ordersPending: 0, ordersCancelled: 0, contacts: 0, notices: 0
  });
  const summary = {
    orders: 128,
    ordersCompleted: 92,
    ordersProcessing: 24,
    ordersPending: 8,
    ordersCancelled: 4,
    contacts: 37,
    notices: 12,
  };
  const monthlyOrders = [12, 18, 15, 20, 22, 17, 24, 28, 30, 25, 19, 21]; // 1~12월
  // 카운트업 애니메이션 효과
  useEffect(() => {
    const keys = Object.keys(summary);
    let frame = 0;
    const maxFrame = 30;
    function animate() {
      frame++;
      setCount(prev => {
        const next: any = {};
        keys.forEach(k => {
          next[k] = Math.round((summary as any)[k] * Math.min(frame / maxFrame, 1));
        });
        return next;
      });
      if (frame < maxFrame) requestAnimationFrame(animate);
    }
    animate();
    // eslint-disable-next-line
  }, []);
  // --- UI ---
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* 통계 요약 카드 */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center transition-all duration-500 animate-fadeIn" aria-label="총 주문 통계 카드">
          <span className="text-gray-500 text-sm mb-1">총 주문</span>
          <span className="text-3xl font-bold text-blue-600 mb-2" aria-live="polite">{count.orders}</span>
          <div className="flex flex-wrap gap-2 text-xs justify-center">
            <span className="bg-green-100 text-green-700 px-2 py-1 rounded transition-all">완료 {count.ordersCompleted}</span>
            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded transition-all">처리중 {count.ordersProcessing}</span>
            <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded transition-all">대기 {count.ordersPending}</span>
            <span className="bg-gray-100 text-gray-500 px-2 py-1 rounded transition-all">취소 {count.ordersCancelled}</span>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center transition-all duration-500 animate-fadeIn" aria-label="문의 접수 통계 카드">
          <span className="text-gray-500 text-sm mb-1">문의 접수</span>
          <span className="text-3xl font-bold text-blue-600 mb-2" aria-live="polite">{count.contacts}</span>
        </div>
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center transition-all duration-500 animate-fadeIn" aria-label="공지/뉴스 통계 카드">
          <span className="text-gray-500 text-sm mb-1">공지/뉴스</span>
          <span className="text-3xl font-bold text-blue-600 mb-2" aria-live="polite">{count.notices}</span>
        </div>
      </section>
      {/* 간단한 월별 주문 건수 차트 (막대) */}
      <section className="bg-white rounded-lg shadow p-6 mb-8 animate-fadeIn" aria-label="월별 주문 건수 차트">
        <h3 className="text-lg font-bold mb-4">월별 주문 건수</h3>
        <div className="flex items-end gap-1 h-32 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-200" role="region" aria-label="월별 주문 막대차트">
          {monthlyOrders.map((cnt, i) => (
            <div key={i} className="flex flex-col items-center w-7 min-w-[1.5rem]">
              <div
                className="bg-blue-500 rounded-t transition-all duration-700"
                style={{ height: `${cnt * 3}px`, minHeight: '8px', width: '100%' }}
                title={`${i+1}월: ${cnt}건`}
                aria-label={`${i+1}월: ${cnt}건`}
              ></div>
              <span className="text-xs text-gray-400 mt-1">{i+1}월</span>
            </div>
          ))}
        </div>
      </section>
      {/* 상태별 주문 비율 도넛 차트 (SVG) */}
      <section className="bg-white rounded-lg shadow p-6 mb-8 animate-fadeIn" aria-label="상태별 주문 비율 도넛차트">
        <h3 className="text-lg font-bold mb-4">상태별 주문 비율</h3>
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* 접근성: aria-label, title, 색상 대비 */}
          <svg width="100" height="100" viewBox="0 0 42 42" className="block" role="img" aria-label="상태별 주문 비율 도넛차트">
            {(() => {
              // 도넛차트 각 섹션 계산
              const total = summary.orders;
              const completed = (summary.ordersCompleted/total)*100;
              const processing = (summary.ordersProcessing/total)*100;
              const pending = (summary.ordersPending/total)*100;
              const cancelled = (summary.ordersCancelled/total)*100;
              return [
                <circle key="completed" r="15.915" cx="21" cy="21" fill="transparent" stroke="#22c55e" strokeWidth="6" strokeDasharray={`${completed} 100`} strokeDashoffset="0" aria-label="완료" />,
                <circle key="processing" r="15.915" cx="21" cy="21" fill="transparent" stroke="#3b82f6" strokeWidth="6" strokeDasharray={`${processing} 100`} strokeDashoffset={`-${completed}`} aria-label="처리중" />,
                <circle key="pending" r="15.915" cx="21" cy="21" fill="transparent" stroke="#eab308" strokeWidth="6" strokeDasharray={`${pending} 100`} strokeDashoffset={`-${completed+processing}`} aria-label="대기" />,
                <circle key="cancelled" r="15.915" cx="21" cy="21" fill="transparent" stroke="#6b7280" strokeWidth="6" strokeDasharray={`${cancelled} 100`} strokeDashoffset={`-${completed+processing+pending}`} aria-label="취소" />,
              ];
            })()}
          </svg>
          <ul className="text-sm space-y-1 mt-4 md:mt-0">
            <li><span className="inline-block w-3 h-3 rounded-full align-middle mr-2" style={{background:'#22c55e'}}></span>완료</li>
            <li><span className="inline-block w-3 h-3 rounded-full align-middle mr-2" style={{background:'#3b82f6'}}></span>처리중</li>
            <li><span className="inline-block w-3 h-3 rounded-full align-middle mr-2" style={{background:'#eab308'}}></span>대기</li>
            <li><span className="inline-block w-3 h-3 rounded-full align-middle mr-2" style={{background:'#6b7280'}}></span>취소</li>
          </ul>
        </div>
      </section>
      <div className="flex justify-between items-center mb-8">
        <div className="flex gap-4">
          <button
            className={`px-4 py-2 rounded-t-lg font-semibold border-b-2 ${tab === 'orders' ? 'border-blue-600 text-blue-600 bg-white' : 'border-transparent text-gray-500 bg-gray-50'}`}
            onClick={() => setTab('orders')}
          >주문 관리</button>
          <button
            className={`px-4 py-2 rounded-t-lg font-semibold border-b-2 ${tab === 'contact' ? 'border-blue-600 text-blue-600 bg-white' : 'border-transparent text-gray-500 bg-gray-50'}`}
            onClick={() => setTab('contact')}
          >문의 관리</button>
          <button
            className={`px-4 py-2 rounded-t-lg font-semibold border-b-2 ${tab === 'notice' ? 'border-blue-600 text-blue-600 bg-white' : 'border-transparent text-gray-500 bg-gray-50'}`}
            onClick={() => setTab('notice')}
          >공지/뉴스 관리</button>
  </div>
  <button className="text-sm text-gray-500 hover:text-blue-600" onClick={handleLogout}>로그아웃</button>
  </div>

  {/* 탭별 내용 */}
  {tab === 'orders' && (
  <OrderAdminTab
          orders={orders}
          filteredOrders={filteredOrders}
          setFilteredOrders={setFilteredOrders}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          setDetailModalData={setDetailModalData}
          setDetailModalOpen={setDetailModalOpen}
          updateOrderStatus={updateOrderStatus}
          getStatusColor={getStatusColor}
          isAdmin={isAdmin}
          setHistoryModalData={setHistoryModalData}
          setHistoryModalOpen={setHistoryModalOpen}
  />
  )}
  {tab === 'contact' && (
  <ContactAdminTab />
  )}
  {tab === 'notice' && (
  <NoticeAdminTab />
  )}
  </main>
  );
}
  // 탭 상태: 주문, 문의, 공지/뉴스
  const [tab, setTab] = useState<'orders' | 'contact' | 'notice'>('orders');
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


  // 주문 상태 색상 반환 함수
  function getStatusColor(status: string) {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'processing': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-gray-200 text-gray-500';
      default: return 'bg-gray-100 text-gray-800';
    }
  }

  // 주문 상태 변경 함수 (실제 Firestore 연동 필요)
  async function updateOrderStatus(orderId: string, newStatus: Order['status']) {
    // TODO: Firestore 연동
    setOrders((prev) => prev.map((o) => o.id === orderId ? { ...o, status: newStatus } : o));
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* 탭 네비게이션 */}
      <div className="flex gap-4 mb-8">
        <button
          className={`px-4 py-2 rounded-t-lg font-semibold border-b-2 ${tab === 'orders' ? 'border-blue-600 text-blue-600 bg-white' : 'border-transparent text-gray-500 bg-gray-50'}`}
          onClick={() => setTab('orders')}
        >주문 관리</button>
        <button
          className={`px-4 py-2 rounded-t-lg font-semibold border-b-2 ${tab === 'contact' ? 'border-blue-600 text-blue-600 bg-white' : 'border-transparent text-gray-500 bg-gray-50'}`}
          onClick={() => setTab('contact')}
        >문의 관리</button>
        <button
          className={`px-4 py-2 rounded-t-lg font-semibold border-b-2 ${tab === 'notice' ? 'border-blue-600 text-blue-600 bg-white' : 'border-transparent text-gray-500 bg-gray-50'}`}
          onClick={() => setTab('notice')}
        >공지/뉴스 관리</button>
      </div>

      {/* 탭별 내용 */}
      {tab === 'orders' && (
        <div className="bg-white rounded-lg shadow p-6">
          {/* 주문 테이블 */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">회사명/담당자</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">이메일/연락처</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">장비/수량</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">설치 예정일</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">상태</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">접수일</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">이력</th>
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

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
        </div>
      )}

      {tab === 'contact' && (
        <ContactAdminTab />
      )}
      {tab === 'notice' && (
        <NoticeAdminTab />
      )}
    </main>
  );

// 문의 관리 탭 컴포넌트 (UI/구조만, 가상 데이터)
function ContactAdminTab() {
  const [contacts, setContacts] = useState([
    { id: '1', name: '홍길동', email: 'hong@test.com', subject: '견적 문의', message: '제품 견적 요청합니다.', status: '미처리', createdAt: '2025-09-10' },
    { id: '2', name: 'Jane', email: 'jane@email.com', subject: '기술 문의', message: '설치 관련 문의드립니다.', status: '처리완료', createdAt: '2025-09-09' },
    { id: '3', name: '김철수', email: 'kim@test.com', subject: 'A/S 요청', message: '장비 고장으로 A/S 요청합니다.', status: '미처리', createdAt: '2025-09-08' },
  ]);
  const [selected, setSelected] = useState<any|null>(null);

  function toggleStatus(id: string) {
    setContacts(prev => prev.map(c => c.id === id ? { ...c, status: c.status === '미처리' ? '처리완료' : '미처리' } : c));
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-bold mb-4">문의 목록</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">이름</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">이메일</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">제목</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">상태</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">날짜</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">관리</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {contacts.map((c) => (
              <tr key={c.id} className="hover:bg-blue-50 cursor-pointer">
                <td className="px-4 py-2" onClick={() => setSelected(c)}>{c.name}</td>
                <td className="px-4 py-2" onClick={() => setSelected(c)}>{c.email}</td>
                <td className="px-4 py-2" onClick={() => setSelected(c)}>{c.subject}</td>
                <td className="px-4 py-2">
                  <span className={`px-2 py-1 text-xs rounded-full font-semibold ${c.status === '처리완료' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-800'}`}>{c.status}</span>
                </td>
                <td className="px-4 py-2 text-xs text-gray-500" onClick={() => setSelected(c)}>{c.createdAt}</td>
                <td className="px-4 py-2">
                  <button
                    className={`px-2 py-1 text-xs rounded ${c.status === '처리완료' ? 'bg-gray-200 text-gray-500' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                    onClick={() => toggleStatus(c.id)}
                  >{c.status === '처리완료' ? '미처리로' : '처리완료'}</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 문의 상세 모달 */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative animate-fadeIn">
            <h4 className="text-lg font-bold mb-4">문의 상세 정보</h4>
            <div className="mb-4 space-y-1 text-sm">
              <div><span className="font-semibold">이름:</span> {selected.name}</div>
              <div><span className="font-semibold">이메일:</span> {selected.email}</div>
              <div><span className="font-semibold">제목:</span> {selected.subject}</div>
              <div><span className="font-semibold">내용:</span> {selected.message}</div>
              <div><span className="font-semibold">상태:</span> <span className={`px-2 py-1 text-xs rounded-full font-semibold ${selected.status === '처리완료' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-800'}`}>{selected.status}</span></div>
              <div><span className="font-semibold">날짜:</span> {selected.createdAt}</div>
            </div>
            <div className="flex gap-2 mt-4">
              <button
                className={`flex-1 py-2 rounded ${selected.status === '처리완료' ? 'bg-gray-200 text-gray-500' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                onClick={() => { toggleStatus(selected.id); setSelected({ ...selected, status: selected.status === '처리완료' ? '미처리' : '처리완료' }); }}
              >{selected.status === '처리완료' ? '미처리로 변경' : '처리완료로 변경'}</button>
              <button
                className="flex-1 py-2 rounded bg-gray-100 text-gray-700 hover:bg-gray-200"
                onClick={() => setSelected(null)}
              >닫기</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

// 공지/뉴스 관리 탭 컴포넌트 (UI/구조만, 가상 데이터)
function NoticeAdminTab() {
  const [notices, setNotices] = useState([
    { id: '1', title: '신제품 출시 안내', author: '관리자', date: '2025-09-10', status: '게시' },
    { id: '2', title: '추석 연휴 휴무 안내', author: '관리자', date: '2025-09-05', status: '게시' },
    { id: '3', title: '홈페이지 리뉴얼', author: '관리자', date: '2025-08-30', status: '숨김' },
  ]);
  const [modal, setModal] = useState<{mode: 'add'|'edit', notice?: any}|null>(null);

  function handleAdd(newNotice: any) {
    setNotices(prev => [
      { ...newNotice, id: Date.now().toString(), author: '관리자', date: new Date().toISOString().slice(0,10), status: '게시' },
      ...prev
    ]);
    setModal(null);
  }
  function handleEdit(edited: any) {
    setNotices(prev => prev.map(n => n.id === edited.id ? { ...n, ...edited } : n));
    setModal(null);
  }
  function handleDelete(id: string) {
    setNotices(prev => prev.filter(n => n.id !== id));
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold">공지/뉴스 목록</h3>
        <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700" onClick={() => setModal({mode:'add'})}>+ 새 공지 등록</button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">제목</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">작성자</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">날짜</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">상태</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">관리</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {notices.map((n) => (
              <tr key={n.id} className="hover:bg-blue-50">
                <td className="px-4 py-2">{n.title}</td>
                <td className="px-4 py-2">{n.author}</td>
                <td className="px-4 py-2 text-xs text-gray-500">{n.date}</td>
                <td className="px-4 py-2">
                  <span className={`px-2 py-1 text-xs rounded-full font-semibold ${n.status === '게시' ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-500'}`}>{n.status}</span>
                </td>
                <td className="px-4 py-2 flex gap-2">
                  <button className="px-2 py-1 text-xs rounded bg-gray-100 text-gray-700 hover:bg-gray-200" onClick={() => setModal({mode:'edit', notice:n})}>수정</button>
                  <button className="px-2 py-1 text-xs rounded bg-red-100 text-red-600 hover:bg-red-200" onClick={() => handleDelete(n.id)}>삭제</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 등록/수정 모달 */}
      {modal && (
        <NoticeModal
          mode={modal.mode}
          notice={modal.notice}
          onSave={modal.mode === 'add' ? handleAdd : handleEdit}
          onClose={() => setModal(null)}
        />
      )}
    </div>
  );
}

// 공지 등록/수정 모달 (UI/구조만)
function NoticeModal({ mode, notice, onSave, onClose }: { mode: 'add'|'edit', notice?: any, onSave: (n:any)=>void, onClose: ()=>void }) {
  const [title, setTitle] = useState(notice?.title || '');
  const [status, setStatus] = useState(notice?.status || '게시');
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative animate-fadeIn">
        <h4 className="text-lg font-bold mb-4">{mode === 'add' ? '새 공지 등록' : '공지 수정'}</h4>
        <div className="mb-4 space-y-2">
          <div>
            <label className="block text-sm font-semibold mb-1">제목</label>
            <input className="w-full border rounded px-3 py-2" value={title} onChange={e=>setTitle(e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">상태</label>
            <select className="w-full border rounded px-3 py-2" value={status} onChange={e=>setStatus(e.target.value)}>
              <option value="게시">게시</option>
              <option value="숨김">숨김</option>
            </select>
          </div>
        </div>
        <div className="flex gap-2 mt-4">
          <button
            className="flex-1 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
            onClick={()=>{
              if(title.trim()) onSave({ ...(notice||{}), title, status });
            }}
          >저장</button>
          <button
            className="flex-1 py-2 rounded bg-gray-100 text-gray-700 hover:bg-gray-200"
            onClick={onClose}
          >닫기</button>
        </div>
      </div>
    </div>
  );
}

