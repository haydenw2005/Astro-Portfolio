import React, { useEffect, useRef } from "react";
import Postcard from "./Postcard";

const LilliePortfolio: React.FC = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  // All images in one continuous collection
  const allImages = [
    // Purdue memories
    {
      id: "purdue-1",
      src: "/images/Lillie/Purdue/DAFC75C7-E605-4C4A-AF6D-381F58AD7E8C_1_105_c.jpeg",
      caption: "Things I love: Fun walks",
      rotation: -3,
      section: "Purdue Days 🎓",
    },
    {
      id: "purdue-2",
      src: "/images/Lillie/Purdue/BCA8EB1C-2811-4DF3-8BE0-E67146E2EB29_1_105_c.jpeg",
      caption: "I also love cuddles",
      rotation: 2,
      section: "Purdue Days 🎓",
    },
    {
      id: "purdue-3",
      src: "/images/Lillie/Purdue/FAF584A2-4BB6-4C7D-BF7F-FA0F69E28C6A_1_105_c.jpeg",
      caption: "And taking pictures with you",
      rotation: -1,
      section: "Purdue Days 🎓",
    },
    {
      id: "purdue-4",
      src: "/images/Lillie/Purdue/C3FFE307-CD51-4891-BA9E-2ACE2AA45D78_1_105_c.jpeg",
      caption: "Hugh",
      rotation: 4,
      section: "Purdue Days 🎓",
    },
    {
      id: "purdue-6",
      src: "/images/Lillie/Purdue/C1357BE9-6607-4F28-A821-21E505577706_1_102_a.jpeg",
      caption: "On of out first pircutes togther 😲",
      rotation: 3,
      section: "Purdue Days 🎓",
    },
    {
      id: "purdue-5",
      src: "/images/Lillie/Purdue/D127FC70-3759-4A92-8EB4-6153B65A8132_1_102_o.jpeg",
      caption: "Absolute power couple",
      rotation: -2,
      section: "Purdue Days 🎓",
    },

    // San Francisco adventures
    {
      id: "sf-1",
      src: "/images/Lillie/SanFrancisco/7640E269-60CB-47C5-AC71-192390D996E3_1_105_c.jpeg",
      caption: "Getting crunk together",
      rotation: -2,
      section: "San Francisco Adventures 🌉",
    },
    {
      id: "sf-2",
      src: "/images/Lillie/SanFrancisco/A35AA955-8339-4728-91DA-8DD48E9DA9B9_1_105_c.jpeg",
      caption: "7 wonders of the world ah park",
      rotation: 3,
      section: "San Francisco Adventures 🌉",
    },
    {
      id: "sf-3",
      src: "/images/Lillie/SanFrancisco/499C8180-C28C-4BB5-9E53-28D4071A8D1E_1_105_c.jpeg",
      caption: "Yummy Sausailto breakfast",
      rotation: -4,
      section: "San Francisco Adventures 🌉",
    },
    {
      id: "sf-4",
      src: "/images/Lillie/SanFrancisco/96BBF734-2622-4D4C-9528-81FC9097B81A_1_105_c.jpeg",
      caption: "At the park w bae",
      rotation: 1,
      section: "San Francisco Adventures 🌉",
    },
    {
      id: "sf-5",
      src: "/images/Lillie/SanFrancisco/192A0628-DA13-49E7-AA5E-712F57AC8A80_1_105_c.jpeg",
      caption: "Piggy back rides",
      rotation: -3,
      section: "San Francisco Adventures 🌉",
    },
    {
      id: "sf-6",
      src: "/images/Lillie/SanFrancisco/7ABB298A-6317-4D1F-A75F-0279A8E229AB_1_105_c.jpeg",
      caption: "We look too good together",
      rotation: 2,
      section: "San Francisco Adventures 🌉",
    },
    // Future dreams
    {
      id: "future-1",
      src: "/images/future1.svg",
      caption: "Our dream home with cats 🏠🐱",
      rotation: -3,
      section: "Our Future Together ✨",
    },
    {
      id: "future-2",
      src: "/images/future2.svg",
      caption: "Tiger lily garden 🌺",
      rotation: 2,
      section: "Our Future Together ✨",
    },
    {
      id: "future-3",
      src: "/images/future3.svg",
      caption: "Adventures around the world 🌍",
      rotation: -1,
      section: "Our Future Together ✨",
    },
    {
      id: "future-4",
      src: "/images/future4.svg",
      caption: "Growing old together 👵🏻👴🏻",
      rotation: 3,
      section: "Our Future Together ✨",
    },
  ];

  useEffect(() => {
    // Set up intersection observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("postcard-visible");
            // Add staggered animation delay based on position
            const delay = parseInt(
              entry.target.getAttribute("data-delay") || "0"
            );
            (entry.target as HTMLElement).style.animationDelay =
              `${delay * 0.1}s`;
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    // Observe all postcard containers
    const postcardElements = document.querySelectorAll(".postcard-container");
    postcardElements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  let currentSection = "";

  return (
    <div
      className="min-h-screen p-8 relative"
      style={{
        backgroundColor: "transparent",
        backgroundImage: `
        radial-gradient(ellipse at 45% 30%, rgba(255, 182, 193, 0.05) 0%, transparent 35%),
        radial-gradient(ellipse at 25% 70%, rgba(135, 206, 250, 0.05) 0%, transparent 35%),
        radial-gradient(ellipse at 75% 50%, rgba(255, 192, 203, 0.04) 0%, transparent 40%)
      `,
      }}
    >
      {/* Decorative Mozart and Tiger Lily stickers */}
      <img
        src="/images/Lillie/mozart.png"
        alt="Mozart"
        className="fixed opacity-10 pointer-events-none animate-float"
        style={{
          width: "120px",
          top: "10%",
          left: "5%",
          transform: "rotate(-15deg)",
          animationDelay: "0s",
          zIndex: 1,
        }}
      />
      <img
        src="/images/Lillie/tigerlillie.png"
        alt="Tiger Lily"
        className="fixed opacity-[0.12] pointer-events-none animate-float"
        style={{
          width: "80px",
          top: "25%",
          right: "8%",
          transform: "rotate(20deg)",
          animationDelay: "1s",
          zIndex: 1,
        }}
      />
      <img
        src="/images/Lillie/mozart.png"
        alt="Mozart"
        className="fixed opacity-[0.08] pointer-events-none animate-float"
        style={{
          width: "150px",
          bottom: "15%",
          right: "5%",
          transform: "rotate(10deg) scaleX(-1)",
          animationDelay: "2s",
          zIndex: 1,
        }}
      />
      <img
        src="/images/Lillie/tigerlillie.png"
        alt="Tiger Lily"
        className="fixed opacity-10 pointer-events-none animate-float"
        style={{
          width: "100px",
          bottom: "30%",
          left: "3%",
          transform: "rotate(-25deg)",
          animationDelay: "1.5s",
          zIndex: 1,
        }}
      />
      <img
        src="/images/Lillie/mozart.png"
        alt="Mozart"
        className="fixed opacity-[0.06] pointer-events-none animate-float"
        style={{
          width: "200px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%) rotate(5deg)",
          animationDelay: "3s",
          zIndex: 1,
        }}
      />
      <img
        src="/images/Lillie/tigerlillie.png"
        alt="Tiger Lily"
        className="fixed opacity-[0.08] pointer-events-none animate-float"
        style={{
          width: "60px",
          top: "70%",
          right: "15%",
          transform: "rotate(-10deg)",
          animationDelay: "2.5s",
          zIndex: 1,
        }}
      />
      <img
        src="/images/Lillie/mozart.png"
        alt="Mozart"
        className="fixed opacity-10 pointer-events-none animate-float"
        style={{
          width: "90px",
          top: "5%",
          right: "40%",
          transform: "rotate(30deg)",
          animationDelay: "0.5s",
          zIndex: 1,
        }}
      />
      <img
        src="/images/Lillie/tigerlillie.png"
        alt="Tiger Lily"
        className="fixed opacity-[0.12] pointer-events-none animate-float"
        style={{
          width: "110px",
          bottom: "5%",
          left: "40%",
          transform: "rotate(15deg)",
          animationDelay: "4s",
          zIndex: 1,
        }}
      />

      {/* Header */}
      <div className="text-center mb-16 relative z-10">
        <h1
          className="text-4xl md:text-6xl font-serif text-gray-800 mb-4 animate-fade-in tracking-wide"
          style={{
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontWeight: 400,
            letterSpacing: "0.02em",
          }}
        >
          For My Beautiful Lillie
        </h1>
        <p
          className="text-lg md:text-xl text-gray-600 font-light animate-fade-in-delay"
          style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
        >
          Happy International Girlfriend Day! 💝
        </p>
        <div className="flex justify-center gap-2 mt-4 animate-fade-in-delay-2">
          <span
            className="text-2xl animate-bounce"
            style={{ animationDelay: "0.1s" }}
          >
            🌺
          </span>
          <span
            className="text-2xl animate-bounce"
            style={{ animationDelay: "0.2s" }}
          >
            🐱
          </span>
          <span
            className="text-2xl animate-bounce"
            style={{ animationDelay: "0.3s" }}
          >
            💙
          </span>
          <span
            className="text-2xl animate-bounce"
            style={{ animationDelay: "0.4s" }}
          >
            💗
          </span>
          <span
            className="text-2xl animate-bounce"
            style={{ animationDelay: "0.5s" }}
          >
            🌺
          </span>
        </div>
      </div>

      {/* Continuous postcard wall */}
      <div className="max-w-6xl mx-auto relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {allImages.map((image, index) => {
            // Check if we need to display a section header
            const showSectionHeader = image.section !== currentSection;
            if (showSectionHeader) {
              currentSection = image.section;
            }

            return (
              <React.Fragment key={image.id}>
                {showSectionHeader && (
                  <div className="col-span-full text-center mb-8 mt-16 first:mt-0">
                    <h2
                      className="text-2xl md:text-3xl font-serif text-gray-700 tracking-wide"
                      style={{
                        fontFamily: 'Georgia, "Times New Roman", serif',
                        fontWeight: 400,
                        letterSpacing: "0.02em",
                      }}
                    >
                      {image.section}
                    </h2>
                    <div className="w-24 h-0.5 bg-gray-400 mx-auto mt-4 rounded-full"></div>
                  </div>
                )}
                <div
                  className="postcard-container flex justify-center items-center"
                  data-delay={index % 3}
                  style={{
                    opacity: 1,
                    transform: "translateY(0) scale(1)",
                    zIndex: 10,
                  }}
                >
                  <Postcard
                    src={image.src}
                    caption={image.caption}
                    rotation={image.rotation}
                    isPinned={true}
                  />
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Love message */}
      <div className="text-center mt-24 max-w-2xl mx-auto relative z-10">
        <p className="text-lg text-gray-600 italic">
          "Every moment with you is a treasure. From our days at Purdue to our
          adventures in San Francisco, and all the dreams we have for our future
          together. You make every day brighter, Lillie. I love you more than
          all the tiger lilies in the world! 🌺"
        </p>
        <p className="mt-4 text-2xl">With Love, Hayden</p>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(-5deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        :global(.animate-float) {
          animation: float 6s ease-in-out infinite;
        }

        :global(.animate-fade-in) {
          animation: fadeIn 1s ease-out;
        }

        :global(.animate-fade-in-delay) {
          animation: fadeIn 1s ease-out 0.3s both;
        }

        :global(.animate-fade-in-delay-2) {
          animation: fadeIn 1s ease-out 0.6s both;
        }

        :global(.postcard-container) {
          transition:
            opacity 0.6s ease-out,
            transform 0.6s ease-out;
          transform: translateY(30px) scale(0.95);
        }

        :global(.postcard-visible) {
          opacity: 1 !important;
          transform: translateY(0) scale(1) !important;
        }
      `}</style>
    </div>
  );
};

export default LilliePortfolio;
