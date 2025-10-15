// Server-side metadata for Work page
import { siteConfig } from '../metadata';

export const metadata = {
  title: "Projects & Portfolio - Adebayo Inioluwa Marvellous",
  description: "Explore the software development projects of Adebayo Inioluwa Marvellous including AI-powered applications, full-stack web solutions, mobile apps, and innovative digital experiences. View live projects in React, Next.js, Python, Firebase, and more.",
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
    title: "Projects & Portfolio - Adebayo Inioluwa Marvellous",
    description: "Innovative software projects spanning AI, web, and mobile development",
    type: "website",
    url: `${siteConfig.url}/work`,
  },
};
