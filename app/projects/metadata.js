// Server-side metadata for Work page
import { siteConfig } from "../metadata";

export const metadata = {
  title: "Projects & Portfolio - Inioluwa Marvellous Adebayo",
  description:
    "Explore the software development projects of Inioluwa Marvellous Adebayo including AI-powered applications, full-stack web solutions, mobile apps, and innovative digital experiences. View live projects in React, Next.js, Python, Firebase, and more.",
  keywords: [
    ...siteConfig.keywords,
    "software projects Nigeria",
    "web development portfolio",
    "AI project examples",
    "React projects",
    "Next.js applications",
    "Firebase projects",
    "mobile app portfolio",
    "full-stack projects",
    "Marvellous Adebayo projects",
    "Nigerian developer portfolio",
  ],
  openGraph: {
    title: "Projects & Portfolio - Inioluwa Marvellous Adebayo",
    description:
      "Innovative software projects spanning AI, web, and mobile development",
    type: "website",
    url: `${siteConfig.url}/projects`,
  },
};
