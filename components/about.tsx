"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
    I started my programming journey during the COVID lockdown, where I picked up {" "}
    <span className="font-bold italic">Python</span> and began exploring web scraping, automation, and data visualization.
    After completing a Udemy bootcamp, I became familiar with web development and its technologies. 
    <br></br><br></br>
    I was fortunate to start my frontend career with an {" "}
    <span className="font-bold italic underline">SEO team</span>, where I learned invaluable SEO standards for <span className="font-bold italic underline">creating and designing web pages.</span>  
    {" "}Then, I transitioned to backend development, and I am now currently working as a {" "}
    <span className="font-bold italic underline"> full time backend developer</span> while also helping people with their ideas and execution.
    </p>

      <p>
        <span className="italic">When I'm not coding</span>,
        I enjoy playing
        basketball, chess and volleyball. I also have a keen interest 
        in businesses and 
        <span className="italic">creating solutiosn that help people and make an impact </span>
        I am currently
        learning about{" "}
        <span className="font-medium">SaaS and startups</span>
      </p>
    </motion.section>
  );
}
