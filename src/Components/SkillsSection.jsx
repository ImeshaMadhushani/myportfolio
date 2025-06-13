import { motion } from 'framer-motion';
import { FaReact, FaNode, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiMysql, SiFirebase, SiSpringboot, SiFigma } from 'react-icons/si';
import { DiJava, DiBootstrap, DiVisualstudio } from 'react-icons/di';


const skills = [
    {
        category: 'Frontend',
        items: [
            { name: 'React', icon: <FaReact size={24} />, desc: 'JavaScript library for building UIs' },
            { name: 'JavaScript', icon: <FaJs size={24} />, desc: 'Core language for web development' },
            { name: 'HTML5', icon: <FaHtml5 size={24} />, desc: 'Markup language for the web' },
            { name: 'CSS3/SASS', icon: <FaCss3Alt size={24} />, desc: 'Stylesheet language for presentation' },
            { name: 'Tailwind CSS', icon: <SiTailwindcss size={24} />, desc: 'Utility-first CSS framework' },
            { name: 'Bootstrap', icon: <DiBootstrap size={24} />, desc: 'Responsive design framework' },
        ],
    },
    {
        category: 'Backend',
        items: [
            { name: 'Node.js', icon: <FaNode size={24} />, desc: 'JavaScript runtime for server-side' },
            { name: 'Express', icon: <span className="text-lg font-bold text-cyan-400">Ex</span>, desc: 'Web framework for Node.js' },
            { name: 'Spring Boot', icon: <SiSpringboot size={24} />, desc: 'Java backend framework' },
            { name: 'Java', icon: <DiJava size={24} />, desc: 'OOP language for backend services' },
        ],
    },
    {
        category: 'Database',
        items: [
            { name: 'MongoDB', icon: <SiMongodb size={24} />, desc: 'NoSQL database' },
            { name: 'MySQL', icon: <SiMysql size={24} />, desc: 'Relational database system' },
            { name: 'Firebase', icon: <SiFirebase size={24} />, desc: 'Cloud-based backend platform' },
        ],
    },
    {
        category: 'Software',
        items: [
            { name: 'VSCode', icon: <DiVisualstudio size={24} />, desc: 'Lightweight code editor' },
            { name: 'MATLAB', icon: <span className="text-lg font-bold text-yellow-300">ML</span>, desc: 'Numerical computing tool' },
            { name: 'Axure RP9', icon: <span className="text-lg font-bold text-indigo-400">Ax</span>, desc: 'UI/UX prototyping tool' },
            { name: 'Figma', icon: <SiFigma size={24} />, desc: 'Collaborative design platform' },
        ],
    }
];

const containerVariants = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.3 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const SkillsSection = () => {
    return (
        <section
            id="skills"
            className="py-28 bg-gradient-to-b from-gray-950 via-black to-gray-900 text-white"
        >
            <div className="container mx-auto px-6 lg:px-20">
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    {/* Heading */}
                    <motion.h2
                        variants={itemVariants}
                        className="text-5xl md:text-6xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-purple-500 animate-pulse"
                    >
                        My Tech Stack
                    </motion.h2>

                    {/* Skill Cards */}
                    <div className="grid gap-12 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
                        {skills.map((group, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-white/5 p-6 rounded-2xl shadow-md border border-white/10 hover:shadow-teal-500/20 transition duration-300"
                            >
                                <h3 className="text-xl font-semibold text-teal-300 mb-4 border-b border-teal-500 pb-2">
                                    {group.category}
                                </h3>
                                <div className="flex flex-wrap gap-4">
                                    {group.items.map((skill, i) => (
                                        <div
                                            key={i}
                                            className="relative group flex flex-col items-center p-3 w-28 h-28 bg-white/10 rounded-xl border border-white/10 hover:border-teal-500 hover:shadow-md hover:shadow-teal-400/30 transition-all"
                                        >
                                            <span className="text-2xl text-teal-300 mb-1">{skill.icon}</span>
                                            <span className="text-sm font-medium text-center">{skill.name}</span>
                                            {/* Tooltip */}
                                            <span className="absolute bottom-full mb-2 text-[10px] px-2 py-1 bg-black/80 text-white rounded shadow-md opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap z-10">
                                                {skill.desc}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SkillsSection;
