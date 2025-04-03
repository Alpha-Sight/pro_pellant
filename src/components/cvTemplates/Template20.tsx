import React from "react";

interface Contact {
  address: string;
  email: string;
  website: string;
}

interface TechnicalSkills {
  column1: string[];
  column2: string[];
  column3: string[];
}

interface Experience {
  program: string;
  period: string;
  achievements: string[];
}

interface Education {
  program: string;
  institution: string;
  period: string;
  details: string[];
}

interface AdditionalInfo {
  languages: string[];
  certifications: string[];
  awards: string[];
}

interface CvData {
  name: string;
  title: string;
  contact: Contact;
  summary: string;
  technicalSkills: TechnicalSkills;
  experience: Experience[];
  education: Education[];
  additionalInfo: AdditionalInfo;
}

interface Template20Props {
  cvData?: CvData;
}

const Template20: React.FC<Template20Props> = ({ cvData }) => {
  const mockData: CvData = {
    name: "ESTELLE DARCY",
    title: "UX DESIGNER",
    contact: {
      address: "123 Anywhere St., Any City",
      email: "hello@reallygreatsite.com",
      website: "www.reallygreatsite.com",
    },
    summary:
      "UX Designer with a focus on delivering impactful results, eager to tackle dynamic challenges and apply creativity to craft intuitive user experiences. Demonstrated proficiency in project management, user-centric problem-solving, and seamless collaboration across teams. Skilled in leveraging state-of-the-art tools and methodologies to streamline processes and elevate user satisfaction.",
    technicalSkills: {
      column1: ["Prototyping Tools", "User Research", "Information Architecture"],
      column2: ["Interaction Design", "Usability Heuristics", "User Testing Tools"],
      column3: ["Accessibility", "Responsive Design", "User Testing Tools"],
    },
    experience: [
      {
        program: "Instant Charts App, Morcelle Program",
        period: "Jan 2023 - Present",
        achievements: [
          "Led development of an advanced automation system, achieving a 15% increase in operational efficiency.",
          "Streamlined manufacturing processes, reducing production costs by 10%.",
          "Implemented preventive maintenance strategies, resulting in a 20% decrease in equipment downtime.",
        ],
      },
      {
        program: "System UX Engineer, XarrowAI Industries",
        period: "Feb 2021 - Dec 2022",
        achievements: [
          "Designed and optimized a robotic control system, realizing a 12% performance improvement.",
          "Coordinated testing and validation, ensuring compliance with industry standards.",
          "Provided technical expertise, contributing to a 15% reduction in system failures.",
        ],
      },
    ],
    education: [
      {
        program: "UX Industrial Basics and General Application",
        institution: "University of Engineering UX Cohort",
        period: "Aug 2016 - Oct 2019",
        details: [
          "Major in Automotive Technology",
          'Thesis on "Technological Advancements within the current Mechatronics Industry"',
        ],
      },
      {
        program: "Bachelor of Design in Process Engineering",
        institution: "Engineering University",
        period: "May 2014 - May 2016",
        details: ["Relevant coursework in Structural Design and Project Management."],
      },
    ],
    additionalInfo: {
      languages: ["English", "French", "Mandarin"],
      certifications: [
        "Professional Design Engineer (PDE) License",
        "Project Management Tech (PMT)",
      ],
      awards: [
        "Most Innovative Employee of the Year (2023)",
        "Overall Best Employee Division Two (2024)",
        "Onboarding Project Lead (2023)",
      ],
    },
  };

  const data = cvData || mockData;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg">
        {/* Header Section */}
        <div className="text-[#0066cc] text-center py-8 bg-[#f0f7ff]">
          <h1 className="text-3xl font-bold mb-1">{data.name}</h1>
          <p className="text-gray-600">{data.title}</p>
          <p className="text-sm text-gray-600 mt-2">
            {data.contact.address} | {data.contact.email} | {data.contact.website}
          </p>
        </div>

        <div className="p-8">
          {/* Summary Section */}
          <section className="mb-8">
            <h2 className="text-[#0066cc] font-medium mb-3 uppercase border-b border-[#0066cc] pb-1">
              Summary
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">{data.summary}</p>
          </section>

          {/* Technical Skills Section */}
          <section className="mb-8">
            <h2 className="text-[#0066cc] font-medium mb-3 uppercase border-b border-[#0066cc] pb-1">
              Technical Skills
            </h2>
            <div className="grid grid-cols-3 gap-8">
              {["column1", "column2", "column3"].map((col) => (
                <div key={col}>
                  {data.technicalSkills[col as keyof TechnicalSkills].map((skill, index) => (
                    <p key={index} className="text-sm text-gray-600 mb-1">
                      {skill}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </section>

          {/* Professional Experience Section */}
          <section className="mb-8">
            <h2 className="text-[#0066cc] font-medium mb-3 uppercase border-b border-[#0066cc] pb-1">
              Professional Experience
            </h2>
            {data.experience.map((exp, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-gray-800 font-medium">{exp.program}</h3>
                  <span className="text-gray-500 text-sm">{exp.period}</span>
                </div>
                <ul className="list-disc pl-5 space-y-1">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-sm text-gray-600">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Education Section */}
          <section className="mb-8">
            <h2 className="text-[#0066cc] font-medium mb-3 uppercase border-b border-[#0066cc] pb-1">
              Education
            </h2>
            {data.education.map((edu, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-gray-800">{edu.program}</h3>
                    <p className="text-gray-600 text-sm">{edu.institution}</p>
                  </div>
                  <span className="text-gray-500 text-sm">{edu.period}</span>
                </div>
                <ul className="list-disc pl-5">
                  {edu.details.map((detail, idx) => (
                    <li key={idx} className="text-sm text-gray-600">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Additional Information Section */}
          <section>
            <h2 className="text-[#0066cc] font-medium mb-3 uppercase border-b border-[#0066cc] pb-1">
              Additional Information
            </h2>
            <div className="text-sm text-gray-600">
              <p>
                <strong>Languages:</strong> {data.additionalInfo.languages.join(", ")}
              </p>
              <p>
                <strong>Certifications:</strong>{" "}
                {data.additionalInfo.certifications.join(", ")}
              </p>
              <p>
                <strong>Awards/Activities:</strong>{" "}
                {data.additionalInfo.awards.join(", ")}
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Template20;
