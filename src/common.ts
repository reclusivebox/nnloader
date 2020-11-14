import path from 'path';
import {promises as fs} from 'fs';

/**
 * Error that hapens when you use this library outside a package scope.
 */
export class NoPackageError extends Error {
  /**
   * Class Constructor.
   */
  constructor() {
    super('No package.json file found.');
  }
}

/**
 * Error that hapens when you don't pass a valid path to the library.
 */
export class InvalidPathError extends Error {
  /**
   * Class Constructor.
   */
  constructor() {
    super('A valid path must be provided, ex: assets/config.json');
  }
}

/**
 * Error that happens when you call the module from an untraceable source.
 */
export class InvalidCallerError extends Error {
  /**
   * Class Constructor
   */
  constructor() {
    super('You called the module from an invalid source.');
  }
}

export type EncodingOptions = 'ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' |
  'ucs-2' | 'base64' | 'latin1' | 'binary' | 'hex';

/**
 * Returns the absolute path to the directory containing the package.json file.
 * @param {string} dirname - The directory containing the file calling this
 *  function, aways use the node variable __diname.
 */
export async function getPackageDir(dirname: string): Promise<string> {
  // Check for nullish dirname
  dirname ?? (() => {
    throw new InvalidPathError();
  })();

  // Check if we reached the end of the filesystem
  if (dirname === '/') {
    throw new NoPackageError();
  }

  const files: Array<string> = await fs.readdir(dirname);

  if (files.includes('package.json')) {
    return dirname;
  } else {
    return await getPackageDir(path.resolve(dirname + '/..'));
  }
}

/**
 * A function that tells you where the module is being called from.
 * @param {number} toIgnore - The number of stack members to ignore.
 * @return {string} - The caller's source dir.
 */
export function getCallerDir(toIgnore = 2) {
  let rawStack: string;

  try {
    throw new Error();
  } catch (someError) {
    rawStack = someError.stack;
  }

  const regex = /at (?<caller>\S+) \((?<path>.+):\d+:\d+\)/gm;
  const matches = Array.from(rawStack.matchAll(regex));

  const pathRegex = /^\/(?<fullPath>.+\/)/;
  const validPaths = matches
      .filter((item) => pathRegex.test(item.groups?.path ?? 'invalid'))
      .map((item) => {
        return (
          '/' + item.groups?.path?.match(pathRegex)?.groups?.fullPath ?? ''
        );
      });

  return validPaths[toIgnore] ?? (() => {
    throw new InvalidCallerError();
  });
}
