import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

interface ShimmerCardProps {
  children: any;
}

export default function ShimmerCard({ children }: ShimmerCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="p-2">
      <Card
        className={`relative overflow-hidden transition-all duration-300 ease-in-out ${
          isHovered
            ? "border-2 border-purple-500 shadow-lg"
            : "border-transparent"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardContent className="p-2 h-full">
          {children}
          {isHovered && (
            <div className="absolute inset-[-10px] bg-gradient-to-r from-transparent via-purple-300/20 to-transparent shimmer" />
          )}
        </CardContent>
      </Card>
    </div>
  );
}
