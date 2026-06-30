"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  withNoise?: boolean;
}

export default function Section({
  children,
  className,
  id,
  withNoise = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-20 sm:py-28 lg:py-32 overflow-hidden",
        withNoise && "noise",
        className
      )}
    >
      {children}
    </section>
  );
}

export function SectionHeader({
  title,
  subtitle,
  align = "center",
  className,
}: {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "mb-16 sm:mb-20",
        align === "center" && "text-center max-w-3xl mx-auto",
        align === "left" && "text-left max-w-2xl",
        className
      )}
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-white/50 text-base sm:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
