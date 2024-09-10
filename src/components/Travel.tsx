import React from "react";
import Globe from "./magicui/globe";

interface TravelProps {
  // Add any props you need here
}

const Travel: React.FC<TravelProps> = (props) => {
  return (
    <div className="w-full h-[100vh] ">
      <div className="rounded-lg w-full h-1/2 relative items-center justify-center top-[25%] overflow-hidden">
        <Globe />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-transparent to-background" />
      </div>

      <div className=" relative top-[200px]">
        <div className="flex items-center justify-center mb-4 rounded-lg bg-purple-300 w-[35vh] sm:w-[60vh] mx-auto text-gray-800 border border-2 border-black">
          <p> Thanks for stopping by ;)</p>
        </div>
        <div className="flex items-center justify-center mb-8 rounded-lg bg-purple-300  w-[28vh] sm:w-[50vh] mx-auto text-gray-800 border border-2 border-black">
          <p> More stuff coming soon!</p>
        </div>
      </div>
    </div>
  );
};

export default Travel;
