import React from "react";

const PricingCard = ({
  category,
  price,
  billing,
  bandwidth,
  onlineSpace,
  support,
  domain,
  hiddenFees,
}) => {
  return (
    <div className="card text-center transform transition ease-in-out duration-300 hover:-translate-y-4 mb-4 dark:bg-zinc-900/30 dark:border-zinc-700/50">
      <div className="card-body">
        <div className="space-y-2">
          <h1 className="uppercase text-sm dark:text-white">{category}</h1>
          <h1 className="text-4xl dark:text-white">{price}</h1>
          <h1 className="uppercase text-gray-400 dark:text-gray-300/60 text-xs">
            {billing}
          </h1>
        </div>
        <hr className="my-7 dark:border-zinc-700/50" />
        <div className="space-y-5">
          <p className="dark:text-gray-300/80">
            Bandwidth:
            <span className="text-red-500 font-medium">{bandwidth}</span>
          </p>
          <p className="dark:text-gray-300/80">
            Onlinespace:
            <span className="text-red-500 font-medium">{onlineSpace}</span>
          </p>
          <p className="dark:text-gray-300/80">
            Support: <span className="text-red-500 font-medium">{support}</span>
          </p>
          <p className="dark:text-gray-300/80">
            <span className="text-red-500 font-medium">{domain}</span> Domain
          </p>
          <p className="dark:text-gray-300/80">
            <span className="text-red-500 font-medium">{hiddenFees}</span>
            Hidden Fees
          </p>
        </div>
        <a href="signup.html" className="btn bg-red-500 text-white mt-10">
          Join Now
        </a>
      </div>
    </div>
  );
};

export default PricingCard;
