import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  breadcrumb: string;
}

export default function PageHeader({
  title,
  subtitle,
  breadcrumb,
}: PageHeaderProps) {
  return (
    <section className="bg-gradient-to-br from-[#FDF6EC] via-[#F7F9FF] to-[#EBF3FF] pt-32 pb-16 sm:pt-36 sm:pb-20">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <nav
          aria-label="Ruta de navegación"
          className="inline-flex items-center gap-2 rounded-full border border-[#1D4ED8]/15 bg-white/85 px-4 py-1.5 font-sans text-xs font-semibold text-[#0B104A] shadow-sm"
        >
          <Link href="/" className="hover:text-[#1D4ED8]">
            Inicio
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
          <span className="text-[#1D4ED8]">{breadcrumb}</span>
        </nav>

        <h1 className="mt-5 font-display text-3xl font-bold text-[#0B104A] sm:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl font-sans text-base leading-relaxed text-[#4A5355] sm:text-lg">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
