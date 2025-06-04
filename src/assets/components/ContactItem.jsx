import React from 'react';

const ContactListItem = ({ card, activeForm, toggleForm, sendEmail, socialIcons }) => {
    return (
        <div className="contact-wrapper">
            <div className="contact-form-card" onClick={() => toggleForm(card.id)}>
                <div className="contact-card-social">
                {Object.entries(socialIcons).map(([platform, iconClass]) => {
                    if (card[platform]) {
                    return (
                        <a href={card[platform]} target="_blank" rel="noopener noreferrer" key={platform}>
                        <i className={`bi ${iconClass} social-icon`} aria-label={`${platform} profile`}></i>
                        </a>
                    );
                    }
                    return null;
                })}
                </div>
                <div className="contact-card-img">
                <img src={card.img} alt={`${card.name} Card`} />
                </div>
                <div className="contact-card-info">
                <p>Name: {card.name}</p>
                <p>Title: {card.title}</p>
                <p>Address: {card.address}</p>
                <p>Phone: {card.phone}</p>
                </div>
                <div className={`contact-form-container ${activeForm === card.id ? 'active' : ''}`} id={card.id}>
                <form 
                    onSubmit={(e) => sendEmail(e, card.email)}
                    onClick={(e) => e.stopPropagation()}>
                    <select name="topic" required>
                        <option value=""></option>
                        <option value="Feedback">Feedback</option>
                        <option value="Support">Support</option>
                    </select>
                    <input type="text" name="name" placeholder="Your Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="message" placeholder="Your Message" required />
                    <button type="submit">Send</button>
                </form>
                </div>
            </div>
        </div>
    );
};

export default ContactListItem;