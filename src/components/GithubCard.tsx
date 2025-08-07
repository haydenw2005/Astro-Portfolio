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
  Astro: "#FF8C00",
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
      <motion.div whileHover={{ scale: 1.02 }}>
        <div className="mb-4 overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br from-black via-indigo-950/40 to-gray-950/40 shadow-md transition-shadow hover:shadow-lg">
          <div className="p-4">
            <div className="mb-1 flex items-center">
              <svg
                className="mr-2 h-4 w-4 text-gray-100"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
                />
              </svg>
              <h3 className="text-[16px] font-semibold tracking-tight text-blue-300 sm:text-[18px]">
                {repoName}
              </h3>
            </div>
            <p className="mb-1 line-clamp-2 text-sm text-gray-200">
              {description}
            </p>
          </div>
          <div className="border-t border-white/10 bg-gray-800/60 px-4 py-2">
            <div className="flex flex-wrap items-center gap-4">
              {languages.map((language) => (
                <div key={language} className="flex items-center">
                  <span
                    className="mr-2 mt-[1px] h-2.5 w-2.5 rounded-full"
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
