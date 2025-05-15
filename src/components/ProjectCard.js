import React from 'react';

function ProjectCard ({ title, description }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md">
    <h2 className="text-xl font-semibold">{title}</h2>
    <p>{description}</p>
  </div>
  );
}

export default ProjectCard;