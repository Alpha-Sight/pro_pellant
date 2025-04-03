import React from "react";
import { GiRotaryPhone } from "react-icons/gi";
import { IoMailSharp } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { IoGlobeOutline } from "react-icons/io5";

// Type definitions for the props and mock data
interface Contact {
  phone: string;
  email: string;
  website: string;
  address: string;
}

interface Education {
  degree: string;
  school: string;
  period: string;
  description: string;
}

interface Language {
  name: string;
  level: number;
}

interface WorkExperience {
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
  profile: string;
  skills: string[];
  education: Education[];
  languages: Language[];
  workExperience: WorkExperience[];
}

interface Template8Props {
  cvData?: CvData; // Optional prop for custom CV data
}

const Template8: React.FC<Template8Props> = ({ cvData }) => {
  // Mock data as fallback
  const mockData: CvData = {
    firstName: "JONATHAN",
    lastName: "PATTERSON",
    title: "GRAPHIC DESIGNER",
    contact: {
      phone: "123-456-7890",
      email: "hello@mygreatsite.com",
      website: "www.reallygreatsite.com",
      address: "123 Anywhere St., Any City",
    },
    profile:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam cursus neque nec ullamcorper est. Fusce laoreet interdum sapien, eu fermentum ex placerat eget. Praesent hendrerit nulla in lectus placerat.",
    skills: ["Skill name here", "Your skill", "Special skills", "List your skills"],
    education: [
      {
        degree: "Your Degree Name",
        school: "Your Institution Name",
        period: "2016-2018",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        degree: "Your Degree Name",
        school: "Your Institution Name",
        period: "2014-2016",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ],
    languages: [
      { name: "English", level: 100 },
      { name: "German", level: 80 },
      { name: "Spanish", level: 60 },
    ],
    workExperience: [
      {
        title: "Your Job Position here",
        company: "Company name",
        period: "2020-2022",
        responsibilities: [
          "Lorem ipsum dolor est amet consectetur adipiscing elit. Aliquam sagittis",
          "Praesent hendrerit nulla in lectus placerat.",
          "Nunc sed scelerisque eros, vulputate in ipsum.",
        ],
      },
      {
        title: "Your Job Position here",
        company: "Company name",
        period: "2018-2020",
        responsibilities: [
          "Lorem ipsum dolor est amet consectetur adipiscing elit. Aliquam sagittis",
          "Praesent hendrerit nulla in lectus placerat.",
        ],
      },
    ],
  };

  const data = cvData || mockData;

  // Language level bar component
  const LanguageLevel: React.FC<{ level: number }> = ({ level }) => (
    <div className="w-32 h-2 bg-gray-200 rounded-full">
      <div className="h-full bg-gray-600 rounded-full" style={{ width: `${level}%` }}></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg">
        {/* Header Section */}
        <div className="p-8 text-center">
          <h1 className="text-3xl font-light text-gray-800 tracking-wide mb-1">
            {data.firstName} {data.lastName}
          </h1>
          <p className="text-gray-600 uppercase tracking-wider text-sm">{data.title}</p>
        </div>

        <hr className="border-gray-200" />

        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr]">
          {/* Left Column */}
          <div className="bg-gray-50 p-8 space-y-8">
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
                  <IoGlobeOutline className="text-lg" />
                  <span className="text-sm">{data.contact.website}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <CiLocationOn className="text-lg" />
                  <span className="text-sm">{data.contact.address}</span>
                </div>
              </div>
            </section>

            {/* Skills Section */}
            <section>
              <h2 className="text-gray-800 font-medium mb-4 uppercase">Skills</h2>
              <ul className="space-y-1">
                {data.skills.map((skill, index) => (
                  <li key={index} className="text-sm text-gray-600">{skill}</li>
                ))}
              </ul>
            </section>

            {/* Education Section */}
            <section>
              <h2 className="text-gray-800 font-medium mb-4 uppercase">Education</h2>
              {data.education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-gray-800 font-medium text-sm">{edu.degree}</h3>
                  <p className="text-gray-600 text-sm">{edu.school}</p>
                  <p className="text-gray-500 text-sm">{edu.period}</p>
                  <p className="text-gray-600 text-sm mt-1">{edu.description}</p>
                </div>
              ))}
            </section>

            {/* Languages Section */}
            <section>
              <h2 className="text-gray-800 font-medium mb-4 uppercase">Languages</h2>
              <div className="space-y-3">
                {data.languages.map((lang, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{lang.name}</span>
                    <LanguageLevel level={lang.level} />
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="p-8 space-y-8">
            {/* Profile Section */}
            <section>
              <h2 className="text-gray-800 font-medium mb-4 uppercase">Profile</h2>
              <p className="text-sm text-gray-600 leading-relaxed">{data.profile}</p>
            </section>

            {/* Work Experience Section */}
            <section>
              <h2 className="text-gray-800 font-medium mb-6 uppercase">Work Experience</h2>
              <div className="space-y-6">
                {data.workExperience.map((exp, index) => (
                  <div key={index} className="mb-6">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-gray-800 font-medium">{exp.title}</h3>
                        <p className="text-gray-600 text-sm">{exp.company}</p>
                      </div>
                      <span className="text-gray-500 text-sm">{exp.period}</span>
                    </div>
                    <ul className="list-disc pl-4 space-y-1">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="text-sm text-gray-600">{resp}</li>
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

export default Template8;
