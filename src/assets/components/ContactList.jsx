import React from 'react';
import ContactItem from './ContactItem';

const ContactList = ({ cards, activeForm, toggleForm, sendEmail }) => {
    const socialIcons = {
        github: 'bi-github',
        twitter: 'bi-twitter-x',
        linkedin: 'bi-linkedin',
        instagram: 'bi-instagram',
        facebook: 'bi-facebook',
        youtube: 'bi-youtube',
        tiktok: 'bi-tiktok',
    };

    return (
        <>
        {cards.map((card) => (
            <ContactItem
            key={card.id}
            card={card}
            activeForm={activeForm}
            toggleForm={toggleForm}
            sendEmail={sendEmail}
            socialIcons={socialIcons}
            />
        ))}
        </>
    );
};

export default ContactList;