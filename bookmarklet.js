/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = function () {
  var playmmlButtonTemplate = document.createElement("A");
  playmmlButtonTemplate.innerHTML = "play";
  playmmlButtonTemplate.style.cssText = "background-color:#606984;color:#ffffff;font-weight:bold;cursor:pointer;line-height:1.25em;padding:0.3em;border-radius:0.5em;margin-left: 18px; float: right; position: relative; top: -24px;font-size:0.75em";
  return playmmlButtonTemplate;
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const targetContentsList = document.querySelectorAll('.status__content:not(.ox-playflagged):not(.muted)');

// import sionicjs from 'Sionic.js';
const createButton = __webpack_require__(0);
const playmmlButtonTemplate = createButton();

targetContentsList.forEach((targetContent) => {
  const sourceText = targetContent.textContent;
  const playmmlButton = playmmlButtonTemplate.cloneNode(true);

  const playmmlAnchor = document.createElement("DIV");
  playmmlAnchor.id = "playmml_" + Math.round(Math.random() * 1000);
  const targetId = playmmlAnchor.id;
  targetContent.appendChild(playmmlAnchor);
  targetContent.classList.add("ox-playflagged");

  const mml = sourceText.match(/MML@(.*?);/);
  if (mml) {
  targetContent.parentNode.appendChild(playmmlButton);
    playmmlButton.addEventListener('click', (e) => {
        const textarea = document.createElement("textarea")
        targetContent.appendChild(textarea);

        console.log('played');
        console.log(mml[0]);

        textarea.value = mml[0]
        textarea.select();

        try {
          var successful = document.execCommand('cut');
          var msg = successful ? 'successful' : 'unsuccessful';
          console.log('Cutting text command was ' + msg);
        } catch(err) {
          console.log('Oops, unable to cut');
        }

        targetContent.removeChild(textarea);
        // https://developer.mozilla.org/ja/docs/Web/API/Fetch_API/Using_Fetch
        // fetch(url).then(function(response) {
        //   return response.json();
        // }).then(function(json) {
        // });
      }
      , false);
  }
});


/***/ })
/******/ ]);