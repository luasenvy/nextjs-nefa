import PartnerImage from "@/components/landing/PartnerImage";

export default function BuyAndTrade() {
  return (
    <section className="bg-partner relative max-w-full sm:mx-6 my-24 shadow sm:rounded-2xl overflow-hidden">
      <div className="w-full px-6 sm:px-0 py-16 flex flex-col items-center justify-center space-y-4 text-center">
        <h3 data-aos="flip-down" className="text-2xl text-neutral-800 font-semibold">
          Trusted Partners Worldwide
        </h3>
        <p data-aos="flip-down" className="paragraph">
          We're partners with countless major organisations around the globe
        </p>
        <div data-aos="fade-up" className="flex flex-wrap items-center justify-center">
          {["clever", "diamon-cutts", "swiss-finance", "gambio"].map((img) => (
            <PartnerImage key={img} img={img} />
          ))}
        </div>
      </div>
    </section>
  );
}
