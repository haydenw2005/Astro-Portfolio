import React from "react";
import Globe from "./magicui/globe";

interface TravelProps {
  // Add any props you need here
}

const Travel: React.FC<TravelProps> = (props) => {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg -top-[150px]">
      <div className="w-full  aspect-square relative">
        <Globe className="w-full h-full" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-transparent to-background" />
      </div>
    </div>
  );
};

export default Travel;
