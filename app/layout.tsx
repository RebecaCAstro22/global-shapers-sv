import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://globalshaperssv.org"),
  title: "Global Shapers San Salvador | Liderazgo Juvenil e Impacto Social",
  description:
    "Global Shapers Community – Hub San Salvador es una organización juvenil sin fines de lucro impulsada por el Foro Económico Mundial, dedicada a la educación financiera, bienestar comunitario y desarrollo social en El Salvador.",
  keywords: [
    "Global Shapers San Salvador",
    "ONG El Salvador",
    "voluntariado juvenil El Salvador",
    "educación financiera juvenil",
    "impacto social San Salvador",
    "Foro Económico Mundial",
  ],
  openGraph: {
    title: "Global Shapers Community – Hub San Salvador",
    description:
      "Jóvenes voluntarios impulsando soluciones locales en educación financiera, bienestar comunitario y desarrollo social en El Salvador.",
    url: "https://globalshaperssv.org",
    siteName: "Global Shapers San Salvador",
    locale: "es_SV",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${plusJakarta.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-white font-sans text-slate-800 antialiased selection:bg-[#0EA5E9]/20 selection:text-[#0F2C59]">
        {children}
      </body>
    </html>
  );
}
