import { zones } from "../constants/index";
import styles from "../constants/style";
import Image from "next/image";
import capitalFederal from "../../public/capitalFederal.webp";
import zonaSur from "../../public/zonaSur.webp";
import zonaNorte from "../../public/zonaNorte.webp";

const Zones = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} my-4 lg:my-12 xl:my-0`}>
    <div className={`${styles.flexCenter} flex-wrap md:w-full z-[10]`}>
      {zones.map((zone) => (
        <div key={zone.id} className={`flex-1 ${styles.flexCenter} min-w-[270px] my-1`}>
          {zone.id == "client-1" ? (
            <Image src={capitalFederal} alt="zones" loading="lazy" width={zone.width} height={53} className="" />
          ) : zone.id == "client-2" ? (
            <Image src={zonaSur} alt="zones" loading="lazy" width={zone.width} height={53} className="" />
          ) : (
            <Image src={zonaNorte} alt="zones" loading="lazy" width={zone.width} height={53} className="" />
          )}
        </div>
      ))}
      ;
    </div>
  </section>
);

export default Zones;
