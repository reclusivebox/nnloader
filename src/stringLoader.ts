import path from 'path';
import {promises as fs} from 'fs';
import {
  getPackageDir,
  // eslint-disable-next-line no-unused-vars
  EncodingOptions,
  InvalidPathError,
  getCallerDir,
} from './common';

/**
 * Loads a string inside a file
 * @param {string} pathToFile - the path of the file to be loaded,
 *  relative to the package root.
 * @param {EncodingOptions} encoding - the encoding of the file to load,
 *  the default is utf-8.
 * @return {Promise<string>} - A promise to a string with the file's contents.
 */
export async function loadString(
    pathToFile: string, encoding: EncodingOptions = 'utf-8',
): Promise<string> {
  // Check for nullish dirname
  pathToFile ?? (() => {
    throw new InvalidPathError();
  })();

  const moduleDir = getCallerDir();

  const finalPath = path.join(await getPackageDir(moduleDir), pathToFile);
  const fileString: string = await fs.readFile(finalPath, {encoding: encoding});
  return fileString;
}
