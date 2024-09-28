import Image from "next/image";

import BackgroundImage from "@/public/images/partner/background.png";
import CleverImage from "@/public/images/partner/clever.png";
import DiamonCuttsImage from "@/public/images/partner/diamon-cutts.png";
import GambioImage from "@/public/images/partner/gambio.png";
import SwissFinanceImage from "@/public/images/partner/swiss-finance.png";

const getImage = (img: string) => {
  if ("background" === img) return BackgroundImage;
  if ("clever" === img) return CleverImage;
  if ("diamon-cutts" === img) return DiamonCuttsImage;
  if ("gambio" === img) return GambioImage;

  //  if("swiss-finance" === img)
  return SwissFinanceImage;
};

export default function PartnerImage({ img }: { img: string }) {
  return (
    <div>
      <Image src={getImage(img)} className="sm:w-1/2 lg:w-72 mx-auto" alt="" />
    </div>
  );
}
