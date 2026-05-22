"use client";

import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaPlug,
  FaBrain,
  FaFlask,
  FaDocker,
  FaAws,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiMysql,
  SiFirebase,
  SiMongodb,
  SiFastapi,
  SiPostgresql,
  SiCelery,
  SiStripe,
} from "react-icons/si";

// why data
const why = {
  title: "Why hire me",
  description:
    "I build backend systems that are scalable, secure, and production-ready. With deep expertise in Python, FastAPI, distributed architectures, and AI/NLP, I deliver solutions that go beyond requirements — clean APIs, reliable payment flows, and intelligent automation.",
};

// about data
export const about = {
  title: "About me",
  description:
    "A backend-focused software engineer with 6 years of experience in Python, Node.js, and cloud-native development. Skilled in designing distributed systems, RESTful APIs, payment integrations, and AI-powered backends. Background in computational linguistics adds a unique depth to NLP and language technology projects.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Inioluwa Adebayo",
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
      fieldValue: "adebayo-inioluwa-m",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Nigerian",
    },
    {
      fieldName: "Email",
      fieldValue: "adebayoinioluwamarv\nellous1@gmail.com",
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
export const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Designed and shipped production-grade backend systems, RESTful APIs, and AI-integrated platforms. Experience spans fintech, education, logistics, and communication — delivering scalable, well-architected solutions end-to-end.",
  items: [
    {
      company: "Mico Technologies",
      position: "Senior Backend Engineer",
      duration: "2025",
    },
    {
      company: "Tini Technologies (freelancing brand)",
      position: "Founder/Software Developer",
      duration: "2024 - Present",
    },
    {
      company: "Yiniz",
      position: "Lead Software Developer",
      duration: "2024",
    },
    {
      company: "Alusoft Technologies",
      position: "Software Developer",
      duration: "2022 - 2023",
    },
  ],
};

// education data
export const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Academic background spanning computational linguistics and software engineering",
  items: [
    {
      institution: "Osun State University",
      degree: "B.A. Linguistics & Communication Studies (Computational Linguistics)",
      duration: "2021 - 2025",
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
      institution: "The Polytechnic, Ibadan",
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
export const skills = {
  title: "My skills",
  description:
    "Core expertise in backend engineering, distributed systems, API design, and AI/NLP. Proficient in Python, FastAPI, Node.js, and cloud-native technologies.",
  skillList: [
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <SiNextdotjs />,
      name: "TypeScript",
    },
    {
      icon: <SiFastapi />,
      name: "FastAPI",
    },
    {
      icon: <FaFlask />,
      name: "Django",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <SiPostgresql />,
      name: "PostgreSQL",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
    },
    {
      icon: <FaReact />,
      name: "Redis",
    },
    {
      icon: <SiFirebase />,
      name: "Firebase",
    },
    {
      icon: <FaPlug />,
      name: "REST APIs",
    },
    {
      icon: <FaBrain />,
      name: "AI / NLP",
    },
    {
      icon: <SiCelery />,
      name: "Celery",
    },
    {
      icon: <FaDocker />,
      name: "Docker",
    },
    {
      icon: <FaAws />,
      name: "AWS",
    },
    {
      icon: <SiStripe />,
      name: "Stripe",
    },
    {
      icon: <SiTailwindcss />,
      name: "Paystack",
    },
  ],
};

// achievements data
export const achievements = {
  title: "Achievements",
  description:
    "Notable accomplishments and milestones achieved throughout my career in software development, technology solutions, and professional growth.",
  items: [
    {
      achievement:
        "Developed yoobaai — a tone-aware Yoruba NLP toolkit for low-resource language AI research",
      date: "2025",
    },
    {
      achievement:
        "Completed final year project on ML-powered educational testing system with A grade",
      date: "2025",
    },
    {
      achievement:
        "Built lodgeinternet — live platform serving 55+ users across 3 hostels",
      date: "2026",
    },
    {
      achievement:
        "Founded Tini Technologies — freelancing brand serving multiple clients",
      date: "2024",
    },
    {
      achievement:
        "Led software development team at Yiniz — multi-platform web application with ML integration",
      date: "2024",
    },
    {
      achievement:
        "Certified Software Developer at Alusoft Technologies Limited",
      date: "2022-2023",
    },
    {
      achievement:
        "Earned AWS Cloud Practitioner certification",
      date: "2025",
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
import LinkedInBadge from "@/components/LinkedInBadge";

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
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
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

                {/* LinkedIn Badge */}
                <div className="flex justify-center xl:justify-start">
                  <LinkedInBadge
                    theme="dark"
                    size="medium"
                    showIcon={false}
                    className="bg-[#232329] p-4 rounded-xl"
                  />
                </div>

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

            {/* achievements */}
            <TabsContent
              value="achievements"
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
                <h3 className="text-4xl font-bold">{achievements.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {achievements.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {achievements.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] py-6 px-8 rounded-xl flex flex-col justify-center items-center lg:items-start gap-3 min-h-[140px]"
                        >
                          <span className="text-accent font-semibold">
                            {item.date}
                          </span>
                          <p className="text-white text-sm leading-relaxed text-center lg:text-left">
                            {item.achievement}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </motion.div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
