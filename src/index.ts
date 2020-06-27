import path from 'path';
import {promises as fs} from 'fs';

class NoPackageError extends Error {}
type EncodingOptions = "ascii" | "utf8" | "utf-8" | "utf16le" | "ucs2" | "ucs-2" | "base64" | "latin1" | "binary" | "hex";

/**
 * Returns the absolute path to the directory containing the package.json file.
 * @param {string} dirname - The directory containing the file calling this function, aways use the node variable __diname.
 */
async function getPackageDir(dirname: string): Promise<string> {
  if (dirname === '/') {
    throw new NoPackageError('No package.json file found.');
  }
  const files: Array<string> = await fs.readdir(dirname);

  if (files.includes('package.json')) {
    return dirname
  } else {
    return await getPackageDir(path.resolve(dirname + '/..'))
  }
}

/**
 * Loads a string inside a file
 * @param {string} pathToFile - the path of the file to be loaded, relative to the package root.
 * @param {string} moduleDir - the absulute path of the file calling this function, aways use the node variable __dirname.
 * @param {EncodingOptions} encoding - the encoding of the file to load, the default is utf-8.
 */
async function loadString(pathToFile: string, moduleDir: string, encoding: EncodingOptions = 'utf-8') {
  const finalPath = path.join(await getPackageDir(moduleDir), pathToFile);
  const fileString = await fs.readFile(finalPath, {encoding: encoding});
  return fileString;
}

export default { NoPackageError, getPackageDir, loadString };
