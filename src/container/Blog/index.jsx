import React from "react";
import Title from "../../components/Title/index";
import blogData from "../../data/blog.data";
import BlogCard from "../../components/BlogCard";
function Blog() {
  return (
    <section className="pt-12 bg-gray-50 dark:bg-zinc-900/30" id="blog">
      <div className="container">
        <div className="flex justify-center">
          <Title
            title="Blog"
            text="Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean class at a euismod mus ipsum vel ex finibus semper luctus quam."
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-20">
          {blogData.map((item, index) => (
            <BlogCard item={item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
