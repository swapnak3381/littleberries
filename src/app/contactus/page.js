"use client";

import { useState } from "react";

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

  .cp *, .cp *::before, .cp *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .cp {
    min-height: 100vh;
    background: linear-gradient(135deg, #eff6ff 0%, #f0fdf4 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 16px 60px;
    font-family: 'Plus Jakarta Sans', sans-serif;
  }

  .cp-hero {
    width: 100%;
    max-width: 620px;
    text-align: center;
    margin-bottom: 32px;
  }
  .cp-badge {
    display: inline-block;
    background: #dbeafe;
    color: #1d4ed8;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 4px 14px;
    border-radius: 999px;
    margin-bottom: 14px;
  }
  .cp-title {
    font-size: clamp(28px, 5vw, 44px);
    font-weight: 800;
    color: #0f172a;
    line-height: 1.15;
    margin-bottom: 10px;
  }
  .cp-title span { color: #2563eb; }
  .cp-sub {
    font-size: clamp(14px, 2.2vw, 16px);
    color: #64748b;
    line-height: 1.6;
    max-width: 480px;
    margin: 0 auto;
  }

  /* ── Wrapper that holds both the mascot and the card ── */
  .cp-card-wrapper {
    position: relative;
    width: 100%;
    max-width: 540px;
  }

  /* ── Mascot kid ── */
  .cp-mascot {
    position: absolute;
    bottom: -10px;
    right: -100px;
    width: 200px;
    height: 240px;
    z-index: 1;            /* BEHIND the card */
    pointer-events: none;
    filter: drop-shadow(-10px 12px 18px rgba(0,0,0,0.22));
    animation: kidSlideIn 0.85s cubic-bezier(0.34,1.56,0.64,1) 0.4s both;
  }
  .cp-mascot img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  /* Speech bubble */
  .cp-bubble {
    position: absolute;
    bottom: 235px;
    left: 110%;
    z-index: 2;             /* ABOVE kid, ABOVE card too for fun */
    background: #fff;
    border: 2.5px solid #2563eb;
    border-radius: 16px 16px 16px 4px;
    padding: 7px 13px;
    font-size: 11px;
    font-weight: 800;
    color: #2563eb;
    white-space: nowrap;
    box-shadow: 0 4px 16px rgba(37,99,235,0.18);
    pointer-events: none;
    animation: bubblePop 0.4s cubic-bezier(0.34,1.56,0.64,1) 1.3s both;
    font-family: 'Plus Jakarta Sans', sans-serif;
  }

  /* ── The form card sits on top (z-index: 2) ── */
  .cp-card {
    position: relative;
    z-index: 2;             /* ABOVE the mascot */
    width: 100%;
    background: #fff;
    border-radius: 20px;
    padding: clamp(24px, 5vw, 40px) clamp(20px, 5vw, 36px);
    box-shadow: 0 4px 32px rgba(37,99,235,0.08), 0 1px 4px rgba(0,0,0,0.04);
    border: 1px solid #e2e8f0;
  }

  .cp-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
  }
  @media (max-width: 480px) {
    .cp-row { grid-template-columns: 1fr; }
  }
  .cp-field { display: flex; flex-direction: column; gap: 6px; margin-bottom: 14px; }
  .cp-field:last-child { margin-bottom: 0; }

  .cp-label {
    font-size: 13px;
    font-weight: 700;
    color: #334155;
    letter-spacing: 0.02em;
  }
  .cp-label span { color: #ef4444; margin-left: 2px; }

  .cp-input, .cp-textarea {
    width: 100%;
    padding: 10px 14px;
    border-radius: 10px;
    border: 1.5px solid #e2e8f0;
    font-size: 14px;
    font-family: inherit;
    background: #f8fafc;
    color: #0f172a;
    transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
  }
  .cp-input:focus, .cp-textarea:focus {
    border-color: #2563eb;
    background: #fff;
    outline: none;
    box-shadow: 0 0 0 3px rgba(37,99,235,0.12);
  }
  .cp-input::placeholder, .cp-textarea::placeholder { color: #94a3b8; }
  .cp-textarea { resize: vertical; min-height: 100px; }

  .cp-consent {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    font-size: 12.5px;
    color: #64748b;
    line-height: 1.55;
    margin-top: 4px;
  }
  .cp-consent input[type="checkbox"] {
    accent-color: #2563eb;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    margin-top: 2px;
    cursor: pointer;
  }

  .cp-divider {
    border: none;
    border-top: 1px solid #e2e8f0;
    margin: 20px 0;
  }

  .cp-actions { display: flex; gap: 10px; flex-wrap: wrap; }
  .cp-btn {
    flex: 1;
    min-width: 140px;
    padding: 12px 20px;
    border-radius: 10px;
    border: none;
    font-family: inherit;
    font-weight: 700;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
  }
  .cp-btn-primary { background: #2563eb; color: #fff; }
  .cp-btn-primary:hover { background: #1d4ed8; transform: translateY(-1px); box-shadow: 0 4px 12px rgba(37,99,235,0.25); }
  .cp-btn-primary:active { transform: translateY(0); }
  .cp-btn-primary:disabled { background: #93c5fd; cursor: not-allowed; transform: none; box-shadow: none; }

  .cp-toast {
    display: flex;
    align-items: center;
    gap: 10px;
    border-radius: 10px;
    padding: 12px 16px;
    font-size: 13.5px;
    font-weight: 600;
    margin-top: 16px;
    animation: slideIn 0.3s ease;
  }
  @keyframes slideIn {
    from { opacity: 0; transform: translateY(-6px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .cp-toast-success { background: #f0fdf4; color: #15803d; border: 1px solid #bbf7d0; }
  .cp-toast-error   { background: #fef2f2; color: #b91c1c; border: 1px solid #fecaca; }

  @keyframes kidSlideIn {
    from { opacity: 0; transform: translateX(80px) rotate(-6deg); }
    to   { opacity: 1; transform: translateX(0px)  rotate(-6deg); }
  }
  @keyframes bubblePop {
    from { opacity: 0; transform: scale(0.5) translateY(8px); }
    to   { opacity: 1; transform: scale(1)   translateY(0);   }
  }

  /* On small screens hide the mascot so it doesn't overlap the form */
  @media (max-width: 680px) {
    .cp-mascot  { display: none; }
    .cp-bubble  { display: none; }
  }

  @media (max-width: 360px) {
    .cp { padding: 24px 12px 40px; }
    .cp-btn { min-width: 100%; }
    .cp-actions { flex-direction: column; }
  }
`;

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwJz_ZfBbi7Qq8yib67FZWZUMT1jbNDiG5LXfb_P23bDPEyeNbAIw1zXUNtrdUDUS0MDg/exec";

async function sendToGoogleSheet(data) {
  await fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}

export default function ContactUs() {
  const [form, setForm] = useState({
    email: "",
    childName: "",
    childAge: "",
    message: "",
    consent: false,
  });
  const [toast, setToast] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  function showToast(msg, type = "success") {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 4000);
  }

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((p) => ({ ...p, [name]: type === "checkbox" ? checked : value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!form.email || !form.childName || !form.childAge || !form.message) {
      showToast("Please fill in all required fields.", "error");
      return;
    }
    if (!form.consent) {
      showToast("Please check the consent box to continue.", "error");
      return;
    }

    setSubmitting(true);
    try {
      await sendToGoogleSheet({
        email: form.email,
        childName: form.childName,
        childAge: Number(form.childAge),
        message: form.message,
        consent: form.consent,
      });

      setForm({ email: "", childName: "", childAge: "", message: "", consent: false });
      showToast("✓ Message sent! We'll be in touch soon.");
    } catch (err) {
      console.error(err);
      showToast("Submission failed. Please check your connection and try again.", "error");
    }
    setSubmitting(false);
  }

  return (
    <div className="cp">
      <style>{css}</style>

      {/* ── Hero text ── */}
      <div className="cp-hero">
        <span className="cp-badge">Get in Touch</span>
        <h1 className="cp-title">
          Contact <span>Little Berries</span>
        </h1>
        <p className="cp-sub">
          Have a question about our programs? Fill out the form and our team
          will reach out to you shortly.
        </p>
      </div>

      {/* ── Wrapper: mascot sits behind, card sits in front ── */}
      <div className="cp-card-wrapper">

        {/* Mascot — z-index: 1, BEHIND the card */}
        <div className="cp-mascot">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/activitykid.png" alt="Sneaky kid peeking" />
        </div>

        {/* Speech bubble — floats above everything */}
        <div className="cp-bubble">
          Fill it out! 📝
        </div>

        {/* Form card — z-index: 2, IN FRONT of mascot */}
        <div className="cp-card">

          {/* Email */}
          <div className="cp-field">
            <label className="cp-label" htmlFor="email">
              Your Email <span>*</span>
            </label>
            <input
              className="cp-input"
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="you@email.com"
            />
          </div>

          {/* Name + Age row */}
          <div className="cp-row">
            <div className="cp-field">
              <label className="cp-label" htmlFor="childName">
                Child's Name <span>*</span>
              </label>
              <input
                className="cp-input"
                id="childName"
                name="childName"
                type="text"
                value={form.childName}
                onChange={handleChange}
                required
                placeholder="Child's name"
              />
            </div>
            <div className="cp-field">
              <label className="cp-label" htmlFor="childAge">
                Child's Age <span>*</span>
              </label>
              <input
                className="cp-input"
                id="childAge"
                name="childAge"
                type="number"
                value={form.childAge}
                onChange={handleChange}
                min="0"
                max="18"
                required
                placeholder="Age"
              />
            </div>
          </div>

          {/* Message */}
          <div className="cp-field">
            <label className="cp-label" htmlFor="message">
              Message <span>*</span>
            </label>
            <textarea
              className="cp-textarea"
              id="message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              required
              placeholder="How can we help you?"
            />
          </div>

          {/* Consent */}
          <div className="cp-consent">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              checked={form.consent}
              onChange={handleChange}
            />
            <label htmlFor="consent">
              I agree to receive updates and promotional content from Little
              Berries, including advertisements and important notifications.
            </label>
          </div>

          <hr className="cp-divider" />

          <div className="cp-actions">
            <button
              className="cp-btn cp-btn-primary"
              onClick={handleSubmit}
              disabled={submitting}
            >
              {submitting ? "Sending…" : "✉ Send Message"}
            </button>
          </div>

          {toast && (
            <div
              className={`cp-toast ${
                toast.type === "error" ? "cp-toast-error" : "cp-toast-success"
              }`}
            >
              {toast.msg}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}