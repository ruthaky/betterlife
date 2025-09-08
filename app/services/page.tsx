"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import img2 from "@/public/asset/img2.webp"
import s1 from "@/public/asset/Products/cib_skillshare.svg"
import s2 from "@/public/asset/Products/Vector.png"
import s3 from "@/public/asset/Products/Group.svg"
import s4 from "@/public/asset/Products/icon-park-outline_gymnastics.svg"

export default function ServicesPage() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      {/* Banner Section */}
   {/* Banner Section */}
   <section className="h-[500px] flex flex-col justify-center px-6 md:px-20 bg-gradient-to-r from-[#F3F2EB] to-gray-50 rounded-br-[6rem] rounded-bl-[6rem] shadow-sm">
        <div className="w-full">
        <div className="inline-block">
        <h1
          className={`font-arapey text-[40px] sm:text-5xl md:text-6xl font-medium md:mb-4 animate-slideIn`}
        >
          <span className="font-header">Services</span>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1 }}
            className="h-[4px] w-[200px] sm:w-[300px] lg:w-[900px] bg-[#CBBFD6] mt-0 mx-auto"
          />
        </h1>
      </div>
          <p className="text-gray-600 w-full">
          Over 70 countries, one incredible journey. Over 70 countries, one incredible journeyOver 70 countries, one incredible journeyOver 70 countries, one incredible journeyOver 70 countries, one incredible journeyOver 70 countries, one incredible journey. Over 70 countries, one incredible journeyOver 70 countries, one incredible journeyOver 70 countries, one incredible journeyOver 70 countries, one incredible journeyOver 70 countries, one incredible journey. Over 70 countries, one incredible journeyOver 70 countries, one incredible journeyOver 70 countries, one incredible journeyOver 70 countries, one incredible journey
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="flex flex-col justify-center items-center bg-white w-[1200px] px-6 md:px-20 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 w-full ">
          {/* Service Card 1 */}
          <div className="bg-[#F9F8F5] p-6 rounded-2xl shadow-sm text-center flex flex-col items-center">
            <Image
              src={img2}
              alt="Life Skills Training"
              width={500}
              height={400}
              className="rounded-xl mb-4"
            />
            <div className="h-[66px] w-[90px] flex items-center justify-center bg-white shadow-sm rounded rounded-2xl -mt-10"> <Image
                 src={s1}
              alt="Health & Wellness Support"
              width={40}
              height={40}
              className="rounded-xl"
            /></div>
            <h2 className="text-2xl font-bold text-gray-900 my-3">
              Life Skills Training
            </h2>
            <p className="text-gray-600">
              We help participants develop everyday skills that increase
              independence and confidence. From cooking simple meals and managing
              money to practicing personal care and home responsibilities, our
              training prepares individuals for greater self-sufficiency.
            </p>
          </div>

          {/* Service Card 2 */}
          <div className="bg-[#f9f9f7] p-6 rounded-2xl shadow-sm text-center flex flex-col items-center">
            <Image
                src={img2}
              alt="Social & Recreational Activities"
              width={500}
              height={400}
              className="rounded-xl mb-4"
            />
             <div className="h-[66px] w-[90px] flex items-center justify-center bg-white shadow-sm rounded rounded-2xl -mt-10"> <Image
                 src={s2}
              alt="Health & Wellness Support"
              width={40}
              height={40}
              className="rounded-xl"
            /></div>
            <h2 className="text-2xl font-bold text-gray-900 my-3">
              Social & Recreational Activities
            </h2>
            <p className="text-gray-600">
              Building friendships and having fun are at the heart of our
              program. Through art, music, games, fitness, and group events,
              participants enjoy activities that spark creativity, teamwork, and
              joy.
            </p>
          </div>

          {/* Service Card 3 */}
          <div className="bg-[#f9f9f7] p-6 rounded-2xl shadow-sm text-center flex flex-col items-center">
            <Image
                 src={img2}
              alt="Community Integration"
              width={500}
              height={400}
              className="rounded-xl mb-4"
            />
            <div className="h-[66px] w-[90px] flex items-center justify-center bg-white shadow-sm rounded rounded-2xl -mt-10"> <Image
                 src={s3}
              alt="Health & Wellness Support"
              width={40}
              height={40}
              className="rounded-xl"
            /></div>
            <h2 className="text-2xl font-bold text-gray-900 my-3">
              Community Integration
            </h2>
            <p className="text-gray-600">
              We believe everyone belongs in their community. Our program offers
              outings to local businesses, libraries, parks, and events, giving
              participants opportunities to connect with others, explore new
              experiences, and gain confidence in real-world settings.
            </p>
          </div>

          {/* Service Card 4 */}
          <div className="bg-[#f9f9f7] p-6 rounded-2xl shadow-sm text-center flex flex-col items-center">
            <Image
                 src={img2}
              alt="Health & Wellness Support"
              width={500}
              height={400}
              className="rounded-xl mb-4"
            />
            <div className="h-[66px] w-[90px] flex items-center justify-center bg-white shadow-sm rounded rounded-2xl -mt-10"> <Image
                 src={s4}
              alt="Health & Wellness Support"
              width={40}
              height={40}
              className="rounded-xl"
            /></div>
            <h2 className="text-2xl font-bold text-gray-900 my-3">
              Health & Wellness Support
            </h2>
            <p className="text-gray-600">
              Wellness is more than just physical health. We provide exercise
              classes, nutrition education, mindfulness activities, and personal
              safety workshops. These activities support both physical and
              emotional well-being, helping participants lead balanced and
              healthy lives.
            </p>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="flex flex-col justify-center w-full items-left bg-[#f9f9f7] px-20 py-20 ">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Schedule a visit
        </h2>
        <p className="text-gray-600 mb-6">Visit
        Visit. Ask questions. Every guest is different and we are ready to discuss your loved one’s specific needs so we can accommodate them. That’s what makes Coleman different.
        Visit. Ask questions. Every guest is different and we are ready to discuss your loved one’s specific needs so we can accommodate them. That’s what makes Coleman different.

        </p>
        <button className="bg-[#0f1c2d] text-white px-8 py-3 rounded-xl hover:bg-gray-800 w-[200px] transition">
          Schedule
        </button>
      </section>

    </div>
  );
}
