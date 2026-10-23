"use client";

import { useLayoutEffect, useSyncExternalStore } from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import {
  applyTheme,
  readTheme,
  setTheme,
  subscribe,
  type Theme,
} from "@/lib/theme";
import { springSnappy } from "@/lib/motion";

const OPTIONS: { value: Theme; label: string; icon: typeof Sun }[] = [
  { value: "light", label: "Claro", icon: Sun },
  { value: "dark", label: "Oscuro", icon: Moon },
];

export default function ThemeToggle({ id = "theme" }: { id?: string }) {
  const theme = useSyncExternalStore(
    subscribe,
    readTheme,
    () => "light" as const,
  );

  // En desarrollo, Strict Mode limpia los atributos de <html> al remontar; se vuelven a aplicar
  useLayoutEffect(() => {
    applyTheme(readTheme());
  }, []);

  return (
    <div
      role="radiogroup"
      aria-label="Tema de color"
      className="flex items-center gap-0.5 rounded-full bg-fill p-0.5"
    >
      {OPTIONS.map(({ value, label, icon: Icon }) => {
        const selected = theme === value;
        return (
          <button
            key={value}
            role="radio"
            aria-checked={selected}
            aria-label={label}
            title={label}
            onClick={() => setTheme(value)}
            className={`relative flex h-7 w-7 items-center justify-center rounded-full transition-colors active:scale-90 ${
              selected ? "text-fg" : "text-fg-subtle hover:text-fg"
            }`}
          >
            {selected && (
              <motion.span
                layoutId={`${id}-pill`}
                className="absolute inset-0 rounded-full bg-card shadow-[0_1px_3px_rgb(21_20_19/0.15)] ring-1 ring-line"
                transition={springSnappy}
              />
            )}
            <Icon className="relative h-3.5 w-3.5" strokeWidth={2} />
          </button>
        );
      })}
    </div>
  );
}
