"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/* ─── DATA ─────────────────────────────────────────────────────────────────── */
const photos = [
  {
    id: "01",
    category: "Celebrations",
    title: "Annual Day Celebrations",
    src: "/gallery/annual-day-banner.jpg",
    color: "#E76F51",
    bg: "#FCE4D6",
    size: "large",
    description: "A grand celebration of talents, milestones, and joyful performances by our little stars.",
  },
  {
    id: "02",
    category: "Outdoor Play",
    title: "Field Trip Adventure",
    src: "/gallery/field-trip.jpg",
    color: "#52B788",
    bg: "#DFFFD8",
    size: "large",
    description: "Exploring the world beyond the classroom — curiosity, discovery, and endless fun.",
  },
  {
    id: "03",
    category: "Outdoor Play",
    title: "Play Area Fun – 1",
    src: "/gallery/play-area-1.jpg",
    color: "#0EA5E9",
    bg: "#E0F4FF",
    size: "small",
    description: "Little ones enjoying active play, building strength and making new friends.",
  },
  {
    id: "04",
    category: "Outdoor Play",
    title: "Play Area Fun – 2",
    src: "/gallery/play-area-2.jpg",
    color: "#F4A261",
    bg: "#FFF3CD",
    size: "small",
    description: "Slides, swings, and laughter — our play area is pure joy every single day.",
  },
  {
    id: "05",
    category: "Outdoor Play",
    title: "Play Area Fun – 3",
    src: "/gallery/play-area-3.jpg",
    color: "#0096C7",
    bg: "#D6F0FA",
    size: "small",
    description: "Teamwork and outdoor energy bringing big smiles to every child's face.",
  },
  {
    id: "06",
    category: "Outdoor Play",
    title: "Play Area Fun – 4",
    src: "/gallery/play-area-4.jpg",
    color: "#FBBF24",
    bg: "#FEF9C3",
    size: "small",
    description: "Running, jumping, and playing — nurturing healthy bodies and happy hearts.",
  },
  {
    id: "07",
    category: "Outdoor Play",
    title: "Play Area Fun – 5",
    src: "/gallery/play-area-5.jpg",
    color: "#457BE0",
    bg: "#E0ECFF",
    size: "small",
    description: "Every corner of our play area is designed to spark imagination and movement.",
  },
  {
    id: "08",
    category: "Celebrations",
    title: "School Poster Wall",
    src: "/gallery/school-poster.jpg",
    color: "#E76F51",
    bg: "#FCE4D6",
    size: "small",
    description: "Colourful posters crafted by young minds — creativity displayed with pride.",
  },
  {
    id: "09",
    category: "Sports",
    title: "Sports Day Highlights – 1",
    src: "/gallery/sports-day-1.jpg",
    color: "#52B788",
    bg: "#DFFFD8",
    size: "large",
    description: "Racing, cheering, and celebrating — our annual sports day in full swing!",
  },
  {
    id: "10",
    category: "Sports",
    title: "Sports Day Highlights – 2",
    src: "/gallery/sports-day-2.jpg",
    color: "#D4720B",
    bg: "#FDE8D8",
    size: "small",
    description: "Every child a champion — the spirit of sportsmanship shining bright.",
  },
  {
    id: "11",
    category: "Art & Craft",
    title: "Toy Cars Workshop",
    src: "/gallery/toy-cars.jpg",
    color: "#0EA5E9",
    bg: "#E0F4FF",
    size: "small",
    description: "Building and racing toy cars — hands-on play that fuels young engineers.",
  },
  {
    id: "12",
    category: "Art & Craft",
    title: "Train Model Display",
    src: "/gallery/train-model.jpg",
    color: "#FBBF24",
    bg: "#FEF9C3",
    size: "small",
    description: "Creative model-making that teaches patience, precision, and lots of fun.",
  },
  {
    id: "13",
    category: "Outdoor Play",
    title: "Zoo Visit",
    src: "/gallery/zoo-visit.jpg",
    color: "#52B788",
    bg: "#DFFFD8",
    size: "large",
    description: "Meeting amazing animals up close — a day full of wonder and wild discoveries!",
  },
];

