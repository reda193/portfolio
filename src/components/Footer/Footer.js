import React from 'react';
import { FaGithub, FaLinkedin, FaHome } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
   return (
       <footer className="py-6">
           <div className="flex justify-center space-x-6">
               <a href="https://x.com/reedaazz" 
                  className="text-gray-400 hover:text-white transition-colors">
                   <FaXTwitter size={24}/>
               </a>
               <a href="https://github.com/reda193"
                  className="text-gray-400 hover:text-white transition-colors">
                   <FaGithub size={24}/>
               </a>
               <a href="https://linkedin.com/in/mohamed-reda12"
                  className="text-gray-400 hover:text-white transition-colors">
                   <FaLinkedin size={24}/>
               </a>
               <a href="moreda.dev"
                  className="text-gray-400 hover:text-white transition-colors">
                   <FaHome size={24}/>
               </a>
           </div>
       </footer>
   );
};

export default Footer;