import React from "react";
import ResumePDF from './../assets/resume-vaishnavi.pdf'

function ResumeSection() {
  return (
    <section className="py-16 px-6 text-center">
      <h3 className="text-3xl font-bold mb-6">Download My Resume</h3>
      <a
        href={ResumePDF} 
        download
        className="bg-teal-500 hover:bg-teal-600 text-white py-3 px-6 rounded-xl transition"
      >
        Download PDF
      </a>
    </section>
  );
}

export default ResumeSection;