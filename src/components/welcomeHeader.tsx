import { Link, useNavigate } from "react-router-dom";
import backwardsArrow from "../assets/images/backwardsArrow.svg";
import nextArrow from "../assets/images/nextArrow.svg";

interface WelcomeHeaderProps {
  leftLabel?: string;
  rightLabel?: string;
  leftLink?: string;
  rightLink?: string;
  children?: React.ReactNode;
}

const WelcomeHeader: React.FC<WelcomeHeaderProps> = ({
  leftLabel = "Home",
  rightLabel = "Dashboard",
  leftLink,
  rightLink,
  children,
}) => {
  const navigate = useNavigate();

  const handlePrevPage = () => {
    navigate(-1); // Default to navigating back
  };

  const handleLeftButtonClick = () => {
    if (leftLabel === "Home") {
      navigate("/"); // Navigate to the home route
    } else if (leftLink) {
      navigate(leftLink);
    } else {
      navigate(-1); // Default to navigating back
    }
  };

  const handleRightButtonClick = () => {
    if (rightLink) {
      navigate(rightLink);
    } else {
      navigate("/user-dashboard"); // Default to navigating back
    }
  };

  return (
    <header className="bg-white flex items-center justify-between px-4 min-h-full relative">
      {/* Left Section */}
      <div className="flex items-center gap-5 self-start absolute left-4 z-50 mt-9 md:mt-12 sm:ml-11">
        {/* Back/Home Button */}
        <button
          onClick={handlePrevPage}
          className="flex items-center justify-center bg-[#d2d2d2] w-8 h-8 rounded-full shadow-[0.67px_0.67px_13.28px_rgba(61,63,78,0.5)]"
        >
          <img
            src={backwardsArrow}
            alt={leftLink ? `Go to ${leftLabel}` : "Go Back"}
          />
        </button>

        {/* Left Label */}
        <p
          onClick={handleLeftButtonClick}
          className="text-base text-[#3D3F4E] font-medium leading-6 [text-shadow:0.67px_0.67px_13.28px_rgba(61,63,78,0.5)] cursor-pointer"
        >
          {leftLabel}
        </p>
      </div>

      {/* Middle Section (children) */}
      <div className="flex-1 flex justify-center z-10">{children}</div>

      {/* Right Section */}
      <div className="flex items-center gap-5 self-start absolute right-4 z-50 mt-9 md:mt-12 sm:mr-11" onClick={handleRightButtonClick}>
        <p
         
          className="text-base text-[#3D3F4E] font-medium leading-6 [text-shadow:0.67px_0.67px_13.28px_rgba(61,63,78,0.5)] cursor-pointer"
        >
          {rightLabel}
        </p>
        <div className="flex items-center justify-center bg-[#3D3F4E] w-8 h-8 rounded-full shadow-[0.67px_0.67px_13.28px_rgba(61,63,78,0.5)] cursor-pointer">
          <img src={nextArrow} alt="Next page" />
        </div>
      </div>
    </header>
  );
};

export default WelcomeHeader;
