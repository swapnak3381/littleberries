"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

// ─────────────────────────────────────────────────────────
//  Place these in /public:
//    /public/chess.png   → chess photo
//    /public/dance.png   → dance photo
//    /public/karate.png  → taekwondo photo
// ─────────────────────────────────────────────────────────

const HEADING_COLORS = ["#e53e3e","#d97706","#16a34a","#2563eb","#7c3aed","#f59e0b"];

function MulticolorText({ text }) {
  return text.split("").map((ch, i) => (
    <span key={i} style={{ color: HEADING_COLORS[i % HEADING_COLORS.length] }}>
      {ch}
    </span>
  ));
}

// Each card has a unique "birth" entrance animation direction
const ACTIVITIES = [
  {
    id: "chess",
    title: "Chess",
    emoji: "♟️",
    tagline: "Think. Plan. Win.",
    accentColor: "#7c3aed",
    lightBg: "#f5f3ff",
    softColor: "#ede9fe",
    image: "/chess.png",
    alt: "Kids learning chess with a teacher",
    description: "Chess sharpens young minds like nothing else. Our certified coaches guide children through strategy, patience and critical thinking — turning every move into a life lesson.",
    benefits: ["Boosts IQ & Focus", "Strategic Thinking", "Memory Power", "Emotional Control"],
    age: "Ages 3–12",
    schedule: "Mon · Wed · Fri",
    birthAnim: "birthLeft",   // slides in from left
    delay: "0s",
  },
  {
    id: "dance",
    title: "Dance",
    emoji: "💃",
    tagline: "Move. Express. Shine.",
    accentColor: "#ea580c",
    lightBg: "#fff7ed",
    softColor: "#fed7aa",
    image: "/dance.png",
    alt: "Kids dancing joyfully in a class",
    description: "Dance is where creativity meets confidence! Our fun-filled sessions blend rhythm, coordination and self-expression — helping children discover their inner performer.",
    benefits: ["Coordination & Balance", "Confidence Builder", "Creative Expression", "Physical Fitness"],
    age: "Ages 2–10",
    schedule: "Tue · Thu · Sat",
    birthAnim: "birthUp",     // rises up from below
    delay: "0.18s",
  },
  {
    id: "karate",
    title: "Taekwondo",
    emoji: "🥋",
    tagline: "Discipline. Strength. Spirit.",
    accentColor: "#16a34a",
    lightBg: "#f0fdf4",
    softColor: "#bbf7d0",
    image: "/karate.png",
    alt: "Kids in taekwondo uniforms smiling",
    description: "Taekwondo builds more than kicks — it builds character. Our certified instructors teach discipline, respect and perseverance through structured belt-progression programmes.",
    benefits: ["Self-Defence Skills", "Discipline & Focus", "Body Strength", "Respect & Values"],
    age: "Ages 4–14",
    schedule: "Mon · Wed · Sat",
    birthAnim: "birthRight",  // slides in from right
    delay: "0.36s",
  },
];

// ── Hook: fires once when element enters viewport ──
function useScrollReveal(threshold = 0.18) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, visible];
}

