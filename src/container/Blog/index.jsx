import React from "react";
import Title from "../../components/Title/index";
import ServiceAboutPage from "../ServiceAboutPage";
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
        <ServiceAboutPage/>
      </div>
    </section>
  );
}

export default Blog;
