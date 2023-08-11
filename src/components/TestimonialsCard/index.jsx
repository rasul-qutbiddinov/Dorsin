import React from "react";

function TestimonialsCard({ item }) {
  return (
    <div className="transform transition ease-in-out duration-300 mt-20 lg:mt-10 hover:-translate-y-4">
      <div className="card dark:bg-zinc-900/30 dark:border-zinc-700/50">
        <img
          src={item.image}
          alt="Testimonials user-1 Image"
          className="w-20 h-20 -m-10 mx-auto rounded-full p-1 border bg-white dark:bg-zinc-700/20 dark:border-zinc-700/80"
        />
        <div className="card-body mt-4">
          <p className="text-gray-400 dark:text-gray-300/60 italic text-center">
            {item.pr}
          </p>
        </div>
      </div>
      <h5 className="text-center uppercase mt-5 dark:text-white">
        {item.text} -{" "}
        <span className="text-gray-400 dark:text-gray-300/60 capitalize">
          {item.city}
        </span>
      </h5>
    </div>
  );
}

export default TestimonialsCard;
