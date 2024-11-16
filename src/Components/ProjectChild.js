import React from "react";
import { Accordion } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/fontawesome-free-solid";

const ProjectChild = ({ project, index }) => {
  return (
    <div className="projectChild">
      <Accordion.Item eventKey={index}>
        <Accordion.Header className="projectHead">
          <FontAwesomeIcon className="projectIcon" icon={faLayerGroup} />
          <h3>{project.name}</h3>
          <a href={project.githubLink} className="links" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href={project.pageLink} className="links" target="_blank">
            <FontAwesomeIcon icon={faLink} />
          </a>
        </Accordion.Header>
        <Accordion.Body className="projectDes">
          {project.description && <p>{project.description}</p>}
          <div className="projPrograms">
            {project.code.map((Program, index) => (
              <Program key={index} />
            ))}
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
};

export default ProjectChild;
