import React from "react";
import { IoMailOutline, IoGlobeOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { HiArrowSmRight } from "react-icons/hi";

// Type definitions for CV data
interface Contact {
  phone: string;
  email: string;
  address: string;
  website: string;
}

interface Education {
  school: string;
  degree?: string;
  address?: string;
  period: string;
}

interface Certification {
  organization: string;
  title: string;
  year: string;
}

interface WorkExperience {
  title: string;
  company: string;
  period: string;
  description: string;
}

interface Course {
  organization: string;
  title: string;
  year: string;
}

interface Award {
  title: string;
  organization: string;
  date: string;
}

interface CvData {
  firstName: string;
  lastName: string;
  title: string;
  contact: Contact;
  education: Education[];
  certification: Certification[];
  workExperience: WorkExperience[];
  skills: string[];
  courses: Course[];
  awards: Award[];
}

interface Template16Props {
  cvData?: CvData; // Optional prop for custom CV data
}

const Template16: React.FC<Template16Props> = ({ cvData }) => {
  // Mock data as fallback
  const mockData: CvData = {
    firstName: "ITSUKI",
    lastName: "TAKAHASHI",
    title: "SOFTWARE ENGINEER",
    contact: {
      phone: "+123-456-7890",
      email: "hello@reallygreatsite.com",
      address: "123 Anywhere St., Any City",
      website: "www.reallygreatsite.com",
    },
    education: [
      {
        school: "Fauget University",
        degree: "Computer Science",
        period: "2010-2014",
      },
      {
        school: "Borcelle High School",
        address: "123 Anywhere St., Any City",
        period: "2008-2011",
      },
    ],
    certification: [
      {
        organization: "Liceria & Co.",
        title: "Web Design & Development",
        year: "2019",
      },
      {
        organization: "Fauget Company",
        title: "Web Design & Development",
        year: "2021",
      },
    ],
    workExperience: [
      {
        title: "Web Developer",
        company: "Liceria & Co.",
        period: "2019 - Present",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent erat lectus, condimentum quis hendrerit at, convallis ac quam. Nam faucibus quis dui vel mollis. Cras tincidunt ligula nec nisi vulputate ornare.",
      },
      {
        title: "Web Designer",
        company: "Borcelle Company",
        period: "2016-2018",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent erat lectus, condimentum quis hendrerit at, convallis ac quam. Nam faucibus quis dui vel mollis. Cras tincidunt ligula nec nisi vulputate ornare.",
      },
      {
        title: "Web Development Intern",
        company: "Fauget",
        period: "2014-2015",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent erat lectus, condimentum quis hendrerit at, convallis ac quam. Nam faucibus quis dui vel mollis. Cras tincidunt ligula nec nisi vulputate ornare.",
      },
    ],
    skills: [
      "Databases",
      "Networking basics",
      "Operating Systems",
      "Unit testing",
      "Encryption",
      "Cross-platform software",
      "Integration testing",
      "System testing",
      "Critical Thinking",
      "Time management",
    ],
    courses: [
      {
        organization: "Borcelle Tech",
        title: "Web Design & Development",
        year: "2019",
      },
      {
        organization: "Fauget Corp",
        title: "Web Design & Development",
        year: "2020",
      },
    ],
    awards: [
      {
        title: "Best Web Designer and Developer",
        organization: "Licoria & Co.",
        date: "08/2021",
      },
    ],
  };

  const data = cvData || mockData;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg p-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-light text-gray-800 mb-1">
            {data.firstName} <br /> {data.lastName}
          </h1>
          <p className="text-gray-500 text-sm uppercase tracking-wider">{data.title}</p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-12">
          {/* Left Column */}
          <div>
            {/* Education Section */}
            <section className="mb-8">
              <h2 className="text-gray-800 font-medium mb-4 uppercase">Education</h2>
              {data.education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-gray-800">{edu.school}</h3>
                  {edu.degree && <p className="text-gray-600 text-sm">{edu.degree}</p>}
                  <p className="text-gray-500 text-sm">{edu.period}</p>
                  {edu.address && <p className="text-gray-500 text-sm">{edu.address}</p>}
                </div>
              ))}
            </section>

            {/* Certification Section */}
            <section className="mb-8">
              <h2 className="text-gray-800 font-medium mb-4 uppercase">Certification</h2>
              {data.certification.map((cert, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-gray-800">{cert.organization}</h3>
                  <p className="text-gray-600 text-sm">{cert.title}</p>
                  <p className="text-gray-500 text-sm">{cert.year}</p>
                </div>
              ))}
            </section>

            {/* Work Experience Section */}
            <section>
              <h2 className="text-gray-800 font-medium mb-4 uppercase">Work Experience</h2>
              {data.workExperience.map((exp, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-gray-800">{exp.title}</h3>
                  <p className="text-gray-600 text-sm">
                    {exp.company} / {exp.period}
                  </p>
                  <p className="text-gray-600 text-sm mt-2">{exp.description}</p>
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
                  <BsTelephone className="text-gray-400" />
                  <span className="text-sm">{data.contact.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <IoMailOutline className="text-gray-400" />
                  <span className="text-sm">{data.contact.email}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <CiLocationOn className="text-gray-400" />
                  <span className="text-sm">{data.contact.address}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <IoGlobeOutline className="text-gray-400" />
                  <span className="text-sm">{data.contact.website}</span>
                </div>
              </div>
            </section>

            {/* Skills Section */}
            <section className="mb-8">
              <h2 className="text-gray-800 font-medium mb-4 uppercase">Skills</h2>
              <div className="space-y-2">
                {data.skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-600">
                    <HiArrowSmRight className="text-gray-400" />
                    <span className="text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Course Section */}
            <section className="mb-8">
              <h2 className="text-gray-800 font-medium mb-4 uppercase">Course</h2>
              {data.courses.map((course, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-gray-800">{course.organization}</h3>
                  <p className="text-gray-600 text-sm">{course.title}</p>
                  <p className="text-gray-500 text-sm">{course.year}</p>
                </div>
              ))}
            </section>

            {/* Awards Section */}
            <section>
              <h2 className="text-gray-800 font-medium mb-4 uppercase">Awards</h2>
              {data.awards.map((award, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-gray-800">{award.organization}</h3>
                  <p className="text-gray-600 text-sm">{award.title}</p>
                  <p className="text-gray-500 text-sm">{award.date}</p>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template16;
