/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
import React from 'react';
import {Card, CardHeader, CardFooter, Button, Box} from 'grommet';
import {Github, Icon} from 'grommet-icons';
import {Link} from 'gatsby';

import '../styles/homePageCard.scss';

export function CardButton(
  props: React.PropsWithChildren<{
    icon: Icon,
    label: string,
    link: string,
  }>,
) {
return (
    <Box
      background='brand'
      pad='small'
      round='medium'
      className='cardButton'
      color='white'
    >
      <Link to={props.link} target='__blank'>
        <Button
          label={props.label}
          icon={<props.icon color='light-1' />}
          color='white'
          plain
        />
      </Link>
    </Box>
  );
}

export function HomePageCard(
    props: React.PropsWithChildren<{}>,
) {
  return (
    <Card
      round='small'
      background='light-1'
      basis='auto'
      className='homePageCard'
    >
      {props.children}
    </Card>
  );
}


