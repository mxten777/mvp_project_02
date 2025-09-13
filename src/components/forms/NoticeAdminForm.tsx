"use client";
import React, { useRef, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export default function NoticeAdminForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);
    try {
      const form = formRef.current;
      if (!form) throw new Error("폼 참조 오류");
      const formData = new FormData(form);
      const data = {
        type: formData.get("type") as string,
        date: formData.get("date") as string,
        title: formData.get("title") as string,
        desc: formData.get("desc") as string,
        createdAt: Timestamp.now(),
      };
      if (!db) throw new Error("Firebase DB 미초기화");
      await addDoc(collection(db, "notice"), data);
      setSuccess(true);
      formRef.current?.reset();
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "알 수 없는 오류";
      setError("등록 중 오류가 발생했습니다." + (errorMessage ? ` (${errorMessage})` : ""));
    } finally {
      setLoading(false);
    }
  }

  return (
    <form ref={formRef} className="space-y-4 bg-blue-50 rounded-xl p-6 border border-blue-100 mb-8" onSubmit={handleSubmit}>
      <div className="flex gap-2">
        <select name="type" className="border rounded px-2 py-1" required>
          <option value="공지">공지</option>
          <option value="뉴스">뉴스</option>
          <option value="업데이트">업데이트</option>
        </select>
        <input type="date" name="date" className="border rounded px-2 py-1" required />
      </div>
      <input type="text" name="title" className="w-full border rounded px-3 py-2" placeholder="제목" required />
      <textarea name="desc" className="w-full border rounded px-3 py-2" placeholder="내용" rows={2} required />
      <button type="submit" disabled={loading} className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-2 rounded transition disabled:opacity-60 disabled:cursor-not-allowed">
        {loading ? "등록 중..." : "공지/뉴스 등록"}
      </button>
      {success && <div className="text-green-600 text-sm mt-2">등록 완료</div>}
      {error && <div className="text-red-600 text-sm mt-2">{error}</div>}
    </form>
  );
}
