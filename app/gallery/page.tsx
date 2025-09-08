"use client";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Gallery() {
  return (
    <>
      <Head>
        <title>Gallery | Better Life Adult Program</title>
      </Head>

      <div className="w-full flex flex-col items-center pt-[120px] md:pt-[150px]">
        {/* Title Section */}
        <div className="inline-block mb-8 md:mb-12">
          <h1 className="font-arapey text-4xl sm:text-5xl md:text-6xl font-medium animate-slideIn">
            <span className="font-header">Gallery</span>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1 }}
              className="h-[4px] w-[150px] sm:w-[300px] lg:w-[900px] bg-[#CBBFD6] mt-2 mx-auto"
            />
          </h1>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-12 text-gray-600 font-medium">
          <button className="text-[#0f1c24] border-b-2 border-[#0f1c24] pb-1">
            ALL
          </button>
          <button className="hover:text-[#0f1c24]">Facility</button>
          <button className="hover:text-[#0f1c24]">Community</button>
          <button className="hover:text-[#0f1c24]">Activities</button>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 px-4 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 w-full max-w-7xl mx-auto">
          {Array.from({ length: 8 }).map((_, i) => (
            <Image
              key={i}
              src="/asset/img2.webp"
              alt={`Gallery ${i + 1}`}
              className={`rounded-2xl object-cover ${i % 2 !== 0 ? "mt-4 md:mt-0" : ""}`}
            />
          ))}
        </div>

        {/* Schedule Section */}
        <section className=" px-4 md:px-20 py-16 w-full bg-[#F6F4EE] text-left mt-16 ">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Schedule a visit
          </h2>
          <p className="text-gray-600 mb-6 text-sm sm:text-base max-w-2xl">
            Visit. Ask questions. Every guest is different and we are ready to
            discuss your loved one’s specific needs...
          </p>
          <Link href="/schedule">
            <button className="px-6 py-3 bg-[#0E1A2B] text-white rounded-lg hover:bg-[#1a2a40] transition">
              Schedule
            </button>
          </Link>
        </section>
      </div>
    </>
  );
}
