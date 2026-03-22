"use client";

import { useState } from "react";

const FACILITIES = [
  {
    id: "classrooms",
    name: "Smart Classrooms",
    emoji: "🏫",
    color: "#4FC3F7",
    light: "#E1F5FE",
    accent: "#0288D1",
    stat: "6 Rooms",
    tag: "Learning Hub",
    desc: "Bright, airy classrooms with interactive smart boards, cozy reading nooks, and age-appropriate furniture designed to spark curiosity.",
    features: ["Smart Boards", "Reading Corners", "Natural Light", "AC Cooled"],
    shape: "col-span-2 row-span-2",
  },
  {
    id: "playground",
    name: "Outdoor Play Zone",
    emoji: "🛝",
    color: "#FFD54F",
    light: "#FFF8E1",
    accent: "#F57F17",
    stat: "4000 sq.ft",
    tag: "Adventure Awaits",
    desc: "Sprawling outdoor space with soft-fall turf, climbing frames, swings, and splash pads for sensory play.",
    features: ["Soft Turf", "Climbing Wall", "Splash Pad", "Sand Pit"],
    shape: "col-span-1 row-span-1",
  },
  {
    id: "art",
    name: "Art & Craft Studio",
    emoji: "🎨",
    color: "#F48FB1",
    light: "#FCE4EC",
    accent: "#C2185B",
    stat: "1 Dedicated Studio",
    tag: "Create & Imagine",
    desc: "A messy, magical space where little hands explore paint, clay, collage, and craft with zero limits.",
    features: ["Kiln & Clay", "Paint Walls", "Craft Tables", "Display Gallery"],
    shape: "col-span-1 row-span-1",
  },
  {
    id: "library",
    name: "Story Corner",
    emoji: "📚",
    color: "#A5D6A7",
    light: "#E8F5E9",
    accent: "#2E7D32",
    stat: "800+ Books",
    tag: "Every Page, A World",
    desc: "A cozy, carpeted library with bean bags, picture books, audio stories, and a storytelling stage for tiny narrators.",
    features: ["Bean Bag Zone", "Audio Stories", "Story Stage", "Bilingual Books"],
    shape: "col-span-1 row-span-1",
  },
  {
    id: "music",
    name: "Music & Dance Room",
    emoji: "🎵",
    color: "#CE93D8",
    light: "#F3E5F5",
    accent: "#7B1FA2",
    stat: "20+ Instruments",
    tag: "Move & Groove",
    desc: "Sound-padded studio with percussion, keyboards, and a sprung dance floor for rhythm, movement, and self-expression.",
    features: ["Drum Kits", "Keyboards", "Dance Floor", "Sound Proof"],
    shape: "col-span-1 row-span-1",
  },
  {
    id: "dining",
    name: "Nutrition Kitchen",
    emoji: "🍱",
    color: "#FFAB76",
    light: "#FFF3E0",
    accent: "#E65100",
    stat: "100% Hygienic",
    tag: "Eat Well, Grow Well",
    desc: "A spotless, FSSAI-compliant kitchen serving fresh, balanced meals and healthy snacks prepared by certified nutritionists.",
    features: ["Fresh Daily", "Allergen Aware", "FSSAI Certified", "Waste Zero"],
    shape: "col-span-1 row-span-1",
  },
  {
    id: "medical",
    name: "Health & Wellness Bay",
    emoji: "🏥",
    color: "#80DEEA",
    light: "#E0F7FA",
    accent: "#00838F",
    stat: "24×7 Nurse",
    tag: "Safe & Cared For",
    desc: "On-site medical bay with a resident nurse, first-aid station, rest area, and emergency protocols for every little one.",
    features: ["Resident Nurse", "First Aid", "Rest Area", "Emergency Line"],
    shape: "col-span-2 row-span-1",
  },
  {
    id: "stem",
    name: "STEM Discovery Lab",
    emoji: "🔬",
    color: "#B0BEC5",
    light: "#ECEFF1",
    accent: "#37474F",
    stat: "Age 3–6",
    tag: "Tiny Scientists",
    desc: "Hands-on lab tables stocked with building blocks, simple circuits, magnets, and nature kits for early STEM exploration.",
    features: ["Building Kits", "Magnets", "Nature Trays", "Coding Toys"],
    shape: "col-span-1 row-span-1",
  },
];

