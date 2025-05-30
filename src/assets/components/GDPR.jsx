import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Cookies from 'js-cookie';
import '/src/css/components/GDPR.css';

const GDPRBanner = ({ onAccept, onDecline }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = Cookies.get('gdprConsent');

        if (!consent) {
            setIsVisible(true);
        } else if (consent === 'declined') {
            blockTrackingScripts(); // Run this on page load if already declined
        }
    }, []);

    const blockTrackingScripts = () => {
        // Disable analytics only – essential stuff like theme remains functional
        const analyticsScripts = document.querySelectorAll(
            'script[src*="googletagmanager"], script[src*="analytics"]'
        );
        analyticsScripts.forEach((script) => script.remove());

        // Disable Google Analytics if already loaded
        window['ga-disable-UA-XXXXXXX-X'] = true; // Replace with your actual GA ID

        // But DON'T clear essential data like theme preference
        console.log('Tracking scripts blocked due to GDPR decline.');
    };

    const handleAccept = () => {
        Cookies.set('gdprConsent', 'accepted', { expires: 90 });
        onAccept();
        setIsVisible(false);
    };

    const handleDecline = () => {
        Cookies.set('gdprConsent', 'declined', { expires: 15 });
        blockTrackingScripts(); // Block scripts when declined
        onDecline();
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="gdpr-card">
            <p>
                We use cookies to enhance your experience.{' '}
                <NavLink to="/privacy">Privacy Policy</NavLink>
            </p>
            <div className="gdpr-card-buttons">
                <button onClick={handleDecline}>Accept [ Essentials ]</button>
                <button onClick={handleAccept}>Accept [ E + Analytics ]</button>
            </div>
        </div>
    );
};

export default GDPRBanner;
