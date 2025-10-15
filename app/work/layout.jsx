import { siteConfig } from '../metadata';

export const metadata = {
  title: "Projects & Portfolio",
  description: "Explore the software development projects of Adebayo Inioluwa Marvellous including AI-powered applications, full-stack web solutions, mobile apps, and innovative digital experiences. View live projects in React, Next.js, Python, Firebase, and more.",
  openGraph: {
    title: "Projects & Portfolio - Adebayo Inioluwa Marvellous",
    description: "Innovative software projects spanning AI, web, and mobile development",
    type: "website",
    url: `${siteConfig.url}/work`,
  },
};

export default function WorkLayout({ children }) {
  return children;
}
