"use client";

import { PiArrowDownRightBold } from "react-icons/pi";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Why settle for ordinary when you can have extraordinary? I craft websites that don't just look good—they work like magic! From pixel-perfect designs to seamless API integrations and database sorcery, I bring your ideas to life with websites that are as responsive as they are robust. Let’s build you a digital presence that doesn’t just stand out—it steals the show!",
    href: "/contact?service=Web Development",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "Design that feels as good as it looks! I create intuitive, user-friendly interfaces that make every click a breeze. Let’s turn your vision into a seamless experience that users love!",
    href: "/contact?service=UI/UX Design",
  },
  {
    num: "03",
    title: "Bots Development/Management",
    description:
      "Whether it's smart chatbots, data scrapers, or trading bots, I build powerful, custom bots using JavaScript or Python that work on any platform. Let’s take your efficiency to the next level with automation that never sleeps.",
    href: "/contact?service=Bots Development/Management",
  },
  {
    num: "04",
    title: "Graphics Design",
    description:
      "Why settle for simple when you can have striking? I create designs that captivate and communicate! From eye-catching visuals to brand-perfect aesthetics, I transform your ideas into compelling designs that resonate. Let’s craft visuals that don’t just tell your story—they make it unforgettable!",
    href: "/contact?service=Graphics Design",
  },
  {
    num: "05",
    title: "Automation / Python Scripting",
    description:
      "Embrace the magic of automation with custom Python scripts! I design friendly solutions that simplify your tasks, boost efficiency, and help you overcome challenges effortlessly. Let’s transform those repetitive chores into seamless processes so you can focus on what truly matters!",
    href: "/contact?service=Automation / Python Scripting",
  },
  {
    num: "06",
    title: "SEO",
    description:
      "Boost your online visibility with data-driven SEO strategies that get results. From keyword research to on-page optimization, I help your website rank higher and attract the right audience. Let’s make sure your site gets the attention it deserves.",
    href: "/contact?service=SEO",
  },
  {
    num: "07",
    title: "Mobile App Development",
    description:
      "Leverage the power of React to create high-quality, scalable mobile applications tailored to your business needs. I specialize in delivering seamless user experiences and robust functionality across platforms. Let's transform your ideas into a polished app that stands out in today’s competitive market.",
    href: "/contact?service=Mobile App Development",
  },
  {
    num: "08",
    title: "API Integration",
    description:
      "Streamline your applications and enhance functionality with seamless API integration. I specialize in connecting diverse systems and services to ensure smooth data exchange and improved user experiences. Let me help you harness the full potential of your applications through robust and efficient API solutions.",
    href: "/contact?service=API Integration",
  },
  {
    num: "09",
    title: "Presentation Design",
    description:
      "Transform your ideas into compelling visual stories with expertly crafted presentations. I design engaging slides that captivate your audience and effectively convey your message. Let’s work together to create a presentation that not only looks great but also leaves a lasting impact.",
    href: "/contact?service=Presentation Design",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <PiArrowDownRightBold className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* heading */}
                <h2 className="text-[27px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
