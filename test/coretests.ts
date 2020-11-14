import {assert} from 'chai';
import nnloader from '../dist/index';
import path from 'path';
import {describe, it} from 'mocha';

describe('Find the package directory from different places', () => {
  it('Find the package directory from here.', async () => {
    const resultDir = await nnloader.getPackageDir(__dirname);
    assert.equal(resultDir, path.resolve(__dirname + '/..'));
  });

  it('Load a file from the this folder.', async () => {
    const message = await nnloader.loadString(
        'test/textfile.txt',
    );
    assert.equal(message, 'Hello World\n');
  });
});
