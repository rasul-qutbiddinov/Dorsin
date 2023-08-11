import React from "react";

function SocialCard({ item }) {
  return (
    <a
      href="#"
      className="border-2 border-gray-400 w-12 h-12 text-xl rounded-full inline-flex text-center items-center text-gray-400 dark:border-zinc-700/30 hover:text-red-500"
    >
      <i className={item.social} />
    </a>
  );
}

export default SocialCard;
