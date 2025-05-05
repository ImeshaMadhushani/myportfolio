import { motion } from 'framer-motion';

const AboutSection = () => {
    return (
        <section id="about" className="py-24 bg-gray-900 bg-opacity-60">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-indigo-400 to-teal-400 bg-clip-text text-transparent">
                                About Me
                            </span>
                        </h2>
                    </motion.div>

                    <div className="flex flex-col md:flex-row gap-10 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="md:w-1/3"
                        >
                            <div className="relative">
                                <div className="w-64 h-64 md:w-full md:h-auto aspect-square rounded-full overflow-hidden border-4 border-indigo-500/30 p-1">
                                    <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-indigo-600 to-teal-500">
                                        {/* Replace with actual image */}
                                        <div className="w-full h-full bg-gray-700 flex items-center justify-center text-white">
                                            <img
                                                src="./assets/hero.jpg"
                                                alt="Madhushani - Backend Developer"
                                                className="rounded-xl w-full object-cover z-0 transform group-hover:scale-105 transition-transform duration-700"
                                            />
                                        </div>
                                    </div>
                                </div>

                               {/*  <div className="absolute -bottom-4 -right-4 w-28 h-28 rounded-full bg-gray-800 flex items-center justify-center border-4 border-gray-900">
                                    <span className="font-bold text-gray-300">5+ Years Experience</span>
                                </div> */}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="md:w-2/3"
                        >
                            <h3 className="text-2xl font-bold text-white mb-4">Passionate IT undergraduate blending frontend, backend, UI/UX, and AI to build innovative, user-focused digital experiences.</h3>

                            <div className="space-y-4 text-gray-300">
                                <p>
                                    Hi, I'm an IT undergraduate at the University of Jaffna, deeply passionate about technology and innovation. I specialize in building user-centric digital solutions through frontend and full-stack development. Crafting seamless, responsive, and interactive web applications is something I truly enjoy, as it allows me to bring ideas to life with both functionality and creativity.
                                </p>

                                <p>
                                    Beyond development, I have a strong interest in UI/UX design. I strive to design interfaces that are not only visually appealing but also intuitive and user-friendly. I believe that great design is at the heart of a successful product, and I continuously explore new trends and tools to improve my design thinking and process.
                                </p>

                                <p>
                                    In addition, I'm expanding my expertise into backend development and Artificial Intelligence. I aim to build robust and scalable systems that work efficiently with modern frontends, while also exploring how intelligent technologies can enhance user experience and automate processes. I'm always eager to learn, take on challenges, and contribute to projects that make a meaningful impact.
                                </p>
                            </div>

                            <div className="mt-6 flex gap-4">
                                <button
                                    type="button"
                                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full transition-all"
                                    onClick={() => {
                                        const link = document.createElement('a');
                                        link.href = '/assets/cv.pdf'; // Path to your resume in the public folder
                                        link.download = 'My_Resume.pdf'; // Name for the downloaded file
                                        document.body.appendChild(link);
                                        link.click();
                                        document.body.removeChild(link);
                                    }}
                                >
                                    Download Resume
                                </button>

                                <button
                                    type="button"
                                    className="bg-transparent border border-white/30 hover:border-white/60 text-white px-6 py-2 rounded-full transition-all"
                                    onClick={() => {
                                        document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
                                    }}
                                >
                                    Contact Me
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;