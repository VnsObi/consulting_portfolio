"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Linkedin, Github } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, profile } from "@/lib/content";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 md:py-5 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl md:text-2xl font-bold tracking-tight text-deep-slate shrink-0"
        >
          Evans Obi
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(link.href.replace("#", ""), e)}
              className="text-sm font-medium text-gray-600 hover:text-deep-slate transition-colors whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-3 pl-2 border-l border-slate-200">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-500 hover:text-deep-slate hover:bg-slate-100 transition-colors"
              aria-label="Evans Obi on LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-500 hover:text-deep-slate hover:bg-slate-100 transition-colors"
              aria-label="Evans Obi on GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection("contact", e)}
              className="bg-deep-slate text-white px-5 py-2.5 rounded-lg hover:bg-slate-800 transition-colors text-sm font-semibold whitespace-nowrap"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-deep-slate"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 p-6 flex flex-col space-y-4 shadow-lg"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-gray-800 py-2"
                onClick={(e) => scrollToSection(link.href.replace("#", ""), e)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-100 flex items-center gap-4">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-600 font-medium py-2"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-600 font-medium py-2"
              >
                <Github size={20} />
                GitHub
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
