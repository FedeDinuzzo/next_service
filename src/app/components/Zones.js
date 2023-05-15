import { zones } from "@/app/constants/index"
import styles from "@/app/constants/style"
import Image from 'next/image'

const Zones = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} my-4 lg:my-12 xl:my-0`}>
    <div className={`${styles.flexCenter} flex-wrap md:w-full z-[10]`}>
      {zones.map((zone) => (
        <div key={zone.id} className={`flex-1 ${styles.flexCenter} min-w-[270px]`}>\
          <Image src={`/${zone.logo}.webp`} alt="zones" loading="lazy" width={zone.width} height={53} className=""/>
        </div>
      ))};
    </div>
  </section>
);

export default Zones;
