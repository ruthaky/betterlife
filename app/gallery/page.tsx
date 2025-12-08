"use client";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  // Gallery images with categories
  const images = [
    { src: "/asset/activity2.jpeg", alt: "Gallery 6", category: "Activities" },
    { src: "/asset/facility.jpg", alt: "Gallery 1", category: "Facility" },
    { src: "/asset/img2.webp", alt: "Gallery 2", category: "Community" },
    { src: "/asset/care2.jpg", alt: "Gallery 3", category: "Activities" },
    { src: "/asset/facility2.jpeg", alt: "Gallery 4", category: "Facility" },
    { src: "/asset/img2.webp", alt: "Gallery 5", category: "Community" },
    { src: "/asset/activity1.jpg", alt: "Gallery 6", category: "Activities" },
    { src: "/asset/facility3.webp", alt: "Gallery 7", category: "Facility" },
    { src: "/asset/care3.jpg", alt: "Gallery 8", category: "Community" },
    { src: "/asset/facility4.webp", alt: "Gallery 7", category: "Facility" },
    { src: "/asset/activity3.jpg", alt: "Gallery 6", category: "Activities" },
  ];

  // Filter images based on selected category
  const filteredImages =
    selectedCategory === "ALL"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  // Motion variants for images
  const imageVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -10, scale: 0.98 },
  };

  return (
    <>
      <Head>
        <title>Gallery | Better Life Adult Program</title>
      </Head>

      <div className="w-full flex flex-col items-center pt-[120px] md:pt-[150px] px-5 md:px-0">
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
        <div className="flex flex-wrap gap-8 mb-12 text-gray-600 font-medium">
          {["ALL", "Facility", "Community", "Activities"].map((cat) => (
            <button
              key={cat}
              className={`pb-1 ${
                selectedCategory === cat
                  ? "text-[#0f1c24] border-b-2 border-[#0f1c24]"
                  : "hover:text-[#0f1c24]"
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid with AnimatePresence */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 w-full max-w-7xl mx-auto auto-rows-[220px]">
        <AnimatePresence mode="popLayout">
  {filteredImages.map((img, i) => (
    <motion.div
      key={img.src}
      className={`relative w-full h-full ${
        i % 2 !== 0 ? "md:translate-y-8" : ""
      }`}
      variants={imageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.05 }}
      layout
    >
      <Image
        src={img.src}
        alt={img.alt}
        fill
        className="rounded-2xl object-cover"
        sizes="(max-width: 768px) 100vw,
               (max-width: 1200px) 50vw,
               25vw"
        priority={i < 2}
      />
    </motion.div>
  ))}
</AnimatePresence>

        </div>

        {/* Schedule Section */}
        <section className="px-4 md:px-20 py-16 w-full bg-[#F6F4EE] text-left mt-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Schedule a visit
          </h2>
          <p className="text-gray-600 mb-6 text-[18px] sm:text-base max-w-2xl">
            We’d love to meet you and show you around. Schedule a visit to tour
            our facility, ask questions, and see firsthand what our program
            offers. Let us know your preferred date and time — we’ll work with
            you to make your first visit as comfortable and informative as
            possible.
          </p>
          <Link href="/schedule">
            <button className="px-6 py-3 bg-[#0E1A2B] text-white rounded-lg hover:bg-[#1a2a40] transition">
              Arrange Your Visit
            </button>
          </Link>
          {/* <Link href="/contact-us">
            <button className="px-6 py-3 bg-[#0E1A2B] text-white rounded-lg hover:bg-[#1a2a40] transition">
              Contact Us
            </button>
          </Link> */}
        </section>
      </div>
    </>
  );
}
