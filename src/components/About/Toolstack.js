import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiSqllite } from "react-icons/di";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiMacos,
  SiCoronarenderer,
  SiAmazons3,
  SiGooglecloud,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="MacOs">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Visual Studio Code">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Postman">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Google Cloud">
        <SiGooglecloud />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Amazon Web Services s3 Buckets">
        <SiAmazons3 />
      </Col>
    </Row>
  );
}

export default Toolstack;
