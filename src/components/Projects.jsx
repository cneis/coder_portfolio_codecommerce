import React from 'react'
import ProjectItem from './ProjectItem'
import nftImg from '../assets/buynfts.png'
import jetskiImg from '../assets/jetski.png'
import skytoursImg from '../assets/skytours.png'
import samtpfotenImg from '../assets/samtpfotenblog_for_portfolio.png'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#052838]'>Projects</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Libero quisquam ipsa facilis officia laboriosam eveniet in ex assumenda
            adipisci eius.
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={nftImg} title='NFT Website' />
            <ProjectItem img={jetskiImg} title='JetSki Website' />
            <ProjectItem img={skytoursImg} title='Ski Tours Website' />
            <ProjectItem img={samtpfotenImg} title='Blog Modul' />
        </div>
    </div>
  )
}

export default Projects