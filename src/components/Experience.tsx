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
}

const workExperiences: WorkExperience[] = [
  {
    company: "Oneshot.ai",
    location: "Remote",
    position: "Part-Time Full Stack Software Engineer",
    startDate: "February 2024",
    endDate: "July 2024",
    responsibilities: [
      "Architected and implemented a subscription state handling system using Stripe's webhook and Checkout API",
      "Developed a credit system that manages customer usage of third party APIs",
      "Created an interface for salespeople to help simplify prompt engineering for outbound sales prospecting",
    ],
    website: "https://www.oneshot.ai/",
  },
  {
    company: "Oneshot.ai",
    location: "Remote",
    position: "Software Engineering Intern",
    startDate: "October 2023",
    endDate: "February 2024",
    responsibilities: [
      "Specialized in integrating and managing third-party services and reducing accrued tech debt",
      "Implemented website and news scrapers using SDKs and REST APIs for collecting prospect research",
      "Worked in teams of domestic and international developers to create innovative solutions",
    ],
    website: "https://www.oneshot.ai/",
  },
  {
    company: "Floop",
    location: "Seattle, WA",
    position: "Software Development Intern",
    startDate: "July 2022",
    endDate: "August 2022",
    responsibilities: [
      "Implemented and rigorously tested five full-stack features and fixed over 10+ bugs within seven weeks",
      "Deployed contributions to over 10,000+ users across the U.S",
    ],
    website: "https://floopedu.com/",
  },
  {
    company: "GenUI",
    location: "Seattle, WA",
    position: "Summer Intern",
    startDate: "June 2021",
    endDate: "July 2021",
    responsibilities: [
      "Developed app prototypes for Microsoft Teams",
      "Analyzed the feasibility of pursuing engagement from the business communication sector",
      "Interviewed employees from across the company",
      'Wrote and shared reports about "What it takes to succeed" at five different company positions',
      "Participated in regular team meetings",
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
    activities: [
      "The Anvil Entrepreneurship Organization (Staff Leader)",
      "Data Mine Learning Community (Member)",
      "Dean's List 2023-",
    ],
  },
];

const Experience = () => {
  return (
    <MagicCard className="shadow-2xl" gradientColor={"#262626"}>
      <div className="relative flex items-center justify-center rounded-lg">
        <div className="w-full h-full relative p-8 ">
          <h1 className="text-6xl font-bold mb-3 text-white">
            Ex<span className="text-purple-300 glow-purple">perience</span>
          </h1>
          <HSeparator />

          <div className="grid grid-cols-2 gap-8 mt-6">
            <div>
              <h2 className="text-3xl font-semibold mb-4 text-white">
                Work Experience
              </h2>
              {workExperiences.map((exp, index) => (
                <a href={exp.website} target="_blank">
                  <div key={index} className="mb-2 relative overflow-hidden">
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
                    </ShimmerCard>
                  </div>
                </a>
              ))}
            </div>

            <div>
              <h2 className="text-3xl font-semibold mb-4 text-white">
                Education
              </h2>
              {educationExperiences.map((edu, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-xl font-semibold text-purple-300">
                    {edu.institution}
                  </h3>
                  <p className="text-white">{edu.degree}</p>
                  <p className="text-gray-400">{edu.location}</p>
                  <p className="text-gray-400">
                    Graduation: {edu.graduationDate}
                  </p>
                  <ul className="list-disc list-inside mt-2">
                    {edu.activities.map((activity, idx) => (
                      <li key={idx} className="text-gray-300 text-sm">
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MagicCard>
  );
};

export default Experience;
