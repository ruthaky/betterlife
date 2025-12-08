"use client";
import { motion } from "framer-motion";
import Head from "next/head";
import { useState } from "react";
import { SOCIAL_LINKS } from "@/lib/social-links";
import Link from "next/link";

export default function Contact() {
  const initialFormData = {
    name: "",
    email: "",
    phonenumber: "",
    message: "",
  };
  const phoneNumbers = [
    { display: "(971) 384-4053", tel: "+19713844053" },
    { display: "(832) 605-2242", tel: "+18326052242" },
    { display: "(469) 986-9639", tel: "+14699869639" },
  ];
  const phoneLink = SOCIAL_LINKS.find((link) => link.name === "Phone");
  const emailLink = SOCIAL_LINKS.find((link) => link.name === "Email");
  const PhoneIcon = phoneLink?.Icon;
  const EmailIcon = emailLink?.Icon;
  const otherLinks = SOCIAL_LINKS.filter(
    (link) => link.name !== "Phone" && link.name !== "Email"
  );

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
  
      let result: Record<string, unknown> = {};
      try {
        result = await response.json();
      } catch {
        // If response is empty or invalid JSON
        result = { error: "Server returned invalid response" };
      }
  
      if (response.ok) {
        setStatus("Form submitted successfully!");
        setIsSuccess(true);
        setFormData(initialFormData); // reset form
      } else {
        setStatus(`Error: ${result.error || "Failed to submit the form."}`);
        setIsSuccess(false);
      }
    } catch (error: unknown) {
      const err = error as Error;
      console.error("Error submitting form:", err);
      setStatus(`An error occurred: ${err.message || "Please try again later."}`);
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
          <p className="text-gray-600 w-full mt-4 text-[20px] text-left">
          Connect with us today, and let’s explore what Better Life can offer. Whether you’re searching for compassionate care, meaningful programs, or a welcoming community, we’re here to walk with you every step of the way. Our team is ready to answer your questions, guide you through our services, and help you or your loved one take the next step toward a more fulfilling and independent life.
          </p>
        </div>
        <div className="flex flex-col gap-4 mt-4">
                {phoneLink && PhoneIcon && (
                  <div className="flex items-center gap-4 flex-wrap">
                    <Link
                      href={phoneLink.href}
                      aria-label={phoneLink.name}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/70 text-black transition hover:bg-white"
                    >
                      <PhoneIcon className="h-5 w-5" />
                    </Link>
                    <div className="flex flex-row gap-5 text-[16px] text-gray-700 leading-tight">
                      {phoneNumbers.map(({ display, tel }) => (
                        <a
                          key={tel}
                          href={`tel:${tel}`}
                          className="hover:text-[#0f1c24] transition-colors"
                        >
                          {display}  ,
                        </a>
                      ))}
                    </div>
                  </div>
                )}
                {emailLink && EmailIcon && (
                  <div className="flex items-center gap-4">
                    <Link
                      href={emailLink.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={emailLink.name}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/70 text-black transition hover:bg-white"
                    >
                      <EmailIcon className="h-5 w-5" /> 
                    </Link>
                    <div className="flex flex-row gap-5 text-[16px] text-gray-700 leading-tight">
                    betterlifellc8@gmail.com
                    </div>
                  </div>
                )}
                {otherLinks.length > 0 && (
                  <div className="flex flex-wrap gap-3">
                    {otherLinks.map(({ name, href, Icon }) => {
                      const opensInNewTab = href.startsWith("http");
                      return (
                        <Link
                          key={name}
                          href={href}
                          target={opensInNewTab ? "_blank" : undefined}
                          rel={opensInNewTab ? "noreferrer" : undefined}
                          aria-label={name}
                          className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/70 text-black transition hover:bg-white"
                        >
                          <Icon className="h-5 w-5" />
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
      </section>

        {/* Contact Form */}
        <section className="flex flex-col items-left justify-center px-6 sm:px-10 md:px-20 py-16 md:py-28">
          <div className="w-full max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md: mb-6">Get in touch</h2>
            <p className="text-gray-600 mb-6 text-[18px] sm:text-base">
            We’re here to help. Whether you have a question, want to arrange a visit, or just want to learn more — our team is ready to respond quickly.
            </p>

            <form onSubmit={handleSubmit}  className="flex flex-col space-y-4">
              <input
                 placeholder="Name"
                type="text"
               id="name"
                value={formData.name}
                onChange={handleInputChange}
                className="border-b border-gray-300 focus:outline-none focus:border-[#0f1c24] py-2 text-[18px] sm:text-base"
              />
              <input
                 placeholder="Email"
                type="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                className="border-b border-gray-300 focus:outline-none focus:border-[#0f1c24] py-2 text-[18px] sm:text-base"
              />
              <input
                 placeholder="Phone Number"
                type="number"
                id="phonenumber"
                value={formData.phonenumber}
                onChange={handleInputChange}
                className="border-b border-gray-300 focus:outline-none focus:border-[#0f1c24] py-2 text-[18px] sm:text-base"
              />
              <textarea
               id="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
                className="border-b border-gray-300 focus:outline-none focus:border-[#0f1c24] py-2 text-[18px] sm:text-base"
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
