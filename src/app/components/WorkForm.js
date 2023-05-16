import styles, { layout } from "@/app/constants/style"
import Image from "next/image"
import tick from "../../../public/tick.svg"

function workForm({ repair, technical }) {
  return (
    <>
      <section id="product" className={`${layout.sectionReverse} -mt-20 md:-mt-20 lg:-mt-8 `}>
        <div className={layout.sectionImgReverse}>
          <div className="w-[100%] sm:w-[70%] md:w-[86%] xl:w-[100%] h-[100%] relative z-[5] pb-[400px] sm:pb-[500px] md:pb-[640px]">
            <div className="absolute">
              <Image src={repair} alt="heladera" loading="lazy" />
            </div>
            <div className="absolute">
              <Image src={technical} alt="technical" loading="lazy" />
            </div>
          </div>
        </div>

        <div className="lg:pr-20 mt-24">
          <h2 className={styles.heading2}>Arreglos que Realizamos</h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-3 xl:mt-5`}>Todos los arreglos cuentan con Garantia de 1 año y se utilizan los repuestos originales Electrolux.</p>
            <button alt="Visitas EN EL DÍA Sin Cargo" className={`mt-6 xl:mt-10 px-4 py-4 bg-visitas w-[280px] text-center rounded-[10px] font-poppins ${styles.flexCenter}`}>
              <div className="w-auto mr-2">
                <Image src={tick} alt="tick" loading="lazy" />
              </div>
              <p className="text-white">Visitas EN EL DÍA Sin Cargo</p>
            </button>
        </div>
      </section>
    </>
  )
}

export default workForm