import React, { useState, useEffect, useRef } from "react";
import hero_banner_1 from "../../assets/images/hero_banner_1.svg";
import hero_banner_2 from "../../assets/images/hero_banner_2.svg";
import hero_banner from "../../assets/images/hero_banner.svg";

import star_icon from "../../assets/images/star_icon.svg";
import rhombus_icon from "../../assets/images/rhombus_icon.svg";
import indicator_icon from "../../assets/images/indicator_icon.svg";
import pentagon_icon from "../../assets/images/pentagon_icon.svg";

import BuildButton from "../BuildButton";

/**
 * We have 3 actual features:
 * 1) Star
 * 2) Rhombus
 * 3) Pentagon
 *
 * The "indicator_icon" is NOT part of the data; it's just a visual icon.
 */
const featuresData = [
  {
    id: "star",
    icon: star_icon,
    title: "AI-Powered CV Generation",
    description:
      "Syntax’s AI evaluates and scores your CV for ATS compatibility, suggesting improvements that help you get through automated filters. Tailored to your industry, Syntax’s AI highlights essential keywords and formatting tips to make your CV more competitive.",
  },
  {
    id: "rhombus",
    icon: rhombus_icon,
    title: "ATS-Ready Templates",
    description:
      "Our designs ensure your resume passes Applicant Tracking Systems to increase your visibility.",
    extraContext: "Stand out and get noticed by automated filters.",
  },
  {
    id: "pentagon",
    icon: pentagon_icon,
    title: "Tailored Keyword Suggestions",
    description:
      "Receive industry-specific keywords to boost your resume’s relevance and match job requirements.",
    extraContext: "Craft a resume that resonates with your target roles.",
  },
];

const KeyFeatures: React.FC = () => {
  // Which feature is currently active (0..2)
  const [activeIndex, setActiveIndex] = useState(0);

  // Are we in the middle of a slide-out animation?
  const [animating, setAnimating] = useState(false);

  // Reference to the auto-play interval
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Slide to the next feature (cyclic)
  const handleNextFeature = () => {
    if (animating) return; // don’t interrupt animation
    setAnimating(true);

    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % featuresData.length);
      setAnimating(false);
    }, 300); // match the CSS transition
  };

  // Auto-play: cycle every 3s
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      handleNextFeature();
    }, 3000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // When user clicks one of the 3 real icons, switch immediately
  const handleIconClick = (index: number) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (index === activeIndex || animating) return;

    setAnimating(true);
    setTimeout(() => {
      setActiveIndex(index);
      setAnimating(false);
    }, 300);
  };

  // Current feature to display
  const currentFeature = featuresData[activeIndex];

  return (
    <section className="pt-12 md:pt-6 lg:mt-44">
      <h5 className="font-bold text-2xl md:text-[3.1rem] leading-normal md:leading-[4.42rem]">
        Key Features
      </h5>
      <p className="font-medium text-lg md:text-[1.5rem] mb-8">
        Why Choose Our AI Resume Builder?
      </p>

      {/* Banners / Hero Images */}
      <div className="h-[32.73rem] flex items-end justify-center relative">
        <div className="group relative h-full w-4/5 mt-8 overflow-hidden cursor-pointer">
          {/* Banner 1 */}
          <img
            src={hero_banner_1}
            alt="hero banner1"
            className="h-full w-full absolute group-hover:-translate-y-4 transition-all duration-300 ease-in-out"
          />
          {/* Banner 2 */}
          <img
            src={hero_banner_2}
            alt="hero banner2"
            className="h-full w-full absolute translate-x-[-8rem] -translate-y-5 group-hover:-translate-y-5 group-hover:-rotate-12 transition-all duration-300 ease-in-out"
          />
          {/* Banner 3 */}
          <img
            src={hero_banner}
            alt="hero banner3"
            className="h-full w-full absolute translate-x-[8rem] group-hover:rotate-12 transition-all duration-300 ease-in-out"
          />
        </div>

        {/* Text overlay + Slide/Fade */}
        <div className="absolute inset-0 bg-[#EEEEFF]/70 pointer-events-none rounded-xl">
          <div className="h-full flex flex-col items-left justify-center gap-6 pl-6 md:pl-12 md:w-2/3 pr-4 md:pr-8">
            <div
              className={`transition-transform transition-opacity duration-300 ${
                animating
                  ? "opacity-0 -translate-x-8"
                  : "opacity-100 translate-x-0"
              }`}
            >
              {/* Top icon & heading */}
              <img
                src={currentFeature.icon}
                alt="feature icon"
                className="w-[3.42rem] h-[3.42rem] mb-4"
              />
              <h5 className="font-bold text-xl md:text-[2.05rem] text-[#000006] mb-2">
                {currentFeature.title}
              </h5>
              <p className="font-normal text-base md:text-[1.5rem] leading-normal md:leading-[1.89rem]">
                {currentFeature.description}
              </p>
              <p className="mt-4 text-sm md:text-base font-light text-gray-700">
                {currentFeature.extraContext}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom icons + BuildButton */}
      <div className="flex items-center justify-between mt-8 flex-col md:flex-row">
        <div className="flex gap-4 mb-6 lg:mb-0">
          {/* 4 icons total visually: star, indicator, rhombus, pentagon. 
              But only 3 are actual features (index=0..2).
          */}

          {/* 1) star => index = 0 */}
          <img
            src={featuresData[0].icon}
            alt="star icon"
            onClick={() => handleIconClick(0)}
            className={`w-10 h-10 lg:w-[3.34rem] lg:h-[3.34rem] cursor-pointer transition-transform duration-300 ${
              activeIndex === 0 ? "scale-110" : "scale-100"
            }`}
          />

          {/* 2) indicator => no text, purely visual */}
          <img
            src={indicator_icon}
            alt="indicator icon"
            className="w-[9.02rem] h-[2.5rem] lg:w-[14.4rem] md:h-[3rem]"
          />

          {/* 3) rhombus => index = 1 */}
          <img
            src={featuresData[1].icon}
            alt="rhombus icon"
            onClick={() => handleIconClick(1)}
            className={`w-10 h-10 lg:w-[3.34rem] lg:h-[3.34rem] cursor-pointer transition-transform duration-300 ${
              activeIndex === 1 ? "scale-110" : "scale-100"
            }`}
          />

          {/* 4) pentagon => index = 2 */}
          <img
            src={featuresData[2].icon}
            alt="pentagon icon"
            onClick={() => handleIconClick(2)}
            className={`w-10 h-10 lg:w-[3.34rem] lg:h-[3.34rem] cursor-pointer transition-transform duration-300 ${
              activeIndex === 2 ? "scale-110" : "scale-100"
            }`}
          />
        </div>

        {/* Build CV button */}
        <div className="flex items-center justify-center px-16">
          <BuildButton />
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
