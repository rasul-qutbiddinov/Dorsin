import React from "react";

function Work({ item }) {
  return (
    <div className="relative ">
      <div className="text-center space-y-2">
        <i className={item.icon} />
        <h4 className="pt-3 text-lg font-medium dark:text-white">
          {item.title}
        </h4>
        <p className="text-gray-400 dark:text-gray-300/60">{item.text}</p>
      </div>
    </div>
  );
}

export default Work;
