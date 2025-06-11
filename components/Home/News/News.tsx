import React from "react";
import SectionHeading from "../../Helper/SectionHeading";
import NewsCard from "./NewsCard";


const News = () => {
  return (
    <div className="pt-16 pb-16 bg-gray-100">
      {/* Section Heading*/}
      <SectionHeading heading=" 🌱 Exciting News in Clean Agriculture!" />
      <div
        className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 
    items-center mt-20"
      >
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay="300"
        >
          <NewsCard
            image="/images/n1.jpg"
            title="Top 10 place to visit in Australia"
            date="2023-10-01"
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
        >
          <NewsCard
            image="/images/n2.jpg"
            title="Top 10 place to visit in Bangladesh"
            date="2023-10-01"
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <NewsCard
            image="/images/n3.jpg"
            title="Top 10 place to visit in Pakistan"
            date="2024-10-11"
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay="300"
        >
          <NewsCard
            image="/images/n4.jpg"
            title="Top 10 place to visit in New Zealand"
            date="2023-10-01"
          />
        </div>
      </div>
    </div>
  );
};

export default News;