function FeaturePill({ text, accent }) {
  return (
    <span
      className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full"
      style={{ background: `${accent}18`, color: accent, border: `1px solid ${accent}30` }}
    >
      ✓ {text}
    </span>
  );
}

function FacilityCard({ facility, isActive, onClick }) {
  return (
    <div
      onClick={onClick}
      className="relative rounded-3xl cursor-pointer overflow-hidden group transition-all duration-500"
      style={{
        background: isActive ? facility.color : facility.light,
        border: `2.5px solid ${isActive ? facility.accent : facility.color}`,
        boxShadow: isActive
          ? `0 20px 60px ${facility.color}60, 0 4px 16px ${facility.color}40`
          : `0 4px 16px ${facility.color}30`,
        transform: isActive ? "scale(1.02)" : "scale(1)",
      }}
    >
      {/* Top row */}
      <div className="flex items-start justify-between p-5 pb-3">
        {/* Icon blob */}
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-md transition-all duration-300 group-hover:scale-110"
          style={{ background: isActive ? "rgba(255,255,255,0.35)" : facility.color }}
        >
          {facility.emoji}
        </div>

        {/* Stat badge */}
        <div
          className="rounded-full px-3 py-1.5 text-xs font-bold tracking-wide"
          style={{
            background: isActive ? "rgba(255,255,255,0.3)" : facility.accent,
            color: isActive ? "#fff" : "#fff",
          }}
        >
          {facility.stat}
        </div>
      </div>

      {/* Tag */}
      <div className="px-5">
        <span
          className="text-[10px] font-black tracking-[0.18em] uppercase"
          style={{ color: isActive ? "rgba(255,255,255,0.7)" : facility.accent }}
        >
          {facility.tag}
        </span>
      </div>

      {/* Name */}
      <h3
        className="px-5 pt-1 text-lg font-black leading-tight"
        style={{
          color: isActive ? "#fff" : "#1a1a1a",
          fontFamily: "'Fredoka One', cursive",
        }}
      >
        {facility.name}
      </h3>

      {/* Description — expands on active */}
      <div
        className="overflow-hidden transition-all duration-500"
        style={{ maxHeight: isActive ? "200px" : "0px" }}
      >
        <p
          className="px-5 pt-3 text-sm leading-relaxed"
          style={{ color: "rgba(255,255,255,0.88)", fontFamily: "'Nunito', sans-serif" }}
        >
          {facility.desc}
        </p>
        <div className="flex flex-wrap gap-2 px-5 pt-3 pb-5">
          {facility.features.map((f) => (
            <span
              key={f}
              className="text-xs font-bold px-3 py-1 rounded-full"
              style={{ background: "rgba(255,255,255,0.25)", color: "#fff" }}
            >
              ✓ {f}
            </span>
          ))}
        </div>
      </div>

      {/* Collapsed bottom */}
      {!isActive && (
        <div className="px-5 pb-5 pt-2">
          <p
            className="text-xs line-clamp-2 leading-relaxed"
            style={{ color: facility.accent, fontFamily: "'Nunito', sans-serif" }}
          >
            {facility.desc}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {facility.features.slice(0, 2).map((f) => (
              <FeaturePill key={f} text={f} accent={facility.accent} />
            ))}
            {facility.features.length > 2 && (
              <span className="text-xs font-semibold" style={{ color: facility.accent }}>
                +{facility.features.length - 2} more
              </span>
            )}
          </div>
        </div>
      )}

      {/* Decorative corner blob */}
      <div
        className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full opacity-20 pointer-events-none transition-all duration-500 group-hover:opacity-30 group-hover:scale-125"
        style={{ background: facility.accent }}
      />
    </div>
  );
}

