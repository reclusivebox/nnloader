import path from 'path';
import fs from 'fs';

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

export type EncodingOptions =
  | 'ascii'
  | 'utf8'
  | 'utf-8'
  | 'utf16le'
  | 'ucs2'
  | 'ucs-2'
  | 'base64'
  | 'latin1'
  | 'binary'
  | 'hex';

/**
 * Returns the absolute path to the directory containing the package.json file.
 * @param {string} dirname - The directory containing the file calling this
 *  function, aways use the node variable __diname.
 */
export function getPackageDir(
  dirname: string,
  nestingLevel: number = 1,
): string {
  // Check if we reached the end of the filesystem
  if (dirname === '/') {
    throw new NoPackageError();
  }

  const files = fs.readdirSync(dirname);

  if (files.includes('package.json')) {
    if (nestingLevel < 1) {
      return dirname;
    } else {
      return getPackageDir(
        path.resolve(dirname + '/..'),
        nestingLevel - 1
      );
    }
  } else {
    return getPackageDir(path.resolve(dirname + '/..'), nestingLevel);
  }
}

/**
 * A function that tells you where the module is being called from.
 * @param {number} toIgnore - The number of stack members to ignore.
 * @return {string} - The caller's source dir.
 */
export function getCallerDir() {
  let rawStack: string;

  try {
    throw new Error();
  } catch (someError) {
    rawStack = (someError as Error).stack ?? '';
  }

  const regex = /at (async\s)?\S+ \(?(?<path>\/[\w\-\/\.]+)\)?/gm;
  const matches = Array.from(rawStack.matchAll(regex));

  const paths = matches.map((item) => item.groups?.path);

  if (paths.length < 1) {
    throw new InvalidCallerError();
  }

  const pathSegments = (paths[0] as string).split('/');

  const pathSegmentsWithoutFile = pathSegments.slice(
    0,
    pathSegments.length - 1,
  );

  const toReturn = path.resolve('/', ...pathSegmentsWithoutFile);

  return toReturn;
}
