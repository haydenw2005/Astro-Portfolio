import { Github } from "lucide-react";
import FeatureProject from "./FeatureProject";
import GithubCard from "./GithubCard";
import HSeparator from "./HSeperator";
import { MagicCard } from "./magicui/magic-card";

export const Projects = () => {
  return (
    <div>
      <MagicCard className="shadow-2xl p-8" gradientColor={"#262626"}>
        <h1 className="text-6xl font-bold text-white mb-4">
          My <span className="text-purple-300 glow-purple">Projects</span>{" "}
        </h1>
        <HSeparator />

        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-6">
          <div className="w-full space-y-3">
            <h3>Featured Projects</h3>
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="md:col-span-2 space-y-3">
                <FeatureProject className="h-48 md:h-64 lg:h-72" />
                <FeatureProject className="h-48 md:h-64 lg:h-72" />
              </div>
              <div className="md:col-span-1">
                <FeatureProject />
              </div>
            </div>
          </div>
          <div className="w-full space-y-3 ">
            <h3>Featured Repositories</h3>

            <GithubCard />
            <GithubCard />
            <GithubCard />
            <p className="text-[16px] mt-4 font-bold flex items-center justify-center text-blue-300 hover:text-purple-400 transition-colors duration-300 cursor-pointer">
              Want to see more? Check out my GitHub! <Github className="ml-2" />
            </p>
          </div>
        </div>
      </MagicCard>
    </div>
  );
};

// Projects
// 1. UpliftMe
// 2. Dagger
// 3. Travel the World
// 4. Location Analyzer
