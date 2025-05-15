import React from 'react';

function Header () {
  return (
   <header className="p-6 flex justify-between items-center max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold">Vaishnavi Shahakar</h1>
      <nav className="space-x-4 text-lg">
        <a href="#projects" className="hover:text-teal-400">Projects</a>
        <a href="#skills" className="hover:text-teal-400">Skills</a>
        <a href="#contact" className="hover:text-teal-400">Contact</a>
      </nav>
    </header>
  );
}

export default Header;