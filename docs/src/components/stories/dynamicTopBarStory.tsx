
import React from 'react';
import DynamicTopBar from '../dynamicTopBar';

export default {
  title: 'Global/Dynamic Top Bar',
  component: DynamicTopBar,
};

export function debugMode() {
  return (
    <>
      <DynamicTopBar debug={true} />
      <div style={{height: '200vh'}} />
    </>
  );
}
