import React, { useEffect, useState } from "react";
import { ReactComponent as HTMLLogo } from "../assets/html-1.svg";
import { ReactComponent as CSSLogo } from "../assets/css-3.svg";
import { ReactComponent as JavaScriptLogo } from "../assets/javascript-1.svg";
import { ReactComponent as BootStrapLogo } from "../assets/bootstrap-5-1.svg";
import { ReactComponent as ReactLogo } from "../assets/react-2.svg";
import { ReactComponent as NodeJsLogo } from "../assets/nodejs-3.svg";
import { ReactComponent as ThreeJsLogo } from "../assets/threejs-1.svg";
import { ReactComponent as ElectronJsLogo } from "../assets/electron-svgrepo-com.svg";
import { ReactComponent as FirebaseLogo } from "../assets/firebase-icon.svg";
import { ReactComponent as GitHubLogo } from "../assets/github-icon-1.svg";
import { ReactComponent as SocketIoLogo } from "../assets/socket-io-svgrepo-com.svg";
import { ReactComponent as WebRTCLogo } from "../assets/webrtc-svgrepo-com.svg";
import PhaserSVG from "./PhaserSVG";
import { Col, Row, Card, Carousel } from "react-bootstrap";

const AboutComponent = () => {
  const PhaserJsLogo = () => <img src="./Phaser Logo Web Quality.png" />;
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width >= 992) {
        setItemsPerSlide(3);
      } else if (width >= 768) {
        setItemsPerSlide(2);
      } else {
        setItemsPerSlide(1);
      }
    };

    // Add event listener for resizing the window
    window.addEventListener("resize", handleResize);

    // Call once on mount to set initial value
    handleResize();

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const programs = [
    {
      name: "HTML",
      svgSrc: HTMLLogo,
    },
    {
      name: "CSS",
      svgSrc: CSSLogo,
    },
    {
      name: "JavaScript",
      svgSrc: JavaScriptLogo,
    },
    {
      name: "BootStrap",
      svgSrc: BootStrapLogo,
    },
    {
      name: "FireBase",
      svgSrc: FirebaseLogo,
    },
    {
      name: "React.js",
      svgSrc: ReactLogo,
    },
    {
      name: "Node.js",
      svgSrc: NodeJsLogo,
    },
    {
      name: "Socket.io",
      svgSrc: SocketIoLogo,
    },
    {
      name: "WebRTC",
      svgSrc: WebRTCLogo,
    },
    {
      name: "Three.js",
      svgSrc: ThreeJsLogo,
    },
    {
      name: "Phaser.js",
      svgSrc: PhaserJsLogo,
    },
    {
      name: "Electron.js",
      svgSrc: ElectronJsLogo,
    },
    {
      name: "GitHub",
      svgSrc: GitHubLogo,
    },
  ];

  return (
    <div id="about">
      <h2 className="headings">About</h2>
      <Row className="flex-wrap-reverse justify-content-between ">
        <Col xs={12} lg={6}>
          <h1>Osamudiamen E. Osazuwa</h1>
          <p>
            Hello! I am Osamudiamen E. Osazuwa, a web developer specializing in
            constructing frontend websites and web games. My focus lies in
            developing user-friendly web applications using the latest
            technologies and frameworks. Currently, I am enrolled in the study
            of geology at university, aligning my coding passion with a
            curiosity for the natural world and its phenomena.
            <br />
            <br />
            Beyond web development and geology, I engage in various hobbies that
            contribute to both my personal and professional life. Connecting
            with others broadens my perspective, researching new technologies
            helps me stay current, and playing games fuels my creativity and
            aids in improving user experiences. Embracing these diverse
            interests, including connecting, researching, and gaming, allows me
            to approach my work with a broader outlook and a deeper
            understanding. I am enthusiastic about contributing to projects that
            leverage technology to address real-world issues, enhance people's
            lives, and bring joy through entertaining experiences.
          </p>
        </Col>
        <Col xs={12} lg={6} className="d-flex justify-content-lg-end">
          <img src="./IMG_20211218_100019.jpg" />
        </Col>
      </Row>
      <Carousel interval={2000} key={itemsPerSlide}>
        {programs.map((_, index) => {
          const chunk = programs.slice(
            index * itemsPerSlide,
            (index + 1) * itemsPerSlide
          );
          if (chunk.length > 0) {
            return (
              <Carousel.Item key={index} className="programSlide">
                <div className="d-flex justify-content-center">
                  {chunk.map((program, subIndex) => (
                    <Card
                      key={subIndex}
                      className="programChild mx-2"
                      style={{
                        backgroundColor:
                          (index * itemsPerSlide + subIndex) % 3 === 0
                            ? "#445E93"
                            : (index * itemsPerSlide + subIndex) % 3 === 1
                            ? "#468F8A"
                            : "#7A7F8C",
                      }}
                    >
                      <program.svgSrc className="bg-transparent" />
                      <Carousel.Caption className="bg-transparent">
                        <h3 className="bg-transparent">{program.name}</h3>
                      </Carousel.Caption>
                    </Card>
                  ))}
                </div>
              </Carousel.Item>
            );
          }
          return null;
        })}
      </Carousel>
    </div>
  );
};

export default AboutComponent;
