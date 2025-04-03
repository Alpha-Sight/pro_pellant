import React from "react";

interface Contact {
  phone: string;
  email: string;
  website: string;
  address: string;
}

interface Experience {
  company: string;
  title: string;
  period: string;
  description: string;
  accomplishments: string[];
}

interface CvData {
  name: string;
  contact: Contact;
  title: string;
  summary: string;
  strengths: string[];
  experience: Experience[];
}

interface Template17Props {
  cvData?: CvData; // Optional prop for custom CV data
}

const Template17: React.FC<Template17Props> = ({ cvData }) => {
  const mockData: CvData = {
    name: "HARPER RUSSO",
    contact: {
      phone: "+123-456-7890",
      email: "hello@reallygreatsite.com",
      website: "@reallygreatsite",
      address: "123 Anywhere St., Any City, ST 12345",
    },
    title: "BUSINESS OPERATIONS MANAGER",
    summary:
      "I am a proficient Business Operations Manager with a strong focus on achieving outcomes, possessing in-depth expertise in media management and assuming leadership responsibilities. I have demonstrated exceptional leadership capabilities while overseeing and directing media operations in North America and the APAC region. I have a proven track record of enhancing team performance, fostering internal loyalty, and cultivating collaborative alliances with internal and external stakeholders.",
    strengths: [
      "P&L Management",
      "Business Development",
      "Strategic Planning",
      "Financial Reporting",
      "Negotiation Skills",
      "Client Relationship Management",
      "Team Leadership",
      "Communication",
      "Operations Management",
    ],
    experience: [
      {
        company: "Ginyard International Co.",
        title: "Operations Manager",
        period: "October 2019 - Present",
        description:
          "Demonstrated exceptional leadership by overseeing nationwide operations, resulting in a phenomenal growth rate of 120% within two years. Played a pivotal role in spearheading the conception and execution of subscription video-on-demand over-the-top streaming products.",
        accomplishments: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec augue pharetra, imperdiet ex ut, lorem feugiat pretium.",
          "Nunc vel ex in velit volutpat commodo sit amet vitae elit. Nam et sagittis vitae ex volutpat ipsa.",
          "Aenean tristique mattis vitae facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Vivamus aliquam leo molestie velit placerat, eget tristique mauris egestas. Fusce luctus nulla eget lorem imperdiet pretium.",
          "Proin et nisl tellus, posuere lectus et, leo. Praesent vitae massa id odio vulputate posuere is.",
        ],
      },
      {
        company: "Giggling Platypus Co.",
        title: "Business Development Manager",
        period: "August 2017 - September 2019",
        description:
          "Drove the organisation to remarkable achievements, realising an exceptional growth rate of 180% over two years. Proactively identified solutions to enhance the sales team's capabilities.",
        accomplishments: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam justo et libero sodales.",
          "Vivamus aliquam leo molestie velit placerat, eget tristique mauris egestas. Vivamus euismod leo molestie velit pharetra.",
          "Ut euismod neque in tellus bibendum, et tristique quam bibendum. Sed eu orci at malesuada.",
          "Suspendisse ornare purus ut viverra semper. Vestibulum ante ipsum primis in faucibus orci luctus.",
        ],
      },
    ],
  };

  const data = cvData || mockData;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg p-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">{data.name}</h1>
          <div className="text-sm text-gray-600 space-y-1">
            <div className="flex justify-center gap-4">
              <span>{data.contact.phone}</span>
              <span>•</span>
              <span>{data.contact.email}</span>
              <span>•</span>
              <span>{data.contact.website}</span>
            </div>
            <div>{data.contact.address}</div>
          </div>
        </div>

        <hr className="border-gray-300 my-6" />

        {/* Title and Summary */}
        <div className="mb-8">
          <h2 className="text-gray-800 font-bold mb-4 uppercase">{data.title}</h2>
          <p className="text-sm text-gray-600 leading-relaxed">{data.summary}</p>
        </div>

        {/* Strengths and Expertise */}
        <section className="mb-8">
          <h2 className="text-gray-800 font-bold mb-4 uppercase">Strengths and Expertise</h2>
          <div className="grid grid-cols-3 gap-4">
            {data.strengths.map((strength, index) => (
              <p key={index} className="text-sm text-gray-600">
                {strength}
              </p>
            ))}
          </div>
        </section>

        {/* Professional Experience */}
        <section>
          <h2 className="text-gray-800 font-bold mb-6 uppercase">Professional Experience</h2>
          {data.experience.map((exp, index) => (
            <div key={index} className="mb-8">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-gray-800 font-bold">{exp.company}</h3>
                  <p className="text-gray-700">{exp.title}</p>
                </div>
                <span className="text-gray-600">{exp.period}</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">{exp.description}</p>
              <div>
                <p className="text-gray-700 mb-2">Accomplishments:</p>
                <ul className="list-disc pl-5 space-y-2">
                  {exp.accomplishments.map((accomplishment, idx) => (
                    <li key={idx} className="text-sm text-gray-600">
                      {accomplishment}
                    </li>
                  ))}
                </ul>
              </div>
              {index !== data.experience.length - 1 && <hr className="border-gray-200 my-6" />}
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Template17;