export default function InfrastructureSection() {
  const [activeId, setActiveId] = useState(null);

  const toggle = (id) => setActiveId((prev) => (prev === id ? null : id));

  return (
    <section className="relative w-full overflow-hidden py-20 px-4 md:px-8"
      style={{ background: "linear-gradient(160deg, #fffde7 0%, #e8f5e9 40%, #e3f2fd 100%)" }}
    >
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@400;600;700;800;900&display=swap');
      `}</style>

      {/* Background doodles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top-left blob */}
        <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #FFD54F, transparent 70%)" }} />
        {/* Bottom-right blob */}
        <div className="absolute -bottom-24 -right-16 w-80 h-80 rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #4FC3F7, transparent 70%)" }} />
        {/* Floating dots */}
        {[
          { top: "8%",  left: "18%",  size: 10, color: "#F48FB1" },
          { top: "15%", left: "72%",  size: 14, color: "#A5D6A7" },
          { top: "75%", left: "8%",   size: 12, color: "#CE93D8" },
          { top: "82%", left: "85%",  size: 8,  color: "#FFAB76" },
          { top: "45%", left: "95%",  size: 10, color: "#FFD54F" },
          { top: "55%", left: "2%",   size: 7,  color: "#80DEEA" },
        ].map((d, i) => (
          <div key={i} className="absolute rounded-full"
            style={{ top: d.top, left: d.left, width: d.size, height: d.size, background: d.color, opacity: 0.6 }} />
        ))}
        {/* Stars */}
        {[
          { top: "12%", left: "88%", size: 18, color: "#FFD54F" },
          { top: "70%", left: "14%", size: 14, color: "#F48FB1" },
          { top: "30%", left: "5%",  size: 12, color: "#4FC3F7" },
        ].map((s, i) => (
          <div key={i} className="absolute" style={{ top: s.top, left: s.left }}>
            <svg width={s.size} height={s.size} viewBox="0 0 24 24" fill={s.color} opacity="0.7">
              <polygon points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9" />
            </svg>
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ── Header ── */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-full px-5 py-2 mb-5 shadow-sm">
            <span className="text-lg">🏡</span>
            <span className="text-sm font-bold tracking-widest uppercase text-blue-500"
              style={{ fontFamily: "'Nunito', sans-serif" }}>
              Our Campus
            </span>
          </div>

          <h2
            className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-4"
            style={{ fontFamily: "'Fredoka One', cursive" }}
          >
            Built for{" "}
            <span className="relative inline-block">
              <span className="relative z-10" style={{ color: "#0288D1" }}>Little</span>
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 120 10" fill="none">
                <path d="M4 7 Q60 1 116 7" stroke="#FFD54F" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>{" "}
            <span style={{ color: "#C2185B" }}>Explorers</span>
          </h2>

          <p
            className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Every corner of our campus is thoughtfully designed to nurture curiosity,
            creativity, and confidence in every child.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
            {[
              { val: "12,000", unit: "sq.ft", label: "Campus Area", color: "#0288D1" },
              { val: "8+",     unit: "",       label: "Dedicated Spaces", color: "#C2185B" },
              { val: "100%",   unit: "",       label: "CCTV Covered", color: "#2E7D32" },
              { val: "24×7",   unit: "",       label: "Security", color: "#7B1FA2" },
            ].map(({ val, unit, label, color }) => (
              <div key={label} className="text-center bg-white/60 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-sm">
                <div className="text-2xl font-black" style={{ color, fontFamily: "'Fredoka One', cursive" }}>
                  {val}<span className="text-lg">{unit}</span>
                </div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wide mt-0.5"
                  style={{ fontFamily: "'Nunito', sans-serif" }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Facility Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FACILITIES.map((facility) => (
            <FacilityCard
              key={facility.id}
              facility={facility}
              isActive={activeId === facility.id}
              onClick={() => toggle(facility.id)}
            />
          ))}
        </div>


      </div>
    </section>
  );
}