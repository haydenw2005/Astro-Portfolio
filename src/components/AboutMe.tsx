import React from "react";
import meImages from "../constants/Me_Images.json";

const imgDir = "/Me/";
const NUM_IMAGES_TO_SHOW = 8; // Adjust this number as needed
const CYCLE_SPEED = 24;
const AboutMe: React.FC = () => {
  return (
    <>
      <div className=" about-me flex grid grid-cols-1 md:grid-cols-[60%_40%] xl:grid-cols-[40%_40%_20%]">
        <div className="content  ">
          <h1 className="text-6xl font-bold mb-5">
            About <span className="text-purple-300">Me</span>{" "}
          </h1>
          <p className="mb-4">
            <span className="mb-4 font-bold  text-blue-300">
              {" "}
              Nice to meet you.
            </span>{" "}
            My name is Hayden and I'm a nineteen year-old student and software
            engineer studying computer science at{" "}
            <span className="text-[#CEB888]">Purdue</span>{" "}
            <span className="text-[#9D968D]">University</span>.
          </p>
          <p className="mb-4">
            I'm all about full-stack web development, but I like to keep my
            options open. There's always something new to learn in this field,
            right?
          </p>
          <p className="font-bold">
            When I'm not coding or studying for midterms:
          </p>
          <ul className="list-disc list-inside ml-8 mb-4">
            <li>
              You might find me on the{" "}
              <span className="mb-4 font-bold  text-blue-300"> ski slopes</span>
            </li>
            <li>
              Out{" "}
              <span className="mb-4 font-bold  text-blue-400"> exploring</span>{" "}
              nature
            </li>
            <li>
              Possibly engrossed in a
              <span className="mb-4 font-bold  text-blue-300"> sci-fi</span>{" "}
              novel
            </li>
            <li>
              Putting in the hours at the
              <span className="font-bold  text-blue-300"> gym</span>
            </li>
          </ul>
          <p className="mb-4 font-bold text-purple-300">
            Enjoying the page? Keep scrolling to dive deeper into my projects,
            passions, and the tech that excites me.
          </p>
          <a
            href="#coming-soon"
            className="mt-20 text-blue-400 hover:text-purple-400 transition-colors duration-300 cursor-pointer"
            onClick={() => {
              alert("Coming soon!");
            }}
          >
            Hell yea <i className="fa fa-arrow-down"></i>
          </a>
        </div>
        <div className="logos flex justify-center items-center w-full px-10">
          <div className="mt-10 md:mt-6 grid grid-cols-6 md:grid-cols-3 gap-2 sm:gap-6 md:gap-4 w-full max-w-2xl mx-auto">
            {[
              {
                src: "/TechIcons/Typescript_logo_2020.svg.png",
                alt: "TypeScript",
              },
              {
                src: "/TechIcons/Python-logo-notext.svg.png",
                alt: "Python",
              },
              { src: "/TechIcons/c_language_img.png", alt: "C" },
              {
                src: "/TechIcons/java-programming-language-icon.png",
                alt: "Java",
              },
              {
                src: "/TechIcons/node-js-icon-454x512-nztofx17.png",
                alt: "Node.js",
              },
              { src: "/TechIcons/React-icon.svg.png", alt: "React" },
              { src: "/TechIcons/tailwindcss.png", alt: "Tailwind CSS" },
              { src: "/TechIcons/mongodb.png", alt: "MongoDB" },
              {
                src: "/TechIcons/aws-logo-920x920-sue-v03.png",
                alt: "AWS",
              },
              { src: "/TechIcons/stripe.png", alt: "Stripe" },
              { src: "/TechIcons/Git_icon.svg.png", alt: "Git" },
              { src: "/TechIcons/astro.png", alt: "Astro" },
              { src: "/TechIcons/Amazon-S3-Logo.svg.png", alt: "S3" },
              {
                src: "/TechIcons/aws-ec2-icon-1696x2048-nhw31ife.png",
                alt: "EC2",
              },
              { src: "/TechIcons/unity-loog.png", alt: "Unity" },
              { src: "/TechIcons/express2.png", alt: "Express" },
            ].map((logo, index, array) => (
              <div
                key={index}
                className={`relative group w-12 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto ${
                  index >= array.length - (array.length % 3) &&
                  array.length % 3 !== 0
                    ? "md:col-start-2"
                    : ""
                }`}
              >
                <div className="absolute inset-0 rounded-full bg-gray-800 opacity-30 blur-lg transform translate-y-1 group-hover:opacity-70 transition-all duration-300"></div>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="relative z-10 w-[75%] h-[75%] object-contain transform transition-transform duration-100 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="content xl:pr-8 relative h-[200px] xl:h-[600px] overflow-top-hidden flex mt-6 xl:mt-2 xl:mt-20 ">
          <div className="absolute xl:-top-20 top-20 xl:left-1/2 transform rotate-90 xl:rotate-0 -translate-x-1/2 w-[50%] xl:w-[120%] h-32 bg-gray-300 rounded-lg shadow-lg z-50 border hidden xl:flex">
            <div className="absolute top-2 left-2 w-8 h-8 rounded-full animate-flicker "></div>
            <div className="absolute bottom-16 left-[80%] transform -translate-x-1/2 w-[40%] h-2 bg-gray-600 rounded-l-lg "></div>

            <div className="absolute bottom-12 left-[70%] transform -translate-x-1/2 w-[60%] h-2 bg-gray-500 rounded-l-lg"></div>

            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[90%] h-8 bg-gray-400 rounded-lg"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[83.33%] h-4 bg-purple-400 rounded-t-lg"></div>
          </div>
          <div className="xl:h-full w-full flex items-center justify-center xl:items-start xl:justify-start ">
            {meImages.slice(0, NUM_IMAGES_TO_SHOW).map((imagePath, index) => (
              <img
                key={index}
                src={imgDir + imagePath}
                alt={`Me ${index + 1}`}
                className="opacity-0 absolute w-[50%] xl:w-full h-auto max-h-[80%] border-2 object-cover rounded-2xl shadow-[0_0_15px_rgba(128,0,128,0.6)] transition-all duration-300 cycling-image xl:mask-image-fade-top"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
