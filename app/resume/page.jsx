"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import Social from "@/components/Social";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// about data
const about = {
  title: "About me",
  description:
    "You can find me on social media platforms like LinkedIn, Twitter, and GitHub from the social-links below",

  info: [
    {
      fieldName: "Name",
      fieldValue: "Bibek Thapa",
    },
    {
      fieldName: "Phone",
      fieldValue: "+44 7459939217",
    },
    {
      fieldName: "Experience",
      fieldValue: "Graduate",
    },
    {
      fieldName: "LinkedIn",
      fieldValue: "/bibek---thapa",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Nepalese",
    },
    {
      fieldName: "Email",
      fieldValue: "thapabibekuk55@gmail.com",
    },
    {
      fieldName: "Available",
      fieldValue: "yes",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Nepali",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "A summary of my professional journey, highlighting my roles in technology and operations at leading organizations such as Correlation One and Amazon.. ",
  items: [
    {
      company: "Correlation One",
      position: "Information Technology Program",
      duration: "2024 - Present",
    },
    {
      company: "Amazon",
      position: "Inbound Flow Operation",
      duration: "2022 - Present",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "I am dedicated to ongoing education and continuous professional development, aiming to enhance my knowledge and expertise in the field of technology.",
  items: [
    {
      institution: "Northumbria University UK",
      degree: "MSc CyberSecurity",
      duration: "2024 - 2026",
    },
    {
      institution: "Ulster University UK",
      degree: "BSc (Hons) Computing System",
      duration: "2019 - 2022",
    },
    {
      institution: "CompTIA",
      degree: "Security+ certificate",
      duration: "April 2025",
    },
    {
      institution: "Rapti Engineering College",
      degree: "Diploma in Computer Engineering",
      duration: "2018",
    },
    {
      institution: "Tryhackme.com",
      degree: "Learning & Practice",
      duration: "2022 - Present",
    },
  ],
};

// skills data
const skills = {
  title: "My skills",
  description: "I have developed a diverse skill set that I continuously refine, concentrating on robust security practices and effective incident management within the evolving technology landscape.",
  skillList: [
    { name: "Network Security", text: "Network Security" },
    { name: "Penetration Testing", text: "Penetration Testing" },
    { name: "Incident Response", text: "Incident Response" },
    { name: "Security Information and Event Management", text: "SIEM" },
    { name: "Malware Analysis", text: "Malware Analysis" },
    { name: "Digital Forensics", text: "Digital Forensics" },
    { name: "Threat Intelligence", text: "Threat Intelligence" },
    { name: "Information&Governance", text: "Information Governance" },
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
        transition: { duration: 0.2, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
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
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
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
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
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
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group text-center">
                              <span className="text-2xl text-white group-hover:text-red-600 transition-all duration-300">
                                {skill.text}
                              </span>
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
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
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
              </div>
            </TabsContent>
          </div>
        </Tabs>
        <div className="flex justify-center xl:justify-start mt-8">
          <Social 
            containerStyles="flex gap-6 relative -right-[500px]"
            iconStyles="text-2xl text-accent hover:text-pink-600 transition-all duration-300"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
