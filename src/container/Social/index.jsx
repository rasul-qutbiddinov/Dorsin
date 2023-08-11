import React from "react";
import socialData from "../../data/social.data";
import SocialCard from "../../components/Social";
function Social() {
  return (
    <section className="bg-gray-100 py-6 dark:bg-zinc-800">
      <div className="container">
        <div className="grid lg:grid-cols-3 items-center gap-6">
          <div className="space-x-3">
            {socialData.map((item, index) => (
              <SocialCard item={item} key={index} />
            ))}
          </div>
          <div className="lg:text-center">
            <h1 className="text-lg dark:text-gray-300/80">
              <a href="tel:+1123XXXXX0">
                <i className="pe-7s-call text-black align-middle text-[22px] ltr:mr-2 rtl:ml-2 dark:text-white" />
                +1 123 456 7890
              </a>
            </h1>
          </div>
          <div className="ltr:lg:text-right rtl:lg:text-left">
            <h1 className="text-lg dark:text-gray-300/80">
              <a href="mailto:abc@example.com">
                <i className="pe-7s-mail-open text-black align-middle text-[22px] ltr:mr-2 rtl:ml-2 dark:text-white" />
                abc@example.com
              </a>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Social;
