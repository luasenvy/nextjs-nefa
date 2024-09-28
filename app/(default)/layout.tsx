"use client";

import AOS from "aos";

import "aos/dist/aos.css";

import { useEffect } from "react";

import Footer from "@/components/base/Footer";
import Navbar from "@/components/base/Navbar";

export default function Layout({ children }: React.PropsWithChildren) {
  useEffect(() => {
    AOS.init({ disable: "phone" });
  });

  return (
    <div className="min-h-screen font-sans antialiased relative">
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-[125vh] sm:h-[225vh] lg:h-[125vh] cover-gradient-2 sm:cover-gradient"></div>
        <Navbar />

        <main className="text-neutral-800">{children}</main>

        <Footer />
      </div>
    </div>
  );
}
