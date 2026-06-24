import styles from "../constants/style";
import Image from "next/image";
import arrow from "../../public/arrow-up.svg";

const SolicitarTecnico = () => {
 

  return (
    <div
      className={`${styles.flexCenter} opc w-[140px] h-[140px] rounded-full border-2 border-secondary p-[2px] cursor-pointer z-[1]`}
    >
      <div
        className={`${styles.flexCenter} blob flex-col w-[100%] h-[100%] rounded-full`}
      >
        <a href="#solicitarTecnico">
          <div className={`${styles.flexStart} flex-row`}>
            <p className="font-poppins font-medium text-[18px] leading-[23px] mr-1">
              <span className="text-gradient">Solicitar</span>
            </p>
            <Image
              src={arrow}
              width={23}
              height={23}
              alt="arrow"
              className="object-contain"
            />
          </div>
          <p className="font-poppins font-medium text-[18px] leading-[23px]">
            <span className="text-gradient">un Técnico</span>
          </p>
        </a>
      </div>
    </div>
  );
};

export default SolicitarTecnico;

