(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["nnloader"] = factory();
	else
		root["nnloader"] = factory();
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/common.ts":
/*!***********************!*\
  !*** ./src/common.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPackageDir = exports.InvalidPathError = exports.NoPackageError = void 0;
var path_1 = __importDefault(__webpack_require__(/*! path */ "path"));
var fs_1 = __webpack_require__(/*! fs */ "fs");
/**
 * Error that hapens when you use this library outside a package scope.
 */
var NoPackageError = /** @class */ (function (_super) {
    __extends(NoPackageError, _super);
    function NoPackageError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.message = 'No package.json file found.';
        return _this;
    }
    return NoPackageError;
}(Error));
exports.NoPackageError = NoPackageError;
/**
 * Error that hapens when you don't pass a valid path to the library.
 */
var InvalidPathError = /** @class */ (function (_super) {
    __extends(InvalidPathError, _super);
    function InvalidPathError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.message = 'A valid path must be provided, ex: assets/config.json';
        return _this;
    }
    return InvalidPathError;
}(Error));
exports.InvalidPathError = InvalidPathError;
/**
 * Returns the absolute path to the directory containing the package.json file.
 * @param {string} dirname - The directory containing the file calling this function, aways use the node variable __diname.
 */
function getPackageDir(dirname) {
    return __awaiter(this, void 0, void 0, function () {
        var files;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // Check for nullish dirname
                    dirname !== null && dirname !== void 0 ? dirname : (function () { throw new InvalidPathError(); })();
                    // Check if we reached the end of the filesystem
                    if (dirname === '/') {
                        throw new NoPackageError();
                    }
                    return [4 /*yield*/, fs_1.promises.readdir(dirname)];
                case 1:
                    files = _a.sent();
                    if (!files.includes('package.json')) return [3 /*break*/, 2];
                    return [2 /*return*/, dirname];
                case 2: return [4 /*yield*/, getPackageDir(path_1.default.resolve(dirname + '/..'))];
                case 3: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.getPackageDir = getPackageDir;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var commons = __importStar(__webpack_require__(/*! ./common */ "./src/common.ts"));
var stringLoader_1 = __webpack_require__(/*! ./stringLoader */ "./src/stringLoader.ts");
var jsonLoader_1 = __webpack_require__(/*! ./jsonLoader */ "./src/jsonLoader.ts");
exports.default = { commons: commons, loadString: stringLoader_1.loadString, loadJSON: jsonLoader_1.loadJSON };


/***/ }),

/***/ "./src/jsonLoader.ts":
/*!***************************!*\
  !*** ./src/jsonLoader.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadJSON = void 0;
var stringLoader_1 = __webpack_require__(/*! ./stringLoader */ "./src/stringLoader.ts");
var common_1 = __webpack_require__(/*! ./common */ "./src/common.ts");
/**
 * Loads the content od a JSON file
 * @param {string} pathToFile - the path of the file to be loaded, relative to the package root.
 * @param {string} moduleDir - the absulute path of the file calling this function, aways use the node variable __dirname.
 * @returns {Promise<Object>} - A promise to an object with your JSON's contents.
 */
function loadJSON(pathToFile, moduleDir) {
    return __awaiter(this, void 0, void 0, function () {
        var sourceString;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // Check for nullish dirname
                    pathToFile !== null && pathToFile !== void 0 ? pathToFile : (function () { throw new common_1.InvalidPathError(); })();
                    return [4 /*yield*/, stringLoader_1.loadString(pathToFile, moduleDir)];
                case 1:
                    sourceString = _a.sent();
                    return [2 /*return*/, JSON.parse(sourceString)];
            }
        });
    });
}
exports.loadJSON = loadJSON;


/***/ }),

/***/ "./src/stringLoader.ts":
/*!*****************************!*\
  !*** ./src/stringLoader.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadString = void 0;
var path_1 = __importDefault(__webpack_require__(/*! path */ "path"));
var fs_1 = __webpack_require__(/*! fs */ "fs");
var common_1 = __webpack_require__(/*! ./common */ "./src/common.ts");
/**
 * Loads a string inside a file
 * @param {string} pathToFile - the path of the file to be loaded, relative to the package root.
 * @param {string} moduleDir - the absulute path of the file calling this function, aways use the node variable __dirname.
 * @param {EncodingOptions} encoding - the encoding of the file to load, the default is utf-8.
 * @returns {Promise<string>} - A promise to a string with the file's contents.
 */
function loadString(pathToFile, moduleDir, encoding) {
    if (encoding === void 0) { encoding = 'utf-8'; }
    return __awaiter(this, void 0, void 0, function () {
        var finalPath, _a, _b, fileString;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    // Check for nullish dirname
                    pathToFile !== null && pathToFile !== void 0 ? pathToFile : (function () { throw new common_1.InvalidPathError(); })();
                    _b = (_a = path_1.default).join;
                    return [4 /*yield*/, common_1.getPackageDir(moduleDir)];
                case 1:
                    finalPath = _b.apply(_a, [_c.sent(), pathToFile]);
                    return [4 /*yield*/, fs_1.promises.readFile(finalPath, { encoding: encoding })];
                case 2:
                    fileString = _c.sent();
                    return [2 /*return*/, fileString];
            }
        });
    });
}
exports.loadString = loadString;


