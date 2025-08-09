import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiArrowRight, FiCode, FiDatabase, FiLayers } from 'react-icons/fi';
import { FiLinkedin, FiGithub } from 'react-icons/fi';


const HeroSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6 }
        }
    };


    return (
        <section className="bg-gradient-to-b from-[#0a1128] to-[#0f172a] min-h-screen flex items-center justify-center px-6 overflow-hidden">
            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between py-12">
                {/* Left Side: Text Content */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="w-full md:w-1/2 text-center md:text-left mt-12 md:mt-0"
                >
                    <motion.div variants={containerVariants} initial="hidden" animate="visible">
                        <motion.div
                            variants={itemVariants}
                            className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500 bg-opacity-20 text-indigo-300 text-sm uppercase mb-4 tracking-widest"
                        >
                            <span className="w-2 h-2 rounded-full bg-teal-400 mr-2 animate-pulse"></span>
                            Available for projects
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-4xl md:text-5xl font-bold text-white leading-tight"
                        >
                            I'm <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">Madhushani</span>,<br />a{' '}
                            <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
                                <TypeAnimation
                                    sequence={[
                                        'Web Developer',
                                        1000,
                                       // 'Full-Stack Developer',
                                        //1000,
                                        'Frontend Developer',
                                        1000,
                                        //'Backend Developer',
                                       // 1000,
                                        'UI/UX Enthusiast',
                                        1000,
                                    ]}
                                    wrapper="span"
                                    repeat={Infinity}
                                />
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-gray-400 mt-6 mb-6 text-lg max-w-lg leading-relaxed"
                        >
                            I craft seamless, responsive web applications with a focus on
                            intuitive design and scalable backend systems.
                            Exploring new technologies,I aim to integrate smart solutions
                            that make a real-world impact.
                        </motion.p>

                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-8 mb-8"
                        >
                            <a
                                href="https://www.linkedin.com/in/imesha-madhushani-21a499252/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 rounded-full border border-white/20 text-white hover:border-white/40 hover:bg-white/5 transition-all duration-300 font-semibold flex items-center justify-center gap-2"
                            >
                                <FiLinkedin className="text-xl" />
                                LinkedIn
                            </a>
                            <a
                                href="https://github.com/ImeshaMadhushani"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 rounded-full border border-white/20 text-white hover:border-white/40 hover:bg-white/5 transition-all duration-300 font-semibold flex items-center justify-center gap-2"
                            >
                                <FiGithub className="text-xl" />
                                GitHub
                            </a>
                        </motion.div>


                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row justify-center md:justify-start gap-4"
                        >
                            <a
                                href="#projects"
                                className="px-8 py-4 rounded-full text-white bg-gradient-to-r from-indigo-600 to-teal-500 hover:from-indigo-700 hover:to-teal-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-teal-500/20 flex items-center justify-center group"
                            >
                                View Projects
                                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="#contact"
                                className="px-8 py-4 rounded-full border-2 border-white/20 text-white hover:border-white/40 hover:bg-white/5 transition-all duration-300 font-semibold flex items-center justify-center"
                            >
                                Get In Touch
                            </a>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Right Side: Image + Animated Elements */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full md:w-1/2 relative"
                >
                    <div className="relative w-full max-w-md mx-auto">
                        {/* Glowing Background Layer */}
                        <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-indigo-500 via-blue-400 to-teal-400 opacity-30 blur-2xl z-0 animate-pulse-slow"></div>

                        {/* Floating Icons */}
                        <motion.div
                            className="absolute -left-8 top-1/4 bg-indigo-500 bg-opacity-20 p-3 rounded-2xl"
                            animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
                        >
                            <FiCode className="text-2xl text-indigo-300" />
                        </motion.div>

                        <motion.div
                            className="absolute -right-6 top-1/3 bg-teal-500 bg-opacity-20 p-3 rounded-2xl"
                            animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
                            transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", delay: 1 }}
                        >
                            <FiDatabase className="text-2xl text-teal-300" />
                        </motion.div>

                        <motion.div
                            className="absolute left-1/4 -bottom-6 bg-blue-500 bg-opacity-20 p-3 rounded-2xl"
                            animate={{ y: [0, 10, 0], rotate: [0, 3, 0] }}
                            transition={{ duration: 3.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
                        >
                            <FiLayers className="text-2xl text-blue-300" />
                        </motion.div>

                        {/* Image Container */}
                        <div className="relative rounded-2xl overflow-hidden border-4 border-[#1e293b] shadow-xl group z-10">
                            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/30 via-blue-400/20 to-teal-400/30 mix-blend-overlay z-10 pointer-events-none"></div>
                            <img
                                src="./assets/hero3.jpg"
                                alt="Madhushani"
                                className="rounded-xl w-full object-cover z-0 transform group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
