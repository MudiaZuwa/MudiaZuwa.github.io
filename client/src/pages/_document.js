import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {" "}
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
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
