import React from "react";
function ContactCard({ item }) {
  return (
    <div className="mb-6">
      <h1 className=" text-base font-medium mb-2 dark:text-white">
        {item.title}
      </h1>
      <h1 className="text-gray-400 dark:text-gray-300/60 text-sm ">
        {item.text}
      </h1>
    </div>
  );
}

export default ContactCard;
