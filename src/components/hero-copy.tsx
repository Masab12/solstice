"use client";

import { motion } from "motion/react";
import { ChevronRight, Play } from "lucide-react";
import { hero } from "@/content/site";
import { slideUp, staggerChildren } from "@/lib/motion";
import { AvatarStack } from "./avatar-stack";

const childVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

export function HeroCopy() {
  return (
    <motion.div
      variants={{ ...slideUp, ...staggerChildren }}
      initial="hidden"
      animate="visible"
      className="flex max-w-[620px] flex-col items-start justify-center text-left lg:pr-6"
    >
      <motion.div
        variants={childVariants}
        className="flex w-fit items-center gap-3 rounded-full border border-black/5 bg-black/5 px-3 py-1.5 shadow-xs"
      >
        <AvatarStack />
        <p className="text-[12px] text-black/80">
          {hero.eyebrow.prefix}{" "}
          <span className="font-semibold text-neutral-900">{hero.eyebrow.highlight}</span>{" "}
          {hero.eyebrow.suffix}
        </p>
      </motion.div>

      <motion.h1
        variants={childVariants}
        className="mt-6 font-display text-[44px] leading-[1.02] font-normal tracking-[-1.5px] text-black select-none sm:text-[54px] lg:text-[68px] lg:tracking-[-2.5px]"
      >
        {hero.headline[0]}
        <br />
        {hero.headline[1]}
      </motion.h1>

      <motion.p
        variants={childVariants}
        className="mt-5 max-w-[480px] text-[18px] leading-relaxed tracking-[-0.5px] text-black/60"
      >
        {hero.body}
      </motion.p>

      <motion.div variants={childVariants} className="mt-8 flex flex-wrap items-center gap-6">
        <motion.a
          href={hero.primaryCta.href}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", damping: 18, stiffness: 320 }}
          style={{
            boxShadow:
              "inset 0px 4px 4px 0px rgba(255,255,255,0.35), 0 10px 25px -5px rgba(194, 65, 12, 0.3)",
          }}
          className="group flex w-fit items-center gap-4 rounded-[16px] bg-brand-500 py-2 pr-2 pl-6 text-sm font-bold text-white transition-colors hover:bg-brand-600"
        >
          {hero.primaryCta.label}
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-brand-500 transition-transform group-hover:translate-x-0.5">
            <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
          </span>
        </motion.a>

        <a href={hero.secondaryCta.href} className="group flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-100 bg-brand-50 transition-colors group-hover:bg-brand-100">
            <Play className="h-3.5 w-3.5 fill-brand-500 text-brand-500" />
          </span>
          <span className="text-[14px] font-bold text-brand-500 transition-colors group-hover:text-brand-600">
            {hero.secondaryCta.label}
          </span>
        </a>
      </motion.div>
    </motion.div>
  );
}
