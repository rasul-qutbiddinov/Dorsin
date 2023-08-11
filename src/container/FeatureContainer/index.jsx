import React from "react";
import featureData from "../../data/feature.data";

function FeatureComponent() {
  return (
    <section className="bg-gray-50 dark:bg-zinc-900/30" id="feature">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-7">
          <div className="lg:col-span-5">
            <div className="space-y-6">
              <h3 className="text-2xl dark:text-white">
                {featureData.heading}
              </h3>
              <p className="text-gray-400 dark:text-gray-300/60">
                {featureData.description}
              </p>
              <ul className="text-gray-400 dark:text-gray-300/60 list-disc list-outside space-y-3 text-sm ml-5 marker:text-red-500 marker:text-lg">
                {featureData.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
            <a href="#" className="btn bg-red-500 text-white mt-14">
              {featureData.buttonText}
              <i className="mdi mdi-arrow-right align-middle" />
            </a>
          </div>
          <div className="lg:col-span-7">
            <img
              src={featureData.imagePath}
              alt="online-world"
              className="w-[500px] lg:ml-auto md:mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureComponent;
