
import React from 'react';
import TutorialNavigator from '../tutorialNavigator';
import {Helmet} from 'react-helmet';

export default {
  title: 'Tutorial Page/Tutorial Navigator',
  component: TutorialNavigator,
};

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

function generateStory(active: number) {
  return (
    <div>
      <Helmet>
        <base href="http://localhost:8000/" target="__blank"/>
      </Helmet>
      <TutorialNavigator active={active} items={items}/>
    </div>
  );
}

export function GetStarted() {
  return generateStory(1);
}

export function LoadingStrings() {
  return generateStory(2);
}

export function LoadingJSON() {
  return generateStory(3);
}

export function LoadingBuffer() {
  return generateStory(4);
}
