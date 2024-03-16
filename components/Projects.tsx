import React from 'react'
import ProjectCard from './ProjectCard'


const Projects = () => {
  return (
    <section>
    <div className='flex items-center justify-center text-4xl font-medium-bold mt-20'>My Projects</div>
    <div className='mt-10 container flex items-center justify-center ml-10 '>
    <ProjectCard />
    </div>
    </section>
  )
}

export default Projects