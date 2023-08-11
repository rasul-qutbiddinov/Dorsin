import React from "react";

function BlogCard({ item }) {
  return (
    <div className="transition-all ease-in-out duration-300 hover:-translate-y-4">
      <img src={item.image} className="mb-4" alt="Blog img-1" />
      <h1 className="text-gray-400 dark:text-gray-300/60 text-sm">
        {item.job}
      </h1>
      <h1 className="mb-2">
        <a
          href={item.path}
          className="text-xl hover:text-red-500 dark:text-white"
        >
          {item.title}
        </a>
      </h1>
      <p className="text-gray-400 dark:text-gray-300/60 text-sm">{item.text}</p>
      <div className="mt-4">
        <a href="page-blog-details.html" className="text-red-500">
          Read More <i className="mdi mdi-arrow-right" />
        </a>
      </div>
    </div>
  );
}

export default BlogCard;
