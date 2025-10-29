import React from "react";

import JavaScriptLogo from "@/assets/javascript-1.svg";
import BootStrapLogo from "@/assets/bootstrap-5-1.svg";
import ReactLogo from "@/assets/react-2.svg";
import NodeJsLogo from "@/assets/nodejs-3.svg";
import ThreeJsLogo from "@/assets/threejs-1.svg";
import ElectronJsLogo from "@/assets/electron-svgrepo-com.svg";
import FirebaseLogo from "@/assets/firebase-icon.svg";
import GitHubLogo from "@/assets/github-icon-1.svg";
import SocketIoLogo from "@/assets/socket-io-svgrepo-com.svg";
import WebRTCLogo from "@/assets/webrtc-svgrepo-com.svg";
import MongoDbLogo from "@/assets/mongodb-svgrepo-com.svg";
import TailwindLogo from "@/assets/tailwind-svgrepo-com.svg";
import SolidityLogo from "@/assets/light-solidity-svgrepo-com.svg";

const PhaserJsLogo = () => (
  <img src="./Phaser Logo Web Quality.png" alt="Phaser" />
);

const techs = [
  { name: "JavaScript", img: JavaScriptLogo },
  { name: "React", img: ReactLogo },
  { name: "Node.js", img: NodeJsLogo },
  { name: "Tailwind", img: TailwindLogo },
  { name: "MongoDB", img: MongoDbLogo },
  { name: "Firebase", img: FirebaseLogo },
  { name: "Socket.io", img: SocketIoLogo },
  { name: "WebRTC", img: WebRTCLogo },
  { name: "Solidity", img: SolidityLogo },
  { name: "Three.js", img: ThreeJsLogo },
  { name: "Electron.js", img: ElectronJsLogo },
  { name: "Bootstrap", img: BootStrapLogo },
  { name: "Phaser.js", img: PhaserJsLogo },
  { name: "GitHub", img: GitHubLogo },
];

const TechStack = () => (
  <div id="tech-stack" className="mt-10">
    <h2 className="text-white text-[28px] font-bold mb-6">My Toolbox</h2>
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
      {techs.map((t, i) => (
        <div
          key={i}
          className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
        >
          {typeof t.img === "string" ? (
            <img src={t.img} alt={t.name} className="h-12 w-12" />
          ) : (
            <t.img className="h-12 w-12" />
          )}
          <p className="text-sm text-[#92a4c9]">{t.name}</p>
        </div>
      ))}
    </div>
  </div>
);

export default TechStack;
