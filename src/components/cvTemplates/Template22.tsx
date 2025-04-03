import React from "react";
import { BsTelephone } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { IoGlobeOutline } from "react-icons/io5";

interface Contact {
  phone: string;
  email: string;
  address: string;
  website: string;
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
  firstName: string;
  lastName: string;
  title: string;
  contact: Contact;
  workExperience: WorkExperience[];
  education: Education[];
  skills: Skills;
}

interface Template22Props {
  cvData?: CvData;
}

const Template22: React.FC<Template22Props> = ({ cvData }) => {
  const mockData: CvData = {
    firstName: "MARSELINA",
    lastName: "ZALIYANTI",
    title: "Accountant",
    contact: {
      phone: "+123-456-7890",
      email: "hello@reallygreatsite.com",
      address: "123 Anywhere St., Any City",
      website: "www.reallygreatsite.com",
    },
    workExperience: [
      {
        company: "Ingoude Company",
        period: "2019 - Present",
        title: "Senior Accountant",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        company: "Ingoude Company",
        period: "2019 - Present",
        title: "Accountant",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        company: "Ingoude Company",
        period: "2019 - Present",
        title: "Junior Accountant",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
    ],
    education: [
      {
        school: "Kembara University",
        period: "2010-2014",
        degree: "Master of Business Administration Accounting",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      },
      {
        school: "Borcelle University",
        period: "2008-2011",
        degree: "Bachelor of Arts Accounting",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
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
      <div className="max-w-4xl mx-auto bg-white shadow-lg p-8">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex justify-between">
            <div>
              <h1 className="text-3xl font-medium text-gray-800">
                {data.firstName}
                <br />
                {data.lastName}
              </h1>
              <p className="text-gray-600 mt-2">{data.title}</p>
            </div>
            <div className="space-y-1 text-sm text-gray-600">
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
              <div className="flex items-center gap-2">
                <IoGlobeOutline className="text-gray-400" />
                <span>{data.contact.website}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Work Experience Section */}
        <section className="mb-8">
          <h2 className="text-gray-800 font-medium mb-6 uppercase bg-gray-100 p-2">
            Work Experience
          </h2>
          <div className="space-y-6">
            {data.workExperience.map((exp, index) => (
              <div key={index} className="grid grid-cols-[150px_1fr] gap-6">
                <div className="text-gray-600 text-sm">
                  <p>{exp.company}</p>
                  <p>{exp.period}</p>
                </div>
                <div>
                  <h3 className="text-gray-800 font-medium mb-2">{exp.title}</h3>
                  <p className="text-sm text-gray-600">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-8">
          <h2 className="text-gray-800 font-medium mb-6 uppercase bg-gray-100 p-2">
            Education
          </h2>
          <div className="space-y-6">
            {data.education.map((edu, index) => (
              <div key={index} className="grid grid-cols-[150px_1fr] gap-6">
                <div className="text-gray-600 text-sm">
                  <p>{edu.school}</p>
                  <p>{edu.period}</p>
                </div>
                <div>
                  <h3 className="text-gray-800 font-medium mb-2">{edu.degree}</h3>
                  <p className="text-sm text-gray-600">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <h2 className="text-gray-800 font-medium mb-6 uppercase bg-gray-100 p-2">
            Skills
          </h2>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-gray-800 mb-2">Personal</h3>
              <ul className="space-y-1">
                {data.skills.personal.map((skill, index) => (
                  <li key={index} className="text-sm text-gray-600">{skill}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-gray-800 mb-2">Professional</h3>
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

export default Template22;
