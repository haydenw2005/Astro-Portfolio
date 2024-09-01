const Welcome = () => {
  return (
    <>
      <div className="flex flex-col rounded-lg p-4">
        <h1 className="text-6xl font-bold">
          Hi. I'm <span className="text-purple-300">Hayden</span> 🖖
        </h1>
        <p className="text-2xl mt-4">
          I'm a software engineer, student, builder, sci-fi enthusiast, and much
          more...
        </p>
        <p className="text-xl mt-4 text-purple-300"> Based in Seattle, WA.</p>

        <a
          href="#about-me"
          className="mt-20 text-purple-300 hover:text-purple-400 transition-colors duration-300 cursor-pointer"
        >
          Learn more <i className="fa fa-arrow-down"></i>
        </a>
      </div>
    </>
  );
};

export default Welcome;
