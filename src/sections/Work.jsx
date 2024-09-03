import React from 'react'

const Work = () => {
  return (
    <div className='w-full h-[100vh]'>
      <div className='flex flex-col gap-5'>
        <p className='text-[#B5C18E] font-bold text-5xl pt-16 pl-16'>My Latest Works</p>
        <div className='flex justify-between gap-96 pl-16 text-xl'>
        <p className='font-light text-[#683000]'>Perfect solution for digital experience</p>
        <p className='font-light text-base text-[#FF0000] underline mr-36'>explore more works</p>
        </div>
      </div>
        <div className='flex gap-16 pl-16 pt-24'>
            <div className='w-[500px] h-[500px] bg-[#FDCD66] rounded rounded-xl'> </div>
            <div className='w-[500px] h-[500px] bg-[#38756A] rounded rounded-xl'> </div>  
        </div>
    </div>
  )
}

export default Work
