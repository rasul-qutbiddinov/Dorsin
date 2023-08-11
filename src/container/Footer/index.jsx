import React from "react";
import footerData from "../../data/footer.data";
import FooterSection from "../../components/FooterSection";
function Footer() {
  return (
    <div>
      <section className="bg-gray-900 dark:bg-zinc-900/40">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="col-span-2">
                  <h1 className="text-lg uppercase text-white font-medium mb-6">
                    Dorsin
                  </h1>
                  <p className="text-gray-400 dark:text-gray-300/60">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem
                  </p>
                </div>
                {footerData.map((section, index) => (
                  <FooterSection
                    key={index}
                    title={section.title}
                    links={section.links}
                  />
                ))}
              </div>
            </div>
            <div>
              <div className="text-lg text-white mb-6">Subscribe</div>
              <div className="text-gray-400 dark:text-gray-300/60 text-sm mb-5">
                In an ideal world this text wouldn’t exist, a client would
                acknowledge the importance of having web copy before the design
                starts.
              </div>
              <div className="flex bg-gray-800 rounded-lg items-center dark:bg-zinc-700/30">
                <input
                  type="email"
                  className="border-0 focus:border-0 focus:ring-0 text-gray-50 bg-transparent w-full dark:placeholder:text-gray-300/50 placeholder:text-sm"
                  placeholder="Email"
                />
                <button
                  type="submit"
                  className="text-xl text-gray-400 dark:text-gray-300/60 px-3"
                >
                  <i className="pe-7s-paper-plane" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-gray-800 dark:bg-zinc-900/60 py-5">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-6">
            <div className="col-span-2">
              <div className="text-sm text-gray-400 dark:text-gray-300/60">
                © Dorsin - <a href="#">Themesbrand</a>
              </div>
            </div>
            <div className="ltr:lg:ml-auto rtl:lg:mr-auto">
              <img
                src="assets/images/payment.png"
                alt="payment-img"
                className="h-9"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
