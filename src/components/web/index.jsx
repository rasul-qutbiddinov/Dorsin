import React from "react";

function WebContainer({image,title,text,btn}) {
  return (
    <section className="py-28">
      <div className="overflow-hidden">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src={image}
          alt="build your website image"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-purple-800 w-full h-full opacity-90" />
      </div>
      <div className="container">
        <div className="lg:flex justify-center">
          <div className="lg:w-7/12 text-center relative">
            <h2 className="text-white text-3xl">
              {title}
            </h2>
            <p className="pt-3 text-gray-300/80">
            {text}
            </p>
            <a href="#pricing" className="btn bg-white text-black mt-8 mb-5">
            {btn}
            </a>
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
}

export default WebContainer;
