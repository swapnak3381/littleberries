"use client";

import { useState, useEffect } from "react";

const staff = [
  {
    id: 1,
    name: "Mrs. Priya Sharma",
    role: "Principal",
    email: "priya.sharma@littleberries.edu",
    phone: "+91 98765 43210",
    since: "2015",
    avatar: "PS",
    color: "#7c3aed",
    bg: "#f3e8ff",
    border: "#ddd6fe",
  },
  {
    id: 2,
    name: "Mr. Arjun Mehta",
    role: "Vice Principal",
    email: "arjun.mehta@littleberries.edu",
    phone: "+91 98765 43211",
    since: "2017",
    avatar: "AM",
    color: "#b45309",
    bg: "#fef3c7",
    border: "#fde68a",
  },
  {
    id: 3,
    name: "Ms. Divya Nair",
    role: "Academic Coordinator",
    email: "divya.nair@littleberries.edu",
    phone: "+91 98765 43212",
    since: "2019",
    avatar: "DN",
    color: "#1d4ed8",
    bg: "#dbeafe",
    border: "#bfdbfe",
  },
];

const stats = [
  { label: "Total Students", value: "320+", icon: "🎒", color: "#7c3aed", bg: "#f3e8ff" },
  { label: "Staff Members", value: "48", icon: "👩‍🏫", color: "#f59e0b", bg: "#fef3c7" },
  { label: "Years of Excellence", value: "12", icon: "⭐", color: "#3b82f6", bg: "#dbeafe" },
  { label: "Happy Families", value: "290+", icon: "👨‍👩‍👧", color: "#10b981", bg: "#d1fae5" },
];

