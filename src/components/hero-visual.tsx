"use client";

import { motion } from "motion/react";
import { BedDouble, ShieldCheck, TrendingUp } from "lucide-react";
import { slideUp } from "@/lib/motion";
import { FloatingCard } from "./floating-card";
import { OrbitRings } from "./orbit-rings";
import { RatePanel } from "./rate-panel";

export function HeroVisual() {
  return (
    <motion.div
      variants={slideUp}
      initial="hidden"
      animate="visible"
      className="pointer-events-none relative flex w-full items-center justify-center py-10 lg:justify-end"
    >
      <div
        aria-hidden
        className="absolute top-[30%] left-[20%] -z-10 h-[420px] w-[420px] animate-pulse rounded-full bg-orange-400/15 blur-[110px] duration-[7000ms]"
      />
      <OrbitRings />

      <div className="relative w-full max-w-[600px]">
        <RatePanel />

        <FloatingCard
          icon={<BedDouble className="h-4 w-4 text-white" strokeWidth={2.5} />}
          title="Direct booking"
          detail="Sea view suite, 3 nights"
          className="top-[6%] -right-4 sm:-right-10 md:-right-14"
          iconClassName="bg-gradient-to-br from-[#C2410C] to-[#7C2D12] shadow-[0_4px_12px_rgba(194,65,12,0.3)]"
          glowShadow="0 12px 32px -4px rgba(194,65,12,0.18)"
          ringClassName="ring-brand-500/10"
          delay={0.6}
          drift={{ y: 8, x: 2, duration: 5, tilt: 1 }}
        />

        <FloatingCard
          icon={<ShieldCheck className="h-4 w-4 text-white" strokeWidth={2.5} />}
          title="Rate parity held"
          detail="Across 9 channels"
          className="top-[34%] -left-6 sm:-left-12 md:-left-16"
          iconClassName="bg-gradient-to-br from-[#10B981] to-[#059669] shadow-[0_4px_12px_rgba(16,185,129,0.3)]"
          glowShadow="0 12px 32px -4px rgba(16,185,129,0.18)"
          ringClassName="ring-emerald-500/10"
          delay={0.8}
          drift={{ y: -8, x: -2, duration: 5.5, tilt: -1 }}
        />

        <FloatingCard
          icon={<TrendingUp className="h-4 w-4 text-white" strokeWidth={2.5} />}
          title="Occupancy 92%"
          detail="This weekend"
          className="-bottom-9 -right-4 sm:-right-8 md:-right-12"
          iconClassName="bg-gradient-to-br from-[#4F46E5] to-[#3730A3] shadow-[0_4px_12px_rgba(79,70,229,0.3)]"
          glowShadow="0 12px 32px -4px rgba(79,70,229,0.18)"
          ringClassName="ring-indigo-500/10"
          delay={1}
          drift={{ y: 10, x: -1, duration: 4.8, tilt: 1.5 }}
        />
      </div>
    </motion.div>
  );
}
