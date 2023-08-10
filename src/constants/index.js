import {
  github,
  gagan,
  grenish,
  ayush,
  bank,
  link,
} from "../assets";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "works",
    title: "Works",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const aim = [
  {
    title: "Total Client",
    number: "1",
  },
  {
    title: "Our Goal",
    number: "100+",
  },
];

const members = [
  {
    name: "Grenish Rai",
    skills:
      "Web Developer",
    image: grenish,
    profile_link1: "https://github.com/Grenish",
    icon: github,
  },
  {
    name: "Gagan Sarmah",
    skills: "Software Developer",
    image: gagan,
    profile_link1: "https://github.com/Gags-1",
    icon: github,
  },
  {
    name: "Ayush Baral",
    skills: "Web Developer",
    image: ayush,
    profile_link1: "https://github.com/codeayush-7",
    icon: github,
  },
];

const projects = [
  {
    name: "HooBank",
    description:
      "HooBank is a payment platform that allows users to easily send and receive money through their mobile devices, similar to other payment apps. It offers high security and efficiency for transactions.",
    image: bank,
    source_code_link: "https://github.com/Grenish/Project-Bank/",
    website_link: "https://bank-project-1.netlify.app/",
    icon2: link,
    icon: github,
  },
];

export { members, aim, navLinks, projects };
