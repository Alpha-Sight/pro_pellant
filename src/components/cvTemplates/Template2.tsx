import React, {useEffect, useState} from "react";
import {GiRotaryPhone} from "react-icons/gi";
import {IoMailSharp} from "react-icons/io5";
import LanguageIcon from "@mui/icons-material/Language";
import RoomIcon from "@mui/icons-material/Room";
import {useAnalysedCv} from "@/contexts/AnalysedCvContext";

// Define types for the CV data structure
interface Contact {
    phone: string;
    email: string;
    address: string;
    website: string;
}

interface Education {
    level: string;
    school: string;
    period: string;
}

interface Experience {
    title: string;
    company: string;
    location?: string;
    period: string;
    description?: string;
    achievements: string[];
}

interface CvData {
    name: string;
    lastName: string;
    title: string;
    contact: Contact;
    profile: string;
    interests: string[];
    education: Education[];
    experience: Experience[];
}

interface Template2Props {
    cvData?: Profile;
    onEdit?: () => void; // Callback to open the modal
}

interface Template1Props {
    onEdit: (data: any) => void; // Callback to open the modal
}

interface Education {
    id: number;
    degreeType: string;
    fieldStudy: string;
    degreeClass: string;
    startDate: string;
    endDate: string;
    universityName: string;
    location: string;
}

interface WorkExperience {
    company_name: string;
    job_title: string;
    duration: string;
    duties: string[];
}

interface Profile {
    work_experience: WorkExperience[];
    skills: string[];
    professional_summary: string;
}

