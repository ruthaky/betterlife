"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import bg from "@/public/asset/bg.png";

export default function Footer() {
  return (
    <footer className="relative bg-[#88B8AE] text-white py-10 px-6 md:px-20 overflow-hidden">
      {/* Background Image */}
      <Image
        src={bg}
        alt="Footer background"
        fill
        className="absolute inset-0 object-cover opacity-20"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
        {/* Logo + Text */}
        <div className="flex flex-col items-start gap-3">
          <Image src="/asset/logo.svg" alt="Logo" width={70} height={70} />
          <div className="text-[#172D3A]">
            <h3 className="font-bold text-xl md:text-2xl">
              Better Life Adult Program
            </h3>
            <p className="text-sm md:text-base">
              Where every day is a step forward
            </p>
            <div className="flex mt-4 flex-wrap gap-4 text-white text-sm md:text-base">
            <Link href="#">Instagram</Link>
            <Link href="#">YouTube</Link>
            <Link href="#">TikTok</Link>
            <Link href="#">Facebook</Link>
            <Link href="#">Medium</Link>
          </div>
          </div>
        
        </div>

        {/* Contact + Socials */}
        <div className="flex flex-col items-start md:items-end gap-3 w-full md:w-auto">
        <div className="text-right text-white space-y-2">
    <p className="text-right">betterlifellc8@gmail.com</p>
    <p className="text-right">12220 SW Grant Ave
      <br></br>
    Portland, OR  97223</p>
    <p className="text-right">09112, Idd</p>
  </div>
        </div>
      </div>

      {/* Divider + Copyright */}
      <div className="relative z-10 mt-8 border-t border-white/30 pt-4 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm">
        <p>© Better Life 2025. All rights reserved.</p>
        <p>Designed & Developed by Better Life Team</p>
      </div>
    </footer>
  );
}
