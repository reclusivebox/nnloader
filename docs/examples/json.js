const nnLoader = require('nnloader');

async function main() {
  const myFileContent = await nnLoader.loadJSON('/configs/config.json');
}