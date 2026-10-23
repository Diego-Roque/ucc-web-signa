"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import {
  CircleCheckBig,
  CircleX,
  Globe,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { reveal, springSnappy } from "@/lib/motion";

const ACTIVIDADES = ["Usuario", "Permisionario", "Contratista", "Asignatario"];

const HIDROCARBUROS = [
  "Gas Natural",
  "Gas LP",
  "Petróleo",
  "Gasolina",
  "Diésel",
  "NAFTA",
  "Condensados",
  "Turbosina",
];

const INDUSTRIAS = [
  { value: "energetica", label: "Energética" },
  { value: "minera", label: "Minera" },
  { value: "alimentos", label: "Alimentos" },
  { value: "transformacion", label: "Transformación" },
  { value: "transporte", label: "Transporte" },
  { value: "quimica", label: "Química" },
  { value: "hotelera", label: "Hotelera" },
  { value: "otra", label: "Otra" },
];

const MAP_SRC =
  "https://maps.google.com/maps?q=Av.+San+Antonio+256,+Ampliaci%C3%B3n+N%C3%A1poles,+03840+Ciudad+de+M%C3%A9xico,+CDMX&z=16&output=embed";

interface FormValues {
  nombre: string;
  apellidos: string;
  empresa: string;
  sitio_web?: string;
  celular: string;
  email: string;
  hidrocarburos?: string[];
  actividad: string;
  industria: string;
  mensaje?: string;
}

const inputClass =
  "w-full border-b border-line-strong bg-transparent py-2.5 text-fg placeholder:text-fg-subtle transition-colors duration-200 focus:border-brand-600 focus:outline-none aria-[invalid=true]:border-red-500";

const labelClass = "text-sm font-medium text-fg";

// Opciones como pastillas: mismo aspecto para casillas (varias) y radios (una)
const chipClass =
  "block rounded-full px-3.5 py-1.5 text-sm text-fg ring-1 ring-line-strong transition-[background-color,color,box-shadow] duration-150 peer-checked:bg-brand-600 peer-checked:text-white peer-checked:ring-brand-600 peer-focus-visible:ring-2 peer-focus-visible:ring-brand-600 hover:ring-brand-400 active:scale-[0.97]";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p role="alert" className="mt-1 text-xs text-red-600 dark:text-red-400">
      {message}
    </p>
  );
}

function ContactInfo({
  icon,
  title,
  delay,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  delay: number;
  children: React.ReactNode;
}) {
  return (
    <motion.div className="flex gap-4" {...reveal(delay)}>
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-tint text-accent ring-1 ring-tint-line">
        {icon}
      </div>
      <div className="space-y-1">
        <h4 className="font-medium text-fg">{title}</h4>
        {children}
      </div>
    </motion.div>
  );
}

