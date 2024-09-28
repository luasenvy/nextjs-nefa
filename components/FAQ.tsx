import Image from "next/image";

import Accordion, { type AccordionType } from "@/components/base/Accordion";
import Section from "@/components/base/Section";

import FAQImage from "@/public/images/faq.webp";

const accordions: Array<AccordionType> = [
  {
    title: "Why should I choose NEFA?",
    description:
      "We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over 8 million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.",
  },
  {
    title: "How secure is NEFA?",
    description:
      "We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.",
  },
  {
    title: "Do I have to buy a whole Bitcoin?",
    description:
      "We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.",
  },
  {
    title: "How do I actually buy Bitcoin?",
    description:
      "We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.",
  },
];

export default function FAQ() {
  return (
    <section className="w-full my-24">
      <Section>
        <div data-aos="fade-right" data-aos-delay="150" className="col-span-12 lg:col-span-6">
          <div className="w-full">
            <Image src={FAQImage} className="w-full" alt="" />
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="150"
          className="col-span-12 lg:col-span-6 px-4 sm:px-6 mt-8"
        >
          <span className="text-base text-gradient font-semibold uppercase mb-4 sm:mb-2">
            Support
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold mb-10 sm:mb-6">
            Frequently asked questions
          </h2>

          <ul className="shadow-box">
            {accordions.map((accordion, index) => (
              <Accordion key={index} accordion={accordion} />
            ))}
          </ul>
        </div>
      </Section>
    </section>
  );
}
