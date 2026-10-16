import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiGit,
  SiDocker,
  SiApachemaven,
  SiNginx,
  SiPostman,
  SiSwagger,
} from "react-icons/si";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import intelliJ from "../../Assets/TechIcons/intellij-idea.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={6} sm={4} md={2} className="tech-icons">
        <SiGit fontSize="26px" style={{ color: "#f05032" }} />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={6} sm={4} md={2} className="tech-icons">
        <SiApachemaven fontSize="26px" style={{ color: "#c71a36" }} />
        <div className="tech-icons-text">Maven</div>
      </Col>
      <Col xs={6} sm={4} md={2} className="tech-icons">
        <SiDocker fontSize="26px" style={{ color: "#2496ed" }} />
        <div className="tech-icons-text">Docker</div>
      </Col>
      <Col xs={6} sm={4} md={2} className="tech-icons">
        <SiNginx fontSize="26px" style={{ color: "#009639" }} />
        <div className="tech-icons-text">Nginx</div>
      </Col>
      <Col xs={6} sm={4} md={2} className="tech-icons">
        <SiPostman fontSize="26px" style={{ color: "#ff6c37" }} />
        <div className="tech-icons-text">Postman</div>
      </Col>
      <Col xs={6} sm={4} md={2} className="tech-icons">
        <SiSwagger fontSize="26px" style={{ color: "#85ea2d" }} />
        <div className="tech-icons-text">Swagger / OpenAPI</div>
      </Col>
      <Col xs={6} sm={4} md={2} className="tech-icons">
        <img src={intelliJ} alt="IntelliJ IDEA" className="tech-icon-images" />
        <div className="tech-icons-text">IntelliJ IDEA</div>
      </Col>
      <Col xs={6} sm={4} md={2} className="tech-icons">
        <img src={vsCode} alt="VS Code" className="tech-icon-images" />
        <div className="tech-icons-text">VS Code</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
