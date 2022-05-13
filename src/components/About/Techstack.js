import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
} from "react-icons/di";
import {
  SiNextdotjs,
} from "react-icons/si";
function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={5} md={3} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={5} md={3} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={5} md={3} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={5} md={3} className="tech-icons">
        <SiNextdotjs />
      </Col>
      <Col xs={5} md={3} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={5} md={3} className="tech-icons">
        <DiMongodb />
      </Col>
    </Row>
  );
}
export default Techstack;
