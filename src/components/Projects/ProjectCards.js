import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt={props.title} />
      <Card.Body className="d-flex flex-column">
        {props.badge && (
          <div>
            <span className="project-award-badge">{props.badge}</span>
          </div>
        )}
        <Card.Title style={{ fontWeight: 700 }}>{props.title}</Card.Title>

        {props.techs && props.techs.length > 0 && (
          <div className="project-tech-badges">
            {props.techs.map((tech, index) => (
              <span key={index} className="project-tech-badge">
                {tech}
              </span>
            ))}
          </div>
        )}

        <Card.Text style={{ textAlign: "justify", fontSize: "0.92rem", color: "#ddd" }}>
          {props.description}
        </Card.Text>

        {props.bullets && props.bullets.length > 0 && (
          <ul className="project-bullets">
            {props.bullets.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        )}

        <div className="mt-auto pt-3">
          {props.ghLink && (
            <Button
              variant="primary"
              href={props.ghLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub /> &nbsp;
              {props.ghLabel || (props.isBlog ? "Blog" : "GitHub")}
            </Button>
          )}

          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
