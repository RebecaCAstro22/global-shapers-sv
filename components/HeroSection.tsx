import { ArrowRight, Heart, MapPin, ShieldCheck, Sparkles, Users } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-gradient-to-br from-[#0F2C59] via-[#0E4D92] to-[#1D4ED8] pt-28 pb-20 text-white sm:pt-36 sm:pb-28"
    >
      {/* Elementos decorativos sutiles de fondo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-[#0EA5E9]/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#F59E0B]/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        {/* Columna Izquierda: Mensaje Principal y CTAs */}
        <div className="lg:col-span-7">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-sky-200 backdrop-blur-sm sm:text-sm">
            <Sparkles className="h-4 w-4 text-[#F59E0B]" aria-hidden="true" />
            <span>Iniciativa del Foro Económico Mundial · El Salvador</span>
          </div>

          <h1
            id="hero-heading"
            className="font-display text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Liderazgo juvenil que{" "}
            <span className="text-[#F59E0B]">transforma comunidades</span> en El
            Salvador
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-100 sm:text-xl">
            Jóvenes voluntarios de{" "}
            <strong className="font-semibold text-white">
              Global Shapers San Salvador
            </strong>{" "}
            creando proyectos de impacto social en educación financiera,
            resiliencia comunitaria y bienestar juvenil desde 2012.
          </p>

          {/* Botones de Acción (CTAs) */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#donar"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#F59E0B] px-7 py-4 text-base font-bold text-[#0F2C59] shadow-lg shadow-amber-500/20 transition-all hover:-translate-y-0.5 hover:bg-[#fbbf24] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F2C59]"
            >
              <Heart className="h-5 w-5 fill-current" aria-hidden="true" />
              Hacer una donación
            </a>

            <a
              href="#proyectos"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0EA5E9]"
            >
              Conocer nuestros proyectos
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>

          {/* Indicadores rápidos de confianza institucional */}
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/15 pt-6 text-sm text-slate-200">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck
                className="h-4 w-4 text-[#0EA5E9]"
                aria-hidden="true"
              />
              Organización sin fines de lucro
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#F59E0B]" aria-hidden="true" />
              San Salvador, El Salvador
            </span>
            <span className="inline-flex items-center gap-2">
              <Users className="h-4 w-4 text-[#0EA5E9]" aria-hidden="true" />
              100% impulsado por voluntarios
            </span>
          </div>
        </div>

        {/* Columna Derecha: Tarjeta Visual Institucional */}
        {/* TODO: Reemplazar el bloque gráfico con una fotografía real del Hub San Salvador usando next/image */}
        <div className="lg:col-span-5">
          <div className="relative rounded-3xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-md sm:p-8">
            <div className="mb-6 flex items-center justify-between">
              <span className="rounded-lg bg-[#0EA5E9]/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-sky-200">
                Impacto Local
              </span>
              <span className="text-xs font-medium text-slate-300">
                globalshaperssv.org
              </span>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl bg-white/95 p-5 text-[#0F2C59] shadow-sm">
                <p className="text-xs font-bold uppercase tracking-wider text-[#1E3A8A]">
                  Enfoque Prioritario
                </p>
                <p className="mt-1 font-display text-lg font-bold">
                  Educación Financiera &amp; Bienestar Juvenil
                </p>
                <p className="mt-1.5 text-sm text-slate-600">
                  Herramientas prácticas para que jóvenes y familias salvadoreñas
                  construyan autonomía económica y resiliencia comunitaria.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/15 bg-[#0F2C59]/70 p-4">
                  <p className="font-display text-2xl font-extrabold text-[#F59E0B]">
                    +45
                  </p>
                  <p className="mt-1 text-xs font-medium text-slate-200">
                    Jóvenes Shapers y voluntarios activos
                  </p>
                </div>
                <div className="rounded-2xl border border-white/15 bg-[#0F2C59]/70 p-4">
                  <p className="font-display text-2xl font-extrabold text-[#0EA5E9]">
                    18+
                  </p>
                  <p className="mt-1 text-xs font-medium text-slate-200">
                    Comunidades y centros educativos apoyados
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-5 text-center text-xs text-slate-300">
              Parte de una red global en más de 500 ciudades del mundo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
