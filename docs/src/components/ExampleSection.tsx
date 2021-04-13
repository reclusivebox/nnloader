/*
  This component is a section for the main page with a header, a description paragraph and a code block.
*/
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CodeBox from "./CodeBox";

import "../styles/base.scss";
import "../styles/ExampleSection.scss";

export default function ExampleSection(
  props: React.PropsWithChildren<{ title: string, code: any, className?: string}>
) {
  return (
    <Container fluid className={props.className ?? ''}>
      <Row className="justify-content-around">
        <Col className="mb-3 mb-md-1 mr-md-3" sm={12} md="auto">
          <h3 className="exampleSectionTitle mb-3">
            {props.title}
          </h3>
          <div className="exampleSectionContent lead">
            {props.children}
          </div>
        </Col>
        <Col sm={12} md="auto">{props.code}</Col>
      </Row>
    </Container>
  );
}
