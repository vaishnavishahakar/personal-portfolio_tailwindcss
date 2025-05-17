import React, { useState, useRef, useEffect } from 'react';
import DarkModeToggle from './DarkModeToggle';

function Header () {
  const [isOpen, setIsOpen] = useState(false);
   const menuRef = useRef();

   // Close menu when clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
   <header className="p-6 flex justify-between items-center max-w-6xl mx-auto">
      <h1 className=" md:text-xl tracking-wide italic text-center mt-2 font-[Pacifico] animate-fadeUp text-teal-600 dark:text-teal-400">
        Vaishnavi Shahakar 👩‍💻</h1>
      
      <div className="hidden md:flex items-center gap-6">
        <nav className="space-x-4">
          <a href="#projects" className="hover:text-teal-400 font-heading">Projects</a>
          <a href="#skills" className="hover:text-teal-400 font-heading">Skills</a>
          <a href="#contact" className="hover:text-teal-400 font-heading">Contact</a>
        </nav>
        <DarkModeToggle />
      </div>

{/* Hamburger button */}
      <button
        className="md:hidden text-3xl focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

{/* Mobile dropdown */}
      {isOpen && (
        <div
          ref={menuRef}
          className="absolute top-20 right-6 bg-white dark:bg-gray-800 text-black dark:text-white p-4 rounded-xl shadow-lg flex flex-col gap-4 z-50"
        >
          <a href="#projects" className="hover:text-teal-400">Projects</a>
          <a href="#skills" className="hover:text-teal-400">Skills</a>
          <a href="#contact" className="hover:text-teal-400">Contact</a>
          <DarkModeToggle />
        </div>
      )}

    </header>
  );
}

export default Header;