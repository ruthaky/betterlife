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
          </div>
        </div>

        {/* Contact + Socials */}
        <div className="flex flex-col items-start md:items-end gap-3 w-full md:w-auto">
          <p className="text-sm md:text-base">Contact Us: info@betterlife.org</p>
          <div className="flex flex-wrap gap-4 text-sm md:text-base">
            <a href="#">Instagram</a>
            <a href="#">YouTube</a>
            <a href="#">TikTok</a>
            <a href="#">Facebook</a>
            <a href="#">Medium</a>
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
