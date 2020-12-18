/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
import React from 'react';
import {Grommet} from 'grommet';
import HeaderBar from '../components/headerBar';
import loadable from '@loadable/component';

const theme = require('../other/grommetTheme.json');

import '../styles/baseTemplate.scss';

export default function BaseTemplate({children}: React.PropsWithChildren<{}>) {
  // const HeaderBar = loadable(() => import('../components/headerBar'));
  return (
    <Grommet theme={theme} themeMode="light">
      <HeaderBar />
      <div className="mainContainer">
        <div className="contentArea">
          {children}
        </div>
      </div>
    </Grommet>
  );
}