import React from 'react';

const Journey = () => {
  return (
    <div id='about' className='h-[100vh]'>
      <p className='font-bold text-[3vw] text-[#914F1E] text-center pt-[3.5%] max-lg:text-[5vw] max-md:pt-[10%] max-sm:pt-[20%] max-sm:text-[10vw]'>
        Educational Journey
      </p>
      <div className='flex items-center justify-center gap-[5%] ml-[15%] max-lg:ml-0'>
        <div className='flex flex-col font-bold gap-28 text-[1.5vw] max-lg:hidden'>
          <p>2018-2019</p>
          <p>2019-2022</p>
          <p>2022-2024</p>
        </div>
        <div className='max-lg:hidden pt-12 '>
          <svg width="2vw" viewBox="0 0 44 721" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 12C20.0222 12 18.0888 12.5865 16.4443 13.6853C14.7998 14.7841 13.5181 16.3459 12.7612 18.1732C12.0043 20.0004 11.8063 22.0111 12.1922 23.9509C12.578 25.8907 13.5304 27.6725 14.9289 29.0711C16.3275 30.4696 18.1093 31.422 20.0491 31.8078C21.9889 32.1937 23.9996 31.9957 25.8268 31.2388C27.6541 30.4819 29.2159 29.2002 30.3147 27.5557C31.4135 25.9112 32 23.9778 32 22C32 19.3478 30.9464 16.8043 29.0711 14.9289C27.1957 13.0536 24.6522 12 22 12ZM22 24.5C21.5055 24.5 21.0222 24.3534 20.6111 24.0787C20.2 23.804 19.8795 23.4135 19.6903 22.9567C19.5011 22.4999 19.4516 21.9972 19.548 21.5123C19.6445 21.0273 19.8826 20.5819 20.2322 20.2322C20.5819 19.8826 21.0273 19.6445 21.5123 19.548C21.9972 19.4516 22.4999 19.5011 22.9567 19.6903C23.4135 19.8795 23.804 20.2 24.0787 20.6111C24.3534 21.0222 24.5 21.5055 24.5 22C24.5 22.663 24.2366 23.2989 23.7678 23.7678C23.2989 24.2366 22.663 24.5 22 24.5Z" fill="#EDB383"/>
          <path d="M22 465C20.0222 465 18.0888 465.586 16.4443 466.685C14.7998 467.784 13.5181 469.346 12.7612 471.173C12.0043 473 11.8063 475.011 12.1922 476.951C12.578 478.891 13.5304 480.673 14.9289 482.071C16.3275 483.47 18.1093 484.422 20.0491 484.808C21.9889 485.194 23.9996 484.996 25.8268 484.239C27.6541 483.482 29.2159 482.2 30.3147 480.556C31.4135 478.911 32 476.978 32 475C32 472.348 30.9464 469.804 29.0711 467.929C27.1957 466.054 24.6522 465 22 465ZM22 477.5C21.5055 477.5 21.0222 477.353 20.6111 477.079C20.2 476.804 19.8795 476.414 19.6903 475.957C19.5011 475.5 19.4516 474.997 19.548 474.512C19.6445 474.027 19.8826 473.582 20.2322 473.232C20.5819 472.883 21.0273 472.644 21.5123 472.548C21.9972 472.452 22.4999 472.501 22.9567 472.69C23.4135 472.88 23.804 473.2 24.0787 473.611C24.3534 474.022 24.5 474.506 24.5 475C24.5 475.663 24.2366 476.299 23.7678 476.768C23.2989 477.237 22.663 477.5 22 477.5Z" fill="#683000"/>
          <path d="M22 689C20.0222 689 18.0888 689.586 16.4443 690.685C14.7998 691.784 13.5181 693.346 12.7612 695.173C12.0043 697 11.8063 699.011 12.1922 700.951C12.578 702.891 13.5304 704.673 14.9289 706.071C16.3275 707.47 18.1093 708.422 20.0491 708.808C21.9889 709.194 23.9996 708.996 25.8268 708.239C27.6541 707.482 29.2159 706.2 30.3147 704.556C31.4135 702.911 32 700.978 32 699C32 696.348 30.9464 693.804 29.0711 691.929C27.1957 690.054 24.6522 689 22 689ZM22 701.5C21.5055 701.5 21.0222 701.353 20.6111 701.079C20.2 700.804 19.8795 700.414 19.6903 699.957C19.5011 699.5 19.4516 698.997 19.548 698.512C19.6445 698.027 19.8826 697.582 20.2322 697.232C20.5819 696.883 21.0273 696.644 21.5123 696.548C21.9972 696.452 22.4999 696.501 22.9567 696.69C23.4135 696.88 23.804 697.2 24.0787 697.611C24.3534 698.022 24.5 698.506 24.5 699C24.5 699.663 24.2366 700.299 23.7678 700.768C23.2989 701.237 22.663 701.5 22 701.5Z" fill="black"/>
          <circle cx="22" cy="475" r="20" stroke="black" stroke-width="3" stroke-dasharray="6 6"/>
          <circle cx="22" cy="699" r="20" stroke="black" stroke-width="3" stroke-dasharray="6 6"/>
          <path d="M22 239C20.0222 239 18.0888 239.586 16.4443 240.685C14.7998 241.784 13.5181 243.346 12.7612 245.173C12.0043 247 11.8063 249.011 12.1922 250.951C12.578 252.891 13.5304 254.673 14.9289 256.071C16.3275 257.47 18.1093 258.422 20.0491 258.808C21.9889 259.194 23.9996 258.996 25.8268 258.239C27.6541 257.482 29.2159 256.2 30.3147 254.556C31.4135 252.911 32 250.978 32 249C32 246.348 30.9464 243.804 29.0711 241.929C27.1957 240.054 24.6522 239 22 239ZM22 251.5C21.5055 251.5 21.0222 251.353 20.6111 251.079C20.2 250.804 19.8795 250.414 19.6903 249.957C19.5011 249.5 19.4516 248.997 19.548 248.512C19.6445 248.027 19.8826 247.582 20.2322 247.232C20.5819 246.883 21.0273 246.644 21.5123 246.548C21.9972 246.452 22.4999 246.501 22.9567 246.69C23.4135 246.88 23.804 247.2 24.0787 247.611C24.3534 248.022 24.5 248.506 24.5 249C24.5 249.663 24.2366 250.299 23.7678 250.768C23.2989 251.237 22.663 251.5 22 251.5Z" fill="#986438"/>
          <circle cx="22" cy="249" r="20" stroke="black" stroke-width="3" stroke-dasharray="6 6"/>
          <circle cx="22" cy="22" r="20" stroke="black" stroke-width="3" stroke-dasharray="6 6"/>
          <line x1="23.5" y1="43" x2="23.5" y2="229" stroke="black" stroke-width="3" stroke-dasharray="6 6"/>
          <line x1="23.5" y1="268" x2="23.5" y2="454" stroke="black" stroke-width="3" stroke-dasharray="6 6"/>
          <line x1="23.5" y1="493" x2="23.5" y2="679" stroke="black" stroke-width="3" stroke-dasharray="6 6"/>
          </svg>
        </div>
        <div className='flex flex-col pb-[3%] max-md:flex max-md:flex-col max-lg:justify-center max-lg:pt-[10%] max-sm:pt-[20%]'>
          <div className='pb-[5%] max-md:p-[4%] mb-[5%]'>
            <p className='font-bold text-[1.5vw] max-lg:text-[4vw] max-sm:text-[5vw]'>High School Diploma</p>
            <p className='font-extralight text-[1.2vw] text-[#683000] pt-[5%] pb-[5%] max-md:py-[3%] max-lg:text-[3vw] max-sm:text-[4vw]'>
              Science Baccalaureate
            </p>
          </div>
          <div className='pb-[5%] max-md:p-[4%] mb-[5%] '>
            <p className='font-bold text-[1.5vw] max-lg:text-[4vw] max-sm:text-[5vw]'>Professional Bachelor's Degree</p>
            <p className='font-extralight text-[1.2vw] text-[#683000] pt-[5%] max-md:py-[3%]  max-lg:text-[3vw] max-sm:text-[4vw]'>
              Bachelor in Computer Science,<br /> specializing in Information Systems and<br /> Software Engineering (ISIL)
            </p>
          </div>
          <div className='pb-[5%] max-md:p-[4%]'>
            <p className='font-bold text-[1.5vw] max-lg:text-[4vw] max-sm:text-[5vw]'>Master's Degree</p>
            <p className='font-extralight text-[1.2vw] text-[#683000] pt-[5%] max-md:py-[3%]  max-lg:text-[3vw] max-sm:text-[4vw]'>
              Master in Software Engineering at USTHB (IL)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
