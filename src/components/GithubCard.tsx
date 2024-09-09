import { Eye, GitFork, Star } from "lucide-react";

export default function GithubCard() {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 max-w-lg">
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
          <a
            href="#"
            className="text-blue-300 text-md font-semibold hover:underline"
          >
            haydenw2005 / repo-name
          </a>
        </div>
        <p className="text-gray-100 text-sm mb-3">
          A concise description of the repository. This project does something
          really cool!
        </p>
        <div className="flex items-center text-sm text-gray-100">
          <span className="flex items-center mr-4">
            <Star size={16} className="mr-1" />
            1.5k
          </span>
          <span className="flex items-center mr-4">
            <GitFork size={16} className="mr-1" />
            230
          </span>
          <span className="flex items-center">
            <Eye size={16} className="mr-1" />
            45
          </span>
        </div>
      </div>
      <div className="bg-gray-700 px-4 py-2 border-t border-gray-200">
        <div className="flex items-center">
          <span className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></span>
          <span className="text-sm text-gray-100">JavaScript</span>
        </div>
      </div>
    </div>
  );
}
