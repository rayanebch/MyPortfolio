import React, { useRef, useEffect } from 'react';

const Skills = () => {
  const skillsRef = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const elements = skillsRef.current;
    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();
    const containerRadius = containerRect.width / 2;
    const centerX = containerRect.width / 2;
    const centerY = containerRect.height / 2;

    // Initialiser chaque élément avec une position aléatoire et une vitesse/direction aléatoire
    elements.forEach((el) => {
      const elRect = el.getBoundingClientRect();
      const elWidth = elRect.width;
      const elHeight = elRect.height;

      // Position initiale aléatoire
      const angle = Math.random() * 2 * Math.PI;
      const radius = containerRadius - Math.max(elWidth, elHeight) / 2 - 10;
      const x = centerX + radius * Math.cos(angle) - elWidth / 2;
      const y = centerY + radius * Math.sin(angle) - elHeight / 2;

      el.style.left = `${x}px`;
      el.style.top = `${y}px`;

      // Vitesse et direction aléatoires
      el.dataset.dx = (Math.random() - 0.5) * 4; // Vitesse sur l'axe X
      el.dataset.dy = (Math.random() - 0.5) * 4; // Vitesse sur l'axe Y
    });

    const moveElements = () => {
      elements.forEach((el) => {
        const x = parseFloat(el.style.left);
        const y = parseFloat(el.style.top);
        const dx = parseFloat(el.dataset.dx);
        const dy = parseFloat(el.dataset.dy);

        let newX = x + dx;
        let newY = y + dy;

        // Vérifier les collisions avec les bords et changer de direction si nécessaire
        const elRect = el.getBoundingClientRect();
        const elWidth = elRect.width;
        const elHeight = elRect.height;

        const distanceFromCenterX = newX + elWidth / 2 - centerX;
        const distanceFromCenterY = newY + elHeight / 2 - centerY;
        const distanceFromCenter = Math.sqrt(distanceFromCenterX ** 2 + distanceFromCenterY ** 2);

        if (distanceFromCenter + Math.max(elWidth, elHeight) / 2 >= containerRadius) {
          el.dataset.dx = -dx;
          el.dataset.dy = -dy;
        }

        el.style.left = `${newX}px`;
        el.style.top = `${newY}px`;
      });
    };

    const intervalId = setInterval(moveElements, 20); // Bouger les éléments toutes les 20 ms

    return () => clearInterval(intervalId); // Nettoyer l'intervalle à la fin du composant
  }, []);

  return (
    <div className='w-full h-[100vh] flex flex-col gap-16 '>
      <p className='text-[#914F1E] font-bold flex justify-center text-5xl mt-10 max-lg:text-3xl'>
        <span className='text-[#B5C18E]'>Skills</span>&nbsp;and tools
      </p>
      <p className='font-extralight text-3xl flex justify-center text-center max-lg:text-2xl'>
        Those are the tools and languages I have learned and practice with them.
      </p>

      <div
        ref={containerRef}
        className='relative w-[500px] h-[500px] border-dashed border-4 border-black rounded-full mx-auto mt-12 overflow-hidden'
      >
        {['python', 'VSCode', 'css', 'html', 'tailwind', 'react', 'Git', 'photoshop', 'Figma', 'java', 'C', 'sql'].map((skill, index) => (
          <span
            key={index}
            ref={(el) => (skillsRef.current[index] = el)}
            className='text-xl font-bold absolute'
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
