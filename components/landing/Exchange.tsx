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
      <div className="lg:max-w-[336px] w-full flex items-center relative px-5 py-3 border border-[#0c66ee] rounded-xl">
        <span className="text-sm font-medium pr-5 py-3 text-[#0c66ee] border-r border-[#0c66ee]">
          {" "}
          {title}{" "}
        </span>
        <input
          type={type}
          className="w-full text-lg font-medium text-right border-none ring-0 focus:outline-none focus:ring-0"
          name={name}
          defaultValue={defaultValue}
        />
      </div>
      <div className="relative w-full max-w-[106px] sm:max-w-[159px]">
        <button
          type="button"
          className="w-full flex items-center justify-center space-x-1 relative sm:px-6 py-[1.35rem] border border-[#0c66ee] rounded-xl text-sm font-medium"
          onClick={() => setOpenDropdown((prev) => !prev)}
          onBlur={() => setOpenDropdown((prev) => !prev)}
        >
          <Image
            src={getExchangeImage(exchangeSelected.img)}
            alt=""
            className="flex-shrink-0 h-6 w-6 rounded-full"
          />
          <span className="ml-3 block truncate">{exchangeSelected.name}</span>
          <ChevronLeftRounded style={{ transform: "rotate(270deg)" }} />
        </button>

        {openDropdown && (
          <ul
            className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm border border-[#0c66ee] animation-fadeindown"
            tabIndex={-1}
          >
            {exchanges.map((exchange, i) => (
              <li
                id={`listbox-option-${i}`}
                key={exchange.name}
                className="text-gray-900 cursor-default select-none relative px-3 sm:px-5 py-2"
                role="option"
              >
                <div className="flex items-center">
                  <Image
                    src={getExchangeImage(exchange.img)}
                    className="flex-shrink-0 h-6 w-6 rounded-full"
                    alt=""
                  />
                  <span className="font-normal ml-3 block truncate"> {exchange.name} </span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
