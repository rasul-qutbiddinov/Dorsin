import React from "react";
import Title from "../../components/Title";
import servicesData from "../../data/services.data";

function ServicesContainer() {
  return (
    <section id="services">
      <div className="container">
        <Title
          title="OUR SERVICE"
          text="We craft digital, graphic and dimensional thinking, to create category leading brand experiences that have meaning and add a value for our clients."
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-16 mt-12">
          {servicesData.map((item, index) => (
            <div
              key={index}
              className="space-y-6 p-4 text-center group hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 leading-loose rounded-full text-4xl text-red-500 block mx-auto text-center items-center shadow-lg bg-white group-hover:bg-red-500 group-hover:text-white dark:bg-zinc-900/50">
                <i className={item.icon} />
              </div>
              <h4 className="font-medium dark:text-white">{item.title}</h4>
              <p className="text-gray-400 dark:text-gray-300/60">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesContainer;
