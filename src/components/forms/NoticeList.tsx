"use client";
import React, { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, query, orderBy, getDocs, deleteDoc, doc } from "firebase/firestore";

interface NoticeItem {
  id: string;
  type: string;
  date: string;
  title: string;
  desc: string;
}

export default function NoticeList({ admin = false }: { admin?: boolean }) {
  const [notices, setNotices] = useState<NoticeItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function fetchNotices() {
    setLoading(true);
    setError("");
    try {
      if (!db) throw new Error("Firebase DB 미초기화");
      const q = query(collection(db, "notice"), orderBy("date", "desc"));
      const snap = await getDocs(q);
      setNotices(snap.docs.map(doc => ({ id: doc.id, ...doc.data() } as NoticeItem)));
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "";
      setError("공지/뉴스 불러오기 실패: " + (errorMessage || ""));
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { fetchNotices(); }, []);

  async function handleDelete(id: string) {
    if (!window.confirm("정말 삭제하시겠습니까?")) return;
    try {
      await deleteDoc(doc(collection(db!, "notice"), id));
      setNotices(notices.filter(n => n.id !== id));
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "";
      alert("삭제 실패: " + (errorMessage || ""));
    }
  }

  if (loading) return <div className="text-blue-600">불러오는 중...</div>;
  if (error) return <div className="text-red-600">{error}</div>;
  if (!notices.length) return <div className="text-gray-500">등록된 공지/뉴스가 없습니다.</div>;

  return (
    <div className="space-y-4">
      {notices.map(n => (
        <div key={n.id} className="group flex items-start gap-4 bg-white rounded-xl shadow-md p-6 border border-blue-100 hover:bg-blue-50 transition cursor-pointer">
          <div className="flex-shrink-0 mt-1">
            <span className={`inline-flex items-center justify-center w-10 h-10 rounded-full ${n.type === '공지' ? 'bg-blue-100 text-blue-700' : n.type === '뉴스' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
              {n.type === '공지' ? '공지' : n.type === '뉴스' ? '뉴스' : '업데이트'}
            </span>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className={`text-xs font-bold rounded px-2 py-0.5 ${n.type === '공지' ? 'text-blue-600 bg-blue-50' : n.type === '뉴스' ? 'text-green-600 bg-green-50' : 'text-yellow-600 bg-yellow-50'}`}>{n.type}</span>
              <span className="text-xs text-gray-400">{n.date}</span>
            </div>
            <h3 className="text-lg font-semibold text-blue-900 group-hover:underline">{n.title}</h3>
            <p className="text-gray-600 text-sm mt-1">{n.desc}</p>
          </div>
          {admin && (
            <button onClick={() => handleDelete(n.id)} className="ml-2 text-xs text-red-500 hover:underline">삭제</button>
          )}
        </div>
      ))}
    </div>
  );
}
