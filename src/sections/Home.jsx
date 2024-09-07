import React, { useState, useEffect } from "react";
import rayaneicon from "../assets/images/rayaneicon.png";
import etageres from "../assets/images/etageres.png";
import doublearrow from "../assets/icons/double_arrow.png";
import lampe1 from "../assets/images/lampe1.png";
import lampe2 from "../assets/images/lampe2.png";

const Home = ({ onShowPages }) => {
  const [isLampeOn, setIsLampeOn] = useState(true);

  useEffect(() => {
    // Fonction pour simuler le clignotement de la lampe
    const simulateFlicker = () => {
      let flickerCount = 0; // Compteur pour le nombre de clignotements
      const flickerInterval = setInterval(() => {
        setIsLampeOn((prev) => !prev); // Change l'état de la lampe
        flickerCount += 1;
        
        // Arrête le clignotement après 6 changements d'état (3 allumages/3 extinctions)
        if (flickerCount >= 6) {
          clearInterval(flickerInterval);
          setIsLampeOn(true); // Rétablit l'état final de la lampe allumée
        }
      }, 300); // Intervalle court pour un effet de clignotement rapide
    };

    // Définit un intervalle qui déclenche le clignotement toutes les 5 secondes
    const mainInterval = setInterval(() => {
      simulateFlicker(); // Simule le clignotement
    }, 5000);

    // Nettoyage de l'intervalle lorsque le composant est démonté
    return () => clearInterval(mainInterval);
  }, []);

  const handleShowAllPages = () => {
    onShowPages();
  };

  const toggleLampe = () => {
    setIsLampeOn((prev) => !prev);
  };

  return (
    <div className="w-full h-[100vh] relative">
      <div className="absolute top-0 right-0 max-lg:hidden">
        <img
          src={isLampeOn ? lampe1 : lampe2}
          alt="Lampe"
          className="mr-[10vw] cursor-pointer"
          onClick={toggleLampe}
        />
      </div>
      <div className="flex flex-col justify-center items-center ">
        <div className="flex flex-row gap-[8%] font-bold text-[1.5vw] items-center justify-center pt-[2%] pb-[1%] max-lg:text-[3vw] max-sm:pt-[15%] max-sm:text-[4vw]">
          <p>
            <a
              href="#about"
              onClick={handleShowAllPages}
              className="hover:text-[#B5C18E] transition-colors duration-300"
            >
              Education
            </a>
          </p>
          <p>
            <a
              href="#projects"
              onClick={handleShowAllPages}
              className="hover:text-[#B5C18E] transition-colors duration-300"
            >
              Projects
            </a>
          </p>
          <p>
            <a
              href="#contact"
              onClick={handleShowAllPages}
              className="hover:text-[#B5C18E] transition-colors duration-300"
            >
              Contact
            </a>
          </p>
        </div>
        <div className="flex justify-center items-center w-full">
          <img
            src={etageres}
            alt="Shelves"
            className="w-[30%] max-lg:w-[80%] max-sm:w-[80%]"
          />
        </div>
      </div>
      <div className="flex w-full justify-center text-center pt-[1%] max-lg:justify-center  max-sm:pt-[20%]">
        <p className="font-bold text-[#914F1E] text-[5vw] max-lg:text-[6vw]">
          <span className="typewriter">
            Hey There,<br />
            I'm <span className="text-[#B5C18E]">Rayane</span>
          </span>
        </p>
      </div>
      <div className="flex justify-center w-full text-center mt-[1%]">
        <div className="w-fit">
          <p className="font-extralight text-[2vw] text-[#986438] max-lg:text-[5vw]">
            I design beautiful websites,<br />
            and I love coding them.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full mt-[5%] relative z-20 max-lg:pt-[3%] max-lg:hidden">
        <a href="#about">
          <img
            src={doublearrow}
            alt="Double Arrow"
            className="animate-bounce hover:scale-150 max-lg:w-[15%]"
            onClick={onShowPages}
            style={{ cursor: "pointer" }}
          />
        </a>
        <p className="font-thin text-[1.2vw] text-[#986438] mt-[1%] max-lg:hidden max-sm:hidden">
          Click to learn more
        </p>
      </div>
      <div className="absolute bottom-0 left-1/2  -translate-x-1/2 max-lg:flex max-lg:justify-center w-full z-10">
        <img
          src={rayaneicon}
          alt="Rayane Icon"
          className="h-[50vh]"
        />
      </div>
    </div>
  );
};

export default Home;
