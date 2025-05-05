import { useEffect, useRef } from 'react';
//import * as THREE from 'three';

const ThreeScene = ({ initFunction, className }) => {
    const containerRef = useRef(null);
    const sceneRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const { scene, cleanup } = initFunction(containerRef.current);
        sceneRef.current = scene;

        return () => {
            if (cleanup) cleanup();
            if (containerRef.current && containerRef.current.firstChild) {
                containerRef.current.removeChild(containerRef.current.firstChild);
            }
        };
    }, [initFunction]);

    return <div ref={containerRef} className={className} />;
};

export default ThreeScene;