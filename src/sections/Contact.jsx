import React from 'react';
import rayaneicon from "../assets/images/rayanecontact.png";
import github from "../assets/icons/github.png";
import linkedin from "../assets/icons/linkedin.png";
import gmail from "../assets/icons/gmail.png";
import instagram from "../assets/icons/instagram.png";
import facebook from "../assets/icons/facebook.png";

const Contact = () => {
  return (
    <div id='contact' className='w-full h-auto min-h-[100vh] flex items-center justify-center bg-[#EDB383] bg-opacity-20 p-6'>
      <div className='flex flex-col md:flex-row gap-12 md:gap-16 items-center bg-white p-6 md:p-10 rounded-lg shadow-lg w-full max-w-[1200px]'>
        {/* Texte principal et image */}
        <div className='flex flex-col items-center text-center md:text-left md:items-start gap-6 md:gap-8 w-full md:w-1/2'>
          <p className='text-3xl md:text-5xl font-bold text-[#683000] leading-snug'>
            Let’s make something<br/> amazing together.
          </p>
          <img 
            src={rayaneicon}
            className='w-[200px] md:w-[300px] lg:w-[350px] '
            alt='Rayane Icon'
          />
        </div>
        
        {/* Section des informations */}
        <div className='flex flex-col gap-8 md:gap-12 w-full md:w-1/2'>
          <p className='text-2xl md:text-3xl text-[#B5C18E] mb-4 border-b-2 border-[#B5C18E] pb-2'>
            Informations
          </p>
          <div className='flex flex-col gap-4 md:gap-6'>
            {/* Liste d'informations avec logos */}
            <ContactInfo icon={github} text='rayanebch (github.com)' />
            <ContactInfo icon={linkedin} text='Rayane Bouchenak | LinkedIn' />
            <ContactInfo icon={gmail} text='bouchenakrayan@gmail.com' />
            <ContactInfo icon={instagram} text='Ray Anę (@ray_ane_bch)' />
            <ContactInfo icon={facebook} text='Facebook' />
          </div>
        </div>
      </div>
    </div>
  );
};

// Composant réutilisable pour les informations de contact
const ContactInfo = ({ icon, text }) => (
  <div className='flex items-center gap-3 md:gap-4 hover:bg-[#F3F4F6] p-2 rounded transition-all duration-300 ease-in-out'>
    <img src={icon} className='w-[30px] md:w-[40px] h-[30px] md:h-[40px]' alt='Icon' />
    <p className='text-base md:text-xl text-gray-700'>{text}</p>
  </div>
);

export default Contact;
