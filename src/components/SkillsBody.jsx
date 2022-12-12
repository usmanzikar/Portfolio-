import React from 'react';
import './Skill.css';
import Seperator from './common/Seperator';

const SkillsBody = () => {
   
    return (
        <div className="SkillsBody">
        <Seperator/>
           <div className='skill-heading'>My Experties</div>
           <div className='skill'>
               <li><h3>HTML</h3>
               <span className='bar'> <span className='html'></span>90%</span>
               </li>
               <li><h3>CSS</h3>
               <span className='bar'> <span className='CSS'></span>85%</span>
               </li>
               <li><h3>Bootstrap 4&5</h3>
               <span className='bar'> <span className='Bootstrap'></span>80%</span>
               </li>
               <li><h3>JavaScript</h3>
               <span className='bar'> <span className='JavaScript'></span>55%</span>
               </li>
               <li><h3>React JS</h3>
               <span className='bar'> <span className='React'></span>65%</span>
               </li>
               <li><h3>SQL</h3>
               <span className='bar'> <span className='sql'></span>45%</span>
               </li>
           </div>
        </div>
    );
}

export default SkillsBody;
