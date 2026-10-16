import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaJava } from "react-icons/fa";
import {
  SiSpringboot,
  SiSpring,
  SiPostgresql,
  SiMysql,
  SiFastapi,
  SiPython,
  SiJavascript,
  SiReact,
  SiC,
  SiHibernate,
  SiJsonwebtokens,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Programming Languages */}
      <Col xs={6} sm={4} md={2} className="tech-icons">
        <FaJava fontSize="28px" style={{ color: "#f89820" }} />
        <div className="tech-icons-text">Java</div>
      </Col>
      <Col xs={6} sm={4} md={2} className="tech-icons">
        <SiJavascript fontSize="26px" style={{ color: "#f7df1e" }} />
        <div className="tech-icons-text">JavaScript</div>
      </Col>
      <Col xs={6} sm={4} md={2} className="tech-icons">
        <SiPython fontSize="26px" style={{ color: "#3776ab" }} />
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={6} sm={4} md={2} className="tech-icons">
        <SiC fontSize="26px" style={{ color: "#a8b9cc" }} />
        <div className="tech-icons-text">C</div>
      </Col>
      <Col xs={6} sm={4} md={2} className="tech-icons">
        <SiPostgresql fontSize="26px" style={{ color: "#336791" }} />
        <div className="tech-icons-text">PostgreSQL</div>
      </Col>
      <Col xs={6} sm={4} md={2} className="tech-icons">
        <SiMysql fontSize="28px" style={{ color: "#00758f" }} />
        <div className="tech-icons-text">MySQL</div>
      </Col>

      {/* Backend Frameworks & Systems */}
      <Col xs={6} sm={4} md={2} className="tech-icons">
        <SiSpringboot fontSize="26px" style={{ color: "#6db33f" }} />
        <div className="tech-icons-text">Spring Boot</div>
      </Col>
      <Col xs={6} sm={4} md={2} className="tech-icons">
        <SiSpring fontSize="26px" style={{ color: "#6db33f" }} />
        <div className="tech-icons-text">Spring Framework</div>
      </Col>
      <Col xs={6} sm={4} md={2} className="tech-icons">
        <SiJsonwebtokens fontSize="26px" style={{ color: "#d63aff" }} />
        <div className="tech-icons-text">JWT &amp; Security</div>
      </Col>
      <Col xs={6} sm={4} md={2} className="tech-icons">
        <SiFastapi fontSize="26px" style={{ color: "#009688" }} />
        <div className="tech-icons-text">FastAPI</div>
      </Col>
      <Col xs={6} sm={4} md={2} className="tech-icons">
        <SiHibernate fontSize="26px" style={{ color: "#bcae79" }} />
        <div className="tech-icons-text">JPA / Hibernate</div>
      </Col>

      {/* Frontend Development */}
      <Col xs={6} sm={4} md={2} className="tech-icons">
        <SiReact fontSize="26px" style={{ color: "#61dafb" }} />
        <div className="tech-icons-text">React.js</div>
      </Col>
      <Col xs={6} sm={4} md={2} className="tech-icons">
        <SiHtml5 fontSize="26px" style={{ color: "#e34f26" }} />
        <div className="tech-icons-text">HTML5</div>
      </Col>
      <Col xs={6} sm={4} md={2} className="tech-icons">
        <SiCss3 fontSize="26px" style={{ color: "#1572b6" }} />
        <div className="tech-icons-text">CSS3</div>
      </Col>
    </Row>
  );
}

export default Techstack;
