import { motion } from 'framer-motion';
import { FaReact, FaNode, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiMysql, SiFirebase, SiSpringboot, SiFigma } from 'react-icons/si';
import { DiJava, DiBootstrap, DiVisualstudio } from 'react-icons/di';
// import developerImg from '../assets/1.jpg'; // Adjust path as needed

const skills = [
    {
        category: 'Frontend',
        items: [
            { name: 'React', icon: <FaReact />, desc: 'JavaScript library for building UIs' },
            { name: 'JavaScript', icon: <FaJs />, desc: 'Core language for web development' },
            { name: 'HTML5', icon: <FaHtml5 />, desc: 'Markup language for the web' },
            { name: 'CSS3/SASS', icon: <FaCss3Alt />, desc: 'Stylesheet language for presentation' },
            { name: 'Tailwind CSS', icon: <SiTailwindcss />, desc: 'Utility-first CSS framework' },
            { name: 'Bootstrap', icon: <DiBootstrap />, desc: 'Popular CSS framework for responsive web design' },
        ]
    },
    {
        category: 'Backend',
        items: [
            { name: 'Node.js', icon: <FaNode />, desc: 'JavaScript runtime for server-side' },
            {
                name: 'Express', icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 40 40">
                        <path fill="#b0c1d4" d="M37.005,31.5c-0.975,0-1.91-0.463-2.502-1.237l-5.599-7.321l-5.6,7.321 c-0.592,0.774-1.527,1.237-2.502,1.237h-2.22l8.433-11.028L18.625,9.5h2.22c0.975,0,1.911,0.462,2.502,1.236l5.556,7.266 l5.557-7.266C35.051,9.962,35.987,9.5,36.962,9.5h2.22l-8.391,10.972L39.225,31.5H37.005z"></path><path fill="#66798f" d="M38.17,10l-8.008,10.472L38.213,31h-1.208c-0.825,0-1.604-0.385-2.105-1.04l-5.996-7.841 l-5.996,7.841c-0.501,0.656-1.28,1.04-2.105,1.04h-1.208l8.051-10.528L19.636,10h1.208c0.825,0,1.604,0.385,2.105,1.04l5.954,7.785 l5.954-7.785c0.501-0.656,1.28-1.04,2.105-1.04H38.17 M40.194,9H38.17h-1.208c-1.129,0-2.213,0.536-2.899,1.433l-5.159,6.747 l-5.159-6.747C23.058,9.536,21.974,9,20.845,9h-1.208h-2.024l1.229,1.607l7.544,9.865l-7.586,9.92L17.57,32h2.024h1.208 c1.129,0,2.213-0.536,2.899-1.433l5.202-6.803l5.202,6.803C34.791,31.464,35.875,32,37.005,32h1.208h2.024l-1.229-1.607 l-7.586-9.92l7.544-9.865L40.194,9L40.194,9z"></path><g><path fill="#b0c1d4" d="M10,32.5c-5.238,0-9.5-4.409-9.5-9.828v-4.345C0.5,12.909,4.762,8.5,10,8.5s9.5,4.408,9.5,9.827 v4.172L3.5,22.5v0.172c0,3.765,2.916,6.828,6.5,6.828c1.977,0,3.893-0.996,5.125-2.663c0.628-0.851,1.551-1.338,2.532-1.338h1.469 l-0.248,0.673C17.484,29.957,13.917,32.5,10,32.5z M16.5,19.5v-1.173c0-3.765-2.916-6.827-6.5-6.827s-6.5,3.062-6.5,6.827V19.5 H16.5z"></path><path fill="#66798f" d="M10,9c4.962,0,9,4.185,9,9.327V22L3,22v0.672C3,26.713,6.14,30,10,30 c2.188,0,4.223-1.102,5.527-2.866C16.035,26.447,16.802,26,17.657,26l0.752,0c0,0,0,0,0.001,0.001c-1.322,3.588-4.704,6-8.41,6 c-4.962,0-9-4.185-9-9.328v-4.345C1,13.185,5.038,9,10,9 M3,20h14v-1.673C17,14.287,13.86,11,10,11s-7,3.287-7,7.327V20 M10,8 C4.486,8,0,12.633,0,18.327v4.345C0,28.367,4.486,33,10,33c4.125,0,7.881-2.674,9.348-6.654l0.495-1.344L18.411,25L17.658,25 c-1.142,0-2.211,0.561-2.935,1.54C13.584,28.08,11.819,29,10,29c-3.204,0-5.83-2.663-5.992-6L19,23l1,0v-1v-3.672 C20,12.633,15.514,8,10,8L10,8z M4,19v-0.673C4,14.838,6.692,12,10,12s6,2.838,6,6.327V19H4L4,19z"></path></g>
                    </svg>
            ), desc: 'Web framework for Node.js' },
            { name: 'Spring Boot', icon: <SiSpringboot />, desc: 'Framework for building Java-based enterprise applications' },
            { name: 'Java', icon: <DiJava />, desc: 'Object-oriented programming language for backend' },
        ]
    },
    {
        category: 'Database',
        items: [
            { name: 'MongoDB', icon: <SiMongodb />, desc: 'NoSQL database for scalable applications' },
            { name: 'MySQL', icon: <SiMysql />, desc: 'Relational database management system' },
            { name: 'Firebase', icon: <SiFirebase />, desc: 'Platform for building web and mobile applications with backend services' },
        ]
    },
    {
        category: 'Software',
        items: [
            { name: 'VSCode', icon: <DiVisualstudio />, desc: 'Popular code editor for web development' },
            { name: 'MATLAB', icon: <SiMongodb />, desc: 'Software for numerical computing and data analysis' },
            { name: 'Axure RP9', icon :(
                <a href="https://www.axure.com/new-in-9" target="_blank" rel="noopener noreferrer">
            </a>), desc: 'Tool for wireframing and prototyping' },
            { name: 'Figma', icon: <SiFigma />, desc: 'Design tool for UI/UX design and collaboration' },
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
                                    <div className="flex flex-col gap-4">
                                        <h3 className="text-xl font-semibold text-teal-300 mb-4">{group.category}</h3>
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
                           {/*  <div className="mt-4 text-center">
                                <h3 className="text-xl font-semibold text-teal-300">Full-Stack Developer</h3>
                                <p className="text-gray-400 text-sm mt-1">
                                    Building scalable and modern web solutions with cutting-edge technologies.
                                </p>
                            </div> */}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
