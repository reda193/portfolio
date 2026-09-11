import { React, useState } from 'react';
import { FaCode, FaLayerGroup, FaDatabase, FaTools } from 'react-icons/fa';

const Skills = () => {
    const categories = [
        {
            key: 'languages',
            label: 'Languages',
            icon: FaCode,
            accent: 'text-blue-400',
            border: 'border-blue-400',
            items: ['Python', 'JavaScript', 'TypeScript'],
        },
        {
            key: 'frameworks',
            label: 'Frameworks & Libraries',
            icon: FaLayerGroup,
            accent: 'text-purple-400',
            border: 'border-purple-400',
            items: ['Next.js', 'React.js', 'Node.js', 'Selenium', 'Playwright', 'Jest', 'Cypress', 'DeepFace', 'FastAPI', 'Prisma', 'Tailwind CSS', 'PyTorch', 'Hugging Face Transformers', 'LangChain', 'OpenAI SDK', 'Anthropic SDK', 'LlamaIndex'],
        },
        {
            key: 'databases',
            label: 'Databases',
            icon: FaDatabase,
            accent: 'text-green-400',
            border: 'border-green-400',
            items: ['MongoDB', 'PostgreSQL', 'MySQL'],
        },
        {
            key: 'tools',
            label: 'Technologies',
            icon: FaTools,
            accent: 'text-orange-400',
            border: 'border-orange-400',
            items: ['Azure DevOps', 'AWS', 'Qt Creator', 'Git', 'Zendesk', 'Jira', 'DigitalOcean', 'Grafana', 'Kibana', 'Prometheus', 'Elasticsearch', 'RabbitMQ', 'Jenkins', 'Linux', 'Desk365'],
        },
    ];

    const [selectedCategory, setSelectedCategory] = useState('languages');
    const active = categories.find((c) => c.key === selectedCategory);

    return (
        <div className="space-y-8">
            <h1 className="text-2xl font-bold underline underline-offset-4 text-center">
                Skills
            </h1>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {categories.map((category) => {
                    const Icon = category.icon;
                    const isActive = selectedCategory === category.key;
                    return (
                        <button
                            key={category.key}
                            onClick={() => setSelectedCategory(category.key)}
                            className={`flex flex-col items-center justify-center gap-2 px-4 py-4 rounded-xl border transition duration-300 ease-in-out
                                ${isActive
                                    ? `bg-[#2a2a2a] ${category.border}`
                                    : 'bg-[#222222] border-transparent hover:bg-[#2a2a2a]'}`}
                        >
                            <Icon className={`text-2xl ${isActive ? category.accent : 'text-gray-400'}`} />
                            <span className={`text-sm font-medium text-center ${isActive ? 'text-white' : 'text-gray-300'}`}>
                                {category.label}
                            </span>
                        </button>
                    );
                })}
            </div>

            <div className="bg-[#2a2a2a] rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-2 mb-6">
                    <active.icon className={`text-xl ${active.accent}`} />
                    <h2 className="text-xl font-bold">{active.label}</h2>
                    <span className="text-sm text-gray-400 ml-auto">{active.items.length} skills</span>
                </div>
                <div className="flex flex-wrap gap-3">
                    {active.items.map((item) => (
                        <div
                            key={item}
                            className="bg-[#222222] border border-gray-700 px-4 py-2 rounded-full text-gray-200 hover:border-gray-500 hover:-translate-y-0.5 transition-all duration-200"
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
