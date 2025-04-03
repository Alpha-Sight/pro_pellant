import Magazine from "./magazine";

interface WelcomeDescriptionProps {
  heading?: string;
  subheading?: string;
  altText?: string;
}

const WelcomeDescription: React.FC<WelcomeDescriptionProps> = ({
  heading = "Welcome to Syntax!",
  subheading = "Upload your current resume or start fresh—we’ll help you craft a CV that stands out!",
  altText = "",
}) => {
  return (
    <div className="relative flex flex-col gap-2 items-center">
      {/* Magazine Component as Background */}
      <div className="absolute inset-0 flex justify-center opacity-20 -z-10">
        <Magazine width="w-[90%] lg:w-[80%]" />
      </div>

      {/* Foreground Content */}
      <h1 className="text-center text-[2.5rem] md:text-5xl font-bold leading-normal whitespace-pre-line">
        {heading}
      </h1>
      <p className="text-center text-sm md:text-base font-normal leading-normal whitespace-pre-line">
        {subheading}
      </p>
      <p className="text-center text-sm font-normal leading-normal text-[#82859D] hidden lg:block">
        {altText}
      </p>
    </div>
  );
};

export default WelcomeDescription;
