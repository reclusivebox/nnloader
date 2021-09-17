import {assert} from 'chai';
import {createLoader} from '../dist/index';

const nnloader = createLoader(0);

describe('Testing the json module', () => {
  it('Load /test/test.json', async () => {
    const correctAnswer = {
      'prop1': 1,
      'prop2': '2',
      'prop3': true,
      'prop4': [1, 2],
      'prop5': {
        'prop6': 1,
      },
    };

    const libAnswer = await nnloader.loadJSON('/test/test.json');

    assert.deepStrictEqual(correctAnswer, libAnswer);
  });
});
