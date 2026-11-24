"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  Heart,
  Lightbulb,
  PiggyBank,
  Users,
} from "lucide-react";

/* TODO: Actualizar estas métricas con los datos reales auditados del Hub San Salvador */
const IMPACT_METRICS = [
  { value: "+45", label: "Voluntarios y Shapers Activos" },
  { value: "18+", label: "Comunidades Impactadas" },
  { value: "120+", label: "Talleres y Jornadas Impartidas" },
  { value: "3,500+", label: "Jóvenes y Familias Beneficiadas" },
];

interface ProjectLine {
  id: string;
  tag: string;
  title: string;
  summary: string;
  icon: typeof PiggyBank;
  colorClass: string;
  beneficiaries: string;
  location: string;
  highlights: string[];
}

/* TODO: Reemplazar o ampliar con los proyectos vigentes del Hub San Salvador */
const PROJECT_LINES: ProjectLine[] = [
  {
    id: "finanzas-en-juego",
    tag: "Línea Estratégica 01",
    title: "Finanzas en Juego · Educación Financiera",
    summary:
      "Talleres prácticos y dinámicos sobre ahorro, presupuesto personal, prevención del sobreendeudamiento y herramientas digitales para jóvenes salvadoreños.",
    icon: PiggyBank,
    colorClass: "bg-sky-50 text-[#0E4D92]",
    beneficiaries: "Jóvenes estudiantes y emprendedores",
    location: "Área Metropolitana de San Salvador",
    highlights: [
      "Módulos interactivos de finanzas personales y emprendimiento.",
      "Entrega de guías impresas y plantillas digitales de presupuesto.",
      "Mentorías con jóvenes profesionales del Hub San Salvador.",
    ],
  },
  {
    id: "resiliencia-en-accion",
    tag: "Línea Estratégica 02",
    title: "Resiliencia en Acción · Desarrollo Comunitario",
    summary:
      "Jornadas territoriales de entrega de víveres, fortalecimiento escolar y bienestar integral junto a comunidades prioritarias de San Salvador.",
    icon: BookOpen,
    colorClass: "bg-amber-50 text-[#F59E0B]",
    beneficiaries: "Familias, niñez y comunidades locales",
    location: "Comunidad El Granjero 2 y zonas de San Salvador",
    highlights: [
      "Entrega directa de víveres, kits educativos y apoyo comunitario.",
      "Eventos con propósito como Yoga con Propósito para recaudar fondos.",
      "Articulación con líderes comunitarios y aliados locales.",
    ],
  },
  {
    id: "salud-mental-liderazgo",
    tag: "Línea Estratégica 03",
    title: "Salud Mental y Liderazgo Juvenil",
    summary:
      "Campañas de concientización, prevención y espacios de formación para que la juventud lidere iniciativas de bienestar e impacto social.",
    icon: Lightbulb,
    colorClass: "bg-blue-50 text-[#1D4ED8]",
    beneficiaries: "Jóvenes agentes de cambio y comunidad digital",
    location: "San Salvador y alcance nacional",
    highlights: [
      "Campañas educativas sobre salud mental y prevención.",
      "Formación de nuevos Shapers y voluntarios en liderazgo social.",
      "Conexión con la red global del Foro Económico Mundial.",
    ],
  },
];

