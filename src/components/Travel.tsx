import React from "react";
import Globe from "./magicui/globe";
import { MagicCard } from "./magicui/magic-card";

interface TravelProps {
  // Add any props you need here
}

const Travel: React.FC<TravelProps> = (props) => {
  return (
    <MagicCard className="shadow-2xl" gradientColor={"#262626"}>
      <div className="relative flex h-[80vh] w-[80vw] items-center justify-center overflow-hidden rounded-lg">
        <div className="w-full h-full relative">
          <Globe className="w-full h-full" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-transparent to-background" />
        </div>
      </div>
    </MagicCard>
  );
};

export default Travel;
