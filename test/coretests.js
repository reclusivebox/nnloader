const assert = require('chai').assert;
const simpleloader = require('../dist/nnloader');
const path = require('path');

describe('Find the package directory from different places', () => {
  it('Find the package directory from here.', async () => {
    const resultDir = await simpleloader.getPackageDir(__dirname);
    assert.equal(resultDir, path.resolve(__dirname + '/..'));
  });

  it('Load a file from the this folder.', async () => {
    const message = await simpleloader.loadString(
        'test/textfile.txt',
        __dirname);
    assert.equal(message, 'Hello World\n');
  });
});
