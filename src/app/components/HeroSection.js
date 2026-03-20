"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-[#cfe8f7] overflow-hidden flex items-center py-24 md:py-0">
      {/* Content Wrapper */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 z-10">
        {/* Left Image — slow reveal */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <img
            src="/hero1.png"
            alt="Kids Playing"
            className="w-[55%] md:w-[75%] max-w-xs md:max-w-sm max-h-[45vh] md:max-h-[60vh] object-contain"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
            Welcome to <br /> Little Berries
          </h1>
          <p className="text-gray-700 text-lg mb-6 max-w-md">
            Discover a world of joy, learning, and growth at our vibrant playschool.
          </p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-blue-400 transition">
            Explore Admissions
          </button>
        </motion.div>
      </div>

      {/* 🌊 CURVED BOTTOM CUT */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-[160px]"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,224C60,200 120,260 180,240C240,220 300,180 360,200C420,220 480,260 540,240C600,220 660,180 720,200C780,220 840,260 900,240C960,220 1020,180 1080,200C1140,220 1200,260 1260,240C1320,220 1380,200 1440,220L1440,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
}