import React from "react";
import BlogCard from "../../../components/blog/BlogCard";
import BlogData from "../../data/BlogData";
import Heading_desc from "../../../components/Heading_desc";

const Blog = () => {
  return (
    <>
      <div>
        <Heading_desc
          title={`Blogs`}
          description={`Insights from the front row of nightlife—exploring DJ culture, live music, artists, and the craft behind unforgettable events.`}
        />
      </div>
      <div className="flex flex-wrap justify-center items-center">
        {BlogData.map((data) => (
          <BlogCard
            key={data.id}
            id={data.id}
            img={data.image}
            name={data.name}
            venue={data.venue}
            date={data.date}
            description={data.description}
            categories={data.categories}
          />
        ))}
      </div>
    </>
  );
};

export default Blog;
