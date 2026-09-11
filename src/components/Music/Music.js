import { useEffect, useState } from "react";
import axios from "../../api/axios";
const Music = () => {
    const [data, setData] = useState([]);
    const [category, setCategory] = useState('albums');
    const [period, setPeriod] = useState('1month');

    const timeRanges = [
        { label: '7 days', value: '7day' },
        { label: '1 month', value: '1month' },
        { label: '3 months', value: '3month' },
        { label: '6 months', value: '6month' },
        { label: '12 months', value: '12month' },
        { label: 'Overall', value: 'overall' }
    ];

    const categories = [
        { label: 'Top Albums', value: 'albums', endpoint: 'top-albums' },
        { label: 'Top Tracks', value: 'tracks', endpoint: 'top-tracks' },
        { label: 'Top Artists', value: 'artists', endpoint: 'top-artists' }
    ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const selectedCategory = categories.find(c => c.value === category);
                const response = await axios.get(`/lastfm/${selectedCategory.endpoint}/${period}`);
                
                // Handle the response based on category
                if (category === 'albums') {
                    setData(response.data.topalbums.album || []);
                } else if (category === 'tracks') {
                    setData(response.data.toptracks.track || []);
                } else if (category === 'artists') {
                    setData(response.data.topartists.artist || []);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };
        fetchData();
    }, [category, period]);

    const renderItem = (item) => (
        <div className="flex items-center space-x-4">
            {item.image && (
                <img 
                    src={item.image[2]['#text']} 
                    alt={item.name}
                    className="w-24 h-24 object-cover"
                />
            )}
            <div>
                <h3 className="font-bold">{item.name}</h3>
                {category !== 'artists' && item.artist && (
                    <p className="text-gray-300">{item.artist.name}</p>
                )}
                <p className="text-sm">Plays: {item.playcount}</p>
            </div>
        </div>
    );

    return (
        <div className="space-y-6">
            <div className="flex flex-col space-y-4 mb-6">
                <select 
                    value={category} 
                    onChange={(e) => setCategory(e.target.value)}
                    className="bg-gray-700 text-white p-2 rounded"
                >
                    {categories.map((cat) => (
                        <option key={cat.value} value={cat.value}>
                            {cat.label}
                        </option>
                    ))}
                </select>

                <div className="flex flex-wrap gap-2">
                    {timeRanges.map((range) => (
                        <button
                            key={range.value}
                            onClick={() => setPeriod(range.value)}
                            className={`px-4 py-2 rounded ${
                                period === range.value 
                                    ? 'bg-gray-800 text-white transition-colors' 
                                    : 'bg-gray-700 text-white hover:bg-gray-600'
                            }`}
                        >
                            {range.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.map((item, index) => (
                    <div key={index}>
                        {renderItem(item)}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Music;