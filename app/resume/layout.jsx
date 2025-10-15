import { siteConfig } from '../metadata';

export const metadata = {
  title: "Resume & Experience",
  description: "Professional resume of Adebayo Inioluwa Marvellous: 6+ years experience in software development, AI solutions, web & mobile development. Expert in React, Next.js, Python, Node.js, Firebase, TypeScript. Available for freelance work.",
  openGraph: {
    title: "Resume - Adebayo Inioluwa Marvellous",
    description: "6+ years of experience in full-stack development and AI solutions",
    type: "profile",
    url: `${siteConfig.url}/resume`,
  },
};

export default function ResumeLayout({ children }) {
  return children;
}
