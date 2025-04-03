import React from "react";
import { IoMailOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";

interface Contact {
  phone: string;
  email: string;
  address: string;
}

interface WorkExperience {
  company: string;
  period: string;
  title: string;
  description: string;
}

interface Education {
  school: string;
  period: string;
  degree: string;
  description: string;
}

interface Skills {
  personal: string[];
  professional: string[];
}

interface CvData {
  name: string;
  title: string;
  contact: Contact;
  workExperience: WorkExperience[];
  education: Education[];
  skills: Skills;
}

interface Template19Props {
  cvData?: CvData;
}

const Template19: React.FC<Template19Props> = ({ cvData }) => {
  const mockData: CvData = {
    name: "ANNA KATRINA MARCHESI",
    title: "Accountant",
    contact: {
      phone: "+123-456-7890",
      email: "hello@reallygreatsite.com",
      address: "123 Anywhere St., Any City",
    },
    workExperience: [
      {
        company: "Liceria & Co.",
        period: "2019 - Present",
        title: "Senior Accountant",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        company: "Liceria & Co.",
        period: "2019 - Present",
        title: "Accountant",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        company: "Liceria & Co.",
        period: "2019 - Present",
        title: "Junior Accountant",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
    ],
    education: [
      {
        school: "Fauget University",
        period: "2010-2014",
        degree: "Master of Business Administration Accounting",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      },
      {
        school: "Borcelle University",
        period: "2008-2011",
        degree: "Bachelor of Arts Accounting",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      },
    ],
    skills: {
      personal: [
        "Management Skills",
        "Time Management",
        "Negotiation",
        "Critical Thinking",
        "Communication Skills",
        "Leadership",
      ],
      professional: [
        "Financial Accounting",
        "Managerial Accounting",
        "Financial Reporting",
        "Auditing",
        "Expense Reporting",
        "Accounts Payable",
        "Account Receivable",
      ],
    },
  };

  const data = cvData || mockData;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto bg-white shadow-lg p-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-1">{data.name}</h1>
          <p className="text-gray-600 mb-4">{data.title}</p>
          <div className="flex gap-8 text-sm text-gray-600 border-t border-b border-gray-200 py-3">
            <div className="flex items-center gap-2">
              <BsTelephone className="text-gray-400" />
              <span>{data.contact.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <IoMailOutline className="text-gray-400" />
              <span>{data.contact.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <CiLocationOn className="text-gray-400" />
              <span>{data.contact.address}</span>
            </div>
          </div>
        </div>

        {/* Work Experience Section */}
        <section className="mb-8">
          <h2 className="text-gray-800 font-medium mb-4 uppercase text-center border-b border-gray-200 pb-2">
            Work Experience
          </h2>
          <div className="space-y-6">
            {data.workExperience.map((exp, index) => (
              <div key={index}>
                <div className="grid grid-cols-[120px_1fr] gap-4">
                  <div className="text-gray-500 text-sm">
                    {exp.company}
                    <br />
                    {exp.period}
                  </div>
                  <div>
                    <h3 className="text-gray-800 font-medium mb-2">{exp.title}</h3>
                    <p className="text-sm text-gray-600">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-8">
          <h2 className="text-gray-800 font-medium mb-4 uppercase text-center border-b border-gray-200 pb-2">
            Education
          </h2>
          <div className="space-y-6">
            {data.education.map((edu, index) => (
              <div key={index}>
                <div className="grid grid-cols-[120px_1fr] gap-4">
                  <div className="text-gray-500 text-sm">
                    {edu.school}
                    <br />
                    {edu.period}
                  </div>
                  <div>
                    <h3 className="text-gray-800 font-medium mb-2">{edu.degree}</h3>
                    <p className="text-sm text-gray-600">{edu.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <h2 className="text-gray-800 font-medium mb-4 uppercase text-center border-b border-gray-200 pb-2">
            Skills
          </h2>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-gray-700 mb-2">Personal</h3>
              <ul className="space-y-1">
                {data.skills.personal.map((skill, index) => (
                  <li key={index} className="text-sm text-gray-600">{skill}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-gray-700 mb-2">Professional</h3>
              <ul className="space-y-1">
                {data.skills.professional.map((skill, index) => (
                  <li key={index} className="text-sm text-gray-600">{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Template19;
