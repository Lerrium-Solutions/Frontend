import React from 'react';
import '/src/css/components/Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>© {currentYear} Lerrium Solutions. All rights reserved.</p>
    </footer>
  );
};

export default Footer;