"use client";
import React from "react";

interface PortfolioDetail {
  logo: string;
  name: string;
  label: string;
  desc: string;
  detail: string;
}

interface PortfolioModalProps {
  open: boolean;
  onClose: () => void;
  data: PortfolioDetail | null;
}

export default function PortfolioModal({ open, onClose, data }: PortfolioModalProps) {
  if (!open || !data) return null;
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-fade-in">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-blue-700 dark:hover:text-blue-300 text-2xl">&times;</button>
        <div className="flex flex-col items-center">
          <div className="bg-blue-50 rounded-full p-4 mb-4">
            <img src={data.logo} alt={data.name} className="w-16 h-16" />
          </div>
          <span className="inline-block text-xs font-bold text-blue-600 bg-blue-50 rounded px-3 py-1 mb-2 tracking-widest">{data.label}</span>
          <h3 className="text-2xl font-bold mb-2 text-blue-800 dark:text-blue-100">{data.name}</h3>
          <p className="text-gray-700 dark:text-gray-200 text-base mb-4">{data.desc}</p>
          <div className="text-sm text-gray-500 dark:text-gray-300 whitespace-pre-line text-center">{data.detail}</div>
        </div>
      </div>
    </div>
  );
}