const Template2: React.FC<Template2Props> = ({onEdit}) => {
    // Mock data for demonstration
    const storedCvData = JSON.parse(localStorage.getItem("cvData") ?? "{}");
    const [mockData, setMockData] = useState<Profile | null>(null);

    const { analysedCv, setAnalysedCv, cvData, setCvData } = useAnalysedCv();

    useEffect(() => {
        const storedData = localStorage.getItem("analysedCv");
        if (storedData) {
            try {
                const parsedData: Profile = JSON.parse(JSON.parse(storedData));
                setMockData(parsedData);
            } catch (error) {
                console.error("Error parsing analysedCv:", error);
            }
        }
    }, []);

    // @ts-ignore
    return (
        <div className="min-h-screen bg-gray-100">
            <button onClick={onEdit} className="hidden mt-4 px-4 py-2 bg-blue-600 text-white rounded-md">
                Edit CV
            </button>
            <div className="container mx-auto p-4 pt-6 md:p-6 lg:p">
                <div className="max-w-5xl shadow-lg pb-10 bg-white mx-auto w-full flex flex-col items-center">
                    {/* NAME AND TITLE */}
                    <header className="w-full text-left p-10">
                        <h1 className="text-4xl md:text-5xl font-bold">
                            {storedCvData?.personalInformation?.firstName} {storedCvData?.personalInformation?.lastName}
                        </h1>
                        <h5 className="text-base md:text-lg">{storedCvData?.personalInformation?.professionalTitle}</h5>
                    </header>

                    <hr className="bg-[#464A4E] font-bold h-[4px] w-full"/>

                    {/* CONTENT SECTION */}
                    <main className="flex flex-wrap md:flex-nowrap w-full">
                        {/* LEFT COLUMN */}
                        <section className="w-full mt-10 md:w-1/2">
                            {/* CONTACTS */}
                            <section
                                className="flex flex-col mb-10 gap-6 ml-10 bg-[#EFEFEF] w-[85%] md:w-[90%] px-4 py-10">
                                <h1 className="text-2xl md:text-2xl font-normal mb-4">
                                    CONTACT
                                </h1>
                                <div className="font-light flex gap-3 items-center">
                                    <GiRotaryPhone className="text-2xl"/>
                                    <span className="text-sm">{storedCvData?.personalInformation?.phoneNumber}</span>
                                </div>
                                <div className="font-light flex gap-3 items-center">
                                    <IoMailSharp className="text-2xl"/>
                                    <span className="text-sm">{storedCvData?.personalInformation?.email}</span>
                                </div>
                                <div className="font-light flex gap-3 items-center flex-wrap">
                                    <RoomIcon/>
                                    {
                                        cvData?.personalInformation?.address ? (
                                            <span className="text-sm text-wrap">
                                                {storedCvData?.personalInformation?.address}
                                            </span>
                                        ) : (
                                            <span className="text-sm">
                                                {storedCvData?.personalInformation?.nationality}
                                            </span>
                                        )
                                    }

                                </div>
                                {
                                    cvData?.portfolio?.links &&
                                    (
                                        <div className="font-light text-sm flex gap-3 items-center">
                                            <LanguageIcon/>
                                            <span>{cvData.portfolio.links}</span>
                                        </div>
                                    )
                                }

                            </section>

                            {/* INTERESTS */}
                            <section className="mb-4 w-full">
                                <div className="pl-10 w-[100%]">
                                    <h1 className="text-2xl md:text-2xl px-4 py-2 bg-[#EFEFEF] w-[94%] md:w-full font-normal mb-4">
                                        SKILLS
                                    </h1>
                                </div>
                                <div className="px-10 flex flex-col gap-2">
                                    {mockData?.skills?.slice(0, 10).map((skill: any, index: any) => (
                                        <p key={index} className="font-light text-sm">
                                            {skill}
                                        </p>
                                    ))}
                                </div>
                            </section>

                            {/* EDUCATION */}
                            <div className="mt-10">
                                <div className="pl-10 w-[100%]">
                                    <h1 className="text-2xl md:text-2xl px-4 py-2 bg-[#EFEFEF] w-[94%] md:w-full font-normal mb-4">
                                        EDUCATION
                                    </h1>
                                </div>
                                <div className="px-10 flex flex-col gap-8">
                                    {storedCvData?.education?.map((edu: Education, index: number) => (
                                        <div key={index} className="mb-6">
                                            <p className="font-bold text-sm">{edu?.degreeType}</p>
                                            <p className="font-light text-sm">{edu?.universityName}</p>
                                            <p className="font-normal text-sm">{edu?.startDate} to {edu?.endDate}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* RIGHT COLUMN */}
                        <section className="w-full ml-10 md:w-2/3">
                            {/* PROFILE */}
                            <div className="flex flex-wrap md:flex-nowrap mt-8 w-full">
                                <div className="w-full md:w-[90%]">
                                    <h1 className="text-2xl md:text-2xl w-[94%] md:w-full font-normal mb-4 bg-[#EFEFEF] p-2">
                                        PROFILE
                                    </h1>
                                    <div className="font-light text-sm pr-6 py-4">
                                        {mockData?.professional_summary}
                                    </div>
                                </div>
                            </div>

                            {/* EXPERIENCE */}
                            <section className="w-full md:w-[90%] mt-10">
                                <h1 className="text-2xl md:text-2xl w-[94%] md:w-full font-normal mb-4 bg-[#EFEFEF] p-2 sm:text-left">
                                    EXPERIENCE
                                </h1>
                                {mockData?.work_experience?.map((exp: any, index: any) => (
                                    <div key={index} className="mb-8 pr-6">
                                        <div className="flex flex-col gap-4">
                                            <div className="font-bold text-sm sm:text-base">
                                                {exp.job_title}
                                            </div>
                                            <div className="flex flex-col sm:flex-row gap-2">
                                                <div className="font-bold text-sm sm:text-base">
                                                    {exp.company_name}
                                                </div>
                                                {/*{exp.location && (*/}
                                                {/*  <>*/}
                                                {/*    <div className="bg-black w-full sm:w-0.5 md:h-6 sm:h-4 sm:mx-2 mt-2 sm:mt-0"></div>*/}
                                                {/*    <div className="font-bold text-sm sm:text-base">*/}
                                                {/*      {exp.location}*/}
                                                {/*    </div>*/}
                                                {/*  </>*/}
                                                {/*)}*/}
                                                <div
                                                    className="bg-black w-full sm:w-0.5 md:h-6 sm:h-4 sm:mx-2 mt-2 sm:mt-0"></div>
                                                <div className="font-bold text-sm sm:text-base">
                                                    {exp.duration}
                                                </div>
                                            </div>
                                            {/*{exp.description && (*/}
                                            {/*  <div className="font-light text-sm sm:text-base px-2 py-4">*/}
                                            {/*    {exp.description}*/}
                                            {/*  </div>*/}
                                            {/*)}*/}
                                        </div>

                                        <ul className="mt-6 space-y-2">
                                            {exp.duties.map((duties: any, index: any) => (
                                                <li key={index} className="font-light text-sm sm:text-base">
                                                    {duties}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </section>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Template2;
