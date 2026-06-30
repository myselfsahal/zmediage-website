"use client";

import { motion } from "framer-motion";
import { Search, Lightbulb, Paintbrush, Rocket, TrendingUp } from "lucide-react";
import Section, { SectionHeader } from "@/components/ui/section";

const steps = [
  {
    icon: Search,
    title: "Discover",
    description:
      "Deep dive into your business, audience, competitors, and market opportunities through comprehensive research.",
  },
  {
    icon: Lightbulb,
    title: "Strategy",
    description:
      "Develop a clear roadmap with defined goals, KPIs, and a strategic framework tailored to your objectives.",
  },
  {
    icon: Paintbrush,
    title: "Design",
    description:
      "Create stunning, functional designs that bring the strategy to life with meticulous attention to detail.",
  },
  {
    icon: Rocket,
    title: "Launch",
    description:
      "Execute with precision, ensuring everything is optimized, tested, and ready to make an impact from day one.",
  },
  {
    icon: TrendingUp,
    title: "Grow",
    description:
      "Continuously optimize, iterate, and scale based on real data and performance insights.",
  },
];

export default function Process() {
  return (
    <Section id="process" withNoise>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Our Process"
          subtitle="A proven methodology that ensures every project delivers exceptional results."
        />

        <div className="relative">
          {/* Connecting line - desktop only */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-px">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accentPurple/30 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
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
                <div className="text-center">
                  {/* Step number and icon */}
                  <div className="relative inline-flex flex-col items-center mb-6">
                    <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-primary mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-purple-500/20">
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 flex items-center justify-center rounded-full bg-accentPurple text-white text-xs font-bold">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-white font-semibold text-lg mb-3">
                    {step.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>

                {/* Arrow - except last item */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(100%+12px)] w-[calc(100%-24px)]">
                    <div className="flex items-center">
                      <div className="flex-1 h-px bg-gradient-to-r from-accentPurple/30 to-transparent" />
                      <div className="w-2 h-2 rounded-full bg-accentPurple/50" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
