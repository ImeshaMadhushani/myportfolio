import { useCallback } from 'react';
import * as THREE from 'three';
import ThreeScene from './ThreeScene';

const BackgroundScene = () => {
    const initBackgroundAnimation = useCallback((container) => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

        renderer.setSize(width, height);
        renderer.setPixelRatio(window.devicePixelRatio);
        container.appendChild(renderer.domElement);

        // Create particles
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 2000; // Increased count for more density

        const posArray = new Float32Array(particlesCount * 3);
        const colorArray = new Float32Array(particlesCount * 3);
        const sizesArray = new Float32Array(particlesCount);

        for (let i = 0; i < particlesCount * 3; i += 3) {
            // Positions - spherical distribution
            const radius = 5 + Math.random() * 2;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);

            posArray[i] = radius * Math.sin(phi) * Math.cos(theta);
            posArray[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
            posArray[i + 2] = radius * Math.cos(phi);

            // Colors (gradient with more variation)
            const mixFactor = Math.random();
            colorArray[i] = mixFactor * 1.0; // R
            colorArray[i + 1] = 0.3 + (1 - mixFactor) * 0.7; // G
            colorArray[i + 2] = 0.7 + Math.random() * 0.3; // B

            // Randomize sizes
            sizesArray[i / 3] = 0.01 + Math.random() * 0.02;
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));
        particlesGeometry.setAttribute('size', new THREE.BufferAttribute(sizesArray, 1));

        // Create custom shader material for better particle effects
        const particlesMaterial = new THREE.ShaderMaterial({
            vertexShader: `
        attribute float size;
        attribute vec3 color;
        varying vec3 vColor;
        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
            fragmentShader: `
        varying vec3 vColor;
        void main() {
          // Create a soft, circular point
          float r = 0.0;
          vec2 cxy = 2.0 * gl_PointCoord - 1.0;
          r = dot(cxy, cxy);
          if (r > 1.0) {
            discard;
          }
          gl_FragColor = vec4(vColor, 1.0 - r);
        }
      `,
            transparent: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending
        });

        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);

        camera.position.z = 2;

        // Mouse interaction
        let mouseX = 0;
        let mouseY = 0;

        const mouseMoveHandler = (event) => {
            mouseX = (event.clientX / width - 0.5) * 0.1;
            mouseY = (event.clientY / height - 0.5) * 0.1;
        };

        document.addEventListener('mousemove', mouseMoveHandler);

        // Handle resize
        const handleResize = () => {
            const newWidth = window.innerWidth;
            const newHeight = window.innerHeight;

            camera.aspect = newWidth / newHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(newWidth, newHeight);
        };

        window.addEventListener('resize', handleResize);

        // Animation loop
        let animationFrameId;
        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);

            particlesMesh.rotation.x += 0.0005;
            particlesMesh.rotation.y += 0.0005;

            // Gentle follow mouse
            particlesMesh.rotation.x += mouseY * 0.03;
            particlesMesh.rotation.y += mouseX * 0.03;

            renderer.render(scene, camera);
        };

        animate();

        // Cleanup function
        const cleanup = () => {
            cancelAnimationFrame(animationFrameId);
            document.removeEventListener('mousemove', mouseMoveHandler);
            window.removeEventListener('resize', handleResize);
            scene.remove(particlesMesh);
            particlesGeometry.dispose();
            particlesMaterial.dispose();
            renderer.dispose();
        };

        return { scene, cleanup };
    }, []);

    return (
        <ThreeScene
            initFunction={initBackgroundAnimation}
            className="fixed top-0 left-0 w-full h-screen -z-10"
        />
    );
};

export default BackgroundScene;