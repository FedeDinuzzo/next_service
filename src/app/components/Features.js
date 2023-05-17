import { features } from "@/app/constants";
import styles, {layout} from "@/app/constants/style"
import Button from './animations/Button'
import Image from "next/image";

const FeatureCard = ({ icon, title, content, index}) => (
  <div className={`flex flex-row p-6 lg:ml-20 max-w-[470px] rounded-[20px] ${index !== features.length -1 ? "mb-6" : "mb-0"} feature-card ${index === 1 ? 'feature-card-set' : ''}`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}> 
      <div className="w-[50%] h-[50%] object-contain">
        <Image src={`/${icon}.svg`} alt="icon" width={50} height={50} />
      </div>
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[16px] xl:text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-norma; text-dimWhite text-[15px] xl:text-[16px] leading-[23px] mb-1">
        {content}
      </p>
    </div>
  </div>
);

const Features = () =>  (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>¿Por qué elegirnos? <br className="block"/>30 Años de Experiencia</h2>
      <p className={`${styles.paragraph} max-w-[550px] mt-3 xl:mt-5`}>Con mas de 30 años de experiencia en el rubro brindamos una asistencia diferenciada y eficiente respaldada por miles de clientes contentos que ya repararon sus productos.</p>
    
      <Button styles="mt-6 xl:mt-10" text="Contactanos" link="contacto" />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Features;
