// START - بوابة العملاء
"use client";
import { useState } from "react";

export default function Home() {
  const [caseId, setCaseId] = useState("");

  const goToCase = () => {
    if (!caseId.trim()) return alert("ادخل رقم القضية");
    window.location.href = `/case-${caseId.trim()}`;
  };

  return (
    <div dir="rtl" className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center">
      {/* HEADER */}
      <header className="w-full max-w-6xl p-6 flex justify-between items-center border-b border-yellow-600/20">
        <h1 className="text-xl font-bold text-yellow-500">AL-BASHIR LEGAL AI · 1448</h1>
        <span className="text-xs bg-green-900/30 text-green-400 px-3 py-1 rounded-full border border-green-500/20">● Live on Vercel</span>
      </header>

      {/* HERO */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 py-20">
        <div className="text-6xl mb-6">⚖️</div>
        <h2 className="text-4xl md:text-5xl font-black mb-4">
          العدالة بالذكاء <span className="text-yellow-500">من مكة إلى تورونتو</span>
        </h2>
        <p className="text-gray-400 max-w-xl mb-10">
          نظام إدارة قضايا خاص، محمي، لا يوجد وصول عام أو فهرسة لمحركات البحث
        </p>

        {/* بوابة العملاء - CLIENT PORTAL */}
        <div className="w-full max-w-md bg-[#151515] border border-yellow-600/20 rounded-2xl p-6 shadow-2xl">
          <h3 className="text-lg font-bold mb-1">بوابة العملاء / Client Portal</h3>
          <p className="text-xs text-gray-500 mb-4">ادخل رقم قضيتك للدخول الخاص</p>

          <div className="flex gap-2">
            <input
              value={caseId}
              onChange={(e) => setCaseId(e.target.value)}
              placeholder="1448"
              className="flex-1 bg-black border border-white/10 rounded-lg px-4 py-3 text-center outline-none focus:border-yellow-500"
            />
            <button
              onClick={goToCase}
              className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-lg hover:bg-yellow-400"
            >
              دخول
            </button>
          </div>

          <p className="text-[11px] text-gray-600 mt-3">مثال: 1448 → /case-1448</p>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="w-full py-8 text-center border-t border-yellow-500/10">
        <p className="text-sm text-gray-500">Engineered with ⚖️ from Mecca</p>
        <p className="text-lg font-bold text-yellow-500 mt-1">Built by Al-Bashir | البشير</p>
        <p className="text-xs text-gray-600 mt-2">Al-Bashir Legal AI - Private Access</p>
      </footer>
    </div>
  );
}
// END
