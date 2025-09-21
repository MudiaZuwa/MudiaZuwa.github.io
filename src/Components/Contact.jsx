import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div id="contact">
      <h2 className="headings">Contact Me</h2>

      <p>
        Reach out to me, and let's begin our collaboration. Let's work together
        to achieve a successful partnership.
      </p>
      <div className="topSocial">
        <a href="https://www.linkedin.com/in/mudiazuwa" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/MudiaZuwa/" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
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
          <a href="https://wa.me/+2347062545414" target="_blank">
            +2347062545414
          </a>
        </div>
      </div>

      <div className="d-flex justify-content-around w-50 fs-4 mb-3  flex-wrap">
        <a href="#services" className="nav-link ">
          Services
        </a>
        <a href="#projects" className="nav-link">
          Projects
        </a>
        <a href="#about" className="nav-link">
          About
        </a>
        <a href="#contact" className="nav-link ">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Contact;
