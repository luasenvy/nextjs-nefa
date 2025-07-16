import Image from "next/image";

import { cn } from "@/lib/utils";

import BuyAndtrade from "@/public/images/buy-and-trade.webp";

export default function BuyAndTradeImage({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("col-span-12 lg:col-span-6", className)} {...props}>
      <div className="w-full">
        <Image src={BuyAndtrade} className="sm:-mt-4 mt-4" alt="" />
      </div>
    </div>
  );
}
