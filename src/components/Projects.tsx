import { motion } from "framer-motion";
import { Github } from "lucide-react";
import AnalyzerImage2 from "../images/Projects/Analyzer2.png?url";
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
      "The code for this portfolio, my first ever project with Astro. Check it out to see how this site was built!",
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
      "A repository with my latest solutions to competitive programming problems, separated by topic and updated weekly.",
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
    title: "UpliftMe - AI Roadmap Generator",
    description:
      "My latest venture, a full stack web app which creates roadmap-structured learning plans for users using AI agents and a smart suggestion system.",
    linkText: "Learn More",
    linkUrl: "https://upliftme.framer.website/",
    className: "h-80 md:h-80 xl:h-[36%] mb-4", // Add height classes here
  },
  {
    imageUrl: AnalyzerImage2,
    title: "Location Analyzer - DSA Showcase",
    description:
      "One of my favorite projects, a geospatial graphing tool that runs graph algorithms on location data to highlight unique trends.",
    linkText: "See source code",
    linkUrl: "https://github.com/haydenw2005/Location-Analyzer",
    className: "h-80 md:h-80 xl:h-[10%]", // Add height classes here
  },
  // {
  //   imageUrl: DaggerImage,
  //   title: "Dagger - Dystopian Adventure Game",
  //   description:
  //     "An exciting adventure game which places the user on an mysterious exoplanet, where they must solve puzzles and find clues to escape the planet.",
  //   linkText: "Download",
  //   linkUrl: "https://github.com/haydenw2005/DAGGER",
  //   className: "h-100 md:h-[33rem] xl:h-[37rem] mb-4", // Add height classes here
  // },
];

export const Projects = () => {
  return (
    <div>
      <MagicCard className="shadow-2xl p-8" gradientColor={"#262626"}>
        <h2 className="text-6xl font-bold text-white mb-4">
          My <span className="text-purple-300 glow-purple">Projects</span>{" "}
        </h2>
        <HSeparator />

        <div className="grid grid-cols-1 xl:grid-cols-[1fr_1fr] gap-6">
          <div className="w-full">
            <h3 className="text-2xl font-semibold ml-2 text-white mb-3">
              Featured Projects
            </h3>
            <FeatureProjectsContainer />
          </div>
          <div className="w-full">
            <h3 className="text-2xl font-semibold ml-2 text-white mb-3">
              Featured Repositories
            </h3>
            <div className="flex flex-col ">
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
              <a
                href="https://github.com/haydenw2005"
                target="_blank"
                className="flex-grow mt-auto "
              >
                <motion.div whileHover={{ scale: 1.05 }} className="h-full">
                  <div className="border bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex items-center justify-center">
                    <p className="text-[14px] md:text-[18px] font-bold flex flex-col items-center text-blue-300 hover:text-blue-400 transition-colors duration-300 cursor-pointer text-center p-4">
                      Want to see more? Check out my GitHub!
                      <Github className="mt-2" />
                    </p>
                  </div>
                </motion.div>
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
    <div className="space-y-3 mb-4">
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
      {/* <div className="md:col-span-1">
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
      </div> */}
    </div>
  );
}

// Projects
// 1. UpliftMe
// 2. Dagger
// 3. Travel the World
// 4. Location Analyzer
