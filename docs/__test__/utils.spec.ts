import {getLastCommonIndex} from '../src/utils/utils';

describe('Tests for the getLastCommonIndex function', () => {
  test('Test 1', () => {
    const string1 = 'abc';
    const string2 = 'abc1';

    const common = getLastCommonIndex(string1, string2);

    expect(common).toBe(2);
  });

  test('Test 2', () => {
    const string1 = 'cad';
    const string2 = 'abc1';

    const common = getLastCommonIndex(string1, string2);

    expect(common).toBe(-1);
  });

  test('Test 3', () => {
    const string1 = 'string big';
    const string2 = 'string even bigger';

    const common = getLastCommonIndex(string1, string2);

    expect(common).toBe(6);
  });
});
