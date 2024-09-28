import AddRounded from "@mui/icons-material/AddRounded";
import ChevronRightRounded from "@mui/icons-material/ChevronRightRounded";
import RemoveRounded from "@mui/icons-material/RemoveRounded";
import classnames from "classnames";
import Image from "next/image";

import LineChart from "@/components/LineChart";

import CryptoIcon2share from "@/public/images/crypto-icon/2share.png";
import CryptoIconBitcoinAsia from "@/public/images/crypto-icon/bitcoin-asia.png";
import CryptoIconBitcoin from "@/public/images/crypto-icon/bitcoin.png";
import CryptoIconDogecoin from "@/public/images/crypto-icon/dogecoin.png";
import CryptoIconEthereum from "@/public/images/crypto-icon/ethereum.png";
import CryptoIconFrog from "@/public/images/crypto-icon/frog.png";
import CryptoIconMetacraft from "@/public/images/crypto-icon/metacraft.png";
import CryptoIconMoonrock from "@/public/images/crypto-icon/moonrock.png";
import CryptoIconMuskDoge from "@/public/images/crypto-icon/musk-doge.png";
import CryptoIconNinjafloki from "@/public/images/crypto-icon/ninjafloki.png";
import CryptoIconPappay from "@/public/images/crypto-icon/pappay.png";
import CryptoIconSolana from "@/public/images/crypto-icon/solana.png";

export interface Dataset {
  id: number;
  logo: string;
  name: string;
  increase: boolean;
  price: number;
  data: Array<number>;
}

interface CryptoStatisticProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  datasets: Array<Dataset>;
}

const getImage = (logo: string) => {
  if ("2share" === logo) return CryptoIcon2share;
  if ("bitcoin-asia" === logo) return CryptoIconBitcoinAsia;
  if ("bitcoin" === logo) return CryptoIconBitcoin;
  if ("dogecoin" === logo) return CryptoIconDogecoin;
  if ("ethereum" === logo) return CryptoIconEthereum;
  if ("frog" === logo) return CryptoIconFrog;
  if ("metacraft" === logo) return CryptoIconMetacraft;
  if ("moonrock" === logo) return CryptoIconMoonrock;
  if ("musk-doge" === logo) return CryptoIconMuskDoge;
  if ("ninjafloki" === logo) return CryptoIconNinjafloki;
  if ("pappay" === logo) return CryptoIconPappay;
  // if('solana' === logo)
  return CryptoIconSolana;
};

export default function CryptoStatistic({
  title,
  datasets,
  className,
  ...props
}: CryptoStatisticProps) {
  return (
    <div
      className={classnames("w-full lg:w-1/3 mt-6 lg:mt-0 overflow-hidden space-y-6", className)}
      {...props}
    >
      <div className="w-full flex items-center justify-between">
        <span className="font-medium">{title}</span>
        <a
          href="#"
          className="px-3 py-1 text-sm font-medium text-blue-500 flex items-center space-x-1 rounded-md hover:bg-blue-50 transition duration-300"
        >
          <span>More</span>
          <ChevronRightRounded />
        </a>
      </div>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="px-2 sm:px-6 py-2 align-middle inline-block min-w-full overflow-hidden">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="text-left text-sm font-medium text-gray-500">Name</th>
                  <th className="text-left text-sm font-medium text-gray-500">Price</th>
                  <th className="hidden sm:block text-left text-sm font-medium text-gray-500">
                    Chart
                  </th>
                </tr>
              </thead>
              <tbody>
                {datasets.map(({ id, logo, name, increase, price, data }) => (
                  <tr key={id} className="border-b border-gray-200">
                    <td className="py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        <Image src={getImage(logo)} alt="" />
                        <span>{name}</span>
                      </div>
                    </td>
                    <td className="py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {increase ? (
                          <AddRounded className="text-emerald-500" />
                        ) : (
                          <RemoveRounded className="text-red-500" />
                        )}
                        <span>${price}</span>
                      </div>
                    </td>
                    <td className="hidden sm:block whitespace-nowrap">
                      <div>
                        <LineChart
                          className="!w-28 !h-12 -mx-2"
                          datasets={data}
                          increase={increase}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
