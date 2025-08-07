import { ArrowBigDown } from "lucide-react";

const Welcome = () => {
  return (
    <>
      <div className="flex flex-col rounded-lg p-4">
        <p className="text-purple-300 text-sm uppercase tracking-widest">
          Software Engineer
        </p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mt-2">
          Hi, I'm <span className="text-purple-300">Hayden</span>{" "}
          <span className="ml-2">👋</span>
        </h1>
        <p className="text-xl md:text-2xl mt-4 max-w-2xl text-gray-200">
          I build reliable full‑stack products and thoughtful interfaces. I care
          about clarity, speed, and craftsmanship.
        </p>
        <div className="flex gap-3 mt-8">
          <a
            href="#projects"
            className="inline-flex items-center rounded-md bg-purple-300 px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-purple-400 transition-colors"
          >
            View Projects
          </a>
          <a
            href="#about-me"
            className="inline-flex items-center text-purple-300 hover:text-purple-400 transition-colors text-sm"
          >
            Learn more <ArrowBigDown className="ml-2 mt-[2px]" size={18} />
          </a>
        </div>
        <p className="text-sm mt-6 text-gray-400">Based in Seattle, WA</p>
      </div>
    </>
  );
};

export default Welcome;
