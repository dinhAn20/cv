import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  MpossLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { FBIcon } from "@/components/icons/FBIcon";

export const RESUME_DATA = {
  name: "Nguyen Dinh An",
  initials: "DA",
  location: "Da Nang, Viet Nam",
  locationLink: "https://www.google.com/maps/place/Đà+Nẵng",
  about:
    "Flutter developer focused on building products with extra attention to detail",
  summary:
    "Flutter developer with 1.5 years of experience building mobile apps. Proficient in frontend development with 3 months of experience. Quick learner, team player, and excellent communicator.",
  avatarUrl:
    "https://static.topcv.vn/avatars/UdZbu9XXggsgdi0LN33a_638dbd8131e1e_cvtpl.jpg",
  personalWebsiteUrl: "https://www.facebook.com/leesingosu",
  contact: {
    email: "nguyendinhan0703@gmail.com",
    tel: "+84968449017",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/dinhAn20",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/diannguyxn",
        icon: LinkedInIcon,
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com/leesingosu",
        icon: FBIcon,
      },
    ],
  },
  education: [
    {
      school:
        "Vietnam-Korea University of Information and Communications Technology – University of Danang",
      degree: "Information Technology",
      start: "2018",
      end: "2023",
    },
  ],
  work: [
    {
      company: "Mposs",
      link: "https://mposs.io/",
      badges: [],
      title: "Mobile Developer, Web Developer",
      logo: MpossLogo,
      start: "2023",
      end: "2024",
      description:
        "Developed and optimized features for mobile apps (Flutter) including E-commerce, Book reading, POS, and Social networks. Also implemented and optimized features for web applications (ReactJS & NextJS) like E-commerce and Customer help desk systems.        Technologies: Flutter, Dart, Firebase, ReactJS, NextJS, ...",
    },
    {
      company: "Papagroup Technology",
      link: "https://papagroup.net",
      badges: [],
      title: "Mobile Developer",
      logo: ClevertechLogo,
      start: "2022",
      end: "2023",
      description:
        "Developed and optimized features for mobile apps (Flutter) including E-commerce, Game",
    },
    {
      company: "FPT Software",
      link: "https://fptsoftware.com/",
      badges: ["Remote"],
      title: "Web Developer",
      logo: JojoMobileLogo,
      start: "2020",
      end: "2020",
      description:
        "Intern JavaWeb(JSP Servlet). Working on front-end: Html, Css, Bootstrap. Working on Back-end: SQL server, JSP.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Dart",
    "Flutter",
    "Firebase",
  ],
  projects: [
    {
      title: "MPOSS - unpublished",
      techStack: ["Flutter", "Dart", "REST API"],
      teamSize: 3,
      description:
        "A cross-platform aplication that helps businesses track sales, manage inventory, and accept payments",
      logo: ConsultlyLogo,
      link: {
        label: "mposs.io",
        href: "https://mposs.io/",
      },
    },
    {
      title: "MFSHOP - unpublished",
      teamSize: 3,
      techStack: ["Flutter", "Dart", "REST API"],
      description: "A E-Commerce cross-platform application",
      logo: MonitoLogo,
      link: {
        label: "mposs.io",
        href: "https://mposs.io/",
      },
    },
    {
      title: "Miss Independent",
      teamSize: 2,
      techStack: ["Flutter", "Dart", "REST API", "Socket"],
      description:
        "An app offers networking, coaching, design services, and sales channels to help women of all backgrounds succeed",
      logo: JarockiMeLogo,
      link: {
        label: "missindependentme.com",
        href: "https://missindependentme.com/",
      },
    },
    {
      title: "OnlyDesk",
      teamSize: 3,
      techStack: ["REST API", "Next.js", "ReactJS", "Typescript"],
      description:
        "A customer support software that allows businesses to provide support to their customers through a web-based interface",
      logo: Minimal,
      link: {
        label: "onlydesk.io",
        href: "https://onlydesk.io/",
      },
    },
    {
      title: "SSSMarket",
      techStack: ["Dart", "Flutter", "GraphQL"],
      teamSize: 10,
      description:
        "A fashion platform that helps you share your wardrobe with the community, so that items you don't use once again find a new life",
      logo: BarepapersLogo,
      link: {
        label: "sssmarket.vn",
        href: "https://www.sssmarket.vn/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
  ],
} as const;
