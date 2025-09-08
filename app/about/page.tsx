'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <main className="font-sans bg-[#FAFAF7] text-[#0E1A2B]">
      {/* Banner Section */}
      <section className="h-[500px] flex flex-col justify-center px-6 md:px-20 bg-gradient-to-r from-[#F3F2EB] to-gray-50 rounded-br-[6rem] rounded-bl-[6rem] shadow-sm">
        <div className="w-full">
        <div className="inline-block">
        <h1
          className={`font-arapey text-[40px] sm:text-5xl md:text-6xl font-medium md:mb-4 animate-slideIn`}
        >
          <span className="font-header">About Us</span>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1 }}
            className="h-[4px] w-[200px] sm:w-[300px] lg:w-[900px] bg-[#EEB7AE] mt-0 mx-auto"
          />
        </h1>
      </div>
          <p className="text-gray-600 w-full">
          Over 70 countries, one incredible journey. Over 70 countries, one incredible journeyOver 70 countries, one incredible journeyOver 70 countries, one incredible journeyOver 70 countries, one incredible journeyOver 70 countries, one incredible journey. Over 70 countries, one incredible journeyOver 70 countries, one incredible journeyOver 70 countries, one incredible journeyOver 70 countries, one incredible journeyOver 70 countries, one incredible journey. Over 70 countries, one incredible journeyOver 70 countries, one incredible journeyOver 70 countries, one incredible journeyOver 70 countries, one incredible journey
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="flex flex-col justify-center px-6 md:px-20 py-20">
        <h2 className="text-3xl font-bold mb-10">Our Core Values</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 h-[200px]">
          <div className="p-6 flex items-center justify-center  rounded-2xl bg-[#E3F3F0] text-center text-[25px] font-medium">
            Compassionate Support
          </div>
          <div className="p-6 flex items-center justify-center rounded-2xl bg-[#F8EACB] text-center text-[25px] font-medium">
            Empowerment
          </div>
          <div className="p-6 flex items-center justify-center rounded-2xl bg-[#E1DFF3] text-center text-[25px] font-medium">
            Community Connection
          </div>
          <div className="p-6 flex items-center justify-center rounded-2xl bg-[#F8DBD5] text-center text-[25px] font-medium">
            Compassionate Support
          </div>
        </div>
      </section>

      {/* History */}
      <section className=" flex flex-col justify-center px-6 md:px-20 py-20">
        <h2 className="text-3xl font-bold mb-6">Our History</h2>
        <p className="text-gray-600 w-full">
        Over 70 countries, one incredible journey. Over 70 countries, one incredible journeyOver 70 countries, one incredible journeyOver 70 countries, one incredible journeyOver 70 countries, one incredible journeyOver 70 countries, one incredible journey. Over 70 countries, one incredible journeyOver 70 countries, one incredible journeyOver 70 countries, one incredible journeyOver 70 countries, one incredible journeyOver 70 countries, one incredible journey. Over 70 countries, one incredible journeyOver 70 countries, one incredible journeyOver 70 countries, one incredible journeyOver 70 countries, one incredible journey
        </p>
<br></br>
        <p className="text-gray-600 w-full">
        Over 70 countries, one incredible journey. Over 70 countries, one incredible journeyOver 70 countries, one incredible journeyOver 70 countries, one incredible journeyOver 70 countries, one incredible journeyOver 70 countries, one incredible journey. Over 70 countries, one incredible journeyOver 70 countries, one incredible journeyOver 70 countries, one incredible journeyOver 70 countries, one incredible journeyOver 70 countries, one incredible journey. Over 70 countries, one incredible journeyOver 70 countries, one incredible journeyOver 70 countries, one incredible journeyOver 70 countries, one incredible journey
        </p>
      </section>

      {/* Family & Friends */}
      <section className="flex flex-col justify-center px-6 md:px-20 relative py-20">
        <div
          className="absolute top-0 left-0 w-full h-20 bg-no-repeat bg-center"
          style={{ backgroundImage: 'url(/wave-pattern.png)' }}
        ></div>
        <h2 className="text-3xl font-bold mb-6">
          Family and Friends support network
        </h2>
        <p className="text-gray-600 w-full">
        Over 70 countries, one incredible journey. Over 70 countries, one incredible journeyOver 70 countries, one incredible journeyOver 70 countries, one incredible journeyOver 70 countries, one incredible journeyOver 70 countries, one incredible journey. Over 70 countries, one incredible journeyOver 70 countries, one incredible journeyOver 70 countries, one incredible journeyOver 70 countries, one incredible journeyOver 70 countries, one incredible journey. Over 70 countries, one incredible journeyOver 70 countries, one incredible journeyOver 70 countries, one incredible journeyOver 70 countries, one incredible journey
        </p>
<br></br>
        <p className="text-gray-600 w-full">
        Over 70 countries, one incredible journey. Over 70 countries, one incredible journeyOver 70 countries, one incredible journeyOver 70 countries, one incredible journeyOver 70 countries, one incredible journeyOver 70 countries, one incredible journey. Over 70 countries, one incredible journeyOver 70 countries, one incredible journeyOver 70 countries, one incredible journeyOver 70 countries, one incredible journeyOver 70 countries, one incredible journey. Over 70 countries, one incredible journeyOver 70 countries, one incredible journeyOver 70 countries, one incredible journeyOver 70 countries, one incredible journey
        </p>
      </section>

      {/* Team */}
      <section className=" flex flex-col justify-center px-6 md:px-20 py-20">
        <h2 className="text-3xl font-bold mb-6">Our Team</h2>
        <p className="text-gray-600 max-w-4xl mb-10">
          Over 70 countries, one incredible journey. Over 70 countries, one
          incredible journey.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="bg-white shadow rounded-2xl overflow-hidden text-center"
            >
              <Image
                src="/asset/teamplaceholder.png"
                alt="Team Member"
                width={300}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-gray-500">CEO, Co-founder</p>
                <h3 className="font-semibold">Jane Doe</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

  
    
    </main>
  );
}
