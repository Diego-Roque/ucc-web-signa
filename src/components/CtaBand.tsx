"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { reveal } from "@/lib/motion";

export default function CtaBand() {
  return (
    <section className="bg-canvas py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          {...reveal(0, 24)}
          className="relative isolate overflow-hidden rounded-[32px] bg-brand-600 px-8 py-14 text-white md:px-16 md:py-20"
        >
          {/* Misma técnica que la cifra 24/7: foto teñida por luminosidad, completa a la derecha
              y desvanecida hacia la izquierda para dejar el texto sobre naranja liso. En móvil el texto
              ocupa todo el ancho, así que el desvanecido va de arriba hacia abajo */}
          <div
            aria-hidden="true"
            className="absolute inset-y-0 right-0 -z-10 w-full mix-blend-luminosity [mask-image:linear-gradient(to_bottom,transparent_35%,black)] md:w-3/4 md:[mask-image:linear-gradient(to_right,transparent_15%,black_70%)]"
          >
            <Image
              src="/images/refineria-atardecer.jpg"
              alt=""
              fill
              sizes="(min-width: 1280px) 900px, 75vw"
              className="object-cover object-[70%_65%]"
            />
          </div>
          {/* Texto y botón a la izquierda, sobre naranja liso; la mitad derecha queda para la foto */}
          <div className="relative max-w-2xl">
            <h2 className="text-3xl leading-[1.1] font-semibold tracking-[-0.03em] md:text-5xl">
              Cumplimiento automatizado.
              <span className="block text-white/80">
                Tranquilidad garantizada.
              </span>
            </h2>
            <p className="mt-5 max-w-xl text-lg text-white/90">
              Tu aliado en el cumplimiento normativo del sector energético.
            </p>
            <a
              href="#contacto"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-medium text-brand-700 shadow-[0_10px_30px_-10px_rgb(21_20_19/0.5)] transition-transform duration-150 active:scale-[0.97]"
            >
              Solicitar demo
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
