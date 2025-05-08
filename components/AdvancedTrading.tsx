import Button from "@/components/base/Button";

import TradingToolImage from "@/components/landing/TradingToolImage";

export default function AdvancedTrading() {
  return (
    <section className="bg-trading-tools relative my-20 max-w-full overflow-hidden rounded-2xl py-16 shadow-sm sm:mx-4">
      <div className="relative mx-auto grid max-w-screen-xl grid-cols-12 gap-x-6 px-4 sm:px-2">
        <TradingToolImage className="sm:hidden" />
        <div
          data-aos="fade-right"
          className="col-span-12 mt-8 space-y-8 px-4 sm:space-y-6 sm:px-6 lg:col-span-6"
        >
          <h2 className="text-4xl font-semibold">
            Advanced Trading <span className="text-header-gradient">Tools</span>
          </h2>
          <div className="space-y-2">
            <h4 className="text-lg font-medium">Professional Access, Non-stop Availability</h4>
            <p className="paragraph text-sm xl:text-base">
              We provide premium access to crypto trading for both individuals and institutions
              through high liquidity, reliable order execution and constant uptime.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-medium">A Range of Powerful Apis</h4>
            <p className="paragraph text-sm xl:text-base">
              Set up your own trading interface or deploy your algorithmic strategy with our
              high-performance FIX and HTTP APIs. Connect to our WebSocket for real-time data
              streaming.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-medium">Customer Support</h4>
            <p className="paragraph text-sm xl:text-base">
              Premium 24/7 support available to all customers worldwide by phone or email. Dedicated
              account managers for partners.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row">
            <Button className="text-gradient border border-[#4A8FF6] bg-inherit px-10 py-4 text-base">
              Get Started
            </Button>
            <Button className="rounded-full bg-inherit px-10 py-4 text-center text-[#4A8FF6] underline">
              Learn More
            </Button>
          </div>
        </div>
        <TradingToolImage data-aos="fade-left" className="hidden sm:block" />
      </div>
    </section>
  );
}
