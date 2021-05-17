// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"3Imd1":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "0fa2489aa94c8731ee2aee9f3fafb3e2";
// @flow
/*global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE*/
/*::
import type {
HMRAsset,
HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
(string): mixed;
cache: {|[string]: ParcelModule|};
hotData: mixed;
Module: any;
parent: ?ParcelRequire;
isParcelRequire: true;
modules: {|[string]: [Function, {|[string]: string|}]|};
HMR_BUNDLE_ID: string;
root: ParcelRequire;
}
interface ParcelModule {
hot: {|
data: mixed,
accept(cb: (Function) => void): void,
dispose(cb: (mixed) => void): void,
// accept(deps: Array<string> | string, cb: (Function) => void): void,
// decline(): void,
_acceptCallbacks: Array<(Function) => void>,
_disposeCallbacks: Array<(mixed) => void>,
|};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || (function () {}));
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, /*: {|[string]: boolean|}*/
acceptedAssets, /*: {|[string]: boolean|}*/
/*: {|[string]: boolean|}*/
assetsToAccept;
function getHostname() {
  return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
  return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = getHostname();
  var port = getPort();
  var protocol = HMR_SECURE || location.protocol == 'https:' && !(/localhost|127.0.0.1|0.0.0.0/).test(hostname) ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
  // $FlowFixMe
  ws.onmessage = function (event) /*: {data: string, ...}*/
  {
    checkedAssets = {
      /*: {|[string]: boolean|}*/
    };
    acceptedAssets = {
      /*: {|[string]: boolean|}*/
    };
    assetsToAccept = [];
    var data = /*: HMRMessage*/
    JSON.parse(event.data);
    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH);
      // Handle HMR Update
      var handled = false;
      assets.forEach(asset => {
        var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        if (didAccept) {
          handled = true;
        }
      });
      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(module.bundle.root, asset);
        });
        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];
          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }
    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
      }
      // Render the fancy html overlay
      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      // $FlowFixMe
      document.body.appendChild(overlay);
    }
  };
  ws.onerror = function (e) {
    console.error(e.message);
  };
  ws.onclose = function (e) {
    if (undefined !== 'test') {
      console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
    console.log('[parcel] ✨ Error resolved');
  }
}
function createErrorOverlay(diagnostics) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }
  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]>*/
{
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push([bundle, k]);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    if (link.parentNode !== null) {
      // $FlowFixMe
      link.parentNode.removeChild(link);
    }
  };
  newLink.setAttribute('href', // $FlowFixMe
  link.getAttribute('href').split('?')[0] + '?' + Date.now());
  // $FlowFixMe
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      // $FlowFixMe[incompatible-type]
      var href = /*: string*/
      links[i].getAttribute('href');
      var hostname = getHostname();
      var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
      var absolute = (/^https?:\/\//i).test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
      if (!absolute) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
function hmrApply(bundle, /*: ParcelRequire*/
asset) /*:  HMRAsset*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (asset.type === 'css') {
    reloadCSS();
    return;
  }
  let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
  if (deps) {
    var fn = new Function('require', 'module', 'exports', asset.output);
    modules[asset.id] = [fn, deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, /*: ParcelRequire*/
id, /*: ParcelRequire*/
/*: string*/
depsByBundle) /*: ?{ [string]: { [string]: string } }*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
    // If we reached the root bundle without finding where the asset should go,
    // there's nothing to do. Mark as "accepted" so we don't reload the page.
    if (!bundle.parent) {
      return true;
    }
    return hmrAcceptCheck(bundle.parent, id, depsByBundle);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(module.bundle.root, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1], null);
  });
}
function hmrAcceptRun(bundle, /*: ParcelRequire*/
id) /*: string*/
{
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached && cached.hot) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      var assetsToAlsoAccept = cb(function () {
        return getParents(module.bundle.root, id);
      });
      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }
  acceptedAssets[id] = true;
}

},{}],"5rkFb":[function(require,module,exports) {
"use strict";
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "supermarket", function () {
  return supermarket;
});
_parcelHelpers.export(exports, "myproject", function () {
  return myproject;
});
require("./todo-constructor.js");
var _btnsJs = require("./btns.js");
var _localStorageJs = require("./local-storage.js");
var _arraysJs = require("./arrays.js");
require("./dom.js");
let supermarket = [];
let myproject = [];
_btnsJs.addTodo();
_btnsJs.enableProjectBtns();
_localStorageJs.reloadLocalStorage();
_arraysJs.removeProjectFromArray();

},{"./btns.js":"2a0J9","./todo-constructor.js":"3bvJk","./local-storage.js":"2PttN","./arrays.js":"7oSxz","./dom.js":"1n3Ex","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"2a0J9":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "addTodo", function () {
  return addTodo;
});
_parcelHelpers.export(exports, "enableProjectBtns", function () {
  return enableProjectBtns;
});
var _todoConstructorJs = require("./todo-constructor.js");
var _todoConstructorJsDefault = _parcelHelpers.interopDefault(_todoConstructorJs);
var _arraysJs = require("./arrays.js");
var _domJs = require("./dom.js");
var _localStorageJs = require("./local-storage.js");
var _indexJs = require("./index.js");
function addTodo() {
  const btnSubmit = document.getElementById("submit-btn");
  const table = document.getElementById("tasks");
  btnSubmit.addEventListener("click", e => {
    e.preventDefault();
    const project = document.getElementById("project").value;
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const dueDate = document.getElementById("dueDate").value;
    const priority = document.getElementById("priority").value;
    const newTodoCreated = new _todoConstructorJsDefault.default({
      project: `${project}`,
      title: `${title}`,
      description: `${description}`,
      dueDate: `${dueDate}`,
      priority: `${priority}`
    });
    if (project.toLowerCase() === "supermarket") {
      _arraysJs.addProjectToArray(newTodoCreated, _indexJs.supermarket);
      _domJs.render(_indexJs.supermarket, table);
      _domJs.changeProjectTitle("Supermarket");
      _localStorageJs.saveProjectToLocalStorage("Supermarket", _indexJs.supermarket);
    } else {
      _arraysJs.addProjectToArray(newTodoCreated, _indexJs.myproject);
      _domJs.render(_indexJs.myproject, table);
      _domJs.changeProjectTitle("My Project");
      _localStorageJs.saveProjectToLocalStorage("My Project", _indexJs.myproject);
    }
  });
}
function enableProjectBtns() {
  const myProjectBtns = document.querySelector(".project-btns");
  myProjectBtns.addEventListener("click", e => {
    const table = document.getElementById("tasks");
    if (e.target.textContent.toLowerCase().replace(/\s/g, "") === "supermarket") {
      _domJs.render(_indexJs.supermarket, table);
      _domJs.changeProjectTitle("Supermarket");
    } else {
      _domJs.render(_indexJs.myproject, table);
      _domJs.changeProjectTitle("My Project");
    }
  });
}

},{"./todo-constructor.js":"3bvJk","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y","./arrays.js":"7oSxz","./dom.js":"1n3Ex","./local-storage.js":"2PttN","./index.js":"5rkFb"}],"3bvJk":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
function Todo(details) {
  const {project, title, description, dueDate, priority} = details;
  this.project = project || "unknown";
  this.title = title || "unknown";
  this.description = description || "unknown";
  this.dueDate = dueDate || "unknown";
  this.priority = priority || "unknown";
}
exports.default = Todo;

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"5gA8y":[function(require,module,exports) {
"use strict";

exports.interopDefault = function (a) {
  return a && a.__esModule ? a : {
    default: a
  };
};

exports.defineInteropFlag = function (a) {
  Object.defineProperty(a, '__esModule', {
    value: true
  });
};

exports.exportAll = function (source, dest) {
  Object.keys(source).forEach(function (key) {
    if (key === 'default' || key === '__esModule') {
      return;
    } // Skip duplicate re-exports when they have the same value.


    if (key in dest && dest[key] === source[key]) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function () {
        return source[key];
      }
    });
  });
  return dest;
};

