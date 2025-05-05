import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import AboutSection from "../Components/AboutSection";
import SkillsSection from "../Components/SkillsSection";
import ProjectsSection from "../Components/ProjectsSection";
import ContactSection from "../Components/ContactSection";
import Footer from "../Components/Footer";
import AnimatedBackground from "../Components/AnimatedBackground";

const Home = () => {
    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector("header");
            if (header) {
                if (window.scrollY > 50) {
                    header.classList.add(
                        "bg-gray-900",
                        "bg-opacity-90",
                        "backdrop-blur-sm",
                        "shadow-md"
                    );
                } else {
                    header.classList.remove(
                        "bg-gray-900",
                        "bg-opacity-90",
                        "backdrop-blur-sm",
                        "shadow-md"
                    );
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white min-h-screen scroll-smooth font-sans">
           <AnimatedBackground />
            <Navbar />

            <main>
               
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <HeroSection />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <AboutSection />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <SkillsSection />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <ProjectsSection />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <ContactSection />
                </motion.div>
            </main>

            <Footer />
        </div>
    );
};

export default Home;
