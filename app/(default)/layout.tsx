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
    <div className="relative min-h-screen font-sans antialiased">
      <div className="relative">
        <div className="cover-gradient-2 sm:cover-gradient absolute top-0 left-0 h-[125vh] w-full sm:h-[225vh] lg:h-[125vh]"></div>
        <Navbar />

        <main className="text-neutral-800">{children}</main>

        <Footer />
      </div>
    </div>
  );
}
