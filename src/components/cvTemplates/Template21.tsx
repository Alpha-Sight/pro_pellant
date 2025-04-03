import React from "react";
import {CVData} from "@/utils/global";

const Template21 = ({cvData}: {cvData: CVData}) => {

  return (
    <div className="bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg p-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-1">
            {cvData?.details.firstName} {cvData?.details.lastName}
          </h1>
          <p className="text-gray-600 mb-2">
            {cvData?.details.jobTitle}
          </p>
          <p className="text-sm text-gray-600 flex items-center gap-2">
            {cvData?.details.address} <span className="text-lg">|</span>
            {cvData?.details.email}
            {/*{data.contact.website}*/}
          </p>
        </div>

        {/* Summary Section */}
        <section className="mb-8">
          <h2 className="text-gray-800 font-medium mb-3 uppercase border-b border-gray-300 pb-1">
            Summary
          </h2>
          <p className="text-sm text-gray-600">
            {/*{data.summary}*/}
          </p>
        </section>

        {/* Professional Experience Section */}
        <section className="mb-8">
          <h2 className="text-gray-800 font-medium mb-3 uppercase border-b border-gray-300 pb-1">
            Experience
          </h2>
          {cvData?.experiences.map((exp, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-gray-800 font-semibold">
                    {exp.jobTitle}, {exp.company}
                  </h3>
                  <span className="text-gray-500 text-sm">
                  {exp.period.start} - {exp.period.end}
                </span>
                  <span className="text-gray-500 text-sm">
                  {exp.location}
                </span>
                </div>

                <p className="mt-5 font-semilbold">Duties</p>
                <ul className="mt-3 text-sm list-disc pl-5">
                  { exp.duties.map((duty, idx) => (
                      <li key={idx} className="text-gray-600">
                        {duty}
                      </li>
                  ))}
                </ul>
              </div>
          ))}
        </section>

        {/* Projects Section */}
        <section className="mb-8">
          <h2 className="text-gray-800 font-medium mb-3 uppercase border-b border-gray-300 pb-1">
            Projects
          </h2>
          {/*{data.projects.map((project, index) => (*/}
            <div className="mb-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-gray-800">
                  {/*{project.title}*/}
                </h3>
                <span className="text-gray-500 text-sm">
                  {/*{project.period}*/}
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-2">
                {/*{project.organization}*/}
              </p>
              <ul className="list-disc pl-5 space-y-1">
                {/*{project.details.map((detail, idx) => (*/}
                  <li className="text-sm text-gray-600">
                    {/*{detail}*/}
                  </li>
                {/*))}*/}
              </ul>
            </div>
          {/*))}*/}
        </section>

        {/* Skills Section */}
        <section className="mb-8">
          <h2 className="text-gray-800 font-medium mb-3 uppercase border-b border-gray-300 pb-1">
            Skills
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {cvData?.skills.map((skill, index) => (
              <p className="text-sm text-gray-600">
                {skill}
              </p>
    ))}
            {/*{data.skills.row2.map((skill, index) => (*/}
            {/*  <p className="text-sm text-gray-600">*/}
            {/*    /!*{skill}*!/*/}
            {/*  </p>*/}
            {/*))}*/}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-8">
          <h2 className="text-gray-800 font-medium mb-3 uppercase border-b border-gray-300 pb-1">
            Education
          </h2>
          {cvData?.educations.map((edu, index) => (
            <div className="mb-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-gray-800">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {edu.school}
                  </p>
                </div>
                <span className="text-gray-500 text-sm">
                  {edu.period.start} - {edu.period.end}
                </span>
                <span className="text-gray-500 text-sm">
                  {edu.location}
                </span>
              </div>
            </div>
          ))}
        </section>

        {/* Additional Information Section */}
        <section>
          <h2 className="text-gray-800 font-medium mb-3 uppercase border-b border-gray-300 pb-1">
            Additional Information
          </h2>
          <div className="text-sm text-gray-600 space-y-1">
            <p>
              <strong>Languages:</strong>
            </p>
            <p>
              <strong>Certifications:</strong>
            </p>
            <p>
              <strong>Awards/Activities:</strong>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Template21;
