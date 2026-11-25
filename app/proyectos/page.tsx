"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Heart, ImageIcon, MapPin, Search, Users } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import {
  HUB_PROJECTS,
  PROJECT_CATEGORIES,
  type ProjectCategory,
} from "@/data/projects";

export default function ProyectosPage() {
  const [activeCategory, setActiveCategory] = useState<"Todos" | ProjectCategory>(
    "Todos"
  );
  const [query, setQuery] = useState("");

  const filteredProjects = HUB_PROJECTS.filter((project) => {
    const matchesCategory =
      activeCategory === "Todos" || project.badge === activeCategory;
    const q = query.trim().toLowerCase();
    const matchesQuery =
      !q ||
      project.title.toLowerCase().includes(q) ||
      project.summary.toLowerCase().includes(q) ||
      project.location.toLowerCase().includes(q);
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <PageHeader
          title="Nuestros Proyectos e Iniciativas"
          subtitle="Explora todos los programas comunitarios, talleres educativos y campañas de impacto impulsados por Global Shapers San Salvador."
          breadcrumb="Proyectos"
        />

        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Barra de Filtros y Búsqueda */}
            <div className="flex flex-col justify-between gap-5 rounded-2xl border border-slate-200 bg-[#F7F9FF] p-5 lg:flex-row lg:items-center">
              <div className="flex flex-wrap gap-2">
                {PROJECT_CATEGORIES.map((category) => {
                  const active = activeCategory === category;
                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setActiveCategory(category)}
                      className={`rounded-sm px-4 py-2 font-sans text-xs font-bold transition-colors sm:text-sm ${
                        active
                          ? "bg-[#1D4ED8] text-white shadow-sm"
                          : "border border-slate-200 bg-white text-[#0B104A] hover:border-[#1D4ED8]"
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>

              <div className="relative w-full lg:w-72">
                <Search
                  className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                  aria-hidden="true"
                />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Buscar proyecto o zona..."
                  aria-label="Buscar proyecto"
                  className="w-full rounded-sm border border-slate-300 bg-white py-2.5 pl-10 pr-4 font-sans text-sm text-[#0B104A] focus:border-[#1D4ED8] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/20"
                />
              </div>
            </div>

            {/* Grid de Proyectos */}
            {filteredProjects.length === 0 ? (
              <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-12 text-center">
                <p className="font-display text-xl font-bold text-[#0B104A]">
                  No encontramos proyectos con ese filtro
                </p>
                <p className="mt-2 font-sans text-sm text-slate-600">
                  Prueba limpiando el buscador o seleccionando otra categoría.
                </p>
              </div>
            ) : (
              <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredProjects.map((project) => (
                  <article
                    key={project.slug}
                    className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div
                      className={`relative flex h-48 w-full flex-col items-center justify-center bg-gradient-to-br ${project.gradientClass} p-6 text-white`}
                    >
                      <span className="absolute left-4 top-4 rounded-sm bg-white/95 px-3 py-1 font-sans text-xs font-bold text-[#0B104A]">
                        {project.badge}
                      </span>
                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/25 bg-white/15">
                        <ImageIcon className="h-7 w-7 text-white" aria-hidden="true" />
                      </span>
                      <span className="mt-2 font-sans text-[11px] font-medium text-white/85">
                        Espacio para foto del proyecto
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col justify-between p-6">
                      <div>
                        <div className="flex items-center gap-2 font-sans text-xs font-semibold text-[#1D4ED8]">
                          <Users className="h-3.5 w-3.5" aria-hidden="true" />
                          <span>{project.beneficiaries}</span>
                        </div>
                        <h2 className="mt-2.5 font-display text-xl font-bold text-[#0B104A]">
                          {project.title}
                        </h2>
                        <p className="mt-2.5 font-sans text-sm leading-relaxed text-[#4A5355]">
                          {project.summary}
                        </p>
                      </div>

                      <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 font-sans text-xs">
                        <span className="inline-flex items-center gap-1 text-slate-500">
                          <MapPin className="h-3.5 w-3.5 text-[#1D4ED8]" aria-hidden="true" />
                          {project.year}
                        </span>
                        <Link
                          href={`/proyectos/${project.slug}`}
                          className="inline-flex items-center gap-1 font-bold text-[#1D4ED8] hover:text-[#0B104A]"
                        >
                          Ver ficha completa
                          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {/* Banner CTA hacia Donaciones */}
            <div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-2xl bg-gradient-to-r from-[#0B104A] via-[#0E4D92] to-[#1D4ED8] p-8 text-white sm:flex-row sm:p-10">
              <div>
                <h2 className="font-display text-2xl font-bold sm:text-3xl">
                  ¿Quieres patrocinar uno de estos proyectos?
                </h2>
                <p className="mt-2 max-w-xl font-sans text-sm text-sky-100 sm:text-base">
                  Tu donación o alianza corporativa permite escalar nuestro
                  impacto a más comunidades de El Salvador.
                </p>
              </div>
              <Link
                href="/#donar"
                className="inline-flex shrink-0 items-center gap-2 rounded-sm bg-white px-6 py-3.5 font-sans text-sm font-bold text-[#0B104A] shadow-sm transition-colors hover:bg-sky-50"
              >
                <Heart className="h-4 w-4 fill-[#1D4ED8] text-[#1D4ED8]" aria-hidden="true" />
                Hacer una donación
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
