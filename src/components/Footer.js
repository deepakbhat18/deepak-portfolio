import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Deepak Bhat</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} DB</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/deepakbhat18"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://linkedin.com/in/deepakrbhat"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:deepakravindrabhat@gmail.com"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Send Email"
              >
                <AiFillMail />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
