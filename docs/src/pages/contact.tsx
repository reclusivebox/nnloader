import React from 'react';
import {Link} from 'gatsby';
import {Card, CardHeader, CardBody, Avatar, Box, Button, CardFooter} from 'grommet';
import {Linkedin, Send as Telegram, Chat as Whatsapp, Mail, Icon} from 'grommet-icons';

import Base from '../templates/base';

import '../styles/contact.scss';
// import info from '../other/ProjectInfo.json';
const info = require('../other/ProjectInfo.json');
// import avatar from '../images/Avatar.jpg';
const avatar = require('../images/Avatar.jpg');

function ContactButton(props: React.PropsWithChildren<{
  label: string,
  icon: Icon,
  link: string,
}>) {
  return (
    <Box background='brand' round='large' className='contactButton'>
      <a href={props.link} target='__blank'>
        <Button
          plain
          color='white'
          icon={<props.icon color='white' />}
          label={props.label}
        />
      </a>
    </Box>
  );
}

export default function ContactPage() {
  return (
    <Base>
      <Box align='center' pad='xlarge'>
        <Card className='contactContainer' >
          <CardHeader justify='center' pad='large' background='light-1'>
            <Avatar src={avatar} size='10em' className='avatar' />
          </CardHeader>
          <CardBody background='light-2' align='start' pad='large'>
            <p>Hello, I'm Bruno.</p>
            <p>
              I'm a passionate developer who fell in love with almost all flavors of computer science from an early age.
              I'm confident that I can bring a new perspective to almost any kind of project.
              If you have any software in need of some love, please contact me through one of the links below.
            </p>
          </CardBody>
          <CardFooter
            direction='row'
            pad='medium'
            gap='medium'
            align='center'
            justify='center'
            wrap={true}
          >

            {/* linkedin */}
            <ContactButton
              icon={Linkedin}
              label='Linkedin'
              link={info.linkedin}
            />

            {/* telegram */}
            <ContactButton
              icon={Telegram}
              label='Telegram'
              link={info.telegram}
            />

            {/* whatsapp */}
            <ContactButton
              icon={Whatsapp}
              label='Whatsapp'
              link={info.whatsapp}
            />

            {/* email */}
            <ContactButton
              icon={Mail}
              label='Email'
              link={info.email}
            />

          </CardFooter>
        </Card>
      </Box>
    </Base>
  );
}
