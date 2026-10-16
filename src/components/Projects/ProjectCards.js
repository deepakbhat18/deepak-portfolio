import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { CgWebsite } from "react-icons/cg";
import { BsGithub, BsDiagram3, BsCheckCircleFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

function ProjectCards(props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Card className="project-card-view">
        <Card.Img variant="top" src={props.imgPath} alt={props.title} />
        <Card.Body className="d-flex flex-column">
          {/* Feature #9: Real-time Live Status / Health Check Badge */}
          {props.liveStatus && (
            <div className="project-status-badge">
              <span className="pulse-dot"></span>
              <span className="status-text">{props.liveStatus}</span>
            </div>
          )}

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

          <div className="mt-auto pt-3 d-flex flex-wrap gap-2">
            {/* Feature #6: Architecture Deep Dive Button */}
            {props.architecture && (
              <Button
                variant="outline-primary"
                className="arch-modal-btn"
                onClick={() => setShowModal(true)}
              >
                <BsDiagram3 /> &nbsp;Architecture
              </Button>
            )}

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
              >
                <CgWebsite /> &nbsp;
                {"Demo"}
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>

      {/* Feature #6: Interactive Architecture Deep Dive Modal */}
      {props.architecture && (
        <Modal
          show={showModal}
          onHide={() => setShowModal(false)}
          size="lg"
          centered
          className="arch-modal-dialog"
        >
          <Modal.Header className="arch-modal-header">
            <Modal.Title className="text-white d-flex align-items-center">
              <BsDiagram3 className="purple me-2" />
              <span>{props.title}</span>
            </Modal.Title>
            <Button
              variant="link"
              className="text-white p-0"
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              <AiOutlineClose size={20} />
            </Button>
          </Modal.Header>
          <Modal.Body className="arch-modal-body">
            <div className="arch-section-box">
              <h5 className="arch-subheading">Data Flow &amp; System Architecture</h5>
              <div className="arch-pipeline-flow">
                {props.architecture.flow.map((step, idx) => (
                  <span key={idx} className="arch-step-badge">
                    {step} {idx < props.architecture.flow.length - 1 && <span className="arch-arrow">➔</span>}
                  </span>
                ))}
              </div>
            </div>

            <div className="arch-section-box mt-3">
              <h5 className="arch-subheading">Systems Design &amp; Architectural Decisions</h5>
              <ul className="arch-decision-list">
                {props.architecture.decisions.map((item, idx) => (
                  <li key={idx}>
                    <BsCheckCircleFill className="purple me-2 flex-shrink-0" style={{ marginTop: "4px" }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="arch-section-box mt-3">
              <h5 className="arch-subheading">Performance &amp; Reliability Metrics</h5>
              <div className="d-flex flex-wrap gap-2">
                {props.architecture.metrics.map((metric, idx) => (
                  <div key={idx} className="arch-metric-pill">
                    <strong>{metric.key}:</strong> {metric.value}
                  </div>
                ))}
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className="arch-modal-footer">
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}

export default ProjectCards;
