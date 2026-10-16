import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a Software Engineer and Computer Science undergraduate at{" "}
              <b className="purple">CMR Institute of Technology, Bengaluru</b> (CGPA: 8.72/10), passionate about engineering robust, scalable backend systems and responsive web applications.
              <br />
              <br />
              My core technical proficiency lies in
              <i>
                <b className="purple">
                  {" "}
                  Java, Spring Boot, PostgreSQL, MySQL, Python, and JavaScript
                </b>
              </i>
              .
              <br />
              <br />
              My primary engineering interests include designing &amp; scaling
              <i>
                <b className="purple">
                  {" "}
                  High-Throughput REST APIs, Microservices, and Resilient Distributed Systems
                </b>
              </i>
              , backed by data-driven query optimization and clean schema design.
              <br />
              <br />
              I enjoy building production-grade full-stack solutions using{" "}
              <b className="purple">Spring Boot</b> with robust security (JWT/RBAC) on the backend, paired with modern interfaces in{" "}
              <i>
                <b className="purple">React.js</b>
              </i>
              , and containerized deployment with <b className="purple">Docker</b> and <b className="purple">Nginx</b>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
