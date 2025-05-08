import Image from "next/image";

import type { StepType } from "@/components/landing/Step";
import Step from "@/components/landing/Step";
import ArrowImage from "@/public/images/getting-started/arrow.png";

const steps: Array<StepType> = [
  {
    img: "/images/getting-started/sign-up.png",
    title: "Sign Up",
    description:
      "Sign up for your free NEFA Wallet on web, iOS or Android and follow our easy process to set up your profile",
  },
  {
    img: "/images/getting-started/fund.png",
    title: "Fund",
    description:
      "Choose your preferred payment method such as bank transfer or credit card to top up your NEFA Wallet",
  },
  {
    img: "/images/getting-started/buy-crypto.png",
    title: "Buy Crypto",
    description:
      "Buy Bitcoin or Ethereum, then securely store it in your Wallet or send it on easily to your friends anywhere",
  },
];

export default function GettingStarted() {
  return (
    <section className="bg-trading-tools relative my-24 max-w-full overflow-hidden shadow-sm sm:mx-4 sm:rounded-2xl xl:mx-10">
      <div className="flex w-full flex-col items-center py-16">
        <h2 data-aos="flip-down" className="text-center text-3xl font-semibold sm:text-4xl">
          Get started in just a few minutes
        </h2>
        <div
          data-aos="fade-up"
          className="relative mt-16 flex w-full flex-col items-center justify-between space-y-12 px-4 sm:mt-8 lg:flex-row lg:space-y-0 xl:px-10"
        >
          {steps.map((step) => (
            <Step key={step.title} step={step} />
          ))}
          <Image
            src={ArrowImage}
            className="absolute top-32 left-64 hidden w-24 lg:inline-block xl:left-[22rem] xl:w-[9.5rem]"
            alt=""
          />
          <Image
            src={ArrowImage}
            className="absolute top-32 right-64 hidden w-24 lg:inline-block xl:right-[22rem] xl:w-[9.5rem]"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
