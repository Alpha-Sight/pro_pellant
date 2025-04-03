import React from "react";
import { IoMailOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { IoGlobeOutline } from "react-icons/io5";

interface Contact {
  phone: string;
  email: string;
  address: string;
  website: string;
}

interface Education {
  period: string;
  school: string;
  degree: string;
  gpa?: string;
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

interface CvData {
  name: string;
  title: string;
  contact: Contact;
  profileSummary: string;
  education: Education[];
  skills: string[];
  languages: Language[];
  workExperience: WorkExperience[];
}

interface Template18Props {
  cvData?: CvData;
}

const Template18: React.FC<Template18Props> = ({ cvData }) => {
  const mockData: CvData = {
    name: "RICHARD SANCHEZ",
    title: "Marketing Manager",
    contact: {
      phone: "+123-456-7890",
      email: "hello@reallygreatsite.com",
      address: "123 Anywhere St., Any City",
      website: "www.reallygreatsite.com",
    },
    profileSummary:
      "Experienced and results-driven Marketing Manager with a proven track record in developing and executing successful marketing strategies. I am seeking a challenging role where I can contribute my skills in strategic planning, team leadership, and creative problem-solving to achieve business objectives.",
    education: [
      {
        period: "2029 - 2030",
        school: "BORCELLE UNIVERSITY",
        degree: "Master of Business Management",
      },
      {
        period: "2025 - 2029",
        school: "BORCELLE UNIVERSITY",
        degree: "Bachelor of Business Management",
        gpa: "GPA: 3.8 / 4.0",
      },
    ],
    skills: [
      "Project Management",
      "Public Relations",
      "Teamwork",
      "Time Management",
      "Leadership",
      "Effective Communication",
      "Critical Thinking",
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
          "Led the development and implementation of comprehensive marketing strategies that resulted in a 20% increase in brand visibility and a 15% growth in sales within the first year.",
          "Successfully launched and managed multiple cross-channel marketing campaigns, including digital marketing, social media, and traditional advertising, resulting in improved customer acquisition and retention rates.",
        ],
      },
      {
        company: "Fauget Studio",
        title: "Marketing Manager & Specialist",
        period: "2026 - 2029",
        achievements: [
          "Conducted market research to identify emerging trends and consumer preferences, providing valuable insights for product development and positioning.",
          "Oversaw the creation of engaging content for various platforms, collaborating with internal teams and external agencies to ensure brand consistency and influence.",
        ],
      },
      {
        company: "Studio Shodwe",
        title: "Marketing Manager & Specialist",
        period: "2024 - 2026",
        achievements: [
          "Developed and executed targeted marketing campaigns, resulting in a 25% increase in lead generation.",
          "Implemented SEO strategies that improved website traffic by 30%, enhancing online visibility and positioning the company.",
          "Collaborated with sales teams to create effective sales collateral, presentations, and promotional materials.",
        ],
      },
    ],
  };

  const data = cvData || mockData;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg">
        {/* Header with light blue background */}
        <div className="bg-[#e6f3ff] p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-[#1a365d] text-3xl font-semibold mb-1">{data.name}</h1>
            <p className="text-gray-600">{data.title}</p>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8 p-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Contact Section */}
            <section>
              <h2 className="text-[#1a365d] font-semibold mb-4 uppercase">Contact</h2>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-600">
                  <BsTelephone className="text-[#1a365d]" />
                  <span className="text-sm">{data.contact.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <IoMailOutline className="text-[#1a365d]" />
                  <span className="text-sm">{data.contact.email}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <CiLocationOn className="text-[#1a365d]" />
                  <span className="text-sm">{data.contact.address}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <IoGlobeOutline className="text-[#1a365d]" />
                  <span className="text-sm">{data.contact.website}</span>
                </div>
              </div>
            </section>

            {/* Education Section */}
            <section>
              <h2 className="text-[#1a365d] font-semibold mb-4 uppercase">Education</h2>
              {data.education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <p className="text-gray-500 text-sm">{edu.period}</p>
                  <p className="text-gray-800 font-medium uppercase text-sm">{edu.school}</p>
                  <p className="text-gray-600 text-sm">{edu.degree}</p>
                  {edu.gpa && <p className="text-gray-600 text-sm">{edu.gpa}</p>}
                </div>
              ))}
            </section>

            {/* Skills Section */}
            <section>
              <h2 className="text-[#1a365d] font-semibold mb-4 uppercase">Skills</h2>
              <ul className="space-y-1">
                {data.skills.map((skill, index) => (
                  <li key={index} className="text-sm text-gray-600">• {skill}</li>
                ))}
              </ul>
            </section>

            {/* Languages Section */}
            <section>
              <h2 className="text-[#1a365d] font-semibold mb-4 uppercase">Languages</h2>
              <ul className="space-y-1">
                {data.languages.map((lang, index) => (
                  <li key={index} className="text-sm text-gray-600">
                    • {lang.name} {lang.level}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Profile Summary */}
            <section>
              <h2 className="text-[#1a365d] font-semibold mb-4 uppercase">Profile Summary</h2>
              <p className="text-sm text-gray-600 leading-relaxed">{data.profileSummary}</p>
            </section>

            {/* Work Experience */}
            <section>
              <h2 className="text-[#1a365d] font-semibold mb-4 uppercase">Work Experience</h2>
              {data.workExperience.map((exp, index) => (
                <div key={index} className="mb-6">
                  <div className="mb-2">
                    <h3 className="text-gray-800 font-medium">{exp.company}</h3>
                    <p className="text-gray-600 text-sm italic">{exp.title}</p>
                    <p className="text-gray-500 text-sm">{exp.period}</p>
                  </div>
                  <ul className="list-disc pl-5 space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-sm text-gray-600">{achievement}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template18;
