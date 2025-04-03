import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { BsTwitter } from "react-icons/bs";

// Define types for CV data
interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  twitter: string;
}

interface WorkExperience {
  title: string;
  company: string;
  period: string;
  achievements: string[];
}

interface Education {
  degree: string;
  school: string;
  period: string;
}

interface TechnicalSkills {
  systems: string[];
  cloudInfra: string[];
  servers: string[];
  networking: string[];
  containerization: string[];
}

interface CvData {
  name: string;
  title: string;
  summary: string;
  contact: ContactInfo;
  workExperience: WorkExperience[];
  education: Education[];
  technicalSkills: TechnicalSkills;
  softSkills: string[];
  certificates: string[];
}

interface Template6Props {
  cvData?: CvData; 
}

const Template6: React.FC<Template6Props> = ({ cvData }) => {
  // Mock data for demonstration
  const mockData: CvData = cvData || {
    name: "Veronica Johnson",
    title: "AWS Certified DevOps Engineer",
    summary:
      "DevOps engineer with 5+ years of experience in supporting and automating critical deployments over big infrastructure. Proficient in Jenkins and AWS CodeDeploy. Led a team of 10 at Pear Computers Inc., accelerating the release time by 25%.",
    contact: {
      email: "veronica.johnson@resume.com",
      phone: "1111 234 567",
      location: "Chicago, IL",
      github: "github.com/veronica.johnson",
      linkedin: "linkedin.com/in/veronica.johnson",
      twitter: "veronica.johnson",
    },
    workExperience: [
      {
        title: "DevOps Engineer",
        company: "Pear Computers Inc.",
        period: "07/2018 - Present",
        achievements: [
          "Developed and maintained automated security systems and cut risk of breaches by 60%",
          "Designed new architecture within Google Cloud Platform (GCP) for a lift and shift style move as the first stage cloud migration",
          "Built secure, firewall-protected, and geographically redundant to provision IAAS, Docker with GCP provision and Amazon S3 to take live images, all are coordinated with Jenkins",
          "Reduced the monthly costs by $4,000 by removing unnecessary servers and databases",
          "Was an integral part of the team that developed and monitored cloud infrastructure on AWS and Jenkins",
        ],
      },
      {
        title: "DevOps Engineer",
        company: "Optimal Software",
        period: "09/2016 - 06/2018",
        achievements: [
          "Set up and maintained a 99% uptime of a network of 20+ Unix servers",
          "Used Jenkins to automate build and deployment that reduced human error and sped up production processes",
          "Successfully developed and maintained automated CI/CD pipelines for code deployment using Jenkins while automating the deployment process, resulting in an elimination of 75% of manual work and escalation of work efficiency",
          "Managed local deployments in Kubernetes, creating local cluster and applications deployment/maintenance/nodes",
        ],
      },
    ],
    education: [
      {
        degree: "Master's in Computer Science",
        school: "University of California, Berkeley",
        period: "2012 - 2014",
      },
    ],
    technicalSkills: {
      systems: [
        "RedHat Enterprise Linux",
        "Ubuntu",
        "CentOS",
        "FedOra",
        "LVM",
        "Bash Shell",
        "Ansible",
      ],
      cloudInfra: [
        "AWS",
        "Linux Shell",
        "CLI/API",
        "VPSs",
        "Auto Scaling",
        "EC2",
        "ELB",
        "Route53",
        "S3",
        "and Amazon S3",
      ],
      servers: [
        "Apache HTTP Server",
        "Load Balancing & Failover",
        "MySQL",
        "NFS and Cross Platform File",
        "Individual Level",
      ],
      networking: [
        "Nagios",
        "Zabbix",
        "VI Log Server",
        "Putsch",
        "Ping",
        "Teletype Network",
        "Network File System",
        "Resolution Protocol",
      ],
      containerization: [
        "Swarm",
        "CoreOS-rkt",
        "Portainer",
        "AWS ECR",
        "Marathon",
        "Hashicorp",
        "Docker Swarm and Kubernetes",
      ],
    },
    softSkills: [
      "Verbal & Written Communication",
      "Flexibility",
      "Time Management",
      "Attention to detail",
    ],
    certificates: [
      "Microsoft Certified Solutions Developer",
      "Google Cloud Certified - Associate Cloud Engineer",
      "AWS Certification (Architecture and Development)",
      "AWS Certified SysOps Admin - Associate",
      "Course in Advanced Operations on AWS",
      "Course in MySQL for Database Administrators",
    ],
  };

  const data = cvData || mockData;

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto bg-white shadow-lg">
        {/* Header Section */}
        <div className="p-8">
          <h1 className="text-3xl font-light text-gray-800 mb-1">{data.name}</h1>
          <p className="text-gray-600 text-sm mb-4">{data.title}</p>
          <p className="text-gray-700 text-sm leading-relaxed max-w-3xl">
            {data.summary}
          </p>

          {/* Contact Info */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4 text-sm">
            <div className="flex items-center gap-2 text-gray-600">
              <IoMailOutline className="text-[#00BFA6]" />
              <span>{data.contact.email}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <CiLocationOn className="text-[#00BFA6]" />
              <span>{data.contact.location}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <FiPhone className="text-[#00BFA6]" />
              <span>{data.contact.phone}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <FaGithub className="text-[#00BFA6]" />
              <span>{data.contact.github}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <FaLinkedin className="text-[#00BFA6]" />
              <span>{data.contact.linkedin}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <BsTwitter className="text-[#00BFA6]" />
              <span>{data.contact.twitter}</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 p-8">
          {/* Work Experience */}
          <section>
            <h2 className="text-[#00BFA6] font-medium text-lg mb-4">WORK EXPERIENCE</h2>
            {data.workExperience.map((exp, index) => (
              <div key={index} className="mb-6">
                <h3 className="font-medium text-gray-800">{exp.title}</h3>
                <p className="text-gray-600 text-sm">{exp.company}</p>
                <p className="text-gray-500 text-sm">{exp.period}</p>
                <ul className="list-disc pl-4">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-sm text-gray-600">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Template6;
