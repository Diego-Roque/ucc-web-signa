"use client";

import type { ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
}

export function BackButton({ className, children }: Props) {
  return (
    <button className={className} onClick={() => window.history.back()}>
      {children}
    </button>
  );
}

export function ScrollTopButton({ className, children }: Props) {
  return (
    <button
      className={className}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      {children}
    </button>
  );
}