exports.export = function (dest, destName, get) {
  Object.defineProperty(dest, destName, {
    enumerable: true,
    get: get
  });
};
},{}],"7oSxz":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "addProjectToArray", function () {
  return addProjectToArray;
});
_parcelHelpers.export(exports, "removeProjectFromArray", function () {
  return removeProjectFromArray;
});
require("./todo-constructor.js");
require("./btns.js");
require("./dom.js");
var _localStorageJs = require("./local-storage.js");
var _indexJs = require("./index.js");
function addProjectToArray(todo, array) {
  array.push(todo);
}
function removeProjectFromArray() {
  const table = document.getElementById("tasks");
  table.addEventListener("click", e => {
    if (!e.target.classList.contains("delete")) {
      return;
    }
    e.target.closest("tr").remove();
    let currentTodoProject = e.target.closest("tr").dataset.todoProject;
    let currentTodoTitle = e.target.closest("tr").dataset.todoTitle;
    if (currentTodoProject === "Supermarket") {
      removeTodoFromProject(_indexJs.supermarket, currentTodoProject, currentTodoTitle);
      _localStorageJs.saveProjectToLocalStorage("Supermarket", _indexJs.supermarket);
    } else {
      removeTodoFromProject(_indexJs.myproject, currentTodoProject, currentTodoTitle);
      _localStorageJs.saveProjectToLocalStorage("My Project", _indexJs.myproject);
    }
  });
  function removeTodoFromProject(projectName, TodoProject, TodoTitle) {
    if (projectName.length === 0) {
      return;
    }
    for (let todo of projectName) {
      if (todo.project === TodoProject && todo.title === TodoTitle) {
        let todoToRemoveIndex = projectName.indexOf(todo);
        projectName.splice(todoToRemoveIndex, 1);
      }
    }
  }
}

},{"./todo-constructor.js":"3bvJk","./btns.js":"2a0J9","./dom.js":"1n3Ex","./local-storage.js":"2PttN","./index.js":"5rkFb","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"1n3Ex":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "changeProjectTitle", function () {
  return changeProjectTitle;
});
_parcelHelpers.export(exports, "render", function () {
  return render;
});
require("./todo-constructor.js");
require("./btns.js");
require("./local-storage.js");
require("./arrays.js");
require("./index.js");
function changeProjectTitle(projectName) {
  const projectTitle = document.querySelector("#project-title");
  projectTitle.innerText = projectName;
}
function render(array, parentDiv) {
  parentDiv.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    let priorityClass;
    switch (array[i].priority) {
      case "High":
        priorityClass = "btn-outline-danger";
        break;
      case "Medium":
        priorityClass = "btn-outline-warning";
        break;
      case "Low":
        priorityClass = "btn-outline-dark";
    }
    let row = `
		<tr data-todo-title="${array[i].title}" data-todo-project="${array[i].project}">
    <td class="px-2">${array[i].title}</td>
    <td class="px-2">${array[i].description}</td>
    <td class="px-2">${array[i].dueDate}</td>
    <td class="px-2 text-center ${priorityClass}">${array[i].priority}</td>
    <td><button class="mx-1 btn btn-dark edit">Edit</button></td>
    <td><button class="mx-1 btn btn-danger delete">Delete</button></td>
    </tr>
		`;
    parentDiv.insertAdjacentHTML("beforeend", row);
  }
}

},{"./todo-constructor.js":"3bvJk","./btns.js":"2a0J9","./local-storage.js":"2PttN","./arrays.js":"7oSxz","./index.js":"5rkFb","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"2PttN":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "saveProjectToLocalStorage", function () {
  return saveProjectToLocalStorage;
});
_parcelHelpers.export(exports, "reloadLocalStorage", function () {
  return reloadLocalStorage;
});
var _todoConstructorJs = require("./todo-constructor.js");
var _todoConstructorJsDefault = _parcelHelpers.interopDefault(_todoConstructorJs);
require("./btns.js");
var _arraysJs = require("./arrays.js");
var _domJs = require("./dom.js");
var _indexJs = require("./index.js");
function saveProjectToLocalStorage(projectName, array) {
  return localStorage.setItem(projectName, JSON.stringify(array));
}
function reloadLocalStorage() {
  const table = document.getElementById("tasks");
  if (localStorage.length === 0 || localStorage["My Project"] === "[]") {
    const defaultTodo = new _todoConstructorJsDefault.default({
      project: "My Project",
      title: "Buy Mouse Pad",
      description: "Logitech",
      dueDate: "2021-08-10",
      priority: "Medium"
    });
    _arraysJs.addProjectToArray(defaultTodo, _indexJs.myproject);
    _domJs.render(_indexJs.myproject, table);
  } else {
    let myProjectDestringified = JSON.parse(localStorage.getItem("My Project"));
    let supermarketDestringified = JSON.parse(localStorage.getItem("Supermarket"));
    const myArraysDistringified = [myProjectDestringified, supermarketDestringified];
    myArraysDistringified.forEach(array => {
      array.forEach(element => {
        const previousTodos = new _todoConstructorJsDefault.default({
          project: element.project,
          title: element.title,
          description: element.description,
          dueDate: element.dueDate,
          priority: element.priority
        });
        if (previousTodos.project === "My Project") {
          _arraysJs.addProjectToArray(previousTodos, _indexJs.myproject);
          _domJs.render(_indexJs.myproject, table);
        } else {
          _arraysJs.addProjectToArray(previousTodos, _indexJs.supermarket);
        }
      });
    });
  }
}

},{"./todo-constructor.js":"3bvJk","./btns.js":"2a0J9","./arrays.js":"7oSxz","./dom.js":"1n3Ex","./index.js":"5rkFb","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}]},["3Imd1","5rkFb"], "5rkFb", "parcelRequireada0")

//# sourceMappingURL=index.3fafb3e2.js.map
