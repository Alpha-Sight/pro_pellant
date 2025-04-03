import React from "react";
import { GiRotaryPhone } from "react-icons/gi";
import { IoMailSharp, IoGlobeOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";

// Type definitions for CV data
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
  location: string;
}

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

interface Reference {
  name: string;
  title: string;
  company: string;
  phone: string;
}

interface CvData {
  firstName: string;
  lastName: string;
  title: string;
  contact: Contact;
  education: Education[];
  certifications: string[];
  skills: string[];
  languages: string[];
  experience: Experience[];
  references: Reference[];
}

interface Template11Props {
  cvData?: CvData; // Optional prop for custom CV data
}

const Template11: React.FC<Template11Props> = ({ cvData }) => {
  // Mock data as fallback
  const mockData: CvData = {
    firstName: "ADELINE",
    lastName: "PALMERSTON",
    title: "GRAPHIC DESIGNER",
    contact: {
      phone: "+123-456-7890",
      email: "hello@reallygreatsite.com",
      website: "www.reallygreatsite.com",
      address: "123 Anywhere St., Any City",
    },
    education: [
      {
        degree: "Bachelor of Design",
        school: "Really Great University",
        period: "2020-2021",
        location: "123 Anywhere St., Any City",
      },
      {
        degree: "Bachelor of Design",
        school: "Really Great University",
        period: "2018-2020",
        location: "123 Anywhere St., Any City",
      },
    ],
    certifications: [
      "Certified Graphic Designer",
      "User Experience (UX) Design Certificate",
    ],
    skills: [
      "Organized",
      "Creativity",
      "Teamwork",
      "Meeting deadlines",
      "Critical thinking",
    ],
    languages: ["French", "Spanish", "English"],
    experience: [
      {
        title: "Graphic Designer",
        company: "Addonaire & Partners",
        period: "Jan 2021 - Jan 2022",
        description:
          "Spearheaded multiple high-impact design projects, fostering collaboration across departments and achieving significant client satisfaction.",
      },
      {
        title: "Graphic Designer",
        company: "Warner & Spencer",
        period: "Jan 2020 - Dec 2020",
        description:
          "Optimized graphic workflows and executed creative campaigns that boosted engagement by 30%.",
      },
      {
        title: "Graphic Designer",
        company: "Ingoode Company",
        period: "Jan 2017 - Dec 2019",
        description:
          "Delivered impactful visual solutions to complex challenges in branding and corporate identity.",
      },
    ],
    references: [
      {
        name: "Alfredo Torres",
        title: "Director",
        company: "Addonaire & Partners",
        phone: "+123-456-7890",
      },
      {
        name: "Harumi Kobayashi",
        title: "CEO",
        company: "Ingoode Company",
        phone: "+123-456-7890",
      },
    ],
  };

  const data = cvData || mockData;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg">
        {/* Header with curved navy background */}
        <div className="relative">
          <div className="bg-[#2D3748] h-32 rounded-bl-[100px]"></div>
          <div className="absolute top-8 left-8 right-8">
            <h1 className="text-3xl font-bold text-white mb-1">
              {data.firstName} {data.lastName}
            </h1>
            <p className="text-gray-300 uppercase tracking-wide text-sm">
              {data.title}
            </p>
          </div>
        </div>

        {/* Contact Bar */}
        <div className="bg-[#374151] text-white py-3 px-8 flex flex-wrap gap-6 text-sm">
          <div className="flex items-center gap-2">
            <GiRotaryPhone />
            <span>{data.contact.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <IoMailSharp />
            <span>{data.contact.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <IoGlobeOutline />
            <span>{data.contact.website}</span>
          </div>
          <div className="flex items-center gap-2">
            <CiLocationOn />
            <span>{data.contact.address}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr]">
          {/* Left Column */}
          <div className="bg-[#2D3748] text-white p-8 space-y-8">
            {/* Education Section */}
            <section>
              <h2 className="font-bold mb-4 uppercase">Education</h2>
              {data.education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <h3 className="font-medium text-sm">{edu.degree}</h3>
                  <p className="text-gray-300 text-sm">{edu.school}</p>
                  <p className="text-gray-300 text-sm">{edu.location}</p>
                  <p className="text-gray-300 text-sm">{edu.period}</p>
                </div>
              ))}
            </section>

            {/* Certifications Section */}
            <section>
              <h2 className="font-bold mb-4 uppercase">Certifications</h2>
              <ul className="space-y-1">
                {data.certifications.map((cert, index) => (
                  <li key={index} className="text-sm text-gray-300">
                    • {cert}
                  </li>
                ))}
              </ul>
            </section>

            {/* Skills Section */}
            <section>
              <h2 className="font-bold mb-4 uppercase">Skills</h2>
              <ul className="space-y-1">
                {data.skills.map((skill, index) => (
                  <li key={index} className="text-sm text-gray-300">
                    • {skill}
                  </li>
                ))}
              </ul>
            </section>

            {/* Languages Section */}
            <section>
              <h2 className="font-bold mb-4 uppercase">Languages</h2>
              <ul className="space-y-1">
                {data.languages.map((lang, index) => (
                  <li key={index} className="text-sm text-gray-300">
                    • {lang}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Right Column */}
          <div className="p-8 space-y-8">
            {/* About Me Section */}
            <section>
              <h2 className="text-[#2D3748] font-bold mb-4 uppercase">About Me</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </section>

            {/* Experience Section */}
            <section>
              <h2 className="text-[#2D3748] font-bold mb-6 uppercase">
                Experience
              </h2>
              <div className="space-y-6">
                {data.experience.map((exp, index) => (
                  <div key={index} className="mb-6">
                    <div className="mb-2">
                      <h3 className="text-[#2D3748] font-medium">{exp.title}</h3>
                      <p className="text-gray-600 text-sm">{exp.company}</p>
                      <p className="text-gray-500 text-sm">{exp.period}</p>
                    </div>
                    <p className="text-sm text-gray-600">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* References Section */}
            <section>
              <h2 className="text-[#2D3748] font-bold mb-4 uppercase">
                References
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {data.references.map((ref, index) => (
                  <div key={index}>
                    <p className="text-[#2D3748] font-medium text-sm">
                      {ref.name} | {ref.title}
                    </p>
                    <p className="text-gray-600 text-sm">{ref.company}</p>
                    <p className="text-gray-500 text-sm">{ref.phone}</p>
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

export default Template11;
