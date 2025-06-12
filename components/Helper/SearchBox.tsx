import React from "react";
import { FaCalendarWeek } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";

const SearchBox = () => {
  return (
   <div className="bg-white rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-8 mt-4 sm:mt-12 w-[95%] sm:w-[80%] transition-all transform hover:scale-105 hover:-translate-y-1 ease-out duration-500 hover:ring-2 hover:ring-offset-2 hover:bg-gradient-to-r hover:from-red-300 hover:to-yellow-300 overflow-hidden group">
  {/* 1st search input */}
  <div className="flex items-center space-x-6">
    <FaMapMarkerAlt  className="w-6 h-6 text-blue-600" />
    <div>
      <p className="text-lg font-medium mb-[0.2rem] text-black group-hover:text-white">Location</p>
      <input
        type="text"
        placeholder="Where are you going?"
        className="outline-none border-none placeholder:text-gray-800 group-hover:text-white group-hover:placeholder:text-white bg-transparent"
      />
    </div>
  </div>
  {/* 2nd search input */}
  <div className="flex items-center space-x-6">
    <FaCalendarWeek className="w-6 h-6 text-blue-600" />
    <div>
      <p className="text-lg font-medium mb-[0.2rem] text-black group-hover:text-white">Start Date</p>
      <input
        type="date"
        className="outline-none border-none text-black group-hover:text-white bg-transparent"
      />
    </div>
  </div>
  {/* 3rd search input */}
  <div className="flex items-center space-x-6">
    <FaCalendarWeek className="w-6 h-6 text-blue-600" />
    <div>
      <p className="text-lg font-medium mb-[0.2rem] text-black group-hover:text-white">End Date</p>
      <input
        type="date"
        className="outline-none border-none text-black group-hover:text-white bg-transparent "
      />
    </div>
  </div>
  {/* 4th search input */}
  <div className="flex items-center space-x-6">
    <FaUserGroup className="w-6 h-6 text-blue-600" />
    <div>
      <p className="text-lg font-medium mb-[0.2rem] text-black group-hover:text-white">Guest</p>
      <p className="text-base font-normal text-black group-hover:text-white">1 Guest 1 Room </p>
    </div>
  </div>
</div>
    
  );
};

export default SearchBox;
