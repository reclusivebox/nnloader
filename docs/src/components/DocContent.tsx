/*
    This component is the body of a documentation page.
*/
import React from "react";
import {
  Card,
  ListGroup,
  Pagination,
  Container,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import { Link } from "gatsby";
import { ArrowLeft as Left, ArrowRight as Right } from "react-bootstrap-icons";

import "../styles/base.scss";
import "../styles/DocContent.scss";

type LinkList = Array<[number, string, string]>;
type DocContentProps = React.PropsWithChildren<{
  links: LinkList;
  activeItem: string;
  className?: string;
}>;

function DocListGroup(props: DocContentProps) {
  return (
    <ListGroup variant="flush">
      {props.links.map(([index, title, link]) => {
        return (
          <ListGroup.Item
            active={title === props.activeItem}
            action
            as={Link}
            to={link}
          >
            <span className="h5 font-weight-light">{`${index}. ${title}`}</span>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}

function DocPager(props: DocContentProps) {
  const backButton = props.links[0][1] !== props.activeItem;
  const nextButton =
    props.links[props.links.length - 1][1] !== props.activeItem;

  const nextLink = nextButton
    ? props.links[
        props.links.findIndex((link) => link[1] === props.activeItem) + 1
      ][2]
    : "";
  const previousLink = backButton
    ? props.links[
        props.links.findIndex((link) => link[1] === props.activeItem) - 1
      ][2]
    : "";

  return (
    <>
      {backButton ? (
        <Button
          variant="primary"
          as={Link}
          to={previousLink}
          className="rounded-pill m-1 text-white"
        >
          <Left />
        </Button>
      ) : (
        ""
      )}
      {nextButton ? (
        <Button
          variant="primary"
          as={Link}
          to={nextLink}
          className="rounded-pill m-1 text-white"
        >
          <Right />
        </Button>
      ) : (
        ""
      )}
    </>
  );
}

export function DocListCard(props: DocContentProps) {
  return (
    <Card
      className={`shadow-sm p-2 rounded-lg w-auto h-auto ${
        props.className ?? ""
      }`}
    >
      <DocListGroup links={props.links} activeItem={props.activeItem} />
    </Card>
  );
}

export function DocContent(props: DocContentProps) {
  return (
    <Container fluid className="p-3">
      <Row className="justify-content-center">
        <Col xs={12} lg={4} className="mb-3 mb-lg-0">
          <DocListCard links={props.links} activeItem={props.activeItem} />
        </Col>
        <Col xs={12} lg={8}>
          <div className="min-vh-100">
            {props.children}
            <Row className="justify-content-around mt-5">
              <DocPager {...props} />
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
