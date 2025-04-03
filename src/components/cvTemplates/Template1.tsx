import React from "react";
import { TemplateComponentProps } from "@/types/cv.types";
import { GiRotaryPhone } from "react-icons/gi";
import { IoMailSharp } from "react-icons/io5";
import LanguageIcon from "@mui/icons-material/Language";
import RoomIcon from "@mui/icons-material/Room";

// Define types for CV Data
interface Contact {
  phone: string;
  email: string;
  address: string;
  website: string;
}

interface Education {
  level: string;
  school: string;
  period: string;
}

interface Experience {
  title: string;
  company: string;
  period: string;
  achievements: string[];
}

interface CvData {
  firstName: string;
  lastName: string;
  title: string;
  contact: Contact;
  profile: string;
  skills: string[];
  education: Education[];
  experience: Experience[];
}

// Define component props
interface Template1Props {
  cvData?: CvData; 
}

// Component
const Template1: React.FC<Template1Props> = ({ cvData }) => {
  // Default mock data
  const mockData: CvData = cvData || {
    firstName: "DANI",
    lastName: "SCHWAIGER",
    title: "WEB DEVELOPER",
    contact: {
      phone: "0806-289-8015",
      email: "john.doe@example.com",
      address: "5 Quarters Road, GRA, Ikot Ekpene, Akwa Ibom State, Nigeria",
      website: "www.abn.com",
    },
    profile:
      "I am a qualified and professional web developer with five years of experience in database administration and website design. Strong creative and analytical skills. Team player with an eye for details.",
    skills: [
      "Web Design",
      "Design Thinking",
      "Wireframe Creation",
      "Frontend Coding",
      "Problem Solving",
      "Computer Literacy",
      "Project Management Tools",
      "Strong Communication",
    ],
    education: [
      {
        level: "MASTER'S DEGREE",
        school: "Top University for Advanced Studies",
        period: "2018 - 2020",
      },
      {
        level: "COLLEGE",
        school: "Amazing College of Technology",
        period: "2014 - 2018",
      },
      {
        level: "SECONDARY SCHOOL",
        school: "Really Great High School",
        period: "2010 - 2014",
      },
    ],
    experience: [
      {
        title: "APPLICATIONS DEVELOPER",
        company: "Really Great Company",
        period: "2016 - Present",
        achievements: [
          "Database administration and website design",
          "Built the logic for a streamlined ad-serving platform that scaled",
          "Educational institutions and online classroom management",
        ],
      },
      {
        title: "SOFTWARE ENGINEER",
        company: "Tech Solutions Inc.",
        period: "2014 - 2016",
        achievements: [
          "Designed and developed REST APIs for mobile applications",
          "Enhanced user interfaces for better customer experiences",
          "Collaborated with cross-functional teams to deliver high-quality products",
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen text-[#706F6F] bg-gray-600 py-10">
      <button className="hidden mt-4 px-4 py-2 bg-blue-600 text-white rounded-md">
            Edit CV
      </button>
      <div className="max-w-5xl shadow-lg bg-white mx-auto w-full flex flex-col items-center">
        {/* NAME AND TITLE */}
        <header className="w-full bg-[#F4F4F4] text-left py-20 px-10 mt-10">
          <h1 className="text-4xl md:text-5xl font-light text-[#464A4E]">
            {mockData.firstName} <span className="font-bold">{mockData.lastName}</span>
          </h1>
          <h5 className="text-base md:text-lg text-gray-600">{mockData.title}</h5>
        </header>

        {/* CONTACT AND PROFILE */}
        <div className="flex flex-wrap md:flex-nowrap mt-8 w-full">
          {/* CONTACTS */}
          <div className="flex flex-col mb-10 gap-4 px-10 w-full md:w-[43.5%]">
            <div className="font-light flex gap-3 items-center">
              <GiRotaryPhone className="text-2xl" />
              <span className="text-sm">{mockData.contact.phone}</span>
            </div>
            <div className="font-light flex gap-3 items-center">
              <IoMailSharp className="text-2xl" />
              <span className="text-sm">{mockData.contact.email}</span>
            </div>
            <div className="font-light flex gap-3 items-center">
              <RoomIcon />
              <span className="text-sm">{mockData.contact.address}</span>
            </div>
            <div className="font-light text-sm flex gap-3 items-center">
              <LanguageIcon />
              <span>{mockData.contact.website}</span>
            </div>
          </div>

          <div className="w-[1px] bg-[#464A4E]"></div>

          {/* PROFILE */}
          <div className="px-10 w-full md:w-[90%]">
            <h1 className="text-2xl md:text-3xl font-normal text-[#464A4E] mb-4">
              PROFILE
            </h1>
            <p className="font-light text-sm">{mockData.profile}</p>
          </div>
        </div>

        <hr className="bg-[#464A4E] h-[2px] w-[95%]" />

        {/* CONTENT SECTION */}
        <div className="flex flex-wrap md:flex-nowrap pb-8 w-full">
          {/* LEFT COLUMN */}
          <div className="w-full mt-10 md:w-1/3">
            {/* SKILLS */}
            <div className="mb-6 py-6 px-10">
              <h1 className="text-2xl md:text-3xl font-normal text-[#464A4E] mb-4">
                SKILLS
              </h1>
              <ul className="list-disc pl-4 space-y-2">
                {mockData.skills.map((skill, index) => (
                  <li key={index} className="font-light text-sm">{skill}</li>
                ))}
              </ul>
            </div>

            <div className="md:pl-10">
              <hr className="bg-[#464A4E] h-[2px] w-full" />
            </div>

            {/* EDUCATION */}
            <div className="mt-10 py-6 px-10">
              <h1 className="text-2xl md:text-3xl font-normal text-[#464A4E] mb-4">
                EDUCATION
              </h1>
              {mockData.education.map((edu, index) => (
                <div key={index} className="mb-6">
                  <p className="font-bold text-sm">{edu.level}</p>
                  <p className="font-light text-sm">{edu.school}</p>
                  <p className="font-normal text-sm">{edu.period}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-[1px] bg-[#464A4E]"></div>

          {/* RIGHT COLUMN */}
          <div className="w-full md:w-2/3 mt-10 p-6">
            <h1 className="text-2xl md:text-3xl font-normal text-[#464A4E] mb-4">
              EXPERIENCE
            </h1>
            {mockData.experience.map((exp, index) => (
              <div key={index} className="mb-8">
                <p className="font-bold text-sm">{exp.title}</p>
                <p className="font-light text-sm">{exp.company}</p>
                <p className="font-normal text-sm">{exp.period}</p>
                <ul className="list-disc pl-4 mt-2 space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="font-light text-sm">{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template1;
