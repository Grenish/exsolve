import { client1, client2, client3, p7, p4, p3 } from "../assets";

const navLinks = [
  {
    id: "about",
    title: "About"
  },
  {
    id: "works",
    title: "Works"
  },
  {
    id: "contact",
    title: "Contact"
  },
]

const feedbacks = [
  {
    feedback:
      "I was impressed with their attention to detail and creative approach. Their work has helped our business immensely.",
    name: "Sara Lee",
    designation: "CFO",
    company: "XYZ Company",
    image: client1,
  },
  {
    feedback:
      "Their development skills are top-notch, and they were able to deliver the project on time and within budget.",
    name: "Lisa Wang",
    designation: "CEO",
    company: "XYZ Company",
    image: client2,
  },
  {
    feedback:
      "Working with them was a pleasure. They were professional, responsive, and delivered high-quality results.",
    name: "Chris Brown",
    designation: "CFO",
    company: "XYZ Company",
    image: client3,
  },
];

const members = [
    {
        name: "Grenish Rai",
        description: "Frontend/Backend Designer",
        skills: "ReactJs, NodeJs, MongoDB, UI/UX, HTML, CSS, JavaScript, TailwindCSS",
        image: p7,
    },
    {
        name: "Gagan Sharma",
        description: "Busniess Strategist",
        skills: "C, C++, HTML, CSS & Javascript, Python, FastAPI, Django, Flask",
        image: p4,
    },
    {
        name: "Ayush Sharma",
        description: "Intern",
        skills: "HTML, CSS, JavaScript, Bootstrap, TailwindCSS, Python",
        image: p3,
    }
]

export { feedbacks, members, navLinks };
