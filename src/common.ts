import path from 'path';
import {promises as fs} from 'fs';

/**
 * Error that hapens when you use this library outside a package scope.
 */
export class NoPackageError extends Error {
  message: string = 'No package.json file found.';
}

/**
 * Error that hapens when you don't pass a valid path to the library.
 */
export class InvalidPathError extends Error {
  message: string = 'A valid path must be provided, ex: assets/config.json';
}

export type EncodingOptions = 'ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' |
  'ucs-2' | 'base64' | 'latin1' | 'binary' | 'hex';

/**
 * Returns the absolute path to the directory containing the package.json file.
 * @param {string} dirname - The directory containing the file calling this function, aways use the node variable __diname.
 */
export async function getPackageDir(dirname: string): Promise<string> {
  // Check for nullish dirname
  dirname ?? (() => {throw new InvalidPathError()})()

  // Check if we reached the end of the filesystem
  if (dirname === '/') {
    throw new NoPackageError();
  }

  const files: Array<string> = await fs.readdir(dirname);

  if (files.includes('package.json')) {
    return dirname
  } else {
    return await getPackageDir(path.resolve(dirname + '/..'))
  }
}