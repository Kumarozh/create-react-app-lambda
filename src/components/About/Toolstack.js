import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiHeroku,
} from "react-icons/si";
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={5} md={3} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={5} md={3} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={5} md={3} className="tech-icons">
        <SiHeroku />
      </Col>
    </Row>
  );
}
export default Toolstack;
