import React, { useState } from 'react';
import ContactList from '../components/ContactList';
import '/src/css/pages/Contact.css';

const Contact = () => {
  const [activeForm, setActiveForm] = useState(null);
  const [cooldowns, setCooldowns] = useState({});

  const toggleForm = (formId) => {
    setActiveForm(activeForm === formId ? null : formId);
  };

  const sendEmail = (e, email) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const userEmail = form.email.value;
    const message = form.message.value;
    const topic = form.topic.value;

    const now = Date.now();
    if (cooldowns[email] && now - cooldowns[email] < 15 * 60 * 1000) {
      alert('Please wait 15 minutes before sending another email from this contact.');
      return;
    }

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(topic)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${userEmail}\nMessage: ${message}`
    )}`;
    window.location.href = mailtoLink;

    setCooldowns({ ...cooldowns, [email]: now });
    form.reset();
    setActiveForm(null);
    alert('Email intent sent! Check your email client.');
  };

  const cards = [
    {
      id: 'form1',
      img: '/public/images/members/founder.png',
      name: 'Slisk Lindqvist',
      title: 'Web Developer (2026)',
      address: 'Västgötagatan 10j, 68140 Kristinehamn, Sweden',
      phone: '+46700797082',
      email: 'slisk@lerrium.solutions',
      github: 'https://github.com/querzion',
      linkedin: 'https://www.linkedin.com/in/slisk-lindqvist',
      twitter: 'https://x.com/querzion',
      instagram: 'https://www.instagram.com/querzion/',
      facebook: 'https://www.facebook.com/querzion',
      youtube: 'https://www.youtube.com/@QuestionTheTruth',
      tiktok: 'https://www.tiktok.com/@querzion',
    },
    {
      id: 'form2',
      img: '/public/images/members/founder.png',
      name: 'Slisk Lindqvist',
      title: 'Web Developer (2026)',
      address: 'Västgötagatan 10j, 68140 Kristinehamn, Sweden',
      phone: '+46700797082',
      email: 'slisk@lerrium.solutions',
      github: 'https://github.com/querzion',
      linkedin: 'https://www.linkedin.com/in/slisk-lindqvist',
      twitter: 'https://x.com/querzion',
      instagram: 'https://www.instagram.com/querzion/',
      facebook: 'https://www.facebook.com/querzion',
      youtube: 'https://www.youtube.com/@QuestionTheTruth',
      tiktok: 'https://www.tiktok.com/@querzion',
    },
    {
      id: 'form3',
      img: '/public/images/members/founder.png',
      name: 'Slisk Lindqvist',
      title: 'Web Developer (2026)',
      address: 'Västgötagatan 10j, 68140 Kristinehamn, Sweden',
      phone: '+46700797082',
      email: 'slisk@lerrium.solutions',
      github: 'https://github.com/querzion',
      linkedin: 'https://www.linkedin.com/in/slisk-lindqvist',
      twitter: 'https://x.com/querzion',
      instagram: 'https://www.instagram.com/querzion/',
      facebook: 'https://www.facebook.com/querzion',
      youtube: 'https://www.youtube.com/@QuestionTheTruth',
      tiktok: 'https://www.tiktok.com/@querzion',
    },
    {
      id: 'form4',
      img: '/public/images/members/founder.png',
      name: 'Slisk Lindqvist',
      title: 'Web Developer (2026)',
      address: 'Västgötagatan 10j, 68140 Kristinehamn, Sweden',
      phone: '+46700797082',
      email: 'slisk@lerrium.solutions',
      github: 'https://github.com/querzion',
      linkedin: 'https://www.linkedin.com/in/slisk-lindqvist',
      twitter: 'https://x.com/querzion',
      instagram: 'https://www.instagram.com/querzion/',
      facebook: 'https://www.facebook.com/querzion',
      youtube: 'https://www.youtube.com/@QuestionTheTruth',
      tiktok: 'https://www.tiktok.com/@querzion',
    },
    {
      id: 'form5',
      img: '/public/images/members/founder.png',
      name: 'Slisk Lindqvist',
      title: 'Web Developer (2026)',
      address: 'Västgötagatan 10j, 68140 Kristinehamn, Sweden',
      phone: '+46700797082',
      email: 'slisk@lerrium.solutions',
      github: 'https://github.com/querzion',
      linkedin: 'https://www.linkedin.com/in/slisk-lindqvist',
      twitter: 'https://x.com/querzion',
      instagram: 'https://www.instagram.com/querzion/',
      facebook: 'https://www.facebook.com/querzion',
      youtube: 'https://www.youtube.com/@QuestionTheTruth',
      tiktok: 'https://www.tiktok.com/@querzion',
    },
    {
      id: 'form6',
      img: '/public/images/members/founder.png',
      name: 'Slisk Lindqvist',
      title: 'Web Developer (2026)',
      address: 'Västgötagatan 10j, 68140 Kristinehamn, Sweden',
      phone: '+46700797082',
      email: 'slisk@lerrium.solutions',
      github: 'https://github.com/querzion',
      linkedin: 'https://www.linkedin.com/in/slisk-lindqvist',
      twitter: 'https://x.com/querzion',
      instagram: 'https://www.instagram.com/querzion/',
      facebook: 'https://www.facebook.com/querzion',
      youtube: 'https://www.youtube.com/@QuestionTheTruth',
      tiktok: 'https://www.tiktok.com/@querzion',
    },
  ];

  return (
    <div className="contact-page">
      <ContactList cards={cards} activeForm={activeForm} toggleForm={toggleForm} sendEmail={sendEmail} />
    </div>
  );
};

export default Contact;