
import React from 'react';
import Base from '../../templates/base';
import Navigator from '../tutorialNavigator';
import {HomePageCard} from '../homePageCard';
import {Github} from 'grommet-icons';
import MarkdownCode from '../markdownCode';
import {CopyButton} from '../copyButton';

export default {
  title: 'Global/Common Components',
  component: Base,
};

export function justHeaderBar() {
  return (
    <Base>
    </Base>
  );
}

const items = [
  {
    id: 1,
    title: 'Get Started',
    path: '/docs/start',
  },
  {
    id: 2,
    title: 'Loading strings',
    path: '/docs/strings',
  },
  {
    id: 3,
    title: 'Loading JSON files',
    path: '/docs/json',
  },
  {
    id: 4,
    title: 'Loading as a Buffer',
    path: '/docs/buffer',
  },
];

export function headerAndNavigator() {
  return (
    <Base>
      <Navigator items={items} active={1} />
    </Base>
  );
}

export function staticMarkdown() {
  return (
    <Base>
      <MarkdownCode lang="js" code={
        `console.log('Hello World!')`
      } />
    </Base>
  );
}

export function copyButton() {
  return (
    <Base>
      <CopyButton
        label='Copy Something'
        toCopy='Hello Again World'
      >
        There's something inside the clipboard
      </CopyButton>
    </Base>
  );
}
