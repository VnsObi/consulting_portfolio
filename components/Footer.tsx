"use client";

import { motion } from "framer-motion";
import {
  Linkedin,
  Github,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { contact, profile } from "@/lib/content";

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
          className="max-w-3xl mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-8 tracking-tight">
            {contact.heading}
          </h2>

          {contact.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-slate-300 text-lg mb-5 leading-relaxed"
            >
              {paragraph}
            </p>
          ))}

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-10">
            <a
              href={`mailto:${profile.email}`}
              className="bg-white text-slate-900 px-7 py-4 rounded-lg hover:bg-slate-100 transition-colors text-base font-bold flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Send an Email
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border border-slate-700 text-white px-7 py-4 rounded-lg hover:bg-slate-800 transition-colors text-base font-medium flex items-center justify-center gap-2"
            >
              <Linkedin className="w-5 h-5" />
              Connect on LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border border-slate-700 text-white px-7 py-4 rounded-lg hover:bg-slate-800 transition-colors text-base font-medium flex items-center justify-center gap-2"
            >
              <Github className="w-5 h-5" />
              View GitHub
            </a>
          </div>

          <p className="mt-8 text-sm text-slate-400">
            <a
              href={`mailto:${profile.email}`}
              className="font-medium text-slate-300 hover:text-white transition-colors"
            >
              {profile.email}
            </a>
            <span className="mx-2 text-slate-600">·</span>
            Typical response time: under 24 hours.
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
            <div className="flex items-center gap-2 text-center md:text-left">
              <MapPin size={20} className="shrink-0" />
              <span className="text-sm font-medium">{profile.location}</span>
            </div>

            <div className="flex items-center gap-6">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Evans Obi on LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Evans Obi on GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="hover:text-white transition-colors"
                aria-label="Email Evans Obi"
              >
                <Mail size={24} />
              </a>
              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Message Evans Obi on WhatsApp"
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
