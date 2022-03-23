// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
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
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
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
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"aDDXQ":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "16512229fa23dcb8";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
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
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
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
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"hH6CD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _atomizer = require("../../lib/QuantumGate/Atomizer");
var _gateSymbol = require("../../lib/QuantumGate/GateSymbol");
var _generator = require("../../lib/QuantumGate/Generator");
var _quantumGate = require("../../lib/QuantumGate/QuantumGate");
var _quantumState = require("../../lib/QuantumState");
var _quantumStateDefault = parcelHelpers.interopDefault(_quantumState);
var _quantumVectorState = require("../../lib/QuantumVectorState");
var _quantumVectorStateDefault = parcelHelpers.interopDefault(_quantumVectorState);
var _quantumWire = require("../../lib/QuantumWire");
var _complexNumber = require("../../util/ComplexNumber");
var _complexNumberDefault = parcelHelpers.interopDefault(_complexNumber);
var _vector = require("../../util/Vector");
var _vectorDefault = parcelHelpers.interopDefault(_vector);
const generateRandomCircuit = (wireLength, gateNumber = 100)=>{
    // generator one of three H, CX, P
    const wire = _quantumWire.QuantumWire.create(wireLength);
    for(let i = 0; i < gateNumber; i++){
        const rand = Math.random();
        if (rand < 0.33) wire.addGate(_quantumGate.QuantumGate.fromBasis({
            type: _gateSymbol.GateSymbol.Hadamard,
            wire: Math.floor(Math.random() * wireLength),
            wireLength
        }));
        else if (rand < 0.66) wire.addGate(_quantumGate.QuantumGate.fromBasis({
            type: _gateSymbol.GateSymbol.Phase,
            wire: Math.floor(Math.random() * wireLength),
            angle: Math.random() * Math.PI * 2,
            wireLength
        }));
        else {
            const targetWire = Math.floor(Math.random() * wireLength);
            // rand control wire !== targetWire
            let controlWire = Math.floor(Math.random() * wireLength);
            while(controlWire === targetWire)controlWire = Math.floor(Math.random() * wireLength);
            wire.addGate(_quantumGate.QuantumGate.fromSingleControlled({
                type: _gateSymbol.GateSymbol.PauliX,
                wire: targetWire,
                controlWire,
                wireLength
            }));
        }
    }
    return wire;
};
const testSpeed = (wireLength)=>{
    const wire = generateRandomCircuit(wireLength);
    // const circuitIab = wire.generate(AtomizeStrategy.Min, GeneratorType.Matrix);
    // const genStart3 = performance.now();
    // const circuitIc = wire.generate(AtomizeStrategy.Min, GeneratorType.SparseMatrix);
    // const genEnd3 = performance.now();
    // console.log(`Ic: ${genEnd3 - genStart3} ms`);
    const genStartII = performance.now();
    const circuitII = wire.generate(_atomizer.AtomizeStrategy.Min, _generator.GeneratorType.StateFunction);
    const genEndII = performance.now();
    console.log(`II: ${genEndII - genStartII} ms`);
    // const genStartIII = performance.now();
    // const circuitIII = wire.generate(AtomizeStrategy.Min, GeneratorType.VectorFunction);
    // const genEndIII = performance.now();
    // console.log(`III: ${genEndIII - genStartIII} ms`);
    const genStartIV = performance.now();
    const circuitIV = wire.generate(_atomizer.AtomizeStrategy.Min, _generator.GeneratorType.VectorStateFunction);
    const genEndIV = performance.now();
    console.log(`IV: ${genEndIV - genStartIV} ms`);
    const vec = _vectorDefault.default.zeros(2 ** wireLength);
    vec.set(0, _complexNumberDefault.default.ONE);
    // simulator Ia
    // const start = performance.now();
    // const _Ia = circuitIab.executeMatrix(vec);
    // const end = performance.now();
    // console.log(`Ia: ${end - start} ms`);
    // simulator Ib
    // const start2 = performance.now();
    // const _Ib = circuitIab.execute(vec);
    // const end2 = performance.now();
    // console.log(`Ib: ${end2 - start2} ms`);
    // simulator Ic
    // const start3 = performance.now();
    // circuitIc.execute(vec);
    // const end3 = performance.now();
    // console.log(`Ic: ${end3 - start3} ms`);
    // simulator II
    const start4 = performance.now();
    circuitII.execute(_quantumStateDefault.default.zero(wireLength));
    const end4 = performance.now();
    console.log(`II: ${end4 - start4} ms`);
    // simulator III
    // const start5 = performance.now();
    // circuitIII.execute(vec);
    // const end5 = performance.now();
    // console.log(`III: ${end5 - start5} ms`);
    // simulator IV
    const start6 = performance.now();
    circuitIV.execute(_quantumVectorStateDefault.default.zero(wireLength));
    const end6 = performance.now();
    console.log(`IV: ${end6 - start6} ms`);
};
const testStateFunctionSparse = ()=>{
    return new Promise((resolve)=>{
        const circuitIIData = [];
        const circuitIVData = [];
        const startLength = 3;
        const endLength = 10;
        const iterations = 100;
        let currentLength = startLength;
        let currentIteration = 0;
        const iter = ()=>{
            if (currentLength >= endLength && currentIteration >= iterations) {
                resolve({
                    circuitIIData,
                    circuitIVData
                });
                return;
            }
            if (currentLength < endLength && currentIteration >= iterations) {
                currentLength++;
                currentIteration = 0;
            }
            if (circuitIIData[currentLength] === undefined) circuitIIData[currentLength] = [];
            if (circuitIVData[currentLength] === undefined) circuitIVData[currentLength] = [];
            const wire = generateRandomCircuit(currentLength);
            const circuitII = wire.generate(_atomizer.AtomizeStrategy.Min, _generator.GeneratorType.StateFunction);
            const circuitIV = wire.generate(_atomizer.AtomizeStrategy.Min, _generator.GeneratorType.VectorStateFunction);
            const startII = performance.now();
            circuitII.execute(_quantumStateDefault.default.zero(currentLength));
            const endII = performance.now();
            circuitIIData[currentLength].push(endII - startII);
            const startIV = performance.now();
            circuitIV.execute(_quantumVectorStateDefault.default.zero(currentLength));
            const endIV = performance.now();
            circuitIVData[currentLength].push(endIV - startIV);
            console.log(`${currentLength}: ${currentIteration}`);
            currentIteration++;
            setTimeout(iter, 0);
        };
        setTimeout(iter, 0);
    });
};
// console.log("1")
// for (let index in circuitIIData) {
//     Promise.all(circuitIIData[index]).then(values => {
//         console.log(`II at ${index} wire: ${values.reduce((a, b) => a + b) / values.length} ms`);
//     })
// }
// for (let index in circuitIVData) {
//     Promise.all(circuitIVData[index]).then(values => {
//         console.log(`IV at ${index} wire: ${values.reduce((a, b) => a + b) / values.length} ms`);
//     })
// }
window.onload = ()=>{
    testStateFunctionSparse().then(({ circuitIIData , circuitIVData  })=>{
        const avgIIData = circuitIIData.map((arr)=>arr?.reduce((a, b)=>a + b
            ) / arr.length
        );
        const avgIVData = circuitIVData.map((arr)=>arr?.reduce((a, b)=>a + b
            ) / arr.length
        );
        console.log(avgIIData);
        console.log(avgIVData);
    });
};

},{"../../lib/QuantumGate/Atomizer":"9mu5U","../../lib/QuantumGate/GateSymbol":"l5zy9","../../lib/QuantumGate/Generator":"2GKIR","../../lib/QuantumGate/QuantumGate":"9LUez","../../lib/QuantumState":"5ZrtS","../../lib/QuantumVectorState":"iSZSH","../../lib/QuantumWire":"15eMQ","../../util/ComplexNumber":"87em4","../../util/Vector":"csYFV","@parcel/transformer-js/src/esmodule-helpers.js":"ap6ht"}],"9mu5U":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AtomizeStrategy", ()=>AtomizeStrategy
);
var _hadamard = require("./ElementaryGate/Hadamard");
var _hadamardDefault = parcelHelpers.interopDefault(_hadamard);
var _pauliX = require("./ElementaryGate/PauliX");
var _pauliXDefault = parcelHelpers.interopDefault(_pauliX);
var _phase = require("./ElementaryGate/Phase");
var _phaseDefault = parcelHelpers.interopDefault(_phase);
var _rz = require("./ElementaryGate/Rz");
var _rzDefault = parcelHelpers.interopDefault(_rz);
var _flip = require("./ExtendedGate/Flip");
var _flipDefault = parcelHelpers.interopDefault(_flip);
var _fourier = require("./ExtendedGate/Fourier");
var _fourierDefault = parcelHelpers.interopDefault(_fourier);
var _swap = require("./ExtendedGate/Swap");
var _swapDefault = parcelHelpers.interopDefault(_swap);
var _gateSymbol = require("./GateSymbol");
var _quantumGate = require("./QuantumGate");
class AtomizeStrategy {
    constructor(){
    }
    static All(gate, generatorType) {
        if (gate.isElementaryGate()) return [
            gate
        ];
        // non-elementary gate can be atomized
        const atomizedGateList = Atomizer.atomize(gate);
        if (atomizedGateList === null) throw new Error(`Could not atomize gate ${gate.constructor.name}`);
        // further atomize the list
        return atomizedGateList.map((g)=>this.All(g, generatorType)
        ).flat();
    }
    static Max(gate, generatorType) {
        if (gate.isElementaryGate()) return [
            gate
        ];
        // try to atomize the gate
        const atomizedGateList = Atomizer.atomize(gate);
        if (atomizedGateList !== null) // further atomize the list
        return atomizedGateList.map((g)=>this.Max(g, generatorType)
        ).flat();
        // cannot atomize the gate, try to get it
        if (gate.isGettable(generatorType)) return [
            gate
        ];
        throw new Error(`Could neither atomize gate ${gate.constructor.name} with generator ${generatorType} nor get it`);
    }
    static Min(gate, generatorType) {
        if (gate.isElementaryGate()) return [
            gate
        ];
        // try to get it
        if (gate.isGettable(generatorType)) return [
            gate
        ];
        // cannot directly get the gate, try to atomize it
        const atomizedGateList = Atomizer.atomize(gate);
        if (atomizedGateList === null) throw new Error(`Could not atomize gate ${gate.constructor.name}`);
        // further atomize the list
        return atomizedGateList.map((g)=>this.Min(g, generatorType)
        ).flat();
    }
    static None(gate, generatorType) {
        if (gate.isGettable(generatorType)) return [
            gate
        ];
        else throw new Error(`Could not get gate ${gate.constructor.name} with generator ${generatorType}`);
    }
}
class Atomizer {
    constructor(){
    }
    // 1 depth atomization
    static atomize(gate) {
        if (gate.isNotInverted()) {
            if (gate.isUncontrolled()) return this.atomizeNotInvertedUncontrolled(gate);
            else if (gate.isSinglyControlled()) return this.atomizeNotInvertedSinglyControlled(gate);
            else return null;
        } else if (gate.isInverted()) {
            if (gate.isUncontrolled()) return this.atomizeInvertedUncontrolled(gate);
            else if (gate.isControlled()) return this.atomizeInvertedControlled(gate);
            else return null;
        } else return null;
    }
    static atomizeNotInvertedUncontrolled(gate) {
        if (gate.isBasedOn(_hadamardDefault.default)) return this.NotInvertedUncontrolledHadamard(gate);
        else if (gate.isBasedOn(_pauliXDefault.default)) return this.NotInvertedUncontrolledPauliX(gate);
        else if (gate.isBasedOn(_phaseDefault.default)) return this.NotInvertedUncontrolledPhase(gate);
        else if (gate.isBasedOn(_rzDefault.default)) return this.NotInvertedUncontrolledRz(gate);
        else if (gate.isBasedOn(_flipDefault.default)) return this.NotInvertedUncontrolledFlip(gate);
        else if (gate.isBasedOn(_fourierDefault.default)) return this.NotInvertedUncontrolledFourier(gate);
        else if (gate.isBasedOn(_swapDefault.default)) return this.NotInvertedUncontrolledSwap(gate);
        else return null;
    }
    static atomizeNotInvertedSinglyControlled(gate) {
        if (gate.isBasedOn(_pauliXDefault.default)) return this.NotInvertedSinglyControlledPauliX(gate);
        else if (gate.isBasedOn(_phaseDefault.default)) return this.NotInvertedSinglyControlledPhase(gate);
        else if (gate.isBasedOn(_rzDefault.default)) return this.NotInvertedSinglyControlledRz(gate);
        else return null;
    }
    static atomizeInvertedUncontrolled(gate) {
        if (gate.isBasedOn(_hadamardDefault.default)) return this.InvertedUncontrolledHadamard(gate);
        else if (gate.isBasedOn(_pauliXDefault.default)) return this.InvertedUncontrolledPauliX(gate);
        else if (gate.isBasedOn(_phaseDefault.default)) return this.InvertedUncontrolledPhase(gate);
        else if (gate.isBasedOn(_rzDefault.default)) return this.InvertedUncontrolledRz(gate);
        else if (gate.isBasedOn(_flipDefault.default)) return this.InvertedUncontrolledFlip(gate);
        else if (gate.isBasedOn(_fourierDefault.default)) return this.InvertedUncontrolledFourier(gate);
        else if (gate.isBasedOn(_swapDefault.default)) return this.InvertedUncontrolledSwap(gate);
        else return null;
    }
    static atomizeInvertedControlled(gate) {
        // construct the uncontrolled version first
        const uncontrolledGate1 = this.atomizeInvertedUncontrolled(_quantumGate.QuantumGate.toUncontrolled(gate));
        if (uncontrolledGate1 === null) return null;
        // then construct the controlled version
        return uncontrolledGate1.map((uncontrolledGate)=>{
            return _quantumGate.QuantumGate.toControlled(uncontrolledGate, gate.controlWire);
        });
    }
}
Atomizer.NotInvertedUncontrolledHadamard = (gate)=>[
        gate.clone()
    ]
