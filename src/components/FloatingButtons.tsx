"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";
import { easeOut, springSnappy } from "@/lib/motion";

const WHATSAPP_URL = `https://wa.me/525512345678?text=${encodeURIComponent(
  "Hola, me interesa conocer más sobre UCC-SIGNA",
)}`;

const MAIL_URL = `mailto:proyectos@signatech.com.mx?subject=${encodeURIComponent(
  "Consulta sobre UCC-SIGNA",
)}&body=${encodeURIComponent(
  "Hola, me interesa conocer más sobre la plataforma UCC-SIGNA para el control volumétrico de hidrocarburos.",
)}`;

function Tooltip({ text }: { text: string }) {
  return (
    <span className="pointer-events-none absolute right-full mr-3 rounded-lg bg-ink px-3 py-1.5 text-sm whitespace-nowrap text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
      {text}
    </span>
  );
}

const buttonBase =
  "group relative flex h-14 w-14 items-center justify-center rounded-full text-white shadow-[0_12px_30px_-8px_rgb(21_20_19/0.35)] transition-colors duration-200";

export default function FloatingButtons() {
  return (
    <div className="fixed right-5 bottom-5 z-40 flex flex-col gap-3">
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`${buttonBase} bg-[#25D366] hover:bg-[#1ebe5b]`}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.92 }}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ...springSnappy,
          opacity: { duration: 0.4, delay: 0.6, ease: easeOut },
        }}
        aria-label="Escríbenos por WhatsApp"
      >
        <MessageCircle size={24} />
        <Tooltip text="Escríbenos por WhatsApp" />
      </motion.a>
      <motion.a
        href={MAIL_URL}
        className={`${buttonBase} bg-brand-600 hover:bg-brand-700`}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.92 }}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ...springSnappy,
          opacity: { duration: 0.4, delay: 0.7, ease: easeOut },
        }}
        aria-label="Envíanos un email"
      >
        <Mail size={24} />
        <Tooltip text="Envíanos un email" />
      </motion.a>
    </div>
  );
}
