import {assert} from 'chai';
import {createLoader} from '../dist/index';
import path from 'path';
import {describe, it} from 'mocha';
import {getCallerDir, getPackageDir} from '../src/common';

const nnloader = createLoader(0);

describe('Find the package directory from different places', () => {
  it('Find the package directory from here.', async () => {
    const resultDir = getPackageDir(__dirname, 0);
    assert.equal(resultDir, path.resolve(__dirname + '/..'));
  });

  it('Load a file from the this folder.', async () => {
    const message = await nnloader.loadString(
        'test/textfile.txt',
    );
    assert.equal(message, 'Hello World\n');
  });

  it.skip('Test error Stack', function() {
    console.log('Path Returned: ' + getCallerDir());
  });
});
