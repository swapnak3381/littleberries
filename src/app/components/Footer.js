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
          <h2 className="text-2xl font-extrabold text-black mb-2">
            Little Berries Playschool
          </h2>
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
              <a href="/activities" className="hover:text-yellow-400 transition">
                Activities
              </a>
            </li>
            <li>
              <a href="/achivements" className="hover:text-yellow-400 transition">
                Achievements
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-yellow-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* 📬 Contact Section */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-gray-800">Contact Us</h3>
          <p className="text-sm">📍 Hyderabad, India</p>
          <p className="text-sm">📞 +91 98765 43210</p>
          <a
            href="mailto:info@littleberries.com"
            className="text-black hover:text-yellow-400 hover:underline text-sm"
          >
            info@littleberries.com
          </a>

          {/* 🌐 Social Icons (simple text version) */}
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <a href="#" className="hover:text-yellow-400 transition">🌐</a>
            <a href="#" className="hover:text-yellow-400 transition">📘</a>
            <a href="#" className="hover:text-yellow-400 transition">📸</a>
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