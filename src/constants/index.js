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
  nextJs,
  redux,
  tailwind,
  angular,
  nodejs,
  mongodb,
  java,
  mysql,
  git,
  nickelfox,
  newgen,
  skillrisers,
  proximus,
  image,
  image2,
  image3,
  image4,
  image5,
  image6,
  linkedIn,
  github,
} from "../assets";

const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  contact: "contact",
};

export const navLinks = [
  {
    id: navigationPaths.about,
    title: "About",
  },
  {
    id: navigationPaths.work,
    title: "Work",
  },
  {
    id: navigationPaths.contact,
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "NodeJs Developer",
    icon: backend,
  },
  {
    title: "Javascript Developer",
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
    name: "Next JS",
    icon: nextJs,
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
    name: "Java",
    icon: java,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
];

const experiences = [
  {
    title: "Web Designer",
    company_name: "HTML , CSS , JS",
    icon: nickelfox,
    iconBg: "#E6DEDD",
    date: "Web",
    points: [
      "Custom Web Design Frameworks with High-End HTML Security tokens",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Offer Free Hosting + Static Domain",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "ReactJS , Nodemon , MongoDB , ExpressJS",
    icon: newgen,
    iconBg: "#E6DEDD",
    date: "Web",
    points: [
      "Developing with newest routing methods",
      "Dynamic APIs and GET,POST Method Assemblys",
      "Optimizing database <-> server <-> client protocols",
    ],
  },
  {
    title: "RestAPIs Applications",
    company_name: "JavaScript , nodemon , ReactJS , ExpressJS",
    icon: skillrisers,
    iconBg: "#E6DEDD",
    date: "BackEnd",
    points: [
      "Custom RestAPIs using JavaScript and nodemon",
      "Optimized ms configurations",
      "Custom Method Models",
    ],
  },
  {
    title: "Software Developer",
    company_name: "C# , Python , JavaScript , LUA",
    icon: proximus,
    iconBg: "#E6DEDD",
    date: "Jan 2018 - Jan 2021",
    points: [
      "C# Console & GUI Applications with optimized querys",
      "Python & JavaScript web-interactive , desktop applications",
      ".lua FiveM mod menus , scripts & Roblox custom frameworks",
    ],
  },
];

const projects = [
  {
    name: "Fruity Party 3D",
    description:
      "A 3D designed web page with JavaScript animation modules",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: image,
    hosted_link: "https://peachanimations.vercel.app",
  },
  {
    name: "Dashboard UI",
    description:
      "Basic Ecommerce Dashboard UI created with HTML , CSS and algorithm JavaScript",
    tags: [
      {
        name: "Algorithm",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: image2,
    hosted_link: "https://dashboard-one-vert.vercel.app",
  },
  {
    name: "ChatGPT Clone",
    description:
      "Chat GPT Cloner build with JavaScript , HTML , React working with GPT APIs",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
    ],
    image: image3,
    hosted_link: "https://try-mauve-gamma.vercel.app",
  },
  {
    name: "Fitness Mobile App",
    description:
      "A fitness ios application UI with custom day framework , using IOS Healt API , Databack API",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "React JS",
        color: "pink-text-gradient",
      },
      {
        name: "JavaScript",
        color: "orange-text-gradient",
      },
    ],
    image: image4,
    hosted_link:
      "https://gymdetetochudo.vercel.app/day/rest.html",
  },
  {
    name: "PWA Notifications",
    description:
      "PWA IOS Notifications applicaiton that send custom notifications powered by MagicBell",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "IOS PWA",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "API",
        color: "orange-text-gradient",
      },
    ],
    image: image5,
    hosted_link: "https://detetochudoshopify.vercel.app",
  },
  {
    name: "TO-DO List",
    description:
      "IOS UI Application for to-do list with working local storage , custom api callbacks",
    tags: [
      {
        name: "react-native-web",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: image6,
    hosted_link:
      "https://todo-detetochudo.vercel.app",
  },
];

const personalInfo = {
  name: "Denislav",
  fullName: "Denislav Vasilev",
  email: "detetochudo01@gmail.com",
  role: "Full-stack Web Developer",
  about: `I'm a full-stack software developer with experience in TypeScript and
  JavaScript, and expertise in frameworks like React.Js, React-naitve,
  Node.js etc. I'm a quick learner and collaborate closely with clients to
  create efficient, scalable, and user-friendly solutions that solve
  real-world problems. Let's work together to bring your ideas to life!`,
  projectsIntro: `Following projects showcases my skills and experience through
  real-world examples of my work. Each project is briefly described with
  live demos. It reflects my ability to solve complex problems, work
  with different technologies, and manage projects effectively.`,
};

const publicUrls = {
  socialProfiles: {
    linkedin: {
      link: "https://www.instagram.com/denislavvvasilev/",
      icon: linkedIn,
    },
    github: {
      link: "https://github.com/rootdetetochudo",
      icon: github,
    },
  },
};

export {
  services,
  technologies,
  experiences,
  projects,
  navigationPaths,
  personalInfo,
  publicUrls,
};
