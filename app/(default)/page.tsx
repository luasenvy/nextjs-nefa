import AdvancedTrading from "@/components/AdvancedTrading";
import BackToTop from "@/components/BackToTop";
import BuyAndTrade from "@/components/BuyAndTrade";
import CreditCard from "@/components/CreditCard";
import CryptoStatistics from "@/components/CryptoStatistics";
import FAQ from "@/components/FAQ";
import GettingStarted from "@/components/GettingStarted";
import Hero from "@/components/Hero";
import InderstryLeadingSecurity from "@/components/InderstryLeadingSecurity";
import Partners from "@/components/Partners";

import "@/styles/home.css";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <CryptoStatistics />
      <BuyAndTrade />
      <Partners />
      <CreditCard />
      <AdvancedTrading />
      <InderstryLeadingSecurity />
      <GettingStarted />
      <FAQ />
      <BackToTop />
    </div>
  );
}
