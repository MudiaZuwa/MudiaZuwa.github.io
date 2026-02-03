// Tech stack data with tiers and niches for filtering
// Tiers: "core" (always visible) | "secondary" (behind show more)
// Niches: "fullstack" | "agent" | "realtime" | "web3" | "creative" | "tool"

export const techData = [
    // === CORE TIER (Always visible, Full Stack + Agent focus) ===
    {
        name: "JavaScript",
        img: "/assets/javascript-1.svg",
        tier: "core",
        niches: ["fullstack", "agent", "realtime", "creative"]
    },
    {
        name: "TypeScript",
        img: "/assets/typescript-svgrepo-com.svg",
        tier: "core",
        niches: ["fullstack", "agent"]
    },
    {
        name: "React",
        img: "/assets/react-2.svg",
        tier: "core",
        niches: ["fullstack", "agent"]
    },
    {
        name: "Next.js",
        img: "/assets/nextjs-icon-svgrepo-com.svg",
        tier: "core",
        niches: ["fullstack", "agent"]
    },
    {
        name: "Node.js",
        img: "/assets/nodejs-3.svg",
        tier: "core",
        niches: ["fullstack", "agent", "realtime"]
    },
    {
        name: "LangChain",
        img: "/assets/Langchain--Streamline-Simple-Icons.svg",
        tier: "core",
        niches: ["agent"]
    },
    {
        name: "MongoDB",
        img: "/assets/mongodb-svgrepo-com.svg",
        tier: "core",
        niches: ["fullstack"]
    },
    {
        name: "Tailwind",
        img: "/assets/tailwind-svgrepo-com.svg",
        tier: "core",
        niches: ["fullstack"]
    },
    {
        name: "Firebase",
        img: "/assets/firebase-icon.svg",
        tier: "core",
        niches: ["fullstack", "realtime"]
    },
    {
        name: "Socket.io",
        img: "/assets/socket-io-svgrepo-com.svg",
        tier: "core",
        niches: ["realtime", "fullstack"]
    },
    {
        name: "Docker",
        img: "/assets/docker-svgrepo-com.svg",
        tier: "core",
        niches: ["fullstack", "tool"]
    },
    {
        name: "GitHub",
        img: "/assets/github-icon-1.svg",
        tier: "core",
        niches: ["tool"]
    },

    // === SECONDARY TIER (Behind "Show More") ===
    {
        name: "WebRTC",
        img: "/assets/webrtc-svgrepo-com.svg",
        tier: "secondary",
        niches: ["realtime"]
    },
    {
        name: "Solidity",
        img: "/assets/light-solidity-svgrepo-com.svg",
        tier: "secondary",
        niches: ["web3"]
    },
    {
        name: "Three.js",
        img: "/assets/threejs-1.svg",
        tier: "secondary",
        niches: ["creative"]
    },
    {
        name: "Electron.js",
        img: "/assets/electron-svgrepo-com.svg",
        tier: "secondary",
        niches: ["fullstack"]
    },
    {
        name: "Bootstrap",
        img: "/assets/bootstrap-5-1.svg",
        tier: "secondary",
        niches: ["fullstack"]
    },
    {
        name: "Phaser.js",
        img: "/Phaser Logo Web Quality.png",
        tier: "secondary",
        niches: ["creative"]
    },
];

// Helper functions
export const getCoreTechs = () => techData.filter((t) => t.tier === "core");
export const getSecondaryTechs = () => techData.filter((t) => t.tier === "secondary");
export const getTechsByNiche = (niche) => techData.filter((t) => t.niches?.includes(niche));
