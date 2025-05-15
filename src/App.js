import React from "react";
import ProjectCard from "./components/ProjectCard";
import Header from "./components/Header";
import DarkModeToggle from "./components/DarkModeToggle";
import ResumeSection from "./components/ResumeSection";
import profileImage from "./assets/VAISHNAVI.jpg"

function App() {
  const projects = [
    {
      title: "Rental Plants Platform",
      desc: "Full-stack rental plant booking app with role-based login (React, Node, MongoDB).",
      link: "#",
    },
    {
      title: "Task Manager",
      desc: "MERN stack task manager with JWT auth and drag-drop UI.",
      link: "#",
    },
    {
      title: "Weather App",
      desc: "Live weather dashboard using OpenWeather API and React.",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition">
      <Header />
      <div className="flex justify-end p-4">
        <DarkModeToggle />
      </div>

      <section className="text-center py-20 px-6">
         <img
        src={profileImage}
        alt="Vaishnavi Shahakar"
        className="w-40 h-30 mx-auto rounded-full object-cover mb-6 border-4 border-teal-400 shadow-lg"
      />
        <h2 className="text-5xl font-extrabold mb-4">Full Stack Developer</h2>
        <p className="text-xl max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
          I build scalable, secure full-stack web applications using React, Node.js, Express, and MongoDB.
        </p>
      </section>

      <section id="projects" className="bg-slate-800 py-16 px-6">
        <h3 className="text-3xl font-bold text-center mb-12">Projects</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </section>

      <ResumeSection />

      <footer className="text-center text-gray-400 text-sm py-8">
        © {new Date().getFullYear()} Vaishnavi Shahakar. Built with ❤️ and Tailwind CSS.
      </footer>
    </div>
  );
}

export default App;
