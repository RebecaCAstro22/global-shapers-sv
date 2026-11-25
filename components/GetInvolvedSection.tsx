"use client";

import { useState } from "react";
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  Mail,
  Send,
  UserPlus,
} from "lucide-react";

type ProfileType =
  | "Soy Estudiante/Voluntario"
  | "Represento a una Empresa/Aliado"
  | "Consulta General / Prensa";

export default function GetInvolvedSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState<ProfileType>(
    "Soy Estudiante/Voluntario"
  );
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const selectProfileAndScroll = (targetProfile: ProfileType) => {
    setProfile(targetProfile);
    setSubmitted(false);
    const formEl = document.getElementById("contacto-unificado");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    /* TODO: Opcionalmente conectar con Formspree, Resend o API Route (/api/contact). */
    const subject = encodeURIComponent(
      `[Global Shapers SV] ${profile} - ${name}`
    );
    const body = encodeURIComponent(
      `Nombre / Empresa: ${name}\nCorreo: ${email}\nPerfil: ${profile}\n\nMensaje:\n${message}`
    );

    window.location.href = `mailto:globalshaperssv@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section
      id="involucrate"
      aria-labelledby="involved-heading"
      className="bg-gradient-to-b from-[#F7F9FF] to-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-sans text-xs font-bold uppercase tracking-wider text-[#1D4ED8]">
            Involúcrate
          </span>
          <h2
            id="involved-heading"
            className="mt-2 font-display text-3xl font-bold text-[#0B104A] sm:text-4xl"
          >
            Súmate al cambio en San Salvador
          </h2>
          <p className="mt-4 font-serif text-base text-[#4A5355] sm:text-lg">
            Ya sea aportando tu talento como joven voluntario o construyendo una
            alianza corporativa con propósito, hay un espacio para ti en el Hub.
          </p>
        </div>

        {/* Dos Tarjetas Principales */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Tarjeta 1: Jóvenes y Voluntarios */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-[#1D4ED8]">
                <UserPlus className="h-7 w-7" aria-hidden="true" />
              </div>
              <span className="mt-5 inline-block font-sans text-xs font-bold uppercase tracking-wider text-[#1D4ED8]">
                Tarjeta 1 · Talento Joven
              </span>
              <h3 className="mt-1 font-display text-2xl font-bold text-[#0B104A]">
                Jóvenes y Voluntarios
              </h3>
              <p className="mt-3 font-serif text-base leading-relaxed text-[#4A5355]">
                Dirigida a estudiantes, jóvenes profesionales y agentes de cambio
                entre 18 y 27 años interesados en postular como Shapers o
                colaborar como voluntarios en nuestros proyectos locales en El
                Salvador.
              </p>
            </div>

            <div className="mt-8">
              <button
                type="button"
                onClick={() =>
                  selectProfileAndScroll("Soy Estudiante/Voluntario")
                }
                className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-[#0B104A] px-6 py-3.5 font-sans text-sm font-bold text-white transition-colors hover:bg-[#1D4ED8] sm:w-auto"
              >
                Postular como Voluntario/Shaper
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Tarjeta 2: Empresas y Aliados Estratégicos */}
          <div className="flex flex-col justify-between rounded-2xl bg-gradient-to-br from-[#0B104A] via-[#0F2C59] to-[#0E4D92] p-8 text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 text-[#38BDF8]">
                <Briefcase className="h-7 w-7" aria-hidden="true" />
              </div>
              <span className="mt-5 inline-block font-sans text-xs font-bold uppercase tracking-wider text-[#38BDF8]">
                Tarjeta 2 · Sector Privado y Cooperación
              </span>
              <h3 className="mt-1 font-display text-2xl font-bold text-white">
                Empresas y Aliados Estratégicos
              </h3>
              <p className="mt-3 font-serif text-base leading-relaxed text-slate-200">
                Dirigida a empresas, fundaciones y cooperantes interesados en
                programas de{" "}
                <strong className="font-semibold text-white">
                  Responsabilidad Social Empresarial (RSE)
                </strong>
                , patrocinio de eventos comunitarios, donaciones en especie o
                alianzas institucionales.
              </p>
            </div>

            <div className="mt-8">
              <button
                type="button"
                onClick={() =>
                  selectProfileAndScroll("Represento a una Empresa/Aliado")
                }
                className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-[#38BDF8] px-6 py-3.5 font-sans text-sm font-bold text-[#0B104A] transition-colors hover:bg-[#7DD3FC] sm:w-auto"
              >
                Convertirse en Aliado Corporativo
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* Formulario de Contacto Unificado */}
        <div
          id="contacto-unificado"
          className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10"
        >
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h3 className="font-display text-2xl font-bold text-[#0B104A]">
                Formulario de Contacto Unificado
              </h3>
              <p className="mt-3 font-serif text-sm leading-relaxed text-[#4A5355] sm:text-base">
                Cuéntanos cómo deseas participar o colaborar. Tu mensaje llegará
                directamente al equipo coordinador del Hub San Salvador.
              </p>

              <div className="mt-6 flex items-center gap-3 rounded-xl bg-[#F7F9FF] p-4">
                <Mail className="h-5 w-5 shrink-0 text-[#1D4ED8]" aria-hidden="true" />
                <div className="font-sans text-sm">
                  <p className="font-semibold text-[#0B104A]">
                    Correo oficial del Hub
                  </p>
                  <a
                    href="mailto:globalshaperssv@gmail.com"
                    className="text-[#1D4ED8] underline hover:text-[#0B104A]"
                  >
                    globalshaperssv@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 font-sans lg:col-span-7">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-semibold text-[#0B104A]"
                  >
                    Nombre / Empresa
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ej. María López / Empresa Aliada"
                    className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-800 focus:border-[#1D4ED8] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/25"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-semibold text-[#0B104A]"
                  >
                    Correo electrónico
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nombre@correo.com"
                    className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-800 focus:border-[#1D4ED8] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/25"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-profile"
                  className="block text-sm font-semibold text-[#0B104A]"
                >
                  Perfil de contacto
                </label>
                <select
                  id="contact-profile"
                  value={profile}
                  onChange={(e) => setProfile(e.target.value as ProfileType)}
                  className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm font-medium text-slate-800 focus:border-[#1D4ED8] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/25"
                >
                  <option value="Soy Estudiante/Voluntario">
                    Soy Estudiante/Voluntario
                  </option>
                  <option value="Represento a una Empresa/Aliado">
                    Represento a una Empresa/Aliado
                  </option>
                  <option value="Consulta General / Prensa">
                    Consulta General / Prensa
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-semibold text-[#0B104A]"
                >
                  Mensaje
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Cuéntanos sobre tu interés en voluntariado, alianza RSE o consulta..."
                  className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-800 focus:border-[#1D4ED8] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/25"
                />
              </div>

              {submitted && (
                <div
                  role="status"
                  className="flex items-center gap-2.5 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0" aria-hidden="true" />
                  <span>
                    Se abrió tu cliente de correo hacia{" "}
                    <strong>globalshaperssv@gmail.com</strong>. ¡Gracias por
                    contactarnos!
                  </span>
                </div>
              )}

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-[#1D4ED8] px-7 py-3.5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-[#0E4D92] sm:w-auto"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
                Enviar mensaje a Global Shapers SV
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
