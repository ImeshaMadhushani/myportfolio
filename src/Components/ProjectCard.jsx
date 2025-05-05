import { useState, useCallback } from 'react';
import * as THREE from 'three';
import  ThreeScene  from './ThreeScene';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    const initProjectPreview = useCallback((container) => {
        const width = container.clientWidth;
        const height = container.clientHeight;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });

        renderer.setSize(width, height);
        container.appendChild(renderer.domElement);

        let object3D;

        // Different 3D previews based on project type
        if (index === 0) {
            // E-Commerce Platform: Rotating product showcase
            const group = new THREE.Group();

            // Create a box with better materials
            const geometry = new THREE.BoxGeometry(1, 1, 1);
            const material = new THREE.MeshBasicMaterial({
                color: 0x4ecdc4,
                wireframe: true,
                transparent: true,
                opacity: 0.8
            });

            const innerGeometry = new THREE.BoxGeometry(0.8, 0.8, 0.8);
            const innerMaterial = new THREE.MeshBasicMaterial({
                color: 0x2a9d8f,
                wireframe: false,
                transparent: true,
                opacity: 0.3
            });

            const cube = new THREE.Mesh(geometry, material);
            const innerCube = new THREE.Mesh(innerGeometry, innerMaterial);

            group.add(cube);
            group.add(innerCube);
            scene.add(group);
            object3D = group;

        } else if (index === 1) {
            // Data Dashboard: Data visualization bars
            const group = new THREE.Group();

            // Create more interesting graph bars
            for (let i = 0; i < 7; i++) {
                const height = Math.random() * 1.2 + 0.3;
                const geometry = new THREE.BoxGeometry(0.15, height, 0.15);

                // Gradient color based on height
                const color = new THREE.Color();
                color.setHSL(0.6 - height * 0.2, 0.8, 0.5);

                const material = new THREE.MeshBasicMaterial({
                    color: color,
                    wireframe: false,
                    transparent: true,
                    opacity: 0.7
                });

                const bar = new THREE.Mesh(geometry, material);
                bar.position.x = i * 0.25 - 0.75;
                bar.position.y = height / 2 - 0.5;

                // Add wireframe outline
                const edgesGeometry = new THREE.EdgesGeometry(geometry);
                const edgesMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
                const edges = new THREE.LineSegments(edgesGeometry, edgesMaterial);
                bar.add(edges);

                group.add(bar);
            }

            scene.add(group);
            object3D = group;

        } else if (index === 2) {
            // VR Tour: Room visualization
            const group = new THREE.Group();

            // Floor
            const floorGeometry = new THREE.PlaneGeometry(2, 2, 10, 10);
            const floorMaterial = new THREE.MeshBasicMaterial({
                color: 0x444444,
                wireframe: true,
                transparent: true,
                opacity: 0.8
            });
            const floor = new THREE.Mesh(floorGeometry, floorMaterial);
            floor.rotation.x = -Math.PI / 2;
            floor.position.y = -0.5;
            group.add(floor);

            // Walls with better construction
            const buildWall = (posX, posZ, rotY) => {
                const wallGeometry = new THREE.PlaneGeometry(2, 1, 10, 5);
                const wallMaterial = new THREE.MeshBasicMaterial({
                    color: 0x6a8caf,
                    wireframe: true,
                    transparent: true,
                    opacity: 0.6
                });

                const wall = new THREE.Mesh(wallGeometry, wallMaterial);
                wall.position.x = posX;
                wall.position.z = posZ;
                wall.position.y = 0;
                wall.rotation.y = rotY;
                return wall;
            };

            group.add(buildWall(0, -1, 0));
            group.add(buildWall(1, 0, -Math.PI / 2));
            group.add(buildWall(-1, 0, Math.PI / 2));

            // Add some furniture
            const tableGeometry = new THREE.BoxGeometry(0.6, 0.1, 0.4);
            const tableMaterial = new THREE.MeshBasicMaterial({
                color: 0x8B4513,
                wireframe: false
            });
            const table = new THREE.Mesh(tableGeometry, tableMaterial);
            table.position.y = -0.25;
            table.position.z = -0.3;
            group.add(table);

            scene.add(group);
            object3D = group;
        }

        camera.position.z = 2;
        camera.position.y = 0.3;

        // Handle resize
        const handleResize = () => {
            const newWidth = container.clientWidth;
            const newHeight = container.clientHeight;

            camera.aspect = newWidth / newHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(newWidth, newHeight);
        };

        window.addEventListener('resize', handleResize);

        // Animation loop
        let animationFrameId;
        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);

            if (object3D) {
                object3D.rotation.y += 0.01;
                if (index === 0) {
                    object3D.rotation.x += 0.005;
                }
            }

            renderer.render(scene, camera);
        };

        animate();

        // Cleanup function
        const cleanup = () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
            renderer.dispose();
            if (object3D) {
                scene.remove(object3D);
                if (object3D.geometry) object3D.geometry.dispose();
                if (object3D.material) object3D.material.dispose();
            }
        };

        return { scene, cleanup };
    }, [index]);

    return (
        <motion.div
            className="project-card bg-gray-900 bg-opacity-30 backdrop-blur-sm rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="h-52 relative">
                <ThreeScene
                    initFunction={initProjectPreview}
                    className="w-full h-full"
                />
                {isHovered && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-end p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <a href={project.demoLink} className="text-white bg-indigo-600 hover:bg-indigo-700 rounded-md px-4 py-2 text-sm font-medium mr-2">
                                Live Demo
                            </a>
                            <a href={project.codeLink} className="text-white bg-gray-700 hover:bg-gray-800 rounded-md px-4 py-2 text-sm font-medium">
                                View Code
                            </a>
                        </motion.div>
                    </div>
                )}
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                        <span key={i} className="px-2 py-1 text-xs font-medium bg-indigo-900 text-indigo-200 rounded-full">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;