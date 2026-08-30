import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaSun } from "react-icons/fa6";

import portfoliologo from "../assets/logo/portfoliologo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "WORK", path: "/work" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
  ];

  // =========================
  // SCROLL DETECTION
  // =========================

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // =========================
  // CLOSE MENU WHEN ROUTE CHANGES
  // =========================

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // =========================
  // PREVENT BODY SCROLL
  // WHILE MOBILE MENU IS OPEN
  // =========================

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // =========================
  // DARK MODE PLACEHOLDER
  // =========================

  const handleToggleBtn = () => {
    alert("Dark mode is coming soon");
  };

  // =========================
  // CURRENT PAGE
  // =========================

  const currentPage =
    navLinks.find((link) => link.path === location.pathname)?.name || "HOME";

  return (
    <>
      {/* =====================================
          NAVBAR
      ====================================== */}

      <motion.header
        animate={{
          backgroundColor:
            scrolled || menuOpen
              ? "rgba(246, 240, 230, 0.95)"
              : "rgba(246, 240, 230, 0)",
        }}
        transition={{ duration: 0.3 }}
        className={`fixed left-0 top-0 z-[100] w-full transition-all duration-300 ${
          scrolled || menuOpen
            ? "border-b border-[#ebe7e3] shadow-sm backdrop-blur-xl"
            : ""
        }`}
      >
        {/* =====================================
            HEADER
        ====================================== */}

        <div className="mx-auto flex w-[90%] max-w-7xl items-center justify-between py-5">
          {/* Logo */}

          <NavLink
            to="/"
            className="relative z-[110] shrink-0"
            aria-label="Go to homepage"
          >
            <motion.img
              src={portfoliologo}
              alt="Divine Chidozie Logo"
              className="h-8 w-auto object-contain sm:h-9"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            />
          </NavLink>

          {/* =====================================
              TABLET / DESKTOP NAVIGATION
          ====================================== */}

          <nav className="hidden md:block">
            <ul className="flex items-center gap-2 lg:gap-5">
              {navLinks.map((link, index) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    end={link.path === "/"}
                    className={({ isActive }) =>
                      `group relative flex items-center gap-2 rounded-md px-3 py-2 font-mono text-sm font-bold transition-all duration-300 ${
                        isActive
                          ? "bg-[#17130f] text-white"
                          : "text-[#6f665d] hover:text-[#17130f]"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span
                          className={`text-[10px] transition-opacity duration-300 ${
                            isActive
                              ? "opacity-50"
                              : "opacity-30 group-hover:opacity-60"
                          }`}
                        >
                          0{index + 1}
                        </span>

                        <span>{link.name}</span>

                        {isActive && (
                          <motion.span
                            layoutId="activeNavIndicator"
                            className="ml-1 h-1.5 w-1.5 rounded-full bg-[#bf5b39]"
                            transition={{
                              type: "spring",
                              stiffness: 500,
                              damping: 30,
                            }}
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}

              {/* Current Page */}

              <li className="ml-1 hidden items-center lg:flex">
                <span className="h-5 w-px bg-[#d9d1c8]" />

                <span className="ml-4 font-mono text-[10px] font-semibold tracking-[0.15em] text-[#9b9187]">
                  {currentPage}
                </span>
              </li>

              {/* Light Mode */}

              <li>
                <motion.button
                  onClick={handleToggleBtn}
                  type="button"
                  whileHover={{ rotate: 15, scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                  className="rounded-md p-2 text-[#6f665d] transition-all duration-300 hover:bg-[#17130f] hover:text-white"
                  aria-label="Toggle light mode"
                >
                  <FaSun size={14} />
                </motion.button>
              </li>
            </ul>
          </nav>

          {/* =====================================
              MOBILE DC BUTTON
          ====================================== */}

          <motion.button
            onClick={() => setMenuOpen((prev) => !prev)}
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.92 }}
            className={`relative z-[110] flex h-11 w-11 items-center justify-center rounded-full border font-mono text-xs font-bold transition-all duration-300 md:hidden ${
              menuOpen
                ? "border-[#17130f] bg-[#17130f] text-white"
                : "border-[#17130f] bg-[#f6f0e6] text-[#17130f]"
            }`}
          >
            <AnimatePresence mode="wait">
              {menuOpen ? (
                <motion.span
                  key="close"
                  initial={{
                    opacity: 0,
                    rotate: -90,
                    scale: 0.5,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: 90,
                    scale: 0.5,
                  }}
                  transition={{ duration: 0.2 }}
                  className="text-xl font-light leading-none"
                >
                  ×
                </motion.span>
              ) : (
                <motion.span
                  key="dc"
                  initial={{
                    opacity: 0,
                    scale: 0.5,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.5,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  DC
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* =====================================
            MOBILE MENU
        ====================================== */}

        <AnimatePresence>
          {menuOpen && (
            <>
              {/* Background Overlay */}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="fixed inset-0 top-[73px] z-[-1] bg-[#f6f0e6]"
              />

              {/* Navigation Panel */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: -20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative z-[105] max-h-[calc(100vh-73px)] overflow-y-auto border-t border-[#ebe7e3] bg-[#f6f0e6]"
              >
                <nav className="mx-auto w-[90%] max-w-7xl py-7">
                  {/* Mobile Header */}

                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9b9187]">
                        Navigation
                      </p>

                      <p className="mt-1 text-sm font-semibold text-[#17130f]">
                        Explore the portfolio
                      </p>
                    </div>

                    <span className="font-mono text-xs text-[#9b9187]">
                      {currentPage}
                    </span>
                  </div>

                  {/* Mobile Links */}

                  <ul className="space-y-2">
                    {navLinks.map((link, index) => (
                      <motion.li
                        key={link.path}
                        initial={{
                          opacity: 0,
                          x: -20,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.06,
                        }}
                      >
                        <NavLink
                          to={link.path}
                          end={link.path === "/"}
                          className={({ isActive }) =>
                            `group flex items-center justify-between rounded-xl px-4 py-4 transition-all duration-300 ${
                              isActive
                                ? "bg-[#17130f] text-white"
                                : "text-[#6f665d] hover:bg-[#ebe7e3] hover:text-[#17130f]"
                            }`
                          }
                        >
                          {({ isActive }) => (
                            <>
                              <div className="flex items-center gap-4">
                                <span
                                  className={`font-mono text-[10px] ${
                                    isActive
                                      ? "text-white/40"
                                      : "text-[#9b9187]"
                                  }`}
                                >
                                  0{index + 1}
                                </span>

                                <span className="font-mono text-sm font-bold">
                                  {link.name}
                                </span>
                              </div>

                              <motion.span
                                animate={{
                                  x: isActive ? 0 : -2,
                                }}
                                whileHover={{
                                  x: 3,
                                }}
                                className={`text-xs ${
                                  isActive ? "text-[#bf5b39]" : "text-[#9b9187]"
                                }`}
                              >
                                ↗
                              </motion.span>
                            </>
                          )}
                        </NavLink>
                      </motion.li>
                    ))}

                    {/* Light Mode */}

                    <motion.li
                      initial={{
                        opacity: 0,
                        x: -20,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        duration: 0.3,
                        delay: navLinks.length * 0.06,
                      }}
                    >
                      <button
                        onClick={handleToggleBtn}
                        type="button"
                        className="flex w-full items-center justify-between rounded-xl px-4 py-4 font-mono text-sm font-bold text-[#6f665d] transition-all duration-300 hover:bg-[#ebe7e3] hover:text-[#17130f]"
                      >
                        <div className="flex items-center gap-4">
                          <span className="font-mono text-[10px] text-[#9b9187]">
                            05
                          </span>

                          <span>LIGHT MODE</span>
                        </div>

                        <FaSun className="text-xs" />
                      </button>
                    </motion.li>
                  </ul>

                  {/* Mobile Footer */}

                  <motion.div
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: 0.4,
                    }}
                    className="mt-8 border-t border-[#ebe7e3] pt-5"
                  >
                    <div className="flex items-center justify-between">
                      <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#9b9187]">
                        Divine Chidozie
                      </p>

                      <span className="flex items-center gap-2 font-mono text-[10px] text-[#9b9187]">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                        Available
                      </span>
                    </div>
                  </motion.div>
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
