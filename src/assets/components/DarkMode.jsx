import React, { useState, useEffect } from 'react';

const DarkMode = () => {
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
        <button
        onClick={toggleTheme}
        className="theme-toggle"
        aria-label="Toggle dark mode"
        >
        <i className={theme === 'light' ? 'bi bi-moon' : 'bi bi-brightness-high'}></i>
        </button>
    );
};

export default DarkMode;
