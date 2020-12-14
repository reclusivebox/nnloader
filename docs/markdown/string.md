---
id: 2
title: Loading strings
path: /docs/strings
---

## Loading strings

To load the content of your file as a string you have to use the method `typescript&nnLoader.loadString(path: string, encoding: string = 'utf-8'): Promise<string>`. This is an asynchronous method that takes as an argument the path to your file relative to the package root and returns a promise to a string with the file’s content. Additionally you can pass a second argument with the encoding of your string.

```js
const nnLoader = require('nnloader');

async function main() {
    const myFileContent = await nnLoader.loadString('/files/myFile.txt');
}
```

The supported values for the encoding argument are: `utf-8`, `utf8`, `ascii`, `ucs2`, `ucs-2`, `utf16le`, `base64`, `latin1`, `binary` and `hex`.