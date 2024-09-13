import React, { useRef, useEffect } from 'react';
import pythonlogo from "../assets/icons/pythonlogo.png";
import vscodeLogo from "../assets/icons/vscodelogo.png";
import cssLogo from "../assets/icons/csslogo.png";
import htmlLogo from "../assets/icons/htmllogo.png";
import tailwindLogo from "../assets/icons/tailwindlogo.png";
import reactLogo from "../assets/icons/reactlogo.png";
import gitLogo from "../assets/icons/gitlogo.png";
import photoshopLogo from "../assets/icons/photoshoplogo.png";
import figmaLogo from "../assets/icons/figmalogo.png";
import javaLogo from "../assets/icons/javalogo.png";
import cLogo from "../assets/icons/clogo.png";
import sqlLogo from "../assets/icons/sqllogo.png";
import javascriptLogo from "../assets/icons/javascriptlogo.png";

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
    <div className='w-full min-h-screen flex flex-col items-center gap-16 px-4'>
      <p className='text-[#914F1E]  font-bold text-3xl md:text-4xl lg:text-5xl mt-10 text-center'>
        <span className='text-[#B5C18E] '>Skills</span>&nbsp;and tools
      </p>
      <p className='font-extralight text-lg md:text-xl lg:text-2xl text-center'>
        These are the tools and languages I have learned and practiced.
      </p>

      {/* Section des logos */}
      <div className='flex justify-center gap-4 flex-wrap mb-8'>
        <img src={pythonlogo} alt='Python' className='w-12 h-12 md:w-16 md:h-16 object-contain' />
        <img src={vscodeLogo} alt='VSCode' className='w-12 h-12 md:w-16 md:h-16 object-contain' />
        <img src={cssLogo} alt='CSS' className='w-12 h-12 md:w-16 md:h-16 object-contain' />
        <img src={htmlLogo} alt='HTML' className='w-12 h-12 md:w-16 md:h-16 object-contain' />
        <img src={tailwindLogo} alt='Tailwind CSS' className='w-12 h-12 md:w-16 md:h-16 object-contain' />
        <img src={reactLogo} alt='React' className='w-12 h-12 md:w-16 md:h-16 object-contain' />
        <img src={gitLogo} alt='Git' className='w-12 h-12 md:w-16 md:h-16 object-contain' />
        <img src={photoshopLogo} alt='Photoshop' className='w-12 h-12 md:w-16 md:h-16 object-contain' />
        <img src={figmaLogo} alt='Figma' className='w-12 h-12 md:w-16 md:h-16 object-contain' />
        <img src={javaLogo} alt='Java' className='w-12 h-12 md:w-16 md:h-16 object-contain' />
        <img src={cLogo} alt='C' className='w-12 h-12 md:w-16 md:h-16 object-contain' />
        <img src={sqlLogo} alt='SQL' className='w-12 h-12 md:w-16 md:h-16 object-contain' />
        <img src={javascriptLogo} alt='JavaScript' className='w-12 h-12 md:w-16 md:h-16 object-contain' />
      </div>

      <div
        ref={containerRef}
        className='relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] border-dashed border-4 border-black rounded-full mx-auto overflow-hidden'
      >
        {['python', 'VSCode', 'css', 'html', 'tailwind', 'react', 'Git', 'photoshop', 'Figma', 'java', 'C', 'sql', 'javascript'].map((skill, index) => (
          <span
            key={index}
            ref={(el) => (skillsRef.current[index] = el)}
            className='text-sm md:text-xl font-bold absolute text-[#914F1E]'
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
