import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Heart,
  ImageIcon,
  MapPin,
  Users,
} from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import { HUB_PROJECTS } from "@/data/projects";

export function generateStaticParams() {
  return HUB_PROJECTS.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = HUB_PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <PageHeader
          title={project.title}
          subtitle={project.summary}
          breadcrumb={project.badge}
        />

        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/proyectos"
              className="inline-flex items-center gap-2 font-sans text-sm font-bold text-[#1D4ED8] hover:text-[#0B104A]"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Volver a todos los proyectos
            </Link>

            <div className="mt-8 grid gap-10 lg:grid-cols-12">
              {/* Columna Principal */}
              <div className="lg:col-span-8">
                {/* Bloque de color reservado para la fotografía principal del proyecto */}
                <div
                  className={`flex aspect-[16/9] w-full flex-col items-center justify-center rounded-2xl bg-gradient-to-br ${project.gradientClass} p-8 text-center text-white shadow-lg`}
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/25 bg-white/15">
                    <ImageIcon className="h-8 w-8 text-white" aria-hidden="true" />
                  </span>
                  <p className="mt-4 font-display text-lg font-bold">
                    Fotografía del Proyecto: {project.title}
                  </p>
                  <p className="mt-1 font-sans text-xs text-sky-100">
                    Espacio reservado para galería o imagen destacada
                  </p>
                </div>

                <div className="mt-8">
                  <h2 className="font-display text-2xl font-bold text-[#0B104A]">
                    Sobre esta iniciativa
                  </h2>
                  <p className="mt-4 font-sans text-base leading-relaxed text-[#4A5355]">
                    {project.fullDescription}
                  </p>

                  <h3 className="mt-8 font-display text-xl font-bold text-[#0B104A]">
                    Acciones clave en territorio
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {project.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 font-sans text-base text-[#4A5355]"
                      >
                        <CheckCircle2
                          className="mt-0.5 h-5 w-5 shrink-0 text-[#1D4ED8]"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Barra Lateral de Ficha Técnica y Donación */}
              <aside className="lg:col-span-4">
                <div className="rounded-2xl border border-slate-200 bg-[#F7F9FF] p-6 shadow-sm">
                  <h3 className="font-display text-lg font-bold text-[#0B104A]">
                    Ficha del Proyecto
                  </h3>

                  <dl className="mt-5 space-y-4 border-t border-slate-200 pt-5 font-sans text-sm">
                    <div className="flex items-start gap-3">
                      <Users className="mt-0.5 h-4 w-4 shrink-0 text-[#1D4ED8]" aria-hidden="true" />
                      <div>
                        <dt className="font-semibold text-[#0B104A]">
                          Beneficiarios
                        </dt>
                        <dd className="text-[#4A5355]">{project.beneficiaries}</dd>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#1D4ED8]" aria-hidden="true" />
                      <div>
                        <dt className="font-semibold text-[#0B104A]">
                          Ubicación
                        </dt>
                        <dd className="text-[#4A5355]">{project.location}</dd>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-[#1D4ED8]" aria-hidden="true" />
                      <div>
                        <dt className="font-semibold text-[#0B104A]">Estado</dt>
                        <dd className="text-[#4A5355]">{project.year}</dd>
                      </div>
                    </div>
                  </dl>

                  <div className="mt-7 space-y-3">
                    <Link
                      href="/#donar"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-[#1D4ED8] px-5 py-3.5 font-sans text-sm font-bold text-white shadow-sm transition-colors hover:bg-[#0E4D92]"
                    >
                      <Heart className="h-4 w-4 fill-current" aria-hidden="true" />
                      Donar a este proyecto
                    </Link>
                    <Link
                      href="/contacto"
                      className="inline-flex w-full items-center justify-center rounded-sm border border-slate-300 bg-white px-5 py-3.5 font-sans text-sm font-semibold text-[#0B104A] transition-colors hover:bg-slate-50"
                    >
                      Quiero ser voluntario
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
