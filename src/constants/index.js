import { p7, p4, p3, github, carrent, jobit, tripguide } from "../assets";

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
    number: "0",
  },
  {
    title: "Our Goal",
    number: "100+",
  },
];

const members = [
  {
    name: "Grenish Rai",
    description: "Frontend/Backend Developer",
    skills:
      "ReactJs, NodeJs, MongoDB, UI/UX, HTML, CSS, JavaScript, TailwindCSS",
    image: p7,
    profile_link1: "https://github.com/Grenish",
    icon: github,
  },
  {
    name: "Gagan Sarmah",
    description: "Software Developer",
    skills: "C, C++, HTML, CSS, Javascript, Python, FastAPI, Django, Flask",
    image: p4,
    profile_link1: "https://github.com/Gags-1",
    icon: github,
  },
  {
    name: "Ayush Baral",
    description: "Intern",
    skills: "HTML, CSS, JavaScript, Python, C",
    image: p3,
    profile_link1: "https://github.com/codeayush-7",
    icon: github,
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    image: carrent,
    source_code_link: "https://github.com/",
    icon: github,
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    image: jobit,
    source_code_link: "https://github.com/",
    icon: github,
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    image: tripguide,
    source_code_link: "https://github.com/",
    icon: github,
  },
];

export { members, aim, navLinks, projects };
