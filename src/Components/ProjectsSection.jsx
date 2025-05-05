import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

const ProjectsSection = () => {
    const projects = [
        {
            title: 'E-Commerce Platform',
            description: 'A full-featured online store with 3D product visualization and interactive product configurator.',
            technologies: ['React', 'Three.js', 'Node.js', 'MongoDB', 'WebGL'],
            demoLink: '#',
            codeLink: '#'
        },
        {
            title: 'Interactive Data Dashboard',
            description: '3D visualization of complex data sets with real-time filtering and dynamic chart generation.',
            technologies: ['D3.js', 'Three.js', 'Vue.js', 'Firebase', 'WebGL'],
            demoLink: '#',
            codeLink: '#'
        },
        {
            title: 'VR Portfolio Experience',
            description: 'A virtual reality tour showcasing creative work in an immersive 3D environment.',
            technologies: ['React', 'Three.js', 'WebXR', 'GLSL Shaders', 'Blender'],
            demoLink: '#',
            codeLink: '#'
        }
    ];

    return (
        <section id="projects" className="py-24 bg-gray-900 bg-opacity-60">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-indigo-400 to-teal-400 bg-clip-text text-transparent">
                            Featured Projects
                        </span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Explore my latest work combining modern web technologies with immersive 3D experiences.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>

                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-medium px-8 py-3 rounded-full transition-all"
                    >
                        See More Projects on GitHub
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectsSection;