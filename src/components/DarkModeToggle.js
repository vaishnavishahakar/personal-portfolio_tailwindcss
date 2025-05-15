import React from 'react';

function DarkModeToggle () {
    const toggleDark = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <button
      onClick={toggleDark}
      className="absolute top-4 right-4 bg-gray-300 dark:bg-gray-600 p-2 rounded"
    >
      🌓
    </button>
  )
}

export default DarkModeToggle;