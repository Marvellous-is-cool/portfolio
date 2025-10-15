import { siteConfig } from '../metadata';

export const metadata = {
  title: "Contact | Get in Touch",
  description: "Contact Adebayo Inioluwa Marvellous for software development projects, AI solutions, web development, mobile apps, and freelance work. Based in Lagos, Nigeria. Available for remote projects worldwide. Email: adebayoinioluwamarvellous1@gmail.com | Phone: +234 813 373 0145",
  openGraph: {
    title: "Contact - Adebayo Inioluwa Marvellous",
    description: "Get in touch for software development projects and collaborations",
    type: "website",
    url: `${siteConfig.url}/contact`,
  },
};

export default function ContactLayout({ children }) {
  return children;
}
