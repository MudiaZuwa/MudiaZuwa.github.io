import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Topbar from "@/Components/Topbar";
import ThreeScene from "@/Components/3DComponent";
import Title from "@/Components/Title";
import About from "@/Components/About";
import Projects from "@/Components/Projects";
import Contact from "@/Components/Contact";
import Services from "@/Components/Services";
import ComputersCanvas from "@/Components/3DComponent";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <div className="body">
      <div className="top">
        <Topbar></Topbar>
        <div className="titleBody ">
          <Container>
            <Title></Title>
          </Container>
        </div>
      </div>
      <Container>
        <div className="d-flex flex-wrap-reverse justify-content-between align-items-center">
          <ComputersCanvas />
          <Services />
        </div>

        <Projects />
        <About />
      </Container>
      <Contact />
    </div>
  );
};

export default App;
