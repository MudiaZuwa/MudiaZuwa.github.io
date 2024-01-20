import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const ContactComponent = () => {
  return (
    <div id="contact">
      <h2 className="headings">Contact</h2>
      <h3>Contact Me</h3>
      <p>
        Reach out to me, and let's begin our collaboration. Let's work together
        to achieve a successful partnership.
      </p>
      <div className="contacts">
        <div className="contact">
          <FontAwesomeIcon icon={faEnvelope} />
          <a href="mailto:mudiaosazuwa@gmail.com">mudiaosazuwa@gmail.com</a>
        </div>
        <div className="contact">
          <FontAwesomeIcon icon={faPhone} />
          <a href="tel:+2347062545414">+2347062545414</a>
        </div>
        <div className="contact">
          <FontAwesomeIcon icon={faWhatsapp} />
          <a href="https://wa.me/+2347062545414">+2347062545414</a>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
