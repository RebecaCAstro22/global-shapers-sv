"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  Heart,
  ImageIcon,
  Lightbulb,
  MapPin,
  PiggyBank,
  Users,
} from "lucide-react";
import { HUB_PROJECTS, type ProjectCategory } from "@/data/projects";

const CATEGORY_ICONS: Record<ProjectCategory, typeof PiggyBank> = {
  "Educación Financiera": PiggyBank,
  "Desarrollo Comunitario": BookOpen,
  "Bienestar y Liderazgo": Lightbulb,
};

const FEATURED_PROJECTS = HUB_PROJECTS.filter((p) => p.featured);

export default function ImpactProjectsSection() {
  const [selectedSlug, setSelectedSlug] = useState<string>(
    FEATURED_PROJECTS[0].slug
  );
  const activeProject =
    FEATURED_PROJECTS.find((p) => p.slug === selectedSlug) ??
    FEATURED_PROJECTS[0];

  return (
    <section
      id="proyectos"
      aria-labelledby="projects-heading"
      className="bg-[#F8FAFC] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Encabezado estilo Eduleb (.home_course) */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="font-sans text-xs font-bold uppercase tracking-wider text-[#1D4ED8]">
              Qué Hacemos
            </span>
            <h2
              id="projects-heading"
              className="mt-2 font-display text-3xl font-bold text-[#0B104A] sm:text-4xl"
            >
              Nuestros <span className="text-[#1D4ED8]">Proyectos</span> de
              Impacto Social
            </h2>
          </div>

          <Link
            href="/proyectos"
            className="inline-flex shrink-0 items-center gap-2 self-start rounded-sm bg-[#1D4ED8] px-6 py-3.5 font-sans text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#0E4D92] md:self-auto"
          >
            Ver todos los proyectos ({HUB_PROJECTS.length})
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        {/* Grid de 3 tarjetas estilo Eduleb (.single_course) con bloques de color para futuras imágenes */}
        <div className="mt-12 grid gap-7 md:grid-cols-3">
          {FEATURED_PROJECTS.map((project) => {
            const Icon = CATEGORY_ICONS[project.badge];
            const isSelected = project.slug === selectedSlug;
            return (
              <button
                key={project.slug}
                type="button"
                onClick={() => setSelectedSlug(project.slug)}
                aria-pressed={isSelected}
                className={`group flex flex-col overflow-hidden rounded-xl border bg-white text-left transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] ${
                  isSelected
                    ? "border-[#1D4ED8] shadow-xl ring-2 ring-[#1D4ED8]/15"
                    : "border-slate-200 shadow-sm hover:-translate-y-1 hover:shadow-lg"
                }`}
              >
                {/* Bloque de color reservado para la foto del proyecto */}
                <div
                  className={`relative flex h-48 w-full flex-col items-center justify-center bg-gradient-to-br ${project.gradientClass} p-6 text-white`}
                >
                  <span className="absolute left-4 top-4 rounded-sm bg-white/95 px-3 py-1 font-sans text-xs font-bold text-[#0B104A] shadow-sm">
                    {project.badge}
                  </span>
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/25 bg-white/15 backdrop-blur-sm">
                    <ImageIcon className="h-7 w-7 text-white" aria-hidden="true" />
                  </span>
                  <span className="mt-2 font-sans text-[11px] font-medium text-white/85">
                    Espacio para foto del proyecto
                  </span>
                </div>

                {/* Cuerpo de la tarjeta */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <div className="flex items-center gap-2 font-sans text-xs font-semibold text-[#1D4ED8]">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                      <span>{project.beneficiaries}</span>
                    </div>
                    <h3 className="mt-2.5 font-display text-xl font-bold text-[#0B104A] group-hover:text-[#1D4ED8]">
                      {project.title}
                    </h3>
                    <p className="mt-2.5 font-serif text-sm leading-relaxed text-[#4A5355]">
                      {project.summary}
                    </p>
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 font-sans text-xs font-semibold text-slate-500">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-[#1D4ED8]" aria-hidden="true" />
                      San Salvador
                    </span>
                    <span className="font-bold text-[#1D4ED8]">
                      {isSelected ? "Seleccionado ✓" : "Ver detalles →"}
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Panel Detallado del Proyecto Seleccionado */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="grid items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-sm bg-[#0B104A] px-3 py-1 font-sans text-xs font-bold text-white">
                  {activeProject.badge}
                </span>
                <span className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-slate-500">
                  <Users className="h-4 w-4 text-[#1D4ED8]" aria-hidden="true" />
                  {activeProject.beneficiaries}
                </span>
              </div>

              <h3 className="mt-3 font-display text-2xl font-bold text-[#0B104A]">
                {activeProject.title}
              </h3>
              <p className="mt-1 font-sans text-sm text-slate-500">
                Cobertura: {activeProject.location}
              </p>

              <ul className="mt-5 space-y-3">
                {activeProject.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 font-serif text-sm text-[#4A5355] sm:text-base"
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

            <div className="flex flex-col justify-between rounded-xl bg-[#F7F9FF] p-6 lg:col-span-5">
              <div>
                <p className="font-sans text-xs font-bold uppercase tracking-wider text-[#1D4ED8]">
                  Impulsa este programa
                </p>
                <p className="mt-2 font-serif text-sm leading-relaxed text-[#4A5355]">
                  Tu aporte financia materiales educativos, logística de talleres
                  y acompañamiento directo en comunidades de San Salvador.
                </p>
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  href="#donar"
                  className="inline-flex items-center justify-center gap-2 rounded-sm bg-[#1D4ED8] px-5 py-3 font-sans text-sm font-bold text-white transition-colors hover:bg-[#0E4D92]"
                >
                  <Heart className="h-4 w-4 fill-current" aria-hidden="true" />
                  Apoyar este proyecto
                </a>
                <Link
                  href={`/proyectos/${activeProject.slug}`}
                  className="inline-flex items-center justify-center gap-1.5 rounded-sm border border-slate-300 bg-white px-5 py-3 font-sans text-sm font-semibold text-[#0B104A] transition-colors hover:bg-slate-50"
                >
                  Ver ficha completa
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
