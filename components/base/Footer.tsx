import ArrowForwardRounded from "@mui/icons-material/ArrowForwardRounded";
import Image from "next/image";

import NavLink from "@/components/NavLink";

import Logo from "@/public/images/logo/nefa.svg";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-screen-xl px-8">
      <div className="w-full border-y border-[#DDDDDD]">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          <div className="flex w-full flex-col border-[#DDDDDD] py-6 sm:w-1/2 sm:flex-row sm:space-x-10 sm:border-r-0 sm:px-6 sm:py-12 md:w-full lg:w-full xl:w-fit">
            <div className="mb-6 sm:mb-0 sm:hidden xl:block">
              <a href="#">
                <Image src={Logo} className="-mt-2 w-24" alt="Nefa Logo" />
              </a>
            </div>
            <ul className="space-y-4">
              <NavLink name="Cryptocurrency" url="#" />
              <NavLink name="Exchanges" url="#" />
              <NavLink name="Watchlist" url="#" />
              <NavLink name="Portfolio" url="#" />
              <NavLink name="NFT" url="#" />
            </ul>
          </div>
          <div className="w-full border-t border-[#DDDDDD] py-6 sm:w-1/2 sm:border-t sm:px-16 sm:py-12 md:w-full lg:w-full lg:border-r xl:w-fit xl:border-r">
            <ul className="space-y-4">
              <NavLink name="Products" url="#" />
              <NavLink name="About Us" url="#" />
              <NavLink name="Careers" url="#" />
              <NavLink name="Blog" url="#" />
              <NavLink name="Security" url="#" />
            </ul>
          </div>
          <div className="w-full border-t border-[#DDDDDD] py-6 sm:w-1/2 sm:border-t-0 sm:border-r-0 sm:px-16 sm:py-12 md:w-full md:border-t lg:w-full xl:w-fit">
            <ul className="space-y-4">
              <NavLink name="Help Center" url="#" />
              <NavLink name="Contact Us" url="#" />
              <NavLink name="System Status" url="#" />
              <NavLink name="Area of Avaibility" url="#" />
              <NavLink name="Privacy Policy" url="#" />
            </ul>
          </div>
          <div className="w-full space-y-4 border-[#DDDDDD] py-6 sm:w-1/2 sm:border-t sm:px-10 sm:py-12 md:w-full md:border-t lg:w-full xl:w-[22rem]">
            <h5 className="focus:shadow-outline text-sm font-medium text-[#666666] focus:outline-none">
              Newsletter
            </h5>
            <p className="focus:shadow-outline text-sm text-[#666666] focus:outline-none">
              Never miss anything crypto when <br className="sm:hidden" />
              you're on the go
            </p>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                className="w-full rounded-lg border border-[#AAAAAA] px-2 py-4 text-sm placeholder-[#888] focus:outline-none sm:rounded-md sm:py-3"
                placeholder="Enter your email"
              />
              <button className="bg-blue-gradient rounded-md px-4 py-4 text-white transition duration-300 hover:shadow-md sm:py-3">
                <ArrowForwardRounded />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-8 text-center text-sm text-[#666666] hover:text-gray-900 sm:py-4">
        &copy; Copyright 2022 NEFA LLC. All rights reserved
      </div>
    </footer>
  );
}
