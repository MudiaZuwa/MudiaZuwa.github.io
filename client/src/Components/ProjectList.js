const HTMLLogo = "/assets/html-1.svg";
const CSSLogo = "/assets/css-3.svg";
const JavaScriptLogo = "/assets/javascript-1.svg";
const TypeScriptLogo = "/assets/typescript-svgrepo-com.svg";
const BootStrapLogo = "/assets/bootstrap-5-1.svg";
const ReactLogo = "/assets/react-2.svg";
const NextJsLogo = "/assets/nextjs-icon-svgrepo-com.svg";
const NodeJsLogo = "/assets/nodejs-3.svg";
const ThreeJsLogo = "/assets/threejs-1.svg";
const ElectronJsLogo = "/assets/electron-svgrepo-com.svg";
const FirebaseLogo = "/assets/firebase-icon.svg";
const GitHubLogo = "/assets/github-icon-1.svg";
const SocketIoLogo = "/assets/socket-io-svgrepo-com.svg";
const WebRTCLogo = "/assets/webrtc-svgrepo-com.svg";
const MongoDbLogo = "/assets/mongodb-svgrepo-com.svg";
const TailwindLogo = "/assets/tailwind-svgrepo-com.svg";
const SolidityLogo = "/assets/light-solidity-svgrepo-com.svg";
const PhaserJsLogo = "/Phaser Logo Web Quality.png";
const LangChainLogo = "/assets/Langchain--Streamline-Simple-Icons.svg";

