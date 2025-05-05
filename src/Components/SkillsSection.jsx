import { motion } from 'framer-motion';
import { FaReact, FaNode, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb } from 'react-icons/si';
//import developerImg from '../assets/1.jpg'; // Adjust path as needed

const skills = [
    {
        items: [
            { name: 'React', icon: <FaReact />, desc: 'JavaScript library for building UIs' },
            { name: 'JavaScript', icon: <FaJs />, desc: 'Core language for web development' },
            { name: 'HTML5', icon: <FaHtml5 />, desc: 'Markup language for the web' },
            { name: 'CSS3/SASS', icon: <FaCss3Alt />, desc: 'Stylesheet language for presentation' },
            { name: 'Tailwind CSS', icon: <SiTailwindcss />, desc: 'Utility-first CSS framework' },
            { name: 'Node.js', icon: <FaNode />, desc: 'JavaScript runtime for server-side' },
            { name: 'Express', icon: <FaNode />, desc: 'Web framework for Node.js' },
            { name: 'MongoDB', icon: <SiMongodb />, desc: 'NoSQL database' },
        ]
    }
];

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20, rotateX: -10 },
    show: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: { type: 'spring', stiffness: 70 },
    },
};

const SkillsSection = () => {
    return (
        <section id="skills" className="py-24 bg-gradient-to-br from-black via-gray-900 to-black text-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side: Skills List */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="order-2 lg:order-1"
                    >
                        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-400 bg-clip-text text-transparent drop-shadow-lg">
                                Technical Skills
                            </span>
                        </h2>

                        <p className="text-lg text-gray-400 mb-10 max-w-xl">
                            Specialized in building modern, responsive, and immersive web applications with industry-standard technologies.
                        </p>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="space-y-10"
                        >
                            {skills.map((group, index) => (
                                <motion.div key={index} variants={itemVariants}>
                                    <div className="flex flex-wrap gap-4">
                                        {group.items.map((skill, i) => (
                                            <motion.div
                                                key={i}
                                                whileHover={{ scale: 1.08, rotate: 1 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="relative bg-white/10 backdrop-blur-md border border-white/20 px-5 py-3 rounded-xl flex items-center space-x-3 text-white transition-all duration-300 shadow-lg group"
                                            >
                                                <span className="text-xl text-teal-300 drop-shadow">{skill.icon}</span>
                                                <span className="text-sm font-medium">{skill.name}</span>

                                                <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs bg-teal-700 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 whitespace-nowrap shadow-lg">
                                                    {skill.desc}
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Side: Developer Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="order-1 lg:order-2 flex justify-center items-center"
                    >
                        <motion.div
                            whileHover={{ rotateY: 10 }}
                            transition={{ type: "spring", stiffness: 100 }}
                            className="w-full max-w-md p-6 bg-white/5 rounded-2xl backdrop-blur-lg border border-white/10 shadow-2xl"
                        >
                            <img
                                src='../assets/1.jpg' 
                                alt="Developer working"
                                className="w-full h-auto object-contain rounded-xl"
                            />
                            <div className="mt-4 text-center">
                                <h3 className="text-xl font-semibold text-teal-300">Full-Stack Developer</h3>
                                <p className="text-gray-400 text-sm mt-1">
                                    Building scalable and modern web solutions with cutting-edge technologies.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
