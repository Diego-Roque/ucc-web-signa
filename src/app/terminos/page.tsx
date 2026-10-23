import type { Metadata } from "next";
import { ArrowLeft, FileText } from "lucide-react";
import { BackButton, ScrollTopButton } from "@/components/LegalButtons";

export const metadata: Metadata = {
  title: "Términos y Condiciones | UCC-Signa",
};

export default function TerminosPage() {
  return (
    <div className="min-h-screen bg-canvas">
      <div className="bg-ink text-white pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <BackButton className="flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors duration-200">
            <ArrowLeft size={20} />
            Volver
          </BackButton>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-brand-600 flex items-center justify-center">
              <FileText size={24} />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em]">
                Términos y Condiciones
              </h1>
              <p className="text-white/70 mt-2">
                UCC-SIGNA - Plataforma de Control Volumétrico
              </p>
            </div>
          </div>
          <div className="w-16 h-0.5 rounded-full bg-brand-500" />
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-lg max-w-none">
          <div className="rounded-2xl bg-tint ring-1 ring-tint-line p-6 mb-8">
            <p className="text-sm text-fg-muted mb-0">
              <strong>Última actualización:</strong>
              {" Septiembre 2025"}
            </p>
          </div>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold tracking-tight text-fg mb-4">
              1. Información de la Empresa
            </h2>
            <div className="rounded-2xl bg-canvas-alt p-6">
              <p>
                <strong>Signa Technological, S.A.S. de C.V.</strong>
                {' ("la Empresa", "nosotros" o "UCC-SIGNA")'}
              </p>
              <ul className="mt-4 space-y-1">
                <li>
                  <strong>Domicilio:</strong>
                  {" Av. San Antonio 256, Piso 9, Col. Ampliación Nápoles, C.P. 03840, Ciudad de México, México"}
                </li>
                <li>
                  <strong>RFC:</strong>
                  {" [RFC de la empresa]"}
                </li>
                <li>
                  <strong>Correo:</strong>
                  {" proyectos@signatech.com.mx"}
                </li>
                <li>
                  <strong>Teléfono:</strong>
                  {" +52 55 1234 5678"}
                </li>
              </ul>
            </div>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold tracking-tight text-fg mb-4">
              2. Definiciones
            </h2>
            <ul className="space-y-3">
              <li>
                <strong>Plataforma:</strong>
                {" Sistema UCC-SIGNA para control volumétrico de hidrocarburos"}
              </li>
              <li>
                <strong>Usuario:</strong>
                {" Persona física autorizada para usar la plataforma"}
              </li>
              <li>
                <strong>Cliente:</strong>
                {" Empresa contratante de los servicios"}
              </li>
              <li>
                <strong>Datos Volumétricos:</strong>
                {" Información de hidrocarburos y petrolíferos"}
              </li>
              <li>
                <strong>SAT:</strong>
                {" Servicio de Administración Tributaria"}
              </li>
              <li>
                <strong>Anexos 30 y 31:</strong>
                {" Disposiciones de la Resolución Miscelánea Fiscal"}
              </li>
            </ul>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold tracking-tight text-fg mb-4">
              3. Descripción del Servicio
            </h2>
            <h3 className="text-xl font-medium text-fg mb-3">
              3.1 Servicios Incluidos
            </h3>
            <ul className="space-y-2 mb-6">
              <li>• Captura automatizada de datos volumétricos</li>
              <li>• Generación de bitácoras digitales inalterables</li>
              <li>• Validación fiscal conforme a esquemas XML del SAT</li>
              <li>• Almacenamiento seguro por mínimo 5 años</li>
              <li>• Emisión automática de reportes diarios y mensuales</li>
              <li>• Vinculación con CFDI y facturas</li>
              <li>• Consola de gestión centralizada</li>
              <li>• Auditoría digital y evidencias técnicas</li>
            </ul>
            <h3 className="text-xl font-medium text-fg mb-3">
              3.2 Modalidad SaaS
            </h3>
            <p>
              El servicio se presta bajo modelo Software as a Service, sin
              instalaciones físicas en las instalaciones del Cliente.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold tracking-tight text-fg mb-4">
              4. Registro y Acceso
            </h2>
            <h3 className="text-xl font-medium text-fg mb-3">
              4.1 Requisitos de Registro
            </h3>
            <ul className="space-y-2 mb-6">
              <li>• Ser empresa del sector hidrocarburos</li>
              <li>• Contar con permisos CRE vigentes</li>
              <li>• Proporcionar información veraz y completa</li>
              <li>• Designar usuarios autorizados</li>
            </ul>
            <h3 className="text-xl font-medium text-fg mb-3">
              4.2 Credenciales de Acceso
            </h3>
            <ul className="space-y-2">
              <li>• Cada usuario tendrá credenciales únicas</li>
              <li>• Autenticación multifactor obligatoria</li>
              <li>• Responsabilidad por seguridad de credenciales</li>
              <li>• Notificación inmediata de comprometimiento</li>
            </ul>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold tracking-tight text-fg mb-4">
              5. Obligaciones del Cliente
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl bg-canvas-alt p-6">
                <h4 className="font-semibold text-fg mb-3">
                  Información y Documentación
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• Proporcionar información veraz</li>
                  <li>• Mantener permisos vigentes</li>
                  <li>• Notificar cambios</li>
                  <li>• Facilitar documentación</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-canvas-alt p-6">
                <h4 className="font-semibold text-fg mb-3">
                  Cumplimiento Regulatorio
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• Cumplir disposiciones SAT/CRE</li>
                  <li>• Mantener dispositivos certificados</li>
                  <li>• Garantizar conectividad SCADA</li>
                  <li>• Atender requerimientos</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-canvas-alt p-6">
                <h4 className="font-semibold text-fg mb-3">Uso Adecuado</h4>
                <ul className="text-sm space-y-1">
                  <li>• Usar conforme al propósito</li>
                  <li>• No vulnerar seguridad</li>
                  <li>• No compartir credenciales</li>
                  <li>• Reportar incidencias</li>
                </ul>
              </div>
            </div>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold tracking-tight text-fg mb-4">
              6. Obligaciones de UCC-SIGNA
            </h2>
            <div className="space-y-6">
              <div className="border-l-2 border-brand-600 pl-6">
                <h4 className="font-semibold text-fg mb-2">
                  Disponibilidad del Servicio
                </h4>
                <p className="text-fg-muted">
                  Disponibilidad mínima del 99.5% mensual, mantenimientos
                  programados con 48 horas de anticipación, soporte técnico en
                  horario hábil.
                </p>
              </div>
              <div className="border-l-2 border-brand-600 pl-6">
                <h4 className="font-semibold text-fg mb-2">
                  Seguridad y Protección
                </h4>
                <p className="text-fg-muted">
                  Medidas de seguridad técnicas y administrativas, cifrado de
                  datos, copias de seguridad redundantes, cumplimiento ISO
                  27001.
                </p>
              </div>
              <div className="border-l-2 border-brand-600 pl-6">
                <h4 className="font-semibold text-fg mb-2">
                  Cumplimiento Normativo
                </h4>
                <p className="text-fg-muted">
                  Alineación con Anexos 30 y 31 RMF, actualización automática
                  según cambios regulatorios, soporte en auditorías.
                </p>
              </div>
            </div>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold tracking-tight text-fg mb-4">
              7. Limitación de Responsabilidad
            </h2>
            <div className="bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-900/60 p-6">
              <h4 className="font-semibold text-fg mb-3">
                UCC-SIGNA no será responsable por:
              </h4>
              <ul className="space-y-2">
                <li>• Daños por uso indebido de la plataforma</li>
                <li>
                  • Pérdidas derivadas de falla en conectividad del Cliente
                </li>
                <li>• Sanciones por incumplimiento regulatorio del Cliente</li>
                <li>• Caso fortuito o fuerza mayor</li>
              </ul>
              <div className="mt-4 pt-4 border-t border-yellow-300 dark:border-yellow-900/60">
                <p className="text-sm">
                  <strong>Límites:</strong>
                  {
                    " Responsabilidad limitada al monto pagado en últimos 12 meses. No responsabilidad por lucro cesante o daño moral."
                  }
                </p>
              </div>
            </div>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold tracking-tight text-fg mb-4">
              8. Resolución de Controversias
            </h2>
            <div className="rounded-2xl bg-canvas-alt p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-fg mb-2">
                    Negociación Directa
                  </h4>
                  <ul className="text-sm space-y-1">
                    <li>• Resolución amigable por 30 días</li>
                    <li>• Mesa de trabajo autorizada</li>
                    <li>• Mediación como alternativa</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-fg mb-2">Jurisdicción</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Tribunales de Ciudad de México</li>
                    <li>• Legislación mexicana aplicable</li>
                    <li>• Renuncia a fuero</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold tracking-tight text-fg mb-4">
              9. Contacto
            </h2>
            <div className="rounded-2xl bg-ink text-white p-6">
              <p className="mb-4">Para consultas sobre estos términos:</p>
              <div className="space-y-2">
                <p>
                  <strong>Email:</strong>
                  {" proyectos@signatech.com.mx"}
                </p>
                <p>
                  <strong>Teléfono:</strong>
                  {" +52 55 1234 5678"}
                </p>
                <p>
                  <strong>Domicilio:</strong>
                  {" Av. San Antonio 256, Piso 9, Col. Ampliación Nápoles, C.P. 03840, Ciudad de México, México"}
                </p>
              </div>
            </div>
          </section>
          <div className="text-center border-t border-line pt-8">
            <p className="text-lg font-medium text-fg mb-4">
              Al usar la plataforma UCC-SIGNA, el Usuario acepta estos términos
              y condiciones en su totalidad.
            </p>
            <ScrollTopButton className="rounded-full bg-brand-600 hover:bg-brand-700 text-white px-6 py-2.5 font-medium transition-[background-color,transform] duration-150 active:scale-[0.97]">
              Volver al inicio
            </ScrollTopButton>
          </div>
        </div>
      </div>
    </div>
  );
}