;
Atomizer.NotInvertedUncontrolledPhase = (gate)=>[
        gate.clone()
    ]
;
Atomizer.NotInvertedUncontrolledPauliX = (gate)=>{
    // H, P Pi, H
    return [
        _quantumGate.QuantumGate.fromBasis({
            type: _gateSymbol.GateSymbol.Hadamard,
            wire: gate.basis.wire,
            wireLength: gate.wireLength
        }),
        _quantumGate.QuantumGate.fromBasis({
            type: _gateSymbol.GateSymbol.Phase,
            wire: gate.basis.wire,
            angle: Math.PI,
            wireLength: gate.wireLength
        }),
        _quantumGate.QuantumGate.fromBasis({
            type: _gateSymbol.GateSymbol.Hadamard,
            wire: gate.basis.wire,
            wireLength: gate.wireLength
        })
    ];
};
Atomizer.NotInvertedUncontrolledRz = (gate)=>{
    // PauliX Phase -theta/2 PauliX Phase theta/2
    return [
        _quantumGate.QuantumGate.fromBasis({
            type: _gateSymbol.GateSymbol.PauliX,
            wire: gate.basis.wire,
            wireLength: gate.wireLength
        }),
        _quantumGate.QuantumGate.fromBasis({
            type: _gateSymbol.GateSymbol.Phase,
            wire: gate.basis.wire,
            angle: -gate.basis.angle / 2,
            wireLength: gate.wireLength
        }),
        _quantumGate.QuantumGate.fromBasis({
            type: _gateSymbol.GateSymbol.PauliX,
            wire: gate.basis.wire,
            wireLength: gate.wireLength
        }),
        _quantumGate.QuantumGate.fromBasis({
            type: _gateSymbol.GateSymbol.Phase,
            wire: gate.basis.wire,
            angle: gate.basis.angle / 2,
            wireLength: gate.wireLength
        })
    ];
};
Atomizer.NotInvertedUncontrolledFlip = (gate)=>{
    const [startWire, endWire] = gate.basis.wireRange;
    const middleWire = Math.floor((startWire + endWire) / 2);
    let returnArray = [];
    for(let i = startWire; i < middleWire; i++)returnArray.push(_quantumGate.QuantumGate.fromBasis({
        type: _gateSymbol.GateSymbol.Swap,
        wireOne: i,
        wireTwo: endWire - 1 + startWire - i,
        wireLength: gate.wireLength
    }));
    return returnArray;
};
Atomizer.NotInvertedUncontrolledFourier = (gate)=>{
    let returnArray = [];
    const basis = gate.basis;
    const startWire = basis.startWire;
    const wireLength = basis.wireLength;
    const endWire = basis.endWire;
    for(let i = endWire - 1; i >= startWire; i--){
        for(let j = endWire - 1; j > 1; j--)returnArray.push(_quantumGate.QuantumGate.fromBasis({
            type: _gateSymbol.GateSymbol.Phase,
            wireLength,
            wire: j,
            angle: Math.PI / 2 ** (j - 1)
        }));
        returnArray.push(_quantumGate.QuantumGate.fromBasis({
            type: _gateSymbol.GateSymbol.Hadamard,
            wireLength,
            wire: i
        }));
    }
    returnArray.push(_quantumGate.QuantumGate.fromBasis({
        type: _gateSymbol.GateSymbol.Flip,
        wireLength,
        startWire: startWire,
        endWire: endWire
    }));
    return returnArray;
};
Atomizer.NotInvertedUncontrolledSwap = (gate)=>{
    // C-NOT, C-NOT, C-NOT,
    return [
        _quantumGate.QuantumGate.fromSingleControlled({
            type: _gateSymbol.GateSymbol.PauliX,
            wire: gate.basis.wireOne,
            controlWire: gate.basis.wireTwo,
            wireLength: gate.wireLength
        }),
        _quantumGate.QuantumGate.fromSingleControlled({
            type: _gateSymbol.GateSymbol.PauliX,
            wire: gate.basis.wireTwo,
            controlWire: gate.basis.wireOne,
            wireLength: gate.wireLength
        }),
        _quantumGate.QuantumGate.fromSingleControlled({
            type: _gateSymbol.GateSymbol.PauliX,
            wire: gate.basis.wireOne,
            controlWire: gate.basis.wireTwo,
            wireLength: gate.wireLength
        })
    ];
};
Atomizer.NotInvertedSinglyControlledPauliX = (gate)=>[
        gate.clone()
    ]
;
Atomizer.NotInvertedSinglyControlledRz = (gate)=>{
    // C-PauliX Phase -theta/2 C-PauliX Phase theta/2
    return [
        _quantumGate.QuantumGate.fromSingleControlled({
            type: _gateSymbol.GateSymbol.PauliX,
            wire: gate.basis.wire,
            controlWire: gate.controlWire[0],
            wireLength: gate.wireLength
        }),
        _quantumGate.QuantumGate.fromBasis({
            type: _gateSymbol.GateSymbol.Phase,
            wire: gate.basis.wire,
            angle: -gate.basis.angle / 2,
            wireLength: gate.wireLength
        }),
        _quantumGate.QuantumGate.fromSingleControlled({
            type: _gateSymbol.GateSymbol.PauliX,
            wire: gate.basis.wire,
            controlWire: gate.controlWire[0],
            wireLength: gate.wireLength
        }),
        _quantumGate.QuantumGate.fromBasis({
            type: _gateSymbol.GateSymbol.Phase,
            wire: gate.basis.wire,
            angle: gate.basis.angle / 2,
            wireLength: gate.wireLength
        })
    ];
};
Atomizer.NotInvertedSinglyControlledPhase = (gate)=>{
    // Phase theta / 2 C-Rz
    return [
        _quantumGate.QuantumGate.fromBasis({
            type: _gateSymbol.GateSymbol.Phase,
            wire: gate.controlWire[0],
            angle: gate.basis.angle / 2,
            wireLength: gate.wireLength
        }),
        _quantumGate.QuantumGate.fromSingleControlled({
            type: _gateSymbol.GateSymbol.Rz,
            wire: gate.basis.wire,
            controlWire: gate.controlWire[0],
            angle: gate.basis.angle,
            wireLength: gate.wireLength
        })
    ];
};
Atomizer.InvertedUncontrolledHadamard = (gate)=>[
        gate.clone()
    ]
;
Atomizer.InvertedUncontrolledPauliX = (gate)=>[
        gate.clone()
    ]
;
Atomizer.InvertedUncontrolledPhase = (gate)=>[
        _quantumGate.QuantumGate.fromBasis({
            type: _gateSymbol.GateSymbol.Phase,
            wire: gate.basis.wire,
            angle: -gate.basis.angle,
            wireLength: gate.wireLength
        })
    ]
;
Atomizer.InvertedUncontrolledRz = (gate)=>[
        _quantumGate.QuantumGate.fromBasis({
            type: _gateSymbol.GateSymbol.Rz,
            wire: gate.basis.wire,
            angle: -gate.basis.angle,
            wireLength: gate.wireLength
        })
    ]
;
Atomizer.InvertedUncontrolledFlip = (gate)=>[
        gate.clone()
    ]
;
Atomizer.InvertedUncontrolledSwap = (gate)=>[
        gate.clone()
    ]
