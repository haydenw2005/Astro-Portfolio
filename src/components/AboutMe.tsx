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

const AboutMe: React.FC<{
  optimizedTechIcons: OptimizedTechIcon[];
}> = ({ optimizedTechIcons }) => {
  return (
    <>
      <MagicCard className="shadow-2xl" gradientColor={"#262626"}>
        <div className="about-me grid grid-cols-1 md:grid-cols-[60%_40%]">
          <div className="content relative p-8">
            <h2 className="text-5xl md:text-6xl font-bold mb-3 text-white">
              About <span className="text-purple-300 glow-purple">Me</span>{" "}
            </h2>{" "}
            <HSeparator />
            <div className="text-[1.05rem] md:text-[1.1rem] leading-relaxed">
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
                I work both with full-stack web development and low-level
                systems. It's exciting to work at both ends of abstraction—
                building user-facing features while understanding how things
                work under the hood.
              </p>
              <div className="mb-6 rounded-lg border border-purple-400/30 bg-black/30 p-4">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center rounded-md bg-purple-300/20 px-2 py-0.5 text-xs font-semibold text-purple-200 ring-1 ring-inset ring-purple-300/30">
                    Now
                  </span>
                  <p className="text-sm text-gray-200">
                    Founding Engineer at
                    <a
                      href="https://revyl.ai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-1 text-purple-300 underline-offset-4 hover:underline"
                    >
                      Revyl.ai
                    </a>
                    , building web and mobile agents for automated QA.
                  </p>
                </div>
              </div>
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
                    climbing
                  </span>{" "}
                  a mountain 🌲
                </li>
                <li>
                  Re-reading my favorite{" "}
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
              className="mt-6 text-purple-300 hover:text-purple-400 transition-colors duration-300 cursor-pointer inline-flex items-center text-sm"
            >
              See my projects{" "}
              <ArrowBigDown className="ml-2 mt-[2px]" size={18} />
            </a>
          </div>
          <div className="relative w-full md:w-[160%] h-[48vh] sm:h-[56vh] md:h-full justify-center top-[60px] md:top-0">
            {" "}
            <SpinningIcons optimizedTechIcons={optimizedTechIcons} size={1.2} />
          </div>
        </div>
      </MagicCard>
    </>
  );
};

export default AboutMe;
