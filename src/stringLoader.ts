import path from 'path';
import {promises as fs} from 'fs';
import {getPackageDir, EncodingOptions, InvalidPathError} from './common';

/**
 * Loads a string inside a file
 * @param {string} pathToFile - the path of the file to be loaded, relative to the package root.
 * @param {string} moduleDir - the absulute path of the file calling this function, aways use the node variable __dirname.
 * @param {EncodingOptions} encoding - the encoding of the file to load, the default is utf-8.
 * @returns {Promise<string>} - A promise to a string with the file's contents.
 */
export async function loadString(pathToFile: string, moduleDir: string, encoding: EncodingOptions = 'utf-8'): Promise<string> {
  // Check for nullish dirname
  pathToFile ?? (() => {throw new InvalidPathError()})()

  const finalPath = path.join(await getPackageDir(moduleDir), pathToFile);
  const fileString: string = await fs.readFile(finalPath, {encoding: encoding});
  return fileString;
}
