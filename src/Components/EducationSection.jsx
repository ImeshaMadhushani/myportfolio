import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const educationData = [
    {
        degree: 'B.Sc. in Information Technology',
        institution: 'University of Jaffna',
        period: '2022 – Present',
        location: 'Sri Lanka',
        /* description:
            'Including software development, databases, and systems design. Actively engaged in full-stack projects and UI/UX design.', */
    },
    {
        degree: 'G.C.E. Advanced Level (A/L)',
        institution: 'Sri Sumangala College, Wariyapola',
        period: '2017 – 2019',
        location: 'Sri Lanka',
        /* description:
            'Completed A/Ls in Physical Science stream with focus on Mathematics, Physics, and Chemistry.', */
    },
    {
        degree: 'Diploma in Human Resource Management',
        institution: 'LPEC Campus',
        period: '2023 – 2024',
        location: 'Sri Lanka',
        /* description:
            'Completed A/Ls in Physical Science stream with focus on Mathematics, Physics, and Chemistry.', */
    },
];

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: 'easeOut' },
    },
};

const EducationSection = () => {
    return (
        <section
            id="education"
            className="relative py-28 px-6 lg:px-16 bg-gradient-to-b from-black via-gray-900 to-[#0f0f0f] text-white"
        >
            <motion.div
                className="max-w-6xl mx-auto"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
            >
                {/* Heading */}
                <motion.div variants={itemVariants} className="text-center mb-16">
                    <h2 className="text-5xl font-extrabold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent drop-shadow-md">
                        My Academic Story
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-gray-400 text-lg">
                        A journey of academic excellence and technical growth.
                    </p>
                </motion.div>

                {/* Timeline Container */}
                <div className="relative before:absolute before:top-0 before:left-8 before:h-full before:w-1 before:bg-teal-500 before:opacity-30">
                    {educationData.map((edu, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            className="relative mb-14 pl-20 last:mb-0"
                        >
                            {/* Circle & Icon */}
                            <span className="absolute left-1 top-2 w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center shadow-lg shadow-teal-600/50">
                                <FaGraduationCap className="text-white text-xl" />
                            </span>

                            {/* Content Box */}
                            <div className="bg-white/5 border border-white/20 rounded-xl p-6 md:p-8 shadow-md hover:shadow-teal-500/40 transition-shadow duration-300">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                                    <h3 className="text-2xl font-semibold text-teal-400 mb-2 md:mb-0">
                                        {edu.degree}
                                    </h3>
                                    <span className="text-sm text-gray-400 font-mono">
                                        {edu.period}
                                    </span>
                                </div>
                                <h4 className="text-md font-medium text-gray-300 mt-1">
                                    {edu.institution}, {edu.location}
                                </h4>
                                <p className="mt-4 text-gray-400 leading-relaxed">{edu.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default EducationSection;
