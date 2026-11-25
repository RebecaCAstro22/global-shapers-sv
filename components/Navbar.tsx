"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Heart, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Quiénes Somos" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/#impacto", label: "Nuestro Impacto" },
  { href: "/contacto", label: "Involúcrate" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        {/* Logo Oficial */}
        <Link
          href="/"
          className="group flex items-center gap-3 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
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
            <span className="font-display text-base font-bold tracking-tight text-[#0B104A] sm:text-lg">
              Global Shapers San Salvador
            </span>
            <span className="font-sans text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              Hub San Salvador · Desde 2012
            </span>
          </span>
        </Link>

        {/* Enlaces Desktop (Estilo Eduleb en Jost Mayúsculas) */}
        <div className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-display text-sm font-semibold uppercase tracking-wide text-[#0B104A] transition-colors hover:text-[#1D4ED8] focus:outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/#donar"
            className="inline-flex items-center gap-2 rounded-sm bg-[#1D4ED8] px-6 py-3 font-sans text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#0E4D92] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B104A] focus-visible:ring-offset-2"
          >
            <Heart className="h-4 w-4 fill-current" aria-hidden="true" />
            Donar Ahora
          </Link>
        </div>

        {/* Botón Menú Móvil */}
        <div className="flex items-center gap-3 lg:hidden">
          <Link
            href="/#donar"
            className="inline-flex items-center gap-1.5 rounded-sm bg-[#1D4ED8] px-4 py-2 font-sans text-xs font-bold text-white shadow-sm transition-colors hover:bg-[#0E4D92]"
          >
            <Heart className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
            Donar
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            className="inline-flex items-center justify-center rounded-lg p-2 text-[#0B104A] hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
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
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 font-display text-base font-semibold uppercase text-[#0B104A] transition-colors hover:bg-slate-50 hover:text-[#1D4ED8]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#donar"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-sm bg-[#1D4ED8] px-5 py-3 font-sans text-base font-bold text-white shadow-sm transition-colors hover:bg-[#0E4D92]"
            >
              <Heart className="h-4 w-4 fill-current" aria-hidden="true" />
              Donar Ahora
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
