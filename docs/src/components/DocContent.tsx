/*
    This component is the body of a documentation page.
*/
import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { Link } from "gatsby";

import "../styles/base.scss";
import "../styles/DocContent.scss";

type LinkList = { [index: string]: string };
type DocContentProps = React.PropsWithChildren<{
  links: LinkList;
  activeItem: string;
}>;

function DocListGroup(
  props: DocContentProps
) {
  return (
    <ListGroup variant="flush">
      {Object.entries(props.links).map(([title, link]) => {
        return (
          <ListGroup.Item
            active={title === props.activeItem}
            action
            as={Link}
            to={link}
          >
            {title}
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}

export function DocListCard(props: DocContentProps) {
    return (
        <Card className="shadow-sm m-3 rounded-lg w-auto h-auto">
            <DocListGroup {...props}/>
        </Card>
    );
}

export function DocContent(props: DocContentProps) {
    return (
        <div className="h-100 docContent">

        </div>
    );
}
