"use client"
import { motion } from "framer-motion";

import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us | Better Life Adult Program</title>
      </Head>

      <div className="w-full">
    {/* Banner Section */}
    <section className="h-[500px] flex flex-col justify-center px-6 md:px-20 bg-gradient-to-r from-[#F3F2EB] to-gray-50 rounded-br-[6rem] rounded-bl-[6rem] shadow-sm">
        <div className="w-full">
        <div className="inline-block">
        <h1
          className={`font-arapey text-[40px] sm:text-5xl md:text-6xl font-medium md:mb-4 animate-slideIn`}
        >
          <span className="font-header">Secure your slot</span>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1 }}
            className="h-[4px] w-[200px] sm:w-[300px] lg:w-[900px] bg-[#B9D2B6] mt-0 mx-auto"
          />
        </h1>
      </div>
          <p className="text-gray-600 w-full">
          Over 70 countries, one incredible journey. Over 70 countries, one incredible journeyOver 70 countries, one incredible journeyOver 70 countries, one incredible journeyOver 70 countries, one incredible journeyOver 70 countries, one incredible journey. Over 70 countries, one incredible journeyOver 70 countries, one incredible journeyOver 70 countries, one incredible journeyOver 70 countries, one incredible journeyOver 70 countries, one incredible journey. Over 70 countries, one incredible journeyOver 70 countries, one incredible journeyOver 70 countries, one incredible journeyOver 70 countries, one incredible journey
          </p>
        </div>
      </section>

        {/* Contact Form */}
        <section className="flex flex-col items-left justify-center px-20 py-28">
          <div className="w-full max-w-3xl">
            <h2 className="text-3xl font-bold text-[#0f1c24] mb-2">Get In Touch</h2>
            <p className="text-gray-600 mb-6">Get a quick response from our team.</p>

            <form className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="border-b border-gray-300 focus:outline-none focus:border-[#0f1c24] py-2"
              />
              <input
                type="email"
                placeholder="Email"
                className="border-b border-gray-300 focus:outline-none focus:border-[#0f1c24] py-2"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="border-b border-gray-300 focus:outline-none focus:border-[#0f1c24] py-2"
              />
              <textarea
                placeholder="Message"
                className="border-b border-gray-300 focus:outline-none focus:border-[#0f1c24] py-2"
              ></textarea>

              <button
                type="submit"
                className="bg-[#0f1c24] text-white px-6 py-2 rounded-md w-24"
              >
                Send
              </button>
            </form>
          </div>
        </section>

        
      </div>
    </>
  );
}
