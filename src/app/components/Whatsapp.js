"use client";

import React, { useState, useEffect } from "react";
import moment from "moment-timezone";
import Image from "next/image";
import wppLogo from "../../public/wppLogo.svg";

const VALID_URLS = ["5491136299090", "5491144469930", "5491141879748"]; // Constantes de valores permitidos

export default function Whatsapp() {
  const [url, setUrl] = useState("");

  useEffect(() => {
    const now = moment().tz("America/Argentina/Buenos_Aires");
    const dayOfWeek = now.day(); // 0: domingo, 1: lunes, ..., 6: sábado
    const hour = now.hour();

    // Definir los números de WhatsApp según el día y la hora en Buenos Aires
    let number;
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      // Sábados y domingos
      number = "5491144469930";
    } else {
      // De lunes a viernes
      number = hour >= 8 && hour < 17 ? "5491141879748" : "5491141879748";
    }

    setUrl(number);
  }, []);

  const handleRedirect = (e) => {
    e.preventDefault();

    // Validar el valor de URL antes de usarlo
    if (VALID_URLS.includes(url)) {
      window.open(
        `https://api.whatsapp.com/send?phone=${url}&text=Hola%20👋%20service%20Electrolux%20🛠%EF%B8%8F%20tengo%20una%20consulta%3A%20`,
        "_blank"
      );
    } else {
      console.error("Invalid URL value:", url);
    }
  };

  return (
    <div className="blobWpp rounded-full absolute bottom-[6px] md:bottom-[4px] left-0 md:left-auto right-0 md:right-10 m-auto z-[100] cursor-pointer h-[60px] w-[60px] md:h-[66px] md:w-[66px]">
      <a className="conversion" href="#" onClick={handleRedirect}>
        <Image src={wppLogo} alt="wppLogo" height="60px" width="60px" priority />
      </a>
    </div>
  );
}
