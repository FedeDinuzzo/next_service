import Image from 'next/image'
import logo from '../../public/logo.svg'
import wppLogo from '../../public/wppLogo.svg'
import wppLogoDesktop from '../../public/wppLogoDesktop.svg'
import navInicio from '../../public/navInicio.png'
import navHeladera from '../../public/navHeladera.png'
import navLavarropas from '../../public/navLavarropas.png'
import navContacto from '../../public/navContacto.png'
import { navLinks } from '@/app/constants/index'
import styles from "@/app/constants/style"
import Link from 'next/link'

const NavBar = () => {
  return (
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`w-full lg:max-w-[1280px] z-[100]`}>
        <nav className="w-full flex py-6 md:py-6 justify-between items-center navbar">
          <Image src={logo} width="auto" height="auto" priority alt="service electrolux" className="w-[160px] h-[100%] -mt-2 md:mt-0" />
          <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white`}>
                <Link href={`/${nav.id}`}>{nav.title}</Link>
              </li>
            ))}
          </ul>
          <div className="hidden md:block fixed bottom-4 left-0 w-[100vw] ">
          <a href="https://api.whatsapp.com/send?phone=5491144469930&text=Hola%20👋%20service%20Electrolux%20🛠%EF%B8%8F%20tengo%20una%20consulta%3A%20">
              <Image
                initial={{ scaleX: 1, sclaeY: 1 }}
                animate={{ scaleX: 1.1, scaleY: 1.1, transition: { duration: 2, delay: 6, ease: "easeIn", repeat: Infinity, repeatType: "reverse" }, }}
                src={wppLogoDesktop} alt="wppLogo" height="66px" width="66px" priority className="absolute bottom-[4px] right-10 m-auto z-[100]"
              />
            </a>
          </div>
          <div className="block fixed bottom-0 left-0 w-[100vw] sm:hidden">
            <div className="ml-6 flex absolute bottom-6 w-[40%] h-[42px] bg-primary rounded-tr-[36px] rounded-tl-[36px] rounded-br-[36px] rounded-bl-[36px] shadow-[0_0_5px_#1e8794]"></div>
            <a href="https://api.whatsapp.com/send?phone=5491144469930&text=Hola%20👋%20service%20Electrolux%20🛠%EF%B8%8F%20tengo%20una%20consulta%3A%20">
              <Image
                initial={{ scaleX: 1, sclaeY: 1 }}
                animate={{ scaleX: 1.1, scaleY: 1.1, transition: { duration: 2, delay: 6, ease: "easeIn", repeat: Infinity, repeatType: "reverse" }, }}
                src={wppLogo} alt="wppLogo" height="58px" width="58px" priority className="absolute bottom-[12px] left-0 right-0 m-auto z-[100]"
              />
            </a>
            <div className="mr-6 flex absolute bottom-6 right-0 w-[40%] h-[42px] bg-primary rounded-tl-[36px] rounded-tr-[36px] rounded-bl-[36px] rounded-br-[36px] shadow-[0_0_5px_#1e8794]"></div>
            <div className="flex justify-evenly items-center absolute bottom-[30px] px-0 w-[100vw] h-auto">
                <ul>
                  <li className='flex w-[100vw] justify-evenly'>
                    <Link href={`/`}>
                      <Image
                        initial={{ rotate: 0 }}
                        animate={{ rotate: [0, -10, 10, -10, 10, -10, 10, 0], transition: { duration: 2, delay: 4, ease: "easeIn", repeat: Infinity, repeatDelay: 8, repeatType: "reverse" }, }}
                        src={navInicio} height={26} width={26} alt={"navegacion inicio"} priority className={`text-center`}
                      />
                    </Link>
                    <Link href={`/heladeras`}>
                      <Image
                        initial={{ rotate: 0 }}
                        animate={{ rotate: [0, -10, 10, -10, 10, -10, 10, 0], transition: { duration: 2, delay: 4, ease: "easeIn", repeat: Infinity, repeatDelay: 8, repeatType: "reverse" }, }}
                        src={navHeladera} height={16} width={16} alt={"navegacion heladeras"} priority className={`mr-20 text-center`}
                      />
                    </Link>
                    <Link href={`/lavarropas`}>
                      <Image
                        initial={{ rotate: 0 }}
                        animate={{ rotate: [0, -10, 10, -10, 10, -10, 10, 0], transition: { duration: 2, delay: 4, ease: "easeIn", repeat: Infinity, repeatDelay: 8, repeatType: "reverse" }, }}
                        src={navLavarropas} height={20} width={20} alt={"navegacion lavarropas"} priority className={`text-center`}
                      />
                    </Link>
                    <Link href={`/contacto`}>
                      <Image
                        initial={{ rotate: 0 }}
                        animate={{ rotate: [0, -10, 10, -10, 10, -10, 10, 0], transition: { duration: 2, delay: 4, ease: "easeIn", repeat: Infinity, repeatDelay: 8, repeatType: "reverse" }, }}
                        src={navContacto} height={18} width={18} alt={"navegacion contacto"} priority className={`text-center`}
                      />
                    </Link>
                  </li>
                </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default NavBar
