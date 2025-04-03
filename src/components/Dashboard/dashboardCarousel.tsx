import React, { useEffect, useRef, useState } from "react";
import arrow3 from "@/assets/images/arrow3.svg";

interface CarouselItemProps {
  id: number;
  bgColor: string;
  title: string;
  description: string;
  hasArrow?: boolean;
}

const items: CarouselItemProps[] = [
  {
    id: 1,
    bgColor: "#E1E0F3",
    title: "05",
    description: "Total CVs Created",
    hasArrow: true,
  },
  { id: 2, bgColor: "#1C1D24", title: "05", description: "CVs Shared" },
  {
    id: 3,
    bgColor: "#1C1D24",
    title: "05",
    description: "Current ATS Score (Average)",
  },
  { id: 4, bgColor: "#1C1D24", title: "05", description: "Tokens Available" },
  {
    id: 5,
    bgColor: "#1C1D24",
    title: "",
    description: "Last Updated CV",
    hasArrow: true,
  },
];

const DashboardCarousel: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isDesktop = windowWidth >= 1024;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  // Decide how many items fit on one "page" (mobile => 1.5, tablet => 3, desktop => all).
  const visibleItems = isDesktop ? items.length : isTablet ? 3 : 1.5;

  // For desktop, explicitly set width to 16.4rem and gap to 3rem between items
  // For mobile/tablet, keep your original style: each item is % based.
  const itemStyle: React.CSSProperties = isDesktop
    ? { width: "16.4rem", flexShrink: 0 }
    : { width: `${100 / visibleItems}%`, flexShrink: 0 };

  // ----- AUTO-PLAY ONLY ON MOBILE/TABLET -----
  useEffect(() => {
    if (isDesktop) return; // No auto-play on desktop

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        // if we're at the last item, loop back to 0
        if (prev >= items.length - 1) return 0;
        return prev + 1;
      });
    }, 3000); // every 3 seconds

    return () => clearInterval(interval);
  }, [isDesktop]);

  // Whenever currentIndex changes, scroll to that item (mobile/tablet only).
  useEffect(() => {
    if (!containerRef.current || isDesktop) return;

    // total scrollable width
    const scrollWidth = containerRef.current.scrollWidth;
    // each item is 1/items.length of the entire scrollWidth
    const itemWidthPx = scrollWidth / items.length;

    // scroll to the item at currentIndex
    containerRef.current.scrollTo({
      left: currentIndex * itemWidthPx,
      behavior: "smooth",
    });
  }, [currentIndex, isDesktop]);

  return (
    <div className="w-full">
      {/* Carousel Container */}
      <div
        ref={containerRef}
        className={`
          w-full
          flex
          ${isDesktop ? "gap-[2.3rem]" : "gap-4"}
          ${!isDesktop ? "overflow-x-auto" : ""}
        `}
      >
        {items.map((item) => (
          <div key={item.id} style={itemStyle}>
            <div
              className="h-[12rem] w-full flex flex-col justify-center items-center rounded-2xl gap-3"
              style={{ backgroundColor: item.bgColor }}
            >
              <span className="flex items-center gap-4">
                <h1
                  className={`text-4xl font-bold ${
                    item.bgColor === "#1C1D24" ? "text-white" : "text-black"
                  }`}
                >
                  {item.title}
                </h1>
                {item.hasArrow && (
                  <div className="flex justify-center items-center gap-2 bg-white rounded-full h-10 w-10">
                    <img
                      src={arrow3}
                      alt="arrow3"
                      className="rotate-[-45deg] w-[1.1rem]"
                    />
                  </div>
                )}
              </span>
              <p
                className={`text-[1.3rem] text-center ${
                  item.bgColor === "#1C1D24" ? "text-white" : "text-black"
                }`}
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots (only on mobile/tablet) */}
      {!isDesktop && (
        <div className="flex justify-center mt-4 gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 rounded-full transition-colors duration-200
                ${
                  index === currentIndex ? "bg-purple-600" : "bg-gray-300"
                }
              `}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DashboardCarousel;