const css = `
  .lb-page {
    min-height: 100vh;
    background: #dbeafe;
    font-family: 'Segoe UI', 'Nunito', sans-serif;
  }

  .lb-hero {
    background: #bfdbfe;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: clamp(32px, 6vw, 72px) clamp(20px, 6vw, 80px);
    gap: clamp(16px, 3vw, 48px);
  }
  .lb-hero-content { flex: 1; min-width: 0; }
  .lb-badge {
    display: inline-block;
    background: #7c3aed;
    color: white;
    border-radius: 30px;
    padding: 5px 18px;
    font-size: clamp(10px, 1.5vw, 13px);
    font-weight: 700;
    letter-spacing: 1px;
    margin-bottom: 14px;
    text-transform: uppercase;
  }
  .lb-hero-title {
    font-size: clamp(28px, 5vw, 52px);
    font-weight: 900;
    color: #1e1b4b;
    margin: 0 0 14px;
    line-height: 1.1;
  }
  .lb-hero-sub {
    font-size: clamp(13px, 1.8vw, 17px);
    color: #475569;
    max-width: 480px;
    line-height: 1.7;
    margin: 0;
  }
  .lb-hero-emoji {
    font-size: clamp(48px, 8vw, 90px);
    line-height: 1;
    flex-shrink: 0;
  }

  .lb-stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: clamp(12px, 2vw, 20px);
    padding: clamp(20px, 4vw, 36px) clamp(16px, 5vw, 60px);
    max-width: 1200px;
    margin: 0 auto;
  }
  .lb-stat-card {
    background: white;
    border-radius: 18px;
    padding: clamp(16px, 2.5vw, 24px) clamp(12px, 2vw, 28px);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.07);
  }
  .lb-stat-icon {
    width: clamp(40px, 5vw, 54px);
    height: clamp(40px, 5vw, 54px);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: clamp(18px, 2.5vw, 26px);
  }
  .lb-stat-value { font-size: clamp(20px, 3vw, 28px); font-weight: 900; }
  .lb-stat-label { font-size: clamp(10px, 1.3vw, 13px); color: #6b7280; font-weight: 600; text-align: center; }

  .lb-section-hdr {
    text-align: center;
    padding: clamp(16px, 3vw, 24px) clamp(16px, 5vw, 40px) clamp(20px, 3vw, 32px);
  }
  .lb-section-title { font-size: clamp(22px, 3.5vw, 34px); font-weight: 900; color: #1e1b4b; margin: 0 0 10px; }
  .lb-divider { width: 56px; height: 4px; background: #f59e0b; border-radius: 4px; margin: 0 auto 14px; }
  .lb-section-sub { color: #6b7280; font-size: clamp(13px, 1.6vw, 15px); max-width: 520px; margin: 0 auto; line-height: 1.7; }

  .lb-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: clamp(14px, 2vw, 24px);
    padding: 0 clamp(16px, 5vw, 60px) clamp(32px, 5vw, 56px);
    max-width: 1200px;
    margin: 0 auto;
  }
  .lb-card {
    background: white;
    border-radius: 20px;
    padding: clamp(20px, 3vw, 32px) clamp(14px, 2vw, 26px) clamp(16px, 2.5vw, 24px);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    box-shadow: 0 2px 16px rgba(0,0,0,0.07);
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .lb-card:hover { transform: translateY(-5px); box-shadow: 0 12px 32px rgba(0,0,0,0.13); }
  .lb-avatar {
    width: clamp(52px, 6vw, 68px);
    height: clamp(52px, 6vw, 68px);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: clamp(16px, 2vw, 22px);
    font-weight: 900;
    margin-bottom: 4px;
  }
  .lb-member-name { font-size: clamp(13px, 1.5vw, 17px); font-weight: 800; color: #1e1b4b; margin: 0; text-align: center; }
  .lb-role-badge {
    border-radius: 16px;
    padding: 3px 12px;
    font-size: clamp(10px, 1.1vw, 12px);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.4px;
    text-align: center;
  }
  .lb-divline { width: 100%; height: 1px; background: #f1f5f9; margin: 4px 0; }
  .lb-info-row { display: flex; align-items: flex-start; gap: 6px; width: 100%; }
  .lb-info-icon { font-size: 12px; width: 18px; flex-shrink: 0; padding-top: 1px; }
  .lb-info-text { font-size: clamp(11px, 1.2vw, 13px); color: #6b7280; word-break: break-all; line-height: 1.4; }
  .lb-contact-btn {
    margin-top: 8px;
    color: white;
    border: none;
    border-radius: 20px;
    padding: clamp(8px, 1.2vw, 10px) 0;
    font-weight: 700;
    font-size: clamp(12px, 1.3vw, 14px);
    cursor: pointer;
    width: 100%;
  }

  .lb-vision {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: clamp(14px, 2vw, 24px);
    padding: 0 clamp(16px, 5vw, 60px) clamp(32px, 5vw, 56px);
    max-width: 1200px;
    margin: 0 auto;
  }
  .lb-vision-card {
    background: white;
    border-radius: 18px;
    padding: clamp(20px, 3vw, 32px) clamp(16px, 2.5vw, 28px);
    box-shadow: 0 2px 12px rgba(0,0,0,0.07);
    text-align: center;
  }
  .lb-vision-icon { font-size: clamp(28px, 3.5vw, 38px); margin-bottom: 10px; }
  .lb-vision-title { font-size: clamp(15px, 1.8vw, 20px); font-weight: 800; color: #1e1b4b; margin: 0 0 8px; }
  .lb-vision-text { font-size: clamp(12px, 1.3vw, 14px); color: #6b7280; line-height: 1.75; margin: 0; }

  .lb-footer {
    background: #1e1b4b;
    padding: clamp(16px, 3vw, 24px) clamp(20px, 5vw, 60px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
  }
  .lb-footer-brand { display: flex; align-items: center; gap: 8px; font-size: 16px; font-weight: 800; color: white; }
  .lb-footer-text { color: #94a3b8; font-size: 12px; margin: 0; }

  /* Tablet ≤ 900px */
  @media (max-width: 900px) {
    .lb-stats  { grid-template-columns: repeat(2, 1fr); }
    .lb-grid   { grid-template-columns: repeat(2, 1fr); }
    .lb-vision { grid-template-columns: repeat(2, 1fr); }
  }

  /* Mobile ≤ 600px */
  @media (max-width: 600px) {
    .lb-hero {
      flex-direction: column-reverse;
      align-items: flex-start;
      padding: 28px 20px;
      gap: 12px;
    }
    .lb-hero-emoji { align-self: center; }
    .lb-stats  { grid-template-columns: repeat(2, 1fr); padding: 20px 16px; }
    .lb-grid   { grid-template-columns: 1fr; padding: 0 16px 32px; }
    .lb-vision { grid-template-columns: 1fr; padding: 0 16px 32px; }
    .lb-section-hdr { padding: 16px 16px 20px; }
    .lb-footer { flex-direction: column; align-items: flex-start; gap: 6px; }
  }

  /* Very small ≤ 380px */
  @media (max-width: 380px) {
    .lb-stats { grid-template-columns: 1fr 1fr; gap: 10px; }
    .lb-stat-card { padding: 14px 10px; }
  }
`;

