"use client";

import { useState, useEffect } from "react";
import { FaLinkedinIn } from "react-icons/fa";

const LinkedInBadge = ({
  theme = "dark",
  size = "medium",
  showIcon = true,
  className = "",
  iconClassName = "",
}) => {
  const [badgeLoaded, setBadgeLoaded] = useState(false);

  useEffect(() => {
    // Load LinkedIn badge script if not already loaded
    if (
      !document.querySelector(
        'script[src="https://platform.linkedin.com/badges/js/profile.js"]'
      )
    ) {
      const script = document.createElement("script");
      script.src = "https://platform.linkedin.com/badges/js/profile.js";
      script.async = true;
      script.defer = true;
      script.type = "text/javascript";
      script.onload = () => setBadgeLoaded(true);
      document.head.appendChild(script);
    } else {
      setBadgeLoaded(true);
    }
  }, []);

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {showIcon && (
        <div className={`text-accent ${iconClassName}`}>
          <FaLinkedinIn size={24} />
        </div>
      )}
      <div
        className="badge-base LI-profile-badge"
        data-locale="en_US"
        data-size={size}
        data-theme={theme}
        data-type="VERTICAL"
        data-vanity="adebayo-inioluwa-m"
        data-version="v1"
      >
        <a
          className="badge-base__link LI-simple-link"
          href="https://ng.linkedin.com/in/adebayo-inioluwa-m?trk=profile-badge"
          target="_blank"
          rel="noopener noreferrer"
        >
          Adebayo Inioluwa Marvellous
        </a>
      </div>
    </div>
  );
};

export default LinkedInBadge;
