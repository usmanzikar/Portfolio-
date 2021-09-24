import React from 'react';
import Seperator from './common/Seperator';
import './project.css'
import ProjectCard from './ProjectCard';
import { ProjectData } from './Projects';
const ProjectsBody = () => {
    const data=ProjectData;
    return (
        <div className="projects">
        <Seperator/>
           <label className="heading">My Projects</label>
           <div>
               {data.map((project)=>{
                   return <ProjectCard project={project}/>
               })}
           </div>
        </div>
    );
}

export default ProjectsBody;
