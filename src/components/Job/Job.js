import { useState } from "react";

const Job = () => {
    // Initialize expanded state as an object with all jobs collapsed
    const [expandedJobs, setExpandedJobs] = useState({});

    const jobDetails = [{
        title: "Junior QA Support & DevOps Engineer",
        company: "TV2 Consulting",
        location: "Remote",
        period: "Jan 2026 - Present",
        responsibilities: [
            "Designed and executed 100+ black-box test plans and test cases for an AI-driven test automation platform, covering end-to-end and regression testing on Android boxes and mobile, reducing manual QA effort by 90%",
            "Monitored and validated CI/CD builds in Azure DevOps across 3 production releases and Docker Swarm upgrades for 10,000+ subscribers, proactively catching issues in staging before deployment",
            "Acted as technical point of contact for escalated support tickets during SEV1 on-call rotations (24-hour), collaborating with support and engineering teams to diagnose, reproduce, and route issues to resolution",
            "Resolved a telemetry/logging outage affecting 10,000+ subscribers via NGINX config fixes, restoring monitoring with zero infrastructure changes"
        ]
    },
    {
        title: "QA Engineer Intern",
        company: "TV2 Consulting",
        location: "Remote",
        period: "Apr 2025 - Dec 2025",
        responsibilities: [
            "Conducted regression testing ahead of releases and triaged 100+ SEV1-SEV3 support tickets using Grafana, Kibana, and Prometheus, cutting resolution time by 40% with zero SLA violations",
            "Identified, documented, and tracked 200+ bugs through resolution in Azure DevOps, authoring 100+ bug reports and reducing bug backlog by 70%",
            "Validated 4 production overnight upgrades, identifying 3 critical pre-deployment issues to ensure no downtime",
            "Collaborated with engineers to translate feature requirements into 75+ black-box test cases for an LLM-driven test automation platform, providing feedback to improve overall quality"
        ]
    },
    {
        title: "Fullstack Developer Intern",
        company: "LulAI",
        location: "Remote",
        period: "Jan 2025 - Apr 2025",
        responsibilities: [
            "Defined technical requirements and designed CI/CD pipeline in Vercel with GitHub Actions, leading to LevelUP Accelerator acceptance",
            "Developed RESTful APIs with Next.js, PostgreSQL, Prisma for authentication and a multi-tier dashboard"
        ]
    },
    {
        title: "Research Assistant",
        company: "Canadian Armed Forces Museum",
        location: "Remote",
        period: "Jan 2025 - Apr 2025",
        responsibilities: [
            "Built facial recognition system with Python, DeepFace, and FaceNet 512 for military archive identification",
            "Developed matching algorithm incorporating facial embeddings and data, improving accuracy by 30%"
        ]
    },
    {
        title: "Product Verification Specialist Intern",
        company: "Evertz Microsystems",
        location: "Burlington, Ontario",
        period: "Apr 2024 - Dec 2024",
        responsibilities: [
            "Validated 6 RF products via standardized testing in Jira/Excel, collaborating closely with engineers across 2 releases to align on requirements and quality criteria",
            "Created and maintained automated regression test scripts with Python and Selenium, improving RF testing coverage and reducing testing time by 30%"
        ]
    }];

    const toggleJob = (index) => {
        setExpandedJobs(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    return (
        <div className="space-y-8">
            {jobDetails.map((job, index) => (
                <section key={index} className="space-y-4">
                    <div
                        className="flex items-center justify-between cursor-pointer hover:bg-gray-800 p-4 rounded-lg transition-colors duration-200"
                        onClick={() => toggleJob(index)}
                    >
                        <h1 className="text-2xl font-bold">{job.title}</h1>
                        <span className="ml-4 text-xl">
                            {expandedJobs[index] ? '−' : '+'}
                        </span>
                      </div>

                    <p className="text-gray-300 italic px-4">
                        {job.company} | {job.location} | {job.period}
                    </p>

                    {expandedJobs[index] && (
                        <ul className="list-disc ml-10 space-y-2 px-4">
                            {job.responsibilities.map((responsibility, respIndex) => (
                                <li key={respIndex} className="text-lg text-gray-200">
                                    {responsibility}
                                </li>
                            ))}
                        </ul>
                    )}
                </section>
            ))}
        </div>
    );
};

export default Job;