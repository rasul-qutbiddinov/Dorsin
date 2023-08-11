import React from "react";
import Title from "../../components/Title/index";
import testimonialsData from "../../data/testimonials.data";
import TestimonialsCard from "../../components/TestimonialsCard";
function Testimonials() {
  return (
    <section id="testi">
      <div className="container">
        <div className="flex justify-center">
          <Title
            title="WHAT THEY'VE SAID"
            text="The Big Oxmox advised her not to do
             so, because there were thousands of bad Commas, wild Question Marks and
             devious pulvinar metus molestie sed Semikoli."
          />
        </div>
        <div className="grid lg:grid-cols-3 gap-6 mt-10">
          {testimonialsData.map((item, index) => (
            <TestimonialsCard item={item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
