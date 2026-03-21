"use client";

import Image from "next/image";

// ─────────────────────────────────────────────────────────────
//  ⚠️  IMPORTANT: Save the seesaw kids photo into your project as:
//       /public/school.jpg
//  (Your seesaw image is already saved as school.jpg ✅
//   and drop it inside your  /public  folder)
// ─────────────────────────────────────────────────────────────

const HEADING_COLORS = ["#e53e3e","#d97706","#16a34a","#2563eb","#7c3aed","#db2777"];

function MulticolorText({ text }) {
  return text.split("").map((ch, i) => (
    <span key={i} style={{ color: HEADING_COLORS[i % HEADING_COLORS.length] }}>
      {ch}
    </span>
  ));
}

const PROGRAMS = [
  { label: "Play Group", color: "#f5a623", icon: "🎨" },
  { label: "Nursery",    color: "#4ab3e8", icon: "📚" },
  { label: "Junior KG",  color: "#7c3aed", icon: "✏️" },
  { label: "Senior KG",  color: "#16a34a", icon: "🎓" },
];

const STATS = [
  { num: "500+", label: "Happy Kids",      color: "#e53e3e" },
  { num: "15+",  label: "Expert Teachers", color: "#7c3aed" },
  { num: "10+",  label: "Years of Joy",    color: "#16a34a" },
];

const CONFETTI = [
  ["top-10 left-16",    "bg-red-400",    "6s",  "0s"],
  ["top-1/4 left-1/3",  "bg-yellow-400", "8s",  "1s"],
  ["top-16 right-24",   "bg-green-400",  "7s",  "0.5s"],
  ["top-1/3 right-16",  "bg-blue-400",   "9s",  "2s"],
  ["top-2/3 left-12",   "bg-purple-400", "5s",  "1.5s"],
  ["top-1/2 right-8",   "bg-orange-400", "10s", "0.8s"],
];

