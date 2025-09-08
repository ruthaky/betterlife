"use client"
import { motion } from "framer-motion";
import Head from "next/head";

export default function Gallery() {
  return (
    <>
    

      <div className="w-full pt-[150px]">
       

        {/* Gallery Section */}
        <section className="w-full flex flex-col items-center px-8 pb-20">
          {/* Title */}
          <div className="inline-block mb-4">
        <h1
          className={`font-arapey text-[40px] sm:text-5xl md:text-6xl font-medium md:mb-4 animate-slideIn`}
        >
          <span className="font-header">Gallery</span>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1 }}
            className="h-[4px] w-[200px] sm:w-[300px] lg:w-[900px] bg-[#CBBFD6] mt-0 mx-auto"
          />
        </h1>
      </div>

          {/* Tabs */}
          <div className="flex space-x-8 mb-18 text-gray-600 font-medium">
            <button className="text-[#0f1c24] border-b-2 border-[#0f1c24] pb-1">
              ALL
            </button>
            <button className="hover:text-[#0f1c24]">Facility</button>
            <button className="hover:text-[#0f1c24]">Community</button>
            <button className="hover:text-[#0f1c24]">Activities</button>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl">
  <img src="/asset/img2.webp" alt="Gallery 1" className="rounded-2xl object-cover" />
  <img src="/asset/img2.webp" alt="Gallery 2" className="rounded-2xl object-cover mt-8" /> {/* Lowered */}
  <img src="/asset/img2.webp" alt="Gallery 3" className="rounded-2xl object-cover" />
  <img src="/asset/img2.webp" alt="Gallery 4" className="rounded-2xl object-cover mt-8" /> {/* Lowered */}
  <img src="/asset/img2.webp" alt="Gallery 5" className="rounded-2xl object-cover" />
  <img src="/asset/img2.webp" alt="Gallery 6" className="rounded-2xl object-cover mt-8" /> {/* Lowered */}
  <img src="/asset/img2.webp" alt="Gallery 7" className="rounded-2xl object-cover" />
  <img src="/asset/img2.webp" alt="Gallery 8" className="rounded-2xl object-cover mt-8" /> {/* Lowered */}
</div>
        </section>

        {/* Schedule a Visit Section */}
        <section className=" flex flex-col items-center justify-center px-8 bg-[#F7F6F2] text-center py-20">
          <h2 className="text-4xl font-bold text-[#0f1c24] mb-4">
            Schedule a visit
          </h2>
          <p className="text-gray-600 max-w-2xl mb-6">
            Visit. Ask questions. Every guest is different and we are ready to
            discuss your loved one’s specific needs so we can accommodate them.
            That’s what makes Coleman different.
          </p>
          <button className="bg-[#0f1c24] text-white px-6 py-2 rounded-md">
            Schedule
          </button>
        </section>

      
      </div>
    </>
  );
}
