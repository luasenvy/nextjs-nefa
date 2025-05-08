import CryptoStatistic, { type Dataset } from "@/components/landing/CryptoStatistic";

const trendings: Array<Dataset> = [
  {
    id: 1,
    name: "Bitcoin",
    price: 43180.13,
    logo: "bitcoin.png",
    increase: true,
    data: [40, 35, 60, 75, 60, 75, 50],
  },
  {
    id: 2,
    name: "Ethereum",
    price: 3480.65,
    logo: "ethereum.png",
    increase: false,
    data: [25, 30, 60, 50, 80, 55, 80],
  },
  {
    id: 3,
    name: "Solana",
    price: 150.2,
    logo: "solana.png",
    increase: true,
    data: [40, 45, 40, 80, 50, 60, 35],
  },
  {
    id: 4,
    name: "Dogecoin",
    price: 0.1572,
    logo: "dogecoin.png",
    increase: true,
    data: [35, 70, 60, 80, 50, 60, 40],
  },
];

const topGainers: Array<Dataset> = [
  {
    id: 1,
    name: "PAPPAY",
    price: 0.00374,
    logo: "pappay.png",
    increase: true,
    data: [30, 50, 45, 60, 70, 40, 45],
  },
  {
    id: 2,
    name: "Bitcoin Asia",
    price: 0.02096,
    logo: "bitcoin-asia.png",
    increase: true,
    data: [25, 60, 50, 60, 35, 50, 70],
  },
  {
    id: 3,
    name: "MoonRock",
    price: 0.004907,
    logo: "moonrock.png",
    increase: true,
    data: [40, 35, 40, 25, 50, 70, 45],
  },
  {
    id: 4,
    name: "NinjaFloki",
    price: 0.000123,
    logo: "ninjafloki.png",
    increase: true,
    data: [45, 35, 40, 30, 25, 45, 35],
  },
];

const recents: Array<Dataset> = [
  {
    id: 1,
    name: "MetaCraft",
    price: 0.0608,
    logo: "metacraft.png",
    increase: false,
    data: [40, 50, 45, 60, 35, 40, 45],
  },
  {
    id: 2,
    name: "Frog",
    price: 0.5875,
    logo: "frog.png",
    increase: false,
    data: [25, 50, 45, 48, 40, 60, 45],
  },
  {
    id: 3,
    name: "Musk Doge",
    price: 0.04041,
    logo: "musk-doge.png",
    increase: true,
    data: [25, 35, 60, 45, 50, 45, 45],
  },
  {
    id: 4,
    name: "2SHARE",
    price: 1366.24,
    logo: "2share.png",
    increase: true,
    data: [35, 30, 60, 50, 35, 45, 40],
  },
];

export default function CryptoStatistics() {
  return (
    <section className="mx-2 max-w-screen-xl transform rounded-[2.25rem] bg-white px-4 py-6 pb-20 shadow-lg sm:mx-auto sm:rounded-xl sm:px-6 sm:py-8 sm:shadow-md lg:-translate-y-12 lg:px-0">
      <div className="flex w-full flex-col items-center justify-center lg:flex-row">
        <CryptoStatistic
          data-aos="fade-up"
          title="🔥 Trending"
          datasets={trendings}
          className="border-gray-200 lg:px-8 xl:border-r"
        />

        <CryptoStatistic
          data-aos="fade-up"
          data-aos-delay="150"
          title="🚀 Top Gainers"
          datasets={topGainers}
          className="border-gray-200 lg:px-8 xl:border-r"
        />

        <CryptoStatistic
          data-aos="fade-up"
          data-aos-delay="300"
          title="💎 Recently Added"
          datasets={recents}
          className="lg:px-8"
        />
      </div>
    </section>
  );
}
