import debounce from "lodash/debounce";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  dx: number;
  dy: number;
}

// Constants moved outside component
const STAR_FACTOR = 7; // fewer stars → calmer background
const EDGE_THRESHOLD = 8.5;
const ANIMATION_FRAME_RATE = 1000 / 60; // 60 FPS
const SCROLL_THRESHOLD = 0.8;
const SCROLL_DEBOUNCE_MS = 16;

// Utility functions moved outside
const calculateDistance = (star1: Star, star2: Star) => {
  const dx = star1.x - star2.x;
  const dy = star1.y - star2.y;
  return Math.sqrt(dx * dx + dy * dy);
};

export const DynamicStars: React.FC = () => {
  const [showElement, setShowElement] = useState<boolean>(true);
  const [stars, setStars] = useState<Star[]>([]);
  const [showLines, setShowLines] = useState(true);
  const [lineOpacity, setLineOpacity] = useState(0);
  const [isAnimationDone, setIsAnimationDone] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const animationFrameRef = useRef<number>();
  const lastUpdateTimeRef = useRef<number>(0);

  // Memoized star generation
  const generateStars = useCallback(() => {
    const starCount = Math.floor(window.innerWidth / STAR_FACTOR);
    const numStars = Math.floor((Math.random() * 0.25 + 0.75) * starCount);

    return Array.from({ length: numStars }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 0.1,
      dy: (Math.random() - 0.5) * 0.1,
    }));
  }, []);

  // Memoized connections calculation
  const starConnections = useMemo(() => {
    if (!showLines && isAnimationDone) return [];

    const connections: Array<[Star, Star]> = [];
    for (let i = 0; i < stars.length; i++) {
      for (let j = i + 1; j < stars.length; j++) {
        if (calculateDistance(stars[i], stars[j]) <= EDGE_THRESHOLD) {
          connections.push([stars[i], stars[j]]);
        }
      }
    }
    return connections;
  }, [stars, showLines, isAnimationDone]);

  // Optimized scroll handler
  const handleScroll = useCallback(
    debounce(() => {
      const welcomeSection = document.getElementById("welcome");
      const bottomSection = document.getElementById("wip");
      const aboutMeSection = document.getElementById("about-me");

      if (!welcomeSection || !bottomSection || !aboutMeSection) return;

      const welcomeBottom = welcomeSection.getBoundingClientRect().bottom;
      const bottomTop = bottomSection.getBoundingClientRect().top;
      const aboutTop = aboutMeSection.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;
      const threshold = screenHeight * SCROLL_THRESHOLD;

      const showStars = aboutTop > 0 || bottomTop < screenHeight;
      setShowElement(showStars);

      if (showStars) {
        const shouldShowLines =
          welcomeBottom > threshold || bottomTop <= screenHeight;
        setShowLines(shouldShowLines);
        setLineOpacity(shouldShowLines ? 1 : 0);

        if (welcomeBottom <= 100) {
          setTimeout(() => setIsAnimationDone(true), 500);
        } else {
          setIsAnimationDone(false);
        }
      }
    }, SCROLL_DEBOUNCE_MS),
    []
  );

  // Optimized animation using requestAnimationFrame
  const animateStars = useCallback((timestamp: number) => {
    if (timestamp - lastUpdateTimeRef.current >= ANIMATION_FRAME_RATE) {
      setStars((prevStars) =>
        prevStars.map((star) => {
          let newX = star.x + star.dx;
          let newY = star.y + star.dy;
          let newDx = star.dx;
          let newDy = star.dy;

          if (newX <= 0 || newX >= 100) {
            newDx = -newDx;
            newX = Math.max(0, Math.min(100, newX));
          }
          if (newY <= 0 || newY >= 100) {
            newDy = -newDy;
            newY = Math.max(0, Math.min(100, newY));
          }

          return { ...star, x: newX, y: newY, dx: newDx, dy: newDy };
        })
      );
      lastUpdateTimeRef.current = timestamp;
    }
    animationFrameRef.current = requestAnimationFrame(animateStars);
  }, []);

  useEffect(() => {
    setStars(generateStars());
    requestAnimationFrame(() => setIsLoaded(true));

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    animationFrameRef.current = requestAnimationFrame(animateStars);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      handleScroll.cancel();
    };
  }, [generateStars, handleScroll, animateStars]);

  return (
    <>
      {showElement && (
        <div
          className={`absolute inset-0 z-0 w-full h-full pointer-events-none transition-opacity duration-1000 ${
            isLoaded ? "opacity-90" : "opacity-0"
          }`}
        >
          {stars.map((star) => (
            <div
              key={star.id}
              className="fixed rounded-full bg-white/80"
              style={{
                transform: `translate(${star.x}%, ${star.y}%)`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                willChange: "transform",
              }}
            />
          ))}
          <svg className="fixed w-full h-full -z-10">
            {starConnections.map(([star1, star2]) => (
              <line
                key={`${star1.id}-${star2.id}`}
                x1={`${star1.x}%`}
                y1={`${star1.y}%`}
                x2={`${star2.x}%`}
                y2={`${star2.y}%`}
                stroke="#5a1c61"
                strokeWidth=".35"
                opacity={lineOpacity}
                style={{ transition: "opacity 0.5s ease-in-out" }}
              />
            ))}
          </svg>
        </div>
      )}
    </>
  );
};
