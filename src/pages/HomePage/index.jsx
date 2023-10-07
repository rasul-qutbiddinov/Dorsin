import React from "react";
import Header from "../../components/Header";
import ServicesContainer from "../../container/ServicesContainer";
import FeatureContainer from "../../container/FeatureContainer";
import Web from "../../components/web";
import Team from "../../container/Team";
import Work from "../../container/Work";
import Testimonials from "../../container/Testimonials";
import Blog from "../../container/Blog";
import Contact from "../../container/Contact";
import Social from "../../container/Social";
function HomePage() {
  return (
    <div>
      <Header
        title=" We Help Startups Launch Their Products"
        text="Etiam sed.Interdum consequat proin vestibulum class at.Moltin gives you the platform. A small
        river named Duden flows by their place and supplies it with the necessary regelialia."
      />
      <Blog />
      <ServicesContainer />
      <FeatureContainer />
      {/* <Web
        image="assets/images/img-1.jpg"
        title="Build your dream website today"
        text="But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her."
        btn="View Plan & Pricing"
      /> */}
      <Work />
      <Team />
      {/* <Web
        image="assets/images/img-2.jpg"
        title="Let's Get Started"
        text="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
        btn="Get Started >>"
      /> */}
      <Social />
    </div>
  );
}

export default HomePage;
