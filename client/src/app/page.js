"use client";

import Topbar from "@/Components/Topbar";
import About from "@/Components/About";
import Projects from "@/Components/Projects";
import Contact from "@/Components/Contact";
import Services from "@/Components/Services";
import ChatWindow from "@/Components/ChatWindow";
import Title from "@/Components/Title";
import { Container } from "react-bootstrap";



export default function HomePage() {
    return (
        <div className="bg-oil-black font-display text-[#E0E0E0]">
            <div className="top">
                <Topbar />
                <div className="titleBody">
                    <Container>
                        <Title />
                    </Container>
                </div>
            </div>
            <Container>
                <Services />
                <Projects />
                <About />
                <ChatWindow />
                <Contact />
            </Container>
        </div>
    );
}
