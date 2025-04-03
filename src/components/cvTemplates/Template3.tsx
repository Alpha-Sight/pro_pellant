import React from "react";
import { IoMailSharp } from "react-icons/io5";
import { GiRotaryPhone } from "react-icons/gi";
import { CiLocationOn } from "react-icons/ci";
import { IoGlobeOutline } from "react-icons/io5";

// Define types for CV data structure
interface Contact {
  email: string;
  phone: string;
  address: string;
  website: string;
}

interface Education {
  degree: string;
  school: string;
  years: string;
}

interface Experience {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
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
  aboutMe: string;
  education: Education[];
  skills: string[];
  languages: string[];
  experience: Experience[];
  references: Reference[];
}

interface Template3Props {
  cvData?: CvData;
}

const Template3: React.FC<Template3Props> = ({ cvData }) => {
  const mockData: CvData = cvData || {
    firstName: "DONNA",
    lastName: "STROUPE",
    title: "Sales Representative",
    contact: {
      email: "hello@reallygreatsite.com",
      phone: "+123-456-7890",
      address: "123 Anywhere St., Any City",
      website: "mygreatsite.com"
    },
    aboutMe: "I am a Sales Representative is a professional who initiates and manages relationships with customers. They serve as their point of contact and lead them from initial outreach through the making of the final purchase by them or someone in their household.",
    education: [
      {
        degree: "BA Sales and Commerce",
        school: "Wireless University",
        years: "2011 - 2015"
      },
      {
        degree: "BA Sales and Commerce",
        school: "Wireless University",
        years: "2015 - 2018"
      }
    ],
    skills: [
      "Fast-moving Consumer Goods",
      "Packaged Consumer Goods Sales",
      "Corporate sales account management",
      "Experience in retail"
    ],
    languages: ["English", "French"],
    experience: [
      {
        title: "Consumer Goods Seller",
        company: "Tremendous Industries",
        period: "Aug 2018 - present",
        responsibilities: [
          "Offer consumer packages to corporate end clients",
          "Meet with clients every quarter to update or renew services",
          "Train junior sales agents"
        ]
      },
      {
        title: "TMCO Sales Agent",
        company: "Tremendous Industries",
        period: "Jul 2015 - Aug 2018",
        responsibilities: [
          "Visited corporate client offices to offer latest products",
          "Built relationships with clients to maintain sales goals and create new opportunities"
        ]
      },
      {
        title: "Sales Agent",
        company: "Tremendous Industries",
        period: "Aug 2014 - Jul 2015",
        responsibilities: [
          "Visited corporate client offices to offer latest products"
        ]
      }
    ],
    references: [
      {
        name: "Estelle Darcy",
        title: "Wordiere Inc. / CEO",
        phone: "123-456-7890",
        email: "estelle@wordiere.com"
      },
      {
        name: "Harper Russo",
        title: "Wordiere Inc. / CEO",
        phone: "123-456-7890",
        email: "harper@wordiere.com"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg">
        {/* Header with curved background */}
        <div className="relative">
          <div className="bg-[#E5E9ED] h-32 rounded-tr-[100px]">
            <div className="px-8 pt-8">
              <h1 className="text-3xl text-[#464A4E]">
                {mockData.firstName} {mockData.lastName}
              </h1>
              <p className="text-gray-600 mt-1">{mockData.title}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-600">
                <IoMailSharp className="text-lg" />
                <span className="text-sm">{mockData.contact.email}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <GiRotaryPhone className="text-lg" />
                <span className="text-sm">{mockData.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <CiLocationOn className="text-lg" />
                <span className="text-sm">{mockData.contact.address}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <IoGlobeOutline className="text-lg" />
                <span className="text-sm">{mockData.contact.website}</span>
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-[#464A4E] font-medium mb-3 uppercase">Education</h2>
              {mockData.education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <p className="font-medium text-sm">{edu.degree}</p>
                  <p className="text-sm text-gray-600">{edu.school}</p>
                  <p className="text-sm text-gray-500">{edu.years}</p>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div>
              <h2 className="text-[#464A4E] font-medium mb-3 uppercase">Skills</h2>
              <ul className="list-disc list-inside space-y-1">
                {mockData.skills.map((skill, index) => (
                  <li key={index} className="text-sm text-gray-600">{skill}</li>
                ))}
              </ul>
            </div>

            {/* Languages */}
            <div>
              <h2 className="text-[#464A4E] font-medium mb-3 uppercase">Language</h2>
              <ul className="space-y-1">
                {mockData.languages.map((language, index) => (
                  <li key={index} className="text-sm text-gray-600">{language}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:col-span-2 space-y-8">
            {/* About Me */}
            <div>
              <h2 className="text-[#464A4E] font-medium mb-3">About Me</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                {mockData.aboutMe}
              </p>
            </div>

            {/* Work Experience */}
            <div>
              <h2 className="text-[#464A4E] font-medium mb-3">Work Experience</h2>
              {mockData.experience.map((exp, index) => (
                <div key={index} className="mb-6">
                  <div className="mb-2">
                    <p className="font-medium text-gray-700">{exp.title}</p>
                    <p className="text-sm text-gray-600">{exp.company}</p>
                    <p className="text-sm text-gray-500">{exp.period}</p>
                  </div>
                  <ul className="list-disc list-inside space-y-1">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-sm text-gray-600">{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* References */}
            <div>
              <h2 className="text-[#464A4E] font-medium mb-3">References</h2>
              <div className="grid grid-cols-2 gap-4">
                {mockData.references.map((ref, index) => (
                  <div key={index}>
                    <p className="font-medium text-gray-700">{ref.name}</p>
                    <p className="text-sm text-gray-600">{ref.title}</p>
                    <p className="text-sm text-gray-500">Phone: {ref.phone}</p>
                    <p className="text-sm text-gray-500">Email: {ref.email}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template3;
