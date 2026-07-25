"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { springPreset } from "@/lib/motion";

type FloatingCardProps = {
  icon: ReactNode;
  title: string;
  detail: string;
  className: string;
  iconClassName: string;
  glowShadow: string;
  ringClassName: string;
  delay: number;
  drift: { y: number; x: number; duration: number; tilt: number };
};

export function FloatingCard({
  icon,
  title,
  detail,
  className,
  iconClassName,
  glowShadow,
  ringClassName,
  delay,
  drift,
}: FloatingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ ...springPreset, delay }}
      className={`absolute ${className}`}
    >
      <motion.div
        animate={{ y: [0, -drift.y, 0], x: [0, drift.x, 0] }}
        transition={{ duration: drift.duration, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.05, rotate: drift.tilt }}
        style={{ boxShadow: glowShadow }}
        className={`glass-panel pointer-events-auto flex items-center gap-3 rounded-[20px] px-5 py-3 ring-1 ${ringClassName}`}
      >
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl ${iconClassName}`}
        >
          {icon}
        </span>
        <span className="flex flex-col text-left leading-tight">
          <span className="text-[13px] font-extrabold tracking-tight text-neutral-900">{title}</span>
          <span className="mt-0.5 text-[10px] font-semibold text-neutral-500">{detail}</span>
        </span>
      </motion.div>
    </motion.div>
  );
}
