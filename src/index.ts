import {getPackageDir} from './common';
import {loadString} from './stringLoader';
import {loadJSON} from './jsonLoader';
import {loadBuffer} from './binaryLoader';

const nnLoader = {getPackageDir, loadString, loadJSON, loadBuffer};

export default nnLoader;
