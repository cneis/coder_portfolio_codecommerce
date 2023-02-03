import React from 'react'

const WorkItem = ({year, title, duration, details}) => {
  return (
    <>
    <ol className='flex flex-col md:flex-row relative border-l border-stone-200'>
        <li className='mb-10 ml-4'>
            <div className='absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border-white'/>
            <p className='flex flew-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
                <span className='inline-block px-2 py-1 font-semibold bg-gradient-to-r from-[rgba(249,123,54,1)] to-[rgba(164,78,163,1)] rounded-md text-white'>{year}</span>
                <span className='text-lg font-semibold text-[#052838]'>{title}</span>
                <span className='my-1 text-sm font-normal leading-none'>{duration}</span>
               
            </p>
            <p>
                <span className='my-2 text-base font-normal'>{details}</span>
            </p>
        </li>
    </ol>
    
    </>
  )
}

export default WorkItem