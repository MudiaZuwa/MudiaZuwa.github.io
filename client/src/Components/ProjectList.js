import HTMLLogo from "@/assets/html-1.svg";
import CSSLogo from "@/assets/css-3.svg";
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
const PhaserJsLogo = () => <img src="./Phaser Logo Web Quality.png" />;

export const ProjectList = [
  {
    name: "QuickXMarket",
    pageLink: "https://quickxmarket.com.ng/",
    code: [
      ReactLogo,
      NodeJsLogo,
      MongoDbLogo,
      TailwindLogo,
      SocketIoLogo,
    ],
    description: `QuickXMarket is a hyperlocal ecommerce and delivery platform designed to connect customers, vendors, riders, and admins seamlessly. 

It started as a single website but has grown into a multi-platform ecosystem:
- 2 websites (customer and vendor)
- 4 mobile apps (customer, vendor, rider, admin)
- WhatsApp & Telegram bots (Quickie) that allow users to place orders, make inquiries, and even send voice notes that get transcribed automatically.

QuickXMarket's goal is to make buying, selling, and delivering goods simpler for students, small businesses, and local communities, beginning at the University of Benin.`,
    intro:
      "QuickXMarket is a multi-platform ecommerce and delivery startup project featuring websites, mobile apps, and chatbots, designed to make ordering and delivery effortless for students, vendors, and local communities.",
  },
  {
    name: "Buzz-It",
    githubLink: "https://github.com/MudiaZuwa/BuzzIt",
    pageLink: "https://buzz-it-eight.vercel.app/",
    code: [ReactLogo, JavaScriptLogo, BootStrapLogo, FirebaseLogo, WebRTCLogo],
    description: `Buzz-It is a feature-rich social media platform where users can create and share posts, view and interact with others' content, manage friendships through friend requests, and engage in real-time messaging with friends. To enhance user experience, Buzz-It also includes a gaming hub where users can play a variety of games either solo or with friends.

Additionally, users can make and receive both voice and video calls directly from the Message Tab, a functionality implemented using WebRTC for seamless communication.

Available Games:
Single Player: Brick Break, Ball Fall, Image Slide Puzzle, TicTacToe, Super TicTacToe
Multiplayer: Chess, Whot, TicTacToe, Super TicTacToe

Built with React, Firebase, and Bootstrap, Buzz-It combines social interaction and entertainment into one engaging platform.`,
    intro:
      "Buzz-It is a dynamic social media and gaming platform, allowing users to share posts, connect with friends, and enjoy solo or multiplayer games. Its integrated WebRTC functionality enables voice and video calls for seamless communication.",
  },
  {
    name: "MudiaZuwa Wallet",
    githubLink: "https://github.com/MudiaZuwa/MudiaZuwa-Wallet",
    pageLink: "https://mudiazuwa-wallet.vercel.app/",
    code: [
      ReactLogo,
      NodeJsLogo,
      TailwindLogo,
      SolidityLogo,
    ],
    description: `MudiaZuwa Wallet is a simple experimental crypto wallet built around a custom ERC-20 test token. 

Key features:
- Web3Auth integration: users log in with Google/Apple accounts to create secure EOA wallets without managing private keys.
- Biconomy smart wallets: users transact without needing native tokens for gas fees.
- Custom paymaster contract: attempted implementation to allow paying gas fees with the custom ERC-20 token.
- Telegram bot faucet: testers can claim free tokens by sending their wallet address.

⚠️ The wallet is built specifically for the test ERC-20 token. Sending any other token may result in loss.`,
    intro:
      "MudiaZuwa Wallet is a personal experimental crypto wallet for a custom ERC-20 token, featuring Web3Auth login, Biconomy smart wallets, and a Telegram faucet bot for testers.",
  },
  {
    name: "3D Fighting Demo",
    githubLink: "https://github.com/MudiaZuwa/3D-Fighting-Demo",
    pageLink: "https://mudiazuwa.github.io/3D-Fighting-Demo/",
    downloadLink:
      "https://drive.google.com/uc?export=download&id=1-1neaJA5uBaN5lILdYu1WZBof6EitEAF",
    code: [HTMLLogo, CSSLogo, JavaScriptLogo, ThreeJsLogo],
    description: `A 3D fighting game demo utilizing Three.js and the Cannon.js physics engine. Players can engage in battles against the computer or challenge their friends. Users have the flexibility to choose their preferred controls. The game showcases various characters with distinct move animations.
Keyboard Controls:
WASD: Player movements and menu cursor movements
J: Punch attacks and select menu option
L: Kick attacks and back button
Esc: Toggle Pause Game

Gamepad Controls:
Joystick/D-Pad: Player movements and menu cursor movements
A: Punch attacks and select menu option
B: Kick attacks and back button
Start: Toggle Pause Game`,
    intro:
      "3D Fighting Demo is an interactive game showcasing engaging battles using Three.js and Cannon.js physics, with unique characters, move animations, and customizable controls for both keyboard and gamepad users.",
  },
  {
    name: "ZuwaCart",
    githubLink: "https://github.com/MudiaZuwa/ZuwaCart",
    pageLink: "https://zuwacart.vercel.app/",
    code: [
      HTMLLogo,
      CSSLogo,
      JavaScriptLogo,
      BootStrapLogo,
      FirebaseLogo,
      NodeJsLogo,
    ],
    description: `An ecommerce website enabling users to create accounts, register as vendors, and upload their products. Vendor projects are visible to other users, who can order and make payments using bank cards or transfers via Paystack.`,
    intro:
      "ZuwaCart is an ecommerce platform where vendors can showcase their products, and users can make purchases securely using Paystack. It offers account registration and vendor management features.",
  },
  {
    name: "3D Space Shooter",
    githubLink: "https://github.com/MudiaZuwa/3D-Space-Shooter",
    pageLink: "https://mudiazuwa.github.io/3D-Space-Shooter/",
    code: [HTMLLogo, CSSLogo, JavaScriptLogo, ThreeJsLogo],
    description: `I developed a 3D space shooter game using Three.js and JavaScript. The game showcases a spaceship capable of flying and shooting within a 3D space environment. The player encounters various enemies and obstacles, presenting challenges throughout the gameplay. A straightforward user interface displays the spaceship's health and score. Users have the flexibility to choose their preferred controls.
Keyboard Controls:
WASD: Player movements and menu cursor movements
Enter: Shoot Projectiles and select menu option
Esc: Toggle Pause Game

Gamepad Controls:
Joystick/D-Pad: Player movements and menu cursor movements
A: Shoot Projectiles and select menu option
Start: Toggle Pause Game`,
  },
  {
    name: "Local Whot Card",
    githubLink: "https://github.com/MudiaZuwa/LocalWhot",
    pageLink: "https://local-whot.vercel.app/",
    code: [ReactLogo, JavaScriptLogo, SocketIoLogo],
    description: `A multiplayer Whot card game built with React and Socket.io. The game allows up to four players to compete either locally on a single device or across multiple devices connected to the same WLAN. This version excludes the "20" card and provides a seamless experience for casual gameplay among friends. The game also features a responsive design, ensuring smooth gameplay across different screen sizes and devices.`,
  },
  {
    name: "Ball Fall",
    githubLink: "https://github.com/MudiaZuwa/Ball-Fall",
    pageLink: "https://mudiazuwa.github.io/Ball-Fall/ ",
    code: [HTMLLogo, CSSLogo, JavaScriptLogo],
    description: `A 2D game built with HTML canvas featuring a falling ball controlled by the user. The objective is to land the ball on continuously rising platforms, preventing it from touching the bottom or top of the screen. The game includes a straightforward user interface.
Keyboard Controls:
Arrow Keys: Ball movements
Esc: Toggle Pause Game

Android Controls:
Sides of screen: Ball movements
Pause button: Toggle Pause Game

Gamepad Controls:
Joystick/D-Pad: Ball movements
Start: Toggle Pause Game`,
  },
  {
    name: "Phaser Endless Runner",
    githubLink: "https://github.com/MudiaZuwa/Phaser-Endless-Runner",
    pageLink: "https://mudiazuwa.github.io/Phaser-Endless-Runner/ ",
    code: [HTMLLogo, CSSLogo, JavaScriptLogo, PhaserJsLogo],
    description: `I designed a Phaser Endless Runner, a 2D game utilizing Phaser 3 and JavaScript. The game features a character running across a platform, avoiding incoming obstacles.
Keyboard Controls:
Spacebar: Jumping, Start/Restart Game.
Esc: Pause Game`,
  },
  {
    name: "MMO Platformer",
    githubLink: "https://github.com/MudiaZuwa/MMO-Platformer",
    pageLink: "https://mudiazuwa.github.io/MMO-Platformer/ ",
    code: [HTMLLogo, CSSLogo, JavaScriptLogo, FirebaseLogo],
    description: ` A 2D MMO-Platformer game crafted using HTML canvas, integrating Firebase Realtime Database to relay data, character positions, and actions between users. The game entails a user-controlled character navigating three distinct 2D platform rooms.
Keyboard Controls:
A: Move Player Left
D: Move Player Right
W: Jump
S: Light Attack
Z: Heavy Attack`,
  },
  {
    name: "Canvas Chess",
    githubLink: "https://github.com/MudiaZuwa/Canvas-Chess",
    pageLink: "https://mudiazuwa.github.io/Canvas-Chess/",
    code: [HTMLLogo, CSSLogo, JavaScriptLogo],
    description: ` A chess game implemented with HTML canvas, supporting two complete chess sets for two users to engage in a match. The game displays possible moves when a chess piece is clicked.`,
  },
  {
    name: "Image Slide Puzzle",
    githubLink: "https://github.com/MudiaZuwa/Image-Slide-Puzzle",
    pageLink: "https://mudiazuwa.github.io/Image-Slide-Puzzle/",
    code: [HTMLLogo, CSSLogo, JavaScriptLogo],
    description: `A 2D puzzle game designed with HTML canvas, featuring a 4x6 grid tile arrangement of a user-selected image split into 24 pieces. The objective is to rearrange the tiles by dragging them to reconstruct the original image.
Mouse/Android Controls:
Drag tiles.`,
  },
  {
    name: "2D Fighting Game",
    githubLink: "https://github.com/MudiaZuwa/2d-Fighting-Game",
    pageLink: "https://mudiazuwa.github.io/2d-Fighting-Game/",
    code: [HTMLLogo, CSSLogo, JavaScriptLogo],
    description: ` A 2D fighting game developed using HTML canvas. Users can play against the computer or challenge friends, choosing their preferred controls.
Keyboard Controls:
Player 1:
A: Move Left
D: Move Right
W: Jump
S: Light Attack
Z: Heavy Attack

Player 2:
Arrow Left: Move Left
Arrow Right: Move Right
Arrow Up: Jump and menu cursor movements
Arrow Down: Light Attack and menu cursor movements
Shift: Heavy Attack
Enter: Select menu option
Esc: Toggle Pause Game

Gamepad Controls:
Joystick/D-Pad: Player movements and menu cursor movements
A: Light Attack and select menu option
B: Heavy Attack and back button
Start: Toggle Pause Game`,
  },
];
