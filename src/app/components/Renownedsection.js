"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const HEADING_COLORS = ["#e53e3e","#d97706","#16a34a","#2563eb","#7c3aed","#db2777"];

function MulticolorText({ text }) {
  return text.split("").map((ch, i) => (
    <span key={i} className="mc-letter" style={{ color: HEADING_COLORS[i % HEADING_COLORS.length], animationDelay: `${0.9 + i * 0.06}s` }}>
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
  { cls: "top-10 left-4",    bg: "#f87171", dur: "6s",  delay: "0s",   sz: "10px" },
  { cls: "top-1/4 left-1/3", bg: "#fbbf24", dur: "8s",  delay: "1s",   sz: "8px"  },
  { cls: "top-16 right-6",   bg: "#4ade80", dur: "7s",  delay: "0.5s", sz: "12px" },
  { cls: "top-1/3 right-4",  bg: "#60a5fa", dur: "9s",  delay: "2s",   sz: "8px"  },
  { cls: "top-2/3 left-6",   bg: "#c084fc", dur: "5s",  delay: "1.5s", sz: "10px" },
  { cls: "top-1/2 right-6",  bg: "#fb923c", dur: "10s", delay: "0.8s", sz: "7px"  },
];

function useInView(threshold = 0.05) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function CountUp({ target, inView }) {
  const [val, setVal] = useState(0);
  const num = parseInt(target);
  const suffix = target.replace(/[0-9]/g, "");
  useEffect(() => {
    if (!inView) return;
    let n = 0;
    const step = Math.ceil(num / 40);
    const t = setInterval(() => {
      n += step;
      if (n >= num) { setVal(num); clearInterval(t); } else setVal(n);
    }, 35);
    return () => clearInterval(t);
  }, [inView, num]);
  return <>{val}{suffix}</>;
}

export default function RenownedSection() {
  const [secRef, secInView]     = useInView(0.05);
  const [statsRef, statsInView] = useInView(0.1);
  const [hovProg, setHovProg]   = useState(null);

  const year     = new Date().getFullYear();
  const nextYear = (year + 1).toString().slice(-2);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@700;800&family=Nunito:wght@400;600;700;800;900&display=swap');

        /* ── Keyframes ─────────────────────────────── */
        @keyframes slideInLeft  { 0%{opacity:0;transform:translateX(-48px)} 60%{transform:translateX(5px)} 100%{opacity:1;transform:none} }
        @keyframes slideInRight { 0%{opacity:0;transform:translateX(48px)}  60%{transform:translateX(-5px)} 100%{opacity:1;transform:none} }
        @keyframes fadeUp       { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:none} }
        @keyframes popIn        { 0%{opacity:0;transform:scale(0.4) rotate(-8deg)} 70%{transform:scale(1.08) rotate(2deg)} 100%{opacity:1;transform:none} }
        @keyframes bounceIn     { 0%{opacity:0;transform:scale(0.65) translateY(12px)} 55%{opacity:1;transform:scale(1.06) translateY(-3px)} 75%{transform:scale(0.97)} 100%{transform:none} }
        @keyframes growLine     { 0%{transform:scaleX(0)} 60%{transform:scaleX(1.05)} 100%{transform:scaleX(1)} }
        @keyframes letterDrop   { 0%{opacity:0;transform:translateY(-20px) scale(0.7) rotate(-10deg)} 70%{transform:translateY(3px) scale(1.05) rotate(2deg)} 100%{opacity:1;transform:none} }
        @keyframes letterWave   { 0%,100%{transform:translateY(0)} 40%{transform:translateY(-10px) scale(1.15)} 70%{transform:translateY(3px)} }
        @keyframes blobPulse    { 0%,100%{transform:scale(1);opacity:.5;border-radius:60% 40% 55% 45%} 50%{transform:scale(1.08);opacity:.75;border-radius:45% 55% 40% 60%} }
        @keyframes floatDot     { 0%,100%{transform:translateY(0) rotate(0deg) scale(1);opacity:.7} 50%{transform:translateY(-20px) rotate(180deg) scale(1.15);opacity:1} }
        @keyframes floatDotAlt  { 0%,100%{transform:translate(0,0) rotate(0deg);opacity:.65} 50%{transform:translate(8px,-22px) rotate(220deg);opacity:1} }
        @keyframes seesaw       { 0%{transform:rotate(-2.5deg) translateY(0)} 50%{transform:rotate(0deg) translateY(-10px)} 100%{transform:rotate(2.5deg) translateY(-4px)} }
        @keyframes pulseGlow    { 0%,100%{opacity:.45;transform:translate(-50%,-50%) scale(1)} 50%{opacity:.85;transform:translate(-50%,-50%) scale(1.12)} }
        @keyframes flutter      { 0%{transform:translate(0,0) rotate(-8deg) scale(1)} 33%{transform:translate(7px,-12px) rotate(6deg) scale(1.1)} 66%{transform:translate(-5px,-8px) rotate(-4deg) scale(.95)} 100%{transform:translate(6px,-2px) rotate(10deg) scale(1)} }
        @keyframes bobble       { 0%,100%{transform:translateY(0) rotate(-4deg) scale(1)} 50%{transform:translateY(-12px) rotate(4deg) scale(1.12)} }
        @keyframes twinkle      { 0%,100%{transform:scale(1) rotate(0deg);opacity:.6} 50%{transform:scale(1.6) rotate(22deg);opacity:1} }
        @keyframes heartbeat    { 0%,100%{transform:scale(1)} 25%{transform:scale(1.35)} 50%{transform:scale(1.1)} 75%{transform:scale(1.4)} }
        @keyframes cardFloat    { 0%,100%{transform:translateY(0) rotate(-1.5deg);box-shadow:0 8px 24px rgba(0,0,0,.12)} 50%{transform:translateY(-10px) rotate(.5deg);box-shadow:0 18px 40px rgba(0,0,0,.16)} }
        @keyframes cardFloatAlt { 0%,100%{transform:translateY(0) rotate(1.2deg)} 50%{transform:translateY(-11px) rotate(-.8deg)} }
        @keyframes admPulse     { 0%,100%{box-shadow:0 0 0 0 rgba(239,68,68,.55);transform:translateX(-50%) scale(1)} 50%{box-shadow:0 0 0 12px rgba(239,68,68,0);transform:translateX(-50%) scale(1.04)} }
        @keyframes shimmer      { 0%{background-position:-200% center} 100%{background-position:200% center} }
        @keyframes rainbowGlow  { 0%,100%{box-shadow:0 0 22px 4px rgba(139,92,246,.4)} 33%{box-shadow:0 0 28px 6px rgba(251,191,36,.4)} 66%{box-shadow:0 0 22px 4px rgba(236,72,153,.4)} }
        @keyframes statPop      { 0%{opacity:0;transform:scale(.7) translateY(16px)} 65%{transform:scale(1.08) translateY(-3px)} 100%{opacity:1;transform:none} }
        @keyframes numTick      { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-3px)} }
        @keyframes spin3d       { from{transform:rotateY(0deg)} to{transform:rotateY(360deg)} }
        @keyframes conicSpin    { from{transform:translate(-50%,-50%) rotate(0deg)} to{transform:translate(-50%,-50%) rotate(360deg)} }

        /* ── Letter animation ── */
        .mc-letter { display:inline-block; animation:letterDrop .45s cubic-bezier(.34,1.56,.64,1) both; }
        .heading-wrap:hover .mc-letter { animation:letterWave .5s ease both; }

        /* ── Program rows ── */
        .prog-row { position:relative; overflow:hidden; transition:transform .25s cubic-bezier(.23,1,.32,1), box-shadow .25s ease; }
        .prog-row::before { content:''; position:absolute; inset:0; background:var(--c); transform:scaleX(0); transform-origin:left; transition:transform .35s cubic-bezier(.23,1,.32,1); border-radius:12px; z-index:0; opacity:.12; }
        .prog-row:hover::before, .prog-row:active::before { transform:scaleX(1); }
        .prog-row > * { position:relative; z-index:1; }
        .prog-row:hover  { transform:translateX(5px) scale(1.015); box-shadow:0 8px 24px rgba(0,0,0,.09); }
        .prog-row:active { transform:scale(.97); }

        /* ── CTA shimmer ── */
        .cta-yn {
          background:linear-gradient(110deg,#fbbf24 0%,#f59e0b 30%,#fff9 45%,#f59e0b 55%,#fbbf24 100%);
          background-size:300% 100%;
          animation:shimmer 3s linear infinite;
          transition:transform .25s ease, box-shadow .25s ease;
        }
        .cta-yn:hover  { transform:translateY(-3px) scale(1.03); box-shadow:0 14px 36px rgba(251,191,36,.55); }
        .cta-yn:active { transform:scale(.96); }

        /* ── Stat cards ── */
        .sc { transition:transform .25s cubic-bezier(.23,1,.32,1), box-shadow .25s ease; animation:statPop .6s cubic-bezier(.34,1.56,.64,1) both; }
        .sc:hover { transform:translateY(-5px) scale(1.07); box-shadow:0 14px 36px rgba(0,0,0,.11); }
        .sn { animation:numTick 1.8s ease-in-out infinite; }

        /* ══════════════════════════════════════
           MOBILE  ≤ 768px
        ══════════════════════════════════════ */
        @media (max-width:768px) {

          /* Outer section padding */
          .rn-section-bg { padding-top:36px !important; padding-bottom:52px !important; }

          /* Force flex column — image first, text second */
          .rn-grid {
            display:flex !important;
            flex-direction:column !important;
            gap:0 !important;
            padding:0 16px !important;
          }

          /* Image col */
          .rn-img-col {
            order:1;
            width:100% !important;
            min-height:unset !important;
            padding-bottom:48px;
            display:flex;
            justify-content:center;
            align-items:flex-end;
          }
          .rn-img-inner { max-width:240px !important; width:100%; margin:0 auto; }
          .rn-glow-ring { width:240px !important; height:240px !important; }

          /* Float cards — stay inside */
          .fc-left {
            left:4px !important; top:6px !important; right:auto !important;
            padding:6px 10px !important; gap:6px !important; border-radius:12px !important;
          }
          .fc-left .fc-icon  { font-size:15px !important; }
          .fc-left .fc-title { font-size:10px !important; }

          .fc-right {
            right:4px !important; bottom:28% !important; left:auto !important;
            padding:5px 9px !important; gap:5px !important; border-radius:12px !important;
          }
          .fc-right .fc-icon  { font-size:13px !important; }
          .fc-right .fc-title { font-size:9px !important; }
          .fc-right .fc-sub   { font-size:8px !important; }

          /* Admission badge */
          .adm-wrap { bottom:2px !important; }
          .adm-pill { font-size:10px !important; padding:6px 14px !important; }

          /* Emoji decorators */
          .de-tl { top:4px !important;   left:2px !important;  font-size:16px !important; }
          .de-tr { top:6px !important;   right:2px !important; font-size:14px !important; }
          .de-ml { top:30% !important;   left:0 !important;    font-size:13px !important; }
          .de-br { bottom:32% !important; right:0 !important;  font-size:13px !important; }
          .de-bl { bottom:20% !important; left:0 !important;   font-size:11px !important; }

          /* Text col */
          .rn-txt-col {
            order:2;
            width:100% !important;
            animation:fadeUp .7s ease .1s both !important;
          }

          /* Badge */
          .rn-badge { font-size:9px !important; padding:5px 11px !important; letter-spacing:.06em !important; }

          /* Heading */
          .rn-h2 { font-size:clamp(1.65rem, 6.5vw, 2.1rem) !important; line-height:1.2 !important; }

          /* Underline */
          .rn-line { width:160px !important; }

          /* Body text */
          .rn-tagline { font-size:13px !important; }
          .rn-desc    { font-size:12.5px !important; line-height:1.6 !important; }

          /* Programs */
          .prog-row { padding:8px 10px !important; gap:9px !important; }
          .pi { font-size:16px !important; }
          .pl { font-size:13px !important; }

          /* Stats: 3-column grid */
          .rn-stats {
            display:grid !important;
            grid-template-columns:repeat(3,1fr) !important;
            gap:8px !important;
          }
          .sc { min-width:unset !important; padding:9px 5px !important; }
          .sn { font-size:18px !important; }
          .sl { font-size:8px !important; }

          /* CTAs: stacked */
          .rn-ctas { flex-direction:column !important; gap:10px !important; }
          .cta-yn, .cta-pu {
            width:100% !important;
            justify-content:center !important;
            padding:13px 16px !important;
            font-size:14px !important;
            border-radius:14px !important;
          }
        }

        @media (max-width:380px) {
          .rn-h2    { font-size:1.5rem !important; }
          .rn-badge { font-size:8px !important; }
          .sn       { font-size:15px !important; }
        }
      `}</style>

      <section ref={secRef} className="relative w-full overflow-hidden" style={{ fontFamily:"'Nunito', sans-serif" }}>
        <div className="rn-section-bg relative bg-gradient-to-br from-indigo-50 via-purple-50 to-yellow-50 overflow-hidden"
          style={{ paddingTop:"80px", paddingBottom:"96px" }}>

          {/* BG blobs */}
          {[
            { s:"-top-24 -right-16 w-[440px] h-[440px]", c:"rgba(253,224,71,.28)", d:"10s", t:"0s" },
            { s:"-bottom-16 -left-16 w-80 h-80",          c:"rgba(196,181,253,.35)", d:"8s",  t:"2s" },
            { s:"top-1/2 left-1/2 w-56 h-56",             c:"rgba(186,230,253,.22)", d:"9s",  t:"4s" },
          ].map((b,i) => (
            <div key={i} className={`absolute ${b.s} rounded-full pointer-events-none`}
              style={{ background:b.c, animation:`blobPulse ${b.d} ease-in-out infinite ${b.t}`,
                transform: i===2 ? "translate(-50%,-50%)" : undefined }} />
          ))}

          {/* Confetti */}
          {CONFETTI.map((c,i) => (
            <span key={i} className={`absolute ${c.cls} rounded-full pointer-events-none`}
              style={{ width:c.sz, height:c.sz, background:c.bg, opacity:.75,
                animation:`${i%2===0?"floatDot":"floatDotAlt"} ${c.dur} ease-in-out infinite`, animationDelay:c.delay }} />
          ))}

          {/* ── GRID ── */}
          <div className="rn-grid relative z-10 max-w-7xl mx-auto"
            style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"48px 80px", alignItems:"center", padding:"0 64px" }}>

            {/* ══ TEXT COL ══ */}
            <div className="rn-txt-col flex flex-col gap-5"
              style={{ animation: secInView ? "slideInLeft .85s cubic-bezier(.22,1,.36,1) both" : "none", opacity: secInView ? 1 : 0 }}>

              {/* Badge */}
              <span className="rn-badge inline-flex items-center gap-2 text-gray-900 font-extrabold uppercase tracking-widest px-5 py-2.5 rounded-full w-fit border-2 border-yellow-500"
                style={{ fontSize:"11px",
                  background:"linear-gradient(110deg,#fbbf24 0%,#f59e0b 30%,#fff9 45%,#f59e0b 55%,#fbbf24 100%)",
                  backgroundSize:"280% 100%",
                  animation: secInView ? "popIn .65s cubic-bezier(.34,1.56,.64,1) .2s both, shimmer 2.5s linear 1s infinite" : "none",
                  boxShadow:"0 6px 22px rgba(251,191,36,.5)" }}>
                🏫 Pre-school · Day Care · Activity Center
              </span>

              {/* Heading */}
              <div style={{ animation: secInView ? "fadeUp .7s ease .35s both" : "none", opacity: secInView ? 1 : 0 }}>
                <h2 className="rn-h2 font-extrabold leading-tight heading-wrap"
                  style={{ fontSize:"clamp(2.3rem,4.5vw,4rem)", fontFamily:"'Baloo 2', cursive" }}>
                  <span style={{ color:"#4c1d95" }}>Our </span>
                  <MulticolorText text="Renowned" />
                  <br />
                  <span style={{ color:"#1e3a5f" }}>Programs</span>
                </h2>
                <div className="rn-line mt-2 h-[5px] rounded-full bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400"
                  style={{ width:"220px",
                    animation: secInView ? "growLine 1s cubic-bezier(.22,1,.36,1) 1.1s both" : "none",
                    transform:"scaleX(0)", transformOrigin:"left" }} />
              </div>

              {/* Tagline */}
              <p className="rn-tagline italic font-bold text-purple-600 text-lg"
                style={{ fontFamily:"'Baloo 2', cursive",
                  animation: secInView ? "fadeUp .6s ease .45s both" : "none", opacity: secInView ? 1 : 0 }}>
                "Brings Out The Best in You..."
              </p>

              {/* Desc */}
              <p className="rn-desc text-gray-600 text-base leading-relaxed max-w-lg"
                style={{ animation: secInView ? "fadeUp .7s ease .55s both" : "none", opacity: secInView ? 1 : 0 }}>
                From engaging activities to innovative teaching methods, our programs are designed
                to unlock the full potential of every child — nurturing curiosity, creativity,
                and confidence from day one.
              </p>

              {/* Programs */}
              <div className="flex flex-col gap-3"
                style={{ animation: secInView ? "fadeUp .7s ease .65s both" : "none", opacity: secInView ? 1 : 0 }}>
                <p className="text-xs font-extrabold text-purple-700 uppercase tracking-widest">✨ Quality Classes for Kids</p>
                {PROGRAMS.map((p,i) => (
                  <div key={i}
                    className="prog-row flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-xl px-4 py-3 border border-white shadow-md cursor-default"
                    style={{ "--c":p.color,
                      animation: secInView ? `bounceIn .55s cubic-bezier(.34,1.56,.64,1) ${.7+i*.1}s both` : "none",
                      opacity: secInView ? 1 : 0 }}
                    onMouseEnter={() => setHovProg(i)}
                    onMouseLeave={() => setHovProg(null)}>
                    <div className="w-1.5 rounded-full flex-shrink-0 transition-all duration-300"
                      style={{ background:p.color, height: hovProg===i ? "40px":"32px",
                        boxShadow: hovProg===i ? `0 0 10px ${p.color}88`:"none" }} />
                    <span className="pi text-xl transition-transform duration-300"
                      style={{ transform: hovProg===i ? "scale(1.3) rotate(-8deg)":"scale(1)" }}>{p.icon}</span>
                    <span className="pl font-extrabold text-base transition-colors duration-200"
                      style={{ fontFamily:"'Baloo 2', cursive", color: hovProg===i ? p.color:"#1f2937" }}>{p.label}</span>
                    <span className="ml-auto text-xs font-bold transition-all duration-300"
                      style={{ opacity: hovProg===i?1:0, transform: hovProg===i?"translateX(0)":"translateX(8px)", color:p.color }}>
                      Enrolling →
                    </span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div ref={statsRef} className="rn-stats flex items-center gap-4 flex-wrap"
                style={{ animation: secInView ? "fadeUp .7s ease .85s both" : "none", opacity: secInView ? 1 : 0 }}>
                {STATS.map((s,i) => (
                  <div key={i} className="sc flex flex-col items-center bg-white/80 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-lg border border-white/90 min-w-[90px]"
                    style={{ animationDelay:`${.9+i*.12}s` }}>
                    <span className="sn text-2xl font-extrabold leading-none"
                      style={{ color:s.color, fontFamily:"'Baloo 2', cursive", animationDelay:`${i*.3}s` }}>
                      <CountUp target={s.num} inView={statsInView} />
                    </span>
                    <span className="sl text-[.68rem] font-bold text-gray-400 uppercase tracking-wide text-center whitespace-nowrap">{s.label}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="rn-ctas flex flex-wrap gap-4 pt-1"
                style={{ animation: secInView ? "fadeUp .7s ease .95s both" : "none", opacity: secInView ? 1 : 0 }}>
                <a href="/contactus"
                  className="cta-yn group inline-flex items-center gap-2 text-gray-900 font-extrabold text-base px-8 py-4 rounded-full border-2 border-yellow-500">
                  📋 Enroll Now
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2"
                    fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
                <a href="tel:7989523822"
                  className="cta-pu inline-flex items-center gap-2 bg-purple-700 hover:bg-purple-800 text-white font-extrabold text-base px-7 py-4 rounded-full shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 active:scale-95"
                  style={{ animation:"rainbowGlow 4s ease-in-out infinite 2s" }}>
                  📞 7989523822
                </a>
              </div>
            </div>

            {/* ══ IMAGE COL ══ */}
            <div className="rn-img-col relative flex justify-center items-end"
              style={{ minHeight:"420px",
                animation: secInView ? "slideInRight .85s cubic-bezier(.22,1,.36,1) .2s both" : "none",
                opacity: secInView ? 1 : 0 }}>

              {/* Spinning conic ring */}
              <div className="rn-glow-ring absolute pointer-events-none"
                style={{ width:"420px", height:"420px", top:"50%", left:"50%", zIndex:0 }}>
                <div style={{ position:"absolute", inset:"-8px", borderRadius:"9999px",
                  background:"conic-gradient(from 0deg,#f87171,#fbbf24,#34d399,#60a5fa,#c084fc,#f87171)",
                  animation:"conicSpin 8s linear infinite", opacity:.15, filter:"blur(14px)" }} />
              </div>

              {/* Soft glow */}
              <div className="absolute pointer-events-none"
                style={{ width:"420px", height:"420px", top:"50%", left:"50%",
                  background:"radial-gradient(circle,rgba(253,224,71,.38) 0%,rgba(196,181,253,.22) 50%,transparent 70%)",
                  animation:"pulseGlow 4s ease-in-out infinite alternate" }} />

              {/* Emoji decorators */}
              <span className="de-tl absolute pointer-events-none select-none z-10 text-3xl" style={{ top:"2px", left:"24px", animation:"flutter 5s ease-in-out infinite alternate" }}>🌟</span>
              <span className="de-tr absolute pointer-events-none select-none z-10 text-2xl" style={{ top:"24px", right:"24px", animation:"bobble 3.5s ease-in-out infinite alternate" }}>🎈</span>
              <span className="de-ml absolute pointer-events-none select-none z-10 text-2xl" style={{ top:"25%", left:"0", animation:"twinkle 2.5s ease-in-out infinite alternate" }}>✨</span>
              <span className="de-br absolute pointer-events-none select-none z-10 text-2xl" style={{ bottom:"32%", right:"8px", animation:"flutter 6s ease-in-out infinite alternate-reverse" }}>🎉</span>
              <span className="de-bl absolute pointer-events-none select-none z-10 text-xl"  style={{ bottom:"22%", left:"8px", animation:"heartbeat 2s ease-in-out infinite alternate" }}>💛</span>

              {/* Image */}
              <div className="rn-img-inner relative z-10 w-full max-w-[500px]"
                style={{ animation:"seesaw 3.5s ease-in-out infinite alternate" }}>
                <Image src="/hero.png" alt="Kids playing at Little Berries playschool"
                  width={500} height={400} priority
                  className="w-full h-auto object-contain"
                  style={{ width:"100%", height:"auto", filter:"drop-shadow(0 24px 48px rgba(139,92,246,.22))" }} />
              </div>

              {/* Best Playschool card */}
              <div className="fc-left absolute top-4 flex items-center gap-3 bg-white/95 backdrop-blur-md border-2 border-yellow-300 rounded-2xl px-4 py-3 z-20"
                style={{ left:"-24px", animation:"cardFloat 4s ease-in-out infinite alternate" }}>
                <span className="fc-icon text-2xl" style={{ animation:"spin3d 6s linear infinite", display:"inline-block" }}>🌟</span>
                <div><div className="fc-title font-extrabold text-gray-800 text-sm leading-tight" style={{ fontFamily:"'Baloo 2', cursive" }}>Best Playschool</div></div>
              </div>

              {/* CCTV card */}
              <div className="fc-right absolute flex items-center gap-3 bg-purple-700 text-white rounded-2xl px-4 py-3 z-20"
                style={{ bottom:"30%", right:"-16px", animation:"cardFloatAlt 4s ease-in-out infinite", animationDelay:"1.5s" }}>
                <span className="fc-icon text-xl" style={{ animation:"twinkle 3s ease-in-out infinite alternate" }}>📹</span>
                <div>
                  <div className="fc-title font-extrabold text-sm leading-tight" style={{ fontFamily:"'Baloo 2', cursive" }}>CCTV Monitored</div>
                  <div className="fc-sub text-[.68rem] text-yellow-300 font-bold">Safe &amp; Secure</div>
                </div>
              </div>

              {/* Admissions badge */}
              <div className="adm-wrap absolute z-20" style={{ bottom:"-20px", left:"50%" }}>
                <div className="adm-pill flex items-center gap-2 text-white font-extrabold text-sm px-6 py-3 rounded-full border-2 border-white whitespace-nowrap"
                  style={{ fontFamily:"'Baloo 2', cursive",
                    background:"linear-gradient(135deg,#ef4444,#f97316,#ef4444)",
                    backgroundSize:"200% 100%",
                    animation:"shimmer 2s linear infinite, admPulse 2s ease-in-out infinite alternate",
                    transform:"translateX(-50%)" }}>
                  🎒 Admissions Open {year}–{nextYear}!
                </div>
              </div>
            </div>

          </div>{/* /grid */}
        </div>
      </section>
    </>
  );
}