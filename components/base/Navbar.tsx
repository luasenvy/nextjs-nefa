"use client";

import ChevronLeftRounded from "@mui/icons-material/ChevronLeftRounded";
import CloseRounded from "@mui/icons-material/CloseRounded";
import SegmentRounded from "@mui/icons-material/SegmentRounded";
import classnames from "classnames";
import Image from "next/image";
import { useState } from "react";

import NavLink from "@/components/NavLink";
import Button from "@/components/base/Button";

import Logo from "@/public/images/logo/nefa.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownNavbar, setDropdownNavbar] = useState(false);

  return (
    <nav id="navbar" className="relative z-10 w-full text-neutral-800">
      <div className="flex flex-col max-w-screen-xl px-8 mx-auto lg:items-center lg:justify-between lg:flex-row py-4">
        <div className="flex flex-col lg:flex-row items-center space-x-4 xl:space-x-8">
          <div className="w-full flex flex-row items-center justify-between py-6">
            <div>
              <Image src={Logo} className="w-24 xl:w-28" alt="Nefa Logo" />
            </div>
            <button
              className="rounded-lg lg:hidden focus:outline-none focus:shadow-outline"
              onClick={() => setOpen((prev) => !prev)}
            >
              {open ? <CloseRounded /> : <SegmentRounded />}
            </button>
          </div>
          <ul
            className={classnames(
              "w-full h-auto flex flex-col flex-grow lg:items-center pb-4 lg:pb-0 lg:justify-end lg:flex-row origin-top duration-300 xl:space-x-2 space-y-3 lg:space-y-0 animation-fadeindown",
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
            <li className="relative group">
              <button
                className="md:px-4 py-2 text-sm bg-transparent rounded-lg text-[#666666] hover:text-gray-900 focus:outline-none focus:shadow-outline flex items-center"
                onClick={() => setDropdownNavbar((prev) => !prev)}
                onBlur={() => setDropdownNavbar((prev) => !prev)}
              >
                <span>Products</span>
                <ChevronLeftRounded
                  className="transition-transform"
                  style={{ transform: `rotate(${dropdownNavbar ? 90 : 270}deg)` }}
                />
              </button>
              {dropdownNavbar && (
                <ul className="flex lg:absolute flex-col max-w-42 py-1 lg:bg-white rounded-md lg:shadow-md pl-2 lg:pl-0 animation-fadeindown">
                  <li>
                    <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">
                      Exchange
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">
                      Wallet
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">
                      Explorer
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">
                      Charts
                    </a>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
        <div className={classnames("space-x-3", { flex: open, hidden: !open, "lg:flex": !open })}>
          <Button className="px-8 xl:px-10 py-3 mt-2 bg-inherit text-gradient border border-[#0c66ee]">
            Login
          </Button>
          <Button className="px-8 xl:px-10 py-3 mt-2 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] text-white">
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  );
}
