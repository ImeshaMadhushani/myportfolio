import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
    {
        title: 'EstateHub – Real Estate Website',
        description:
            'Designed and developed a responsive real estate platform utilizing HTML, Bootstrap, and JavaScript, enabling users to browse listings and connect with agents.',
        technologies: ['HTML', 'Bootstrap', 'JavaScript'],
        demoLink: 'https://real-state-two-phi.vercel.app/',
        codeLink: 'https://github.com/ImeshaMadhushani/Real-State.git',
        image: '/assets/realstate.jpg',
    },
    {
        title: 'Clean Partner– Cleaning Service Landing Page',
description:
    'I designed and developed a visually appealing and accessible cleaning service landing page using HTML and CSS, focusing on smooth navigation and improved user interaction.',
        technologies: ['HTML', 'Bootstrap', 'JavaScript'],
        demoLink: 'https://cleaning-service-iota.vercel.app/',
        codeLink: 'https://github.com/ImeshaMadhushani/CleaningService.git',
        image: '/assets/cleaning.jpg',
    },
    {
        title: 'BurgerHouse– Burger Shop Landing Page ',
    description:
    'I developed a modern and engaging landing page for a burger shop using HTML, CSS, and JavaScript, integrating interactive elements to boost user engagement.',
        technologies: ['HTML', 'Bootstrap', 'JavaScript'],
        demoLink: 'https://burgur-house-olive.vercel.app/',
        codeLink: 'https://github.com/ImeshaMadhushani/BurgurHouse.git',
        image: '/assets/burger.jpg',
    },
    {
        title: 'BlogHub– Blog Website', 
        description:
            'Built a dynamic blog with React, Firebase, and Tailwind CSS! Users can log in, create/edit/delete posts, and enjoy a responsive layout. Real-time CRUD with Firebase and styled with Tailwind.',
        technologies: ['React', 'Tailwindcss', 'Firebase'],
        demoLink: 'https://blog-hub-blue.vercel.app/',
        codeLink: 'https://github.com/ImeshaMadhushani/BlogHub.git',
        image: '/assets/bloghub.jpg',
    },
];

const ProjectsSection = () => {
    return (
        <section id="projects" className="py-12 px-4 from-black via-gray-900 to-black text-white">
            <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;
