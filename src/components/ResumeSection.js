import React from 'react';

function ResumeSection () {
  return (
    <div className="text-center my-8">
    <a
      href="/Vaishnavi_Resume.pdf"
      download
      className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700"
    >
      Download Resume
    </a>
  </div>
  )
}

export default ResumeSection;