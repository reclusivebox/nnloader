import {loadString} from './stringLoader';
import {loadJSON} from './jsonLoader';
import {loadBuffer} from './binaryLoader';

const nnLoader = {loadString, loadJSON, loadBuffer};

export default nnLoader;
