"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

import WorkSliderBtns from "@/components/WorkSliderBtns";

export const projects = [
  {
    num: "01",
    category: "AI / NLP",
    title: "yoobaai",
    description:
      "A tone-aware Yorùbá NLP toolkit for text preprocessing, tokenization, normalization, and low-resource language AI research. Implements readability scoring, sentiment analysis, linguistic complexity measurement, and vocabulary diversity assessment for Yorùbá text.",
    stack: [
      { name: "Python" },
      { name: "NLP" },
      { name: "Tokenization" },
      { name: "Linguistics" },
      { name: "AI Research" },
    ],
    image: "/assets/work/yoobaai.jpg",
    hasVideo: false,
    live: "https://github.com/Marvellous-is-cool/yoobaai",
    github: "https://github.com/Marvellous-is-cool/yoobaai",
  },
  {
    num: "02",
    category: "Backend / AI",
    title: "Imbyher API",
    description:
      "Scalable AI-powered messaging backend for high-volume WhatsApp and SMS automation. Built with FastAPI featuring asynchronous task orchestration, Redis-backed rate limiting, secure RBAC, AI inference integration, and payment processing.",
    stack: [
      { name: "FastAPI" },
      { name: "Python" },
      { name: "Redis" },
      { name: "Celery" },
      { name: "WhatsApp API" },
      { name: "SMS API" },
    ],
    image: "/assets/work/imbyher.jpg",
    hasVideo: false,
    live: "https://imbyher.ai",
    github: "https://github.com/Marvellous-is-cool/imbyherapi",
  },
  {
    num: "03",
    category: "Fullstack",
    title: "lodgeinternet",
    description:
      "A full-stack hostel internet and TV subscription management platform built with Next.js 14. Features Firebase Admin SDK, Redis caching, rate limiting, authentication, email services, and an admin dashboard. Live with 55+ users across 3 hostels.",
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Firebase" },
      { name: "Redis" },
      { name: "Tailwind CSS" },
    ],
    image: "/assets/work/lodgeinternet.jpg",
    hasVideo: false,
    live: "https://lodgeinternet.com",
    github: "https://github.com/thedevcool/lodgeinternet",
  },
  {
    num: "04",
    category: "Fullstack + ML",
    title: "Yiniz + YinizAI",
    description:
      "A comprehensive multi-purpose platform featuring blogs, e-commerce, and educational testing system with an integrated ML microservice. YinizAI uses Random Forest models for question difficulty prediction, answer scoring, and comprehension clustering. Final year project — scored an A.",
    stack: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MySQL" },
      { name: "FastAPI" },
      { name: "Python" },
      { name: "Scikit-learn" },
    ],
    image: "/assets/work/yiniz.png",
    hasVideo: false,
    live: "https://yiniz.com",
    github: "https://github.com/Marvellous-is-cool/yiniz",
  },
  {
    num: "05",
    category: "Backend",
    title: "transdom",
    description:
      "A full-stack logistics platform with a FastAPI + MongoDB backend for shipping rates and pricing, and a Next.js/TypeScript frontend. Features authentication, email service, shipping zone analysis tools, and RESTful endpoints. Live at transdomlogistics.com.",
    stack: [
      { name: "FastAPI" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "MongoDB" },
      { name: "Auth" },
      { name: "REST API" },
    ],
    image: "/assets/work/transdom.jpg",
    hasVideo: false,
    live: "https://transdomlogistics.com",
    github: "https://github.com/Marvellous-is-cool/transdom",
  },
  {
    num: "06",
    category: "Fullstack",
    title: "ASF Votes",
    description:
      "A full-stack voting system with user authentication, real-time voting, dynamic results dashboard, and Paystack payment integration for seamless transactions.",
    stack: [
      { name: "Next.js" },
      { name: "Firebase" },
      { name: "Paystack API" },
      { name: "Auth" },
      { name: "JavaScript" },
    ],
    image: "/assets/work/asf_votes.jpg",
    hasVideo: false,
    live: "https://asf-ikire.vercel.app",
    github: "https://github.com/Marvellous-is-cool/asfikire",
  },
  {
    num: "07",
    category: "Fullstack",
    title: "paytrack",
    description:
      "A payment tracking application built for client project management. Features program management, payment tracking, and administrative controls.",
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "Tailwind CSS" },
    ],
    image: "/assets/work/paytrack.jpg",
    hasVideo: false,
    live: "https://paytrackbytini.vercel.app",
    github: "https://github.com/thedevcool/paytrack",
  },
  {
    num: "08",
    category: "Fullstack",
    title: "Fyblincssa",
    description:
      "A comprehensive Next.js application for final year university students. Features student registration, activity management, and personalized student ID card generation with multiple design variants.",
    stack: [
      { name: "Next.js" },
      { name: "React" },
      { name: "Firebase" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
    ],
    image: "/assets/work/fyblincssa.jpg",
    hasVideo: false,
    live: "https://fyblinc.vercel.app",
    github: "https://github.com/Marvellous-is-cool/fyblincssa",
  },
  {
    num: "09",
    category: "Automation",
    title: "Bots Suite",
    description:
      "A collection of production-grade Python bots built for various platforms including WhatsApp, Telegram, Discord, and web automation. Covers chatbots, trading bots, scrapers, and task automation — demonstrating versatile backend automation engineering.",
    stack: [
      { name: "Python" },
      { name: "Automation" },
      { name: "APIs" },
      { name: "Webhooks" },
      { name: "Async" },
    ],
    image: "/assets/work/bots_suite.jpg",
    hasVideo: false,
    live: "",
    github: "https://github.com/Marvellous-is-cool?tab=repositories&q=bot",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const [showVideo, setShowVideo] = useState(false);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
    setShowVideo(false);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl: justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {project.title}
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="text-[12px] text-accent max-w-[15ch] overflow-hidden whitespace-normal break-words"
                    >
                      {item.name}
                      {index !== project.stack.length - 1 && " . "}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                {project.live && (
                <Link target="_blank" href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                )}
                {project.github && (
                <Link target="_blank" href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                )}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            {project.hasVideo && (
              <div className="flex items-center justify-center gap-4 mb-4">
                <span
                  className={`text-sm ${
                    !showVideo ? "text-accent" : "text-white/60"
                  } transition-colors duration-300`}
                >
                  Showcase
                </span>
                <div className="relative">
                  <input
                    type="checkbox"
                    id="video-toggle"
                    className="sr-only"
                    checked={showVideo}
                    onChange={() => setShowVideo(!showVideo)}
                  />
                  <label
                    htmlFor="video-toggle"
                    className="flex items-center cursor-pointer"
                  >
                    <div
                      className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
                        showVideo ? "bg-accent" : "bg-white/20"
                      }`}
                    >
                      <div
                        className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                          showVideo ? "translate-x-7" : ""
                        }`}
                      ></div>
                    </div>
                  </label>
                </div>
                <span
                  className={`text-sm ${
                    showVideo ? "text-accent" : "text-white/60"
                  } transition-colors duration-300`}
                >
                  Video Demo
                </span>
              </div>
            )}

            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 button-0 w-full h-full bg-black/10 z-10"></div>

                      <div className="relative w-full h-full">
                        {showVideo && project.hasVideo ? (
                          <video
                            className="w-full h-full object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="metadata"
                          >
                            <source src={project.video} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        ) : (
                          <Image
                            src={project.image}
                            fill
                            className="object-cover"
                            alt={project.title}
                          />
                        )}
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
