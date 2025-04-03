import React from "react";
import { IoMailOutline, IoGlobeOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";

// Type definitions for CV data
interface Contact {
  phone: string;
  email: string;
  address: string;
  website: string;
}

interface SkillSet {
  technical: string[];
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
}

interface Certification {
  name: string;
  organization: string;
  year: string;
}

interface CvData {
  name: string;
  title: string;
  contact: Contact;
  summary: string;
  skills: SkillSet;
  workExperience: WorkExperience[];
  education: Education[];
  certifications: Certification[];
}

interface Template14Props {
  cvData?: CvData; // Optional prop for custom CV data
}

const Template14: React.FC<Template14Props> = ({ cvData }) => {
  // Mock data as fallback
  const mockData: CvData = {
    name: "RICHARD SANCHEZ",
    title: "SOFTWARE DEVELOPER",
    contact: {
      phone: "+123-456-7890",
      email: "hello@reallygreatsite.com",
      address: "123 Anywhere St., Any City",
      website: "www.reallygreatsite.com",
    },
    summary:
      "Highly skilled and detail-oriented software developer with 5 years of experience designing, developing, and deploying enterprise-level applications. Proficient in multiple programming languages, software development methodologies, and database management systems. Strong problem-solving abilities and excellent communication skills.",
    skills: {
      technical: [
        "Strong problem solving",
        "Analytical skills",
        "Interpersonal Skills",
        "Communication",
        "Collaboration",
        "Leadership",
        "Critical thinking",
        "Attention to detail",
      ],
    },
    workExperience: [
      {
        company: "Fradel and Spies Co",
        title: "Software Developer",
        period: "2020 - Present",
        achievements: [
          "Collaborate with cross-functional teams to identify and innovate features and requirements",
          "Conduct code reviews and provide feedback to improve code quality",
          "Develop and execute web tests and perform system testing to ensure software quality",
          "Troubleshoot and resolve software defects and issues",
        ],
      },
      {
        company: "Giggling Platypus Co.",
        title: "Software Engineer",
        period: "2018 - 2020",
        achievements: [
          "Developed and maintained software applications",
          "Conducted code reviews and provided feedback to improve code quality",
          "Developed and executed tests and performed system testing to ensure software quality",
          "Troubleshoot and resolved software defects and issues",
        ],
      },
      {
        company: "Keithston and Partners",
        title: "Software Developer",
        period: "Jan 2017 - Jul 2018",
        achievements: [
          "Conduct code reviews and provide feedback to improve code quality",
          "Develop and execute web tests and perform system testing to ensure software quality",
          "Contribute to the continuous improvement of software development processes and best practices",
        ],
      },
    ],
    education: [
      {
        degree: "Master in Data Science & Big Data",
        school: "Sigma University",
        period: "2020-2021",
      },
      {
        degree: "Bachelor of Science in Computer Science",
        school: "Imperial Company",
        period: "2015-2019",
      },
    ],
    certifications: [
      {
        name: "Certified Scrum Developer",
        organization: "Listen & Co",
        year: "2020-2021",
      },
      {
        name: "Certified Kubernetes Administrator",
        organization: "Hanover and Take",
        year: "2019",
      },
    ],
  };

  const data = cvData || mockData;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg">
        {/* Header Section */}
        <div className="bg-gray-100 p-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-1">{data.name}</h1>
              <p className="text-gray-600 text-sm uppercase tracking-wider">{data.title}</p>
            </div>
            <div className="flex flex-col gap-1 text-sm text-gray-600">
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

        <div className="p-8">
          {/* Summary Section */}
          <section className="mb-8">
            <h2 className="text-gray-800 font-medium mb-3 uppercase text-sm tracking-wider">Summary</h2>
            <div className="pl-4 border-l-2 border-gray-200">
              <p className="text-sm text-gray-600 leading-relaxed">{data.summary}</p>
            </div>
          </section>

          {/* Skills Section */}
          <section className="mb-8">
            <h2 className="text-gray-800 font-medium mb-3 uppercase text-sm tracking-wider">Skills</h2>
            <div className="pl-4 border-l-2 border-gray-200">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {data.skills.technical.map((skill, index) => (
                  <p key={index} className="text-sm text-gray-600">{skill}</p>
                ))}
              </div>
            </div>
          </section>

          {/* Work Experience Section */}
          <section className="mb-8">
            <h2 className="text-gray-800 font-medium mb-3 uppercase text-sm tracking-wider">Work Experience</h2>
            <div className="pl-4 border-l-2 border-gray-200 space-y-6">
              {data.workExperience.map((exp, index) => (
                <div key={index}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-gray-800 font-medium">{exp.company}</h3>
                      <p className="text-gray-600 text-sm">{exp.title}</p>
                    </div>
                    <span className="text-gray-500 text-sm">{exp.period}</span>
                  </div>
                  <ul className="list-disc pl-4 space-y-1">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-sm text-gray-600">{achievement}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section className="mb-8">
            <h2 className="text-gray-800 font-medium mb-3 uppercase text-sm tracking-wider">Education</h2>
            <div className="pl-4 border-l-2 border-gray-200 grid grid-cols-2 gap-4">
              {data.education.map((edu, index) => (
                <div key={index}>
                  <h3 className="text-gray-800 font-medium text-sm">{edu.degree}</h3>
                  <p className="text-gray-600 text-sm">{edu.school}</p>
                  <p className="text-gray-500 text-sm">{edu.period}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications Section */}
          <section>
            <h2 className="text-gray-800 font-medium mb-3 uppercase text-sm tracking-wider">Certifications</h2>
            <div className="pl-4 border-l-2 border-gray-200 grid grid-cols-2 gap-4">
              {data.certifications.map((cert, index) => (
                <div key={index}>
                  <h3 className="text-gray-800 font-medium text-sm">{cert.name}</h3>
                  <p className="text-gray-600 text-sm">{cert.organization}</p>
                  <p className="text-gray-500 text-sm">{cert.year}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Template14;
