"use client";

import { useState } from "react";
import {
  Check,
  Copy,
  CreditCard,
  ExternalLink,
  Heart,
  Landmark,
  Lock,
  ShieldCheck,
  Wallet,
} from "lucide-react";

type Frequency = "unica" | "mensual";
type PaymentMethod = "pasarela" | "paypal" | "transferencia";

const PRESET_AMOUNTS = [
  {
    amount: 10,
    impact:
      "Con $10 cubres refrigerios y material impreso para 2 jóvenes en un taller.",
  },
  {
    amount: 25,
    impact:
      "Con $25 financias materiales educativos para un taller juvenil.",
  },
  {
    amount: 50,
    impact:
      "Con $50 equipas un kit completo de educación financiera para un aula comunitaria.",
  },
  {
    amount: 100,
    impact:
      "Con $100 patrocinas una jornada integral de liderazgo e impacto para 30 jóvenes.",
  },
];

/* TODO: Reemplazar con los enlaces reales de tu pasarela de pagos (Wompi El Salvador / Stripe / PayPal) */
const PAYMENT_LINKS = {
  pasarelaUnica: "https://pagos.wompi.sv/tu-enlace-global-shapers-unica",
  pasarelaMensual: "https://pagos.wompi.sv/tu-enlace-global-shapers-mensual",
  paypal: "https://www.paypal.com/donate/?hosted_button_id=REEMPLAZAR_ID",
};

/* TODO: Reemplazar con los datos bancarios oficiales de Global Shapers Hub San Salvador */
const BANK_DETAILS = [
  { label: "Banco", value: "Banco Agrícola / BAC Credomatic (Reemplazar)" },
  {
    label: "Titular de la cuenta",
    value: "Global Shapers Community – Hub San Salvador",
  },
  { label: "Número de cuenta", value: "0000-0000-0000 (Reemplazar)" },
  { label: "Tipo de cuenta", value: "Cuenta Corriente / Ahorro USD" },
];

