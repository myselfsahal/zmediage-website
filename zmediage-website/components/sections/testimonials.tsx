"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Section, { SectionHeader } from "@/components/ui/section";

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "CEO, Luxe Boutique",
    content:
      "ZMEDIAGE transformed our brand completely. The attention to detail and strategic thinking behind every design decision was remarkable. Our online sales increased by 150% within three months.",
    rating: 5,
  },
  {
    name: "Dr. Priya Patel",
    role: "Founder, HealthFirst Clinic",
    content:
      "Working with ZMEDIAGE felt like having an in-house creative team. They understood our vision from day one and delivered a website that truly represents our commitment to patient care.",
    rating: 5,
  },
  {
    name: "Amit Kumar",
    role: "Director, BuildCraft Co.",
    content:
      "The team at ZMEDIAGE doesn't just design — they think like business partners. Our rebrand helped us win two major contracts and positioned us as leaders in our market.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <Section id="testimonials" withNoise>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="What Our Clients Say"
          subtitle="Real stories from businesses that trusted us with their growth."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative"
            >
              <div className="relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-500 h-full flex flex-col">
                {/* Quote icon */}
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-accentPurple/40" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-accentPurple text-accentPurple"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-white/60 text-sm leading-relaxed mb-8 flex-1">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">
                      {testimonial.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-white/40 text-xs">{testimonial.role}</p>
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
