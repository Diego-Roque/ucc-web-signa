"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BadgeCheck, Check, type LucideIcon } from "lucide-react";
import { reveal } from "@/lib/motion";

const FEATURES = [
  {
    title: "Almacenamiento inmutable",
    desc: "Seguridad garantizada por 5+ años",
  },
  { title: "Reportes automáticos", desc: "XML/JSON diarios y mensuales" },
  { title: "Arquitectura SaaS", desc: "Escalable y siempre actualizada" },
];

// Bento de cifras: 4 celdas exactas (relleno de marca, tinte, tarjeta y tarjeta con cifra en acento)
const STATS: {
  numero: string;
  label: string;
  descripcion: string;
  className: string;
  muted: string;
  figure?: string;
  image?: string;
  icon?: LucideIcon;
}[] = [
  {
    numero: "24/7",
    label: "Monitoreo continuo",
    descripcion: "Captura en tiempo real desde tus equipos de medición",
    className: "col-span-2 bg-brand-600 text-white",
    muted: "text-white/90",
    image: "/images/video-placeholder.jpg",
  },
  {
    numero: "5+",
    label: "Años de resguardo",
    descripcion: "Almacenamiento seguro garantizado",
    className: "bg-tint text-fg",
    muted: "text-fg-muted",
  },
  {
    numero: "100%",
    label: "Cumplimiento SAT",
    descripcion: "Anexos 21 y 22 RMF",
    className: "bg-card text-fg ring-1 ring-line",
    muted: "text-fg-muted",
    icon: BadgeCheck,
  },
  {
    numero: "0",
    label: "Errores manuales",
    descripcion: "Automatización completa, de la medición al reporte",
    className: "col-span-2 bg-card text-fg ring-1 ring-line",
    muted: "text-fg-muted",
    figure: "text-accent",
  },
];

export default function About() {
  return (
    <section id="nosotros" className="bg-canvas-alt py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-12 lg:gap-16">
        <motion.div {...reveal()} className="lg:col-span-6">
          <h2 className="text-3xl leading-[1.1] font-semibold tracking-[-0.03em] text-fg md:text-5xl">
            Unidad Central de Control{" "}
            <span className="text-accent">UCC-SIGNA</span>
          </h2>
          <div className="mt-8 max-w-[38rem] space-y-5 text-lg leading-relaxed text-fg-muted">
            <p>
              Plataforma tecnológica integral que opera bajo el modelo{" "}
              <strong className="font-medium text-fg">
                Software as a Service (SaaS)
              </strong>
              , diseñada para automatizar y asegurar el cumplimiento de las
              obligaciones fiscales relacionadas con el control volumétrico de
              hidrocarburos y petrolíferos.
            </p>
            <p>
              Arquitectura, funcionalidades y procesos alineados con los{" "}
              <strong className="font-medium text-fg">
                lineamientos técnicos del SAT
              </strong>{" "}
              y con los{" "}
              <strong className="font-medium text-fg">
                Anexos 21 y 22 de la Resolución Miscelánea Fiscal
              </strong>
              .
            </p>
          </div>

          <ul className="mt-10 space-y-5">
            {FEATURES.map((f) => (
              <li key={f.title} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-tint text-accent ring-1 ring-tint-line">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                <div>
                  <p className="font-medium text-fg">{f.title}</p>
                  <p className="text-sm text-fg-muted">{f.desc}</p>
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-10 text-sm text-fg-subtle">
            Desarrollada por{" "}
            <span className="text-fg-muted">
              Signa Technological, S.A.S. de C.V.
            </span>
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 self-center sm:gap-4 lg:col-span-6">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              {...reveal(0.06 * i, 20)}
              className={`relative isolate flex flex-col justify-between gap-8 overflow-hidden rounded-3xl p-6 sm:p-8 ${s.className}`}
            >
              {s.image && (
                // Foto teñida de naranja (mezcla por luminosidad sobre el relleno de marca; la mezcla va en el
                // contenedor porque la máscara crea su propio contexto de apilamiento), visible a la derecha
                // y desvanecida hacia la izquierda para dejar el texto sobre naranja liso
                <div
                  aria-hidden="true"
                  className="absolute inset-y-0 right-0 -z-10 w-3/4 mix-blend-luminosity [mask-image:linear-gradient(to_right,transparent,black_65%)]"
                >
                  <Image
                    src={s.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 420px, 75vw"
                    className="object-cover object-[50%_45%]"
                  />
                </div>
              )}
              <div
                className={`figures text-5xl font-semibold sm:text-6xl ${s.figure ?? ""}`}
              >
                {s.numero}
              </div>
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="font-medium">{s.label}</p>
                  <p className={`mt-1 text-sm ${s.muted}`}>{s.descripcion}</p>
                </div>
                {s.icon && (
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-tint text-accent ring-1 ring-tint-line">
                    <s.icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
