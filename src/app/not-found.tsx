"use client";

import { motion } from "framer-motion";
import { ArrowLeft, House, TriangleAlert } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-canvas flex flex-col">
      <div className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <h1 className="text-9xl md:text-[12rem] text-fill select-none">
                404
              </h1>
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, rotate: -10 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="w-20 h-20 rounded-3xl bg-brand-600 shadow-[0_20px_40px_-12px_rgb(234_88_12/0.5)] text-white flex items-center justify-center">
                  <TriangleAlert size={40} />
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-fg">
              Página no encontrada
            </h2>
            <div className="w-16 h-0.5 rounded-full bg-brand-500 mx-auto" />
            <p className="text-xl text-fg-muted leading-relaxed max-w-lg mx-auto">
              La página que buscas no existe o ha sido movida. Te ayudamos a
              encontrar lo que necesitas.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.button
              onClick={() => router.push("/")}
              className="rounded-full bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 text-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <House size={20} />
              Ir al inicio
            </motion.button>
            <motion.button
              onClick={() => router.back()}
              className="rounded-full bg-card text-fg ring-1 ring-line hover:ring-brand-300 px-8 py-4 text-lg font-medium transition-shadow duration-200 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ArrowLeft size={20} />
              Regresar
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
