// AuthLayout.tsx
import React from "react";
import { Link } from "react-router-dom";
import WelcomeHeader from "@/components/welcomeHeader";
import WelcomeDescription from "@/components/welcomeDescription";
import WelcomeHeroBanner from "../assets/images/welcomeHerobanner.svg";
import { NextButton } from "@/components/welcomeNavButtons";

interface AuthLayoutProps {
  /**
   * Welcome description content.
   */
  heading: string;
  subheading: string;
  altText?: string;

  /**
   * Controls the "New to Internet Identity?" link.
   */
  showNewUserLink?: boolean;
  newUserLinkText?: string;
  newUserLinkTo?: string;

  /**
   * Next button customization.
   */
  nextButtonText?: string;
  nextButtonTo?: string;

  /**
   * Auth link customization.
   */
  authLink?: string;
  authLinkText?: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
  heading,
  subheading,
  altText,
  showNewUserLink = true,
  newUserLinkText = "New to Internet Identity?",
  newUserLinkTo = "/internet-signup",
  nextButtonText = "Continue",
  nextButtonTo = "",
  authLink="/signin",
  authLinkText="Log In"
}) => {
  return (
    <>
      <section>
        <WelcomeHeader leftLabel="Back"/>
        <div className="flex justify-center items-center flex-col h-auto w-full pt-32 pr-[0.8125rem] pb-10 pl-3.5 gap-14">
          <div className="flex flex-col justify-center items-center gap-[1.8rem]">
            <WelcomeDescription
              heading={heading}
              subheading={subheading}
              altText={altText}
            />
            {showNewUserLink && (
              <span className="flex items-center gap-2">
                <p>{newUserLinkText}</p>
                <Link to={newUserLinkTo} className="text-[#6D53E7] text-base font-extrabold">
                  &#8594;
                </Link>
              </span>
            )}
          </div>
          <div className="w-[19.25rem] h-[14.55rem]">
            <img src={WelcomeHeroBanner} alt="Welcome Hero Banner" />
          </div>
          <NextButton to={nextButtonTo} text={nextButtonText}/>
          <div className="flex flex-col justify-center items-center text-center">
            <Link to={authLink} className="flex items-center gap-[0.62rem] text-[#6D53E7]">
              <p className="text-base font-normal leading-normal">{authLinkText}</p>
              &#8594;
            </Link>
            <span className="flex items-center gap-[0.62rem]">
              <p>Need Help?</p>
              <Link to="/contact-us" className="flex items-center gap-[0.62rem] text-[#6D53E7]">
                Contact Us <p className="text-black">&#8594;</p>
              </Link>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default AuthLayout;
