import React from 'react';
import SocialsItem from './LerriumSocialsItem';

const LerriumSocials = () => {
  // You can easily extend this with more platforms later
  const socials = [
    // {
    //   id: 1,
    //   name: 'GitHub',
    //   url: 'https://github.com/querzion',
    //   icon: 'bi-github',
    // },
  ];

  return (
    <div className="lerrium-socials">
      {socials.map((social) => (
        <SocialsItem key={social.id} social={social} />
      ))}
    </div>
  );
};

export default LerriumSocials;
