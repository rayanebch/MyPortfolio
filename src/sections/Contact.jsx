import React from 'react';
import rayaneicon from "../assets/images/rayanecontact.png";
import rayaneicon2 from "../assets/images/rayanecontact2.png";
import github from "../assets/icons/github.png";
import linkedin from "../assets/icons/linkedin.png";
import gmail from "../assets/icons/gmail.png";
import instagram from "../assets/icons/instagram.png";
import facebook from "../assets/icons/facebook.png";

const Contact = () => {
  return (
    <div id='contact' className='w-full h-auto min-h-[100vh] flex items-center justify-center bg-[#EDB383] bg-opacity-10 p-6'>
      <div className='flex flex-col md:flex-row gap-12 md:gap-16 items-center bg-white p-6 md:p-10 rounded-lg shadow-lg w-full max-w-[1200px]'>
        
        <div className='flex flex-col items-center text-center md:text-left md:items-start gap-6 md:gap-8 w-full md:w-1/2'>
          <p className='text-3xl md:text-5xl font-bold text-[#683000] leading-snug'>
            Let’s make something<br/> amazing together.
          </p>
          <img 
            src={rayaneicon2}
            className='w-[200px] md:w-[300px] lg:w-[350px] '
            alt='Rayane Icon'
          />
        </div>
        
        
        <div className='flex flex-col gap-8 md:gap-12 w-full md:w-1/2'>
          <p className='text-2xl md:text-3xl text-[#B5C18E] mb-4 border-b-2 border-[#B5C18E] pb-2'>
            Informations
          </p>
          <div className='flex flex-col gap-4 md:gap-6'>
            
            <ContactInfo url='https://github.com/rayanebch' icon={github} text='rayanebch (github.com)' />
            <ContactInfo url='https://www.linkedin.com/in/rayane-bouchenak-52951a259/' icon={linkedin} text='Rayane Bouchenak | LinkedIn' />
            <ContactInfo url='mailto:bouchenakrayan@gmail.com' icon={gmail} text='bouchenakrayan@gmail.com' />
            <ContactInfo url='https://www.instagram.com/rayane._.bch/' icon={instagram} text='Ray Anę (@ray_ane_bch)' />
            <ContactInfo url='https://www.facebook.com/rayano.lemeilleur/' icon={facebook} text='Facebook' />
          </div>
        </div>
      </div>
    </div>
  );
};


const ContactInfo = ({ url, icon, text }) => (
  <a href={url} target='_blank' rel='noopener noreferrer' className='flex items-center gap-3 md:gap-4 hover:bg-[#F3F4F6] p-2 rounded transition-all duration-300 ease-in-out'>
    <img src={icon} className='w-[30px] md:w-[40px] h-[30px] md:h-[40px]' alt='Icon' />
    <p className='text-base md:text-xl text-gray-700'>{text}</p>
  </a>
);

export default Contact;
