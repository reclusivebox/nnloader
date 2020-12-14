import React, {useState} from 'react';
import {Button, Box, Layer, Card} from 'grommet';
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
    <>
      <Box
        direction='row'
        align='center'
        height='2em'
        background='brand'
        pad='small'
        gap='small'
        round='medium'
        className={`cardButton`}
        style={{width: 'max-content'}}
        onClick={() => {
          navigator.clipboard.writeText(props.toCopy)
            .then(() => {
              setLayer(true);
            });
        }}
      >
        <img src={props.iconLink} style={{height: '150%'}}/>
        <Button
          label={props.label}
          color='white'
          plain
        />
      </Box>
      {layered && <Layer>
          <Card
            style={{width: 'max-content'}}
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
        </Layer>}
    </>
  );
}