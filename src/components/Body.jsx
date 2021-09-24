import React from 'react';
import AboutBody from './AboutBody';
import ProjectsBody from './ProjectsBody';
import SkillsBody from './SkillsBody';
import WorkBody from './WorkBody';
import ContactBody from './ContactBody';
import './Body.css';

const Body = () => {
    return (
        <div className="Body">
           <section id='about'>
               <AboutBody/>
           </section>
          <section id='project'>
              <ProjectsBody/>
          </section>
          <sections id= 'skill'>
              <SkillsBody/>
          </sections>
          <sections id='work'>
              <WorkBody/>
          </sections>
          <sections id='contact'>
              <ContactBody/>
          </sections>
        </div>
    )
}

export default Body
