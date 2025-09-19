'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import img2 from "@/public/asset/06112024+-+InC-36.webp";
import img1 from "@/public/asset/two-storey-brick-building-standing-against-other-c-2023-11-27-05-27-43-utc-2-1.png";
import img3 from "@/public/asset/2014+1-1280w.webp";
import img4 from "@/public/asset/care2.jpg";
import s1 from "@/public/asset/Products/cib_skillshare.svg";
import s2 from "@/public/asset/Products/Vector.png";
import s3 from "@/public/asset/Products/Group.svg";
import s4 from "@/public/asset/Products/icon-park-outline_gymnastics.svg";
import Link from "next/link";

export default function ServicesPage() {
  

  return (
    <div className="w-full flex flex-col items-center justify-center">

    {/* Banner Section */}
    <section className="h-auto pt-[100px] pb-[50px] md:pt-0 md:pb-0 md:h-[500px] flex flex-col justify-center px-6 sm:px-10 md:px-20 bg-gradient-to-r from-[#F3F2EB] to-gray-50 rounded rounded-b-[50px] md:rounded-br-[6rem] md:rounded-bl-[6rem] shadow-sm">
        <div className="w-full">
          <div className="inline-block">
            <h1 className="font-arapey text-3xl sm:text-4xl md:text-6xl font-medium md:mb-4 animate-slideIn text-center md:text-left">
              <span className="font-header">Services</span>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1 }}
                className="h-[4px] w-[150px] sm:w-[250px] md:w-[900px] bg-[#EEB7AE] mt-2 mx-auto md:mx-0"
              />
            </h1>
          </div>
          <p className="text-gray-600 w-full mt-4 text-[20px] text-left">
          Our programs are designed to support personal growth, social connection, and overall well-being. From life skills training and community integration to social activities and health support, we provide participants with the tools, experiences, and confidence to thrive in everyday life.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="flex flex-col justify-center items-center bg-white w-full max-w-[1400px] px-6 sm:px-10 md:px-20 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 w-full">
          
          {/* Service Card 1 */}
          <div className="bg-[#F9F8F5] p-6 rounded-2xl shadow-sm text-center flex flex-col items-center">
            <Image
              src={img1}
              alt="Life Skills Training"
              width={500}
              height={400}
              className="rounded-xl w-full h-auto mb-4"
            />
            <div className="h-[66px] w-[90px] flex items-center justify-center bg-white shadow-sm rounded-2xl -mt-10">
              <Image src={s1} alt="Icon" width={40} height={40} className="rounded-xl" />
            </div>
            
            <section className="text-left">
<h2 className="text-2xl font-bold mb-4">Life Skills Training</h2>
<p>
At our day program, we believe that every individual deserves the opportunity to live as independently and confidently as possible. Our Life Skills Training program is designed to help adults with developmental disabilities develop practical skills they can use every day at home, in the community, and in their personal lives. We focus on teaching in a supportive, hands-on environment where participants can learn at their own pace and celebrate progress along the way.
</p>
<h3 className="text-xl font-semibold mt-6 mb-2">What We Teach</h3>
<ul className="list-disc list-inside space-y-2">
<li>
Personal Care & Hygiene
<ul className="list-[circle] ml-6">
<li>Grooming, bathing, and dressing</li>
<li>Meal preparation and healthy eating habits</li>
<li>Maintaining a clean and safe living space</li>
</ul>
</li>
<li>
Health & Wellness
<ul className="list-[circle] ml-6">
<li>Understanding nutrition and making balanced food choices</li>
<li>Learning exercise routines and relaxation techniques</li>
<li>Medication awareness and following health routines</li>
</ul>
</li>
<li>
Household & Daily Living
<ul className="list-[circle] ml-6">
<li>Cooking simple meals and using kitchen tools safely</li>
<li>Doing laundry, cleaning, and organizing personal belongings</li>
<li>Basic money management: budgeting, shopping, and paying bills</li>
</ul>
</li>
<li>
Communication & Social Skills
<ul className="list-[circle] ml-6">
<li>Practicing conversation and self-advocacy</li>
<li>Building friendships and resolving conflicts</li>
<li>Learning appropriate behavior in different settings</li>
</ul>
</li>
<li>
Community Integration
<ul className="list-[circle] ml-6">
<li>Using public transportation</li>
<li>Shopping in stores and ordering in restaurants</li>
<li>Exploring volunteer and vocational opportunities</li>
</ul>
</li>
</ul>
<h3 className="text-xl font-semibold mt-6 mb-2">Our Approach</h3>
<ul className="list-disc list-inside space-y-2">
<li>Individualized Support: Every participant’s goals are unique. We create personalized plans that meet their needs and encourage independence.</li>
<li>Hands-On Learning: Skills are taught through real-life practice, role-playing, and guided experiences both in the center and in the community.</li>
<li>Positive Reinforcement: We celebrate every success. Big or small because every step forward matters.</li>
</ul>
</section>
          </div>

          {/* Service Card 2 */}
          <div className="bg-[#f9f9f7] p-6 rounded-2xl shadow-sm text-center flex flex-col items-center">
            <Image
              src={img2}
              alt="Social & Recreational Activities"
              width={500}
              height={400}
              className="rounded-xl w-full h-auto mb-4"
            />
            <div className="h-[66px] w-[90px] flex items-center justify-center bg-white shadow-sm rounded-2xl -mt-10">
              <Image src={s2} alt="Icon" width={40} height={40} className="rounded-xl" />
            </div>
            <section className="text-left">
