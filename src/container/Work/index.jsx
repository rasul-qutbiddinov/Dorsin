import React from "react";
import Title from "../../components/Title/index";
import WorkCard from "../../components/WorkCard";
import workData from "../../data/work.data";

function Work() {
  return (
    <section className="bg-gray-50 dark:bg-zinc-900/30">
      <div className="container">
        <div className="flex justify-center">
          <Title
            title="WORK PROCESS"
            text="
                The Big Oxmox advised her
                not to do so, because there were thousands of 
                bad Commas, wild Question Marks
                and devious pulvinar metus
                molestie sed Semikoli."
          />
        </div>
        <div className="grid lg:grid-cols-3 gap-5 mt-12">
          {workData.map((item, index) => (
            <WorkCard item={item} key={index} />
          ))}
        </div>
        <div className="text-center mx-auto">
          <a href="signup.html" className="btn bg-red-500 text-white mt-12">
            Get Started <i className="mdi mdi-arrow-right" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Work;
