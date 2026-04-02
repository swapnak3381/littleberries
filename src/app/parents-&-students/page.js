"use client";

import { useState, useRef, useEffect } from "react";

// ── Data ─────────────────────────────────────────────────────────────────────

const PARENT_REVIEWS = [
  {
    id: "p1",
    type: "parent",
    name: "Priya Sharma",
    child: "Mom of Aryan, 4 yrs",
    avatar: "👩‍💼",
    avatarBg: "#DBEAFE",
    quote: "Little Berries transformed my shy little boy into a confident, expressive child in just two months. The teachers truly care and it shows every day ❤️",
    stars: 5,
    tag: "💬 Parent Love",
    tagColor: "#0EA5E9",
    tilt: "-2deg",
    tape: "#FFE066",
  },
  {
    id: "p2",
    type: "parent",
    name: "Rahul & Sneha Verma",
    child: "Parents of Mia, 3 yrs",
    avatar: "👨‍👩‍👧",
    avatarBg: "#D6F5FF",
    quote: "The STEM activities are amazing for this age. Mia comes home excited, curious, and full of stories about her discoveries 🔬✨",
    stars: 5,
    tag: "💬 Happy Parents",
    tagColor: "#0EA5E9",
    tilt: "2.5deg",
    tape: "#B5EAD7",
  },
  {
    id: "p3",
    type: "parent",
    name: "Deepa Nair",
    child: "Mom of Kiran, 5 yrs",
    avatar: "👩‍🦱",
    avatarBg: "#FFF3CD",
    quote: "The best decision we made! Excellent infrastructure, top-level hygiene, and incredibly loving staff 🌟",
    stars: 5,
    tag: "💬 Trusted Choice",
    tagColor: "#0EA5E9",
    tilt: "-1.5deg",
    tape: "#BAE6FD",
  },
  {
    id: "p4",
    type: "parent",
    name: "Amit Kulkarni",
    child: "Dad of Rohan, 4 yrs",
    avatar: "👨‍💻",
    avatarBg: "#E8D5FF",
    quote: "Rohan’s communication skills improved dramatically. The storytelling and reading programs are simply outstanding 📚✨",
    stars: 5,
    tag: "💬 Real Results",
    tagColor: "#0EA5E9",
    tilt: "1deg",
    tape: "#C7CEEA",
  },
  {
    id: "p5",
    type: "parent",
    name: "Fatima Shaikh",
    child: "Mom of Zara, 3.5 yrs",
    avatar: "👩‍🎨",
    avatarBg: "#FFE4B5",
    quote: "I love how they balance learning and play. Zara is always excited to go to school — that says everything 😊",
    stars: 5,
    tag: "💬 Parent Approved",
    tagColor: "#0EA5E9",
    tilt: "-3deg",
    tape: "#FFDAC1",
  },
  {
    id: "p6",
    type: "parent",
    name: "Sanjay & Meera Pillai",
    child: "Parents of Dev, 4 yrs",
    avatar: "👨‍👩‍👦",
    avatarBg: "#D4EDDA",
    quote: "The daily updates and communication are exceptional. We always feel connected to Dev’s learning journey 📈❤️",
    stars: 5,
    tag: "💬 Engaged Parents",
    tagColor: "#0EA5E9",
    tilt: "2deg",
    tape: "#B5EAD7",
  },
];

