'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import img2 from "@/public/asset/img2.webp";
import s1 from "@/public/asset/Products/cib_skillshare.svg";
import s2 from "@/public/asset/Products/Vector.png";
import s3 from "@/public/asset/Products/Group.svg";
import s4 from "@/public/asset/Products/icon-park-outline_gymnastics.svg";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="w-full flex flex-col items-center justify-center">

    {/* Banner Section */}
    <section className="h-auto pt-[100px] pb-[50px] md:pt-0 md:pb-0 md:h-[500px] flex flex-col justify-center px-6 sm:px-10 md:px-20 bg-gradient-to-r from-[#F3F2EB] to-gray-50 rounded rounded-b-[50px] md:rounded-br-[6rem] md:rounded-bl-[6rem] shadow-sm">
        <div className="w-full">
          <div className="inline-block">
            <h1 className="font-arapey text-3xl sm:text-4xl md:text-6xl font-medium md:mb-4 animate-slideIn text-center md:text-left">
              <span className="font-header">Services</span>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1 }}
                className="h-[4px] w-[150px] sm:w-[250px] md:w-[900px] bg-[#EEB7AE] mt-2 mx-auto md:mx-0"
              />
            </h1>
          </div>
          <p className="text-gray-600 w-full mt-4 text-[20px] text-left">
          Our programs are designed to support personal growth, social connection, and overall well-being. From life skills training and community integration to social activities and health support, we provide participants with the tools, experiences, and confidence to thrive in everyday life.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="flex flex-col justify-center items-center bg-white w-full max-w-[1200px] px-6 sm:px-10 md:px-20 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 w-full">
          
          {/* Service Card 1 */}
          <div className="bg-[#F9F8F5] p-6 rounded-2xl shadow-sm text-center flex flex-col items-center">
            <Image
              src={img2}
              alt="Life Skills Training"
              width={500}
              height={400}
              className="rounded-xl w-full h-auto mb-4"
            />
            <div className="h-[66px] w-[90px] flex items-center justify-center bg-white shadow-sm rounded-2xl -mt-10">
              <Image src={s1} alt="Icon" width={40} height={40} className="rounded-xl" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 my-3">
              Life Skills Training
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
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
              className="rounded-xl w-full h-auto mb-4"
            />
            <div className="h-[66px] w-[90px] flex items-center justify-center bg-white shadow-sm rounded-2xl -mt-10">
              <Image src={s2} alt="Icon" width={40} height={40} className="rounded-xl" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 my-3">
              Social & Recreational Activities
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Building friendships and having fun are at the heart of our
              program. Through art, music, games, fitness, and group events,
              participants enjoy activities that spark creativity, teamwork, and joy.
            </p>
          </div>

          {/* Service Card 3 */}
          <div className="bg-[#f9f9f7] p-6 rounded-2xl shadow-sm text-center flex flex-col items-center">
            <Image
              src={img2}
              alt="Community Integration"
              width={500}
              height={400}
              className="rounded-xl w-full h-auto mb-4"
            />
            <div className="h-[66px] w-[90px] flex items-center justify-center bg-white shadow-sm rounded-2xl -mt-10">
              <Image src={s3} alt="Icon" width={40} height={40} className="rounded-xl" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 my-3">
              Community Integration
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
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
              className="rounded-xl w-full h-auto mb-4"
            />
            <div className="h-[66px] w-[90px] flex items-center justify-center bg-white shadow-sm rounded-2xl -mt-10">
              <Image src={s4} alt="Icon" width={40} height={40} className="rounded-xl" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 my-3">
              Health & Wellness Support
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
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
      <section className="px-6 sm:px-10 md:px-20 py-12 md:py-16 bg-[#F6F4EE] w-full text-left">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">Schedule a visit</h2>
        <p className="text-gray-600 mb-6 text-sm sm:text-base max-w-full md:max-w-2xl">
        We’d love to meet you and show you around. Schedule a visit to tour our facility, ask questions, and see firsthand what our program offers. Let us know your preferred date and time — we’ll work with you to make your first visit as comfortable and informative as possible.
        </p>
        <Link href="/schedule">
          <button className="px-6 py-3 bg-[#0E1A2B] text-white rounded-lg hover:bg-[#1a2a40] transition">
          Arrange Your Visit
          </button>
        </Link>
      </section>

    </div>
  );
}
