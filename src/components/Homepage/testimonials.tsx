import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import build_icon from "../../assets/images/black_arrow.svg";
import green_dot from "../../assets/images/greenDot.svg";

const testimonialsData = [
  {
    id: 1,
    text: "“Syntax transformed my CV in minutes! The AI suggestions helped me add key terms...”",
    name: "Alex S.",
    role: "Marketing Specialist",
    avatar: "https://github.com/shadcn.png",
  },
  {
    id: 2,
    text: "“The drag-and-drop builder is a game-changer. I was able to organize my CV exactly how I wanted...”",
    name: "Sarah G.",
    role: "Software Engineer",
    avatar: "https://github.com/shadcn.png",
  },
  {
    id: 3,
    text: "“I’ve used other CV builders before, but Syntax’s AI-driven ATS optimization really makes a difference...”",
    name: "John R.",
    role: "Project Manager",
    avatar: "https://github.com/shadcn.png",
  },
  {
    id: 4,
    text: "“I landed more interviews in a week than in the last three months combined!”",
    name: "Kim B.",
    role: "UX Designer",
    avatar: "https://github.com/shadcn.png",
  },
  {
    id: 5,
    text: "“Syntax is so user-friendly. I’ve recommended it to all my friends.”",
    name: "Mike T.",
    role: "Sales Associate",
    avatar: "https://github.com/shadcn.png",
  },
  {
    id: 6,
    text: "“I love how it highlights key achievements automatically!”",
    name: "Lucy P.",
    role: "Data Analyst",
    avatar: "https://github.com/shadcn.png",
  },
  {
    id: 7,
    text: "“One-click export to PDF is super handy for quick job applications.”",
    name: "Sam W.",
    role: "Graphic Designer",
    avatar: "https://github.com/shadcn.png",
  },
  {
    id: 8,
    text: "“Syntax’s templates saved me so much time!”",
    name: "Jessica R.",
    role: "HR Specialist",
    avatar: "https://github.com/shadcn.png",
  },
  {
    id: 9,
    text: "“I used to dread updating my resume, but now it’s a breeze.”",
    name: "Robert C.",
    role: "Accountant",
    avatar: "https://github.com/shadcn.png",
  },
];

const testimonialClass = {
  p: "font-normal text-[1.25rem] leading-normal md:text-[1.34rem] md:leading-[1.68rem]",
};

const Testimonials: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  // If showAll = false, only show first 3; otherwise show entire array
  const visibleTestimonials = showAll
    ? testimonialsData
    : testimonialsData.slice(0, 3);

  return (
    <section className="mt-[8rem]">
      <span className="flex items-center justify-center gap-4">
        <h5 className="text-left md:text-center font-medium text-[1.2rem] md:text-[1.5rem] leading-[1.89rem]">
        98% of users say they felt more confident applying for jobs with our AI
        resumes.
        </h5>
        <img src={green_dot} alt="green dot" />
      </span>
      <h5 className="font-bold text-4xl md:text-[3.1rem] leading-[4.42rem] mt-8">
        Testimonials
      </h5>
      <p className="font-medium text-[1.2rem] md:text-[1.67rem] leading-[2.1rem]">
        Hear from Our Users
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20 mt-14 md:mt-16">
        {visibleTestimonials.map((test) => (
          <div key={test.id} className="flex flex-col">
            <p className={testimonialClass.p}>{test.text}</p>

            <div className="flex items-center gap-4 mt-4">
              <Avatar>
                <AvatarImage src={test.avatar} />
                <AvatarFallback>Syntax</AvatarFallback>
              </Avatar>
              <div className="font-medium">
                <p>{test.name}</p>
                <p>{test.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center lg:px-16 mt-8">
        <div
          className="group flex items-center my-4 shadow-[-15px_-8px_24px_3px_rgba(0,0,0,0.1)] 
                     rounded-full px-6 py-1 pr-3 gap-4 cursor-pointer 
                     hover:gap-8 transition-all duration-300"
          onClick={() => setShowAll(!showAll)}
        >
          <h5 className="font-semibold text-[1.1rem] md:text-[1.5rem] text-[#3D3F4E] leading-[2.81rem]">
            {showAll ? "Show Less" : "Show More"}
          </h5>
          <img
            src={build_icon}
            alt="build icon"
            className={`w-[2.4rem] h-[2.4rem] md:w-[3.11rem] md:h-[3.11rem] group-hover:-rotate-45 
                        group-hover:transition-all group-hover:duration-300 
                        ease-in-out`}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