const stats = [
  { value: "500+", label: "Happy Moments", emoji: "😊" },
  { value: "120+", label: "Activities",    emoji: "🎯" },
  { value: "5",    label: "Categories",    emoji: "🌟" },
  { value: "∞",    label: "Memories Made", emoji: "💛" },
];

const filters = ["All", "Art & Craft", "Outdoor Play", "Sports", "Celebrations"];

const categoryEmojis = {
  All: "✨",
  "Art & Craft": "🎨",
  "Outdoor Play": "🌻",
  Sports: "🏅",
  Celebrations: "🎉",
};

/* ─── HOOKS ─────────────────────────────────────────────────────────────────── */
function useInView(threshold = 0.08) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

/* ─── PHOTO CARD ─────────────────────────────────────────────────────────────── */
function PhotoCard({ photo, index }) {
  const [cardRef, inView] = useInView(0.06);
  const [hovered, setHovered] = useState(false);
  const isLarge = photo.size === "large";
  const delay = (index % 4) * 75;

  return (
    <div
      ref={cardRef}
      className="pg-card"
      data-index={index}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        animationDelay: `${delay}ms`,
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0) scale(1)" : "translateY(36px) scale(0.98)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s cubic-bezier(0.23,1,0.32,1) ${delay}ms, box-shadow 0.3s ease, border-color 0.3s ease`,
        boxShadow: hovered
          ? `0 16px 40px ${photo.color}25, 0 4px 12px rgba(0,0,0,0.07)`
          : "0 2px 10px rgba(0,0,0,0.06)",
        border: `1.5px solid ${hovered ? photo.color + "44" : "transparent"}`,
        "--card-color": photo.color,
        "--card-bg": photo.bg,
      }}
    >
      {/* ── Visual Zone ── */}
      <div
        className={`pg-card-visual${isLarge ? " large" : ""}`}
        style={{ background: photo.bg, position: "relative" }}
      >
        {/* top accent line */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "4px",
          background: `linear-gradient(90deg, ${photo.color}, ${photo.color}66, transparent)`,
          pointerEvents: "none", zIndex: 2,
        }} />

        {/* Real photo */}
        <Image
          src={photo.src}
          alt={photo.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          style={{
            objectFit: "cover",
            transform: hovered ? "scale(1.06)" : "scale(1)",
            transition: "transform 0.5s cubic-bezier(0.23,1,0.32,1)",
          }}
        />

        {/* overlay on hover */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1,
          background: `linear-gradient(135deg, ${photo.color}22, transparent 60%)`,
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease",
        }} />

        {/* category pill */}
        <span
          className="pg-cat-pill"
          style={{ color: photo.color, border: `1px solid ${photo.color}33`, zIndex: 3 }}
        >
          {categoryEmojis[photo.category]} {photo.category}
        </span>
      </div>

      {/* ── Info Zone ── */}
      <div className="pg-card-body">
        <h3 className="pg-card-title" style={{ color: "#1E2F3A" }}>{photo.title}</h3>
        <p className="pg-card-desc">{photo.description}</p>
        <div
          className="pg-card-bar"
          style={{
            width: hovered ? "56px" : "28px",
            background: `linear-gradient(90deg, ${photo.color}, ${photo.color}44)`,
          }}
        />
      </div>
    </div>
  );
}

/* ─── MARQUEE ─────────────────────────────────────────────────────────────── */
function Marquee() {
  const items = ["Art & Craft", "Outdoor Play", "Sports Day", "Celebrations", "Field Trips", "Creative Play", "Discovery", "Imagination"];
  const doubled = [...items, ...items];
  return (
    <div className="pg-marquee-wrap">
      <div className="pg-marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="pg-marquee-item">
            <span style={{ color: "#0EA5E9" }}>✦</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── STAT ────────────────────────────────────────────────────────────────── */
function Stat({ stat, index }) {
  const [ref, inView] = useInView(0.15);
  return (
    <div ref={ref} className="pg-stat" style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(22px)",
      transition: `opacity 0.6s ease ${index * 90}ms, transform 0.6s ease ${index * 90}ms`,
    }}>
      <span className="pg-stat-emoji">{stat.emoji}</span>
      <span className="pg-stat-val">{stat.value}</span>
      <span className="pg-stat-label">{stat.label}</span>
    </div>
  );
}

/* ─── MAIN ────────────────────────────────────────────────────────────────── */
export default function PhotoGallery() {
  const [headerRef, headerInView] = useInView(0.1);
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? photos
    : photos.filter(p => p.category === activeFilter);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;600;700;800&family=Nunito:wght@400;600;700;800&display=swap');

        @keyframes pgMarquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        @keyframes pgFloat   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }

        /* ── MOBILE-ONLY ANIMATIONS ── */
        @keyframes mobileSlideLeft  { from{opacity:0;transform:translateX(-28px) scale(0.95)} to{opacity:1;transform:translateX(0) scale(1)} }
        @keyframes mobileSlideRight { from{opacity:0;transform:translateX(28px) scale(0.95)}  to{opacity:1;transform:translateX(0) scale(1)} }
        @keyframes mobilePopUp      { from{opacity:0;transform:translateY(32px) scale(0.93)} to{opacity:1;transform:translateY(0) scale(1)} }
        @keyframes mobilePulseGlow  { 0%,100%{box-shadow:0 0 0 0 var(--card-color,#0EA5E9)22} 50%{box-shadow:0 0 18px 4px var(--card-color,#0EA5E9)22} }
        @keyframes mobileShimmer    { 0%{background-position:-200% center} 100%{background-position:200% center} }
        @keyframes mobileFilterPop  { 0%{transform:scale(0.88) translateY(6px);opacity:0} 70%{transform:scale(1.05) translateY(-2px)} 100%{transform:scale(1) translateY(0);opacity:1} }
        @keyframes mobileBounceIn   { 0%{transform:scale(0.7);opacity:0} 60%{transform:scale(1.08)} 80%{transform:scale(0.97)} 100%{transform:scale(1);opacity:1} }
        @keyframes mobileRipple     { 0%{transform:scale(0);opacity:0.5} 100%{transform:scale(4);opacity:0} }

        /* ── PAGE ── */
        .pg-section {
          background: #F0F9FF;
          font-family: 'Nunito', sans-serif;
          position: relative;
          overflow: hidden;
          width: 100%;
          padding: clamp(48px, 8vw, 96px) clamp(14px, 5vw, 64px) clamp(60px, 9vw, 110px);
        }

        /* ── BLOBS ── */
        .pg-blob {
          position: absolute; border-radius: 50%;
          pointer-events: none; z-index: 0;
          animation: pgFloat 8s ease-in-out infinite;
        }

        /* ── HEADER ── */
        .pg-header {
          text-align: center;
          padding: 0 clamp(8px, 3vw, 24px) clamp(32px, 5vw, 52px);
          position: relative; z-index: 1;
          max-width: 680px;
          margin: 0 auto;
        }
        .pg-badge {
          display: inline-block;
          background: linear-gradient(135deg,#0EA5E918,#0EA5E938);
          color: #0EA5E9;
          font-family: 'Nunito', sans-serif;
          font-weight: 800;
          font-size: clamp(10px, 2vw, 12px);
          padding: 5px 16px; border-radius: 30px;
          margin-bottom: 14px; letter-spacing: 1px;
          text-transform: uppercase;
          border: 1.5px solid #0EA5E930;
        }
        .pg-title {
          font-family: 'Baloo 2', sans-serif;
          font-size: clamp(1.7rem, 5.5vw, 3.4rem);
          font-weight: 800; color: #1E2F3A;
          margin: 0 0 12px; line-height: 1.15;
        }
        .pg-title-grad {
          background: linear-gradient(135deg,#0EA5E9,#FBBF24);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .pg-subtitle {
          font-family: 'Nunito', sans-serif;
          font-size: clamp(13px, 2.2vw, 16px);
          color: #5A7A8A; line-height: 1.7; margin: 0;
        }

        /* ── FILTER ── */
        .pg-filter-wrap {
          display: flex; justify-content: center;
          padding: 0 0 clamp(24px, 4vw, 44px);
          position: relative; z-index: 1;
        }
        .pg-filter-bar {
          display: flex; flex-wrap: wrap;
          gap: clamp(7px, 1.5vw, 11px);
          justify-content: center;
          background: #fff;
          padding: clamp(12px, 2vw, 18px) clamp(14px, 2.5vw, 24px);
          border-radius: 18px;
          box-shadow: 0 4px 22px rgba(14,165,233,0.10);
          width: 100%; max-width: 920px;
          border: 1.5px solid rgba(14,165,233,0.10);
        }
        .pg-fb {
          display: flex; align-items: center;
          gap: 5px;
          padding: clamp(7px,1.5vw,10px) clamp(12px,2vw,20px);
          border: none; border-radius: 30px;
          background: #E0F4FF; color: #5A7A8A;
          font-family: 'Nunito', sans-serif;
          font-weight: 700;
          font-size: clamp(11px, 1.8vw, 13px);
          cursor: pointer; transition: all 0.22s ease;
          white-space: nowrap; flex-shrink: 0;
          -webkit-tap-highlight-color: transparent;
        }
        .pg-fb:hover  { background: #BAE8FF; color: #0EA5E9; }
        .pg-fb.on {
          background: linear-gradient(135deg,#0EA5E9,#FBBF24);
          color: #fff;
          box-shadow: 0 4px 14px rgba(14,165,233,0.32);
        }
        .pg-fb:active { transform: scale(0.96); }

        /* ── GRID ── */
        .pg-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: clamp(12px, 2vw, 22px);
          max-width: 1320px;
          margin: 0 auto;
          position: relative; z-index: 1;
        }
        .pg-col-large { grid-column: span 8; }
        .pg-col-small { grid-column: span 4; }

        @media (max-width: 1024px) {
          .pg-grid { grid-template-columns: repeat(6, 1fr); }
          .pg-col-large { grid-column: span 6; }
          .pg-col-small { grid-column: span 3; }
        }

        /* ═══════════════════════════════════════════════════════════
           ██████  MOBILE STYLES — COMPLETELY REDESIGNED  ██████
           ═══════════════════════════════════════════════════════════ */
        @media (max-width: 768px) {

          .pg-section {
            padding: 36px 14px 56px;
          }

          .pg-filter-wrap {
            padding: 0 0 20px;
            margin: 0 -14px;
          }
          .pg-filter-bar {
            flex-wrap: nowrap;
            overflow-x: auto;
            overflow-y: hidden;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            justify-content: flex-start;
            padding: 12px 14px;
            gap: 8px;
            border-radius: 0;
            border-left: none;
            border-right: none;
            border-top: none;
            border-bottom: 1.5px solid rgba(14,165,233,0.10);
            box-shadow: 0 4px 16px rgba(14,165,233,0.08);
            width: 100%;
            max-width: 100%;
          }
          .pg-filter-bar::-webkit-scrollbar { display: none; }
          .pg-fb {
            flex-shrink: 0;
            font-size: 11px;
            padding: 7px 14px;
            border-radius: 24px;
            animation: mobileFilterPop 0.4s cubic-bezier(0.23,1,0.32,1) both;
          }
          .pg-fb.on {
            box-shadow: 0 4px 16px rgba(14,165,233,0.38), 0 0 0 3px rgba(14,165,233,0.12);
            transform: scale(1.06);
          }
          .pg-fb:active {
            transform: scale(0.93);
            transition: transform 0.1s ease;
          }

          .pg-grid {
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            padding: 0;
          }

          .pg-col-large {
            grid-column: span 2;
          }

          .pg-col-small {
            grid-column: span 1;
          }

          .pg-card {
            border-radius: 18px;
            overflow: hidden;
            position: relative;
            animation: mobilePopUp 0.55s cubic-bezier(0.23,1,0.32,1) both;
            transition:
              transform 0.22s cubic-bezier(0.23,1,0.32,1),
              box-shadow 0.22s ease,
              border-color 0.22s ease !important;
          }

          .pg-col-small:nth-child(odd) .pg-card {
            animation: mobileSlideLeft 0.55s cubic-bezier(0.23,1,0.32,1) both;
          }
          .pg-col-small:nth-child(even) .pg-card {
            animation: mobileSlideRight 0.55s cubic-bezier(0.23,1,0.32,1) both;
          }
          .pg-col-large .pg-card {
            animation: mobilePopUp 0.6s cubic-bezier(0.23,1,0.32,1) both;
          }

          .pg-card[data-index="0"]  { animation-delay: 0ms }
          .pg-card[data-index="1"]  { animation-delay: 60ms }
          .pg-card[data-index="2"]  { animation-delay: 120ms }
          .pg-card[data-index="3"]  { animation-delay: 180ms }
          .pg-card[data-index="4"]  { animation-delay: 240ms }
          .pg-card[data-index="5"]  { animation-delay: 300ms }
          .pg-card[data-index="6"]  { animation-delay: 360ms }
          .pg-card[data-index="7"]  { animation-delay: 420ms }
          .pg-card[data-index="8"]  { animation-delay: 480ms }
          .pg-card[data-index="9"]  { animation-delay: 540ms }
          .pg-card[data-index="10"] { animation-delay: 600ms }
          .pg-card[data-index="11"] { animation-delay: 660ms }
          .pg-card[data-index="12"] { animation-delay: 720ms }

          .pg-card:active {
            transform: scale(0.965) !important;
            box-shadow: 0 4px 20px rgba(0,0,0,0.10) !important;
          }

          .pg-col-large .pg-card {
            flex-direction: row;
            min-height: 130px;
            border: 1.5px solid transparent;
            background: #fff;
            animation: mobilePopUp 0.6s cubic-bezier(0.23,1,0.32,1) both;
          }
          .pg-col-large .pg-card-visual {
            width: 42%;
            min-width: 42%;
            height: auto !important;
            min-height: 130px;
            border-radius: 0;
            flex-shrink: 0;
          }
          .pg-col-large .pg-card-visual.large {
            height: auto !important;
          }
          .pg-col-large .pg-card-body {
            flex: 1;
            padding: 14px 14px 14px 12px;
            justify-content: center;
          }
          .pg-col-large .pg-card-title {
            font-size: 14px;
            margin-bottom: 4px;
          }
          .pg-col-large .pg-card-desc {
            font-size: 11px;
            -webkit-line-clamp: 2;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .pg-col-small .pg-card {
            flex-direction: column;
            border: 1.5px solid transparent;
            background: #fff;
          }
          .pg-col-small .pg-card-visual {
            height: 110px !important;
            border-radius: 0;
          }
          .pg-col-small .pg-card-body {
            padding: 10px 12px 12px;
          }
          .pg-col-small .pg-card-title {
            font-size: 12px;
            line-height: 1.25;
          }
          .pg-col-small .pg-card-desc {
            font-size: 10px;
            line-height: 1.45;
            -webkit-line-clamp: 2;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            overflow: hidden;
            color: #8AACBC;
          }
          .pg-col-small .pg-card-bar {
            margin-top: 8px;
          }

          .pg-cat-pill {
            font-size: 8px !important;
            padding: 2px 7px !important;
            top: 8px !important;
            left: 8px !important;
          }

          .pg-title { font-size: 1.8rem; }
          .pg-subtitle { font-size: 13px; }
          .pg-header { padding-bottom: 24px; }

          .pg-marquee-wrap { margin: 28px 0; }
        }

        /* ── Extra small phones ── */
        @media (max-width: 480px) {
          .pg-section { padding: 28px 12px 48px; }

          .pg-grid { gap: 10px; }

          .pg-col-large .pg-card {
            flex-direction: column;
          }
          .pg-col-large .pg-card-visual {
            width: 100%;
            min-height: 140px;
            height: 140px !important;
          }
          .pg-col-large .pg-card-body {
            padding: 12px 14px;
          }
          .pg-col-large .pg-card-title { font-size: 14px; }
          .pg-col-large .pg-card-desc {
            -webkit-line-clamp: 2;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .pg-col-small .pg-card-visual { height: 95px !important; }
          .pg-col-small .pg-card-title { font-size: 11px; }
        }

        /* ═══════════════════════════════════════════════════════════
           END MOBILE STYLES
           ═══════════════════════════════════════════════════════════ */

        /* ── CARD ── */
        .pg-card {
          border-radius: clamp(14px, 2vw, 20px);
          overflow: hidden;
          background: #fff;
          display: flex; flex-direction: column;
          height: 100%;
          cursor: pointer;
        }
        .pg-card:active { transform: scale(0.98) !important; }

        .pg-card-visual {
          position: relative;
          height: clamp(150px, 22vw, 240px);
          display: flex; align-items: center; justify-content: center;
          overflow: hidden; flex-shrink: 0;
        }
        .pg-card-visual.large {
          height: clamp(180px, 26vw, 280px);
        }

        .pg-cat-pill {
          position: absolute; top: 12px; left: 12px;
          font-size: clamp(9px, 1.5vw, 10px);
          font-weight: 700;
          font-family: 'Nunito', sans-serif;
          letter-spacing: 0.07em; text-transform: uppercase;
          background: #fff;
          padding: 3px 9px; border-radius: 20px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.08);
          z-index: 2; white-space: nowrap;
        }

        .pg-card-body {
          padding: clamp(12px, 2vw, 20px) clamp(14px, 2.5vw, 22px) clamp(16px, 2.5vw, 22px);
          flex: 1; display: flex; flex-direction: column; gap: 5px;
        }
        .pg-card-title {
          font-family: 'Baloo 2', sans-serif;
          font-size: clamp(14px, 2vw, 18px);
          font-weight: 800; margin: 0; line-height: 1.2;
        }
        .pg-card-desc {
          font-family: 'Nunito', sans-serif;
          font-size: clamp(11px, 1.6vw, 13px);
          color: #7A9AAA; margin: 0;
          line-height: 1.55; flex: 1;
        }
        .pg-card-bar {
          margin-top: clamp(8px, 1.5vw, 14px);
          height: 3px; border-radius: 2px;
          transition: width 0.35s ease;
        }

        /* ── MARQUEE ── */
        .pg-marquee-wrap {
          overflow: hidden;
          border-top: 1.5px dashed rgba(14,165,233,0.18);
          border-bottom: 1.5px dashed rgba(14,165,233,0.18);
          padding: 13px 0;
          margin: clamp(36px, 6vw, 64px) 0;
          background: rgba(255,255,255,0.55);
          position: relative; z-index: 1;
        }
        .pg-marquee-track {
          display: flex;
          animation: pgMarquee 28s linear infinite;
          width: max-content;
        }
        .pg-marquee-item {
          display: flex; align-items: center; gap: 11px;
          font-family: 'Nunito', sans-serif;
          font-size: clamp(9px, 1.5vw, 11px);
          letter-spacing: 0.2em; text-transform: uppercase;
          color: rgba(14,100,160,0.38);
          padding: 0 22px; white-space: nowrap; font-weight: 700;
        }

        /* ── STATS ── */
        .pg-stats {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          max-width: 1320px;
          margin: 0 auto clamp(40px, 6vw, 64px);
          background: #fff;
          border-radius: clamp(14px, 2vw, 20px);
          box-shadow: 0 4px 28px rgba(14,165,233,0.10);
          overflow: hidden;
          position: relative; z-index: 1;
          border: 1.5px solid rgba(14,165,233,0.10);
        }
        .pg-stat-div { border-left: 1.5px solid rgba(14,165,233,0.10); }
        @media (max-width: 640px) {
          .pg-stats { grid-template-columns: repeat(2,1fr); }
          .pg-stat-div:nth-child(3) { border-left: none; }
        }
        .pg-stat {
          display: flex; flex-direction: column;
          align-items: center; gap: 5px;
          padding: clamp(20px,4vw,36px) clamp(12px,2vw,24px);
        }
        .pg-stat-emoji { font-size: clamp(20px, 3.5vw, 26px); }
        .pg-stat-val {
          font-family: 'Baloo 2', sans-serif;
          font-size: clamp(22px, 4vw, 38px);
          font-weight: 800; line-height: 1;
          background: linear-gradient(135deg,#0EA5E9,#FBBF24);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }
        .pg-stat-label {
          font-family: 'Nunito', sans-serif;
          font-size: clamp(9px, 1.5vw, 11px);
          color: #7A9AAA; letter-spacing: 0.1em;
          text-transform: uppercase; font-weight: 700;
          text-align: center;
        }

        /* ── CTA ── */
        .pg-cta-wrap {
          display: flex; align-items: center; justify-content: center;
          gap: clamp(10px, 2vw, 16px); flex-wrap: wrap;
          position: relative; z-index: 1;
        }
        .pg-cta-primary {
          display: inline-flex; align-items: center; gap: 8px;
          padding: clamp(10px,2vw,13px) clamp(22px,4vw,32px);
          border-radius: 50px;
          font-family: 'Baloo 2', sans-serif;
          font-size: clamp(13px, 2vw, 15px); font-weight: 800;
          background: linear-gradient(135deg,#0EA5E9,#FBBF24);
          color: #fff; border: none; cursor: pointer; text-decoration: none;
          box-shadow: 0 6px 22px rgba(14,165,233,0.35);
          transition: transform 0.2s, box-shadow 0.2s;
          -webkit-tap-highlight-color: transparent;
        }
        .pg-cta-primary:hover  { transform: translateY(-2px); box-shadow: 0 10px 30px rgba(14,165,233,0.45); }
        .pg-cta-primary:active { transform: scale(0.97); }
        .pg-cta-secondary {
          display: inline-flex; align-items: center; gap: 8px;
          padding: clamp(10px,2vw,13px) clamp(20px,3.5vw,28px);
          border-radius: 50px;
          font-family: 'Baloo 2', sans-serif;
          font-size: clamp(13px, 2vw, 15px); font-weight: 700;
          background: #fff; color: #0EA5E9;
          border: 1.5px solid rgba(14,165,233,0.25);
          cursor: pointer; text-decoration: none;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          transition: all 0.22s ease;
          -webkit-tap-highlight-color: transparent;
        }
        .pg-cta-secondary:hover  { background: #E0F4FF; border-color: rgba(14,165,233,0.5); }
        .pg-cta-secondary:active { transform: scale(0.97); }

        @media (hover: none) {
          .pg-card:hover { transform: none !important; box-shadow: 0 2px 10px rgba(0,0,0,0.06) !important; }
        }
      `}</style>

      <section className="pg-section">
        {/* blobs */}
        <div className="pg-blob" style={{ width:"clamp(160px,28vw,320px)", height:"clamp(160px,28vw,320px)", top:"-60px", right:"-60px", background:"radial-gradient(circle,#0EA5E912 0%,transparent 70%)", animationDelay:"0s" }} />
        <div className="pg-blob" style={{ width:"clamp(120px,22vw,260px)", height:"clamp(120px,22vw,260px)", bottom:"8%", left:"-50px", background:"radial-gradient(circle,#FBBF2412 0%,transparent 70%)", animationDelay:"3s" }} />
        <div className="pg-blob" style={{ width:"clamp(100px,18vw,200px)", height:"clamp(100px,18vw,200px)", top:"42%", right:"4%", background:"radial-gradient(circle,#0096C710 0%,transparent 70%)", animationDelay:"5.5s" }} />

        {/* ── HEADER ── */}
        <div
          ref={headerRef}
          className="pg-header"
          style={{
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? "translateY(0)" : "translateY(32px)",
            transition: "opacity 0.8s ease, transform 0.8s cubic-bezier(0.23,1,0.32,1)",
          }}
        >
          <div className="pg-badge">📸 Our Gallery</div>
          <h1 className="pg-title">
            Moments of <span className="pg-title-grad">Joy & Learning</span>
          </h1>
          <p className="pg-subtitle">
            Every day brings new adventures, friendships, and discoveries — a peek into the magical world of our little learners.
          </p>
        </div>

        {/* ── FILTER ── */}
        <div className="pg-filter-wrap">
          <div className="pg-filter-bar">
            {filters.map(f => (
              <button
                key={f}
                className={`pg-fb${activeFilter === f ? " on" : ""}`}
                onClick={() => setActiveFilter(f)}
              >
                <span>{categoryEmojis[f]}</span>{f}
              </button>
            ))}
          </div>
        </div>

        {/* ── GALLERY GRID ── */}
        <div className="pg-grid">
          {filtered.map((photo, i) => (
            <div
              key={photo.id}
              className={photo.size === "large" ? "pg-col-large" : "pg-col-small"}
            >
              <PhotoCard photo={photo} index={i} />
            </div>
          ))}
        </div>

        {/* ── MARQUEE ── */}
        <Marquee />

        {/* ── STATS ── */}
{/*         <div className="pg-stats">
          {stats.map((s, i) => (
            <div key={s.label} className={i > 0 ? "pg-stat-div" : ""}>
              <Stat stat={s} index={i} />
            </div>
          ))}
        </div> */}

        {/* ── CTA ── */}
        <div className="pg-cta-wrap">
          <a href="/admissions" className="pg-cta-primary">✦ Join Our Family</a>
          <a href="/contactus" className="pg-cta-secondary">Contact Us →</a>
        </div>
      </section>
    </>
  );
}