import Image from "next/image";

import people01 from "../../public/people01.png";
import people02 from "../../public/people02.png";
import people03 from "../../public/people03.png";
import people04 from "../../public/people04.png";
import people05 from "../../public/people05.png";
import people06 from "../../public/people06.png";
import people07 from "../../public/people07.png";
import people08 from "../../public/people08.png";
import people09 from "../../public/people09.png";
import people10 from "../../public/people10.png";

const images = {
  "feedback-1": people01,
  "feedback-2": people02,
  "feedback-3": people03,
  "feedback-4": people04,
  "feedback-5": people05,
  "feedback-6": people06,
  "feedback-7": people07,
  "feedback-8": people08,
  "feedback-9": people09,
  "feedback-10": people10,
};

const FeedbackCard = ({ content, name, title, rating, id }) => (
  <div
    className={`flex flex-col justify-between px-4 py-6 md:px-10 md:py-12 rounded-[20px] w-[320px] md:w-[400px] h-full feedback-card ${
      id === "feedback-1" ? "feedback-card-set" : ""
    }`}
  >
    <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-6">{content}</p>

    <div className="flex flex-row items-center mt-auto justify-between">
      <div className="flex">
        <div className="rounded-full overflow-hidden w-[48px] h-[48px] shrink-0">
          <Image src={images[id] || people04} alt={`Foto de ${name}`} loading="lazy" height={48} width={48} />
        </div>
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semibold text-md md:text-[20px] leading-[32px] text-white">{name}</h4>
          <p className="font-poppins font-normal text-sm md:text-[16px] leading-[24px] text-dimWhite">{title}</p>
        </div>
      </div>
      <div className="flex items-center gap-2 mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="#FFD700"
          stroke="#FFD700"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
        <span className="text-white font-medium text-[16px]">{rating}</span>
      </div>
    </div>
  </div>
);

export default FeedbackCard;
