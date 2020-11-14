# nnLoader

## What it does?

    The name nnLoader stands for 'no nonsense loader'. This is a small library to load static files from your package root. It aims to be as simple as possible.

## Why create a library for this?

    One day I was dealing with a project in which I had a YAML configuration file. That file had to be loaded from multiple files, but to do so I had to know the relative path to the YAML from each one of those files. So I created this lib to be able to load that YAML using a relative path to the package root. This way each file loads that YAML with the same piece of code.

## How do I use it?

    With three simple fast steps:

1. Install the package: `yarn add nnloader` or `npm i nnloader`.

2. Import the package: `const nnloader = require('nnloader')` or `import nnloader from 'nnloader'`.

3. Call one of the functions:

```javascript
// This function gives you a string with the contents of the file.
const configString = await nnloader.loadString(
    'configs/global.yaml', // The file you want to load
    'utf-8', /* This is optional, it sets the encoding option
            * for the node function fs.promises.readFile()
            */
);
```

More information and the complete documentation can be found at: https://reclusivebox.github.io/nnloader/
