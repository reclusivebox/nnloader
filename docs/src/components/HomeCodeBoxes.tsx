import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "gatsby";

// import "../styles/HomeCodeBoxes.scss";
import "../styles/base.scss";
import {header, expandOnHover} from "../styles/modules/HomeCodeBoxes.module.scss";

type HomeCodeBoxProps = React.PropsWithChildren<{
  codebox: JSX.Element;
  title: string;
  link?: string;
}>;

export default function HomeCodeBox(props: HomeCodeBoxProps) {
  return (
    <Container className="my-4">
      {/* <Row>
      </Row> */}
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <h4 className={`display-4 pl-3 ${header}`}>{props.title}</h4>
          <p className="lead text-muted pl-2">{props.children}</p>
        </Col>
        <Col xs={12} md={6}>
          <div className={`${expandOnHover} py-md-3`}>
            <Link to={props.link ?? "/docs/start"} className="stretched-link" />
            {props.codebox}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
