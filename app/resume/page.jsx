"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFilePowerpoint,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs, SiMysql } from "react-icons/si";

// why data
const why = {
  title: "Why hire me",
  description:
    "Leveraging my expertise in technology and professionalism, I create innovative solutions that merge technological skills with creative insight, delivering exceptional results that align with business objectives and propel success.",
};

// about data
const about = {
  title: "About me",
  description:
    "A versatile software developer with 6 years of experience in programming, technology solutions, and non-technical fields such as graphic design, presentation design, and communication strategy deployment. Diverse skill set allows to deliver comprehensive, creative, and impactful solutions that meet both technical and business needs.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Marvellous Adebayo",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+234) 813 373 0145",
    },
    {
      fieldName: "Experience",
      fieldValue: "6+ Years",
    },
    {
      fieldName: "LinkedIn",
      fieldValue: "adebayo-inioluwa-marvellous-5a3bab23a",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Nigerian",
    },
    {
      fieldName: "Email",
      fieldValue: "adebayoinioluwamarvellous1@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Yoruba, Spanish, French",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Delivered a wide range of projects, from web and mobile applications to API integrations and automation solutions. Expertise spans across multiple programming languages and technologies, of efficient, scalable, and user-centric solutions.",
  items: [
    {
      company: "Tini Technologies Limited.",
      position: "Founder/Software Developer",
      duration: "2024 - Present",
    },
    {
      company: "Yiniz",
      position: "Lead Software Developer",
      duration: "2024",
    },
    {
      company: "Alusoft Technologies Limited.",
      position: "Software Developer",
      duration: "2022 - 2023",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Comprising of various aspects ranging from code related, to non-code related fields",
  items: [
    {
      institution: "Osun State University, Osun State",
      degree: "Linguistics & Communication Studies",
      duration: "2021 - 2025 (estimated)",
    },
    {
      institution: "Online Course",
      degree: " Programming Course",
      duration: "2023 - 2024",
    },
    {
      institution: "Alusoft Technologies Limited",
      degree: "Certified Software Developer",
      duration: "2022 - 2023",
    },
    {
      institution: "Udemy",
      degree: "Complete Javascript Course",
      duration: "2022",
    },
    {
      institution: "Sololearn",
      degree: "Coding For Marketers",
      duration: "2021",
    },
    {
      institution: "Sololearn",
      degree: "Full Stack Web Development",
      duration: "2018 - 2023",
    },
    {
      institution: "The Polytechnic of Ibadan, Oyo State",
      degree: "Mass Communication",
      duration: "2018 - 2021",
    },
    {
      institution: "G.H. Computer Center",
      degree: "Computer Knowledge & Graphics Design",
      duration: "2018",
    },
  ],
};

// skills
const skills = {
  title: "My skills",
  description:
    "Proficient in a variety of programming languages and tools, with a focus on delivering high-quality, scalable solutions. My skill set includes full-stack development, API integration, automation, and expertise in modern web and mobile technologies",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <SiMysql />,
      name: "MySql",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <FaFilePowerpoint />,
      name: "PowerPoint Presentation",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        {/* why hire me */}
        <div className="flex flex-col gap-[30px] mb-12">
          <h3 className="text-4xl font-bold">{why.title}</h3>
          <p className="map-w-[600px] text-white/60 mx-auto xl:mx-0">
            {why.description}
          </p>
        </div>
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 0.2, duration: 0.4, ease: "easeIn" },
                }}
                className="flex flex-col gap-[30px] text-center xl:text-left"
              >
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </motion.div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 0.2, duration: 0.4, ease: "easeIn" },
                }}
                className="flex flex-col gap-[30px] text-center xl:text-left"
              >
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </motion.div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 0.2, duration: 0.4, ease: "easeIn" },
                }}
                className="flex flex-col gap-[30px]"
              >
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 0.2, duration: 0.4, ease: "easeIn" },
                }}
                className="flex flex-col gap-[30px]"
              >
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="map-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
