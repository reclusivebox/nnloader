/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
import React from 'react';
import Base from '../../templates/base';
import DynamicCodeBanner from '../dynamicCodeBanner';

export default {
  title: 'Global/Dynamic Code Banner',
  component: DynamicCodeBanner,
};

export function helloWorld() {
  return (
    <Base>
      <DynamicCodeBanner
        codeList={[
          'console.log("Hello World!")',
          'console.log("Is it working?")',
        ]}
      />
    </Base>
  );
}

