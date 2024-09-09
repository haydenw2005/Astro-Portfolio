import React from "react";

interface HSeparatorProps {
  className?: string;
}

const HSeparator: React.FC<HSeparatorProps> = ({ className = "" }) => {
  return (
    <div
      className={`w-full border-b border-gray-700 mb-2 mt-2 ${className}`}
    ></div>
  );
};

export default HSeparator;
