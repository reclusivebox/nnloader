import React, {useState} from 'react';
import {Button, Box, Card} from 'grommet';
import {Close, Icon} from 'grommet-icons';

import '../styles/copyButton.scss';

export function CopyButton(props: React.PropsWithChildren<{
  toCopy: string,
  label: string,
  className?: string,
  iconLink?: string,
}>) {
  const [layered, setLayer] = useState(false);

  return (
    <Box direction='column' align='center' justify='center'>
      <Box
        direction='row'
        align='center'
        height='2em'
        background='brand'
        margin='small'
        pad='small'
        round='medium'
        className={`cardButton`}
        style={{width: 'max-content'}}
        onClick={() => {
          navigator.clipboard.writeText(props.toCopy)
            .then(() => {
              setLayer(!layered);
            });
        }}
      >
        <img src={props.iconLink} style={{maxHeight: '2rem', marginRight: '1rem'}}/>
        <Button
          label={props.label}
          color='white'
          plain
        />
      </Box>
      {layered &&
        <Card
          style={{width: 'max-content', height: 'max-content'}}
          pad='medium'
          align='center'
          gap='medium'
        >
          {props.children}
          <Button
            primary
            color='transparent'
            icon={<Close color='brand' />}
            onClick={() => setLayer(false)}
          />
        </Card>
      }
    </Box>
  );
}