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

// components
import WorkSliderBtns from "@/components/WorkSliderBtns";

export const projects = [
  {
    num: "01",
    category: "AI Solution",
    title: "Imbyher.ai",
    description:
      "An AI-powered messaging platform that helps users schedule and send messages with emotional intelligence. Features message scheduling, AI-powered text enhancement, WhatsApp & SMS integration, and secure local storage for privacy.",
    stack: [
      { name: "React.js" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "AI/ML" },
      { name: "WhatsApp API" },
      { name: "SMS API" },
    ],
    image: "/assets/work/imbyher.jpg",
    video: "/assets/work/videos/imbyher_demo.mp4",
    hasVideo: true,
    live: "https://imbyher.ai",
    github: "https://github.com/Marvellous-is-cool",
  },
  {
    num: "02",
    category: "Fullstack",
    title: "Fyblincssa",
    description:
      "A comprehensive NextJS application designed for final year university students. Features student registration, activity management, and personalized student ID card generation with multiple design variants. Built with Firebase for robust data management.",
    stack: [
      { name: "Next.js" },
      { name: "React.js" },
      { name: "Firebase" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
    ],
    image: "/assets/work/fyblincssa.jpg",
    video: "/assets/work/videos/fyblincssa_demo.mp4",
    hasVideo: true,
    live: "https://fyblincssa.vercel.app",
    github: "https://github.com/Marvellous-is-cool/fyblincssa",
  },
  {
    num: "03",
    category: "Frontend",
    title: "Genz Fine Dining",
    description:
      "An elegant fine dining restaurant landing page featuring asymmetric modern designs and smooth animations. Built with React.js to showcase culinary excellence through compelling visual storytelling.",
    stack: [
      { name: "React.js" },
      { name: "CSS3" },
      { name: "JavaScript" },
      { name: "HTML5" },
      { name: "Framer Motion" },
    ],
    image: "/assets/work/genz_restaurant.png",
    video: "/assets/work/videos/genz_demo.mp4",
    hasVideo: false,
    live: "https://genzrestaurant.netlify.app",
    github: "https://github.com/Marvellous-is-cool/genz-restaurant",
  },
  {
    num: "04",
    category: "Fullstack",
    title: "Yiniz",
    description:
      "A comprehensive multi-purpose platform featuring blogs, gaming center, e-commerce, educational testing system, and learning hub. Built with Node.js and MySQL for scalable performance.",
    stack: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MySQL" },
      { name: "EJS" },
      { name: "Bootstrap" },
      { name: "JavaScript" },
    ],
    image: "/assets/work/yiniz.png",
    video: "/assets/work/videos/yiniz_demo.mp4",
    hasVideo: false,
    live: "https://yiniz.com",
    github: "https://github.com/Marvellous-is-cool/yiniz",
  },
  {
    num: "05",
    category: "Frontend",
    title: "GPT-3 Showcase",
    description:
      "A modern product showcase landing page for GPT-3 technology, featuring asymmetric design elements and interactive components built with React.js.",
    stack: [
      { name: "React.js" },
      { name: "CSS3" },
      { name: "JavaScript" },
      { name: "HTML5" },
    ],
    image: "/assets/work/gpt3.png",
    hasVideo: false,
    live: "https://exploregpt-3.netlify.app",
    github: "https://github.com/Marvellous-is-cool/GPT-3",
  },
  {
    num: "06",
    category: "Frontend",
    title: "Lincssa Bash",
    description:
      "An immersive event landing page for the Lincssa Bash celebration, featuring dynamic animations and responsive design to capture the excitement of the event.",
    stack: [
      { name: "React.js" },
      { name: "CSS3" },
      { name: "JavaScript" },
      { name: "HTML5" },
    ],
    image: "/assets/work/lincssa_bash.png",
    hasVideo: false,
    live: "https://lincssabash.netlify.app",
    github: "https://github.com/Marvellous-is-cool/bash-landing",
  },
  {
    num: "07",
    category: "Frontend",
    title: "Coda Recruiters",
    description:
      "A professional recruitment landing page designed to attract top talent to Coda company. Features modern UI/UX design with interactive elements and responsive layouts.",
    stack: [
      { name: "React.js" },
      { name: "CSS3" },
      { name: "JavaScript" },
      { name: "HTML5" },
    ],
    image: "/assets/work/coda_recruit.png",
    video: "/assets/work/videos/coda_demo.mp4",
    hasVideo: false,
    live: "https://codarecruiters.netlify.app",
    github: "https://github.com/Marvellous-is-cool/codarecruiters",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const [showVideo, setShowVideo] = useState(false);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
    // Reset to image view when changing projects
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
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold    leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
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
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
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
                {/* github project button */}
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
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            {/* Video/Image Toggle - Only show if project has video */}
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
                      {/* overlay */}
                      <div className="absolute top-0 button-0 w-full h-full bg-black/10 z-10"></div>

                      {/* Video or Image based on toggle */}
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
              {/* slider buttons */}
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
