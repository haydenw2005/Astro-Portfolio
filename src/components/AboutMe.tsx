import React from "react";
import { SpinningIcons } from "./SpinningIcons";

const NUM_IMAGES_TO_SHOW = 8; // Adjust this number as needed
const CYCLE_SPEED = 24;

interface OptimizedTechIcon {
  src: string;
  alt: string;
  optimizedSrc: string;
}

interface OptimizedMeImage {
  src: string;
  optimizedSrc: string;
  alt: string;
}

const AboutMe: React.FC<{
  optimizedTechIcons: OptimizedTechIcon[];
  optimizedMeImages: OptimizedMeImage[];
}> = ({ optimizedTechIcons, optimizedMeImages }) => {
  return (
    <>
      <div className=" about-me flex grid grid-cols-1 md:grid-cols-[50%_60%] xl:grid-cols-[50%_50%]">
        <div className="content relative">
          {" "}
          {/* <div className="absolute inset-0 bg-gradient-radial from-purple-900/40 to-transparent -z-10"></div> */}
          <h1 className="text-6xl font-bold mb-5 text-white">
            About <span className="text-purple-300 glow-purple">Me</span>{" "}
          </h1>
          <p className="mb-4 text-gray-200">
            <span className="mb-4 font-bold text-blue-300 glow-blue">
              Nice to meet you.
            </span>{" "}
            My name is Hayden and I'm a nineteen year-old student and software
            engineer studying computer science at{" "}
            <span className="font-bold text-[#CEB888] bg-clip-text glow-gold-silver">
              Purdue University
            </span>
            .
          </p>
          <p className="mb-4 text-gray-200">
            I'm all about full-stack web development, but I like to keep my
            options open. There's always something new to learn in this field,
            right?
          </p>
          <p className="font-bold text-white">
            When I'm not coding or studying for midterms:
          </p>
          <ul className="list-disc list-inside ml-8 mb-4 text-gray-200">
            <li>
              You might find me on the{" "}
              <span className="font-bold text-blue-300 glow-blue">
                ski slopes
              </span>
            </li>
            <li>
              Out{" "}
              <span className="font-bold text-blue-400 glow-blue">
                exploring
              </span>{" "}
              nature
            </li>
            <li>
              Possibly engrossed in a{" "}
              <span className="font-bold text-blue-300 glow-blue">sci-fi</span>{" "}
              novel
            </li>
            <li>
              Putting in the hours at the{" "}
              <span className="font-bold text-blue-300 glow-blue">gym</span>
            </li>
          </ul>
          <p className="mb-4 font-bold text-purple-300 glow-purple">
            Enjoying the page? Keep scrolling to dive deeper into my projects,
            passions, and the tech that excites me.
          </p>
          <a
            href="#projects"
            className="mt-20 text-blue-400 hover:text-purple-400 transition-colors duration-300 cursor-pointer"
          >
            See my projects <i className="fa fa-arrow-down"></i>
          </a>
        </div>
        <div className="flex items-center justify-center ">
          <div className="relative w-full h-full flex justify-center">
            <SpinningIcons optimizedTechIcons={optimizedTechIcons} />
          </div>
        </div>
        {/* <div className="content ml-10 xl:pr-8 relative h-[200px] xl:h-[600px] overflow-top-hidden flex mt-6 xl:mt-2 xl:mt-20 ">
          <div className="absolute xl:-top-[12%] h-[15%] top-20 xl:left-1/2 transform rotate-90 xl:rotate-0 -translate-x-1/2 w-[50%] xl:w-[120%] h-32 bg-black rounded-lg shadow-lg z-50 border hidden xl:flex">
            <div className="absolute top-2 left-2 w-6 h-6 rounded-full animate-flicker">
              <div className="absolute inset-0 rounded-full bg-purple-500 opacity-70 blur-md"></div>
              <div className="absolute inset-0 rounded-full bg-green-500 opacity-70 blur-md"></div>
              <div className="absolute inset-0 rounded-full bg-white opacity-30 animate-pulse"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-300 to-green-300 opacity-50 animate-spin-slow"></div>
            </div>
            <div className="absolute bottom-14 left-[80%] transform -translate-x-1/2 w-[40%] h-2 bg-gradient-to-r from-black to-blue-300 rounded-lg"></div>

            <div className="absolute bottom-11 left-[70%] transform -translate-x-1/2 w-[60%] h-2 bg-gradient-to-r from-black to-blue-500 rounded-lg"></div>

            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[90%] h-6 bg-gray-800 rounded-lg"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[83.33%] h-4 bg-gradient-to-b from-gray-800 to-purple-600 rounded-t-lg"></div>
          </div>
          <div className="xl:h-full w-full flex items-center justify-center xl:items-start xl:justify-start ">
            {optimizedMeImages
              .slice(0, NUM_IMAGES_TO_SHOW)
              .map((image, index) => (
                <img
                  key={index}
                  src={image.optimizedSrc}
                  alt={image.alt}
                  className="opacity-0 absolute w-[50%] xl:w-full h-auto max-h-[80%] border-2 object-cover rounded-2xl shadow-[0_0_15px_rgba(128,0,128,0.6)] transition-all duration-300 cycling-image xl:mask-image-fade-top"
                />
              ))}
          </div>
        </div> */}
      </div>
    </>
  );
};

export default AboutMe;
