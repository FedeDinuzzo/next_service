import { FaCheck } from "react-icons/fa";

type ImmediateAttentionBadgeProps = {
  className?: string;
  textClassName?: string;
  text?: string;
};

const ImmediateAttentionBadge = ({
  className = "",
  textClassName = "",
  text = "ATENCIÓN TÉCNICA INMEDIATA",
}: ImmediateAttentionBadgeProps) => (
  <div
    className={`inline-flex items-center gap-3 rounded-[14px] bg-[#11101d] px-4 py-2 shadow-[0_18px_40px_rgba(12,20,70,0.18)] ring-1 ring-white/70 ${className}`}
  >
    <div
      className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-dimBlue"
      aria-hidden="true"
    >
      <FaCheck className="text-secondary text-[14px]" />
    </div>
    <span
      className={`whitespace-nowrap font-poppins text-[13px] font-semibold tracking-wide text-white ${textClassName}`}
    >
      {text}
    </span>
  </div>
);

export default ImmediateAttentionBadge;
