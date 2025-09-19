import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Topbar = () => {
  return (
    <Navbar className="bg-transparent">
      <Container>
        <Nav className="d-flex justify-content-end">
          <a href="#services" className="nav-link ">
            Services
          </a>
          <a href="#projects" className="nav-link">
          Projects
          </a>
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#contact" className="nav-link contact-link">
            Contact
          </a>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Topbar;
