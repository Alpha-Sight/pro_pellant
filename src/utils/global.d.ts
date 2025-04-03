export interface Detail {
    jobTitle: string;
    firstName: string;
    lastName: string;
    email: string;
    address: string;
}

export interface Experience {
    jobTitle: string;
    company: string;
    period: { start: string; end: string };
    location: string;
    duties: string[];
}

export interface Education {
    school: string;
    degree: string;
    period: { start: string; end: string };
    location: string;
}

export interface CVData {
    details: Detail;
    experiences: Experience[];
    educations: Education[];
    skills: string[];
    jobDescription: string;
    professionalSummary: string;
    awards: string[];
    certifications: string[];
}
