import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

function InstagramIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0B104A] text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Columna 1: Identidad Institucional (Estilo Eduleb) */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3.5">
              <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-white/20 bg-white shadow-sm">
                <Image
                  src="/logo-global-shapers-sv.jpg"
                  alt="Logo Global Shapers Community San Salvador"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </span>
              <div>
                <p className="font-display text-base font-bold text-white sm:text-lg">
                  Global Shapers Community – Hub San Salvador
                </p>
                <p className="font-sans text-xs text-slate-400">
                  globalshaperssv.org · Desde 2012
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-md font-serif text-sm leading-relaxed text-slate-300">
              Global Shapers Hub San Salvador es una iniciativa sin fines de
              lucro dedicada al impacto social y desarrollo comunitario en El
              Salvador.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {/* TODO: Verificar enlaces oficiales de Instagram y LinkedIn del Hub */}
              <a
                href="https://www.instagram.com/globalshaperssv/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Global Shapers San Salvador"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-slate-200 transition-colors hover:border-[#38BDF8] hover:bg-[#1D4ED8] hover:text-white"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.linkedin.com/company/global-shapers-san-salvador/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Global Shapers San Salvador"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-slate-200 transition-colors hover:border-[#38BDF8] hover:bg-[#1D4ED8] hover:text-white"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div className="md:col-span-3">
            <h3 className="font-display text-base font-bold text-white">
              Navegación
            </h3>
            <ul className="mt-4 space-y-2.5 font-sans text-sm">
              <li>
                <Link href="/nosotros" className="hover:text-white">
                  Quiénes Somos
                </Link>
              </li>
              <li>
                <Link href="/#impacto" className="hover:text-white">
                  Nuestro Impacto
                </Link>
              </li>
              <li>
                <Link href="/proyectos" className="hover:text-white">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="/#donar" className="hover:text-white">
                  Donar Ahora
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-white">
                  Involúcrate
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Contacto Oficial */}
          <div className="md:col-span-4">
            <h3 className="font-display text-base font-bold text-white">
              Contacto Institucional
            </h3>
            <ul className="mt-4 space-y-3.5 font-sans text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#38BDF8]"
                  aria-hidden="true"
                />
                <span>San Salvador, El Salvador</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#38BDF8]"
                  aria-hidden="true"
                />
                <a
                  href="mailto:globalshaperssv@gmail.com"
                  className="text-slate-200 underline-offset-4 hover:text-white hover:underline"
                >
                  globalshaperssv@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 font-sans text-xs text-slate-400 sm:flex-row">
          <p>
            © 2026 Global Shapers Community – Hub San Salvador. Todos los
            derechos reservados.
          </p>
          <p>San Salvador, El Salvador</p>
        </div>
      </div>
    </footer>
  );
}
