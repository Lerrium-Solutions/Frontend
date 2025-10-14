import React from 'react';

const Copyright = () => {
    const currentYear = new Date().getFullYear();

    return (
        <p>© {currentYear} Lerrium Solutions. All rights reserved.</p>
    );
};

export default Copyright;
