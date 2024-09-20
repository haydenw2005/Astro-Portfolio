import { motion } from "framer-motion";

interface GitHubProps {
  repoLink: string;
  repoName: string;
  description: string;
  stars: string;
  forks: string;
  views: string;
  languages: string[];
}

const languageColorMap: { [key: string]: string } = {
  TypeScript: "#2b7489",
  Astro: "#FF8C00", // Example color, adjust if you have a specific one
  CSS: "#563d7c",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  HTML: "#e34c26",
  Java: "#b07219",
};

export default function GithubCard({
  repoLink,
  repoName,
  description,
  stars,
  forks,
  views,
  languages,
}: GitHubProps) {
  return (
    <a href={repoLink} target="_blank">
      <motion.div whileHover={{ scale: 1.03 }}>
        <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 mb-3">
          <div className="p-3">
            <div className="flex items-center mb-2">
              <svg
                className="w-4 h-4 text-gray-100 mr-2"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
                />
              </svg>
              <h3>
                <p className="text-blue-300 text-md font-semibold ">
                  {repoName}
                </p>
              </h3>
            </div>
            <p className="text-gray-100 text-sm mb-3">{description}</p>
            {/* <div className="flex items-center text-sm text-gray-100">
          <span className="flex items-center mr-4">
            <Star size={16} className="mr-1" />
            {stars}
          </span>
          <span className="flex items-center mr-4">
            <GitFork size={16} className="mr-1" />
            {forks}
          </span>
          <span className="flex items-center">
            <Eye size={16} className="mr-1" />
            {views}
          </span>
        </div> */}
          </div>
          <div className="bg-gray-700 px-4 py-2 border-t border-gray-200">
            <div className="flex items-center space-x-4">
              {languages.map((language) => (
                <div key={language} className="flex items-center">
                  <span
                    className="w-2 h-2 mt-[1px] rounded-full mr-2"
                    style={{
                      backgroundColor: languageColorMap[language] || "#ccc",
                    }}
                  ></span>
                  <span className="text-xs text-gray-100">{language}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </a>
  );
}
