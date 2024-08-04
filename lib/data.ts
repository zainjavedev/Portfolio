import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import khubImg from "@/public/khub.png";
import medlegalImg from "@/public/medlegal.png";
import ititansImg from "@/public/ititans.png";
import { FaLaptopCode } from "react-icons/fa";
import { FaPython } from "react-icons/fa"; 
import { FaCode } from "react-icons/fa"; 
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Web Scraper - Freelance",
    location: "Remote",
    description:
      "I worked as a web scraper and data visualization with python and selenium helping people scrape data and provide insights so they can make better informed decisions.",
    icon: React.createElement(FaLaptopCode),
    date: "2020 - 2022",
  },
  {
    title: "Full Stack Associate",
    location: "Lahore, Pk",
    description:
      "I Worked as a full stack associate harenssing my development skills and creating websites for local and internation business while also maintainig the SEO standards. ",
    icon: React.createElement(FaCode),
    date: "2023 Jan - 2024 Dec",
  },
  {
    title: "Backend Developer",
    location: "Lahore, Pk",
    description:
      "I'm currently working as a backend developer working as a freelancer. My day to day tasks includes api development for new features, enhancement of legacy system, fixing bugs and vulnerabilities while maintaining clean code. ",
    icon: React.createElement(FaPython),
    date: "2024 Jan - present",
  },
] as const;

export const projectsData = [
  {
    title: "Medlegal SafeKeep",
    description:
      "A website for showcasing their mobile app, stunning webpages that are SEO optimized with language translation and formt to email setup.",
    tags: ["HTML", "CSS", "Vanilla JS", "PHP"],
    imageUrl: medlegalImg,
    website:"https://medlegalsafekeep.com/"
  },
  {
    title: "Kommerce-HUB",
    description:
      "A warehouse management app that's a one stop for everything a warehouse owner needs with vast modules and scope.",
    tags: ["Flask", "SQl", "Postgres", "Python", "SQL Alchemy"],
    imageUrl: khubImg,
    website:"https://khub.biz/"
  },
 
  {
    title: "iTitans",
    description:
      "An agency website filled with showcasing their services with multiple stepper forms and landing pages.",
      tags: ["HTML", "CSS", "Vanilla JS", "PHP", "SEO", "on-page SEO", "Landing Pages"],
    imageUrl: ititansImg,
    website:"https://ititans.com/"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Bootstrap",
  "JavaScript",
  "Flask",
  "SQL",
  "SQLAlchemy",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "PostgreSQL",
  "Python",
  "Django",
  "Celery",
  "Selenium",
  "BS4",
] as const;
