import { useCallback } from 'react';
import * as THREE from 'three';
import ThreeScene from './ThreeScene';

const SkillCube = () => {
    const initSkillCube = useCallback((container) => {
        const width = container.clientWidth;
        const height = container.clientHeight;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

        renderer.setSize(width, height);
        renderer.setClearColor(0x000000, 0);
        container.appendChild(renderer.domElement);

        const group = new THREE.Group();

        // Central glowing orb
        const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32);
        const sphereMaterial = new THREE.MeshBasicMaterial({
            color: 0xff6f61,
            wireframe: true
        });

        const innerSphereGeometry = new THREE.SphereGeometry(0.45, 32, 32);
        const innerSphereMaterial = new THREE.MeshBasicMaterial({
            color: 0xff6f61,
            transparent: true,
            opacity: 0.2
        });

        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        const innerSphere = new THREE.Mesh(innerSphereGeometry, innerSphereMaterial);

        group.add(sphere);
        group.add(innerSphere);

        // Web Design Tools Skills
        const designSkills = [
            { name: 'Figma', color: 0xa259ff },
            { name: 'Adobe XD', color: 0xff61f6 },
            { name: 'Photoshop', color: 0x31a8ff },
            { name: 'Illustrator', color: 0xff9a00 },
            { name: 'HTML5', color: 0xe44d26 },
            { name: 'CSS3', color: 0x264de4 },
            { name: 'Tailwind CSS', color: 0x38bdf8 }
        ];

        const shapeGeometries = [
            () => new THREE.IcosahedronGeometry(0.07),
            () => new THREE.OctahedronGeometry(0.07),
            () => new THREE.TetrahedronGeometry(0.07),
            () => new THREE.DodecahedronGeometry(0.07),
            () => new THREE.ConeGeometry(0.06, 0.2, 16),
            () => new THREE.BoxGeometry(0.08, 0.08, 0.08)
        ];

        const orbitGroups = [];

        designSkills.forEach((skill, i) => {
            const orbitGroup = new THREE.Group();

            const radius = 0.8 + (i % 3) * 0.25;
            const ringGeometry = new THREE.RingGeometry(radius, radius + 0.02, 64);
            const ringMaterial = new THREE.MeshBasicMaterial({
                color: skill.color,
                side: THREE.DoubleSide,
                transparent: true,
                opacity: 0.2
            });

            const ring = new THREE.Mesh(ringGeometry, ringMaterial);
            ring.rotation.x = Math.random() * Math.PI;
            ring.rotation.y = Math.random() * Math.PI;

            const geometryFn = shapeGeometries[i % shapeGeometries.length];
            const nodeGeometry = geometryFn();
            const nodeMaterial = new THREE.MeshBasicMaterial({
                color: skill.color
            });

            const node = new THREE.Mesh(nodeGeometry, nodeMaterial);

            const angle = i * (Math.PI * 2) / designSkills.length;
            node.position.set(
                Math.cos(angle) * radius,
                Math.sin(angle) * radius,
                0
            );

            orbitGroup.add(ring);
            orbitGroup.add(node);

            orbitGroup.rotation.x = Math.random() * Math.PI;
            orbitGroup.rotation.y = Math.random() * Math.PI;
            orbitGroup.rotation.z = Math.random() * Math.PI;

            group.add(orbitGroup);
            orbitGroups.push(orbitGroup);
        });

        // Web Technologies Ring (Torus with shape nodes)
        const webTechGroup = new THREE.Group();
        const webTechs = [
            { name: 'JavaScript', color: 0xf7df1e },
            { name: 'React', color: 0x61dafb },
            { name: 'Next.js', color: 0x000000 },
            { name: 'Node.js', color: 0x3c873a },
            { name: 'MongoDB', color: 0x47a248 },
            { name: 'Firebase', color: 0xffca28 },
            { name: 'Vercel', color: 0xffffff }
        ];

        const torusGeometry = new THREE.TorusGeometry(1.2, 0.02, 16, 100);
        const torusMaterial = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            transparent: true,
            opacity: 0.1
        });
        const torus = new THREE.Mesh(torusGeometry, torusMaterial);
        webTechGroup.add(torus);

        webTechs.forEach((tech, i) => {
            const angle = i * (Math.PI * 2) / webTechs.length;
            const radius = 1.2;

            const geometryFn = shapeGeometries[i % shapeGeometries.length];
            const nodeGeometry = geometryFn();
            const nodeMaterial = new THREE.MeshBasicMaterial({ color: tech.color });
            const node = new THREE.Mesh(nodeGeometry, nodeMaterial);

            node.position.set(
                Math.cos(angle) * radius,
                0,
                Math.sin(angle) * radius
            );

            webTechGroup.add(node);
        });

        webTechGroup.rotation.x = Math.PI / 4;
        group.add(webTechGroup);

        scene.add(group);
        camera.position.z = 2;

        const handleResize = () => {
            const newWidth = container.clientWidth;
            const newHeight = container.clientHeight;

            camera.aspect = newWidth / newHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(newWidth, newHeight);
        };

        window.addEventListener('resize', handleResize);

        let animationFrameId;
        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);

            sphere.rotation.y += 0.004;
            innerSphere.rotation.y -= 0.002;

            orbitGroups.forEach((orbitGroup, i) => {
                const speed = 0.0015 * (i % 3 + 1);
                orbitGroup.rotation.x += speed;
                orbitGroup.rotation.y += speed * 0.5;
            });

            webTechGroup.rotation.y += 0.003;

            renderer.render(scene, camera);
        };

        animate();

        const cleanup = () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
            renderer.dispose();
        };

        return { scene, cleanup };
    }, []);

    return <ThreeScene initFunction={initSkillCube} className="w-full h-full" />;
};

export default SkillCube;
