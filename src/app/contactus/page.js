"use client";

import { useState } from "react";

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Baloo+2:wght@700;800&display=swap');

  .cp *, .cp *::before, .cp *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .cp {
    min-height: 100vh;
    background: #fffbf5;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 48px 16px 80px;
    font-family: 'Nunito', sans-serif;
    position: relative;
    overflow: hidden;
  }

  /* Decorative blobs */
  .cp-blob {
    position: fixed;
    border-radius: 50%;
    filter: blur(80px);
    pointer-events: none;
    z-index: 0;
    opacity: 0.45;
  }
  .cp-blob-1 {
    width: 420px; height: 420px;
    background: #fde68a;
    top: -120px; left: -100px;
  }
  .cp-blob-2 {
    width: 320px; height: 320px;
    background: #bbf7d0;
    bottom: 60px; right: -80px;
  }
  .cp-blob-3 {
    width: 200px; height: 200px;
    background: #fca5a5;
    top: 40%; left: 5%;
  }

  /* ── Hero ── */
  .cp-hero {
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 600px;
    text-align: center;
    margin-bottom: 36px;
    animation: fadeDown 0.7s ease both;
  }
  .cp-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: #fef3c7;
    color: #b45309;
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    padding: 5px 16px;
    border-radius: 999px;
    margin-bottom: 16px;
    border: 1.5px solid #fde68a;
  }
  .cp-title {
    font-family: 'Baloo 2', cursive;
    font-size: clamp(32px, 6vw, 52px);
    font-weight: 800;
    color: #1c1917;
    line-height: 1.1;
    margin-bottom: 12px;
  }
  .cp-title .berry { color: #dc2626; }
  .cp-title .little { color: #16a34a; }
  .cp-sub {
    font-size: clamp(14px, 2.2vw, 16px);
    color: #78716c;
    line-height: 1.65;
    max-width: 440px;
    margin: 0 auto;
  }

  /* ── Wrapper ── */
  .cp-card-wrapper {
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 540px;
    animation: fadeUp 0.75s ease 0.15s both;
  }

  /* ── Mascot ── */
  .cp-mascot {
    position: absolute;
    bottom: -14px;
    right: -110px;
    width: 210px;
    height: 250px;
    z-index: 0;
    pointer-events: none;
    filter: drop-shadow(-12px 14px 20px rgba(0,0,0,0.18));
    animation: kidSlideIn 0.9s cubic-bezier(0.34,1.56,0.64,1) 0.5s both;
  }
  .cp-mascot img { width: 100%; height: 100%; object-fit: contain; }

  .cp-bubble {
    position: absolute;
    bottom: 248px;
    right: -50px;
    z-index: 3;
    background: #fff;
    border: 2.5px solid #16a34a;
    border-radius: 14px 14px 14px 4px;
    padding: 8px 14px;
    font-size: 11.5px;
    font-weight: 800;
    color: #15803d;
    white-space: nowrap;
    box-shadow: 0 4px 18px rgba(22,163,74,0.18);
    pointer-events: none;
    animation: bubblePop 0.45s cubic-bezier(0.34,1.56,0.64,1) 1.4s both;
    font-family: 'Nunito', sans-serif;
  }

  /* ── Card ── */
  .cp-card {
    position: relative;
    z-index: 2;
    width: 100%;
    background: #fff;
    border-radius: 24px;
    padding: clamp(24px, 5vw, 44px) clamp(20px, 5vw, 40px);
    box-shadow:
      0 2px 0 0 #e7e5e4,
      0 8px 40px rgba(0,0,0,0.07),
      0 1px 3px rgba(0,0,0,0.04);
    border: 1.5px solid #f5f5f4;
  }

  /* Section label inside card */
  .cp-section-label {
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #a8a29e;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .cp-section-label::after {
    content: '';
    flex: 1;
    height: 1px;
    background: #e7e5e4;
  }

  .cp-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
  }
  @media (max-width: 480px) {
    .cp-row { grid-template-columns: 1fr; }
  }

  .cp-field { display: flex; flex-direction: column; gap: 7px; margin-bottom: 16px; }
  .cp-field:last-child { margin-bottom: 0; }

  .cp-label {
    font-size: 13px;
    font-weight: 800;
    color: #292524;
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .cp-label .req { color: #ef4444; }

  .cp-input-wrap {
    position: relative;
  }
  .cp-input-icon {
    position: absolute;
    left: 13px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 15px;
    pointer-events: none;
    opacity: 0.6;
  }
  .cp-textarea-icon {
    position: absolute;
    left: 13px;
    top: 14px;
    font-size: 15px;
    pointer-events: none;
    opacity: 0.6;
  }

  .cp-input, .cp-textarea {
    width: 100%;
    padding: 11px 14px 11px 38px;
    border-radius: 12px;
    border: 2px solid #e7e5e4;
    font-size: 14px;
    font-family: 'Nunito', sans-serif;
    font-weight: 600;
    background: #fafaf9;
    color: #1c1917;
    transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
  }
  .cp-input:focus, .cp-textarea:focus {
    border-color: #16a34a;
    background: #fff;
    outline: none;
    box-shadow: 0 0 0 3.5px rgba(22,163,74,0.14);
  }
  .cp-input::placeholder, .cp-textarea::placeholder {
    color: #c4bfbb;
    font-weight: 600;
  }
  .cp-textarea {
    resize: vertical;
    min-height: 108px;
    padding-top: 12px;
    line-height: 1.6;
  }

  /* Consent */
  .cp-consent-wrap {
    background: #f0fdf4;
    border: 1.5px solid #bbf7d0;
    border-radius: 12px;
    padding: 12px 14px;
    margin-top: 4px;
  }
  .cp-consent {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    font-size: 12.5px;
    color: #3f6212;
    line-height: 1.6;
    font-weight: 700;
  }
  .cp-consent input[type="checkbox"] {
    accent-color: #16a34a;
    width: 17px;
    height: 17px;
    flex-shrink: 0;
    margin-top: 1px;
    cursor: pointer;
  }

  .cp-divider {
    border: none;
    border-top: 1.5px dashed #e7e5e4;
    margin: 22px 0;
  }

  /* Button */
  .cp-actions { display: flex; gap: 10px; flex-wrap: wrap; }
  .cp-btn {
    flex: 1;
    min-width: 160px;
    padding: 13px 24px;
    border-radius: 12px;
    border: none;
    font-family: 'Nunito', sans-serif;
    font-weight: 800;
    font-size: 15px;
    cursor: pointer;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    letter-spacing: 0.01em;
  }
  .cp-btn-primary {
    background: linear-gradient(135deg, #16a34a 0%, #15803d 100%);
    color: #fff;
    box-shadow: 0 4px 0 #14532d, 0 6px 20px rgba(22,163,74,0.25);
  }
  .cp-btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 0 #14532d, 0 10px 28px rgba(22,163,74,0.3);
  }
  .cp-btn-primary:active {
    transform: translateY(1px);
    box-shadow: 0 2px 0 #14532d, 0 4px 12px rgba(22,163,74,0.2);
  }
  .cp-btn-primary:disabled {
    background: #86efac;
    box-shadow: 0 3px 0 #4ade80;
    cursor: not-allowed;
    transform: none;
  }

  /* Spinner */
  .cp-spinner {
    width: 16px; height: 16px;
    border: 2.5px solid rgba(255,255,255,0.4);
    border-top-color: #fff;
    border-radius: 50%;
    animation: spin 0.7s linear infinite;
    flex-shrink: 0;
  }

  /* Toast */
  .cp-toast {
    display: flex;
    align-items: center;
    gap: 10px;
    border-radius: 12px;
    padding: 13px 16px;
    font-size: 13.5px;
    font-weight: 700;
    margin-top: 18px;
    animation: slideIn 0.3s ease;
  }
  .cp-toast-icon { font-size: 18px; flex-shrink: 0; }
  @keyframes slideIn {
    from { opacity: 0; transform: translateY(-8px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .cp-toast-success {
    background: #f0fdf4;
    color: #15803d;
    border: 1.5px solid #86efac;
  }
  .cp-toast-error {
    background: #fef2f2;
    color: #b91c1c;
    border: 1.5px solid #fca5a5;
  }

  /* Animations */
  @keyframes fadeDown {
    from { opacity: 0; transform: translateY(-18px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes kidSlideIn {
    from { opacity: 0; transform: translateX(90px) rotate(-5deg); }
    to   { opacity: 1; transform: translateX(0)    rotate(-5deg); }
  }
  @keyframes bubblePop {
    from { opacity: 0; transform: scale(0.4) translateY(10px); }
    to   { opacity: 1; transform: scale(1)   translateY(0); }
  }
  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  /* Fun decorative dots */
  .cp-dots {
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    pointer-events: none;
    z-index: 0;
    opacity: 0.35;
    background-image: radial-gradient(circle, #d6d3d1 1px, transparent 1px);
    background-size: 28px 28px;
  }

  /* Responsive */
  @media (max-width: 680px) {
    .cp-mascot, .cp-bubble { display: none; }
  }
  @media (max-width: 360px) {
    .cp { padding: 24px 12px 48px; }
    .cp-btn { min-width: 100%; }
    .cp-actions { flex-direction: column; }
  }
`;

// ── Replace this URL with your deployed Google Apps Script URL ──
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
    setTimeout(() => setToast(null), 5000);
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
        timestamp: new Date().toISOString(),
      });

      setForm({ email: "", childName: "", childAge: "", message: "", consent: false });
      showToast("🎉 Message sent! We'll be in touch soon.");
    } catch (err) {
      console.error(err);
      showToast("Submission failed. Please check your connection and try again.", "error");
    }
    setSubmitting(false);
  }

  return (
    <div className="cp">
      <style>{css}</style>

      {/* Decorative background */}
      <div className="cp-dots" aria-hidden="true" />
      <div className="cp-blob cp-blob-1" aria-hidden="true" />
      <div className="cp-blob cp-blob-2" aria-hidden="true" />
      <div className="cp-blob cp-blob-3" aria-hidden="true" />

      {/* ── Hero ── */}
      <div className="cp-hero">
        <span className="cp-badge">✉️ Get in Touch</span>
        <h1 className="cp-title">
          Contact{" "}
          <span className="little">Little</span>{" "}
          <span className="berry">Berries</span>
        </h1>
        <p className="cp-sub">
          Have a question about our programs? Fill out the form below and our
          team will reach out to you shortly. We'd love to hear from you! 🍓
        </p>
      </div>

      {/* ── Card wrapper (mascot peeks behind) ── */}
      <div className="cp-card-wrapper">

        {/* Mascot — sits behind card */}
        <div className="cp-mascot" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/activitykid.png" alt="" />
        </div>

        {/* Speech bubble */}
        <div className="cp-bubble" aria-hidden="true">
          Fill it out! 📝
        </div>

        {/* ── Form card ── */}
        <div className="cp-card">

          <p className="cp-section-label">Parent / Guardian Info</p>

          {/* Email */}
          <div className="cp-field">
            <label className="cp-label" htmlFor="email">
              Your Email <span className="req">*</span>
            </label>
            <div className="cp-input-wrap">
              <span className="cp-input-icon">📧</span>
              <input
                className="cp-input"
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="you@email.com"
                autoComplete="email"
              />
            </div>
          </div>

          <p className="cp-section-label">About Your Child</p>

          {/* Name + Age row */}
          <div className="cp-row">
            <div className="cp-field">
              <label className="cp-label" htmlFor="childName">
                Child's Name <span className="req">*</span>
              </label>
              <div className="cp-input-wrap">
                <span className="cp-input-icon">🧒</span>
                <input
                  className="cp-input"
                  id="childName"
                  name="childName"
                  type="text"
                  value={form.childName}
                  onChange={handleChange}
                  required
                  placeholder="First name"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="cp-field">
              <label className="cp-label" htmlFor="childAge">
                Age <span className="req">*</span>
              </label>
              <div className="cp-input-wrap">
                <span className="cp-input-icon">🎂</span>
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
                  placeholder="e.g. 5"
                />
              </div>
            </div>
          </div>

          <p className="cp-section-label">Your Message</p>

          {/* Message */}
          <div className="cp-field">
            <label className="cp-label" htmlFor="message">
              Message <span className="req">*</span>
            </label>
            <div className="cp-input-wrap">
              <span className="cp-textarea-icon">💬</span>
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
          </div>

          {/* Consent */}
          <div className="cp-consent-wrap">
            <label className="cp-consent">
              <input
                type="checkbox"
                name="consent"
                checked={form.consent}
                onChange={handleChange}
              />
              I agree to receive updates and promotional content from Little
              Berries, including programme announcements and important
              notifications.
            </label>
          </div>

          <hr className="cp-divider" />

          <div className="cp-actions">
            <button
              className="cp-btn cp-btn-primary"
              onClick={handleSubmit}
              disabled={submitting}
              type="button"
            >
              {submitting ? (
                <>
                  <span className="cp-spinner" />
                  Sending…
                </>
              ) : (
                <>✉️ Send Message</>
              )}
            </button>
          </div>

          {toast && (
            <div
              className={`cp-toast ${
                toast.type === "error" ? "cp-toast-error" : "cp-toast-success"
              }`}
              role="alert"
            >
              <span className="cp-toast-icon">
                {toast.type === "error" ? "⚠️" : "✅"}
              </span>
              {toast.msg}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
