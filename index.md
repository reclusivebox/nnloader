---
layout: default
---

# nnLoader

    Once upon a time, there was a programmer that needed to load a YAML configuration file in a NodeJS project. This programmer was very bored by the fact that he needed to load that file using a relative path to each file that needed it. In this time of ~~boredom~~ despair a hero appears to rescue the ~~programmer~~ princess from the castle: nnLoader!

    Jokes aside, nnLoader is a library that helps you to load static text files using a path relative to the package root.

## Installation

    The library can be easily install with a package manager like yarn or npm:

```bash
$ yarn add nnloader
```

## Usage

    The library is composed by a bunch of async functions, and more will added with time. Here are the usable ones right now:

- `nnloader.loadString(pathToFile: string, moduleDir: string, encoding?: EncodingOptions): Promise<string>`: This function reads a file from the filesystem and gives you a string with it's contents. This function takes three arguments:
  
  - `pathToFile: string`: A string with the path to the desired file relative to the package root.
  
  - `modeuleDir: string`: This argument is used to know which file is calling the library. You should always provide the node variable `__dirname` as a value here. With this information the library can figure out the package root, no matter how nested the file is.
  
  - `encoding: EncodingOptions`: This argument is optional. It takes a string with the encoding for the file, the possible values are: `ascii`, `utf8`, `utf-8`, `utf16le`, `ucs2`, `ucs-2`, `base64`, `latin1`, `binary` or `hex`.

## Examples

### Load a string from a file

```javascript
const nnloader = require('nnloader');


nnloader.loadString('config/global.yaml', __dirname).then(
    result => console.log(`File content: ${result}`)
);
```
