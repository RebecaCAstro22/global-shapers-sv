import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://globalshaperssv.org"),
  title: "Global Shapers San Salvador | Liderazgo Juvenil e Impacto Social",
  description:
    "Global Shapers Community – Hub San Salvador es una organización juvenil sin fines de lucro impulsada por el Foro Económico Mundial. Desde 2012 creando proyectos de impacto social en San Salvador, El Salvador.",
  keywords: [
    "Global Shapers San Salvador",
    "ONG El Salvador",
    "voluntariado juvenil El Salvador",
    "Finanzas en Juego",
    "Resiliencia en Acción",
    "impacto social San Salvador",
    "Foro Económico Mundial",
  ],
  openGraph: {
    title: "Global Shapers Community – Hub San Salvador",
    description:
      "Jóvenes creando proyectos de impacto social en San Salvador desde 2012. Educación financiera, resiliencia comunitaria y bienestar juvenil.",
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
      className={`${inter.variable} ${montserrat.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-white font-sans text-slate-800 antialiased selection:bg-[#1D4ED8]/15 selection:text-[#0E4D92]">
        {children}
      </body>
    </html>
  );
}
