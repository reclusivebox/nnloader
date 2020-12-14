import React from 'react';
import {useReducer, useEffect} from 'react';
import {Markdown} from 'grommet';
import {getLastCommonIndex} from '../utils/utils';
import {
  getNextStep, reducer, DynamicCodeBannerState,
} from '../utils/CodeBannerStateManager';
import PrismJs from 'prismjs';

import '../styles/codeHighlight.scss';

export default function DynamicCodeBanner(
    props: React.PropsWithChildren<{
    codeList: string[],
    className: string,
    ms?: number,
    }>,
) {
  if (props.codeList.length < 1) {
    throw new Error(
        'Missing code strings in codeList attribute for DynamicCodeBanner.',
    );
  }

  const initialState: DynamicCodeBannerState = {
    toShow: props.codeList[0],
    currentCodeIndex: 0,
    nextCodeIndex: (props.codeList.length > 1)? 1:0,
    forward: false,
    codeList: props.codeList,
    commonParts: getLastCommonIndex(
        props.codeList[0],
        props.codeList[(props.codeList.length > 1)? 1:0],
    ),
    justSwitched: true,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    PrismJs.highlightAll();
  }, [state]);

  setTimeout(() => {
    dispatch(getNextStep(state));
  }, props.ms ?? 100);

  return (
    <Markdown className={props.className}>
      {`\`\`\`js
      ${String(state.toShow)}
      \`\`\``}
    </Markdown>
  );
}
