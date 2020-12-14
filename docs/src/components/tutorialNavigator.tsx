/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
import React from 'react';
import {Card, CardHeader, CardBody} from 'grommet';
import {Link} from 'gatsby';

import '../styles/tutorialNavigator.scss';

function LinkContainer({active, title, id, path}) {
  return (
    <div className={`${active? 'tutorialActiveLink':'tutorialLink'}`}>
      <Link to={path}>
        {id}. {title}
      </Link>
    </div>
  );
}

export default function TutorialNavigator({active, items}) {
  return (
    <Card
      round="small"
      background="light-1"
      fill={false}
      className="tutorialContainer"
    >
      <CardHeader pad="small" background="light-2">
        <h6>Tutorial Sections</h6>
      </CardHeader>
      <CardBody pad="medium">
        {items.map(
            ({id, path, title}) => {
              return <LinkContainer
                active={id===active}
                id={id}
                title={title}
                path={path}
              />;
            },
        )}
      </CardBody>
    </Card>
  );
}

