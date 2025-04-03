import React, { useEffect, useState } from "react";
import { AnalysedCvDataType, CvData } from "@/utils/global";

interface EditCvModalProps {
    isOpen: boolean;
    onClose: () => void;
    cvData: CvData | null;
    setCvData: (cv: CvData) => void;
    analysedCv: AnalysedCvDataType | null;
    setAnalysedCv: (cv: AnalysedCvDataType) => void;
    onSave: (updatedCvData: any) => void;
    loading?: boolean;
}

interface FormEducation {
    level: string;
    school: string;
    period: string;
}

interface FormExperience {
    title: string;
    company: string;
    location: string;
    period: string;
    description: string;
    achievements: string[];
}

/** Local state shape, with “skills” referencing analysedCv.skills. */
interface FormDataShape {
    name: string; // from cvData.personalInformation.firstName
    lastName: string; // from cvData.personalInformation.lastName
    title: string; // from cvData.personalInformation.professionalTitle

    contact: {
        phone: string; // from cvData.personalInformation.phoneNumber
        email: string; // from cvData.personalInformation.email
        address: string; // from cvData.personalInformation.address
        website: string; // from cvData.portfolio?.links
    };

    education: FormEducation[]; // from cvData.education
    experience: FormExperience[]; // from analysedCv.work_experience
    skills: string[]; // from analysedCv.skills
    profile: string; // from analysedCv.professional_summary
}

