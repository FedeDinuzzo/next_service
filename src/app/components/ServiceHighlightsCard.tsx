import Image, { type StaticImageData } from "next/image";
import { MdArrowUpward, MdCheck } from "react-icons/md";

type ServiceHighlightItem = {
  id: string;
  label: string;
};

type ServiceHighlightsCardProps = {
  title?: string;
  image?: StaticImageData;
  items: ServiceHighlightItem[];
  className?: string;
};

function ServiceHighlightsCard({
  title,
  image,
  items,
  className = "",
}: ServiceHighlightsCardProps) {
  return (
    <div
      className={`feature-card-set rounded-[24px] p-7 md:p-9 w-[290px] sm:w-[330px] md:w-[360px] mx-auto lg:mx-0 ${className}`}
    >
      {image ? (
        <div className="relative h-[170px] w-full overflow-hidden rounded-[18px]">
          <Image
            src={image}
            alt={title ?? "servicio"}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 300px, 320px"
          />
        </div>
      ) : null}
      <div className={image ? "mt-4" : ""}>
        {title ? (
          <div className="font-poppins text-[20px] font-semibold text-white mb-2">
            {title}
          </div>
        ) : null}
        <ul className="mt-5 flex flex-col gap-5">
          {items.map(({ id, label }) => (
            <li
              key={id}
              className="flex items-start gap-4 text-[15px] text-dimWhite"
            >
              <span className="mt-[2px] flex size-9 items-center justify-center rounded-full bg-dimBlue p-[2px]">
                <span className="">
                  <MdCheck
                    className="text-[24px] font-bold text-secondary"
                    aria-hidden="true"
                  />
                </span>
              </span>
              <div className="flex flex-col">
                <span className="font-poppins">{label}</span>
                <span className="mt-[2px] flex items-center gap-1 text-[12px] font-semibold text-[#1dbf73]">
                  A&amp;T
                  <MdArrowUpward className="text-[12px]" aria-hidden="true" />
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ServiceHighlightsCard;
