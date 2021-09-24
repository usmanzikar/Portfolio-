import React from 'react'
import './projectcard.css';
const ProjectCard = ({project}) => {
    return (
        <div className="project_card">
            <div className='project_info'>
                <label className="project-title">{project.title}</label>
                <p className='about-project'>{project.about}</p>
                <div className='project-links'>
               <a className='project-link' href={project.demo}>
                   <div className='link-button'>
                      Visit Site
                   </div>
               </a>
               </div>
            </div>
            <div className='image-adj'>
             <img src={project.image} className="project-img" />
             </div>
        </div>
    );
}

export default ProjectCard
