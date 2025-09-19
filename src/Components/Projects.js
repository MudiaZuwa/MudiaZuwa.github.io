import React, { useState } from "react";
import ProjectChild from "./ProjectChild";
import { Accordion, Card, Col, Row } from "react-bootstrap";
import { ProjectList } from "./ProjectList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faLayerGroup,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
  const [viewMore, setViewMore] = useState(false);
  const [viewDescription, setViewDescription] = useState([false, false, false]);

  const handleViewDesToggle = (index) => {
    setViewDescription((prevState) => {
      const updatedState = [...prevState];
      updatedState[index] = !updatedState[index];
      return updatedState;
    });
  };

  return (
    <div id="projects">
      <h2 className="headings">Projects</h2>
      {ProjectList.slice(0, 3).map((project, index) => (
        <Row className="mb-2" key={index}>
          <Col xs={12} md={6}>
            <Card
              style={{
                backgroundColor:
                  index === 0 ? "#445E93" : index === 1 ? "#468F8A" : "#7A7F8C",
              }}
            >
              <Card.Header className="d-flex projectHead align-items-center">
                <FontAwesomeIcon
                  className="projectIcon me-2"
                  icon={faLayerGroup}
                />
                <h3 className="me-auto">{project.name}</h3>{" "}
                {/* Push links to the right */}
                <a
                  href={project.githubLink}
                  className="links me-2"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGithub} className="fs-4" />
                </a>
                <a href={project.pageLink} className="links" target="_blank">
                  <FontAwesomeIcon icon={faLink} className="fs-4" />
                </a>
                {project.downloadLink && (
                  <a
                    href={project.downloadLink}
                    className="links"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faDownload} className="fs-4" />
                  </a>
                )}
              </Card.Header>

              <Card.Body className="projectDes">
                {project.intro && !viewDescription[index] && (
                  <p>{project.intro}</p>
                )}
                {viewDescription[index] && (
                  <>
                    {project.description && <p>{project.description}</p>}
                    <div className="projPrograms">
                      {project.code.map((Program, index) => (
                        <Program key={index} />
                      ))}
                    </div>
                  </>
                )}
                <hr />
                <p
                  onClick={() => handleViewDesToggle(index)}
                  style={{ cursor: "pointer", color: "white" }}
                >
                  View More
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6}></Col>
        </Row>
      ))}

      {viewMore && (
        <Accordion>
          {ProjectList.slice(3).map((project, index) => {
            return (
              <ProjectChild
                project={project}
                key={index + 3}
                index={index + 3}
              />
            );
          })}
        </Accordion>
      )}
      <div className="d-flex justify-content-center" style={{ width: "100%" }}>
        <h5
          className=" border rounded-3 headings"
          onClick={() => setViewMore(!viewMore)}
          style={{ cursor: "pointer" }}
        >
          {!viewMore ? "View More Projects" : "View Less"}
        </h5>
      </div>
    </div>
  );
};

export default Projects;
