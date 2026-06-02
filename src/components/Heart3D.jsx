// D:\Projects\Anika\apology\src\components\Heart3D.jsx
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

function HeartMesh({ isBeating = true }) {
  const meshRef = useRef();

  // Create the heart shape
  const heartShape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, 0);
    // Draw heart curves ( lobes pointing up, point pointing down )
    shape.bezierCurveTo(0, 0.5, -0.6, 1, -1.1, 1);
    shape.bezierCurveTo(-1.8, 1, -2.2, 0.4, -2.2, -0.2);
    shape.bezierCurveTo(-2.2, -1.0, -1.1, -1.8, 0, -2.8);
    shape.bezierCurveTo(1.1, -1.8, 2.2, -1.0, 2.2, -0.2);
    shape.bezierCurveTo(2.2, 0.4, 1.8, 1, 1.1, 1);
    shape.bezierCurveTo(0.6, 1, 0, 0.5, 0, 0);
    return shape;
  }, []);

  const extrudeSettings = useMemo(() => ({
    depth: 0.6,
    bevelEnabled: true,
    bevelSegments: 5,
    steps: 2,
    bevelSize: 0.15,
    bevelThickness: 0.15
  }), []);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Auto rotation
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.4;
    
    // Heartbeat scaling animation
    if (isBeating) {
      const beat = 1 + Math.sin(state.clock.getElapsedTime() * 3.5) * 0.04;
      meshRef.current.scale.set(beat, beat, beat);
    }
  });

  return (
    // Removed Math.PI rotation on X axis so point points downwards
    <mesh ref={meshRef} position={[0, 0.8, 0]} rotation={[0, 0, 0]}>
      <extrudeGeometry args={[heartShape, extrudeSettings]} />
      <meshStandardMaterial 
        color="#ffb3c6" // soft pink
        roughness={0.3} 
        metalness={0.1}
        emissive="#ffe5ec"
        emissiveIntensity={0.3}
      />
    </mesh>
  );
}

export default function Heart3D({ isBeating = true }) {
  return (
    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
      <Canvas 
        camera={{ position: [0, 0, 6], fov: 50 }}
        style={{ pointerEvents: 'none' }} // Crucial to prevent blocking card clicks!
      >
        <ambientLight intensity={0.9} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffe4e6" />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#fbcfe8" />
        <directionalLight position={[0, 5, 5]} intensity={1.2} color="#fff" />
        
        <HeartMesh isBeating={isBeating} />
        
        <Stars 
          radius={50} 
          depth={30} 
          count={350} 
          factor={2.5} 
          saturation={0.9} 
          fade 
          speed={1.5} 
        />
      </Canvas>
    </div>
  );
}
