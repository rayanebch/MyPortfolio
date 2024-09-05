import React, { useState, useEffect } from 'react';
import { projects } from '../constants/index';

const Allwork = ({ onBack }) => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const project = projects[currentProjectIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % project.images.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [project.images.length]);

  const openModal = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage('');
  };

  const selectProject = (index) => {
    setCurrentProjectIndex(index);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex + 1) % project.images.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + project.images.length) % project.images.length
    );
  };

  return (
    <div className="flex w-full h-screen bg-[#f3f3f3] relative">
      {/* Flèche de retour en bas à droite */}
      <button
        onClick={onBack} // Ajout du gestionnaire de clic pour revenir à la page principale
        className="absolute bottom-4 left-4 text-2xl text-[#FF0000] z-10"
      >
        &larr; Retour
      </button>

      {/* Navbar à gauche */}
      <div className="w-1/4 bg-white shadow-md p-4">
        <h2 className="text-2xl font-bold mb-4">Projets</h2>
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

      {/* Contenu du projet sélectionné à droite */}
      <div className="w-3/4 p-8 flex flex-col justify-start items-start">
        <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
        <p className="text-lg text-gray-600 mb-8">{project.description}</p>
        
        <div className="w-full h-[500px] relative overflow-hidden flex justify-center items-center">
          {project.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className={`absolute max-w-[500px] max-h-[500px] object-contain transition-opacity duration-500 cursor-pointer ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
              onClick={() => openModal(image)}
            />
          ))}
          <button onClick={prevImage} className="absolute left-2 text-2xl text-gray-500">
            &larr;
          </button>
          <button onClick={nextImage} className="absolute right-2 text-2xl text-gray-500">
            &rarr;
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <img 
            src={modalImage} 
            alt="Fullscreen" 
            className="max-w-full max-h-full"
            onClick={closeModal}
          />
          <button
            className="absolute top-4 right-4 text-white text-3xl"
            onClick={closeModal}
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default Allwork;