<h2 className="text-2xl font-bold mb-4">Social and Recreational Activities</h2>
<p>
We know that connection, fun, and friendships are an essential part of a fulfilling life. Our Social and Recreational Activities program is designed to encourage social interaction, creativity, and joy while helping adults with developmental disabilities build meaningful relationships and discover new interests.
</p>
<h3 className="text-xl font-semibold mt-6 mb-2">What We Offer</h3>
<ul className="list-disc list-inside space-y-2">
<li>
Creative Arts
<ul className="list-[circle] ml-6">
<li>Arts and crafts projects</li>
<li>Music, dance, and drama activities</li>
<li>Seasonal and holiday-themed projects</li>
</ul>
</li>
<li>
Recreational Fun
<ul className="list-[circle] ml-6">
<li>Indoor and outdoor games</li>
<li>Gardening, walking groups, and light sports</li>
<li>Group puzzles, board games, and team activities</li>
</ul>
</li>
<li>
Community Outings
<ul className="list-[circle] ml-6">
<li>Trips to parks, libraries, and museums</li>
<li>Attending local events, festivals, and recreational centers</li>
<li>Shopping, dining, and exploring new places together</li>
</ul>
</li>
<li>
Skill-Building Activities
<ul className="list-[circle] ml-6">
<li>Learning teamwork and cooperation</li>
<li>Practicing communication in group settings</li>
<li>Exploring hobbies and leisure interests that build confidence</li>
</ul>
</li>
</ul>
<h3 className="text-xl font-semibold mt-6 mb-2">Our Approach</h3>
<ul className="list-disc list-inside space-y-2">
<li>Inclusive Environment: Every participant is encouraged to join activities at their comfort level, with adaptations made to support individual needs.</li>
<li>Friendship and Connection: Activities are designed to help participants interact, build friendships, and practice social skills in a natural and supportive way.</li>
<li>Balanced Schedule: We offer a mix of structured programs and relaxed leisure time, giving participants both guidance and freedom to enjoy their day.</li>
</ul>
</section>
          </div>

          {/* Service Card 3 */}
          <div className="bg-[#f9f9f7] p-6 rounded-2xl shadow-sm text-center flex flex-col items-center">
            <Image
              src={img3}
              alt="Community Integration"
              width={500}
              height={400}
              className="rounded-xl w-full h-auto mb-4"
            />
            <div className="h-[66px] w-[90px] flex items-center justify-center bg-white shadow-sm rounded-2xl -mt-10">
              <Image src={s3} alt="Icon" width={40} height={40} className="rounded-xl" />
            </div>
            <section className="text-left">
