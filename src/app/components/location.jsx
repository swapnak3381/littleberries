"use client";

import { motion } from "framer-motion";

const CONTACT_ITEMS = [
  {
    icon: "🗓️",
    text: "Monday to Saturday | 9 AM to 5 PM",
    color: "#7c3aed",
  },
  {
    icon: "📍",
    text: "H.No.5-77/149/Part-A, Kista Reddy Pet, Hyderabad, Telangana 502319",
    color: "#e53e3e",
    href: "https://maps.app.goo.gl/syzEBwu1aJNDbP5z7",
  },
  {
    icon: "✉️",
    text: "littleberries@gmail.com",
    color: "#2563eb",
    href: "mailto:littleberries@gmail.com",
  },
  {
    icon: "📞",
    text: "+91-7989523822",
    color: "#16a34a",
    href: "tel:+917989523822",
  },
];

const SOCIALS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
    href: "#",
    label: "Facebook",
    bg: "#1877f2",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
    href: "#",
    label: "Instagram",
    bg: "#e1306c",
  },

  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.855L.057 23.57l5.878-1.54A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.7-.49-5.27-1.36l-.38-.22-3.49.91.93-3.4-.25-.39A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
      </svg>
    ),
    href: "https://wa.me/919010684054",
    label: "WhatsApp",
    bg: "#25d366",
  },
];

// Exact coords extracted from the Google Maps share link
const LAT = 17.5446426;
const LNG = 78.2942977;
const PLACE_NAME = "Little+Berries+Pre+School";

// Clicking the map/button opens Google Maps directions from user's current location
const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${LAT},${LNG}&destination_place_id=0x3bcb8d516aeff4a3:0xc6993a1c7ed68d51&travelmode=driving`;

// Embed URL — shows the exact pin
const EMBED_URL = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.3!2d78.2917228!3d17.5446426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8d516aeff4a3%3A0xc6993a1c7ed68d51!2sLittle%20berries%20pre%20school!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin`;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function LocationSection() {
  return (
    <section
      className="relative w-full overflow-hidden py-16 px-4"
      style={{
        background: "linear-gradient(135deg, #eef2ff 0%, #f5f3ff 50%, #fefce8 100%)",
        fontFamily: "'Nunito', sans-serif",
      }}
    >
      {/* BG blobs */}
      <div className="absolute -top-20 -right-16 w-96 h-96 rounded-full bg-yellow-300/20 blur-[90px] pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-purple-300/25 blur-[70px] pointer-events-none" />

      {/* ── Heading ── */}
      <motion.div
        className="text-center mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <span className="text-yellow-400 text-2xl mr-2">★</span>
        <span
          className="text-3xl md:text-4xl font-extrabold text-indigo-900"
          style={{ fontFamily: "'Baloo 2', cursive" }}
        >
          Our Location
        </span>
        <span className="text-yellow-400 text-2xl ml-2">★</span>
        <div className="mt-3 mx-auto h-[4px] w-32 rounded-full bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400" />
      </motion.div>

      {/* ── Main card ── */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl border border-white/80 overflow-hidden grid grid-cols-1 lg:grid-cols-2">

          {/* ── LEFT — Contact info ── */}
          <div className="p-8 md:p-10 flex flex-col gap-6">

            <div className="flex flex-col gap-5">
              {CONTACT_ITEMS.map((item, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 group"
                    >
                      <div
                        className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center text-white text-lg shadow-md"
                        style={{ background: item.color }}
                      >
                        {item.icon}
                      </div>
                      <span className="text-gray-700 font-semibold text-base leading-snug pt-2 group-hover:text-purple-700 transition-colors duration-200 underline-offset-2 group-hover:underline">
                        {item.text}
                      </span>
                    </a>
                  ) : (
                    <div className="flex items-start gap-4">
                      <div
                        className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center text-white text-lg shadow-md"
                        style={{ background: item.color }}
                      >
                        {item.icon}
                      </div>
                      <span className="text-gray-700 font-semibold text-base leading-snug pt-2">
                        {item.text}
                      </span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-purple-200 via-yellow-200 to-transparent rounded-full" />

            {/* Social icons */}
            <motion.div
              className="flex items-center gap-3 flex-wrap"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={5}
            >
              {SOCIALS.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-white shadow-md hover:scale-110 hover:shadow-xl transition-all duration-200"
                  style={{ background: s.bg }}
                  whileTap={{ scale: 0.9 }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </motion.div>

            {/* Navigate CTA */}
            <motion.a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-700 to-indigo-600 hover:from-purple-800 hover:to-indigo-700 text-white font-extrabold text-base px-8 py-4 rounded-full shadow-lg shadow-purple-300/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-95 w-full mt-auto"
              style={{ fontFamily: "'Baloo 2', cursive" }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={6}
            >
              <span>🧭</span>
              <span>Get Directions</span>
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.a>
          </div>

          {/* ── RIGHT — Google Map ── */}
          <motion.div
            className="relative min-h-[340px] lg:min-h-0"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Clickable overlay — opens directions */}
            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-10 cursor-pointer"
              aria-label="Open directions in Google Maps"
            >
              {/* Invisible click catcher — map iframe handles its own clicks too */}
            </a>

            <iframe
              title="Little Berries Location"
              src={EMBED_URL}
              className="absolute inset-0 w-full h-full"
              style={{ border: 0, minHeight: "340px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Floating badge */}
{/*             <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-white/95 backdrop-blur-md border-2 border-yellow-300 rounded-2xl px-4 py-2.5 shadow-xl pointer-events-none">
              <span className="text-xl">📍</span>
              <div>
                <p className="font-extrabold text-gray-800 text-sm leading-tight" style={{ fontFamily: "'Baloo 2', cursive" }}>
                  Little Berries
                </p>
                <p className="text-[0.68rem] text-purple-600 font-bold">Kista Reddy Pet, Hyderabad</p>
              </div>
            </div> */}

            {/* Navigate pill — bottom of map */}
            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 font-extrabold text-sm px-5 py-2.5 rounded-full shadow-xl border-2 border-yellow-300 whitespace-nowrap hover:scale-105 transition-transform duration-200"
              style={{ fontFamily: "'Baloo 2', cursive" }}
            >
              🧭 Tap to Navigate &amp; See Distance
            </a>
          </motion.div>

        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@700;800&family=Nunito:wght@400;600;700;800;900&display=swap');
      `}</style>
    </section>
  );
}