export default function Contact() {
  const [toast, setToast] = useState<"success" | "error" | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const showToast = (type: "success" | "error") => {
    setToast(type);
    setTimeout(() => setToast(null), 5000);
  };

  const onSubmit = async (data: FormValues) => {
    try {
      // Mismo servicio que usa el sitio original (Web3Forms). Configura tu propia llave en .env.local
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          from_name: "Sitio Web Signatech",
          subject: "Nuevo mensaje desde el formulario de contacto",
          ...data,
        }),
      });
      const json = await res.json();
      if (json.success === true) {
        reset();
        showToast("success");
      } else {
        showToast("error");
      }
    } catch {
      showToast("error");
    }
  };

  return (
    <section id="contacto" className="bg-canvas-alt py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <AnimatePresence>
          {toast && (
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.96 }}
              transition={springSnappy}
              role="status"
              className={`fixed top-20 right-6 z-50 flex items-center gap-3 rounded-2xl px-5 py-3.5 text-white shadow-[0_20px_40px_-12px_rgb(21_20_19/0.4)] ${
                toast === "success" ? "bg-brand-600" : "bg-ink"
              }`}
            >
              {toast === "success" ? (
                <>
                  <CircleCheckBig className="h-5 w-5" />
                  <span>Mensaje enviado correctamente</span>
                </>
              ) : (
                <>
                  <CircleX className="h-5 w-5" />
                  <span>Error al enviar el mensaje</span>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div {...reveal()} className="mb-14 max-w-2xl">
          <h2 className="mb-5 text-3xl leading-[1.1] font-semibold tracking-[-0.03em] text-fg md:text-5xl">
            Contacto
          </h2>
          <p className="text-lg text-fg-muted">
            ¿Listo para transformar tu gestión energética? Contáctanos hoy
            mismo.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col gap-8 lg:col-span-5">
            <ContactInfo
              icon={<Mail className="h-4 w-4" />}
              title="Correo electrónico"
              delay={0}
            >
              <a
                href="mailto:proyectos@signatech.com.mx"
                className=" text-fg-muted transition-colors hover:text-accent"
              >
                proyectos@signatech.com.mx
              </a>
            </ContactInfo>
            <ContactInfo
              icon={<Phone className="h-4 w-4" />}
              title="Teléfono"
              delay={0.05}
            >
              <a
                href="tel:+525512345678"
                className=" text-fg-muted transition-colors hover:text-accent"
              >
                +52 55 1234 5678
              </a>
            </ContactInfo>
            <ContactInfo
              icon={<MapPin className="h-4 w-4" />}
              title="Oficina"
              delay={0.1}
            >
              <p className="leading-relaxed text-fg-muted">
                Av. San Antonio 256, Piso 9,
                <br />
                Col. Ampliación Nápoles, C.P. 03840
                <br />
                Ciudad de México, México
              </p>
            </ContactInfo>
            <ContactInfo
              icon={<Globe className="h-4 w-4" />}
              title="Sitio web"
              delay={0.12}
            >
              <a
                href="https://ucc-signatech.com/"
                target="_blank"
                rel="noopener noreferrer"
                className=" text-fg-muted transition-colors hover:text-accent"
              >
                ucc-signatech.com
              </a>
            </ContactInfo>
            <motion.div
              className="h-64 overflow-hidden rounded-2xl bg-card ring-1 ring-line lg:h-auto lg:min-h-64 lg:flex-1"
              {...reveal(0.15)}
            >
              <iframe
                src={MAP_SRC}
                className="h-full w-full dark:brightness-[.85]"
                loading="lazy"
                title="Ubicación de la oficina"
              />
            </motion.div>
          </div>

          <motion.div
            className="space-y-6 rounded-3xl bg-card p-6 shadow-[0_30px_60px_-30px_rgb(194_65_12/0.25)] ring-1 ring-line sm:p-8 lg:col-span-7"
            {...reveal(0.1)}
          >
            <h3 className="text-xl font-semibold tracking-[-0.02em] text-fg">
              Envíanos un mensaje
            </h3>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
              noValidate
            >
              <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="nombre" className={labelClass}>
                    Nombre *
                  </label>
                  <input
                    id="nombre"
                    {...register("nombre", {
                      required: "El nombre es requerido",
                    })}
                    type="text"
                    autoComplete="given-name"
                    placeholder="Ingrese su nombre"
                    aria-invalid={!!errors.nombre}
                    className={inputClass}
                  />
                  <FieldError message={errors.nombre?.message} />
                </div>
                <div className="space-y-2">
                  <label htmlFor="apellidos" className={labelClass}>
                    Apellidos *
                  </label>
                  <input
                    id="apellidos"
                    {...register("apellidos", {
                      required: "Los apellidos son requeridos",
                    })}
                    type="text"
                    autoComplete="family-name"
                    placeholder="Ingrese sus apellidos"
                    aria-invalid={!!errors.apellidos}
                    className={inputClass}
                  />
                  <FieldError message={errors.apellidos?.message} />
                </div>

                <div className="space-y-2">
                  <label htmlFor="empresa" className={labelClass}>
                    Empresa *
                  </label>
                  <input
                    id="empresa"
                    {...register("empresa", {
                      required: "La empresa es requerida",
                    })}
                    type="text"
                    autoComplete="organization"
                    placeholder="Nombre de la empresa"
                    aria-invalid={!!errors.empresa}
                    className={inputClass}
                  />
                  <FieldError message={errors.empresa?.message} />
                </div>
                <div className="space-y-2">
                  <label htmlFor="sitio_web" className={labelClass}>
                    Sitio Web
                  </label>
                  <input
                    id="sitio_web"
                    {...register("sitio_web")}
                    type="url"
                    autoComplete="url"
                    placeholder="https://www.ejemplo.com"
                    className={inputClass}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="celular" className={labelClass}>
                    Celular *
                  </label>
                  <input
                    id="celular"
                    {...register("celular", {
                      required: "El celular es requerido",
                    })}
                    type="tel"
                    autoComplete="tel"
                    placeholder="+52 55 1234 5678"
                    aria-invalid={!!errors.celular}
                    className={inputClass}
                  />
                  <FieldError message={errors.celular?.message} />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className={labelClass}>
                    Email *
                  </label>
                  <input
                    id="email"
                    {...register("email", {
                      required: "El email es requerido",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Email inválido",
                      },
                    })}
                    type="email"
                    autoComplete="email"
                    placeholder="correo@empresa.com"
                    aria-invalid={!!errors.email}
                    className={inputClass}
                  />
                  <FieldError message={errors.email?.message} />
                </div>
              </div>

              <fieldset>
                <legend className={labelClass}>
                  Hidrocarburo o Petrolífero{" "}
                  <span className="font-normal text-fg-muted">
                    (puedes elegir varios)
                  </span>
                </legend>
                <div className="flex flex-wrap gap-2 pt-3">
                  {HIDROCARBUROS.map((h) => (
                    <label key={h} className="cursor-pointer">
                      <input
                        {...register("hidrocarburos")}
                        type="checkbox"
                        value={h}
                        className="peer sr-only"
                      />
                      <span className={chipClass}>{h}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <fieldset>
                <legend className={labelClass}>
                  Actividad que realizas con hidrocarburos o petrolíferos *
                </legend>
                <div className="flex flex-wrap gap-2 pt-3">
                  {ACTIVIDADES.map((a) => (
                    <label key={a} className="cursor-pointer">
                      <input
                        {...register("actividad", {
                          required: "La actividad es requerida",
                        })}
                        type="radio"
                        value={a}
                        className="peer sr-only"
                      />
                      <span className={chipClass}>{a}</span>
                    </label>
                  ))}
                </div>
                <FieldError message={errors.actividad?.message} />
                <p className="mt-2.5 text-xs leading-relaxed text-fg-muted">
                  Usuario: persona física o moral que utiliza Gas Natural,
                  Diésel, Gasolina o Gas LP sin permiso otorgado por las
                  autoridades.
                </p>
              </fieldset>

              <div className="space-y-2">
                <label htmlFor="industria" className={labelClass}>
                  Tipo de industria *
                </label>
                <select
                  id="industria"
                  {...register("industria", {
                    required: "El tipo de industria es requerido",
                  })}
                  aria-invalid={!!errors.industria}
                  className={inputClass}
                  defaultValue=""
                >
                  <option value="">Selecciona una opción</option>
                  {INDUSTRIAS.map((i) => (
                    <option key={i.value} value={i.value}>
                      {i.label}
                    </option>
                  ))}
                </select>
                <FieldError message={errors.industria?.message} />
              </div>

              <div className="space-y-2">
                <label htmlFor="mensaje" className={labelClass}>
                  Comentarios extra
                </label>
                <textarea
                  id="mensaje"
                  {...register("mensaje")}
                  rows={3}
                  placeholder="Escribe tu mensaje aquí..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <div className="flex flex-col-reverse gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-fg-muted">
                  Respondemos en menos de 24 horas hábiles.
                </p>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full flex-shrink-0 items-center justify-center gap-2.5 rounded-full bg-brand-600 px-7 py-3.5 font-medium text-white shadow-[0_10px_30px_-10px_rgb(234_88_12/0.6)] transition-colors duration-200 hover:bg-brand-700 disabled:opacity-60 sm:w-auto"
                  whileTap={{ scale: 0.98 }}
                  transition={springSnappy}
                >
                  <Send className="h-4 w-4" />
                  {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
