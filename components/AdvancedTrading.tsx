import Button from "@/components/base/Button";

import TradingToolImage from "@/components/landing/TradingToolImage";

export default function AdvancedTrading() {
  return (
    <section className="bg-trading-tools relative max-w-full sm:mx-4 my-20 py-16 shadow rounded-2xl overflow-hidden">
      <div className="relative max-w-screen-xl px-4 sm:px-2 mx-auto grid grid-cols-12 gap-x-6">
        <TradingToolImage className="sm:hidden" />
        <div
          data-aos="fade-right"
          className="col-span-12 lg:col-span-6 space-y-8 sm:space-y-6 px-4 sm:px-6 mt-8"
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
            <Button className="px-10 py-4 bg-inherit text-gradient border border-[#4A8FF6] text-base">
              Get Started
            </Button>
            <Button className="bg-inherit text-[#4A8FF6] px-10 py-4 text-center underline rounded-full">
              Learn More
            </Button>
          </div>
        </div>
        <TradingToolImage data-aos="fade-left" className="hidden sm:block" />
      </div>
    </section>
  );
}
