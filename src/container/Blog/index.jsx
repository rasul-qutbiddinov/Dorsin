import React from "react";
import Title from "../../components/Title/index";
function Blog() {
  return (
    <section className=" bg-gray-50 dark:bg-zinc-900/30" id="about">
      <div className="container">
        <div className="flex justify-center">
          <Title
            title="About"
            text="Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean class at a euismod mus ipsum vel ex finibus semper luctus quam."
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16 items-center pt-10">
          <div>
            <div>
              <img
                src="assets/images/img-1.jpg"
                className="shadow rounded"
                alt="blog img"
              />
            </div>
          </div>
          <div>
            <div className="section-title ms-md-4">
              <h4 className="text-3xl mb-3 dark:text-white">Who We Are ?</h4>
              <p className="text-gray-500 dark:text-gray-300/60">
                Build responsive, mobile-first projects on the web with the
                world's most popular front-end component library.
              </p>
              <p className="text-gray-500 dark:text-gray-300/60">
                It seems that only fragments of the original text remain in the
                Lorem Ipsum texts used today. One may speculate that over the
                course of time certain letters were added or deleted at various
                positions within the text. This might also explain why one can
                now find slightly different versions. Due to the age of the
                Lorem Ipsum text there are no copyright issues to contend with.
              </p>
              <a
                href="page-contact.html"
                className="btn border text-red-500 border-red-500 hover:bg-red-500 hover:text-white mt-4"
              >
                <i className="mdi mdi-phone" href="contact" /> Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
