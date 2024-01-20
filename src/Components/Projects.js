import React from 'react';
import ProjectChild from './ProjectChild';
import { Accordion } from 'react-bootstrap';
import { ProjectList } from './ProjectList';

const Projects = () => {
  return (
    <div id="projects">
      <h2 className="headings">Projects</h2>
      <Accordion>
        {ProjectList.map((project, index) => {
          return (
            <ProjectChild
              project={project}
              key={index}
              index={index}
            ></ProjectChild>
          );
        })}
      </Accordion>
    </div>
  );
};

export default Projects;
