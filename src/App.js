import React from "react";
import Topbar from "./Components/Topbar";
import ThreeScene from "./Components/3DComponent";
import Title from "./Components/Title";
import AboutComponent from "./Components/AboutComponent";
import Projects from "./Components/Projects";
import ContactComponent from "./Components/ContactComponent";
import Services from "./Components/Services";
import ComputersCanvas from "./Components/3DComponent";
import { Container } from "react-bootstrap";

function App() {
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
        <AboutComponent />
      </Container>
      <ContactComponent />
    </div>
  );
}
export default App;
