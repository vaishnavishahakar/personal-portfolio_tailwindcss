import React from "react";
import ResumePDF from "./../assets/resume-vaishnavi.pdf";

function ResumeSection() {
  return (
    <section className="py-16 px-6 text-center" id="resume">
      <h3 className="text-2xl font-bold mb-6 italic font-heading">
        Interested in Working with Me?
      </h3>

      <p className="text-gray-700 dark:text-gray-700 dark:text-white max-w-xl mx-auto mb-10 font-sans">
        I'm actively looking for full-stack development opportunities. You can
        check out my resume to learn more about my skills, education, and
        experience.
      </p>

      <a
        href={ResumePDF}
        download
        className="bg-teal-500 hover:bg-teal-600 text-white py-3 px-6 rounded-xl transition font-sans animate-bounce focus:animate-none hover:animate-none inline-flex"
      >
        Download My Resume
      </a>
    </section>
  );
}

export default ResumeSection;
