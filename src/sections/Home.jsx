import React, { useState } from "react";
import rayaneicon from "../assets/images/rayaneicon.png";
import etageres from "../assets/images/etageres.png";
import doublearrow from "../assets/icons/double_arrow.png";
import lampe1 from "../assets/images/lampe1.png";
import lampe2 from "../assets/images/lampe2.png";

const Home = ({ onShowPages }) => {
  const [isLampeOn, setIsLampeOn] = useState(true); 

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
          className="mr-[200px] cursor-pointer"
          onClick={toggleLampe} 
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-6">

        <div className="flex flex-row gap-16 font-bold text-3xl items-center justify-center pt-[50px] max-lg:text-lg">
          <p>
            <a
              href="#about"
              onClick={handleShowAllPages}
              className="hover:text-[#B5C18E] transition-colors duration-300"
            >
              About
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
            className="w-[600px] max-lg:w-[500px]"
          />
        </div>
      </div>
      <div className="flex w-full justify-center text-center pt-16 max-lg:justify-center max-lg:p-0 max-xl:p-0 max-xl:justify-center ">
        <p className="font-bold text-[#914F1E] text-[90px] max-lg:text-[50px]">
          <span className="typewriter">
            Hey There,<br />
            I'm <span className="text-[#B5C18E]">Rayane</span>
          </span>
        </p>
      </div>
      <div className="flex justify-center w-full text-center max-xl:p-0 max-xl:justify-center max-lg:justify-center max-lg:p-0">
        <div className="w-fit">
          <p className="font-extralight text-[40px] text-[#986438] max-lg:text-[30px]">
            I design beautiful websites,<br />
            and I love coding them.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full pt-24 max-lg:pt-10 relative z-20 max-lg:hidden">
        <a href="#about">
          <img
            src={doublearrow}
            alt="Double Arrow"
            className="animate-bounce hover:scale-150 max-lg:w-[30px]"
            onClick={onShowPages}
            style={{ cursor: "pointer" }}
          />
        </a>
        <p className="font-thin text-lg text-[#986438] mt-4 max-lg:hidden max-sm:hidden">
          Click to learn more
        </p>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 max-lg:flex max-lg:justify-center w-full z-10">
        <img
          src={rayaneicon}
          alt="Rayane Icon"
          className="xl:w-[450px] lg:w-[400px]"
        />
      </div>
    </div>
  );
};

export default Home;
