/**
 * Comprehensive SEO Metadata Configuration
 * for Adebayo Inioluwa Marvellous Portfolio
 */

export const siteConfig = {
  name: "Adebayo Inioluwa Marvellous",
  title: "Adebayo Inioluwa Marvellous - Full Stack Software Developer & AI Solutions Expert",
  description: "Adebayo Inioluwa Marvellous is a Nigerian full-stack software developer with 6+ years of experience in AI solutions, web development, mobile apps, API integration, automation, and UI/UX design. Expert in React, Next.js, Python, Node.js, Firebase, and more.",
  url: "https://marvellousadebayo.com", // Update with your actual domain
  ogImage: "/assets/og-image.jpg",
  keywords: [
    // Personal Brand
    "Adebayo Inioluwa Marvellous",
    "Marvellous Adebayo",
    "Adebayo Inioluwa",
    "Marvellous Adebayo portfolio",
    
    // Primary Skills
    "Full Stack Developer Nigeria",
    "Software Engineer Nigeria",
    "AI Solutions Developer",
    "Machine Learning Engineer",
    "Web Developer Lagos",
    
    // Technologies
    "React Developer Nigeria",
    "Next.js Developer",
    "Python Developer",
    "Node.js Developer",
    "Firebase Developer",
    "TypeScript Developer",
    "JavaScript Expert",
    
    // Specific Services
    "AI Chatbot Development",
    "Web Application Development",
    "Mobile App Development",
    "API Integration Services",
    "Python Automation",
    "Bot Development",
    "Trading Bot Developer",
    "WhatsApp API Integration",
    "SMS API Integration",
    
    // Specialized
    "React Native Developer",
    "Flutter Developer",
    "UI/UX Designer",
    "Graphic Designer",
    "SEO Specialist",
    "Presentation Designer",
    
    // Project Types
    "AI-Powered Messaging Platform",
    "Student Management System",
    "E-commerce Development",
    "Voting System Development",
    "Restaurant Website Design",
    
    // Technologies Stack
    "MongoDB Developer",
    "MySQL Developer",
    "Firebase Firestore",
    "FastAPI Developer",
    "Flask Developer",
    "Solidity Smart Contracts",
    "Blockchain Developer",
    
    // Locations
    "Software Developer Nigeria",
    "Freelance Developer Lagos",
    "Remote Developer Nigeria",
    "Nigerian Software Engineer",
    
    // Education & Experience
    "Computer Science Graduate",
    "6 Years Programming Experience",
    "Tini Technologies Founder",
    "Mico Technologies Intern",
  ],
  author: {
    name: "Adebayo Inioluwa Marvellous",
    email: "adebayoinioluwamarv@gmail.com",
    phone: "+234 813 373 0145",
    linkedin: "https://www.linkedin.com/in/adebayo-inioluwa-m",
    github: "https://github.com/Marvellous-is-cool",
    location: "Lagos, Nigeria",
    nationality: "Nigerian",
    languages: ["English", "Yoruba", "Spanish", "French"],
  },
  social: {
    linkedin: "https://www.linkedin.com/in/adebayo-inioluwa-m",
    github: "https://github.com/Marvellous-is-cool",
    twitter: "https://twitter.com/marvellousadebayo", // Update with actual
    instagram: "https://instagram.com/marvellousadebayo", // Update with actual
  },
  services: [
    {
      name: "AI Solution Softwares",
      description: "Custom AI-powered web and mobile applications with machine learning capabilities",
      category: "Artificial Intelligence",
    },
    {
      name: "Web Development",
      description: "Full-stack web development with React, Next.js, Node.js, and modern frameworks",
      category: "Web Development",
    },
    {
      name: "Mobile App Development",
      description: "Cross-platform mobile applications using React Native and Flutter",
      category: "Mobile Development",
    },
    {
      name: "Bot Development",
      description: "Intelligent chatbots, trading bots, and automation bots in JavaScript and Python",
      category: "Automation",
    },
    {
      name: "API Integration",
      description: "Seamless integration of third-party APIs and custom API development",
      category: "Backend Development",
    },
    {
      name: "Python Automation",
      description: "Custom Python scripts for task automation and data processing",
      category: "Automation",
    },
    {
      name: "UI/UX Design",
      description: "User-centered interface and experience design for web and mobile",
      category: "Design",
    },
    {
      name: "SEO Optimization",
      description: "Data-driven SEO strategies for improved search engine rankings",
      category: "Digital Marketing",
    },
    {
      name: "Graphics Design",
      description: "Professional graphic design for branding and marketing materials",
      category: "Design",
    },
    {
      name: "Presentation Design",
      description: "Compelling presentation designs for business and education",
      category: "Design",
    },
  ],
  projects: [
    {
      name: "Imbyher.ai",
      description: "AI-powered messaging platform with emotional intelligence for scheduling messages",
      url: "https://imbyher.ai",
      category: "AI Solution",
      technologies: ["React.js", "Next.js", "TypeScript", "AI/ML", "WhatsApp API", "SMS API"],
    },
    {
      name: "Fyblincssa",
      description: "Comprehensive student management system with ID card generation",
      url: "https://fyblincssa.vercel.app",
      category: "Full Stack",
      technologies: ["Next.js", "React.js", "Firebase", "TypeScript", "Tailwind CSS"],
    },
    {
      name: "ASF Votes",
      description: "Full-stack voting system with Paystack integration and real-time results",
      url: "https://asfvotes.vercel.app",
      category: "Full Stack",
      technologies: ["Next.js", "Firebase", "Paystack API", "Authentication"],
    },
  ],
  skills: {
    frontend: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Angular"],
    backend: ["Node.js", "Python", "FastAPI", "Flask", "Firebase", "MySQL", "MongoDB"],
    mobile: ["React Native", "Flutter", "Dart"],
    ai: ["Machine Learning", "AI Integration", "Natural Language Processing"],
    blockchain: ["Solidity", "Smart Contracts"],
    tools: ["Git", "Docker", "VS Code", "Figma"],
    languages: ["JavaScript", "TypeScript", "Python", "C", "C++", "Dart", "Lua", "Solidity"],
  },
  experience: "6+ Years",
  availability: "Available for Freelance",
};

