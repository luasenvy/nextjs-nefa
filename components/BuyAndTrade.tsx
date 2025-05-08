"use client";

import { useState } from "react";

import Button from "@/components/base/Button";
import Section from "@/components/base/Section";
import BuyTradeImage from "@/components/landing/BuyTradeImage";
import Exchange, { type Currency } from "@/components/landing/Exchange";

const currencies: Array<Currency> = [
  {
    img: "country-icon/eng.png",
    name: "USD",
  },
];
const cryptocurrencies: Array<Currency> = [
  {
    img: "crypto-icon/bitcoin.png",
    name: "BTC",
  },
];

export default function BuyAndTrade() {
  const [currencySelected, setCurrencySelected] = useState<Currency>({
    img: "country-icon/eng.png",
    name: "USD",
  });
  const [cryptoSelected, setCryptoSelected] = useState<Currency>({
    img: "crypto-icon/bitcoin.png",
    name: "BTC",
  });

  return (
    <section className="my-24 w-full">
      <Section>
        <BuyTradeImage className="mb-8 sm:hidden" />
        <div
          data-aos="fade-right"
          className="col-span-12 mt-4 space-y-6 px-4 lg:col-span-6 xl:mt-20"
        >
          <h2 className="text-4xl font-semibold sm:pr-8 xl:pr-12">
            Buy & trade on the <br className="hidden sm:block" />
            original crypto exchange.
          </h2>
          <p className="paragraph">
            Buy now and get 40% extra bonus Minimum pre-sale amount 25 Crypto Coin. We accept BTC
            crypto-currency
          </p>
          <div className="space-y-6 lg:pr-12">
            <Exchange
              title="Amount"
              name="amount"
              type="number"
              defaultValue="5.000"
              exchangeSelected={currencySelected}
              exchanges={currencies}
            />
            <Exchange
              title="Get"
              name="get"
              type="number"
              defaultValue="0.10901"
              exchangeSelected={cryptoSelected}
              exchanges={cryptocurrencies}
            />
            <Button className="bg-blue-gradient w-full px-5 py-4 text-base font-medium text-white">
              Buy Now
            </Button>
          </div>
        </div>
        <BuyTradeImage data-aos="fade-left" className="hidden sm:block" />
      </Section>
    </section>
  );
}
