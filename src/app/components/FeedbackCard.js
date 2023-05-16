import Image from "next/image";

const FeedbackCard = ({ content, name, title, img, id }) => (
  <div className={`flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card ${id.includes(1) ? 'feedback-card-set' : ''}`}>
    
    <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10">{content}</p>
    <div className="flex flex-row">
      <div className="rounded-full">
        <Image src={`/${img}.png`} alt="feebackImage" loading="lazy" height={48} width={48} />
      </div>
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">{name}</h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">{title}</p>
      </div>
    </div>
  </div>
);

export default FeedbackCard;
