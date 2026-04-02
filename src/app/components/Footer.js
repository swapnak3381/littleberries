'use client';
import { useState, useEffect } from "react";

export default function Footer() {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="w-full bg-gradient-to-r from-[#e3f0fa] via-yellow-100 to-blue-100 text-black mt-auto relative overflow-hidden mb-0 md:mb-4 lg:mb-8">
      
      {/* 🌸 Decorative Background Blobs */}
      {/* Decorative blobs can be kept or removed for a cleaner look; keeping but changing color to light blue */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-200 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-300 opacity-30 rounded-full blur-3xl"></div>

      {/* 📦 Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* 🫐 Brand Section */}
        <div>
            {/* 🍓 Brand */}
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.jpeg" alt="Little Berries Logo" className="h-15 w-15 rounded-full shadow" />
              <span className="font-extrabold text-lg text-purple-900 tracking-tight">Little Berries Playschool</span>
            </div>
          <p className="text-sm text-gray-600">
            A joyful place where little minds learn, play, and grow with love and care 🌈
          </p>
        </div>

        {/* 🔗 Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-gray-800">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-yellow-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/administration" className="hover:text-yellow-400 transition">
                Administration
              </a>
            </li>
            <li>
              <a href="/infrastructure" className="hover:text-yellow-400 transition">
                Infrastructure
              </a>
            </li>
            <li>
              <a href="/parents-&-students" className="hover:text-yellow-400 transition">
                Parents & Students
              </a>
            </li>
            <li>
              <a href="/photo-gallery" className="hover:text-yellow-400 transition">
                Photo Gallery
              </a>
            </li>
            <li>
              <a href="/contactus" className="hover:text-yellow-400 transition">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* 📬 Contact Section */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-gray-800">Contact Us</h3>
          <p className="text-sm">Hyderabad, India</p>
          <p className="text-sm"> +91 7989523822</p>
          <a
            href="mailto:littleberrieshyd@gmail.com"
            className="text-black hover:text-yellow-400 hover:underline text-sm"
          >
            littleberrieshyd@gmail.com
          </a>

          {/* 🌐 Social Icons (simple text version) */}
<div className="flex justify-center md:justify-start gap-4 mt-4">
  <a href="https://www.instagram.com/littleberries.preschool?igsh=MWxrMjRoY3RxZXN6bw==" className="hover:text-yellow-400 transition">
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  </a>
  <a href="tel:+1234567890" className="hover:text-yellow-400 transition">
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  </a>
  <a href="mailto:you@example.com" className="hover:text-yellow-400 transition">
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.907 1.528-1.148C21.69 2.28 24 3.434 24 5.457z" />
    </svg>
  </a>
</div>
        </div>
      </div>
      {/* 🔻 Bottom Bar */}
      <div className="border-t border-white/50 py-4 text-center text-sm backdrop-blur-sm bg-white/40">
        © {year} Little Berries Playschool • All Rights Reserved
      </div>
    </footer>
  );
}