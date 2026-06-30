"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Instagram, Linkedin, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const footerLinks = {
  services: [
    { label: "Brand Identity", href: "/services#brand-identity" },
    { label: "Website Development", href: "/services#website-development" },
    { label: "Social Media", href: "/services#social-media" },
    { label: "Performance Marketing", href: "/services#performance-marketing" },
    { label: "Creative Design", href: "/services#creative-design" },
    { label: "Business Consulting", href: "/services#business-consulting" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
    { label: "Book Consultation", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-gradient-to-b from-transparent to-royal/10">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accentPurple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center bg-gradient-primary rounded-xl">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-white font-semibold text-lg tracking-tight">
                ZMEDIAGE
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              A premium creative branding and digital growth agency helping
              businesses build trust and drive sustainable growth.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/zmediage"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://linkedin.com/company/zmediage"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" />
              </a>
            </div>
          </motion.div>

          {/* Services Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors duration-300 inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors duration-300 inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:hello@zmediage.com"
                  className="flex items-center gap-3 text-white/50 hover:text-white text-sm transition-colors duration-300 group"
                >
                  <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  hello@zmediage.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-3 text-white/50 hover:text-white text-sm transition-colors duration-300 group"
                >
                  <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  +91 98765 43210
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/50 text-sm">
                  <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span>India</span>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} ZMEDIAGE. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-white/30 hover:text-white/60 text-xs transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-white/30 hover:text-white/60 text-xs transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
