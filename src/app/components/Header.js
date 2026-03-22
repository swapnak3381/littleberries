'use client';
import * as React from "react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronRight } from "lucide-react"

/**
 * Header Component — fully responsive, mobile menu fixed
 */
const Header = ({ isHomePage = false }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeLink, setActiveLink] = useState("Home")

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Administration", href: "/administration" },
    { label: "Infrastructure", href: "/infrastructure" },
    { label: "Parents & Students", href: "/parents-&-students" },
    { label: "Photo Gallery", href: "/photo-gallery" },
  ]

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  return (
    <>
      <header
        className="sticky top-0 z-40 w-full shadow-md"
        style={{ backgroundColor: "#e3f0fa" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* ── Logo ── */}
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <img
                src="/logo.jpeg"
                alt="Little Berries Logo"
                className="h-12 w-12 rounded-full shadow"
              />
              <span className="text-xl font-extrabold text-purple-900 tracking-tight whitespace-nowrap">
                Little Berries
              </span>
            </Link>

            {/* ── Desktop Nav (xl screens) ── */}
            <nav className="hidden xl:flex items-center gap-6">
              {navLinks.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setActiveLink(item.label)}
                    className={`relative text-base font-bold transition-all duration-300 group whitespace-nowrap ${
                      activeLink === item.label
                        ? "text-orange-500"
                        : "text-gray-800 hover:text-orange-500"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-orange-400 transition-all duration-300 ${
                        activeLink === item.label ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* ── Desktop CTA ── */}
            <motion.div
              className="hidden xl:block shrink-0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link href="/contactus">
                <motion.button
                  className="group relative overflow-hidden px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 text-purple-900 font-extrabold text-base shadow-lg border-2 border-yellow-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                >
                  <span className="relative z-10 flex items-center gap-1">
                    <span>Admissions</span>
                    <ChevronRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
              </Link>
            </motion.div>

            {/* ── Hamburger (below xl) ── */}
            <button
              className="xl:hidden p-2 rounded-lg hover:bg-purple-100 transition-colors"
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6 text-purple-900" />
            </button>

          </div>
        </div>
      </header>

      {/* ── Mobile Drawer (rendered in a portal-like sibling, NOT inside header) ── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-50 bg-black/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer panel */}
            <motion.div
              key="drawer"
              className="fixed top-0 right-0 z-50 h-full w-72 flex flex-col"
              style={{ backgroundColor: "#e3f0fa" }}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-purple-200">
                <div className="flex items-center gap-3">
                  <img
                    src="/logo.jpeg"
                    alt="Little Berries Logo"
                    className="h-10 w-10 rounded-full shadow"
                  />
                  <div>
                    <p className="font-extrabold text-purple-900 leading-tight">Little Berries</p>
                    <p className="text-xs text-orange-500 italic">Brings Out The Best in You...</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg hover:bg-purple-100 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5 text-purple-900" />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex flex-col px-4 py-6 gap-1 flex-1">
                {navLinks.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => { setActiveLink(item.label); setIsOpen(false) }}
                      className={`block px-4 py-3 rounded-xl text-base font-bold transition-colors duration-200 ${
                        activeLink === item.label
                          ? "bg-yellow-100 text-orange-600"
                          : "text-gray-800 hover:bg-purple-100 hover:text-purple-900"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Admissions CTA */}
              <div className="px-4 pb-8">
                <Link
                  href="/contactus"
                  className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 text-purple-900 font-extrabold shadow-lg border-2 border-yellow-300 flex items-center justify-center gap-2"
                  onClick={() => setIsOpen(false)}
                >
                  <span>Admissions</span>
                  <ChevronRight size={16} />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header