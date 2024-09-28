import classnames from "classnames";
import Image from "next/image";

import BuyAndtrade from "@/public/images/buy-and-trade.webp";

export default function BuyAndTradeImage({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={classnames("col-span-12 lg:col-span-6", className)} {...props}>
      <div className="w-full">
        <Image src={BuyAndtrade} className="mt-4 sm:-mt-4" alt="" />
      </div>
    </div>
  );
}
