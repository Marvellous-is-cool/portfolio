import Link from "next/link";
import { useState, useEffect } from "react";

import { FaGithub, FaLinkedinIn, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Marvellous-is-cool" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/adebayo-inioluwa-m/",
  },
  { icon: <FaDiscord />, path: "https://discord.com/GK5tbZN9" },
  { icon: <FaXTwitter />, path: "https://x.com/coolbuoi" },
];

const Social = ({ containerStyles, iconStyles }) => {
  const [showLinkedInBadge, setShowLinkedInBadge] = useState(false);
  const [badgeLoaded, setBadgeLoaded] = useState(false);

  useEffect(() => {
    // Load LinkedIn badge script
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
    <div className={containerStyles}>
      {socials.map((item, index) => {
        const isLinkedIn = item.path.includes("linkedin");

        return (
          <div key={index} className="relative">
            <Link
              target="_blank"
              href={item.path}
              className={iconStyles}
              onMouseEnter={() => {
                if (isLinkedIn && badgeLoaded) {
                  setShowLinkedInBadge(true);
                }
              }}
              onMouseLeave={() => {
                if (isLinkedIn) {
                  setShowLinkedInBadge(false);
                }
              }}
            >
              {item.icon}
            </Link>

            {/* LinkedIn Badge Popup */}
            {isLinkedIn && showLinkedInBadge && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-50 bg-white rounded-lg shadow-2xl p-4 border border-gray-200 min-w-[280px]">
                <div
                  className="badge-base LI-profile-badge"
                  data-locale="en_US"
                  data-size="medium"
                  data-theme="dark"
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
                {/* Arrow pointer */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-gray-200 rotate-45"></div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Social;