<h2 className="text-2xl font-bold mb-4">Community Integration</h2>
<p>
We believe that everyone deserves the opportunity to be an active, valued member of their community. Our Community Integration program helps adults with developmental disabilities gain confidence, independence, and meaningful connections by participating in everyday community life.
</p>
<h3 className="text-xl font-semibold mt-6 mb-2">What We Offer</h3>
<ul className="list-disc list-inside space-y-2">
<li>
Daily Living in the Community
<ul className="list-[circle] ml-6">
<li>Shopping for groceries and household items</li>
<li>Dining out at restaurants and cafés</li>
<li>Visiting local libraries, recreation centers, and places of interest</li>
</ul>
</li>
<li>
Transportation Training
<ul className="list-[circle] ml-6">
<li>Learning how to safely use public transportation</li>
<li>Practicing travel planning and navigation</li>
<li>Exploring walking routes and community safety skills</li>
</ul>
</li>
<li>
Civic and Cultural Engagement
<ul className="list-[circle] ml-6">
<li>Attending local festivals, concerts, and cultural events</li>
<li>Participating in volunteer opportunities</li>
<li>Visiting museums, parks, and places of worship</li>
</ul>
</li>
<li>
Work and Vocational Readiness
<ul className="list-[circle] ml-6">
<li>Exploring volunteer roles and pre-vocational training</li>
<li>Practicing job-related skills in real-world settings</li>
<li>Building confidence to prepare for future employment opportunities</li>
</ul>
</li>
</ul>
<h3 className="text-xl font-semibold mt-6 mb-2">Our Approach</h3>
<ul className="list-disc list-inside space-y-2">
<li>Hands-On Learning: Skills are taught through real-life practice in community settings, with staff support every step of the way.</li>
<li>Individualized Support: Each participant’s goals are personalized to help them reach their highest level of independence.</li>
<li>Building Confidence: Every outing is designed to foster independence, problem-solving, and social interaction.</li>
</ul>
</section>
          </div>

          {/* Service Card 4 */}
          <div className="bg-[#f9f9f7] p-6 rounded-2xl shadow-sm text-center flex flex-col items-center">
            <Image
              src={img4}
              alt="Health & Wellness Support"
              width={500}
              height={400}
              className="rounded-xl w-full h-auto mb-4"
            />
            <div className="h-[66px] w-[90px] flex items-center justify-center bg-white shadow-sm rounded-2xl -mt-10">
              <Image src={s4} alt="Icon" width={40} height={40} className="rounded-xl" />
            </div>
            <section className="text-left">
<h2 className="text-2xl font-bold mb-4">Health and Wellness Support</h2>
<p>
Good health is the foundation for independence, confidence, and overall quality of life. Our Health and Wellness Support program helps adults with developmental disabilities build healthy routines, practice self-care, and develop lifelong habits that promote both physical and emotional well-being.
</p>
<h3 className="text-xl font-semibold mt-6 mb-2">What We Offer</h3>
<ul className="list-disc list-inside space-y-2">
<li>
Nutrition and Healthy Eating
<ul className="list-[circle] ml-6">
<li>Learning about balanced meals and portion sizes</li>
<li>Hands-on cooking and meal preparation</li>
<li>Making healthier food choices when shopping or dining out</li>
</ul>
</li>
<li>
Physical Fitness and Movement
<ul className="list-[circle] ml-6">
<li>Daily exercise routines tailored to ability and interest</li>
<li>Group fitness activities like walking clubs, stretching, or light sports</li>
<li>Fun recreational movement through dance, yoga, or games</li>
</ul>
</li>
<li>
Personal Health Routines
<ul className="list-[circle] ml-6">
<li>Practicing good hygiene and grooming habits</li>
<li>Medication awareness and support with health routines</li>
<li>Learning the importance of rest, hydration, and sleep</li>
</ul>
</li>
<li>
Emotional Well-Being
<ul className="list-[circle] ml-6">
<li>Stress management strategies such as relaxation techniques and mindfulness</li>
<li>Social-emotional activities that encourage self-expression and self-esteem</li>
<li>Encouragement to set personal health and wellness goals</li>
</ul>
</li>
</ul>
<h3 className="text-xl font-semibold mt-6 mb-2">Our Approach</h3>
<ul className="list-disc list-inside space-y-2">
<li>Individualized Care: We adapt activities to each participant’s abilities, preferences, and health needs.</li>
<li>Positive Environment: Our team encourages growth through gentle guidance, patience, and positive reinforcement.</li>
<li>Whole-Person Focus: We view health and wellness as more than just physical—it’s about creating balance and improving quality of life.</li>
</ul>
</section>
          </div>

        </div>
      </section>

      {/* Schedule Section */}
      <section className="px-6 sm:px-10 md:px-20 py-12 md:py-16 bg-[#F6F4EE] w-full text-left">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">Schedule a visit</h2>
        <p className="text-gray-600 mb-6 text-[18px] sm:text-base max-w-full md:max-w-2xl">
        We’d love to meet you and show you around. Schedule a visit to tour our facility, ask questions, and see firsthand what our program offers. Let us know your preferred date and time — we’ll work with you to make your first visit as comfortable and informative as possible.
        </p>
        <Link href="/schedule">
          <button className="px-6 py-3 bg-[#0E1A2B] text-white rounded-lg hover:bg-[#1a2a40] transition">
          Arrange Your Visit
          </button>
        </Link>
      </section>

    </div>
  );
}
