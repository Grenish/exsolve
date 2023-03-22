import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_zfpvpri",
        "template_dhy6wil",
        {
          form_name: form.name,
          to_name: "Exsolve",
          from_email: form.email,
          to_email: "ariestheracer@gmail.com",
          message: form.message,
        },
        "l7C927l7oG81bVDXX"
      )
      .then(() => {
        setLoading(false);
        alert("Thank You! we will contact you as soon as possible.");

        setForm(
          {
            name: "",
            email: "",
            message: "",
          },
          (error) => {
            setLoading(false);

            console.log(error);

            alert("Something went wrong.");
          }
        );
      });
  };

  return (
    <>
      <motion.div
        variants={fadeIn("down", "spring", 0.1, 0.75)}
        className="flex-[0.75] bg-rich-black"
      >
        <p className={styles.sectionSubText}>Get In Touch</p>
        <h3 className={styles.sectionHeadText}>Contact Us</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12">
          <label className="flex flex-col">
            <span className="text-white-100 font-medium my-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-dark-purple rounded-xl py-4 px-6 placeholder:text-secondary rounde-lg outline-none text-white border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white-100 font-medium my-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-dark-purple rounded-xl py-4 px-6 placeholder:text-secondary rounde-lg outline-none text-white border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white-100 font-medium my-4">Your Message</span>
            <textarea
              rows="7"
              type="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-dark-purple rounded-xl py-4 px-6 placeholder:text-secondary rounde-lg outline-none text-white border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-dark-purple my-2 py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending.." : "Send"}
          </button>
        </form>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
