"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

export default function HeroSection() {
  const parallaxRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const triggerEl = parallaxRef.current?.querySelector("[data-parallax-layers]");
    if (!triggerEl) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerEl,
        start: "0% 0%",
        end: "100% 0%",
        scrub: 0,
      },
    });

    const layers = [
      { layer: "1", yPercent: 60 },
      { layer: "2", yPercent: 40 },
      { layer: "3", yPercent: 20 },
      { layer: "4", yPercent: 70 },
    ];

    layers.forEach((l, idx) => {
      tl.to(
        triggerEl.querySelectorAll(`[data-parallax-layer="${l.layer}"]`),
        { yPercent: l.yPercent, ease: "none" },
        idx === 0 ? undefined : "<"
      );
    });

    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      gsap.killTweensOf(triggerEl);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <style>{`
        .hero-parallax {
          position: relative;
          width: 100%;
        }
        .hero-parallax__header {
          position: relative;
          height: 100svh;
          overflow: hidden;
        }
        .hero-parallax__visuals {
          position: absolute;
          inset: 0;
        }
        .hero-parallax__black-line-overflow {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          background: #cfe8f7;
          z-index: 10;
        }
        .hero-parallax__layers {
          position: absolute;
          inset: 0;
          will-change: transform;
        }
        .hero-parallax__fade {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 200px;
          background: linear-gradient(to bottom, transparent, #eef2ff);
          z-index: 9;
          pointer-events: none;
        }
        .hero-parallax__content {
          position: relative;
          background: #eef2ff;
          padding: 80px 40px;
          display: flex;
          justify-content: center;
        }

        /* ── Hero image ── */
        .layer-hero-img {
          position: absolute;
          left: 50%;
          top: 62%;
          transform: translate(-50%, -50%);
          width: clamp(320px, 85vw, 680px);
          height: auto;
          object-fit: contain;
          pointer-events: none;
          user-select: none;
          filter: drop-shadow(0 24px 40px rgba(0,0,0,0.15));
          z-index: 4;
        }
        @media (min-width: 768px) {
          .layer-hero-img {
            top: 68%;
            width: clamp(480px, 56vw, 740px);
          }
        }

        /* ── Text layer ── */
        .hero-text-layer {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          padding: 10% 6% 0;
          pointer-events: none;
          z-index: 6;
        }

        /* LEFT block */
        .hero-left {
          display: flex;
          flex-direction: column;
          gap: 8px;
          width: 46%;
          max-width: 280px;
          pointer-events: auto;
        }

        /* On mobile, shrink font so it doesn't crowd shinchan */
        .hero-left h1 {
          font-size: clamp(20px, 6vw, 48px);
          line-height: 1.2;
        }

        @media (min-width: 768px) {
          .hero-text-layer {
            align-items: center;
            padding: 0 5% 8%;
          }
          .hero-left {
            width: 38%;
          }
          .hero-left h1 {
            font-size: clamp(32px, 4vw, 48px);
          }
        }

        /* RIGHT block — hidden on mobile */
        .hero-right {
          display: none;
          flex-direction: column;
          gap: 10px;
          width: 34%;
          max-width: 240px;
          align-items: flex-end;
          pointer-events: auto;
        }
        @media (min-width: 768px) {
          .hero-right { display: flex; }
        }

        /* Tagline pill */
        .tagline-pill {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: rgba(255,255,255,0.72);
          backdrop-filter: blur(8px);
          border-radius: 999px;
          padding: 5px 11px;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #3b82f6;
          width: fit-content;
          white-space: nowrap;
        }

        /* Feature badges */
        .feature-badge {
          display: flex;
          align-items: center;
          gap: 7px;
          background: rgba(255,255,255,0.75);
          backdrop-filter: blur(8px);
          border-radius: 12px;
          padding: 7px 12px;
          font-size: 11px;
          font-weight: 600;
          color: #374151;
          white-space: nowrap;
        }

        /* Mobile CTA */
        .hero-mobile-cta {
          position: absolute;
          bottom: 130px;
          left: 0; right: 0;
          display: flex;
          justify-content: center;
          z-index: 20;
          pointer-events: none;
        }
        .hero-mobile-cta button { pointer-events: auto; }
        @media (min-width: 768px) {
          .hero-mobile-cta { display: none; }
        }
      `}</style>

      <div className="hero-parallax" ref={parallaxRef}>
        <section className="hero-parallax__header">
          <div className="hero-parallax__visuals">
            <div className="hero-parallax__black-line-overflow" />

            <div data-parallax-layers className="hero-parallax__layers">

              {/* ── LAYER 1 · Sky ── */}
              <div
                data-parallax-layer="1"
                className="absolute inset-0"
                style={{ background: "linear-gradient(160deg,#cfe8f7 0%,#b8ddf5 40%,#d4eef9 100%)" }}
              >
                <div className="absolute top-[-10%] left-[-5%] w-[60%] h-[60%] rounded-full opacity-40"
                  style={{ background: "radial-gradient(circle,#a8d8f0 0%,transparent 70%)" }} />
                <div className="absolute top-[10%] right-[-10%] w-[50%] h-[50%] rounded-full opacity-30"
                  style={{ background: "radial-gradient(circle,#fde68a 0%,transparent 70%)" }} />
                <div className="absolute bottom-[20%] left-[10%] w-[40%] h-[40%] rounded-full opacity-25"
                  style={{ background: "radial-gradient(circle,#bbf7d0 0%,transparent 70%)" }} />
              </div>

              {/* ── LAYER 2 · Clouds & shapes ── */}
              <div data-parallax-layer="2" className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[10%] left-[4%] opacity-80">
                  <svg width="155" height="68" viewBox="0 0 180 80" fill="none">
                    <ellipse cx="70" cy="52" rx="70" ry="28" fill="white" />
                    <ellipse cx="110" cy="44" rx="50" ry="24" fill="white" />
                    <ellipse cx="50" cy="44" rx="36" ry="20" fill="white" />
                    <ellipse cx="90" cy="32" rx="38" ry="22" fill="white" />
                  </svg>
                </div>
                <div className="absolute top-[7%] right-[6%] opacity-70">
                  <svg width="118" height="52" viewBox="0 0 140 60" fill="none">
                    <ellipse cx="55" cy="40" rx="55" ry="22" fill="white" />
                    <ellipse cx="85" cy="33" rx="40" ry="19" fill="white" />
                    <ellipse cx="38" cy="33" rx="28" ry="16" fill="white" />
                    <ellipse cx="68" cy="24" rx="30" ry="18" fill="white" />
                  </svg>
                </div>
                <div className="absolute top-[20%] left-[14%] w-9 h-9 rounded-full opacity-80"
                  style={{ background: "#fbbf24", boxShadow: "0 4px 16px rgba(251,191,36,0.4)" }} />
                <div className="absolute top-[16%] right-[18%] w-6 h-6 rounded-full opacity-70"
                  style={{ background: "#f472b6", boxShadow: "0 4px 12px rgba(244,114,182,0.4)" }} />
                <div className="absolute top-[38%] left-[7%] w-4 h-4 rounded-full opacity-60"
                  style={{ background: "#34d399", boxShadow: "0 4px 10px rgba(52,211,153,0.4)" }} />
                <div className="absolute top-[28%] right-[10%] w-7 h-7 rounded-full opacity-65"
                  style={{ background: "#818cf8", boxShadow: "0 4px 14px rgba(129,140,248,0.4)" }} />
                {[
                  { top: "13%", left: "30%", size: 15, color: "#fbbf24" },
                  { top: "24%", left: "66%", size: 12, color: "#f472b6" },
                  { top: "40%", left: "20%", size: 10, color: "#34d399" },
                ].map((s, i) => (
                  <div key={i} className="absolute" style={{ top: s.top, left: s.left }}>
                    <svg width={s.size} height={s.size} viewBox="0 0 24 24" fill={s.color}>
                      <polygon points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9" />
                    </svg>
                  </div>
                ))}
              </div>

              {/* ── LAYER 3 · Text ── */}
              <div data-parallax-layer="3" className="hero-text-layer">

                {/* LEFT — Title + CTA */}
                <div className="hero-left">
                  <div className="tagline-pill">✦ Where Learning Feels Like Play</div>
                  <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                    Welcome to<br />
                    <span className="text-blue-500">Little</span>{" "}
                    <span className="text-pink-500">Berries</span>
                  </h1>
                  <a
                    href="/administration"
                    className="hidden md:inline-flex mt-1 bg-blue-500 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:bg-blue-400 hover:scale-105 transition-all duration-200 w-fit text-sm"
                  >
                    Explore More
                  </a>
                </div>

                {/* RIGHT — Playschool taglines (desktop only) */}
                <div className="hero-right">
                  <p className="text-sm font-bold text-gray-700 leading-snug text-right">
                    A place where every child's<br />
                    <span className="text-pink-500">curiosity is celebrated 🌟</span>
                  </p>
                  <div className="feature-badge">
                    <span>Nurturing young minds</span>
                    <span>🌱</span>
                  </div>
                  <div className="feature-badge">
                    <span>Play-based learning</span>
                    <span>🎨</span>
                  </div>
                  <div className="feature-badge">
                    <span>Safe &amp; joyful space</span>
                    <span>🏡</span>
                  </div>
                  <div className="feature-badge">
                    <span>Grow, explore &amp; shine!</span>
                    <span>✨</span>
                  </div>
                </div>

              </div>

              {/* ── LAYER 4 · Hero image + foreground ── */}
              <div data-parallax-layer="4" className="absolute inset-0 pointer-events-none">
                <img src="/hero2.png" alt="Little Berries" className="layer-hero-img" />
                <div className="absolute bottom-0 left-0 right-0">
                  <svg viewBox="0 0 1440 120" className="w-full h-[65px] md:h-[110px]" preserveAspectRatio="none" fill="none">
                    <path d="M0,80 C120,40 200,100 360,70 C520,40 600,90 720,65 C840,40 960,85 1080,60 C1200,35 1320,80 1440,55 L1440,120 L0,120Z" fill="#bbf7d0" opacity="0.5" />
                    <path d="M0,95 C180,60 300,110 480,85 C660,60 780,100 960,80 C1100,60 1280,95 1440,75 L1440,120 L0,120Z" fill="#86efac" opacity="0.4" />
                    <path d="M0,108 C200,85 400,115 600,100 C800,85 1000,110 1200,95 C1340,85 1400,105 1440,100 L1440,120 L0,120Z" fill="#4ade80" opacity="0.3" />
                  </svg>
                </div>
                <div className="absolute left-[30%] top-[22%] w-5 h-5 rounded-full border-2 border-blue-300 opacity-60" />
                <div className="absolute right-[30%] top-[28%] w-4 h-4 rounded-full border-2 border-pink-300 opacity-50" />
                <div className="absolute left-[40%] bottom-[32%] w-3 h-3 rounded-full bg-yellow-300 opacity-70" />
                <div className="absolute right-[37%] bottom-[36%] w-4 h-4 rounded-full bg-purple-300 opacity-60" />
              </div>

            </div>

            {/* Mobile CTA */}
            <div className="hero-mobile-cta">
              <button className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-400 transition-all duration-200">
                Explore Admissions
              </button>
            </div>

            <div className="hero-parallax__fade" />
          </div>
        </section>

        <section className="hero-parallax__content">
        </section>
      </div>
    </>
  );
}