"use client";
import { motion } from "framer-motion";
import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us | Better Life Adult Program</title>
      </Head>

      <div className="w-full bg-white">

       {/* Banner Section */}
       <section className="h-auto pt-[100px] pb-[50px] md:pt-0 md:pb-0 md:h-[500px] flex flex-col justify-center px-6 sm:px-10 md:px-20 bg-gradient-to-r from-[#F3F2EB] to-gray-50 rounded rounded-b-[50px] md:rounded-br-[6rem] md:rounded-bl-[6rem] shadow-sm">
        <div className="w-full">
          <div className="inline-block">
            <h1 className="font-arapey text-3xl sm:text-4xl md:text-6xl font-medium md:mb-4 animate-slideIn text-center md:text-left">
              <span className="font-header">Secure your slot</span>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1 }}
                className="h-[4px] w-[150px] sm:w-[250px] md:w-[900px] bg-[#EEB7AE] mt-2 mx-auto md:mx-0"
              />
            </h1>
          </div>
          <p className="text-gray-600 w-full mt-4 text-sm sm:text-base md:text-base text-left">
          Over 70 countries, one incredible journey. Over 70 countries, one incredible journeyOver 70 countries, one incredible journeyOver 70 countries, one incredible journeyOver 70 countries, one incredible journeyOver 70 countries, one incredible journey. Over 70 countries, one incredible journeyOver 70 countries, one incredible journeyOver 70 countries, one incredible journeyOver 70 countries, one incredible journeyOver 70 countries, one incredible journey. Over 70 countries, one incredible journeyOver 70 countries, one incredible journeyOver 70 countries, one incredible journeyOver 70 countries, 
          </p>
        </div>
      </section>

        {/* Contact Form */}
        <section className="flex flex-col items-left justify-center px-6 sm:px-10 md:px-20 py-16 md:py-28">
          <div className="w-full max-w-3xl">
            <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-[#0f1c24] mb-2">Get In Touch</h2>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              Get a quick response from our team.
            </p>

            <form className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="border-b border-gray-300 focus:outline-none focus:border-[#0f1c24] py-2 text-sm sm:text-base"
              />
              <input
                type="email"
                placeholder="Email"
                className="border-b border-gray-300 focus:outline-none focus:border-[#0f1c24] py-2 text-sm sm:text-base"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="border-b border-gray-300 focus:outline-none focus:border-[#0f1c24] py-2 text-sm sm:text-base"
              />
              <textarea
                placeholder="Message"
                className="border-b border-gray-300 focus:outline-none focus:border-[#0f1c24] py-2 text-sm sm:text-base"
                rows={4}
              ></textarea>

              <button
                type="submit"
                className="bg-[#0f1c24] text-white px-6 py-2 rounded-md w-full sm:w-32 md:w-24"
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
