"use client";

import { PiArrowDownRightBold } from "react-icons/pi";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Backend API Development",
    description:
      "I design and build production-grade RESTful APIs and microservices using Python (FastAPI, Django) and Node.js (Express.js). From authentication and rate limiting to database architecture and async task processing, I deliver backend systems that are scalable, secure, and well-documented.",
    href: "/contact?service=Backend API Development",
  },
  {
    num: "02",
    title: "AI & NLP Systems",
    description:
      "Specializing in natural language processing and AI integration — from chatbot APIs and language model pipelines to low-resource language NLP. I build intelligent systems that process, analyze, and generate human language, including custom solutions for African languages.",
    href: "/contact?service=AI & NLP Systems",
  },
  {
    num: "03",
    title: "Automation & Bot Development",
    description:
      "From WhatsApp/SMS bots and Telegram automation to data scrapers and background job schedulers — I build reliable, event-driven automation systems in Python. Featuring webhook integration, task queuing with Celery, and real-time message processing at scale.",
    href: "https://tinibots.vercel.app/",
  },
  {
    num: "04",
    title: "Cloud Infrastructure & DevOps",
    description:
      "I set up and manage cloud infrastructure on AWS and Docker, implement CI/CD pipelines with GitHub Actions, and deploy applications with confidence. From containerization to production monitoring, I ensure your backend runs reliably at scale.",
    href: "/contact?service=Cloud Infrastructure & DevOps",
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
                <h2 className="text-[27px] md:text-[25px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
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
