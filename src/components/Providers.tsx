"use client";

import { MotionConfig } from "framer-motion";

// Respeta "reducir movimiento" del sistema: las transformaciones se omiten y solo quedan los fundidos.
export default function Providers({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
