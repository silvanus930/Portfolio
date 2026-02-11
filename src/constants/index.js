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
  docker,
  meta,
  starbucks,
  tesla,
  stellar,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Senior AI/ML Engineer",
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Senior AI/ML Engineer",
    company_name: "Stellar",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Mar 2024 - Present",
    points: [
      "Designed and created structured machine learning tasks and datasets to train and evaluate AI coding agents across frameworks such as PyTorch, TensorFlow, and JAX.",
      "Analyzed AI model behavior to identify failure modes, performance gaps, and optimization opportunities, improving model reliability and output quality.",
      "Implemented Python-based solutions for data preprocessing, feature engineering, model experimentation, and evaluation workflows.",
      "Applied strong understanding of ML fundamentals including optimization techniques, neural network architectures, loss functions, and evaluation metrics.",
      "Produced clear technical documentation outlining methodologies, experiment results, and reproducible workflows for AI training and validation.",
      "Collaborated with cross-functional teams to design realistic ML problem scenarios and ensure alignment with real-world engineering practices.",
      "Built automated evaluation pipelines to benchmark AI-generated solutions for correctness, efficiency, and scalability.",
      "Followed MLOps best practices including version control, experiment tracking, and reproducible development environments."
    ],
  },
  {
    title: "Senior Team Leader",
    company_name: "Autism360",
    icon: stellar,
    iconBg: "#fcfcff",
    date: "Jun 2022 - Feb 2024",
    points: [
      "Developed and maintained multiple mobile applications using React Native, ensuring high-performance, scalability, and code optimization.",
      "Worked closely with designers, project managers, and stakeholders to understand requirements, define scope, and provide technical guidance.",
      "Implemented features such as push notifications, in-app purchases, social media integration, and offline data synchronization.",
      "Collaborated with backend developers to integrate APIs and data sources, and ensure seamless communication between the frontend and backend.",
      "Improved the application's performance by identifying and resolving performance bottlenecks and implementing best practices.",
      "Implemented unit tests, automated testing, and continuous integration and deployment to ensure code quality and reliability.",
      "Conducted code reviews and provided feedback to junior developers to improve their skills.",
    ],
  },
  {
    title: "Senior SoftWare Engineer",
    company_name: "AEMO",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Otc 2021 - Jun 2022",
    points: [
      "Revamped code delivery speed by 7% by introducing continuous integration (CI) and continuous delivery (CD) pipeline.",
      "While completing the project, taught 4 junior developers and took them to an upper intermediate level.",
      "Built a Web3 frontend project for a medicine tracking application based on Ethereum smart contracts.",
      "Familiar with remote team playing while working at home.",
      "Designed and developed extensible public interactive map with C# and Aurelia (Leaflet) to allow users to view electricity and gas market information.",
      "Developed real time energy notification system for web, mobile and desktop with mongoDB and Firebase.",
      "Architectured and developed complex time-critical applications.",
    ],
  },
  {
    title: "Senior Full Stack Developer",
    company_name: "TAL/Sydney",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2019 - Oct 2021",
    points: [
      "Implemented security components using OAuth and Identity server for various web components. Also worked with external agency for the penetration testing and implemented the recommendations.",
      "Contributing to the technology road map for better alignment of the product to market requirements based on the latest technologies.",
      "Optimized the reporting component in the portals by improving the performance and using UI components from Syncfusion.",
      "Developed a React, React Native/Node.js project for book fair which allows participants to register, book the desired stands, create events.",
      "Developing the token exchange and staking sites by using Web3 and BitQuery.",
      "Backend Development by using Java and GraphQl.",
      "Identified areas to improve performance and security of the application by following the coding standards and best security practices.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Aon, Australia",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2017 - Dec 2018",
    points: [
      "Developing the responsive UI of the application in Angular and React Native(Mobile Part).",
      "Storybook Driven Development for UI components.",
      "Developed the APIs for the back-end of the application in Lalavel, Java String Boot.",
      "Backend Development by using NodeJs, Spring Boot, AWS and MongoDB.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Nokia, Sydney, Australia",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Mar 2015 - Jun 2017",
    points: [
      "Developed maintainable and extensible software for Base Transceiver Stations.",
      "Designed software architecture to ensure robust and scalable development of the system core logic component.",
      "Developed solutions for real estate industry with use of React, NodeJS and C# to improve management over the sales process, including managing sales agents and providing software for organization and running live sales events.",
      "Ensured strict code quality standards required in telecommunication systems by creating high-quality code reviews.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    testimonial:
      "Rick's expertise in web development is unparalleled. They transformed our online presence and boosted our sales significantly.",
    name: "Jason Miller",
    designation: "Founder",
    company: "Autism360 Corp",
    image: "https://randomuser.me/api/portraits/women/7.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/silvanus930",
  },
];

export { services, technologies, experiences, testimonials, projects };
