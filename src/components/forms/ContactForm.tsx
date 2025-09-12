"use client";
import React, { useRef, useState } from "react";

type ContactFormProps = {
  lang?: 'ko' | 'en';
};

export default function ContactForm({ lang = 'ko' }: ContactFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // 다국어 텍스트
  const t = {
    ko: {
      name: "이름",
      email: "이메일",
      message: "문의 내용",
      namePh: "이름을 입력하세요",
      emailPh: "이메일 주소",
      messagePh: "문의하실 내용을 입력해 주세요",
      sending: "전송 중...",
      send: "문의 보내기",
      success: "문의가 정상적으로 접수되었습니다.",
      spamFail: "스팸 방지 인증에 실패했습니다.",
      error: "전송 중 오류가 발생했습니다. 다시 시도해 주세요.",
    },
    en: {
      name: "Name",
      email: "Email",
      message: "Message",
      namePh: "Enter your name",
      emailPh: "Email address",
      messagePh: "Type your inquiry here",
      sending: "Sending...",
      send: "Send Inquiry",
      success: "Your inquiry has been received.",
      spamFail: "Failed spam verification.",
      error: "An error occurred. Please try again.",
    },
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);
    // reCAPTCHA v2 invisible (실제 연동 시 sitekey 교체)
    // 관리자 알림/이메일 발송 구조 (실제 연동 시 fetch("/api/contact", ...) 등 구현)
    try {
      // 1. reCAPTCHA 검증
      // @ts-ignore
      if (window.grecaptcha) {
        // @ts-ignore
        await window.grecaptcha.ready();
        // @ts-ignore
        const token = await window.grecaptcha.execute("your_site_key", { action: "submit" });
        if (!token) {
          setError(t[lang].spamFail);
          setLoading(false);
          return;
        }
      }
      // 2. 이메일 발송 (예: EmailJS, 백엔드 API 등)
      // 3. 관리자 알림 (예: 슬랙, 카카오톡, SMS 등 연동 가능)
      await new Promise((res) => setTimeout(res, 1200));
      setSuccess(true);
      formRef.current?.reset();
    } catch {
      setError(t[lang].error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form ref={formRef} className="space-y-5" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-blue-900 mb-1">{t[lang].name}</label>
        <input type="text" id="name" name="name" required className="w-full border border-blue-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder={t[lang].namePh} />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-blue-900 mb-1">{t[lang].email}</label>
        <input type="email" id="email" name="email" required className="w-full border border-blue-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder={t[lang].emailPh} />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-blue-900 mb-1">{t[lang].message}</label>
        <textarea id="message" name="message" rows={4} required className="w-full border border-blue-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder={t[lang].messagePh} />
      </div>
      {/* reCAPTCHA v2 invisible 스크립트 */}
      <div id="recaptcha-container"></div>
      <button type="submit" disabled={loading} className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 rounded-lg transition disabled:opacity-60 disabled:cursor-not-allowed">
        {loading ? t[lang].sending : t[lang].send}
      </button>
      {success && <div className="text-green-600 text-sm mt-2">{t[lang].success}</div>}
      {error && <div className="text-red-600 text-sm mt-2">{error}</div>}
    </form>
  );
}
