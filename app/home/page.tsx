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

  // Scroll listener for dark mode effect
  useEffect(() => {
    const handleScroll = () => {
      if (!servicesRef.current) return;
      const rect = servicesRef.current.getBoundingClientRect();

      const appearOffset = window.innerHeight / 3; // appears later
      const leaveOffset = 200; // leaves sooner

      if (rect.top <= appearOffset && rect.bottom >= leaveOffset) {
        setDarkMode(true);
      } else {
        setDarkMode(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      id: 0,
      title: "Life Skills Training",
      description:
        "We help participants build independence with skills like cooking, budgeting, transportation, and personal care—empowering them to thrive in daily life.",
      image: img2,
      color: "bg-[#7F649D]",
    },
    {
      id: 1,
      title: "Social & Recreational",
      description:
        "Building friendships and having fun are at the heart of our program. Through art, music, games, fitness, and group events, participants enjoy activities that spark creativity, teamwork, and joy.",
      image: img2,
      color: "bg-[#97C4B9]",
    },
    {
      id: 2,
      title: "Community Integration",
      description:
        "We connect participants with meaningful roles in the community, from volunteering and supported employment to civic engagement and neighborhood involvement.",
      image: img2,
      color: "bg-[#EEB7AE]",
    },
    {
      id: 3,
      title: "Health & Wellness",
      description:
        "Our holistic wellness approach includes fitness, nutrition, mindfulness, and self-care activities designed to support both physical and emotional health.",
      image: img2,
      color: "bg-[#EFD3AA]",
    },
  ];

  const [activeService, setActiveService] = useState(services[0]);

  const faqs = [
    {
      question: "What is the mission of this day program?",
      answer:
        "Our mission is to provide meaningful, person-centered services for adults with developmental and intellectual disabilities—encouraging participation, choice, creativity, and community connection.",
    },
    {
      question: "Who is eligible to join the program?",
      answer:
        "We serve adults with developmental or intellectual disabilities. Each participant brings their own interests and goals, and together we build a plan tailored to their unique needs and aspirations.",
    },
    {
      question: "How does daily scheduling work?",
      answer:
        "Participants choose their daily activities upon arrival from the activities we are providing at the facility. A visible schedule board helps individuals plan their own day—from creative arts and social activities to vocational tasks and community outings.",
    },
    {
      question: "What types of activities are offered?",
      answer: `Our offerings may include:
- Art and creative workshops (e.g., open studio time, crafts)  
- Recreational and social events (e.g., games, karaoke, group hangouts)  
- Vocational experiences (e.g., supported work, community tasks)  
- Fitness, life skills, or other personalized offerings based on interest`,
    },
    {
      question: "When does the program operate?",
      answer:
        "We offer services Monday through Friday, with both morning and afternoon sessions, designed to accommodate flexible schedules.",
    },
    {
      question: "How much choice do participants have?",
      answer:
        "Participants have a high level of autonomy. Each person chooses daily activities and participates in planning long-term goals. We emphasize individual freedom and self-direction.",
    },
    { question: "Who runs the program?", answer: "Our staff are creative, caring professionals who support participants and develop programming. Team members introduce new activity options based on participants’ interests.", },
    { question: "How many participants do you serve?", answer: "We are building a small, supportive community. As we grow, we will scale thoughtfully to maintain quality and flexibility.", }, { question: "Can newcomers try out the program before committing?", answer: "Yes—prospective participants may visit for a tour, join a single day, or observe activities to experience our environment and programming firsthand.", },
    { question: "How do I enroll, and is there financial support?", answer: "Enrollment involves a consultation to understand needs and goals, followed by program orientation. We accept Oregon’s developmental disability funding options and can help navigate funding resources (e.g., ODDS or Medicaid).", },
    { question: "How do you involve families and guardians?", answer: "Families and guardians are invited to participate in planning discussions, share daily preferences, and stay connected with our team. We foster open communication and collaborative planning.", }, { question: "What makes this program different?", answer: "- Choice-driven: Participants decide daily and longer-term activities - Dynamic scheduling: A living board adapts based on interest and engagement - Creative, responsive staff: Team members co-create and evolve programming - Community and vocational integration: Options for both social and meaningful work experience" },
  ];

  const displayedFaqs = showAll ? faqs : faqs.slice(0, 5);

  // Framer Motion variants
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <main
      className={`font-sans transition-colors duration-500 text-[#0E1A2B] ${
        darkMode ? "bg-[#F4F2EC]" : "bg-[#FAFAF9]"
      }`}
    >
      {/* Hero Section */}
      <section className="h-screen relative flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-gradient-to-r from-[#DBDBDB] from-5% via-[#F5F5F5] via-30% to-[#F4F2EC] to-100% rounded rounded-b-[100px]">
        <Image
          src={bg}
          alt="Hero"
          width={220}
          height={700}
          className="absolute top-0 left-0 rounded-3xl w-full object-cover h-full z-1 opacity-80"
        />
        <div className="max-w-lg z-10">
          <h1 className="text-4xl md:text-[85px] w-[600px] font-bold leading-[0.90]">
            We Are <br />
            <span>Committed to </span>
            <br />
            <span className="text-[#97C4B9]"> Quality Care</span>
          </h1>
          <p className="text-gray-600 mt-4">
            Over 70 countries, one incredible journey. Over 70 countries, one incredible
            journeyOver 70 countries,
          </p>
          <button className="mt-6 px-6 py-3 bg-[#0E1A2B] text-white rounded-lg shadow-md hover:bg-[#1a2a40] transition">
            <Link href="/schedule">Schedule a tour</Link>
            
          </button>
        </div>
        <div className="mt-10 md:mt-0 flex gap-6 px-18 w-1/2 z-10">
          <Image
            src={img1}
            alt="Hero"
            width={220}
            height={700}
            className="rounded-3xl w-[450px] object-cover h-[450px]"
          />
        </div>
      </section>

      {/* Who We Are */}
      <section className="text-center px-6 md:px-20 py-[100px] flex flex-col items-center justify-center">
        <p className="text-center text-[50px] font-bold mb-10">
          Who we are
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "70%" }}
            transition={{ duration: 1 }}
            className="h-[3px] w-[200px] sm:w-[300px] lg:w-[900px] bg-[#97C4B9] -mt-2 mx-auto"
          />
        </p>
        <p className="text-gray-600 mx-auto">
          Over 70 countries, one incredible journey. Over 70 countries, one incredible
          journeyOver 70 countries, one incredible journeyOver 70 countries, one
          incredible journeyOver 70 countries, one incredible journeyOver 70 countries,
          one incredible journey. Over 70 countries, one incredible journeyOver 70
          countries, one incredible journeyOver 70 countries, one incredible journeyOver
          70 countries,
        </p>
        <br />
        <p className="text-gray-600 mx-auto">
          Over 70 countries, one incredible journey. Over 70 countries, one incredible
          journeyOver 70 countries, one incredible journeyOver 70 countries, one
          incredible journeyOver 70 countries, one incredible journeyOver 70 countries,
          one incredible journey.
        </p>
        <button className="mt-6 px-6 py-3 bg-[#0E1A2B] text-white rounded-lg hover:bg-[#1a2a40] transition">
          <Link href="/about"> Read More</Link>
        </button>
      </section>

      {/* Services Section */}
      <section
        ref={servicesRef}
        className="px-6 md:px-20 py-16 min-h-screen flex flex-col items-center justify-center"
      >
        <p className="text-center text-[50px] font-bold mb-10">
          Our Services
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "70%" }}
            transition={{ duration: 1 }}
            className="h-[3px] w-[200px] sm:w-[300px] lg:w-[900px] bg-[#97C4B9] -mt-2 mx-auto"
          />
        </p>

        {/* Service Buttons */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {services.map((service) => (
            <motion.button
              key={service.id}
              onClick={() => setActiveService(service)}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                activeService.id === service.id
                  ? `${service.color} text-white shadow-lg scale-100`
                  : "bg-white text-gray-800 hover:scale-103"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {service.title}
            </motion.button>
          ))}
        </div>

        {/* Active Service Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              className="space-y-4"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-[40px] font-semibold mb-4">{activeService.title}</h3>
              <p className="text-gray-600 mb-6">{activeService.description}</p>
              <motion.button
                className="bg-[#0E1A2B] px-6 py-3 text-white rounded-lg hover:opacity-90 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/services">Read More</Link>
              
              </motion.button>
            </motion.div>

            <motion.div
              key={activeService.id + "-image"}
              className="flex items-center justify-center"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <Image
                  src={activeService.image}
                  alt={activeService.title}
                  width={450}
                  height={350}
                  className="rounded-3xl object-cover shadow-lg"
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 md:px-20 py-16 flex flex-col items-center">
        <h2 className="text-[50px] font-bold mb-12">Frequently Asked Questions  <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80%" }}
            transition={{ duration: 1 }}
            className="h-[3px] w-[200px] sm:w-[300px] lg:w-[900px] bg-[#97C4B9] -mt-2 mx-auto"
          /></h2>

        <div className="w-full space-y-4">
          {displayedFaqs.map((faq, i) => (
            <motion.div
              key={i}
              className="border-b border-[#F6F4EE] pb-3 cursor-pointer"
              onClick={() => setActiveFAQ(activeFAQ === i ? null : i)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="flex justify-between items-center">
                <span className="font-medium text-[#0E1A2B]">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    activeFAQ === i ? "rotate-180" : ""
                  }`}
                />
              </div>
              <AnimatePresence>
                {activeFAQ === i && (
                  <motion.p
                    className="mt-3 text-gray-600 whitespace-pre-line"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className='w-full'> {faqs.length > 5 && (
          <motion.button
            onClick={() => setShowAll(!showAll)}
            className="mt-6 py-3 text-black rounded-lg transition-all duration-300 "
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {showAll ? "- Show Less" : "+ View All"}
            <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1 }}
            className="h-[1px] w-[200px] sm:w-[300px] lg:w-[900px] bg-[#97C4B9] mt-1 mx-auto"
          />
          </motion.button>
        )}</div>
       
      </section>

      {/* Schedule Section */}
      <section className="px-6 md:px-20 py-16 bg-[#F6F4EE] text-left">
        <h2 className="text-[60px] font-bold mb-4">Schedule a visit</h2>
        <p className="text-gray-600 mb-6">
          Visit. Ask questions. Every guest is different and we are ready to discuss
          your loved one’s specific needs so we can accommodate them. That’s what makes
          Coleman different.
        </p>
        <button className="px-6 py-3 bg-[#0E1A2B] text-white rounded-lg hover:bg-[#1a2a40] transition">
          <Link href="/schedule">Schedule</Link>
   
        </button>
      </section>
    </main>
  );
}