/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ubmxvYWRlci93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vbm5sb2FkZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbm5sb2FkZXIvLi9zcmMvY29tbW9uLnRzIiwid2VicGFjazovL25ubG9hZGVyLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL25ubG9hZGVyLy4vc3JjL2pzb25Mb2FkZXIudHMiLCJ3ZWJwYWNrOi8vbm5sb2FkZXIvLi9zcmMvc3RyaW5nTG9hZGVyLnRzIiwid2VicGFjazovL25ubG9hZGVyL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly9ubmxvYWRlci9leHRlcm5hbCBcInBhdGhcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFD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LEdBQVcsU0FBa0Q7b0JBQzdFLHNCQUFPLFVBQVUsRUFBQzs7OztDQUNuQjtBQVBELGdDQU9DOzs7Ozs7Ozs7Ozs7QUNsQkQsK0I7Ozs7Ozs7Ozs7O0FDQUEsaUMiLCJmaWxlIjoibm5sb2FkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJubmxvYWRlclwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJubmxvYWRlclwiXSA9IGZhY3RvcnkoKTtcbn0pKGdsb2JhbCwgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB7cHJvbWlzZXMgYXMgZnN9IGZyb20gJ2ZzJztcblxuLyoqXG4gKiBFcnJvciB0aGF0IGhhcGVucyB3aGVuIHlvdSB1c2UgdGhpcyBsaWJyYXJ5IG91dHNpZGUgYSBwYWNrYWdlIHNjb3BlLlxuICovXG5leHBvcnQgY2xhc3MgTm9QYWNrYWdlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIG1lc3NhZ2U6IHN0cmluZyA9ICdObyBwYWNrYWdlLmpzb24gZmlsZSBmb3VuZC4nO1xufVxuXG4vKipcbiAqIEVycm9yIHRoYXQgaGFwZW5zIHdoZW4geW91IGRvbid0IHBhc3MgYSB2YWxpZCBwYXRoIHRvIHRoZSBsaWJyYXJ5LlxuICovXG5leHBvcnQgY2xhc3MgSW52YWxpZFBhdGhFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgbWVzc2FnZTogc3RyaW5nID0gJ0EgdmFsaWQgcGF0aCBtdXN0IGJlIHByb3ZpZGVkLCBleDogYXNzZXRzL2NvbmZpZy5qc29uJztcbn1cblxuZXhwb3J0IHR5cGUgRW5jb2RpbmdPcHRpb25zID0gJ2FzY2lpJyB8ICd1dGY4JyB8ICd1dGYtOCcgfCAndXRmMTZsZScgfCAndWNzMicgfFxuICAndWNzLTInIHwgJ2Jhc2U2NCcgfCAnbGF0aW4xJyB8ICdiaW5hcnknIHwgJ2hleCc7XG5cbi8qKlxuICogUmV0dXJucyB0aGUgYWJzb2x1dGUgcGF0aCB0byB0aGUgZGlyZWN0b3J5IGNvbnRhaW5pbmcgdGhlIHBhY2thZ2UuanNvbiBmaWxlLlxuICogQHBhcmFtIHtzdHJpbmd9IGRpcm5hbWUgLSBUaGUgZGlyZWN0b3J5IGNvbnRhaW5pbmcgdGhlIGZpbGUgY2FsbGluZyB0aGlzIGZ1bmN0aW9uLCBhd2F5cyB1c2UgdGhlIG5vZGUgdmFyaWFibGUgX19kaW5hbWUuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQYWNrYWdlRGlyKGRpcm5hbWU6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gIC8vIENoZWNrIGZvciBudWxsaXNoIGRpcm5hbWVcbiAgZGlybmFtZSA/PyAoKCkgPT4ge3Rocm93IG5ldyBJbnZhbGlkUGF0aEVycm9yKCl9KSgpXG5cbiAgLy8gQ2hlY2sgaWYgd2UgcmVhY2hlZCB0aGUgZW5kIG9mIHRoZSBmaWxlc3lzdGVtXG4gIGlmIChkaXJuYW1lID09PSAnLycpIHtcbiAgICB0aHJvdyBuZXcgTm9QYWNrYWdlRXJyb3IoKTtcbiAgfVxuXG4gIGNvbnN0IGZpbGVzOiBBcnJheTxzdHJpbmc+ID0gYXdhaXQgZnMucmVhZGRpcihkaXJuYW1lKTtcblxuICBpZiAoZmlsZXMuaW5jbHVkZXMoJ3BhY2thZ2UuanNvbicpKSB7XG4gICAgcmV0dXJuIGRpcm5hbWVcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYXdhaXQgZ2V0UGFja2FnZURpcihwYXRoLnJlc29sdmUoZGlybmFtZSArICcvLi4nKSlcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgY29tbW9ucyBmcm9tICcuL2NvbW1vbic7XG5pbXBvcnQge2xvYWRTdHJpbmd9IGZyb20gJy4vc3RyaW5nTG9hZGVyJztcbmltcG9ydCB7bG9hZEpTT059IGZyb20gJy4vanNvbkxvYWRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IHtjb21tb25zLCBsb2FkU3RyaW5nLCBsb2FkSlNPTn07IiwiaW1wb3J0IHtsb2FkU3RyaW5nfSBmcm9tICcuL3N0cmluZ0xvYWRlcic7XG5pbXBvcnQge0ludmFsaWRQYXRoRXJyb3J9IGZyb20gJy4vY29tbW9uJztcblxuLyoqXG4gKiBMb2FkcyB0aGUgY29udGVudCBvZCBhIEpTT04gZmlsZVxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGhUb0ZpbGUgLSB0aGUgcGF0aCBvZiB0aGUgZmlsZSB0byBiZSBsb2FkZWQsIHJlbGF0aXZlIHRvIHRoZSBwYWNrYWdlIHJvb3QuXG4gKiBAcGFyYW0ge3N0cmluZ30gbW9kdWxlRGlyIC0gdGhlIGFic3VsdXRlIHBhdGggb2YgdGhlIGZpbGUgY2FsbGluZyB0aGlzIGZ1bmN0aW9uLCBhd2F5cyB1c2UgdGhlIG5vZGUgdmFyaWFibGUgX19kaXJuYW1lLlxuICogQHJldHVybnMge1Byb21pc2U8T2JqZWN0Pn0gLSBBIHByb21pc2UgdG8gYW4gb2JqZWN0IHdpdGggeW91ciBKU09OJ3MgY29udGVudHMuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkSlNPTihwYXRoVG9GaWxlOiBzdHJpbmcsIG1vZHVsZURpcjogc3RyaW5nKTogUHJvbWlzZTxPYmplY3Q+IHtcbiAgLy8gQ2hlY2sgZm9yIG51bGxpc2ggZGlybmFtZVxuICBwYXRoVG9GaWxlID8/ICgoKSA9PiB7dGhyb3cgbmV3IEludmFsaWRQYXRoRXJyb3IoKX0pKClcblxuICBjb25zdCBzb3VyY2VTdHJpbmcgPSBhd2FpdCBsb2FkU3RyaW5nKHBhdGhUb0ZpbGUsIG1vZHVsZURpcik7XG4gIHJldHVybiBKU09OLnBhcnNlKHNvdXJjZVN0cmluZyk7XG59IiwiaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQge3Byb21pc2VzIGFzIGZzfSBmcm9tICdmcyc7XG5pbXBvcnQge2dldFBhY2thZ2VEaXIsIEVuY29kaW5nT3B0aW9ucywgSW52YWxpZFBhdGhFcnJvcn0gZnJvbSAnLi9jb21tb24nO1xuXG4vKipcbiAqIExvYWRzIGEgc3RyaW5nIGluc2lkZSBhIGZpbGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoVG9GaWxlIC0gdGhlIHBhdGggb2YgdGhlIGZpbGUgdG8gYmUgbG9hZGVkLCByZWxhdGl2ZSB0byB0aGUgcGFja2FnZSByb290LlxuICogQHBhcmFtIHtzdHJpbmd9IG1vZHVsZURpciAtIHRoZSBhYnN1bHV0ZSBwYXRoIG9mIHRoZSBmaWxlIGNhbGxpbmcgdGhpcyBmdW5jdGlvbiwgYXdheXMgdXNlIHRoZSBub2RlIHZhcmlhYmxlIF9fZGlybmFtZS5cbiAqIEBwYXJhbSB7RW5jb2RpbmdPcHRpb25zfSBlbmNvZGluZyAtIHRoZSBlbmNvZGluZyBvZiB0aGUgZmlsZSB0byBsb2FkLCB0aGUgZGVmYXVsdCBpcyB1dGYtOC5cbiAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IC0gQSBwcm9taXNlIHRvIGEgc3RyaW5nIHdpdGggdGhlIGZpbGUncyBjb250ZW50cy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRTdHJpbmcocGF0aFRvRmlsZTogc3RyaW5nLCBtb2R1bGVEaXI6IHN0cmluZywgZW5jb2Rpbmc6IEVuY29kaW5nT3B0aW9ucyA9ICd1dGYtOCcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAvLyBDaGVjayBmb3IgbnVsbGlzaCBkaXJuYW1lXG4gIHBhdGhUb0ZpbGUgPz8gKCgpID0+IHt0aHJvdyBuZXcgSW52YWxpZFBhdGhFcnJvcigpfSkoKVxuXG4gIGNvbnN0IGZpbmFsUGF0aCA9IHBhdGguam9pbihhd2FpdCBnZXRQYWNrYWdlRGlyKG1vZHVsZURpciksIHBhdGhUb0ZpbGUpO1xuICBjb25zdCBmaWxlU3RyaW5nOiBzdHJpbmcgPSBhd2FpdCBmcy5yZWFkRmlsZShmaW5hbFBhdGgsIHtlbmNvZGluZzogZW5jb2Rpbmd9KTtcbiAgcmV0dXJuIGZpbGVTdHJpbmc7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=