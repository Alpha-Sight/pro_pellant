import React from "react";
import { GiRotaryPhone } from "react-icons/gi";
import { IoMailSharp } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";

// Type definitions for CV data
interface Contact {
  phone: string;
  email: string;
  address: string;
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
  responsibilities: string[];
}

interface CvData {
  firstName: string;
  lastName: string;
  title: string;
  contact: Contact;
  summary: string;
  education: Education[];
  skills: string[];
  experience: Experience[];
}

interface Template9Props {
  cvData?: CvData; // Optional custom CV data prop
}

const Template9: React.FC<Template9Props> = ({ cvData }) => {
  // Mock data as fallback
  const mockData: CvData = {
    firstName: "SARAH",
    lastName: "AMELIA",
    title: "WEB DEVELOPER",
    contact: {
      phone: "123-456-7890",
      email: "hello@reallygreatsite.com",
      address: "123 Anywhere St., Any City",
    },
    summary:
      "I am a qualified and professional web developer with five years of experience in database administration and website design. Strong creative and analytical skills. Team player with an eye for detail.",
    education: [
      {
        level: "SECONDARY SCHOOL",
        school: "Really Great High School",
        period: "2010 - 2014",
      },
      {
        level: "BACHELOR OF TECHNOLOGY",
        school: "Really Great University",
        period: "2014 - 2016",
      },
    ],
    skills: [
      "Web Design",
      "Design Thinking",
      "Wireframe Creation",
      "Front End Coding",
      "Backend Tech",
      "Problem Solving",
      "Computer Literacy",
      "Project Management Tools",
      "Strong Communication",
    ],
    experience: [
      {
        title: "APPLICATIONS DEVELOPER",
        company: "Really Great Company",
        period: "2016 - Present",
        responsibilities: [
          "Database administration and website design",
          "Built the logic for a streamlined ad-serving platform that scaled",
          "Educational institutions and online classroom management",
        ],
      },
      {
        title: "WEB CONTENT MANAGER",
        company: "Really Great Company",
        period: "2014 - 2016",
        responsibilities: [
          "Database administration and website design",
          "Built the logic for a streamlined ad-serving platform that scaled",
          "Educational institutions and online classroom management",
        ],
      },
      {
        title: "ANALYSIS CONTENT",
        company: "Really Great Company",
        period: "2010 - 2014",
        responsibilities: [
          "Database administration and website design",
          "Built the logic for a streamlined ad-serving platform that scaled",
          "Educational institutions and online classroom management",
        ],
      },
    ],
  };

  const data = cvData || mockData;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg">
        {/* Header Section */}
        <div className="text-center py-12">
          <h1 className="text-3xl font-medium tracking-wider text-gray-800 mb-2">
            {data.firstName} {data.lastName}
          </h1>
          <p className="text-gray-600 uppercase tracking-wide">{data.title}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr]">
          {/* Left Column */}
          <div className="bg-[#FDF2F2] p-8 space-y-8">
            {/* Contact Section */}
            <section>
              <h2 className="text-gray-800 font-medium mb-4 uppercase">Contact</h2>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-600">
                  <GiRotaryPhone className="text-lg" />
                  <span className="text-sm">{data.contact.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <IoMailSharp className="text-lg" />
                  <span className="text-sm">{data.contact.email}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <CiLocationOn className="text-lg" />
                  <span className="text-sm">{data.contact.address}</span>
                </div>
              </div>
            </section>

            {/* Education Section */}
            <section>
              <h2 className="text-gray-800 font-medium mb-4 uppercase">Education</h2>
              {data.education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-gray-800 font-medium text-sm">{edu.level}</h3>
                  <p className="text-gray-600 text-sm">{edu.school}</p>
                  <p className="text-gray-500 text-sm">{edu.period}</p>
                </div>
              ))}
            </section>

            {/* Skills Section */}
            <section>
              <h2 className="text-gray-800 font-medium mb-4 uppercase">Skills</h2>
              <ul className="space-y-1">
                {data.skills.map((skill, index) => (
                  <li key={index} className="text-sm text-gray-600">
                    {skill}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Right Column */}
          <div className="p-8 space-y-8">
            {/* Summary Section */}
            <section>
              <h2 className="text-gray-800 font-medium mb-4 uppercase">Summary</h2>
              <p className="text-sm text-gray-600 leading-relaxed">{data.summary}</p>
            </section>

            {/* Experience Section */}
            <section>
              <h2 className="text-gray-800 font-medium mb-6 uppercase">Experience</h2>
              <div className="space-y-6">
                {data.experience.map((exp, index) => (
                  <div key={index} className="mb-6">
                    <div className="mb-2">
                      <h3 className="text-gray-800 font-medium">{exp.title}</h3>
                      <p className="text-gray-600 text-sm">{exp.company}</p>
                      <p className="text-gray-500 text-sm mb-2">{exp.period}</p>
                    </div>
                    <ul className="list-disc pl-4 space-y-1">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="text-sm text-gray-600">
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template9;
