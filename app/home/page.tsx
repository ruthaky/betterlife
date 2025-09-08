'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import img1 from "@/public/asset/Frame 87.png";
import img2 from "@/public/asset/img2.webp";
import bg from "@/public/asset/bg.png";
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!servicesRef.current) return;
      const rect = servicesRef.current.getBoundingClientRect();
      const appearOffset = window.innerHeight / 3;
      const leaveOffset = 200;
      if (rect.top <= appearOffset && rect.bottom >= leaveOffset) {
        setDarkMode(true);
      } else {
        setDarkMode(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [ { id: 0, title: "Life Skills Training", description: "We help participants build independence with skills like cooking, budgeting, transportation, and personal care—empowering them to thrive in daily life.", image: img2, color: "bg-[#7F649D]", }, { id: 1, title: "Social & Recreational", description: "Building friendships and having fun are at the heart of our program. Through art, music, games, fitness, and group events, participants enjoy activities that spark creativity, teamwork, and joy.", image: img2, color: "bg-[#97C4B9]", }, { id: 2, title: "Community Integration", description: "We connect participants with meaningful roles in the community, from volunteering and supported employment to civic engagement and neighborhood involvement.", image: img2, color: "bg-[#EEB7AE]", }, { id: 3, title: "Health & Wellness", description: "Our holistic wellness approach includes fitness, nutrition, mindfulness, and self-care activities designed to support both physical and emotional health.", image: img2, color: "bg-[#EFD3AA]", }, ];
  const [activeService, setActiveService] = useState(services[0]);

  const faqs = [
    { question: "What is the mission of this day program?", answer: "Our mission is to provide meaningful, person-centered services..." },
    { question: "Who is eligible to join the program?", answer: "We serve adults with developmental or intellectual disabilities..." },
    { question: "How does daily scheduling work?", answer: "Participants choose their daily activities..." },
    { question: "What types of activities are offered?", answer: `Our offerings may include:\n- Art and creative workshops...\n- Social events...` },
    { question: "When does the program operate?", answer: "We offer services Monday through Friday..." },
    { question: "When does the program operate?", answer: "We offer services Monday through Friday..." },
    { question: "When does the program operate?", answer: "We offer services Monday through Friday..." },
  ];

  const displayedFaqs = showAll ? faqs : faqs.slice(0, 5);

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <main className={`font-sans transition-colors duration-500 text-[#0E1A2B] overflow-x-hidden ${darkMode ? "bg-[#F4F2EC]" : "bg-[#FAFAF9]"}`}>

      {/* Hero Section */}
      <section className="h-screen relative flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-20 py-12 bg-gradient-to-r from-[#DBDBDB] via-[#F5F5F5] to-[#F4F2EC] rounded-b-[50px]">
        <Image src={bg} alt="Hero" fill className="absolute top-0 left-0 object-cover opacity-80" />
        <div className="max-w-lg z-10 text-left">
        <h1 className="text-[50px] md:text-[85px] md:w-[600px] font-bold leading-[0.90]"> We Are <br /> <span>Committed to </span> <br /> <span className="text-[#97C4B9]"> Quality Care</span> </h1>
          <p className="text-gray-600 mt-4 text-sm sm:text-base">
            Over 70 countries, one incredible journey. Over 70 countries, one incredible journey...
          </p>
          <Link href="/schedule">
            <button className="mt-6 px-6 py-3 bg-[#0E1A2B] text-white rounded-lg shadow-md hover:bg-[#1a2a40] transition">
              Schedule a tour
            </button>
          </Link>
        </div>
        <div className="mt-10 md:mt-0 flex justify-center w-full md:w-1/2 z-10">
          <Image src={img1} alt="Hero" className="rounded-3xl w-[350px] sm:w-[350px] md:w-[450px] h-auto object-cover" />
        </div>
      </section>

      {/* Who We Are */}
      <section className="text-left md:text-center px-6 md:px-20 py-16 flex flex-col items-center">
      <p className="text-left md:text-center text-[40px] md:text-[50px] font-bold mb-10"> Who we are <motion.div initial={{ width: 0 }} animate={{ width: "70%" }} transition={{ duration: 1 }} className="h-[3px] w-[200px] sm:w-[300px] lg:w-[900px] bg-[#97C4B9] -mt-2 mx-auto" /> </p>
      <p className="text-gray-600 mx-auto"> Over 70 countries, one incredible journey. Over 70 countries, one incredible journeyOver 70 countries, one incredible journeyOver 70 countries, one incredible journeyOver 70 . Over 70 countries, one incredible journeyOver 70 countries, one incredible journeyOver 70 countries, oourney. </p>
        <div className='w-full flex items-start'><Link href="/about">
          <button className="mt-6 px-6 py-3 bg-[#0E1A2B] text-white rounded-lg hover:bg-[#1a2a40] transition">
            Read More
          </button>
        </Link></div>
        
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="px-6 md:px-20 py-16 min-h-screen flex flex-col items-center">
      <p className="text-center text-[40px] md:text-[50px] font-bold mb-10"> Our Services <motion.div initial={{ width: 0 }} animate={{ width: "70%" }} transition={{ duration: 1 }} className="h-[3px] w-[200px] sm:w-[300px] lg:w-[900px] bg-[#97C4B9] -mt-2 mx-auto" /> </p>

        {/* Service Buttons */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10">
          {services.map((service) => (
            <motion.button
              key={service.id}
              onClick={() => setActiveService(service)}
              className={`px-4 py-2 rounded-full text-sm sm:text-base transition-all duration-300 ${
                activeService.id === service.id
                  ? `${service.color} text-white shadow-lg`
                  : "bg-white text-gray-800 hover:scale-105"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {service.title}
            </motion.button>
          ))}
        </div>

        {/* Active Service Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              className="space-y-4 text-center md:text-left"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">{activeService.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{activeService.description}</p>
              <motion.div key={activeService.id + "-image"} className="flex justify-center">
              <Image src={activeService.image} alt={activeService.title} className="rounded-3xl object-cover shadow-lg w-[350px] sm:w-[350px] md:w-[450px] h-auto" />
            
            </motion.div>  <div className='w-full flex items-left'><Link href="/services">
                <motion.button className="bg-[#0E1A2B] px-6 py-3 text-white rounded-lg hover:opacity-90 transition-all duration-300">
                  Read More
                </motion.button>
              </Link></div>
              
            </motion.div>
           
          </AnimatePresence>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 md:px-20 py-16 flex flex-col items-left">
    <div className='w-full flex justify-center items-center'> <h2 className="text-[40px] md:text-[50px] font-bold mb-12">Frequently Asked Questions <motion.div initial={{ width: 0 }} animate={{ width: "80%" }} transition={{ duration: 1 }} className="h-[3px] w-[200px] sm:w-[300px] lg:w-[900px] bg-[#97C4B9] -mt-2 mx-auto" /></h2></div>  
        <div className="w-full max-w-full space-y-4">
          {displayedFaqs.map((faq, i) => (
            <motion.div
              key={i}
              className="border-b border-[#F8F4EE] pb-3 cursor-pointer"
              onClick={() => setActiveFAQ(activeFAQ === i ? null : i)}
            >
              <div className="flex justify-between items-center">
                <span className="font-medium text-sm sm:text-base text-[#0E1A2B]">{faq.question}</span>
                <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform ${activeFAQ === i ? "rotate-180" : ""}`} />
              </div>
              <AnimatePresence>
                {activeFAQ === i && (
                  <motion.p className="mt-3 text-gray-600 text-sm sm:text-base whitespace-pre-line" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}>
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      {/* View All Button */} <div className='w-full'> {faqs.length > 5 && ( <motion.button onClick={() => setShowAll(!showAll)} className="mt-6 py-3 text-black rounded-lg transition-all duration-300 " whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} > {showAll ? "- Show Less" : "+ View All"} <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1 }} className="h-[1px] w-[200px] sm:w-[300px] lg:w-[900px] bg-[#97C4B9] mt-1 mx-auto" /> </motion.button> )}</div>
      </section>

      {/* Schedule Section */}
      <section className="px-6 md:px-20 py-16 bg-[#F6F4EE] text-left">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Schedule a visit</h2>
        <p className="text-gray-600 mb-6 text-sm sm:text-base max-w-2xl">
          Visit. Ask questions. Every guest is different and we are ready to discuss your loved one’s specific needs...
        </p>
        <Link href="/schedule">
          <button className="px-6 py-3 bg-[#0E1A2B] text-white rounded-lg hover:bg-[#1a2a40] transition">
            Schedule
          </button>
        </Link>
      </section>
    </main>
  );
}
