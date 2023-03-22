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
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  nyutest,
  cordelia,
  damac,
  logo,
  qburst,
  emphasys
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
  // {
  //   id: "resume",
  //   title: "Resume",
  // },
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
    title: "React Developer",
    icon: creator,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
    name: "PHP",
    icon: mongodb,
  },
  {
    name: "Next JS",
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
    title: "Senior Software Engineer & Team Lead",
    company_name: "QBurst",
    icon: qburst,
    iconBg: "#383E56",
    date: "Aug 2019 - Current",
    points: [
      "Lead a team of 4 full-time engineers, participated in the roadmap definition for the team, established engineering best practices and was a mentor to the other members of the team",
      "Design and Implementation of new features, including re-usable components in React for partners to use in different platforms like B2B and B2C",
      "Develop cross-browser, cross-devices high-quality, high-performance, beautiful, maintainable front-end code using React.js, Next JS, React native, JavaScript, HTML5, CSS3, JSP, jQuery, Tailwind CSS, babel and JSON Web Token",
      "Designed mobile applications for Apple and Android platforms using React Native and PhoneGap",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Amazecodes Solutions",
    icon: logo,
    iconBg: "#E6DEDD",
    date: "Jul 2017 - Aug 2019",
    points: [
      "Add a new monitor for job runs, services and database, auto-send an email and open new tickets for an involved engineer to investigate",
      "Involved in writing application-level code to interact with Web services using Ajax, JSON, GraphQL and WordPress API. As DevOps modal includes coding, testing, and deploying the feature to Azure Cloud System",
      "Implemented unit and integration tests to deliver high-quality features using Jest and Selenium consistently.",
      "Work with defect tracking, code review source code control and software release systems to ensure high-quality software releases over time.",
    ],
  },
  {
    title: "Accosiate Software Developer",
    company_name: "Emphasys",
    icon: emphasys,
    iconBg: "#383E56",
    date: "Nov 2015 - Jun 2017",
    points: [
      "Participate in the design with Project Manager, Team Leader and another team member. Prepare the user document, include API and database design, and use 3-tier architecture for this project.",
      "Created forms using the yii2 framework for all customers to enter their information and convert that to PDF for downloading.",
      "Designed visual and graphic images to use on multiple platforms",
    ],
  }
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

const blogs = [
  {
    title:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    title:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    title:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    title:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "NYU Eye Test",
    description:
      "The NYU Langone Eye Test app allows you to perform a visual assessment on your Android phone in preparation for a video visit or in-person appointment with your eye care provider.",
    tags: [
      {
        name: "react native",
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
    image: nyutest,
    source_code_link: "https://github.com/",
  },
  {
    name: "Cordelia Cruises",
    description:
      "Cordelia Cruises by Waterways Leisure Tourism Pvt Ltd is India's premium cruise liner. True to its name, Cordelia aspires to promote and drive the cruises",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: cordelia,
    source_code_link: "https://github.com/",
  },
  {
    name: "Damac",
    description:
      "DAMAC Agents app is an ultimate platform for real estate brokers that lets you check all the property details, including the size, location, standard, and additional features right on the listing and compare offers.",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: damac,
    source_code_link: "https://github.com/",
  }
];

export { services, technologies, experiences, testimonials, projects };
