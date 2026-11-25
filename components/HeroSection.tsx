import {
  ArrowRight,
  Award,
  BookOpen,
  Heart,
  ImageIcon,
  MapPin,
  ShieldCheck,
  Users,
} from "lucide-react";

/* TODO: Actualizar estas métricas con los datos reales auditados del Hub San Salvador */
const COUNTER_METRICS = [
  {
    icon: Users,
    value: "+45",
    label: "Voluntarios y Shapers Activos",
    badgeBg: "bg-blue-50 text-[#1D4ED8]",
  },
  {
    icon: MapPin,
    value: "18+",
    label: "Comunidades Impactadas",
    badgeBg: "bg-sky-50 text-[#0EA5E9]",
  },
  {
    icon: BookOpen,
    value: "120+",
    label: "Talleres y Jornadas Impartidas",
    badgeBg: "bg-indigo-50 text-[#525FE1]",
  },
  {
    icon: Award,
    value: "3,500+",
    label: "Jóvenes y Familias Beneficiadas",
    badgeBg: "bg-cyan-50 text-[#0E4D92]",
  },
];

export default function HeroSection() {
  return (
    <>
      {/* HERO ESTILO EDULEB: Fondo pastel suave + Jost Display + Zilla Slab + DM Sans */}
      <section
        aria-labelledby="hero-heading"
        className="relative overflow-hidden bg-gradient-to-br from-[#FDF6EC] via-[#F7F9FF] to-[#EBF3FF] pt-28 pb-20 sm:pt-36 sm:pb-24"
      >
        {/* Acentos sutiles de fondo */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-[#1D4ED8]/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#0EA5E9]/10 blur-3xl"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          {/* Columna Izquierda: Título Jost + Subtítulo Zilla Slab + CTAs DM Sans */}
          <div className="lg:col-span-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#1D4ED8]/20 bg-white/80 px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-wider text-[#0E4D92] shadow-sm">
              <ShieldCheck className="h-4 w-4 text-[#1D4ED8]" aria-hidden="true" />
              Iniciativa del Foro Económico Mundial · El Salvador
            </span>

            <h1
              id="hero-heading"
              className="mt-6 font-display text-4xl font-bold leading-[1.12] tracking-tight text-[#0B104A] sm:text-5xl lg:text-[58px]"
            >
              <span className="text-[#1D4ED8]">Liderazgo Juvenil</span> que
              Transforma Comunidades en El Salvador
            </h1>

            <p className="mt-6 max-w-xl font-serif text-lg leading-relaxed text-[#4A5355] sm:text-xl">
              Somos jóvenes voluntarios de{" "}
              <strong className="font-semibold text-[#0B104A]">
                Global Shapers San Salvador
              </strong>{" "}
              impulsando soluciones locales en educación financiera, bienestar
              comunitario y desarrollo social desde 2012.
            </p>

            {/* Botones de Acción (CTAs) */}
            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <a
                href="#donar"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-[#1D4ED8] px-7 py-4 font-sans text-base font-semibold text-white shadow-md shadow-blue-700/15 transition-all hover:-translate-y-0.5 hover:bg-[#0E4D92] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B104A] focus-visible:ring-offset-2"
              >
                <Heart className="h-4 w-4 fill-current" aria-hidden="true" />
                Hacer una donación
              </a>

              <a
                href="#proyectos"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-[#0B104A]/20 bg-white px-7 py-4 font-sans text-base font-semibold text-[#0B104A] shadow-sm transition-all hover:border-[#1D4ED8] hover:text-[#1D4ED8] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
              >
                Conocer nuestros proyectos
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Columna Derecha: Espacio reservado para fotografía real del Hub (estilo home-img2 + home_ps flotante) */}
          {/* TODO: Reemplazar este contenedor con la fotografía principal del equipo/voluntarios usando next/image */}
          <div className="relative lg:col-span-6">
            <div className="relative mx-auto max-w-lg lg:ml-auto">
              <div className="relative flex aspect-[4/4.3] w-full flex-col items-center justify-center overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0F2C59] via-[#0E4D92] to-[#1D4ED8] p-8 text-center text-white shadow-2xl">
                {/* Círculos decorativos de fondo */}
                <div
                  aria-hidden="true"
                  className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-white/10"
                />
                <div
                  aria-hidden="true"
                  className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-[#0EA5E9]/20"
                />

                <div className="relative z-10 flex flex-col items-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/25 bg-white/10 backdrop-blur-sm">
                    <ImageIcon className="h-8 w-8 text-sky-200" aria-hidden="true" />
                  </span>
                  <p className="mt-5 font-display text-xl font-bold text-white">
                    Fotografía Principal del Hub
                  </p>
                  <p className="mt-2 max-w-xs font-serif text-sm text-sky-100">
                    Espacio reservado para imagen de jóvenes voluntarios en
                    comunidad (San Salvador, El Salvador).
                  </p>
                </div>
              </div>

              {/* Tarjeta flotante estilo .home_ps de Eduleb */}
              <div className="absolute -bottom-6 left-4 rounded-2xl border border-slate-100 bg-white px-6 py-4 shadow-xl sm:-left-6">
                <div className="flex items-center gap-3.5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#1D4ED8]">
                    <Users className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-display text-2xl font-bold text-[#0B104A]">
                      +12 años
                    </p>
                    <p className="font-sans text-xs font-medium text-slate-500">
                      Impactando desde 2012
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BARRA DE CONTADORES ESTILO EDULEB (.counter_feature) */}
      <section
        id="impacto"
        aria-label="Métricas de impacto"
        className="relative z-10 -mt-10 pb-12"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {COUNTER_METRICS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-4 rounded-xl border border-slate-200/80 bg-white p-6 shadow-lg shadow-slate-200/40 transition-transform hover:-translate-y-0.5"
                >
                  <span
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${item.badgeBg}`}
                  >
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-display text-3xl font-bold text-[#0B104A]">
                      {item.value}
                    </p>
                    <p className="font-sans text-sm font-medium text-slate-600">
                      {item.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
