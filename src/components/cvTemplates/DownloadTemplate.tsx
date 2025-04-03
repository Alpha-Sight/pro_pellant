import React, {RefObject, useEffect, useState} from 'react';
import {GiRotaryPhone} from "react-icons/gi";
import {IoMailSharp} from "react-icons/io5";
import RoomIcon from "@mui/icons-material/Room";
import {useAnalysedCv} from "@/contexts/AnalysedCvContext";

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

const DownloadTemplate = ({resumeRef}: {resumeRef: RefObject<HTMLDivElement>}) => {
    // Mock data for demonstration
    const storedCvData = JSON.parse(localStorage.getItem("cvData") ?? "{}");
    const [mockData, setMockData] = useState<Profile | null>(null);

    const { analysedCv, setAnalysedCv, cvData, setCvData } = useAnalysedCv();

    useEffect(() => {
        const storedData = localStorage.getItem("analysedCv");
        if (storedData) {
            try {
                const parsedData: Profile = JSON.parse(JSON.parse(storedData));
                console.log("Type of parsedData:", typeof parsedData);
                console.log("Parsed CV Data:", parsedData); // Debugging
                console.log("Parsed CV Data Work:", parsedData.work_experience); // Debugging
                console.log("Parsed CV Data Skills:", parsedData.skills); // Debugging
                setMockData(parsedData);
            } catch (error) {
                console.error("Error parsing analysedCv:", error);
            }
        }
    }, []);

    // @ts-ignore
    return (
        <div className="absolute z-50 top-0 left-[-55rem]">
            <div ref={resumeRef} className="a4-container">
                <div className="min-h-screen">
                    <div className="container mx-auto">
                        <div className="w-5xl bg-white mx-auto w-full flex flex-col items-center">
                            {/* NAME AND TITLE */}
                            <header className="w-full text-left p-10">
                                <h1 className="text-4xl md:text-5xl font-bold">
                                    {storedCvData?.personalInformation?.firstName} {storedCvData?.personalInformation?.lastName}
                                </h1>
                                <h5 className="text-base md:text-lg mt-3">{storedCvData?.personalInformation?.professionalTitle}</h5>
                            </header>

                            <hr className="bg-[#464A4E] font-bold h-[4px] w-full"/>

                            {/* CONTENT SECTION */}
                            <main className="flex flex-nowrap w-full gap-10 p-10">
                                {/* LEFT COLUMN */}
                                <section className="w-full">
                                    {/* CONTACTS */}
                                    <section
                                        className="flex flex-col mb-10 gap-6 bg-[#EFEFEF] w-full px-6 pt-5 pb-10">
                                        <h1 className="text-2xl md:text-2xl font-normal mb-4">
                                            CONTACT
                                        </h1>
                                        <div className="font-light flex gap-3 items-center">
                                            <GiRotaryPhone className="text-xl"/>
                                            <span
                                                className="mb-4 text-sm">{storedCvData?.personalInformation?.phoneNumber}</span>
                                        </div>
                                        <div className="font-light flex gap-3 items-center">
                                            <IoMailSharp className="text-xl"/>
                                            <span className="mb-4 text-sm">{storedCvData?.personalInformation?.email}</span>
                                        </div>
                                        <div className="font-light flex gap-3 items-center">
                                            <RoomIcon/>
                                            <span
                                                className="mb-4 text-sm">{storedCvData?.personalInformation?.nationality}</span>
                                        </div>
                                        {/*<div className="font-light text-sm flex gap-3 items-center">*/}
                                        {/*  <LanguageIcon />*/}
                                        {/*  <span>{mockData.contact.website}</span>*/}
                                        {/*</div>*/}
                                    </section>

                                    {/* SKILLS */}
                                    <section className="mb-6 w-full">
                                        <div className="w-[100%]">
                                            <h1 className="text-2xl md:text-2xl pl-6 pb-5 bg-[#EFEFEF] w-full font-normal mb-4">
                                                SKILLS
                                            </h1>
                                        </div>
                                        <div className="pl-6 pr-4 flex flex-col gap-2">
                                            {mockData?.skills?.slice(0, 10).map((skill: any, index: any) => (
                                                <p key={index} className="font-light text-sm">
                                                    {skill}
                                                </p>
                                            ))}
                                        </div>
                                    </section>

                                    {/* EDUCATION */}
                                    <div className="mt-10">
                                        <div className="w-[100%]">
                                            <h1 className="text-2xl md:text-2xl pl-6 pb-5 bg-[#EFEFEF] w-full md:w-full font-normal mb-4">
                                                EDUCATION
                                            </h1>
                                        </div>
                                        <div className="pl-6 pr-4 flex flex-col gap-8">
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
                                <section className="w-full">
                                    {/* PROFILE */}
                                    <div className="flex flex-nowrap w-full">
                                        <div className="w-full">
                                            <h1 className="text-2xl md:text-2xl w-full font-normal mb-4 bg-[#EFEFEF] pl-6 pb-5">
                                                PROFILE
                                            </h1>
                                            <div className="font-light text-sm px-6">
                                                {mockData?.professional_summary}
                                            </div>
                                        </div>
                                    </div>

                                    {/* EXPERIENCE */}
                                    <section className="w-full mt-10">
                                        <h1 className="text-2xl md:text-2xl w-full font-normal mb-4 bg-[#EFEFEF] pl-6 pb-5">
                                            EXPERIENCE
                                        </h1>
                                        {mockData?.work_experience?.map((exp: any, index: any) => (
                                            <div key={index} className="mb-8 px-6">
                                                <div className="flex flex-col gap-4">
                                                    <div className="font-bold text-sm sm:text-base">
                                                        {exp.job_title}
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <div className="font-bold text-sm sm:text-base mb-5">
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
                                                        <div className="font-bold text-sm sm:text-base mb-5">
                                                            {exp.duration}
                                                        </div>
                                                    </div>
                                                    {/*{exp.description && (*/}
                                                    {/*  <div className="font-light text-sm sm:text-base px-2 py-4">*/}
                                                    {/*    {exp.description}*/}
                                                    {/*  </div>*/}
                                                    {/*)}*/}
                                                </div>

                                                <ul className="space-y-2">
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
            </div>
        </div>
    );
}

export default DownloadTemplate;
