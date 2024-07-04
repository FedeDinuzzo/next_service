import styles from "../constants/style";
import Image from "next/image";
import logo from "../../public/logo.svg";
import instagram from "../../public/instagram.svg";
import linkedin from "../../public/linkedin.svg";
import mapa from "../../public/mapa.svg";
import telefono from "../../public/telefono.svg";
import { footerLinks } from "../constants/index";
import { Fragment } from "react";
import Link from "next/link";

const Footer = () => (
  <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth} z-[10]`}>
      <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
        <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
          <div className="flex-1 flex flex-col justify-start mr-10">
            <div>
              <Image
                src={logo}
                alt="logo"
                loading="lazy"
                width="189"
                height="35"
                className="w-[266px] h-[72]"
              />
            </div>
            <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
              Bien hecho es mejor que bien dicho. Tu service de confianza.
            </p>
          </div>

          <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
            {footerLinks.map((footerLink, link) => (
              <Fragment key={link}>
                <div
                  link={footerLink.key}
                  className="flex flex-col ss:my-0 my-4 min-w-[150px]"
                >
                  <div className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                    {footerLink.title}
                  </div>
                  <ul className="list-none mt-4">
                    {footerLink.links.map((link, id, index) => (
                      <Fragment key={id}>
                        <li
                          className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                            index !== footerLink.links.length - 1
                              ? "mb-4"
                              : "mb-0"
                          }`}
                        >
                          <Link
                            href={`${link.link}`}
                            aria-label={`Enlace a ${link.name}`}
                          >
                            {link.name}
                          </Link>
                        </li>
                      </Fragment>
                    ))}
                  </ul>
                </div>
              </Fragment>
            ))}
          </div>
        </div>

        <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45] md:mb-6 mb-0">
          <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
            Copyright © 2023 | Service-Electrolux
          </p>

          <div className="flex flex-row md:mt-0 mt-6">
            <div className="w-[21px] h-[21px] mx-1">
              <Image
                src={instagram}
                alt="Social Icon"
                width={100}
                height={100}
                className="cursor-pointer"
              />
            </div>
            <div className="w-[21px] h-[21px] mx-1">
              <Image
                src={linkedin}
                alt="Social Icon"
                width={100}
                height={100}
                className="cursor-pointer mr-6"
              />
            </div>
            <div className="w-[21px] h-[21px] mx-1">
              <Image
                src={mapa}
                alt="Social Icon"
                width={100}
                height={100}
                className="cursor-pointer mr-6"
              />
            </div>
            <div className="w-[21px] h-[21px] mx-1">
              <Image
                src={telefono}
                alt="Social Icon"
                width={100}
                height={100}
                className="cursor-pointer mr-6"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default Footer;
