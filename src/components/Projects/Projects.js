import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import oralcareImg from "../../Assets/Projects/oralcare.png";
import bookmyslotImg from "../../Assets/Projects/bookmyslot.png";
import fedmedImg from "../../Assets/Projects/fedmed.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are key engineering projects I've architected and developed. Click <strong>Architecture</strong> on any project to inspect systems design details.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={oralcareImg}
              isBlog={false}
              badge="🏆 1st Place - CSE Project Competition"
              liveStatus="Active: Sub-200ms Latency (Spring Boot + PostgreSQL)"
              title="OralCare – Dental Clinic Management Platform"
              techs={["Spring Boot", "React.js", "PostgreSQL", "REST APIs", "Systems Design", "Maven"]}
              description="Architected a scalable clinical management system with real-time patient queue tracking, role-based access control, and an automated admin dashboard."
              bullets={[
                "Engineered database schema for real-time tracking and JWT/RBAC authentication, reducing scheduling overhead by 35%.",
                "Designed and implemented 10+ REST APIs; optimized PostgreSQL through strategic indexing, achieving sub-200ms response times with 99.2% system reliability.",
                "Developed admin dashboard automating critical workflows (email notifications, PDF report generation, treatment tracking), eliminating 40+ manual hours monthly.",
                "Engineered real-time queue prediction system; analyzed N+1 query patterns and implemented database indexing strategy, scaling throughput by 45% for concurrent sessions."
              ]}
              architecture={{
                flow: [
                  "React.js UI",
                  "Spring Security (JWT/RBAC)",
                  "Spring Boot REST Controllers",
                  "Service Layer & Queue Engine",
                  "PostgreSQL (Strategic Indexes)"
                ],
                decisions: [
                  "Systems Analysis & Queue Optimization: Analyzed N+1 query patterns and implemented composite database indexing on appointment status & time, reducing response times to sub-200ms.",
                  "Multi-Role Security Architecture: Enforced fine-grained JWT & Role-Based Access Control (RBAC) across Doctor, Receptionist, and Admin roles to guarantee data isolation.",
                  "Automated Workflow Pipeline: Integrated asynchronous email dispatch and dynamic PDF report generation, eliminating 40+ hours of manual administrative overhead per month."
                ],
                metrics: [
                  { key: "API Response Time", value: "< 200ms" },
                  { key: "System Reliability", value: "99.2%" },
                  { key: "Throughput Gain", value: "+45% under concurrent load" },
                  { key: "Admin Hours Saved", value: "40+ hours/month" }
                ]
              }}
              ghLink="https://github.com/deepakbhat18"
              ghLabel="View GitHub"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookmyslotImg}
              isBlog={false}
              liveStatus="Capacity: 1,000+ Concurrent Sessions (MySQL + JWT)"
              title="BookMySlot – Event and Slot Booking Platform"
              techs={["Spring Boot", "React.js", "MySQL", "JWT", "REST APIs", "Database Design"]}
              description="Designed and developed a robust booking and event management platform supporting 1,000+ concurrent users with 50+ daily bookings."
              bullets={[
                "Engineered 15+ secure REST APIs with JWT/RBAC authentication across four distinct user roles.",
                "Implemented multi-level approval workflows and seamless event-to-slot associations applying core software engineering principles.",
                "Performed database analysis and optimization through schema normalization and indexing, delivering 30% query improvement and reducing page load times by 2.1s.",
                "Built asynchronous notification pipeline with real-time alerts and interactive analytics dashboards, improving retention by 35%."
              ]}
              architecture={{
                flow: [
                  "React Client",
                  "JWT Authentication Filter",
                  "Spring Boot REST Controllers (15+ APIs)",
                  "Slot Booking & Approval Services",
                  "MySQL Normalized Database Engine"
                ],
                decisions: [
                  "Database Normalization & Indexing: Designed third-normal-form (3NF) relational schema for complex event-to-slot associations, eliminating redundant joins and improving query performance by 30%.",
                  "Multi-Level State Machine: Architected deterministic state transitions for booking approvals across 4 distinct user roles, preventing race conditions during concurrent slot reservations.",
                  "Asynchronous Alert Engine: Built background event emitter for real-time booking confirmations and notifications, improving user retention by 35%."
                ],
                metrics: [
                  { key: "Concurrent Capacity", value: "1,000+ users" },
                  { key: "Daily Bookings", value: "50+ daily bookings" },
                  { key: "Query Latency Improvement", value: "30% faster" },
                  { key: "Page Load Reduction", value: "-2.1 seconds" }
                ]
              }}
              ghLink="https://github.com/deepakbhat18"
              ghLabel="View GitHub"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fedmedImg}
              isBlog={false}
              liveStatus="High Availability: 99.9% Uptime (FastAPI + Docker)"
              title="FedMed-AI – Federated Learning Medical Diagnosis System"
              techs={["Spring Boot", "FastAPI", "Python", "PostgreSQL", "Docker", "Nginx", "Resilience4j"]}
              description="Architected distributed platform integrating Spring Boot and Python FastAPI for multi-disease risk analytics across 50,000+ patient records securely."
              bullets={[
                "Designed resilient asynchronous job processing using HTTP 202 polling and Resilience4j circuit breakers, sustaining 99.9% uptime and handling 10x traffic spikes.",
                "Implemented HIPAA-compliant security architecture with AOP-based audit logging, PHI masking, JWT refresh-token rotation, and rate limiting (100% compliance audit pass rate).",
                "Applied systems analysis to process 50,000+ records across decentralized data sources without centralizing raw PHI data.",
                "Deployed scalable multi-stage Docker containers behind Nginx reverse proxy using Flyway database migrations and JPA EntityGraphs; reduced deployment time by 50%."
              ]}
              architecture={{
                flow: [
                  "Client Requests",
                  "Nginx Reverse Proxy",
                  "Spring Boot Orchestrator",
                  "Resilience4j Circuit Breaker",
                  "FastAPI AI Risk Analytics Service",
                  "Decentralized PostgreSQL Nodes"
                ],
                decisions: [
                  "Decentralized Privacy & HIPAA Compliance: Designed federated architecture processing 50,000+ records across decentralized nodes without centralizing Protected Health Information (PHI). Enforced AOP audit logging and data masking.",
                  "Fault Tolerance & Circuit Breaking: Implemented Resilience4j circuit breakers and HTTP 202 asynchronous polling, sustaining 99.9% uptime during 10x traffic surges.",
                  "Containerized Microservice Deployment: Deployed multi-stage Docker containers behind an Nginx reverse proxy using Flyway automated migrations and JPA EntityGraphs, cutting deployment time by 50%."
                ],
                metrics: [
                  { key: "Records Analyzed", value: "50,000+ patient records" },
                  { key: "System Availability", value: "99.9% uptime" },
                  { key: "Compliance Audit Pass Rate", value: "100%" },
                  { key: "Deployment Speed", value: "50% faster with Docker" }
                ]
              }}
              ghLink="https://github.com/deepakbhat18"
              ghLabel="View GitHub"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
