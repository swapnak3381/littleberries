'use client';
import * as React from "react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronRight } from "lucide-react"

const Header = ({ isHomePage = false }) => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Administration", href: "/administration" },
    { label: "Infrastructure", href: "/infrastructure" },
    { label: "Parents & Students", href: "/parents-&-students" },
    { label: "Photo Gallery", href: "/photo-gallery" },
  ]

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

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <img
                src="/logo.jpeg"
                alt="Little Berries Logo"
                className="h-12 w-12 rounded-full shadow"
              />
              <span className="text-xl font-extrabold text-purple-900">
                Little Berries
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden xl:flex items-center gap-6">
              {navLinks.map((item, index) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href)

                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className={`relative text-base font-bold transition-all duration-300 group ${
                        isActive
                          ? "text-orange-500"
                          : "text-gray-800 hover:text-orange-500"
                      }`}
                    >
                      {item.label}
                      <span
                        className={`absolute -bottom-1 left-0 h-0.5 bg-orange-400 transition-all duration-300 ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </Link>
                  </motion.div>
                )
              })}
            </nav>

            {/* CTA */}
            <motion.div
              className="hidden xl:block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Link href="/contactus">
                <motion.button
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 text-purple-900 font-extrabold"
                  whileHover={{ scale: 1.05 }}
                >
                  Admissions
                </motion.button>
              </Link>
            </motion.div>

            {/* Mobile Button */}
            <button
              className="xl:hidden p-2"
              onClick={() => setIsOpen(true)}
            >
              <Menu className="h-6 w-6 text-purple-900" />
            </button>

          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-50 bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              className="fixed top-0 right-0 z-50 h-full w-80 flex flex-col shadow-2xl"
              style={{ backgroundColor: "#ffffff" }}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              {/* Drawer Header */}
              <div
                className="flex items-center justify-between px-5 py-4 border-b-2 border-purple-100"
                style={{ backgroundColor: "#e3f0fa" }}
              >
                <div className="flex items-center gap-2">
                  <img
                    src="/logo.jpeg"
                    alt="Little Berries Logo"
                    className="h-8 w-8 rounded-full shadow"
                  />
                  <span className="text-lg font-extrabold text-purple-900">
                    Little Berries
                  </span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-full hover:bg-purple-100 transition-colors"
                >
                  <X className="h-5 w-5 text-purple-900" />
                </button>
              </div>

              {/* Nav Links */}
              <nav className="flex flex-col px-4 py-6 gap-2 flex-1">
                {navLinks.map((item, index) => {
                  const isActive =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href)

                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.07 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center justify-between px-4 py-3.5 rounded-xl font-bold text-base transition-all duration-200 ${
                          isActive
                            ? "bg-gradient-to-r from-yellow-400 to-orange-400 text-purple-900 shadow-md"
                            : "text-gray-800 bg-gray-50 hover:bg-purple-50 hover:text-purple-800 border border-gray-100"
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronRight
                          className={`h-4 w-4 ${
                            isActive ? "text-purple-900" : "text-gray-400"
                          }`}
                        />
                      </Link>
                    </motion.div>
                  )
                })}
              </nav>

              {/* Admissions CTA at bottom */}
              <div className="px-4 pb-8">
                <Link href="/contactus" onClick={() => setIsOpen(false)}>
                  <motion.button
                    className="w-full py-3.5 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 text-purple-900 font-extrabold text-base shadow-md"
                    whileTap={{ scale: 0.97 }}
                  >
                    Admissions
                  </motion.button>
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