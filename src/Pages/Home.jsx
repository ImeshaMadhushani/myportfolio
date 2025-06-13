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
import CertificatesSection from "../Components/CertificatesSection";
import EducationSection from "../Components/EducationSection";

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
                        "shadow-md",
                        "transition-colors",
                        "duration-300",
                        "ease-in-out"
                    );
                } else {
                    header.classList.remove(
                        "bg-gray-900",
                        "bg-opacity-90",
                        "backdrop-blur-sm",
                        "shadow-md",
                        "transition-colors",
                        "duration-300",
                        "ease-in-out"
                    );
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Motion variants for reuse
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white min-h-screen scroll-smooth font-sans">
            <AnimatedBackground />
            <Navbar />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 md:space-y-32 py-12 md:py-20">
                {/* Hero Section */}
                <motion.section
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    transition={{ duration: 1, ease: "easeOut" }}
                    aria-label="Hero Section"
                >
                    <HeroSection />
                </motion.section>

                {/* About Section */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeUp}
                    transition={{ duration: 0.8 }}
                    aria-label="About Me Section"
                >
                    <AboutSection />
                </motion.section>

                {/* Education Section */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeUp}
                    transition={{ duration: 0.8 }}
                    aria-label="Education Section"
                >
                    <EducationSection />
                </motion.section>

                {/* Skills Section */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeUp}
                    transition={{ duration: 0.8 }}
                    aria-label="Skills Section"
                >
                    <SkillsSection />
                </motion.section>

                {/* Projects Section */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeUp}
                    transition={{ duration: 0.8 }}
                    aria-label="Projects Section"
                >
                    <ProjectsSection />
                </motion.section>

                {/* Certificates Section */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeUp}
                    transition={{ duration: 0.8 }}
                    aria-label="Certificates Section"
                >
                    <CertificatesSection />
                </motion.section>

                {/* Contact Section */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeUp}
                    transition={{ duration: 0.8 }}
                    aria-label="Contact Section"
                >
                    <ContactSection />
                </motion.section>
            </main>

            <Footer />
        </div>
    );
};

export default Home;
