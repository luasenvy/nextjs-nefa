"use client";

import ChevronLeftRounded from "@mui/icons-material/ChevronLeftRounded";
import CloseRounded from "@mui/icons-material/CloseRounded";
import SegmentRounded from "@mui/icons-material/SegmentRounded";

import Image from "next/image";
import { useState } from "react";

import NavLink from "@/components/NavLink";
import Button from "@/components/base/Button";
import { cn } from "@/lib/utils";

import Logo from "@/public/images/logo/nefa.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownNavbar, setDropdownNavbar] = useState(false);

  return (
    <nav id="navbar" className="relative z-10 w-full text-neutral-800">
      <div className="mx-auto flex max-w-screen-xl flex-col px-8 py-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col items-center space-x-4 lg:flex-row xl:space-x-8">
          <div className="flex w-full flex-row items-center justify-between py-6">
            <div>
              <Image src={Logo} className="w-24 xl:w-28" alt="Nefa Logo" />
            </div>
            <button
              className="focus:shadow-outline rounded-lg focus:outline-none lg:hidden"
              onClick={() => setOpen((prev) => !prev)}
            >
              {open ? <CloseRounded /> : <SegmentRounded />}
            </button>
          </div>
          <ul
            className={cn(
              "animation-fadeindown flex h-auto w-full flex-grow origin-top flex-col space-y-3 pb-4 duration-300 lg:flex-row lg:items-center lg:justify-end lg:space-y-0 lg:pb-0 xl:space-x-2",
              {
                flex: open,
                hidden: !open,
                "lg:flex": !open,
              }
            )}
          >
            <NavLink name="Cryptocurrency" url="#" />
            <NavLink name="Exchanges" url="#" />
            <NavLink name="Watchlist" url="#" />
            <NavLink name="NFT" url="#" />
            <NavLink name="Portfolio" url="#" />
            <li className="group relative">
              <button
                className="focus:shadow-outline flex items-center rounded-lg bg-transparent py-2 text-sm text-[#666666] hover:text-gray-900 focus:outline-none md:px-4"
                onClick={() => setDropdownNavbar((prev) => !prev)}
                onBlur={() => setDropdownNavbar(false)}
              >
                <span>Products</span>
                <ChevronLeftRounded
                  className="transition-transform"
                  style={{ transform: `rotate(${dropdownNavbar ? 90 : 270}deg)` }}
                />
              </button>
              {dropdownNavbar && (
                <ul className="animation-fadeindown flex max-w-42 flex-col rounded-md py-1 pl-2 lg:absolute lg:bg-white lg:pl-0 lg:shadow-md">
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Exchange
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Wallet
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Explorer
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Charts
                    </a>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
        <div className={cn("space-x-3", { flex: open, hidden: !open, "lg:flex": !open })}>
          <Button className="text-gradient mt-2 border border-[#0c66ee] bg-inherit px-8 py-3 xl:px-10">
            Login
          </Button>
          <Button className="mt-2 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] px-8 py-3 text-white xl:px-10">
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  );
}
