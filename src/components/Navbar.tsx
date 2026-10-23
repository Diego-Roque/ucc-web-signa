"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { spring, springSnappy } from "@/lib/motion";
import ThemeToggle from "@/components/ThemeToggle";

const SECTIONS = ["inicio", "nosotros", "servicios", "contacto"] as const;
type Section = (typeof SECTIONS)[number];

const label = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [active, setActive] = useState<Section>("inicio");
  const [open, setOpen] = useState(false);

  // Sección activa con IntersectionObserver: una franja cerca de la parte superior de la ventana
  useEffect(() => {
    if (!isHome) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id as Section);
        }
      },
      { rootMargin: "-80px 0px -70% 0px" },
    );
    for (const id of SECTIONS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [isHome]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // En la portada el ancla hace scroll suave (scroll-padding-top compensa la barra); fuera, navega a /#id
  const href = (id: Section) => (isHome ? `#${id}` : `/#${id}`);

  return (
    <nav
      className="glass fixed top-0 left-0 z-50 w-full border-b border-line"
      role="navigation"
      aria-label="Principal"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label="UCC-Signa, inicio"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/ucc-logo.ico" alt="" className="h-8 w-8" />
            <span className="text-lg font-medium tracking-tight text-fg">
              UCC-Signa
            </span>
          </Link>
          <span className="text-xs text-fg-subtle">by</span>
          {/* El logo de Signatech lleva al sitio corporativo */}
          <a
            href="https://www.signatech.com.mx/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Signatech (se abre en otra pestaña)"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/signatech-logo.webp"
              alt="Signatech"
              className="h-8 w-16 object-contain object-bottom dark:invert"
            />
          </a>
        </div>

        <div className="hidden items-center gap-1 md:flex">
          {SECTIONS.map((id) => {
            const isActive = isHome && active === id;
            return (
              <a
                key={id}
                href={href(id)}
                onClick={() => isHome && setActive(id)}
                aria-current={isActive ? "true" : undefined}
                className={`relative rounded-full px-4 py-1.5 text-sm transition-colors duration-200 ${
                  isActive ? "text-accent" : "text-fg-muted hover:text-fg"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-tint"
                    transition={springSnappy}
                  />
                )}
                {label(id)}
              </a>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle id="theme-desktop" />
          <a
            href={href("contacto")}
            className="rounded-full bg-brand-600 px-5 py-2 text-sm font-medium text-white transition-[background-color,transform] duration-150 hover:bg-brand-700 active:scale-[0.97]"
          >
            Solicitar demo
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full transition-transform active:scale-90 md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? (
            <X size={20} className="text-fg" />
          ) : (
            <Menu size={20} className="text-fg" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="overflow-hidden border-t border-line md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={spring}
          >
            <div className="space-y-1 px-6 py-4">
              {SECTIONS.map((id) => (
                <a
                  key={id}
                  href={href(id)}
                  onClick={() => setOpen(false)}
                  className={`block rounded-xl px-3 py-3 text-lg transition-colors active:bg-tint ${
                    isHome && active === id ? "text-accent" : "text-fg"
                  }`}
                >
                  {label(id)}
                </a>
              ))}
              <div className="flex items-center justify-between px-3 pt-2 pb-1">
                <span className="text-sm text-fg-muted">Tema</span>
                <ThemeToggle id="theme-mobile" />
              </div>
              <div className="pt-3">
                <a
                  href={href("contacto")}
                  onClick={() => setOpen(false)}
                  className="block w-full rounded-full bg-brand-600 py-3 text-center font-medium text-white transition-transform active:scale-[0.98]"
                >
                  Solicitar demo
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
