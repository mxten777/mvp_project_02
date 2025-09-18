export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex flex-col items-center justify-center py-14 border-t border-blue-950 px-2 sm:px-4">
      <div className="w-full max-w-3xl rounded-3xl shadow-2xl border border-blue-200/60 bg-white/80 backdrop-blur-lg p-6 sm:p-10 flex flex-col md:flex-row gap-8 md:gap-12 items-stretch overflow-hidden">
        {/* Left: Logo & CEO (vertical, no overflow) */}
        <div className="flex-1 flex flex-col items-center md:items-start justify-center gap-6 min-w-[180px] max-w-xs break-keep">
          <div className="flex flex-col items-center md:items-start gap-2 mb-2">
            <div className="flex gap-1">
              <span className="text-4xl sm:text-5xl font-extrabold tracking-tight" style={{ color: '#e60012' }}>M</span>
              <span className="text-4xl sm:text-5xl font-extrabold tracking-tight" style={{ color: '#0051c7' }}>S</span>
              <span className="text-4xl sm:text-5xl font-extrabold tracking-tight" style={{ color: '#222' }}>S</span>
            </div>
            <span className="text-2xl sm:text-3xl font-bold text-blue-900 whitespace-pre-line leading-tight text-center md:text-left">만송시스템(주)</span>
          </div>
          <div className="flex items-center gap-2 text-blue-800 text-base sm:text-lg font-semibold whitespace-nowrap">
            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            임 영무 / CEO
          </div>
        </div>
        {/* Divider for desktop */}
        <div className="hidden md:block w-px bg-blue-200/60 mx-2 my-2"></div>
        {/* Right: 연락처 & 주소 (no overflow, word-break) */}
        <div className="flex-1 flex flex-col items-center md:items-start justify-center gap-5 text-blue-900 text-base min-w-[200px] break-words">
          <div className="flex items-start gap-2 md:justify-start justify-center w-full">
            <svg className="w-5 h-5 text-blue-400 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h7.5" /><path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5l-9 7.5-9-7.5" /></svg>
            <div className="flex flex-col gap-0.5 w-full text-left">
              <a href="mailto:limyoungmu@hanmail.net" className="hover:text-blue-600 font-medium break-all no-underline">limyoungmu@hanmail.net</a>
              <a href="mailto:limyoungmoo@mansong.kr" className="hover:text-blue-600 font-medium break-all no-underline">limyoungmoo@mansong.kr</a>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 01-2.18 2A19.72 19.72 0 013.08 5.18 2 2 0 015 3h3a2 2 0 012 1.72c.13.81.36 1.6.7 2.34a2 2 0 01-.45 2.11L9.03 10.97a16 16 0 006 6l1.8-1.22a2 2 0 012.11-.45c.74.34 1.53.57 2.34.7A2 2 0 0122 16.92z" /></svg>
            <span className="font-semibold text-blue-700 break-all">010-5264-8027</span>
          </div>
          <div className="flex items-start gap-2 mt-2 flex-wrap">
            <svg className="w-5 h-5 text-blue-400 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 12.414a2 2 0 00-2.828 0l-4.243 4.243A8 8 0 1116 8a7.963 7.963 0 01-1.343 4.657z" /></svg>
            <div className="flex flex-col text-blue-900 gap-0.5 whitespace-pre-line">
              <span className="font-semibold text-blue-700 text-base mb-1">주소</span>
              <span>(31471) 충남 아산시 배방읍 광장로 210, B212호.</span>
              <span>(44715) 울산광역시 남구 화합로 162, 나인파크 906호</span>
              <span>NinePark 906, 162 Hwahap-ro, Nam-gu, Ulsan, Korea</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-3xl text-center mt-8">
        <p className="text-xs text-blue-300 leading-relaxed tracking-wide">만송시스템(주) &copy; {new Date().getFullYear()}. All rights reserved.</p>
      </div>
    </footer>
  );
}
