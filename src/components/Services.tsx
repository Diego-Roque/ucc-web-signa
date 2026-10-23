"use client";

import { useRef, useState, type ComponentType } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import {
  BadgeCheck,
  ChartColumn,
  Check,
  CircleCheckBig,
  Cloud,
  Database,
  FileSearch,
  FileText,
  Gauge,
  Lock,
  type LucideProps,
  Server,
  Shield,
  ShieldCheck,
  Workflow,
  Zap,
} from "lucide-react";
import { easeOut, reveal, spring } from "@/lib/motion";

type Icon = ComponentType<LucideProps>;
type StageId = "captura" | "registro" | "reportes" | "gestion";

// Tiempo que permanece cada etapa antes de avanzar sola
const STAGE_DURATION_S = 10;

// Recorrido de la plataforma, en el mismo orden que el video de presentación
const STAGES: { id: StageId; title: string; icon: Icon }[] = [
  { id: "captura", title: "Captura", icon: Gauge },
  { id: "registro", title: "Registro", icon: Shield },
  { id: "reportes", title: "Reportes", icon: FileText },
  { id: "gestion", title: "Gestión", icon: ShieldCheck },
];

const STAGE_CONTENT: Record<
  StageId,
  { title: string; description: string; features: string[] }[]
> = {
  captura: [
    {
      title: "Dispositivos certificados",
      description:
        "Integración directa con computadores de flujo, medidores de nivel, tanques y sistemas SCADA en tiempo real.",
      features: [
        "Computadores de flujo",
        "Medidores de nivel",
        "Sistemas SCADA",
      ],
    },
    {
      title: "Recepción automática",
      description:
        "Captura en tiempo real de entrada, salida, transferencias y mermas conforme al Anexo 21.",
      features: ["Tiempo real", "Entrada y salida", "Transferencias internas"],
    },
  ],
  registro: [
    {
      title: "Bitácoras inalterables",
      description:
        "Registros digitales con firma electrónica y cumplimiento NOM-151 para cada operación.",
      features: ["Firma electrónica", "NOM-151", "Registros inalterables"],
    },
    {
      title: "Validación XML",
      description:
        "Validación conforme a esquemas XML del SAT y cierre diario de registros operativos.",
      features: [
        "Esquemas XML SAT",
        "Validación semántica",
        "Almacenamiento 5 años",
      ],
    },
  ],
  reportes: [
    {
      title: "Reportes XML",
      description:
        "Emisión automática de reportes diarios y mensuales en formato XML del SAT.",
      features: ["Formato XML", "Reportes diarios", "Lineamientos SAT"],
    },
    {
      title: "Vinculación CFDI",
      description:
        "Vinculación automática con comprobantes fiscales digitales según el Anexo 21.",
      features: ["CFDI automático", "Facturas vinculadas", "Anexo 21"],
    },
  ],
  gestion: [
    {
      title: "Consola web",
      description:
        "Gestión centralizada de múltiples centros con panel de control operativo.",
      features: ["Múltiples centros", "Control remoto", "Indicadores clave"],
    },
    {
      title: "Auditoría digital",
      description:
        "Evidencias técnicas para verificación SAT y compatibilidad con verificadores del Anexo 22.",
      features: ["Evidencias técnicas", "Verificación SAT", "Anexo 31"],
    },
  ],
};

// Bento de funcionalidades: 9 celdas exactas. Ritmo en lg (4 columnas):
// fila 1-2: [A 2x2][B][C] / [D][E] · fila 3: [F 2x1][G][H] · fila 4: [I 4x1]
interface Tile {
  title: string;
  desc: string;
  icon: Icon;
  className: string;
  tone: "brand" | "tint" | "card";
  size?: "hero" | "wide";
}

const TILES: Tile[] = [
  {
    title: "Captura automatizada",
    desc: "Integración con dispositivos certificados: computadores de flujo, medidores de nivel, tanques y sistemas SCADA en tiempo real.",
    icon: Zap,
    className: "md:col-span-2 lg:row-span-2",
    tone: "brand",
    size: "hero",
  },
  {
    title: "Bitácoras digitales",
    desc: "Bitácoras inalterables con firma electrónica y cumplimiento NOM-151 para cada operación.",
    icon: Shield,
    className: "",
    tone: "card",
  },
  {
    title: "Validación fiscal",
    desc: "Validación estructural y semántica conforme a esquemas XML del SAT y lineamientos del Anexo 21.",
    icon: CircleCheckBig,
    className: "",
    tone: "card",
  },
  {
    title: "Resguardo seguro",
    desc: "Almacenamiento inmutable por mínimo 5 años con cifrado en tránsito y reposo, redundancia geográfica.",
    icon: Database,
    className: "",
    tone: "tint",
  },
  {
    title: "Reportes obligatorios",
    desc: "Emisión automática de reportes diarios y mensuales en XML estructurados según lineamientos SAT.",
    icon: ChartColumn,
    className: "",
    tone: "card",
  },
  {
    title: "Gestión centralizada",
    desc: "Consola web para múltiples centros de distribución con panel de control e indicadores clave.",
    icon: Server,
    className: "md:col-span-2",
    tone: "card",
  },
  {
    title: "Vinculación CFDI",
    desc: "Vinculación automática con comprobantes fiscales digitales y facturas relacionadas con movimientos físicos.",
    icon: FileText,
    className: "",
    tone: "card",
  },
  {
    title: "Auditoría digital",
    desc: "Trazabilidad completa y evidencias técnicas para verificación fiscal del SAT y auditores externos.",
    icon: ShieldCheck,
    className: "",
    tone: "card",
  },
  {
    title: "Modelo SaaS",
    desc: "Plataforma tecnológica integral bajo Software as a Service, sin despliegues físicos complejos.",
    icon: Cloud,
    className: "md:col-span-2 lg:col-span-4",
    tone: "tint",
    size: "wide",
  },
];

