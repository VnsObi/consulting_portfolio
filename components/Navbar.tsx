"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, MessageCircle, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Expertise", href: "#expertise" },
  { name: "Case Studies", href: "#case-studies" },
  { name: "Services", href: "#services" },
  { name: "Insights", href: "#insights" },
];

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
      <div className="max-w-7xl mx-auto px-6 py-4 md:py-5 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-deep-slate"
        >
          Evans Obi
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(link.href.replace("#", ""), e)}
              className="text-sm font-medium text-gray-600 hover:text-deep-slate transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/2349075717088"
              target="_blank"
              className="p-2.5 rounded-lg bg-green-50 text-green-700 hover:bg-green-100 transition-colors border border-green-200"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle size={20} />
            </a>
            <a
              href="mailto:vnsobi@gmail.com"
              target="_blank"
              className="p-2.5 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors border border-slate-200"
              aria-label="Send Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection("contact", e)}
              className="bg-deep-slate text-white px-6 py-2.5 rounded-lg hover:bg-slate-800 transition-colors text-sm font-semibold"
            >
              Book Strategy Call
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-deep-slate"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
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
            className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 p-6 flex flex-col space-y-4 shadow-lg"
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
            <div className="pt-4 border-t border-gray-100 flex flex-col space-y-4">
              <a
                href="#contact"
                onClick={(e) => scrollToSection("contact", e)}
                className="bg-deep-slate text-white px-5 py-3 text-center text-sm font-semibold rounded-md hover:bg-slate-800 transition-colors"
              >
                Book Strategy Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
