import { ExternalLink } from "lucide-react";
import Resume from "../images/Hayden_White_Resume_September_2024.pdf";
import HSeparator from "./HSeperator";
import { MagicCard } from "./magicui/magic-card";
import ShimmerCard from "./ShimmerCard";

interface WorkExperience {
  company: string;
  location: string;
  position: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
  website: string;
}

interface Education {
  institution: string;
  location: string;
  degree: string;
  graduationDate: string;
  activities: string[];
  classes: string[];
  website: string;
}

const workExperiences: WorkExperience[] = [
  {
    company: "Oneshot.ai",
    location: "Remote",
    position: "Part-Time Full-Stack Software Engineer",
    startDate: "February 2024",
    endDate: "July 2024",
    responsibilities: [
      "Developed subscription and credit systems, plus much more",
    ],
    website: "https://www.oneshot.ai/",
  },
  {
    company: "Oneshot.ai",
    location: "Remote",
    position: "Software Engineering Intern",
    startDate: "October 2023",
    endDate: "February 2024",
    responsibilities: ["Integrated third-party services and managed tech debt"],
    website: "https://www.oneshot.ai/",
  },
  {
    company: "Floop",
    location: "Seattle, WA",
    position: "Software Engineering Intern",
    startDate: "July 2022",
    endDate: "August 2022",
    responsibilities: ["Implemented and deployed various full-stack features"],
    website: "https://floopedu.com/",
  },
  {
    company: "GenUI",
    location: "Seattle, WA",
    position: "Summer Intern",
    startDate: "June 2021",
    endDate: "July 2021",
    responsibilities: [
      "Developed a Microsoft Teams app prototype for the company",
    ],
    website: "https://www.genui.com/",
  },
];

const educationExperiences: Education[] = [
  {
    institution: "Purdue University",
    location: "West Lafayette, IN",
    degree: "Bachelor of Science in Computer Science",
    graduationDate: "May 2027",
    activities: ["Dean's List: 2023 - Current", "Data Mine Learning Community"],
    classes: [
      "CS 251 - Data Structures and Algorithms",
      "CS 250 - Computer Architecture",
      "CS 211 - Competetive Programming",
      "CS 240 - Programming in C",
      "CS 182 - Discrete Math",
      "CS 180 - Programming 1",
      "MA 351 - Elementry Linear Algebra",
      "MA 261 - Multivariate Calculus",
      "STAT 350 - Intro to Statistics",
    ],
    website: "https://www.purdue.edu/",
  },
  {
    institution: "Lakeside School",
    location: "Seattle, WA",
    degree: "High School Diploma",
    graduationDate: "June 2023",
    activities: ["Micro Controller Club Leader", "Varisty Lacrosse"],
    classes: [
      "Independent Study - Data Structures and Algorithms",
      "Advanced Computer Science - Senior Capstone Project",
      "CS 3-4 - Intro to Web Development",
      "CS 1-2 - Intro to Jave and OOP",
      "Calculus BC",
    ],
    website: "https://www.lakesideschool.org/",
  },
];

const Experience = () => {
  return (
    <MagicCard className="shadow-2xl" gradientColor={"#262626"}>
      <div className="relative flex items-center justify-center rounded-lg">
        <div className="w-full h-full relative p-8 ">
          <div className="flex justify-between">
            <h1 className="text-6xl font-bold mb-3 text-white">
              Ex<span className="text-purple-300 glow-purple">perience</span>
            </h1>
            <div className="text-center mt-3 flex justify-between h-1/3">
              <a
                href={Resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-purple-300 hover:bg-purple-600 text-gray-800 font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
              >
                <span className="sm:block hidden sm:flex-grow">
                  View Resume{" "}
                </span>
                <ExternalLink className="sm:ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
          <HSeparator />

          <div className="grid grid-cols-2 gap-8 mt-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4 ml-3 text-white">
                Relevant Work Experience
              </h2>
              {workExperiences.map((exp, index) => (
                <a href={exp.website} target="_blank" key={index}>
                  <div key={index} className="relative overflow-hidden">
                    <ShimmerCard>
                      <h3 className="text-xl font-semibold text-purple-300 relative z-10">
                        {exp.company}
                        {" - "}
                        <span className="text-lg font-normal text-gray-400">
                          {exp.location}
                        </span>
                      </h3>
                      <p className="text-white">{exp.position}</p>
                      <p className="text-gray-400 text-sm">
                        {exp.startDate} - {exp.endDate}
                      </p>
                      <p className="text-gray-200 text-sm mt-1">
                        {"• "}
                        {exp.responsibilities}
                      </p>
                    </ShimmerCard>
                    {index < workExperiences.length - 1 && <HSeparator />}
                  </div>
                </a>
              ))}
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 ml-2 text-white">
                Education
              </h2>
              {educationExperiences.map((edu, index) => (
                <a href={edu.website} target="_blank" key={index}>
                  <ShimmerCard>
                    <h3 className="text-xl font-semibold text-purple-300">
                      {edu.institution}
                      {" - "}
                      <span className="text-lg font-normal text-gray-400">
                        {edu.location}
                      </span>
                    </h3>
                    <p className="text-white">{edu.degree}</p>

                    <p className="text-gray-400 text-sm">
                      Graduation: {edu.graduationDate}
                    </p>
                    <ul className="list-disc list-inside mt-2">
                      {edu.activities.map((activity, idx) => (
                        <li key={idx} className="text-gray-300 text-sm">
                          {activity}
                        </li>
                      ))}
                    </ul>
                    <HSeparator />
                    <p className="text-gray-100 text-sm font-bold">
                      Relevant Course Work:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {edu.classes.map((edu_class, index) => {
                        const [code, name] = edu_class.split(" - ");
                        return (
                          <span key={index} className="text-xs">
                            {" • "}
                            <span className="text-purple-300">{code}</span>
                            <span className="text-gray-300"> - {name}</span>
                          </span>
                        );
                      })}
                    </div>
                  </ShimmerCard>
                  {index < educationExperiences.length - 1 && <HSeparator />}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MagicCard>
  );
};

export default Experience;
