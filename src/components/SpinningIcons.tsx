import OrbitingCircles from "@/components/magicui/orbiting-circles";

interface OptimizedTechIcon {
  src: string;
  alt: string;
  optimizedSrc: string;
}

export function SpinningIcons({
  optimizedTechIcons,
}: {
  optimizedTechIcons: OptimizedTechIcon[];
}) {
  console.log(optimizedTechIcons);
  return (
    <div className="relative flex w-full h-full flex-col items-center justify-center overflow-hidden">
      {/* Glowing background */}
      <div
        className="absolute inset-0"
        style={
          {
            background:
              "radial-gradient(circle at center, var(--gradient-start) 0%, var(--gradient-mid) 25%, var(--gradient-end) 50%)",
            "--gradient-start": "rgba(168, 85, 247, 0.3)",
            "--gradient-mid": "rgba(168, 85, 247, 0.05)",
            "--gradient-end": "rgba(168, 85, 247, 0)",
          } as React.CSSProperties
        }
      />

      <span className="pointer-events-none relative whitespace-pre-wrap bg-gradient-to-b from-purple-600 to-blue-500 bg-clip-text text-center text-5xl font-semibold leading-none text-transparent dark:from-purple-400 dark:to-blue-300">
        ⚡
      </span>

      {/* Inner Circles */}
      {optimizedTechIcons.slice(0, 5).map((icon, index) => (
        <OrbitingCircles
          key={icon.alt}
          className="size-[30px] border-none "
          duration={25}
          delay={index * 5}
          radius={90}
        >
          <img
            src={icon.optimizedSrc}
            alt={icon.alt}
            className="size-full object-contain"
          />
        </OrbitingCircles>
      ))}

      {/* Outer Circles (reverse) */}
      {optimizedTechIcons.slice(5, 10).map((icon, index) => (
        <OrbitingCircles
          key={icon.alt}
          className="size-[50px] border-none"
          radius={160}
          duration={30}
          delay={index * 5.25}
          reverse
        >
          <img
            src={icon.optimizedSrc}
            alt={icon.alt}
            className="size-full object-contain"
          />
        </OrbitingCircles>
      ))}

      {optimizedTechIcons.slice(10, 16).map((icon, index) => (
        <OrbitingCircles
          key={icon.alt}
          className="size-[65px] border-none"
          radius={250}
          duration={40}
          delay={index * 7}
        >
          <img
            src={icon.optimizedSrc}
            alt={icon.alt}
            className="size-full object-contain"
          />
        </OrbitingCircles>
      ))}
    </div>
  );
}
