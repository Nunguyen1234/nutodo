import React from "react";
import { FaStar } from "react-icons/fa";
import ReviewSlider from "./ReviewSlider";

const Review = () => {
  return (
    <div className="pt-20 pb-20 flex items-center justify-center flex-col bg-[#13357b]">
      <div className="w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-10">
        {/* TextContent */}
        <div>
          <h1 className="text-2xl font-semibold text-white">
            what our customers are saying us?
          </h1>
          <p className="mt-6 text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
            illum eligendi debitis, enim, velit, perferendis eius sapiente non
            explicabo recusandae dolor autem similique vel! Mollitia non
            incidunt quaerat repellendus reiciendis?
          </p>
          {/* Ratings */}
          <div className="mt-6 flex items-center space-x-6">
            <div>
              <p className="text-2xl font-bold text-white">4.88</p>
              <p className="text-white mb-2">Overall Rating</p>
              <div className="flex items-center">
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
              </div>
            </div>
          </div>
        </div>
    {/* Slider */}
    <div className="overflow-hidden">
        <ReviewSlider />
    </div>
      </div>
    </div>
  );
};

export default Review;
