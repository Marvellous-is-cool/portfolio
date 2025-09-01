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
    category: "frontend",
    title: "Genz Fine Dining",
    description:
      "A fine dining resturant landing page with asymeric designs using react.js",
    stack: [
      { name: "React.js" },
      { name: "Html" },
      { name: "Css" },
      { name: "JavaScript" },
    ],
    image: "/assets/work/genz_resturant.png",
    video: "/assets/work/videos/genz_demo.mp4", // Add video path
    hasVideo: true, // Flag to show if video is available
    live: "https://genzresturant.netlify.app",
    github: "https://github.com/Marvellous-is-cool/genz-resturant",
  },
  {
    num: "02",
    category: "fullstack",
    title: "Yiniz",
    description:
      "A full fledged, comprehensive and complex website for Yiniz comprising of Blogs, Games center, commerce, e-tests, and edu center",
    stack: [
      { name: "NodeJs" },
      { name: "Bootstrap" },
      { name: "Javascript" },
      { name: "ejs" },
      { name: "mysql" },
      { name: "express.js" },
    ],
    image: "/assets/work/yiniz.png",
    video: "/assets/work/videos/yiniz_demo.mp4",
    hasVideo: true,
    live: "https://yiniz.com",
    github: "https://github.com/Marvellous-is-cool/yiniz",
  },
  {
    num: "03",
    category: "frontend",
    title: "GPT-3",
    description:
      "A product showcase landing page, gpt-3, with asymeric designs using react.js",
    stack: [
      { name: "React.js" },
      { name: "Html" },
      { name: "Css" },
      { name: "JavaScript" },
    ],
    image: "/assets/work/gpt3.png",
    hasVideo: false, // No video available for this project
    live: "https://exploregpt-3.netlify.app",
    github: "https://github.com/Marvellous-is-cool/GPT-3",
  },
  {
    num: "04",
    category: "frontend",
    title: "Lincssa Bash",
    description: "An engrossed frontend design page for Lincssa bash event",
    stack: [
      { name: "React.js" },
      { name: "Html" },
      { name: "Css" },
      { name: "JavaScript" },
    ],
    image: "/assets/work/lincssa_bash.png",
    hasVideo: false,
    live: "https://lincssabash.netlify.app",
    github: "https://github.com/Marvellous-is-cool/bash-landing",
  },
  {
    num: "05",
    category: "frontend",
    title: "Coda Recuiters",
    description:
      "A frontend design page for recuiting members into coda company",
    stack: [
      { name: "React.js" },
      { name: "Html" },
      { name: "Css" },
      { name: "JavaScript" },
    ],
    image: "/assets/work/coda_recuit.png",
    video: "/assets/work/videos/coda_demo.mp4",
    hasVideo: true,
    live: "https://codarecuiters.netlify.app",
    github: "https://github.com/Marvellous-is-cool/codarecuiters",
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
