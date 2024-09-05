import React from 'react';
import work1 from '../assets/images/work1.png';
import work2 from '../assets/images/work2.png';
import work3 from '../assets/images/work3.png';

const Work = ({ onExploreMore }) => {
  return (
    <div id='projects' className='w-full min-h-[100vh]'>
      <div className='flex flex-col gap-5 p-4 lg:pl-16 lg:pt-16'>
        {/* Titre */}
        <p className='text-[#B5C18E] font-bold text-3xl lg:text-5xl'>My Latest Works</p>
        <div className='flex flex-col lg:flex-row lg:justify-between lg:gap-96 text-lg lg:text-xl'>
          <p className='font-light text-[#683000]'>Perfect solution for digital experience</p>
          <p 
            className='font-light text-sm lg:text-base text-[#FF0000] underline mt-2 mr-36 lg:mt-0 cursor-pointer'
            onClick={onExploreMore} // Gestionnaire de clics pour afficher "Allwork"
          >
            explore more works
          </p>
        </div>
      </div>
      {/* Cartes de travaux */}
      <div className='flex flex-col lg:flex-row gap-8 lg:gap-16 p-4 lg:pl-16 pt-8 lg:pt-24'>
        {/* Première carte */}
        <div className='w-full lg:w-[500px] h-[400px] lg:h-[500px] bg-[#FDCD66] rounded-xl flex flex-col justify-between p-6 lg:p-10 relative'>
          <p className='text-white font-bold text-xl lg:text-3xl'>Site comptabilité</p>
          <img 
            src={work1}
            className='absolute bottom-0 right-0 mb-4 mr-4 object-contain w-[50%] lg:w-auto'
          />
        </div>
        {/* Deuxième carte */}
        <div className='w-full lg:w-[500px] h-[400px] lg:h-[500px] bg-[#38756A] rounded-xl flex flex-col justify-between p-6 lg:p-10 relative'>
          <p className='text-white font-bold text-xl lg:text-3xl'>Création d'un outil <br /> BI</p>
          <img 
            src={work3}
            className='absolute bottom-0 right-0 mb-4 mr-4 object-contain w-[50%] lg:w-auto'
          />
        </div>
        {/* Troisième carte */}
        <div className='w-full lg:w-[500px] h-[400px] lg:h-[500px] bg-[#EDB383] rounded-xl flex flex-col justify-between p-6 lg:p-10 relative'>
          <p className='text-white font-bold text-xl lg:text-3xl'>Site d’une entreprise batiment</p>
          <img 
            src={work2}
            className='absolute bottom-0 right-0 mb-4 mr-4 object-contain w-[50%] lg:w-auto'
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
