import ChevronLeftRounded from "@mui/icons-material/ChevronLeftRounded";

import Image from "next/image";

import Button from "@/components/base/Button";
import Section from "@/components/base/Section";

import HeroImage from "@/public/images/hero-image.webp";
import HeroEllipse1 from "@/public/images/pattern/ellipse-1.png";
import HeroEllipse2 from "@/public/images/pattern/ellipse-2.png";
import HeroEllipse3 from "@/public/images/pattern/ellipse-3.png";
import HeroStar from "@/public/images/pattern/star.png";

export default function Hero() {
  return (
    <section id="hero" className="w-full pb-24">
      <Section>
        <div className="col-span-12 mt-12 space-y-4 px-6 text-center sm:space-y-6 sm:text-left lg:col-span-6 xl:mt-10">
          <span
            data-aos="fade-right"
            data-aos-once="true"
            className="text-gradient text-base font-semibold uppercase"
          >
            Sign Up Today
          </span>
          <h1
            data-aos="fade-right"
            data-aos-once="true"
            className="text-[2.5rem] leading-tight font-bold capitalize sm:pr-8 sm:text-5xl xl:pr-10 xl:text-6xl"
          >
            The World's <span className="text-header-gradient">Fastest Growing</span> Crypto Web App
          </h1>
          <p
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-delay="300"
            className="paragraph hidden sm:block"
          >
            Buy and sell 200+ cryptocurrencies with 20+ flat currencies using bank transfers or your
            credit/debit card.
          </p>
          <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="700"
            className="mt-2 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4"
          >
            <Button className="max-w-full border border-[#0c66ee] bg-gradient-to-r from-[#468ef9] to-[#0c66ee] px-8 py-4 text-white">
              Get Started
            </Button>
            <Button className="text-gradient flex max-w-full items-center justify-center border border-[#0c66ee] bg-inherit px-6 py-4">
              <span>Download App</span>
              <ChevronLeftRounded
                className="mt-1 text-[#0c66ee]"
                style={{ transform: "rotate(270deg)" }}
              />
            </Button>
          </div>
        </div>
        <div className="col-span-12 hidden sm:block lg:col-span-6">
          <div className="w-full">
            <Image
              data-aos="fade-up"
              data-aos-once="true"
              src={HeroImage}
              className="-mt-4"
              alt=""
            />
          </div>
        </div>
        <Image
          data-aos="fade-up"
          data-aos-delay="300"
          src={HeroEllipse1}
          className="absolute bottom-12 left-4 hidden w-6 sm:block xl:bottom-16 xl:left-0"
          alt=""
        />
        <Image
          data-aos="fade-up"
          data-aos-delay="300"
          src={HeroEllipse2}
          className="absolute top-4 right-64 hidden w-6 sm:top-10 sm:right-96 sm:block xl:right-[32rem]"
          alt=""
        />
        <Image
          data-aos="fade-up"
          data-aos-delay="300"
          src={HeroEllipse3}
          className="absolute right-24 bottom-56 hidden w-6 sm:block"
          alt=""
        />
        <Image
          data-aos="fade-up"
          data-aos-delay="300"
          src={HeroStar}
          className="absolute top-20 right-16 hidden w-8 sm:top-28 sm:block lg:right-0 lg:left-[30rem]"
          alt=""
        />
      </Section>
    </section>
  );
}
