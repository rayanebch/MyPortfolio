import React, { useState } from 'react';
import { projects } from '../constants/index';

const Allwork = ({ onBack }) => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const project = projects[currentProjectIndex];

  const openModal = (index) => {
    setCurrentImageIndex(index); 
    setIsModalOpen(true); 
  };

  const closeModal = () => {
    setIsModalOpen(false); 
  };

  const selectProject = (index) => {
    setCurrentProjectIndex(index); 
    setCurrentImageIndex(0); 
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % project.images.length;
    setCurrentImageIndex(nextIndex); 
  };

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + project.images.length) % project.images.length;
    setCurrentImageIndex(prevIndex); 
  };

  return (
    <div className="flex w-full h-screen bg-[#f3f3f3] relative">

      <button
        onClick={onBack}
        className="absolute bottom-4 left-4 text-2xl text-[#FF0000] z-10"
      >
        &larr; Back
      </button>


      <div className="w-1/4 bg-white shadow-md p-4">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <ul className="space-y-2">
          {projects.map((proj, index) => (
            <li
              key={index}
              className={`cursor-pointer p-2 rounded-md ${
                index === currentProjectIndex ? 'bg-[#986438] text-white' : 'hover:bg-blue-100'
              }`}
              onClick={() => selectProject(index)}
            >
              {proj.title}
            </li>
          ))}
        </ul>
      </div>


      <div className="w-3/4 p-8 flex flex-col justify-start items-start">
        <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
        <p className="text-lg text-gray-600 mb-8">{project.description}</p>
        
        <div className="w-full h-[600px] relative overflow-hidden flex justify-center items-center">
          {project.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className={`absolute max-w-[700px] max-h-[500px] object-contain transition-opacity duration-500 cursor-pointer ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
              onClick={() => openModal(index)} 
            />
          ))}
          <button onClick={prevImage} className="absolute left-2 text-2xl text-grey-500">
            &larr;
          </button>
          <button onClick={nextImage} className="absolute right-2 text-2xl text-grey-500">
            &rarr;
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <img 
            src={project.images[currentImageIndex]} 
            alt={`Image ${currentImageIndex + 1} Fullscreen`} 
            className="max-w-full max-h-full"
            onClick={closeModal}
          />
          <button
            className="absolute top-4 right-4 text-[#FF0000] text-3xl"
            onClick={closeModal}
          >
            &times;
          </button>
          <button onClick={prevImage} className="absolute left-2 text-2xl text-[#FF0000]">
            &larr;
          </button>
          <button onClick={nextImage} className="absolute right-2 text-2xl text-[#FF0000]">
            &rarr;
          </button>
        </div>
      )}
    </div>
  );
};

export default Allwork;
