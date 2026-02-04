"use client";

import Topbar from "@/Components/Topbar";
import About from "@/Components/About";
import Projects from "@/Components/Projects";
import Contact from "@/Components/Contact";
import Services from "@/Components/Services";
import ChatWindow from "@/Components/ChatWindow";
import Title from "@/Components/Title";

export default function HomePage() {
    return (
        <div className="bg-oil-black font-display text-[#E0E0E0]">
            <div className="top">
                <Topbar />
                <div className="titleBody">
                    <div className="container ">
                        <Title />
                    </div>
                </div>
            </div>
            <div className="container ">
                <Services />
                <Projects />
                <About />
                <ChatWindow />
                <Contact />
            </div>
        </div>
    );
}
