"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import LinkedinIcon from "@/components/LinkedinIcon";

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

// Anclas absolutas (/#...) para que funcionen también desde las páginas legales
const COLUMNS: { title: string; links: FooterLink[] }[] = [
  {
    title: "Plataforma",
    links: [
      { label: "Captura automatizada", href: "/#servicios" },
      { label: "Bitácoras digitales", href: "/#servicios" },
      { label: "Validación fiscal", href: "/#servicios" },
      { label: "Reportes SAT", href: "/#servicios" },
      { label: "Auditoría digital", href: "/#servicios" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Nosotros", href: "/#nosotros" },
      { label: "Solicitar demo", href: "/#contacto" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/ucc-signatech/",
        external: true,
      },
    ],
  },
  {
    title: "Contacto",
    links: [
      {
        label: "proyectos@signatech.com.mx",
        href: "mailto:proyectos@signatech.com.mx",
      },
      { label: "+52 55 1234 5678", href: "tel:+525512345678" },
      {
        label: "Av. San Antonio 256, Piso 9, Ampliación Nápoles, CDMX",
        href: "https://maps.google.com/?q=Av.+San+Antonio+256,+Ampliaci%C3%B3n+N%C3%A1poles,+03840+Ciudad+de+M%C3%A9xico,+CDMX",
        external: true,
      },
      {
        label: "ucc-signatech.com",
        href: "https://ucc-signatech.com/",
        external: true,
      },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Política de Privacidad", href: "/privacidad" },
      { label: "Términos de Uso", href: "/terminos" },
    ],
  },
];

const linkClass =
  "inline-flex items-center gap-1 rounded-sm text-fg-muted transition-colors duration-150 hover:text-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600";

function FooterLinkItem({ link }: { link: FooterLink }) {
  if (link.external) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        {link.label}
        <ArrowUpRight className="h-3 w-3 opacity-60" aria-hidden="true" />
        <span className="sr-only">(se abre en otra pestaña)</span>
      </a>
    );
  }
  if (link.href.startsWith("mailto:") || link.href.startsWith("tel:")) {
    return (
      <a href={link.href} className={linkClass}>
        {link.label}
      </a>
    );
  }
  return (
    <Link href={link.href} className={linkClass}>
      {link.label}
    </Link>
  );
}

// En móvil cada columna es un acordeón; desde md siempre están abiertas
function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: FooterLink[];
}) {
  const [open, setOpen] = useState(false);
  const id = `footer-${title.toLowerCase()}`;

  return (
    <div className="border-b border-line md:border-0">
      <h3 className="text-sm font-semibold text-fg">
        <span className="hidden md:inline">{title}</span>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={id}
          className="flex w-full items-center justify-between py-4 text-left md:hidden"
        >
          {title}
          <ChevronDown
            className={`h-4 w-4 text-fg-subtle transition-transform duration-200 motion-reduce:transition-none ${
              open ? "rotate-180" : ""
            }`}
            aria-hidden="true"
          />
        </button>
      </h3>
      <div
        id={id}
        className={`grid transition-[grid-template-rows,visibility] duration-300 ease-out motion-reduce:transition-none md:visible md:grid-rows-[1fr] ${
          open ? "visible grid-rows-[1fr]" : "invisible grid-rows-[0fr]"
        }`}
      >
        <ul className="space-y-2.5 overflow-hidden text-sm md:mt-4">
          {links.map((link, i) => (
            <li
              key={link.label}
              className={i === links.length - 1 ? "pb-4 md:pb-0" : ""}
            >
              <FooterLinkItem link={link} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-line bg-canvas-alt">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-32 sm:pb-10">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <div className="inline-flex items-center gap-3">
              <Link
                href="/"
                className="inline-flex items-center gap-3"
                aria-label="UCC-Signa, ir al inicio"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/ucc-logo.ico" alt="" className="h-8 w-8" />
                <span className="text-lg font-semibold tracking-[-0.02em] text-fg">
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
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-fg-muted">
              Plataforma SaaS para automatizar el cumplimiento fiscal en control
              volumétrico de hidrocarburos y petrolíferos.
            </p>
          </div>

          <nav
            aria-label="Pie de página"
            className="grid md:col-span-8 md:grid-cols-[1fr_1fr_1.5fr_1fr] md:gap-8"
          >
            {COLUMNS.map((col) => (
              <FooterColumn
                key={col.title}
                title={col.title}
                links={col.links}
              />
            ))}
          </nav>
        </div>

        <p className="mt-14 max-w-3xl text-xs leading-relaxed text-fg-subtle">
          Plataforma alineada con los Anexos 21 y 22 de la Resolución Miscelánea
          Fiscal 2026 del SAT para el control volumétrico de hidrocarburos y
          petrolíferos.
        </p>

        <div className="mt-6 flex flex-col gap-4 border-t border-line pt-6 text-xs text-fg-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Signa Technological, S.A.S. de C.V.
            Todos los derechos reservados.
          </p>
          <a
            href="https://www.linkedin.com/company/ucc-signatech/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn de UCC-Signatech"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-fill text-fg-muted transition-[background-color,color,transform] duration-150 hover:bg-tint hover:text-accent active:scale-90"
          >
            <LinkedinIcon size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