export default function ImpactProjectsSection() {
  const [selectedId, setSelectedId] = useState<string>(PROJECT_LINES[0].id);
  const activeProject =
    PROJECT_LINES.find((p) => p.id === selectedId) ?? PROJECT_LINES[0];

  return (
    <section
      id="impacto"
      aria-labelledby="impact-heading"
      className="bg-slate-50 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Barra de Métricas de Impacto */}
        <div className="rounded-3xl bg-[#0F2C59] p-8 text-white shadow-xl sm:p-10">
          <div className="flex flex-col justify-between gap-4 border-b border-white/15 pb-6 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0EA5E9]">
                Nuestro Impacto Medible
              </span>
              <h2
                id="impact-heading"
                className="mt-1 font-display text-2xl font-extrabold sm:text-3xl"
              >
                Resultados impulsados por juventud voluntaria
              </h2>
            </div>
            <p className="text-xs text-slate-300 sm:text-sm">
              Cifras acumuladas del Hub San Salvador
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {IMPACT_METRICS.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <p className="font-display text-3xl font-extrabold text-[#F59E0B] sm:text-4xl">
                  {metric.value}
                </p>
                <p className="mt-2 text-sm font-medium text-slate-200">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Sección de Proyectos y Líneas de Acción */}
        <div id="proyectos" className="mt-20 scroll-mt-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full bg-sky-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#1E3A8A]">
              Qué Hacemos
            </span>
            <h3 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-[#0F2C59] sm:text-4xl">
              Nuestras líneas de acción y proyectos
            </h3>
            <p className="mt-4 text-base text-slate-600 sm:text-lg">
              Selecciona cualquiera de nuestras áreas para explorar cómo
              trabajamos en territorio junto a las comunidades salvadoreñas.
            </p>
          </div>

          {/* Tarjetas interactivas */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {PROJECT_LINES.map((project) => {
              const Icon = project.icon;
              const isSelected = project.id === selectedId;
              return (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => setSelectedId(project.id)}
                  aria-pressed={isSelected}
                  className={`group flex flex-col justify-between rounded-2xl border p-6 text-left transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0EA5E9] ${
                    isSelected
                      ? "border-[#1E3A8A] bg-white shadow-lg ring-2 ring-[#1E3A8A]/15"
                      : "border-slate-200 bg-white shadow-sm hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span
                        className={`flex h-12 w-12 items-center justify-center rounded-xl ${project.colorClass}`}
                      >
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        {project.tag}
                      </span>
                    </div>

                    <h4 className="mt-5 font-display text-xl font-bold text-[#0F2C59]">
                      {project.title}
                    </h4>
                    <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                      {project.summary}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 text-xs font-bold text-[#1E3A8A]">
                    <span>
                      {isSelected ? "Viendo detalles" : "Explorar línea de acción"}
                    </span>
                    <ArrowUpRight
                      className={`h-4 w-4 transition-transform ${
                        isSelected
                          ? "translate-x-0.5 -translate-y-0.5 text-[#F59E0B]"
                          : "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      }`}
                      aria-hidden="true"
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Panel de Detalle Interactivo del Proyecto Seleccionado */}
          <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="grid items-center gap-8 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-[#0F2C59] px-3 py-1 text-xs font-bold text-white">
                    {activeProject.tag}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                    <Users className="h-4 w-4 text-[#0EA5E9]" aria-hidden="true" />
                    {activeProject.beneficiaries}
                  </span>
                </div>

                <h4 className="mt-3 font-display text-2xl font-bold text-[#0F2C59]">
                  {activeProject.title}
                </h4>
                <p className="mt-2 text-sm text-slate-500">
                  Cobertura: {activeProject.location}
                </p>

                <ul className="mt-5 space-y-3">
                  {activeProject.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700 sm:text-base">
                      <CheckCircle2
                        className="mt-0.5 h-5 w-5 shrink-0 text-[#0EA5E9]"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col justify-between rounded-2xl bg-slate-50 p-6 lg:col-span-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#1E3A8A]">
                    Impulsa este programa
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Tu aporte financia materiales, logística de talleres y
                    acompañamiento directo en comunidades de San Salvador.
                  </p>
                </div>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col">
                  <a
                    href="#donar"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#F59E0B] px-5 py-3 text-sm font-bold text-[#0F2C59] transition-colors hover:bg-[#D97706] hover:text-white"
                  >
                    <Heart className="h-4 w-4 fill-current" aria-hidden="true" />
                    Apoyar este proyecto
                  </a>
                  <a
                    href="#involucrate"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-[#0F2C59] transition-colors hover:bg-slate-100"
                  >
                    Sumarme como voluntario
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
