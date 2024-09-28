import classnames from "classnames";
import Image from "next/image";

import AdvancedTradingToolsImage from "@/public/images/advanced-trading-tools.webp";

export default function BuyAndTradeImage({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={classnames("col-span-12 lg:col-span-6", className)} {...props}>
      <div className="w-full sm:mt-20 xl:mt-0">
        <Image src={AdvancedTradingToolsImage} className="w-full" alt="" />
      </div>
    </div>
  );
}
