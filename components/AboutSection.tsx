import { Award, Building2, Compass, Eye, HeartHandshake, ShieldCheck } from "lucide-react";

const PILLARS = [
  {
    icon: Compass,
    title: "Nuestra Misión",
    description:
      "Empoderar a jóvenes salvadoreños para diseñar y ejecutar proyectos de alto impacto en educación financiera, inclusión social y desarrollo comunitario.",
  },
  {
    icon: Eye,
    title: "Nuestra Visión",
    description:
      "Un El Salvador donde las juventudes lideran soluciones innovadoras, equitativas y sostenibles que fortalecen el tejido social de cada comunidad.",
  },
  {
    icon: Award,
    title: "Nuestros Valores",
    description:
      "Transparencia, servicio comunitario, colaboración multisectorial, integridad en la rendición de cuentas e innovación con propósito social.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="quienes-somos"
      aria-labelledby="about-heading"
      className="bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          {/* Descripción institucional y respaldo ONG */}
          <div className="lg:col-span-5">
            <span className="inline-block rounded-full bg-sky-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#1E3A8A]">
              Quiénes Somos
            </span>
            <h2
              id="about-heading"
              className="mt-4 font-display text-3xl font-extrabold tracking-tight text-[#0F2C59] sm:text-4xl"
            >
              Identidad local con respaldo global
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              <strong>Global Shapers Community – Hub San Salvador</strong> es
              una iniciativa nacida en el marco del{" "}
              <strong>Foro Económico Mundial (WEF)</strong>. Desde{" "}
              <strong>2012</strong>, reunimos a jóvenes líderes voluntarios
              comprometidos con el progreso social de El Salvador.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Operamos formalmente como una{" "}
              <strong>
                organización juvenil sin fines de lucro en San Salvador, El
                Salvador
              </strong>
              , articulando esfuerzos entre juventud, comunidades locales,
              centros educativos y aliados estratégicos para generar cambios
              medibles y duraderos.
            </p>

            {/* Sello de Estatus Sin Fines de Lucro */}
            <div className="mt-7 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="flex items-start gap-3.5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0F2C59] text-white">
                  <Building2 className="h-5 w-5 text-[#F59E0B]" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-[#0F2C59]">
                    Estatus Institucional y Transparencia
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    Operación sin fines de lucro en San Salvador, El Salvador.
                    Cada proyecto y donación se gestiona bajo principios de
                    rendición de cuentas abierta.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Misión, Visión y Valores */}
          <div className="grid gap-6 sm:grid-cols-1 lg:col-span-7">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="group flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-[#0EA5E9]/50 hover:shadow-md sm:flex-row sm:items-start"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0F2C59]/5 text-[#1E3A8A] transition-colors group-hover:bg-[#0F2C59] group-hover:text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-[#0F2C59]">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}

            <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-[#0F2C59] px-6 py-5 text-white">
              <div className="flex items-center gap-3">
                <HeartHandshake
                  className="h-6 w-6 text-[#F59E0B]"
                  aria-hidden="true"
                />
                <span className="text-sm font-medium sm:text-base">
                  ¿Quieres conocer nuestros reportes de impacto o estatutos?
                </span>
              </div>
              <a
                href="#involucrate"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0EA5E9] hover:text-sky-300"
              >
                <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                Contáctanos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