// JSON-LD Schema for Person (Rich Snippets)
export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Adebayo Inioluwa Marvellous",
  alternateName: "Marvellous Adebayo",
  description: "Full-stack software developer and AI solutions expert with 6+ years of experience",
  url: siteConfig.url,
  image: `${siteConfig.url}/assets/photo.png`,
  email: "adebayoinioluwamarv@gmail.com",
  telephone: "+234-813-373-0145",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos",
    addressCountry: "Nigeria",
  },
  nationality: {
    "@type": "Country",
    name: "Nigeria",
  },
  jobTitle: "Full Stack Software Developer",
  worksFor: {
    "@type": "Organization",
    name: "Tini Technologies",
    url: siteConfig.url,
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "University", // Update with actual university
  },
  knowsAbout: [
    "Software Development",
    "Artificial Intelligence",
    "Machine Learning",
    "Web Development",
    "Mobile Development",
    "API Integration",
    "Python Programming",
    "JavaScript Programming",
    "React Development",
    "Next.js Development",
    "UI/UX Design",
    "Graphic Design",
    "SEO Optimization",
  ],
  knowsLanguage: ["English", "Yoruba", "Spanish", "French"],
  sameAs: [
    "https://www.linkedin.com/in/adebayo-inioluwa-m",
    "https://github.com/Marvellous-is-cool",
  ],
};

// JSON-LD Schema for Professional Service
export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Adebayo Inioluwa Marvellous - Software Development Services",
  description: siteConfig.description,
  url: siteConfig.url,
  logo: `${siteConfig.url}/assets/photo.png`,
  image: `${siteConfig.url}/assets/photo.png`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos",
    addressCountry: "Nigeria",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "6.5244",
    longitude: "3.3792",
  },
  areaServed: [
    {
      "@type": "Country",
      name: "Nigeria",
    },
    {
      "@type": "Place",
      name: "Worldwide (Remote)",
    },
  ],
  serviceType: [
    "Software Development",
    "Web Development",
    "Mobile App Development",
    "AI Solutions",
    "API Integration",
    "Automation Services",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+234-813-373-0145",
    contactType: "Customer Service",
    email: "adebayoinioluwamarv@gmail.com",
    availableLanguage: ["English", "Yoruba"],
  },
};

// JSON-LD Schema for Portfolio Website
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.title,
  description: siteConfig.description,
  url: siteConfig.url,
  author: {
    "@type": "Person",
    name: siteConfig.author.name,
  },
  inLanguage: "en-US",
  copyrightYear: new Date().getFullYear(),
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteConfig.url}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

// Organization Schema
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Tini Technologies",
  founder: {
    "@type": "Person",
    name: "Adebayo Inioluwa Marvellous",
  },
  url: siteConfig.url,
  logo: `${siteConfig.url}/assets/photo.png`,
  description: "Software development and technology solutions company founded by Adebayo Inioluwa Marvellous",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos",
    addressCountry: "Nigeria",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+234-813-373-0145",
    contactType: "Founder",
    email: "adebayoinioluwamarv@gmail.com",
  },
  sameAs: [
    "https://www.linkedin.com/in/adebayo-inioluwa-m",
    "https://github.com/Marvellous-is-cool",
  ],
};
