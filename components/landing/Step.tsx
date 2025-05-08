import Image from "next/image";

import ArrowImage from "@/public/images/getting-started/arrow.png";
import BuyCryptoImage from "@/public/images/getting-started/buy-crypto.png";
import FundImage from "@/public/images/getting-started/fund.png";
import SignUpImage from "@/public/images/getting-started/sign-up.png";

export interface StepType {
  title: string;
  img: string;
  description: string;
}

interface StepProps {
  step: StepType;
}

const getImage = (img: string) => {
  if ("arrow" === img) return ArrowImage;
  if ("buy-crypto" === img) return BuyCryptoImage;
  if ("fund" === img) return FundImage;
  // if("sign-up" === img)
  return SignUpImage;
};

export default function Step({ step }: StepProps) {
  return (
    <div className="max-w-[280px] space-y-6 text-center sm:space-y-3 xl:max-w-[363px]">
      <Image src={getImage(step.img)} className="mx-auto max-w-[245px]" alt="" />
      <h3 className="text-xl font-semibold text-neutral-800">{step.title}</h3>
      <p className="text-sm leading-relaxed text-gray-700">{step.description}</p>
    </div>
  );
}
