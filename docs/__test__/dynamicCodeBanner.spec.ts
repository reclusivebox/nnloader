/* eslint-disable no-unused-vars */
import {
  reducer, DynamicCodeBannerState, getNextStep,
} from '../src/utils/CodeBannerStateManager';

describe('Tests for the next step function', () => {
  test('RECEDING test', () => {
    const initialState: DynamicCodeBannerState = {
      toShow: 'Hello Wo',
      currentCodeIndex: 0,
      nextCodeIndex: 1,
      forward: false,
      commonParts: 5,
      codeList: [
        'Hello World!',
        'Hello Again',
      ],
      justSwitched: false,
    };

    const result = getNextStep(initialState);

    expect(result).toBe('RECEDING');
  });
  test('PROCEDING test', () => {
    const initialState: DynamicCodeBannerState = {
      toShow: 'Hello Wo',
      currentCodeIndex: 0,
      nextCodeIndex: 1,
      forward: true,
      commonParts: 5,
      codeList: [
        'Hello World!',
        'Hello Again',
      ],
      justSwitched: false,
    };

    const result = getNextStep(initialState);

    expect(result).toBe('PROCEDING');
  });
  test('SWITCH test', () => {
    const initialState: DynamicCodeBannerState = {
      toShow: 'Hello World!',
      currentCodeIndex: 0,
      nextCodeIndex: 1,
      forward: true,
      commonParts: 5,
      codeList: [
        'Hello World!',
        'Hello Again',
      ],
      justSwitched: false,
    };

    const result = getNextStep(initialState);

    expect(result).toBe('SWITCH');
  });
  test('NEXT test', () => {
    const initialState: DynamicCodeBannerState = {
      toShow: 'Hello ',
      currentCodeIndex: 0,
      nextCodeIndex: 1,
      forward: false,
      commonParts: 5,
      codeList: [
        'Hello World!',
        'Hello Again',
      ],
      justSwitched: false,
    };

    const result = getNextStep(initialState);

    expect(result).toBe('NEXT');
  });
});

describe('Tests for the reducer', () => {
  test('RECEDING test', () => {
    const initialState: DynamicCodeBannerState = {
      toShow: 'Hello Wo',
      currentCodeIndex: 0,
      nextCodeIndex: 1,
      forward: false,
      commonParts: 5,
      codeList: [
        'Hello World!',
        'Hello Again',
      ],
      justSwitched: false,
    };

    const result = reducer(initialState, 'RECEDING');
    expect(result.toShow).toBe('Hello W');
  });

  test('PROCEDING test', () => {
    const initialState: DynamicCodeBannerState = {
      toShow: 'Hello Wo',
      currentCodeIndex: 0,
      nextCodeIndex: 1,
      forward: false,
      commonParts: 5,
      codeList: [
        'Hello World!',
        'Hello Again',
      ],
      justSwitched: false,
    };

    const result = reducer(initialState, 'PROCEDING');
    expect(result.toShow).toBe('Hello Wor');
  });

  test('SWITCH test', () => {
    const initialState: DynamicCodeBannerState = {
      toShow: 'Hello Wo',
      currentCodeIndex: 0,
      nextCodeIndex: 1,
      forward: true,
      commonParts: 10,
      codeList: [
        'Hello World!',
        'Hello Again',
      ],
      justSwitched: false,
    };

    const result = reducer(initialState, 'SWITCH');
    expect(result.forward).toBe(false);
    expect(result.commonParts).toBe(5);
  });

  test('NEXT test', () => {
    const initialState: DynamicCodeBannerState = {
      toShow: 'Hello Wo',
      currentCodeIndex: 0,
      nextCodeIndex: 1,
      forward: false,
      commonParts: 5,
      codeList: [
        'Hello World!',
        'Hello Again',
      ],
      justSwitched: false,
    };

    const result = reducer(initialState, 'NEXT');
    expect(result.currentCodeIndex).toBe(1);
    expect(result.nextCodeIndex).toBe(0);
    expect(result.forward).toBe(true);
  });
});

test('First iteration test', () => {
  const initialState: DynamicCodeBannerState = {
    toShow: 'Hello World!',
    currentCodeIndex: 0,
    nextCodeIndex: 1,
    forward: false,
    commonParts: 5,
    codeList: [
      'Hello World!',
      'Hello Again',
    ],
    justSwitched: true,
  };

  const nextStep = getNextStep(initialState);
  expect(nextStep).toBe('RECEDING');

  const result = reducer(initialState, nextStep);

  expect(result).toStrictEqual({
    toShow: 'Hello World',
    currentCodeIndex: 0,
    nextCodeIndex: 1,
    forward: false,
    commonParts: 5,
    codeList: [
      'Hello World!',
      'Hello Again',
    ],
    justSwitched: false,
  });
});

test('Full Cycle Execution', () => {
  let state: DynamicCodeBannerState = {
    toShow: 'Hello World!',
    currentCodeIndex: 0,
    nextCodeIndex: 1,
    forward: false,
    commonParts: 5,
    codeList: [
      'Hello World!',
      'Hello Again',
    ],
    justSwitched: true,
  };

  let lastAction = '';

  const update = () => {
    lastAction = getNextStep(state);
    state = reducer(state, lastAction);
  };

  update();
  expect(lastAction).toBe('RECEDING');
  expect(state.toShow).toBe('Hello World');

  update();
  expect(lastAction).toBe('RECEDING');
  expect(state.toShow).toBe('Hello Worl');

  update();
  expect(lastAction).toBe('RECEDING');
  expect(state.toShow).toBe('Hello Wor');

  update();
  expect(lastAction).toBe('RECEDING');
  expect(state.toShow).toBe('Hello Wo');

  update();
  expect(lastAction).toBe('RECEDING');
  expect(state.toShow).toBe('Hello W');

  update();
  expect(lastAction).toBe('RECEDING');
  expect(state.toShow).toBe('Hello ');

  update();
  expect(lastAction).toBe('NEXT'); // bug is here

  update();
  expect(lastAction).toBe('PROCEDING');
  expect(state.toShow).toBe('Hello A');

  update();
  expect(lastAction).toBe('PROCEDING');
  expect(state.toShow).toBe('Hello Ag');

  update();
  expect(lastAction).toBe('PROCEDING');
  expect(state.toShow).toBe('Hello Aga');

  update();
  expect(lastAction).toBe('PROCEDING');
  expect(state.toShow).toBe('Hello Agai');

  update();
  expect(lastAction).toBe('PROCEDING');
  expect(state.toShow).toBe('Hello Again');

  update();
  expect(lastAction).toBe('SWITCH');

  update();
  expect(lastAction).toBe('RECEDING');
});
