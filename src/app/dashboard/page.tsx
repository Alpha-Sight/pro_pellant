"use client";

import React, {useState, useEffect} from 'react';
import {ArrowRight, Bold, Italic, Copy, Plus} from "lucide-react"
import Template21 from "@/components/cvTemplates/Template21";
import {CVData} from "@/utils/global";
import type { ExecuteResult, IndexedTx } from "@cosmjs/cosmwasm-stargate";
import axios from "axios";
import {
    Abstraxion,
    useAbstraxionAccount,
    useAbstraxionSigningClient,
    useAbstraxionClient
} from "@burnt-labs/abstraxion";
import {useRouter} from "next/navigation";
import {calculateFee} from "@cosmjs/stargate";
import {ClipLoader} from "react-spinners";
import {extractWasmAttributes} from "@/utils/helperFunctions";

type ExecuteResultOrUndefined = ExecuteResult | undefined;

const Dashboard = () => {
    // Fixed destructuring
    const { data: account, isConnected, isConnecting } = useAbstraxionAccount();
    const bech32Address = account?.bech32Address;
    const {client, logout} = useAbstraxionSigningClient();
    const { client: queryClient } = useAbstraxionClient();

    const [wallet, setWallet] = useState(account?.bech32Address);
    const [token, setToken] = useState<string | null>(null);
    const [storedData, setStoredData] = useState<string | null>(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const userToken = localStorage.getItem("user_token");
            const cvData = localStorage.getItem("cvData");
            if (userToken) setToken(userToken);
            if (cvData) setStoredData(cvData);
        }
    }, []);

    const [executeResult, setExecuteResult] = useState<ExecuteResultOrUndefined>(undefined);
    const blockExplorerUrl = `https://www.mintscan.io/xion-testnet/tx/${executeResult?.transactionHash}`;

    const contractAddress = "xion1pfqrut39hcrfhnd0a975wpcy25t7m2u5ljuxsguv2drh2wca0jqszxqnvs";
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!account.bech32Address) router.push("/")
    }, []);

    useEffect(() => {
        const getUserToken = async () => {
            setLoading(true);

            try {
                // Query the contract
                const response = await queryClient?.queryContractSmart(account.bech32Address, {
                    get_user: { },
                });

                localStorage.setItem("user_token", response);

                console.log("user Token", response);
            } catch (error) {
                console.error('Error querying contract:', error);
            } finally {
                setLoading(false);
            }
        };

        getUserToken();
    }, [queryClient]);

    const handleRecordCv = async () => {
        if (!client || !bech32Address) {
            setError("Wallet not properly connected");
            return router.push("/");
        }

        setLoading(true);
        setError(null);

        const msg = { record_cv_generation: {} };

        try {
            // No optional chaining since we've checked client exists
            const res = await client.execute(
                bech32Address,
                contractAddress,
                msg,
                "auto"
            );

            console.log("Transaction submitted:", res);
            setExecuteResult(res);

            const txHash = res.transactionHash;

            try {
                // Poll for transaction result
                const txResult = await pollForTransaction(txHash);

                // Parse the response attributes
                const attributes = extractWasmAttributes(txResult);

                console.log("CV recorded successfully: ", attributes)
                setToken(attributes?.token);
                localStorage.setItem("user_token", attributes?.token);

            } catch (pollError) {
                console.error("Failed to get transaction result:", pollError);
                setError("Transaction may have been submitted but couldn't verify result. Try continuing anyway.");
            }
        } catch (error) {
            console.error("CV recording error:", error);
            if (error instanceof Error) {
                setError(error.message || "CV recording failed");
            } else {
                setError("CV recording failed");
            }
        } finally {
            setLoading(false);
        }
    };

    // Helper function with proper TypeScript typing
    async function pollForTransaction(txHash: string, maxAttempts = 10, interval = 2000): Promise<IndexedTx> {
        let attempts = 0;

        while (attempts < maxAttempts) {
            try {
                if (!client) throw new Error("Client not available");

                console.log(`Polling attempt ${attempts + 1}/${maxAttempts}`);
                const result = await client.getTx(txHash);

                if (result) {
                    console.log("Transaction confirmed:", result);
                    return result;
                }
            } catch (error) {
                console.log(`Polling attempt ${attempts + 1} failed, retrying...`);
            }

            attempts++;
            await new Promise(resolve => setTimeout(resolve, interval));
        }

        throw new Error("Transaction confirmation timed out");
    }

    const [formData, setFormData] = useState<CVData>({
        details: {
            jobTitle: '',
            firstName: '',
            lastName: '',
            email: '',
            address: ''
        },
        experiences: [{
            jobTitle: '',
            company: '',
            period: {start: '', end: ''},
            location: '',
            duties: ['']
        }],
        educations: [{
            school: '',
            degree: '',
            period: {start: '', end: ''},
            location: ''
        }],
        skills: [''],
        jobDescription: '',
        professionalSummary: '',
        awards: [''],
        certifications: [''],
    });

    useEffect(() => {
        if (storedData) {
            setFormData(JSON.parse(storedData))
        }
    }, [storedData]);


    const handleChange = (
        section: keyof CVData,
        field: string,
        value: any,
        index?: number
    ) => {
        setFormData((prev) => {
            // Handle object-based section (like details)
            if (section === 'details') {
                return { ...prev, details: { ...prev.details, [field]: value } };
            }
            // Handle skills array
            if (section === 'skills') {
                const updatedSkills = [...prev.skills];
                updatedSkills[index || 0] = value;
                return { ...prev, skills: updatedSkills };
            }
            // Handle string sections (e.g., jobDescription or professionalSummary)
            if (typeof prev[section] === 'string') {
                return { ...prev, [section]: value };
            }
            // Handle array sections (like experiences, educations, awards, certifications)
            const updatedSection = [...(prev[section] as any)];
            updatedSection[index || 0] = { ...updatedSection[index || 0], [field]: value };
            return { ...prev, [section]: updatedSection };
        });
    };


    const addSkill = () => {
        setFormData((prev) => ({ ...prev, skills: [...prev.skills, ''] }));
    };

    const addEducation = () => {
        setFormData((prev) => ({
            ...prev,
            educations: [...prev.educations, { school: '', degree: '', period: { start: '', end: '' }, location: '' }]
        }));
    };

    const addExperience = () => {
        setFormData((prev) => ({
            ...prev,
            experiences: [
                ...prev.experiences,
                {
                    jobTitle: '',
                    company: '',
                    period: { start: '', end: '' },
                    location: '',
                    duties: ['']
                }
            ]
        }));
    };

    const handleDutyChange = (
        experienceIndex: number,
        dutyIndex: number,
        value: string
    ) => {
        setFormData((prev) => {
            // Create a copy of the experiences array
            const experiences = [...prev.experiences];
            // Get the current experience object
            const currentExperience = experiences[experienceIndex];
            // Create a copy of the duties array and update the specific duty
            const updatedDuties = [...currentExperience.duties];
            updatedDuties[dutyIndex] = value;
            // Update the experience with the new duties array
            experiences[experienceIndex] = {
                ...currentExperience,
                duties: updatedDuties,
            };
            // Return the updated form data
            return { ...prev, experiences };
        });
    };

    const addDuty = (experienceIndex: number) => {
        setFormData((prev) => {
            const experiences = [...prev.experiences];
            const currentExperience = experiences[experienceIndex];
            // Prepend a new empty duty instead of appending it
            const updatedDuties = ['', ...currentExperience.duties];
            experiences[experienceIndex] = {
                ...currentExperience,
                duties: updatedDuties,
            };
            return { ...prev, experiences };
        });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        localStorage.setItem("cvData", JSON.stringify(formData));

        const url = 'https://propellant.fly.dev/api/cv-analysis';
        const data = {
            skills: formData.skills,
            jobDescription: formData.jobDescription,
            experiences: formData.experiences
        };

        // Handle form submission logic here
        console.log('Form submitted:', formData);

        console.log("Token: ", token);

        if (!token) {
            await handleRecordCv();
        }

        axios.post(url, data, {
            headers: {
                'x-user-address': `${account?.bech32Address}`,
                'x-secure-token': `${token}`,
                'Content-Type': 'application/json',
            },
        }).then((response) => {
            console.log(response.data);
            handleChange("professionalSummary", "", response.data.professionalSummary);
        })
        .catch((error) => {
            console.error(error);
        });
    }

    return (
        <div className="background-image h-dvh w-full flex items-center justify-center">
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="w-full max-w-[90vw] mx-auto flex h-[90vh] z-50 rounded-lg overflow-hidden">
                <form onSubmit={handleSubmit} className="w-[40%] col-span-5 bg-black bg-opacity-80 p-6 text-white overflow-y-auto">
                    <div className="flex items-center gap-5 pb-4 border-b border-white">
                        <div className="w-14 h-14 rounded-full bg-white"></div>
                        <p className="text-xl font-semibold">{formData.details.firstName || "Untitled"}&apos;s {formData.details.jobTitle} CV</p>
                    </div>

                    <div className="space-y-6 pt-6 pb-10 border-b border-white">
                        <p className="text-xl font-semibold">Your Details</p>

                        <div className="space-y-2">
                            <label className="text-xs">Job Title</label>
                            <input
                                type="text"
                                placeholder="Enter the job title"
                                className="w-full text-base p-4 rounded-lg border bg-transparent"
                                value={formData.details.jobTitle}
                                onChange={(e) => handleChange('details', 'jobTitle', e.target.value)}
                                required
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-xs">First Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter first name"
                                    className="w-full text-base p-4 rounded-lg border bg-transparent"
                                    value={formData.details.firstName}
                                    onChange={(e) => handleChange('details', 'firstName', e.target.value)}
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs">Last Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter last name"
                                    className="w-full text-base p-4 rounded-lg border bg-transparent"
                                    value={formData.details.lastName}
                                    onChange={(e) => handleChange('details', 'lastName', e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs">Email Address</label>
                            <input
                                type="email"
                                placeholder="Enter email address"
                                className="w-full text-base p-4 rounded-lg border bg-transparent"
                                value={formData.details.email}
                                onChange={(e) => handleChange('details', 'email', e.target.value)}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs">Contact Address</label>
                            <input
                                type="text"
                                placeholder="Enter contact address"
                                className="w-full text-base p-4 rounded-lg border bg-transparent"
                                value={formData.details.address}
                                onChange={(e) => handleChange('details', 'address', e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-6 py-6 border-b border-white">
                        <div className="space-y-2">
                            <p className="text-xl font-semibold">Your Experience</p>
                            <p className="text-xs font-semibold brightness-50">
                                Include your last 10 years of relevant experience and dates in this section. <br/>
                                List your most recent position first.
                            </p>
                        </div>

                        {formData.experiences.map((exp, index) => (
                            <div key={index} className="space-y-6">
                                <div className="flex items-center gap-5">
                                    <div className="w-10 h-10 rounded-full bg-white"></div>
                                    <div>
                                        <p className="text-base font-semibold">{exp.company || "Untitled"}</p>
                                        <p className="text-xs font-semibold brightness-50">
                                            {exp.period.start || "Start"} - {exp.period.end || "End"}
                                        </p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-xs">Job Title</label>
                                        <input
                                            type="text"
                                            value={exp.jobTitle}
                                            onChange={(e) => handleChange('experiences', 'jobTitle', e.target.value, index)}
                                            placeholder="Enter job title"
                                            className="w-full text-base p-4 rounded-lg border bg-transparent"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs">Company/Employer</label>
                                        <input
                                            type="text"
                                            value={exp.company}
                                            onChange={(e) => handleChange('experiences', 'company', e.target.value, index)}
                                            placeholder="Enter company name"
                                            className="w-full text-base p-4 rounded-lg border bg-transparent"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-xs">Period</label>

                                        <div className="flex items-center gap-2">
                                            <input
                                                type="text"
                                                placeholder="Start"
                                                value={exp.period.start}
                                                onChange={(e) => handleChange('experiences', 'period', {
                                                    ...exp.period,
                                                    start: e.target.value
                                                }, index)}
                                                className="w-full text-base p-4 rounded-lg border bg-transparent"
                                                required
                                            />

                                            <ArrowRight size={50}/>

                                            <input
                                                type="text"
                                                value={exp.period.end}
                                                onChange={(e) => handleChange('experiences', 'period', {
                                                    ...exp.period,
                                                    end: e.target.value
                                                }, index)}
                                                placeholder="End"
                                                className="w-full text-base p-4 rounded-lg border bg-transparent"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs">Location</label>
                                        <input
                                            type="text"
                                            value={exp.location}
                                            onChange={(e) => handleChange('experiences', 'location', e.target.value, index)}
                                            placeholder="Enter location"
                                            className="w-full text-base p-4 rounded-lg border bg-transparent"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="rounded-lg border">
                                    <div className="flex items-center justify-between px-4 py-3 border-b">
                                        <p>Duties</p>
                                        <div className="flex gap-4 w-fit">
                                            <button onClick={() => addDuty(index)}
                                                    className="p-2 rounded-full bg-white bg-opacity-50">
                                                <Plus size={16}/>
                                            </button>
                                        </div>
                                    </div>
                                    {exp.duties.map((duty, dutyIndex) => (
                                        <input
                                            key={dutyIndex}
                                            type="text"
                                            value={duty}
                                            placeholder="Enter duty"
                                            className="w-full text-base p-4 rounded-lg bg-transparent focus:outline-none"
                                            onChange={(e) => handleDutyChange(index, dutyIndex, e.target.value)}
                                            required
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}

                        <div className="flex items-center gap-3">
                            <button onClick={addExperience} className="p-2 rounded-full bg-white bg-opacity-50">
                                <Plus size={20}/>
                            </button>

                            <p>Add Experience</p>
                        </div>
                    </div>

                    <div className="space-y-6 py-6 border-b border-white">
                        <div className="space-y-2">
                            <p className="text-xl font-semibold">Education</p>
                            <p className="text-xs font-semibold brightness-50">
                                Include your educational degrees and other related information in this section. <br/>
                                List your most recent first.
                            </p>
                        </div>

                        {formData.educations.map((edu, index) => (
                            <div key={index} className="space-y-6">
                                <div className="flex items-center gap-5">
                                    <div className="w-10 h-10 rounded-full bg-white"></div>
                                    <div>
                                        <p className="text-base font-semibold">{edu.school || "Untitled"}</p>
                                        <p className="text-xs font-semibold brightness-50">
                                            {edu.period.start || "Start"} - {edu.period.end || "End"}
                                        </p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-xs">School</label>
                                        <input
                                            type="text"
                                            placeholder="Enter school name"
                                            className="w-full text-base p-4 rounded-lg border bg-transparent"
                                            value={edu.school}
                                            onChange={(e) => handleChange('educations', 'school', e.target.value, index)}
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs">Degree</label>
                                        <input
                                            type="text"
                                            placeholder="Enter your degree"
                                            className="w-full text-base p-4 rounded-lg border bg-transparent"
                                            value={edu.degree}
                                            onChange={(e) => handleChange('educations', 'degree', e.target.value, index)}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-xs">Period</label>
                                        <div className="flex items-center gap-2">
                                            <input
                                                type="text"
                                                placeholder="Start"
                                                className="w-full text-base p-4 rounded-lg border bg-transparent"
                                                value={edu.period.start}
                                                onChange={(e) => handleChange('educations', 'period', {
                                                    ...edu.period,
                                                    start: e.target.value
                                                }, index)}
                                                required
                                            />

                                            <ArrowRight size={50}/>

                                            <input
                                                type="text"
                                                placeholder="End"
                                                className="w-full text-base p-4 rounded-lg border bg-transparent"
                                                value={edu.period.end}
                                                onChange={(e) => handleChange('educations', 'period', {
                                                    ...edu.period,
                                                    end: e.target.value
                                                }, index)}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs">Location</label>
                                        <input
                                            type="text"
                                            placeholder="Enter location"
                                            className="w-full text-base p-4 rounded-lg border bg-transparent"
                                            value={edu.location}
                                            onChange={(e) => handleChange('educations', 'location', e.target.value, index)}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}


                        <div className="flex items-center gap-3">
                            <button onClick={addEducation} className="p-2 rounded-full bg-white bg-opacity-50">
                                <Plus size={20}/>
                            </button>

                            <p>Add Education</p>
                        </div>
                    </div>

                    <div className="space-y-6 pt-6 pb-10 border-b border-white">
                        <div className="space-y-2">
                            <p className="text-xl font-semibold">Skills</p>
                            <p className="text-xs font-semibold brightness-50">
                                Got some skills you would like to share with your potential employer? <br/>
                                Feel free to add them below.
                            </p>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs">Add a Skill</label>
                            {formData.skills.map((skill, index) => (
                                <div key={index} className="relative">
                                    <input
                                        type="text"
                                        value={skill}
                                        placeholder="Enter skill name"
                                        className="w-full text-base p-4 rounded-lg border bg-transparent"
                                        onChange={(e) => handleChange('skills', '', e.target.value, index)}
                                        required
                                    />

                                    <button onClick={addSkill} className="absolute right-2 top-2 p-2">
                                        <Plus size={23}/>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>


                    <div className="space-y-6 pt-6">
                        <div className="space-y-2">
                            <p className="text-xl font-semibold">Job Description</p>
                            <p className="text-xs font-semibold brightness-50">
                                Copy and paste the job description of the job you want to tailor your cv to meet.
                            </p>
                        </div>

                        <div className="rounded-lg border">
                            <div className="flex items-center justify-between px-4 py-3 border-b">
                                <p>Job Description</p>
                                <div className="flex gap-4 w-fit">
                                    <div>
                                        <Bold size={14}/>
                                    </div>
                                    <div>
                                        <Italic size={14}/>
                                    </div>
                                    <div>
                                        <Copy size={14}/>
                                    </div>
                                </div>
                            </div>
                            <textarea
                                value={formData.jobDescription}
                                onChange={(e) => handleChange('jobDescription', '', e.target.value)}
                                placeholder="Enter job description"
                                className="w-full text-base p-4 bg-transparent"
                                required
                            />
                        </div>
                    </div>

                    <button type={"submit"} className="mt-5 w-full text-black text-base p-4 rounded-lg border bg-white">
                        {
                            loading ? (
                                <ClipLoader
                                    color={"#000000"}
                                    loading={loading}
                                    size={20}
                                    aria-label="Loading Spinner"
                                    data-testid="loader"
                                />
                            ) : (
                                "Analyze CV"
                            )
                        }
                    </button>
                </form>

                <section className="w-[60%] bg-black bg-opacity-40 overflow-y-auto py-10">
                    <div className="w-[90%] mx-auto bg-white">
                        <Template21 cvData={formData}/>
                    </div>
                </section>
            </div>
        </div>
);
};

export default Dashboard;
