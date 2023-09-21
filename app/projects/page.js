import React from "react";
import { getProjects } from '../projectdata.js';
import ProjectCard from './projectcard.js';
import '../globalstyle.css';
import style from './projects.module.css';

export default function Projects() {
  let projects = getProjects();
  let renderedProjects = projects.map((proj, index) => {
    return (
      <ProjectCard 
        key={index}
        name={proj.name} 
        description={proj.description} 
        src={proj.src}
        link={proj.link}
        git={proj.git}
      />
    ) 
  });

  return (
    <div>
      <div className='title' >
        Projects
      </div>
      <div className={style.projects}>
        {renderedProjects}
      </div>
    </div>
  );
};