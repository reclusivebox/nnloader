/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
import React from 'react';
import {useContext, useState} from 'react';
import {ResponsiveContext} from 'grommet';
import {Link} from 'gatsby';
import DynamicTopBar from './dynamicTopBar';

// import {useResponsiveWatcher} from '../utils/responsiveWatcher';
const ResponsiveWatcher = require('../utils/responsiveWatcher');

import '../styles/headerBar.scss';
const logo = require('../images/logo.svg');
const logoHover = require('../images/logoHover.svg');

function Entry(props: React.PropsWithChildren<{path: string}>) {
  return (
    <div className="headerEntry">
      <Link to={props.path}>
        {props.children}
      </Link>
    </div>
  );
}

export default function HeaderBar() {
  // const screenSize = useContext(ResponsiveContext);
  const bigScreen = ResponsiveWatcher.useResponsiveWatcher();
  const [currentLogo, setLogo] = useState(logo);

  const logoElement = (
    <img
      src={currentLogo}
      className="projectLogo"
      onMouseOver={() => setLogo(logoHover)}
      onMouseOut={() => setLogo(logo)}
    />
  );

  return (
    <DynamicTopBar
      justify={(bigScreen)? 'start': 'evenly'}
    >
      {(bigScreen) ?
      <>
        <Entry path='/'>
          {logoElement}
          {/* <svg href={logo} className="projectLogo" /> */}
        </Entry>
        <Entry path='/docs/start'>Learn</Entry>
        <Entry path='/contact'>Contact</Entry>
      </> :
      <>
        <Entry path='/docs/start'>Learn</Entry>
        <Entry path='/'>
          {logoElement}
        </Entry>
        <Entry path='/contact'>Contact</Entry>
      </>
      }
    </DynamicTopBar>
  );
}
