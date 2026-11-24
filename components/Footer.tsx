import { Globe, Mail, MapPin } from "lucide-react";

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
    <footer className="border-t border-slate-800 bg-[#091D3E] text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Identidad Institucional */}
          <div className="md:col-span-6">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1E3A8A] text-white">
                <Globe className="h-5 w-5 text-[#0EA5E9]" aria-hidden="true" />
              </span>
              <div>
                <p className="font-display text-base font-bold text-white sm:text-lg">
                  Global Shapers Community – Hub San Salvador
                </p>
                <p className="text-xs text-slate-400">
                  globalshaperssv.org · Iniciativa del Foro Económico Mundial
                </p>
              </div>
            </div>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-300">
              Global Shapers Hub San Salvador es una iniciativa sin fines de
              lucro dedicada al impacto social y desarrollo comunitario en El
              Salvador.
            </p>
          </div>

          {/* Contacto Oficial */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Contacto Institucional
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#F59E0B]"
                  aria-hidden="true"
                />
                <span>San Salvador, El Salvador</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#0EA5E9]"
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

          {/* Redes Sociales y Navegación */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Conecta con el Hub
            </h3>
            <div className="mt-4 flex items-center gap-3">
              {/* TODO: Reemplazar con los enlaces oficiales de Instagram y LinkedIn del Hub San Salvador */}
              <a
                href="https://www.instagram.com/globalshaperssv/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Global Shapers San Salvador"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-slate-200 transition-colors hover:border-[#0EA5E9] hover:bg-[#0EA5E9]/20 hover:text-white"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.linkedin.com/company/global-shapers-san-salvador/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Global Shapers San Salvador"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-slate-200 transition-colors hover:border-[#0EA5E9] hover:bg-[#0EA5E9]/20 hover:text-white"
              >
                <LinkedInIcon />
              </a>
            </div>
            <p className="mt-4 text-xs text-slate-400">
              Transparencia · Voluntariado · Alianzas RSE
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-slate-400 sm:flex-row">
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
