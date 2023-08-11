import React from "react";
const FooterSection = ({ title, links }) => {
  return (
    <div>
      <div className="text-lg text-white font-medium mb-6">{title}</div>
      <ul className="space-y-2 text-sm">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.url}
              className="text-gray-400 dark:text-gray-300/60 hover:text-gray-300"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default FooterSection;
