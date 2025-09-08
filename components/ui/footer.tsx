"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import bg from "@/public/asset/bg.png";
import { useRouter, usePathname } from "next/navigation";
import { Noto_Serif_Ethiopic } from "next/font/google";
// Noto Serif Ethiopic for body text
const notoSerifEthiopic = Noto_Serif_Ethiopic({
  weight: ["400"], // normal
  subsets: ["ethiopic"], // supports Amharic, Tigrinya, etc.
  display: "swap",
  variable: "--font-noto-ethiopic",
});

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();
  const handleLinkClick = (path: string) => {
    close(); // Close the menu
    router.push(path); // Navigate to the specified path
  };
  return (
    <div>
       <footer className="bg-[#88B8AE] relative text-white py-10 px-6 md:px-20">
       <Image
          src={bg}
          alt="Hero"
          width={320}
          height={900}
          className="absolute top-0 left-0 rounded-3xl w-[600px] h-[900px] object-cover object-center h-full z-1 opacity-30"
        />
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 pb-4 z-10">
          <div className="flex flex-col items-start gap-3 z-10">
            <Image src="/asset/logo.svg" alt="Logo" width={70} height={70} />
            <div className="text-[#172D3A]">
              <h3 className="font-bold text-2xl">Better Life Adult Program</h3>
              <p className="text-sm">Where every day is a step forward</p>
            </div>
          </div>

<div className="flex flex-col text-right gap-2"><p>Contact Us: info@betterlife.org</p><div className="flex gap-4 text-sm ">
            <a href="#">Instagram</a>
            <a href="#">Youtube</a>
            <a href="#">Tiktok</a>
            <a href="#">Facebook</a>
            <a href="#">Medium</a>
          </div></div>
          
        </div>
        <div className="flex flex-row justify-between border-t border-white/30"><div className="mt-6 text-xs text-center pt-4">
          © Better Life 2025. All rights reserved.
        </div><div className="mt-6 text-xs text-center pt-4">
          © Better Life 2025. All rights reserved.
        </div></div>
        
      </footer>
    </div>
  );
}