const TONES: Record<Tile["tone"], { box: string; chip: string; desc: string }> =
  {
    brand: {
      box: "bg-brand-600 text-white",
      chip: "bg-white/15 text-white",
      desc: "text-white/90",
    },
    tint: {
      box: "bg-tint text-fg ring-1 ring-tint-line",
      chip: "bg-card text-accent",
      desc: "text-fg-muted",
    },
    card: {
      box: "bg-card text-fg ring-1 ring-line",
      chip: "bg-tint text-accent",
      desc: "text-fg-muted",
    },
  };

const BENEFITS: {
  title: string;
  summary: string;
  icon: Icon;
  items: string[];
}[] = [
  {
    title: "Cumplimiento",
    summary:
      "Operas conforme a la normativa vigente y llegas listo a cualquier revisión.",
    icon: BadgeCheck,
    items: [
      "Anexos 21 y 22 RMF 2026",
      "Inspecciones SAT",
      "Dictámenes técnicos",
    ],
  },
  {
    title: "Automatización",
    summary: "La información va del medidor al reporte sin capturas a mano.",
    icon: Workflow,
    items: ["Sin intervención manual", "Reducción de errores", "Escalabilidad"],
  },
  {
    title: "Seguridad",
    summary: "Cada registro queda íntegro, cifrado y respaldado.",
    icon: Lock,
    items: [
      "Registros íntegros NOM-151",
      "Evidencia auditable",
      "Cifrado y redundancia",
    ],
  },
  {
    title: "Auditorías",
    summary: "La evidencia está lista cuando el SAT o un auditor la solicita.",
    icon: FileSearch,
    items: [
      "Información histórica",
      "Formatos oficiales",
      "Soporte especializado",
    ],
  },
];

