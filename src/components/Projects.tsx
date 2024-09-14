import { Github } from "lucide-react";
import AnalyzerImage2 from "../images/Projects/Analyzer2.png?url";
import DaggerImage from "../images/Projects/Dagger2.png?url";
import UpliftMeImage from "../images/Projects/UpliftMe3.png?url";
import FeatureProject from "./FeatureProject";
import GithubCard from "./GithubCard";
import HSeparator from "./HSeperator";
import { MagicCard } from "./magicui/magic-card";
const githubCardsData = [
  {
    repoLink: "https://github.com/haydenw2005/Astro-Portfolio",
    repoName: "haydenw2005 / Astro-Portfolio",
    description:
      "The code for this portfolio, my first ever project with Astro. Check it out!",
    stars: "1k",
    forks: "150",
    views: "200",
    languages: ["TypeScript", "Astro", "CSS"],
  },
  {
    repoLink:
      "https://github.com/haydenw2005/Competitive-Programming/tree/main",
    repoName: "haydenw2005 / Competitive-Programming",
    description:
      "A repository with my latest solutions to competitive programming problems, seperated by topic and updated weekly.",
    stars: "750",
    forks: "100",
    views: "150",
    languages: ["Python"],
  },
  {
    repoLink: "https://github.com/haydenw2005/Java-Marketplace",
    repoName: "haydenw2005 / Java-Marketplace",
    description:
      "Source code for a Java Marketplace which uses Jackson to read/write JSON to simulate Marketplace transactions.",
    stars: "2k",
    forks: "300",
    views: "500",
    languages: ["Java"],
  },
];

const featureProjectsData = [
  {
    imageUrl: UpliftMeImage,
    title: "UpliftMe",
    description:
      "My latest venture, a full stack web app which creates roadmap-structured learning plans for users using AI agents and a smart suggestion system.",
    linkText: "Learn More",
    linkUrl: "https://upliftme.framer.website/",
    className: "h-80 md:h-80 xl:h-72 mb-4", // Add height classes here
  },
  {
    imageUrl: AnalyzerImage2,
    title: "Location Analyzer - DSA Showcase",
    description:
      "One of my favorite projects, a geospatial graphing tool that runs graph algorithms on location data to highlight unique trends.",
    linkText: "See source code",
    linkUrl: "https://github.com/haydenw2005/Location-Analyzer",
    className: "h-80 md:h-80 xl:h-72", // Add height classes here
  },
  {
    imageUrl: DaggerImage,
    title: "Dagger - Dystopian Adventure Game",
    description:
      "An exciting adventure game which places the user on an mysterious exoplanet, where they must solve puzzles and find clues to escape the planet.",
    linkText: "Download",
    linkUrl: "https://github.com/haydenw2005/DAGGER",
    className: "h-100 md:h-[33rem] xl:h-[37rem] mb-4", // Add height classes here
  },
];

export const Projects = () => {
  return (
    <div>
      <MagicCard className="shadow-2xl p-8" gradientColor={"#262626"}>
        <h1 className="text-6xl font-bold text-white mb-4">
          My <span className="text-purple-300 glow-purple">Projects</span>{" "}
        </h1>
        <HSeparator />

        <div className="grid grid-cols-1 xl:grid-cols-[60%_40%] gap-6">
          <div className="w-full flex flex-wrap justify-center xl:justify-start">
            {" "}
            <h3 className="hidden xl:block text-2xl font-semibold ml-2 text-white">
              Featured Projects
            </h3>
            <FeatureProjectsContainer />
          </div>
          <div className="w-full flex flex-col items-center xl:items-start xl:justify-start">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Featured Repositories
            </h3>

            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex flex-wrap justify-center gap-4">
                {githubCardsData.map((card, index) => (
                  <GithubCard
                    key={index}
                    repoLink={card.repoLink}
                    repoName={card.repoName}
                    description={card.description}
                    stars={card.stars}
                    forks={card.forks}
                    views={card.views}
                    languages={card.languages}
                  />
                ))}
              </div>
            </div>

            <div className="flex justify-center w-full mt-4">
              <a
                href="https://github.com/haydenw2005"
                target="_blank"
                className="text-[14px] md:text-[18px] font-bold flex flex-col items-center text-blue-300 hover:text-blue-400 transition-colors duration-300 cursor-pointer text-center"
              >
                Want to see more? Check out my GitHub!
                <Github className="mt-2" />
              </a>
            </div>
          </div>
        </div>
      </MagicCard>
    </div>
  );
};

export default function FeatureProjectsContainer() {
  return (
    <div className="w-full md:grid grid-cols-1 md:grid-cols-3 gap-3">
      <div className="md:col-span-2 space-y-3 mb-4 md:mb-0">
        {featureProjectsData.slice(0, 2).map((project, index) => (
          <FeatureProject
            key={index}
            imageUrl={project.imageUrl}
            title={project.title}
            description={project.description}
            linkText={project.linkText}
            linkUrl={project.linkUrl}
            className={project.className}
          />
        ))}
      </div>
      <div className="md:col-span-1">
        {featureProjectsData.slice(2, 3).map((project, index) => (
          <FeatureProject
            key={index}
            imageUrl={project.imageUrl}
            title={project.title}
            description={project.description}
            linkText={project.linkText}
            linkUrl={project.linkUrl}
            className={project.className}
            cropImage={true}
          />
        ))}
      </div>
    </div>
  );
}

// Projects
// 1. UpliftMe
// 2. Dagger
// 3. Travel the World
// 4. Location Analyzer
