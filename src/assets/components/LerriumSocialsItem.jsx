import React from 'react';

const SocialsItem = ({ social }) => {
    return (
        <a
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${social.name} profile`}
        className="social-link"
        >
        <i className={`bi ${social.icon} social-icon`}></i>
        </a>
    );
};

export default SocialsItem;
