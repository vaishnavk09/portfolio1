import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  mui,
  express,
  mysql,
  github,
  Three3js,
  aws,
  docker,
  vyomx,
  cybersanskar,
  zen,
  bizmind,
  kidslearning,
  project2,
  project1,
  project3,
} from "../assets";
// import project2 from '../assets/project2.png'

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Development Engineer",
    icon: web,
  },
  {
    title: "Full-Stack Developer",
    icon: mobile,
  },
  {
    title: "GenAI Application Developer",
    icon: backend,
  },
  {
    title: "Cloud & API Integrator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "express",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  {
    name: "Three JS",
    icon: Three3js,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "github",
    icon: github,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "mui",
    icon: mui,
  },
  {
    name: "aws",
    icon: aws,
  },
];

const experiences = [
   {
    title: "Software Engineer Intern",
    company_name: "VyomX",
    icon: vyomx,
    iconBg: "#383E56",
    date: "Feb 2026 - May 2026",
    points: [
      "Architected and delivered 8+ end-to-end modules for a children's EdTech platform, including Flashcards, Phonics, Games, Drawing Canvas, and Storytelling.",
      "Designed and developed an admin dashboard with CRUD operations for users, books, and subscriptions.",
      "Integrated cloud storage for images, PDFs, and audio assets to streamline content management workflows.",
      "Improved platform quality with agile collaboration, cross-team coordination, and timely bug fixes.",
    ],
  },
  {
    title: "Intern",
    company_name: "Cyber Sanskar",
    icon: cybersanskar,
    iconBg: "#383E56",
    date: "Jun 2023 - Jul 2023",
    points: [
      "Developed an Android mobile app for a general store using Java, improving inventory tracking and user usability.",
      "Gained hands-on experience with agile workflows, REST API integration, and mobile application architecture.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Delivered 8+ production modules in a single internship cycle while maintaining 100% on-time delivery.",
    name: "Execution",
    designation: "Impact",
    company: "VyomX",
    image:
      "https://www.stglawfirm.com/wp-content/uploads/2022/11/Rahul-Iyer-Attorney-Profile.png.webp",
  },
  {
    testimonial:
      "Built and deployed GenAI solutions with LangChain, RAG pipelines, and practical dashboards for real-world decision making.",
    name: "Innovation",
    designation: "Focus",
    company: "Projects",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Strong academic track record with a 9/10 CGPA and certifications in Oracle OCI GenAI and Databricks Generative AI.",
    name: "Growth",
    designation: "Learning",
    company: "Academics",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "ZEN - Mental Health Support App",
    description:
      "Production-ready RAG mental health assistant using LangChain and Llama 3.70b with conversational memory, JWT auth, and MongoDB-backed secure data storage.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "langchain",
        color: "green-text-gradient",
      },
      {
        name: "llama3",
        color: "orange-text-gradient",
      },
      {
        name: "chart.js",
        color: "pink-text-gradient",
      },
    ],
    image: zen,
    source_code_link: "https://github.com/vaishnavk09/Zen-v2",
  },
  {
    name: "BizMind AI",
    description:
      "Autonomous BI agent that converts CSV sales data into business insights using a LangChain multi-tool workflow with trend analysis, anomaly detection, forecasting, and RAG.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "langchain",
        color: "green-text-gradient",
      },
      {
        name: "faiss",
        color: "pink-text-gradient",
      },
      {
        name: "streamlit",
        color: "green-text-gradient",
      },
      {
        name: "plotly",
        color: "orange-text-gradient",
      },
    ],
    image: bizmind,
    source_code_link: "https://github.com/vaishnavk09/bizzmind-ai",
  },
  {
    name: "Kids Learning Platform Modules at VyomX",
    description:
      "Built scalable learning modules and an operational admin panel with cloud media handling, helping accelerate shipping velocity and platform reliability.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: kidslearning,
    source_code_link: "https://github.com/vaishnavk09",
  },
];

export { services, technologies, experiences, testimonials, projects };