const STUDENT_ACHIEVEMENTS = [
  {
    id: "s1",
    type: "student",
    name: "R . Himanshu",
    age: "Graduated 2024",
    avatar: "👦",
    avatarBg: "#D6F5FF",
    image: "/narayana1.jpeg",
    achievement: "Selected for Narayana School 🏫",
    desc: "Secured admission in a top CBSE school. Arjun showed excellent growth in academics and confidence during his journey at Little Berries.",
    badge: "🏆 Selected",
    tag: "🎓 Achievement",
    tagColor: "#10B981",
    tilt: "2deg",
    tape: "#FFE066",
  },
  {
    id: "s2",
    type: "student",
    name: "Neeraj Abirami Reddy",
    age: "Graduated 2024",
    avatar: "👧",
    avatarBg: "#D1FAE5",
    image: "/narayana2.jpeg",
    achievement: "Selected for Narayana School 🏫",
    desc: "Awarded a full scholarship for her exceptional academic performance and leadership qualities. 100% tuition fee waived for 2 years 🌟",
    badge: "🎓 Selected",
    tag: "🌟 Top Performer",
    tagColor: "#10B981",
    tilt: "-1.5deg",
    tape: "#B5EAD7",
  },
  {
    id: "s3",
    type: "student",
    name: "Shanvith vihari",
    age: "Graduated 2024",
    avatar: "👧👧",
    avatarBg: "#FFF3CD",
    image: "/gensis.jpeg",
    achievement: "Selected for Genesis School 📚",
    desc: "Both sisters secured admission with a 50% fee waiver. Their all-round development and confidence stood out.",
    badge: "Playful Achiever",
    tag: "🎓 Achievement",
    tagColor: "#10B981",
    tilt: "3deg",
    tape: "#BAE6FD",
  },
  {
    id: "s4",
    type: "student",
    name: "K . Dhanya sri",
    age: "Graduated 2023",
    avatar: "👦",
    avatarBg: "#E8D5FF",
    image: "/gensis1.jpeg",
    achievement: "Selected for Genesis School 📚",
    desc: "Recognized for strong STEM skills and analytical thinking. Awarded a 40% tuition fee concession 🔬",
    badge: "🧠 STEM Star",
    tag: "🌟 Merit Based",
    tagColor: "#10B981",
    tilt: "-2.5deg",
    tape: "#C7CEEA",
  },
  {
    id: "s5",
    type: "student",
    name: "Riyansh Reddy",
    age: "Graduated 2024",
    avatar: "👦",
    avatarBg: "#D4EDDA",
    image: "/saitechno.jpeg",
    achievement: "Selected for Sai Techno School 🏫",
    desc: "Chosen under a special category for holistic development. Received complimentary admission and 1 year of free education 🎉",
    badge: "🎁 Special Admission",
    tag: "🌈 All-Rounder",
    tagColor: "#10B981",
    tilt: "1.5deg",
    tape: "#FFDAC1",
  },
  {
    id: "s6",
    type: "student",
    name: "M. Himavarshni",
    age: "Graduated 2024",
    avatar: "👧",
    avatarBg: "#FFE4B5",
    image: "/nextzen.jpeg",
    achievement: "Selected for NextZen School 🎖️",
    desc: "Awarded a 35% fee concession for outstanding communication skills and academic excellence 📚✨",
    badge: "✨ Rising Star",
    tag: "🎓 Achievement",
    tagColor: "#10B981",
    tilt: "-1deg",
    tape: "#FFE066",
  },
];

// ── Star renderer ─────────────────────────────────────────────────────────────

function Stars({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} style={{ color: i < count ? "#FFD700" : "#e0e0e0", fontSize: "14px" }}>★</span>
      ))}
    </div>
  );
}

// ── Single polaroid card ──────────────────────────────────────────────────────

function PolaroidCard({ item, onClick }) {
  return (
    <div
      onClick={() => onClick(item)}
      className="flex-shrink-0 cursor-pointer group"
      style={{ transform: `rotate(${item.tilt})`, transition: "transform 0.3s ease, box-shadow 0.3s ease" }}
    >
      <div
        className="relative bg-white rounded-sm shadow-lg group-hover:shadow-2xl transition-shadow duration-300"
        style={{
          width: "220px",
          padding: "14px 14px 48px 14px",
          boxShadow: "3px 4px 18px rgba(0,0,0,0.13), 0 1px 3px rgba(0,0,0,0.08)",
        }}
      >
        {/* Tape strip */}
        <div
          className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-6 rounded-sm opacity-80 z-10"
          style={{ background: item.tape, transform: "translateX(-50%) rotate(-1deg)" }}
        />

        {/* Photo area */}
        <div
          className="w-full rounded-sm flex flex-col items-center justify-center gap-2 py-5 relative overflow-hidden"
          style={{ background: item.avatarBg, minHeight: "130px" }}
        >
          {item.image ? (
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover absolute inset-0"
            />
          ) : (
            <span style={{ fontSize: "52px", lineHeight: 1 }}>{item.avatar}</span>
          )}
        </div>

        {/* Card body */}
        <div className="pt-3">
          <div className="flex items-start justify-between mb-1">
            <div>
              <p className="font-black text-gray-800 text-sm leading-tight"
                style={{ fontFamily: "'Baloo 2', cursive" }}>{item.name}</p>
              <p className="text-gray-400 text-[11px]"
                style={{ fontFamily: "'Baloo 2', cursive" }}>
                {item.type === "parent" ? item.child : item.age}
              </p>
            </div>
            {item.type === "parent"
              ? <Stars count={item.stars} />
              : <span className="text-xs font-bold" style={{ color: item.tagColor }}>{item.badge}</span>
            }
          </div>

          <p
            className="text-gray-600 text-[12px] leading-snug mt-2 line-clamp-3"
            style={{ fontFamily: "'Caveat', cursive", fontSize: "13px", lineHeight: "1.4" }}
          >
            {item.type === "parent" ? `"${item.quote}"` : item.achievement}
          </p>
        </div>

        {/* Hover shine */}
        <div className="absolute inset-0 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 60%)" }} />
      </div>
    </div>
  );
}

