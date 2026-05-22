import { siteConfig } from "../metadata";

export const metadata = {
  title: "Resume & Experience",
  description:
    "Professional resume of Inioluwa Marvellous Adebayo: Backend software engineer with 6+ years experience in Python, FastAPI, Django, Node.js, distributed systems, and AI/NLP. Available for freelance work.",
  openGraph: {
    title: "Resume - Inioluwa Marvellous Adebayo",
    description:
      "6+ years of experience in backend engineering, distributed systems, and AI/NLP",
    type: "profile",
    url: `${siteConfig.url}/resume`,
  },
};

export default function ResumeLayout({ children }) {
  return children;
}
