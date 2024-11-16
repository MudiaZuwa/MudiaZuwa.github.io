import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Topbar = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" bg="light" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#projects" className="nav-link">
              My Projects
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </Nav>
        </Navbar.Collapse>
        <div className="topSocial">
          <a
            href="https://www.linkedin.com/in/osamudiamen-osazuwa-4817142a0/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/MudiaZuwa/" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </Container>
    </Navbar>
  );
};

export default Topbar;
