"use client";

import { useState } from "react";
import { getWhatsAppNumber, VALID_WPP_NUMBERS } from "../utils/whatsapp";
import { pushAdsConversion } from "../lib/tracking";
import { trackOfflineLead } from "./LeadTracking";

const WhatsappFooterForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [problem, setProblem] = useState("");
  const [errors, setErrors] = useState<{ name?: string; phone?: string; problem?: string }>({});

  const validateForm = () => {
    const nextErrors: { name?: string; phone?: string; problem?: string } = {};
    if (!name.trim()) nextErrors.name = "Ingresá tu nombre";
    if (name && name.trim().length < 3) nextErrors.name = "Mínimo 3 letras";
    if (!phone.trim()) nextErrors.phone = "Ingresá tu teléfono";
    if (phone && phone.replace(/[^\d]/g, "").length < 8) nextErrors.phone = "Mínimo 8 dígitos";
    if (!problem.trim()) nextErrors.problem = "Contanos el problema";
    if (phone && !/^[\d+\s()-]{6,}$/.test(phone)) nextErrors.phone = "Teléfono inválido";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateForm()) return;
    const activeElement = document.activeElement as HTMLElement | null;
    if (activeElement?.blur) activeElement.blur();
    const number = getWhatsAppNumber();
    if (!VALID_WPP_NUMBERS.includes(number)) {
      console.error("Invalid WhatsApp number:", number);
      return;
    }
    const message = `Hola, soy ${name || "un cliente"}. Mi telefono es ${phone || "sin telefono"}. Problema: ${
      problem || "sin detalle"
    }.`;
    const trackingUrl = `https://api.whatsapp.com/send?phone=${number}`;
    const targetUrl = `https://api.whatsapp.com/send?phone=${number}&text=${encodeURIComponent(message)}`;
    pushAdsConversion("whatsapp", "footer_form_wpp", { href: targetUrl });
    trackOfflineLead("whatsapp", {
      clickedTo: trackingUrl,
      element: event.currentTarget,
      leadLabel: "footer_form_wpp",
      categoryContext: problem,
      formName: name.trim(),
      formPhone: phone.trim(),
      formProblem: problem.trim(),
    });
    // Disparamos un <a class="conversion"> real para que el trigger de GTM
    // (Link Click sobre .conversion) capture la conversión, igual que el resto.
    const link = document.createElement("a");
    link.href = targetUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.className = "conversion js-track-whatsapp";
    link.setAttribute("data-lead-action", "whatsapp");
    link.setAttribute("data-track-label", "footer_form_wpp");
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-[360px] rounded-[20px] px-4 py-4 lg:py-0 lg:pb-4">
      <div className="font-poppins font-semibold text-white text-[16px]">Pedí tu service por WhatsApp</div>
      <div className="mt-3 grid grid-cols-1 lg:grid-cols-2 gap-3">
        <div className="flex flex-col">
          <input
            type="text"
            value={name}
            onChange={(e) => {
              const value = e.target.value;
              setName(value);
              setErrors((prev) => ({
                ...prev,
                name: value.trim().length >= 3 ? undefined : prev.name,
              }));
            }}
            placeholder="Nombre"
            className={`w-full rounded-[12px] border px-3 py-2 text-[16px] sm:text-[14px] text-white outline-none ${
              errors.name ? "border-red-400" : "border-[#9aa6c3]"
            } bg-[#11101d]`}
          />
          {errors.name ? <span className="mt-1 text-[12px] text-red-400">{errors.name}</span> : null}
        </div>
        <div className="flex flex-col">
          <input
            type="tel"
            value={phone}
            onChange={(e) => {
              const value = e.target.value;
              const digits = value.replace(/[^\d]/g, "");
              setPhone(value);
              setErrors((prev) => ({
                ...prev,
                phone: digits.length >= 8 ? undefined : prev.phone,
              }));
            }}
            placeholder="Teléfono"
            className={`w-full rounded-[12px] border px-3 py-2 text-[16px] sm:text-[14px] text-white outline-none ${
              errors.phone ? "border-red-400" : "border-[#9aa6c3]"
            } bg-[#11101d]`}
          />
          {errors.phone ? <span className="mt-1 text-[12px] text-red-400">{errors.phone}</span> : null}
        </div>
        <div className="flex flex-col lg:col-span-2">
          <textarea
            value={problem}
            onChange={(e) => {
              const value = e.target.value;
              setProblem(value);
              setErrors((prev) => ({
                ...prev,
                problem: value.trim().length > 0 ? undefined : prev.problem,
              }));
            }}
            placeholder="Problema"
            rows={3}
            className={`w-full rounded-[12px] border px-3 py-2 text-[16px] sm:text-[14px] text-white outline-none resize-none ${
              errors.problem ? "border-red-400" : "border-[#9aa6c3]"
            } bg-[#11101d]`}
          />
          {errors.problem ? <span className="mt-1 text-[12px] text-red-400">{errors.problem}</span> : null}
        </div>
      </div>
      <button
        type="submit"
        className="mt-4 w-full rounded-[12px] px-4 py-2 font-poppins font-semibold text-primary bg-blue-gradient shadow-[0_8px_10px_rgba(10,27,111,0.18)] transition hover:-translate-y-0.5"
      >
        Enviar por WhatsApp
      </button>
    </form>
  );
};

export default WhatsappFooterForm;
