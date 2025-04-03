import backwardArrow from "../assets/images/backwardsArrow.svg";
import { RxHamburgerMenu } from "react-icons/rx";

const HomeNav: React.FC = () => {

  return (
    <div className="flex justify-center items-center w-full ">
      <div className="bg-white flex justify-center items-center self-center py-2 px-4 rounded-full gap-20 w-auto absolute z-50 top-11 shadow-[0.838px_0.838px_18.767px_0.838px_rgba(61,63,78,0.10)]">
        <div className="bg-black rounded-full w-11 h-11"></div>
          <ul className="hidden md:flex md:gap-11 lg:gap-[3.34rem]">
            <li> <a href="">Features</a></li>
            <li> <a href="">Workflow</a></li>
            <li> <a href="">pricing</a></li>
            <li> <a href="">FAQ</a></li>
            <li> <a href="">Templates</a></li>
          </ul>
        <div className="flex items-center justify-center bg-black w-11 h-11 rounded-full gap-[0.41rem]">
          <div className="flex items-center justify-center bg-white w-[1.9rem] h-[1.9rem] rounded-full gap-[0.41rem]">
            <img src={backwardArrow} alt="" className="rotate-90"/>
          </div>
        </div>
        <div className="flex bg-black w-11 h-11 rounded-full items-center justify-center md:hidden">
          <RxHamburgerMenu className="text-white font-extrabold text-xl"/>
        </div>
      </div>
    </div>
  );
};
export default HomeNav;