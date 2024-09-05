import React from "react";
import rayaneicon from "../assets/images/rayaneicon.png";
import etageres from "../assets/images/etageres.png";
import doublearrow from "../assets/icons/double_arrow.png";

const Home = ({ onShowPages }) => {

  const handleShowAllPages = () => {
    onShowPages();
  };

  return (
    <div className="w-full h-[100vh]  relative">
      <div className="flex flex-col justify-center items-center gap-6">
        <div className="flex flex-row gap-16 font-bold text-3xl items-center justify-center pt-[50px] max-lg:text-lg">
          <p><a href="#about" onClick={handleShowAllPages}>ABOUT</a></p>
          <p><a href="#projects" onClick={handleShowAllPages}>PROJECTS</a></p>
          <p><a href="#contact" onClick={handleShowAllPages}>CONTACT</a></p>
        </div>
        <div className="flex justify-center items-center w-full">
          <img 
            src={etageres}
            alt="etageres"
            className="w-[600px] max-lg:w-[500px]"  
          />
        </div>
      </div>
      <div className="flex w-full pl-[300px] pt-10 max-lg:justify-center max-lg:p-0 max-xl:p-0 max-xl:justify-center">
        <p className="font-bold text-[#914F1E] text-[96px] max-lg:text-[50px]">
          Hey There,<br />
          I’m <span className="text-[#B5C18E]">Rayane</span>
        </p>
      </div>
      <div className="flex justify-end w-full pr-96 max-xl:p-0 max-xl:justify-center max-lg:justify-center max-lg:p-0">
        <div className="w-fit">
          <p className="font-extralight text-[40px] text-[#986438] text-right max-lg:text-[30px]">
            I design a beautiful site web,<br />
            and I love coding them.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full pt-24 max-lg:pt-10 relative z-20">
        <a href="#about">
        <img 
          src={doublearrow}
          alt="Double Arrow"
          className="animate-bounce hover:scale-150 max-lg:w-[30px]"
          onClick={onShowPages}
          style={{ cursor: 'pointer' }}
        />
        </a>
        {/* Texte sous les flèches */}
        <p className="font-thin text-lg text-[#986438] mt-4 max-lg:text-sm">
          Clic if you want to know more
        </p>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 max-lg:flex max-lg:justify-center w-full z-10">
        <img 
          src={rayaneicon}
          alt="Rayane Icon"
          className="2xl:w-auto xl:w-[400px] lg:w-[400px]"  
        />
      </div>
    </div>
  );
}

export default Home;