const EditCvModal: React.FC<EditCvModalProps> = ({
                                                     isOpen,
                                                     onClose,
                                                     cvData,
                                                     setCvData,
                                                     analysedCv,
                                                     setAnalysedCv,
                                                     onSave,
                                                     loading = false,
                                                 }) => {
    const [activeSection, setActiveSection] = useState("personal");

    // Local form data state
    const [formData, setFormData] = useState<FormDataShape>({
        name: "",
        lastName: "",
        title: "",
        contact: {
            phone: "",
            email: "",
            address: "",
            website: "",
        },
        education: [],
        experience: [],
        skills: [],
        profile: "",
    });

    // ----------------------------------------
    // 1) Load data from cvData + analysedCv
    // ----------------------------------------
    useEffect(() => {
        if (!cvData || !analysedCv) return;

        // Personal
        const firstName = cvData.personalInformation?.firstName ?? "";
        const lastName = cvData.personalInformation?.lastName ?? "";
        const professionalTitle = cvData.personalInformation?.professionalTitle ?? "";

        // Contact
        const phone = cvData.personalInformation?.phoneNumber ?? "";
        const email = cvData.personalInformation?.email ?? "";
        const address = cvData.personalInformation?.address ?? "";
        const website = cvData.portfolio?.links ?? "";

        // Education
        const educationArray: FormEducation[] =
            cvData.education?.map((edu) => ({
                level: edu.degreeType || "",
                school: edu.universityName || "",
                period: `${edu.startDate ?? ""} - ${edu.endDate ?? ""}`.trim(),
            })) || [];

        // Experience => from analysedCv.work_experience
        const experienceArray: FormExperience[] = analysedCv.work_experience.map((exp) => {
            const [firstDuty, ...remaining] = exp.duties || [];
            return {
                title: exp.job_title,
                company: exp.company_name,
                location: "", // not in analysedCv, can be edited in the modal
                period: exp.duration,
                description: firstDuty || "",
                achievements: remaining,
            };
        });

        // Skills => from analysedCv.skills
        const skillNames = analysedCv.skills ?? [];

        // Profile => from analysedCv.professional_summary
        const profileSummary = analysedCv.professional_summary || "";

        // Set local state
        setFormData({
            name: firstName,
            lastName,
            title: professionalTitle,
            contact: {
                phone,
                email,
                address,
                website,
            },
            education: educationArray,
            experience: experienceArray,
            skills: skillNames,
            profile: profileSummary,
        });
    }, [cvData, analysedCv]);

    if (!isOpen) return null;

    // ---------------------------
    // 2) Handle local edits
    // ---------------------------
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        console.log("formData: ", formData);

        const { name, value } = e.target;

        // e.g. "education.0.level"
        if (name.startsWith("education.")) {
            const [_, index, field] = name.split(".");
            const updatedEducation = [...formData.education];
            // @ts-ignore
            updatedEducation[parseInt(index)][field] = value;
            setFormData({ ...formData, education: updatedEducation });
        }
        // e.g. "experience.1.title"
        else if (name.startsWith("experience.")) {
            const [_, index, field] = name.split(".");
            const updatedExperience = [...formData.experience];
            // @ts-ignore
            updatedExperience[parseInt(index)][field] = value;
            setFormData({ ...formData, experience: updatedExperience });
        }
        // For multiline input => skills
        else if (name === "skills") {
            setFormData({ ...formData, skills: value.split("\n") });
        }
        // e.g. "contact.email"
        else if (name.startsWith("contact.")) {
            const [_, field] = name.split(".");
            setFormData({
                ...formData,
                contact: {
                    ...formData.contact,
                    [field]: value,
                },
            });
        }
        // Otherwise => "name", "lastName", "title", "profile"
        else {
            setFormData({ ...formData, [name]: value });
        }
    };

    // Multi-line achievements
    const handleAchievementsChange = (index: number, newValue: string) => {
        const lines = newValue.split("\n");
        const updated = [...formData.experience];
        updated[index].achievements = lines;
        setFormData({ ...formData, experience: updated });
    };

    // --------------------------------------
    // 3) Build updated data for saving
    // --------------------------------------
    const buildUpdatedData = () => {
        const updatedCvData: CvData = cvData ? { ...cvData } : {};

        // Personal Info
        updatedCvData.personalInformation = {
            ...(updatedCvData.personalInformation || {}),
            firstName: formData.name,
            lastName: formData.lastName,
            professionalTitle: formData.title,
            phoneNumber: formData.contact.phone,
            email: formData.contact.email,
            address: formData.contact.address,
        };

        // portfolio => website
        updatedCvData.portfolio = {
            ...(updatedCvData.portfolio || {}),
            links: formData.contact.website,
        };

        // Education => parse "period" into start/end
        updatedCvData.education = formData.education.map((edu, i) => {
            const original = updatedCvData.education?.[i] || {};
            let startDate = "";
            let endDate = "";
            if (edu.period.includes("-")) {
                const [start, end] = edu.period.split("-").map((s) => s.trim());
                startDate = start;
                endDate = end;
            }
            return {
                ...original,
                degreeType: edu.level,
                universityName: edu.school,
                startDate,
                endDate,
            };
        });

        // Build updated analysed data
        const updatedAnalysed: AnalysedCvDataType = analysedCv
            ? { ...analysedCv }
            : {
                work_experience: [],
                skills: [],
                professional_summary: "",
            };

        // Experience => from formData
        updatedAnalysed.work_experience = formData.experience.map((exp) => {
            const duties = exp.description
                ? [exp.description, ...exp.achievements]
                : [...exp.achievements];
            return {
                job_title: exp.title,
                company_name: exp.company,
                duration: exp.period,
                duties,
            };
        });

        // Skills => from formData
        updatedAnalysed.skills = formData.skills;

        // Profile => professional_summary
        updatedAnalysed.professional_summary = formData.profile;

        return { updatedCvData, updatedAnalysed };
    };

    // --------------------------------------
    // 4) “Save” handlers
    // --------------------------------------
    const handleSaveAndClose = () => {
        const { updatedCvData, updatedAnalysed } = buildUpdatedData();
        setCvData(updatedCvData);
        setAnalysedCv(updatedAnalysed);
        localStorage.setItem("cvData", JSON.stringify(updatedCvData));
        localStorage.setItem("analysedCv", JSON.stringify(JSON.stringify(updatedAnalysed)));
        onSave(formData); // pass back the raw form data if needed
        onClose();
    };

    const handleSaveOnly = () => {
        const { updatedCvData, updatedAnalysed } = buildUpdatedData();
        setCvData(updatedCvData);
        setAnalysedCv(updatedAnalysed);
        localStorage.setItem("cvData", JSON.stringify(updatedCvData));
        localStorage.setItem("analysedCv", JSON.stringify(JSON.stringify(updatedAnalysed)));
        onSave(formData);
    };

    // --------------------------------------
    // 5) Render form fields
    // --------------------------------------
    const renderFormFields = () => {
        switch (activeSection) {
            case "personal":
                return (
                    <div className="space-y-4">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="First Name"
                            className="border border-gray-300 rounded-md p-2 w-full"
                        />
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Last Name"
                            className="border border-gray-300 rounded-md p-2 w-full"
                        />
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="Professional Title"
                            className="border border-gray-300 rounded-md p-2 w-full"
                        />
                    </div>
                );

            case "contact":
                return (
                    <div className="space-y-4">
                        <input
                            type="text"
                            name="contact.phone"
                            value={formData.contact.phone}
                            onChange={handleChange}
                            placeholder="Phone Number"
                            className="border border-gray-300 rounded-md p-2 w-full"
                        />
                        <input
                            type="email"
                            name="contact.email"
                            value={formData.contact.email}
                            onChange={handleChange}
                            placeholder="Email Address"
                            className="border border-gray-300 rounded-md p-2 w-full"
                        />
                        <input
                            type="text"
                            name="contact.address"
                            value={formData.contact.address}
                            onChange={handleChange}
                            placeholder="Full Address"
                            className="border border-gray-300 rounded-md p-2 w-full"
                        />
                        <input
                            type="text"
                            name="contact.website"
                            value={formData.contact.website}
                            onChange={handleChange}
                            placeholder="Website URL"
                            className="border border-gray-300 rounded-md p-2 w-full"
                        />
                    </div>
                );

            case "education":
                return (
                    <div className="space-y-6">
                        {formData.education.map((edu, index) => (
                            <div key={index} className="space-y-4 border-b pb-4">
                                <input
                                    type="text"
                                    name={`education.${index}.level`}
                                    value={edu.level}
                                    onChange={handleChange}
                                    placeholder="Degree Level"
                                    className="border border-gray-300 rounded-md p-2 w-full"
                                />
                                <input
                                    type="text"
                                    name={`education.${index}.school`}
                                    value={edu.school}
                                    onChange={handleChange}
                                    placeholder="Institution Name"
                                    className="border border-gray-300 rounded-md p-2 w-full"
                                />
                                <input
                                    type="text"
                                    name={`education.${index}.period`}
                                    value={edu.period}
                                    onChange={handleChange}
                                    placeholder="Study Period (e.g., 2018-2020)"
                                    className="border border-gray-300 rounded-md p-2 w-full"
                                />
                            </div>
                        ))}
                    </div>
                );

            case "experience":
                return (
                    <div className="space-y-6">
                        {formData.experience.map((exp, index) => (
                            <div key={index} className="space-y-4 border-b pb-4">
                                <input
                                    type="text"
                                    name={`experience.${index}.title`}
                                    value={exp.title}
                                    onChange={handleChange}
                                    placeholder="Job Title"
                                    className="border border-gray-300 rounded-md p-2 w-full"
                                />
                                <input
                                    type="text"
                                    name={`experience.${index}.company`}
                                    value={exp.company}
                                    onChange={handleChange}
                                    placeholder="Company Name"
                                    className="border border-gray-300 rounded-md p-2 w-full"
                                />
                                <input
                                    type="text"
                                    name={`experience.${index}.location`}
                                    value={exp.location}
                                    onChange={handleChange}
                                    placeholder="Location"
                                    className="border border-gray-300 rounded-md p-2 w-full"
                                />
                                <input
                                    type="text"
                                    name={`experience.${index}.period`}
                                    value={exp.period}
                                    onChange={handleChange}
                                    placeholder="Employment Period"
                                    className="border border-gray-300 rounded-md p-2 w-full"
                                />
                                <textarea
                                    name={`experience.${index}.description`}
                                    value={exp.description}
                                    onChange={handleChange}
                                    placeholder="Job Description"
                                    className="border border-gray-300 rounded-md p-2 w-full h-24"
                                />
                                <textarea
                                    value={exp.achievements.join("\n")}
                                    onChange={(e) => handleAchievementsChange(index, e.target.value)}
                                    placeholder="Achievements (one per line)"
                                    className="border border-gray-300 rounded-md p-2 w-full h-32"
                                />
                            </div>
                        ))}
                    </div>
                );

            case "skills":
                return (
                    <textarea
                        name="skills"
                        value={formData.skills.join("\n")}
                        onChange={handleChange}
                        placeholder="Enter each skill on a new line"
                        className="border border-gray-300 rounded-md p-2 h-48 w-full"
                    />
                );

            case "profile":
                return (
                    <textarea
                        name="profile"
                        value={formData.profile}
                        onChange={handleChange}
                        placeholder="Professional Summary"
                        className="border border-gray-300 rounded-md p-2 h-48 w-full"
                    />
                );

            default:
                return null;
        }
    };

    // --------------------------------------
    // Modal Markup
    // --------------------------------------
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[100]">
            <div className="bg-white w-full md:w-[90%] xl:w-[80%] p-4 md:p-6 rounded-lg shadow-lg flex flex-col h-[90vh] md:h-[85vh]">

                {/* Mobile Layout */}
                <div className="md:hidden flex flex-col h-full">
                    <div className="flex gap-2 overflow-x-auto pb-4">
                        {["personal", "contact", "education", "experience", "skills", "profile"].map((section) => (
                            <button
                                key={section}
                                onClick={() => setActiveSection(section)}
                                className={`p-2 min-w-[120px] text-center rounded-md capitalize flex-shrink-0 ${
                                    activeSection === section ? "bg-[#9796f8] text-white" : "hover:bg-gray-100"
                                }`}
                            >
                                {section.replace("-", " ")}
                            </button>
                        ))}
                    </div>

                    <div className="flex-1 overflow-y-auto space-y-6 pb-24">
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold capitalize">
                                {activeSection.replace("-", " ")}
                            </h3>
                            {renderFormFields()}
                        </div>

                        <div className="border-t pt-4">
                            <h2 className="text-lg font-bold mb-2">Quick Tips</h2>
                            <div className="space-y-2 text-gray-600">
                                <p>🖋️ Use action verbs like "developed", "managed", "created"</p>
                                <p>📈 Include measurable achievements with numbers</p>
                                <p>🎯 Focus on relevant skills and experiences</p>
                                <p>📝 Keep paragraphs short and scannable</p>
                                <p>🔍 Double-check dates and contact information</p>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Action Buttons - Always Visible */}
                    <div className="fixed bottom-0 left-0 right-0 bg-white border-t py-4 px-4 md:hidden shadow-lg">
                        <div className="flex justify-between gap-2">
                            <button
                                onClick={onClose}
                                className="px-4 py-2 bg-gray-200 text-black rounded-md hover:bg-gray-300 transition-colors flex-1"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSaveOnly}
                                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex-1"
                                disabled={loading}
                            >
                                {loading ? "Saving CV..." : "Save"}
                            </button>
                            <button
                                onClick={handleSaveAndClose}
                                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors flex-1"
                                disabled={loading}
                            >
                                Save and Close
                            </button>
                        </div>
                    </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:flex flex-row flex-1 overflow-hidden gap-6">
                    {/* Left Navigation */}
                    <div className="w-1/4 flex flex-col gap-2 border-r pr-4 overflow-y-auto">
                        {["personal", "contact", "education", "experience", "skills", "profile"].map((section) => (
                            <button
                                key={section}
                                onClick={() => setActiveSection(section)}
                                className={`p-2 text-left rounded-md capitalize ${
                                    activeSection === section ? "bg-[#9796f8] text-white" : "hover:bg-gray-100"
                                }`}
                            >
                                {section.replace("-", " ")}
                            </button>
                        ))}
                    </div>

                    {/* Main Content */}
                    <div className="w-2/4 flex flex-col overflow-hidden border-r border-gray-200 pr-6">
                        <div className="flex flex-col gap-4 overflow-y-auto">
                            <h3 className="text-xl font-semibold mb-4 capitalize">
                                {activeSection.replace("-", " ")}
                            </h3>
                            {renderFormFields()}
                        </div>
                    </div>

                    {/* Right Panel */}
                    <div className="w-1/4 flex flex-col pl-6 overflow-y-auto">
                        <h2 className="text-2xl font-bold mb-4">Quick Tips</h2>
                        <div className="space-y-4 text-gray-600">
                            <p>🖋️ Use action verbs like "developed", "managed", "created"</p>
                            <p>📈 Include measurable achievements with numbers</p>
                            <p>🎯 Focus on relevant skills and experiences</p>
                            <p>📝 Keep paragraphs short and scannable</p>
                            <p>🔍 Double-check dates and contact information</p>
                        </div>
                    </div>
                </div>

                {/* Desktop Action Buttons */}
                <div className="hidden md:flex justify-center gap-4 mt-6 border-t pt-4">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-200 text-black rounded-md hover:bg-gray-300 transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSaveOnly}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                        disabled={loading}
                    >
                        {loading ? "Saving CV..." : "Save"}
                    </button>
                    <button
                        onClick={handleSaveAndClose}
                        className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                        disabled={loading}
                    >
                        Save and Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditCvModal;
