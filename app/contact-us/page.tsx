"use client";
import { motion } from "framer-motion";
import Head from "next/head";
import { useState } from "react";

export default function Contact() {
  const initialFormData = {
    name: "",
    email: "",
    phonenumber: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState("");
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null); 

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Submitting...");
    setIsSuccess(null);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("Form submitted successfully!");
        setIsSuccess(true);
        setFormData(initialFormData); // reset form
      } else {
        setStatus(`Error: ${result.error || "Failed to submit the form."}`);
        setIsSuccess(false);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("An error occurred. Please try again later.");
      setIsSuccess(false);
    }
  };

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

            <form onSubmit={handleSubmit}  className="flex flex-col space-y-4">
              <input
                 placeholder="Name"
                type="text"
               id="name"
                value={formData.name}
                onChange={handleInputChange}
                className="border-b border-gray-300 focus:outline-none focus:border-[#0f1c24] py-2 text-sm sm:text-base"
              />
              <input
                 placeholder="Email"
                type="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                className="border-b border-gray-300 focus:outline-none focus:border-[#0f1c24] py-2 text-sm sm:text-base"
              />
              <input
                 placeholder="Phone Number"
                type="number"
                id="phonenumber"
                value={formData.phonenumber}
                onChange={handleInputChange}
                className="border-b border-gray-300 focus:outline-none focus:border-[#0f1c24] py-2 text-sm sm:text-base"
              />
              <textarea
               id="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
                className="border-b border-gray-300 focus:outline-none focus:border-[#0f1c24] py-2 text-sm sm:text-base"
                rows={4}
              ></textarea>

              <button
                type="submit"
                className="bg-[#0f1c24] text-white px-6 py-2 rounded-md w-full sm:w-32 md:w-24"
              >
                Send
              </button>{status && (
            <p className={`mt-4 font-semibold ${isSuccess ? "text-green-600" : "text-red-600"}`}>
              {status}</p> )}
            </form>
          </div>
        </section>

      </div>
    </>
  );
}
