import React from "react";
import Header from "../components/Header";
import ResumeSection from "../components/ResumeSection";
import ProjectCard from "../components/ProjectCard";

function Home() {
  return (
    <div className="p-4 space-y-8">
      <Header />
      <ResumeSection />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <ProjectCard title="Portfolio Website" description="React + Tailwind project." />
        <ProjectCard title="E-commerce App" description="MERN stack full project." />
      </div>
    </div>
  );
}

export default Home;
