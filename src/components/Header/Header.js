import { React, useEffect, useState } from 'react';
import axios from '../../api/axios';
import { PiHandWaving } from "react-icons/pi";

const Header = () => {
    const [currentTrack, setCurrentTrack] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/lastfm/recent-tracks');
                const track = response.data.recenttracks.track[0];
                setCurrentTrack(track);
            } catch(error) {
                console.log('Error:', error);
            }
        }; 
        fetchData();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center max-w-3xl mx-auto mb-20">
            <div className="text-3xl font-bold border-b-2 pb-4 w-full text-center mb-8">
                <div className="flex items-center justify-center gap-2">
                    <PiHandWaving />
                    <h1>Hello, I'm Mohamed Reda!</h1>
                </div>
            </div>
            <div className="space-y-6 text-lg text-center px-4">
                <p>
                <span className="font-semibold text-blue-400">Junior QA Support & DevOps Engineer</span> with the desire to learn as much as possible. Just graduated with my Advanced Diploma in Software Development and going to McMaster to complete my bachelors in Software Engineering.
                </p>

                <p>
                    Currently working on at <span className="font-semibold text-blue-400">TV2 Consulting</span>.
                </p>
            </div>

            {currentTrack && (
                <a href="https://www.last.fm/user/moredaa" 
                    className="mt-8 w-full max-w-md"
                    target="_blank" 
                    rel="noopener noreferrer">
                    <div className="flex items-center space-x-4 p-3 hover:bg-gray-700 transition-all duration-300 rounded-lg">
                        <img 
                            src={currentTrack.image[2]['#text']} 
                            alt={currentTrack.name}
                            className="w-16 h-16 rounded-md shadow-lg"
                        />
                        <div className="flex flex-col">
                            <p className="text-sm text-gray-400">Currently listening to:</p>
                            <p className="font-bold text-lg">{currentTrack.name}</p>
                            <p className="text-blue-400">{currentTrack.artist['#text']}</p>
                        </div>
                    </div>
                </a>
            )}
        </div>
    );
};

export default Header;