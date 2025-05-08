"use client";

import ChevronLeftRounded from "@mui/icons-material/ChevronLeftRounded";
import Image from "next/image";
import { useState } from "react";

import countryIconImage from "@/public/images/country-icon/eng.png";
import cryptoIconImage from "@/public/images/crypto-icon/bitcoin.png";

export interface Currency {
  img: string;
  name: string;
}

interface ExchangeProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  name: string;
  defaultValue: number | string;
  exchangeSelected: Currency;
  exchanges: Array<Currency>;
  type: string;
}

const getExchangeImage = (img: string) => {
  if ("country-icon/eng.png" === img) return countryIconImage;
  // if ("crypto-icon/bitcoin.png" === img)
  return cryptoIconImage;
};

export default function Exchange({
  title,
  name,
  defaultValue,
  exchangeSelected,
  exchanges,
  type,
}: ExchangeProps) {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <div className="flex items-center space-x-4">
      <div className="relative flex w-full items-center rounded-xl border border-[#0c66ee] px-5 py-3 lg:max-w-[336px]">
        <span className="border-r border-[#0c66ee] py-3 pr-5 text-sm font-medium text-[#0c66ee]">
          {" "}
          {title}{" "}
        </span>
        <input
          type={type}
          className="w-full border-none text-right text-lg font-medium ring-0 focus:ring-0 focus:outline-none"
          name={name}
          defaultValue={defaultValue}
        />
      </div>
      <div className="relative w-full max-w-[106px] sm:max-w-[159px]">
        <button
          type="button"
          className="relative flex w-full items-center justify-center space-x-1 rounded-xl border border-[#0c66ee] py-[1.35rem] text-sm font-medium sm:px-6"
          onClick={() => setOpenDropdown((prev) => !prev)}
          onBlur={() => setOpenDropdown((prev) => !prev)}
        >
          <Image
            src={getExchangeImage(exchangeSelected.img)}
            alt=""
            className="h-6 w-6 flex-shrink-0 rounded-full"
          />
          <span className="ml-3 block truncate">{exchangeSelected.name}</span>
          <ChevronLeftRounded style={{ transform: "rotate(270deg)" }} />
        </button>

        {openDropdown && (
          <ul
            className="ring-opacity-5 animation-fadeindown absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md border border-[#0c66ee] bg-white py-1 text-base shadow-lg ring-1 ring-black focus:outline-none sm:text-sm"
            tabIndex={-1}
          >
            {exchanges.map((exchange, i) => (
              <li
                id={`listbox-option-${i}`}
                key={exchange.name}
                className="relative cursor-default px-3 py-2 text-gray-900 select-none sm:px-5"
                role="option"
              >
                <div className="flex items-center">
                  <Image
                    src={getExchangeImage(exchange.img)}
                    className="h-6 w-6 flex-shrink-0 rounded-full"
                    alt=""
                  />
                  <span className="ml-3 block truncate font-normal"> {exchange.name} </span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