// ── Single activity card with its own reveal ref ──
function ActivityCard({ act, idx }) {
  const [ref, visible] = useScrollReveal(0.15);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      className="relative flex flex-col rounded-3xl overflow-hidden bg-white cursor-pointer"
      style={{
        border: `2.5px solid ${hovered ? act.accentColor : "#e5e7eb"}`,
        boxShadow: hovered
          ? `0 20px 60px ${act.accentColor}30, 0 4px 16px ${act.accentColor}18`
          : "0 4px 24px rgba(0,0,0,0.07)",
        // born animation — only plays once when visible
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : (
          act.birthAnim === "birthLeft"  ? "translateX(-64px) scale(0.92)" :
          act.birthAnim === "birthRight" ? "translateX(64px) scale(0.92)"  :
                                           "translateY(64px) scale(0.92)"
        ),
        transition: visible
          ? `opacity 0.75s cubic-bezier(0.22,1,0.36,1) ${act.delay}, transform 0.75s cubic-bezier(0.22,1,0.36,1) ${act.delay}, box-shadow 0.35s ease, border-color 0.35s ease`
          : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── Top accent bar that grows on hover ── */}
      <div
        className="absolute top-0 left-0 w-full z-10 rounded-t-3xl"
        style={{
          height: hovered ? "5px" : "3px",
          background: `linear-gradient(90deg, ${act.accentColor}, ${act.accentColor}88, ${act.accentColor}44)`,
          transition: "height 0.3s ease",
        }}
      />

      {/* ══════════════════════
          IMAGE BLOCK
      ══════════════════════ */}
      <div className="relative w-full overflow-hidden" style={{ height: 268 }}>

        {/* Image zooms gently on hover */}
        <div
          className="w-full h-full"
          style={{
            transform: hovered ? "scale(1.07)" : "scale(1)",
            transition: "transform 0.65s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <Image
            src={act.image}
            alt={act.alt}
            fill
            className="object-cover"
            sizes="(max-width:1024px) 100vw, 33vw"
          />
        </div>

        {/* Bright pastel shimmer overlay on hover — NOT dark */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, ${act.accentColor}22 0%, transparent 55%, ${act.accentColor}11 100%)`,
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.45s ease",
          }}
        />

        {/* Age badge */}
        <div
          className="absolute top-4 left-4 z-20 text-white text-xs font-extrabold px-3 py-1.5 rounded-full shadow-md"
          style={{ background: act.accentColor, fontFamily: "'Baloo 2', cursive",
            transform: visible ? "none" : "translateY(-20px)",
            opacity: visible ? 1 : 0,
            transition: `opacity 0.5s ease ${parseFloat(act.delay)+0.3}s, transform 0.5s ease ${parseFloat(act.delay)+0.3}s`,
          }}
        >
          {act.age}
        </div>

        {/* Emoji bounces independently */}
        <div
          className="absolute top-4 right-4 z-20 text-4xl drop-shadow-lg select-none"
          style={{ animation: "emojiFloat 2.8s ease-in-out infinite alternate" }}
        >
          {act.emoji}
        </div>

        {/* Schedule strip at bottom of image */}
        <div
          className="absolute bottom-0 left-0 right-0 z-20 px-4 py-2.5"
          style={{
            background: `linear-gradient(to top, ${act.accentColor}ee, ${act.accentColor}00)`,
          }}
        >
          <span className="text-white text-xs font-extrabold uppercase tracking-widest">
            📅 {act.schedule}
          </span>
        </div>
      </div>

      {/* ══════════════════════
          CONTENT BLOCK
      ══════════════════════ */}
      <div
        className="flex flex-col flex-1 p-6 gap-4"
        style={{ background: hovered ? act.lightBg : "#fff", transition: "background 0.4s ease" }}
      >
        {/* Title row */}
        <div className="flex items-center gap-3">
          {/* Icon circle — spins on hover */}
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg flex-shrink-0"
            style={{
              background: act.accentColor,
              transform: hovered ? "rotate(12deg) scale(1.1)" : "rotate(0deg) scale(1)",
              transition: "transform 0.4s cubic-bezier(0.34,1.56,0.64,1)",
            }}
          >
            {act.emoji}
          </div>
          <div>
            <h3
              className="font-extrabold leading-tight"
              style={{ fontSize: "1.45rem", fontFamily: "'Baloo 2', cursive", color: act.accentColor }}
            >
              {act.title}
            </h3>
            <p className="text-xs font-bold italic" style={{ color: act.accentColor + "bb" }}>
              {act.tagline}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed">{act.description}</p>

        {/* Benefits — pills that each animate in when card is visible */}
        <div className="flex flex-wrap gap-2">
          {act.benefits.map((b, i) => (
            <span
              key={i}
              className="text-xs font-bold px-3 py-1.5 rounded-full border-2 cursor-default select-none"
              style={{
                borderColor: act.accentColor,
                color: hovered ? "#fff" : act.accentColor,
                background: hovered ? act.accentColor : act.softColor,
                transition: `background 0.3s ease ${i * 0.04}s, color 0.3s ease ${i * 0.04}s`,
                // staggered birth
                opacity: visible ? 1 : 0,
                transform: visible ? "none" : "scale(0.7)",
                transitionProperty: "background, color, opacity, transform",
                transitionDuration: `0.3s, 0.3s, 0.45s, 0.45s`,
                transitionTimingFunction: "ease",
                transitionDelay: `${i * 0.04}s, ${i * 0.04}s, ${parseFloat(act.delay) + 0.45 + i * 0.08}s, ${parseFloat(act.delay) + 0.45 + i * 0.08}s`,
              }}
            >
              ✓ {b}
            </span>
          ))}
        </div>

        {/* CTA button */}
        <div className="mt-auto pt-1">
          <button
            className="w-full flex items-center justify-center gap-2 text-white font-extrabold text-sm py-3.5 rounded-2xl transition-all duration-300 active:scale-95"
            style={{
              background: `linear-gradient(135deg, ${act.accentColor} 0%, ${act.accentColor}cc 100%)`,
              boxShadow: hovered
                ? `0 8px 28px ${act.accentColor}55`
                : `0 4px 14px ${act.accentColor}33`,
              transform: hovered ? "translateY(-2px)" : "translateY(0)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              fontFamily: "'Baloo 2', cursive",
            }}
          >
            Join {act.title} Class
            <svg
              className="w-4 h-4"
              style={{ transform: hovered ? "translateX(4px)" : "translateX(0)", transition: "transform 0.3s ease" }}
              fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Header with its own reveal ──
function SectionHeader() {
  const [ref, visible] = useScrollReveal(0.2);

  return (
    <div
      ref={ref}
      className="text-center mb-20"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(40px)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
      }}
    >
      <span
        className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 text-xs font-extrabold uppercase tracking-widest px-5 py-2 rounded-full shadow-lg border-2 border-yellow-500 mb-6"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "scale(1)" : "scale(0.7)",
          transition: "opacity 0.6s cubic-bezier(0.34,1.56,0.64,1) 0.1s, transform 0.6s cubic-bezier(0.34,1.56,0.64,1) 0.1s",
        }}
      >
        🎯 Explore Our Activities
      </span>

      <h2
        className="font-extrabold leading-tight mb-4 block"
        style={{
          fontSize: "clamp(2.6rem, 6vw, 4.2rem)",
          fontFamily: "'Baloo 2', cursive",
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(24px)",
          transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
        }}
      >
        <MulticolorText text="Fun " />
        <span style={{ color: "#1e3a5f" }}>Activities for </span>
        <MulticolorText text="Every Child" />
      </h2>

      <div className="flex justify-center mb-5">
        <div
          className="h-[5px] rounded-full bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400"
          style={{
            width: visible ? "260px" : "0px",
            transition: "width 1s cubic-bezier(0.22,1,0.36,1) 0.5s",
          }}
        />
      </div>

      <p
        className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(16px)",
          transition: "opacity 0.7s ease 0.45s, transform 0.7s ease 0.45s",
        }}
      >
        At Little Berries, every child discovers their superpower. Our expert-led activities
        blend learning with joy — building skills that last a lifetime.
      </p>
    </div>
  );
}

// ── Bottom banner with its own reveal ──
function BottomBanner() {
  const [ref, visible] = useScrollReveal(0.2);

  return (
    <div
      ref={ref}
      className="mt-20 rounded-3xl overflow-hidden"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(48px) scale(0.97)",
        transition: "opacity 0.8s cubic-bezier(0.22,1,0.36,1) 0.1s, transform 0.8s cubic-bezier(0.22,1,0.36,1) 0.1s",
      }}
    >
      <div className="bg-gradient-to-r from-purple-800 via-indigo-800 to-purple-900 px-8 py-10 relative overflow-hidden">
        <div className="absolute -top-10 left-20 w-40 h-40 rounded-full bg-yellow-400/15 blur-2xl pointer-events-none" />
        <div className="absolute -bottom-10 right-20 w-40 h-40 rounded-full bg-indigo-400/20 blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <p className="text-yellow-300 font-extrabold text-xl mb-1" style={{ fontFamily: "'Baloo 2', cursive" }}>
              🎉 Admissions Open 2025–26!
            </p>
            <p className="text-white/70 text-sm">Limited seats — enrol your child today</p>
          </div>

          <div className="flex items-center gap-8 flex-wrap justify-center">
            {[
              { num: "3",    label: "Activity Programs", color: "#facc15" },
              { num: "200+", label: "Active Students",   color: "#34d399" },
              { num: "100%", label: "Fun Guaranteed",    color: "#f87171" },
              { num: "5⭐",  label: "Parent Rating",     color: "#a78bfa" },
            ].map((s, i) => (
              <div
                key={i}
                className="flex flex-col items-center"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "none" : "translateY(20px)",
                  transition: `opacity 0.5s ease ${0.3 + i * 0.1}s, transform 0.5s ease ${0.3 + i * 0.1}s`,
                }}
              >
                <span className="text-2xl font-extrabold leading-none" style={{ color: s.color, fontFamily: "'Baloo 2', cursive" }}>
                  {s.num}
                </span>
                <span className="text-white/60 text-xs font-bold uppercase tracking-wide whitespace-nowrap">{s.label}</span>
              </div>
            ))}
          </div>

          <a
            href="tel:7989523822"
            className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-extrabold px-7 py-3.5 rounded-full shadow-lg shadow-yellow-400/30 transition-all duration-200 hover:-translate-y-1 whitespace-nowrap"
            style={{ fontFamily: "'Baloo 2', cursive" }}
          >
            📞 Call Now
          </a>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════
//  MAIN EXPORT
// ══════════════════════════════════════════
export default function ActivitiesSection() {
  return (
    <section
      className="relative w-full overflow-hidden py-24"
      style={{ fontFamily: "'Nunito', sans-serif", background: "linear-gradient(145deg, #f8f7ff 0%, #fef9f0 50%, #f0fdf4 100%)" }}
    >
      {/* ── Soft background blobs ── */}
      <div className="absolute -top-32 -left-20 w-[500px] h-[500px] rounded-full bg-yellow-200/25 blur-[110px] pointer-events-none" />
      <div className="absolute -bottom-24 -right-16 w-[420px] h-[420px] rounded-full bg-violet-200/20 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-[10%] w-72 h-72 rounded-full bg-emerald-200/15 blur-[80px] pointer-events-none" />

      {/* ── Confetti dots ── */}
      {[
        ["top-14 left-[7%]",    "bg-red-400",    "6.2s", "0s"],
        ["top-1/4 left-[20%]",  "bg-yellow-400", "8.1s", "1.3s"],
        ["top-10 right-[16%]",  "bg-green-400",  "7.3s", "0.5s"],
        ["top-2/5 right-[7%]",  "bg-blue-400",   "9.2s", "2.1s"],
        ["bottom-1/3 left-[5%]","bg-violet-400", "5.5s", "1.7s"],
        ["bottom-20 right-[13%]","bg-orange-400","10.1s","1s"],
        ["top-3/5 left-[48%]",  "bg-teal-400",   "7.8s", "1.2s"],
        ["top-1/3 left-[38%]",  "bg-amber-400",  "6.5s", "0.7s"],
      ].map(([pos, bg, dur, delay], i) => (
        <span
          key={i}
          className={`absolute ${pos} w-2.5 h-2.5 rounded-full ${bg} opacity-50 pointer-events-none`}
          style={{ animation: `confettiFloat ${dur} ease-in-out infinite`, animationDelay: delay }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">
        <SectionHeader />

        {/* Cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-10">
          {ACTIVITIES.map((act, idx) => (
            <ActivityCard key={act.id} act={act} idx={idx} />
          ))}
        </div>

        <BottomBanner />
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@700;800&family=Nunito:wght@400;600;700;800;900&display=swap');

        @keyframes emojiFloat {
          from { transform: translateY(0)   rotate(-5deg) scale(1);    }
          to   { transform: translateY(-9px) rotate(5deg)  scale(1.12); }
        }
        @keyframes confettiFloat {
          0%,100% { transform: translateY(0)    rotate(0deg);   opacity: 0.5; }
          50%     { transform: translateY(-26px) rotate(200deg); opacity: 0.9; }
        }
      `}</style>
    </section>
  );
}