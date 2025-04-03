import React from "react";
import { GiRotaryPhone } from "react-icons/gi";
import { IoMailSharp } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { IoGlobeOutline } from "react-icons/io5";

// Define types for CV data
interface Contact {
  phone: string;
  email: string;
  address: string;
  website: string;
}

interface Language {
  name: string;
  level: string;
}

interface WorkExperience {
  company: string;
  title: string;
  period: string;
  achievements: string[];
}

interface Education {
  degree: string;
  school: string;
  period: string;
  gpa: string;
}

interface Reference {
  name: string;
  title: string;
  phone: string;
  email: string;
}

interface CvData {
  firstName: string;
  lastName: string;
  title: string;
  contact: Contact;
  profile: string;
  skills: string[];
  languages: Language[];
  workExperience: WorkExperience[];
  education: Education[];
  references: Reference[];
}

interface Template7Props {
  cvData?: CvData; // Optional to allow fallback to mock data
}

const Template7: React.FC<Template7Props> = ({ cvData }) => {
  // Mock data for demonstration
  const mockData: CvData = {
    firstName: "RICHARD",
    lastName: "SANCHEZ",
    title: "MARKETING MANAGER",
    contact: {
      phone: "+123-456-7890",
      email: "hello@reallygreatsite.com",
      address: "123 Anywhere St., Any City",
      website: "www.reallygreatsite.com",
    },
    profile:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.",
    skills: [
      "Project Management",
      "Leadership",
      "Teamwork",
      "Time Management",
      "Critical Thinking",
      "Effective Communication",
      "Digital Marketing",
    ],
    languages: [
      { name: "English", level: "Fluent" },
      { name: "French", level: "Fluent" },
      { name: "German", level: "Basic" },
      { name: "Spanish", level: "Intermediate" },
    ],
    workExperience: [
      {
        company: "Borcelle Studio",
        title: "Marketing Manager & Specialist",
        period: "2030 - PRESENT",
        achievements: [
          "Develop and execute comprehensive marketing strategies and campaigns",
          "Lead, mentor, and manage a high-performing marketing team fostering a collaborative and results-driven environment",
          "Monitor brand consistency across marketing channels and materials",
        ],
      },
      {
        company: "Peuget Studio",
        title: "Marketing Manager & Specialist",
        period: "2025 - 2029",
        achievements: [
          "Create and manage the marketing budget, ensuring efficient allocation of resources and controlling ROI",
          "Oversee market research to identify emerging trends, customer needs, and competitor strategies",
        ],
      },
      {
        company: "Studio Showbee",
        title: "Marketing Manager & Specialist",
        period: "2024 - 2025",
        achievements: [
          "Develop and maintain strong relationships with partners, agencies, and vendors to support marketing initiatives",
          "Monitor and maintain brand consistency across all marketing channels and materials",
        ],
      },
    ],
    education: [
      {
        degree: "Master of Business Management",
        school: "School of business | Wardiere University",
        period: "2020 - 2021",
        gpa: "GPA: 3.8 / 4.0",
      },
      {
        degree: "Bachelor of Business Management",
        school: "School of business | Wardiere University",
        period: "2016 - 2020",
        gpa: "GPA: 3.8 / 4.0",
      },
    ],
    references: [
      {
        name: "Estelle Darcy",
        title: "Wardiere Inc. / CEO",
        phone: "+124-4526-7890",
        email: "hello@reallygreatsite.com",
      },
    ],
  };

  const data = cvData || mockData;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg">
        {/* Header */}
        <div className="bg-[#2D3748] text-white py-8 px-12">
          <h1 className="text-3xl font-bold mb-1">
            {data.firstName} {data.lastName}
          </h1>
          <p className="text-gray-300">{data.title}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8">
          {/* Left Column */}
          <div className="bg-gray-50 p-8 space-y-6">
            {/* Contact Section */}
            <section>
              <h2 className="text-gray-800 font-semibold mb-4 uppercase border-b border-gray-300 pb-2">
                Contact
              </h2>
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
                <div className="flex items-center gap-2 text-gray-600">
                  <IoGlobeOutline className="text-lg" />
                  <span className="text-sm">{data.contact.website}</span>
                </div>
              </div>
            </section>

            {/* Skills Section */}
            <section>
              <h2 className="text-gray-800 font-semibold mb-4 uppercase border-b border-gray-300 pb-2">
                Skills
              </h2>
              <ul className="space-y-1">
                {data.skills.map((skill, index) => (
                  <li key={index} className="text-sm text-gray-600">
                    • {skill}
                  </li>
                ))}
              </ul>
            </section>

            {/* Languages Section */}
            <section>
              <h2 className="text-gray-800 font-semibold mb-4 uppercase border-b border-gray-300 pb-2">
                Languages
              </h2>
              <ul className="space-y-1">
                {data.languages.map((lang, index) => (
                  <li key={index} className="text-sm text-gray-600">
                    • {lang.name} ({lang.level})
                  </li>
                ))}
              </ul>
            </section>

            {/* References Section */}
            <section>
              <h2 className="text-gray-800 font-semibold mb-4 uppercase border-b border-gray-300 pb-2">
                Reference
              </h2>
              {data.references.map((ref, index) => (
                <div key={index} className="text-sm">
                  <p className="font-medium text-gray-800">{ref.name}</p>
                  <p className="text-gray-600">{ref.title}</p>
                  <p className="text-gray-600">Phone: {ref.phone}</p>
                  <p className="text-gray-600">Email: {ref.email}</p>
                </div>
              ))}
            </section>
          </div>

          {/* Right Column */}
          <div className="p-8 space-y-8">
            {/* Profile Section */}
            <section>
              <h2 className="text-gray-800 font-semibold mb-3 uppercase">Profile</h2>
              <p className="text-sm text-gray-600 leading-relaxed">{data.profile}</p>
            </section>

            {/* Work Experience Section */}
            <section>
              <h2 className="text-gray-800 font-semibold mb-4 uppercase">
                Work Experience
              </h2>
              <div className="space-y-6">
                {data.workExperience.map((exp, index) => (
                  <div key={index}>
                    <h3 className="font-medium text-gray-800">{exp.title}</h3>
                    <p className="text-gray-600 text-sm">{exp.company}</p>
                    <p className="text-gray-500 text-sm">{exp.period}</p>
                    <ul className="list-disc pl-4 space-y-1">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm text-gray-600">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Education Section */}
            <section>
              <h2 className="text-gray-800 font-semibold mb-4 uppercase">Education</h2>
              {data.education.map((edu, index) => (
                <div key={index}>
                  <h3 className="font-medium text-gray-800">{edu.degree}</h3>
                  <p className="text-gray-600 text-sm">{edu.school}</p>
                  <p className="text-gray-500 text-sm">{edu.period}</p>
                  <p className="text-gray-600 text-sm">{edu.gpa}</p>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template7;
