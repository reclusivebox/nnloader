import React, {useContext} from 'react';
import Base from '../templates/base';
import {Box, Heading, Card, CardHeader, CardBody, Text, ResponsiveContext} from 'grommet';
import {Link} from 'gatsby';
import {Github, Money, Link as LinkIcon} from 'grommet-icons';
import QRCode from 'qrcode.react';

import {useResponsiveWatcher} from '../utils/responsiveWatcher';
// const ResponsiveWatcher = require('../utils/responsiveWatcher');

import MarkdownCode from '../components/markdownCode';
import {HomePageCard, CardButton} from '../components/homePageCard';
import {CopyButton} from '../components/copyButton';

import '../styles/index.scss';

// import stringExample from '!!raw-loader!../../examples/string.js';
const {default: stringExample} = require('!!raw-loader!../../examples/string.js');
// import bufferExample from '!!raw-loader!../../examples/buffer.js';
const {default: bufferExample} = require('!!raw-loader!../../examples/buffer.js');
// import jsonExample from '!!raw-loader!../../examples/json.js';
const {default: jsonExample} = require('!!raw-loader!../../examples/json.js');
// import links from '../other/ProjectInfo.json';
const links = require('../other/ProjectInfo.json');

function CodeBox(props: React.PropsWithChildren<{
  header: string,
  lang: string,
  code: string,
  link: string,
}>) {
  return (
    <div className="cardContainer">
      <Link to={props.link} target='__blank' >
        <Card margin="medium">
          <CardHeader background="light-2">
            <h3>{props.header}</h3>
          </CardHeader>
          <CardBody pad="medium" background="light-1">
            <MarkdownCode lang={props.lang} className='codeBox' code={props.code} />
          </CardBody>
        </Card>
      </Link>
    </div>
  );
}

export default function MainPage() {
  const bigScreen = useResponsiveWatcher();
  // const bigScreen =
  //   useContext(ResponsiveContext) === 'large' ||
  //   useContext(ResponsiveContext) === 'xlarge';

  return (
    <Base>
      <div className='pageGrid'>
        <Heading level={2}>Load almost anything</Heading>
        <Box
          justify="center"
          direction={bigScreen? 'row-responsive': 'column'}
          wrap={bigScreen}
          pad="small"
          gap="medium"
        >
          <CodeBox
            header="Text files"
            lang="js"
            code={stringExample}
            link="/docs/strings"
          />

          <CodeBox
            header="JSON files"
            lang="js"
            code={jsonExample}
            link="/docs/json"
          />

          <CodeBox
            header="Or other things as a buffer"
            lang="js"
            code={bufferExample}
            link="/docs/buffer"
          />

        </Box>
        <h2>More...</h2>
        <Box
          direction='row'
          justify='start'
          pad='large'
          gap='large'
        >
          {/* Useful Links card */}
          <HomePageCard>
            <CardHeader
              background='light-2'
              pad='small'
              justify='start'
            >
              <LinkIcon />
              <h3 style={{margin: "0px 0px 0px -1.2em"}}>Useful Links</h3>
            </CardHeader>

            <CardBody
              background='light-1'
              pad='medium'
            >
              <CardButton
                icon={Github}
                label='View on Github'
                link={links.github}
              />
            </CardBody>
          </HomePageCard>

          {/* Pay me a coffee card */}
          <HomePageCard>
            <CardHeader
              background='light-2'
              pad='small'
              direction='row'
              justify='start'
            >
              <Money />
              <h3 style={{margin: "0px 0px 0px -1.2em"}}>Pay me a coffee!</h3>
            </CardHeader>

            <CardBody
              background='light-1'
              pad='medium'
              gap='small'
              align='center'
            >

              <CopyButton
                label='Tip me with Bitcoin'
                toCopy={links.bitcoin}
                iconLink='https://cryptoicons.org/api/white/btc/100'
              >
                <Text>{'The address has been copied to your clipboard'}</Text>
                <Text>{'If you prefer, you can also use the QR code below'}</Text>
                <QRCode value={links.bitcoin} />
              </CopyButton>

              <CopyButton
                label='Tip me with Ethereum'
                toCopy={links.ethereum}
                iconLink='https://cryptoicons.org/api/white/eth/100'
              >
                <Text>{'The address has been copied to your clipboard'}</Text>
                <Text>{'If you prefer, you can also use the QR code below'}</Text>
                <QRCode value={links.ethereum} />
              </CopyButton>

              <CopyButton
                label='Tip me with Monero'
                toCopy={links.monero}
                iconLink='https://cryptoicons.org/api/white/xmr/100'
              >
                <Text>{'The address has been copied to your clipboard'}</Text>
                <Text>{'If you prefer, you can also use the QR code below'}</Text>
                <QRCode value={links.monero} />
              </CopyButton>

              <CopyButton
                label='Tip me with Bitcoin Cash'
                toCopy={links.bch}
                iconLink='https://cryptoicons.org/api/white/bch/100'
              >
                <Text>{'The address has been copied to your clipboard'}</Text>
                <Text>{'If you prefer, you can also use the QR code below'}</Text>
                <QRCode value={links.bch} />
              </CopyButton>
            </CardBody>
          </HomePageCard>
        </Box>
      </div>
    </Base>
  );
}
