import styles, { layout } from "../constants/style";
import Button from "./animations/Button";
import Image, { type StaticImageData } from "next/image";
import Reveal from "./Reveal";

type RepairProps = {
  gadget: string;
  step?: StaticImageData;
  steps?: { id: string; label: string }[];
};

const defaultSteps = [
  { id: "step-1", label: "Vamos a tu domicilio" },
  { id: "step-2", label: "Revisamos el equipo" },
  { id: "step-3", label: "Te hacemos un presupuesto" },
  { id: "step-4", label: "La reparamos en el momento" },
];

const Repair = ({ gadget, step, steps = defaultSteps }: RepairProps) => (
  <Reveal variant="heavy">
    <section
      id="product"
      className={`${layout.section} mt-16  mb-[300px] md:mb-0 sm:mt-24 xl:-mt-44 lg:-mt-10 md:-my-8 xl:-mb-10 px-6 xl:px-0 relative z-40`}
    >
    <div className="absolute z-[3] w-[30%] h-[30%] -left-[30%] -mt-[20%] rounded-full white__gradient" />
    <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 mt-[10%] rounded-full pink__gradient" />

    <div className="lg:pr-8">
      <h2 className={styles.heading2}>
        Forma de Trabajo, <br className="sm:block hidden" />
        Reparaciones Ideales
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-3 xl:mt-5`}>
        Arregla tu {gadget} electrolux en el momento con el metodo mas eficáz del mercado. Somos la solución que
        necesitas.
      </p>
      <Button styles="mt-6 xl:mt-10" text="Contactanos" link="contacto" />
    </div>

    <div className={`${layout.sectionImgReverse}`}>
      <div className="relative w-[340px] sm:w-[380px] md:w-[480px] lg:w-[520px] h-[320px] sm:h-[360px] md:h-[420px] mt-6">
        <div className="contact-orbit contact-orbit-lg mt-[102px] md:mt-0" />
        <div className="contact-orbit contact-orbit-md mt-[102px] md:mt-0" />
        <div className="contact-orbit contact-orbit-sm mt-[102px] md:mt-0" />

        <div className="absolute inset-0 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:gap-24 xl:gap-36 place-items-center">
          {steps.map((item, index) => (
            <div
              key={item.id}
              className={`feature-card-set work-step-card flex h-[120px] w-[200px] md:h-[140px] flex-col items-center justify-center rounded-[20px] text-center ${
                index === 0
                  ? "md:order-1"
                  : index === 1
                  ? "md:order-2"
                  : index === 2
                  ? "md:order-4"
                  : "md:order-3"
              }`}
            >
              <div className="work-step-badge flex h-8 w-8 items-center justify-center rounded-full bg-blue-gradient text-[14px] font-semibold text-primary">
                {index + 1}
              </div>
              <p className="mt-3 max-w-[180px] font-poppins text-[15px] font-semiBold text-dimWhite">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      {step ? (
        <span className="sr-only">
          <Image src={step} alt="" />
        </span>
      ) : null}
    </div>
    </section>
  </Reveal>
);

export default Repair;
