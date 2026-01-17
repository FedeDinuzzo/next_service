import Image from "next/image";
import logo from "../../public/logo.svg";
import Whatsapp from "./Whatsapp";
import navInicio from "../../public/navInicio.png";
import navHeladera from "../../public/navHeladera.png";
import navLavarropas from "../../public/navLavarropas.png";
import navContacto from "../../public/navContacto.png";
import { navLinks } from "../constants/index";
import styles from "../constants/style";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className={`px-6 ${styles.flexCenter}`}>
      <div className={`w-full lg:max-w-[1230px] z-[100]`}>
        <nav className="w-full flex py-6 justify-start items-center">
          <Image
            src={logo}
            width="auto"
            height="auto"
            alt="service electrolux"
            className="w-[160px] h-[100%] -mt-2 md:mt-0"
          />
          <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? "mr-0" : "mr-10"
                } text-white`}
              >
                <Link href={`/${nav.id}`} aria-label={`Ir a la sección ${nav.title}`}>
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="navMobile block fixed bottom-0 left-0 w-[100vw] md:bottom-4">
            <div className="md:hidden ml-6 flex absolute bottom-3 w-[40%] h-[42px] bg-primary rounded-tr-[36px] rounded-tl-[36px] rounded-br-[36px] rounded-bl-[36px] shadow-[0_0_5px_#1e8794]"></div>
            <Whatsapp />
            <div className="md:hidden mr-6 flex absolute bottom-3 right-0 w-[40%] h-[42px] bg-primary rounded-tl-[36px] rounded-tr-[36px] rounded-bl-[36px] rounded-br-[36px] shadow-[0_0_5px_#1e8794]"></div>
            <div className="md:hidden flex justify-evenly items-center absolute bottom-[20px] px-0 w-[100vw] h-auto">
              <ul>
                <li className="flex w-[100vw] justify-evenly align-middle">
                  <Link href={`/`} aria-label="Ir a la sección de inicio">
                    <Image
                      src={navInicio}
                      height="28px"
                      width="28px"
                      alt={"navegacion inicio"}
                      priority
                      className={`w-[28px] h-[auto] text-center cursor-pointer`}
                    />
                  </Link>
                  <Link href={`/heladeras`} aria-label="Ir a la sección de heladeras">
                    <Image
                      src={navHeladera}
                      height="18px"
                      width="18px"
                      alt={"navegacion heladeras"}
                      priority
                      className={`-mb-[10px] w-[18px] h-[auto] mr-20 text-center cursor-pointer`}
                    />
                  </Link>
                  <Link href={`/lavarropas`} aria-label="Ir a la sección de lavarropas">
                    <Image
                      src={navLavarropas}
                      height="23px"
                      width="23px"
                      alt={"navegacion lavarropas"}
                      priority
                      className={`w-[23px] h-[auto] text-center cursor-pointer`}
                    />
                  </Link>
                  <Link href={`/contacto`} aria-label="Ir a la sección de contacto">
                    <Image
                      src={navContacto}
                      height="20px"
                      width="20px"
                      alt={"navegacion contacto"}
                      priority
                      className={`w-[20px] h-[auto] text-center cursor-pointer`}
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
