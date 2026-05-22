import { siteConfig } from '../metadata';

export const metadata = {
  title: "Projects & Portfolio",
  description: "Explore the backend engineering and AI/NLP projects of Adebayo Inioluwa Marvellous. Featuring Python, FastAPI, Django, Next.js, and distributed systems built for production.",
  openGraph: {
    title: "Projects & Portfolio - Adebayo Inioluwa Marvellous",
    description: "Backend engineering, AI/NLP, and full-stack projects built for production",
    type: "website",
    url: `${siteConfig.url}/projects`,
  },
};

export default function WorkLayout({ children }) {
  return children;
}
