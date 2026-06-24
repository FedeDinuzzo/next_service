import styles, { layout } from "../constants/style";
import Image, { type StaticImageData } from "next/image";
import { type ReactNode } from "react";
import Link from "next/link";
import ImmediateAttentionBadge from "./ImmediateAttentionBadge";
import Reveal from "./Reveal";

type WorkFormProps = {
  repair?: StaticImageData;
  repairContent?: ReactNode;
  technical: StaticImageData;
  steps?: { id: string; label: string }[];
};

function WorkForm({ repair, repairContent, technical }: WorkFormProps) {
  return (
    <>
      <section
        id="product"
        className={`${layout.sectionReverse} md:-mt-20 lg:-mt-18 md:mb-28 lg:mb-36 relative z-40`}
      >
        <div className={`${layout.sectionImgReverse} px-6 xl:px-0`}>
          <div className="w-[100%] sm:w-[70%] md:w-[86%] xl:w-[100%] h-[100%] relative z-[5] pb-[400px] sm:pb-[500px] md:pb-[640px]">
            <div className="absolute left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 md:mt-20">
              <div className="relative">
                <Reveal variant="image">
                  {repairContent ??
                    (repair ? (
                      <Image src={repair} alt="arreglos" loading="lazy" />
                    ) : null)}
                </Reveal>
                <div className="absolute -top-10 -right-24 hidden md:block">
                  <div className="feature-card-set rounded-[24px] p-3">
                    <Image
                      src={technical}
                      alt="tecnico"
                      loading="lazy"
                      className="h-[150px] w-[210px] rounded-[18px] object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:pr-20 px-6 xl:px-0">
          <Reveal variant="text">
            <h2 className={styles.heading2}>Arreglos que Realizamos</h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-3 xl:mt-5`}>
              Todos los arreglos cuentan con garantía de 1 año y se utilizan los
              repuestos originales Electrolux.
            </p>
          </Reveal>
          <Link
            href="/#wpp-form"
            aria-label="Visitas a domicilio en el día"
            className="mt-6 xl:mt-10 inline-flex"
          >
            <ImmediateAttentionBadge text="VISITAS A DOMICILIO EN EL DÍA" />
          </Link>
        </div>
      </section>
    </>
  );
}

export default WorkForm;

