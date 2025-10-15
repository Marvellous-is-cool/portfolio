import { siteConfig } from '../metadata';

export const metadata = {
  title: "Services | Software Development Services",
  description: "Professional software development services by Adebayo Inioluwa Marvellous: AI Solutions, Web Development, Mobile Apps, Bot Development, API Integration, Python Automation, UI/UX Design, SEO, Graphics & Presentation Design. Available for freelance projects.",
  openGraph: {
    title: "Services - Adebayo Inioluwa Marvellous",
    description: "Professional software development and design services",
    type: "website",
    url: `${siteConfig.url}/services`,
  },
};

export default function ServicesLayout({ children }) {
  return children;
}
