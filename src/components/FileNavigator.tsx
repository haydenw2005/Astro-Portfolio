import { File, Folder, Tree } from "@/components/magicui/file-tree";
import { useEffect, useState } from "react";
import Image from "../images/big_logo.png?url";
import { MagicCard } from "./magicui/magic-card";

export function FileTree() {
  const [selectedId, setSelectedId] = useState("4"); // Default to welcome.md

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1); // Remove the '#' from the hash
      const fileMap = {
        welcome: "4",
        "about-me": "5",
        projects: "6",
        travel: "7",
        contact: "9",
      };
      setSelectedId(fileMap[hash as keyof typeof fileMap] || "4"); // Default to welcome.md if hash doesn't match
    };

    // Set initial selected file based on current hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="relative flex h-screen flex-col items-center justify-center rounded-lg sticky top-0 z-50 ">
      <MagicCard className="shadow-2xl relative" gradientColor={"#262626"}>
        <Tree
          className={`p-2 rounded-md text-white purpleGlow `}
          initialSelectedId="2"
          initialExpandedItems={[
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
          ]}
          elements={ELEMENTS}
        >
          <a className="text-purple-300 glow-purple text-xl" href="#welcome">
            {" "}
            {/* <span className="text-purple-400 glow-red text-2xl mr-1">$</span> */}
            haydenwhite.me
          </a>
          <Folder element="src" value="1">
            {/* <File value="2">
            <p>index.astro</p>
          </File> */}
            <Folder value="3" element="components">
              <File value="4" isSelect={selectedId === "4"}>
                <a href="#welcome">
                  <p>welcome.md</p>
                </a>
              </File>
              <File value="5" isSelect={selectedId === "5"}>
                <a href="#about-me">
                  <p>about_me.md</p>
                </a>
              </File>
              <File value="6" isSelect={selectedId === "6"}>
                <a href="#projects">
                  <p>projects.md</p>
                </a>
              </File>

              <File value="7" isSelect={selectedId === "7"}>
                <a href="#travel">
                  <p>travel.md</p>
                </a>
              </File>
              <File value="9" isSelect={selectedId === "9"}>
                <a href="#contact">
                  <p>contact.md</p>
                </a>
              </File>
            </Folder>
            <Folder value="10" element="layouts">
              <File value="11">
                <p>Layout.astro</p>
              </File>
            </Folder>
          </Folder>
        </Tree>
        <div className="absolute bottom-4 left-0 right-0 px-4">
          <img
            src={Image}
            alt="Logo"
            className="w-full h-auto opacity-50 object-contain"
          />
        </div>
      </MagicCard>
    </div>
  );
}

const ELEMENTS = [
  {
    id: "1",
    isSelectable: true,
    name: "src",
    children: [
      {
        id: "3",
        isSelectable: true,
        name: "components",
        children: [
          {
            id: "4",
            isSelectable: true,
            name: "Welcome.md",
            href: "/welcome",
          },
          {
            id: "5",
            isSelectable: true,
            name: "AboutMe.md",
            href: "/about-me",
          },
          {
            id: "6",
            isSelectable: true,
            name: "Projects.md",
            href: "/projects",
          },
          {
            id: "7",
            isSelectable: true,
            name: "Travel.md",
            href: "/travel",
          },

          {
            id: "9",
            isSelectable: true,
            name: "contact.md",
            href: "/contact",
          },
        ],
      },
      {
        id: "10",
        isSelectable: true,
        name: "layouts",
        children: [
          {
            id: "11",
            isSelectable: true,
            name: "Layout.astro",
          },
        ],
      },
    ],
  },
];
