import { ImageIcon } from "lucide-react";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";

/* TODO: Reemplazar con los nombres, cargos y fotografías reales de la Curaduría y miembros del Hub */
const TEAM_MEMBERS = [
  {
    name: "María Fernanda Méndez Escobar",
    role: "Curadora (2026–2027)",
    gradient: "from-[#0B104A] to-[#1D4ED8]",
  },
  {
    name: "Fabiola Torres Domínguez",
    role: "Vice-Curadora (2026–2027)",
    gradient: "from-[#0E4D92] to-[#0EA5E9]",
  },
  {
    name: "Equipo de Proyectos",
    role: "Liderazgo Territorial y Voluntariado",
    gradient: "from-[#1E3A8A] to-[#525FE1]",
  },
  {
    name: "Alianzas e Impacto",
    role: "Relaciones Institucionales y RSE",
    gradient: "from-[#0F2C59] to-[#38BDF8]",
  },
];

export default function NosotrosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <PageHeader
          title="Sobre Global Shapers San Salvador"
          subtitle="Desde 2012, jóvenes líderes voluntarios impulsando soluciones locales en educación financiera, bienestar y desarrollo comunitario en El Salvador."
          breadcrumb="Quiénes Somos"
        />

        <AboutSection />

        {/* Sección de Equipo / Curaduría estilo Eduleb (.team_area) */}
        <section className="bg-[#F8FAFC] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <span className="font-sans text-xs font-bold uppercase tracking-wider text-[#1D4ED8]">
                Conoce al Equipo
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold text-[#0B104A] sm:text-4xl">
                Curaduría y Liderazgo del Hub
              </h2>
              <p className="mt-4 font-sans text-base text-[#4A5355]">
                Jóvenes profesionales y agentes de cambio comprometidos de forma
                voluntaria con el desarrollo de San Salvador.
              </p>
            </div>

            <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
              {TEAM_MEMBERS.map((member) => (
                <div
                  key={member.name}
                  className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  <div
                    className={`flex h-56 flex-col items-center justify-center bg-gradient-to-br ${member.gradient} p-6 text-center text-white`}
                  >
                    <ImageIcon className="h-8 w-8 text-sky-200" aria-hidden="true" />
                    <span className="mt-2 font-sans text-xs text-sky-100">
                      Foto de perfil
                    </span>
                  </div>
                  <div className="p-5 text-center">
                    <h3 className="font-display text-lg font-bold text-[#0B104A]">
                      {member.name}
                    </h3>
                    <p className="mt-1 font-sans text-xs font-semibold text-[#1D4ED8]">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
