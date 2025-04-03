import { useState } from "react";
import { Link } from "react-router-dom";
import WelcomeHeader from "./welcomeHeader";
import WelcomeDescription from "./welcomeDescription";
import { NextButton } from "./welcomeNavButtons";
import welcomeHeroBanner from "../assets/images/welcomeHerobanner.svg";
import welcomeVideo from "../assets/images/Create Your Internet Identity in 2 Minutes.mp4"
// import { useUser } from "../contexts/AuthContext";
import {useAuth} from "@/contexts/AuthenticationContext";

const InternetIdentityLayout: React.FC = () => {

  const { isAuth, login, logout } = useAuth();

  // const { handleSignup } = useUser();
  // const [formData, setFormData] = useState<any>({
  //   full_name: '',
  //   email: '',
  //   date_of_birth: '',
  //   nationality: '',
  //   address: '',
  //   contact_number: '',
  //   education: '',
  //   marital_status: '',
  //   linkedin: '',
  //   github: '',
  //   summary: ''
  // });

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   try {
  //     await handleSignup(formData);
  //     // Handle successful signup
  //   } catch (error) {
  //     // Handle error
  //     console.error('Signup failed:', error);
  //   }
  // };

  const handleContinue = async () => {
    await login();
  };

   // State to track the current view: 'video' or 'screenshot'
  const [view, setView] = useState<'video' | 'screenshot'>('video');

  return (
    <>
       <section>
        <WelcomeHeader leftLabel="Back" />
        <div className="flex justify-center items-center flex-col h-auto w-full pt-32 pr-[0.8125rem] pb-0 pl-3.5 gap-14">

          {/* Welcome Description and Toggle Buttons */}
          <div className="flex flex-col justify-center items-center gap-[1.8rem]">
            <WelcomeDescription
              heading="New to Internet Identity?"
              subheading="Follow these steps to create an account or learn how to use your Internet Identity."
            />

            {/* Toggle Buttons */}
            <div className="flex items-center gap-2 py-2 px-3 bg-[#E1E0F3] rounded-[0.25rem]">
              {/* Video Recording Button */}
              <button
                onClick={() => setView('video')}
                className={`px-[0.63rem] py-[0.38rem] rounded-[0.125rem] 
                  ${view === 'video' ? 'bg-white text-black' : 'bg-transparent text-gray-700 hover:bg-white hover:text-black ease-out duration-300'}
                `}
              >
                Video Rec.
              </button>

              {/* Screenshot Button */}
              <button
                onClick={() => setView('screenshot')}
                className={`px-[0.63rem] py-[0.38rem] rounded-[0.125rem] 
                  ${view === 'screenshot' ? 'bg-white text-black' : 'bg-transparent text-gray-700 hover:bg-white hover:text-black ease-out duration-300'}
                `}
              >
                Screenshot
              </button>
            </div>
          </div>

          {/* Video/Screenshot Display Area */}
          <div className="h-80 w-full lg:w-[43rem] flex justify-center items-center bg-gray-100 rounded-md shadow-md p-3">
            {view === 'video' ? (
              <div className="border-purple-500 ">
                <video
                  controls
                  className="w-full h-80"
                >
                <source src={welcomeVideo} type="video/mp4" />
                <source src="welcomeVideo.webm" type="video/webm" />
                Your browser does not support the video tag.
                </video>
              </div>
            ) : (
              <img
                src={welcomeHeroBanner}
                alt="Screenshot"
                className="max-w-full max-h-full object-contain"
              />
            )}
          </div>

          {/* Next Button */}
          <NextButton onClick={handleContinue} />

          {/* Additional Links */}
          <div className="flex flex-col items-center gap-2">
            <Link to="/signin" className="flex items-center gap-[0.62rem] text-[#6D53E7]">
              Log In <span>&#8594;</span>
            </Link>
            <span className="flex gap-1 items-center">
              Need Help?
              <Link to="/contact-us" className="flex items-center gap-[0.62rem] text-[#6D53E7]">
                Contact Us <span>&#8594;</span>
              </Link>
            </span>
          </div>

          {/* Hero Banner Image */}
          <div className="w-[19.25rem] h-auto">
            <img src={welcomeHeroBanner} alt="Welcome Hero Banner" className="w-full h-auto object-cover" />
          </div>
        </div>
      </section>
    </>
  );

};
export default InternetIdentityLayout;
