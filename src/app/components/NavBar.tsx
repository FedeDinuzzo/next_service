"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import logo from "../../public/logo.svg";
import Whatsapp from "./Whatsapp";
import { navLinks } from "../constants/index";
import styles from "../constants/style";
import Link from "next/link";
import { usePathname } from "next/navigation";

import navInicio from "../../public/Navbar/Home.svg";
import navHeladeras from "../../public/Navbar/Heladeras.svg";
import navLavarropas from "../../public/Navbar/Lavarropas.svg";
import navContacto from "../../public/Navbar/Contacto.svg";

const ICON = 28;
// Gradiente celeste Electrolux (igual que botones / títulos)
const NAV_ICON_GRADIENT =
  "linear-gradient(135deg, #5ce1e6 0%, #33bbcf 55%, #2596a8 100%)";

const NavIcon = ({
  src,
  size = ICON,
  className,
}: {
  src: any;
  size?: number;
  className?: string;
}) => (
  <div
    style={{
      width: size,
      height: size,
      backgroundImage: NAV_ICON_GRADIENT,
      WebkitMask: `url(${src.src}) center / contain no-repeat`,
      mask: `url(${src.src}) center / contain no-repeat`,
    }}
    className={`cursor-pointer drop-shadow-[0_4px_10px_rgba(92,225,230,0.4)] ${className ?? ""}`}
    aria-hidden="true"
  />
);

const NavBar = () => {
  const pathname = usePathname();
  const desktopLinks = navLinks.filter((item) => item.id !== "contacto");
  const [show, setShow] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      if (current > lastScrollY.current && current > 80) {
        setShow(false);
      } else {
        setShow(true);
      }
      lastScrollY.current = current;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHomeClick = (event: React.MouseEvent) => {
    if (pathname !== "/") return;
    event.preventDefault();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className={`px-6 ${styles.flexCenter}  `}>
      <div className={`w-full lg:max-w-[1000px] z-[100]`}>
        <nav className="w-full flex  justify-start items-center">
          {/* ---------------- DESKTOP NAV ---------------- */}
          <div
            className={`hidden sm:flex fixed top-2.5 inset-x-0 z-[1000] transition-[opacity,transform] duration-200 ${
              show
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-6 pointer-events-none"
            }`}
          >
            <div
              className="
                mx-auto flex items-center gap-8 px-4 py-2.5
                rounded-[16px]
                bg-discount-gradient
                shadow-[0_6px_8px_rgba(0,6,79,0.1)]
              "
            >
              <Link
                href="/"
                aria-label="Ir a la sección de inicio"
                onClick={handleHomeClick}
              >
                <Image
                  src={logo}
                  width={logo.width}
                  height={logo.height}
                  alt="service electrolux"
                  sizes="150px"
                  className="w-[150px] h-auto -mt-1"
                  priority
                />
              </Link>

              <ul className="list-none flex items-center gap-8">
                {desktopLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className="font-poppins font-normal cursor-pointer text-[15px] text-white hover:text-secondary transition-colors"
                  >
                    <Link
                      href={nav.id ? `/${nav.id}` : "/"}
                      aria-label={`Ir a la sección ${nav.title}`}
                      onClick={!nav.id ? handleHomeClick : undefined}
                    >
                      {nav.title}
                    </Link>
                  </li>
                ))}
                <li className="font-poppins font-normal cursor-pointer text-[15px] text-white hover:text-secondary transition-colors">
                  <Link href="/zonas" aria-label="Ir a zonas de atención">
                    Ubicaciones
                  </Link>
                </li>
              </ul>

              <Link
                href="/contacto"
                className="text-[15px] font-medium text-white border border-secondary/30 px-4 py-2 rounded-[12px] hover:bg-secondary/10 hover:text-secondary transition-colors"
                aria-label="Ir a la sección de contacto"
              >
                Contacto
              </Link>
            </div>
          </div>

          {/* ---------------- MOBILE LOGO TOP ---------------- */}
          <div className="sm:hidden w-full flex justify-start items-center pt-6">
            <Image
              src={logo}
              width={logo.width}
              height={logo.height}
              alt="service electrolux"
              sizes="160px"
              className="w-[160px] h-auto -mt-2"
              priority
            />
          </div>

          {/* ---------------- MOBILE NAV BOTTOM ---------------- */}
          <div className="navMobile block fixed bottom-0 left-0 w-[100vw] sm:bottom-4 md:hidden">
            <div className="sm:hidden ml-6 flex absolute bottom-3 w-[40%] h-[42px] rounded-[16px] bg-black-gradient shadow-[0_4px_4px_rgba(10,27,111,0.1)]" />

            <Whatsapp className="sm:hidden" trackLabel="nav_mobile_wpp" />

            <div className="sm:hidden mr-6 flex absolute bottom-3 right-0 w-[40%] h-[42px] rounded-[16px] bg-black-gradient shadow-[0_4px_4px_rgba(10,27,111,0.1)]" />

            <div className="sm:hidden flex justify-evenly items-center absolute bottom-[20px] px-0 w-[100vw] h-auto">
              <ul>
                <li className="flex w-[100vw] justify-evenly items-center">
                  <Link
                    href="/"
                    aria-label="Ir a la sección de inicio"
                    onClick={handleHomeClick}
                  >
                    <NavIcon src={navInicio} />
                  </Link>

                  <Link
                    href="/heladeras"
                    aria-label="Ir a la sección de heladeras"
                  >
                    <NavIcon src={navHeladeras} className="mr-20" />
                  </Link>

                  <Link
                    href="/lavarropas"
                    aria-label="Ir a la sección de lavarropas"
                  >
                    <NavIcon src={navLavarropas} />
                  </Link>

                  <Link
                    href="/contacto"
                    aria-label="Ir a la sección de contacto"
                  >
                    <NavIcon src={navContacto} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* ---------------- WHATSAPP DESKTOP FLOAT ---------------- */}
          <div className="hidden sm:block">
            <Whatsapp
              className="hidden sm:flex"
              positionClassName="fixed bottom-6 right-10"
              trackLabel="floating_wpp"
              balloonTrackLabel="floating_wpp_balloon"
            />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
