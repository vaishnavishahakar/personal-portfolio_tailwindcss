import React from "react";
import emailIcon from "../assets/gmail.png";
import linkedinIcon from "../assets/linkedin.png";
import githubIcon from "../assets/github.png";

function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-slate-800 text-white dark:bg-slate-100 dark:text-black"
    >
      <h3 className="text-3xl font-bold text-center mb-12">Contact Me</h3>
      <div className="flex justify-center gap-8 items-center flex-wrap">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=vaishnavishahakar@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-teal-400"
        >
          <img src={emailIcon} alt="Email" className="w-6 h-6" />
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/vaishnavi-shahakar/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-teal-400"
        >
          <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
          LinkedIn
        </a>
        <a
          href="https://github.com/vaishnavishahakar"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-teal-400"
        >
          <img src={githubIcon} alt="GitHub" className="w-6 h-6" />
          GitHub
        </a>
      </div>
    </section>
  );
}

export default ContactSection;