// ── Marquee row ───────────────────────────────────────────────────────────────

function MarqueeRow({ items, direction = "left", speed = 35, onCardClick }) {
  const doubled = [...items, ...items]; // seamless loop
  const duration = `${items.length * speed}s`;
  const animName = direction === "left" ? "marquee-left" : "marquee-right";

  return (
    <div className="relative overflow-hidden" style={{ maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)" }}>
      <div
        className="flex gap-6 py-4"
        style={{ animation: `${animName} ${duration} linear infinite`, width: "max-content" }}
      >
        {doubled.map((item, i) => (
          <PolaroidCard key={`${item.id}-${i}`} item={item} onClick={onCardClick} />
        ))}
      </div>
    </div>
  );
}

// ── Modal spotlight ───────────────────────────────────────────────────────────

function Modal({ item, onClose }) {
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)" }}
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl shadow-2xl max-w-sm w-full overflow-hidden"
        style={{ transform: `rotate(${item.tilt})` }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Tape */}
        <div
          className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-7 rounded opacity-80 z-10"
          style={{ background: item.tape }}
        />

        {/* Photo */}
        <div
          className="relative flex flex-col items-center justify-center gap-3 pt-12 pb-6 px-6 overflow-hidden"
          style={{ background: item.avatarBg, minHeight: "250px" }}
        >
          {item.image ? (
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover absolute inset-0"
            />
          ) : (
            <span style={{ fontSize: "80px", lineHeight: 1 }}>{item.avatar}</span>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="text-xl font-black text-gray-800" style={{ fontFamily: "'Baloo 2', cursive" }}>
                {item.name}
              </h3>
              <p className="text-gray-400 text-sm" style={{ fontFamily: "'Baloo 2', cursive" }}>
                {item.type === "parent" ? item.child : item.age}
              </p>
            </div>
            {item.type === "parent"
              ? <Stars count={item.stars} />
              : <span className="text-lg font-black" style={{ color: item.tagColor }}>{item.badge}</span>
            }
          </div>

          {item.type === "parent" ? (
            <p className="text-gray-600 leading-relaxed text-base"
              style={{ fontFamily: "'Caveat', cursive", fontSize: "17px" }}>
              "{item.quote}"
            </p>
          ) : (
            <>
              <p className="font-black text-base mb-2" style={{ color: item.tagColor, fontFamily: "'Baloo 2', cursive" }}>
                {item.achievement}
              </p>
              <p className="text-gray-500 text-sm leading-relaxed" style={{ fontFamily: "'Baloo 2', cursive" }}>
                {item.desc}
              </p>
            </>
          )}
        </div>

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 font-bold transition-colors text-sm"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

export default function CommunitySection() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section
      className="relative w-full overflow-hidden py-20"
      style={{ background: "linear-gradient(170deg, #f0fdf4 0%, #e0f2fe 50%, #eff6ff 100%)" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;600;700;800;900&family=Caveat:wght@400;600;700&display=swap');

        @keyframes marquee-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }

        /* Pause on hover */
        .marquee-left-row:hover  div { animation-play-state: paused; }
        .marquee-right-row:hover div { animation-play-state: paused; }
      `}</style>

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #DBEAFE, transparent 70%)" }} />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #D6F5FF, transparent 70%)" }} />
        {/* Scattered confetti dots */}
        {[
          { top:"6%", left:"10%", size:10, color:"#0EA5E9" },
          { top:"12%", left:"80%", size:8, color:"#FFD700" },
          { top:"50%", left:"4%", size:12, color:"#4FC3F7" },
          { top:"70%", left:"90%", size:9, color:"#B5EAD7" },
          { top:"85%", left:"25%", size:7, color:"#F4A261" },
          { top:"30%", left:"96%", size:11, color:"#CE93D8" },
        ].map((d, i) => (
          <div key={i} className="absolute rounded-full"
            style={{ top:d.top, left:d.left, width:d.size, height:d.size, background:d.color, opacity:0.6 }} />
        ))}
        {/* Stars */}
        {[
          { top:"8%", left:"55%", size:16, color:"#FFD700" },
          { top:"75%", left:"12%", size:13, color:"#0EA5E9" },
          { top:"60%", left:"88%", size:11, color:"#4FC3F7" },
        ].map((s, i) => (
          <div key={i} className="absolute" style={{ top:s.top, left:s.left }}>
            <svg width={s.size} height={s.size} viewBox="0 0 24 24" fill={s.color} opacity="0.7">
              <polygon points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9" />
            </svg>
          </div>
        ))}
      </div>

      <div className="relative z-10">

        {/* ── Header ── */}
        <div className="text-center px-6 mb-14">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-full px-5 py-2 mb-5 shadow-sm">
            <span className="text-lg">💛</span>
            <span className="text-sm font-bold tracking-widest uppercase text-sky-500"
              style={{ fontFamily: "'Baloo 2', cursive" }}>
              Our Happy Community
            </span>
          </div>

          <h2
            className="text-4xl md:text-6xl font-black text-gray-800 leading-tight mb-4"
            style={{ fontFamily: "'Baloo 2', cursive" }}
          >
            Loved by{" "}
            <span className="relative inline-block">
              <span className="relative z-10" style={{ color: "#0EA5E9" }}>Families</span>
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 130 10" fill="none">
                <path d="M4 7 Q65 1 126 7" stroke="#FFD700" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
            {" & "}
            <span style={{ color: "#F4A261" }}>Stars</span>
          </h2>

          <p className="text-gray-500 text-lg max-w-lg mx-auto leading-relaxed"
            style={{ fontFamily: "'Baloo 2', cursive" }}>
            Real stories from the parents who trust us and the little stars who shine with us every day.
          </p>

          {/* Summary stats */}
          <div className="flex flex-wrap items-center justify-center gap-5 mt-8">
            {[
              { val: "290+", label: "Happy Families",   emoji: "👨‍👩‍👧", color: "#0EA5E9" },
              { val: "5.0★", label: "Parent Rating",    emoji: "⭐",     color: "#FFD700" },
             
              { val: "100%", label: "Would Recommend",  emoji: "💚",     color: "#4CAF50" },
            ].map(({ val, label, emoji, color }) => (
              <div key={label}
                className="flex items-center gap-3 bg-white/65 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-sm">
                <span className="text-2xl">{emoji}</span>
                <div className="text-left">
                  <div className="text-xl font-black leading-none" style={{ color, fontFamily: "'Baloo 2', cursive" }}>{val}</div>
                  <div className="text-xs text-gray-400 font-semibold uppercase tracking-wide"
                    style={{ fontFamily: "'Baloo 2', cursive" }}>{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Row 1: Parent Reviews → scrolls LEFT ── */}
{/*         <div className="mb-4">
          <div className="px-8 mb-4 flex items-center gap-3">
            <span className="text-2xl">👨‍👩‍👧‍👦</span>
            <h3 className="text-lg font-black text-gray-700" style={{ fontFamily: "'Baloo 2', cursive" }}>
              Parent Reviews
            </h3>
            <div className="h-px flex-1 bg-sky-200" />
            <span className="text-sm text-sky-400 font-semibold" style={{ fontFamily: "'Baloo 2', cursive" }}>
              Hover to pause ✋
            </span>
          </div>
          <div className="marquee-left-row">
            <MarqueeRow items={PARENT_REVIEWS} direction="left" speed={40} onCardClick={setActiveCard} />
          </div>
        </div> */}

        {/* ── Row 2: Student Achievements → scrolls RIGHT ── */}
        <div className="mt-6">
          <div className="px-8 mb-4 flex items-center gap-3">
            <div className="h-px flex-1 bg-orange-200" />
            <span className="text-sm text-orange-400 font-semibold" style={{ fontFamily: "'Baloo 2', cursive" }}>
              Click to spotlight 🔍
            </span>
            <h3 className="text-lg font-black text-gray-700" style={{ fontFamily: "'Baloo 2', cursive" }}>
              Student Achievements
            </h3>
            <span className="text-2xl">🌟</span>
          </div>
          <div className="marquee-right-row">
            <MarqueeRow items={STUDENT_ACHIEVEMENTS} direction="right" speed={38} onCardClick={setActiveCard} />
          </div>
        </div>

        {/* ── Bottom CTA ── */}
{/*         <div className="text-center mt-16 px-6">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white/70 backdrop-blur-sm rounded-3xl px-8 py-6 shadow-md border border-sky-100">
            <div className="text-left">
              <p className="text-lg font-black text-gray-800" style={{ fontFamily: "'Baloo 2', cursive" }}>
                Want to share your story? 📸
              </p>
              <p className="text-sm text-gray-400" style={{ fontFamily: "'Baloo 2', cursive" }}>
                We'd love to celebrate your child's milestones with the world!
              </p>
            </div>
            <button
              className="bg-sky-500 hover:bg-sky-400 text-white font-bold px-7 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 whitespace-nowrap"
              style={{ fontFamily: "'Baloo 2', cursive" }}
            >
              Share Your Story 💌
            </button>
          </div>
        </div> */}
      </div>

      {/* ── Modal ── */}
      <Modal item={activeCard} onClose={() => setActiveCard(null)} />
    </section>
  );
}