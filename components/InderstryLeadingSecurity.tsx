import Image from "next/image";

import ListItem from "@/components/landing/ListItem";

import InderstryLeadingSecurityImage from "@/public/images/industry-leading-security.webp";

export default function InderstryLeadingSecurity() {
  return (
    <section className="w-full my-24">
      <div className="relative max-w-screen-xl px-8 mx-auto grid grid-cols-12 gap-x-6">
        <div data-aos="fade-right" className="col-span-12 lg:col-span-6">
          <div className="w-full">
            <Image src={InderstryLeadingSecurityImage} className="w-full" alt="" />
          </div>
        </div>
        <div
          data-aos="fade-left"
          className="col-span-12 lg:col-span-5 space-y-8 sm:space-y-6 mt-8 xl:px-8"
        >
          <h2 className="text-4xl font-semibold">Industry-leading security from day one</h2>
          <ul className="space-y-8 sm:space-y-4">
            <ListItem title="Safety, security and compliance">
              <p className="text-sm text-gray-700 leading-relaxed">
                NEFA is a licensed New York trust company that undergoes regular bank exams and is
                subject to the cybersecurity audits conducted by the New York Department of
                Financial Services.
                <span className="underline">Learn more</span> about our commitment to security.
              </p>
            </ListItem>
            <ListItem title="Hardware security keys">
              <p className="text-sm text-gray-700 leading-relaxed">
                With NEFA you can secure your account with a hardware security key via WebAuthn.
              </p>
            </ListItem>
            <ListItem title="SOC Certifications">
              <p className="text-sm text-gray-700 leading-relaxed">
                NEFA is <span className="underline">SOC 1 Type 2</span> and
                <span className="underline">SOC 2 Type 2</span> compliant. We are the world’s first
                cryptocurrency exchange and custodian to complete these exams.
              </p>
            </ListItem>
          </ul>
        </div>
      </div>
    </section>
  );
}
