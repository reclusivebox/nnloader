import {assert} from 'chai';
import nnloader from '../dist/nnloader';
import path from 'path';

describe('Find the package directory from different places', () => {
  it('Find the package directory from here.', async () => {
    const resultDir = await nnloader.getPackageDir(__dirname);
    assert.equal(resultDir, path.resolve(__dirname + '/..'));
  });

  it('Load a file from the this folder.', async () => {
    const message = await nnloader.loadString(
        'test/textfile.txt',
        __dirname);
    assert.equal(message, 'Hello World\n');
  });
});