# SimpleLoader

## What it does?

    This is a small library to load static files from your package root.

## Why create a library for this?

    One day I was dealing with a project in which I had a YAML configuration file. That file had to be loaded from multiple files, but to do so I had to know the relative path to the YAML from each one of those files. So I created this lib to be able to load that YAML using a relative path to the package root. This way each file loads that YAML with the same piece of code.

## What are the limitations

    Right now there are two major limitations:

1. I have no good way deal with your package directory if you don't provide me a tip, right now the functions in the library take a parameter called `moduleDir`, you should aways pass the node variable `__dirname` to this parameter. Even across different nested files the library can find your package root if you pass this information.

2. There are many types of files, and should be a good idea to integrate some loaders to the library. Right now the library can only give you strings.

## How do I use it?

    With three simple fast steps:

1. Install the package: `yarn add simpleloader` or `npm i simpleloader`.

2. Import the package: `const simpleloader = require('simpleloader')` or `import simpleloader from 'simpleloader'`.

3. Call one of the functions:

```javascript
// This function gives you a string with the contents of the file.
const configString = await simpleloader.loadString(
    'configs/global.yaml', // The file you want to load
    __dirname, // This is the moduleDir
    'utf-8' /* This is optional, it sets the encoding option
            * for the node function fs.promises.readFile() 
            */
);
```


