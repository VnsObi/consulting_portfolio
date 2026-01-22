"use client";

import { motion } from "framer-motion";
import {
  Linkedin,
  Github,
  Mail,
  MapPin,
  Calendar,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="py-24 px-6 bg-slate-900 border-t border-slate-800"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight">
            Ready to build systems that actually work?
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            Book a free 15-minute audit of your current operational stacks. No
            sales pitch—just clarity on your next technical move.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://calendly.com/vnsobi/consulting"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white text-slate-900 px-8 py-4 rounded-lg hover:bg-slate-100 transition-colors text-lg font-bold flex items-center justify-center gap-2 group"
            >
              <Calendar className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
              Book Systems Audit
            </a>
            <a
              href="mailto:vnsobi@gmail.com"
              className="w-full sm:w-auto bg-transparent border border-slate-700 text-white px-8 py-4 rounded-lg hover:bg-slate-800 transition-colors text-lg font-medium flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Send an Email
            </a>
            <a
              href="https://wa.me/2349075717088"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-transparent border border-slate-700 text-white px-8 py-4 rounded-lg hover:bg-slate-800 transition-colors text-lg font-medium flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Direct Inquiry
            </a>
          </div>
          <p className="mt-6 text-sm text-slate-500">
            Typical response time: Under 24 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="border-t border-slate-700 pt-12"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-slate-400">
            {/* Location Signal */}
            <div className="flex items-center gap-2">
              <MapPin size={20} />
              <span className="text-sm font-medium">
                Based in Nigeria · Serving clients globally
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              <a
                href="https://www.linkedin.com/in/evans-obi-670366148/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/VnsObi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="mailto:vnsobi@gmail.com"
                className="hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
              <a
                href="https://wa.me/2349075717088"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={24} />
              </a>
            </div>
          </div>

          <div className="text-center mt-12 text-slate-500 text-sm">
            <p>© {new Date().getFullYear()} Evans Obi. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
