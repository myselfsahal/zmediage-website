"use client";

import { motion } from "framer-motion";
import {
  Palette,
  Globe,
  Share2,
  Target,
  PenTool,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Section, { SectionHeader } from "@/components/ui/section";

const services = [
  {
    icon: Palette,
    title: "Brand Identity",
    description:
      "Create a distinctive visual identity that captures your essence and resonates with your target audience.",
    features: ["Logo Design", "Brand Guidelines", "Color Strategy", "Typography"],
  },
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Build high-performance, conversion-focused websites that turn visitors into loyal customers.",
    features: ["Custom Design", "Responsive", "SEO Optimized", "Fast Loading"],
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description:
      "Grow your community and engage your audience with strategic content and consistent brand voice.",
    features: ["Content Strategy", "Community Growth", "Analytics", "Scheduling"],
  },
  {
    icon: Target,
    title: "Performance Marketing",
    description:
      "Drive qualified traffic and maximize ROI with data-driven advertising campaigns across platforms.",
    features: ["Google Ads", "Meta Ads", "Analytics", "A/B Testing"],
  },
  {
    icon: PenTool,
    title: "Creative Design",
    description:
      "Deliver stunning visual content that tells your story and elevates your brand above the competition.",
    features: ["UI/UX Design", "Print Design", "Motion Graphics", "Illustration"],
  },
  {
    icon: Briefcase,
    title: "Business Consulting",
    description:
      "Get expert guidance to navigate digital transformation and unlock new growth opportunities.",
    features: ["Strategy", "Market Analysis", "Process Optimization", "Growth Planning"],
  },
];

export default function ServicesSection() {
  return (
    <Section id="services" withNoise>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Services Built for Growth"
          subtitle="Comprehensive solutions designed to elevate your brand and accelerate your business success."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Link href={`/services#${service.title.toLowerCase().replace(/\s+/g, "-")}`}>
                <div className="group relative h-full p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-accentPurple/30 transition-all duration-500 hover:bg-white/[0.04] cursor-pointer overflow-hidden">
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accentPurple/5 via-transparent to-royal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <div className="relative">
                    {/* Icon */}
                    <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-primary mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-white font-semibold text-xl mb-3 group-hover:text-gradient transition-all duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/50 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 text-xs font-medium text-white/40 bg-white/5 rounded-full border border-white/5"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-accentPurple text-sm font-medium group-hover:gap-3 transition-all duration-300">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