export default function RenownedSection() {
  return (
    <section className="relative w-full overflow-hidden" style={{ fontFamily: "'Nunito', sans-serif" }}>

      {/* ═══════════════════════════════════
          UPPER SECTION — soft indigo/purple
      ═══════════════════════════════════ */}
      <div className="relative bg-gradient-to-br from-indigo-50 via-purple-50 to-yellow-50 pt-20 pb-20 overflow-hidden">

        {/* BG blobs */}
        <div className="absolute -top-24 -right-16 w-[440px] h-[440px] rounded-full bg-yellow-300/25 blur-[90px] pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full bg-purple-300/30 blur-[70px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 w-56 h-56 rounded-full bg-sky-200/20 blur-[60px] pointer-events-none"
          style={{ animation: "blobDrift 9s ease-in-out infinite alternate" }} />

        {/* Confetti dots */}
        {CONFETTI.map(([pos, bg, dur, delay], i) => (
          <span key={i}
            className={`absolute ${pos} w-3 h-3 rounded-full ${bg} opacity-70 pointer-events-none`}
            style={{ animation: `floatDot ${dur} ease-in-out infinite`, animationDelay: delay }}
          />
        ))}

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── LEFT — Text content ── */}
          <div className="flex flex-col gap-6" style={{ animation: "slideInLeft 0.85s cubic-bezier(0.22,1,0.36,1) both" }}>

            {/* Yellow pamphlet-style badge */}
            <span
              className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 text-xs font-extrabold uppercase tracking-widest px-5 py-2.5 rounded-full w-fit shadow-lg shadow-yellow-300/60 border-2 border-yellow-500"
              style={{ animation: "popIn 0.6s cubic-bezier(0.34,1.56,0.64,1) 0.2s both" }}
            >
              🏫 Pre-school · Day Care · Activity Center
            </span>

            {/* Multicolor heading */}
            <div style={{ animation: "fadeUp 0.7s ease 0.35s both" }}>
              <h2
                className="font-extrabold leading-tight"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontFamily: "'Baloo 2', cursive" }}
              >
                <span style={{ color: "#4c1d95" }}>Our </span>
                <MulticolorText text="Renowned" />
                <br />
                <span style={{ color: "#1e3a5f" }}>Programs</span>
              </h2>
              {/* Animated yellow underline */}
              <div
                className="mt-2 h-[5px] w-52 rounded-full bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400"
                style={{ animation: "growLine 0.9s cubic-bezier(0.22,1,0.36,1) 0.9s both", transform: "scaleX(0)", transformOrigin: "left" }}
              />
            </div>

            {/* Italic tagline — just like pamphlet */}
            <p
              className="italic font-bold text-purple-600 text-lg"
              style={{ fontFamily: "'Baloo 2', cursive", animation: "fadeUp 0.6s ease 0.45s both" }}
            >
              "Brings Out The Best in You..."
            </p>

            {/* Description */}
            <p
              className="text-gray-600 text-base leading-relaxed max-w-lg"
              style={{ animation: "fadeUp 0.7s ease 0.55s both" }}
            >
              From engaging activities to innovative teaching methods, our programs are
              designed to unlock the full potential of every child — nurturing curiosity,
              creativity, and confidence from day one.
            </p>

            {/* Program list — pamphlet-style left colour bar */}
            <div className="flex flex-col gap-3" style={{ animation: "fadeUp 0.7s ease 0.65s both" }}>
              <p className="text-xs font-extrabold text-purple-700 uppercase tracking-widest">
                ✨ Quality Classes for Kids
              </p>
              {PROGRAMS.map((p, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-xl px-4 py-3 border border-white shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                  style={{ animation: `fadeUp 0.5s ease ${0.7 + i * 0.1}s both` }}
                >
                  <div className="w-1.5 h-8 rounded-full flex-shrink-0" style={{ background: p.color }} />
                  <span className="text-xl">{p.icon}</span>
                  <span
                    className="font-extrabold text-gray-800 text-base"
                    style={{ fontFamily: "'Baloo 2', cursive" }}
                  >
                    {p.label}
                  </span>
{/*                   <span
                    className="ml-auto text-xs font-bold px-3 py-1 rounded-full text-white"
                    style={{ background: p.color }}
                  >
                    Enrolling
                  </span> */}
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="flex items-center gap-4 flex-wrap" style={{ animation: "fadeUp 0.7s ease 0.85s both" }}>
              {STATS.map((s, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center bg-white/80 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-lg border border-white/90 min-w-[90px]"
                >
                  <span
                    className="text-2xl font-extrabold leading-none"
                    style={{ color: s.color, fontFamily: "'Baloo 2', cursive" }}
                  >
                    {s.num}
                  </span>
                  <span className="text-[0.68rem] font-bold text-gray-400 uppercase tracking-wide text-center whitespace-nowrap">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 pt-1" style={{ animation: "fadeUp 0.7s ease 0.95s both" }}>
              <a
                href="/contactus"
                className="group inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-extrabold text-base px-8 py-4 rounded-full shadow-lg shadow-yellow-300/60 border-2 border-yellow-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-95"
              >
                📋 Enroll Now
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="tel:7989523822"
                className="inline-flex items-center gap-2 bg-purple-700 hover:bg-purple-800 text-white font-extrabold text-base px-7 py-4 rounded-full shadow-lg shadow-purple-400/40 transition-all duration-300 hover:-translate-y-1 active:scale-95"
              >
                📞 7989523822
              </a>
            </div>
          </div>

          {/* ── RIGHT — Seesaw image ── */}
          <div
            className="relative flex justify-center items-end min-h-[420px]"
            style={{ animation: "slideInRight 0.85s cubic-bezier(0.22,1,0.36,1) 0.2s both" }}
          >
            {/* Glow behind image */}
            <div
              className="absolute w-[420px] h-[420px] rounded-full bg-gradient-to-br from-yellow-300/40 via-purple-200/25 to-sky-200/20 blur-2xl pointer-events-none"
              style={{ animation: "pulseGlow 4s ease-in-out infinite alternate" }}
            />

            {/* Floating emoji decorators */}
            <span className="absolute top-2 left-6 text-3xl pointer-events-none select-none z-10"
              style={{ animation: "flutter 5s ease-in-out infinite alternate" }}>🌟</span>
            <span className="absolute top-6 right-6 text-2xl pointer-events-none select-none z-10"
              style={{ animation: "bobble 3.5s ease-in-out infinite alternate" }}>🎈</span>
            <span className="absolute top-1/4 left-0 text-2xl pointer-events-none select-none z-10"
              style={{ animation: "twinkle 2.5s ease-in-out infinite alternate" }}>✨</span>
            <span className="absolute bottom-[32%] right-2 text-2xl pointer-events-none select-none z-10"
              style={{ animation: "flutter 6s ease-in-out infinite alternate-reverse" }}>🎉</span>
            <span className="absolute bottom-[22%] left-2 text-xl pointer-events-none select-none z-10"
              style={{ animation: "heartbeat 2s ease-in-out infinite alternate" }}>💛</span>

            {/* ── THE SEESAW IMAGE ── */}
            <div
              className="relative z-10 w-full max-w-[500px]"
              style={{ animation: "seesawTilt 3s ease-in-out infinite alternate" }}
            >
              <Image
                src="/hero.png"
                alt="Kids playing at Little Berries playschool"
                width={500}
                height={400}
                className="w-full h-auto object-contain drop-shadow-2xl" style={{ width: "100%", height: "auto" }}
                priority
              />
            </div>

            {/* Floating award card */}
            <div
              className="absolute top-4 -left-6 flex items-center gap-3 bg-white/95 backdrop-blur-md border-2 border-yellow-300 rounded-2xl px-4 py-3 shadow-xl shadow-yellow-200/50 z-20"
              style={{ animation: "cardFloat 4s ease-in-out infinite alternate" }}
            >
              <span className="text-2xl">🌟</span>
              <div>
                <div className="font-extrabold text-gray-800 text-sm leading-tight" style={{ fontFamily: "'Baloo 2', cursive" }}>
                  Best Playschool
                </div>
{/*                 <div className="text-[0.68rem] text-purple-600 font-bold">2024 Award</div> */}
              </div>
            </div>

            {/* Floating CCTV card */}
            <div
              className="absolute bottom-[30%] -right-4 flex items-center gap-3 bg-purple-700 text-white rounded-2xl px-4 py-3 shadow-xl z-20"
              style={{ animation: "cardFloat 4s ease-in-out infinite alternate-reverse", animationDelay: "1.5s" }}
            >
              <span className="text-xl">📹</span>
              <div>
                <div className="font-extrabold text-sm leading-tight" style={{ fontFamily: "'Baloo 2', cursive" }}>CCTV Monitored</div>
                <div className="text-[0.68rem] text-yellow-300 font-bold">Safe & Secure</div>
              </div>
            </div>

            {/* Admissions open pill — bottom centre */}
            <div
              className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-20"
              style={{ animation: "popIn 0.7s cubic-bezier(0.34,1.56,0.64,1) 1.1s both" }}
            >
              {(() => {
                const year = new Date().getFullYear();
                const nextYear = (year + 1).toString().slice(-2);
                return (
                  <div
                    className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 text-white font-extrabold text-sm px-6 py-3 rounded-full shadow-xl shadow-red-300/50 border-2 border-white whitespace-nowrap"
                    style={{ fontFamily: "'Baloo 2', cursive", animation: "admissionPulse 2s ease-in-out infinite alternate" }}
                  >
                    🎒 Admissions Open {year}–{nextYear}!
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════
          BOTTOM BAND — deep purple pamphlet
      ═══════════════════════════════════ */}


      {/* ── All custom keyframes ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@700;800&family=Nunito:wght@400;600;700;800;900&display=swap');

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-52px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(52px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.5); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes growLine {
          to { transform: scaleX(1); }
        }
        @keyframes blobDrift {
          from { transform: translate(-50%,-50%) scale(1); }
          to   { transform: translate(-50%,-50%) scale(1.12); }
        }
        @keyframes floatDot {
          0%,100% { transform: translateY(0) rotate(0deg);      opacity: 0.7; }
          50%     { transform: translateY(-22px) rotate(180deg); opacity: 1; }
        }
        @keyframes seesawTilt {
          from { transform: rotate(-2.5deg) translateY(0px); }
          to   { transform: rotate(2.5deg)  translateY(-12px); }
        }
        @keyframes pulseGlow {
          from { transform: scale(1);    opacity: 0.55; }
          to   { transform: scale(1.08); opacity: 0.9; }
        }
        @keyframes flutter {
          0%   { transform: translate(0,0)       rotate(-8deg)  scale(1);    }
          33%  { transform: translate(10px,-8px)  rotate(6deg)   scale(1.06); }
          66%  { transform: translate(-6px,10px)  rotate(-4deg)  scale(0.94); }
          100% { transform: translate(8px,4px)    rotate(10deg)  scale(1);    }
        }
        @keyframes bobble {
          from { transform: translateY(0)    scale(1);   }
          to   { transform: translateY(-11px) scale(1.1); }
        }
        @keyframes twinkle {
          from { transform: scale(1)    rotate(0deg);  opacity: 0.6; }
          to   { transform: scale(1.55) rotate(22deg); opacity: 1;   }
        }
        @keyframes heartbeat {
          from { transform: scale(1);    opacity: 0.7; }
          to   { transform: scale(1.35); opacity: 1;   }
        }
        @keyframes cardFloat {
          from { transform: translateY(0)    rotate(-1deg); }
          to   { transform: translateY(-9px) rotate(1.2deg); }
        }
        @keyframes admissionPulse {
          from { transform: scale(1);    box-shadow: 0 0 0 0   rgba(239,68,68,0.55); }
          to   { transform: scale(1.04); box-shadow: 0 0 0 12px rgba(239,68,68,0); }
        }
      `}</style>
    </section>
  );
}