import React from 'react'
import Header from '../../components/Header'
import ServiceAboutPage from "../../container/ServiceAboutPage";

function AboutPage() {
  return (
    <div>
      <Header
        title="About Us"
        text="Brief information and story of our company."
      />
      <ServiceAboutPage />
    </div>
  );
}

export default AboutPage