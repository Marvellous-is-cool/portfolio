/**
 * Analytics Helper
 * Google Analytics and other tracking implementations
 */

// Google Analytics pageview tracking
export const pageview = (url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
      page_path: url,
    });
  }
};

// Google Analytics event tracking
export const event = ({ action, category, label, value }) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track button clicks
export const trackButtonClick = (buttonName) => {
  event({
    action: 'click',
    category: 'Button',
    label: buttonName,
  });
};

// Track downloads
export const trackDownload = (fileName) => {
  event({
    action: 'download',
    category: 'File',
    label: fileName,
  });
};

// Track external link clicks
export const trackExternalLink = (url) => {
  event({
    action: 'click',
    category: 'External Link',
    label: url,
  });
};

// Track form submissions
export const trackFormSubmission = (formName) => {
  event({
    action: 'submit',
    category: 'Form',
    label: formName,
  });
};

// Track social media clicks
export const trackSocialClick = (platform) => {
  event({
    action: 'click',
    category: 'Social Media',
    label: platform,
  });
};

// Track project views
export const trackProjectView = (projectName) => {
  event({
    action: 'view',
    category: 'Project',
    label: projectName,
  });
};

// Track service inquiries
export const trackServiceInquiry = (serviceName) => {
  event({
    action: 'inquiry',
    category: 'Service',
    label: serviceName,
  });
};