export default function Administration() {
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const styleEl = document.createElement("style");
    styleEl.id = "lb-admin-styles";
    styleEl.textContent = css;
    document.head.appendChild(styleEl);
    return () => styleEl.remove();
  }, []);

  return (
    <div className="lb-page">

      {/* Hero */}
<div className="lb-hero relative overflow-hidden">

  {/* Background Image */}
  <img
    src="/adminrenowedhero.png"
    alt="Hero Background"
    className="absolute inset-0 w-full h-full object-cover z-0"
  />

  {/* Optional overlay (for readability) */}
  <div className="absolute inset-0 bg-black/30 z-10"></div>

  {/* Content */}
  <div className="lb-hero-content relative z-20">
    <div className="lb-badge">Our Team</div>
    <h1 className="lb-hero-title">Administration</h1>
    <p className="lb-hero-sub">
      Meet the dedicated leaders who make Little Berries a place of joy,
      learning, and endless possibilities for every child.
    </p>
  </div>

  {/* Emoji */}
  <div className="lb-hero-emoji relative z-20">🏫</div>
</div>

      {/* Stats */}
      <div className="lb-stats">
        {stats.map((s) => (
          <div key={s.label} className="lb-stat-card">
            <div className="lb-stat-icon" style={{ background: s.bg }}>
              <span>{s.icon}</span>
            </div>
            <div className="lb-stat-value" style={{ color: s.color }}>{s.value}</div>
            <div className="lb-stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Section header */}
      <div className="lb-section-hdr">
        <h2 className="lb-section-title">Meet Our Leadership Team</h2>
        <div className="lb-divider" />
        <p className="lb-section-sub">
          Our administration team brings decades of early childhood education expertise,
          ensuring every child receives the best start in life.
        </p>
      </div>

      {/* Staff grid */}
      <div className="lb-grid">
        {staff.map((member) => (
          <div
            key={member.id}
            className="lb-card"
            style={{ borderTop: `4px solid ${member.color}` }}
            onMouseEnter={() => setHoveredCard(member.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div
              className="lb-avatar"
              style={{
                background: member.bg,
                color: member.color,
                border: `2px solid ${member.border}`,
              }}
            >
              {member.avatar}
            </div>
            <h3 className="lb-member-name">{member.name}</h3>
            <div
              className="lb-role-badge"
              style={{ background: member.bg, color: member.color }}
            >
              {member.role}
            </div>
            <div className="lb-divline" />
            <div className="lb-info-row">
              <span className="lb-info-icon">✉️</span>
              <span className="lb-info-text">{member.email}</span>
            </div>
            <div className="lb-info-row">
              <span className="lb-info-icon">📞</span>
              <span className="lb-info-text">{member.phone}</span>
            </div>
            <div className="lb-info-row">
              <span className="lb-info-icon">📅</span>
              <span className="lb-info-text">Member since {member.since}</span>
            </div>
            <button
              className="lb-contact-btn"
              style={{ background: member.color }}
            >
              Contact
            </button>
          </div>
        ))}
      </div>

      {/* Vision / Mission / Values */}
      <div className="lb-vision">
        {[
          {
            icon: "🌱",
            title: "Our Vision",
            text: "To nurture every child's curiosity and creativity in a safe, inclusive, and stimulating environment, laying the foundation for lifelong learning and happiness.",
          },
          {
            icon: "💡",
            title: "Our Mission",
            text: "We commit to providing child-centered education through play, exploration, and guided discovery, partnering closely with families to celebrate each milestone.",
          },
          {
            icon: "🤝",
            title: "Our Values",
            text: "Respect, empathy, creativity, and joy guide everything we do. We believe every child deserves to feel seen, heard, and celebrated every single day.",
          },
        ].map((v) => (
          <div key={v.title} className="lb-vision-card">
            <div className="lb-vision-icon">{v.icon}</div>
            <h3 className="lb-vision-title">{v.title}</h3>
            <p className="lb-vision-text">{v.text}</p>
          </div>
        ))}
      </div>

      {/* Footer */}
    
    </div>
  );
}