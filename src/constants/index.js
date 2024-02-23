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
  kpit,
  infosys,
  modez,
  threejs,
  crowdfunding,
  algoefficiency,
  ecommerce,
  emotion,
  naviroute,
  seo
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
    title: "Full Stack Developer",
    icon: backend,
  },
  {
    title: "Software Developer",
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
    title: "Software Developer Intern",
    company_name: "KPIT Technologies",
    icon: kpit,
    iconBg: "#383E56",
    date: "May 2023 - Aug 2023",
    points: [
      "Spearheaded the development of two high-impact projects: Metadata Builder and Hardware Tracker, independently delivering crucial solutions.",
      "Engineered efficient data manipulation strategies for Metadata Builder, seamlessly integrating complex Cummins ODX data into a robust SQL database.",
      "Leveraged agile methodologies, actively participating in sprint planning, cross-functional collaboration, and rigorous code reviews.",
      "Practiced Git and Azure DevOps for streamlined version control and collaborative workflows.",
      "Acquired specialized knowledge in automotive software systems and gained proficiency in embedded systems programming.",
      "Demonstrated adaptability and prowess in navigating and enhancing large-scale codebases."
    ],
  },
  {
    title: "Systems Engineer (Full-Time)",
    company_name: "Infosys",
    icon: infosys,
    iconBg: "#E6DEDD",
    date: "Sep 2021 - Jul 2022",
    points: [
      "Orchestrated the enhancement of code quality through close collaboration with a dedicated testing team comprising 6 members, culminating in effective testing and debugging of 2 pivotal applications.",
      "Rectified over 20 production bugs, significantly stabilizing the application and meeting stringent project deadlines.",
      "Played a pivotal role in release planning, troubleshooting production issues, and facilitating seamless production rollouts.",
      "Gained expertise in Angular 8 and adeptly applied agile scrum methodologies to optimize project management.",
      "Crafted Custom Objects, Entity-Relationship data models, and validation rules, resulting in streamlined application performance.",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "ModezTech Ingenious",
    icon: modez,
    iconBg: "#383E56",
    date: "Jan 2021 - Aug 2021",
    points: [
      "Innovatively devised and implemented automation scripts utilizing Selenium, enabling the parallel execution of crucial tests.",
      "Formulated and executed unit and regression test cases using pytest, contributing to the robustness of software systems.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
];

const projects = [
  {
    name: "Crwodfunding Platform",
    description:
      "Blockchain-enabled crowdfunding platform that facilitates secure, smart contract-based fundraising and Ethereum transactions, streamlining project support and investment.",
    tags: [
      {
        name: "thirdweb",
        color: "blue-text-gradient",
      },
      {
        name: "blockchian",
        color: "orange-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "solidity",
        color: "pink-text-gradient",
      }
    ],
    image: crowdfunding,
    source_code_link: "https://github.com/abhii9922/WEB3-BLOCKCHAIN-BASED-CROWDFUNDING-PLATFORM",
  },
  {
    name: "Ecommerce Analysis",
    description:
      "Analyze e-commerce data, offering insights into customer behavior, product popularity, and sales trends through various chart comparisons with visual representation.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "aws",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/abhii9922/EcommerceAnalysis",
  },
  {
    name: "Emotion Detection",
    description:
      "This web-based application offers educators a low-cost, simple method to collect students' emotional feedback, adjusting teaching methods for better outcomes.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "jsp",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: emotion,
    source_code_link: "https://github.com/abhii9922/Emotion-Detection",
  },
  {
    name: "Algorithm Efficiency Analysis",
    description:
      "Project is designed to perform analysis and comparison of different sorting algorithms. Displays the performance of each of the Algorithm over graphs",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "sorting-algorithms",
        color: "green-text-gradient",
      },
      {
        name: "matplotlib",
        color: "pink-text-gradient",
      },
    ],
    image: algoefficiency,
    source_code_link: "https://github.com/abhii9922/DSA",
  },
  {
    name: "Navigation & Emergency Route Planning",
    description:
      "This project utilizes the Floyd-Warshall algorithm finds shortest paths between landmarks, enhancing emergency routing and navigation around roadblocks.",
    tags: [
      {
        name: "angular-js",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: naviroute,
    source_code_link: "https://github.com/abhii9922/Floyd_warshall",
  },
  {
    name: "Search Engine Optimization",
    description:
      "optimizing website elements to improve its visibility on search engine results pages, focusing on keywords, content relevance, and site structure to attract organic traffic.",
    tags: [
      {
        name: "python-flask",
        color: "blue-text-gradient",
      },
      {
        name: "nltk",
        color: "green-text-gradient",
      },
      {
        name: "rabin-karp",
        color: "pink-text-gradient",
      },
    ],
    image: seo,
    source_code_link: "https://github.com/abhii9922/Search_engine_opt",
  },
  
];

export { services, technologies, experiences, testimonials, projects };