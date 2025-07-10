"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaArrowRight,
} from "react-icons/fa";

import Social from "@/components/Social";
import Image from "next/image";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { useState } from "react";
import Folder3D from '@/components/Folder3D';
import Book3D from '@/components/Book3D';
import React, { useRef } from 'react';
import styles from '@/components/Book3D.module.css';

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
      fieldValue: "N/A",
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
      fieldValue: "N/A",
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
      duration: "In-progress - 2025",
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

// Dummy assignments data for 8 modules
const assignments = [
  {
    module: "Module 1",
    items: [
      {
        title: "Assignment 1",
        img: "/assets/assignments/module1-assignment1.png",
        pdf: "https://drive.google.com/file/d/1rTRWer7OnVXfCquEfTQp79fqzPhwcfJG/view?usp=sharing",
        description: "This is a short description of Assignment 1 in Module fffdfaieufeiofu7 ;khjfoef eifhidhkyhi fhdihf f eiofuyeio fefefeufef ekfjeofue fe1."
      },
      
    ]
  },
  {
    module: "Module 2",
    items: [
      {
        title: "Assignment 1",
        img: "/assets/assignments/module2-assignment1.png",
        pdf: "https://drive.google.com/file/d/1wnf7mxgnY6bYxdMoAXkBky5sc862xJn6/view?usp=sharing",
        description: "This is a short description of Assignment 1 in Module 2."
      }
    ]
  },
  {
    module: "Module 3",
    items: [
      {
        title: "Assignment 1",
        img: "/assets/assignments/module3-assignment1.png",
        pdf: "https://drive.google.com/file/d/1K_2x_qtRGhnmcYBt35zW6ytlesTLKPgU/view?usp=sharing",
        description: "This is a short description of Assignment 1 in Module 3."
      },
      {
        title: "Assignment 2",
        img: "/assets/assignments/module3-assignment2.png",
        pdf: "https://drive.google.com/file/d/11QTCQDHzNvcaX6yQvNRdWQshAiwigCNW/view?usp=sharing",
        description: "This is a short description of Assignment 1 in Module 3."
      },
    ]
  },
  {
    module: "Module 4",
    items: [
      {
        title: "Assignment 1",
        img: "/assets/assignments/module4-assignment1.png",
        pdf: "https://drive.google.com/file/d/1uFburiku_HBDYZgzB37vGmAYW-zoqpGG/view?usp=sharing",
        description: "This is a short description of Assignment 1 in Module 4."
      }
    ]
  },
  {
    module: "Module 5",
    items: [
      {
        title: "Assignment 1",
        img: "/assets/assignments/module5-assignment1.png",
        pdf: "https://drive.google.com/file/d/1QAOXfTSLh0U8p26Yh5ts-uGqJsG5_ASK/view?usp=sharing",
        description: "This is a short description of Assignment 1 in Module 5."
      }
    ]
  },
  {
    module: "Module 6",
    items: [
      
      {
        title: "Assignment 1",
        img: "/assets/assignments/module6-assignment1.png",
        pdf: "https://drive.google.com/file/d/1dDCeidTXTdJYKaXxqoJyqjpqZgkqZf7O/view?usp=sharing",
        description: "This is a short description of Assignment 1 in Module 6."
      },
      {
        title: "Assignment 2",
        img: "/assets/assignments/module6-assignment2.png",
        pdf: "https://drive.google.com/file/d/1zI7jGGQ105YCMMRgOaPJ1vn6QTXwn2Au/view?usp=sharing",
        description: "This is a short description of Assignment 1 in Module 6."
      }
    ]
  },
  {
    module: "Module 7",
    items: [
      {
        title: "Assignment 1",
        img: "/assets/assignments/module7-assignment1.png",
        pdf: "https://drive.google.com/dummy-link-8",
        description: "coming soon."
      }
    ]
  },
  {
    module: "Module 8",
    items: [
      {
        title: "Assignment 1",
        img: "/assets/assignments/module8-assignment1.png",
        pdf: "https://drive.google.com/dummy-link-9",
        description: "coming soon."
      }
    ]
  }
];

