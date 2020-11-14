import {loadString} from './stringLoader';
import {InvalidPathError} from './common';

/**
 * Loads the content od a JSON file
 * @param {string} pathToFile - the path of the file to be loaded,
 *  relative to the package root.
 * @return {Promise<Object>} - A promise to an object with your JSON's contents.
 */
export async function loadJSON(pathToFile: string): Promise<Object> {
  // Check for nullish dirname
  pathToFile ?? (() => {
    throw new InvalidPathError();
  })();

  const sourceString = await loadString(pathToFile);
  return JSON.parse(sourceString);
}
