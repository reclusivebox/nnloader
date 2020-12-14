import path from 'path';
import {promises as fs} from 'fs';
import {
  getPackageDir,
  InvalidPathError,
  getCallerDir,
} from './common';

/**
 * Loads a string inside a file
 * @param {string} pathToFile - the path of the file to be loaded,
 *  relative to the package root.
 * @return {Promise<string>} - A promise to a string with the file's contents.
 */
export async function loadBuffer(pathToFile: string): Promise<Buffer> {
  // Check for nullish dirname
  pathToFile ?? (() => {
    throw new InvalidPathError();
  })();

  const moduleDir = getCallerDir();

  const finalPath = path.join(await getPackageDir(moduleDir), pathToFile);
  const fileBuffer: Buffer = await fs.readFile(finalPath);
  return fileBuffer;
}