function Stepper() {
  const [active, setActive] = useState<StageId>("captura");
  const [hovered, setHovered] = useState(false);
  const [keyboardFocus, setKeyboardFocus] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.4 });
  const index = STAGES.findIndex((s) => s.id === active);

  // El avance lo dispara el fin de la barra de progreso: pausar la barra pausa el recorrido
  const paused = hovered || keyboardFocus || !inView;
  const advance = () => setActive(STAGES[(index + 1) % STAGES.length].id);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={(e) => setKeyboardFocus(e.target.matches(":focus-visible"))}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setKeyboardFocus(false);
      }}
    >
      <div className="relative">
        {/* Línea de progreso entre etapas: avanza hasta la etapa activa */}
        <div
          aria-hidden="true"
          className="absolute top-7 right-[12.5%] left-[12.5%] hidden h-0.5 rounded-full bg-line sm:block"
        >
          <motion.div
            className="h-full origin-left rounded-full bg-brand-600"
            animate={{ scaleX: index / (STAGES.length - 1) }}
            transition={spring}
          />
        </div>

        <div
          role="tablist"
          aria-label="Etapas de la plataforma"
          className="relative grid grid-cols-4 gap-2"
        >
          {STAGES.map((stage, i) => {
            const isActive = stage.id === active;
            const reached = i <= index;
            const StageIcon = stage.icon;
            return (
              <button
                key={stage.id}
                role="tab"
                id={`stage-${stage.id}`}
                aria-selected={isActive}
                aria-controls="stage-panel"
                onClick={() => setActive(stage.id)}
                className="group flex flex-col items-center gap-3 rounded-2xl py-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600"
              >
                <span
                  className={`relative flex h-14 w-14 items-center justify-center rounded-full transition-[background-color,color,box-shadow,transform] duration-200 group-active:scale-90 ${
                    reached
                      ? "bg-brand-600 text-white shadow-[0_10px_24px_-8px_rgb(234_88_12/0.6)]"
                      : "bg-card text-fg-subtle ring-1 ring-line group-hover:bg-tint group-hover:text-accent group-hover:ring-tint-line"
                  }`}
                >
                  <StageIcon className="h-6 w-6" strokeWidth={1.75} />
                  {isActive && (
                    <motion.span
                      layoutId="stage-ring"
                      className="absolute -inset-1.5 rounded-full ring-2 ring-brand-600/30"
                      transition={spring}
                    />
                  )}
                </span>
                <span
                  className={`text-sm font-medium transition-colors sm:text-base ${
                    isActive
                      ? "text-fg"
                      : "text-fg-subtle group-hover:text-fg-muted"
                  }`}
                >
                  {stage.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div
        id="stage-panel"
        role="tabpanel"
        aria-labelledby={`stage-${active}`}
        className="relative mt-10 overflow-hidden rounded-3xl bg-card p-8 ring-1 ring-line md:p-12"
      >
        {/* key reinicia la barra al cambiar de etapa, también al elegir una a mano */}
        <div
          key={active}
          aria-hidden="true"
          onAnimationEnd={advance}
          className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-brand-600/70"
          style={{
            animation: `stage-progress ${STAGE_DURATION_S}s linear forwards`,
            animationPlayState: paused ? "paused" : "running",
          }}
        />
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active}
            className="grid gap-10 md:grid-cols-2 md:gap-16"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: easeOut }}
          >
            {STAGE_CONTENT[active].map((item) => (
              <div key={item.title} className="space-y-4">
                <h3 className="text-2xl font-semibold tracking-[-0.02em] text-fg">
                  {item.title}
                </h3>
                <p className="text-lg leading-relaxed text-fg-muted">
                  {item.description}
                </p>
                <ul className="flex flex-wrap gap-2 pt-1">
                  {item.features.map((feat) => (
                    <li
                      key={feat}
                      className="rounded-full bg-tint px-3 py-1 text-xs font-medium text-accent"
                    >
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <>
      <section className="bg-canvas py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div {...reveal()} className="mb-14 max-w-2xl">
            <h2 className="text-3xl leading-[1.1] font-semibold tracking-[-0.03em] text-fg md:text-5xl">
              Nuestra plataforma
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-fg-muted">
              De la medición en sitio al reporte ante el SAT, sin capturas
              manuales.
            </p>
          </motion.div>
          <motion.div {...reveal(0.08)}>
            <Stepper />
          </motion.div>
        </div>
      </section>

      <section className="bg-canvas pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <motion.h2
            {...reveal()}
            className="mb-12 max-w-2xl text-3xl leading-[1.1] font-semibold tracking-[-0.03em] text-fg md:text-5xl"
          >
            Funcionalidades
          </motion.h2>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {TILES.map((t, i) => {
              const tone = TONES[t.tone];
              const TileIcon = t.icon;
              const isHero = t.size === "hero";
              const isWide = t.size === "wide";
              return (
                <motion.article
                  key={t.title}
                  {...reveal((i % 4) * 0.05, 20)}
                  className={`group flex rounded-3xl p-7 transition-transform duration-300 ease-out hover:-translate-y-0.5 ${tone.box} ${t.className} ${
                    isWide
                      ? "flex-col gap-6 sm:flex-row sm:items-center"
                      : "flex-col justify-between gap-10"
                  } ${isHero ? "min-h-[22rem] lg:p-10" : ""}`}
                >
                  <div
                    className={`flex flex-shrink-0 items-center justify-center rounded-2xl ${tone.chip} ${
                      isHero ? "h-14 w-14" : "h-11 w-11"
                    }`}
                  >
                    <TileIcon
                      className={isHero ? "h-7 w-7" : "h-5 w-5"}
                      strokeWidth={1.75}
                    />
                  </div>
                  <div className={isWide ? "max-w-3xl" : ""}>
                    <h3
                      className={`font-semibold tracking-[-0.02em] ${
                        isHero ? "text-3xl md:text-4xl" : "text-lg"
                      }`}
                    >
                      {t.title}
                    </h3>
                    <p
                      className={`mt-2 leading-relaxed ${tone.desc} ${
                        isHero ? "max-w-md text-lg" : "text-sm"
                      }`}
                    >
                      {t.desc}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-canvas-alt py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div {...reveal()} className="mb-12 max-w-2xl md:mb-14">
            <h2 className="text-3xl leading-[1.1] font-semibold tracking-[-0.03em] text-fg md:text-5xl">
              Beneficios
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-fg-muted">
              Lo que gana tu operación desde el primer día.
            </p>
          </motion.div>

          <ul className="grid gap-x-16 md:grid-cols-2">
            {BENEFITS.map((b, i) => {
              const BenefitIcon = b.icon;
              return (
                <motion.li
                  key={b.title}
                  {...reveal((i % 2) * 0.06)}
                  className="grid gap-5 border-t border-line py-8 sm:grid-cols-[auto_1fr] sm:gap-6 md:py-10"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-tint text-accent ring-1 ring-tint-line">
                    <BenefitIcon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.02em] text-fg">
                      {b.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-fg-muted">
                      {b.summary}
                    </p>
                    <ul className="mt-5 space-y-2.5">
                      {b.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-sm font-medium text-fg"
                        >
                          <Check
                            className="h-4 w-4 flex-shrink-0 text-accent"
                            strokeWidth={2.5}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
