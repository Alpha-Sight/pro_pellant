import React from "react";
import { IoMailOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";

// Type definitions for CV data
interface Contact {
  address: string;
  phone: string;
  email: string;
  emailExtra?: string;
}

interface WorkHistory {
  title: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
}

interface Education {
  degree: string;
  year: string;
  institution: string;
  location: string;
}

interface CvData {
  name: string;
  contact: Contact;
  workHistory: WorkHistory[];
  skills: string[];
  education: Education[];
}

interface Template13Props {
  cvData?: CvData; // Optional prop for custom CV data
}

const Template13: React.FC<Template13Props> = ({ cvData }) => {
  // Mock data as fallback
  const mockData: CvData = {
    name: "JIM MYDDLETON",
    contact: {
      address: "53 Church Way, Bradford, BD19JR",
      phone: "079 1234 5678",
      email: "jim.myddleton@example.com",
      emailExtra: "e@example.com",
    },
    workHistory: [
      {
        title: "Office Manager",
        company: "Halpert & Co Paper Company",
        location: "Leeds, West Yorkshire",
        period: "03/2019 - Current",
        achievements: [
          "Managed 20-employee office, supervising workers, enhancing productivity and driving efficiency.",
          "Oversaw office budget to responsibly allocate equipment and resources.",
          "Improved overall office efficiency by establishing smooth workflow processes, monitoring daily productivity and implementing modifications to eliminate operational bottlenecks.",
        ],
      },
      {
        title: "Internal Communications Manager",
        company: "A&J Legal",
        location: "Bradford, West Yorkshire",
        period: "01/2013 - 03/2019",
        achievements: [
          "Applied brand awareness and appropriate tone of voice across all communications to strengthen company image.",
          "Maximised communication opportunities through intensive forward-planning and events research.",
          "Devised and executed aligned communication strategy across six platforms.",
        ],
      },
      {
        title: "Office Assistant",
        company: "Happy Homes Estate Agents",
        location: "Bradford, West Yorkshire",
        period: "07/2007 - 12/2012",
        achievements: [
          "Managed day-to-day admin, including file organisation, spreadsheet development, and report writing.",
          "Created weekly and monthly reports and presentations, enabling improved operational analysis.",
          "Maintained office files for reliable reference, including electronic and hard copies.",
        ],
      },
    ],
    skills: [
      "Mother tongue - English",
      "Interpersonal - Strong leadership for staff teams of 10+",
      "Organisation - Multi-tasking ability and deadline driven",
      "Language skills - Spanish C1",
      "Job-related skills - Business administration and documentation control",
      "Digital skills - Sage and Microsoft Office",
    ],
    education: [
      {
        degree: "Bachelor of Business Administration",
        year: "2007",
        institution: "University of Leeds",
        location: "Leeds",
      },
    ],
  };

  const data = cvData || mockData;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg p-8">
        {/* Header Section */}
        <div className="border-b border-[#1e4976] pb-4 mb-6">
          <h1 className="text-[#1e4976] text-3xl font-serif mb-0">{data.name}</h1>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
          {/* Left Column */}
          <div>
            {/* Work History Section */}
            <section className="mb-8">
              <h2 className="text-[#1e4976] font-serif text-lg mb-4 uppercase border-b border-[#1e4976] pb-1">
                Work History
              </h2>
              {data.workHistory.map((job, index) => (
                <div key={index} className="mb-6">
                  <div className="mb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-gray-800">{job.title}</h3>
                        <p className="text-gray-600 text-sm">
                          {job.company}, {job.location}
                        </p>
                      </div>
                      <span className="text-gray-500 text-sm whitespace-nowrap">
                        {job.period}
                      </span>
                    </div>
                  </div>
                  <ul className="list-disc pl-4 space-y-1">
                    {job.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-sm text-gray-600">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          </div>

          {/* Right Column */}
          <div>
            {/* Contact Section */}
            <section className="mb-8">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-600">
                  <CiLocationOn className="text-[#1e4976]" />
                  <span className="text-sm">{data.contact.address}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <BsTelephone className="text-[#1e4976]" />
                  <span className="text-sm">{data.contact.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <IoMailOutline className="text-[#1e4976]" />
                  <span className="text-sm">
                    {data.contact.email}
                    {data.contact.emailExtra && <br />}
                    {data.contact.emailExtra}
                  </span>
                </div>
              </div>
            </section>

            {/* Skills Section */}
            <section className="mb-8">
              <h2 className="text-[#1e4976] font-serif text-lg mb-4 uppercase border-b border-[#1e4976] pb-1">
                Skills
              </h2>
              <ul className="space-y-2">
                {data.skills.map((skill, index) => (
                  <li key={index} className="text-sm text-gray-600">
                    • {skill}
                  </li>
                ))}
              </ul>
            </section>

            {/* Education Section */}
            <section>
              <h2 className="text-[#1e4976] font-serif text-lg mb-4 uppercase border-b border-[#1e4976] pb-1">
                Education
              </h2>
              {data.education.map((edu, index) => (
                <div key={index}>
                  <h3 className="font-medium text-gray-800">{edu.degree}</h3>
                  <p className="text-gray-600 text-sm">{edu.year}</p>
                  <p className="text-gray-600 text-sm">
                    {edu.institution} - {edu.location}
                  </p>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template13;
