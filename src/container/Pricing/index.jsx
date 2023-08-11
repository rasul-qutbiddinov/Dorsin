import React from "react";
import PricingCard from "../../components/PricingCard";
import pricingData from "../../data/pricing.data";
import Title from "../../components/Title/index";

const PricingContainer = () => {
  return (
    <section className="pt-12" id="pricing">
      <div className="container">
        <div className="flex justify-center">
          <Title
            title="OUR PRICING"
            text="Call to action pricing table is really crucial for your business website. Make your bids stand out with amazing options."
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
          {pricingData.map((pricing, index) => (
            <PricingCard key={index} {...pricing} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingContainer;
