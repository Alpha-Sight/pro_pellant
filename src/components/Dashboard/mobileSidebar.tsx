import { useState } from "react";
import { useNavigate } from "react-router-dom";
import close_icon from "@/assets/images/close_icon.svg";
import syntax_home from "@/assets/images/syntax_home.svg";
import new_cv from "@/assets/images/new_cv.svg";
import cv_template from "@/assets/images/template_icon.svg";
import saved_cv from "@/assets/images/bookmark.svg";
import notification from "@/assets/images/notification.svg";
import pricing from "@/assets/images/pricing.svg";
import NotificationSideBar from "@/Pages/Dashboard/UserDashboard/notificationsidebar";

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [isNotificationOpen, setNotificationOpen] = useState(false);

  if (!isOpen) return null; // Return null if the sidebar is not open

  const handleNotificationToggle = () => {
    setNotificationOpen((prev) => !prev);
  };

  const closeBothSidebars = () => {
    setNotificationOpen(false);
    onClose();
  };

  return (
    <>
      <div className="backdrop-filter backdrop-blur-sm bg-black bg-opacity-30 fixed top-0 left-0 w-full h-full z-30">
        <div className="fixed top-0 right-0 w-2/4 h-full max-h-full bg-[#E1E0F3] text-black shadow-lg z-50 pt-[1.06rem] px-[0.9rem] pb-[1rem] overflow-y-auto">
          <div className="flex justify-end items-center mb-5 mt-4">
            <img
              src={close_icon}
              alt="Close menu"
              className="w-6 h-6 cursor-pointer"
              onClick={closeBothSidebars}
            />
          </div>
          <div className="flex flex-col gap-6 mt-11">
            <span
              className="text-lg font-semibold flex items-center gap-3 cursor-pointer"
              onClick={() => {
                navigate("/");
                closeBothSidebars();
              }}
            >
              <img src={syntax_home} alt="Home" />
              Home
            </span>
            <span
              className="text-lg font-semibold flex items-center gap-3 cursor-pointer"
              onClick={() => {
                navigate("/welcome");
                closeBothSidebars();
              }}
            >
              <img src={new_cv} alt="New CV" />
              New CV
            </span>
            <span
              className="text-lg font-semibold flex items-center gap-3 cursor-pointer"
              onClick={() => {
                navigate("/cv-templates");
                closeBothSidebars();
              }}
            >
              <img src={cv_template} alt="Templates" />
              Templates
            </span>
            <span
              className="text-lg font-semibold flex items-center gap-3 cursor-pointer"
              onClick={() => {
                navigate("/cv-templates");
                closeBothSidebars();
              }}
            >
              <img src={saved_cv} alt="Saved CV" />
              Saved CV
            </span>
            <span
              className="text-lg font-semibold flex items-center gap-3 cursor-pointer"
              onClick={handleNotificationToggle}
            >
              <img src={notification} alt="Notification" />
              Notification
            </span>
            <span
              className="text-lg font-semibold flex items-center gap-3 cursor-pointer"
              onClick={() => {
                navigate("/pricing");
                closeBothSidebars();
              }}
            >
              <img src={pricing} alt="Pricing" />
              Pricing
            </span>
          </div>
        </div>
      </div>

      {/* Notification Component */}
      {isNotificationOpen && (
        <NotificationSideBar
          isOpen={isNotificationOpen}
          onClose={() => setNotificationOpen(false)}
        />
      )}
    </>
  );
};

export default MobileSidebar;
