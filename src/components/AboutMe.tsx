import { ArrowBigDown } from "lucide-react";
import React from "react";
import HSeparator from "./HSeperator";
import { SpinningIcons } from "./SpinningIcons";
import { MagicCard } from "./magicui/magic-card";

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
      <MagicCard className=" shadow-2xl " gradientColor={"#262626"}>
        <div className=" about-me flex grid grid-cols-1 md:grid-cols-[60%_40%] ">
          <div className="content relative p-8 ">
            <h1 className="text-6xl font-bold mb-3 text-white">
              About <span className="text-purple-300 glow-purple">Me</span>{" "}
            </h1>{" "}
            <HSeparator />
            <div className="text-[1.1rem]">
              <p className="mb-4 text-gray-200">
                <span className="mb-4 font-bold text-purple-300 glow-purple">
                  Nice to meet you.
                </span>{" "}
                My name is Hayden and I'm a nineteen year-old student and
                software engineer studying computer science at{" "}
                <span className="font-bold text-[#CEB888] bg-clip-text glow-gold-silver">
                  Purdue University
                </span>
                .
              </p>
              <p className="mb-4 text-gray-200">
                I'm all about full-stack web development, but I like to keep my
                options open. There's always something new to learn in this
                field, right?
              </p>
              <p className="font-bold text-white">
                When I'm not coding or studying for midterms:
              </p>
              <ul className="list-disc list-inside ml-8 mb-4 text-gray-200">
                <li>
                  You might find me on the{" "}
                  <span className="font-bold text-purple-300 glow-purple">
                    ski slopes 🏔️
                  </span>
                </li>
                <li>
                  Out{" "}
                  <span className="font-bold text-purple-300 glow-purple">
                    exploring
                  </span>{" "}
                  nature 🌲
                </li>
                <li>
                  Possibly engrossed in a{" "}
                  <span className="font-bold text-purple-300 glow-purple">
                    sci-fi
                  </span>{" "}
                  novel 📚
                </li>
                <li>
                  Putting in the hours at the{" "}
                  <span className="font-bold text-purple-300 glow-purple">
                    gym 🏋️‍♂️
                  </span>
                </li>
              </ul>
              <p className="mb-4  text-purple-300 glow-purple">
                Want to learn more? Keep scrolling to dive deeper into my
                projects, work, passions, and more!
              </p>
            </div>
            <a
              href="#projects"
              className="mt-20 text-purple-300 hover:text-purple-400 transition-colors duration-300 cursor-pointer flex items-center"
            >
              See my projects <ArrowBigDown className="ml-2 mt-1" size={25} />
            </a>
          </div>
          <div className="relative w-[100%] md:w-[180%] h-[52vh] sm:h-[60vh] md:h-full justify-center top-[100px] md:top-0">
            {" "}
            <SpinningIcons optimizedTechIcons={optimizedTechIcons} size={1.2} />
          </div>
        </div>
      </MagicCard>
    </>
  );
};

export default AboutMe;
