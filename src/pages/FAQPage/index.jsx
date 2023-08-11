import React from 'react'
import Header from '../../components/Header';
import ServiceFAQPage from '../../container/ServiceFAQPage';

function FAQ() {
  return (
    <div>
      <Header
        title="Frequently Asked Questions"
        text="Brief information and story of our company."
      />
      <ServiceFAQPage/>
    </div>
  );
}

export default FAQ