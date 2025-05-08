import PartnerImage from "@/components/landing/PartnerImage";

export default function BuyAndTrade() {
  return (
    <section className="bg-partner relative my-24 max-w-full overflow-hidden shadow-sm sm:mx-6 sm:rounded-2xl">
      <div className="flex w-full flex-col items-center justify-center space-y-4 px-6 py-16 text-center sm:px-0">
        <h3 data-aos="flip-down" className="text-2xl font-semibold text-neutral-800">
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
