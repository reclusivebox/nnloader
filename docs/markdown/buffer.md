---
id: 4
title: Loading as a Buffer
path: /docs/buffer
---

## Loading as a Buffer

To load the content of a binary file as a `Buffer` object, you have to use the method `typescript&nnLoader.loadBuffer(path: string): Promise<Buffer>`. This is an asynchronous method that takes as an argument the path to your file relative to the package root and returns a promise to a `Buffer` object with the file’s content.

```js
const nnLoader = require('nnloader');

async function main() {
    const myFileContent = await nnLoader.loadBuffer('/files/someBinary');
}
```
