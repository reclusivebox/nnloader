import {assert} from 'chai';
import {createLoader} from '../dist/index';

const nnloader = createLoader(0);

describe('Testing the binary module', () => {
  it('Load /test/someBinary', async () => {
    const myBuffer = await nnloader.loadBuffer('/test/someBinary');
    const bufferContent = [48, 49, 10];

    assert.strictEqual(myBuffer.length, 3);
    bufferContent.forEach((item, index) => {
      assert.strictEqual(
          item, myBuffer[index],
          `Problem at index: ${index}`,
      );
    });
  });
});
