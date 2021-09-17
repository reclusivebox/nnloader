import path from 'path';
import {promises as fs} from 'fs';
import {getCallerDir, getPackageDir, EncodingOptions} from './common';

export class Loader {
  private packagePath: string;

  constructor(packagePath: string) {
    this.packagePath = packagePath;
  }

  /**
   * Loads a string inside a file
   * @param {string} pathToFile - the path of the file to be loaded,
   *  relative to the package root.
   * @return {Promise<string>} - A promise to a string with the file's contents.
   */
  async loadBuffer(pathToFile: string): Promise<Buffer> {
    const moduleDir = getCallerDir();

    const finalPath = path.join(this.packagePath, pathToFile);
    const fileBuffer: Buffer = await fs.readFile(finalPath);
    return fileBuffer;
  }

  /**
   * Loads a string inside a file
   * @param {string} pathToFile - the path of the file to be loaded,
   *  relative to the package root.
   * @param {EncodingOptions} encoding - the encoding of the file to load,
   *  the default is utf-8.
   * @return {Promise<string>} - A promise to a string with the file's contents.
   */
  async loadString(
    pathToFile: string,
    encoding: EncodingOptions = 'utf-8',
  ): Promise<string> {
    const finalPath = path.join(this.packagePath, pathToFile);
    const fileString: string = await fs.readFile(finalPath, encoding);
    return fileString;
  }

  /**
   * Loads the content od a JSON file
   * @param {string} pathToFile - the path of the file to be loaded,
   *  relative to the package root.
   * @return {Promise<Object>} - A promise to an object with your JSON's contents.
   */
  async loadJSON(pathToFile: string): Promise<Object> {
    // Check for nullish dirname
    const sourceString = await this.loadString(pathToFile);
    return JSON.parse(sourceString);
  }

}

export function createLoader(nestingLevel: number = 1): Loader {
  const caller = getCallerDir();
  const packagePath = getPackageDir(caller, nestingLevel);
  return new Loader(packagePath);
}

export function createLoaderWithPath(packagePath: string): Loader {
  return new Loader(packagePath);
}
