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
})({"kgxat":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "fbcf0f6a96a5f1ba";
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
            var F = function F() {};
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
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
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
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
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
    bundle.hotData = {};
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

},{}],"aeX1w":[function(require,module,exports) {
var _shorAlgorithm = require("../../lib/ShorAlgorithm");
window.onload = ()=>{
    console.log(_shorAlgorithm.classical(15));
    console.log(_shorAlgorithm.classical(91));
    console.log(_shorAlgorithm.classical(1023));
    console.log(_shorAlgorithm.quantum(15));
};

},{"../../lib/ShorAlgorithm":"8Autf"}],"8Autf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "classical", ()=>classical
);
parcelHelpers.export(exports, "quantum", ()=>quantum
);
// @ts-ignore - no types for this library
var _numbers = require("numbers");
var _numbersDefault = parcelHelpers.interopDefault(_numbers);
var _phaseEstimation = require("./PhaseEstimation");
var _atomizer = require("./QuantumGate/Atomizer");
var _gateSymbol = require("./QuantumGate/GateSymbol");
var _generator = require("./QuantumGate/Generator");
var _quantumGate = require("./QuantumGate/QuantumGate");
var _quantumVectorState = require("./QuantumVectorState");
var _quantumVectorStateDefault = parcelHelpers.interopDefault(_quantumVectorState);
const shouldLog = true;
const Logger = {
    log: (...args)=>{
        if (shouldLog) console.log(...args);
    }
};
const isInteger = (number)=>{
    return Math.abs(number - Math.round(number)) < 0.0000000001;
};
const randomIntBetween = (min, max)=>{
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
const gcd = (a, b)=>a === 0 ? b : gcd(b % a, a)
;
const getLowestFraction = (number, largestDenominator)=>{
    let eps = 0.000000000000001;
    let h, h1, h2, k, k1, k2, a, x;
    x = number;
    a = Math.floor(x);
    h1 = 1;
    k1 = 0;
    h = a;
    k = 1;
    while(x - a > eps * k * k){
        x = 1 / (x - a);
        a = Math.floor(x);
        h2 = h1;
        h1 = h;
        k2 = k1;
        k1 = k;
        let tempH = h, tempK = k;
        h = h2 + a * h1;
        k = k2 + a * k1;
        if (k > largestDenominator) {
            h = tempH;
            k = tempK;
            break;
        }
    }
    return [
        h,
        k
    ];
};
const classical = (N)=>{
    Logger.log(`Split ${N}`);
    if (N === 1) return [];
    if (_numbersDefault.default.prime.millerRabin(N)) return [
        N
    ];
    else if (N % 2 === 0) return [
        2,
        ...classical(N / 2)
    ];
    else {
        const KLimit = Math.floor(Math.log(N) / Math.log(3));
        for(let K = 2; K <= KLimit; K++)if (isInteger(N ** (1 / K))) {
            const result = classical(N ** (1 / K));
            const finalResult = [];
            for(let i = 0; i < K; i++)finalResult.push(...result);
            return finalResult;
        }
        while(true){
            const randomNumber = randomIntBetween(2, Math.floor(Math.sqrt(N)));
            const divisor = gcd(N, randomNumber);
            if (divisor !== 1) // we already find the factor;
            return [
                ...classical(divisor),
                ...classical(N / divisor)
            ];
            else {
                // we find a co-prime
                for(let r = 2; r < N; r++)if (randomNumber ** r % N === 1) {
                    // if r is odd
                    if (r % 2 === 1) break;
                    Logger.log(`x = ${randomNumber}, r = ${r}`);
                    const first = (randomNumber ** (r / 2) - 1) % N;
                    const second = (randomNumber ** (r / 2) + 1) % N;
                    const factorOne = gcd(N, first);
                    const factorTwo = gcd(N, second);
                    const factorSmaller = Math.min(factorOne, factorTwo);
                    const factorBigger = Math.max(factorOne, factorTwo);
                    if (factorSmaller === 1 && factorBigger === N) break;
                    return [
                        ...classical(factorOne),
                        ...classical(factorTwo), 
                    ];
                }
            }
        }
    }
};
const quantum = (N)=>{
    Logger.log(`Split ${N}`);
    if (_numbersDefault.default.prime.millerRabin(N)) return [
        N
    ];
    else if (N % 2 === 0) return [
        2,
        ...quantum(N / 2)
    ];
    else {
        const KLimit = Math.floor(Math.log(N) / Math.log(3));
        for(let K = 2; K <= KLimit; K++)if (isInteger(N ** (1 / K))) {
            const result = quantum(N ** (1 / K));
            const finalResult = [];
            for(let i = 0; i < K; i++)finalResult.push(...result);
            return finalResult;
        }
        while(true){
            const randomNumber = randomIntBetween(2, Math.floor(Math.sqrt(N)));
            const divisor = gcd(N, randomNumber);
            if (divisor !== 1) // we already find the factor;
            return [
                ...quantum(divisor),
                ...quantum(N / divisor)
            ];
            else {
                const n = Math.ceil(Math.log2(N));
                const phaseList = {};
                const quantumWire = _phaseEstimation.phaseEstimationWire(2 * n + 1, [
                    _quantumGate.QuantumGate.fromBasis({
                        type: _gateSymbol.GateSymbol.Shor,
                        wireLength: n,
                        startWire: 0,
                        endWire: n,
                        x: randomNumber,
                        N: N
                    })
                ]);
                // in real case, we couldn't measure state multiple times, but for speed of simulation, we can
                const state = _quantumVectorStateDefault.default.unique(n + 2 * n + 1, 1);
                // const finalState = quantumWire.execute(GeneratorType.StateFunction, AtomizeType.Minimum, state);
                const finalState = quantumWire.generate(_atomizer.AtomizeStrategy.Min, _generator.GeneratorType.VectorStateFunction).execute(state);
                while(true){
                    if (Object.keys(phaseList).length >= n) break;
                    Logger.log("Start Finding Phase");
                    const measuredKey = finalState.measure();
                    // only the first 2 * n + 1 bits are mattered, use bit right shift to get rid of last n bits
                    const estimatedPhase = (measuredKey >> n) / 2 ** (2 * n + 1);
                    Logger.log(measuredKey >> n);
                    phaseList[estimatedPhase] = true;
                    if (estimatedPhase === 0) continue;
                    Logger.log(`Estimated Phase: ${estimatedPhase}`);
                    const [_s, r] = getLowestFraction(estimatedPhase, N);
                    Logger.log(`Attempted s/r : ${_s}/${r}`);
                    if (randomNumber ** r % N === 1) {
                        // if r is odd
                        if (r % 2 === 1) break;
                        Logger.log(`x = ${randomNumber}, r = ${r}`);
                        const first = (randomNumber ** (r / 2) - 1) % N;
                        const second = (randomNumber ** (r / 2) + 1) % N;
                        const factorOne = gcd(N, first);
                        const factorTwo = gcd(N, second);
                        const factorSmaller = Math.min(factorOne, factorTwo);
                        const factorBigger = Math.max(factorOne, factorTwo);
                        if (factorSmaller === 1 && factorBigger === N) break;
                        return [
                            ...quantum(factorOne),
                            ...quantum(factorTwo), 
                        ];
                    }
                }
            }
        }
    }
};

},{"numbers":"e010p","./PhaseEstimation":"ftcTC","./QuantumGate/Atomizer":"9mu5U","./QuantumGate/GateSymbol":"l5zy9","./QuantumGate/Generator":"2GKIR","./QuantumGate/QuantumGate":"9LUez","./QuantumVectorState":"iSZSH","@parcel/transformer-js/src/esmodule-helpers.js":"lwlqA"}],"e010p":[function(require,module,exports) {
module.exports = require('./lib/numbers.js');

},{"./lib/numbers.js":"chLRh"}],"chLRh":[function(require,module,exports) {
/**
 * numbers.js
 * http://github.com/sjkaliski/numbers.js
 *
 * Copyright 2012 Stephen Kaliski
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var numbers = exports;
// Expose methods
numbers.basic = require('./numbers/basic');
numbers.calculus = require('./numbers/calculus');
numbers.complex = require('./numbers/complex');
numbers.dsp = require('./numbers/dsp');
numbers.matrix = require('./numbers/matrix');
numbers.prime = require('./numbers/prime');
numbers.statistic = require('./numbers/statistic');
numbers.generate = require('./numbers/generators');
numbers.random = require('./numbers/random');
/**
 * @property {Number} EPSILON Epsilon (error bound) to be used
 * in calculations. Can be set and retrieved freely.
 *
 * Given the float-point handling by JavaScript, as well as
 * the numbersal proficiency of some methods, it is common
 * practice to include a bound by which discrepency between
 * the "true" answer and the returned value is acceptable.
 *
 * If no value is provided, 0.001 is default.
 */ numbers.EPSILON = 0.001;

},{"./numbers/basic":"dNgX5","./numbers/calculus":"lixvR","./numbers/complex":"94Viq","./numbers/dsp":"kJgqt","./numbers/matrix":"41KBo","./numbers/prime":"6uKb3","./numbers/statistic":"9ZZfF","./numbers/generators":"4H3aQ","./numbers/random":"96p7V"}],"dNgX5":[function(require,module,exports) {
/**
 * basic.js
 * http://github.com/sjkaliski/numbers.js
 *
 * Copyright 2012 Stephen Kaliski
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var basic = exports;
/**
 * Determine the summation of numbers in a given array.
 *
 * @param {Array} collection of numbers.
 * @return {Number} sum of numbers in array.
 */ basic.sum = function(arr) {
    if (Object.prototype.toString.call(arr) === '[object Array]') {
        var total = 0;
        for(var i = 0; i < arr.length; i++){
            if (typeof arr[i] === 'number') total = total + arr[i];
            else throw new Error('All elements in array must be numbers');
        }
        return total;
    } else throw new Error('Input must be of type Array');
};
/**
 * Subtracts elements from one another in array.
 *
 * e.g [5,3,1,-1] -> 5 - 3 - 1 - (-1) = 2
 *
 * @param {Array} collection of numbers.
 * @return {Number} difference.
 */ basic.subtraction = function(arr) {
    if (Object.prototype.toString.call(arr) === '[object Array]') {
        var total = arr[0];
        if (typeof total !== 'number') throw new Error('All elements in array must be numbers');
        for(var i = 1, length = arr.length; i < length; i++){
            if (typeof arr[i] === 'number') total -= arr[i];
            else throw new Error('All elements in array must be numbers');
        }
        return total;
    } else throw new Error('Input must be of type Array');
};
/**
 * Product of all elements in an array.
 *
 * @param {Array} collection of numbers.
 * @return {Number} product.
 */ basic.product = function(arr) {
    if (Object.prototype.toString.call(arr) === '[object Array]') {
        var total = arr[0];
        if (typeof total !== 'number') throw new Error('All elements in array must be numbers');
        for(var i = 1, length = arr.length; i < length; i++){
            if (typeof arr[i] === 'number') total = total * arr[i];
            else throw new Error('All elements in array must be numbers');
        }
        return total;
    } else throw new Error('Input must be of type Array');
};
/**
 * Return the square of any value.
 *
 * @param {Number} number
 * @return {Number} square of number
 */ basic.square = function(num) {
    if (typeof num !== 'number') throw new Error('Input must be a number.');
    else return num * num;
};
/**
 * Calculate the binomial coefficient (n choose k)
 *
 * @param {Number} available choices
 * @param {Number} number chosen
 * @return {Number} number of possible choices
 */ basic.binomial = function(n1, k1) {
    var arr = [];
    function _binomial(n, k) {
        if (typeof n !== 'number' && typeof k !== 'number') throw new Error('Input must be a number.');
        if (n >= 0 && k === 0) return 1;
        if (n === 0 && k > 0) return 0;
        if (arr[n] && arr[n][k] > 0) return arr[n][k];
        if (!arr[n]) arr[n] = [];
        arr[n][k] = _binomial(n - 1, k - 1) + _binomial(n - 1, k);
        return arr[n][k];
    }
    return _binomial(n1, k1);
};
/**
 * Factorial for some integer.
 *
 * @param {Number} integer.
 * @return {Number} result.
 */ basic.factorial = function(num) {
    if (typeof num !== 'number') throw new Error("Input must be a number.");
    if (num < 0) throw new Error("Input must not be negative.");
    var i = 2, o = 1;
    while(i <= num)o *= i++;
    return o;
};
/**
 * Calculate the greastest common divisor amongst two integers.
 *
 * @param {Number} number A.
 * @param {Number} number B.
 * @return {Number} greatest common divisor for integers A, B.
 */ basic.gcd = function(a, b) {
    var c;
    a = +a;
    b = +b;
    // Same as isNaN() but faster
    if (a !== a || b !== b) return NaN;
    //Same as !isFinite() but faster
    if (a === Infinity || a === -Infinity || b === Infinity || b === -Infinity) return Infinity;
    // Checks if a or b are decimals
    if (a % 1 !== 0 || b % 1 !== 0) throw new Error("Can only operate on integers");
    while(b){
        c = a % b;
        a = b;
        b = c;
    }
    return 0 < a ? a : -a;
};
/**
 * Calculate the least common multiple amongst two integers.
 *
 * @param {Number} number A.
 * @param {Number} number B.
 * @return {Number} least common multiple for integers A, B.
 */ basic.lcm = function(num1, num2) {
    return Math.abs(num1 * num2) / basic.gcd(num1, num2);
};
/**
 * Retrieve a specified quantity of elements from an array, at random.
 *
 * @param {Array} set of values to select from.
 * @param {Number} quantity of elements to retrieve.
 * @param {Boolean} allow the same number to be returned twice.
 * @return {Array} random elements.
 */ basic.random = function(arr, quant, allowDuplicates) {
    if (arr.length === 0) throw new Error('Empty array');
    else if (quant > arr.length && !allowDuplicates) throw new Error('Quantity requested exceeds size of array');
    if (allowDuplicates === true) {
        var result = [], i;
        for(i = 0; i < quant; i++)result[i] = arr[Math.floor(Math.random() * arr.length)];
        return result;
    } else return basic.shuffle(arr).slice(0, quant);
};
/**
 * Shuffle an array, in place.
 *
 * @param {Array} array to be shuffled.
 * @return {Array} shuffled array.
 */ basic.shuffle = function(array) {
    var m = array.length, t, i;
    while(m){
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    return array;
};
/**
 * Find maximum value in an array.
 *
 * @param {Array} array to be traversed.
 * @return {Number} maximum value in the array.
 */ basic.max = function(arr) {
    if (!Array.isArray(arr)) throw new Error("Input must be of type Array");
    var max = -Infinity, val;
    for(var i = 0, len = arr.length; i < len; i++){
        val = +arr[i];
        if (max < val) max = val;
        // Math.max() returns NaN if one of the elements is not a number.
        if (val !== val) return NaN;
    }
    return max;
};
/**
 * Find minimum value in an array.
 *
 * @param {Array} array to be traversed.
 * @return {Number} minimum value in the array.
 */ basic.min = function(arr) {
    if (!Array.isArray(arr)) throw new Error("Input must be of type Array");
    var min = Infinity, val;
    for(var i = 0, len = arr.length; i < len; i++){
        val = +arr[i];
        if (val < min) min = val;
        // Math.min() returns NaN if one of the elements is not a number.
        if (val !== val) return NaN;
    }
    return min;
};
/**
 * Create a range of numbers.
 *
 * @param {Number} The start of the range.
 * @param {Number} The end of the range.
 * @return {Array} An array containing numbers within the range.
 */ basic.range = function(start, stop, step) {
    var array, i = 0, len;
    if (arguments.length <= 1) {
        stop = start || 0;
        start = 0;
    }
    step = step || 1;
    if (stop < start) step = 0 - Math.abs(step);
    len = Math.max(Math.ceil((stop - start) / step) + 1, 0);
    array = new Array(len);
    while(i < len){
        array[i++] = start;
        start += step;
    }
    return array;
};
/**
 * Determine if the number is an integer.
 *
 * @param {Number} the number
 * @return {Boolean} true for int, false for not int.
 */ basic.isInt = function(n) {
    return n % 1 === 0;
};
/**
 * Calculate the divisor and modulus of two integers.
 *
 * @param {Number} int a.
 * @param {Number} int b.
 * @return {Array} [div, mod].
 */ basic.divMod = function(a, b) {
    if (b <= 0) throw new Error("b cannot be zero. Undefined.");
    if (!basic.isInt(a) || !basic.isInt(b)) throw new Error("A or B are not integers.");
    return [
        Math.floor(a / b),
        a % b
    ];
};
/**
 * Calculate:
 * if b >= 1: a^b mod m.
 * if b = -1: modInverse(a, m).
 * if b < 1: finds a modular rth root of a such that b = 1/r.
 *
 * @param {Number} Number a.
 * @param {Number} Number b.
 * @param {Number} Modulo m.
 * @return {Number} see the above documentation for return values.
 */ basic.powerMod = function(a, b, m) {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof m !== 'number') throw new Error("Inputs must be numbers.");
    // If b < -1 should be a small number, this method should work for now.
    if (b < -1) return Math.pow(a, b) % m;
    if (b === 0) return 1 % m;
    if (b >= 1) {
        var result = 1;
        while(b > 0){
            if (b % 2 === 1) result = result * a % m;
            a = a * a % m;
            b = b >> 1;
        }
        return result;
    }
    if (b === -1) return basic.modInverse(a, m);
    if (b < 1) return basic.powerMod(a, Math.pow(b, -1), m);
};
/**
 * Calculate the extended Euclid Algorithm or extended GCD.
 *
 * @param {Number} int a.
 * @param {Number} int b.
 * @return {Array} [a, x, y] a is the GCD. x and y are the values such that ax + by = gcd(a, b) .
 */ basic.egcd = function(a, b) {
    a = +a;
    b = +b;
    // Same as isNaN() but faster
    if (a !== a || b !== b) return [
        NaN,
        NaN,
        NaN
    ];
    //Same as !isFinite() but faster
    if (a === Infinity || a === -Infinity || b === Infinity || b === -Infinity) return [
        Infinity,
        Infinity,
        Infinity
    ];
    // Checks if a or b are decimals
    if (a % 1 !== 0 || b % 1 !== 0) throw new Error("Can only operate on integers");
    var signX = a < 0 ? -1 : 1, signY = b < 0 ? -1 : 1, x = 0, y = 1, oldX = 1, oldY = 0, q, r, m, n;
    a = Math.abs(a);
    b = Math.abs(b);
    while(a !== 0){
        q = Math.floor(b / a);
        r = b % a;
        m = x - oldX * q;
        n = y - oldY * q;
        b = a;
        a = r;
        x = oldX;
        y = oldY;
        oldX = m;
        oldY = n;
    }
    return [
        b,
        signX * x,
        signY * y
    ];
};
/**
 * Calculate the modular inverse of a number.
 *
 * @param {Number} Number a.
 * @param {Number} Modulo m.
 * @return {Number} if true, return number, else throw error.
 */ basic.modInverse = function(a, m) {
    var r = basic.egcd(a, m);
    if (r[0] !== 1) throw new Error('No modular inverse exists');
    return r[1] % m;
};
/**
 * Determine is two numbers are equal within a given margin of precision.
 *
 * @param {Number} first number.
 * @param {Number} second number.
 * @param {Number} epsilon.
 */ basic.numbersEqual = function(first, second, epsilon) {
    if (typeof first !== 'number' || typeof second !== 'number' || typeof epsilon !== 'number') throw new Error("First and Second must be numbers.");
    return first - second < epsilon && first - second > -epsilon;
};
/**
 * Calculate the falling factorial of a number
 *
 * {@see http://mathworld.wolfram.com/FallingFactorial.html}
 *
 * @param {Number} Base
 * @param {Number} Steps to fall
 * @returns {Number} Result
 */ basic.fallingFactorial = function(n, k) {
    var i = n - k + 1, r = 1;
    if (n < 0) throw new Error("n cannot be negative.");
    if (k > n) throw new Error("k cannot be greater than n.");
    while(i <= n)r *= i++;
    return r;
};
/**
 * Calculate the permutation (n choose k)
 *
 * @param {Number} available choices
 * @param {Number} number chosen
 * @return {Number} number of ordered variations
 */ basic.permutation = function(n, k) {
    if (n <= 0) throw new Error("n cannot be less than or equal to 0.");
    if (n < k) throw new Error("k cannot be greater than k.");
    var binomial = basic.binomial(n, k);
    var permutation = binomial * basic.factorial(k);
    return permutation;
};

},{}],"lixvR":[function(require,module,exports) {
/**
 * calculus.js
 * http://github.com/sjkaliski/numbers.js
 *
 * Copyright 2012 Stephen Kaliski
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var numbers = require('../numbers');
var calculus = exports;
/**
 * Calculate point differential for a specified function at a
 * specified point.  For functions of one variable.
 *
 * @param {Function} math function to be evaluated.
 * @param {Number} point to be evaluated.
 * @return {Number} result.
 */ calculus.pointDiff = function(func, point) {
    var a = func(point - 0.001);
    var b = func(point + 0.001);
    return (b - a) / 0.002;
};
/**
 * Calculate riemann sum for a specified, one variable, function
 * from a starting point, to a finishing point, with n divisions.
 *
 * @param {Function} math function to be evaluated.
 * @param {Number} point to initiate evaluation.
 * @param {Number} point to complete evaluation.
 * @param {Number} quantity of divisions.
 * @param {Function} (Optional) Function that returns which value
 *   to sample on each interval; if none is provided, left endpoints
 *   will be used.
 * @return {Number} result.
 */ calculus.Riemann = function(func, start, finish, n, sampler) {
    var inc = (finish - start) / n;
    var totalHeight = 0;
    var i;
    if (typeof sampler === 'function') for(i = start; i < finish; i += inc)totalHeight += func(sampler(i, i + inc));
    else for(i = start; i < finish; i += inc)totalHeight += func(i);
    return totalHeight * inc;
};
/**
 * Helper function in calculating integral of a function
 * from a to b using simpson quadrature.
 *
 * @param {Function} math function to be evaluated.
 * @param {Number} point to initiate evaluation.
 * @param {Number} point to complete evaluation.
 * @return {Number} evaluation.
 */ function SimpsonDef(func, a, b) {
    var c = (a + b) / 2;
    var d = Math.abs(b - a) / 6;
    return d * (func(a) + 4 * func(c) + func(b));
}
/**
 * Helper function in calculating integral of a function
 * from a to b using simpson quadrature.  Manages recursive
 * investigation, handling evaluations within an error bound.
 *
 * @param {Function} math function to be evaluated.
 * @param {Number} point to initiate evaluation.
 * @param {Number} point to complete evaluation.
 * @param {Number} total value.
 * @param {Number} Error bound (epsilon).
 * @return {Number} recursive evaluation of left and right side.
 */ function SimpsonRecursive(func, a, b, whole, eps) {
    var c = a + b;
    var left = SimpsonDef(func, a, c);
    var right = SimpsonDef(func, c, b);
    if (Math.abs(left + right - whole) <= 15 * eps) return left + right + (left + right - whole) / 15;
    else return SimpsonRecursive(func, a, c, eps / 2, left) + SimpsonRecursive(func, c, b, eps / 2, right);
}
/**
 * Evaluate area under a curve using adaptive simpson quadrature.
 *
 * @param {Function} math function to be evaluated.
 * @param {Number} point to initiate evaluation.
 * @param {Number} point to complete evaluation.
 * @param {Number} Optional error bound (epsilon);
 *   global error bound will be used as a fallback.
 * @return {Number} area underneath curve.
 */ calculus.adaptiveSimpson = function(func, a, b, eps) {
    eps = typeof eps === 'undefined' ? numbers.EPSILON : eps;
    return SimpsonRecursive(func, a, b, SimpsonDef(func, a, b), eps);
};
/**
 * Calculate limit of a function at a given point. Can approach from
 * left, middle, or right.
 *
 * @param {Function} math function to be evaluated.
 * @param {Number} point to evaluate.
 * @param {String} approach to limit.
 * @return {Number} limit.
 */ calculus.limit = function(func, point, approach) {
    if (approach === 'left') return func(point - 0.000000000000001);
    else if (approach === 'right') return func(point + 0.000000000000001);
    else if (approach === 'middle') return (calculus.limit(func, point, 'left') + calculus.limit(func, point, 'right')) / 2;
    else throw new Error('Approach not provided');
};
/**
 * Calculate Stirling approximation gamma.
 *
 * @param {Number} number to calculate.
 * @return {Number} gamma.
 */ calculus.StirlingGamma = function(num) {
    return Math.sqrt(2 * Math.PI / num) * Math.pow(num / Math.E, num);
};
/**
 * Calculate Lanczos approximation gamma.
 *
 * @param {Number} number to calculate.
 * @return {Number} gamma.
 */ calculus.LanczosGamma = function(num) {
    var p = [
        0.9999999999998099,
        676.5203681218851,
        -1259.1392167224028,
        771.3234287776531,
        -176.6150291621406,
        12.507343278686905,
        -0.13857109526572012,
        0.000009984369578019572,
        0.00000015056327351493116
    ];
    var i;
    var g = 7;
    if (num < 0.5) return Math.PI / (Math.sin(Math.PI * num) * calculus.LanczosGamma(1 - num));
    num -= 1;
    var a = p[0];
    var t = num + g + 0.5;
    for(i = 1; i < p.length; i++)a += p[i] / (num + i);
    return Math.sqrt(2 * Math.PI) * Math.pow(t, num + 0.5) * Math.exp(-t) * a;
};
/**
 * Calculate the integral of f(x1,x2,...) over intervals
 * [a1,b1], [a2,b2], ..., using the montecarlo method:
 *
 * integral of f(x,y) = (1/N)*(b2-a2)*(b1-a1)*sum(f)
 *
 * where N = number of points for f to be evaluated at.
 * The error for this method is about 1/root(N) and will
 * always converge.
 *
 * @param {Function} math function.
 * @param {Number} number of points
 * @param {Array(s)} intervals
 * @return {Number} approximation to integral
 */ calculus.MonteCarlo = function(func, N) {
    //takes an arbitrary number of arguments after N
    //all of the arguments must be arrays which are intervals
    if (arguments.length < 2) throw new Error('Please enter at least one interval.');
    else if (N <= 0) throw new Error('Please use a positive integer for N.');
    var L = [];
    N = Math.ceil(N);
    for(var i = 2; i < arguments.length; i++)L.push(arguments[i]);
    var coeff = L.map(function(l) {
        return l[1] - l[0];
    }).reduce(function(a, b) {
        return a * b;
    }) / N;
    var fvals = numbers.matrix.transpose(L.map(function(l) {
        //generate an array of arrays, each nested array being N
        //random values in each interval - N-by-3 array, and then
        //transpose it to get a 3-by-N array
        return numbers.statistic.randomSample(l[0], l[1], N);
    })).map(function(l) {
        //evaluate func at each set of points
        return func.apply(null, [
            l[0],
            l[1],
            l[2]
        ]);
    });
    return coeff * fvals.reduce(function(a, b) {
        return a + b;
    });
};

},{"../numbers":"chLRh"}],"94Viq":[function(require,module,exports) {
/**
 * complex.js
 * http://github.com/sjkaliski/numbers.js
 *
 * Copyright 2012 Stephen Kaliski
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var numbers = require('../numbers');
var basic = numbers.basic;
var Complex = function(re, im) {
    this.re = re;
    this.im = im;
    this.r = this.magnitude();
    this.t = this.phase(); // theta = t = arg(z)
};
/**
 * Add a complex number to this one.
 *
 * @param {Complex} Number to add.
 * @return {Complex} New complex number (sum).
 */ Complex.prototype.add = function(addend) {
    return new Complex(this.re + addend.re, this.im + addend.im);
};
/**
 * Subtract a complex number from this one.
 *
 * @param {Complex} Number to subtract.
 * @return {Complex} New complex number (difference).
 */ Complex.prototype.subtract = function(subtrahend) {
    return new Complex(this.re - subtrahend.re, this.im - subtrahend.im);
};
/**
 * Multiply a complex number with this one.
 *
 * @param {Complex} Number to multiply by.
 * @return {Complex} New complex number (product).
 */ Complex.prototype.multiply = function(multiplier) {
    var re = this.re * multiplier.re - this.im * multiplier.im;
    var im = this.im * multiplier.re + this.re * multiplier.im;
    return new Complex(re, im);
};
/**
 * Divide this number with another complex number.
 *
 * @param {Complex} Divisor.
 * @return {Complex} New complex number (quotient).
 */ Complex.prototype.divide = function(divisor) {
    var denominator = divisor.re * divisor.re + divisor.im * divisor.im;
    var re = (this.re * divisor.re + this.im * divisor.im) / denominator;
    var im = (this.im * divisor.re - this.re * divisor.im) / denominator;
    return new Complex(re, im);
};
/**
 * Get the magnitude of this number.
 *
 * @return {Number} Magnitude.
 */ Complex.prototype.magnitude = function() {
    return Math.sqrt(this.re * this.re + this.im * this.im);
};
/**
 * Get the phase of this number.
 *
 * @return {Number} Phase.
 */ Complex.prototype.phase = function() {
    return Math.atan2(this.im, this.re);
};
/**
 * Conjugate the imaginary part
 *
 * @return {Complex} Conjugated number
 */ Complex.prototype.conjugate = function() {
    return new Complex(this.re, -1 * this.im);
};
/**
 * Raises this complex number to the nth power.
 *
 * @param {number} power to raise this complex number to.
 * @return {Complex} the nth power of this complex number.
 */ Complex.prototype.pow = function(n) {
    var constant = Math.pow(this.magnitude(), n);
    return new Complex(constant * Math.cos(n * this.phase()), constant * Math.sin(n * this.phase()));
};
/**
 * Raises this complex number to given complex power.
 *
 * @param complexN the complex number to raise this complex number to.
 * @return {Complex} this complex number raised to the given complex number.
 */ Complex.prototype.complexPow = function(complexN) {
    var realSqPlusImSq = Math.pow(this.re, 2) + Math.pow(this.im, 2);
    var multiplier = Math.pow(realSqPlusImSq, complexN.re / 2) * Math.pow(Math.E, -complexN.im * this.phase());
    var theta = complexN.re * this.phase() + 0.5 * complexN.im * Math.log(realSqPlusImSq);
    return new Complex(multiplier * Math.cos(theta), multiplier * Math.sin(theta));
};
/**
 * Find all the nth roots of this complex number.
 *
 * @param {Number} root of this complex number to take.
 * @return {Array} an array of size n with the roots of this complex number.
 */ Complex.prototype.roots = function(n) {
    var result = new Array(n);
    for(var i = 0; i < n; i++){
        var theta = (this.phase() + 2 * Math.PI * i) / n;
        var radiusConstant = Math.pow(this.magnitude(), 1 / n);
        result[i] = new Complex(radiusConstant * Math.cos(theta), radiusConstant * Math.sin(theta));
    }
    return result;
};
/**
 * Returns the sine of this complex number.
 *
 * @return {Complex} the sine of this complex number.
 */ Complex.prototype.sin = function() {
    var E = new Complex(Math.E, 0);
    var i = new Complex(0, 1);
    var negativeI = new Complex(0, -1);
    var numerator = E.complexPow(i.multiply(this)).subtract(E.complexPow(negativeI.multiply(this)));
    return numerator.divide(new Complex(0, 2));
};
/**
 * Returns the cosine of this complex number.
 *
 * @return {Complex} the cosine of this complex number.
 */ Complex.prototype.cos = function() {
    var E = new Complex(Math.E, 0);
    var i = new Complex(0, 1);
    var negativeI = new Complex(0, -1);
    var numerator = E.complexPow(i.multiply(this)).add(E.complexPow(negativeI.multiply(this)));
    return numerator.divide(new Complex(2, 0));
};
/**
 * Returns the tangent of this complex number.
 *
 * @return {Complex} the tangent of this complex number.
 */ Complex.prototype.tan = function() {
    return this.sin().divide(this.cos());
};
/**
 * Checks for equality between this complex number and another
 * within a given range defined by epsilon.
 *
 * @param {Complex} complex number to check this number against.
 * @param {Number} epsilon
 * @return {boolean} true if equal within epsilon, false otherwise
 */ Complex.prototype.equals = function(complex, epsilon) {
    return basic.numbersEqual(this.re, complex.re, epsilon) && basic.numbersEqual(this.im, complex.im, epsilon);
};
module.exports = Complex;

},{"../numbers":"chLRh"}],"kJgqt":[function(require,module,exports) {
/**
 * dsp.js
 * http://github.com/sjkaliski/numbers.js
 *
 * Copyright 2012 Stephen Kaliski
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var numbers = require('../numbers');
var Complex = numbers.complex;
var dsp = exports;
/**
 * Returns an array composed of elements from arr, starting at index start
 * and counting by step.
 *
 * @param {Array} Input array.
 * @param {Number} Starting array index.
 * @param {Number} Step size.
 * @return {Array} Resulting sub-array.
 */ dsp.segment = function(arr, start, step) {
    var result = [];
    for(var i = start; i < arr.length; i += step)result.push(arr[i]);
    return result;
};
/**
 * Returns an array of complex numbers representing the frequency spectrum
 * of real valued time domain sequence x. (x.length must be integer power of 2)
 * Inspired by http://rosettacode.org/wiki/Fast_Fourier_transform#Python
 *
 * @param {Array} Real-valued series input, eg. time-series.
 * @return {Array} Array of complex numbers representing input signal in Fourier domain.
 */ dsp.fft = function(x) {
    var N = x.length;
    if (N <= 1) return [
        new Complex(x[0], 0)
    ];
    if (Math.log(N) / Math.LN2 % 1 !== 0) throw new Error('Array length must be integer power of 2');
    var even = dsp.fft(dsp.segment(x, 0, 2));
    var odd = dsp.fft(dsp.segment(x, 1, 2));
    var res = [], Nby2 = N / 2;
    for(var k = 0; k < N; k++){
        var tmpPhase = -2 * Math.PI * k / N;
        var phasor = new Complex(Math.cos(tmpPhase), Math.sin(tmpPhase));
        if (k < Nby2) res[k] = even[k].add(phasor.multiply(odd[k]));
        else res[k] = even[k - Nby2].subtract(phasor.multiply(odd[k - Nby2]));
    }
    return res;
};

},{"../numbers":"chLRh"}],"41KBo":[function(require,module,exports) {
/**
 * matrix.js
 * http://github.com/sjkaliski/numbers.js
 *
 * Copyright 2012 Stephen Kaliski
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var matrix = exports;
var ERROR_MATRIX_NOT_SQUARE = 'Matrix must be square.', ERROR_VECTOR_NOT_2D = 'Only two dimensional operations are supported at this time.';
/**
 * Check to see if a point is 2D. Used in all 2D vector functions.
 * Throw error if it's not.
 *
 * @param {Array} point in question.
 * @return {undefined} nothing is returned.
 */ matrix._check2DVector = function(point) {
    if (point.length !== 2) throw new Error(ERROR_VECTOR_NOT_2D);
};
/**
 * Return a deep copy of the input matrix.
 *
 * @param {Array} matrix to copy.
 * @return {Array} copied matrix.
 */ matrix.deepCopy = function(arr) {
    if (!Array.isArray(arr)) throw new Error('Input must be a matrix.');
    else if (arr[0][0] === undefined) throw new Error('Input cannot be a vector.');
    var result = new Array(arr.length);
    for(var i = 0; i < arr.length; i++)result[i] = arr[i].slice();
    return result;
};
/**
 * Return true if matrix is square, false otherwise.
 *
 * @param {Array} arr
 * @return {Boolean}
 */ matrix.isSquare = function(arr) {
    if (!Array.isArray(arr)) throw new Error('Input must be a matrix.');
    else if (arr[0][0] === undefined) throw new Error('Input cannot be a vector.');
    var rows = arr.length;
    for(var i = 0; i < rows; i++){
        if (arr[i].length !== rows) return false;
    }
    return true;
};
/**
 * Add two matrices together.  Matrices must be of same dimension.
 *
 * @param {Array} matrix A.
 * @param {Array} matrix B.
 * @return {Array} summed matrix.
 */ matrix.addition = function(arrA, arrB) {
    if (arrA.length !== arrB.length || arrA[0].length !== arrB[0].length) throw new Error('Matrix mismatch');
    var result = new Array(arrA.length), i;
    if (!arrA[0].length) // The arrays are vectors.
    for(i = 0; i < arrA.length; i++)result[i] = arrA[i] + arrB[i];
    else for(i = 0; i < arrA.length; i++){
        result[i] = new Array(arrA[i].length);
        for(var j = 0; j < arrA[i].length; j++)result[i][j] = arrA[i][j] + arrB[i][j];
    }
    return result;
};
/**
 * Subtract one matrix from another (A - B).  Matrices must be of same dimension.
 *
 * @param {Array} matrix A.
 * @param {Array} matrix B.
 * @return {Array} subtracted matrix.
 */ matrix.subtraction = function(arrA, arrB) {
    if (arrA.length !== arrB.length || arrA[0].length !== arrB[0].length) throw new Error("Matrix mismatch");
    var result = new Array(arrA.length), i;
    if (!arrA[0].length) // The arrays are vectors.
    for(i = 0; i < arrA.length; i++)result[i] = arrA[i] - arrB[i];
    else for(i = 0; i < arrA.length; i++){
        result[i] = new Array(arrA[i].length);
        for(var j = 0; j < arrA[i].length; j++)result[i][j] = arrA[i][j] - arrB[i][j];
    }
    return result;
};
/**
 * Scalar multiplication on an matrix.
 *
 * @param {Array} matrix.
 * @param {Number} scalar.
 * @return {Array} updated matrix.
 */ matrix.scalar = function(arr, val) {
    var result = matrix.deepCopy(arr);
    for(var i = 0; i < result.length; i++)for(var j = 0; j < result[i].length; j++)result[i][j] = val * arr[i][j];
    return result;
};
/**
 * Transpose a matrix.
 *
 * @param {Array} matrix.
 * @return {Array} transposed matrix.
 */ matrix.transpose = function(arr) {
    var result = new Array(arr[0].length);
    for(var i = 0; i < arr[0].length; i++){
        result[i] = new Array(arr.length);
        for(var j = 0; j < arr.length; j++)result[i][j] = arr[j][i];
    }
    return result;
};
/**
 * Create an identity matrix of dimension n x n.
 *
 * @param {Number} dimension of the identity array to be returned.
 * @return {Array} n x n identity matrix.
 */ matrix.identity = function(n) {
    var result = new Array(n);
    for(var i = 0; i < n; i++){
        result[i] = new Array(n);
        for(var j = 0; j < n; j++)result[i][j] = i === j ? 1 : 0;
    }
    return result;
};
/**
 * Evaluate dot product of two vectors.  Vectors must be of same length.
 *
 * @param {Array} vector.
 * @param {Array} vector.
 * @return {Array} dot product.
 */ matrix.dotproduct = function(vectorA, vectorB) {
    if (vectorA.length !== vectorB.length) throw new Error("Vector mismatch");
    var result = 0;
    for(var i = 0; i < vectorA.length; i++)result += vectorA[i] * vectorB[i];
    return result;
};
/**
 * Multiply two matrices. They must abide by standard matching.
 *
 * e.g. A x B = (m x n) x (n x m), where n, m are integers who define
 * the dimensions of matrices A, B.
 *
 * @param {Array} matrix.
 * @param {Array} matrix.
 * @return {Array} result of multiplied matrices.
 */ matrix.multiply = function(arrA, arrB) {
    if (arrA[0].length !== arrB.length) throw new Error("Matrix mismatch");
    var result = new Array(arrA.length);
    for(var x = 0; x < arrA.length; x++)result[x] = new Array(arrB[0].length);
    var arrB_T = matrix.transpose(arrB);
    for(var i = 0; i < result.length; i++)for(var j = 0; j < result[i].length; j++)result[i][j] = matrix.dotproduct(arrA[i], arrB_T[j]);
    return result;
};
/**
 * Evaluate determinate of matrix.  Expect speed
 * degradation for matrices over 4x4.
 *
 * @param {Array} matrix.
 * @return {Number} determinant.
 */ matrix.determinant = function(m) {
    var numRow = m.length;
    var numCol = m[0].length;
    var det = 0;
    var row, col;
    var diagLeft, diagRight;
    if (!matrix.isSquare(m)) throw new Error(ERROR_MATRIX_NOT_SQUARE);
    if (numRow === 1) return m[0][0];
    else if (numRow === 2) return m[0][0] * m[1][1] - m[0][1] * m[1][0];
    for(col = 0; col < numCol; col++){
        diagLeft = m[0][col];
        diagRight = m[0][col];
        for(row = 1; row < numRow; row++){
            diagRight *= m[row][((col + row) % numCol + numCol) % numCol];
            diagLeft *= m[row][((col - row) % numCol + numCol) % numCol];
        }
        det += diagRight - diagLeft;
    }
    return det;
};
/**
 * Returns a LUP decomposition of the given matrix such that:
 *
 * A*P = L*U
 *
 * Where
 * A is the input matrix
 * P is a pivot matrix
 * L is a lower triangular matrix
 * U is a upper triangular matrix
 *
 * This method returns an array of three matrices such that:
 *
 * matrix.luDecomposition(array) = [L, U, P]
 *
 * @param {Array} arr
 * @return {Array} array of matrices [L, U, P]
 */ matrix.lupDecomposition = function(arr) {
    if (!matrix.isSquare(arr)) throw new Error(ERROR_MATRIX_NOT_SQUARE);
    var size = arr.length;
    var LU = matrix.deepCopy(arr);
    var P = matrix.transpose(matrix.identity(size));
    var currentRow;
    var currentColumn = new Array(size);
    this.getL = function(a) {
        var m = a[0].length;
        var L = matrix.identity(m);
        for(var i = 0; i < m; i++){
            for(var j = 0; j < m; j++)if (i > j) L[i][j] = a[i][j];
        }
        return L;
    };
    this.getU = function(a) {
        var m = a[0].length;
        var U = matrix.identity(m);
        for(var i = 0; i < m; i++){
            for(var j = 0; j < m; j++)if (i <= j) U[i][j] = a[i][j];
        }
        return U;
    };
    for(var j1 = 0; j1 < size; j1++){
        var i1;
        for(i1 = 0; i1 < size; i1++)currentColumn[i1] = LU[i1][j1];
        for(i1 = 0; i1 < size; i1++){
            currentRow = LU[i1];
            var minIndex = Math.min(i1, j1);
            var s = 0;
            for(var k = 0; k < minIndex; k++)s += currentRow[k] * currentColumn[k];
            currentRow[j1] = currentColumn[i1] -= s;
        }
        //Find pivot
        var pivot = j1;
        for(i1 = j1 + 1; i1 < size; i1++)if (Math.abs(currentColumn[i1]) > Math.abs(currentColumn[pivot])) pivot = i1;
        if (pivot !== j1) {
            LU = matrix.rowSwitch(LU, pivot, j1);
            P = matrix.rowSwitch(P, pivot, j1);
        }
        if (j1 < size && LU[j1][j1] !== 0) for(i1 = j1 + 1; i1 < size; i1++)LU[i1][j1] /= LU[j1][j1];
    }
    return [
        this.getL(LU),
        this.getU(LU),
        P
    ];
};
/**
 * Rotate a two dimensional vector by degree.
 *
 * @param {Array} point.
 * @param {Number} degree.
 * @param {String} direction - clockwise or counterclockwise.
 * @return {Array} vector.
 */ matrix.rotate = function(point, degree, direction) {
    matrix._check2DVector(point);
    var negate = direction === 'clockwise' ? -1 : 1;
    var radians = degree * (Math.PI / 180);
    var transformation = [
        [
            Math.cos(radians),
            -1 * negate * Math.sin(radians)
        ],
        [
            negate * Math.sin(radians),
            Math.cos(radians)
        ]
    ];
    return matrix.multiply(transformation, point);
};
/**
 * Scale a two dimensional vector by scale factor x and scale factor y.
 *
 * @param {Array} point.
 * @param {Number} sx.
 * @param {Number} sy.
 * @return {Array} vector.
 */ matrix.scale = function(point, sx, sy) {
    matrix._check2DVector(point);
    var transformation = [
        [
            sx,
            0
        ],
        [
            0,
            sy
        ]
    ];
    return matrix.multiply(transformation, point);
};
/**
 * Shear a two dimensional vector by shear factor k.
 *
 * @param {Array} point.
 * @param {Number} k.
 * @param {String} direction - xaxis or yaxis.
 * @return {Array} vector.
 */ matrix.shear = function(point, k, direction) {
    matrix._check2DVector(point);
    var xplaceholder = direction === 'xaxis' ? k : 0;
    var yplaceholder = direction === 'yaxis' ? k : 0;
    var transformation = [
        [
            1,
            xplaceholder
        ],
        [
            yplaceholder,
            1
        ]
    ];
    return matrix.multiply(transformation, point);
};
/**
 * Perform an affine transformation on the given vector.
 *
 * @param {Array} point.
 * @param {Number} tx.
 * @param {Number} ty.
 * @return {Array} vector.
 */ matrix.affine = function(point, tx, ty) {
    matrix._check2DVector(point);
    var transformation = [
        [
            1,
            0,
            tx
        ],
        [
            0,
            1,
            ty
        ],
        [
            0,
            0,
            1
        ]
    ];
    var newpoint = [
        [
            point[0][0]
        ],
        [
            point[1][0]
        ],
        [
            1
        ]
    ];
    var transformed = matrix.multiply(transformation, newpoint);
    return [
        [
            transformed[0][0]
        ],
        [
            transformed[1][0]
        ]
    ];
};
/**
 * Scales a row of a matrix by a factor and returns the updated matrix.
 * Used in row reduction functions.
 *
 * @param {Array} matrix.
 * @param {Number} row.
 * @param {Number} scale.
 */ matrix.rowScale = function(m, row, scale) {
    var result = new Array(m.length);
    for(var i = 0; i < m.length; i++){
        result[i] = new Array(m[i].length);
        for(var j = 0; j < m[i].length; j++)if (i === row) result[i][j] = scale * m[i][j];
        else result[i][j] = m[i][j];
    }
    return result;
};
/**
 * Swaps two rows of a matrix  and returns the updated matrix.
 * Used in row reduction functions.
 *
 * @param {Array} matrix.
 * @param {Number} row1.
 * @param {Number} row2.
 */ matrix.rowSwitch = function(m, row1, row2) {
    var result = new Array(m.length);
    for(var i = 0; i < m.length; i++){
        result[i] = new Array(m[i].length);
        for(var j = 0; j < m[i].length; j++){
            if (i === row1) result[i][j] = m[row2][j];
            else if (i === row2) result[i][j] = m[row1][j];
            else result[i][j] = m[i][j];
        }
    }
    return result;
};
/**
 * Adds a multiple of one row to another row
 * in a matrix and returns the updated matrix.
 * Used in row reduction functions.
 *
 * @param {Array} matrix.
 * @param {Number} row1.
 * @param {Number} row2.
 */ matrix.rowAddMultiple = function(m, from, to, scale) {
    var result = new Array(m.length);
    for(var i = 0; i < m.length; i++){
        result[i] = new Array(m[i].length);
        for(var j = 0; j < m[i].length; j++)if (i === to) result[to][j] = m[to][j] + scale * m[from][j];
        else result[i][j] = m[i][j];
    }
    return result;
};
/**
 * Gauss-Jordan Elimination
 *
 * @param {Array} matrix.
 * @param {Number} epsilon.
 * @return {Array} RREF matrix.
 */ matrix.GaussJordanEliminate = function(m, epsilon) {
    // Translated from:
    // http://elonen.iki.fi/code/misc-notes/python-gaussj/index.html
    var eps = typeof epsilon === 'undefined' ? 0.0000000001 : epsilon;
    var h = m.length;
    var w = m[0].length;
    var y = -1;
    var y2, x, c;
    while(++y < h){
        // Pivot.
        var maxrow = y;
        y2 = y;
        while(++y2 < h)if (Math.abs(m[y2][y]) > Math.abs(m[maxrow][y])) maxrow = y2;
        var tmp = m[y];
        m[y] = m[maxrow];
        m[maxrow] = tmp;
        // Singular
        if (Math.abs(m[y][y]) <= eps) return m;
        // Eliminate column
        y2 = y;
        while(++y2 < h){
            c = m[y2][y] / m[y][y];
            x = y - 1;
            while(++x < w)m[y2][x] -= m[y][x] * c;
        }
    }
    // Backsubstitute.
    y = h;
    while(--y >= 0){
        c = m[y][y];
        y2 = -1;
        while(++y2 < y){
            x = w;
            while(--x >= y)m[y2][x] -= m[y][x] * m[y2][y] / c;
        }
        m[y][y] /= c;
        // Normalize row
        x = h - 1;
        while(++x < w)m[y][x] /= c;
    }
    return m;
};
/**
 * Alias to Gauss-Jordan Elimination
 *
 * @param {Array} matrix.
 * @param {Number} epsilon.
 * @return {Array} RREF matrix.
 */ matrix.rowReduce = function(m, epsilon) {
    return matrix.GaussJordanEliminate(m, epsilon);
};
/**
 * nxn matrix inversion
 *
 * @param {Array} matrix.
 * @return {Array} inverted matrix.
 */ matrix.inverse = function(m) {
    if (!matrix.isSquare(m)) throw new Error(ERROR_MATRIX_NOT_SQUARE);
    var n = m.length, identity = matrix.identity(n), i;
    // AI
    for(i = 0; i < n; i++)m[i] = m[i].concat(identity[i]);
    // inv(IA)
    m = matrix.GaussJordanEliminate(m);
    // inv(A)
    for(i = 0; i < n; i++)m[i] = m[i].slice(n);
    return m;
};
/**
 * Get a column of a matrix as a vector.
 *
 * @param {Array} matrix
 * @param {Int} column number
 * @return {Array} column
 */ matrix.getCol = function(M, n) {
    var result = new Array(M.length);
    if (n < 0) throw new Error('The specified column must be a positive integer.');
    else if (n >= M[0].length) throw new Error('The specified column must be between 0 and the number of columns - 1.');
    for(var i = 0; i < M.length; i++)result[i] = M[i][n];
    return result;
};
/**
 * Reorder the rows of a matrix based off an array of numbers.
 *
 * @param {Array} matrix
 * @param {Array} desired re-ordering
 * @return {Array} reordered matrix
 */ matrix.reorderRows = function(M, L) {
    var result = [];
    if (L === undefined) throw new Error('A reordering array must be entered.');
    else if (L.length !== M.length) throw new Error('The reordered matrix must have the same number of rows as the original matrix.');
    for(var i = 0; i < L.length; i++){
        if (L[i] < 0) throw new Error('The desired order of the rows must be positive integers.');
        else if (L[i] >= L.length) throw new Error('The desired order of the rows must start at 0 and end at the number of rows - 1.');
        else result.push(M[L[i]]);
    }
    return result;
};
/**
 * Reorder the columns of a matrix based off an array of numbers.
 *
 * @param {Array} matrix
 * @param {Array} desired re-ordering
 * @return {Array} reordered matrix
 */ matrix.reorderCols = function(M, L) {
    var result = [];
    if (L === undefined) throw new Error('Please enter a desired reordering array.');
    else if (L.length !== M[0].length) throw new Error('The reordered matrix must have the same number of columns as the original matrix.');
    for(var i = 0; i < L.length; i++){
        if (L[i] < 0) throw new Error('The desired order of the columns must be positive integers.');
        else if (L[i] >= L.length) throw new Error('The desired order of the columns must start at 0 and end at the number of columns - 1.');
        else result.push(matrix.getCol(M, L[i]));
    }
    return matrix.transpose(result);
};
/**
 * Reverse the rows of a matrix.
 *
 * @param {Array} matrix
 * @return {Array} reversed matrix
 */ matrix.reverseRows = function(M) {
    var L = [];
    for(var i = M.length - 1; i > -1; i--)L.push(i);
    return matrix.reorderRows(M, L);
};
/**
 * Reverse the columns of a matrix.
 *
 * @param {Array} matrix
 * @return {Array} reversed matrix
 */ matrix.reverseCols = function(M) {
    var L = [];
    for(var i = M.length - 1; i > -1; i--)L.push(i);
    return matrix.reorderCols(M, L);
};
/**
 * Create a n x m matrix of zeros.
 *
 * @param {Int} number of rows
 * @param {Int} number of columns
 * @return {Array} matrix
 */ matrix.zeros = function(n, m) {
    var M = new Array(n);
    if (n < 1 || m < 1) throw new Error('The matrix dimensions must be positive integers.');
    n = Math.ceil(n);
    m = Math.ceil(m);
    for(var i = 0; i < n; i++){
        var empty = new Array(m);
        for(var j = 0; j < m; j++)empty[j] = 0;
        M[i] = empty;
    }
    return M;
};
/**
 * Create a zigzag matrix. point represents the starting corner,
 * dir represents which direction to begin moving in. There are
 * 8 possible permutations for this. Rounds dimension upwards.
 *
 * @param {Int} size of (square) matrix
 * @param {String} corner (TL,TR,BL,BR)
 * @param {String} direction (V,H)
 * @return {Array} zigzag matrix.
 */ matrix.zigzag = function(n, point, dir) {
    if (n <= 1) throw new Error('Matrix size must be at least 2x2.');
    n = Math.ceil(n);
    var mat = matrix.zeros(n, n);
    //create one kind of permutation - all other permutations can be 
    //created from this particular permutation through transformations
    var BRH = function(M) {
        var jump = false, tl = n * n, br = 1, inc = 1, row, col, val, i, j;
        M[0][0] = tl;
        M[n - 1][n - 1] = br;
        for(i = 1; i < n; i++){
            //generate top/bottom row
            if (jump) {
                tl -= 4 * inc;
                br += 4 * inc;
                inc++;
            } else {
                tl--;
                br++;
            }
            M[0][i] = tl;
            M[n - 1][n - 1 - i] = br;
            jump = !jump;
        }
        var dec = true;
        for(i = 1; i < n; i++){
            //iterate diagonally from top row
            row = 0;
            col = i;
            val = M[row][col];
            for(j = 1; j < i + 1; j++){
                if (dec) val -= 1;
                else val += 1;
                row++;
                col--;
                M[row][col] = val;
            }
            dec = !dec;
        }
        if (n % 2 === 0) dec = true;
        else dec = false;
        for(i = 1; i < n - 1; i++){
            //iterate diagonally from bottom row
            row = n - 1;
            col = i;
            val = M[row][col];
            for(j = 1; j < n - i; j++){
                if (dec) val--;
                else val++;
                row--;
                col++;
                M[row][col] = val;
            }
            dec = !dec;
        }
        return M;
    };
    var BRV = function(M) {
        return matrix.transpose(BRH(M));
    };
    var BLH = function(M) {
        return matrix.reverseCols(BRH(M));
    };
    var BLV = function(M) {
        return matrix.reverseRows(TLV(BLH(M)));
    };
    var TRH = function(M) {
        return matrix.reverseRows(BRH(M));
    };
    var TRV = function(M) {
        return matrix.reverseRows(BRV(M));
    };
    var TLH = function(M) {
        return matrix.reverseCols(matrix.reverseRows(BRH(M)));
    };
    var TLV = function(M) {
        return matrix.transpose(TLH(M));
    };
    if (point === 'BR' && dir === 'H') return BRH(mat);
    else if (point === 'BR' && dir === 'V') return BRV(mat);
    else if (point === 'BL' && dir === 'H') return BLH(mat);
    else if (point === 'BL' && dir === 'V') return BLV(mat);
    else if (point === 'TR' && dir === 'H') return TRH(mat);
    else if (point === 'TR' && dir === 'V') return TRV(mat);
    else if (point === 'TL' && dir === 'H') return TLH(mat);
    else if (point === 'TL' && dir === 'V') return TLV(mat);
    else throw new Error('Enter the direction (V,H) and corner (BR,BL,TR,TL) correctly.');
};
/**
 * Calculate the p-norm of a vector. Specific cases include:
 *   - Infinity (largest absolute entry)
 *   - -Infinity (smallest absolute entry)
 *
 * @param {Array} vector
 * @param {Number} the value of p (norm order)
 * @return {Number} the p-norm of v
 */ matrix.vectorNorm = function(v, p) {
    // calculate the p'th norm of a vector v
    if (!Array.isArray(v) || v.length === 0) throw new Error('Vector must be an array of at least length 1.');
    else if (typeof p !== 'undefined' && typeof p !== 'number') throw new Error('Norm order must be a number.');
    p = typeof p === 'undefined' ? 2 : p;
    var n = v.length, ans = 0, term, i;
    switch(p){
        case Infinity:
            for(i = 0; i < n; i++){
                term = Math.abs(v[i]);
                if (term > ans) ans = term;
            }
            break;
        case -Infinity:
            ans = Infinity;
            for(i = 0; i < n; i++){
                term = Math.abs(v[i]);
                if (term < ans) ans = term;
            }
            break;
        default:
            for(i = 0; i < n; i++)ans += Math.pow(Math.abs(v[i]), p);
            ans = Math.pow(ans, 1 / p);
            break;
    }
    return ans;
};
/**
 * Calculate the p-norm of a matrix. Specific cases include:
 *   - Infinity (largest absolute row)
 *   - -Infinity (smallest absolute row)
 *   - 1 (largest absolute column)
 *   - -1 (smallest absolute column)
 *   - 2 (largest singular value)
 *   - -2 (smallest singular value)
 *   - null (Frobenius norm)
 *
 * @param {Array} vector
 * @param {Number} the value of p (norm order)
 * @return {Number} the p-norm of M
 */ matrix.matrixNorm = function(M, p) {
    if (!Array.isArray(M) || M.length === 0 || !Array.isArray(M[0])) throw new Error('Matrix must be an array of at least length 1.');
    else if (typeof p !== 'undefined' && typeof p !== 'number' && p !== null) throw new Error('Norm order must be a number or null.');
    p = typeof p === 'undefined' ? null : p;
    var m = M.length, n = M[0].length, ans = 0, term, i, j;
    switch(p){
        // the largest value when absolute-ing and summing each row
        case Infinity:
            for(i = 0; i < m; i++){
                term = 0;
                for(j = 0; j < n; j++)term += Math.abs(M[i][j]);
                if (term > ans) ans = term;
            }
            break;
        // the smallest value when absolute-ing and summing each row
        case -Infinity:
            ans = Infinity;
            for(i = 0; i < m; i++){
                term = 0;
                for(j = 0; j < n; j++)term += Math.abs(M[i][j]);
                if (term < ans) ans = term;
            }
            break;
        // the largest value when absolute-ing and summing each column
        case 1:
            for(i = 0; i < n; i++){
                term = 0;
                for(j = 0; j < m; j++)term += Math.abs(M[j][i]);
                if (term > ans) ans = term;
            }
            break;
        // the smallest value when absolute-ing and summing each column
        case -1:
            ans = Infinity;
            for(i = 0; i < n; i++){
                term = 0;
                for(j = 0; j < m; j++)term += Math.abs(M[j][i]);
                if (term < ans) ans = term;
            }
            break;
        // the Frobenius norm
        case null:
            for(i = 0; i < m; i++)for(j = 0; j < n; j++)ans += Math.pow(M[i][j], 2);
            ans = Math.pow(ans, 0.5);
            break;
        // largest singular value
        case 2:
            throw new Error("Singular values are not yet supported in numbers.js.");
        // smallest singular value
        case -2:
            throw new Error("Singular values are not yet supported in numbers.js.");
        // entry-wise norm; analogous to that of the entry-wise vector norm.
        default:
            for(i = 0; i < m; i++)for(j = 0; j < n; j++)ans += Math.pow(Math.abs(M[i][j]), p);
            ans = Math.pow(ans, 1 / p);
    }
    return ans;
};
/**
 * Determines if a matrix has an upper bandwidth of q.
 *
 * @param {Array} matrix
 * @param {Number} upper bandwidth
 * @return {Boolean} true if upper bandwidth is q; false otherwise
 */ matrix.isUpperBand = function(M, q) {
    if (!Array.isArray(M) || !Array.isArray(M[0]) || M.length < 2) throw new Error('Matrix must be an array of at least dimension 2.');
    else if (typeof q !== 'number' || q < 0 || q % 1 !== 0) throw new Error('Upper bandwidth must be a nonzero integer.');
    var result = true, n = M[0].length, cnt = 0;
    for(var i = q + 1; i < n; i++){
        if (M[cnt][i] !== 0) {
            result = false;
            break;
        }
        cnt++;
    }
    return result;
};
/**
 * Determines if a matrix has an lower bandwidth of p.
 *
 * @param {Array} matrix
 * @param {Number} lower bandwidth
 * @return {Boolean} true if lower bandwidth is p; false otherwise
 */ matrix.isLowerBand = function(M, p) {
    if (!Array.isArray(M) || !Array.isArray(M[0]) || M.length < 2) throw new Error('Matrix must be an array of at least dimension 2.');
    else if (typeof p !== 'number' || p < 0 || p % 1 !== 0) throw new Error('Lower bandwidth must be a nonzero integer.');
    var result = true, m = M.length, cnt = 0;
    for(var i = p + 1; i < m; i++){
        if (M[i][cnt] !== 0) {
            result = false;
            break;
        }
        cnt++;
    }
    return result;
};
/**
 * Add all of the elements in an array together except for the i'th one.
 * This is a helper function for determining diagonal dominance, and it
 * should be noted that each element is passed to Math.abs() beforehand.
 *
 * @param {Array} array
 * @param {Int} index of element to ignore.
 * @return {Number} sum.
 */ var sumNondiagonalElements = function(arr, i) {
    var sum = 0, j;
    for(j = 0; j < i; j++)sum += Math.abs(arr[j]);
    for(j = i + 1; j < arr.length; j++)sum += Math.abs(arr[j]);
    return sum;
};
/**
 * Determines if a matrix is (weak) row diagonally-dominant.
 *
 * @param {Array} matrix
 * @return {Boolean} true if so, false otherwise.
 */ matrix.isRowDD = function(M) {
    var n = M.length;
    if (!matrix.isSquare(M)) throw new Error(ERROR_MATRIX_NOT_SQUARE);
    for(var i = 0; i < n; i++){
        var row = M[i], diag = row[i], sum = sumNondiagonalElements(row, i);
        if (Math.abs(diag) < sum) return false;
    }
    return true;
};
/**
 * Determines if a matrix is strictly row diagonally-dominant.
 *
 * @param {Array} matrix
 * @return {Boolean} true if so, false otherwise.
 */ matrix.isStrictlyRowDD = function(M) {
    if (!matrix.isSquare(M)) throw new Error(ERROR_MATRIX_NOT_SQUARE);
    var n = M.length;
    for(var i = 0; i < n; i++){
        var row = M[i], diag = row[i], sum = sumNondiagonalElements(row, i);
        if (Math.abs(diag) <= sum) return false;
    }
    return true;
};
/**
 * Determines if a matrix is (weak) column diagonally-dominant.
 *
 * @param {Array} matrix
 * @return {Boolean} true if so, false otherwise.
 */ matrix.isColumnDD = function(M) {
    if (!matrix.isSquare) throw new Error(ERROR_MATRIX_NOT_SQUARE);
    var n = M.length;
    for(var i = 0; i < n; i++){
        var col = matrix.getCol(M, i), diag = col[i], sum = sumNondiagonalElements(col, i);
        if (Math.abs(diag) < sum) return false;
    }
    return true;
};
/**
 * Determines if a matrix is strictly column diagonally-dominant.
 *
 * @param {Array} matrix
 * @return {Boolean} true if so, false otherwise.
 */ matrix.isStrictlyColumnDD = function(M) {
    if (!matrix.isSquare(M)) throw new Error(ERROR_MATRIX_NOT_SQUARE);
    var n = M.length;
    for(var i = 0; i < n; i++){
        var col = matrix.getCol(M, i), diag = col[i], sum = sumNondiagonalElements(col, i);
        if (Math.abs(diag) <= sum) return false;
    }
    return true;
};
/**
 * Applies a function to every element of a vector or matrix (i.e. map).
 * The function must take only one parameter.
 *
 * @param {Array} matrix
 * @param {Function} function to apply to each element
 * @return {Array} matrix operated on
 */ matrix.map = function(M, f) {
    // M is n-by-m (n rows, m columns)
    var n = M.length, m = M[0].length, i, j;
    var res = matrix.deepCopy(M);
    for(i = 0; i < n; i++)for(j = 0; j < m; j++)res[i][j] = f(M[i][j]);
    return res;
};
/**
 * Applies a function to every element of a vector or matrix (i.e. map).
 * Identical to matrix.map, except that the function passed can take an
 * arbitrary number of parameters (minimum of 1). Any extra arguments
 * passed will be * passed to the apply-er function.
 *
 * @param {Array} matrix
 * @param {Function} function to apply to each element
 * @return {Array} matrix operated on
 */ matrix.mapMulti = function(M, f) {
    // convert arguments object to an array, ignoring M and f
    // extraArgs is of the form [x, arg0, arg1, ...]
    var extraArgs = new Array(Object.keys(arguments).length - 1);
    for(var k = 1; k < extraArgs.length; k++)extraArgs[k] = arguments[k + 1];
    var n = M.length, m = M[0].length, i, j;
    var res = matrix.deepCopy(M);
    for(i = 0; i < n; i++)for(j = 0; j < m; j++){
        extraArgs[0] = M[i][j];
        res[i][j] = f.apply(null, extraArgs);
    }
    return res;
};

},{}],"6uKb3":[function(require,module,exports) {
/**
 * prime.js
 * http://github.com/sjkaliski/numbers.js
 *
 * Copyright 2012 Stephen Kaliski
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var basic = require('./basic');
var prime = exports;
/**
 * Determine if number is prime.
 * Adopted from http://www.javascripter.net/faq/numberisprime.htm
 *
 * @param {Number} number to evaluate.
 * @return {Boolean} return true if value is prime. false otherwise.
 */ prime.simple = function(n) {
    if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) return false;
    if (n % 2 === 0) return n === 2;
    if (n % 3 === 0) return n === 3;
    for(var i = 5, m = Math.sqrt(n); i <= m; i += 6){
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
};
/**
 * Returns the prime factors of a number.
 * More info (http://bateru.com/news/2012/05/code-of-the-day-javascript-prime-factors-of-a-number/)
 * Taken from Ratio.js
 *
 * @param {Number} num
 * @return {Array} an array of numbers
 * @example prime.factorization(20).join(',') === "2,2,5"
 **/ prime.factorization = function(num) {
    num = Math.floor(num);
    var root;
    var factors = [];
    var x;
    var sqrt = Math.sqrt;
    var doLoop = 1 < num && isFinite(num);
    while(doLoop){
        root = sqrt(num);
        x = 2;
        if (num % x) {
            x = 3;
            while(num % x && (x += 2) < root)continue;
        }
        x = root < x ? num : x;
        factors.push(x);
        doLoop = x !== num;
        num /= x;
    }
    return factors;
};
/**
 * Determine if a number is prime in Polynomial time, using a randomized algorithm.
 * http://en.wikipedia.org/wiki/Miller-Rabin_primality_test
 *
 * @param {Number} number to Evaluate.
 * @param {Number} number to Determine accuracy rate (number of trials) default value = 20.
 * @return {Boolean} return true if value is prime. false otherwise.
 */ prime.millerRabin = function(n, k) {
    if (arguments.length === 1) k = 20;
    if (n === 2) return true;
    if (!basic.isInt(n) || n <= 1 || n % 2 === 0) return false;
    var s = 0;
    var d = n - 1;
    while(true){
        var dm = basic.divMod(d, 2);
        var quotient = dm[0];
        var remainder = dm[1];
        if (remainder === 1) break;
        s += 1;
        d = quotient;
    }
    var tryComposite = function(a) {
        if (basic.powerMod(a, d, n) === 1) return false;
        for(var i = 0; i < s; i++){
            if (basic.powerMod(a, Math.pow(2, i) * d, n) === n - 1) return false;
        }
        return true;
    };
    for(var i1 = 0; i1 < k; i1++){
        var a1 = 2 + Math.floor(Math.random() * (n - 2 - 2));
        if (tryComposite(a1)) return false;
    }
    return true;
};
/**
 * Return a list of prime numbers from 1...n, inclusive.
 *
 * @param {Number} upper limit of test n.
 * @return {Array} list of values that are prime up to n.
 */ prime.sieve = function(n) {
    if (n < 2) return [];
    var result = [
        2
    ];
    var i, j;
    for(i = 3; i <= n; i++){
        var notMultiple = false;
        for(j in result)if (result.hasOwnProperty(j)) notMultiple = notMultiple || 0 === i % result[j];
        if (!notMultiple) result.push(i);
    }
    return result;
};
/**
 * Determine if two numbers are coprime.
 *
 * @param {Number} number.
 * @param {Number} number.
 * @return {Boolean} whether the values are coprime or not.
 */ prime.coprime = function(a, b) {
    return basic.gcd(a, b) === 1;
};
/**
 * Determine if a number is a perfect power.
 * Please note that this method does not find the minimal value of k where
 * m^k = n
 * http://en.wikipedia.org/wiki/Perfect_power
 *
 * @param {Number} value in question
 * @return {Array|Boolean} [m, k] if it is a perfect power, false otherwise
 */ prime.getPerfectPower = function(n) {
    var test = prime.getPrimePower(n);
    if (test && test[1] > 1) return test;
    return false;
};
/**
 * Determine if a number is a prime power and return the prime and the power.
 * http://en.wikipedia.org/wiki/Prime_power
 *
 * @param {Number} value in question
 * @return {Array|Boolean}  if it is a prime power, return [prime, power].
 */ prime.getPrimePower = function(n) {
    if (n < 2) return false;
    if (prime.millerRabin(n)) return [
        n,
        1
    ];
    if (n % 2 === 0) return [
        2,
        n.toString(2).length - 1
    ];
    var factors = prime.factorization(n);
    if (!factors) return false;
    var len = factors.length;
    for(var i = 0; i < len; i++){
        var t = 0, p = 0;
        while(t <= n){
            t = Math.pow(factors[i], p);
            if (t / n === 1) return [
                factors[i],
                p
            ];
            p++;
        }
    }
    return false;
};

},{"./basic":"dNgX5"}],"9ZZfF":[function(require,module,exports) {
/**
 * statistic.js
 * http://github.com/sjkaliski/numbers.js
 *
 * Copyright 2012 Stephen Kaliski
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var basic = require('./basic');
var statistic = exports;
/**
 * Calculate the mean value of a set of numbers in array.
 *
 * @param {Array} set of values.
 * @return {Number} mean value.
 */ statistic.mean = function(arr) {
    var count = arr.length;
    var sum = basic.sum(arr);
    return sum / count;
};
/**
 * Calculate the median value of a set of numbers in array.
 *
 * @param {Array} set of values.
 * @return {Number} median value.
 */ statistic.median = function(arr) {
    return statistic.quantile(arr, 1, 2);
};
/**
 * Calculate the mode value of a set of numbers in array.
 *
 * @param {Array} set of values.
 * @return {Number} mode value.
 */ statistic.mode = function(arr) {
    var counts = {};
    for(var i = 0, n = arr.length; i < n; i++)if (counts[arr[i]] === undefined) counts[arr[i]] = 0;
    else counts[arr[i]]++;
    var highest;
    for(var number in counts){
        if (counts.hasOwnProperty(number)) {
            if (highest === undefined || counts[number] > counts[highest]) highest = number;
        }
    }
    return Number(highest);
};
/**
 * Calculate the kth q-quantile of a set of numbers in an array.
 * As per http://en.wikipedia.org/wiki/Quantile#Quantiles_of_a_population
 * Ex: Median is 1st 2-quantile
 * Ex: Upper quartile is 3rd 4-quantile
 *
 * @param {Array} set of values.
 * @param {Number} index of quantile.
 * @param {Number} number of quantiles.
 * @return {Number} kth q-quantile of values.
 */ statistic.quantile = function(arr, k, q) {
    var sorted, count, index;
    if (k === 0) return Math.min.apply(null, arr);
    if (k === q) return Math.max.apply(null, arr);
    sorted = arr.slice(0);
    sorted.sort(function(a, b) {
        return a - b;
    });
    count = sorted.length;
    index = count * k / q;
    if (index % 1 === 0) return 0.5 * sorted[index - 1] + 0.5 * sorted[index];
    return sorted[Math.floor(index)];
};
/**
 * Return a set of summary statistics provided an array.
 *
 * @return {Object} summary statistics.
 */ statistic.report = function(array) {
    return {
        mean: statistic.mean(array),
        firstQuartile: statistic.quantile(array, 1, 4),
        median: statistic.median(array),
        thirdQuartile: statistic.quantile(array, 3, 4),
        standardDev: statistic.standardDev(array)
    };
};
/**
 * Evaluate the standard deviation for a set of values.
 *
 * @param {Array} set of values.
 * @return {Number} standard deviation.
 */ statistic.standardDev = function(arr) {
    var count = arr.length;
    var mean = statistic.mean(arr);
    var squaredArr = [];
    for(var i = 0; i < arr.length; i++)squaredArr[i] = Math.pow(arr[i] - mean, 2);
    return Math.sqrt(1 / count * basic.sum(squaredArr));
};
/**
 * Evaluate the correlation amongst a set of values.
 *
 * @param {Array} set of values.
 * @return {Number} correlation.
 */ statistic.correlation = function(arrX, arrY) {
    if (arrX.length === arrY.length) {
        var covarXY = statistic.covariance(arrX, arrY);
        var stdDevX = statistic.standardDev(arrX);
        var stdDevY = statistic.standardDev(arrY);
        return covarXY / (stdDevX * stdDevY);
    } else throw new Error('Array mismatch');
};
/**
 * Calculate the Coefficient of Determination of a dataset and regression line.
 *
 * @param {Array} Source data.
 * @param {Array} Regression data.
 * @return {Number} A number between 0 and 1.0 that represents how well the regression line fits the data.
 */ statistic.rSquared = function(source, regression) {
    var residualSumOfSquares = basic.sum(source.map(function(d, i) {
        return basic.square(d - regression[i]);
    }));
    var totalSumOfSquares = basic.sum(source.map(function(d) {
        return basic.square(d - statistic.mean(source));
    }));
    return 1 - residualSumOfSquares / totalSumOfSquares;
};
/**
 * Create a function to calculate the exponential regression of a dataset.
 *
 * @param {Array} set of values.
 * @return {Function} function to accept X values and return corresponding regression Y values.
 */ statistic.exponentialRegression = function(arrY) {
    var n = arrY.length;
    var arrX = basic.range(1, n);
    var xSum = basic.sum(arrX);
    var yLog = arrY.map(function(d) {
        return Math.log(d);
    });
    var xSquared = arrX.map(function(d) {
        return d * d;
    });
    var xSquaredSum = basic.sum(xSquared);
    var yLogSum = basic.sum(yLog);
    var xyLog = arrX.map(function(d, i) {
        return d * yLog[i];
    });
    var xyLogSum = basic.sum(xyLog);
    var a = (yLogSum * xSquaredSum - xSum * xyLogSum) / (n * xSquaredSum - xSum * xSum);
    var b = (n * xyLogSum - xSum * yLogSum) / (n * xSquaredSum - xSum * xSum);
    var fn = function(x) {
        if (typeof x === 'number') return Math.exp(a) * Math.exp(b * x);
        else return x.map(function(d) {
            return Math.exp(a) * Math.exp(b * d);
        });
    };
    fn.rSquared = statistic.rSquared(arrY, arrX.map(fn));
    return fn;
};
/**
 * Create a function to calculate the linear regression of a dataset.
 *
 * @param {Array} X array.
 * @param {Array} Y array.
 * @return {Function} A function which given X or array of X values will return Y.
 */ statistic.linearRegression = function(arrX, arrY) {
    var n = arrX.length;
    var xSum = basic.sum(arrX);
    var ySum = basic.sum(arrY);
    var xySum = basic.sum(arrX.map(function(d, i) {
        return d * arrY[i];
    }));
    var xSquaredSum = basic.sum(arrX.map(function(d) {
        return d * d;
    }));
    var xMean = statistic.mean(arrX);
    var yMean = statistic.mean(arrY);
    var b = (xySum - 1 / n * xSum * ySum) / (xSquaredSum - 1 / n * (xSum * xSum));
    var a = yMean - b * xMean;
    return function(x) {
        if (typeof x === 'number') return a + b * x;
        else return x.map(function(d) {
            return a + b * d;
        });
    };
};
/**
 * Evaluate the covariance amongst 2 sets.
 *
 * @param {Array} set 1 of values.
 * @param {Array} set 2 of values.
 * @return {Number} covariance.
 */ statistic.covariance = function(set1, set2) {
    if (set1.length === set2.length) {
        var n = set1.length;
        var total = 0;
        var sum1 = basic.sum(set1);
        var sum2 = basic.sum(set2);
        for(var i = 0; i < n; i++)total += set1[i] * set2[i];
        return (total - sum1 * sum2 / n) / n;
    } else throw new Error('Array mismatch');
};

},{"./basic":"dNgX5"}],"4H3aQ":[function(require,module,exports) {
/**
 * generators.js
 * http://github.com/sjkaliski/numbers.js
 *
 * Copyright 2012 Stephen Kaliski, Kartik Talwar
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var generate = exports;
/**
 * Fast Fibonacci Implementation
 *
 * @param {number} The nth Fibonacci number to calculate
 * @return {number|undefined} The nth Fibonacci number
 */ generate.fibonacci = function(n1) {
    // Adapted from
    // http://bosker.wordpress.com/2011/04/29/the-worst-algorithm-in-the-world/
    if (!isNaN(n1)) {
        var bitSystem = function(n) {
            var bit, bits = [];
            while(n > 0){
                bit = n < 2 ? n : n % 2;
                n = Math.floor(n / 2);
                bits.unshift(bit);
            }
            return bits;
        };
        var a = 1;
        var b = 0;
        var c = 1;
        var system = bitSystem(n1);
        var temp;
        for(var i = 0; i < system.length; i++){
            var bit1 = system[i];
            if (bit1) {
                temp = [
                    (a + c) * b,
                    b * b + c * c
                ];
                a = temp[0];
                b = temp[1];
            } else {
                temp = [
                    a * a + b * b,
                    (a + c) * b
                ];
                a = temp[0];
                b = temp[1];
            }
            c = a + b;
        }
        return b;
    }
};
/**
 * Build an array of numbers in a Collatz sequence
 *
 * @param {number} The number for which to build a Collatz sequence
 * @return {Array|undefined} An array of numbers in a Collatz sequence
 */ generate.collatz = function(n2) {
    if (!isNaN(n2)) {
        var sequence = [];
        sequence.push(n2);
        (function makeSequence(n) {
            if (n !== 1) {
                if (n % 2 === 0) sequence.push(n / 2);
                else sequence.push(3 * n + 1);
                makeSequence(sequence[sequence.length - 1]);
            }
        })(n2);
        return sequence;
    }
};

},{}],"96p7V":[function(require,module,exports) {
var random = exports;
// random number generator.
var rGen = Math.random;
/**
 * Set the pseudo random number generator used by the random module.
 *
 * @param {Function} Random number generator
 */ random.setGenerator = function(fn) {
    if (typeof fn !== "function") throw new Error("Must pass a function");
    rGen = fn;
};
/**
 * Return a random sample of values over a set of bounds with
 * a specified quantity.
 *
 * @param {Number} lower bound.
 * @param {Number} upper bound.
 * @param {Number} quantity of elements in random sample.
 * @return {Array} random sample.
 */ random.sample = function(lower, upper, n) {
    var sample = [];
    sample.length = n;
    for(var i = 0; i < n; i++)sample[i] = lower + (upper - lower) * rGen();
    return sample;
};
/**
 * A pseudo-random number sampling method for generating pairs of independent,
 * standard, normally distributed (zero expectation, unit variance) random
 * numbers, given a source of uniformly distributed random numbers.
 * http://en.wikipedia.org/wiki/Box%E2%80%93Muller_transform
 *
 * @param {Number} mu or mean
 * @param {Number} sigma or standard deviation
 * @return {Number} a value that is part of a normal distribution.
 */ random.boxMullerTransform = function(mu, sigma) {
    if (arguments.length <= 1) sigma = 1;
    if (arguments.length === 0) mu = 0;
    var u = 0, v = 0, s;
    do {
        u = rGen() * 2 - 1;
        v = rGen() * 2 - 1;
        s = u * u + v * v;
    }while (s === 0 || s > 1)
    var c = Math.sqrt(-2 * Math.log(s) / s), x = u * c, y = v * c;
    x = mu + x * sigma;
    y = mu + y * sigma;
    return [
        x,
        y
    ];
};
/**
 * A Random number that is along an irwin hall distribution.
 * http://en.wikipedia.org/wiki/Irwin-Hall_distribution
 *
 * @param {Number} max possible sum
 * @param {Number} number to subtract
 * @return {Number} random number along an irwin hall distribution.
 */ random.irwinHall = function(n, sub) {
    if (arguments.length === 1) sub = 0;
    var sum = 0;
    for(var i = 0; i < n; i++)sum += rGen();
    return sum - sub;
};
/**
 * Returns a random value along a bates distribution from [a, b] or [0, 1].
 * http://en.wikipedia.org/wiki/Bates_distribution
 *
 * @param {Number} number of times summing
 * @param {Number} random maximum value (default is 1)
 * @param {Number} random minimum value (default is 0)
 * @return {Number} random number along an bates distribution.
 */ random.bates = function(n, b, a) {
    if (arguments.length <= 2) a = 0;
    if (arguments.length === 1) b = 1;
    var sum = 0;
    for(var i = 0; i < n; i++)sum += (b - a) * rGen() + a;
    return sum / n;
};
random.distribution = {};
/**
 * Returns an array of size n that is an approximate normal distribution
 *
 * @param {Number} n size of returned array
 * @param {Number} mu or mean
 * @param {Number} sigma or standard deviation
 * @return {Array} array of size n of a normal distribution
 */ random.distribution.normal = function(n, mu, sigma) {
    if (arguments.length <= 2) sigma = 1;
    if (arguments.length === 1) mu = 0;
    return random.distribution.boxMuller(n, mu, sigma);
};
/**
 * Returns an array of size n that is an approximate log normal distribution
 *
 * @param {Number} n size of returned array
 * @param {Number} mu or mean
 * @param {Number} sigma or standard deviation
 * @return {Array} array of size n of a log normal distribution
 */ random.distribution.logNormal = function(n, mu, sigma) {
    if (arguments.length <= 2) sigma = 1;
    if (arguments.length === 1) mu = 0;
    var exponential = function(x) {
        return Math.exp(x);
    };
    return random.distribution.boxMuller(n, mu, sigma).map(exponential);
};
/**
 * Returns an array of size n that is a normal distribution
 * leveraging the Box Muller Transform
 * http://en.wikipedia.org/wiki/Box%E2%80%93Muller_transform
 *
 * @param {Number} n size of returned array
 * @param {Number} mu or mean
 * @param {Number} sigma or standard deviation
 * @param {Number} determine if the distribution will be polar coordinates.
 * @return {Array} array of size n of a normal distribution
 */ random.distribution.boxMuller = function(n, mu, sigma, rc) {
    if (arguments.length <= 3) rc = false;
    if (arguments.length <= 2) sigma = 1;
    if (arguments.length === 1) mu = 0;
    var results = [];
    for(var i = 0; i < n; i++){
        var randomBMT = random.boxMullerTransform(mu, sigma);
        results.push(rc ? randomBMT : randomBMT[0]);
    }
    return results;
};
/**
 * Returns an array of n that is an irwin hall distribution.
 * http://en.wikipedia.org/wiki/Irwin-Hall_distribution
 *
 * @param {Number} length of array
 * @param {Number} irwinHall max sum value (default is n)
 * @param {Number} irwinHall subtraction value (default is 0)
 * @return {Array} irwin hall distribution from [a, b]
 */ random.distribution.irwinHall = function(n, m, sub) {
    if (arguments.length <= 2) sub = 0;
    if (arguments.length === 1) m = n;
    var results = new Array(n);
    for(var i = 0; i < n; i++)results[i] = random.irwinHall(m, sub);
    return results;
};
/**
 * An approach to create a normal distribution,
 * that relies on the central limit theorem,
 * resulting in an approximately standard normal distribution
 * with bounds of (-6, 6)
 *
 * @param {Number} length of array
 * @return {Array} an array of an approximate normal distribution from [-6, 6] of length n.
 */ random.distribution.irwinHallNormal = function(n) {
    return random.distribution.irwinHall(n, 12, 6);
};
/**
 * Returns an array of n that is a bates distribution from
 * http://en.wikipedia.org/wiki/Bates_distribution
 *
 * @param {Number} length of array
 * @param {Number} max bates value (default is n)
 * @param {Number} minimum bound a (default is 0)
 * @return {Array} bates distribution from [a, b]
 */ random.distribution.bates = function(n, b, a) {
    if (arguments.length <= 2) a = 0;
    if (arguments.length === 1) b = n;
    var results = new Array(n);
    for(var i = 0; i < n; i++)results[i] = random.bates(n, b, a);
    return results;
};

},{}],"ftcTC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "phaseEstimationWire", ()=>phaseEstimationWire
);
var _gateSymbol = require("./QuantumGate/GateSymbol");
var _quantumGate = require("./QuantumGate/QuantumGate");
var _quantumWire = require("./QuantumWire");
const phaseEstimationWire = (estimationWire, gateList)=>{
    if (estimationWire < 1) throw new Error("Estimation wire must be greater than 0.");
    const gateLength = gateList[0].wireLength;
    const wireLength = gateLength + estimationWire;
    const shiftedGateList = gateList.map((gate)=>gate.shiftBasis({
            shift: estimationWire,
            wireLength
        })
    );
    const wire = _quantumWire.QuantumWire.create(wireLength);
    for(let i = 0; i < estimationWire; i++)wire.addGate(_quantumGate.QuantumGate.fromBasis({
        wireLength,
        type: _gateSymbol.GateSymbol.Hadamard,
        wire: i
    }));
    for(let i1 = estimationWire - 1; i1 >= 0; i1--)for(let _ = 0; _ < 2 ** (estimationWire - i1 - 1); _++)shiftedGateList.forEach((shiftedGate)=>{
        wire.addGate(_quantumGate.QuantumGate.toSinglyControlled(shiftedGate, i1));
    });
    // add fourier
    wire.addGate(_quantumGate.QuantumGate.fromBasis({
        type: _gateSymbol.GateSymbol.Fourier,
        startWire: 0,
        endWire: estimationWire,
        wireLength
    }).toInverted());
    // no need to flip, the flip is already included in the circuit
    return wire;
};

},{"./QuantumGate/GateSymbol":"l5zy9","./QuantumGate/QuantumGate":"9LUez","./QuantumWire":"15eMQ","@parcel/transformer-js/src/esmodule-helpers.js":"lwlqA"}],"l5zy9":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lwlqA"}],"lwlqA":[function(require,module,exports) {
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

},{}],"9LUez":[function(require,module,exports) {
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
    toString() {
        return `${this.isInverse ? "Inv-" : ""}${this.basis.toString()}${this.controlWire.size > 0 ? ` Control(${Array.from(this.controlWire).join(",")})` : ""}`;
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

},{"./GateConstructorMap":"g4o6V","./Generator":"2GKIR","./ElementaryGate/Hadamard":"jsOsm","./ElementaryGate/PauliX":"3YSiI","./ElementaryGate/Phase":"bA8bw","../../util/StringHelper":"awpwb","./GeneratorMatrixMap":"6Vrjt","./GateHelper":"2Nadw","@parcel/transformer-js/src/esmodule-helpers.js":"lwlqA"}],"g4o6V":[function(require,module,exports) {
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

},{"./GateSymbol":"l5zy9","./ElementaryGate/Hadamard":"jsOsm","./ElementaryGate/PauliX":"3YSiI","./ElementaryGate/Phase":"bA8bw","./ElementaryGate/Rz":"5n1X6","./ExtendedGate/Swap":"hzdFh","./ExtendedGate/Flip":"90xQE","./ExtendedGate/Fourier":"9vgOs","./ExtendedGate/Shor":"gTEzY","@parcel/transformer-js/src/esmodule-helpers.js":"lwlqA"}],"jsOsm":[function(require,module,exports) {
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
var _dec = _staticImplDefault.default();
let Hadamard = _class = _dec(_class = class Hadamard1 {
    constructor({ wireLength , wire  }){
        this.wireLength = wireLength;
        this.wire = wire;
    }
    static create = ({ wireLength , wire  })=>{
        _gateHelper.requireWireInBound(wireLength, wire);
        return new Hadamard1({
            wireLength,
            wire
        });
    };
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
    toString() {
        return `H(${this.wire})`;
    }
}) || _class;

},{"../../../util/StaticImpl":"1rEvx","../../../util/StringHelper":"awpwb","../GateHelper":"2Nadw","../GeneratorMatrixMap":"6Vrjt","@parcel/transformer-js/src/esmodule-helpers.js":"lwlqA"}],"1rEvx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ()=>{
    return (constructor)=>{};
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lwlqA"}],"awpwb":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lwlqA"}],"2Nadw":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lwlqA"}],"6Vrjt":[function(require,module,exports) {
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

},{"../../util/Matrix":"eMGO8","./Generator":"2GKIR","@parcel/transformer-js/src/esmodule-helpers.js":"lwlqA"}],"eMGO8":[function(require,module,exports) {
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
})(MatrixType || (MatrixType = {}));
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

},{"./ComplexNumber":"87em4","./StaticImpl":"1rEvx","./Vector":"csYFV","@parcel/transformer-js/src/esmodule-helpers.js":"lwlqA"}],"87em4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class ComplexNumber {
    static _MINIMAL_ERROR = 0.00000000000001;
    static _FIX_DIGIT = 4;
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
exports.default = ComplexNumber;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lwlqA"}],"csYFV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _complexNumber = require("./ComplexNumber");
var _complexNumberDefault = parcelHelpers.interopDefault(_complexNumber);
class Vector {
    _array = [];
    constructor(array){
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
    combine = this.add;
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
exports.default = Vector;

},{"./ComplexNumber":"87em4","@parcel/transformer-js/src/esmodule-helpers.js":"lwlqA"}],"2GKIR":[function(require,module,exports) {
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
})(GeneratorType || (GeneratorType = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lwlqA"}],"3YSiI":[function(require,module,exports) {
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
var _dec = _staticImplDefault.default();
let PauliX = _class = _dec(_class = class PauliX1 {
    constructor({ wireLength , wire  }){
        this.wireLength = wireLength;
        this.wire = wire;
    }
    static create = ({ wireLength , wire  })=>{
        _gateHelper.requireWireInBound(wireLength, wire);
        return new PauliX1({
            wireLength,
            wire
        });
    };
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
    toString() {
        return `PauliX(${this.wire})`;
    }
}) || _class;

},{"../../../util/StaticImpl":"1rEvx","../../../util/StringHelper":"awpwb","../GateHelper":"2Nadw","../GeneratorMatrixMap":"6Vrjt","@parcel/transformer-js/src/esmodule-helpers.js":"lwlqA"}],"bA8bw":[function(require,module,exports) {
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
var _dec = _staticImplDefault.default();
let Phase = _class = _dec(_class = class Phase1 {
    constructor({ wireLength , wire , angle  }){
        this.wireLength = wireLength;
        this.wire = wire;
        this.angle = angle;
    }
    static create = ({ wireLength , wire , angle  })=>{
        _gateHelper.requireWireInBound(wireLength, wire);
        return new Phase1({
            wireLength,
            wire,
            angle
        });
    };
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
                newState.increment(index, (index & 1 << this.wireLength - 1 - this.wire) === 0 ? value.clone() : value.multiply(_complexNumberDefault.default.fromPolar(1, this.angle)));
            });
        };
    }
    isValidControlWire(controlWire) {
        return controlWire !== this.wire;
    }
    isGettable(_) {
        return true;
    }
    toString() {
        return `Phase(${this.wire}, ${(this.angle / Math.PI).toFixed(4)}PI)`;
    }
}) || _class;

},{"../../../util/StaticImpl":"1rEvx","../../../util/ComplexNumber":"87em4","../GateHelper":"2Nadw","../GeneratorMatrixMap":"6Vrjt","@parcel/transformer-js/src/esmodule-helpers.js":"lwlqA"}],"5n1X6":[function(require,module,exports) {
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
var _dec = _staticImplDefault.default();
let Rz = _class = _dec(_class = class Rz1 {
    constructor({ wireLength , wire , angle  }){
        this.wireLength = wireLength;
        this.wire = wire;
        this.angle = angle;
    }
    static create = ({ wireLength , wire , angle  })=>{
        _gateHelper.requireWireInBound(wireLength, wire);
        return new Rz1({
            wireLength,
            wire,
            angle
        });
    };
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
    toString() {
        return `Rz(${this.wire}, ${(this.angle / Math.PI).toFixed(4)}PI)`;
    }
}) || _class;

},{"../../../util/StaticImpl":"1rEvx","../../../util/ComplexNumber":"87em4","../GateHelper":"2Nadw","../GeneratorMatrixMap":"6Vrjt","@parcel/transformer-js/src/esmodule-helpers.js":"lwlqA"}],"hzdFh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Swap
);
var _staticImpl = require("../../../util/StaticImpl");
var _staticImplDefault = parcelHelpers.interopDefault(_staticImpl);
var _gateHelper = require("../GateHelper");
var _class;
var _dec = _staticImplDefault.default();
let Swap = _class = _dec(_class = class Swap1 {
    get wireRange() {
        return undefined;
    }
    constructor({ wireLength , wireOne , wireTwo  }){
        this.wireLength = wireLength;
        this.wireOne = wireOne;
        this.wireTwo = wireTwo;
    }
    static create = ({ wireLength , wireOne , wireTwo  })=>{
        _gateHelper.requireWireInBound(wireLength, wireOne);
        _gateHelper.requireWireInBound(wireLength, wireTwo);
        _gateHelper.requireWireIsNotEqual(wireOne, wireTwo);
        return new Swap1({
            wireLength,
            wireOne,
            wireTwo
        });
    };
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
    toString() {
        return `Swap(${this.wireOne}<->${this.wireTwo})`;
    }
}) || _class;

},{"../../../util/StaticImpl":"1rEvx","../GateHelper":"2Nadw","@parcel/transformer-js/src/esmodule-helpers.js":"lwlqA"}],"90xQE":[function(require,module,exports) {
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
var _dec = _staticImplDefault.default();
let Flip = _class = _dec(_class = class Flip1 {
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
    static create = ({ wireLength , startWire , endWire  })=>{
        _gateHelper.requireWireInBound(wireLength, startWire);
        _gateHelper.requireWireInBound(wireLength, endWire - 1);
        _gateHelper.requireWireIsSmallerThan(startWire, endWire);
        return new Flip1({
            wireLength,
            startWire,
            endWire
        });
    };
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
    toString() {
        return `Flip(${this.startWire}..${this.endWire})`;
    }
}) || _class;

},{"../../../util/StaticImpl":"1rEvx","../../../util/StringHelper":"awpwb","../Generator":"2GKIR","../GateHelper":"2Nadw","@parcel/transformer-js/src/esmodule-helpers.js":"lwlqA"}],"9vgOs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Fourier
);
var _staticImpl = require("../../../util/StaticImpl");
var _staticImplDefault = parcelHelpers.interopDefault(_staticImpl);
var _gateHelper = require("../GateHelper");
var _class;
var _dec = _staticImplDefault.default();
let Fourier = _class = _dec(_class = class Fourier1 {
    get wireRange() {
        return undefined;
    }
    constructor({ wireLength , startWire , endWire  }){
        this.wireLength = wireLength;
        this.startWire = startWire;
        this.endWire = endWire;
    }
    static create = ({ wireLength , startWire , endWire  })=>{
        _gateHelper.requireWireInBound(wireLength, startWire);
        _gateHelper.requireWireInBound(wireLength, endWire - 1);
        _gateHelper.requireWireIsSmallerThan(startWire, endWire);
        return new Fourier1({
            wireLength,
            startWire,
            endWire
        });
    };
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
    toString() {
        return `Fourier(${this.startWire}..${this.endWire})`;
    }
}) || _class;

},{"../../../util/StaticImpl":"1rEvx","../GateHelper":"2Nadw","@parcel/transformer-js/src/esmodule-helpers.js":"lwlqA"}],"gTEzY":[function(require,module,exports) {
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
var _dec = _staticImplDefault.default();
let Shor = _class = _dec(_class = class Shor1 {
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
    static create = ({ wireLength , startWire , endWire , x , N  })=>{
        _gateHelper.requireWireInBound(wireLength, startWire);
        _gateHelper.requireWireInBound(wireLength, endWire - 1);
        _gateHelper.requireWireIsSmallerThan(startWire, endWire);
        if (x < 0 || x >= N) throw new Error(`x must be in range [0, ${N}).`);
        if (Math.ceil(Math.log2(N)) != endWire - startWire) throw new Error(`The number of wires must be equal to the number of bits in N.`);
        return new Shor1({
            wireLength,
            startWire,
            endWire,
            x,
            N
        });
    };
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
            case _generator.GeneratorType.VectorFunction:
            case _generator.GeneratorType.VectorStateFunction:
                return true;
            default:
                return false;
        }
    }
    toString() {
        return `Shor(${this.startWire}..${this.endWire}, ${this.x}, ${this.N})`;
    }
}) || _class;

},{"../../../util/StaticImpl":"1rEvx","../Generator":"2GKIR","../../../util/StringHelper":"awpwb","../GateHelper":"2Nadw","@parcel/transformer-js/src/esmodule-helpers.js":"lwlqA"}],"15eMQ":[function(require,module,exports) {
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
    toString() {
        return `QuantumWire[\n${this.gateArray.map((gate)=>'\t' + gate.toString()
        ).join('\n')}\n]`;
    }
}

},{"./QuantumCircuit":"hpSmq","./QuantumGate/GeneratorMatrixMap":"6Vrjt","@parcel/transformer-js/src/esmodule-helpers.js":"lwlqA"}],"hpSmq":[function(require,module,exports) {
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
    toString() {
        return `QuantumCircuit(${this.wireLength})[\n${this.gateArray.map((gate)=>'\t' + gate.toString()
        ).join('\n')}\n]`;
    }
}

},{"./QuantumGate/GeneratorMatrixMap":"6Vrjt","@parcel/transformer-js/src/esmodule-helpers.js":"lwlqA"}],"9mu5U":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AtomizeStrategy", ()=>AtomizeStrategy
);
parcelHelpers.export(exports, "Atomizer", ()=>Atomizer
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
    constructor(){}
    static All(gate, generatorType) {
        if (gate.isElementaryGate()) return [
            gate
        ];
        // non-elementary gate can be atomized
        const atomizedGateList = Atomizer.atomize(gate);
        if (atomizedGateList === null) throw new Error(`Could not atomize gate ${gate.constructor.name}`);
        // further atomize the list
        return atomizedGateList.map((g)=>AtomizeStrategy.All(g, generatorType)
        ).flat();
    }
    static Max(gate, generatorType) {
        if (gate.isElementaryGate()) return [
            gate
        ];
        // try to atomize the gate
        const atomizedGateList = Atomizer.atomize(gate);
        if (atomizedGateList !== null) // further atomize the list
        return atomizedGateList.map((g)=>AtomizeStrategy.Max(g, generatorType)
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
        return atomizedGateList.map((g)=>AtomizeStrategy.Min(g, generatorType)
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
    constructor(){}
    // 1 depth atomization
    static atomize(gate) {
        if (gate.isNotInverted()) {
            if (gate.isUncontrolled()) return Atomizer.atomizeNotInvertedUncontrolled(gate);
            else if (gate.isSinglyControlled()) return Atomizer.atomizeNotInvertedSinglyControlled(gate);
            else return null;
        } else if (gate.isInverted()) {
            if (gate.isUncontrolled()) return Atomizer.atomizeInvertedUncontrolled(gate);
            else if (gate.isControlled()) return Atomizer.atomizeInvertedControlled(gate);
            else return null;
        } else return null;
    }
    static atomizeNotInvertedUncontrolled(gate) {
        if (gate.isBasedOn(_hadamardDefault.default)) return Atomizer.NotInvertedUncontrolledHadamard(gate);
        else if (gate.isBasedOn(_pauliXDefault.default)) return Atomizer.NotInvertedUncontrolledPauliX(gate);
        else if (gate.isBasedOn(_phaseDefault.default)) return Atomizer.NotInvertedUncontrolledPhase(gate);
        else if (gate.isBasedOn(_rzDefault.default)) return Atomizer.NotInvertedUncontrolledRz(gate);
        else if (gate.isBasedOn(_flipDefault.default)) return Atomizer.NotInvertedUncontrolledFlip(gate);
        else if (gate.isBasedOn(_fourierDefault.default)) return Atomizer.NotInvertedUncontrolledFourier(gate);
        else if (gate.isBasedOn(_swapDefault.default)) return Atomizer.NotInvertedUncontrolledSwap(gate);
        else return null;
    }
    static atomizeNotInvertedSinglyControlled(gate) {
        if (gate.isBasedOn(_pauliXDefault.default)) return Atomizer.NotInvertedSinglyControlledPauliX(gate);
        else if (gate.isBasedOn(_phaseDefault.default)) return Atomizer.NotInvertedSinglyControlledPhase(gate);
        else if (gate.isBasedOn(_rzDefault.default)) return Atomizer.NotInvertedSinglyControlledRz(gate);
        else return null;
    }
    static atomizeInvertedUncontrolled(gate) {
        if (gate.isBasedOn(_hadamardDefault.default)) return Atomizer.InvertedUncontrolledHadamard(gate);
        else if (gate.isBasedOn(_pauliXDefault.default)) return Atomizer.InvertedUncontrolledPauliX(gate);
        else if (gate.isBasedOn(_phaseDefault.default)) return Atomizer.InvertedUncontrolledPhase(gate);
        else if (gate.isBasedOn(_rzDefault.default)) return Atomizer.InvertedUncontrolledRz(gate);
        else if (gate.isBasedOn(_flipDefault.default)) return Atomizer.InvertedUncontrolledFlip(gate);
        else if (gate.isBasedOn(_fourierDefault.default)) return Atomizer.InvertedUncontrolledFourier(gate);
        else if (gate.isBasedOn(_swapDefault.default)) return Atomizer.InvertedUncontrolledSwap(gate);
        else return null;
    }
    static atomizeInvertedControlled(gate) {
        // construct the uncontrolled version first
        const uncontrolledGate1 = Atomizer.atomizeInvertedUncontrolled(_quantumGate.QuantumGate.toUncontrolled(gate));
        if (uncontrolledGate1 === null) return null;
        // then construct the controlled version
        return uncontrolledGate1.map((uncontrolledGate)=>{
            return _quantumGate.QuantumGate.toControlled(uncontrolledGate, gate.controlWire);
        });
    }
    static NotInvertedUncontrolledHadamard = (gate)=>[
            gate.clone()
        ]
    ;
    static NotInvertedUncontrolledPhase = (gate)=>[
            gate.clone()
        ]
    ;
    static NotInvertedUncontrolledPauliX = (gate)=>{
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
    static NotInvertedUncontrolledRz = (gate)=>{
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
    static NotInvertedUncontrolledFlip = (gate)=>{
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
    static NotInvertedUncontrolledFourier = (gate)=>{
        let returnArray = [];
        const basis = gate.basis;
        const startWire = basis.startWire;
        const wireLength = basis.wireLength;
        const endWire = basis.endWire;
        returnArray.push(_quantumGate.QuantumGate.fromBasis({
            type: _gateSymbol.GateSymbol.Flip,
            wireLength,
            startWire: startWire,
            endWire: endWire
        }));
        for(let i = endWire - 1; i >= startWire; i--){
            for(let j = endWire - 1; j > i; j--)returnArray.push(_quantumGate.QuantumGate.fromSingleControlled({
                type: _gateSymbol.GateSymbol.Phase,
                wireLength,
                wire: j,
                controlWire: i,
                angle: Math.PI / 2 ** (j - i)
            }));
            returnArray.push(_quantumGate.QuantumGate.fromBasis({
                type: _gateSymbol.GateSymbol.Hadamard,
                wireLength,
                wire: i
            }));
        }
        return returnArray;
    };
    static NotInvertedUncontrolledSwap = (gate)=>{
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
    static NotInvertedSinglyControlledPauliX = (gate)=>[
            gate.clone()
        ]
    ;
    static NotInvertedSinglyControlledRz = (gate)=>{
        // C-PauliX Phase -theta/2 C-PauliX Phase theta/2
        const gateControlWire = [
            ...gate.controlWire.keys()
        ][0];
        return [
            _quantumGate.QuantumGate.fromSingleControlled({
                type: _gateSymbol.GateSymbol.PauliX,
                wire: gate.basis.wire,
                controlWire: gateControlWire,
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
                controlWire: gateControlWire,
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
    static NotInvertedSinglyControlledPhase = (gate)=>{
        // Phase theta / 2 C-Rz
        const gateControlWire = [
            ...gate.controlWire.keys()
        ][0];
        return [
            _quantumGate.QuantumGate.fromBasis({
                type: _gateSymbol.GateSymbol.Phase,
                wire: gateControlWire,
                angle: gate.basis.angle / 2,
                wireLength: gate.wireLength
            }),
            _quantumGate.QuantumGate.fromSingleControlled({
                type: _gateSymbol.GateSymbol.Rz,
                wire: gate.basis.wire,
                controlWire: gateControlWire,
                angle: gate.basis.angle,
                wireLength: gate.wireLength
            })
        ];
    };
    static InvertedUncontrolledHadamard = (gate)=>[
            gate.toInverted()
        ]
    ;
    static InvertedUncontrolledPauliX = (gate)=>[
            gate.toInverted()
        ]
    ;
    static InvertedUncontrolledPhase = (gate)=>[
            _quantumGate.QuantumGate.fromBasis({
                type: _gateSymbol.GateSymbol.Phase,
                wire: gate.basis.wire,
                angle: -gate.basis.angle,
                wireLength: gate.wireLength
            })
        ]
    ;
    static InvertedUncontrolledRz = (gate)=>[
            _quantumGate.QuantumGate.fromBasis({
                type: _gateSymbol.GateSymbol.Rz,
                wire: gate.basis.wire,
                angle: -gate.basis.angle,
                wireLength: gate.wireLength
            })
        ]
    ;
    static InvertedUncontrolledFlip = (gate)=>[
            gate.toInverted()
        ]
    ;
    static InvertedUncontrolledSwap = (gate)=>[
            gate.toInverted()
        ]
    ;
    static InvertedUncontrolledFourier = (gate1)=>{
        return Atomizer.NotInvertedUncontrolledFourier(_quantumGate.QuantumGate.fromBasis({
            type: _gateSymbol.GateSymbol.Fourier,
            wireLength: gate1.wireLength,
            startWire: gate1.basis.startWire,
            endWire: gate1.basis.endWire
        })).reverse().map((gate)=>gate.toInverted()
        );
    };
}

},{"./ElementaryGate/Hadamard":"jsOsm","./ElementaryGate/PauliX":"3YSiI","./ElementaryGate/Phase":"bA8bw","./ElementaryGate/Rz":"5n1X6","./ExtendedGate/Flip":"90xQE","./ExtendedGate/Fourier":"9vgOs","./ExtendedGate/Swap":"hzdFh","./GateSymbol":"l5zy9","./QuantumGate":"9LUez","@parcel/transformer-js/src/esmodule-helpers.js":"lwlqA"}],"iSZSH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
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
exports.default = QuantumVectorState;

},{"../util/ComplexNumber":"87em4","./QuantumState":"5ZrtS","../util/StringHelper":"awpwb","@parcel/transformer-js/src/esmodule-helpers.js":"lwlqA"}],"5ZrtS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PrintType", ()=>PrintType
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
})(PrintType || (PrintType = {}));
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
exports.default = QuantumState;

},{"../util/Vector":"csYFV","../util/ComplexNumber":"87em4","../util/StringHelper":"awpwb","@parcel/transformer-js/src/esmodule-helpers.js":"lwlqA"}]},["kgxat","aeX1w"], "aeX1w", "parcelRequireebe6")

//# sourceMappingURL=index.96a5f1ba.js.map
