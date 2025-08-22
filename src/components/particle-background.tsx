"use client";

import { useEffect, useState } from 'react';

const ParticleBackground = () => {
  const [particles, setParticles] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const generateParticles = () => {
      const particleArray: JSX.Element[] = [];
      const numParticles = 50; // Adjust for density
      for (let i = 0; i < numParticles; i++) {
        const size = Math.random() * 3 + 1; // size between 1px and 4px
        const style: React.CSSProperties = {
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: `${size}px`,
          height: `${size}px`,
          animationDuration: `${Math.random() * 15 + 10}s`, // duration between 10s and 25s
          animationDelay: `${Math.random() * 5}s`,
        };
        particleArray.push(<div key={i} className="particle" style={style}></div>);
      }
      setParticles(particleArray);
    };

    generateParticles();
  }, []);

  return <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none">{particles}</div>;
};

export default ParticleBackground;