// Tooltip labels for each module
const moduleTooltips = [
  'Information Governance and Security',
  'Network Security',
  'Wireless Networks and Security',
  'Information Assurance and Risk Management',
  'Ethical Hacking for Cyber Security',
  'Research Methods and Project Management',
  'Advanced Practice',
  'MSc Computer Science and Digital Technologies Project'
];

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
  // Move hooks to top level
  const [selectedModule, setSelectedModule] = useState(null);
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [fallingIdx, setFallingIdx] = useState(null);
  const [fallingDistances, setFallingDistances] = useState({});
  const bookRefs = useRef([]);

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
            <TabsTrigger value="experience">
              <span className="inline-flex items-center gap-3">
                <img src="/assets/resume/experience.svg" alt="Experience" width={22} height={22} />
                Experience
              </span>
            </TabsTrigger>
            <TabsTrigger value="education">
              <span className="inline-flex items-center gap-3">
                <img src="/assets/resume/cap.svg" alt="Education" width={22} height={22} />
                Education
              </span>
            </TabsTrigger>
            <TabsTrigger value="assignment">
              <span className="inline-flex items-center gap-3">
                <img src="/assets/resume/assignment.svg" alt="Assignments" width={22} height={22} />
                Assignments
              </span>
            </TabsTrigger>
            <TabsTrigger value="skills">
              <span className="inline-flex items-center gap-3">
                <img src="/assets/resume/skills.svg" alt="Skills" width={22} height={22} />
                Skills
              </span>
            </TabsTrigger>
            <TabsTrigger value="about">
              <span className="inline-flex items-center gap-3">
                <img src="/assets/resume/about.svg" alt="About Me" width={22} height={22} />
                About me
              </span>
            </TabsTrigger>
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

            {/* assignment */}
            <TabsContent value="assignment" className="w-full">
              {selectedModule == null ? (
                <div className="grid grid-cols-3 gap-x-4 gap-y-8 mb-6 w-full max-w-lg mx-auto">
                  {assignments.map((mod, idx) => (
                    <TooltipProvider delayDuration={100} key={mod.module}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button
                            ref={el => (bookRefs.current[idx] = el)}
                            onClick={async () => {
                              // Measure distance from book to bottom of viewport
                              const rect = bookRefs.current[idx]?.getBoundingClientRect();
                              const distance = rect ? window.innerHeight - rect.top : 180;
                              setFallingDistances(d => ({ ...d, [idx]: distance }));
                              setFallingIdx(idx);
                              await new Promise(res => setTimeout(res, 1500));
                              setSelectedModule(mod);
                              setFallingIdx(null);
                            }}
                            className="flex flex-col items-center justify-center w-28 h-24 bg-[#232329] rounded-lg shadow-md transition-all duration-200 text-white text-sm font-semibold folder-tab relative group"
                            style={{ marginTop: idx >= 3 ? '1.5rem' : 0 }}
                            onMouseEnter={() => setHoveredIdx(idx)}
                            onMouseLeave={() => setHoveredIdx(null)}
                          >
                            <Book3D hovered={hoveredIdx === idx} falling={fallingIdx === idx} fallingDistance={fallingDistances[idx] || 180} />
                            <span className="block mt-2">{mod.module}</span>
                          </button>
                        </TooltipTrigger>
                        <TooltipContent side="top" align="center" className={styles.minimalTooltip}>
                          <span className="capitalize">{moduleTooltips[idx]}</span>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ))}
                </div>
              ) : (
                <div>
                  <button
                    onClick={() => setSelectedModule(null)}
                    className="mb-6 px-4 py-2 bg-[#232329] text-white rounded shadow hover:bg-[#5a8d3c] hover:text-[#232329] transition-all"
                  >
                    ← Back to Modules
                  </button>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedModule.items.map((a, idx) => (
                      <div
                        key={idx}
                        className="block bg-[#232329] rounded-lg overflow-hidden shadow hover:shadow-lg transition-all duration-300 max-w-xs mx-auto"
                      >
                        <a href={a.pdf} target="_blank" rel="noopener noreferrer">
                          <img src={a.img} alt={a.title} className="w-full h-32 object-cover" />
                        </a>
                        <div className="p-2 text-center">
                          <a href={a.pdf} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-pink-500 transition-colors inline-flex items-center gap-1 font-semibold">
                            👉Read More <FaArrowRight className="inline-block text-xs" />
                          </a>
                        </div>
                        <div className="px-2 pb-2 text-xs text-white/70 text-center">{a.description}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
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
                    const isLinkedIn = item.fieldName === "LinkedIn";
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">
                          {isLinkedIn ? (
                            <a href={`https://www.linkedin.com/in${item.fieldValue}`} target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-accent transition-colors">
                              {item.fieldValue}
                            </a>
                          ) : (
                            item.fieldValue
                          )}
                        </span>
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
