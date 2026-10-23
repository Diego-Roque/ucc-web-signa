import type { Transition } from "framer-motion";

// Spring críticamente amortiguado (damping 1.0): sin rebote, para casi toda la UI.
export const spring: Transition = { type: "spring", bounce: 0, duration: 0.4 };

// Spring rápido para controles pequeños (subrayados, píldoras, toasts).
export const springSnappy: Transition = {
  type: "spring",
  bounce: 0,
  duration: 0.3,
};

// Curva de salida para entradas al hacer scroll.
export const easeOut = [0.16, 1, 0.3, 1] as const;

// Entrada estándar al aparecer en pantalla.
export const reveal = (delay = 0, y = 16) => ({
  initial: { opacity: 0, y },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, delay, ease: easeOut },
});
