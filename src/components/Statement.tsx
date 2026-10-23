"use client";

import { motion } from "framer-motion";
import { reveal } from "@/lib/motion";

const FIGURES = [
  { value: "$17,500", label: "Multa mínima por incumplimiento" },
  { value: "12 años", label: "Pena máxima de prisión" },
];

// Declaración del riesgo: el porqué de la plataforma, antes de explicar qué es.
export default function Statement() {
  return (
    <section className="bg-canvas py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          {...reveal()}
          className="max-w-4xl text-3xl leading-[1.15] font-semibold tracking-[-0.03em] text-fg md:text-5xl"
        >
          El incumplimiento en controles volumétricos tiene consecuencias
          fiscales y penales.{" "}
          <span className="text-fg-subtle">
            Por eso cada registro debe ser automático, íntegro y auditable.
          </span>
        </motion.h2>

        <div className="mt-16 grid gap-10 md:mt-20 md:grid-cols-12 md:gap-8">
          {FIGURES.map((f, i) => (
            <motion.div
              key={f.value}
              {...reveal(0.08 * (i + 1))}
              className="border-t border-line pt-6 md:col-span-4"
            >
              <div className="figures text-6xl font-semibold text-accent md:text-7xl">
                {f.value}
              </div>
              <p className="mt-3 text-fg-muted">{f.label}</p>
            </motion.div>
          ))}
          <motion.p
            {...reveal(0.24)}
            className="self-end text-lg leading-relaxed text-fg-muted md:col-span-4"
          >
            UCC-SIGNA elimina estos riesgos con una solución{" "}
            <span className="font-medium text-fg">
              confiable, conforme y auditable
            </span>
            , garantizando el cumplimiento total con el SAT.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
