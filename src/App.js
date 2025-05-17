import { motion } from "framer-motion";
import ProjectCard from "./components/ProjectCard";
import Header from "./components/Header";
import ResumeSection from "./components/ResumeSection";
import profileImage from "./assets/VAISHNAVI.jpg";
import { useEffect, useState } from "react";
import ContactSection from "./components/ContactSection";

// Custom typing effect with infinite loop
function useLoopTypingEffect(words, speed = 100, pause = 1000) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[index % words.length];
    let typeSpeed = deleting ? speed / 2 : speed;

    const timeout = setTimeout(() => {
      setText(currentWord.substring(0, charIndex));

      if (!deleting && charIndex < currentWord.length) {
        setCharIndex((prev) => prev + 1);
      } else if (deleting && charIndex > 0) {
        setCharIndex((prev) => prev - 1);
      } else if (!deleting && charIndex === currentWord.length) {
        setDeleting(true);
        setTimeout(() => {}, pause);
      } else if (deleting && charIndex === 0) {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, index, words, speed, pause]);

  return text;
}

function App() {
  // List of Projects
  const individualProjects = [
    {
      title: "Notesphere",
      desc: "A full-featured note-taking web app with save, edit and delete functionality.",
      link: "https://github.com/vaishnavishahakar/notesphere_application_reactjs",
    },
    {
      title: "Resume Creator (HTML + JavaScript)",
      desc: "HTML/JS based resume builder with templates and live preview.",
      link: "https://github.com/vaishnavishahakar/Resume-Creator_html_javascript",
    },
    {
      title: "Weather App",
      desc: "Live weather dashboard using OpenWeather API and React.",
      link: "https://github.com/vaishnavishahakar/weather-app",
    },
    {
      title: "Cartify E-Commerce Website",
      desc: "React + Tailwind based complete e-commerce platform with cart and checkout functionality.",
      link: "https://github.com/vaishnavishahakar/RTC-e-commerce-project",
    },
    {
      title: "Product Quantity Counter",
      desc: "A simple product quantity tracker built with HTML, CSS, and JavaScript.",
      link: "https://github.com/vaishnavishahakar/Product-Quantity-Counter",
    },
  ];

  const groupProjects = [
    {
      title: "Rentify Hub (Group Project) - React",
      desc: "A rental platform offering furniture, garments, electronics, and vehicles. Developed with a user-friendly interface and seamless user experience.",
      link: "https://github.com/vaishnavishahakar/icp8.0-react.js-group-project4",
    },
    {
      title: "codeX (Group Project) - HTML/CSS/JS",
      desc: "Educational platform with courses, notes, demo lectures, resume builder, and more to support student success online.",
      link: "https://github.com/vaishnavishahakar/icp-8.0-html-css-javascript-group-project-3-",
    },
  ];

  // Hook for typing animation text
  const typedText = useLoopTypingEffect(
    ["Full Stack Developer", "MERN Stack Developer", "Web App Creator"],
    120,
    1000
  );

  return (
    <div className="min-h-screen bg-slate-100 text-black font-sans dark:bg-slate-900 dark:text-white">
      <Header />

      {/* Profile and typing animation section */}
      <section className="text-center py-10 px-6">
        <img
          src={profileImage}
          alt="Vaishnavi Shahakar"
          className="w-40 h-30 mx-auto rounded-full object-cover mb-6 border-4 border-teal-400 shadow-lg"
        />

        <motion.h2
          className="text-3xl font-extrabold min-h-[3.5rem] font-heading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {typedText}
          <span className="text-teal-400 animate-pulse">|</span>
        </motion.h2>

        <p className="text-xl max-w-2xl mx-auto text-gray-700 dark:text-gray-300 font-sans">
          I build scalable, secure full-stack web applications using React,
          Node.js, Express, and MongoDB.
        </p>
      </section>

      {/* About Me section */}
      <section id="about" className="py-16 px-6 text-center">
        <h3 className="text-3xl font-bold mb-6 font-heading">About Me</h3>
        <p className="text-lg max-w-3xl mx-auto text-gray-700 dark:text-gray-700 dark:text-white leading-relaxed font-sans">
          I'm Vaishnavi Shahakar, a passionate Full Stack Developer who enjoys
          solving real-world problems through clean and efficient code. With a
          strong grasp of both front-end and back-end technologies, I create
          responsive, user-friendly applications. I love learning, experimenting
          with new tech, and contributing to projects that have real impact.
        </p>
      </section>

      {/* Skills section */}
      <section id="skills" className="bg-gray-900 dark:bg-gray-100 py-16 px-6">
        <h3 className="text-3xl font-bold text-center mb-10 text-white dark:text-black font-heading">
          Skills
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center font-sans">
          {[
            "HTML5",
            "CSS3",
            "JavaScript",
            "React.js",
            "Tailwind CSS",
            "Node.js",
            "Express.js",
            "MongoDB",
          ].map((skill, i) => (
            <div
              key={i}
              className="bg-teal-400/10 p-6 rounded-xl shadow-md transform hover:scale-105 hover:shadow-lg 
              transition duration-300 ease-in-out text-white dark:text-black text-lg font-semibold"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects section */}
      <section id="projects" className="bg-slate-800 py-16 px-6 mt-10">
        <h3 className="text-3xl font-bold text-center mb-12 text-white text-gray-700 dark:text-white font-heading">
          Projects
        </h3>

        <h4 className="text-xl font-semibold text-center mb-4 text-teal-400 font-haeding">
          Individual Projects
        </h4>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {individualProjects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>

        <h4 className="text-xl font-semibold text-center mb-4 text-teal-400 font-heading">
          Group Projects
        </h4>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {groupProjects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </section>

      <ResumeSection />
      <ContactSection />

      {/* Footer */}
      <footer className="text-center text-gray-700 text-sm py-8 dark:text-white font-sans">
        © {new Date().getFullYear()} Vaishnavi Shahakar. Built with ❤️ and
        Tailwind CSS.
      </footer>
    </div>
  );
}

export default App;
