import type { Metadata } from "next";
import { ArrowLeft, Eye, Lock, Shield, UserCheck } from "lucide-react";
import { BackButton, ScrollTopButton } from "@/components/LegalButtons";

export const metadata: Metadata = {
  title: "Política de Privacidad | UCC-Signa",
};

export default function PrivacidadPage() {
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
              <Shield size={24} />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em]">
                Política de Privacidad
              </h1>
              <p className="text-white/70 mt-2">
                Protección de Datos Personales UCC-SIGNA
              </p>
            </div>
          </div>
          <div className="w-16 h-0.5 rounded-full bg-brand-500" />
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-lg max-w-none">
          <div className="bg-tint border-l-4 border-brand-600 p-6 mb-8">
            <p className="text-sm text-fg-muted mb-0">
              <strong>Última actualización:</strong>
              {" Septiembre 2025"}
            </p>
          </div>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold tracking-tight text-fg mb-4">
              1. Información General
            </h2>
            <p className="mb-4">
              Signa Technological, S.A.S. de C.V. (&quot;nosotros&quot;,
              &quot;nuestro&quot; o &quot;la empresa&quot;) es responsable del
              tratamiento de sus datos personales en relación con el uso de la
              plataforma UCC-SIGNA, solución SaaS para el cumplimiento de
              obligaciones fiscales en control volumétrico de hidrocarburos y
              petrolíferos.
            </p>
            <div className="rounded-2xl bg-canvas-alt p-6">
              <h4 className="font-semibold text-fg mb-3">Datos de contacto:</h4>
              <ul className="space-y-1">
                <li>
                  <strong>Razón social:</strong>
                  {" Signa Technological, S.A.S. de C.V."}
                </li>
                <li>
                  <strong>Domicilio:</strong>
                  {" Heriberto Frías 1145, Del Valle Centro, CDMX, 03100"}
                </li>
                <li>
                  <strong>Correo electrónico:</strong>
                  {" contacto@example.com"}
                </li>
                <li>
                  <strong>Teléfono:</strong>
                  {" +52 (555) 123-4567"}
                </li>
              </ul>
            </div>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold tracking-tight text-fg mb-4">
              2. Datos Personales que Recopilamos
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-line p-6">
                <div className="flex items-center gap-3 mb-4">
                  <UserCheck className="text-accent" size={24} />
                  <h4 className="font-semibold text-fg">
                    Datos de Identificación
                  </h4>
                </div>
                <ul className="space-y-2 text-sm">
                  <li>• Nombre completo</li>
                  <li>• RFC y CURP</li>
                  <li>• Correo electrónico corporativo</li>
                  <li>• Número telefónico</li>
                  <li>• Cargo/puesto en la empresa</li>
                </ul>
              </div>
              <div className="border border-line p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Lock className="text-accent" size={24} />
                  <h4 className="font-semibold text-fg">Datos de la Empresa</h4>
                </div>
                <ul className="space-y-2 text-sm">
                  <li>• Razón social</li>
                  <li>• RFC de la empresa</li>
                  <li>• Domicilio fiscal</li>
                  <li>• Giro comercial</li>
                  <li>• Número de permisos CRE</li>
                </ul>
              </div>
              <div className="border border-line p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="text-accent" size={24} />
                  <h4 className="font-semibold text-fg">Datos Operativos</h4>
                </div>
                <ul className="space-y-2 text-sm">
                  <li>• Registros volumétricos</li>
                  <li>• Datos de dispositivos certificados</li>
                  <li>• Información de inventarios</li>
                  <li>• Movimientos de hidrocarburos</li>
                  <li>• Bitácoras de operación</li>
                </ul>
              </div>
              <div className="border border-line p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="text-accent" size={24} />
                  <h4 className="font-semibold text-fg">Datos Técnicos</h4>
                </div>
                <ul className="space-y-2 text-sm">
                  <li>• Dirección IP</li>
                  <li>• Información del navegador</li>
                  <li>• Datos de conexión</li>
                  <li>• Logs de acceso y actividad</li>
                </ul>
              </div>
            </div>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold tracking-tight text-fg mb-4">
              3. Finalidades del Tratamiento
            </h2>
            <div className="space-y-6">
              <div className="rounded-2xl bg-tint p-6">
                <h4 className="font-semibold text-fg mb-3">
                  Finalidades Primarias
                </h4>
                <ul className="space-y-2">
                  <li>• Prestación de servicios de la plataforma UCC-SIGNA</li>
                  <li>
                    • Cumplimiento de obligaciones fiscales (Anexos 30 y 31 RMF)
                  </li>
                  <li>• Generación de reportes automáticos para el SAT</li>
                  <li>
                    • Almacenamiento seguro de registros por período legal
                    mínimo
                  </li>
                  <li>• Facturación y cobranza de servicios</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-canvas-alt p-6">
                <h4 className="font-semibold text-fg mb-3">
                  Finalidades Secundarias
                </h4>
                <ul className="space-y-2">
                  <li>• Mejora continua de servicios</li>
                  <li>• Desarrollo de nuevas funcionalidades</li>
                  <li>• Comunicaciones comerciales y promocionales</li>
                  <li>• Análisis estadísticos (datos anonimizados)</li>
                  <li>• Soporte técnico especializado</li>
                </ul>
              </div>
            </div>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold tracking-tight text-fg mb-4">
              4. Medidas de Seguridad
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 border border-line">
                <div className="w-16 h-16 rounded-2xl bg-tint text-accent ring-1 ring-tint-line flex items-center justify-center mx-auto mb-4">
                  <Lock size={32} />
                </div>
                <h4 className="font-semibold text-fg mb-3">
                  Seguridad Técnica
                </h4>
                <ul className="text-sm space-y-2">
                  <li>Cifrado AES-256</li>
                  <li>Autenticación multifactor</li>
                  <li>Firewalls avanzados</li>
                  <li>Copias redundantes</li>
                </ul>
              </div>
              <div className="text-center p-6 border border-line">
                <div className="w-16 h-16 rounded-2xl bg-tint text-accent ring-1 ring-tint-line flex items-center justify-center mx-auto mb-4">
                  <UserCheck size={32} />
                </div>
                <h4 className="font-semibold text-fg mb-3">
                  Seguridad Administrativa
                </h4>
                <ul className="text-sm space-y-2">
                  <li>Control de acceso por roles</li>
                  <li>Auditorías regulares</li>
                  <li>Capacitación continua</li>
                  <li>Gestión de incidentes</li>
                </ul>
              </div>
              <div className="text-center p-6 border border-line">
                <div className="w-16 h-16 rounded-2xl bg-tint text-accent ring-1 ring-tint-line flex items-center justify-center mx-auto mb-4">
                  <Shield size={32} />
                </div>
                <h4 className="font-semibold text-fg mb-3">Seguridad Física</h4>
                <ul className="text-sm space-y-2">
                  <li>Centros ISO 27001</li>
                  <li>Acceso biométrico</li>
                  <li>Videovigilancia 24/7</li>
                  <li>Alimentación redundante</li>
                </ul>
              </div>
            </div>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold tracking-tight text-fg mb-4">
              5. Retención de Datos
            </h2>
            <div className="bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-900/60 p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-fg mb-3">
                    Períodos de Retención
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <strong>Datos operativos:</strong>
                      {" Mínimo 5 años (Anexo 30)"}
                    </li>
                    <li>
                      <strong>Datos contractuales:</strong>
                      {" Vigencia + 5 años"}
                    </li>
                    <li>
                      <strong>Datos fiscales:</strong>
                      {" Según disposiciones SAT"}
                    </li>
                    <li>
                      <strong>Datos de marketing:</strong>
                      {" Hasta revocación"}
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-fg mb-3">Base Legal</h4>
                  <p className="text-sm">
                    Los períodos de retención están fundamentados en las
                    obligaciones fiscales establecidas por el SAT en los Anexos
                    30 y 31 de la Resolución Miscelánea Fiscal.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold tracking-tight text-fg mb-4">
              6. Derechos del Titular (ARCO)
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="border-l-2 border-brand-600 pl-4">
                  <h4 className="font-semibold text-fg">Acceso</h4>
                  <p className="text-sm text-fg-muted">
                    Conocer qué datos personales tenemos sobre usted
                  </p>
                </div>
                <div className="border-l-2 border-brand-600 pl-4">
                  <h4 className="font-semibold text-fg">Rectificación</h4>
                  <p className="text-sm text-fg-muted">
                    Corregir datos inexactos o incompletos
                  </p>
                </div>
                <div className="border-l-2 border-brand-600 pl-4">
                  <h4 className="font-semibold text-fg">Cancelación</h4>
                  <p className="text-sm text-fg-muted">
                    Solicitar eliminación (sujeto a obligaciones legales)
                  </p>
                </div>
                <div className="border-l-2 border-brand-600 pl-4">
                  <h4 className="font-semibold text-fg">Oposición</h4>
                  <p className="text-sm text-fg-muted">
                    Objetar ciertos tratamientos de datos
                  </p>
                </div>
              </div>
              <div className="rounded-2xl bg-canvas-alt p-6">
                <h4 className="font-semibold text-fg mb-3">
                  Ejercicio de Derechos
                </h4>
                <div className="space-y-3 text-sm">
                  <p>
                    <strong>Correo:</strong>
                    {" contacto@example.com"}
                  </p>
                  <p>
                    <strong>Requisitos:</strong>
                  </p>
                  <ul className="space-y-1 ml-4">
                    <li>• Identificación oficial</li>
                    <li>• Solicitud específica y clara</li>
                    <li>• Datos de contacto actualizados</li>
                  </ul>
                  <p>
                    <strong>Tiempo de respuesta:</strong>
                    {" Máximo 20 días hábiles"}
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold tracking-tight text-fg mb-4">
              7. Compartición de Datos
            </h2>
            <div className="space-y-6">
              <div className="bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/60 p-6">
                <h4 className="font-semibold text-fg mb-3">
                  Autoridades Fiscales
                </h4>
                <ul className="space-y-2">
                  <li>• SAT (Servicio de Administración Tributaria)</li>
                  <li>• CRE (Comisión Reguladora de Energía)</li>
                  <li>• Verificadores externos acreditados (Anexo 31)</li>
                </ul>
              </div>
              <div className="bg-tint border border-tint-line p-6">
                <h4 className="font-semibold text-fg mb-3">
                  Terceros Autorizados
                </h4>
                <ul className="space-y-2">
                  <li>
                    • Proveedores de servicios en la nube (con contratos de
                    confidencialidad)
                  </li>
                  <li>• Auditores externos especializados</li>
                  <li>
                    • Socios tecnológicos para funcionalidades específicas
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl bg-canvas-alt ring-1 ring-line p-6">
                <h4 className="font-semibold text-fg mb-3">
                  Casos Excepcionales
                </h4>
                <ul className="space-y-2">
                  <li>• Cumplimiento de órdenes judiciales</li>
                  <li>• Protección de derechos de la empresa</li>
                  <li>• Prevención de fraudes o actividades ilícitas</li>
                </ul>
              </div>
            </div>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold tracking-tight text-fg mb-4">
              8. Transferencias Internacionales
            </h2>
            <div className="bg-tint border border-tint-line p-6">
              <p className="mb-4">
                En caso de transferencias internacionales, estas se realizan
                únicamente:
              </p>
              <ul className="space-y-2">
                <li>• A países con nivel adecuado de protección de datos</li>
                <li>• Mediante cláusulas contractuales estándar aprobadas</li>
                <li>
                  • Con su consentimiento expreso cuando sea requerido por ley
                </li>
                <li>
                  • Bajo estrictas medidas de seguridad y confidencialidad
                </li>
              </ul>
            </div>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold tracking-tight text-fg mb-4">
              9. Cookies y Tecnologías Similares
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-fg mb-3">
                  Utilizamos cookies para:
                </h4>
                <ul className="space-y-2">
                  <li>• Funcionalidad esencial de la plataforma</li>
                  <li>• Mejora de experiencia de usuario</li>
                  <li>• Análisis de uso (Google Analytics)</li>
                  <li>• Seguridad y autenticación</li>
                </ul>
              </div>
              <div className="rounded-xl bg-canvas-alt p-4">
                <h4 className="font-semibold text-fg mb-3">
                  Gestión de Cookies
                </h4>
                <p className="text-sm text-fg-muted">
                  Puede gestionar sus preferencias de cookies en la
                  configuración de su navegador. Tenga en cuenta que
                  deshabilitar ciertas cookies puede afectar la funcionalidad de
                  la plataforma.
                </p>
              </div>
            </div>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold tracking-tight text-fg mb-4">
              10. Cambios a esta Política
            </h2>
            <div className="rounded-2xl bg-tint ring-1 ring-tint-line p-6">
              <div className="space-y-3">
                <p>
                  • Notificaremos cambios sustanciales por correo electrónico
                </p>
                <p>• La fecha de última actualización siempre será visible</p>
                <p>• Versiones anteriores disponibles bajo solicitud</p>
                <p>• Continuación del uso implica aceptación de cambios</p>
              </div>
            </div>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold tracking-tight text-fg mb-4">
              11. Marco Legal
            </h2>
            <div className="bg-fill p-6">
              <p className="text-center text-sm">
                <strong>Esta política cumple con:</strong>
                <br />
                Ley Federal de Protección de Datos Personales en Posesión de los
                Particulares y su Reglamento
              </p>
            </div>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold tracking-tight text-fg mb-4">
              12. Contacto para Asuntos de Privacidad
            </h2>
            <div className="rounded-2xl bg-ink text-white p-6">
              <h4 className="font-semibold mb-4">
                Para consultas específicas sobre privacidad y protección de
                datos:
              </h4>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div>
                  <p>
                    <strong>Email Especializado:</strong>
                  </p>
                  <p>privacidad@example.com</p>
                </div>
                <div>
                  <p>
                    <strong>Teléfono:</strong>
                  </p>
                  <p>+52 (555) 123-4567</p>
                </div>
                <div>
                  <p>
                    <strong>Domicilio:</strong>
                  </p>
                  <p>
                    Heriberto Frías 1145
                    <br />
                    Del Valle Centro, CDMX, 03100
                  </p>
                </div>
              </div>
            </div>
          </section>
          <div className="text-center border-t border-line pt-8">
            <ScrollTopButton className="rounded-full bg-brand-600 hover:bg-brand-700 text-white px-6 py-2.5 font-medium transition-[background-color,transform] duration-150 active:scale-[0.97]">
              Volver al inicio
            </ScrollTopButton>
          </div>
        </div>
      </div>
    </div>
  );
}
