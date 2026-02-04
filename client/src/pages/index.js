import React from "react";
import Head from "next/head";
import Topbar from "@/Components/Topbar";
import About from "@/Components/About";
import Projects from "@/Components/Projects";
import Contact from "@/Components/Contact";
import Services from "@/Components/Services";
import ChatWindow from "@/Components/ChatWindow";
import Title from "@/Components/Title";

const App = () => {
  return (
    <>
      <Head>
        <title>
          Osamudiamen E. Osazuwa (Mudia Zuwa) | Web Developer Portfolio
        </title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Portfolio of Osamudiamen E. Osazuwa (also known as Mudia Zuwa), showcasing web development projects, services, and contact details."
        />
        <link rel="canonical" href="https://mudiazuwa.vercel.app/" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Osamudiamen E. Osazuwa (Mudia Zuwa) | Web Developer Portfolio"
        />
        <meta
          property="og:description"
          content="Explore the projects and services of Osamudiamen E. Osazuwa (Mudia Zuwa), a web developer passionate about building web experiences."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mudiazuwa.vercel.app/" />
        <meta
          property="og:image"
          content="https://mudiazuwa.vercel.app/og-image.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Osamudiamen E. Osazuwa (Mudia Zuwa) | Web Developer Portfolio"
        />
        <meta
          name="twitter:description"
          content="Explore the projects and services of Osamudiamen E. Osazuwa (Mudia Zuwa), a web developer passionate about building web experiences."
        />
        <meta
          name="twitter:image"
          content="https://mudiazuwa.vercel.app/og-image.png"
        />

        {/* SEO / Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Osamudiamen E. Osazuwa",
    "alternateName": "Mudia Zuwa",
    "url": "https://mudiazuwa.vercel.app/",
    "image": "https://mudiazuwa.vercel.app/og-image.png",
    "jobTitle": "Web Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "sameAs": [
      "https://github.com/mudiazuwa",
      "https://linkedin.com/in/mudiazuwa",
      "https://x.com/mudia_zuwa"
    ]
  }
  `,
          }}
        />
      </Head>

      <div className="bg-oil-black font-display text-[#E0E0E0]">
        <div className="top">
          <Topbar />
          <div className="titleBody">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
              <Title />
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <Services />
          <Projects />
          <About />
          <ChatWindow />
          <Contact />
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  return { props: {} };
}

export default App;
