import { ArrowBigDown } from "lucide-react";

const Welcome = () => {
  return (
    <>
      <div className="flex flex-col rounded-lg p-4">
        <h1 className="text-5xl sm:text-5xl md:text-6xl font-bold tracking-tighter">
          Hi. I'm
          <span className="text-purple-300">
            {" "}
            Hayden<span className="ml-3">🖖</span>
          </span>
        </h1>
        <p className="text-xl mt-4">
          I'm a software engineer and digital architect helping to push the
          boundaries of the digital frontier.
        </p>
        <p className="text-xl mt-4 text-purple-300"> Based in Seattle, WA.</p>

        <a
          href="#about-me"
          className="mt-20 text-purple-300 hover:text-purple-400 transition-colors duration-300 cursor-pointer flex items-center"
        >
          Learn more <ArrowBigDown className="ml-2 mt-1" size={25} />
        </a>
      </div>
    </>
  );
};

export default Welcome;
