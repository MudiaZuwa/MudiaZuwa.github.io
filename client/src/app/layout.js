import "@/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const metadata = {
    title: "Osamudiamen E. Osazuwa (Mudia Zuwa) | Web Developer Portfolio",
    description: "Portfolio of Osamudiamen E. Osazuwa (also known as Mudia Zuwa), showcasing web development projects, services, and contact details.",
    metadataBase: new URL("https://mudiazuwa.vercel.app"),
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: "Osamudiamen E. Osazuwa (Mudia Zuwa) | Web Developer Portfolio",
        description: "Explore the projects and services of Osamudiamen E. Osazuwa (Mudia Zuwa), a web developer passionate about building web experiences.",
        type: "website",
        url: "https://mudiazuwa.vercel.app/",
        images: [{ url: "/og-image.png" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Osamudiamen E. Osazuwa (Mudia Zuwa) | Web Developer Portfolio",
        description: "Explore the projects and services of Osamudiamen E. Osazuwa (Mudia Zuwa), a web developer passionate about building web experiences.",
        images: ["/og-image.png"],
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
                    rel="stylesheet"
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Person",
                            name: "Osamudiamen E. Osazuwa",
                            alternateName: "Mudia Zuwa",
                            url: "https://mudiazuwa.vercel.app/",
                            image: "https://mudiazuwa.vercel.app/og-image.png",
                            jobTitle: "Web Developer",
                            worksFor: {
                                "@type": "Organization",
                                name: "Freelance",
                            },
                            sameAs: [
                                "https://github.com/mudiazuwa",
                                "https://linkedin.com/in/mudiazuwa",
                                "https://x.com/mudia_zuwa",
                            ],
                        }),
                    }}
                />
                <script defer src="https://tracker-dev.revvy-v2.workers.dev/ga.iife.js"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `window.EULAV_SITE_ID = "4e69bad1-c966-4f40-922e-8afb3c9c475a";
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function () { if (window.startEulavTracker) window.startEulavTracker(); });
} else {
  if (window.startEulavTracker) window.startEulavTracker();
}`,
                    }}
                />
            </head>
            <body>{children}</body>
        </html>
    );
}
