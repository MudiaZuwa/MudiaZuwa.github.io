import React from "react";
import ProgramChild from "./programChild";
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
import PhaserSVG from "./PhaserSVG";

const Programs = () => {
  const PhaserJsLogo = () => <img src="./Phaser Logo Web Quality.png" />;
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
    <div className="programsBody">
      {PhaserJsLogo}
      <div className="programs">
        {programs.map((program, index) => {
          return (
            <ProgramChild
              SVGElement={program.svgSrc}
              Name={program.name}
              key={index}
            ></ProgramChild>
          );
        })}
      </div>
    </div>
  );
};

export default Programs;
