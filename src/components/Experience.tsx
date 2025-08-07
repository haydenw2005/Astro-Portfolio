import { ExternalLink } from "lucide-react";
import { memo, Suspense, useMemo } from "react";
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
    company: "Revyl.ai",
    location: "Remote",
    position: "Founding Engineer",
    startDate: "2025",
    endDate: "Present",
    responsibilities: ["Building web and mobile agents for automated QA"],
    website: "https://revyl.ai/",
  },
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
      "CS 211 - Competitive Programming",
      "CS 240 - Programming in C",
      "CS 182 - Discrete Math",
      "CS 180 - Programming 1",
      "MA 351 - Elementary Linear Algebra",
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
      "CS 1-2 - Intro to Java and OOP",
      "Calculus BC",
    ],
    website: "https://www.lakesideschool.org/",
  },
];

const WorkExperienceItem = memo(
  ({
    exp,
    index,
    isLast,
  }: {
    exp: (typeof workExperiences)[number];
    index: number;
    isLast: boolean;
  }) => (
    <a href={exp.website} target="_blank" rel="noopener noreferrer">
      <div className="relative overflow-hidden">
        <ShimmerCard>
          <h3 className="text-xl font-semibold text-purple-300 relative z-10">
            {exp.company}
            {" - "}
            <span className="text-lg font-normal text-gray-400">
              {exp.location}
            </span>
          </h3>
          <h3 className="text-white">{exp.position}</h3>
          <p className="text-gray-400 text-sm">
            {exp.startDate} - {exp.endDate}
          </p>
          <p className="text-gray-200 text-sm mt-1">
            {"• "}
            {exp.responsibilities}
          </p>
        </ShimmerCard>
        {!isLast && <HSeparator />}
      </div>
    </a>
  )
);

const EducationItem = memo(
  ({
    edu,
    index,
    isLast,
  }: {
    edu: (typeof educationExperiences)[number];
    index: number;
    isLast: boolean;
  }) => (
    <a href={edu.website} target="_blank" rel="noopener noreferrer">
      <ShimmerCard>
        <h3 className="text-xl font-semibold text-purple-300">
          {edu.institution}
          {" - "}
          <span className="text-lg font-normal text-gray-400">
            {edu.location}
          </span>
        </h3>
        <h3 className="text-white">{edu.degree}</h3>
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
        <p className="text-gray-100 text-sm font-bold">Relevant Course Work:</p>
        <div className="flex flex-wrap gap-1">
          {edu.classes.map((edu_class, idx) => {
            const [code, name] = edu_class.split(" - ");
            return (
              <span key={idx} className="text-xs">
                {" • "}
                <span className="text-purple-300">{code}</span>
                <span className="text-gray-300"> - {name}</span>
              </span>
            );
          })}
        </div>
      </ShimmerCard>
      {!isLast && <HSeparator />}
    </a>
  )
);

const LoadingState = () => (
  <div className="animate-pulse">
    <div className="h-12 bg-gray-700 rounded w-1/3 mb-4"></div>
    <div className="space-y-3">
      <div className="h-4 bg-gray-700 rounded w-3/4"></div>
      <div className="h-4 bg-gray-700 rounded w-1/2"></div>
    </div>
  </div>
);

const Experience = () => {
  const resumeLink = useMemo(
    () => (
      <div className="text-center mt-3 flex justify-center h-1/3">
        <div className="flex flex-col items-center">
          <a
            href={"/images/Hayden_White_Resume_Jan_2025-1.pdf?url"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-purple-300 hover:bg-purple-600 text-gray-800 font-bold py-1 px-3 rounded transition duration-300 ease-in-out"
          >
            <span className="sm:block hidden sm:flex-grow">Resume </span>
            <ExternalLink className="sm:ml-1 h-4 w-4" />
          </a>
          <small className="text-gray-400 mt-1 text-xs">
            Updated January, 2025
          </small>
        </div>
      </div>
    ),
    []
  );

  return (
    <Suspense fallback={<LoadingState />}>
      <MagicCard className="shadow-2xl" gradientColor={"#262626"}>
        <div className="relative flex items-center justify-center rounded-lg">
          <div className="w-full h-full relative p-8">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-5xl md:text-6xl font-bold mb-1 text-white">
                Ex<span className="text-purple-300 glow-purple">perience</span>
              </h2>
              {resumeLink}
            </div>
            <HSeparator />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
              <div>
                {workExperiences.map((exp, index) => (
                  <WorkExperienceItem
                    key={exp.company}
                    exp={exp}
                    index={index}
                    isLast={index === workExperiences.length - 1}
                  />
                ))}
              </div>

              <div>
                {educationExperiences.map((edu, index) => (
                  <EducationItem
                    key={edu.institution}
                    edu={edu}
                    index={index}
                    isLast={index === educationExperiences.length - 1}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </MagicCard>
    </Suspense>
  );
};

export default memo(Experience);
