import styles from "@/app/constants/style";
import Image from 'next/image'
import { footerLinks, socialMedia } from '@/app/constants/index';
import { Fragment } from "react";

const Footer = () => (
  <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
  <div className={`${styles.boxWidth} z-[10]`}>
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-1 flex flex-col justify-start mr-10">
        <div>
          <Image src={`/logo.svg`} alt="logo" loading="lazy" width={266} height={72} />
        </div>
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>Bien hecho es mejor que bien dicho. Tu service de confianza.</p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerLink, link) => (
          <Fragment key={link}>
          <div link={footerLink.key} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerLink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerLink.links.map((link, id, index) => (
                <Fragment key={id} >
                <li className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerLink.links.length - 1 ? 'mb-4' : 'mb-0'}`}>
                  {link.name}
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
      Copyright © 2022 | Service-Electrolux
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <Fragment key={social.id}>
          <div className="w-[21px] h-[21px] mx-1">
            <Image src={`/${social.icon}.svg`} alt={social.name} width={100} height={100} className={`cursor-pointer ${index !== socialMedia.length -1 ? 'mr-6' : 'mr-0'}`} />
          </div>
          </Fragment>
        ))}
      </div>
    </div>
  </section>
  </div>
  </div>
);

export default Footer;