export default function DonationSection() {
  const [frequency, setFrequency] = useState<Frequency>("unica");
  const [selectedAmount, setSelectedAmount] = useState<number>(25);
  const [isCustomAmount, setIsCustomAmount] = useState<boolean>(false);
  const [customValue, setCustomValue] = useState<string>("35");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("pasarela");
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const effectiveAmount = isCustomAmount
    ? Math.max(1, Number(customValue) || 0)
    : selectedAmount;

  const activePreset = PRESET_AMOUNTS.find((p) => p.amount === selectedAmount);
  const impactMessage = isCustomAmount
    ? `Con $${effectiveAmount} USD ${
        frequency === "mensual" ? "al mes " : ""
      }impulsas directamente nuestros programas de educación financiera y desarrollo comunitario en El Salvador.`
    : activePreset?.impact ?? "";

  const handleCopy = async (label: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(label);
      setTimeout(() => setCopiedField(null), 2200);
    } catch {
      // Fallback silencioso si el navegador bloquea el portapapeles
    }
  };

  return (
    <section
      id="donar"
      aria-labelledby="donation-heading"
      className="relative overflow-hidden bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          {/* Columna Izquierda: Propósito y Transparencia */}
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#0F2C59]">
              <Heart className="h-3.5 w-3.5 fill-[#F59E0B] text-[#F59E0B]" aria-hidden="true" />
              Tu Aporte Transforma Vidas
            </span>

            <h2
              id="donation-heading"
              className="mt-4 font-display text-3xl font-extrabold tracking-tight text-[#0F2C59] sm:text-4xl"
            >
              Invierte en el liderazgo juvenil de El Salvador
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              Cada dólar donado se destina de forma directa a materiales
              educativos, logística territorial y fortalecimiento de comunidades
              vulnerables en San Salvador.
            </p>

            {/* Sello Visual de Transparencia y Rendición de Cuentas */}
            <div className="mt-8 rounded-2xl border border-sky-200 bg-sky-50/70 p-6">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0F2C59] text-white shadow-sm">
                  <ShieldCheck className="h-6 w-6 text-[#0EA5E9]" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-base font-bold text-[#0F2C59]">
                    Sello de Transparencia y Rendición de Cuentas
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-700">
                    Global Shapers Hub San Salvador opera bajo estándares de
                    integridad sin fines de lucro. Emitimos constancias de aporte
                    y reportes anuales de impacto para donantes individuales y
                    aliados corporativos.
                  </p>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 border-t border-sky-200/80 pt-4 text-xs font-semibold text-[#1E3A8A]">
                <span className="flex items-center gap-1.5">
                  <Lock className="h-4 w-4 text-[#0EA5E9]" aria-hidden="true" />
                  Aporte 100% trazable
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-[#0EA5E9]" aria-hidden="true" />
                  Gestión voluntaria sin lucro
                </span>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Módulo Interactivo de Donación */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60 sm:p-8">
              {/* 1. Selector de Frecuencia */}
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  1. Elige la frecuencia de tu aporte
                </p>
                <div
                  role="group"
                  aria-label="Frecuencia de donación"
                  className="mt-3 grid grid-cols-2 gap-2 rounded-2xl bg-slate-100 p-1.5"
                >
                  <button
                    type="button"
                    onClick={() => setFrequency("unica")}
                    aria-pressed={frequency === "unica"}
                    className={`rounded-xl py-3 text-sm font-bold transition-all ${
                      frequency === "unica"
                        ? "bg-[#0F2C59] text-white shadow-sm"
                        : "text-slate-600 hover:text-[#0F2C59]"
                    }`}
                  >
                    Donación Única
                  </button>
                  <button
                    type="button"
                    onClick={() => setFrequency("mensual")}
                    aria-pressed={frequency === "mensual"}
                    className={`rounded-xl py-3 text-sm font-bold transition-all ${
                      frequency === "mensual"
                        ? "bg-[#0F2C59] text-white shadow-sm"
                        : "text-slate-600 hover:text-[#0F2C59]"
                    }`}
                  >
                    Donación Mensual
                  </button>
                </div>
              </div>

              {/* 2. Selector de Monto en USD */}
              <div className="mt-7">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  2. Selecciona un monto (USD)
                </p>
                <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-5">
                  {PRESET_AMOUNTS.map((item) => {
                    const active = !isCustomAmount && selectedAmount === item.amount;
                    return (
                      <button
                        key={item.amount}
                        type="button"
                        onClick={() => {
                          setIsCustomAmount(false);
                          setSelectedAmount(item.amount);
                        }}
                        aria-pressed={active}
                        className={`rounded-xl border py-3 font-display text-lg font-extrabold transition-all ${
                          active
                            ? "border-[#F59E0B] bg-amber-50 text-[#0F2C59] ring-2 ring-[#F59E0B]"
                            : "border-slate-200 bg-white text-slate-700 hover:border-[#1E3A8A]/40"
                        }`}
                      >
                        ${item.amount}
                      </button>
                    );
                  })}

                  <button
                    type="button"
                    onClick={() => setIsCustomAmount(true)}
                    aria-pressed={isCustomAmount}
                    className={`col-span-2 rounded-xl border py-3 text-sm font-bold transition-all sm:col-span-1 ${
                      isCustomAmount
                        ? "border-[#F59E0B] bg-amber-50 text-[#0F2C59] ring-2 ring-[#F59E0B]"
                        : "border-slate-200 bg-white text-slate-700 hover:border-[#1E3A8A]/40"
                    }`}
                  >
                    Otro monto
                  </button>
                </div>

                {isCustomAmount && (
                  <div className="mt-4">
                    <label
                      htmlFor="custom-amount"
                      className="block text-xs font-semibold text-slate-600"
                    >
                      Ingresa tu monto en dólares (USD)
                    </label>
                    <div className="relative mt-1.5">
                      <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 font-bold text-slate-500">
                        $
                      </span>
                      <input
                        id="custom-amount"
                        type="number"
                        min={1}
                        step={1}
                        value={customValue}
                        onChange={(e) => setCustomValue(e.target.value)}
                        className="w-full rounded-xl border border-slate-300 py-3 pl-8 pr-16 font-display text-lg font-bold text-[#0F2C59] focus:border-[#0EA5E9] focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]/30"
                        placeholder="35"
                      />
                      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-xs font-bold text-slate-400">
                        USD
                      </span>
                    </div>
                  </div>
                )}

                {/* Descripción dinámica del impacto */}
                <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50/70 px-4 py-3 text-sm font-medium text-[#0F2C59]">
                  {impactMessage}
                </div>
              </div>

              {/* 3. Método de Pago */}
              <div className="mt-7">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  3. Elige tu método de pago
                </p>

                <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("pasarela")}
                    aria-pressed={paymentMethod === "pasarela"}
                    className={`flex items-center justify-center gap-2 rounded-xl border px-3 py-3 text-xs font-bold transition-all sm:text-sm ${
                      paymentMethod === "pasarela"
                        ? "border-[#1E3A8A] bg-[#0F2C59] text-white"
                        : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <CreditCard className="h-4 w-4" aria-hidden="true" />
                    Tarjeta (Wompi/Stripe)
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod("paypal")}
                    aria-pressed={paymentMethod === "paypal"}
                    className={`flex items-center justify-center gap-2 rounded-xl border px-3 py-3 text-xs font-bold transition-all sm:text-sm ${
                      paymentMethod === "paypal"
                        ? "border-[#1E3A8A] bg-[#0F2C59] text-white"
                        : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <Wallet className="h-4 w-4" aria-hidden="true" />
                    PayPal
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod("transferencia")}
                    aria-pressed={paymentMethod === "transferencia"}
                    className={`flex items-center justify-center gap-2 rounded-xl border px-3 py-3 text-xs font-bold transition-all sm:text-sm ${
                      paymentMethod === "transferencia"
                        ? "border-[#1E3A8A] bg-[#0F2C59] text-white"
                        : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <Landmark className="h-4 w-4" aria-hidden="true" />
                    Transferencia SV
                  </button>
                </div>

                {/* Contenido por método de pago */}
                {paymentMethod === "pasarela" && (
                  <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <p className="text-sm text-slate-600">
                      Serás redirigido a nuestra pasarela segura para completar tu{" "}
                      <strong>
                        {frequency === "mensual"
                          ? "donación mensual"
                          : "donación única"}
                      </strong>{" "}
                      de <strong>${effectiveAmount} USD</strong> con tarjeta de
                      débito o crédito.
                    </p>
                    {/* TODO: Conectar con el checkout real de Wompi El Salvador o Stripe */}
                    <a
                      href={
                        frequency === "mensual"
                          ? PAYMENT_LINKS.pasarelaMensual
                          : PAYMENT_LINKS.pasarelaUnica
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#F59E0B] px-6 py-3.5 text-base font-bold text-[#0F2C59] shadow-sm transition-colors hover:bg-[#D97706] hover:text-white"
                    >
                      Donar ${effectiveAmount} USD{" "}
                      {frequency === "mensual" ? "/ mes" : "ahora"}
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>
                )}

                {paymentMethod === "paypal" && (
                  <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <p className="text-sm text-slate-600">
                      Dona desde cualquier parte del mundo de forma rápida y
                      protegida a través de PayPal por{" "}
                      <strong>${effectiveAmount} USD</strong>.
                    </p>
                    {/* TODO: Reemplazar con el enlace oficial de PayPal Donate del Hub */}
                    <a
                      href={PAYMENT_LINKS.paypal}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#1E3A8A] px-6 py-3.5 text-base font-bold text-white shadow-sm transition-colors hover:bg-[#0F2C59]"
                    >
                      Continuar con PayPal (${effectiveAmount} USD)
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>
                )}

                {paymentMethod === "transferencia" && (
                  <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <p className="text-sm font-medium text-[#0F2C59]">
                      Transferencia bancaria local en El Salvador (Transfer365 /
                      UNI):
                    </p>
                    <div className="mt-3 space-y-2.5">
                      {BANK_DETAILS.map((field) => {
                        const isCopied = copiedField === field.label;
                        return (
                          <div
                            key={field.label}
                            className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-4 py-2.5"
                          >
                            <div className="min-w-0">
                              <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                                {field.label}
                              </p>
                              <p className="truncate text-sm font-bold text-[#0F2C59]">
                                {field.value}
                              </p>
                            </div>
                            <button
                              type="button"
                              onClick={() => handleCopy(field.label, field.value)}
                              aria-label={`Copiar ${field.label}`}
                              className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-100"
                            >
                              {isCopied ? (
                                <>
                                  <Check className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
                                  Copiado
                                </>
                              ) : (
                                <>
                                  <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                                  Copiar
                                </>
                              )}
                            </button>
                          </div>
                        );
                      })}
                    </div>
                    <p className="mt-3 text-xs text-slate-500">
                      Envía tu comprobante a{" "}
                      <a
                        href="mailto:globalshaperssv@gmail.com"
                        className="font-semibold text-[#1E3A8A] underline"
                      >
                        globalshaperssv@gmail.com
                      </a>{" "}
                      para emitir tu recibo de agradecimiento y transparencia.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
