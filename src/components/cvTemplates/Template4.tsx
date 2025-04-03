import React from "react";
import { GiRotaryPhone } from "react-icons/gi";
import { IoMailSharp } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { IoGlobeOutline } from "react-icons/io5";

// Define type for contact details
interface Contact {
  phone: string;
  email: string;
  address: string;
  website: string;
}

// Define type for work experience
interface WorkExperience {
  company: string;
  title: string;
  period: string;
  responsibilities: string[];
}

// Define type for education
interface Education {
  degree: string;
  school: string;
  period: string;
}

// Define type for references
interface Reference {
  name: string;
  title: string;
  phone: string;
  email: string;
}

// Define type for cvData
interface CvData {
  firstName: string;
  lastName: string;
  title: string;
  contact: Contact;
  profile: string;
  skills: string[];
  languages: string[];
  workExperience: WorkExperience[];
  education: Education[];
  references: Reference[];
}

// Define props type for Template4
interface Template4Props {
  cvData?: CvData;
}

const Template4: React.FC<Template4Props> = ({ cvData }) => {

   // Mock data for demonstration
  const mockData: CvData = cvData || {
    firstName: "AHMDD",
    lastName: "SAAH",
    title: "MARKETING MANAGER",
    contact: {
      phone: "+124-4526-7894",
      email: "hello@ahmdd.saah.com",
      address: "123 Maple Ave, Any City",
      website: "www.ahmdd.saah"
    },
    profile: "Neque, euismod est eiam. Aham, ipsum, finibus lecto aldo. Intum lamina purus nque Aham sunt finibus. Commodo Aham adipur ivums felim ipsum catius, donec sunt lecto. Aham, Mauris sollicitu Aham in aliuisds, extra vita Aham elit eudio leo, adipisci sector elit.",
    skills: [
      "Strategic Planning",
      "Problem Solving",
      "Crisis Management",
      "Creative Thinking",
      "Data Analysis",
      "Brand Development",
      "Negotiation",
      "Customer Orientation",
      "Adaptability to Change"
    ],
    languages: ["English (Fluent)", "Arabic (Fluent)"],
    workExperience: [
      {
        company: "Borcelle Studio",
        title: "Marketing Manager & Specialist",
        period: "2020 - PRESENT",
        responsibilities: [
          "Formulate and implement detailed marketing strategies and initiatives",
          "Guide, inspire, and oversee a dynamic marketing team, promoting a collaborative and performance-oriented culture",
          "Ensure uniformity of the brand across all marketing platforms and materials"
        ]
      },
      {
        company: "Peugeot Studio",
        title: "Marketing Manager & Specialist",
        period: "2015 - 2020",
        responsibilities: [
          "Neque, euismod est eiam. Aham, ipsum, finibus lecto aldo. Intum lamina purus nque Aham sunt finibus. Commodo Aham adipur ivums felim ipsum catius, donec sunt lecto. Aham, Mauris sollicitu Aham in aliuisds, extra vita Aham elit eudio leo, adipisci sector elit."
        ]
      },
      {
        company: "Studio Showbee",
        title: "Marketing Manager & Specialist",
        period: "2014 - 2015",
        responsibilities: [
          "Formulate and implement detailed marketing strategies and initiatives to support the company's mission and objectives. Guide, inspire, and oversee a dynamic marketing team, promoting a collaborative and performance-oriented culture. Ensure uniformity of the brand across all marketing platforms and materials."
        ]
      }
    ],
    education: [
      {
        degree: "Master of Business Management",
        school: "School of Business | Wireless University",
        period: "2020 - 2021"
      },
      {
        degree: "Master of Business Management",
        school: "School of Business | Wireless University",
        period: "2020 - 2021"
      }
    ],
    references: [
      {
        name: "Estelle Darcy",
        title: "Wordiere Inc. / CEO",
        phone: "+124-4526-7894",
        email: "hello@wordiere.com"
      }
    ]
  };


  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg p-8">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-[#2D3748] mb-1">
            {mockData.firstName} {mockData.lastName}
          </h1>
          <p className="text-gray-600">{mockData.title}</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Contact Section */}
            <section>
              <h2 className="text-[#2D3748] font-semibold mb-3 uppercase border-b border-gray-300 pb-1">
                Contact
              </h2>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-600">
                  <GiRotaryPhone className="text-lg" />
                  <span className="text-sm">{mockData.contact.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <IoMailSharp className="text-lg" />
                  <span className="text-sm">{mockData.contact.email}</span>
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
            </section>

            {/* Skills Section */}
            <section>
              <h2 className="text-[#2D3748] font-semibold mb-3 uppercase border-b border-gray-300 pb-1">
                Skills
              </h2>
              <ul className="space-y-1">
                {mockData.skills.map((skill, index) => (
                  <li key={index} className="text-sm text-gray-600">• {skill}</li>
                ))}
              </ul>
            </section>

            {/* Languages Section */}
            <section>
              <h2 className="text-[#2D3748] font-semibold mb-3 uppercase border-b border-gray-300 pb-1">
                Languages
              </h2>
              <ul className="space-y-1">
                {mockData.languages.map((language, index) => (
                  <li key={index} className="text-sm text-gray-600">• {language}</li>
                ))}
              </ul>
            </section>

            {/* References Section */}
            <section>
              <h2 className="text-[#2D3748] font-semibold mb-3 uppercase border-b border-gray-300 pb-1">
                References
              </h2>
              {mockData.references.map((ref, index) => (
                <div key={index} className="text-sm">
                  <p className="font-medium text-gray-700">{ref.name}</p>
                  <p className="text-gray-600">{ref.title}</p>
                  <p className="text-gray-600">Phone: {ref.phone}</p>
                  <p className="text-gray-600">Email: {ref.email}</p>
                </div>
              ))}
            </section>
          </div>

          {/* Right Column with Timeline */}
          <div className="space-y-6 relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-300"></div>

            {/* Profile Section */}
            <section className="relative pl-6">
              <div className="absolute left-[-5px] top-1 w-[10px] h-[10px] bg-gray-500 rounded-full"></div>
              <h2 className="text-[#2D3748] font-semibold mb-3 uppercase">Profile</h2>
              <p className="text-sm text-gray-600 leading-relaxed">{mockData.profile}</p>
            </section>

            {/* Work Experience Section */}
            <section className="relative pl-6">
              <div className="absolute left-[-5px] top-1 w-[10px] h-[10px] bg-gray-500 rounded-full"></div>
              <h2 className="text-[#2D3748] font-semibold mb-4 uppercase">Work Experience</h2>
              <div className="space-y-6">
                {mockData.workExperience.map((exp, index) => (
                  <div key={index} className="relative">
                    <h3 className="font-medium text-gray-700">{exp.company}</h3>
                    <p className="text-sm text-gray-600">{exp.title}</p>
                    <p className="text-sm text-gray-500 mb-2">{exp.period}</p>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="text-sm text-gray-600">{resp}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Education Section */}
            <section className="relative pl-6">
              <div className="absolute left-[-5px] top-1 w-[10px] h-[10px] bg-gray-500 rounded-full"></div>
              <h2 className="text-[#2D3748] font-semibold mb-4 uppercase">Education</h2>
              {mockData.education.map((edu, index) => (
                <div key={index}>
                  <h3 className="font-medium text-gray-700">{edu.degree}</h3>
                  <p className="text-sm text-gray-600">{edu.school}</p>
                  <p className="text-sm text-gray-500">{edu.period}</p>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template4;
