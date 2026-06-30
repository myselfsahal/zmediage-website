"use client";

import { motion } from "framer-motion";
import { Compass, Gem, TrendingUp, Handshake } from "lucide-react";
import Section, { SectionHeader } from "@/components/ui/section";

const pillars = [
  {
    icon: Compass,
    title: "Strategy First",
    description:
      "Every project begins with deep research and strategic planning. We don't create without understanding your business, market, and goals first.",
    color: "from-accentPurple/20 to-royal/20",
  },
  {
    icon: Gem,
    title: "Premium Design",
    description:
      "Obsessive attention to detail in every pixel. We craft experiences that feel luxurious, intuitive, and unmistakably yours.",
    color: "from-royal/20 to-accentPurple/20",
  },
  {
    icon: TrendingUp,
    title: "Growth Focused",
    description:
      "Every decision is measured against business impact. We design for conversions, engagement, and long-term sustainable growth.",
    color: "from-accentPurple/20 to-royal/20",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    description:
      "We're not vendors — we're partners. Your success is our success, and we're committed to walking the journey with you.",
    color: "from-royal/20 to-accentPurple/20",
  },
];

export default function WhyChooseUs() {
  return (
    <Section id="why-us" className="bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Why Choose ZMEDIAGE"
          subtitle="Four pillars that define how we work and why businesses trust us with their growth."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative"
            >
              <div className="relative p-8 sm:p-10 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden h-full">
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                <div className="relative">
                  <div className="flex items-start gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-primary group-hover:scale-110 transition-transform duration-500">
                      <pillar.icon className="w-6 h-6 text-white" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-white font-semibold text-xl mb-3 group-hover:text-gradient transition-all duration-300">
                        {pillar.title}
                      </h3>
                      <p className="text-white/50 text-sm leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
