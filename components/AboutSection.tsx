import { ArrowUpRight, Check, ImageIcon, ShieldCheck } from "lucide-react";

const ACTION_PILLARS = [
  {
    number: "01",
    title: "Educación Financiera",
    description:
      "Capacitamos a jóvenes en ahorro, presupuesto y herramientas económicas prácticas.",
    badgeColor: "bg-blue-50 text-[#1D4ED8]",
  },
  {
    number: "02",
    title: "Bienestar Comunitario",
    description:
      "Acompañamos a familias y niñez salvadoreña con jornadas territoriales directas.",
    badgeColor: "bg-sky-50 text-[#0EA5E9]",
  },
  {
    number: "03",
    title: "Liderazgo Juvenil",
    description:
      "Formamos agentes de cambio conectados con la red global del Foro Económico Mundial.",
    badgeColor: "bg-indigo-50 text-[#525FE1]",
  },
  {
    number: "04",
    title: "Transparencia ONG",
    description:
      "Gestión sin fines de lucro en San Salvador con rendición de cuentas abierta.",
    badgeColor: "bg-cyan-50 text-[#0E4D92]",
  },
];

export default function AboutSection() {
  return (
    <>
      {/* SECCIÓN 01-04 ESTILO EDULEB (.top_cat__area) */}
      <section className="bg-gradient-to-b from-white to-[#F7F9FF] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-[#0B104A] sm:text-4xl">
              Impulsando el cambio social en El Salvador
            </h2>
            <p className="mt-4 font-serif text-base leading-relaxed text-[#4A5355] sm:text-lg">
              Cuatro pilares que guían cada proyecto comunitario diseñado por
              nuestra red de jóvenes voluntarios en San Salvador.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ACTION_PILLARS.map((pillar) => (
              <div
                key={pillar.number}
                className="rounded-xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <span
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-full font-display text-lg font-bold ${pillar.badgeColor}`}
                >
                  {pillar.number}
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-[#0B104A]">
                  {pillar.title}
                </h3>
                <p className="mt-3 font-serif text-sm leading-relaxed text-[#4A5355]">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUIÉNES SOMOS ESTILO EDULEB (.ab_area: Imagen izquierda / Contenido derecha) */}
      <section
        id="quienes-somos"
        aria-labelledby="about-heading"
        className="bg-white py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* Columna Izquierda: Fondo de color reservado para foto institucional del Hub */}
            {/* TODO: Reemplazar con fotografía del equipo/curaduría de Global Shapers San Salvador */}
            <div className="lg:col-span-6">
              <div className="relative mx-auto max-w-lg lg:mx-0">
                <div className="flex aspect-[4/3.6] w-full flex-col items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-tr from-[#0B104A] via-[#0E4D92] to-[#38BDF8] p-8 text-center text-white shadow-xl">
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/25 bg-white/10">
                    <ImageIcon className="h-8 w-8 text-sky-100" aria-hidden="true" />
                  </span>
                  <p className="mt-4 font-display text-xl font-bold">
                    Equipo Hub San Salvador
                  </p>
                  <p className="mt-2 max-w-xs font-serif text-sm text-sky-100">
                    Espacio reservado para fotografía de los Shapers y
                    voluntarios en acción.
                  </p>
                </div>

                {/* Sello flotante de estatus sin fines de lucro */}
                <div className="mt-4 flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:mt-6">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0B104A] text-white">
                    <ShieldCheck className="h-5 w-5 text-[#38BDF8]" aria-hidden="true" />
                  </span>
                  <p className="font-sans text-xs leading-relaxed text-slate-600 sm:text-sm">
                    <strong className="text-[#0B104A]">
                      Organización juvenil sin fines de lucro
                    </strong>{" "}
                    operando en San Salvador, El Salvador, bajo respaldo del
                    Foro Económico Mundial.
                  </p>
                </div>
              </div>
            </div>

            {/* Columna Derecha: Misión, Visión, Valores */}
            <div className="lg:col-span-6">
              <span className="font-sans text-xs font-bold uppercase tracking-wider text-[#1D4ED8]">
                Quiénes Somos · Hub San Salvador
              </span>
              <h2
                id="about-heading"
                className="mt-3 font-display text-3xl font-bold leading-tight text-[#0B104A] sm:text-4xl"
              >
                Identidad local con respaldo global desde 2012
              </h2>
              <p className="mt-5 font-serif text-base leading-relaxed text-[#4A5355] sm:text-lg">
                <strong>Global Shapers Community – Hub San Salvador</strong> es
                una iniciativa nacida en el marco del{" "}
                <strong>Foro Económico Mundial (WEF)</strong>. Reunimos a
                jóvenes líderes voluntarios comprometidos con construir un El
                Salvador más próspero, inclusivo y resiliente.
              </p>

              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#1D4ED8]">
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <p className="font-serif text-sm leading-relaxed text-[#4A5355] sm:text-base">
                    <strong className="font-display text-[#0B104A]">
                      Misión:
                    </strong>{" "}
                    Empoderar a jóvenes salvadoreños para diseñar y ejecutar
                    proyectos medibles en educación financiera, bienestar y
                    desarrollo comunitario.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#1D4ED8]">
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <p className="font-serif text-sm leading-relaxed text-[#4A5355] sm:text-base">
                    <strong className="font-display text-[#0B104A]">
                      Visión:
                    </strong>{" "}
                    Un El Salvador donde las juventudes lideran soluciones
                    sostenibles que fortalecen cada comunidad.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#1D4ED8]">
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <p className="font-serif text-sm leading-relaxed text-[#4A5355] sm:text-base">
                    <strong className="font-display text-[#0B104A]">
                      Valores:
                    </strong>{" "}
                    Transparencia, servicio comunitario, integridad en la
                    rendición de cuentas y colaboración multisectorial.
                  </p>
                </li>
              </ul>

              <div className="mt-8">
                <a
                  href="#proyectos"
                  className="inline-flex items-center gap-2 rounded-sm bg-[#1D4ED8] px-7 py-3.5 font-sans text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#0E4D92]"
                >
                  Explorar nuestros proyectos
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
