import React, { useCallback, useEffect, useState } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  dx: number;
  dy: number;
}

const STAR_FACTOR = 5;
const EDGE_THRESHOLD = 8.5; // Maximum distance for edge creation (in percentage)

export const DynamicStars: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const [showLines, setShowLines] = useState(true);
  const [lineOpacity, setLineOpacity] = useState(0);
  const [isAnimationDone, setIsAnimationDone] = useState(false);

  const generateStars = useCallback(() => {
    const newStars: Star[] = [];
    const starCount = window.innerWidth / STAR_FACTOR;
    const numStars = Math.floor((Math.random() * 0.25 + 0.75) * starCount); // Generate between 50-100 stars

    for (let i = 0; i < numStars; i++) {
      newStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1, // Star size between 1-3px
        dx: (Math.random() - 0.5) * 0.1, // Random x velocity
        dy: (Math.random() - 0.5) * 0.1, // Random y velocity
      });
    }

    setStars(newStars);
  }, []);

  useEffect(() => {
    generateStars();

    const handleScroll = () => {
      const welcomeSection = document.getElementById("welcome");
      if (welcomeSection) {
        const welcomeBottom = welcomeSection.getBoundingClientRect().bottom;
        console.log(welcomeBottom);
        setShowLines(welcomeBottom > 800);
        setLineOpacity(welcomeBottom > 800 ? 1 : 0);

        // Set animation as done when lines are hidden
        if (welcomeBottom <= 100) {
          setTimeout(() => setIsAnimationDone(true), 500); // Wait for opacity transition
        } else {
          setIsAnimationDone(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial scroll position

    const animateStars = () => {
      setStars((prevStars) =>
        prevStars.map((star) => {
          let newX = star.x + star.dx;
          let newY = star.y + star.dy;
          let newDx = star.dx;
          let newDy = star.dy;

          // Bounce off walls
          if (newX <= 0 || newX >= 100) {
            newDx = -newDx;
            newX = Math.max(0, Math.min(100, newX));
          }
          if (newY <= 0 || newY >= 100) {
            newDy = -newDy;
            newY = Math.max(0, Math.min(100, newY));
          }

          return {
            ...star,
            x: newX,
            y: newY,
            dx: newDx,
            dy: newDy,
          };
        })
      );
    };

    const animationInterval = setInterval(animateStars, 50); // Update every 50ms

    return () => {
      clearInterval(animationInterval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [generateStars]);

  const calculateDistance = (star1: Star, star2: Star) => {
    const dx = star1.x - star2.x;
    const dy = star1.y - star2.y;
    return Math.sqrt(dx * dx + dy * dy);
  };

  return (
    <div className="absolute inset-0 z-0 w-full h-full animate-fade-in opacity-[.9] ">
      {stars.map((star) => (
        <div
          key={star.id}
          className="fixed rounded-full bg-white"
          style={{
            top: `${star.y}%`,
            left: `${star.x}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
        />
      ))}
      <svg className="fixed w-full h-full -z-10">
        {(showLines || !isAnimationDone) &&
          stars.flatMap((star1, index) =>
            stars.slice(index + 1).map((star2) => {
              const distance = calculateDistance(star1, star2);
              if (distance <= EDGE_THRESHOLD) {
                return (
                  <line
                    key={`${star1.id}-${star2.id}`}
                    x1={`${star1.x}%`}
                    y1={`${star1.y}%`}
                    x2={`${star2.x}%`}
                    y2={`${star2.y}%`}
                    stroke="#5a1c61"
                    strokeWidth=".75"
                    opacity={lineOpacity}
                    style={{ transition: "opacity 0.5s ease-in-out" }}
                  />
                );
              }
              return null;
            })
          )}
      </svg>
    </div>
  );
};