;
Atomizer.InvertedUncontrolledFourier = (gate)=>{
    return undefined.NotInvertedUncontrolledFourier(_quantumGate.QuantumGate.fromBasis({
        type: _gateSymbol.GateSymbol.Fourier,
        wireLength: gate.wireLength,
        startWire: gate.basis.startWire,
        endWire: gate.basis.endWire
    })).reverse();
};

},{"./ElementaryGate/Hadamard":"jsOsm","./ElementaryGate/PauliX":"3YSiI","./ElementaryGate/Phase":"bA8bw","./ElementaryGate/Rz":"5n1X6","./ExtendedGate/Flip":"90xQE","./ExtendedGate/Fourier":"9vgOs","./ExtendedGate/Swap":"hzdFh","./GateSymbol":"l5zy9","./QuantumGate":"9LUez","@parcel/transformer-js/src/esmodule-helpers.js":"ap6ht"}],"jsOsm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Hadamard
);
var _staticImpl = require("../../../util/StaticImpl");
var _staticImplDefault = parcelHelpers.interopDefault(_staticImpl);
var _stringHelper = require("../../../util/StringHelper");
var _gateHelper = require("../GateHelper");
var _generatorMatrixMap = require("../GeneratorMatrixMap");
var _class;
var _class1;
var _dec = _staticImplDefault.default();
let Hadamard = _class1 = _dec((_class1 = (_class = class Hadamard1 {
    constructor({ wireLength , wire  }){
        this.wireLength = wireLength;
        this.wire = wire;
    }
    get wireRange() {
        return [
            this.wire,
            this.wire + 1
        ];
    }
    shift({ shift , wireLength  }) {
        return Hadamard1.create({
            wireLength,
            wire: this.wire + shift
        });
    }
    clone() {
        return new Hadamard1(this);
    }
    transform(callbackFn) {
        return Hadamard1.create(callbackFn(this));
    }
    getBaseMatrix(generatorType) {
        return _generatorMatrixMap.GeneratorMatrixMap[generatorType].fromNumberArray([
            [
                1 / Math.sqrt(2),
                1 / Math.sqrt(2)
            ],
            [
                1 / Math.sqrt(2),
                -1 / Math.sqrt(2)
            ]
        ]);
    }
    getStringStateFunction() {
        return (state)=>{
            _gateHelper.requireLengthMatched(state, this.wireLength);
            return state.transform((value, key, _, newState)=>{
                newState.increment(_stringHelper.replaceCharAt(key, this.wire, '0'), value.divideReal(Math.sqrt(2)));
                newState.increment(_stringHelper.replaceCharAt(key, this.wire, '1'), value.divideReal(key[this.wire] === '0' ? Math.sqrt(2) : -Math.sqrt(2)));
            });
        };
    }
    getNumberStateFunction() {
        return (state)=>{
            _gateHelper.requireLengthMatched(state, this.wireLength);
            const signatureNumber = 1 << this.wireLength - 1 - this.wire;
            return state.transform((value, index, _, newState)=>{
                newState.increment(index & ~signatureNumber, value.divideReal(Math.sqrt(2)));
                newState.increment(index | signatureNumber, (index & signatureNumber) === 0 ? value.divideReal(Math.sqrt(2)) : value.divideReal(-Math.sqrt(2)));
            });
        };
    }
    isValidControlWire(controlWire) {
        return controlWire !== this.wire;
    }
    isGettable(_) {
        return true;
    }
}, _class.create = ({ wireLength , wire  })=>{
    _gateHelper.requireWireInBound(wireLength, wire);
    return new _class({
        wireLength,
        wire
    });
}, _class)) || _class1) || _class1;

},{"../../../util/StaticImpl":"1rEvx","../../../util/StringHelper":"awpwb","../GateHelper":"2Nadw","../GeneratorMatrixMap":"6Vrjt","@parcel/transformer-js/src/esmodule-helpers.js":"ap6ht"}],"1rEvx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ()=>{
    return (constructor)=>{
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ap6ht"}],"ap6ht":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"awpwb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "toBinaryString", ()=>toBinaryString
);
parcelHelpers.export(exports, "toBinaryList", ()=>toBinaryList
);
parcelHelpers.export(exports, "toDecimal", ()=>toDecimal
);
parcelHelpers.export(exports, "replaceCharAt", ()=>replaceCharAt
);
parcelHelpers.export(exports, "swapCharAt", ()=>swapCharAt
);
parcelHelpers.export(exports, "replaceCharBetween", ()=>replaceCharBetween
);
parcelHelpers.export(exports, "reverseString", ()=>reverseString
);
parcelHelpers.export(exports, "everyChar", ()=>everyChar
);
const toBinaryString = (number, bitLength)=>{
    let result = "";
    while(number >= 1){
        result = number % 2 + result;
        number >>= 1;
    }
    return result.padStart(bitLength, '0');
};
const toBinaryList = (string)=>{
    return string.split('');
};
const toDecimal = (binaryString)=>{
    let result = 0;
    for(let i = 0; i < binaryString.length; i++){
        const number = binaryString[i] === '1' ? 1 : 0;
        result += number * 2 ** (binaryString.length - i - 1);
    }
    return result;
};
const replaceCharAt = (string, index, replacement)=>{
    const array = string.split('');
    array[index] = replacement;
    return array.join('');
};
const swapCharAt = (string, indexOne, indexTwo)=>{
    const array = string.split('');
    [array[indexOne], array[indexTwo]] = [
        array[indexTwo],
        array[indexOne]
    ];
    return array.join('');
};
const replaceCharBetween = (string, start, end, replacement)=>{
    if (replacement.length !== end - start) throw new Error('Replacement string must be the same length as the range');
    const array = string.split('');
    array.splice(start, end - start, replacement);
    return array.join('');
};
const reverseString = (char)=>{
    return char.split("").reverse().join("");
};
const everyChar = (string, predicate)=>{
    return string.split('').every(predicate);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ap6ht"}],"2Nadw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "requireLengthMatched", ()=>requireLengthMatched
);
parcelHelpers.export(exports, "requireWireInBound", ()=>requireWireInBound
);
parcelHelpers.export(exports, "requireWireIsNotEqual", ()=>requireWireIsNotEqual
);
parcelHelpers.export(exports, "requireWireIsSmallerThan", ()=>requireWireIsSmallerThan
);
const requireLengthMatched = (stateOrVector, wireLength)=>{
    if (!stateOrVector.isFitLength(wireLength)) throw new Error(`Quantum state or vector is not fit length.`);
};
const requireWireInBound = (wireLength, wire)=>{
    if (wire < 0 || wire >= wireLength) throw new Error(`Wire number is out of bound.`);
};
const requireWireIsNotEqual = (wireOne, wireTwo)=>{
    if (wireOne === wireTwo) throw new Error(`wire ${wireOne} is equal to wire ${wireTwo}`);
};
const requireWireIsSmallerThan = (wireOne, wireTwo)=>{
    if (wireOne >= wireTwo) throw new Error(`wire ${wireOne} is not smaller than wire ${wireTwo}`);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ap6ht"}],"6Vrjt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GeneratorMatrixMap", ()=>GeneratorMatrixMap
);
parcelHelpers.export(exports, "GeneratorMatrixCtor", ()=>GeneratorMatrixCtor
);
parcelHelpers.export(exports, "isGeneratorMatrixFunctionSubType", ()=>isGeneratorMatrixFunctionSubType
);
var _matrix = require("../../util/Matrix");
var _generator = require("./Generator");
const GeneratorMatrixMap = {
    [_generator.GeneratorType.Matrix]: _matrix.Matrix,
    [_generator.GeneratorType.SparseMatrix]: _matrix.SparseMatrix
};
const GeneratorMatrixCtor = (generatorType)=>{
    return GeneratorMatrixMap[generatorType];
};
const isGeneratorMatrixFunctionSubType = (generatorType)=>{
    return generatorType === _generator.GeneratorType.Matrix || generatorType === _generator.GeneratorType.SparseMatrix;
};

},{"../../util/Matrix":"eMGO8","./Generator":"2GKIR","@parcel/transformer-js/src/esmodule-helpers.js":"ap6ht"}],"eMGO8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MatrixType", ()=>MatrixType
);
parcelHelpers.export(exports, "Matrix", ()=>Matrix
);
parcelHelpers.export(exports, "SparseMatrix", ()=>SparseMatrix
);
var _complexNumber = require("./ComplexNumber");
var _complexNumberDefault = parcelHelpers.interopDefault(_complexNumber);
var _staticImpl = require("./StaticImpl");
var _staticImplDefault = parcelHelpers.interopDefault(_staticImpl);
var _vector = require("./Vector");
var _vectorDefault = parcelHelpers.interopDefault(_vector);
var _class, _class1;
let MatrixType;
(function(MatrixType1) {
    MatrixType1[MatrixType1["Dense"] = 0] = "Dense";
    MatrixType1[MatrixType1["Sparse"] = 1] = "Sparse";
})(MatrixType || (MatrixType = {
}));
var _dec = _staticImplDefault.default();
let Matrix = _class = _dec(_class = class Matrix1 {
    constructor(matrix){
        this._matrix = matrix;
    }
    // ctor functions
    static fromNumberArray(array) {
        const result = [];
        for (const row of array){
            const rowArray = [];
            for (const element of row)rowArray.push(_complexNumberDefault.default.fromReal(element));
            result.push(rowArray);
        }
        return new Matrix1(result);
    }
    static fromComplexArray(array) {
        return new Matrix1(array);
    }
    static fromArray(array) {
        const result = [];
        for (const row of array){
            const rowArray = [];
            for (const element of row)typeof element === 'number' ? rowArray.push(_complexNumberDefault.default.fromReal(element)) : rowArray.push(element);
            result.push(rowArray);
        }
        return new Matrix1(result);
    }
    static identity(size) {
        const result = [];
        for(let i = 0; i < size; i++){
            const row = [];
            for(let j = 0; j < size; j++)row.push(i === j ? _complexNumberDefault.default.ONE : _complexNumberDefault.default.ZERO);
            result.push(row);
        }
        return new Matrix1(result);
    }
    static zeros(rowCount, columnCount) {
        const result = [];
        for(let i = 0; i < rowCount; i++){
            const rowArray = [];
            for(let j = 0; j < columnCount; j++)rowArray.push(_complexNumberDefault.default.ZERO);
            result.push(rowArray);
        }
        return new Matrix1(result);
    }
    static concat(A, B, C, D) {
        const result = [];
        // check dimensions
        if (A.rowCount !== B.rowCount || C.rowCount !== D.rowCount || A.columnCount !== C.columnCount || B.columnCount !== D.columnCount) throw new Error('Matrix dimensions do not match');
        for(let i = 0; i < A.rowCount; i++){
            const rowArray = [];
            for(let j = 0; j < A.columnCount; j++)rowArray.push(A._matrix[i][j].clone());
            for(let j1 = 0; j1 < B.columnCount; j1++)rowArray.push(B._matrix[i][j1].clone());
            result.push(rowArray);
        }
        for(let i1 = 0; i1 < C.rowCount; i1++){
            const rowArray = [];
            for(let j = 0; j < C.columnCount; j++)rowArray.push(C._matrix[i1][j].clone());
            for(let j2 = 0; j2 < D.columnCount; j2++)rowArray.push(D._matrix[i1][j2].clone());
            result.push(rowArray);
        }
        return new Matrix1(result);
    }
    static interleave(A, B) {
        const result = [];
        // check dimensions
        if (A.rowCount !== B.rowCount || A.columnCount !== B.columnCount || A.columnCount !== A.rowCount || B.columnCount !== B.rowCount) throw new Error('Matrix dimensions do not match');
        for(let i = 0; i < A.rowCount; i++){
            const rowAArray = [];
            for(let j = 0; j < A.columnCount; j++){
                rowAArray.push(A._matrix[i][j].clone());
                rowAArray.push(_complexNumberDefault.default.ZERO);
            }
            result.push(rowAArray);
            const rowBArray = [];
            for(let j3 = 0; j3 < B.columnCount; j3++){
                rowBArray.push(_complexNumberDefault.default.ZERO);
                rowBArray.push(B._matrix[i][j3].clone());
            }
            result.push(rowBArray);
        }
        return new Matrix1(result);
    }
    // property access
    get rowCount() {
        return this._matrix.length;
    }
    get columnCount() {
        return this._matrix[0].length;
    }
    get rawArray() {
        return this._matrix;
    }
    get(i, j) {
        return this._matrix[i][j];
    }
    transpose() {
        const result = [];
        for(let i = 0; i < this.columnCount; i++){
            const rowArray = [];
            for(let j = 0; j < this.rowCount; j++)rowArray.push(this._matrix[j][i]);
            result.push(rowArray);
        }
        return new Matrix1(result);
    }
    matrixMultiply(other) {
        const result = [];
        if (this.columnCount !== other.rowCount) throw new Error('Matrix dimensions do not match');
        for(let i = 0; i < this.rowCount; i++){
            const rowArray = [];
            for(let j = 0; j < other.columnCount; j++){
                let sum = _complexNumberDefault.default.ZERO;
                for(let k = 0; k < this.columnCount; k++)sum = sum.add(this._matrix[i][k].multiply(other._matrix[k][j]));
                rowArray.push(sum);
            }
            result.push(rowArray);
        }
        return new Matrix1(result);
    }
    vectorMultiply(vector) {
        if (this.columnCount !== vector.length) throw new Error('Matrix dimensions do not match');
        const result = [];
        for(let i = 0; i < this.rowCount; i++){
            let sum = _complexNumberDefault.default.ZERO;
            for(let j = 0; j < this.columnCount; j++)sum = sum.add(this._matrix[i][j].multiply(vector.get(j)));
            result.push(sum);
        }
        return _vectorDefault.default.fromComplexArray(result);
    }
    kroneckerProduct(other) {
        const result = [];
        for(let i = 0; i < this.rowCount; i++)for(let j = 0; j < this.columnCount; j++){
            // iterate over the other matrix
            for(let k = 0; k < other.rowCount; k++)for(let l = 0; l < other.columnCount; l++){
                if (result[i * other.rowCount + k] === undefined) result[i * other.rowCount + k] = [];
                result[i * other.rowCount + k][j * other.columnCount + l] = this._matrix[i][j].multiply(other._matrix[k][l]);
            }
        }
        return new Matrix1(result);
    }
    toString() {
        let result = '';
        for(let i = 0; i < this.rowCount; i++){
            for(let j = 0; j < this.columnCount; j++)result += this._matrix[i][j].toString() + ' ';
            result += ' \n ';
        }
        return result;
    }
}) || _class;
var _dec1 = _staticImplDefault.default();
let SparseMatrix = _class1 = _dec1(_class1 = class SparseMatrix1 {
    constructor(rowCount, columnCount, value, colIndexList, rowPtrList){
        this._rowCount = rowCount;
        this._columnCount = columnCount;
        this._value = value;
        this._colIndexList = colIndexList;
        this._rowPtrList = rowPtrList;
    }
    static fromNumberArray(array = [
        []
    ]) {
        const value = [];
        const colIndexList = [];
        const rowPtrList = [
            0
        ];
        const rowCount = array.length;
        const columnCount = array[0].length;
        let elementCount = 0;
        for (const row of array){
            for (const [colIndex, val] of row.entries())if (val !== 0) {
                value.push(_complexNumberDefault.default.fromReal(val));
                colIndexList.push(colIndex);
                elementCount++;
            }
            rowPtrList.push(elementCount);
        }
        return new SparseMatrix1(rowCount, columnCount, value, colIndexList, rowPtrList);
    }
    static fromComplexArray(array = [
        []
    ]) {
        const value = [];
        const colIndexList = [];
        const rowPtrList = [
            0
        ];
        const rowCount = array.length;
        const columnCount = array[0].length;
        let elementCount = 0;
        for (const row of array){
            for (const [colIndex, val] of row.entries())if (!val.isZero()) {
                value.push(val);
                colIndexList.push(colIndex);
                elementCount++;
            }
            rowPtrList.push(elementCount);
        }
        return new SparseMatrix1(rowCount, columnCount, value, colIndexList, rowPtrList);
    }
    static fromArray(array = [
        []
    ]) {
        const value = [];
        const colIndexList = [];
        const rowPtrList = [
            0
        ];
        const rowCount = array.length;
        const columnCount = array[0].length;
        let elementCount = 0;
        for (const row of array){
            for (const [colIndex, val] of row.entries()){
                if (typeof val === 'number') {
                    if (val !== 0) {
                        value.push(_complexNumberDefault.default.fromReal(val));
                        colIndexList.push(colIndex);
                        elementCount++;
                    }
                } else if (!val.isZero()) {
                    value.push(val);
                    colIndexList.push(colIndex);
                    elementCount++;
                }
            }
            rowPtrList.push(elementCount);
        }
        return new SparseMatrix1(rowCount, columnCount, value, colIndexList, rowPtrList);
    }
    static fromDenseMatrix(matrix) {
        return SparseMatrix1.fromComplexArray(matrix.rawArray);
    }
    static identity(size) {
        const value = Array(size).fill(_complexNumberDefault.default.ONE);
        const colIndexList = Array(size).fill(0).map((_, i)=>i
        );
        const rowPtrList = Array(size + 1).fill(0).map((_, i)=>i
        );
        return new SparseMatrix1(size, size, value, colIndexList, rowPtrList);
    }
    static zeros(rowCount, columnCount) {
        const value = [];
        const colIndexList = [];
        // no index, so all of them are 0
        const rowPtrList = Array(rowCount + 1).fill(0);
        return new SparseMatrix1(rowCount, columnCount, value, colIndexList, rowPtrList);
    }
    static concat(A, B, C, D) {
        const value = [];
        const colIndexList = [];
        const rowPtrList = [
            0
        ];
        // [A, B]
        // [C, D]
        // check dimensions
        if (A._rowCount !== B._rowCount || C._rowCount !== D._rowCount || A._columnCount !== C._columnCount || B._columnCount !== D._columnCount) throw new Error('Matrices must have matching dimensions');
        let elementCount = 0;
        for(let i = 0; i < A._rowCount; i++){
            // row index is i
            // column index is [this._rowPtrList[i], this._rowPtrList[i + 1]]
            const rowAStart = A._rowPtrList[i];
            const rowAEnd = A._rowPtrList[i + 1];
            const rowBStart = B._rowPtrList[i];
            const rowBEnd = B._rowPtrList[i + 1];
            // iterate over the row of A
            for(let j = rowAStart; j < rowAEnd; j++){
                value.push(A._value[j]);
                colIndexList.push(A._colIndexList[j]);
                elementCount++;
            }
            // iterate over the row of B
            for(let j4 = rowBStart; j4 < rowBEnd; j4++){
                value.push(B._value[j4]);
                // notice the offset is A._columnCount
                colIndexList.push(B._colIndexList[j4] + A._columnCount);
                elementCount++;
            }
            rowPtrList.push(elementCount);
        }
        for(let i2 = 0; i2 < C._rowCount; i2++){
            const rowCStart = C._rowPtrList[i2];
            const rowCEnd = C._rowPtrList[i2 + 1];
            const rowDStart = D._rowPtrList[i2];
            const rowDEnd = D._rowPtrList[i2 + 1];
            // iterate over the row of C
            for(let j = rowCStart; j < rowCEnd; j++){
                value.push(C._value[j]);
                colIndexList.push(C._colIndexList[j]);
                elementCount++;
            }
            // iterate over the row of D
            for(let j5 = rowDStart; j5 < rowDEnd; j5++){
                value.push(D._value[j5]);
                // notice the offset is C._columnCount
                colIndexList.push(D._colIndexList[j5] + C._columnCount);
                elementCount++;
            }
            rowPtrList.push(elementCount);
        }
        return new SparseMatrix1(A._rowCount + C._rowCount, A._columnCount + B._columnCount, value, colIndexList, rowPtrList);
    }
    static interleave(A, B) {
        // example:
        // A = [1, 0]
        //   = [0, 1]
        // B = [a, b]
        //   = [c, d]
        // result = [1, 0, 0, 0]
        //        = [0, a, 0, b]
        //        = [0, 0, 1, 0]
        //        = [0, c, 0, d]
        // A, B are square with same dimensions
        if (A._rowCount !== B._rowCount || A._columnCount !== B._columnCount || A._rowCount !== A._columnCount || B._rowCount !== B._columnCount) throw new Error('Matrices must have matching dimensions');
        const value = [];
        const colIndexList = [];
        const rowPtrList = [
            0
        ];
        let elementCount = 0;
        for(let i = 0; i < A._rowCount; i++){
            const rowAStart = A._rowPtrList[i];
            const rowAEnd = A._rowPtrList[i + 1];
            const rowBStart = B._rowPtrList[i];
            const rowBEnd = B._rowPtrList[i + 1];
            // iterate over the row of A
            for(let j = rowAStart; j < rowAEnd; j++){
                value.push(A._value[j]);
                colIndexList.push(A._colIndexList[j] * 2);
                elementCount++;
            }
            // push the row
            rowPtrList.push(elementCount);
            // iterate over the row of B
            for(let j6 = rowBStart; j6 < rowBEnd; j6++){
                value.push(B._value[j6]);
                colIndexList.push(B._colIndexList[j6] * 2 + 1);
                elementCount++;
            }
            // push the row
            rowPtrList.push(elementCount);
        }
        return new SparseMatrix1(A._rowCount * 2, A._columnCount * 2, value, colIndexList, rowPtrList);
    }
    get rowCount() {
        return this._rowCount;
    }
    get columnCount() {
        return this._columnCount;
    }
    get(i, j) {
        const rowPtr = this._rowPtrList[i];
        const rowEndPtr = this._rowPtrList[i + 1];
        for(let k = rowPtr; k < rowEndPtr; k++){
            if (this._colIndexList[k] === j) return this._value[k];
        }
        return _complexNumberDefault.default.ZERO;
    }
    transpose() {
        // perform row-wise traversal of the matrix
        const newRowCount = this._columnCount;
        const newColumnCount = this._rowCount;
        const newValue = [];
        const newColIndexList = [];
        const newRowPtrList = [
            0
        ];
        for (const columnIndex of this._colIndexList)newRowPtrList[columnIndex] += 1;
        // turn the new rowItemCount into cumulative sum
        for (let index of newRowPtrList.keys())newRowPtrList[index] += newRowPtrList[index - 1];
        // this is used for indexing the new columnIndex
        const copiedNewRowPtrList = newRowPtrList.slice();
        for(let i = 0; i < this._rowCount; i++){
            // row index is i
            // retrieve the column index of [this._rowItemCount[i], this._rowItemCount[i+1])
            const rowItemCountBefore = this._rowPtrList[i];
            const rowItemCountAfter = this._rowPtrList[i + 1];
            for(let j = rowItemCountBefore; j < rowItemCountAfter; j++){
                // column index is this._columnIndex[j]
                // the value is this._value[j]
                // after transpose, the column index is i.
                // put the index for 
                const currentColumnIndex = this._colIndexList[j];
                const currentValue = this._value[j];
                // find the index for the newColumnIndex and newValue
                const newListIndex = copiedNewRowPtrList[currentColumnIndex];
                // put the value into the new value
                newValue[newListIndex] = currentValue;
                // put the index into the new columnIndex
                newColIndexList[newListIndex] = i;
                // update the copiedNewRowItemCount
                copiedNewRowPtrList[currentColumnIndex] += 1;
            }
        }
        return new SparseMatrix1(newRowCount, newColumnCount, newValue, newColIndexList, newRowPtrList);
    }
    matrixMultiply(other) {
        // check if the this._columnCount === other._rowCount
        if (this._columnCount !== other._rowCount) throw new Error('The column count of the first matrix must be equal to the row count of the second matrix');
        // transpose the second matrix
        const otherTranspose = other.transpose();
        const newRowCount = this._rowCount;
        const newColumnCount = otherTranspose._rowCount;
        const newValue = [];
        const newColIndexList = [];
        const newRowPtrList = [
            0
        ];
        let elementCount = 0;
        // perform row-wise traversal of the this matrix
        for(let rowIndex = 0; rowIndex < this._rowCount; rowIndex++){
            // determine this row start and end, [start, end)
            const rowStart = this._rowPtrList[rowIndex];
            const rowEnd = this._rowPtrList[rowIndex + 1];
            let listIndex = rowStart;
            // for each row, also perform row-wise traversal of the otherTranspose matrix
            for(let otherRowIndex = 0; otherRowIndex < otherTranspose._rowCount; otherRowIndex++){
                // const newRowIndex = rowIndex;
                const newColumnIndex = otherRowIndex;
                const otherRowStart = otherTranspose._rowPtrList[otherRowIndex];
                const otherRowEnd = otherTranspose._rowPtrList[otherRowIndex + 1];
                let otherListIndex = otherRowStart;
                // check the head element of both row
                let sum = _complexNumberDefault.default.ZERO;
                while(listIndex < rowEnd && otherListIndex < otherRowEnd){
                    const currentColIndex = this._colIndexList[listIndex];
                    const otherCurrentColIndex = otherTranspose._colIndexList[otherListIndex];
                    if (currentColIndex === otherCurrentColIndex) {
                        // the current element is the same, we need to add the value
                        sum = sum.add(this._value[listIndex].multiply(otherTranspose._value[otherListIndex]));
                        // move to the next element
                        listIndex++;
                        otherListIndex++;
                    } else if (currentColIndex < otherCurrentColIndex) // the current element is smaller, we need to move to the next element
                    listIndex++;
                    else // the other current element is larger, we need to move to the next element
                    otherListIndex++;
                }
                if (!sum.isZero()) {
                    newValue.push(sum);
                    newColIndexList.push(newColumnIndex);
                    elementCount++;
                }
            }
            newRowPtrList.push(elementCount);
        }
        return new SparseMatrix1(newRowCount, newColumnCount, newValue, newColIndexList, newRowPtrList);
    }
    vectorMultiply(vector) {
        if (vector.length !== this._columnCount) throw new Error('The vector length must be equal to the column count of the matrix');
        const value = [];
        for(let rowIndex = 0; rowIndex < this._rowCount; rowIndex++){
            const rowStart = this._rowPtrList[rowIndex];
            const rowEnd = this._rowPtrList[rowIndex + 1];
            let sum = _complexNumberDefault.default.ZERO;
            for(let i = rowStart; i < rowEnd; i++){
                const colIndex = this._colIndexList[i];
                const currentValue = this._value[i];
                sum = sum.add(currentValue.multiply(vector.get(colIndex)));
            }
            value.push(sum);
        }
        return _vectorDefault.default.fromComplexArray(value);
    }
    kroneckerProduct(other) {
        const newRowCount = this._rowCount * other._rowCount;
        const newColumnCount = this._columnCount * other._columnCount;
        const newValue = [];
        const newColIndexList = [];
        const newRowPtrList = [
            0
        ];
        let elementCount = 0;
        for(let rowIndex = 0; rowIndex < this._rowCount; rowIndex++){
            const rowStart = this._rowPtrList[rowIndex];
            const rowEnd = this._rowPtrList[rowIndex + 1];
            for(let otherRowIndex = 0; otherRowIndex < other._rowCount; otherRowIndex++){
                const otherRowStart = other._rowPtrList[otherRowIndex];
                const otherRowEnd = other._rowPtrList[otherRowIndex + 1];
                for(let listIndex = rowStart; listIndex < rowEnd; listIndex++){
                    const colIndex = this._colIndexList[listIndex];
                    const value = this._value[listIndex];
                    for(let otherListIndex = otherRowStart; otherListIndex < otherRowEnd; otherListIndex++){
                        const otherColIndex = other._colIndexList[otherListIndex];
                        const otherValue = other._value[otherListIndex];
                        const newColIndex = colIndex * other._columnCount + otherColIndex;
                        newValue.push(value.multiply(otherValue));
                        newColIndexList.push(newColIndex);
                        elementCount++;
                    }
                }
                newRowPtrList.push(elementCount);
            }
        }
        return new SparseMatrix1(newRowCount, newColumnCount, newValue, newColIndexList, newRowPtrList);
    }
    toDenseMatrix() {
        const value = [];
        for(let rowIndex = 0; rowIndex < this._rowCount; rowIndex++){
            const rowStart = this._rowPtrList[rowIndex];
            const rowEnd = this._rowPtrList[rowIndex + 1];
            const row = Array(this._columnCount).fill(_complexNumberDefault.default.ZERO);
            for(let listIndex = rowStart; listIndex < rowEnd; listIndex++){
                const colIndex = this._colIndexList[listIndex];
                const currentValue = this._value[listIndex];
                row[colIndex] = currentValue;
            }
            value.push(row);
        }
        return Matrix.fromComplexArray(value);
    }
    toString() {
        let result = "";
        for(let rowIndex = 0; rowIndex < this._rowCount; rowIndex++){
            const rowStart = this._rowPtrList[rowIndex];
            const rowEnd = this._rowPtrList[rowIndex + 1];
            const row = Array(this._columnCount).fill(_complexNumberDefault.default.ZERO);
            for(let listIndex = rowStart; listIndex < rowEnd; listIndex++){
                const colIndex = this._colIndexList[listIndex];
                const currentValue = this._value[listIndex];
                row[colIndex] = currentValue;
            }
            result += row.join(', ') + ' \n ';
        }
        return result;
    }
}) || _class1;

},{"./ComplexNumber":"87em4","./StaticImpl":"1rEvx","./Vector":"csYFV","@parcel/transformer-js/src/esmodule-helpers.js":"ap6ht"}],"87em4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>ComplexNumber
);
class ComplexNumber {
    constructor(real, imaginary){
        this.real = real;
        this.imaginary = imaginary;
    }
    // ctor functions
    static fromCartesian(real, imaginary) {
        return new ComplexNumber(real, imaginary);
    }
    static fromReal(real) {
        return new ComplexNumber(real, 0);
    }
    static fromImaginary(imaginary) {
        return new ComplexNumber(0, imaginary);
    }
    static fromPolar(r, theta) {
        return new ComplexNumber(r * Math.cos(theta), r * Math.sin(theta));
    }
    // const value functions
    static get ONE() {
        return new ComplexNumber(1, 0);
    }
    static get ZERO() {
        return new ComplexNumber(0, 0);
    }
    // polar support
    get r() {
        return Math.sqrt(this.real * this.real + this.imaginary * this.imaginary);
    }
    get squaredR() {
        return this.real * this.real + this.imaginary * this.imaginary;
    }
    get theta() {
        return Math.atan2(this.imaginary, this.real);
    }
    set r(r) {
        const ratio = r / this.r;
        this.real *= ratio;
        this.imaginary *= ratio;
    }
    set theta(theta) {
        const r = this.r;
        this.real = r * Math.cos(theta);
        this.imaginary = r * Math.sin(theta);
    }
    // operation boilerplate
    add(other) {
        return new ComplexNumber(this.real + other.real, this.imaginary + other.imaginary);
    }
    addReal(real) {
        return new ComplexNumber(this.real + real, this.imaginary);
    }
    addImaginary(imaginary) {
        return new ComplexNumber(this.real, this.imaginary + imaginary);
    }
    increment(other) {
        this.real += other.real;
        this.imaginary += other.imaginary;
    }
    incrementReal(real) {
        this.real += real;
    }
    incrementImaginary(imaginary) {
        this.imaginary += imaginary;
    }
    subtract(other) {
        return new ComplexNumber(this.real - other.real, this.imaginary - other.imaginary);
    }
    subtractReal(real) {
        return new ComplexNumber(this.real - real, this.imaginary);
    }
    subtractImaginary(imaginary) {
        return new ComplexNumber(this.real, this.imaginary - imaginary);
    }
    decrement(other) {
        this.real -= other.real;
        this.imaginary -= other.imaginary;
    }
    decrementReal(real) {
        this.real -= real;
    }
    decrementImaginary(imaginary) {
        this.imaginary -= imaginary;
    }
    multiply(other) {
        return new ComplexNumber(this.real * other.real - this.imaginary * other.imaginary, this.real * other.imaginary + this.imaginary * other.real);
    }
    multiplyReal(real) {
        return new ComplexNumber(this.real * real, this.imaginary * real);
    }
    multiplyImaginary(imaginary) {
        return new ComplexNumber(-this.imaginary * imaginary, this.real * imaginary);
    }
    scale(other) {
        const this_real = this.real;
        const this_imaginary = this.imaginary;
        this.real = this_real * other.real - this_imaginary * other.imaginary;
        this.imaginary = this_real * other.imaginary + this_imaginary * other.real;
    }
    scaleReal(real) {
        this.real *= real;
        this.imaginary *= real;
    }
    scaleImaginary(imaginary) {
        const this_real = this.real;
        const this_imaginary = this.imaginary;
        this.real = -this_imaginary * imaginary;
        this.imaginary = this_real * imaginary;
    }
    divide(other) {
        return new ComplexNumber((this.real * other.real + this.imaginary * other.imaginary) / (other.real * other.real + other.imaginary * other.imaginary), (this.imaginary * other.real - this.real * other.imaginary) / (other.real * other.real + other.imaginary * other.imaginary));
    }
    divideReal(real) {
        return new ComplexNumber(this.real * real / (real * real), this.imaginary * real / (real * real));
    }
    divideImaginary(imaginary) {
        return new ComplexNumber(this.imaginary * imaginary / (imaginary * imaginary), -this.real * imaginary / (imaginary * imaginary));
    }
    // cloning
    clone() {
        return new ComplexNumber(this.real, this.imaginary);
    }
    // equal test
    equals(other) {
        return Math.abs(this.real - other.real) < ComplexNumber._MINIMAL_ERROR && Math.abs(this.imaginary - other.imaginary) < ComplexNumber._MINIMAL_ERROR;
    }
    equalsReal(real) {
        return Math.abs(this.real - real) < ComplexNumber._MINIMAL_ERROR;
    }
    equalsImaginary(imaginary) {
        return Math.abs(this.imaginary - imaginary) < ComplexNumber._MINIMAL_ERROR;
    }
    isZero() {
        return Math.abs(this.real) < ComplexNumber._MINIMAL_ERROR && Math.abs(this.imaginary) < ComplexNumber._MINIMAL_ERROR;
    }
    isOne() {
        return Math.abs(this.real - 1) < ComplexNumber._MINIMAL_ERROR && Math.abs(this.imaginary) < ComplexNumber._MINIMAL_ERROR;
    }
    // to string
    toString(precision = ComplexNumber._FIX_DIGIT) {
        // check real and imaginary part after rounding
        const isRealZero = Math.abs(this.real) < Math.pow(10, -precision);
        const isImaginaryZero = Math.abs(this.imaginary) < Math.pow(10, -precision);
        if (isRealZero && isImaginaryZero) return '0';
        else if (isRealZero) return `${this.imaginary.toFixed(precision)}i`;
        else if (isImaginaryZero) return this.real.toFixed(precision);
        else return `${this.real.toFixed(precision)}${this.imaginary >= 0 ? ' + ' : ' - '}${Math.abs(this.imaginary).toFixed(precision)}i`;
    }
    toStringIntelligent(precision = ComplexNumber._FIX_DIGIT) {
        const real = Math.round(this.real * Math.pow(10, precision)) / Math.pow(10, precision);
        const imaginary = Math.round(this.imaginary * Math.pow(10, precision)) / Math.pow(10, precision);
        if (real === 0 && imaginary === 0) return '0';
        else if (real === 0) return `${imaginary}i`;
        else if (imaginary === 0) return `${real}`;
        else return `${real}${imaginary >= 0 ? ' + ' : ' - '}${imaginary}i`;
    }
    toStringPolar(precision = ComplexNumber._FIX_DIGIT) {
        // check real and imaginary part after rounding
        const r = this.r;
        const theta = this.theta;
        const isRZero = Math.abs(r) < Math.pow(10, -precision);
        if (isRZero) return '0';
        const isThetaZero = Math.abs(theta) < Math.pow(10, -precision);
        if (isThetaZero) return `${r.toFixed(precision)}`;
        else return `${r.toFixed(precision)}e^i${theta >= 0 ? ' + ' : ' - '}${Math.abs(theta).toFixed(precision)}i`;
    }
    toStringPolarIntelligent(precision = ComplexNumber._FIX_DIGIT) {
        // check real and imaginary part after rounding
        const r = Math.round(this.r * Math.pow(10, precision)) / Math.pow(10, precision);
        const theta = Math.round(this.theta * Math.pow(10, precision)) / Math.pow(10, precision);
        if (r === 0) return '0';
        if (theta === 0) return `${r.toFixed(precision)}`;
        else return `${r.toFixed(precision)}e^i${theta >= 0 ? ' + ' : ' - '}${Math.abs(theta).toFixed(precision)}i`;
    }
}
ComplexNumber._MINIMAL_ERROR = 0.00000000000001;
ComplexNumber._FIX_DIGIT = 4;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ap6ht"}],"csYFV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Vector
);
var _complexNumber = require("./ComplexNumber");
var _complexNumberDefault = parcelHelpers.interopDefault(_complexNumber);
class Vector {
    constructor(array){
        this._array = [];
        this.combine = this.add;
        this._array = array;
    }
    // ctor functions
    static fromNumberArray(array) {
        const result = [];
        for (const element of array)result.push(_complexNumberDefault.default.fromReal(element));
        return new Vector(result);
    }
    static fromComplexArray(array) {
        return new Vector(array);
    }
    static fromArray(array) {
        const result = [];
        for (const element of array)typeof element === 'number' ? result.push(_complexNumberDefault.default.fromReal(element)) : result.push(element);
        return new Vector(result);
    }
    static zeros(length) {
        const result = [];
        for(let i = 0; i < length; i++)result.push(_complexNumberDefault.default.ZERO);
        return new Vector(result);
    }
    static ones(length) {
        const result = [];
        for(let i = 0; i < length; i++)result.push(_complexNumberDefault.default.ONE);
    }
    static basis(length, index) {
        const result = [];
        for(let i = 0; i < length; i++)result.push(i === index ? _complexNumberDefault.default.ONE : _complexNumberDefault.default.ZERO);
        return new Vector(result);
    }
    // property access
    get length() {
        return this._array.length;
    }
    get(index) {
        return this._array[index] ?? _complexNumberDefault.default.ZERO;
    }
    set(index, value) {
        this._array[index] = value;
    }
    increment(index, value) {
        this._array[index] = (this._array[index] ?? _complexNumberDefault.default.ZERO).add(value);
    }
    isFitLength(wireLength) {
        return this._array.length === 1 << wireLength;
    }
    // iterator
    [Symbol.iterator]() {
        return this._array[Symbol.iterator]();
    }
    keys() {
        return this._array.keys();
    }
    entries() {
        return this._array.entries();
    }
    transform(callbackFn, length = this.length) {
        const result = Vector.zeros(length);
        for (const [index, value] of this._array.entries())callbackFn(value, index, this._array, result);
        return result;
    }
    split(predicate) {
        const acceptedState = Vector.zeros(this.length);
        const rejectedState = Vector.zeros(this.length);
        for (const [key, value] of this._array.entries())if (predicate(value, key, this._array)) acceptedState.increment(key, value.clone());
        else rejectedState.increment(key, value.clone());
        return [
            acceptedState,
            rejectedState
        ];
    }
    // operation
    add(other) {
        const result = [];
        for (const [key, value] of this._array.entries())result.push(value.add(other._array[key]));
        return new Vector(result);
    }
    increase(other) {
        for (const [key, value] of this._array.entries())value.add(other._array[key]);
        return this;
    }
    multiplyReal(scalar) {
        const result = [];
        for (const element of this._array)result.push(element.multiplyReal(scalar));
        return new Vector(result);
    }
    multiplyComplex(scalar) {
        const result = [];
        for (const element of this._array)result.push(element.multiply(scalar));
        return new Vector(result);
    }
    scaleReal(scalar) {
        for (const element of this._array)element.scaleReal(scalar);
        return this;
    }
    scalarComplex(scalar) {
        for (const element of this._array)element.scale(scalar);
        return this;
    }
    clone() {
        const result = [];
        for (const element of this._array)result.push(element.clone());
        return new Vector(result);
    }
    // stringify
    toString() {
        return "[ " + this._array.map((field)=>field.toString()
        ).join(", ") + " ]";
    }
}

},{"./ComplexNumber":"87em4","@parcel/transformer-js/src/esmodule-helpers.js":"ap6ht"}],"2GKIR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GeneratorType", ()=>GeneratorType
);
let GeneratorType;
(function(GeneratorType1) {
    GeneratorType1["Matrix"] = "Matrix";
    GeneratorType1["SparseMatrix"] = "SparseMatrix";
    GeneratorType1["StateFunction"] = "StateFunction";
    GeneratorType1["VectorFunction"] = "VectorFunction";
    GeneratorType1["VectorStateFunction"] = "VectorStateFunction";
})(GeneratorType || (GeneratorType = {
}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ap6ht"}],"3YSiI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>PauliX
);
var _staticImpl = require("../../../util/StaticImpl");
var _staticImplDefault = parcelHelpers.interopDefault(_staticImpl);
var _stringHelper = require("../../../util/StringHelper");
var _gateHelper = require("../GateHelper");
var _generatorMatrixMap = require("../GeneratorMatrixMap");
var _class;
var _class1;
var _dec = _staticImplDefault.default();
let PauliX = _class1 = _dec((_class1 = (_class = class PauliX1 {
    constructor({ wireLength , wire  }){
        this.wireLength = wireLength;
        this.wire = wire;
    }
    get wireRange() {
        return [
            this.wire,
            this.wire + 1
        ];
    }
    shift({ shift , wireLength  }) {
        return PauliX1.create({
            wireLength,
            wire: this.wire + shift
        });
    }
    clone() {
        return new PauliX1(this);
    }
    transform(callbackFn) {
        return PauliX1.create(callbackFn(this));
    }
    getBaseMatrix(generatorType) {
        return _generatorMatrixMap.GeneratorMatrixMap[generatorType].fromNumberArray([
            [
                0,
                1
            ],
            [
                1,
                0
            ]
        ]);
    }
    getStringStateFunction() {
        return (quantumState)=>{
            _gateHelper.requireLengthMatched(quantumState, this.wireLength);
            return quantumState.transform((value, key, _, newState)=>{
                newState.increment(_stringHelper.replaceCharAt(key, this.wire, key[this.wire] === '0' ? '1' : '0'), value.clone());
            });
        };
    }
    getNumberStateFunction() {
        return (state)=>{
            _gateHelper.requireLengthMatched(state, this.wireLength);
            return state.transform((value, index, _, newState)=>{
                newState.increment(index ^ 1 << this.wireLength - 1 - this.wire, value.clone());
            });
        };
    }
    isValidControlWire(controlWire) {
        return controlWire !== this.wire;
    }
    isGettable(_) {
        return true;
    }
}, _class.create = ({ wireLength , wire  })=>{
    _gateHelper.requireWireInBound(wireLength, wire);
    return new _class({
        wireLength,
        wire
    });
}, _class)) || _class1) || _class1;

},{"../../../util/StaticImpl":"1rEvx","../../../util/StringHelper":"awpwb","../GateHelper":"2Nadw","../GeneratorMatrixMap":"6Vrjt","@parcel/transformer-js/src/esmodule-helpers.js":"ap6ht"}],"bA8bw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Phase
);
var _staticImpl = require("../../../util/StaticImpl");
var _staticImplDefault = parcelHelpers.interopDefault(_staticImpl);
var _complexNumber = require("../../../util/ComplexNumber");
var _complexNumberDefault = parcelHelpers.interopDefault(_complexNumber);
var _gateHelper = require("../GateHelper");
var _generatorMatrixMap = require("../GeneratorMatrixMap");
var _class;
var _class1;
var _dec = _staticImplDefault.default();
let Phase = _class1 = _dec((_class1 = (_class = class Phase1 {
    constructor({ wireLength , wire , angle  }){
        this.wireLength = wireLength;
        this.wire = wire;
        this.angle = angle;
    }
    get wireRange() {
        return [
            this.wire,
            this.wire + 1
        ];
    }
    shift({ shift , wireLength  }) {
        return Phase1.create({
            wireLength,
            wire: this.wire + shift,
            angle: this.angle
        });
    }
    clone() {
        return new Phase1(this);
    }
    transform(callbackFn) {
        return Phase1.create(callbackFn(this));
    }
    getBaseMatrix(generatorType) {
        return _generatorMatrixMap.GeneratorMatrixMap[generatorType].fromArray([
            [
                1,
                0
            ],
            [
                0,
                _complexNumberDefault.default.fromPolar(1, this.angle)
            ]
        ]);
    }
    getStringStateFunction() {
        return (quantumState)=>{
            _gateHelper.requireLengthMatched(quantumState, this.wireLength);
            return quantumState.transform((value, key, _, newState)=>{
                newState.increment(key, key[this.wire] === "0" ? value.clone() : value.multiply(_complexNumberDefault.default.fromPolar(1, this.angle)));
            });
        };
    }
    getNumberStateFunction() {
        return (state)=>{
            _gateHelper.requireLengthMatched(state, this.wireLength);
            return state.transform((value, index, _, newState)=>{
                newState.increment(index, (index & 1 << this.wireLength - 1 - this.wire) === 0 ? value : value.multiply(_complexNumberDefault.default.fromPolar(1, this.angle)));
            });
        };
    }
    isValidControlWire(controlWire) {
        return controlWire !== this.wire;
    }
    isGettable(_) {
        return true;
    }
}, _class.create = ({ wireLength , wire , angle  })=>{
    _gateHelper.requireWireInBound(wireLength, wire);
    return new _class({
        wireLength,
        wire,
        angle
    });
}, _class)) || _class1) || _class1;

},{"../../../util/StaticImpl":"1rEvx","../../../util/ComplexNumber":"87em4","../GateHelper":"2Nadw","../GeneratorMatrixMap":"6Vrjt","@parcel/transformer-js/src/esmodule-helpers.js":"ap6ht"}],"5n1X6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Rz
);
var _staticImpl = require("../../../util/StaticImpl");
var _staticImplDefault = parcelHelpers.interopDefault(_staticImpl);
var _complexNumber = require("../../../util/ComplexNumber");
var _complexNumberDefault = parcelHelpers.interopDefault(_complexNumber);
var _gateHelper = require("../GateHelper");
var _generatorMatrixMap = require("../GeneratorMatrixMap");
var _class;
var _class1;
var _dec = _staticImplDefault.default();
let Rz = _class1 = _dec((_class1 = (_class = class Rz1 {
    constructor({ wireLength , wire , angle  }){
        this.wireLength = wireLength;
        this.wire = wire;
        this.angle = angle;
    }
    get wireRange() {
        return [
            this.wire,
            this.wire + 1
        ];
    }
    shift({ shift , wireLength  }) {
        return Rz1.create({
            wireLength,
            wire: this.wire + shift,
            angle: this.angle
        });
    }
    clone() {
        return new Rz1(this);
    }
    transform(callbackFn) {
        return Rz1.create(callbackFn(this));
    }
    getBaseMatrix(generatorType) {
        return _generatorMatrixMap.GeneratorMatrixMap[generatorType].fromArray([
            [
                _complexNumberDefault.default.fromPolar(1, -this.angle / 2),
                0
            ],
            [
                0,
                _complexNumberDefault.default.fromPolar(1, this.angle / 2)
            ]
        ]);
    }
    getStringStateFunction() {
        return (quantumState)=>{
            _gateHelper.requireLengthMatched(quantumState, this.wireLength);
            return quantumState.transform((value, key, _, newState)=>{
                newState.increment(key, value.multiply(_complexNumberDefault.default.fromPolar(1, key[this.wire] === "0" ? -this.angle / 2 : this.angle / 2)));
            });
        };
    }
    getNumberStateFunction() {
        return (state)=>{
            _gateHelper.requireLengthMatched(state, this.wireLength);
            return state.transform((value, index, _, newState)=>{
                newState.increment(index, value.multiply(_complexNumberDefault.default.fromPolar(1, index & 1 << this.wireLength - 1 - this.wire ? -this.angle / 2 : this.angle / 2)));
            });
        };
    }
    isValidControlWire(controlWire) {
        return controlWire !== this.wire;
    }
    isGettable(_) {
        return true;
    }
}, _class.create = ({ wireLength , wire , angle  })=>{
    _gateHelper.requireWireInBound(wireLength, wire);
    return new _class({
        wireLength,
        wire,
        angle
    });
}, _class)) || _class1) || _class1;

},{"../../../util/StaticImpl":"1rEvx","../../../util/ComplexNumber":"87em4","../GateHelper":"2Nadw","../GeneratorMatrixMap":"6Vrjt","@parcel/transformer-js/src/esmodule-helpers.js":"ap6ht"}],"90xQE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Flip
);
var _staticImpl = require("../../../util/StaticImpl");
var _staticImplDefault = parcelHelpers.interopDefault(_staticImpl);
var _stringHelper = require("../../../util/StringHelper");
var _generator = require("../Generator");
var _gateHelper = require("../GateHelper");
var _class;
var _class1;
var _dec = _staticImplDefault.default();
let Flip = _class1 = _dec((_class1 = (_class = class Flip1 {
    get wireRange() {
        return [
            this.startWire,
            this.endWire
        ];
    }
    constructor({ wireLength , startWire , endWire  }){
        this.wireLength = wireLength;
        this.startWire = startWire;
        this.endWire = endWire;
    }
    shift({ shift , wireLength  }) {
        return Flip1.create({
            wireLength,
            startWire: this.startWire + shift,
            endWire: this.endWire + shift
        });
    }
    clone() {
        return new Flip1(this);
    }
    transform(callbackFn) {
        return Flip1.create(callbackFn(this));
    }
    getBaseMatrix() {
        return null;
    }
    getStringStateFunction() {
        return (quantumState)=>{
            _gateHelper.requireLengthMatched(quantumState, this.wireLength);
            return quantumState.transform((value, key, _, newState)=>{
                newState.increment(_stringHelper.reverseString(key), value.clone());
            });
        };
    }
    getNumberStateFunction() {
        return null;
    }
    isValidControlWire(controlWire) {
        return controlWire < this.startWire || controlWire >= this.endWire;
    }
    isGettable(generatorType) {
        return generatorType === _generator.GeneratorType.StateFunction;
    }
}, _class.create = ({ wireLength , startWire , endWire  })=>{
    _gateHelper.requireWireInBound(wireLength, startWire);
    _gateHelper.requireWireInBound(wireLength, endWire - 1);
    _gateHelper.requireWireIsSmallerThan(startWire, endWire);
    return new _class({
        wireLength,
        startWire,
        endWire
    });
}, _class)) || _class1) || _class1;

},{"../../../util/StaticImpl":"1rEvx","../../../util/StringHelper":"awpwb","../Generator":"2GKIR","../GateHelper":"2Nadw","@parcel/transformer-js/src/esmodule-helpers.js":"ap6ht"}],"9vgOs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Fourier
);
var _staticImpl = require("../../../util/StaticImpl");
var _staticImplDefault = parcelHelpers.interopDefault(_staticImpl);
var _gateHelper = require("../GateHelper");
var _class;
var _class1;
var _dec = _staticImplDefault.default();
let Fourier = _class1 = _dec((_class1 = (_class = class Fourier1 {
    get wireRange() {
        return undefined;
    }
    constructor({ wireLength , startWire , endWire  }){
        this.wireLength = wireLength;
        this.startWire = startWire;
        this.endWire = endWire;
    }
    shift({ shift , wireLength  }) {
        return Fourier1.create({
            wireLength,
            startWire: this.startWire + shift,
            endWire: this.endWire + shift
        });
    }
    clone() {
        return new Fourier1(this);
    }
    transform(callbackFn) {
        return Fourier1.create(callbackFn(this));
    }
    getBaseMatrix() {
        return null;
    }
    getStringStateFunction() {
        return null;
    }
    getNumberStateFunction() {
        return null;
    }
    isGettable(_) {
        return false;
    }
    isValidControlWire(controlWire) {
        return controlWire < this.startWire || controlWire >= this.endWire;
    }
}, _class.create = ({ wireLength , startWire , endWire  })=>{
    _gateHelper.requireWireInBound(wireLength, startWire);
    _gateHelper.requireWireInBound(wireLength, endWire - 1);
    _gateHelper.requireWireIsSmallerThan(startWire, endWire);
    return new _class({
        wireLength,
        startWire,
        endWire
    });
}, _class)) || _class1) || _class1;

},{"../../../util/StaticImpl":"1rEvx","../GateHelper":"2Nadw","@parcel/transformer-js/src/esmodule-helpers.js":"ap6ht"}],"hzdFh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Swap
);
var _staticImpl = require("../../../util/StaticImpl");
var _staticImplDefault = parcelHelpers.interopDefault(_staticImpl);
var _gateHelper = require("../GateHelper");
var _class;
var _class1;
var _dec = _staticImplDefault.default();
let Swap = _class1 = _dec((_class1 = (_class = class Swap1 {
    get wireRange() {
        return undefined;
    }
    constructor({ wireLength , wireOne , wireTwo  }){
        this.wireLength = wireLength;
        this.wireOne = wireOne;
        this.wireTwo = wireTwo;
    }
    shift({ shift , wireLength  }) {
        return Swap1.create({
            wireLength,
            wireOne: this.wireOne + shift,
            wireTwo: this.wireTwo + shift
        });
    }
    clone() {
        return new Swap1(this);
    }
    transform(callbackFn) {
        return Swap1.create(callbackFn(this));
    }
    getBaseMatrix() {
        return null;
    // const countBetween = Math.abs(this.wireTwo - this.wireOne) - 2;
    // const identity = MatrixCtor.identity(2 ** countBetween);
    // const matrixLeftUp = identity.kroneckerProduct(
    //     MatrixCtor.fromNumberArray([
    //         [1, 0],
    //         [0, 0]
    //     ])
    // )
    // const matrixRightUp = identity.kroneckerProduct(
    //     MatrixCtor.fromNumberArray([
    //         [0, 1],
    //         [0, 0]
    //     ])
    // )
    // const matrixLeftDown = identity.kroneckerProduct(
    //     MatrixCtor.fromNumberArray([
    //         [0, 0],
    //         [1, 0]
    //     ])
    // )
    // const matrixRightDown = identity.kroneckerProduct(
    //     MatrixCtor.fromNumberArray([
    //         [0, 0],
    //         [0, 1]
    //     ])
    // )
    // return MatrixCtor.concat(matrixLeftUp, matrixLeftDown, matrixRightUp, matrixRightDown);
    }
    getStringStateFunction() {
        // return (quantumState : QuantumState) => {
        //     requireLengthMatched(quantumState, this.wireLength);
        //     return quantumState.transform((value, key, _, newState) => {
        //         newState.increment(
        //             swapCharAt(key, this.wireOne, this.wireTwo),
        //             value.clone()
        //         );
        //     });
        // }
        return null;
    }
    getNumberStateFunction() {
        // return <T extends Vector | QuantumVectorState>(state : T) => {
        //     requireLengthMatched(state, this.wireLength);
        //     return state.transform((value, key, _, newState) => {
        //         const bitOne = (key >> this.wireOne) & 1;
        //         const bitTwo = (key >> this.wireTwo) & 1;
        //         let x = bitOne ^ bitTwo;
        //         x = (x << this.wireOne) | (x << this.wireTwo);
        //         newState.increment(
        //             x ^ key,
        //             value.clone()
        //         )
        //     }) as T;
        // }
        return null;
    }
    isValidControlWire(controlWire) {
        return controlWire !== this.wireOne && controlWire !== this.wireTwo;
    }
    isGettable(_) {
        return false;
    }
}, _class.create = ({ wireLength , wireOne , wireTwo  })=>{
    _gateHelper.requireWireInBound(wireLength, wireOne);
    _gateHelper.requireWireInBound(wireLength, wireTwo);
    _gateHelper.requireWireIsNotEqual(wireOne, wireTwo);
    return new _class({
        wireLength,
        wireOne,
        wireTwo
    });
}, _class)) || _class1) || _class1;

},{"../../../util/StaticImpl":"1rEvx","../GateHelper":"2Nadw","@parcel/transformer-js/src/esmodule-helpers.js":"ap6ht"}],"l5zy9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ElementaryGateSymbol", ()=>ElementaryGateSymbol
);
parcelHelpers.export(exports, "ExtendedGateSymbol", ()=>ExtendedGateSymbol
);
parcelHelpers.export(exports, "GateSymbol", ()=>GateSymbol
);
const Hadamard = Symbol.for('Hadamard');
const PauliX = Symbol.for('PauliX');
const Phase = Symbol.for('Phase');
const Rz = Symbol.for('Rz');
const Swap = Symbol.for('Swap');
const Flip = Symbol.for('Flip');
const Fourier = Symbol.for('Fourier');
const Shor = Symbol.for('Shor');
const ElementaryGateSymbol = {
    Hadamard,
    PauliX,
    Phase,
    Rz
};
const ExtendedGateSymbol = {
    Swap,
    Flip,
    Fourier,
    Shor
};
const GateSymbol = {
    ...ElementaryGateSymbol,
    ...ExtendedGateSymbol
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ap6ht"}],"9LUez":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "QuantumGate", ()=>QuantumGate
);
var _gateConstructorMap = require("./GateConstructorMap");
var _generator = require("./Generator");
var _hadamard = require("./ElementaryGate/Hadamard");
var _hadamardDefault = parcelHelpers.interopDefault(_hadamard);
var _pauliX = require("./ElementaryGate/PauliX");
var _pauliXDefault = parcelHelpers.interopDefault(_pauliX);
var _phase = require("./ElementaryGate/Phase");
var _phaseDefault = parcelHelpers.interopDefault(_phase);
var _stringHelper = require("../../util/StringHelper");
var _generatorMatrixMap = require("./GeneratorMatrixMap");
var _gateHelper = require("./GateHelper");
class QuantumGate {
    constructor(gate, controlWire, isInverse){
        this.basis = gate;
        this.wireLength = gate.wireLength;
        this.controlWire = controlWire;
        this.isInverse = isInverse;
    }
    static create(gate, controlWire = new Set(), isInverse = false) {
        controlWire.forEach((wire)=>{
            if (!gate.isValidControlWire(wire)) throw new Error(`Control wire [${wire}] is invalid.`);
        });
        return new QuantumGate(gate, new Set(controlWire), isInverse);
    }
    static getBasisGate(gateType, parameter) {
        return _gateConstructorMap.GateConstructorMap[gateType].create(parameter);
    }
    static fromBasis({ type , ...parameter }) {
        return QuantumGate.create(QuantumGate.getBasisGate(type, parameter));
    }
    static fromSingleControlled({ type , controlWire , ...parameter }) {
        return QuantumGate.create(QuantumGate.getBasisGate(type, parameter), new Set().add(controlWire));
    }
    static toUncontrolled(gate) {
        return QuantumGate.create(gate.basis.clone(), new Set(), gate.isInverse);
    }
    static toControlled(gate, controlWire) {
        const newSet = new Set(controlWire);
        // add controlWire to the original set
        controlWire.forEach(newSet.add, newSet);
        return QuantumGate.create(gate.basis.clone(), newSet, gate.isInverse);
    }
    static toSinglyControlled(gate, controlWire) {
        return QuantumGate.create(gate.basis.clone(), new Set(gate.controlWire).add(controlWire), gate.isInverse);
    }
    transformBasis(callbackFn) {
        return QuantumGate.create(this.basis.transform(callbackFn), this.controlWire, this.isInverse);
    }
    shiftBasis(parameter) {
        return QuantumGate.create(this.basis.shift(parameter), this.controlWire, this.isInverse);
    }
    clone() {
        return new QuantumGate(this.basis.clone(), new Set(this.controlWire), this.isInverse);
    }
    toInverted() {
        return new QuantumGate(this.basis.clone(), new Set(this.controlWire), !this.isInverse);
    }
    // getters
    isGettable(generatorType) {
        return this.isNotInverted() && this.isBasisGettable(generatorType);
    }
    isBasisGettable(generatorType) {
        return this.basis.isGettable(generatorType);
    }
    get(generatorType) {
        if (!this.isGettable(generatorType)) return null;
        switch(generatorType){
            case _generator.GeneratorType.Matrix:
            case _generator.GeneratorType.SparseMatrix:
                return this.getMatrixFunction(generatorType);
            case _generator.GeneratorType.StateFunction:
                return this.getStringStateFunction();
            case _generator.GeneratorType.VectorStateFunction:
            case _generator.GeneratorType.VectorFunction:
                return this.getVectorStateFunction();
            default:
                return null;
        }
    }
    getMatrix(generatorType) {
        if (!this.isGettable(generatorType)) return null;
        const basis = this.basis;
        const wireLength = basis.wireLength;
        const [startGateWire, endGateWire] = basis.wireRange;
        const MatrixCtor = _generatorMatrixMap.GeneratorMatrixCtor(generatorType);
        let matrix = basis.getBaseMatrix(generatorType);
        let emptyWireCount = 0;
        for(let wire = startGateWire - 1; wire >= 0; wire--)// check if the gate controls the control wire that is equal to the current wire
        if (!this.controlWire.has(wire)) emptyWireCount++;
        else {
            if (emptyWireCount !== 0) {
                // apply the tensor product I^(emptyWireCount) kron matrix
                matrix = MatrixCtor.identity(2 ** emptyWireCount).kroneckerProduct(matrix);
                emptyWireCount = 0;
            }
            // the top control wire matrix look like
            // [I, 0]
            // [0, matrix]
            matrix = MatrixCtor.concat(MatrixCtor.identity(matrix.rowCount), MatrixCtor.zeros(matrix.rowCount, matrix.rowCount), MatrixCtor.zeros(matrix.rowCount, matrix.rowCount), matrix);
        }
        if (emptyWireCount !== 0) {
            // apply the tensor product I^(emptyWireCount) kron matrix
            matrix = MatrixCtor.identity(2 ** emptyWireCount).kroneckerProduct(matrix);
            emptyWireCount = 0;
        }
        for(let wire1 = endGateWire; wire1 < wireLength; wire1++)// check if the gate controls the control wire that is equal to the current wire
        if (!this.controlWire.has(wire1)) emptyWireCount++;
        else {
            if (emptyWireCount !== 0) {
                // apply the tensor product I^(emptyWireCount) kron matrix
                matrix = matrix.kroneckerProduct(MatrixCtor.identity(2 ** emptyWireCount));
                emptyWireCount = 0;
            }
            // do an interleave
            matrix = MatrixCtor.interleave(MatrixCtor.identity(matrix.rowCount), matrix);
        }
        if (emptyWireCount !== 0) {
            // apply the tensor product I^(emptyWireCount) kron matrix
            matrix = matrix.kroneckerProduct(MatrixCtor.identity(2 ** emptyWireCount));
            emptyWireCount = 0;
        }
        return matrix;
    }
    getMatrixFunction(generatorType) {
        if (!this.isGettable(generatorType)) return null;
        // always work, since possible case to return null is already returned
        const matrix = this.getMatrix(generatorType);
        return (vector)=>{
            _gateHelper.requireLengthMatched(vector, this.wireLength);
            return matrix.vectorMultiply(vector);
        };
    }
    getStringStateFunction() {
        if (!this.isGettable(_generator.GeneratorType.StateFunction)) return null;
        const basis = this.basis;
        return (state)=>{
            _gateHelper.requireLengthMatched(state, this.wireLength);
            if (this.isUncontrolled()) return basis.getStringStateFunction()(state);
            const [acceptedState, rejectedState] = state.split((_, key)=>_stringHelper.everyChar(key, (char, index)=>!this.controlWire.has(index) || char === "1"
                )
            );
            return basis.getStringStateFunction()(acceptedState).combine(rejectedState);
        };
    }
    getVectorStateFunction() {
        if (!this.isGettable(_generator.GeneratorType.StateFunction)) return null;
        const basis = this.basis;
        const checkerNumber = [
            ...this.controlWire
        ].reduce((acc, wire)=>acc + 2 ** (this.wireLength - wire - 1)
        , 0);
        return (state)=>{
            _gateHelper.requireLengthMatched(state, this.wireLength);
            const [acceptedState, rejectedState] = state.split((_, key)=>(key & checkerNumber) === checkerNumber
            );
            return basis.getNumberStateFunction()(acceptedState).combine(rejectedState);
        };
    }
    // Discriminator
    isElementaryGate() {
        return this.isNotInvertedUncontrolledBasedOn(_hadamardDefault.default) || this.isNotInvertedUncontrolledBasedOn(_phaseDefault.default) || this.isNotInvertedSinglyControlledBasedOn(_pauliXDefault.default);
    }
    isInverted() {
        return this.isInverse;
    }
    isNotInverted() {
        return !this.isInverse;
    }
    isControlled() {
        return this.controlWire.size > 0;
    }
    isUncontrolled() {
        return this.controlWire.size === 0;
    }
    isSinglyControlled() {
        return this.controlWire.size === 1;
    }
    isBasedOn(basisCtor) {
        return this.basis instanceof basisCtor;
    }
    isNotInvertedUncontrolledBasedOn(basisCtor) {
        return this.isNotInverted() && this.isUncontrolled() && this.isBasedOn(basisCtor);
    }
    isNotInvertedSinglyControlledBasedOn(basisCtor) {
        return this.isNotInverted() && this.isSinglyControlled() && this.isBasedOn(basisCtor);
    }
}

},{"./GateConstructorMap":"g4o6V","./Generator":"2GKIR","./ElementaryGate/Hadamard":"jsOsm","./ElementaryGate/PauliX":"3YSiI","./ElementaryGate/Phase":"bA8bw","../../util/StringHelper":"awpwb","./GeneratorMatrixMap":"6Vrjt","./GateHelper":"2Nadw","@parcel/transformer-js/src/esmodule-helpers.js":"ap6ht"}],"g4o6V":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GateConstructorMap", ()=>GateConstructorMap
);
var _gateSymbol = require("./GateSymbol");
var _hadamard = require("./ElementaryGate/Hadamard");
var _hadamardDefault = parcelHelpers.interopDefault(_hadamard);
var _pauliX = require("./ElementaryGate/PauliX");
var _pauliXDefault = parcelHelpers.interopDefault(_pauliX);
var _phase = require("./ElementaryGate/Phase");
var _phaseDefault = parcelHelpers.interopDefault(_phase);
var _rz = require("./ElementaryGate/Rz");
var _rzDefault = parcelHelpers.interopDefault(_rz);
var _swap = require("./ExtendedGate/Swap");
var _swapDefault = parcelHelpers.interopDefault(_swap);
var _flip = require("./ExtendedGate/Flip");
var _flipDefault = parcelHelpers.interopDefault(_flip);
var _fourier = require("./ExtendedGate/Fourier");
var _fourierDefault = parcelHelpers.interopDefault(_fourier);
var _shor = require("./ExtendedGate/Shor");
var _shorDefault = parcelHelpers.interopDefault(_shor);
const ElementaryGateConstructorMap = {
    [_gateSymbol.GateSymbol.Hadamard]: _hadamardDefault.default,
    [_gateSymbol.GateSymbol.PauliX]: _pauliXDefault.default,
    [_gateSymbol.GateSymbol.Phase]: _phaseDefault.default,
    [_gateSymbol.GateSymbol.Rz]: _rzDefault.default,
    [_gateSymbol.GateSymbol.Swap]: _swapDefault.default
};
const ExtendedGateConstructorMap = {
    [_gateSymbol.GateSymbol.Flip]: _flipDefault.default,
    [_gateSymbol.GateSymbol.Fourier]: _fourierDefault.default,
    [_gateSymbol.GateSymbol.Shor]: _shorDefault.default
};
const GateConstructorMap = {
    ...ElementaryGateConstructorMap,
    ...ExtendedGateConstructorMap
};

},{"./GateSymbol":"l5zy9","./ElementaryGate/Hadamard":"jsOsm","./ElementaryGate/PauliX":"3YSiI","./ElementaryGate/Phase":"bA8bw","./ElementaryGate/Rz":"5n1X6","./ExtendedGate/Swap":"hzdFh","./ExtendedGate/Flip":"90xQE","./ExtendedGate/Fourier":"9vgOs","./ExtendedGate/Shor":"gTEzY","@parcel/transformer-js/src/esmodule-helpers.js":"ap6ht"}],"gTEzY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Shor
);
var _staticImpl = require("../../../util/StaticImpl");
var _staticImplDefault = parcelHelpers.interopDefault(_staticImpl);
var _generator = require("../Generator");
var _stringHelper = require("../../../util/StringHelper");
var _gateHelper = require("../GateHelper");
var _class;
var _class1;
var _dec = _staticImplDefault.default();
let Shor = _class1 = _dec((_class1 = (_class = class Shor1 {
    get wireRange() {
        return [
            this.startWire,
            this.endWire
        ];
    }
    constructor({ wireLength , startWire , endWire , x , N  }){
        this.wireLength = wireLength;
        this.startWire = startWire;
        this.endWire = endWire;
        this.x = x;
        this.N = N;
    }
    shift({ shift , wireLength  }) {
        return Shor1.create({
            wireLength,
            startWire: this.startWire + shift,
            endWire: this.endWire + shift,
            x: this.x,
            N: this.N
        });
    }
    clone() {
        return new Shor1(this);
    }
    transform(callbackFn) {
        return Shor1.create(callbackFn(this));
    }
    getBaseMatrix() {
        return null;
    }
    getStringStateFunction() {
        return (quantumState)=>{
            _gateHelper.requireLengthMatched(quantumState, this.wireLength);
            return quantumState.transform((value, key, _, newState)=>{
                const y = _stringHelper.toDecimal(key.slice(this.startWire, this.endWire));
                const newY = y >= this.N ? y : y * this.x % this.N;
                newState.increment(_stringHelper.replaceCharBetween(key, this.startWire, this.endWire, _stringHelper.toBinaryString(newY, this.endWire - this.startWire)), value.clone());
            });
        };
    }
    getNumberStateFunction() {
        return (state)=>{
            _gateHelper.requireLengthMatched(state, this.wireLength);
            return state.transform((value, key, _, newState)=>{
                // slice the bits from startWire to endWire
                const y = key >> this.wireLength - this.endWire & (1 << this.endWire - this.startWire) - 1;
                const newY = y >= this.N ? y : y * this.x % this.N;
                newState.increment(// ((150 >> (8 - 3) << (6 - 3) | 7) << (8 - 6)) | (150 & (1 << (8 - 6) - 1)),
                (key >> this.wireLength - this.startWire << this.endWire - this.startWire | newY) << this.wireLength - this.endWire | key & (1 << this.wireLength - this.endWire) - 1, value.clone());
            });
        };
    }
    isValidControlWire(controlWire) {
        return controlWire < this.startWire || controlWire >= this.endWire;
    }
    // atomize(type: AtomizeType): QuantumGate[] {
    //     if (type === AtomizeType.All) {
    //         throw new Error("Shor gate atomize is not supported.");
    //     }
    //     return [QuantumGate.wrap(this)];
    // }
    isGettable(generatorType) {
        switch(generatorType){
            case _generator.GeneratorType.StateFunction:
                return true;
            default:
                return false;
        }
    }
}, _class.create = ({ wireLength , startWire , endWire , x , N  })=>{
    _gateHelper.requireWireInBound(wireLength, startWire);
    _gateHelper.requireWireInBound(wireLength, endWire - 1);
    _gateHelper.requireWireIsSmallerThan(startWire, endWire);
    if (x < 0 || x >= N) throw new Error(`x must be in range [0, ${N}).`);
    if (Math.ceil(Math.log2(N)) != endWire - startWire) throw new Error(`The number of wires must be equal to the number of bits in N.`);
    return new _class({
        wireLength,
        startWire,
        endWire,
        x,
        N
    });
}, _class)) || _class1) || _class1;

},{"../../../util/StaticImpl":"1rEvx","../Generator":"2GKIR","../../../util/StringHelper":"awpwb","../GateHelper":"2Nadw","@parcel/transformer-js/src/esmodule-helpers.js":"ap6ht"}],"5ZrtS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PrintType", ()=>PrintType
);
parcelHelpers.export(exports, "default", ()=>QuantumState
);
var _vector = require("../util/Vector");
var _vectorDefault = parcelHelpers.interopDefault(_vector);
var _complexNumber = require("../util/ComplexNumber");
var _complexNumberDefault = parcelHelpers.interopDefault(_complexNumber);
var _stringHelper = require("../util/StringHelper");
let PrintType;
(function(PrintType1) {
    PrintType1[PrintType1["Integer"] = 0] = "Integer";
    PrintType1[PrintType1["Binary"] = 1] = "Binary";
})(PrintType || (PrintType = {
}));
class QuantumState {
    constructor(map, bitLength){
        this._map = map;
        this.bitLength = bitLength;
    }
    // ctor functions
    static fromVector(vector, bitLength) {
        const map = new Map();
        for (const [index, value] of vector.entries())if (!value.isZero()) // express index into binary form, put that into an array
        map.set(_stringHelper.toBinaryString(index, bitLength), value);
        return new QuantumState(map, bitLength);
    }
    // static fromMap(map : Map<string, ComplexNumber>, bitLength : number) : QuantumState {
    //     return new QuantumState(map, bitLength);
    // }
    static create(bitLength) {
        return new QuantumState(new Map(), bitLength);
    }
    static zero(bitLength) {
        const newState = QuantumState.create(bitLength);
        newState.increment(_stringHelper.toBinaryString(0, bitLength), _complexNumberDefault.default.ONE);
        return newState;
    }
    static unique(bitLength, string) {
        const newState = QuantumState.create(bitLength);
        newState.increment(string, _complexNumberDefault.default.ONE);
        return newState;
    }
    toVector() {
        const result = Array(2 ** this.bitLength).fill(_complexNumberDefault.default.ZERO);
        for (const [index, value] of this._map.entries())result[_stringHelper.toDecimal(index)] = value;
        return _vectorDefault.default.fromComplexArray(result);
    }
    // iterator
    entries() {
        return this._map.entries();
    }
    keys() {
        return this._map.keys();
    }
    values() {
        return this._map.values();
    }
    transform(callbackFn, bitLength = this.bitLength) {
        const newState = QuantumState.create(bitLength);
        for (const [key, value] of this._map)callbackFn(value, key, this._map, newState);
        return newState;
    }
    split(predicate) {
        const acceptedState = QuantumState.create(this.bitLength);
        const rejectedState = QuantumState.create(this.bitLength);
        for (const [key, value] of this._map)if (predicate(value, key, this._map)) acceptedState.increment(key, value.clone());
        else rejectedState.increment(key, value.clone());
        return [
            acceptedState,
            rejectedState
        ];
    }
    combine(other) {
        const newState = QuantumState.create(this.bitLength);
        for (const [key, value] of this._map)newState.increment(key, value.clone());
        for (const [key1, value1] of other._map)newState.increment(key1, value1.clone());
        return newState;
    }
    isFitLength(wireLength) {
        return this.bitLength === wireLength;
    }
    // state manipulation
    /**
     * 
     * @param index, index.length = bitLength, must be a binary string
     * @returns Complex Number
     */ get(index) {
        return this._map.get(index) ?? _complexNumberDefault.default.ZERO;
    }
    /**
     * 
     * @param index, index.length = bitLength, must be a binary string
     * @returns Complex Number
     */ set(index, value) {
        if (value.isZero()) this._map.delete(index);
        else this._map.set(index, value);
    }
    /**
     * 
     * @param index, index.length = bitLength, must be a binary string
     * @returns Complex Number
     */ increment(index, value) {
        this.set(index, this.get(index).add(value));
    }
    // measure
    measure() {
        let probabilityList = [];
        for (const [key, value3] of this._map)probabilityList.push([
            key,
            value3.squaredR
        ]);
        // check if it's normalized
        let sum = probabilityList.reduce((acc, [_, value])=>acc + value
        , 0);
        if (Math.abs(sum - 1) > 0.00001) throw new Error('Probability list is not normalized');
        // pick a random number
        const randomNumber = Math.random();
        let currentValue = 0;
        for (const [key2, value2] of probabilityList){
            currentValue += value2;
            if (randomNumber < currentValue) return key2;
        }
        throw new Error("IMPOSSIBLE TO REACH HERE");
    }
    // string functions
    toString(type = PrintType.Integer) {
        let logString = "";
        for (const [key, value] of this._map)logString += type === PrintType.Binary ? ` ${value.toString()} |${key}>` : ` ${value.toString()} |${_stringHelper.toDecimal(key)}>`;
        return logString;
    }
    toStringSorted(type = PrintType.Integer) {
        let logString = "";
        if (type === PrintType.Binary) {
            const data = [
                ...this._map.entries()
            ].map(([key, value])=>[
                    key,
                    value
                ]
            );
            data.sort();
            for (const [key3, value4] of data)logString += ` ${value4.toString()} |${key3}>`;
        } else {
            const data = [
                ...this._map.entries()
            ].map(([key, value])=>[
                    _stringHelper.toDecimal(key),
                    value
                ]
            );
            data.sort((a, b)=>a[0] - b[0]
            );
            for (const [key5, value6] of data)logString += ` ${value6.toString()} |${key5}>`;
        }
        return logString;
    }
    toStringColorful(type = PrintType.Integer) {
        const colorCSSList = Array(this._map.size * 2).fill(0).map((_, i)=>i % 2 === 0 ? "color : green" : "font-weight : bold; color : red"
        );
        let logString = "";
        for (const [key, value] of this._map)logString += type === PrintType.Binary ? `%c ${value.toString()} %c|${key}>` : `%c ${value.toString()} %c|${_stringHelper.toDecimal(key)}>`;
        return [
            logString,
            colorCSSList
        ];
    }
    toStringColorfulSorted(type = PrintType.Integer) {
        const colorCSSList = Array(this._map.size * 2).fill(0).map((_, i)=>i % 2 === 0 ? "color : green" : "font-weight : bold; color : red"
        );
        let logString = "";
        if (type === PrintType.Binary) {
            const data = [
                ...this._map.entries()
            ].map(([key, value])=>[
                    key,
                    value
                ]
            );
            data.sort();
            for (const [key7, value8] of data)logString += `%c ${value8.toString()} %c|${key7}>`;
        } else {
            const data = [
                ...this._map.entries()
            ].map(([key, value])=>[
                    _stringHelper.toDecimal(key),
                    value
                ]
            );
            data.sort((a, b)=>a[0] - b[0]
            );
            for (const [key9, value10] of data)logString += `%c ${value10.toString()} %c|${key9}>`;
        }
        return [
            logString,
            colorCSSList
        ];
    }
    printStringColorful(type = PrintType.Integer) {
        const [logString, colorCSSList] = this.toStringColorful(type);
        console.log(logString, ...colorCSSList);
    }
    printStringColorfulSorted(type = PrintType.Integer) {
        const [logString, colorCSSList] = this.toStringColorfulSorted(type);
        console.log(logString, ...colorCSSList);
    }
}

},{"../util/Vector":"csYFV","../util/ComplexNumber":"87em4","../util/StringHelper":"awpwb","@parcel/transformer-js/src/esmodule-helpers.js":"ap6ht"}],"iSZSH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>QuantumVectorState
);
var _complexNumber = require("../util/ComplexNumber");
var _complexNumberDefault = parcelHelpers.interopDefault(_complexNumber);
var _quantumState = require("./QuantumState");
var _stringHelper = require("../util/StringHelper");
class QuantumVectorState {
    constructor(map, bitLength){
        this._map = map;
        this.bitLength = bitLength;
    }
    static create(bitLength) {
        return new QuantumVectorState(new Map(), bitLength);
    }
    static zero(bitLength) {
        const newState = QuantumVectorState.create(bitLength);
        newState.increment(0, _complexNumberDefault.default.ONE);
        return newState;
    }
    static unique(bitLength, index) {
        const newState = QuantumVectorState.create(bitLength);
        newState.increment(index, _complexNumberDefault.default.ONE);
        return newState;
    }
    isFitLength(length) {
        return this.bitLength === length;
    }
    get(index) {
        return this._map.get(index) ?? _complexNumberDefault.default.ZERO;
    }
    set(index, value) {
        // console.log("called")
        if (value.isZero()) this._map.delete(index);
        else this._map.set(index, value);
    }
    increment(index, value) {
        this.set(index, this.get(index).add(value));
    }
    entries() {
        return this._map.entries();
    }
    transform(callbackFn) {
        const newState = QuantumVectorState.create(this.bitLength);
        for (const [index, value] of this._map)callbackFn(value, index, this._map, newState);
        return newState;
    }
    split(predicate) {
        const acceptedState = QuantumVectorState.create(this.bitLength);
        const rejectedState = QuantumVectorState.create(this.bitLength);
        for (const [key, value] of this._map)if (predicate(value, key, this._map)) acceptedState.increment(key, value.clone());
        else rejectedState.increment(key, value.clone());
        return [
            acceptedState,
            rejectedState
        ];
    }
    combine(other) {
        const newState = QuantumVectorState.create(this.bitLength);
        for (const [key, value] of this._map)newState.increment(key, value.clone());
        for (const [key1, value1] of other._map)newState.increment(key1, value1.clone());
        return newState;
    }
    // measure
    measure() {
        let probabilityList = [];
        for (const [index, value3] of this._map)probabilityList.push([
            index,
            value3.squaredR
        ]);
        // check if it's normalized
        let sum = probabilityList.reduce((acc, [_, value])=>acc + value
        , 0);
        if (Math.abs(sum - 1) > 0.00001) throw new Error('Probability list is not normalized');
        // pick a random number
        const randomNumber = Math.random();
        let currentValue = 0;
        for (const [index1, value2] of probabilityList){
            currentValue += value2;
            if (randomNumber < currentValue) return index1;
        }
        throw new Error('SHOULD NEVER HAPPEN');
    }
    // string functions
    toString(type = _quantumState.PrintType.Integer) {
        let logString = "";
        for (const [key, value] of this._map)logString += type === _quantumState.PrintType.Binary ? `${value.toString()} |${_stringHelper.toBinaryString(key, this.bitLength)}> \n` : `${value.toString()} |${key}> \n`;
        return logString;
    }
    toDataSorted(type = _quantumState.PrintType.Integer) {
        const data = [
            ...this._map.entries()
        ].map(([index, value])=>[
                type === _quantumState.PrintType.Binary ? _stringHelper.toBinaryString(index, this.bitLength) : index,
                value
            ]
        );
        data.sort((a, b)=>{
            return a[0] < b[0] ? -1 : 1;
        });
        return data;
    }
    toStringSorted(type = _quantumState.PrintType.Integer) {
        let logString = "";
        const data = [
            ...this._map.entries()
        ].map(([index, value])=>[
                type === _quantumState.PrintType.Binary ? _stringHelper.toBinaryString(index, this.bitLength) : index,
                value
            ]
        );
        data.sort((a, b)=>{
            return a[0] < b[0] ? -1 : 1;
        });
        for (const [index2, value4] of data)logString += `${value4.toString()} |${index2}> \n`;
        return logString;
    }
    toStringColorful(type = _quantumState.PrintType.Integer) {
        const colorCSSList = Array(this._map.size * 2).fill(0).map((_, i)=>i % 2 === 0 ? "color : green" : "font-weight : bold; color : red"
        );
        colorCSSList.push("color : black");
        let logString = "";
        for (const [key, value] of this._map)logString += type === _quantumState.PrintType.Binary ? `%c ${value.toString()} %c |${_stringHelper.toBinaryString(key, this.bitLength)}> \n` : `%c ${value.toString()} %c |${key}> \n`;
        logString += "%c";
        return [
            logString,
            colorCSSList
        ];
    }
    toStringColorfulSorted(type = _quantumState.PrintType.Integer) {
        const colorCSSList = Array(this._map.size * 2).fill(0).map((_, i)=>i % 2 === 0 ? "color : green" : "font-weight : bold; color : red"
        );
        colorCSSList.push("color : black");
        let logString = "";
        const data = [
            ...this._map.entries()
        ].map(([index, value])=>[
                type === _quantumState.PrintType.Binary ? _stringHelper.toBinaryString(index, this.bitLength) : index,
                value
            ]
        );
        data.sort((a, b)=>{
            return a[0] < b[0] ? -1 : 1;
        });
        for (const [index3, value5] of data)logString += `%c ${value5.toString()} %c |${index3}> \n`;
        return [
            logString,
            colorCSSList
        ];
    }
    printStringColorful(type = _quantumState.PrintType.Integer) {
        const [logString, colorCSSList] = this.toStringColorful(type);
        console.log(logString, ...colorCSSList.slice(0, -1));
    }
    printStringColorfulSorted(type = _quantumState.PrintType.Integer) {
        const [logString, colorCSSList] = this.toStringColorfulSorted(type);
        console.log(logString, ...colorCSSList.slice(0, -1));
    }
}

},{"../util/ComplexNumber":"87em4","./QuantumState":"5ZrtS","../util/StringHelper":"awpwb","@parcel/transformer-js/src/esmodule-helpers.js":"ap6ht"}],"15eMQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "QuantumWire", ()=>QuantumWire
);
var _quantumCircuit = require("./QuantumCircuit");
var _generatorMatrixMap = require("./QuantumGate/GeneratorMatrixMap");
class QuantumWire {
    constructor(wireLength){
        this.wireLength = wireLength;
        this.gateArray = [];
    }
    static create(wireLength) {
        return new QuantumWire(wireLength);
    }
    addGate(gate) {
        this.gateArray.push(gate);
    }
    generate(atomizeStrategy, generatorType) {
        const gateArray = this.gateArray.map((gate)=>atomizeStrategy(gate, generatorType)
        ).flat();
        // this gateArray are guaranteed to get the function in generatorType
        const functionArray = gateArray.map((gate)=>gate.get(generatorType)
        );
        const matrixArray = _generatorMatrixMap.isGeneratorMatrixFunctionSubType(generatorType) ? gateArray.map((gate)=>gate.getMatrix(generatorType)
        ) : [];
        return _quantumCircuit.QuantumCircuit.create(gateArray, functionArray, matrixArray, this.wireLength, generatorType);
    }
}

},{"./QuantumCircuit":"hpSmq","./QuantumGate/GeneratorMatrixMap":"6Vrjt","@parcel/transformer-js/src/esmodule-helpers.js":"ap6ht"}],"hpSmq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "QuantumCircuit", ()=>QuantumCircuit
);
var _generatorMatrixMap = require("./QuantumGate/GeneratorMatrixMap");
class QuantumCircuit {
    constructor(gateArray, functionArray, matrixArray, wireLength, generatorType){
        this.gateArray = gateArray;
        this.functionArray = functionArray;
        this.matrixArray = matrixArray;
        this.wireLength = wireLength;
        this.generatorType = generatorType;
    }
    static create(gateArray, functionArray, matrixArray, wireLength, generatorType) {
        return new QuantumCircuit(gateArray, functionArray, matrixArray, wireLength, generatorType);
    }
    execute(state1) {
        // @ts-ignore
        return this.functionArray.reduce((state, fn, index)=>{
            // @ts-ignore
            return fn(state);
        // console.log(this.gateArray[index]);
        // console.log(nextState);
        // // nextState.printStringColorfulSorted();
        // return nextState
        }, state1);
    }
    executeMatrix(state) {
        const matrix = this.getMatrix();
        if (matrix === null) throw new Error("Current Quantum Circuit Have No Matrix Description");
        return matrix.vectorMultiply(state);
    }
    getMatrix() {
        if (_generatorMatrixMap.isGeneratorMatrixFunctionSubType(this.generatorType)) return this.matrixArray.reduce((acc, matrix)=>matrix.matrixMultiply(acc)
        , _generatorMatrixMap.GeneratorMatrixCtor(this.generatorType).identity(2 ** this.wireLength));
        else return null;
    }
}

},{"./QuantumGate/GeneratorMatrixMap":"6Vrjt","@parcel/transformer-js/src/esmodule-helpers.js":"ap6ht"}]},["aDDXQ","hH6CD"], "hH6CD", "parcelRequireebe6")

//# sourceMappingURL=index.fa23dcb8.js.map
