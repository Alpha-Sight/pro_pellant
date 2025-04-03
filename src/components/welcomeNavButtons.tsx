import { useNavigate } from "react-router-dom";
import arrow3 from "../assets/images/arrow3.svg";
import arrow4 from "../assets/images/arrow4.svg";

interface NextButtonProps {
  /** The route to navigate to when this button is clicked. */
  to?: string;
  text?: string;
  onClick?: () => boolean | void | any;
}

/**
 * NextButton: Navigates to the given 'to' route when clicked.
 */
export const NextButton: React.FC<NextButtonProps> = ({ to,  text = "Next", onClick  }) => {
  const navigate = useNavigate();
 const handleNext = () => {
    if (onClick && !onClick()) {
      // If the onClick function exists and returns false, stop navigation
      return;
    }
    to ? navigate(to) : null;
  };

  return (
   <button onClick={handleNext} className="group flex w-auto justify-center items-center gap-5 bg-black py-[0.41rem] px-[1.03rem] sm:py-[0.55rem] sm:px-[1.13rem] rounded-3xl hover:gap-8 transition-transform duration-300 hover:translate-x-2" >
      <p className="text-center text-[0.92rem] md:text-[1.2rem] font-semibold leading-7 text-white"> {text} </p>
      <div className="w-8 h-8  bg-white rounded-full flex items-center justify-center">
        <img src={arrow3} alt="Next Page" className="group-hover:rotate-0 transition-transform duration-300"/>
    </div>
  </button>

  );
};

/**
 * BackButton: Goes back one step in the browser history.
 */
export const BackButton: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <button onClick={handleBack} className="group flex w-auto justify-center items-center gap-5 bg-black py-[0.41rem] px-[1.03rem] sm:py-[0.55rem] sm:px-[1.13rem] rounded-3xl hover:gap-8 transition-transform duration-300 hover:translate-x-2" >
      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:gap-8">
        <img src={arrow4} alt="previous page" className="group-hover:rotate-0 transition-transform duration-300"/>
      </div>
      <p className="text-center text-[0.92rem] md:text-[1.2rem] font-semibold leading-7 text-white">Back</p>
    </button>
  );
};
