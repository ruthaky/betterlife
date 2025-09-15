'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <main className="font-sans bg-[#FAFAF7] text-[#0E1A2B]">

      {/* Banner Section */}
      <section className="h-auto pt-[100px] pb-[50px] md:pt-0 md:pb-0 md:h-[500px] flex flex-col justify-center px-6 sm:px-10 md:px-20 bg-gradient-to-r from-[#F3F2EB] to-gray-50 rounded rounded-b-[50px] md:rounded-br-[6rem] md:rounded-bl-[6rem] shadow-sm">
        <div className="w-full">
          <div className="inline-block">
            <h1 className="font-arapey text-3xl sm:text-4xl md:text-6xl font-medium md:mb-4 animate-slideIn text-center md:text-left">
              <span className="font-header">About Us</span>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1 }}
                className="h-[4px] w-[150px] sm:w-[250px] md:w-[900px] bg-[#EEB7AE] mt-2 mx-auto md:mx-0"
              />
            </h1>
          </div>
          <p className="text-gray-600 w-full mt-4 text-[20px] text-left">
          Better Life Adult Program is a nurturing and empowering space dedicated to helping adults build meaningful lives filled with dignity, independence, and connection. We offer personalized support, skill-building, and community integration so that every day is a chance to grow, connect, and thrive.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="flex flex-col justify-center px-6 sm:px-10 md:px-20 py-12 md:py-20">
  <h2 className="text-2xl sm:text-3xl font-bold mb-8 md:mb-10 text-left">
    Our Core Values
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 h-auto md:h-[200px]">
    {/* Card 1 */}
    <div className="relative group p-4 sm:p-6 flex items-center justify-center rounded-2xl bg-[#E3F3F0] text-center font-medium cursor-pointer overflow-hidden">
      <span className="text-lg sm:text-xl md:text-[25px] transition-all duration-300 group-hover:opacity-0">
        Personalized care
      </span>
      <div className="absolute inset-0 flex items-center justify-center px-4 text-sm sm:text-base md:text-lg text-[#0f1c24] opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
        We tailor our services to meet individual needs, ensuring every person feels valued and supported.
      </div>
    </div>

    {/* Card 2 */}
    <div className="relative group p-4 sm:p-6 flex items-center justify-center rounded-2xl bg-[#F8EACB] text-center font-medium cursor-pointer overflow-hidden">
      <span className="text-lg sm:text-xl md:text-[25px] transition-all duration-300 group-hover:opacity-0">
        Empowerment
      </span>
      <div className="absolute inset-0 flex items-center justify-center px-4 text-sm sm:text-base md:text-lg text-[#0f1c24] opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
        We help individuals build confidence and independence by encouraging self-growth and resilience.
      </div>
    </div>

    {/* Card 3 */}
    <div className="relative group p-4 sm:p-6 flex items-center justify-center rounded-2xl bg-[#E1DFF3] text-center font-medium cursor-pointer overflow-hidden">
      <span className="text-lg sm:text-xl md:text-[25px] transition-all duration-300 group-hover:opacity-0">
        Community Connection
      </span>
      <div className="absolute inset-0 flex items-center justify-center px-4 text-sm sm:text-base md:text-lg text-[#0f1c24] opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
        Building strong connections to create a sense of belonging and mutual support within the community.
      </div>
    </div>

    {/* Card 4 */}
    <div className="relative group p-4 sm:p-6 flex items-center justify-center rounded-2xl bg-[#F8DBD5] text-center font-medium cursor-pointer overflow-hidden">
      <span className="text-lg sm:text-xl md:text-[25px] transition-all duration-300 group-hover:opacity-0">
        Compassionate Support
      </span>
      <div className="absolute inset-0 flex items-center justify-center px-4 text-sm sm:text-base md:text-lg text-[#0f1c24] opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
        Offering genuine care and empathy, ensuring people feel understood and never alone in their journey.
      </div>
    </div>
  </div>
</section>


      {/* History */}
      <section className="flex flex-col justify-center px-6 sm:px-10 md:px-20 py-12 md:py-20">
        <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-4 md:mb-6">Our History</h2>
        <p className="text-gray-600 text-sm sm:text-base md:text-base w-full mb-4">
        Better Life was founded in [Year] by [Founder's Name(s)] with a clear purpose: to create a supportive environment where adults receive the tools, respect, and opportunities they need to live fulfilling lives. What began as a small initiative has grown into a robust program, rooted in community, powered by dedicated professionals, and guided by a vision to make meaningful differences.
        </p>
        <p className="text-gray-600 text-sm sm:text-base md:text-base w-full">
        Better Life was founded in [Year] by [Founder's Name(s)] with a clear purpose: to create a supportive environment where adults receive the tools, respect, and opportunities they need to live fulfilling lives. What began as a small initiative has grown into a robust program, rooted in community, powered by dedicated professionals, and guided by a vision to make meaningful differences.
        </p>
      </section>

      {/* Family & Friends */}
      <section className="flex flex-col justify-center px-6 sm:px-10 md:px-20 relative py-12 md:py-20">
        <div
          className="absolute top-0 left-0 w-full h-16 md:h-20 bg-no-repeat bg-center"
          style={{ backgroundImage: 'url(/wave-pattern.png)' }}
        ></div>
        <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-4 md:mb-6">
          Family and Friends support network
        </h2>
        <p className="text-gray-600 text-sm sm:text-base md:text-base w-full mb-4">
        We recognize that meaningful growth happens together. Our program includes close collaboration with families, friends, and caregivers. Together we:

Share updates, goals, and progress so everyone is aligned.

Offer workshops, resources, and support to caregivers and loved ones.

Celebrate successes collectively, recognizing how relationships enrich participation and wellbeing.
        </p>
        <p className="text-gray-600 text-sm sm:text-base md:text-base w-full">
        We recognize that meaningful growth happens together. Our program includes close collaboration with families, friends, and caregivers. Together we:

Share updates, goals, and progress so everyone is aligned.

Offer workshops, resources, and support to caregivers and loved ones.

Celebrate successes collectively, recognizing how relationships enrich participation and wellbeing.
        </p>
      </section>

      {/* Team */}
      <section className="flex flex-col justify-center px-6 sm:px-10 md:px-20 py-12 md:py-20">
        <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-6">Our Team</h2>
        <p className="text-gray-600 text-sm sm:text-base md:text-base w-full mb-10 text-left">
        Our dedicated team brings together professional experience, passion, and compassion. From experienced caregivers, therapists, and activity coordinators to administrative staff, everyone at Better Life shares a single goal: helping each participant live a better life.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {Array.from({ length: 2 }).map((_, i) => (
            <div
              key={i}
              className="bg-white shadow rounded-2xl overflow-hidden text-center"
            >
              <Image
                src="/asset/teamplaceholder.png"
                alt="Team Member"
                width={300}
                height={300}
                className="w-full h-64 sm:h-60 md:h-64 object-cover"
              />
              <div className="p-4">
                <p className="text-xs sm:text-sm md:text-sm text-gray-500">CEO, Co-founder</p>
                <h3 className="font-semibold text-sm sm:text-base md:text-base">Jane Doe</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
