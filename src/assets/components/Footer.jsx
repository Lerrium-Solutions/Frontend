import React, { useState, useEffect } from 'react';
import '/src/css/components/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <footer>
      <button
        onClick={toggleTheme}
        className="theme-toggle"
      >
        <i className={theme === 'light' ? 'bi bi-moon' : 'bi bi-brightness-high'}></i>
      </button>
      <p>© {currentYear} Lerrium Solutions. All rights reserved.</p>
    </footer>
  );
};

export default Footer;