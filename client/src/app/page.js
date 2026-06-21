"use client";

import Topbar from "@/Components/Topbar";
import Title from "@/Components/Title";
import Projects from "@/Components/Projects";
import About from "@/Components/About";
import TechStack from "@/Components/TechStack";
import Contact from "@/Components/Contact";
import ChatWindow from "@/Components/ChatWindow";

export default function HomePage() {
    return (
        <div className="bg-oil-black text-subtle font-display">
            <Topbar />
            <main>
                <div className="mx-auto max-w-[1400px]">
                    <Title />
                </div>
                <Projects />
                <div className="mx-auto max-w-[1400px]">
                    <About />
                </div>
                <TechStack />
                <Contact />
            </main>
            <ChatWindow />
        </div>
    );
}
