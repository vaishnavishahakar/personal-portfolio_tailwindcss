import React from 'react';

function ProjectCard({ title, desc, link }) {
  const openProject = () => {
    window.open(link, "_blank");
  };

  return (
    <div className="bg-gray-900 dark:bg-gray-100 text-white dark:text-black p-6 rounded-2xl shadow-lg 
      hover:shadow-teal-500/40 cursor-pointer transition" onClick={openProject}>

      <h4 className="text-xl font-semibold mb-2 font-sans">{title}</h4>
      <p className="text-gray-400 dark:text-gray-700 mb-4 font-sans">{desc}</p>
      <a href={link} className="text-teal-400 hover:underline font-sans">View Project →</a>
    </div>
  );
}

export default ProjectCard;