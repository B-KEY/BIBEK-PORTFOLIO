'use client';

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import React from "react";
import ParticleBackground from "@/app/ParticleBackground";
import { TypeAnimation } from 'react-type-animation';

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full relative">
      <div className="container mx-auto h-full relative z-10">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left  order-2 xl:order-none">
            <span className="text-xl">CyberSecurity Analyst</span>
            <h1 className="h1 mb-6">
            <TypeAnimation
  sequence={[
    'Hello I\'m\nBibek Thapa',  // First display
    4000, // Wait 4 seconds
    '',    // Clear the text
    1000,  // Wait 1 second
    'Hello I\'m\nBibek Thapa',  // Second display
    4000,
    '',
    1000,
    'Hello I\'m\nBibek Thapa',  // Third display
    4000,
  ]}
  wrapper="span"
  speed={50}
  repeat={0}  // Set to 0 since we've manually created 3 iterations
  style={{ whiteSpace: 'pre-line' }}
  className="bg-gradient-to-r from-purple-600 via-pink-600 via-orange-500 to-red-500 text-transparent bg-clip-text"
/>
<span className="text-red-600"></span>

            </h1>
            <div className="xl:w-[] h-full flex flex-col gap-5 p-7 bg-[#070707] rounded-xl order-2 xl:order-none shadow-glow">
              <p className="max-w-[500px] mb-4 text-white/80 leading-relaxed tracking-normal">
                I am a cybersecurity enthusiast passionate about safeguarding digital landscapes. With a keen interest in emerging technologies and threat landscapes, I strive to stay ahead of potential vulnerabilities. My journey in cybersecurity involves continuous learning and hands-on experience in areas like network security, ethical hacking, threat analysis and digital forensics.
              </p>
            </div>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="https://drive.google.com/file/d/1svj-LYZb9IvG5DnkyAxtO1fdAeK_0xLB/view?usp=sharing" download>
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2 hover:text-red-600 border-pink-600"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-yellow-600 rounded-full flex justify-center items-center text-green-400 text-base hover:bg-red-500 hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0 photo-shadow-glow">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
