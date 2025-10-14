import React from 'react';
import '/src/css/components/Footer.css';
import DarkMode from './DarkMode';
import Copyright from './Copyright';
import LerriumSocials from './LerriumSocialsList';

const Footer = () => {
    return (
        <footer>
            <DarkMode />
            <Copyright />
            <LerriumSocials />
        </footer>
    );
};

export default Footer;
