"use client";

import Image from "next/image";
import { useState } from "react";
import { Heart, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#quienes-somos", label: "Quiénes Somos" },
  { href: "#impacto", label: "Nuestro Impacto" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#involucrate", label: "Involúcrate" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        {/* Logo / Nombre Oficial */}
        <a
          href="#"
          className="group flex items-center gap-3 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0E4D92]"
        >
          <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-slate-200 bg-white shadow-sm transition-transform group-hover:scale-105">
            <Image
              src="/logo-global-shapers-sv.jpg"
              alt="Logo oficial Global Shapers Community San Salvador"
              fill
              sizes="48px"
              className="object-cover"
              priority
            />
          </span>
          <span className="flex flex-col">
            <span className="font-display text-sm font-extrabold uppercase tracking-tight text-[#0E4D92] sm:text-base">
              Global Shapers San Salvador
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              Desde 2012 · Hub San Salvador
            </span>
          </span>
        </a>

        {/* Enlaces Desktop */}
        <div className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-700 transition-colors hover:text-[#1E3A8A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0EA5E9] focus-visible:rounded"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#donar"
            className="inline-flex items-center gap-2 rounded-full bg-[#F59E0B] px-5 py-2.5 text-sm font-bold text-[#0F2C59] shadow-sm transition-all hover:bg-[#D97706] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2C59] focus-visible:ring-offset-2"
          >
            <Heart className="h-4 w-4 fill-current" aria-hidden="true" />
            Donar Ahora
          </a>
        </div>

        {/* Botón Menú Móvil */}
        <div className="flex items-center gap-3 lg:hidden">
          <a
            href="#donar"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#F59E0B] px-4 py-2 text-xs font-bold text-[#0F2C59] shadow-sm transition-colors hover:bg-[#D97706] hover:text-white"
          >
            <Heart className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
            Donar
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            className="inline-flex items-center justify-center rounded-lg p-2 text-[#0F2C59] hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0EA5E9]"
          >
            {mobileOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Menú Desplegable Móvil */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="border-t border-slate-200 bg-white px-4 pb-6 pt-4 shadow-lg lg:hidden"
        >
          <div className="flex flex-col space-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-base font-semibold text-slate-700 transition-colors hover:bg-slate-50 hover:text-[#0F2C59]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#donar"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[#F59E0B] px-5 py-3 text-base font-bold text-[#0F2C59] shadow-sm transition-colors hover:bg-[#D97706] hover:text-white"
            >
              <Heart className="h-4 w-4 fill-current" aria-hidden="true" />
              Donar Ahora
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
