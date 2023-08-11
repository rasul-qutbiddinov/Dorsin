import React from "react";
import Title from "../../components/Title/index";
import contactData from "../../data/contact.data";
import ContactCard from "../../components/ContactCard";
function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="flex justify-center"></div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-20">
          <div>
            <div className="md:flex md:flex-row lg:justify-start lg:flex-col lg:text-left md:justify-between">
              {contactData.map((item, index) => (
                <ContactCard item={item} key={index} />
              ))}
            </div>
          </div>
          <div className="lg:col-span-2">
            <form
              method="post"
              onsubmit="return validateForm()"
              name="myForm"
              id="myForm"
            >
              <p id="error-msg" />
              <div id="simple-msg" />
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="border border-gray-300 text-gray-900 text-sm rounded focus:ring-0 focus:border-gray-400 block w-full p-3 dark:bg-zinc-700/20 dark:border-zinc-700/50 dark:placeholder:text-gray-300/50 dark:text-gray-300/50"
                    placeholder="Enter your name"
                  />
                  <input
                    type="email"
                    className="border border-gray-300 text-gray-900 text-sm rounded focus:ring-0 focus:border-gray-400 block w-full p-3 dark:bg-zinc-700/20 dark:border-zinc-700/50 dark:placeholder:text-gray-300/50 dark:text-gray-300/50"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                  />
                </div>
                <input
                  type="text"
                  className="border border-gray-300 text-gray-900 text-sm rounded focus:ring-0 focus:border-gray-400 block w-full p-3 dark:bg-zinc-700/20 dark:border-zinc-700/50 dark:placeholder:text-gray-300/50 dark:text-gray-300/50"
                  name="subject"
                  id="subject"
                  placeholder="Enter your subject"
                />
                <textarea
                  className="border border-gray-300 text-gray-900 text-sm rounded focus:ring-0 focus:border-gray-400 block w-full p-3 dark:bg-zinc-700/20 dark:border-zinc-700/50 dark:placeholder:text-gray-300/50 dark:text-gray-300/50"
                  placeholder="Enter your message"
                  name="comments"
                  id="comments"
                  rows={3}
                  defaultValue={""}
                />
                <div className="text-right">
                  <input
                    type="submit"
                    id="submit"
                    name="send"
                    className="btn bg-red-500 text-white"
                    defaultValue="Send Message"
                  />
                </div>
              </div>
            </form>
            {/*end form*/}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