export const ProjectList = [
  // === FEATURED TIER ===
  {
    name: "Plexus.js",
    tier: "featured",
    niches: ["fullstack", "agent"],
    pageLink: "https://plexusjs.vercel.app/",
    npmLink: "https://www.npmjs.com/package/@mzhub/plexus",
    code: [ReactLogo, TypeScriptLogo, ],
    description: `Plexus.js is an AI-native fullstack framework for React that enables developers to build agent-powered applications with file-based routing and security-first architecture.

Key features:
- File-based routing with automatic route discovery
- Built-in AI agent system with tool definitions using Zod schemas
- Agent inheritance and tool scoping for modular architecture
- Multi-provider support (OpenAI, Groq, Gemini)
- Cost and iteration limits with typed error handling
- WebSocket-based real-time agent communication
- CLI for project scaffolding, development, and production builds

The framework abstracts away the complexity of integrating LLMs into web applications, allowing developers to define agents and tools declaratively while the framework handles streaming, error recovery, and security.`,
    intro:
      "AI-native fullstack framework for React. Build agent-powered applications with file-based routing, declarative tool definitions, and security-first architecture.",
  },
  {
    name: "PromptC",
    tier: "featured",
    niches: ["agent"],
    pageLink: "https://promptc.vercel.app/",
    npmLink: "https://www.npmjs.com/package/@mzhub/promptc",
    code: [NextJsLogo, TailwindLogo, NodeJsLogo, FirebaseLogo, TypeScriptLogo],
    description: `PromptC is a type-safe LLM program compiler for JavaScript/TypeScript, bringing DSPy-style prompt compilation to the JavaScript ecosystem.

Key features:
- Define schemas for structured LLM outputs
- Write programs that compose multiple LLM calls
- Automatic prompt optimization using evaluation data
- Type-safe throughout the pipeline
- Works with any LLM provider

PromptC enables developers to move beyond prompt engineering into prompt programming, where prompts are treated as code that can be tested, versioned, and optimized automatically.`,
    intro:
      "Type-safe LLM program compiler for JavaScript/TypeScript. Define schemas, write programs, and let the compiler optimize your prompts automatically using evaluation data.",
  },
  {
    name: "QuickXMarket",
    tier: "featured",
    niches: ["fullstack", "agent", "realtime"],
    pageLink: "https://quickxmarket.com.ng/",
    code: [ReactLogo, NodeJsLogo, MongoDbLogo, TailwindLogo, SocketIoLogo, LangChainLogo],
    description: `QuickXMarket is a hyperlocal ecommerce and delivery platform designed to connect customers, vendors, riders, and admins seamlessly. 

It started as a single website but has grown into a multi-platform ecosystem:
- 2 websites (customer and vendor)
- 4 mobile apps (customer, vendor, rider, admin)
- WhatsApp & Telegram bots (Quickie) that allow users to place orders, make inquiries, and even send voice notes that get transcribed automatically.

QuickXMarket's goal is to make buying, selling, and delivering goods simpler for students, small businesses, and local communities, beginning at the University of Benin.`,
    intro:
      "Multi-platform ecommerce and delivery ecosystem featuring websites, mobile apps, and AI-powered chatbots for ordering and delivery.",
  },
  {
    name: "Buzz-It",
    tier: "featured",
    niches: ["fullstack", "realtime"],
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
      "Full-featured social media and gaming platform with real-time messaging, WebRTC voice/video calls, and multiplayer games.",
  },

  // === SECONDARY TIER ===
  {
    name: "MudiaZuwa Wallet",
    tier: "secondary",
    niches: ["web3", "fullstack"],
    githubLink: "https://github.com/MudiaZuwa/MudiaZuwa-Wallet",
    pageLink: "https://mudiazuwa-wallet.vercel.app/",
    code: [ReactLogo, NodeJsLogo, TailwindLogo, SolidityLogo],
    description: `MudiaZuwa Wallet is a simple experimental crypto wallet built around a custom ERC-20 test token. 

Key features:
- Web3Auth integration: users log in with Google/Apple accounts to create secure EOA wallets without managing private keys.
- Biconomy smart wallets: users transact without needing native tokens for gas fees.
- Custom paymaster contract: attempted implementation to allow paying gas fees with the custom ERC-20 token.
- Telegram bot faucet: testers can claim free tokens by sending their wallet address.`,
    intro:
      "Experimental crypto wallet for custom ERC-20 token with Web3Auth login, Biconomy smart wallets, and Telegram faucet bot.",
  },
  {
    name: "ZuwaCart",
    tier: "secondary",
    niches: ["fullstack"],
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
      "Ecommerce platform with vendor management and Paystack payment integration.",
  },

  // === ARCHIVED TIER (Creative/Games) ===
  {
    name: "3D Fighting Demo",
    tier: "archived",
    niches: ["creative"],
    githubLink: "https://github.com/MudiaZuwa/3D-Fighting-Demo",
    pageLink: "https://mudiazuwa.github.io/3D-Fighting-Demo/",
    downloadLink:
      "https://drive.google.com/uc?export=download&id=1-1neaJA5uBaN5lILdYu1WZBof6EitEAF",
    code: [HTMLLogo, CSSLogo, JavaScriptLogo, ThreeJsLogo],
    description: `A 3D fighting game demo utilizing Three.js and the Cannon.js physics engine. Players can engage in battles against the computer or challenge their friends.`,
    intro:
      "3D fighting game with Three.js and Cannon.js physics, featuring multiple characters and control options.",
  },
  {
    name: "3D Space Shooter",
    tier: "archived",
    niches: ["creative"],
    githubLink: "https://github.com/MudiaZuwa/3D-Space-Shooter",
    pageLink: "https://mudiazuwa.github.io/3D-Space-Shooter/",
    code: [HTMLLogo, CSSLogo, JavaScriptLogo, ThreeJsLogo],
    description: `A 3D space shooter game using Three.js with enemies, obstacles, and customizable controls.`,
  },
  {
    name: "Local Whot Card",
    tier: "archived",
    niches: ["realtime", "creative"],
    githubLink: "https://github.com/MudiaZuwa/LocalWhot",
    pageLink: "https://local-whot.vercel.app/",
    code: [ReactLogo, JavaScriptLogo, SocketIoLogo],
    description: `A multiplayer Whot card game built with React and Socket.io for local or WLAN play.`,
  },
  {
    name: "Ball Fall",
    tier: "archived",
    niches: ["creative"],
    githubLink: "https://github.com/MudiaZuwa/Ball-Fall",
    pageLink: "https://mudiazuwa.github.io/Ball-Fall/",
    code: [HTMLLogo, CSSLogo, JavaScriptLogo],
    description: `A 2D HTML canvas game where players control a falling ball to land on rising platforms.`,
  },
  {
    name: "Phaser Endless Runner",
    tier: "archived",
    niches: ["creative"],
    githubLink: "https://github.com/MudiaZuwa/Phaser-Endless-Runner",
    pageLink: "https://mudiazuwa.github.io/Phaser-Endless-Runner/",
    code: [HTMLLogo, CSSLogo, JavaScriptLogo, PhaserJsLogo],
    description: `A 2D endless runner game using Phaser 3.`,
  },
  {
    name: "MMO Platformer",
    tier: "archived",
    niches: ["creative", "realtime"],
    githubLink: "https://github.com/MudiaZuwa/MMO-Platformer",
    pageLink: "https://mudiazuwa.github.io/MMO-Platformer/",
    code: [HTMLLogo, CSSLogo, JavaScriptLogo, FirebaseLogo],
    description: `A 2D MMO-Platformer with Firebase Realtime Database for multiplayer synchronization.`,
  },
  {
    name: "Canvas Chess",
    tier: "archived",
    niches: ["creative"],
    githubLink: "https://github.com/MudiaZuwa/Canvas-Chess",
    pageLink: "https://mudiazuwa.github.io/Canvas-Chess/",
    code: [HTMLLogo, CSSLogo, JavaScriptLogo],
    description: `A chess game implemented with HTML canvas for two players.`,
  },
  {
    name: "Image Slide Puzzle",
    tier: "archived",
    niches: ["creative"],
    githubLink: "https://github.com/MudiaZuwa/Image-Slide-Puzzle",
    pageLink: "https://mudiazuwa.github.io/Image-Slide-Puzzle/",
    code: [HTMLLogo, CSSLogo, JavaScriptLogo],
    description: `A 2D puzzle game with drag-and-drop tile rearrangement.`,
  },
  {
    name: "2D Fighting Game",
    tier: "archived",
    niches: ["creative"],
    githubLink: "https://github.com/MudiaZuwa/2d-Fighting-Game",
    pageLink: "https://mudiazuwa.github.io/2d-Fighting-Game/",
    code: [HTMLLogo, CSSLogo, JavaScriptLogo],
    description: `A 2D fighting game using HTML canvas with local multiplayer and AI opponent.`,
  },
];

// Helper functions for filtering
export const getProjectsByTier = (tier) => ProjectList.filter((p) => p.tier === tier);
export const getProjectsByNiche = (niche) => ProjectList.filter((p) => p.niches?.includes(niche));
export const getFeaturedProjects = () => getProjectsByTier("featured");
export const getSecondaryProjects = () => getProjectsByTier("secondary");
export const getArchivedProjects = () => getProjectsByTier("archived");

