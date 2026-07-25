"use client";

import { motion } from "motion/react";
import { proofAvatars } from "@/content/site";

export function AvatarStack() {
  return (
    <div className="flex -space-x-2 select-none">
      {proofAvatars.map((avatar, index) => (
        <motion.span
          key={avatar.initials}
          whileHover={{ y: -2, scale: 1.12 }}
          transition={{ type: "spring", damping: 18, stiffness: 260 }}
          style={{
            backgroundImage: `linear-gradient(135deg, ${avatar.from}, ${avatar.to})`,
            zIndex: proofAvatars.length - index,
          }}
          className="flex h-6 w-6 items-center justify-center rounded-full border-[1.5px] border-white text-[8px] font-bold tracking-wide text-white"
        >
          {avatar.initials}
        </motion.span>
      ))}
    </div>
  );
}
