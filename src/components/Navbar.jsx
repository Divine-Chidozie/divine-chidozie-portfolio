import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import portfoliologo from "../assets/logo/portfoliologo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "WORK", path: "/work" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      animate={{
        backgroundColor: scrolled
          ? "rgba(246, 240, 230, 0.8)"
          : "rgba(246, 240, 230, 0)",
      }}
      transition={{ duration: 0.3 }}
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "border-b border-[#ebe7e3] shadow-sm backdrop-blur-lg" : ""
      }`}
    >
      <div className="mx-auto flex w-[90%] max-w-7xl items-center justify-between py-5">
        {/* Logo */}
        <NavLink to="/">
          <img
            src={portfoliologo}
            alt="Divine Chidozie Logo"
            className="h-8 w-auto object-contain"
          />
        </NavLink>

        {/* Navigation */}
        <nav>
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  end={link.path === "/"}
                  className={({ isActive }) =>
                    `rounded-md px-3 py-1 text-sm font-bold font-mono transition-all duration-300 ${
                      isActive
                        ? "bg-[#17130f] text-white"
                        : "text-[#6f665d] hover:text-[#17130f]"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}
