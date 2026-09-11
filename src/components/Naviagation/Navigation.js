import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    const linkStyle = ({ isActive }) => 
        `block text-lg hover:text-blue-400 transition-colors duration-300 ${
            isActive ? 'text-blue-400' : 'text-gray-200'
        }`;
    
    return (
        <nav className="md:w-48 md:mr-20">
            <ul className="flex md:block flex-wrap gap-4 md:gap-0 md:space-y-3">
                <li><NavLink to="/" className={linkStyle}>Home</NavLink></li>
                <li><NavLink to="/about" className={linkStyle}>About</NavLink></li>
                <li><NavLink to="/skills" className={linkStyle}>Skills</NavLink></li>
                <li><NavLink to="/job" className={linkStyle}>Experience</NavLink></li>
                <li><NavLink to="/projects" className={linkStyle}>Projects</NavLink></li>
                <li><NavLink to="/music" className={linkStyle}>Music</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navigation;