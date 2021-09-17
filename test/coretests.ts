import {assert} from 'chai';
import nnloader from '../dist/index';
import path from 'path';
import {describe, it} from 'mocha';
import {getCallerDir, getPackageDir} from '../src/common';

describe('Find the package directory from different places', () => {
  it('Find the package directory from here.', async () => {
    const resultDir = await getPackageDir(__dirname);
    assert.equal(resultDir, path.resolve(__dirname + '/..'));
  });

  it('Load a file from the this folder.', async () => {
    const message = await nnloader.loadString(
        'test/textfile.txt',
    );
    assert.equal(message, 'Hello World\n');
  });

  it.only('Test error Stack', function() {
    console.log('Path Returned: ' + getCallerDir());
  });
});
