/**
 * SEO Component - Reusable SEO metadata generator
 * Use this for dynamic pages and individual project pages
 */

import { siteConfig } from '../app/metadata';

export function generatePageMetadata({
  title,
  description,
  keywords = [],
  image,
  url,
  type = 'website',
  author,
  publishedTime,
  modifiedTime,
}) {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title;
  const pageDescription = description || siteConfig.description;
  const pageImage = image || siteConfig.ogImage;
  const pageUrl = url ? `${siteConfig.url}${url}` : siteConfig.url;
  const allKeywords = [...siteConfig.keywords, ...keywords];

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: allKeywords,
    authors: [{ name: author || siteConfig.author.name }],
    
    openGraph: {
      type,
      url: pageUrl,
      title: pageTitle,
      description: pageDescription,
      images: [
        {
          url: pageImage,
          width: 1200,
          height: 630,
          alt: title || siteConfig.name,
        },
      ],
      siteName: siteConfig.name,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [pageImage],
      creator: siteConfig.social.twitter,
    },
    
    alternates: {
      canonical: pageUrl,
    },
  };
}

// Generate metadata for project pages
export function generateProjectMetadata(project) {
  return generatePageMetadata({
    title: `${project.title} - ${project.category} Project`,
    description: project.description,
    keywords: [
      ...project.stack.map(tech => `${tech.name} project`),
      project.category,
      `${project.title} by Marvellous Adebayo`,
    ],
    image: project.image,
    url: `/work#${project.title.toLowerCase().replace(/\s+/g, '-')}`,
  });
}

// Generate JSON-LD for individual projects
export function generateProjectSchema(project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "description": project.description,
    "author": {
      "@type": "Person",
      "name": siteConfig.author.name,
      "url": siteConfig.url,
    },
    "url": project.live,
    "image": `${siteConfig.url}${project.image}`,
    "dateCreated": project.dateCreated || new Date().toISOString(),
    "genre": project.category,
    "keywords": project.stack.map(s => s.name).join(', '),
    "programmingLanguage": project.stack.map(s => ({
      "@type": "ComputerLanguage",
      "name": s.name,
    })),
  };
}

// Generate breadcrumb schema
export function generateBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${siteConfig.url}${item.path}`,
    })),
  };
}

// Generate FAQ schema
export function generateFAQSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };
}

// Generate service schema for individual services
export function generateServiceSchema(service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "provider": {
      "@type": "Person",
      "name": siteConfig.author.name,
      "url": siteConfig.url,
    },
    "areaServed": {
      "@type": "Place",
      "name": "Worldwide",
    },
    "serviceType": service.category,
  };
}
