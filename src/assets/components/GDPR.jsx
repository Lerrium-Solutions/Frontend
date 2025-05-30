import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Cookies from 'js-cookie';
import '/src/css/components/GDPR.css';

const GDPRBanner = ({ onAccept, onDecline }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if consent cookie exists
        const hasConsent = Cookies.get('gdprConsent');
        if (!hasConsent) setIsVisible(true);
    }, []);

    if (!isVisible) return null;

    const handleAccept = () => {
        Cookies.set('gdprConsent', 'accepted', { expires: 365 });
        onAccept();
        setIsVisible(false);
    };

    const handleDecline = () => {
        Cookies.set('gdprConsent', 'declined', { expires: 365 });
        onDecline();
        setIsVisible(false);
    };

    return (
        <div className="gdpr-card">
            <p>
                We use cookies to enhance your experience.{' '}
                <NavLink to="/privacy">Privacy Policy</NavLink>
            </p>
            <button onClick={handleAccept}>Accept</button>
            <button onClick={handleDecline}>Decline</button>
        </div>
    );
};

export default GDPRBanner;