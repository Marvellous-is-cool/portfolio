import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Marvellous-is-cool" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/adebayo-inioluwa-marvellous-5a3bab23a/",
  },
  { icon: <FaDiscord />, path: "https://discord.com/GK5tbZN9" },
  { icon: <FaXTwitter />, path: "https://x.com/coolbuoi" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            target="_blank"
            href={item.path}
            className={iconStyles}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
