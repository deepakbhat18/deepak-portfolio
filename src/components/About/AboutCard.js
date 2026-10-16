import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello! I’m <span className="purple">Deepak Bhat</span>, a passionate{" "}
            <span className="purple">Software Engineer</span> based in{" "}
            <span className="purple">Bengaluru, India</span>.
            <br />
            I am pursuing my <b>Bachelor of Engineering in Computer Science and Engineering</b> at{" "}
            <span className="purple">CMR Institute of Technology, Bengaluru</span> (2023 – 2027) with a current CGPA of <span className="purple">8.72 / 10</span>.
            <br />
            <br />
            My core academic foundation and coursework include:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Data Structures &amp; Algorithms and Object-Oriented Programming
            </li>
            <li className="about-activity">
              <ImPointRight /> Database Management Systems &amp; Database Design
            </li>
            <li className="about-activity">
              <ImPointRight /> Systems Design &amp; Scalable System Architecture
            </li>
            <li className="about-activity">
              <ImPointRight /> Operating Systems, Computer Networks &amp; ML Fundamentals
            </li>
          </ul>

          <p style={{ textAlign: "justify", marginTop: "15px" }}>
            Key leadership and competitive achievements:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> 🏆 <b>1st Place</b>, CSE Department Project Competition (2025) among 50+ entries for OralCare.
            </li>
            <li className="about-activity">
              <ImPointRight /> 🚀 <b>Team Lead</b>, Smart India Hackathon 2025 — leading a 6-member team in developing a scalable waterborne disease tracking solution.
            </li>
            <li className="about-activity">
              <ImPointRight /> 🥈 <b>Runner-Up</b>, CMRIT DSA Hackathon — placed 2nd among 100+ competitive programmers.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)", marginTop: "20px" }}>
            "Driven to architect scalable, resilient systems that solve real-world problems with elegance."
          </p>
          <footer className="blockquote-footer">Deepak Bhat</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
