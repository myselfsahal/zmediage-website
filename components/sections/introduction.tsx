"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Shield, Zap } from "lucide-react";
import Section, { SectionHeader } from "@/components/ui/section";

const features = [
  {
    icon: TrendingUp,
    title: "Business Growth",
    description:
      "We focus on measurable outcomes that directly impact your bottom line, not just vanity metrics.",
  },
  {
    icon: Users,
    title: "Audience Connection",
    description:
      "Build meaningful relationships with your customers through authentic, strategic brand communication.",
  },
  {
    icon: Shield,
    title: "Trust & Credibility",
    description:
      "Establish authority in your market with professional branding that signals quality and reliability.",
  },
  {
    icon: Zap,
    title: "Competitive Edge",
    description:
      "Stand out in crowded markets with distinctive positioning that captures attention and drives preference.",
  },
];

export default function Introduction() {
  return (
    <Section id="introduction" className="bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Your Growth Partner in the Digital World"
          subtitle="In today's competitive landscape, your brand is your most valuable asset. We help businesses transform their digital presence into a powerful growth engine."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -5 }}
              className="group relative p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-all duration-500 hover:bg-white/[0.05]"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accentPurple/5 to-royal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-primary mb-5 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-5 h-5 text-white" />
                </div>

                <h3 className="text-white font-semibold text-lg mb-3">
                  {feature.title}
                </h3>

                <p className="text-white/50 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
