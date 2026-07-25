"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Menu, Sunrise, X } from "lucide-react";
import { headerCta, navigation } from "@/content/site";
import { slideDown } from "@/lib/motion";
import { Wordmark } from "./wordmark";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        variants={slideDown}
        initial="hidden"
        animate="visible"
        className="pointer-events-none fixed top-[30px] right-0 left-0 z-50 flex justify-center px-4"
      >
        <div
          className={`pointer-events-auto h-12 w-full max-w-[1180px] rounded-[16px] transition-all duration-300 ${
            scrolled ? "glass-surface shadow-[0_8px_30px_-12px_rgba(194,65,12,0.25)]" : ""
          }`}
        >
          <nav className="flex w-full items-center justify-between gap-8 px-6 py-2">
            <a href="#top" className="flex items-center gap-2">
              <Sunrise className="h-6 w-6 text-brand-500" strokeWidth={2.25} />
              <Wordmark />
            </a>

            <ul className="hidden items-center gap-8 md:flex">
              {navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[14px] font-medium text-black/60 transition-colors hover:text-black"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2">
              <a
                href={headerCta.href}
                className="group hidden h-9 items-center gap-2 rounded-[12px] border border-black/10 bg-black/5 px-5 text-[14px] font-semibold text-black transition-all hover:bg-black/10 hover:shadow-md sm:flex"
              >
                {headerCta.label}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                aria-label="Open navigation"
                className="flex h-9 w-9 items-center justify-center rounded-[12px] border border-black/10 bg-black/5 text-black transition-colors hover:bg-black/10 md:hidden"
              >
                <Menu className="h-4 w-4" />
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-60 md:hidden"
          >
            <button
              type="button"
              aria-label="Close navigation"
              onClick={() => setMenuOpen(false)}
              className="absolute inset-0 bg-black/20"
            />
            <motion.aside
              initial={{ x: 260 }}
              animate={{ x: 0 }}
              exit={{ x: 260 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-0 right-0 h-full w-[260px] border-l border-black/10 bg-white/95 p-6 backdrop-blur-[40px]"
            >
              <div className="flex items-center justify-between">
                <Wordmark />
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close navigation"
                  className="flex h-8 w-8 items-center justify-center rounded-[10px] border border-black/10 text-black"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <ul className="mt-10 flex flex-col gap-6">
                {navigation.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="text-[16px] font-medium text-black/70 transition-colors hover:text-black"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href={headerCta.href}
                onClick={() => setMenuOpen(false)}
                className="mt-10 flex h-10 items-center justify-center gap-2 rounded-[12px] bg-brand-500 text-[14px] font-semibold text-white"
              >
                {headerCta.label}
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </motion.aside>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
