import { useState } from 'react';
import kusaImg from '../../images/kusatypes/kusatypes.png';
import kusaImg1 from '../../images/kusatypes/kusatypes1.png';
import kusaImg2 from '../../images/kusatypes/kusatypes2.png';
import kusaImg3 from '../../images/kusatypes/kusatypes3.png';
import kusaImg4 from '../../images/kusatypes/kusatypes4.png';
import lastfm1 from '../../images/lastfm/lastfm1.png';
import lastfm2 from '../../images/lastfm/lastfm2.png';
import lastfm3 from '../../images/lastfm/lastfm3.png';
import lastfm4 from '../../images/lastfm/lastfm4.png';
import { FaGithub } from "react-icons/fa";

const ImageModal = ({ src, alt, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={onClose}>
      <img src={src} alt={alt} className="max-h-[90vh] max-w-[90vw]" />
    </div>
   );

const ProjectImage = ({ src, alt }) => {
 const [isOpen, setIsOpen] = useState(false);
 return (
   <>
     <img 
       src={src} 
       alt={alt} 
       className="cursor-pointer rounded" 
       onClick={() => setIsOpen(true)}
     />
     {isOpen && <ImageModal src={src} alt={alt} onClose={() => setIsOpen(false)} />}
   </>
 );
};

const Projects = () => {
    const [expandedDetails, setExpandedDetails] = useState(null);
    const [expandedImages, setExpandedImages] = useState(null);
    const projects = [
        {
            name: "LeetDuels - Compeititve LeetCode game",
            stack: ['Next.js, TypeScript, PostgreSQL, Vercel, Neon.tech, Docker'],
            description: ['A real-time competitive coding game where users compete against each other to see who can finish quicker, and also more efficient.'],
            github: "https://github.com/reda193/leetduels",
            details: [
                "Building a real-time competitive game which allows two people to compete against eachother to see who can solve questions quicker, and more efficient",
                "Implementing ELO system to track user's rating, with aaccurate results to implement a ranking system",
                "Current in progress in very early development"
            ]
        
        },
        {
            name: "KusaTypes - MonkeyType Clone",
            stack: ['React.js, JavaScript, Node.js, Express.js, MongoDB, DigitalOcean, Zoho'],
            github: "https://github.com/reda193/kusa-types",
            website: "https://kusatypes.com",
            description: "A typing test application measuring speed and accuracy with built in user authentication, user profile, and leaderboard.",
            details: [
                "Built a comprehensive typing application with multiple modes - timed tests, word count challenges, and literary quotes",
                "Advanced analytics tracking WPM, accuracy, character count and detailed keystroke metrics",
                "Secure user authentication system using Node/Express and MongoDB for data persistence",
                "Performance tracking dashboard showing 20-game history, displaying WPM trends, accuracy statistics and personal records",
                "Global leaderboard system featuring top 100 users ranked by WPM",
                "Deployed and hosted on DigitalOcean infrastructure with automated CI/CD pipeline"
             ],
            images: [kusaImg, kusaImg1, kusaImg2, kusaImg3, kusaImg4]
        },
        {
            name: "GUI Interface for RF Routers @ Evertz Microsystems",
            stack: ['Python, Qt'],
            description: "Engineered GUI testing framework that automatically generates comprehensive test reports, reducing analysis time and improving team decision-making through clear, actionable results visualization. Done at Evertz Microsystems so images/github is not available.",
            website: "",
            github: "",
            details: [
                "Developed desktop application mirroring web functionality for streamlined device management",
                "Implemented dual SNMP/API architecture for enhanced monitoring and testing capabilities",
                "Built secure authentication for SNMP V1/V3 protocols with user-configurable settings",
                "Created intuitive visualization system with dynamic graphs and tables for test result analysis",
                "Optimized SNMP polling performance, achieving faster response times than existing company solutions"
             ],
            images: []

         },
    
        {
            name: "LastFM Discord Bot",
            stack: ['JavaScript, Node.js, MySQL, DigitalOcean'],
            description: "Feature-rich Discord bot leveraging Last.FM API to track and display music listening statistics across server members",
            website: "",
            github: "https://github.com/reda193/lastfm-discordbot",
            details: [
                "Serving 150+ active users with real-time music statistics and listening history integration",
                "Built secure MySQL database architecture for Discord-LastFM account mapping",
                "Implemented comprehensive command system for account management and statistics display",
                "Integrated Google and YouTube APIs for seamless music discovery and video sharing",
                "Deployed on DigitalOcean with PM2 process manager ensuring 24/7 uptime and reliability"
            ],
            images: [lastfm1, lastfm2, lastfm3, lastfm4]

         }
    ];
 
    return (
        <div className="space-y-6">
            {projects.map((project, index) => (
                <div key={index}>
                    <div className="flex items-center gap-4 border-b pb-2">
                        <a href={project.website || "#"} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className={`text-2xl font-bold ${!project.website && 'pointer-events-none'}`}>
                            {project.name}
                        </a>
                            {project.github && (
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                    <FaGithub className="text-2xl" />
                                </a>
                            )}
                    </div>
                    <p className="my-4"><h3 className='font-bold'>Project Description</h3>{project.description}</p>
                    <p className='my-4'><h3 className='font-bold'>Project Stack</h3>{project.stack}</p>
                    
                    <div className="space-y-2">
                        <div 
                            className="flex items-center cursor-pointer"
                            onClick={() => setExpandedDetails(expandedDetails === index ? null : index)}
                        >
                            <h3 className="font-bold">Project Details</h3>
                            <span className="ml-2">{expandedDetails === index ? '-' : '+'}</span>
                        </div>
                        {expandedDetails === index && (
                            <ul className="list-disc ml-6">
                                {project.details.map((detail, idx) => (
                                    <li key={idx}>{detail}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                    {project.images?.length > 0 && ( 
                        <div className="mt-4">
                            <div 
                                className="flex items-center cursor-pointer"
                                onClick={() => setExpandedImages(expandedImages === index ? null : index)}
                            >
                                <h3 className="font-bold">Project Images</h3>
                                <span className="ml-2">{expandedImages === index ? '-' : '+'}</span>
                            </div>
                            {expandedImages === index && (
                                <div className="grid grid-cols-2 gap-4 mt-2">
                                    {project.images.map((img, idx) => (
                                        <ProjectImage 
                                            key={idx}
                                            src={img}
                                            alt={`${project.name} ${idx + 1}`}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
 };

export default Projects;