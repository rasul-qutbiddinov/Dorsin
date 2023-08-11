import React from "react";
const Header = ({ title, text }) => {
  return (
    <section className="lg:pb-40 lg:pt-56 py-32" id="home">
      <div className="overflow-hidden">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="assets/images/bg-home.jpg"
          alt="build your website image"
        />
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-900 to-purple-800 opacity-90" />
      </div>
      <div className="container">
        <div className="flex justify-center">
          <div className="lg:w-2/3 text-center relative">
            <div className="space-y-6 mb-10">
              <h2 className="text-white md:text-[32px] lg:text-[46px] leading-[64px] capitalize">
                {title}
              </h2>
              {text && <p className="text-gray-300/80">{text}</p>}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <img
          src="assets/images/bg-pattern.png"
          alt="bg-pattern"
          className="block dark:hidden"
        />
        <img
          src="assets/images/bg-pattern-dark.png"
          alt="bg-pattern"
          className="hidden dark:block"
        />
      </div>
    </section>
  );
};
export default Header;
