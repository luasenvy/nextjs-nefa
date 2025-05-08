import Image from "next/image";

import Button from "@/components/base/Button";
import Section from "@/components/base/Section";
import ListItem from "@/components/landing/ListItem";

import NefaCCImage from "@/public/images/nefa-cc.webp";

export default function CreditCard() {
  return (
    <section className="my-36 w-full">
      <Section data-aos="fade-down">
        <div className="col-span-12 lg:col-span-7">
          <div className="w-full">
            <Image src={NefaCCImage} className="w-[95%]" alt="" />
          </div>
        </div>
        <div className="col-span-12 mt-20 space-y-6 px-4 sm:px-6 lg:col-span-5">
          <h2 className="text-4xl font-semibold">
            Introducing the <span className="text-header-gradient">NEFA</span> Credit Card
          </h2>
          <p className="paragraph">
            Subject to cardholder and rewards terms which will be available at application.
          </p>
          <ul className="space-y-4 sm:space-y-2">
            <ListItem title="Up to 3% back on purchases" />
            <ListItem title="Earn rewards in bitcoin or any crypto on NEFA" />
            <ListItem title="No annual fee" />
          </ul>
          <Button className="text-gradient w-full border border-[#0c66ee] bg-inherit px-10 py-4 text-base sm:max-w-[240px]">
            Join the waitlist
          </Button>
        </div>
      </Section>
    </section>
  );
}
