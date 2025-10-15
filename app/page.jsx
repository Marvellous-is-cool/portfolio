"use client";

import { Button } from "@/components/ui/button";
import { RiFileDownloadLine } from "react-icons/ri";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import { generateCvPdf } from "@/lib/generateCV";

const Home = () => {
  return (
    <main className="h-full">
      <section className="container mx-auto h-full" aria-label="Introduction">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <article className="text-center xl:text-left order-2 xl:order-none">
            <p className="text-xl" role="doc-subtitle">Software Developer</p>
            <h1 className="h1 mb-6">
              Hello I'm
              <br /> <span className="text-accent">Adebayo Inioluwa Marvellous</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80" itemProp="description">
              Full-stack software developer with 6+ years of experience specializing in AI solutions, 
              web and mobile development, API integrations, automation, and cloud deployment. 
              Proficient in React, Next.js, Python, Node.js, TypeScript, Firebase, and modern technologies.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                onClick={generateCvPdf}
                aria-label="Download CV"
              >
                <span>Download CV</span>
                <RiFileDownloadLine className="text-xl" aria-hidden="true" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-8"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </article>
          {/* photo */}
          <aside className="order-1 xl:order-none mb-8 xl:mb-0" aria-label="Profile photo">
            <Photo />
          </aside>
        </div>
      </section>
      <Stats />
    </main>
  );
};

export default Home;
