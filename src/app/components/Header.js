'use client';
import * as React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronRight } from "lucide-react"

const FloatingBerry = ({ delay = 0, duration = 3 }) => (
  <motion.div
    className="absolute text-2xl"
    initial={{ y: 0, x: 0, opacity: 0.6 }}
    animate={{ y: [-10, 10, -10], x: [-5, 5, -5], opacity: [0.6, 0.8, 0.6] }}
    transition={{ duration, repeat: Infinity, delay, ease: "easeInOut" }}
  >
    🍓
  </motion.div>
)

const FloatingStar = ({ delay = 0, duration = 2.5 }) => (
  <motion.div
    className="absolute text-lg"
    initial={{ scale: 1, opacity: 0.6 }}
    animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
    transition={{ duration, repeat: Infinity, delay, ease: "easeInOut" }}
  >
    ⭐
  </motion.div>
)

/**
 * Header Component
 *
 * Props:
 *  - isHomePage (bool): if true → transparent bg, white text (overlays hero)
 *                       if false → solid purple bg, white text
 */
const Header = ({ isHomePage = false }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState("Home")

  const navLinks = ["Home", "Administration", "Faculty", "Parents & Students", "Photo Gallery"]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // On home page: transparent until scrolled, then subtle dark overlay
  // On other pages: always solid purple
  // Use a light blue background for all cases
  const headerBg = "bg-[#e3f0fa] shadow-lg"

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-500 ${headerBg}`} style={{ backgroundColor: '#e3f0fa' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-2">
           <img src="/logo.jpeg" alt="Little Berries Logo" className="h-10 w-10 rounded-full shadow" />

          </a>

          {/* Logo */}
          {/* <motion.div
            className="flex items-center space-x-2 relative"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <motion.div
                className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 via-green-400 to-green-300 flex items-center justify-center shadow-lg border-2 border-yellow-400"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                 <img src="/logo.jpeg" alt="Little Berries Logo" className="h-10 w-10 rounded-full shadow" />
              </motion.div>
              <FloatingStar delay={0} duration={2} />
            </div>

            <div className="flex flex-col leading-tight">
              <h1 className="text-lg font-extrabold tracking-wide">
                {["L","I","T","T","L","E"].map((l, i) => (
                  <span key={i} style={{ color: ["#FF6B6B","#FFD93D","#6BCB77","#4D96FF","#FF6B6B","#FFD93D"][i] }}>{l}</span>
                ))}
                {" "}
                {["B","E","R","R","I","E","S"].map((l, i) => (
                  <span key={i} style={{ color: ["#6BCB77","#4D96FF","#FF6B6B","#FFD93D","#6BCB77","#4D96FF","#FF6B6B"][i] }}>{l}</span>
                ))}
              </h1>
              <p className="text-[10px] text-yellow-300 font-semibold italic -mt-0.5 tracking-wide">
                Brings Out The Best in You...
              </p>
            </div>
          </motion.div> */}

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <a
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={() => setActiveLink(item)}
                  className={`relative text-sm font-semibold transition-all duration-300 group whitespace-nowrap ${
                    activeLink === item ? "text-yellow-300" : "text-black hover:text-yellow-300"
                  }`}
                >
                  {item}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-yellow-300 transition-all duration-300 ${
                      activeLink === item ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              </motion.div>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.button
              className="group relative overflow-hidden px-5 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 text-purple-900 font-extrabold text-sm shadow-lg border-2 border-yellow-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center space-x-1">
                <span>Admissions</span>
                <ChevronRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 border border-white/20"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <Menu className="h-5 w-5 text-white" />
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 lg:hidden"
            style={{ backgroundColor: '#e3f0fa' }}
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="absolute top-20 left-10 pointer-events-none opacity-30">
              <FloatingBerry delay={0} duration={3} />
            </div>

            <motion.button
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 border border-white/20"
              onClick={() => setIsOpen(false)}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.2 }}
            >
              <X className="h-5 w-5 text-white" />
            </motion.button>

            <div className="flex flex-col items-center justify-center h-full px-8 space-y-6">
              <motion.div
                className="flex flex-col items-center space-y-1 mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-green-300 flex items-center justify-center border-2 border-yellow-400">
                  <span className="text-2xl">🍓</span>
                </div>
                <h2 className="text-xl font-extrabold tracking-wide mt-2 text-black">Little Berries</h2>
                <p className="text-xs text-yellow-300 italic">Brings Out The Best in You...</p>
              </motion.div>

              {navLinks.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 + 0.2 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="w-full"
                >
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block text-center text-xl font-bold text-black hover:text-yellow-300 transition-colors duration-300 py-2 rounded-xl hover:bg-white/10"
                    onClick={() => { setActiveLink(item); setIsOpen(false) }}
                  >
                    {item}
                  </a>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="pt-4 w-full"
              >
                <button
                  className="w-full px-8 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 text-purple-900 font-extrabold shadow-xl border-2 border-yellow-300 flex items-center justify-center space-x-2"
                  onClick={() => setIsOpen(false)}
                >
                  <span>Admissions</span>
                  <ChevronRight size={18} />
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header