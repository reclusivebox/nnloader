/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
import React from 'react';
import {useReducer} from 'react';
import {getLastCommonIndex} from '../utils/utils';

export interface DynamicCodeBannerState {
  toShow: string,
  currentCodeIndex: number,
  nextCodeIndex: number,
  forward: boolean,
  commonParts: number,
  codeList: string[],
  justSwitched: boolean,
}

/**
 * A small function that tells you what the reducer should do next.
 * The lifecycle of the states are RECEDING > NEXT > PROCEDING > SWITCH
 * @param {DynamicCodeBannerState} currentState -
 * @return {string} - A string with the reducer's next action.
 */
export function getNextStep(currentState: DynamicCodeBannerState): string {
  const howMuchisBeingShown = currentState.toShow.length;
  const totalLengthOfCurrent = currentState
      .codeList[currentState.currentCodeIndex].length;

  if (
    !currentState.forward &&
    currentState.commonParts < howMuchisBeingShown - 1 ||
    currentState.justSwitched
  ) {
    return 'RECEDING';
  } else if (
    currentState.forward &&
    howMuchisBeingShown < totalLengthOfCurrent
  ) {
    return 'PROCEDING';
  } else if (
    howMuchisBeingShown === totalLengthOfCurrent
  ) {
    return 'SWITCH';
  } else {
    return 'NEXT';
  }
}

export function reducer(
    state: DynamicCodeBannerState, action: string,
): DynamicCodeBannerState {
  switch (action) {
    case 'RECEDING':
      state.toShow = state.toShow.slice(0, state.toShow.length - 1);
      state.justSwitched = false;
      break;
    case 'NEXT':
      const nextIndex = (state.codeList.length > state.currentCodeIndex + 1)?
        state.currentCodeIndex + 1 : 0;
      state.currentCodeIndex = nextIndex;
      state.nextCodeIndex = (state.codeList.length > nextIndex + 1)?
        nextIndex + 1 : 0;
      state.forward = true;
      break;
    case 'PROCEDING':
      state.toShow = state.codeList[state.currentCodeIndex]
          .slice(0, state.toShow.length + 1);
      break;
    case 'SWITCH':
      state.commonParts = getLastCommonIndex(
          state.codeList[state.currentCodeIndex],
          state.codeList[state.nextCodeIndex],
      );
      state.forward = false;
      break;
  }
  return {...state};
}
