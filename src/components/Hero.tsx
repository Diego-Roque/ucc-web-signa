"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Play, ShieldCheck, X } from "lucide-react";
import { easeOut, spring } from "@/lib/motion";

const enter = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: easeOut },
});

export default function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!videoOpen) return;
    const onKey = (e: KeyboardEvent) =>
      e.key === "Escape" && setVideoOpen(false);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [videoOpen]);

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-canvas pt-28 pb-20 lg:flex lg:min-h-[100dvh] lg:items-center lg:pt-24"
    >
      {/* Luz ambiental azul muy tenue detrás de la imagen */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-15%] h-[42rem] w-[42rem] rounded-full bg-glow blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="space-y-8 lg:col-span-7">
            <motion.div
              {...enter(0.05)}
              className="inline-flex items-center gap-2 rounded-full bg-tint px-3.5 py-1.5 text-xs font-medium tracking-wide text-accent"
            >
              <ShieldCheck className="h-3.5 w-3.5" />
              CUMPLIMIENTO SAT 2026
            </motion.div>

            <motion.h1
              {...enter(0.12)}
              className="text-[2.75rem] leading-[1.02] font-semibold tracking-[-0.04em] text-fg sm:text-6xl lg:text-[3.6rem] xl:text-[4rem]"
            >
              <span className="block">Controles volumétricos</span>
              <span className="block text-accent">automatizados.</span>
            </motion.h1>

            <motion.p
              {...enter(0.2)}
              className="max-w-[34rem] text-lg leading-relaxed text-fg-muted sm:text-xl"
            >
              Automatiza el cumplimiento de los Anexos 21 y 22 para
              hidrocarburos y petrolíferos, sin capturas manuales.
            </motion.p>

            <motion.div
              {...enter(0.28)}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="#contacto"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 font-medium text-white shadow-[0_10px_30px_-10px_rgb(234_88_12/0.6)] transition-[background-color,transform] duration-150 hover:bg-brand-700 active:scale-[0.97]"
              >
                Solicitar demo
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
              <button
                onClick={() => setVideoOpen(true)}
                className="inline-flex items-center justify-center gap-3 rounded-full bg-fill px-6 py-3.5 font-medium text-fg transition-[background-color,transform] duration-150 hover:bg-tint active:scale-[0.97]"
              >
                <Play size={14} className="fill-current" />
                Ver video
              </button>
            </motion.div>
          </div>

          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.1, ease: easeOut }}
          >
            <button
              onClick={() => setVideoOpen(true)}
              aria-label="Reproducir video de presentación"
              className="group relative block aspect-[4/3] w-full overflow-hidden rounded-[28px] bg-ink shadow-[0_50px_100px_-40px_rgb(194_65_12/0.5)] ring-1 ring-line transition-transform duration-200 active:scale-[0.99] lg:aspect-[4/5]"
            >
              <Image
                src="/images/video-placeholder.jpg"
                alt="Instalación industrial de almacenamiento de hidrocarburos"
                fill
                priority
                sizes="(min-width: 1024px) 480px, 100vw"
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-ink/0 to-transparent" />
              <span className="glass absolute bottom-5 left-5 flex h-14 w-14 items-center justify-center rounded-full border border-white/40 shadow-lg transition-transform duration-200 group-hover:scale-105">
                <Play
                  size={18}
                  className="ml-0.5 fill-brand-600 text-brand-600"
                />
              </span>
            </button>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {videoOpen && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setVideoOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Video de presentación UCC-SIGNA"
          >
            <motion.div
              className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-black shadow-2xl"
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={spring}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                ref={closeRef}
                onClick={() => setVideoOpen(false)}
                className="glass-dark absolute top-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full text-white transition-transform active:scale-90"
                aria-label="Cerrar video"
              >
                <X size={16} />
              </button>
              <div className="aspect-video w-full">
                <video
                  className="h-full w-full bg-black object-contain"
                  src="/videos/ucc-video-v1.mp4"
                  controls
                  autoPlay
                  playsInline
                  controlsList="nodownload"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
