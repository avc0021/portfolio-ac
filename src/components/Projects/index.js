import React from 'react';
import Project1 from '../Project1'
import Project2 from '../Project2'
import Project3 from '../Project3'
import Project4 from '../Project4'
import Project5 from '../Project5'

function Projects () {

    return (
      <section className="projects-m">
              <div className="p-1">
              <Project1/>
              </div>
              <div className="p-1">
              <Project2/>
              </div>
              <div className="p-1">
              <Project3/>
              </div>
              <div className="p-1">
              <Project4/>
              </div>
              <div className="p-1">
              <Project5/>
              </div>
      </section>
    )
  }
  
export default Projects;

