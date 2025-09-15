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

  const services = [ { id: 0, title: "Life Skills Training", description: "We help participants develop everyday skills that increase independence and confidence. From cooking simple meals and managing money to practicing personal care and home responsibilities, our training prepares individuals for greater self-sufficiency.", image: img2, color: "bg-[#97C4B9]", }, { id: 1, title: "Social & Recreational", description: "Building friendships and having fun are at the heart of our program. Through art, music, games, fitness, and group events, participants enjoy activities that spark creativity, teamwork, and joy.", image: img2, color: "bg-[#97C4B9]", }, { id: 2, title: "Community Integration", description: "We believe everyone belongs in their community. Our program offers outings to local businesses, libraries, parks, and events, giving participants opportunities to connect with others, explore new experiences, and gain confidence in real-world settings.", image: img2, color: "bg-[#97C4B9]", }, { id: 3, title: "Health & Wellness Support", description: "Wellness is more than just physical health. We provide exercise classes, nutrition education, mindfulness activities, and personal safety workshops. These activities support both physical and emotional well-being, helping participants lead balanced and healthy lives.", image: img2, color: "bg-[#97C4B9]", }, ];
  const [activeService, setActiveService] = useState(services[0]);

  const faqs = [
    { question: "What is the mission of this day program?", answer: "Our mission is to provide meaningful, person-centered services for adults with developmental and intellectual disabilities—encouraging participation, choice, creativity, and community connection." },
    { question: "Who is eligible to join the program?", answer: "We serve adults with developmental or intellectual disabilities. Each participant brings their own interests and goals, and together we build a plan tailored to their unique needs and aspirations." },
    { question: "How does daily scheduling work?", answer: "Participants choose their daily activities upon arrival from the activities we are providing at the facility. A visible schedule board helps individuals plan their own day—from creative arts and social activities to vocational tasks and community outings." },
    { question: "What types of activities are offered?", answer: `Our offerings may include:\n- Art and creative workshops (e.g., open studio time, crafts)\n- Recreational and social events (e.g., games, karaoke, group hangouts)\n- Vocational experiences (e.g., supported work, community tasks)\n- Fitness, life skills, or other personalized offerings based on interest` },
    { question: "When does the program operate?", answer: "We offer services Monday through Friday, with both morning and afternoon sessions, designed to accommodate flexible schedules." },
    { question: "How much choice do participants have?", answer: "Participants have a high level of autonomy. Each person chooses daily activities and participates in planning long-term goals. We emphasize individual freedom and self-direction." },
    { question: "Who runs the program?", answer: "Our staff are creative, caring professionals who support participants and develop programming. Team members introduce new activity options based on participants’ interests." },
    { question: "How many participants do you serve?", answer: "We are building a small, supportive community. As we grow, we will scale thoughtfully to maintain quality and flexibility." },
    { question: "Can newcomers try out the program before committing?", answer: "Yes—prospective participants may visit for a tour, join a single day, or observe activities to experience our environment and programming firsthand." },
    { question: "How do I enroll, and is there financial support?", answer: "Enrollment involves a consultation to understand needs and goals, followed by program orientation. We accept Oregon’s developmental disability funding options and can help navigate funding resources (e.g., ODDS or Medicaid)." },
    { question: "How do you involve families and guardians?", answer: "Families and guardians are invited to participate in planning discussions, share daily preferences, and stay connected with our team. We foster open communication and collaborative planning." },
    { question: "What makes this program different?", answer: "- Choice-driven: Participants decide daily and longer-term activities\n - Dynamic scheduling: A living board adapts based on interest and engagement \n- Creative, responsive staff: Team members co-create and evolve programming \n- Community and vocational integration: Options for both social and meaningful work experience" },
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
          <p className="text-gray-600 mt-4 text-2xl">
          Empowering individuals to live richer, more independent lives — every day.
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
      <p className="text-gray-600 mx-auto text-[16px]"> At Better Life Adult Program, we believe everyone deserves to live with dignity, purpose, and joy. Our mission is to support adults by providing high-quality care, meaningful opportunities for growth, and a compassionate community where every individual is valued. Whether enhancing daily living skills, engaging in social and recreational activities, or receiving health-oriented support — we’re here to help people thrive.</p>
        <div className='w-full flex justify-center items-center'><Link href="/about">
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
              className="space-y-4 text-center md:text-left flex flex-col"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5 }}
            >
              <div><h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">{activeService.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{activeService.description}</p>
             
            <div className='w-full flex items-left mt-4'><Link href="/services">
                
                <motion.button className="bg-[#0E1A2B] px-6 py-3 text-white rounded-lg hover:opacity-90 transition-all duration-300">
                  Read More
                </motion.button>
              </Link></div>
              </div>
              
            </motion.div>  
            <motion.div key={activeService.id + "-image"} className="flex justify-center">
              <Image src={activeService.image} alt={activeService.title} className="rounded-3xl object-cover shadow-lg w-[350px] sm:w-[350px] md:w-[450px] h-auto" />
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
        We’d love to meet you and show you around. Schedule a visit to tour our facility, ask questions, and see firsthand what our program offers. Let us know your preferred date and time — we’ll work with you to make your first visit as comfortable and informative as possible.
        </p>
        <Link href="/schedule">
          <button className="px-6 py-3 bg-[#0E1A2B] text-white rounded-lg hover:bg-[#1a2a40] transition">
          Arrange Your Visit
          </button>
        </Link>
      </section>
    </main>
  );
}
