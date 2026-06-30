"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Section, { SectionHeader } from "@/components/ui/section";

const projects = [
  {
    title: "Luxe Boutique",
    category: "Brand Identity & E-commerce",
    description: "Complete rebrand and Shopify store for a premium fashion retailer.",
    color: "bg-gradient-to-br from-purple-900/40 to-royal/40",
  },
  {
    title: "HealthFirst Clinic",
    category: "Website & Digital Strategy",
    description: "Modern web presence and patient acquisition strategy for a healthcare provider.",
    color: "bg-gradient-to-br from-royal/40 to-purple-900/40",
  },
  {
    title: "BuildCraft Co.",
    category: "Brand Identity & Marketing",
    description: "Industrial branding and lead generation campaign for a construction firm.",
    color: "bg-gradient-to-br from-purple-900/40 to-royal/40",
  },
  {
    title: "Spice Route",
    category: "Social Media & Branding",
    description: "Visual identity and social growth strategy for a restaurant chain.",
    color: "bg-gradient-to-br from-royal/40 to-purple-900/40",
  },
];

export default function FeaturedWork() {
  return (
    <Section id="work" className="bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Featured Work"
          subtitle="A selection of projects that showcase our commitment to excellence and results."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="group relative overflow-hidden rounded-2xl cursor-pointer">
                {/* Image placeholder with gradient */}
                <div className={`relative aspect-[4/3] ${project.color} border border-white/5`}>
                  {/* Pattern overlay */}
                  <div 
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                      backgroundSize: '24px 24px'
                    }}
                  />

                  {/* Project number */}
                  <div className="absolute top-6 left-6">
                    <span className="text-white/20 text-6xl font-bold">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-accentPurple text-xs font-medium uppercase tracking-wider mb-2">
                          {project.category}
                        </p>
                        <h3 className="text-white font-semibold text-xl sm:text-2xl mb-2 group-hover:text-gradient transition-all duration-300">
                          {project.title}
                        </h3>
                        <p className="text-white/50 text-sm max-w-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                          {project.description}
                        </p>
                      </div>
                      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 group-hover:bg-gradient-primary transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                        <ArrowUpRight className="w-5 h-5 text-white" />
                      </div>
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
