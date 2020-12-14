---
id: 3
title: Loading JSON files
path: /docs/json
---

## Loading JSON files

To load the content of your JSON file as an object, you have to use the method `typescript&nnLoader.loadJSON(path: string): Promise<Object>`. This is an asynchronous method that takes as an argument the path to your file relative to the package root and returns a promise to an object with the file’s content.

```js
const nnLoader = require('nnloader');

async function main() {
    const myFileContent = await nnLoader.loadJSON('/configs/config.json');
}
```
