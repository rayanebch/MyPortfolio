import React, { useRef, useEffect } from 'react';

const Skills = () => {
  const skillsRef = useRef([]);
  const containerRef = useRef(null);

  // Fonction pour positionner les éléments de manière uniforme dans le cercle
  const positionElements = () => {
    const elements = skillsRef.current;
    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();
    const containerCenterX = containerRect.width / 2;
    const containerCenterY = containerRect.height / 2;
    const containerRadius = containerRect.width / 2;
    const numberOfElements = elements.length;
    const angleStep = (2 * Math.PI) / numberOfElements;
    const elementRadius = 60; // Ajustez ce rayon pour le chevauchement

    elements.forEach((el, index) => {
      if (!el) return;

      const elRect = el.getBoundingClientRect();
      const elWidth = elRect.width;
      const elHeight = elRect.height;

      const angle = angleStep * index;
      const radius = containerRadius - Math.max(elWidth, elHeight) / 2 - elementRadius;
      const x = containerCenterX + radius * Math.cos(angle) - elWidth / 2;
      const y = containerCenterY + radius * Math.sin(angle) - elHeight / 2;

      el.style.left = `${x}px`;
      el.style.top = `${y}px`;
      el.style.position = 'absolute';
      el.style.whiteSpace = 'nowrap'; // Pour éviter le retour à la ligne
      el.style.transformOrigin = 'center'; // Assure que la transformation se fait autour du centre de l'élément
    });
  };

  useEffect(() => {
    // Positionner les éléments initialement
    positionElements();
  }, []);

  return (
    <div className='w-full h-[100vh] flex flex-col gap-16'>
      {/* Titre */}
      <p className='text-[#914F1E] font-bold flex justify-center text-5xl mt-10 max-lg:text-3xl'>
        <span className='text-[#B5C18E]'>Skills</span>&nbsp;and tools
      </p>
      {/* Description */}
      <p className='font-extralight text-3xl flex justify-center text-center max-lg:text-2xl'>
        Those are the tools and languages I have learned and practice with them.
      </p>

      {/* Cercle contenant les outils/langages */}
      <div
        ref={containerRef}
        className='relative w-[500px] h-[500px] border-dashed border-4 border-black rounded-full mx-auto mt-12 overflow-hidden'
      >
        {['python', 'VSCode', 'css', 'html', 'tailwind', 'react', 'Git', 'photoshop', 'Figma', 'java', 'C', 'sql'].map((skill, index) => (
          <span
            key={index}
            ref={(el) => (skillsRef.current[index] = el)}
            className='text-xl font-bold absolute'
            style={{
              animation: `move 10s linear ${index * 0.5}s infinite`
            }}
          >
            {skill}
          </span>
        ))}
      </div>
      
      {/* Styles pour l'animation */}
      <style>
        {`
          @keyframes move {
            0% {
              transform: rotate(0deg) translateX(200px) rotate(0deg);
            }
            100% {
              transform: rotate(360deg) translateX(200px) rotate(-360deg);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Skills;
