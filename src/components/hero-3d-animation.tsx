"use client";

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Stars(props: any) {
  const ref = useRef<THREE.Points>(null!);
  const [sphere] = useMemo(() => {
    // A utility function from three.js to generate random points in a sphere
    const an = new THREE.SphereGeometry(1, 48, 48);
    const av = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000; i++) {
        const i3 = i*3;
        const p = new THREE.Vector3().setFromSphericalCoords(
            1.5 + Math.random() * 0.5,
            Math.acos(1 - 2*Math.random()),
            Math.random() * 2 * Math.PI
        );
        av[i3] = p.x;
        av[i3+1] = p.y;
        av[i3+2] = p.z;
    }
    return [av];

  }, []);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 15;
    ref.current.rotation.y -= delta / 20;
    
    // Make it subtly responsive to mouse movement
    const { pointer } = state;
    ref.current.rotation.y += pointer.x * 0.01;
    ref.current.rotation.x += pointer.y * 0.01;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function Hero3DAnimation() {
  return (
    <div className="absolute inset-0 z-0 h-full w-full">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
      </Canvas>
    </div>
  );
}
