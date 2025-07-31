// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
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

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
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
        globalObject
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
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

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
    }
  }
})({"1qaS4":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 3001;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "d68ad56631b563d9";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
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
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"a0t4e":[function(require,module,exports,__globalThis) {
var _hmsVideoStore = require("@100mslive/hms-video-store");
// Initialize HMS Store
const hmsManager = new (0, _hmsVideoStore.HMSReactiveStore)();
hmsManager.triggerOnSubscribe();
const hmsStore = hmsManager.getStore();
const hmsActions = hmsManager.getActions();
// HTML elements
const form = document.getElementById("join");
const conference = document.getElementById("conference");
const peersContainer = document.getElementById("peers-container");
const leaveBtn = document.getElementById("leave-btn");
const muteAudio = document.getElementById("mute-aud");
const muteVideo = document.getElementById("mute-vid");
const controls = document.getElementById("controls");
// store peer IDs already rendered to avoid re-render on mute/unmute
const renderedPeerIDs = new Set();
// Joining the room
// Function to get query params
function getQueryParam(key) {
    const params = new URLSearchParams(window.location.search);
    return params.get(key);
}
// Extract values
const authToken = getQueryParam("authToken");
const userName = getQueryParam("userName") || "Guest";
// Auto join if authToken is available
window.addEventListener("DOMContentLoaded", async ()=>{
    if (!authToken) {
        console.error("Auth token missing in query params");
        return;
    }
    console.log("Joining room with token:", authToken);
    await hmsActions.join({
        userName,
        authToken
    });
});
// Leaving the room
async function leaveRoom() {
    await hmsActions.leave();
    peersContainer.innerHTML = "";
}
// Cleanup if user refreshes the tab or navigates away
window.onunload = window.onbeforeunload = leaveRoom;
leaveBtn.onclick = leaveRoom;
// Helper function to create html elements
function createElementWithClass(tag, className) {
    const newElement = document.createElement(tag);
    newElement.className = className;
    return newElement;
}
// Render a single peer
function renderPeer(peer) {
    const peerTileDiv = createElementWithClass("div", "peer-tile");
    const videoElement = createElementWithClass("video", "peer-video");
    const peerTileName = createElementWithClass("div", "peer-name");
    videoElement.autoplay = true;
    videoElement.muted = true;
    videoElement.playsinline = true;
    peerTileName.textContent = peer.name;
    hmsStore.subscribe((track)=>{
        if (!track) return;
        if (track.enabled) hmsActions.attachVideo(track.id, videoElement);
        else hmsActions.detachVideo(track.id, videoElement);
    }, (0, _hmsVideoStore.selectVideoTrackByID)(peer.videoTrack));
    peerTileDiv.append(videoElement);
    peerTileDiv.append(peerTileName);
    renderedPeerIDs.add(peer.id);
    return peerTileDiv;
}
// display a tile for each peer in the peer list
function renderPeers() {
    const peers = hmsStore.getState((0, _hmsVideoStore.selectPeers));
    peers.forEach((peer)=>{
        if (!renderedPeerIDs.has(peer.id) && peer.videoTrack) peersContainer.append(renderPeer(peer));
    });
}
// Reactive state - renderPeers is called whenever there is a change in the peer-list
hmsStore.subscribe(renderPeers, (0, _hmsVideoStore.selectPeers));
// Mute and unmute audio
muteAudio.onclick = async ()=>{
    const audioEnabled = !hmsStore.getState((0, _hmsVideoStore.selectIsLocalAudioEnabled));
    await hmsActions.setLocalAudioEnabled(audioEnabled);
    muteAudio.textContent = audioEnabled ? "Mute" : "Unmute";
};
// Mute and unmute video
muteVideo.onclick = async ()=>{
    const videoEnabled = !hmsStore.getState((0, _hmsVideoStore.selectIsLocalVideoEnabled));
    await hmsActions.setLocalVideoEnabled(videoEnabled);
    muteVideo.textContent = videoEnabled ? "Hide" : "Unhide";
};
// Showing the required elements on connection/disconnection
function onConnection(isConnected) {
    if (isConnected) {
        form.classList.add("hide");
        conference.classList.remove("hide");
        leaveBtn.classList.remove("hide");
        controls.classList.remove("hide");
    } else {
        form.classList.remove("hide");
        conference.classList.add("hide");
        leaveBtn.classList.add("hide");
        controls.classList.add("hide");
    }
}
// Listen to the connection state
hmsStore.subscribe(onConnection, (0, _hmsVideoStore.selectIsConnectedToRoom));

},{"@100mslive/hms-video-store":"bXoF0"}],"bXoF0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ConnectivityState", ()=>Tn);
parcelHelpers.export(exports, "DeviceType", ()=>qs);
parcelHelpers.export(exports, "Diagnostics", ()=>Ut);
parcelHelpers.export(exports, "DomainCategory", ()=>Ls);
parcelHelpers.export(exports, "EventBus", ()=>Kt);
parcelHelpers.export(exports, "HLSPlaylistType", ()=>Gs);
parcelHelpers.export(exports, "HLSStreamType", ()=>Ws);
parcelHelpers.export(exports, "HMSAudioDeviceCategory", ()=>_r);
parcelHelpers.export(exports, "HMSAudioMode", ()=>xr);
parcelHelpers.export(exports, "HMSAudioPluginType", ()=>Cr);
parcelHelpers.export(exports, "HMSLogLevel", ()=>ks);
parcelHelpers.export(exports, "HMSMessageType", ()=>So);
parcelHelpers.export(exports, "HMSNotificationSeverity", ()=>fs);
parcelHelpers.export(exports, "HMSNotificationTypes", ()=>Pr);
parcelHelpers.export(exports, "HMSPeerType", ()=>Or);
parcelHelpers.export(exports, "HMSPlaylistType", ()=>vs);
parcelHelpers.export(exports, "HMSPluginUnsupportedTypes", ()=>Lr);
parcelHelpers.export(exports, "HMSReactiveStore", ()=>mt);
parcelHelpers.export(exports, "HMSRecordingState", ()=>Fs);
parcelHelpers.export(exports, "HMSRoomState", ()=>Er);
parcelHelpers.export(exports, "HMSStats", ()=>si);
parcelHelpers.export(exports, "HMSTrackExceptionTrackType", ()=>Ds);
parcelHelpers.export(exports, "HMSTranscriptionMode", ()=>Ks);
parcelHelpers.export(exports, "HMSTranscriptionState", ()=>$s);
parcelHelpers.export(exports, "HMSVideoPluginCanvasContextType", ()=>Fr);
parcelHelpers.export(exports, "HMSVideoPluginType", ()=>Vr);
parcelHelpers.export(exports, "createDefaultStatsStore", ()=>ni);
parcelHelpers.export(exports, "createDefaultStoreState", ()=>oi);
parcelHelpers.export(exports, "getAudioDeviceCategory", ()=>Nr);
parcelHelpers.export(exports, "parsedUserAgent", ()=>Te);
parcelHelpers.export(exports, "selectAppData", ()=>uS);
parcelHelpers.export(exports, "selectAppDataByPath", ()=>hS);
parcelHelpers.export(exports, "selectAudioPlaylist", ()=>Aa);
parcelHelpers.export(exports, "selectAudioPlaylistTrackByPeerID", ()=>IS);
parcelHelpers.export(exports, "selectAudioTrackByID", ()=>gS);
parcelHelpers.export(exports, "selectAudioTrackByPeerID", ()=>on);
parcelHelpers.export(exports, "selectAudioTrackVolume", ()=>_a);
parcelHelpers.export(exports, "selectAudioVolumeByPeerID", ()=>wS);
parcelHelpers.export(exports, "selectAuxiliaryAudioByPeerID", ()=>PS);
parcelHelpers.export(exports, "selectAuxiliaryTracksByPeerID", ()=>MS);
parcelHelpers.export(exports, "selectAvailableRoleNames", ()=>Um);
parcelHelpers.export(exports, "selectBroadcastMessages", ()=>cn);
parcelHelpers.export(exports, "selectBroadcastMessagesUnreadCount", ()=>OS);
parcelHelpers.export(exports, "selectCameraStreamByPeerID", ()=>vS);
parcelHelpers.export(exports, "selectConnectionQualities", ()=>Mm);
parcelHelpers.export(exports, "selectConnectionQualityByPeerID", ()=>ES);
parcelHelpers.export(exports, "selectDegradedTracks", ()=>Dm);
parcelHelpers.export(exports, "selectDevices", ()=>vm);
parcelHelpers.export(exports, "selectDidIJoinWithin", ()=>ug);
parcelHelpers.export(exports, "selectDominantSpeaker", ()=>bm);
parcelHelpers.export(exports, "selectEffectsKey", ()=>Qm);
parcelHelpers.export(exports, "selectErrors", ()=>Go);
parcelHelpers.export(exports, "selectFullAppData", ()=>zr);
parcelHelpers.export(exports, "selectHLSState", ()=>Gm);
parcelHelpers.export(exports, "selectHMSBroadcastMessages", ()=>Jo);
parcelHelpers.export(exports, "selectHMSMessages", ()=>Dt);
parcelHelpers.export(exports, "selectHMSMessagesCount", ()=>wm);
parcelHelpers.export(exports, "selectHMSStats", ()=>oc);
parcelHelpers.export(exports, "selectHandRaisedPeers", ()=>Zm);
parcelHelpers.export(exports, "selectHasPeerHandRaised", ()=>$S);
parcelHelpers.export(exports, "selectIsAllowedToPreviewMedia", ()=>tg);
parcelHelpers.export(exports, "selectIsAllowedToPublish", ()=>eg);
parcelHelpers.export(exports, "selectIsAllowedToSubscribe", ()=>Bm);
parcelHelpers.export(exports, "selectIsAudioLocallyMuted", ()=>wa);
parcelHelpers.export(exports, "selectIsConnectedToRoom", ()=>Be);
parcelHelpers.export(exports, "selectIsEffectsEnabled", ()=>jm);
parcelHelpers.export(exports, "selectIsInPreview", ()=>ma);
parcelHelpers.export(exports, "selectIsLargeRoom", ()=>qm);
parcelHelpers.export(exports, "selectIsLocalAudioEnabled", ()=>Am);
parcelHelpers.export(exports, "selectIsLocalAudioPluginPresent", ()=>cg);
parcelHelpers.export(exports, "selectIsLocalScreenShared", ()=>Xr);
parcelHelpers.export(exports, "selectIsLocalVideoDisplayEnabled", ()=>ha);
parcelHelpers.export(exports, "selectIsLocalVideoEnabled", ()=>Yr);
parcelHelpers.export(exports, "selectIsLocalVideoPluginPresent", ()=>ng);
parcelHelpers.export(exports, "selectIsLocallyMutedByPeerID", ()=>LS);
parcelHelpers.export(exports, "selectIsPeerAudioEnabled", ()=>HS);
parcelHelpers.export(exports, "selectIsPeerVideoEnabled", ()=>CS);
parcelHelpers.export(exports, "selectIsRoleAllowedToPublish", ()=>og);
parcelHelpers.export(exports, "selectIsScreenShareLocallyMutedByPeerID", ()=>DS);
parcelHelpers.export(exports, "selectIsSomeoneScreenSharing", ()=>Im);
parcelHelpers.export(exports, "selectIsTranscriptionAllowedByMode", ()=>jS);
parcelHelpers.export(exports, "selectIsTranscriptionEnabled", ()=>xm);
parcelHelpers.export(exports, "selectIsVBEnabled", ()=>Jm);
parcelHelpers.export(exports, "selectLocalAudioTrackID", ()=>le);
parcelHelpers.export(exports, "selectLocalMediaSettings", ()=>ua);
parcelHelpers.export(exports, "selectLocalPeer", ()=>re);
parcelHelpers.export(exports, "selectLocalPeerID", ()=>Ie);
parcelHelpers.export(exports, "selectLocalPeerName", ()=>km);
parcelHelpers.export(exports, "selectLocalPeerRole", ()=>ct);
parcelHelpers.export(exports, "selectLocalPeerRoleName", ()=>Em);
parcelHelpers.export(exports, "selectLocalTrackIDs", ()=>pa);
parcelHelpers.export(exports, "selectLocalVideoTrackID", ()=>Z);
parcelHelpers.export(exports, "selectMessageByMessageID", ()=>qS);
parcelHelpers.export(exports, "selectMessageIDsInOrder", ()=>la);
parcelHelpers.export(exports, "selectMessagesByPeerID", ()=>xS);
parcelHelpers.export(exports, "selectMessagesByRole", ()=>US);
parcelHelpers.export(exports, "selectMessagesMap", ()=>Ai);
parcelHelpers.export(exports, "selectMessagesUnreadCountByPeerID", ()=>VS);
parcelHelpers.export(exports, "selectMessagesUnreadCountByRole", ()=>BS);
parcelHelpers.export(exports, "selectPeerAudioByID", ()=>kS);
parcelHelpers.export(exports, "selectPeerByCondition", ()=>dg);
parcelHelpers.export(exports, "selectPeerByID", ()=>ee);
parcelHelpers.export(exports, "selectPeerCount", ()=>ym);
parcelHelpers.export(exports, "selectPeerMetadata", ()=>WS);
parcelHelpers.export(exports, "selectPeerName", ()=>KS);
parcelHelpers.export(exports, "selectPeerNameByID", ()=>mS);
parcelHelpers.export(exports, "selectPeerScreenSharing", ()=>jo);
parcelHelpers.export(exports, "selectPeerSharingAudio", ()=>Rm);
parcelHelpers.export(exports, "selectPeerSharingAudioPlaylist", ()=>Lm);
parcelHelpers.export(exports, "selectPeerSharingVideoPlaylist", ()=>Cm);
parcelHelpers.export(exports, "selectPeerTypeByID", ()=>SS);
parcelHelpers.export(exports, "selectPeers", ()=>ke);
parcelHelpers.export(exports, "selectPeersByCondition", ()=>lg);
parcelHelpers.export(exports, "selectPeersByRole", ()=>FS);
parcelHelpers.export(exports, "selectPeersByRoles", ()=>GS);
parcelHelpers.export(exports, "selectPeersMap", ()=>z);
parcelHelpers.export(exports, "selectPeersScreenSharing", ()=>Hm);
parcelHelpers.export(exports, "selectPeersWithAudioStatus", ()=>XS);
parcelHelpers.export(exports, "selectPermissions", ()=>ga);
parcelHelpers.export(exports, "selectPollByID", ()=>xa);
parcelHelpers.export(exports, "selectPolls", ()=>Xm);
parcelHelpers.export(exports, "selectPollsMap", ()=>Ta);
parcelHelpers.export(exports, "selectPreviewRole", ()=>Sa);
parcelHelpers.export(exports, "selectPreviewRoleName", ()=>Qo);
parcelHelpers.export(exports, "selectRTMPState", ()=>Fm);
parcelHelpers.export(exports, "selectRecentError", ()=>Tm);
parcelHelpers.export(exports, "selectRecordingState", ()=>Vm);
parcelHelpers.export(exports, "selectRemotePeers", ()=>Pm);
parcelHelpers.export(exports, "selectRoleByRoleName", ()=>pn);
parcelHelpers.export(exports, "selectRoleChangeRequest", ()=>ZS);
parcelHelpers.export(exports, "selectRolesMap", ()=>Ee);
parcelHelpers.export(exports, "selectRoom", ()=>F);
parcelHelpers.export(exports, "selectRoomID", ()=>fm);
parcelHelpers.export(exports, "selectRoomStartTime", ()=>Km);
parcelHelpers.export(exports, "selectRoomStarted", ()=>Om);
parcelHelpers.export(exports, "selectRoomState", ()=>se);
parcelHelpers.export(exports, "selectScreenAudioTrackByID", ()=>TS);
parcelHelpers.export(exports, "selectScreenShareAudioByPeerID", ()=>Da);
parcelHelpers.export(exports, "selectScreenShareByPeerID", ()=>RS);
parcelHelpers.export(exports, "selectScreenSharesByPeerId", ()=>La);
parcelHelpers.export(exports, "selectScreenVideoTrackByID", ()=>fS);
parcelHelpers.export(exports, "selectScreenshareAudioVolumeByPeerID", ()=>_S);
parcelHelpers.export(exports, "selectSessionId", ()=>$m);
parcelHelpers.export(exports, "selectSessionMetadata", ()=>Ym);
parcelHelpers.export(exports, "selectSessionStore", ()=>pS);
parcelHelpers.export(exports, "selectSimulcastLayerByTrack", ()=>NS);
parcelHelpers.export(exports, "selectSpeakers", ()=>Wo);
parcelHelpers.export(exports, "selectTemplateAppData", ()=>zm);
parcelHelpers.export(exports, "selectTrackAudioByID", ()=>yS);
parcelHelpers.export(exports, "selectTrackByID", ()=>Ii);
parcelHelpers.export(exports, "selectTracksMap", ()=>N);
parcelHelpers.export(exports, "selectTranscriptionsState", ()=>Wm);
parcelHelpers.export(exports, "selectUnreadHMSBroadcastMessagesCount", ()=>Nm);
parcelHelpers.export(exports, "selectUnreadHMSMessagesCount", ()=>_m);
parcelHelpers.export(exports, "selectVideoPlaylist", ()=>Ia);
parcelHelpers.export(exports, "selectVideoPlaylistAudioTrackByPeerID", ()=>AS);
parcelHelpers.export(exports, "selectVideoPlaylistVideoTrackByPeerID", ()=>bS);
parcelHelpers.export(exports, "selectVideoTrackByID", ()=>Ha);
parcelHelpers.export(exports, "selectVideoTrackByPeerID", ()=>an);
parcelHelpers.export(exports, "selectWhiteboard", ()=>eS);
parcelHelpers.export(exports, "selectWhiteboards", ()=>zo);
parcelHelpers.export(exports, "simulcastMapping", ()=>We);
var _reselect = require("reselect");
var _uaParserJs = require("ua-parser-js");
var _uuid = require("uuid");
var _lodashIsequal = require("lodash.isequal");
var _lodashIsequalDefault = parcelHelpers.interopDefault(_lodashIsequal);
var _webrtcAdapter = require("webrtc-adapter");
var _webrtcAdapterDefault = parcelHelpers.interopDefault(_webrtcAdapter);
var _eventemitter2 = require("eventemitter2");
var _immer = require("immer");
var _shallow = require("zustand/shallow");
var _shallowDefault = parcelHelpers.interopDefault(_shallow);
var _vanilla = require("zustand/vanilla");
var _vanillaDefault = parcelHelpers.interopDefault(_vanilla);
var _sdpTransform = require("sdp-transform");
var _eventemitter2Default = parcelHelpers.interopDefault(_eventemitter2);
var process = require("4e18345d8e205b4a");
var co = Object.defineProperty, lo = Object.defineProperties;
var uo = Object.getOwnPropertyDescriptors;
var ai = Object.getOwnPropertySymbols, po = Object.getPrototypeOf, gs = Object.prototype.hasOwnProperty, Ts = Object.prototype.propertyIsEnumerable, ho = Reflect.get;
var Ss = (a, e, t)=>e in a ? co(a, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : a[e] = t, m = (a, e)=>{
    for(var t in e || (e = {}))gs.call(e, t) && Ss(a, t, e[t]);
    if (ai) for (var t of ai(e))Ts.call(e, t) && Ss(a, t, e[t]);
    return a;
}, M = (a, e)=>lo(a, uo(e));
var kr = (a, e)=>{
    var t = {};
    for(var i in a)gs.call(a, i) && e.indexOf(i) < 0 && (t[i] = a[i]);
    if (a != null && ai) for (var i of ai(a))e.indexOf(i) < 0 && Ts.call(a, i) && (t[i] = a[i]);
    return t;
};
var mo = (a, e)=>()=>(e || a((e = {
            exports: {}
        }).exports, e), e.exports);
var ne = (a, e, t)=>ho(po(a), t, e);
var c = (a, e, t)=>new Promise((i, r)=>{
        var s = (d)=>{
            try {
                n(t.next(d));
            } catch (u) {
                r(u);
            }
        }, o = (d)=>{
            try {
                n(t.throw(d));
            } catch (u) {
                r(u);
            }
        }, n = (d)=>d.done ? i(d.value) : Promise.resolve(d.value).then(s, o);
        n((t = t.apply(a, e)).next());
    });
var Ir = mo((Jc, Eo)=>{
    Eo.exports = {
        version: "0.12.35",
        license: "MIT",
        repository: {
            type: "git",
            url: "https://github.com/100mslive/web-sdks.git",
            directory: "packages/hms-video-store"
        },
        main: "dist/index.cjs.js",
        module: "dist/index.js",
        typings: "dist/index.d.ts",
        files: [
            "dist",
            "src"
        ],
        engines: {
            node: ">=12"
        },
        exports: {
            ".": {
                require: "./dist/index.cjs.js",
                import: "./dist/index.js",
                default: "./dist/index.js"
            }
        },
        sideEffects: !1,
        scripts: {
            prestart: "rm -rf dist && yarn types:build",
            start: 'concurrently "yarn dev" "yarn types"',
            dev: "node ../../scripts/dev",
            "build:only": "node ../../scripts/build",
            build: "yarn build:only && yarn types:build",
            types: "tsc -w",
            "types:build": "tsc -p tsconfig.json",
            format: "prettier --write src/**/*.ts",
            test: "jest --maxWorkers=1",
            "test:watch": "jest --watch",
            "test:coverage": "jest --coverage",
            lint: "eslint -c ../../.eslintrc .",
            "lint:fix": "yarn lint --fix",
            prepare: "yarn build",
            size: "size-limit",
            analyze: "size-limit --why",
            docs: "rm -rf ./docs && typedoc && rm -f ./docs/README.md && mkdir ./docs/home &&mv ./docs/modules.md ./docs/home/content.md && node ../../scripts/docs-store && npx prettier --write './docs/**/*'"
        },
        name: "@100mslive/hms-video-store",
        author: "100ms",
        dependencies: {
            eventemitter2: "^6.4.9",
            immer: "^9.0.6",
            "lodash.isequal": "^4.5.0",
            reselect: "4.0.0",
            "sdp-transform": "^2.14.1",
            "ua-parser-js": "^1.0.1",
            uuid: "^8.3.2",
            "webrtc-adapter": "^8.0.0",
            zustand: "3.5.7"
        },
        devDependencies: {
            "@types/dom-screen-wake-lock": "^1.0.1",
            "@types/lodash.isequal": "^4.5.8",
            "@types/sdp-transform": "^2.4.4",
            "@types/ua-parser-js": "^0.7.36",
            "@types/uuid": "^8.3.0",
            "jest-canvas-mock": "^2.3.1",
            "jsdom-worker": "^0.3.0",
            tslib: "^2.2.0"
        },
        description: "@100mslive Core SDK which abstracts the complexities of webRTC while providing a reactive store for data management with a unidirectional data flow",
        keywords: [
            "video",
            "webrtc",
            "conferencing",
            "100ms"
        ],
        gitHead: "21175fa295899839b6bfd2a7fa5af06150de1df9"
    };
});
var Er = ((n)=>(n.Disconnected = "Disconnected", n.Preview = "Preview", n.Connecting = "Connecting", n.Connected = "Connected", n.Reconnecting = "Reconnecting", n.Disconnecting = "Disconnecting", n.Failed = "Failed", n))(Er || {});
var oi = ()=>({
        room: {
            id: "",
            isConnected: !1,
            name: "",
            peers: [],
            localPeer: "",
            roomState: "Disconnected",
            recording: {
                browser: {
                    running: !1
                },
                server: {
                    running: !1
                },
                hls: {
                    running: !1
                }
            },
            rtmp: {
                running: !1
            },
            hls: {
                running: !1,
                variants: []
            },
            sessionId: ""
        },
        peers: {},
        tracks: {},
        playlist: {
            audio: {
                list: {},
                selection: {
                    id: "",
                    hasPrevious: !1,
                    hasNext: !1
                },
                progress: 0,
                volume: 0,
                currentTime: 0,
                playbackRate: 1
            },
            video: {
                list: {},
                selection: {
                    id: "",
                    hasPrevious: !1,
                    hasNext: !1
                },
                progress: 0,
                volume: 0,
                currentTime: 0,
                playbackRate: 1
            }
        },
        messages: {
            byID: {},
            allIDs: []
        },
        speakers: {},
        connectionQualities: {},
        settings: {
            audioInputDeviceId: "",
            audioOutputDeviceId: "",
            videoInputDeviceId: ""
        },
        devices: {
            audioInput: [],
            audioOutput: [],
            videoInput: []
        },
        roles: {},
        roleChangeRequests: [],
        errors: [],
        sessionStore: {},
        templateAppData: {},
        polls: {},
        whiteboards: {},
        hideLocalPeer: !1
    }), ni = ()=>({
        peerStats: {},
        remoteTrackStats: {},
        localTrackStats: {},
        localPeer: {
            id: ""
        }
    });
var So = ((e)=>(e.CHAT = "chat", e))(So || {});
var fs = ((t)=>(t.INFO = "info", t.ERROR = "error", t))(fs || {}), Pr = ((w)=>(w.PEER_JOINED = "PEER_JOINED", w.PEER_LEFT = "PEER_LEFT", w.PEER_LIST = "PEER_LIST", w.NEW_MESSAGE = "NEW_MESSAGE", w.ERROR = "ERROR", w.RECONNECTING = "RECONNECTING", w.RECONNECTED = "RECONNECTED", w.TRACK_ADDED = "TRACK_ADDED", w.TRACK_REMOVED = "TRACK_REMOVED", w.TRACK_MUTED = "TRACK_MUTED", w.TRACK_UNMUTED = "TRACK_UNMUTED", w.TRACK_DEGRADED = "TRACK_DEGRADED", w.TRACK_RESTORED = "TRACK_RESTORED", w.TRACK_DESCRIPTION_CHANGED = "TRACK_DESCRIPTION_CHANGED", w.ROLE_UPDATED = "ROLE_UPDATED", w.CHANGE_TRACK_STATE_REQUEST = "CHANGE_TRACK_STATE_REQUEST", w.CHANGE_MULTI_TRACK_STATE_REQUEST = "CHANGE_MULTI_TRACK_STATE_REQUEST", w.ROOM_ENDED = "ROOM_ENDED", w.REMOVED_FROM_ROOM = "REMOVED_FROM_ROOM", w.DEVICE_CHANGE_UPDATE = "DEVICE_CHANGE_UPDATE", w.PLAYLIST_TRACK_ENDED = "PLAYLIST_TRACK_ENDED", w.NAME_UPDATED = "NAME_UPDATED", w.METADATA_UPDATED = "METADATA_UPDATED", w.POLL_CREATED = "POLL_CREATED", w.POLL_STARTED = "POLL_STARTED", w.POLL_STOPPED = "POLL_STOPPED", w.POLL_VOTES_UPDATED = "POLL_VOTES_UPDATED", w.POLLS_LIST = "POLLS_LIST", w.HAND_RAISE_CHANGED = "HAND_RAISE_CHANGED", w.TRANSCRIPTION_STATE_UPDATED = "TRANSCRIPTION_STATE_UPDATED", w))(Pr || {});
var vs = ((t)=>(t.audio = "audio", t.video = "video", t))(vs || {});
function Fe(a, e) {
    let t, i;
    if (e) for (let r of e.auxiliaryTracks){
        let s = a[r];
        go(s) && (i = gt(s) ? s : i, t = Tt(s) ? s : t);
    }
    return {
        video: t,
        audio: i
    };
}
function gt(a) {
    return a && a.type === "audio";
}
function Tt(a) {
    return a && a.type === "video";
}
function go(a) {
    return a && a.source === "screen";
}
function ci(a) {
    return a && a.source === "audioplaylist";
}
function ft(a) {
    return a && a.source === "videoplaylist";
}
function Ms(a) {
    return a ? !!(a != null && a.degraded) : !1;
}
function ze(a, e) {
    return e && a.tracks[e] ? a.tracks[e].enabled : !1;
}
function ys(a, e) {
    return e && a.tracks[e] ? a.tracks[e].displayEnabled : !1;
}
function vt(a) {
    var r;
    let e = !1, t = !1, i = !1;
    return (r = a == null ? void 0 : a.publishParams) != null && r.allowed && (e = a.publishParams.allowed.includes("video"), t = a.publishParams.allowed.includes("audio"), i = a.publishParams.allowed.includes("screen")), {
        video: e,
        audio: t,
        screen: i
    };
}
var ks = ((d)=>(d[d.VERBOSE = 0] = "VERBOSE", d[d.DEBUG = 1] = "DEBUG", d[d.INFO = 2] = "INFO", d[d.WARN = 3] = "WARN", d[d.TIME = 4] = "TIME", d[d.TIMEEND = 5] = "TIMEEND", d[d.ERROR = 6] = "ERROR", d[d.NONE = 7] = "NONE", d))(ks || {}), To = typeof window != "undefined" && typeof window.expect != "undefined", l = class {
    static v(e, ...t) {
        this.log(0, e, ...t);
    }
    static d(e, ...t) {
        this.log(1, e, ...t);
    }
    static i(e, ...t) {
        this.log(2, e, ...t);
    }
    static w(e, ...t) {
        this.log(3, e, ...t);
    }
    static e(e, ...t) {
        this.log(6, e, ...t);
    }
    static time(e) {
        this.log(4, "[HMSPerformanceTiming]", e);
    }
    static timeEnd(e) {
        this.log(5, "[HMSPerformanceTiming]", e, e);
    }
    static cleanup() {
        performance.clearMarks(), performance.clearMeasures();
    }
    static log(e, t, ...i) {
        if (!(this.level.valueOf() > e.valueOf())) switch(e){
            case 0:
                console.log(t, ...i);
                break;
            case 1:
                console.debug(t, ...i);
                break;
            case 2:
                console.info(t, ...i);
                break;
            case 3:
                console.warn(t, ...i);
                break;
            case 6:
                console.error(t, ...i);
                break;
            case 4:
                performance.mark(i[0]);
                break;
            case 5:
                {
                    let r = i[0];
                    try {
                        let s = performance.measure(r, r);
                        this.log(1, t, r, s == null ? void 0 : s.duration), performance.clearMarks(r), performance.clearMeasures(r);
                    } catch (s) {
                        this.log(1, t, r, s);
                    }
                    break;
                }
        }
    }
};
l.level = To ? 7 : 0;
var Ye = class {
    constructor(e){
        this.tracks = new Array;
        this.nativeStream = e, this.id = e.id;
    }
    updateId(e) {
        this.id = e;
    }
};
var Te = new (0, _uaParserJs.UAParser), U = typeof window != "undefined", Es, Ge = typeof window == "undefined" && !((Es = Te.getBrowser().name) != null && Es.toLowerCase().includes("electron"));
var vo = ()=>!Ge, Tc = vo(), Mt = ()=>Te.getDevice().type === "mobile", Rs = ()=>typeof document != "undefined" && document.hidden, Hs = ()=>{
    var a;
    return ((a = Te.getOS().name) == null ? void 0 : a.toLowerCase()) === "ios";
}, Ps, bs, Cs = (bs = (Ps = Te.getBrowser()) == null ? void 0 : Ps.name) == null ? void 0 : bs.toLowerCase().includes("safari"), As, Is, di = ((Is = (As = Te.getBrowser()) == null ? void 0 : As.name) == null ? void 0 : Is.toLowerCase()) === "firefox";
var Ls = ((i)=>(i.CUSTOM = "CUSTOM", i.LOCAL = "LOCAL", i.HMS = "HMS", i))(Ls || {});
function Mo() {
    if (U && window) {
        let a = window.location.hostname;
        return a === "localhost" || a === "127.0.0.1" ? "LOCAL" : a.includes("app.100ms.live") ? "HMS" : "CUSTOM";
    }
    return "CUSTOM";
}
var Xe = Mo();
var P = {
    WebSocketConnectionErrors: {
        FAILED_TO_CONNECT: 1e3,
        WEBSOCKET_CONNECTION_LOST: 1003,
        ABNORMAL_CLOSE: 1006
    },
    APIErrors: {
        SERVER_ERRORS: 2e3,
        INIT_CONFIG_NOT_AVAILABLE: 2002,
        ENDPOINT_UNREACHABLE: 2003,
        INVALID_TOKEN_FORMAT: 2004
    },
    TracksErrors: {
        GENERIC_TRACK: 3e3,
        CANT_ACCESS_CAPTURE_DEVICE: 3001,
        DEVICE_NOT_AVAILABLE: 3002,
        DEVICE_IN_USE: 3003,
        DEVICE_LOST_MIDWAY: 3004,
        NOTHING_TO_RETURN: 3005,
        INVALID_VIDEO_SETTINGS: 3006,
        CODEC_CHANGE_NOT_PERMITTED: 3007,
        AUTOPLAY_ERROR: 3008,
        OVER_CONSTRAINED: 3009,
        NO_AUDIO_DETECTED: 3010,
        SYSTEM_DENIED_PERMISSION: 3011,
        CURRENT_TAB_NOT_SHARED: 3012,
        AUDIO_PLAYBACK_ERROR: 3013,
        SELECTED_DEVICE_MISSING: 3014,
        NO_DATA: 3015
    },
    WebrtcErrors: {
        CREATE_OFFER_FAILED: 4001,
        CREATE_ANSWER_FAILED: 4002,
        SET_LOCAL_DESCRIPTION_FAILED: 4003,
        SET_REMOTE_DESCRIPTION_FAILED: 4004,
        ICE_FAILURE: 4005,
        ICE_DISCONNECTED: 4006,
        STATS_FAILED: 4007
    },
    WebsocketMethodErrors: {
        SERVER_ERRORS: 5e3,
        ALREADY_JOINED: 5001,
        CANNOT_JOIN_PREVIEW_IN_PROGRESS: 5002
    },
    GenericErrors: {
        NOT_CONNECTED: 6e3,
        SIGNALLING: 6001,
        UNKNOWN: 6002,
        NOT_READY: 6003,
        JSON_PARSING_FAILED: 6004,
        TRACK_METADATA_MISSING: 6005,
        RTC_TRACK_MISSING: 6006,
        PEER_METADATA_MISSING: 6007,
        INVALID_ROLE: 6008,
        PREVIEW_IN_PROGRESS: 6009,
        MISSING_MEDIADEVICES: 6010,
        MISSING_RTCPEERCONNECTION: 6011,
        LOCAL_STORAGE_ACCESS_DENIED: 6012,
        VALIDATION_FAILED: 6013
    },
    PlaylistErrors: {
        NO_ENTRY_TO_PLAY: 8001,
        NO_ENTRY_IS_PLAYING: 8002
    }
};
var k = class a extends Error {
    constructor(t, i, r, s, o, n = !1){
        super(s);
        this.code = t;
        this.name = i;
        this.message = s;
        this.description = o;
        this.isTerminal = n;
        Object.setPrototypeOf(this, a.prototype), this.action = r.toString();
    }
    toAnalyticsProperties() {
        return {
            error_name: this.name,
            error_code: this.code,
            error_message: this.message,
            error_description: this.description,
            action: this.action,
            is_terminal: this.isTerminal
        };
    }
    addNativeError(t) {
        this.nativeError = t;
    }
    toString() {
        var t;
        return `{
        code: ${this.code};
        name: ${this.name};
        action: ${this.action};
        message: ${this.message};
        description: ${this.description};
        isTerminal: ${this.isTerminal};
        nativeError: ${(t = this.nativeError) == null ? void 0 : t.message};
      }`;
    }
};
var W = class extends k {
    constructor(t, i, r, s, o, n){
        super(t, i, r, s, o, !1);
        this.code = t;
        this.name = i;
        this.message = s;
        this.description = o;
        this.trackType = n;
    }
    toAnalyticsProperties() {
        return M(m({}, super.toAnalyticsProperties()), {
            track_type: this.trackType
        });
    }
    toString() {
        var t;
        return `{
        code: ${this.code};
        name: ${this.name};
        action: ${this.action};
        message: ${this.message};
        description: ${this.description};
        isTerminal: ${this.isTerminal};
        nativeError: ${(t = this.nativeError) == null ? void 0 : t.message};
        trackType: ${this.trackType};
      }`;
    }
};
var Ds = ((r)=>(r.AUDIO = "audio", r.VIDEO = "video", r.AUDIO_VIDEO = "audio, video", r.SCREEN = "screen", r))(Ds || {});
function br(a) {
    switch(a){
        case "join":
            return "JOIN";
        case "offer":
            return "PUBLISH";
        case "answer":
            return "SUBSCRIBE";
        case "track-update":
            return "TRACK";
        default:
            return "NONE";
    }
}
var yo = [
    "join",
    "offer",
    "answer",
    "trickle",
    "on-error",
    "JOIN"
], S = {
    WebSocketConnectionErrors: {
        FailedToConnect (a, e = "") {
            return new k(P.WebSocketConnectionErrors.FAILED_TO_CONNECT, "WebsocketFailedToConnect", a, `[WS]: ${e}`, `[WS]: ${e}`);
        },
        WebSocketConnectionLost (a, e = "") {
            return new k(P.WebSocketConnectionErrors.WEBSOCKET_CONNECTION_LOST, "WebSocketConnectionLost", a, "Network connection lost", e);
        },
        AbnormalClose (a, e = "") {
            return new k(P.WebSocketConnectionErrors.ABNORMAL_CLOSE, "WebSocketAbnormalClose", a, "Websocket closed abnormally", e);
        }
    },
    APIErrors: {
        ServerErrors (a, e, t = "", i = !0) {
            return new k(a, "ServerErrors", e, `[${e}]: Server error ${t}`, t, i);
        },
        EndpointUnreachable (a, e = "") {
            return new k(P.APIErrors.ENDPOINT_UNREACHABLE, "EndpointUnreachable", a, `Endpoint is not reachable - ${e}`, e);
        },
        InvalidTokenFormat (a, e = "") {
            return new k(P.APIErrors.INVALID_TOKEN_FORMAT, "InvalidTokenFormat", a, `Token is not in proper JWT format - ${e}`, e, !0);
        },
        InitConfigNotAvailable (a, e = "") {
            return new k(P.APIErrors.INIT_CONFIG_NOT_AVAILABLE, "InitError", a, `[INIT]: ${e}`, `[INIT]: ${e}`);
        }
    },
    TracksErrors: {
        GenericTrack (a, e = "") {
            return new W(P.TracksErrors.GENERIC_TRACK, "GenericTrack", a, `[TRACK]: ${e}`, `[TRACK]: ${e}`, "audio, video");
        },
        CantAccessCaptureDevice (a, e, t = "") {
            return new W(P.TracksErrors.CANT_ACCESS_CAPTURE_DEVICE, "CantAccessCaptureDevice", a, `User denied permission to access capture device - ${e}`, t, e);
        },
        DeviceNotAvailable (a, e, t = "") {
            return new W(P.TracksErrors.DEVICE_NOT_AVAILABLE, "DeviceNotAvailable", a, `[TRACK]: Capture device is no longer available - ${e}`, t, e);
        },
        DeviceInUse (a, e, t = "") {
            return new W(P.TracksErrors.DEVICE_IN_USE, "DeviceInUse", a, `[TRACK]: Capture device is in use by another application - ${e}`, t, e);
        },
        DeviceLostMidway (a, e, t = "") {
            return new W(P.TracksErrors.DEVICE_LOST_MIDWAY, "DeviceLostMidway", a, `Lost access to capture device midway - ${e}`, t, e);
        },
        NothingToReturn (a, e = "", t = "There is no media to return. Please select either video or audio or both.") {
            return new W(P.TracksErrors.NOTHING_TO_RETURN, "NothingToReturn", a, t, e, "audio, video");
        },
        InvalidVideoSettings (a, e = "") {
            return new W(P.TracksErrors.INVALID_VIDEO_SETTINGS, "InvalidVideoSettings", a, "Cannot enable simulcast when no video settings are provided", e, "video");
        },
        AutoplayBlocked (a, e = "") {
            return new W(P.TracksErrors.AUTOPLAY_ERROR, "AutoplayBlocked", a, "Autoplay blocked because the user didn't interact with the document first", e, "audio");
        },
        CodecChangeNotPermitted (a, e = "") {
            return new W(P.TracksErrors.CODEC_CHANGE_NOT_PERMITTED, "CodecChangeNotPermitted", a, "Codec can't be changed mid call.", e, "audio, video");
        },
        OverConstrained (a, e, t = "") {
            return new W(P.TracksErrors.OVER_CONSTRAINED, "OverConstrained", a, `[TRACK]: Requested constraints cannot be satisfied with the device hardware - ${e}`, t, e);
        },
        NoAudioDetected (a, e = "Please check the mic or use another audio input") {
            return new W(P.TracksErrors.NO_AUDIO_DETECTED, "NoAudioDetected", a, "No audio input detected from microphone", e, "audio");
        },
        SystemDeniedPermission (a, e, t = "") {
            return new W(P.TracksErrors.SYSTEM_DENIED_PERMISSION, "SystemDeniedPermission", a, `Operating System denied permission to access capture device - ${e}`, t, e);
        },
        CurrentTabNotShared () {
            return new W(P.TracksErrors.CURRENT_TAB_NOT_SHARED, "CurrentTabNotShared", "TRACK", "The app requires you to share the current tab", "You must screen share the current tab in order to proceed", "screen");
        },
        AudioPlaybackError (a) {
            return new W(P.TracksErrors.AUDIO_PLAYBACK_ERROR, "Audio playback error", "TRACK", a, a, "audio");
        },
        SelectedDeviceMissing (a) {
            return new W(P.TracksErrors.SELECTED_DEVICE_MISSING, "SelectedDeviceMissing", "TRACK", `Could not detect selected ${a} device`, `Please check connection to the ${a} device`, a);
        },
        NoDataInTrack (a) {
            return new W(P.TracksErrors.NO_DATA, "Track does not have any data", "TRACK", a, "This could possibily due to another application taking priority over the access to camera or microphone or due to an incoming call", "audio, video");
        }
    },
    WebrtcErrors: {
        CreateOfferFailed (a, e = "") {
            return new k(P.WebrtcErrors.CREATE_OFFER_FAILED, "CreateOfferFailed", a, `[${a.toString()}]: Failed to create offer. `, e);
        },
        CreateAnswerFailed (a, e = "") {
            return new k(P.WebrtcErrors.CREATE_ANSWER_FAILED, "CreateAnswerFailed", a, `[${a.toString()}]: Failed to create answer. `, e);
        },
        SetLocalDescriptionFailed (a, e = "") {
            return new k(P.WebrtcErrors.SET_LOCAL_DESCRIPTION_FAILED, "SetLocalDescriptionFailed", a, `[${a.toString()}]: Failed to set offer. `, e);
        },
        SetRemoteDescriptionFailed (a, e = "") {
            return new k(P.WebrtcErrors.SET_REMOTE_DESCRIPTION_FAILED, "SetRemoteDescriptionFailed", a, `[${a.toString()}]: Failed to set answer. `, e, !0);
        },
        ICEFailure (a, e = "", t = !1) {
            return new k(P.WebrtcErrors.ICE_FAILURE, "ICEFailure", a, `[${a.toString()}]: Ice connection state FAILED`, e, t);
        },
        ICEDisconnected (a, e = "") {
            return new k(P.WebrtcErrors.ICE_DISCONNECTED, "ICEDisconnected", a, `[${a.toString()}]: Ice connection state DISCONNECTED`, e);
        },
        StatsFailed (a, e = "") {
            return new k(P.WebrtcErrors.STATS_FAILED, "StatsFailed", a, `Failed to WebRTC get stats - ${e}`, e);
        }
    },
    WebsocketMethodErrors: {
        ServerErrors (a, e, t) {
            return new k(a, "ServerErrors", e, t, t, yo.includes(e));
        },
        AlreadyJoined (a, e = "") {
            return new k(P.WebsocketMethodErrors.ALREADY_JOINED, "AlreadyJoined", a, "[JOIN]: You have already joined this room.", e);
        },
        CannotJoinPreviewInProgress (a, e = "") {
            return new k(P.WebsocketMethodErrors.CANNOT_JOIN_PREVIEW_IN_PROGRESS, "CannotJoinPreviewInProgress", a, "[JOIN]: Cannot join if preview is in progress", e);
        }
    },
    GenericErrors: {
        NotConnected (a, e = "") {
            return new k(P.GenericErrors.NOT_CONNECTED, "NotConnected", a, "Client is not connected", e);
        },
        Signalling (a, e) {
            return new k(P.GenericErrors.SIGNALLING, "Signalling", a, `Unknown signalling error: ${a.toString()} ${e} `, e);
        },
        Unknown (a, e) {
            return new k(P.GenericErrors.UNKNOWN, "Unknown", a, `Unknown exception: ${e}`, e);
        },
        NotReady (a, e = "") {
            return new k(P.GenericErrors.NOT_READY, "NotReady", a, e, e);
        },
        JsonParsingFailed (a, e, t = "") {
            return new k(P.GenericErrors.JSON_PARSING_FAILED, "JsonParsingFailed", a, `Failed to parse JSON message - ${e}`, t);
        },
        TrackMetadataMissing (a, e = "") {
            return new k(P.GenericErrors.TRACK_METADATA_MISSING, "TrackMetadataMissing", a, "Track Metadata Missing", e);
        },
        RTCTrackMissing (a, e = "") {
            return new k(P.GenericErrors.RTC_TRACK_MISSING, "RTCTrackMissing", a, "RTC Track missing", e);
        },
        PeerMetadataMissing (a, e = "") {
            return new k(P.GenericErrors.PEER_METADATA_MISSING, "PeerMetadataMissing", a, "Peer Metadata Missing", e);
        },
        ValidationFailed (a, e) {
            return new k(P.GenericErrors.VALIDATION_FAILED, "ValidationFailed", "VALIDATION", a, e ? JSON.stringify(e) : "");
        },
        InvalidRole (a, e) {
            return new k(P.GenericErrors.INVALID_ROLE, "InvalidRole", a, "Invalid role. Join with valid role", e, !0);
        },
        PreviewAlreadyInProgress (a, e = "") {
            return new k(P.GenericErrors.PREVIEW_IN_PROGRESS, "PreviewAlreadyInProgress", a, "[Preview]: Cannot join if preview is in progress", e);
        },
        LocalStorageAccessDenied (a = "Access to localStorage has been denied") {
            return new k(P.GenericErrors.LOCAL_STORAGE_ACCESS_DENIED, "LocalStorageAccessDenied", "NONE", "LocalStorageAccessDenied", a);
        },
        MissingMediaDevices () {
            return new k(P.GenericErrors.MISSING_MEDIADEVICES, "MissingMediaDevices", "JOIN", "navigator.mediaDevices is undefined. 100ms SDK won't work on this website as WebRTC is not supported on HTTP endpoints(missing navigator.mediaDevices). Please ensure you're using the SDK either on localhost or a valid HTTPS endpoint.", "", !0);
        },
        MissingRTCPeerConnection () {
            return new k(P.GenericErrors.MISSING_RTCPEERCONNECTION, "MissingRTCPeerConnection", "JOIN", "RTCPeerConnection which is a core requirement for WebRTC call was not found, this could be due to an unsupported browser or browser extensions blocking WebRTC", "", !0);
        }
    },
    MediaPluginErrors: {
        PlatformNotSupported (a, e = "") {
            return new k(7001, "PlatformNotSupported", a, "Check HMS Docs to see the list of supported platforms", e);
        },
        InitFailed (a, e = "") {
            return new k(7002, "InitFailed", a, "Plugin init failed", e);
        },
        ProcessingFailed (a, e = "") {
            return new k(7003, "ProcessingFailed", a, "Plugin processing failed", e);
        },
        AddAlreadyInProgress (a, e = "") {
            return new k(7004, "AddAlreadyInProgress", a, "Plugin add already in progress", e);
        },
        DeviceNotSupported (a, e = "") {
            return new k(7005, "DeviceNotSupported", a, "Check HMS Docs to see the list of supported devices", e);
        }
    },
    PlaylistErrors: {
        NoEntryToPlay (a, e) {
            return new k(P.PlaylistErrors.NO_ENTRY_TO_PLAY, "NoEntryToPlay", a, "Reached end of playlist", e);
        },
        NoEntryPlaying (a, e) {
            return new k(P.PlaylistErrors.NO_ENTRY_IS_PLAYING, "NoEntryIsPlaying", a, "No entry is playing at this time", e);
        }
    }
};
var Ar = class {
    constructor(){
        this.valuesMap = new Map;
    }
    getItem(e) {
        return this.valuesMap.has(e) ? String(this.valuesMap.get(e)) : null;
    }
    setItem(e, t) {
        this.valuesMap.set(e, t);
    }
    removeItem(e) {
        this.valuesMap.delete(e);
    }
    clear() {
        this.valuesMap.clear();
    }
    key(e) {
        if (arguments.length === 0) throw new TypeError("Failed to execute 'key' on 'Storage': 1 argument required, but only 0 present.");
        return Array.from(this.valuesMap.keys())[e];
    }
    get length() {
        return this.valuesMap.size;
    }
}, ws = ()=>{
    try {
        U && !localStorage && (window.localStorage = new Ar);
    } catch (a) {
        l.e("Error initialising localStorage", S.GenericErrors.LocalStorageAccessDenied());
    }
};
var fe = class {
    constructor(e){
        this.key = e;
        this.storage = null;
    }
    getStorage() {
        try {
            return U && !this.storage && (ws(), this.storage = window.localStorage), this.storage;
        } catch (e) {
            return l.e("Error initialising localStorage", S.GenericErrors.LocalStorageAccessDenied()), null;
        }
    }
    get() {
        var i;
        let e = (i = this.getStorage()) == null ? void 0 : i.getItem(this.key);
        return e ? JSON.parse(e) : void 0;
    }
    set(e) {
        var i;
        let t = JSON.stringify(e);
        (i = this.getStorage()) == null || i.setItem(this.key, t);
    }
    clear() {
        var e;
        (e = this.getStorage()) == null || e.removeItem(this.key);
    }
};
var li = ()=>{
    let a, e = new fe("hms-analytics-deviceId"), t = e.get();
    return t ? a = t : (a = (0, _uuid.v4)(), e.set(a)), a;
};
var _s = "[VALIDATIONS]";
function he(a) {
    return a != null;
}
var yt = ()=>{
    if (!he(RTCPeerConnection)) {
        let a = S.GenericErrors.MissingRTCPeerConnection();
        throw l.e(_s, a), a;
    }
}, kt = ()=>{
    if (!he(navigator.mediaDevices)) {
        let a = S.GenericErrors.MissingMediaDevices();
        throw l.e(_s, a), a;
    }
}, Ns = (a)=>{
    if (!a.getPublishParams()) throw S.GenericErrors.NotConnected("VALIDATION", "call addTrack after preview or join is successful");
};
var Os = Ir().version;
function Et(a = "prod", e) {
    let t = "web", i = Xe !== "LOCAL" && a === "prod" ? "prod" : "debug";
    if (Ge) return xs({
        os: "web_nodejs",
        os_version: process.version,
        sdk: t,
        sdk_version: Os,
        env: i,
        domain: Xe,
        is_prebuilt: !!(e != null && e.isPrebuilt),
        framework: "node",
        framework_version: process.version,
        framework_sdk_version: e == null ? void 0 : e.sdkVersion
    });
    let r = Te.getOS(), s = Te.getDevice(), o = Te.getBrowser(), n = Rr(`web_${r.name}`), d = r.version || "", u = Rr(`${o.name}_${o.version}`), p = u;
    return s.type && (p = `${Rr(`${s.vendor}_${s.type}`)}/${u}`), xs({
        os: n,
        os_version: d,
        sdk: t,
        sdk_version: Os,
        device_model: p,
        env: i,
        domain: Xe,
        is_prebuilt: !!(e != null && e.isPrebuilt),
        framework: e == null ? void 0 : e.type,
        framework_version: e == null ? void 0 : e.version,
        framework_sdk_version: e == null ? void 0 : e.sdkVersion
    });
}
function Rr(a) {
    return a.replace(/ /g, "_");
}
var xs = (a, e = ",")=>Object.keys(a).filter((t)=>he(a[t])).map((t)=>`${t}:${a[t]}`).join(e);
var C = class {
    constructor({ name: e, level: t, properties: i, includesPII: r, timestamp: s }){
        this.metadata = {
            peer: {},
            userAgent: Et()
        };
        this.name = e, this.level = t, this.includesPII = r || !1, this.properties = i || {}, this.timestamp = s || new Date().getTime(), this.event_id = (0, _uuid.v4)(), this.device_id = li();
    }
    toSignalParams() {
        return {
            name: this.name,
            info: M(m({}, this.properties), {
                timestamp: this.timestamp,
                domain: Xe
            }),
            timestamp: new Date().getTime()
        };
    }
};
var y = class {
    static connect(e, t, i = new Date, r = new Date, s) {
        let o = this.eventNameFor("connect", e === void 0), n = e ? 2 : 1, d = this.getPropertiesWithError(M(m({}, t), {
            [this.KEY_REQUESTED_AT]: i == null ? void 0 : i.getTime(),
            [this.KEY_RESPONDED_AT]: r == null ? void 0 : r.getTime(),
            endpoint: s
        }), e);
        return new C({
            name: o,
            level: n,
            properties: d
        });
    }
    static disconnect(e, t) {
        let i = "disconnected", r = e ? 2 : 1, s = this.getPropertiesWithError(t, e);
        return new C({
            name: i,
            level: r,
            properties: s
        });
    }
    static preview(i) {
        var r = i, { error: e } = r, t = kr(r, [
            "error"
        ]);
        let s = this.eventNameFor("preview", e === void 0), o = e ? 2 : 1, n = this.getPropertiesWithError(t, e);
        return new C({
            name: s,
            level: o,
            properties: n
        });
    }
    static join(i) {
        var r = i, { error: e } = r, t = kr(r, [
            "error"
        ]);
        let s = this.eventNameFor("join", e === void 0), o = e ? 2 : 1, n = this.getPropertiesWithError(M(m({}, t), {
            is_preview_called: !!t.is_preview_called
        }), e);
        return new C({
            name: s,
            level: o,
            properties: n
        });
    }
    static publish({ devices: e, settings: t, error: i }) {
        let r = this.eventNameFor("publish", i === void 0), s = i ? 2 : 1, o = this.getPropertiesWithError({
            devices: e,
            audio: t == null ? void 0 : t.audio,
            video: t == null ? void 0 : t.video
        }, i);
        return new C({
            name: r,
            level: s,
            properties: o
        });
    }
    static hlsPlayerError(e) {
        return new C({
            name: "hlsPlayerError",
            level: 2,
            properties: this.getErrorProperties(e)
        });
    }
    static subscribeFail(e) {
        let t = this.eventNameFor("subscribe", !1), i = 2, r = this.getErrorProperties(e);
        return new C({
            name: t,
            level: i,
            properties: r
        });
    }
    static leave() {
        return new C({
            name: "leave",
            level: 1
        });
    }
    static autoplayError() {
        return new C({
            name: "autoplayError",
            level: 2
        });
    }
    static audioPlaybackError(e) {
        return new C({
            name: "audioPlaybackError",
            level: 2,
            properties: this.getErrorProperties(e)
        });
    }
    static audioRecovered(e) {
        return new C({
            name: "audioRecovered",
            level: 1,
            properties: {
                message: e
            }
        });
    }
    static permissionChange(e, t) {
        return new C({
            name: "permissionChanged",
            level: 1,
            properties: {
                message: `Perrmission for ${e} changed to ${t}`
            }
        });
    }
    static deviceChange({ isUserSelection: e, selection: t, type: i, devices: r, error: s }) {
        let o = this.eventNameFor(s ? "publish" : `device.${i}`, s === void 0), n = s ? 2 : 1, d = this.getPropertiesWithError({
            selection: t,
            devices: r,
            isUserSelection: e
        }, s);
        return new C({
            name: o,
            level: n,
            properties: d
        });
    }
    static performance(e) {
        let t = "perf.stats", i = 1, r = e.toAnalyticsProperties();
        return new C({
            name: t,
            level: i,
            properties: r
        });
    }
    static rtcStats(e) {
        let t = "rtc.stats", i = 1, r = e.toAnalyticsProperties();
        return new C({
            name: t,
            level: i,
            properties: r
        });
    }
    static rtcStatsFailed(e) {
        let t = "rtc.stats.failed", i = 2;
        return new C({
            name: t,
            level: i,
            properties: this.getErrorProperties(e)
        });
    }
    static degradationStats(e, t) {
        let i = "video.degradation.stats", r = 1, s = {
            degradedAt: e.degradedAt,
            trackId: e.trackId
        };
        if (!t && e.degradedAt instanceof Date) {
            let o = new Date, n = o.valueOf() - e.degradedAt.valueOf();
            s = M(m({}, s), {
                duration: n,
                restoredAt: o
            });
        }
        return new C({
            name: i,
            level: r,
            properties: s
        });
    }
    static audioDetectionFail(e, t) {
        let i = this.getPropertiesWithError({
            device: t
        }, e), r = 2, s = "audiopresence.failed";
        return new C({
            name: s,
            level: r,
            properties: i
        });
    }
    static previewNetworkQuality(e) {
        return new C({
            name: "perf.networkquality.preview",
            level: e.error ? 2 : 1,
            properties: e
        });
    }
    static publishStats(e) {
        return new C({
            name: "publisher.stats",
            level: 1,
            properties: e
        });
    }
    static subscribeStats(e) {
        return new C({
            name: "subscriber.stats",
            level: 1,
            properties: e
        });
    }
    static getKrispUsage(e) {
        return new C({
            name: "krisp.usage",
            level: 1,
            properties: {
                duration: e
            }
        });
    }
    static krispStart() {
        return new C({
            name: "krisp.start",
            level: 1
        });
    }
    static krispStop() {
        return new C({
            name: "krisp.stop",
            level: 1
        });
    }
    static interruption({ started: e, type: t, reason: i, deviceInfo: r }) {
        return new C({
            name: `${e ? "interruption.start" : "interruption.stop"}`,
            level: 1,
            properties: m({
                reason: i,
                type: t
            }, r)
        });
    }
    static eventNameFor(e, t) {
        return `${e}.${t ? "success" : "failed"}`;
    }
    static getPropertiesWithError(e, t) {
        let i = this.getErrorProperties(t);
        return e = m(m({}, i), e), e;
    }
    static getErrorProperties(e) {
        return e ? e instanceof k ? e.toAnalyticsProperties() : {
            error_name: e.name,
            error_message: e.message,
            error_description: e.cause
        } : {};
    }
};
y.KEY_REQUESTED_AT = "requested_at", y.KEY_RESPONDED_AT = "responded_at";
var ui = (a)=>a ? `{
    trackId: ${a.id};
    kind: ${a.kind};
    enabled: ${a.enabled};
    muted: ${a.muted};
    readyState: ${a.readyState};
  }` : "";
var De = class {
    constructor(e, t, i){
        this.logIdentifier = "";
        this.isTrackNotPublishing = ()=>this.nativeTrack.readyState === "ended" || this.nativeTrack.muted;
        this.stream = e, this.nativeTrack = t, this.source = i;
    }
    get enabled() {
        return this.nativeTrack.enabled;
    }
    get trackId() {
        return this.firstTrackId || this.sdpTrackId || this.nativeTrack.id;
    }
    getMediaTrackSettings() {
        return this.nativeTrack.getSettings();
    }
    setEnabled(e) {
        return c(this, null, function*() {
            this.nativeTrack.enabled = e;
        });
    }
    setSdpTrackId(e) {
        this.sdpTrackId = e;
    }
    setFirstTrackId(e) {
        this.firstTrackId = e;
    }
    sendInterruptionEvent({ started: e, reason: t }) {
        return y.interruption({
            started: e,
            type: this.type,
            reason: t,
            deviceInfo: {
                deviceId: this.nativeTrack.getSettings().deviceId,
                groupId: this.nativeTrack.getSettings().groupId
            }
        });
    }
    cleanup() {
        var e;
        l.d("[HMSTrack]", "Stopping track", this.toString()), (e = this.nativeTrack) == null || e.stop();
    }
    toString() {
        var e;
        return `{
      streamId: ${this.stream.id};
      peerId: ${this.peerId};
      trackId: ${this.trackId};
      mid: ${((e = this.transceiver) == null ? void 0 : e.mid) || "-"};
      logIdentifier: ${this.logIdentifier};
      source: ${this.source};
      enabled: ${this.enabled};
      nativeTrack: ${ui(this.nativeTrack)};
    }`;
    }
};
var we = class extends De {
    constructor(t, i, r){
        super(t, i, r);
        this.type = "audio";
        this.audioElement = null;
        if (i.kind !== "audio") throw new Error("Expected 'track' kind = 'audio'");
    }
    getVolume() {
        return this.audioElement ? Math.floor(this.audioElement.volume * 100) : null;
    }
    setVolume(t) {
        return c(this, null, function*() {
            if (t < 0 || t > 100) throw Error("Please pass a valid number between 0-100");
            yield this.subscribeToAudio(t === 0 ? !1 : this.enabled), this.audioElement && (this.audioElement.volume = t / 100);
        });
    }
    setAudioElement(t) {
        l.d("[HMSAudioTrack]", this.logIdentifier, "adding audio element", `${this}`, t), this.audioElement = t;
    }
    getAudioElement() {
        return this.audioElement;
    }
    getOutputDevice() {
        return this.outputDevice;
    }
    cleanup() {
        super.cleanup(), this.audioElement && (this.audioElement.srcObject = null, this.audioElement.remove(), this.audioElement = null);
    }
    setOutputDevice(t) {
        return c(this, null, function*() {
            var i;
            if (!t) {
                l.d("[HMSAudioTrack]", this.logIdentifier, "device is null", `${this}`);
                return;
            }
            if (!this.audioElement) {
                l.d("[HMSAudioTrack]", this.logIdentifier, "no audio element to set output", `${this}`), this.outputDevice = t;
                return;
            }
            try {
                typeof this.audioElement.setSinkId == "function" && (di || (yield (i = this.audioElement) == null ? void 0 : i.setSinkId(t.deviceId)), this.outputDevice = t);
            } catch (r) {
                l.d("[HMSAudioTrack]", "error in setSinkId", r);
            }
        });
    }
    subscribeToAudio(t) {
        return c(this, null, function*() {
            this.stream instanceof Pe && (yield this.stream.setAudio(t, this.trackId, this.logIdentifier));
        });
    }
};
var Hr = class {
    constructor(){
        this.storage = new fe("hms-device-selection");
        this.remember = !1;
        this.TAG = "[HMSDeviceStorage]";
    }
    setDevices(e) {
        this.devices = e;
    }
    rememberDevices(e) {
        this.remember = e;
    }
    updateSelection(e, { deviceId: t, groupId: i }) {
        if (!this.devices || !this.remember) return;
        let r = this.devices[e].find((o)=>this.isSame({
                deviceId: t,
                groupId: i
            }, o));
        if (!r) {
            l.w(this.TAG, `Could not find device with deviceId: ${t}, groupId: ${i}`);
            return;
        }
        let s = this.storage.get() || {};
        s[e] = r, this.storage.set(s);
    }
    getSelection() {
        if (this.remember) return this.storage.get();
    }
    cleanup() {
        this.remember = !1, this.devices = void 0;
    }
    isSame(e, t) {
        return e.deviceId === t.deviceId && (e.groupId === t.groupId || !e.groupId);
    }
}, X = new Hr;
var Cr = ((t)=>(t.TRANSFORM = "TRANSFORM", t.ANALYZE = "ANALYZE", t))(Cr || {}), Lr = ((t)=>(t.PLATFORM_NOT_SUPPORTED = "PLATFORM_NOT_SUPPORTED", t.DEVICE_NOT_SUPPORTED = "DEVICE_NOT_SUPPORTED", t))(Lr || {});
var me = class {
    static failure(e, t) {
        let i = "mediaPlugin.failed", r = 2, s = m({
            plugin_name: e
        }, t.toAnalyticsProperties());
        return new C({
            name: i,
            level: r,
            properties: s
        });
    }
    static audioPluginFailure(e, t, i) {
        let r = "mediaPlugin.failed", s = 2, o = m({
            plugin_name: e,
            sampleRate: t
        }, i.toAnalyticsProperties());
        return new C({
            name: r,
            level: s,
            properties: o
        });
    }
    static audioPluginStats({ pluginName: e, duration: t, loadTime: i, sampleRate: r }) {
        let s = "mediaPlugin.stats", o = 1, n = {
            plugin_name: e,
            duration: t,
            load_time: i,
            sampleRate: r
        };
        return new C({
            name: s,
            level: o,
            properties: n
        });
    }
    static added(e, t) {
        let i = "mediaPlugin.added", r = 1, s = {
            plugin_name: e,
            added_at: t
        };
        return new C({
            name: i,
            level: r,
            properties: s
        });
    }
    static stats({ pluginName: e, duration: t, loadTime: i, avgPreProcessingTime: r, avgProcessingTime: s, inputFrameRate: o, pluginFrameRate: n }) {
        let d = "mediaPlugin.stats", u = 1, p = {
            plugin_name: e,
            duration: t,
            load_time: i,
            avg_preprocessing_time: r,
            avg_processing_time: s,
            input_frame_rate: o,
            plugin_frame_rate: n
        };
        return new C({
            name: d,
            level: u,
            properties: p
        });
    }
};
var pi = class {
    constructor(e){
        this.eventBus = e;
        this.TAG = "[AudioPluginsAnalytics]";
        this.initTime = {}, this.addedTimestamps = {}, this.pluginAdded = {}, this.pluginSampleRate = {};
    }
    added(e, t) {
        this.pluginAdded[e] = !0, this.addedTimestamps[e] = Date.now(), this.initTime[e] = 0, this.pluginSampleRate[e] = t, this.eventBus.analytics.publish(me.added(e, this.addedTimestamps[e]));
    }
    removed(e) {
        if (this.pluginAdded[e]) {
            let t = {
                pluginName: e,
                duration: Math.floor((Date.now() - this.addedTimestamps[e]) / 1e3),
                loadTime: this.initTime[e],
                sampleRate: this.pluginSampleRate[e]
            };
            this.eventBus.analytics.publish(me.audioPluginStats(t)), this.clean(e);
        }
    }
    failure(e, t) {
        this.pluginAdded[e] && (this.eventBus.analytics.publish(me.audioPluginFailure(e, this.pluginSampleRate[e], t)), this.clean(e));
    }
    initWithTime(e, t) {
        return c(this, null, function*() {
            if (this.initTime[e]) {
                l.i(this.TAG, `Plugin Already loaded ${e}, time it took: ${this.initTime[e]}`);
                return;
            }
            let i;
            try {
                i = yield this.timeInMs(t), l.i(this.TAG, `Time taken for Plugin ${e} initialization : ${i}`);
            } catch (r) {
                let s = S.MediaPluginErrors.InitFailed("AUDIO_PLUGINS", `failed during initialization of plugin${r.message || r}`);
                throw l.e(this.TAG, s), this.failure(e, s), s;
            }
            i && (this.initTime[e] = i);
        });
    }
    timeInMs(e) {
        return c(this, null, function*() {
            let t = Date.now();
            return yield e(), Math.floor(Date.now() - t);
        });
    }
    clean(e) {
        delete this.addedTimestamps[e], delete this.initTime[e], delete this.pluginAdded[e], delete this.pluginSampleRate[e];
    }
};
var Pt = class {
    constructor(e, t, i){
        this.eventBus = t;
        this.TAG = "[AudioPluginsManager]";
        this.pluginAddInProgress = !1;
        this.hmsTrack = e, this.pluginsMap = new Map, this.analytics = new pi(t), this.audioContext = ce.getAudioContext(), this.room = i;
    }
    getPlugins() {
        return Array.from(this.pluginsMap.keys());
    }
    addPlugin(e) {
        return c(this, null, function*() {
            var i, r;
            let t = (i = e.getName) == null ? void 0 : i.call(e);
            if (!t) {
                l.w("no name provided by the plugin");
                return;
            }
            if (this.pluginAddInProgress) {
                let s = S.MediaPluginErrors.AddAlreadyInProgress("AUDIO_PLUGINS", "Add Plugin is already in Progress");
                throw this.analytics.added(t, this.audioContext.sampleRate), this.analytics.failure(t, s), l.w("can't add another plugin when previous add is in progress"), s;
            }
            switch(e.getName()){
                case "HMSKrispPlugin":
                    if (!((r = this.room) != null && r.isNoiseCancellationEnabled)) {
                        let s = "Krisp Noise Cancellation is not enabled for this room";
                        if (this.pluginsMap.size === 0) throw Error(s);
                        l.w(this.TAG, s);
                        return;
                    }
                    this.eventBus.analytics.publish(y.krispStart());
                    break;
                default:
            }
            this.pluginAddInProgress = !0;
            try {
                yield this.addPluginInternal(e);
            } finally{
                this.pluginAddInProgress = !1;
            }
        });
    }
    addPluginInternal(e) {
        return c(this, null, function*() {
            var i, r;
            let t = (i = e.getName) == null ? void 0 : i.call(e);
            if (this.pluginsMap.get(t)) {
                l.w(this.TAG, `plugin - ${t} already added.`);
                return;
            }
            yield this.validateAndThrow(t, e), (r = e.setEventBus) == null || r.call(e, this.eventBus);
            try {
                this.pluginsMap.size === 0 ? yield this.initAudioNodes() : this.prevAudioNode && this.prevAudioNode.disconnect(), this.analytics.added(t, this.audioContext.sampleRate), yield this.analytics.initWithTime(t, ()=>c(this, null, function*() {
                        return e.init();
                    })), this.pluginsMap.set(t, e), yield this.processPlugin(e), yield this.connectToDestination(), yield this.updateProcessedTrack();
            } catch (s) {
                throw l.e(this.TAG, "failed to add plugin", s), s;
            }
        });
    }
    validatePlugin(e) {
        return e.checkSupport(this.audioContext);
    }
    validateAndThrow(e, t) {
        return c(this, null, function*() {
            let i = this.validatePlugin(t);
            if (i.isSupported) l.i(this.TAG, `plugin is supported,- ${t.getName()}`);
            else if (this.analytics.added(e, this.audioContext.sampleRate), i.errType === "PLATFORM_NOT_SUPPORTED") {
                let r = S.MediaPluginErrors.PlatformNotSupported("AUDIO_PLUGINS", "platform not supported, see docs");
                throw this.analytics.failure(e, r), yield this.cleanup(), r;
            } else if (i.errType === "DEVICE_NOT_SUPPORTED") {
                let r = S.MediaPluginErrors.DeviceNotSupported("AUDIO_PLUGINS", "audio device not supported, see docs");
                throw this.analytics.failure(e, r), yield this.cleanup(), r;
            }
        });
    }
    removePlugin(e) {
        return c(this, null, function*() {
            switch(e.getName()){
                case "HMSKrispPlugin":
                    this.eventBus.analytics.publish(y.krispStop());
                    break;
                default:
                    break;
            }
            yield this.removePluginInternal(e), this.pluginsMap.size === 0 ? (yield this.cleanup(), l.i(this.TAG, "No plugins left, stopping plugins loop"), yield this.hmsTrack.setProcessedTrack(void 0)) : yield this.reprocessPlugins();
        });
    }
    cleanup() {
        return c(this, null, function*() {
            var e, t, i;
            for (let r of this.pluginsMap.values())yield this.removePluginInternal(r);
            yield this.hmsTrack.setProcessedTrack(void 0), (e = this.sourceNode) == null || e.disconnect(), (t = this.prevAudioNode) == null || t.disconnect(), (i = this.outputTrack) == null || i.stop(), this.sourceNode = void 0, this.destinationNode = void 0, this.prevAudioNode = void 0, this.outputTrack = void 0;
        });
    }
    closeContext() {
        return c(this, null, function*() {
            this.audioContext = void 0;
        });
    }
    reprocessPlugins() {
        return c(this, null, function*() {
            if (this.pluginsMap.size === 0 || !this.sourceNode) return;
            let e = Array.from(this.pluginsMap.values());
            yield this.cleanup(), yield this.initAudioNodes();
            for (let t of e)yield this.addPlugin(t);
            yield this.updateProcessedTrack();
        });
    }
    initAudioNodes() {
        return c(this, null, function*() {
            if (this.audioContext) {
                let e = new MediaStream([
                    this.hmsTrack.nativeTrack
                ]);
                this.sourceNode = this.audioContext.createMediaStreamSource(e), this.destinationNode || (this.destinationNode = this.audioContext.createMediaStreamDestination(), this.outputTrack = this.destinationNode.stream.getAudioTracks()[0]);
            }
        });
    }
    updateProcessedTrack() {
        return c(this, null, function*() {
            try {
                yield this.hmsTrack.setProcessedTrack(this.outputTrack);
            } catch (e) {
                throw l.e(this.TAG, "error in setting processed track", e), e;
            }
        });
    }
    processPlugin(e) {
        return c(this, null, function*() {
            try {
                let t = yield e.processAudioTrack(this.audioContext, this.prevAudioNode || this.sourceNode);
                this.prevAudioNode && this.prevAudioNode.connect(t), this.prevAudioNode = t;
            } catch (t) {
                let i = e.getName();
                l.e(this.TAG, `error in processing plugin ${i}`, t), yield this.removePluginInternal(e);
            }
        });
    }
    connectToDestination() {
        return c(this, null, function*() {
            try {
                this.prevAudioNode && this.destinationNode && this.prevAudioNode.context === this.destinationNode.context && this.prevAudioNode.connect(this.destinationNode);
            } catch (e) {
                l.e(this.TAG, "error in connecting to destination node", e);
            }
        });
    }
    removePluginInternal(e) {
        return c(this, null, function*() {
            var i;
            let t = (i = e.getName) == null ? void 0 : i.call(e);
            if (!this.pluginsMap.get(t)) {
                l.w(this.TAG, `plugin - ${t} not found to remove.`);
                return;
            }
            l.i(this.TAG, `removing plugin ${t}`), this.pluginsMap.delete(t), e.stop(), this.analytics.removed(t);
        });
    }
};
function bo(a, e) {
    let t = a.toLowerCase(), i = S.TracksErrors.GenericTrack("TRACK", a);
    return t.includes("device not found") ? i = S.TracksErrors.DeviceNotAvailable("TRACK", e, a) : t.includes("permission denied") && (i = S.TracksErrors.CantAccessCaptureDevice("TRACK", e, a)), i;
}
function Ao(a, e = "") {
    if ((0, _webrtcAdapterDefault.default).browserDetails.browser === "chrome" && a.name === "NotAllowedError" && a.message.includes("denied by system")) return S.TracksErrors.SystemDeniedPermission("TRACK", e, a.message);
    if ((0, _webrtcAdapterDefault.default).browserDetails.browser === "firefox" && a.name === "NotFoundError") {
        let i = S.TracksErrors.SystemDeniedPermission("TRACK", e, a.message);
        return i.description = `Capture device is either blocked at Operating System level or not available - ${e}`, i;
    }
    switch(a.name){
        case "OverconstrainedError":
            return S.TracksErrors.OverConstrained("TRACK", e, a.constraint);
        case "NotAllowedError":
            return S.TracksErrors.CantAccessCaptureDevice("TRACK", e, a.message);
        case "NotFoundError":
            return S.TracksErrors.DeviceNotAvailable("TRACK", e, a.message);
        case "NotReadableError":
            return S.TracksErrors.DeviceInUse("TRACK", e, a.message);
        case "TypeError":
            return S.TracksErrors.NothingToReturn("TRACK", a.message);
        default:
            return bo(a.message, e);
    }
}
function _e(a, e) {
    let t = Ao(a, e);
    return t.addNativeError(a), t;
}
function Dr(a) {
    return c(this, null, function*() {
        try {
            return (yield navigator.mediaDevices.getUserMedia({
                audio: a ? a.toConstraints() : !1
            })).getAudioTracks()[0];
        } catch (e) {
            throw _e(e, "audio");
        }
    });
}
function wr(a) {
    return c(this, null, function*() {
        try {
            return (yield navigator.mediaDevices.getUserMedia({
                video: a ? a.toConstraints() : !1
            })).getVideoTracks()[0];
        } catch (e) {
            throw _e(e, "video");
        }
    });
}
function ve(a) {
    return "canvas" in a || a.label === "MediaStreamAudioDestinationNode" || a.label === "";
}
var hi = (a, e)=>{
    if (!navigator.permissions) {
        l.d("Permissions API not supported");
        return;
    }
    navigator.permissions.query({
        name: a
    }).then((t)=>{
        t.onchange = ()=>{
            e(t.state);
        };
    }).catch((t)=>{
        l.e(`${a} not supported`, t.message);
    });
};
var Io = 32e3;
var ce = {
    audioContext: null,
    getAudioContext () {
        return this.audioContext || (this.audioContext = di ? new AudioContext : new AudioContext({
            sampleRate: Io
        })), this.audioContext;
    },
    resumeContext () {
        return c(this, null, function*() {
            try {
                return yield this.getAudioContext().resume();
            } catch (a) {
                l.e("AudioContext", a);
            }
        });
    }
}, _r = ((r)=>(r.SPEAKERPHONE = "SPEAKERPHONE", r.WIRED = "WIRED", r.BLUETOOTH = "BLUETOOTH", r.EARPIECE = "EARPIECE", r))(_r || {}), Nr = (a)=>{
    if (!a) return l.w("[DeviceManager]:", "No device label provided"), "SPEAKERPHONE";
    let e = a.toLowerCase();
    return e.includes("speakerphone") ? "SPEAKERPHONE" : e.includes("wired") ? "WIRED" : /airpods|buds|wireless|bluetooth/gi.test(e) ? "BLUETOOTH" : e.includes("earpiece") ? "EARPIECE" : "SPEAKERPHONE";
};
var Ne = class {
    constructor(e = 1 / 0){
        this.capacity = e;
        this.storage = [];
    }
    size() {
        return this.storage.length;
    }
    toList() {
        return this.storage.slice(0);
    }
    enqueue(e) {
        this.size() === this.capacity && this.dequeue(), this.storage.push(e);
    }
    dequeue() {
        return this.storage.shift();
    }
    aggregate(e) {
        return e(this.storage);
    }
};
var Bs = `(function workerSetup() {
  function ticker() {
    self.postMessage('tick');
  }
  self.onmessage = function (event) {
    const [data, time] = event.data;
    switch (data) {
      case 'start':
        setTimeout(ticker, time);
        break;
      default:
        break;
    }
  };
})()`;
function J(a) {
    if (a < 0) throw Error("`ms` should be a positive integer");
    return new Promise((e)=>{
        setTimeout(e, a);
    });
}
function Oe(a) {
    if (a < 0) throw Error("`ms` should be a positive integer");
    if (typeof Worker == "undefined") return J(a);
    let e = new Worker(URL.createObjectURL(new Blob([
        Bs
    ], {
        type: "application/javascript"
    })));
    return e.postMessage([
        "start",
        a
    ]), new Promise((t)=>{
        e.onmessage = (i)=>{
            i.data === "tick" && (t(), e.terminate());
        };
    });
}
function Vs() {
    if (typeof Worker == "undefined") return {
        sleep: (e)=>J(e)
    };
    let a = new Worker(URL.createObjectURL(new Blob([
        Bs
    ], {
        type: "application/javascript"
    })));
    return {
        sleep: (e)=>(a.postMessage([
                "start",
                e
            ]), new Promise((t)=>{
                a.onmessage = (i)=>{
                    i.data === "tick" && t();
                };
            }))
    };
}
function mi(a, e = 300) {
    let t;
    return function(...i) {
        clearTimeout(t), t = void 0;
        let r = this;
        t = setTimeout(()=>{
            a.apply(r, i);
        }, e);
    };
}
var Ro = 35, Ho = 5, Si = class {
    constructor(e, t, i){
        this.track = e;
        this.audioLevelEvent = t;
        this.silenceEvent = i;
        this.TAG = "[TrackAudioLevelMonitor]";
        this.audioLevel = 0;
        this.isMonitored = !1;
        this.interval = 100;
        this.historyInterval = 700;
        this.history = new Ne(this.historyInterval / this.interval);
        this.detectSilence = ()=>c(this, null, function*() {
                let i = 0;
                for(; this.isMonitored;){
                    if (this.track.enabled) {
                        if (this.isSilentThisInstant()) {
                            if (i++, i > 50) {
                                this.silenceEvent.publish({
                                    track: this.track
                                });
                                break;
                            }
                        } else break;
                    }
                    yield J(20);
                }
            });
        try {
            let r = new MediaStream([
                this.track.nativeTrack
            ]);
            this.analyserNode = this.createAnalyserNodeForStream(r);
            let s = this.analyserNode.frequencyBinCount;
            this.dataArray = new Uint8Array(s);
        } catch (r) {
            l.w(this.TAG, "Unable to initialize AudioContext", r);
        }
    }
    start() {
        this.stop(), this.isMonitored = !0, l.d(this.TAG, "Starting track Monitor", `${this.track}`), this.loop().then(()=>l.d(this.TAG, "Stopping track Monitor", `${this.track}`));
    }
    stop() {
        if (!this.analyserNode) {
            l.d(this.TAG, "AudioContext not initialized");
            return;
        }
        this.sendAudioLevel(0), this.isMonitored = !1;
    }
    loop() {
        return c(this, null, function*() {
            for(; this.isMonitored;)this.sendAudioLevel(this.getMaxAudioLevelOverPeriod()), yield J(this.interval);
        });
    }
    sendAudioLevel(e = 0) {
        if (e = e > Ro ? e : 0, Math.abs(this.audioLevel - e) > Ho) {
            this.audioLevel = e;
            let i = {
                track: this.track,
                audioLevel: this.audioLevel
            };
            this.audioLevelEvent.publish(i);
        }
    }
    getMaxAudioLevelOverPeriod() {
        if (!this.analyserNode) {
            l.d(this.TAG, "AudioContext not initialized");
            return;
        }
        let e = this.calculateAudioLevel();
        return e !== void 0 && this.history.enqueue(e), this.history.aggregate((t)=>Math.max(...t));
    }
    calculateAudioLevel() {
        if (!this.analyserNode || !this.dataArray) {
            l.d(this.TAG, "AudioContext not initialized");
            return;
        }
        this.analyserNode.getByteTimeDomainData(this.dataArray);
        let e = .009, t = e;
        for (let s of this.dataArray)t = Math.max(t, (s - 128) / 128);
        let i = (Math.log(e) - Math.log(t)) / Math.log(e);
        return Math.ceil(Math.min(Math.max(i * 100, 0), 100));
    }
    isSilentThisInstant() {
        if (!this.analyserNode || !this.dataArray) {
            l.d(this.TAG, "AudioContext not initialized");
            return;
        }
        return this.analyserNode.getByteTimeDomainData(this.dataArray), this.dataArray.every((e)=>e === 128 || e === 0);
    }
    createAnalyserNodeForStream(e) {
        let t = ce.getAudioContext(), i = t.createMediaStreamSource(e), r = t.createAnalyser();
        return r.fftSize = 2048, i.connect(r), r;
    }
};
var Or = ((t)=>(t.SIP = "sip", t.REGULAR = "regular", t))(Or || {});
var Fs = ((n)=>(n.NONE = "none", n.INITIALISED = "initialised", n.STARTED = "started", n.PAUSED = "paused", n.RESUMED = "resumed", n.STOPPED = "stopped", n.FAILED = "failed", n))(Fs || {});
var Gs = ((t)=>(t.DVR = "dvr", t.NO_DVR = "no-dvr", t))(Gs || {}), Ws = ((i)=>(i.REGULAR = "regular", i.SCREEN = "screen", i.COMPOSITE = "composite", i))(Ws || {}), $s = ((r)=>(r.INITIALISED = "initialised", r.STARTED = "started", r.STOPPED = "stopped", r.FAILED = "failed", r))($s || {}), Ks = ((e)=>(e.CAPTION = "caption", e))(Ks || {});
var We = {
    f: "high",
    h: "medium",
    q: "low"
};
var xr = ((t)=>(t.VOICE = "voice", t.MUSIC = "music", t))(xr || {});
var qs = ((i)=>(i.videoInput = "videoInput", i.audioInput = "audioInput", i.audioOutput = "audioOutput", i))(qs || {});
var Q = class {
    constructor(){
        this._volume = 1;
        this._codec = "opus";
        this._maxBitrate = 32;
        this._deviceId = "default";
        this._audioMode = "voice";
        this._advanced = [
            {
                autoGainControl: {
                    exact: !0
                }
            },
            {
                noiseSuppression: {
                    exact: !0
                }
            },
            {
                highpassFilter: {
                    exact: !0
                }
            },
            {
                audioMirroring: {
                    exact: !0
                }
            }
        ];
    }
    volume(e) {
        if (!(0 <= e && e <= 1)) throw Error("volume can only be in range [0.0, 1.0]");
        return this._volume = e, this;
    }
    codec(e) {
        return this._codec = e, this;
    }
    maxBitrate(e) {
        if (e && e <= 0) throw Error("maxBitrate should be >= 1");
        return this._maxBitrate = this._audioMode === "music" ? 320 : e, this;
    }
    deviceId(e) {
        return this._deviceId = e, this;
    }
    audioMode(e = "voice") {
        return this._audioMode = e, this._audioMode === "music" ? this._maxBitrate = 320 : this._maxBitrate = 32, this;
    }
    advanced(e) {
        return this._advanced = e, this;
    }
    build() {
        return new $e(this._volume, this._codec, this._maxBitrate, this._deviceId, this._advanced, this._audioMode);
    }
}, $e = class {
    constructor(e, t, i, r, s, o){
        this.volume = e, this.codec = t, this.maxBitrate = i, this.deviceId = r, this.advanced = s, this.audioMode = o, this.audioMode === "music" ? this.maxBitrate = 320 : this.maxBitrate = 32;
    }
    toConstraints() {
        return {
            deviceId: this.deviceId,
            advanced: this.audioMode === "music" ? [] : this.advanced
        };
    }
    toAnalyticsProperties() {
        return {
            audio_bitrate: this.maxBitrate,
            audio_codec: this.codec
        };
    }
};
var q = class {
    constructor(){
        this._width = 320;
        this._height = 180;
        this._codec = "vp8";
        this._maxFramerate = 30;
        this._maxBitrate = 150;
        this._advanced = [];
    }
    setWidth(e) {
        return this._width = e, this;
    }
    setHeight(e) {
        return this._height = e, this;
    }
    codec(e) {
        return this._codec = e, this;
    }
    maxFramerate(e) {
        if (e && e <= 0) throw Error("maxFramerate should be >= 1");
        return this._maxFramerate = e, this;
    }
    maxBitrate(e, t = !0) {
        if (typeof e == "number" && e <= 0) throw Error("maxBitrate should be >= 1");
        return this._maxBitrate = e, !this._maxBitrate && t && (this._maxBitrate = 15e4), this;
    }
    deviceId(e) {
        return this._deviceId = e, this;
    }
    advanced(e) {
        return this._advanced = e, this;
    }
    facingMode(e) {
        return this._facingMode = e, this;
    }
    build() {
        return new Ke(this._width, this._height, this._codec, this._maxFramerate, this._deviceId, this._advanced, this._maxBitrate, this._facingMode);
    }
}, Ke = class {
    constructor(e, t, i, r, s, o, n, d){
        this.width = e, this.height = t, this.codec = i, this.maxFramerate = r, this.maxBitrate = n, this.deviceId = s, this.advanced = o, this.facingMode = d;
    }
    toConstraints(e) {
        let t = "ideal";
        e && (t = "max");
        let i = this.improviseConstraintsAspect();
        return {
            width: {
                [t]: i.width
            },
            height: {
                [t]: i.height
            },
            frameRate: this.maxFramerate,
            deviceId: this.deviceId,
            facingMode: this.facingMode
        };
    }
    toAnalyticsProperties() {
        return {
            width: this.width,
            height: this.height,
            video_bitrate: this.maxBitrate,
            framerate: this.maxFramerate,
            video_codec: this.codec,
            facingMode: this.facingMode
        };
    }
    improviseConstraintsAspect() {
        return Mt() && this.height && this.width && this.height > this.width ? {
            width: this.height,
            height: this.width
        } : {
            width: this.width,
            height: this.height
        };
    }
};
var xe = class {
    constructor(){
        this._video = new q().build();
        this._audio = new Q().build();
        this._screen = new q().build();
        this._simulcast = !1;
    }
    video(e) {
        return this._video = e, this;
    }
    audio(e) {
        return this._audio = e, this;
    }
    screen(e) {
        return this._screen = e, this;
    }
    simulcast(e) {
        return this._simulcast = e, this;
    }
    build() {
        if (this._audio === null && this._video === null) throw S.TracksErrors.NothingToReturn("TRACK");
        if (this._video === null && this._simulcast) throw S.TracksErrors.InvalidVideoSettings("TRACK", "Cannot enable simulcast when no video settings are provided");
        return new Ze(this._video, this._audio, this._simulcast, this._screen || void 0);
    }
}, Ze = class {
    constructor(e, t, i, r = null){
        this.video = e, this.audio = t, this.simulcast = i, this.screen = r;
    }
    toAnalyticsProperties() {
        let e = {
            audio_enabled: this.audio !== null,
            video_enabled: this.video !== null
        };
        return this.audio && (e = m(m({}, this.audio.toAnalyticsProperties()), e)), this.video && (e = m(m({}, this.video.toAnalyticsProperties()), e)), e;
    }
};
function Js(a, e) {
    return function(i) {
        return !(0, _lodashIsequalDefault.default)(a[i], e[i]);
    };
}
var de = class a extends we {
    constructor(t, i, r, s, o = new Q().build(), n){
        super(t, i, r);
        this.eventBus = s;
        this.room = n;
        this.TAG = "[HMSLocalAudioTrack]";
        this.tracksCreated = new Set;
        this.isPublished = !1;
        this.handleVisibilityChange = ()=>c(this, null, function*() {
                if (!this.shouldReacquireTrack()) {
                    l.d(this.TAG, `visibiltiy: ${document.visibilityState}`, `${this}`);
                    return;
                }
                if (document.visibilityState === "hidden") this.eventBus.analytics.publish(this.sendInterruptionEvent({
                    started: !0,
                    reason: "visibility-change"
                }));
                else {
                    l.d(this.TAG, "On visibile replacing track as it is not publishing");
                    try {
                        yield this.replaceTrackWith(this.settings);
                    } catch (t) {
                        this.eventBus.error.publish(t);
                    }
                    this.eventBus.analytics.publish(this.sendInterruptionEvent({
                        started: !1,
                        reason: "visibility-change"
                    }));
                }
            });
        this.trackPermissions = ()=>{
            hi("microphone", (t)=>{
                this.eventBus.analytics.publish(y.permissionChange(this.type, t)), t === "denied" && this.eventBus.localAudioEnabled.publish({
                    enabled: !1,
                    track: this
                });
            });
        };
        this.handleTrackMute = ()=>{
            l.d(this.TAG, "muted natively");
            let t = document.visibilityState === "hidden" ? "visibility-change" : "incoming-call";
            this.eventBus.analytics.publish(this.sendInterruptionEvent({
                started: !0,
                reason: t
            })), this.eventBus.localAudioEnabled.publish({
                enabled: !1,
                track: this
            });
        };
        this.handleTrackUnmute = ()=>c(this, null, function*() {
                l.d(this.TAG, "unmuted natively");
                let t = document.visibilityState === "hidden" ? "visibility-change" : "incoming-call";
                this.eventBus.analytics.publish(this.sendInterruptionEvent({
                    started: !1,
                    reason: t
                }));
                try {
                    yield this.setEnabled(this.enabled, !0), this.eventBus.localAudioUnmutedNatively.publish();
                } catch (i) {
                    this.eventBus.error.publish(i);
                }
            });
        this.replaceSenderTrack = ()=>c(this, null, function*() {
                if (!this.transceiver || this.transceiver.direction !== "sendonly") {
                    l.d(this.TAG, `transceiver for ${this.trackId} not available or not connected yet`);
                    return;
                }
                yield this.transceiver.sender.replaceTrack(this.processedTrack || this.nativeTrack);
            });
        this.shouldReacquireTrack = ()=>ve(this.nativeTrack) || this.isTrackNotPublishing();
        this.handleSettingsChange = (t)=>c(this, null, function*() {
                let i = this.stream, r = Js(t, this.settings);
                (r("maxBitrate") || r("audioMode")) && t.maxBitrate && (yield i.setMaxBitrateAndFramerate(this, t)), (r("advanced") || r("audioMode")) && (yield this.replaceTrackWith(t));
            });
        this.handleDeviceChange = (t, i = !1)=>c(this, null, function*() {
                if (Js(t, this.settings)("deviceId")) {
                    this.manuallySelectedDeviceId = i ? this.manuallySelectedDeviceId : t.deviceId, l.d(this.TAG, "device change", "manual selection:", this.manuallySelectedDeviceId, "new device:", t.deviceId), yield this.replaceTrackWith(t);
                    let s = this.nativeTrack.getSettings().groupId;
                    !i && t.deviceId && (X.updateSelection("audioInput", {
                        deviceId: t.deviceId,
                        groupId: s
                    }), this.eventBus.deviceChange.publish({
                        isUserSelection: !0,
                        type: "audioInput",
                        selection: {
                            deviceId: t.deviceId,
                            groupId: s
                        }
                    }));
                }
            });
        t.tracks.push(this), this.addTrackEventListeners(i), this.trackPermissions(), this.settings = o, o.deviceId !== i.getSettings().deviceId && !ve(i) && (this.settings = this.buildNewSettings({
            deviceId: i.getSettings().deviceId
        })), this.pluginsManager = new Pt(this, s, n), this.setFirstTrackId(i.id), r === "regular" && document.addEventListener("visibilitychange", this.handleVisibilityChange);
    }
    clone(t) {
        let i = this.nativeTrack.clone();
        t.nativeStream.addTrack(i);
        let r = new a(t, i, this.source, this.eventBus, this.settings, this.room);
        return r.peerId = this.peerId, this.pluginsManager.pluginsMap.size > 0 && this.pluginsManager.pluginsMap.forEach((s)=>{
            r.addPlugin(s).catch((o)=>l.e(this.TAG, "Plugin add failed while migrating", s, o));
        }), r;
    }
    getManuallySelectedDeviceId() {
        return this.manuallySelectedDeviceId;
    }
    resetManuallySelectedDeviceId() {
        this.manuallySelectedDeviceId = void 0;
    }
    updateTrack(t) {
        return c(this, null, function*() {
            t.enabled = this.enabled, yield this.stream.replaceStreamTrack(this.nativeTrack, t), this.nativeTrack = t, yield this.replaceSenderTrack(), !!this.audioLevelMonitor && this.initAudioLevelMonitor();
        });
    }
    replaceTrackWith(t) {
        return c(this, null, function*() {
            let i = this.nativeTrack;
            i == null || i.stop(), this.removeTrackEventListeners(i), this.tracksCreated.forEach((r)=>r.stop()), this.tracksCreated.clear();
            try {
                let r = yield Dr(t);
                this.addTrackEventListeners(r), this.tracksCreated.add(r), l.d(this.TAG, "replaceTrack, Previous track stopped", i, "newTrack", r), yield this.updateTrack(r);
            } catch (r) {
                let s = yield Dr(this.settings);
                throw this.addTrackEventListeners(s), this.tracksCreated.add(s), yield this.updateTrack(s), this.isPublished && this.eventBus.analytics.publish(y.publish({
                    error: r
                })), r;
            }
            try {
                yield this.pluginsManager.reprocessPlugins();
            } catch (r) {
                this.eventBus.audioPluginFailed.publish(r);
            }
        });
    }
    setEnabled(t, i = !1) {
        return c(this, null, function*() {
            t === this.enabled && !i || (t && this.shouldReacquireTrack() && (yield this.replaceTrackWith(this.settings)), yield ne(a.prototype, this, "setEnabled").call(this, t), t && (this.settings = this.buildNewSettings({
                deviceId: this.nativeTrack.getSettings().deviceId
            })), this.eventBus.localAudioEnabled.publish({
                enabled: t,
                track: this
            }));
        });
    }
    isPublishedTrackId(t) {
        return this.publishedTrackId === t;
    }
    setSettings(t, i = !1) {
        return c(this, null, function*() {
            let r = this.buildNewSettings(t);
            if (ve(this.nativeTrack)) {
                this.settings = r;
                return;
            }
            yield this.handleDeviceChange(r, i), yield this.handleSettingsChange(r), this.settings = r;
        });
    }
    getPlugins() {
        return this.pluginsManager.getPlugins();
    }
    addPlugin(t) {
        return c(this, null, function*() {
            return this.pluginsManager.addPlugin(t);
        });
    }
    removePlugin(t) {
        return c(this, null, function*() {
            return this.pluginsManager.removePlugin(t);
        });
    }
    validatePlugin(t) {
        return this.pluginsManager.validatePlugin(t);
    }
    setProcessedTrack(t) {
        return c(this, null, function*() {
            t ? t !== this.processedTrack && (this.processedTrack = t) : this.processedTrack = void 0, yield this.replaceSenderTrack();
        });
    }
    initAudioLevelMonitor() {
        this.audioLevelMonitor && this.destroyAudioLevelMonitor(), l.d(this.TAG, "Monitor Audio Level for", this, this.getMediaTrackSettings().deviceId), this.audioLevelMonitor = new Si(this, this.eventBus.trackAudioLevelUpdate, this.eventBus.localAudioSilence), this.audioLevelMonitor.start(), this.audioLevelMonitor.detectSilence();
    }
    destroyAudioLevelMonitor() {
        var t;
        (t = this.audioLevelMonitor) == null || t.stop(), this.audioLevelMonitor = void 0;
    }
    cleanup() {
        return c(this, null, function*() {
            var t;
            ne(a.prototype, this, "cleanup").call(this), yield this.pluginsManager.cleanup(), yield this.pluginsManager.closeContext(), this.transceiver = void 0, (t = this.processedTrack) == null || t.stop(), this.tracksCreated.forEach((i)=>i.stop()), this.tracksCreated.clear(), this.isPublished = !1, this.destroyAudioLevelMonitor(), document.removeEventListener("visibilitychange", this.handleVisibilityChange);
        });
    }
    getTrackIDBeingSent() {
        return this.processedTrack ? this.processedTrack.id : this.nativeTrack.id;
    }
    getTrackBeingSent() {
        return this.processedTrack || this.nativeTrack;
    }
    addTrackEventListeners(t) {
        t.addEventListener("mute", this.handleTrackMute), t.addEventListener("unmute", this.handleTrackUnmute);
    }
    removeTrackEventListeners(t) {
        t.removeEventListener("mute", this.handleTrackMute), t.removeEventListener("unmute", this.handleTrackUnmute);
    }
    buildNewSettings(t) {
        let { volume: i, codec: r, maxBitrate: s, deviceId: o, advanced: n, audioMode: d } = m(m({}, this.settings), t);
        return new $e(i, r, s, o, n, d);
    }
};
var ie = class a extends we {
    setEnabled(e) {
        return c(this, null, function*() {
            e !== this.enabled && (yield ne(a.prototype, this, "setEnabled").call(this, e), yield this.subscribeToAudio(e));
        });
    }
};
var et = class extends De {
    constructor(t, i, r){
        super(t, i, r);
        this.type = "video";
        this.sinkCount = 0;
        this.handleTrackUnmute = ()=>{
            this.getSinks().forEach((t)=>this.reTriggerPlay({
                    videoElement: t
                }));
        };
        this.reTriggerPlay = ({ videoElement: t })=>{
            setTimeout(()=>{
                t.play().catch((i)=>{
                    l.w("[HMSVideoTrack]", "failed to play", i.message);
                });
            }, 0);
        };
        if (i.kind !== "video") throw new Error("Expected 'track' kind = 'video'");
    }
    setVideoHandler(t) {
        this.videoHandler = t;
    }
    hasSinks() {
        return this.sinkCount > 0;
    }
    getSinks() {
        return this.videoHandler.getVideoElements() || [];
    }
    attach(t) {
        this.videoHandler.addVideoElement(t);
    }
    detach(t) {
        this.videoHandler.removeVideoElement(t);
    }
    addSink(t) {
        this.addSinkInternal(t, this.nativeTrack);
    }
    removeSink(t) {
        t.srcObject !== null && (t.srcObject = null, this.reduceSinkCount());
    }
    cleanup() {
        super.cleanup(), this.videoHandler.cleanup();
    }
    addSinkInternal(t, i) {
        let r = t.srcObject;
        if (r !== null && r instanceof MediaStream) {
            let o = r.getVideoTracks()[0];
            if ((o == null ? void 0 : o.id) === i.id) {
                if (!o.muted && o.readyState === "live") return;
                this.reduceSinkCount();
            } else this.reduceSinkCount();
        }
        this.addPropertiesToElement(t);
        let s = new MediaStream([
            i
        ]);
        t.srcObject = s, this.reTriggerPlay({
            videoElement: t
        }), this.sinkCount++;
    }
    reduceSinkCount() {
        this.sinkCount > 0 && this.sinkCount--;
    }
    addPropertiesToElement(t) {
        Cs || (t.autoplay = !0), t.playsInline = !0, t.muted = !0, t.controls = !1;
    }
};
var bt = {
    none: -1,
    low: 0,
    medium: 1,
    high: 2
}, Lo = .5, Qs = (a, e)=>{
    let t = "high", i = e.width > e.height ? "width" : "height", r = [
        ...a
    ].sort((o, n)=>bt[o.layer] - bt[n.layer]), s = e[i] * ((window == null ? void 0 : window.devicePixelRatio) || 1);
    for(let o = 0; o < r.length; o++){
        let { resolution: n, layer: d } = r[o], u = n[i];
        if (s <= u) {
            t = d;
            break;
        } else {
            let p = r[o + 1], h = p ? p.resolution[i] : Number.POSITIVE_INFINITY;
            if ((s - u) / (h - u) < Lo) {
                t = d;
                break;
            }
        }
    }
    return t;
};
var Ur = class {
    constructor(){
        this.TAG = "[HMSIntersectionObserverWrapper]";
        this.listeners = new WeakMap;
        this.observe = (e, t)=>{
            var i;
            this.createObserver(), this.unobserve(e), (i = this.intersectionObserver) == null || i.observe(e), this.listeners.set(e, t);
        };
        this.unobserve = (e)=>{
            var t;
            (t = this.intersectionObserver) == null || t.unobserve(e), this.listeners.delete(e);
        };
        this.createObserver = ()=>{
            this.isSupported() && !this.intersectionObserver && (this.intersectionObserver = new IntersectionObserver(this.handleIntersection));
        };
        this.handleIntersection = (e)=>{
            var t;
            for (let i of e)(t = this.listeners.get(i.target)) == null || t(i);
        };
        this.createObserver();
    }
    isSupported() {
        let e = U && typeof window.IntersectionObserver != "undefined";
        return e || l.w(this.TAG, "IntersectionObserver is not supported, fallback will be used instead"), e;
    }
}, zs = new Ur;
var Br = class {
    constructor(){
        this.TAG = "[HMSResizeObserverWrapper]";
        this.listeners = new WeakMap;
        this.observe = (e, t, i = {
            box: "border-box"
        })=>{
            var r;
            this.createObserver(), this.unobserve(e), (r = this.resizeObserver) == null || r.observe(e, i), this.listeners.set(e, t);
        };
        this.unobserve = (e)=>{
            var t;
            (t = this.resizeObserver) == null || t.unobserve(e), this.listeners.delete(e);
        };
        this.createObserver = ()=>{
            this.isSupported() && !this.resizeObserver && (this.resizeObserver = new ResizeObserver(mi(this.handleResize, 300)));
        };
        this.handleResize = (e)=>{
            var t;
            for (let i of e)(t = this.listeners.get(i.target)) == null || t(i);
        };
        this.createObserver();
    }
    isSupported() {
        let e = U && typeof window.ResizeObserver != "undefined";
        return e || l.w(this.TAG, "Resize Observer is not supported"), e;
    }
}, Ys = new Br;
var tt = class {
    constructor(e){
        this.track = e;
        this.TAG = "[VideoElementManager]";
        this.videoElements = new Set;
        this.entries = new WeakMap;
        this.handleIntersection = (e)=>c(this, null, function*() {
                let t = getComputedStyle(e.target).visibility === "visible";
                this.track.enabled && (e.isIntersecting && t || !document.contains(e.target)) ? (l.d(this.TAG, "add sink intersection", `${this.track}`, this.id), this.entries.set(e.target, e.boundingClientRect), yield this.selectMaxLayer(), yield this.track.addSink(e.target)) : (l.d(this.TAG, "remove sink intersection", `${this.track}`, this.id), yield this.track.removeSink(e.target));
            });
        this.handleResize = (e)=>c(this, null, function*() {
                !this.track.enabled || !(this.track instanceof O) || (this.entries.set(e.target, e.contentRect), yield this.selectMaxLayer());
            });
        this.cleanup = ()=>{
            this.videoElements.forEach((e)=>{
                var t, i;
                e.srcObject = null, (t = this.resizeObserver) == null || t.unobserve(e), (i = this.intersectionObserver) == null || i.unobserve(e);
            }), this.videoElements.clear(), this.resizeObserver = void 0, this.intersectionObserver = void 0;
        };
        this.init(), this.id = (0, _uuid.v4)();
    }
    updateSinks(e = !1) {
        for (let t of this.videoElements)this.track.enabled ? this.track.addSink(t, e) : this.track.removeSink(t, e);
    }
    addVideoElement(e) {
        return c(this, null, function*() {
            var t;
            this.videoElements.has(e) || (this.init(), l.d(this.TAG, `Adding video element for ${this.track}`, this.id), this.videoElements.add(e), this.videoElements.size >= 10 && l.w(this.TAG, `${this.track}`, `the track is added to ${this.videoElements.size} video elements, while this may be intentional, it's likely that there is a bug leading to unnecessary creation of video elements in the UI`), (t = this.intersectionObserver) != null && t.isSupported() ? this.intersectionObserver.observe(e, this.handleIntersection) : U && (this.isElementInViewport(e) ? this.track.addSink(e) : this.track.removeSink(e)), this.resizeObserver ? this.resizeObserver.observe(e, this.handleResize) : this.track instanceof O && (yield this.track.setPreferredLayer(this.track.getPreferredLayer())));
        });
    }
    removeVideoElement(e) {
        var t, i;
        this.track.removeSink(e), this.videoElements.delete(e), this.entries.delete(e), (t = this.resizeObserver) == null || t.unobserve(e), (i = this.intersectionObserver) == null || i.unobserve(e), l.d(this.TAG, `Removing video element for ${this.track}`);
    }
    getVideoElements() {
        return Array.from(this.videoElements);
    }
    init() {
        U && (this.resizeObserver = Ys, this.intersectionObserver = zs);
    }
    isElementInViewport(e) {
        let t = e.offsetTop, i = e.offsetLeft, r = e.offsetWidth, s = e.offsetHeight, { hidden: o } = e, { opacity: n, display: d } = getComputedStyle(e);
        for(; e.offsetParent;)e = e.offsetParent, t += e.offsetTop, i += e.offsetLeft;
        return t < window.pageYOffset + window.innerHeight && i < window.pageXOffset + window.innerWidth && t + s > window.pageYOffset && i + r > window.pageXOffset && !o && (n !== "" ? parseFloat(n) > 0 : !0) && d !== "none";
    }
    selectMaxLayer() {
        return c(this, null, function*() {
            if (!(this.track instanceof O) || this.videoElements.size === 0) return;
            let e;
            for (let t of this.videoElements){
                let i = this.entries.get(t);
                if (!i) continue;
                let { width: r, height: s } = i;
                if (r === 0 || s === 0) continue;
                let o = Qs(this.track.getSimulcastDefinitions(), {
                    width: r,
                    height: s
                });
                e ? e = bt[o] > bt[e] ? o : e : e = o;
            }
            e && (l.d(this.TAG, `selecting max layer ${e} for the track`, `${this.track}`), yield this.track.setPreferredLayer(e));
        });
    }
};
var Vr = ((t)=>(t.TRANSFORM = "TRANSFORM", t.ANALYZE = "ANALYZE", t))(Vr || {}), Fr = ((t)=>(t["2D"] = "2d", t.WEBGL = "webgl", t.WEBGL2 = "webgl2", t))(Fr || {});
var At = class {
    constructor(){
        this.total = 0;
        this.count = 0;
    }
    add(e) {
        this.count++, this.total += e;
    }
    getAvg() {
        return Math.floor(this.total / this.count);
    }
    reset() {
        this.total = 0, this.count = 0;
    }
};
var it = class {
    constructor(e){
        this.eventBus = e;
        this.TAG = "[VideoPluginsAnalytics]";
        this.initTime = {}, this.preProcessingAvgs = new At, this.addedTimestamps = {}, this.processingAvgs = {}, this.pluginAdded = {}, this.pluginInputFrameRate = {}, this.pluginFrameRate = {};
    }
    added(e, t, i) {
        this.pluginAdded[e] = !0, this.addedTimestamps[e] = Date.now(), this.initTime[e] = 0, this.processingAvgs[e] = new At, t && (this.pluginInputFrameRate[e] = t, this.pluginFrameRate[e] = i || t), this.eventBus.analytics.publish(me.added(e, this.addedTimestamps[e]));
    }
    removed(e) {
        var t;
        if (this.pluginAdded[e]) {
            let i = {
                pluginName: e,
                duration: Math.floor((Date.now() - this.addedTimestamps[e]) / 1e3),
                loadTime: this.initTime[e],
                avgPreProcessingTime: this.preProcessingAvgs.getAvg(),
                avgProcessingTime: (t = this.processingAvgs[e]) == null ? void 0 : t.getAvg(),
                inputFrameRate: this.pluginInputFrameRate[e],
                pluginFrameRate: this.pluginFrameRate[e]
            };
            this.eventBus.analytics.publish(me.stats(i)), this.clean(e);
        }
    }
    failure(e, t) {
        this.pluginAdded[e] && (this.eventBus.analytics.publish(me.failure(e, t)), this.clean(e));
    }
    initWithTime(e, t) {
        return c(this, null, function*() {
            if (this.initTime[e]) {
                l.i(this.TAG, `Plugin Already loaded ${e}, time it took: ${this.initTime[e]}`);
                return;
            }
            let i;
            try {
                i = yield this.timeInMs(t), l.i(this.TAG, `Time taken for Plugin ${e} initialization : ${i}`);
            } catch (r) {
                let s = S.MediaPluginErrors.InitFailed("VIDEO_PLUGINS", `failed during initialization of plugin${r.message || r}`);
                throw l.e(this.TAG, s), this.failure(e, s), s;
            }
            i && (this.initTime[e] = i);
        });
    }
    preProcessWithTime(e) {
        return c(this, null, function*() {
            let t = yield this.timeInMs(e);
            this.preProcessingAvgs.add(t);
        });
    }
    processWithTime(e, t) {
        return c(this, null, function*() {
            var r;
            let i;
            try {
                i = yield this.timeInMs(t);
            } catch (s) {
                let o = S.MediaPluginErrors.ProcessingFailed("VIDEO_PLUGINS", `Failed during processing of plugin${s.message || s}`);
                throw l.e(this.TAG, o), this.failure(e, o), o;
            }
            i && ((r = this.processingAvgs[e]) == null || r.add(i));
        });
    }
    timeInMs(e) {
        return c(this, null, function*() {
            let t = Date.now();
            return yield e(), Math.floor(Date.now() - t);
        });
    }
    clean(e) {
        delete this.addedTimestamps[e], delete this.initTime[e], delete this.processingAvgs[e], delete this.pluginAdded[e], delete this.pluginInputFrameRate[e], delete this.pluginFrameRate[e];
    }
};
var Xs = 24, wo = 320, _o = 240, It = class {
    constructor(e, t){
        this.TAG = "[VideoPluginsManager]";
        this.pluginsLoopRunning = !1;
        this.pluginsLoopState = "paused";
        this.pluginAddInProgress = !1;
        this.reusableWorker = Vs();
        this.hmsTrack = e, this.pluginsMap = new Map, this.pluginNumFramesToSkip = {}, this.pluginNumFramesSkipped = {}, this.analytics = new it(t), this.canvases = new Array;
    }
    getPlugins() {
        return Array.from(this.pluginsMap.keys());
    }
    addPlugin(e, t) {
        return c(this, null, function*() {
            var i;
            if (this.pluginAddInProgress) {
                let r = (i = e.getName) == null ? void 0 : i.call(e);
                if (!r || r === "") {
                    l.w("no name provided by the plugin");
                    return;
                }
                let s = S.MediaPluginErrors.AddAlreadyInProgress("VIDEO_PLUGINS", "Add Plugin is already in Progress");
                throw this.analytics.failure(r, s), l.w("can't add another plugin when previous add is in progress"), s;
            }
            this.pluginAddInProgress = !0;
            try {
                yield this.addPluginInternal(e, t);
            } finally{
                this.pluginAddInProgress = !1;
            }
        });
    }
    addPluginInternal(e, t) {
        return c(this, null, function*() {
            var o, n;
            let i = (o = e.getName) == null ? void 0 : o.call(e);
            if (!i || i === "") {
                l.w("no name provided by the plugin");
                return;
            }
            if (this.pluginsMap.has(i)) {
                l.w(this.TAG, `plugin - ${e.getName()} already added.`);
                return;
            }
            let r = this.hmsTrack.getMediaTrackSettings().frameRate || Xs, s = 0;
            t && t > 0 ? (l.i(this.TAG, `adding plugin ${e.getName()} with framerate ${t}`), t < r && (s = Math.ceil(r / t) - 1), this.analytics.added(i, r, t)) : (l.i(this.TAG, `adding plugin ${e.getName()}`), this.analytics.added(i, r)), l.i(this.TAG, "numFrames to skip processing", s), this.pluginNumFramesToSkip[i] = s, this.pluginNumFramesSkipped[i] = s, this.validateAndThrow(i, e);
            try {
                if (yield this.analytics.initWithTime(i, ()=>c(this, null, function*() {
                        return yield e.init();
                    })), this.pluginsMap.set(i, e), this.pluginsMap.size + 1 > this.canvases.length) for(let d = this.canvases.length; d <= this.pluginsMap.size; d++)this.canvases[d] = document.createElement("canvas");
                yield this.startPluginsLoop((n = e.getContextType) == null ? void 0 : n.call(e));
            } catch (d) {
                throw l.e(this.TAG, "failed to add plugin", d), yield this.removePlugin(e), d;
            }
        });
    }
    validatePlugin(e) {
        return e.checkSupport();
    }
    validateAndThrow(e, t) {
        let i = this.validatePlugin(t);
        if (i.isSupported) l.i(this.TAG, `plugin is supported,- ${t.getName()}`);
        else {
            let r;
            switch(i.errType){
                case "PLATFORM_NOT_SUPPORTED":
                    throw r = S.MediaPluginErrors.PlatformNotSupported("VIDEO_PLUGINS", "platform not supported, see docs"), this.analytics.failure(e, r), r;
                case "DEVICE_NOT_SUPPORTED":
                    throw r = S.MediaPluginErrors.DeviceNotSupported("VIDEO_PLUGINS", "video device not supported, see docs"), this.analytics.failure(e, r), r;
            }
        }
    }
    removePlugin(e) {
        return c(this, null, function*() {
            let t = e.getName();
            if (!this.pluginsMap.get(t)) {
                l.w(this.TAG, `plugin - ${t} not found to remove.`);
                return;
            }
            l.i(this.TAG, `removing plugin ${t}`), this.removePluginEntry(t), this.pluginsMap.size === 0 && (l.i(this.TAG, "No plugins left, stopping plugins loop"), yield this.stopPluginsLoop()), e.stop(), this.analytics.removed(t);
        });
    }
    removePluginEntry(e) {
        this.pluginsMap.delete(e), this.pluginNumFramesToSkip[e] && delete this.pluginNumFramesToSkip[e], this.pluginNumFramesSkipped[e] && delete this.pluginNumFramesSkipped[e];
    }
    waitForRestart() {
        return c(this, null, function*() {
            if (!(!this.pluginsLoopRunning || this.pluginsLoopState === "running")) for(; this.pluginsLoopState === "paused";)yield Oe(100);
        });
    }
    cleanup() {
        return c(this, null, function*() {
            var e;
            for (let t of this.pluginsMap.values())yield this.removePlugin(t);
            (e = this.outputTrack) == null || e.stop();
        });
    }
    initElementsAndStream(e) {
        this.inputCanvas || (this.inputCanvas = document.createElement("canvas")), this.outputCanvas = document.createElement("canvas"), this.inputVideo || (this.inputVideo = document.createElement("video")), this.inputCanvas.getContext("2d"), this.outputCanvas.getContext(e || "2d");
        let t = this.outputCanvas.captureStream();
        this.outputTrack = t.getVideoTracks()[0];
    }
    startPluginsLoop(e) {
        return c(this, null, function*() {
            if (!this.pluginsLoopRunning) {
                this.initElementsAndStream(e), this.pluginsLoopRunning = !0;
                try {
                    yield this.hmsTrack.setProcessedTrack(this.outputTrack);
                } catch (t) {
                    throw this.pluginsLoopRunning = !1, l.e(this.TAG, "error in setting processed track", t), t;
                }
                this.pluginsLoop().then(()=>{
                    l.d(this.TAG, "processLoop stopped");
                });
            }
        });
    }
    stopPluginsLoop() {
        return c(this, null, function*() {
            var e;
            this.pluginsLoopRunning = !1, yield this.hmsTrack.setProcessedTrack(void 0), this.resetCanvases(), (e = this.outputTrack) == null || e.stop(), this.inputVideo && (this.inputVideo.srcObject = null, this.inputVideo = void 0);
        });
    }
    pluginsLoop() {
        return c(this, null, function*() {
            for(; this.pluginsLoopRunning;){
                let e = this.hmsTrack.getMediaTrackSettings().frameRate || Xs, t = Math.floor(1e3 / e);
                if (!this.hmsTrack.enabled || this.hmsTrack.nativeTrack.readyState === "ended") {
                    this.pluginsLoopState === "running" && this.resetCanvases(), this.pluginsLoopState = "paused", yield this.reusableWorker.sleep(t);
                    continue;
                }
                let i = 0;
                try {
                    yield this.analytics.preProcessWithTime(()=>c(this, null, function*() {
                            return yield this.doPreProcessing();
                        }));
                    let r = Date.now();
                    yield this.processFramesThroughPlugins(), i = Math.floor(Date.now() - r), i > t && (i = t);
                } catch (r) {
                    l.e(this.TAG, "error in plugins loop", r);
                }
                this.pluginsLoopState = "running", yield this.reusableWorker.sleep(t - i);
            }
        });
    }
    doPreProcessing() {
        return c(this, null, function*() {
            yield this.addTrackToVideo(), yield this.updateInputCanvas();
        });
    }
    processFramesThroughPlugins() {
        return c(this, null, function*() {
            this.canvases[0] = this.inputCanvas;
            let e = 0;
            for (let t of this.pluginsMap.values()){
                let i = t.getName();
                if (t) {
                    try {
                        let r = this.checkIfSkipRequired(i);
                        if (t.getPluginType() === "TRANSFORM") {
                            let s = (o, n)=>c(this, null, function*() {
                                    try {
                                        yield t.processVideoFrame(o, n, r);
                                    } catch (d) {
                                        l.e(this.TAG, `error in processing plugin ${i}`, d);
                                    }
                                });
                            if (r) e === this.pluginsMap.size - 1 ? yield s(this.canvases[e], this.outputCanvas) : yield s(this.canvases[e], this.canvases[e + 1]);
                            else {
                                let o = this.canvases[e], n = this.canvases[e + 1];
                                e === this.pluginsMap.size - 1 ? yield this.analytics.processWithTime(i, ()=>c(this, null, function*() {
                                        return s(o, this.outputCanvas);
                                    })) : yield this.analytics.processWithTime(i, ()=>c(this, null, function*() {
                                        return s(o, n);
                                    }));
                            }
                        } else t.getPluginType() === "ANALYZE" && !r && (yield this.analytics.processWithTime(i, ()=>c(this, null, function*() {
                                return yield t.processVideoFrame(this.inputCanvas);
                            })));
                    } catch (r) {
                        l.e(this.TAG, `error in processing plugin ${i}`, r), yield this.removePlugin(t);
                    }
                    e++;
                }
            }
        });
    }
    addTrackToVideo() {
        return c(this, null, function*() {
            var t;
            if (!this.inputVideo) return;
            let e = this.inputVideo.srcObject;
            e !== null && e instanceof MediaStream && ((t = e.getVideoTracks()[0]) == null ? void 0 : t.id) === this.hmsTrack.nativeTrack.id || (this.inputVideo.pause(), this.inputVideo.srcObject = new MediaStream([
                this.hmsTrack.nativeTrack
            ]), this.inputVideo.muted = !0, this.inputVideo.playsInline = !0, yield this.inputVideo.play());
        });
    }
    updateInputCanvas() {
        return c(this, null, function*() {
            if (!this.inputCanvas || !this.inputVideo) return;
            let { width: e = wo, height: t = _o } = this.hmsTrack.getMediaTrackSettings();
            this.inputCanvas.height !== t && (this.inputCanvas.height = t), this.inputCanvas.width !== e && (this.inputCanvas.width = e), this.inputCanvas.getContext("2d").drawImage(this.inputVideo, 0, 0, e, t);
        });
    }
    resetCanvases() {
        if (!this.outputCanvas || !this.inputCanvas) return;
        let e = this.inputCanvas.getContext("2d");
        e && (e.fillStyle = "rgb(0, 0, 0)", e.fillRect(0, 0, this.outputCanvas.width, this.outputCanvas.height)), this.canvases = [];
    }
    checkIfSkipRequired(e) {
        let t = !1;
        return this.pluginNumFramesSkipped[e] < this.pluginNumFramesToSkip[e] ? (this.pluginNumFramesSkipped[e]++, t = !0) : (t = !1, this.pluginNumFramesSkipped[e] = 0), t;
    }
};
var gi = class {
    constructor(e, t){
        this.TAG = "[MediaStreamPluginsManager]";
        this.plugins = new Set, this.analytics = new it(e), this.room = t;
    }
    addPlugins(e) {
        e.forEach((t)=>{
            var i;
            switch(t.getName()){
                case "HMSEffectsPlugin":
                    if (!((i = this.room) != null && i.isEffectsEnabled)) {
                        let r = "Effects Virtual Background is not enabled for this room";
                        if (this.plugins.size === 0) throw Error(r);
                        l.w(this.TAG, r);
                        return;
                    }
                    break;
                default:
            }
            this.plugins.add(t);
        });
    }
    removePlugins(e) {
        e.forEach((t)=>{
            t.stop(), this.analytics.removed(t.getName()), this.plugins.delete(t);
        });
    }
    applyPlugins(e) {
        let t = e;
        for (let i of this.plugins){
            let r = i.getName();
            try {
                t = i.apply(t), this.analytics.added(r);
            } catch (s) {
                this.analytics.failure(r, s), l.e("Could not apply plugin", s, r);
            }
        }
        return t;
    }
    getPlugins() {
        return Array.from(this.plugins).map((e)=>e.getName());
    }
    cleanup() {
        return c(this, null, function*() {
            this.removePlugins(Array.from(this.plugins));
        });
    }
};
var No = [
    "init_response_time",
    "ws_connect_time",
    "on_policy_change_time",
    "local_audio_track_time",
    "local_video_track_time",
    "peer_list_time",
    "room_state_time",
    "join_response_time"
], Ti = class {
    constructor(){
        this.eventPerformanceMeasures = {};
    }
    start(e) {
        performance.mark(e);
    }
    end(e) {
        var t;
        try {
            this.eventPerformanceMeasures[e] = performance.measure(e, e), l.d("[HMSPerformanceTiming]", e, (t = this.eventPerformanceMeasures[e]) == null ? void 0 : t.duration);
        } catch (i) {
            l.w("[AnalyticsTimer]", `Error in measuring performance for event ${e}`, {
                error: i
            });
        }
    }
    getTimeTaken(e) {
        var t;
        return (t = this.eventPerformanceMeasures[e]) == null ? void 0 : t.duration;
    }
    getTimes(...e) {
        return [
            ...No,
            ...e
        ].reduce((t, i)=>M(m({}, t), {
                [i]: this.getTimeTaken(i)
            }), {});
    }
    cleanup() {
        this.eventPerformanceMeasures = {};
    }
};
var Gr = {
    isAudioMuted: !1,
    isVideoMuted: !1,
    audioInputDeviceId: "default",
    audioOutputDeviceId: "default",
    videoDeviceId: "default",
    audioMode: "voice"
}, Me, fi, be = class a {
    constructor(e, t, i, r, s){
        this.store = e;
        this.observer = t;
        this.deviceManager = i;
        this.eventBus = r;
        this.analyticsTimer = s;
        this.TAG = "[LocalTrackManager]";
        this.setScreenCaptureHandleConfig();
    }
    getTracksToPublish() {
        return c(this, arguments, function*(e = Gr) {
            let t = this.getAVTrackSettings(e);
            if (!t) return [];
            let i = !!t.audio, r = !!t.video, s = [], { videoTrack: o, audioTrack: n } = yield this.updateCurrentLocalTrackSettings(t), d = (o == null ? void 0 : o.stream) || (n == null ? void 0 : n.stream), u = !!(o && this.store.getTrackById(o.trackId)), p = !!(n && this.store.getTrackById(n.trackId));
            if (u && p) return [];
            let h = {
                audio: i && !n && (e.isAudioMuted ? "empty" : !0),
                video: r && !o && (e.isVideoMuted ? "empty" : !0)
            };
            h.audio && this.analyticsTimer.start("local_audio_track_time"), h.video && this.analyticsTimer.start("local_video_track_time");
            try {
                l.d(this.TAG, "Init Local Tracks", {
                    fetchTrackOptions: h
                }), s = yield this.getLocalTracks(h, t, d);
            } catch (T) {
                s = yield this.retryGetLocalTracks(T, t, h, d);
            }
            return h.audio && this.analyticsTimer.end("local_audio_track_time"), h.video && this.analyticsTimer.end("local_video_track_time"), o && r && !u && s.push(o), n && i && !p && s.push(n), s;
        });
    }
    getLocalTracks() {
        return c(this, arguments, function*(e = {
            audio: !0,
            video: !0
        }, t, i) {
            try {
                let r = yield this.getNativeLocalTracks(e, t);
                return this.createHMSLocalTracks(r, t, i);
            } catch (r) {
                throw this.eventBus.analytics.publish(y.publish({
                    devices: this.deviceManager.getDevices(),
                    error: r,
                    settings: t
                })), r;
            }
        });
    }
    getNativeLocalTracks() {
        return c(this, arguments, function*(e = {
            audio: !1,
            video: !1
        }, t) {
            let i = new Ze(e.video === !0 ? t.video : null, e.audio === !0 ? t.audio : null, t.simulcast), r = [];
            return (i.audio || i.video) && r.push(...yield this.getAVTracks(i)), r.push(...this.getEmptyTracks(e)), r;
        });
    }
    optimizeScreenShareConstraint(e, t) {
        return c(this, null, function*() {
            var s, o, n;
            if (typeof t.video == "boolean" || !((s = t.video) != null && s.width) || !((o = t.video) != null && o.height)) return;
            let i = this.store.getPublishParams();
            if (!i || !((n = i.allowed) != null && n.includes("screen"))) return;
            let r = document.createElement("video");
            r.srcObject = e, r.addEventListener("loadedmetadata", ()=>c(this, null, function*() {
                    let { videoWidth: d, videoHeight: u } = r, p = i.screen, h = p.width * p.height, T = d / u, g = p.width / p.height;
                    if (T > g) {
                        let f = t.video, E = T / g, v = Math.sqrt(E);
                        d * u > h ? (f.width = d / v, f.height = u / v) : (f.height = u * v, f.width = d * v), yield e.getVideoTracks()[0].applyConstraints(f);
                    }
                }));
        });
    }
    getLocalScreen(e, t = !1) {
        return c(this, null, function*() {
            var T;
            let i = yield this.getOrDefaultScreenshareConfig(e), r = this.getScreenshareSettings(i.videoOnly), s = {
                video: M(m({}, r == null ? void 0 : r.video.toConstraints(!0)), {
                    displaySurface: i.displaySurface
                }),
                preferCurrentTab: i.preferCurrentTab,
                selfBrowserSurface: i.selfBrowserSurface,
                surfaceSwitching: i.surfaceSwitching,
                systemAudio: i.systemAudio
            };
            if (r != null && r.audio) {
                let g = (T = r == null ? void 0 : r.audio) == null ? void 0 : T.toConstraints();
                delete g.advanced, s.audio = M(m({}, g), {
                    autoGainControl: !1,
                    noiseSuppression: !1,
                    googAutoGainControl: !1,
                    echoCancellation: !1
                });
            } else e != null && e.forceCurrentTab && e.preferCurrentTab && e.cropElement && (s.audio = {
                echoCancellation: !0,
                noiseSuppression: !0
            });
            let o;
            try {
                l.d("retrieving screenshare with ", {
                    config: i
                }, {
                    constraints: s
                }), o = yield navigator.mediaDevices.getDisplayMedia(s), t && (yield this.optimizeScreenShareConstraint(o, s));
            } catch (g) {
                l.w(this.TAG, "error in getting screenshare - ", g);
                let f = _e(g, "screen");
                throw this.eventBus.analytics.publish(y.publish({
                    error: f,
                    devices: this.deviceManager.getDevices(),
                    settings: new Ze(r == null ? void 0 : r.video, r == null ? void 0 : r.audio, !1)
                })), f;
            }
            let n = [], d = new Se(o), u = o.getVideoTracks()[0], p = new G(d, u, "screen", this.eventBus, r == null ? void 0 : r.video, this.store.getRoom());
            p.setSimulcastDefinitons(this.store.getSimulcastDefinitionsForPeer(this.store.getLocalPeer(), "screen"));
            try {
                let g = this.validateCurrentTabCapture(p, i.forceCurrentTab);
                p.isCurrentTab = g, yield p.cropTo(i.cropTarget);
            } catch (g) {
                throw o.getTracks().forEach((f)=>f.stop()), g;
            }
            n.push(p);
            let h = o.getAudioTracks()[0];
            if (h) {
                let g = new de(d, h, "screen", this.eventBus, r == null ? void 0 : r.audio, this.store.getRoom());
                n.push(g);
            }
            return l.v(this.TAG, "getLocalScreen", n), n;
        });
    }
    setScreenCaptureHandleConfig(e) {
        var t;
        !((t = navigator.mediaDevices) != null && t.setCaptureHandleConfig) || this.isInIframe() || (e = e || {}, Object.assign(e, {
            handle: (0, _uuid.v4)(),
            exposeOrigin: !1,
            permittedOrigins: [
                window.location.origin
            ]
        }), l.d("setting capture handle - ", e.handle), navigator.mediaDevices.setCaptureHandleConfig(e), this.captureHandleIdentifier = e.handle);
    }
    validateCurrentTabCapture(e, t) {
        let i = e.getCaptureHandle(), r = !!(this.captureHandleIdentifier && (i == null ? void 0 : i.handle) === this.captureHandleIdentifier);
        if (t && !r) throw l.e(this.TAG, "current tab was not shared with forceCurrentTab as true"), S.TracksErrors.CurrentTabNotShared();
        return r;
    }
    requestPermissions() {
        return c(this, null, function*() {
            try {
                (yield navigator.mediaDevices.getUserMedia({
                    audio: !0,
                    video: !0
                })).getTracks().forEach((t)=>t.stop());
            } catch (e) {
                l.e(this.TAG, e);
            }
        });
    }
    static getEmptyVideoTrack(e) {
        var n, d, u;
        let t = ((n = e == null ? void 0 : e.getSettings()) == null ? void 0 : n.width) || 320, i = ((d = e == null ? void 0 : e.getSettings()) == null ? void 0 : d.height) || 240, r = 1;
        Me || (Me = document.createElement("canvas"), Me.width = t, Me.height = i, (u = Me.getContext("2d")) == null || u.fillRect(0, 0, t, i)), fi || (fi = setInterval(()=>{
            let p = Me == null ? void 0 : Me.getContext("2d");
            p && p.fillRect(0, 0, 1, 1);
        }, 1e3 / r));
        let o = Me.captureStream(r).getVideoTracks()[0];
        return o.enabled = !1, o;
    }
    static getEmptyAudioTrack() {
        let e = ce.getAudioContext(), t = e.createOscillator(), i = e.createMediaStreamDestination();
        t.connect(i), t.start();
        let r = i.stream.getAudioTracks()[0];
        return r.enabled = !1, r;
    }
    static cleanup() {
        clearInterval(fi), fi = void 0, Me = void 0;
    }
    getAVTracks(e) {
        return c(this, null, function*() {
            try {
                let t = yield navigator.mediaDevices.getUserMedia({
                    audio: e.audio ? e.audio.toConstraints() : !1,
                    video: e.video ? e.video.toConstraints() : !1
                });
                return t.getVideoTracks().concat(t.getAudioTracks());
            } catch (t) {
                yield this.deviceManager.init();
                let i = !!(!this.deviceManager.hasWebcamPermission && e.video), r = !!(!this.deviceManager.hasMicrophonePermission && e.audio), s = this.getErrorType(i, r);
                throw _e(t, s);
            }
        });
    }
    getAVTrackSettings(e) {
        let t = this.getAudioSettings(e), i = this.getVideoSettings(e);
        return !t && !i ? null : new xe().video(i).audio(t).build();
    }
    isInIframe() {
        try {
            return window.self !== window.top;
        } catch (e) {
            return !0;
        }
    }
    retryGetLocalTracks(e, t, i, r) {
        return c(this, null, function*() {
            if (e instanceof k && e.action === "TRACK") {
                this.observer.onFailure(e);
                let s = e.code === P.TracksErrors.OVER_CONSTRAINED, o = e.message.includes("audio"), n = e.message.includes("video");
                if (s) {
                    let d = new xe().video(new Ke).audio(new $e).build();
                    l.w(this.TAG, "Fetch AV Tracks failed with overconstrained error", {
                        fetchTrackOptions: i
                    }, {
                        error: e
                    });
                    try {
                        return yield this.getLocalTracks(i, d, r);
                    } catch (u) {
                        let p = u instanceof k ? u.nativeError : u, h = u;
                        if ((p == null ? void 0 : p.name) === "OverconstrainedError") {
                            let T = S.TracksErrors.GenericTrack("TRACK", "Overconstrained error after dropping all constraints");
                            T.addNativeError(p), h = T;
                        }
                        return yield this.retryGetLocalTracks(h, t, i, r);
                    }
                }
                i.audio = o ? "empty" : i.audio, i.video = n ? "empty" : i.video, l.w(this.TAG, "Fetch AV Tracks failed", {
                    fetchTrackOptions: i
                }, e);
                try {
                    return yield this.getLocalTracks(i, t, r);
                } catch (d) {
                    return l.w(this.TAG, "Fetch empty tacks failed", d), i.audio = i.audio && "empty", i.video = i.video && "empty", this.observer.onFailure(d), yield this.getLocalTracks(i, t, r);
                }
            } else return l.w(this.TAG, "Fetch AV Tracks failed - unknown exception", e), this.observer.onFailure(e), [];
        });
    }
    getErrorType(e, t) {
        return e && t ? "audio, video" : e ? "video" : t ? "audio" : "audio, video";
    }
    getEmptyTracks(e) {
        let t = [];
        return e.audio === "empty" && t.push(a.getEmptyAudioTrack()), e.video === "empty" && t.push(a.getEmptyVideoTrack()), t;
    }
    updateCurrentLocalTrackSettings(e) {
        return c(this, null, function*() {
            let t = this.store.getLocalPeerTracks(), i = t.find((n)=>n.type === "video" && n.source === "regular"), r = t.find((n)=>n.type === "audio" && n.source === "regular"), s = t.find((n)=>n.type === "video" && n.source === "screen");
            e != null && e.video && (yield i == null ? void 0 : i.setSettings(e.video)), e != null && e.audio && (yield r == null ? void 0 : r.setSettings(e.audio));
            let o = this.getScreenshareSettings(!0);
            return o != null && o.video && (yield s == null ? void 0 : s.setSettings(o == null ? void 0 : o.video)), {
                videoTrack: i,
                audioTrack: r
            };
        });
    }
    getAudioSettings(e) {
        var o;
        let t = this.store.getPublishParams();
        if (!t || !((o = t.allowed) != null && o.includes("audio"))) return null;
        let i = this.store.getLocalPeer(), r = i == null ? void 0 : i.audioTrack, s = (r == null ? void 0 : r.settings.deviceId) || e.audioInputDeviceId;
        return new Q().codec(t.audio.codec).maxBitrate(t.audio.bitRate).deviceId(s || Gr.audioInputDeviceId).build();
    }
    getVideoSettings(e) {
        var n;
        let t = this.store.getPublishParams();
        if (!t || !((n = t.allowed) != null && n.includes("video"))) return null;
        let i = this.store.getLocalPeer(), r = i == null ? void 0 : i.videoTrack, s = (r == null ? void 0 : r.settings.deviceId) || e.videoDeviceId, o = t.video;
        return new q().codec(o.codec).maxBitrate(o.bitRate).maxFramerate(o.frameRate).setWidth(o.width).setHeight(o.height).deviceId(s || Gr.videoDeviceId).build();
    }
    getScreenshareSettings(e = !1) {
        var r;
        let t = this.store.getPublishParams();
        if (!t || !((r = t.allowed) != null && r.includes("screen"))) return null;
        let i = t.screen;
        return {
            video: new q().maxBitrate(i.bitRate, !1).codec(i.codec).maxFramerate(i.frameRate).setWidth(i.width).setHeight(i.height).build(),
            audio: e ? void 0 : new Q().build()
        };
    }
    getOrDefaultScreenshareConfig(e) {
        return c(this, null, function*() {
            var i;
            let t = Object.assign({
                videoOnly: !1,
                audioOnly: !1,
                forceCurrentTab: !1,
                preferCurrentTab: !1,
                selfBrowserSurface: "exclude",
                surfaceSwitching: "include",
                systemAudio: "exclude",
                displaySurface: "monitor"
            }, e || {});
            return t.forceCurrentTab && (t.videoOnly = !0, t.preferCurrentTab = !0, t.selfBrowserSurface = "include", t.surfaceSwitching = "exclude"), t.preferCurrentTab && (t.selfBrowserSurface = "include", t.displaySurface = void 0), t.cropElement && (i = window.CropTarget) != null && i.fromElement && (t.cropTarget = yield window.CropTarget.fromElement(t.cropElement)), t;
        });
    }
    createHMSLocalTracks(e, t, i) {
        let r = e.find((n)=>n.kind === "video"), s = e.find((n)=>n.kind === "audio");
        i ? e.forEach((n)=>i == null ? void 0 : i.nativeStream.addTrack(n)) : i = new Se(new MediaStream(e));
        let o = [];
        if (s && t != null && t.audio) {
            let n = new de(i, s, "regular", this.eventBus, t.audio, this.store.getRoom());
            o.push(n);
        }
        if (r && t != null && t.video) {
            let n = new G(i, r, "regular", this.eventBus, t.video, this.store.getRoom());
            n.setSimulcastDefinitons(this.store.getSimulcastDefinitionsForPeer(this.store.getLocalPeer(), "regular")), o.push(n);
        }
        return o;
    }
};
function Zs(a, e) {
    return function(i) {
        return !(0, _lodashIsequalDefault.default)(a[i], e[i]);
    };
}
var G = class a extends et {
    constructor(t, i, r, s, o = new q().build(), n){
        super(t, i, r);
        this.eventBus = s;
        this.room = n;
        this._layerDefinitions = [];
        this.TAG = "[HMSLocalVideoTrack]";
        this.enabledStateBeforeBackground = !1;
        this.isCurrentTab = !1;
        this.isPublished = !1;
        this.replaceSenderTrack = (t)=>c(this, null, function*() {
                if (!this.transceiver || this.transceiver.direction !== "sendonly") {
                    l.d(this.TAG, `transceiver for ${this.trackId} not available or not connected yet`);
                    return;
                }
                yield this.transceiver.sender.replaceTrack(t);
            });
        this.buildNewSettings = (t)=>{
            let { width: i, height: r, codec: s, maxFramerate: o, maxBitrate: n, deviceId: d, advanced: u, facingMode: p } = m(m({}, this.settings), t);
            return new Ke(i, r, s, o, d, u, n, p);
        };
        this.handleSettingsChange = (t)=>c(this, null, function*() {
                let i = this.stream, r = Zs(t, this.settings);
                if (r("maxBitrate") && t.maxBitrate && (yield i.setMaxBitrateAndFramerate(this)), r("width") || r("height") || r("advanced")) {
                    if (this.source === "video") {
                        let s = yield this.replaceTrackWith(t);
                        yield this.replaceSender(s, this.enabled), this.nativeTrack = s, yield this.processPlugins(), this.videoHandler.updateSinks();
                    } else yield this.nativeTrack.applyConstraints(t.toConstraints());
                }
            });
        this.handleDeviceChange = (t, i = !1)=>c(this, null, function*() {
                if (Zs(t, this.settings)("deviceId") && this.source === "regular") {
                    if (this.enabled) {
                        delete t.facingMode;
                        let o = yield this.replaceTrackWith(t);
                        yield this.replaceSender(o, this.enabled), this.nativeTrack = o, yield this.processPlugins(), this.videoHandler.updateSinks();
                    }
                    let s = this.nativeTrack.getSettings().groupId;
                    !i && t.deviceId && (X.updateSelection("videoInput", {
                        deviceId: t.deviceId,
                        groupId: s
                    }), this.eventBus.deviceChange.publish({
                        isUserSelection: !0,
                        type: "video",
                        selection: {
                            deviceId: t.deviceId,
                            groupId: s
                        }
                    }));
                }
            });
        this.trackPermissions = ()=>{
            hi("camera", (t)=>{
                this.eventBus.analytics.publish(y.permissionChange(this.type, t)), t === "denied" && this.eventBus.localVideoEnabled.publish({
                    enabled: !1,
                    track: this
                });
            });
        };
        this.handleTrackMute = ()=>{
            l.d(this.TAG, "muted natively", document.visibilityState);
            let t = document.visibilityState === "hidden" ? "visibility-change" : "incoming-call";
            this.eventBus.analytics.publish(this.sendInterruptionEvent({
                started: !0,
                reason: t
            })), this.eventBus.localVideoEnabled.publish({
                enabled: !1,
                track: this
            });
        };
        this.handleTrackUnmuteNatively = ()=>c(this, null, function*() {
                l.d(this.TAG, "unmuted natively");
                let t = document.visibilityState === "hidden" ? "visibility-change" : "incoming-call";
                this.eventBus.analytics.publish(this.sendInterruptionEvent({
                    started: !1,
                    reason: t
                })), this.handleTrackUnmute(), this.eventBus.localVideoEnabled.publish({
                    enabled: this.enabled,
                    track: this
                }), this.eventBus.localVideoUnmutedNatively.publish(), yield this.setEnabled(this.enabled);
            });
        this.removeOrReplaceProcessedTrack = (t)=>c(this, null, function*() {
                t ? t !== this.processedTrack && (this.processedTrack = t) : this.processedTrack = void 0, yield this.replaceSenderTrack(this.processedTrack || this.nativeTrack);
            });
        this.handleVisibilityChange = ()=>c(this, null, function*() {
                if (document.visibilityState === "hidden") this.enabledStateBeforeBackground = this.enabled, this.enabled && (yield this.setEnabled(!1)), this.eventBus.analytics.publish(this.sendInterruptionEvent({
                    started: !0,
                    reason: "visibility-change"
                }));
                else {
                    if (l.d(this.TAG, "visibility visible, restoring track state", this.enabledStateBeforeBackground), this.enabledStateBeforeBackground) try {
                        yield this.setEnabled(!0);
                    } catch (t) {
                        this.eventBus.error.publish(t);
                    }
                    this.eventBus.analytics.publish(this.sendInterruptionEvent({
                        started: !1,
                        reason: "visibility-change"
                    }));
                }
            });
        this.addTrackEventListeners(i), this.trackPermissions(), t.tracks.push(this), this.setVideoHandler(new tt(this)), this.settings = o, o.deviceId !== i.getSettings().deviceId && i.enabled && (this.settings = this.buildNewSettings({
            deviceId: i.getSettings().deviceId
        })), this.pluginsManager = new It(this, s), this.mediaStreamPluginsManager = new gi(s, n), this.setFirstTrackId(this.trackId), this.eventBus.localAudioUnmutedNatively.subscribe(this.handleTrackUnmute), U && r === "regular" && Mt() && document.addEventListener("visibilitychange", this.handleVisibilityChange);
    }
    clone(t) {
        let i = this.nativeTrack.clone();
        t.nativeStream.addTrack(i);
        let r = new a(t, i, this.source, this.eventBus, this.settings, this.room);
        return r.peerId = this.peerId, this.pluginsManager.pluginsMap.size > 0 && this.pluginsManager.pluginsMap.forEach((s)=>{
            r.addPlugin(s).catch((o)=>l.e(this.TAG, "Plugin add failed while migrating", s, o));
        }), this.mediaStreamPluginsManager.plugins.size > 0 && r.addStreamPlugins(Array.from(this.mediaStreamPluginsManager.plugins)), r;
    }
    setSimulcastDefinitons(t) {
        this._layerDefinitions = t;
    }
    getSimulcastDefinitions() {
        return this._layerDefinitions;
    }
    setEnabled(t) {
        return c(this, null, function*() {
            var i;
            if (t !== this.enabled) {
                if (this.source === "regular") {
                    let r;
                    t ? r = yield this.replaceTrackWith(this.settings) : r = yield this.replaceTrackWithBlank(), yield this.replaceSender(r, t), (i = this.nativeTrack) == null || i.stop(), this.nativeTrack = r, yield ne(a.prototype, this, "setEnabled").call(this, t), t && (yield this.pluginsManager.waitForRestart(), yield this.processPlugins(), this.settings = this.buildNewSettings({
                        deviceId: r.getSettings().deviceId
                    })), this.videoHandler.updateSinks();
                }
                this.eventBus.localVideoEnabled.publish({
                    enabled: t,
                    track: this
                });
            }
        });
    }
    processPlugins() {
        return c(this, null, function*() {
            try {
                if (this.pluginsManager.getPlugins().length > 0) return;
                if (this.mediaStreamPluginsManager.getPlugins().length > 0) {
                    let r = this.mediaStreamPluginsManager.applyPlugins(new MediaStream([
                        this.nativeTrack
                    ])).getVideoTracks()[0];
                    yield this.setProcessedTrack(r);
                } else yield this.setProcessedTrack();
                this.videoHandler.updateSinks();
            } catch (t) {
                console.error("error in processing plugin(s)", t);
            }
        });
    }
    addStreamPlugins(t) {
        return c(this, null, function*() {
            if (this.pluginsManager.getPlugins().length > 0) throw Error("Plugins of type HMSMediaStreamPlugin and HMSVideoPlugin cannot be used together");
            this.mediaStreamPluginsManager.addPlugins(t), yield this.processPlugins();
        });
    }
    removeStreamPlugins(t) {
        return c(this, null, function*() {
            this.mediaStreamPluginsManager.removePlugins(t), yield this.processPlugins();
        });
    }
    isPublishedTrackId(t) {
        return this.publishedTrackId === t;
    }
    addSink(t) {
        this.addSinkInternal(t, this.processedTrack || this.nativeTrack);
    }
    setSettings(t, i = !1) {
        return c(this, null, function*() {
            let r = this.buildNewSettings(t);
            if (yield this.handleDeviceChange(r, i), !this.enabled || ve(this.nativeTrack)) {
                this.settings = r;
                return;
            } else yield this.pluginsManager.waitForRestart();
            yield this.handleSettingsChange(r), this.settings = r;
        });
    }
    getPlugins() {
        return this.mediaStreamPluginsManager.getPlugins().length > 0 ? this.mediaStreamPluginsManager.getPlugins() : this.pluginsManager.getPlugins();
    }
    addPlugin(t, i) {
        return c(this, null, function*() {
            if (this.mediaStreamPluginsManager.getPlugins().length > 0) throw Error("Plugins of type HMSVideoPlugin and HMSMediaStreamPlugin cannot be used together");
            return this.pluginsManager.addPlugin(t, i);
        });
    }
    removePlugin(t) {
        return c(this, null, function*() {
            return this.pluginsManager.removePlugin(t);
        });
    }
    validatePlugin(t) {
        return this.pluginsManager.validatePlugin(t);
    }
    cleanup() {
        return c(this, null, function*() {
            var t;
            this.eventBus.localAudioUnmutedNatively.unsubscribe(this.handleTrackUnmute), this.removeTrackEventListeners(this.nativeTrack), yield this.mediaStreamPluginsManager.cleanup(), yield this.pluginsManager.cleanup(), ne(a.prototype, this, "cleanup").call(this), this.transceiver = void 0, (t = this.processedTrack) == null || t.stop(), this.isPublished = !1, U && Mt() && document.removeEventListener("visibilitychange", this.handleVisibilityChange);
        });
    }
    cropTo(t) {
        return c(this, null, function*() {
            if (t && this.source === "screen") try {
                this.nativeTrack.cropTo && (yield this.nativeTrack.cropTo(t));
            } catch (i) {
                throw l.e(this.TAG, "failed to crop screenshare capture - ", i), S.TracksErrors.GenericTrack("TRACK", "failed to crop screenshare capture");
            }
        });
    }
    getCaptureHandle() {
        if (this.nativeTrack.getCaptureHandle) return this.nativeTrack.getCaptureHandle();
    }
    setProcessedTrack(t) {
        return c(this, null, function*() {
            if (!this.nativeTrack.enabled) {
                this.processedTrack = t;
                return;
            }
            yield this.removeOrReplaceProcessedTrack(t), this.videoHandler.updateSinks();
        });
    }
    getTrackIDBeingSent() {
        return this.getTrackBeingSent().id;
    }
    getTrackBeingSent() {
        return this.enabled ? this.processedTrack || this.nativeTrack : this.nativeTrack;
    }
    switchCamera() {
        return c(this, null, function*() {
            var s;
            let t = this.getMediaTrackSettings().facingMode;
            if (!t || this.source !== "regular") {
                l.d(this.TAG, "facingMode not supported");
                return;
            }
            let i = t === "environment" ? "user" : "environment";
            (s = this.nativeTrack) == null || s.stop();
            let r = yield this.replaceTrackWith(this.buildNewSettings({
                facingMode: i,
                deviceId: void 0
            }));
            yield this.replaceSender(r, this.enabled), this.nativeTrack = r, yield this.processPlugins(), this.videoHandler.updateSinks(), this.settings = this.buildNewSettings({
                deviceId: this.nativeTrack.getSettings().deviceId,
                facingMode: i
            }), X.updateSelection("videoInput", {
                deviceId: this.settings.deviceId,
                groupId: this.nativeTrack.getSettings().groupId
            });
        });
    }
    replaceTrackWith(t) {
        return c(this, null, function*() {
            let i = this.nativeTrack;
            this.removeTrackEventListeners(i), i == null || i.stop();
            try {
                let r = yield wr(t);
                return this.addTrackEventListeners(r), l.d(this.TAG, "replaceTrack, Previous track stopped", i, "newTrack", r), this.settings.deviceId === "default" && (this.settings = this.buildNewSettings({
                    deviceId: this.nativeTrack.getSettings().deviceId
                })), r;
            } catch (r) {
                let s = yield wr(this.settings);
                throw this.addTrackEventListeners(s), yield this.replaceSender(s, this.enabled), this.nativeTrack = s, yield this.processPlugins(), this.videoHandler.updateSinks(), this.isPublished && this.eventBus.analytics.publish(y.publish({
                    error: r
                })), r;
            }
        });
    }
    replaceTrackWithBlank() {
        return c(this, null, function*() {
            let t = this.nativeTrack, i = be.getEmptyVideoTrack(t);
            return this.removeTrackEventListeners(t), this.addTrackEventListeners(i), t == null || t.stop(), l.d(this.TAG, "replaceTrackWithBlank, Previous track stopped", t, "newTrack", i), i;
        });
    }
    replaceSender(t, i) {
        return c(this, null, function*() {
            i ? yield this.replaceSenderTrack(this.processedTrack || t) : yield this.replaceSenderTrack(t), this.stream.replaceStreamTrack(this.nativeTrack, t);
        });
    }
    addTrackEventListeners(t) {
        t.addEventListener("mute", this.handleTrackMute), t.addEventListener("unmute", this.handleTrackUnmuteNatively);
    }
    removeTrackEventListeners(t) {
        t.removeEventListener("mute", this.handleTrackMute), t.removeEventListener("unmute", this.handleTrackUnmuteNatively);
    }
};
var rt = "renegotiation-callback-id", vi = "ion-sfu";
var st = "SUBSCRIBE_ICE_CONNECTION_CALLBACK_ID";
var ea = "https://event.100ms.live/v2/client/report", ta = "https://event-nonprod.100ms.live/v2/client/report";
var Rt = Math.pow(2, 31) - 1, V = {
    DEVICE_CHANGE: "device-change",
    LOCAL_AUDIO_ENABLED: "local-audio-enabled",
    LOCAL_VIDEO_ENABLED: "local-video-enabled",
    LOCAL_VIDEO_UNMUTED_NATIVELY: "local-video-unmuted-natively",
    LOCAL_AUDIO_UNMUTED_NATIVELY: "local-audio-unmuted-natively",
    STATS_UPDATE: "stats-update",
    RTC_STATS_UPDATE: "rtc-stats-update",
    TRACK_DEGRADED: "track-degraded",
    TRACK_RESTORED: "track-restored",
    TRACK_AUDIO_LEVEL_UPDATE: "track-audio-level-update",
    LOCAL_AUDIO_SILENCE: "local-audio-silence",
    ANALYTICS: "analytics",
    AUDIO_PLUGIN_FAILED: "audio-plugin-failed",
    POLICY_CHANGE: "policy-change",
    LOCAL_ROLE_UPDATE: "local-role-update",
    AUDIO_TRACK_UPDATE: "audio-track-update",
    AUDIO_TRACK_ADDED: "audio-track-added",
    AUDIO_TRACK_REMOVED: "audio-track-removed",
    AUTOPLAY_ERROR: "autoplay-error",
    LEAVE: "leave",
    ERROR: "error"
}, ia = "2.5", ra = "20250115", Ae = "_handraise", $r = 1e3, Kr = 64, sa = "https://whiteboard.100ms.live", aa = "https://whiteboard-qa.100ms.live";
var O = class a extends et {
    constructor(t, i, r, s){
        super(t, i, r);
        this._degraded = !1;
        this._degradedAt = null;
        this._layerDefinitions = [];
        this.history = new qr;
        this.preferredLayer = "high";
        this.disableNoneLayerRequest = !1;
        this.disableNoneLayerRequest = !!s, this.setVideoHandler(new tt(this));
    }
    setTrackId(t) {
        this.bizTrackId = t;
    }
    get trackId() {
        return this.bizTrackId || super.trackId;
    }
    get degraded() {
        return this._degraded;
    }
    get degradedAt() {
        return this._degradedAt;
    }
    setEnabled(t) {
        return c(this, null, function*() {
            t !== this.enabled && (ne(a.prototype, this, "setEnabled").call(this, t), this.videoHandler.updateSinks(!0));
        });
    }
    setPreferredLayer(t) {
        return c(this, null, function*() {
            if (t === "none") {
                l.w("layer none will be ignored");
                return;
            }
            if (this.preferredLayer = t, !!this.shouldSendVideoLayer(t, "preferLayer")) {
                if (!this.hasSinks()) {
                    l.d(`[Remote Track] ${this.logIdentifier}
        streamId=${this.stream.id} 
        trackId=${this.trackId}
        saving ${t}, source=${this.source}
        Track does not have any sink`);
                    return;
                }
                yield this.requestLayer(t, "preferLayer"), this.pushInHistory(`uiPreferLayer-${t}`);
            }
        });
    }
    getSimulcastLayer() {
        return this.stream.getSimulcastLayer();
    }
    getLayer() {
        return this.stream.getVideoLayer();
    }
    getPreferredLayer() {
        return this.preferredLayer;
    }
    getPreferredLayerDefinition() {
        return this._layerDefinitions.find((t)=>t.layer === this.preferredLayer);
    }
    replaceTrack(t) {
        this.nativeTrack = t.nativeTrack, t.transceiver && (this.transceiver = t.transceiver, this.stream.updateId(t.stream.id)), this.videoHandler.updateSinks();
    }
    addSink(t, i = !0) {
        return c(this, null, function*() {
            ve(this.nativeTrack) ? yield this.requestLayer(this.preferredLayer, "addSink") : (ne(a.prototype, this, "addSink").call(this, t), i && (yield this.updateLayer("addSink"))), this.pushInHistory("uiSetLayer-high");
        });
    }
    removeSink(t, i = !0) {
        return c(this, null, function*() {
            ne(a.prototype, this, "removeSink").call(this, t), i && (yield this.updateLayer("removeSink")), this._degraded = !1, this.pushInHistory("uiSetLayer-none");
        });
    }
    getSimulcastDefinitions() {
        return [
            ...this._layerDefinitions
        ];
    }
    setSimulcastDefinitons(t) {
        this._layerDefinitions = t;
    }
    setLayerFromServer(t) {
        this._degraded = this.getDegradationValue(t), this._degradedAt = this._degraded ? new Date : this._degradedAt;
        let i = t.current_layer;
        return l.d(`[Remote Track] ${this.logIdentifier} 
      streamId=${this.stream.id} 
      trackId=${this.trackId}
      layer update from sfu
      currLayer=${t.current_layer}
      preferredLayer=${t.expected_layer}
      sub_degraded=${t.subscriber_degraded}
      pub_degraded=${t.publisher_degraded}
      isDegraded=${this._degraded}`), this.stream.setVideoLayerLocally(i, this.logIdentifier, "setLayerFromServer"), this.pushInHistory(`sfuLayerUpdate-${i}`), this._degraded;
    }
    getDegradationValue(t) {
        return this.enabled && (t.publisher_degraded || t.subscriber_degraded) && t.current_layer === "none";
    }
    updateLayer(t) {
        return c(this, null, function*() {
            let i = this.preferredLayer;
            this.enabled && this.hasSinks() ? i = this.preferredLayer : this.disableNoneLayerRequest || (i = "none"), this.shouldSendVideoLayer(i, t) && (yield this.requestLayer(i, t));
        });
    }
    pushInHistory(t) {}
    requestLayer(t, i) {
        return c(this, null, function*() {
            try {
                let r = yield this.stream.setVideoLayer(t, this.trackId, this.logIdentifier, i);
                return l.d(`[Remote Track] ${this.logIdentifier} 
      streamId=${this.stream.id}
      trackId=${this.trackId}
      Requested layer ${t}, source=${i}`), r;
            } catch (r) {
                throw l.d(`[Remote Track] ${this.logIdentifier} 
      streamId=${this.stream.id}
      trackId=${this.trackId}
      Failed to set layer ${t}, source=${i}
      error=${r.message}`), r;
            }
        });
    }
    shouldSendVideoLayer(t, i) {
        let r = this.getLayer();
        return this.degraded && t === "none" ? !0 : r === t ? (l.d(`[Remote Track] ${this.logIdentifier}`, `Not sending update, already on layer ${t}, source=${i}`), !1) : !0;
    }
}, qr = class {
    constructor(){
        this.history = [];
    }
    push(e) {
        e.time = new Date().toISOString().split("T")[1], this.history.push(e);
    }
};
var Se = class extends Ye {
    constructor(){
        super(...arguments);
        this.TAG = "[HMSLocalStream]";
        this.connection = null;
    }
    setConnection(t) {
        this.connection = t;
    }
    addTransceiver(t, i) {
        let r = this.connection.addTransceiver(t.getTrackBeingSent(), {
            streams: [
                this.nativeStream
            ],
            direction: "sendonly",
            sendEncodings: this.getTrackEncodings(t, i)
        });
        return this.setPreferredCodec(r, t.nativeTrack.kind), t.transceiver = r, r;
    }
    setMaxBitrateAndFramerate(t, i) {
        return c(this, null, function*() {
            var r;
            yield (r = this.connection) == null ? void 0 : r.setMaxBitrateAndFramerate(t, i);
        });
    }
    setPreferredCodec(t, i) {}
    replaceStreamTrack(t, i) {
        this.nativeStream.addTrack(i), this.nativeStream.removeTrack(t);
    }
    removeSender(t) {
        var s, o;
        if (!this.connection || this.connection.connectionState === "closed") {
            l.d(this.TAG, "publish connection is not initialised or closed");
            return;
        }
        let i = (s = t.transceiver) == null ? void 0 : s.sender;
        if (!i) {
            l.w(this.TAG, `No sender found for trackId=${t.trackId}`);
            return;
        }
        (o = this.connection) == null || o.removeTrack(i);
        let r = this.tracks.indexOf(t);
        r !== -1 ? this.tracks.splice(r, 1) : l.w(this.TAG, `Cannot find ${t.trackId} in locally stored tracks`);
    }
    getTrackEncodings(t, i) {
        let r = [];
        if (t instanceof G) {
            if (i.length > 0) l.d(this.TAG, "Simulcast enabled with layers", i), r.push(...i);
            else {
                let s = {
                    active: this.nativeStream.active
                };
                t.settings.maxBitrate && !Ge && (s.maxBitrate = t.settings.maxBitrate), r.push(s);
            }
        }
        return r;
    }
};
var Pe = class extends Ye {
    constructor(t, i){
        super(t);
        this.audio = !0;
        this.video = "none";
        this.connection = i;
    }
    setAudio(t, i, r) {
        return c(this, null, function*() {
            this.audio !== t && (this.audio = t, l.d(`[Remote stream] ${r || ""} 
    streamId=${this.id}
    trackId=${i}
    subscribing audio - ${this.audio}`), yield this.connection.sendOverApiDataChannelWithResponse({
                params: {
                    subscribed: this.audio,
                    track_id: i
                },
                method: "prefer-audio-track-state"
            }));
        });
    }
    setVideoLayerLocally(t, i, r) {
        this.video = t, l.d(`[Remote stream] ${i}
    streamId=${this.id}
    source: ${r}
    Setting layer field to=${t}`);
    }
    setVideoLayer(t, i, r, s) {
        return l.d(`[Remote stream] ${r} 
      streamId=${this.id}
      trackId=${i} 
      source: ${s} request ${t} layer`), this.setVideoLayerLocally(t, r, s), this.connection.sendOverApiDataChannelWithResponse({
            params: {
                max_spatial_layer: this.video,
                track_id: i
            },
            method: "prefer-video-track-state"
        });
    }
    getSimulcastLayer() {
        return this.video;
    }
    getVideoLayer() {
        return this.video;
    }
    isAudioSubscribed() {
        return this.audio;
    }
};
var oa = (a, e, t, i)=>c(void 0, null, function*() {
        var o;
        let r, s = {};
        if ((o = e.transceiver) != null && o.sender.track) {
            try {
                r = yield e.transceiver.sender.getStats();
                let n = {}, d = {}, u = {};
                r == null || r.forEach((p)=>{
                    switch(p.type){
                        case "outbound-rtp":
                            d[p.id] = p;
                            break;
                        case "remote-inbound-rtp":
                            u[p.ssrc] = p;
                            break;
                        case "codec":
                            n[p.id] = p.mimeType;
                            break;
                        default:
                            break;
                    }
                }), Object.keys(m({}, d)).forEach((p)=>{
                    var v, R;
                    let h = (v = d[p]) == null ? void 0 : v.codecId, T = h ? n[h] : void 0, g;
                    T && (g = T.substring(T.indexOf("/") + 1));
                    let f = M(m({}, d[p]), {
                        rid: (R = d[p]) == null ? void 0 : R.rid
                    }), E = u[f.ssrc];
                    s[p] = M(m({}, f), {
                        bitrate: Ht("bytesSent", f, i == null ? void 0 : i[p]),
                        packetsLost: E == null ? void 0 : E.packetsLost,
                        jitter: E == null ? void 0 : E.jitter,
                        roundTripTime: E == null ? void 0 : E.roundTripTime,
                        totalRoundTripTime: E == null ? void 0 : E.totalRoundTripTime,
                        peerName: t,
                        peerID: e.peerId,
                        enabled: e.enabled,
                        codec: g
                    });
                });
            } catch (n) {
                a.analytics.publish(y.rtcStatsFailed(S.WebrtcErrors.StatsFailed("TRACK", `Error getting local track stats ${e.trackId} - ${n.message}`))), l.w("[HMSWebrtcStats]", "Error in getting local track stats", e, n, n.name);
            }
            return s;
        }
    }), na = (a, e, t, i)=>c(void 0, null, function*() {
        var d;
        let r;
        try {
            r = yield (d = e.transceiver) == null ? void 0 : d.receiver.getStats();
        } catch (u) {
            a.analytics.publish(y.rtcStatsFailed(S.WebrtcErrors.StatsFailed("TRACK", `Error getting remote track stats ${e.trackId} - ${u.message}`))), l.w("[HMSWebrtcStats]", "Error in getting remote track stats", e, u);
        }
        let s = Uo(r), o = Ht("bytesReceived", s, i), n = jr("packetsLost", s, i);
        return s != null && s.remote && Object.assign(s.remote, {
            packetsLostRate: jr("packetsLost", s.remote, i == null ? void 0 : i.remote)
        }), s && M(m({}, s), {
            bitrate: o,
            packetsLostRate: n,
            peerID: e.peerId,
            enabled: e.enabled,
            peerName: t,
            codec: s.codec
        });
    }), Uo = (a)=>{
    let e, t, i = {};
    a == null || a.forEach((o)=>{
        switch(o.type){
            case "inbound-rtp":
                e = o;
                break;
            case "outbound-rtp":
                e = o;
                break;
            case "remote-inbound-rtp":
                t = o;
                break;
            case "codec":
                i[o.id] = o.mimeType;
                break;
            default:
                break;
        }
    });
    let r = e != null && e.codecId ? i[e.codecId] : void 0, s;
    return r && (s = r.substring(r.indexOf("/") + 1)), e && Object.assign(e, {
        remote: t,
        codec: s
    });
}, Jr = (a, e, t)=>{
    let i = Bo(e), r = Ht(a === "publish" ? "bytesSent" : "bytesReceived", i, t && t[a]);
    return i && Object.assign(i, {
        bitrate: r
    });
}, Bo = (a)=>{
    let e;
    return a == null || a.forEach((t)=>{
        t.type === "transport" && (e = a == null ? void 0 : a.get(t.selectedCandidatePairId));
    }), e || a == null || a.forEach((t)=>{
        t.type === "candidate-pair" && t.selected && (e = t);
    }), e;
}, ca = (a)=>{
    let e = {
        packetsLost: 0,
        jitter: 0
    };
    return a == null || a.forEach((t)=>{
        t.packetsLost && (e.packetsLost += t.packetsLost), t.jitter > e.jitter && (e.jitter = t.jitter);
    }), e;
}, da = (a, e)=>Array.from(new Set(a.concat(e))), Ht = (a, e, t)=>jr(a, e, t) * 8, jr = (a, e, t)=>{
    let i = e && e[a], r = t ? t[a] : null;
    return [
        e,
        t,
        he(i),
        he(r)
    ].every((o)=>!!o) ? Qr(i, r, e == null ? void 0 : e.timestamp, t == null ? void 0 : t.timestamp) * 1e3 : 0;
}, Qr = (a, e, t, i)=>he(a) && he(e) && t && i ? (a - e) / (t - i) : 0;
var Mi = class {
    constructor(e, t, i, r){
        this.store = e;
        this.eventBus = t;
        this.publishConnection = i;
        this.subscribeConnection = r;
        this.TAG = "[HMSWebrtcStats]";
        this.peerStats = {};
        this.remoteTrackStats = {};
        this.localTrackStats = {};
        this.getLocalPeerStats = ()=>this.peerStats[this.localPeerID];
        this.getRemoteTrackStats = (e)=>this.remoteTrackStats[e];
        this.getAllRemoteTracksStats = ()=>this.remoteTrackStats;
        this.getLocalTrackStats = ()=>this.localTrackStats;
        this.updateStats = ()=>c(this, null, function*() {
                yield this.updateLocalPeerStats(), yield this.updateLocalTrackStats(), yield this.updateRemoteTrackStats();
            });
        this.updateLocalPeerStats = ()=>c(this, null, function*() {
                var p, h, T, g;
                let e = this.getLocalPeerStats(), t;
                try {
                    t = yield (p = this.publishConnection) == null ? void 0 : p.getStats();
                } catch (f) {
                    this.eventBus.analytics.publish(y.rtcStatsFailed(S.WebrtcErrors.StatsFailed("PUBLISH", f.message))), l.w(this.TAG, "Error in getting publish stats", f);
                }
                let i = t && Jr("publish", t, e), r;
                try {
                    r = yield (h = this.subscribeConnection) == null ? void 0 : h.getStats();
                } catch (f) {
                    this.eventBus.analytics.publish(y.rtcStatsFailed(S.WebrtcErrors.StatsFailed("SUBSCRIBE", f.message))), l.w(this.TAG, "Error in getting subscribe stats", f);
                }
                let s = r && Jr("subscribe", r, e), { packetsLost: o, jitter: n } = ca(r), d = Qr(o, (T = e == null ? void 0 : e.subscribe) == null ? void 0 : T.packetsLost, s == null ? void 0 : s.timestamp, (g = e == null ? void 0 : e.subscribe) == null ? void 0 : g.timestamp), u = s && Object.assign(s, {
                    packetsLostRate: d,
                    jitter: n,
                    packetsLost: o
                });
                this.peerStats[this.localPeerID] = {
                    publish: i,
                    subscribe: u
                };
            });
        this.updateRemoteTrackStats = ()=>c(this, null, function*() {
                var i;
                let e = Array.from(this.store.getTracksMap().values()).filter((r)=>r instanceof O || r instanceof ie), t = e.map((r)=>r.trackId);
                Object.keys(this.remoteTrackStats).forEach((r)=>{
                    t.includes(r) || delete this.remoteTrackStats[r];
                });
                for (let r of e){
                    let s = r.peerId && ((i = this.store.getPeerById(r.peerId)) == null ? void 0 : i.name), o = this.getRemoteTrackStats(r.trackId), n = yield na(this.eventBus, r, s, o);
                    n && (this.remoteTrackStats[r.trackId] = n);
                }
            });
        this.updateLocalTrackStats = ()=>c(this, null, function*() {
                var i;
                let e = this.store.getLocalPeerTracks().reduce((r, s)=>(r[s.getTrackIDBeingSent()] = s, r), {}), t = da(Object.keys(this.localTrackStats), Object.keys(e));
                for (let r of t){
                    let s = e[r];
                    if (s) {
                        let o = (i = this.store.getLocalPeer()) == null ? void 0 : i.name, n = yield oa(this.eventBus, s, o, this.localTrackStats[r]);
                        n && (this.localTrackStats[r] = n);
                    } else delete this.localTrackStats[r];
                }
            });
        var s;
        this.localPeerID = (s = this.store.getLocalPeer()) == null ? void 0 : s.peerId;
    }
    setPeerConnections({ publish: e, subscribe: t }) {
        this.publishConnection = e, this.subscribeConnection = t;
    }
    getPublishPeerConnection() {
        return this.publishConnection;
    }
    getSubscribePeerConnection() {
        return this.subscribeConnection;
    }
};
var yi = class {
    constructor(e, t){
        this.store = e;
        this.eventBus = t;
        this.TAG = "[HMSWebrtcInternals]";
        this.interval = 1e3;
        this.isMonitored = !1;
        this.handleStatsUpdate = ()=>c(this, null, function*() {
                var e;
                yield (e = this.hmsStats) == null ? void 0 : e.updateStats(), this.hmsStats && this.eventBus.statsUpdate.publish(this.hmsStats);
            });
    }
    getCurrentStats() {
        return this.hmsStats;
    }
    getPublishPeerConnection() {
        var e;
        return (e = this.hmsStats) == null ? void 0 : e.getPublishPeerConnection();
    }
    getSubscribePeerConnection() {
        var e;
        return (e = this.hmsStats) == null ? void 0 : e.getSubscribePeerConnection();
    }
    onStatsChange(e) {
        return this.eventBus.statsUpdate.subscribe(e), ()=>{
            this.eventBus.statsUpdate.unsubscribe(e);
        };
    }
    setPeerConnections({ publish: e, subscribe: t }) {
        this.hmsStats ? this.hmsStats.setPeerConnections({
            publish: e,
            subscribe: t
        }) : this.hmsStats = new Mi(this.store, this.eventBus, e, t);
    }
    start() {
        return c(this, null, function*() {
            if (this.isMonitored) {
                l.d(this.TAG, "Already started");
                return;
            }
            this.stop(), this.isMonitored = !0, l.d(this.TAG, "Starting Webrtc Stats Monitor"), this.startLoop().then(()=>l.d(this.TAG, "Stopping Webrtc Stats Monitor")).catch((e)=>{
                this.eventBus.analytics.publish(y.rtcStatsFailed(S.WebrtcErrors.StatsFailed("PUBLISH", e.message))), l.e(this.TAG, e.message);
            });
        });
    }
    stop() {
        this.isMonitored = !1;
    }
    startLoop() {
        return c(this, null, function*() {
            for(; this.isMonitored;)yield this.handleStatsUpdate(), yield J(this.interval);
        });
    }
    cleanup() {
        this.stop(), this.eventBus.statsUpdate.removeAllListeners();
    }
};
var at = class {
    constructor({ peerId: e, name: t, isLocal: i, customerUserId: r, metadata: s, role: o, joinedAt: n, groups: d, realtime: u, type: p }){
        this.customerUserId = "";
        this.metadata = "";
        this.auxiliaryTracks = [];
        this.name = t, this.peerId = e, this.isLocal = i, this.customerUserId = r, this.metadata = s, this.joinedAt = n, this.groups = d, this.realtime = u, this.type = p, o && (this.role = o);
    }
    get isHandRaised() {
        var e;
        return !!((e = this.groups) != null && e.includes(Ae));
    }
    updateRole(e) {
        this.role = e;
    }
    updateName(e) {
        this.name = e;
    }
    updateNetworkQuality(e) {
        this.networkQuality = e;
    }
    updateMetadata(e) {
        this.metadata = e;
    }
    updateGroups(e) {
        this.groups = e;
    }
    toString() {
        var e, t, i, r;
        return `{
      name: ${this.name};
      role: ${(e = this.role) == null ? void 0 : e.name};
      peerId: ${this.peerId};
      customerUserId: ${this.customerUserId};
      ${this.audioTrack ? `audioTrack: ${(t = this.audioTrack) == null ? void 0 : t.trackId};` : ""}
      ${this.videoTrack ? `videoTrack: ${(i = this.videoTrack) == null ? void 0 : i.trackId};` : ""}
      groups: ${(r = this.groups) == null ? void 0 : r.join()}
    }`;
    }
};
var ot = class {
};
ot.makePeerId = ()=>(0, _uuid.v4)();
var qe = class extends at {
    constructor(t){
        super(M(m({}, t), {
            peerId: ot.makePeerId(),
            isLocal: !0
        }));
        this.isLocal = !0;
        this.auxiliaryTracks = [];
        this.asRole = t.asRole;
    }
    isInPreview() {
        return !!this.asRole;
    }
    toString() {
        var t, i, r;
        return `{
      name: ${this.name};
      role: ${(t = this.role) == null ? void 0 : t.name};
      peerId: ${this.peerId};
      customerUserId: ${this.customerUserId};
      ${this.asRole ? `asRole: ${this.asRole.name};` : ""}
      ${this.audioTrack ? `audioTrack: ${(i = this.audioTrack) == null ? void 0 : i.trackId};` : ""}
      ${this.videoTrack ? `videoTrack: ${(r = this.videoTrack) == null ? void 0 : r.trackId};` : ""}
    }`;
    }
};
var Ct = class extends at {
    constructor(t){
        super(M(m({}, t), {
            isLocal: !1
        }));
        this.isLocal = !1;
        this.auxiliaryTracks = [];
        this.fromRoomState = !1;
        this.fromRoomState = !!t.fromRoomState;
    }
};
var ye = (a, e)=>new Ct({
        peerId: a.peer_id,
        name: a.info.name,
        role: e.getPolicyForRole(a.role),
        customerUserId: a.info.user_id,
        metadata: a.info.data,
        groups: a.groups,
        type: a.info.type
    });
var ki = class {
    constructor(e, t, i){
        this.transport = e;
        this.store = t;
        this.options = i;
        this.isEnd = !1;
        this.iterator = null;
        this.total = 0;
        this.defaultPaginationLimit = 10;
    }
    validateConnection() {
        if (!this.transport || !this.store) throw Error("Use usePaginatedParticipants or hmsActions.getPeerListIterator after preview or join has happened");
    }
    hasNext() {
        return !this.isEnd;
    }
    getTotal() {
        return this.total;
    }
    findPeers() {
        return c(this, null, function*() {
            var t;
            this.validateConnection();
            let e = yield this.transport.signal.findPeers(M(m({}, this.options || {}), {
                limit: ((t = this.options) == null ? void 0 : t.limit) || this.defaultPaginationLimit
            }));
            return this.updateState(e), this.processPeers(e.peers);
        });
    }
    next() {
        return c(this, null, function*() {
            var t;
            this.validateConnection();
            let e;
            return !this.iterator && !this.isEnd ? yield this.findPeers() : this.iterator ? (e = yield this.transport.signal.peerIterNext({
                iterator: this.iterator,
                limit: ((t = this.options) == null ? void 0 : t.limit) || this.defaultPaginationLimit
            }), this.updateState(e), this.processPeers(e.peers)) : [];
        });
    }
    processPeers(e) {
        let t = [];
        return e.forEach((i)=>{
            let r = ye(i, this.store);
            t.push(r);
        }), t;
    }
    updateState(e) {
        this.isEnd = e.eof, this.total = e.total, e.iterator && (this.iterator = e.iterator);
    }
};
var nt = class {
    constructor(e){
        this.TAG = "[AudioContextManager]";
        this.audioContext = new AudioContext, this.source = this.audioContext.createMediaElementSource(e), this.source.connect(this.audioContext.destination);
    }
    resumeContext() {
        return c(this, null, function*() {
            this.audioContext.state === "suspended" && (yield this.audioContext.resume(), l.d(this.TAG, "AudioContext is resumed"));
        });
    }
    getAudioTrack() {
        return this.destinationNode && this.source.disconnect(this.destinationNode), this.destinationNode = this.audioContext.createMediaStreamDestination(), this.source.connect(this.destinationNode), this.destinationNode.stream.getAudioTracks()[0];
    }
    cleanup() {
        this.audioContext.state !== "closed" && this.audioContext.close().catch((e)=>{
            l.d(this.TAG, "AudioContext close error", e.message);
        });
    }
};
var Ue = class extends (0, _eventemitter2.EventEmitter2) {
    on(e, t) {
        return super.on(e, t);
    }
    off(e, t) {
        return super.off(e, t);
    }
    emit(e, t) {
        return super.emit(e, t);
    }
    listeners(e) {
        return super.listeners(e);
    }
};
var Ei = class extends Ue {
    constructor(){
        super(...arguments);
        this.audioElement = null;
        this.TAG = "[PlaylistAudioManager]";
        this.seeked = !1;
    }
    play(t) {
        return c(this, null, function*() {
            return this.audioElement = this.getAudioElement(), new Promise((i, r)=>{
                this.audioElement = this.getAudioElement(), this.audioElement.src = t, this.seeked = !1, this.audioElement.onerror = ()=>{
                    let s = `Error loading ${t}`;
                    l.e(this.TAG, s), this.stop(), r(s);
                }, this.audioElement.oncanplaythrough = ()=>c(this, null, function*() {
                        try {
                            if (!this.audioElement) return;
                            if (this.audioContextManager.resumeContext(), this.track) this.seeked ? this.seeked = !1 : (yield this.audioElement.play(), i([
                                this.track
                            ]));
                            else {
                                yield this.audioElement.play();
                                let s = this.audioContextManager.getAudioTrack();
                                this.track = s, i([
                                    s
                                ]);
                            }
                        } catch (s) {
                            l.e(this.TAG, "Error playing audio", t, s.message), r(s);
                        }
                    }), this.audioElement.onseeked = ()=>{
                    this.seeked = !0;
                };
            });
        });
    }
    getTracks() {
        return this.track ? [
            this.track.id
        ] : [];
    }
    getElement() {
        return this.audioElement || (this.audioElement = this.getAudioElement()), this.audioElement;
    }
    stop() {
        var t, i, r;
        (t = this.audioElement) == null || t.pause(), (i = this.audioElement) == null || i.removeAttribute("src"), this.audioElement = null, (r = this.audioContextManager) == null || r.cleanup(), this.track = void 0;
    }
    getAudioElement() {
        if (this.audioElement) return this.audioElement;
        let t = document.createElement("audio");
        return t.crossOrigin = "anonymous", t.addEventListener("timeupdate", (i)=>this.emit("progress", i)), t.addEventListener("ended", ()=>{
            this.emit("ended", null);
        }), this.audioContextManager = new nt(t), t;
    }
};
var Pi = class extends Ue {
    constructor(){
        super(...arguments);
        this.TAG = "[PlaylistVideoManager]";
        this.videoElement = null;
        this.canvasContext = null;
        this.tracks = [];
        this.DEFAUL_FPS = 24;
        this.seeked = !1;
        this.drawImage = ()=>{
            var t, i, r;
            this.videoElement && !this.videoElement.paused && !this.videoElement.ended && ((r = this.canvasContext) == null || r.drawImage(this.videoElement, 0, 0, (t = this.canvas) == null ? void 0 : t.width, (i = this.canvas) == null ? void 0 : i.height), this.timer = setTimeout(()=>{
                this.drawImage();
            }, 1e3 / this.DEFAUL_FPS));
        };
    }
    play(t) {
        return this.videoElement = this.getVideoElement(), this.createCanvas(), new Promise((i, r)=>{
            this.videoElement = this.getVideoElement(), this.videoElement.src = t, this.seeked = !1, this.videoElement.onerror = ()=>{
                let s = `Error loading ${t}`;
                l.e(this.TAG, s), this.stop(), r(s);
            }, this.videoElement.oncanplaythrough = ()=>c(this, null, function*() {
                    var s, o, n;
                    try {
                        if (!this.videoElement) return;
                        if (this.canvas.width = this.videoElement.videoWidth, this.canvas.height = this.videoElement.videoHeight, this.tracks.length === 0) {
                            this.clearCanvasAndTracks();
                            let d = this.canvas.captureStream();
                            if (!d) {
                                l.e(this.TAG, "Browser does not support captureStream");
                                return;
                            }
                            this.videoElement.onplay = this.drawImage, yield this.audioContextManager.resumeContext(), yield this.videoElement.play();
                            let u = this.audioContextManager.getAudioTrack();
                            d.addTrack(u), d.getTracks().forEach((p)=>{
                                this.tracks.push(p);
                            }), i(this.tracks);
                        } else this.seeked ? (this.seeked = !1, (n = this.canvasContext) == null || n.drawImage(this.videoElement, 0, 0, (s = this.canvas) == null ? void 0 : s.width, (o = this.canvas) == null ? void 0 : o.height)) : (yield this.videoElement.play(), i(this.tracks));
                    } catch (d) {
                        l.e(this.TAG, "Error playing video", t, d.message), r(d);
                    }
                }), this.videoElement.onseeked = ()=>{
                this.seeked = !0;
            };
        });
    }
    getTracks() {
        return this.tracks.map((t)=>t.id);
    }
    getElement() {
        return this.videoElement || (this.videoElement = this.getVideoElement()), this.videoElement;
    }
    stop() {
        var t, i, r;
        (t = this.videoElement) == null || t.pause(), (i = this.videoElement) == null || i.removeAttribute("src"), this.videoElement = null, (r = this.audioContextManager) == null || r.cleanup(), this.clearCanvasAndTracks();
    }
    clearCanvasAndTracks() {
        var t;
        this.tracks = [], (t = this.canvasContext) == null || t.clearRect(0, 0, this.canvas.width, this.canvas.height), clearTimeout(this.timer);
    }
    getVideoElement() {
        if (this.videoElement) return this.videoElement;
        let t = document.createElement("video");
        return t.crossOrigin = "anonymous", t.addEventListener("timeupdate", (i)=>this.emit("progress", i)), t.addEventListener("ended", ()=>{
            this.emit("ended", null);
        }), this.audioContextManager = new nt(t), t;
    }
    createCanvas() {
        this.canvas || (this.canvas = document.createElement("canvas"), this.canvasContext = this.canvas.getContext("2d"));
    }
};
var bi = {
    audio: {
        list: [],
        currentIndex: -1,
        isAutoplayOn: !0
    },
    video: {
        list: [],
        currentIndex: -1,
        isAutoplayOn: !0
    }
}, Lt = class extends Ue {
    constructor(t, i){
        super();
        this.sdk = t;
        this.eventBus = i;
        this.state = {
            audio: m({}, bi.audio),
            video: m({}, bi.video)
        };
        this.TAG = "[PlaylistManager]";
        this.handlePausePlaylist = (r)=>c(this, [
                r
            ], function*({ enabled: t, track: i }) {
                var o;
                if (t) return;
                let s;
                i.source === "audioplaylist" && (s = "audio"), i.source === "videoplaylist" && (s = "video"), s && ((o = this.getElement(s)) == null || o.pause());
            });
        this.addTrack = (t, i)=>c(this, null, function*() {
                yield this.sdk.addTrack(t, i), l.d(this.TAG, "Playlist track added", ui(t));
            });
        this.removeTrack = (t)=>c(this, null, function*() {
                yield this.sdk.removeTrack(t, !0), l.d(this.TAG, "Playlist track removed", t);
            });
        this.audioManager = new Ei, this.videoManager = new Pi, this.addListeners();
    }
    getList(t = "audio") {
        return this.state[t].list;
    }
    setList(t) {
        if (!t || t.length === 0) {
            l.w(this.TAG, "Please pass in a list of HMSPlaylistItem's");
            return;
        }
        t.forEach((i)=>{
            this.state[i.type].list.find((r)=>r.id === i.id) || this.state[i.type].list.push(i);
        });
    }
    clearList(t) {
        return c(this, null, function*() {
            this.isPlaying(t) && (yield this.stop(t)), this.state[t].list = [];
        });
    }
    removeItem(t, i) {
        return c(this, null, function*() {
            let { list: r, currentIndex: s } = this.state[i], o = r.findIndex((n)=>t === n.id);
            return o > -1 ? (s === o && this.isPlaying(i) && (yield this.stop(i)), r.splice(o, 1), !0) : !1;
        });
    }
    seek(t, i = "audio") {
        let { currentIndex: r } = this.state[i];
        if (r === -1) throw S.PlaylistErrors.NoEntryToPlay("PLAYLIST", "No item is currently playing");
        let s = this.getElement(i);
        if (s) {
            let o = Math.max(s.currentTime + t, 0);
            s.currentTime = Math.min(o, s.duration);
        }
    }
    seekTo(t, i = "audio") {
        let { currentIndex: r } = this.state[i];
        if (r === -1) throw S.PlaylistErrors.NoEntryToPlay("PLAYLIST", "No item is currently playing");
        if (t < 0) throw Error("value cannot be negative");
        let s = this.getElement(i);
        s && (s.currentTime = Math.min(t, s.duration));
    }
    setVolume(t, i = "audio") {
        if (t < 0 || t > 100) throw Error("Please pass a valid number between 0-100");
        let r = this.getElement(i);
        r && (r.volume = t * .01);
    }
    getVolume(t = "audio") {
        let i = this.getElement(t);
        return i ? Math.floor(i.volume * 100) : 0;
    }
    getCurrentTime(t = "audio") {
        let i = this.getElement(t);
        return (i == null ? void 0 : i.currentTime) || 0;
    }
    getCurrentIndex(t = "audio") {
        return this.state[t].currentIndex;
    }
    getCurrentProgress(t = "audio") {
        var n;
        let { list: i, currentIndex: r } = this.state[t], s = (n = i[r]) == null ? void 0 : n.url, o = this.getElement(t);
        return !s || !o ? 0 : Math.floor(100 * (o.currentTime / o.duration));
    }
    getCurrentSelection(t = "audio") {
        let { list: i, currentIndex: r } = this.state[t];
        if (r !== -1) return i[r];
    }
    isPlaying(t = "audio") {
        let i = this.getElement(t);
        return !!i && !i.paused;
    }
    setIsAutoplayOn(t = "audio", i) {
        this.state[t].isAutoplayOn = i;
    }
    getPlaybackRate(t = "audio") {
        let i = this.getElement(t);
        return i ? i.playbackRate : 1;
    }
    setPlaybackRate(t = "audio", i) {
        if (i < .25 || i > 2) throw Error("Please pass a value between 0.25 and 2.0");
        let r = this.getElement(t);
        r && (r.playbackRate = i);
    }
    setEnabled(s, o) {
        return c(this, arguments, function*(t, { id: i, type: r = "audio" }) {
            let d = this.state[r].list.findIndex((p)=>p.id === i);
            if (!i || d === -1) {
                l.w(this.TAG, "Pass a valid id");
                return;
            }
            let u = this.state[r].list[d].url;
            t ? yield this.play(u, r) : yield this.pause(u, r), this.state[r].currentIndex = d, this.setDuration(r);
        });
    }
    playNext() {
        return c(this, arguments, function*(t = "audio") {
            let { list: i, currentIndex: r } = this.state[t];
            if (r >= i.length - 1) throw S.PlaylistErrors.NoEntryToPlay("PLAYLIST", "Reached end of playlist");
            yield this.play(i[r + 1].url, t), this.state[t].currentIndex = r + 1, this.setDuration(t);
        });
    }
    playPrevious() {
        return c(this, arguments, function*(t = "audio") {
            let { list: i, currentIndex: r } = this.state[t];
            if (r <= 0) throw S.PlaylistErrors.NoEntryToPlay("PLAYLIST", "Reached start of playlist");
            yield this.play(i[r - 1].url, t), this.state[t].currentIndex = r - 1, this.setDuration(t);
        });
    }
    stop() {
        return c(this, arguments, function*(t = "audio") {
            var r;
            let i = t === "audio" ? this.audioManager : this.videoManager;
            (r = i.getElement()) == null || r.pause(), yield this.removeTracks(t), i.stop(), this.state[t].currentIndex = -1;
        });
    }
    cleanup() {
        this.state = {
            audio: m({}, bi.audio),
            video: m({}, bi.video)
        }, this.eventBus.localAudioEnabled.unsubscribe(this.handlePausePlaylist), this.eventBus.localVideoEnabled.unsubscribe(this.handlePausePlaylist), this.audioManager.stop(), this.videoManager.stop();
    }
    onProgress(t) {
        this.videoManager.on("progress", ()=>{
            try {
                t({
                    type: "video",
                    progress: this.getCurrentProgress("video")
                });
            } catch (i) {
                l.e(this.TAG, "Error in onProgress callback");
            }
        }), this.audioManager.on("progress", ()=>{
            try {
                t({
                    type: "audio",
                    progress: this.getCurrentProgress("audio")
                });
            } catch (i) {
                l.e(this.TAG, "Error in onProgress callback");
            }
        });
    }
    onNewTrackStart(t) {
        this.on("newTrackStart", t);
    }
    onPlaylistEnded(t) {
        this.on("playlistEnded", t);
    }
    onCurrentTrackEnded(t) {
        this.on("currentTrackEnded", t);
    }
    getElement(t = "audio") {
        return t === "audio" ? this.audioManager.getElement() : this.videoManager.getElement();
    }
    removeTracks() {
        return c(this, arguments, function*(t = "audio") {
            let r = (t === "audio" ? this.audioManager : this.videoManager).getTracks();
            for (let s of r)yield this.removeTrack(s);
        });
    }
    play(r) {
        return c(this, arguments, function*(t, i = "audio") {
            let s = i === "audio" ? this.audioManager : this.videoManager, o = s.getElement();
            if (this.isItemCurrentlyPlaying(t, i)) {
                l.w(this.TAG, `The ${i} is currently playing`);
                return;
            }
            if (o != null && o.src.includes(t)) yield o.play();
            else {
                o == null || o.pause();
                let n = yield s.play(t);
                for (let d of n)yield this.addTrack(d, i === "audio" ? "audioplaylist" : "videoplaylist");
            }
        });
    }
    isItemCurrentlyPlaying(t, i) {
        let r = this.getElement(i);
        return !!(r && !r.paused && r.src.includes(t));
    }
    setDuration(t = "audio") {
        let i = this.getElement(t), { list: r, currentIndex: s } = this.state[t];
        r[s] && (r[s].duration = (i == null ? void 0 : i.duration) || 0), this.emit("newTrackStart", r[s]);
    }
    pause(r) {
        return c(this, arguments, function*(t, i = "audio") {
            let s = this.getElement(i);
            s && !s.paused && s.src.includes(t) ? (s.pause(), l.d(this.TAG, "paused url", t)) : l.w(this.TAG, "The passed in url is not currently playing");
        });
    }
    addListeners() {
        this.audioManager.on("ended", ()=>this.handleEnded("audio")), this.videoManager.on("ended", ()=>this.handleEnded("video")), this.eventBus.localAudioEnabled.subscribe(this.handlePausePlaylist), this.eventBus.localVideoEnabled.subscribe(this.handlePausePlaylist);
    }
    handleEnded() {
        return c(this, arguments, function*(t = "audio") {
            let { list: i, currentIndex: r, isAutoplayOn: s } = this.state[t];
            r === i.length - 1 ? (yield this.stop(t), this.emit("playlistEnded", t)) : s ? this.playNext(t) : yield this.pause(i[r].url, t), this.emit("currentTrackEnded", i[r]);
        });
    }
};
var F = (a)=>a.room, Go = (a)=>a.errors, Tm = (0, _reselect.createSelector)(Go, (a)=>a.length === 0 ? null : a.at(-1)), fm = (0, _reselect.createSelector)(F, (a)=>a.id), z = (a)=>a.peers, Ai = (a)=>a.messages.byID, la = (a)=>a.messages.allIDs, N = (a)=>a.tracks, ua = (a)=>a.settings, zr = (a)=>a.appData, vm = (a)=>a.devices, Wo = (a)=>a.speakers, Mm = (a)=>a.connectionQualities, Be = (0, _reselect.createSelector)([
    F
], (a)=>a && a.isConnected), ym = (0, _reselect.createSelector)([
    Be,
    F
], (a, e)=>a ? e.peerCount !== void 0 ? e.peerCount || 1 : e.peers.length : Math.max(e.peerCount !== void 0 ? e.peerCount : e.peers.length - 1, 0)), $o = (a)=>a.hideLocalPeer, ke = (0, _reselect.createSelector)([
    F,
    z,
    $o
], (a, e, t)=>t ? a.peers.filter((i)=>a.localPeer !== i).map((i)=>e[i]) : a.peers.map((i)=>e[i])), Ko = (0, _reselect.createSelector)(N, (a)=>Object.values(a)), re = (0, _reselect.createSelector)(F, z, (a, e)=>e[a.localPeer]), Ie = (0, _reselect.createSelector)(F, (a)=>a.localPeer), km = (0, _reselect.createSelector)(re, (a)=>a == null ? void 0 : a.name), Em = (0, _reselect.createSelector)(re, (a)=>a == null ? void 0 : a.roleName), le = (0, _reselect.createSelector)(re, (a)=>a == null ? void 0 : a.audioTrack), Z = (0, _reselect.createSelector)(re, (a)=>a == null ? void 0 : a.videoTrack), qo = (0, _reselect.createSelector)(re, (a)=>a == null ? void 0 : a.auxiliaryTracks), pa = (0, _reselect.createSelector)([
    le,
    Z,
    qo
], (a, e, t)=>{
    let i = t ? [
        ...t
    ] : [];
    return a && i.unshift(a), e && i.unshift(e), i;
}), Pm = (0, _reselect.createSelector)(ke, (a)=>a.filter((e)=>!e.isLocal)), bm = (0, _reselect.createSelector)(z, Wo, (a, e)=>{
    let t = Object.entries(e).sort((i, r)=>{
        var n, d;
        let s = ((n = i[1]) == null ? void 0 : n.audioLevel) || 0;
        return (((d = r[1]) == null ? void 0 : d.audioLevel) || 0) > s ? 1 : -1;
    });
    if (t.length > 0 && t[0][1].audioLevel && t[0][1].audioLevel > 0) {
        let i = t[0][1].peerID;
        if (i in a) return a[i];
    }
    return null;
}), Am = (a)=>{
    let e = re(a);
    return ze(a, e == null ? void 0 : e.audioTrack);
}, Yr = (a)=>{
    let e = re(a);
    return ze(a, e == null ? void 0 : e.videoTrack);
}, ha = (a)=>{
    let e = re(a);
    return ys(a, e == null ? void 0 : e.videoTrack);
}, Xr = (0, _reselect.createSelector)(re, N, (a, e)=>{
    let { video: t, audio: i } = Fe(e, a);
    return !!(t || i);
}), jo = (0, _reselect.createSelector)(z, N, (a, e)=>{
    let t;
    for(let i in a){
        let r = a[i], { video: s, audio: o } = Fe(e, r);
        if (s) return r;
        o && !t && (t = r);
    }
    return t;
}), Im = (0, _reselect.createSelector)(jo, (a)=>!!a), Rm = (0, _reselect.createSelector)(z, N, (a, e)=>{
    for(let t in a){
        let i = a[t], { audio: r, video: s } = Fe(e, i);
        if (!s && r) return i;
    }
}), Hm = (0, _reselect.createSelector)(z, N, (a, e)=>{
    let t = [], i = [];
    for(let r in a){
        let s = a[r], { video: o, audio: n } = Fe(e, s);
        o ? t.push(s) : n && i.push(s);
    }
    return t.concat(i);
}), Cm = (0, _reselect.createSelector)(z, N, (a, e)=>{
    for(let t in e){
        let i = e[t];
        if (ft(i) && Tt(i) && i.peerId) return a[i.peerId];
    }
}), Lm = (0, _reselect.createSelector)(z, N, (a, e)=>{
    for(let t in e){
        let i = e[t];
        if (ci(i) && i.peerId) return a[i.peerId];
    }
}), Dm = (0, _reselect.createSelector)(Ko, (a)=>a.filter(Ms)), wm = (0, _reselect.createSelector)(la, (a)=>a.length), _m = (0, _reselect.createSelector)(Ai, (a)=>Object.values(a).filter((e)=>!e.read).length), Dt = (0, _reselect.createSelector)(la, Ai, (a, e)=>{
    let t = [];
    return a.forEach((i)=>{
        t.push(e[i]);
    }), t;
}), Jo = (0, _reselect.createSelector)(Dt, (a)=>a.filter((e)=>{
        var t;
        return !e.recipientPeer && !(e.recipientRoles && ((t = e.recipientRoles) == null ? void 0 : t.length) > 0);
    })), Nm = (0, _reselect.createSelector)(Jo, (a)=>a.filter((e)=>!e.read).length), se = (0, _reselect.createSelector)([
    F
], (a)=>a && a.roomState), ma = (0, _reselect.createSelector)(se, (a)=>a === "Preview"), Om = (0, _reselect.createSelector)(F, (a)=>a.roomState !== "Disconnected"), xm = (0, _reselect.createSelector)(F, (a)=>!a.transcriptions || a.transcriptions.length <= 0 ? !1 : a.transcriptions.some((e)=>e.mode === "caption" && e.state === "started")), Ee = (a)=>a.roles, Um = (0, _reselect.createSelector)([
    Ee
], (a)=>Object.keys(a)), ct = (0, _reselect.createSelector)([
    re,
    Ee
], (a, e)=>a != null && a.roleName ? e[a.roleName] : null), Qo = (a)=>{
    var e;
    return (e = a.preview) == null ? void 0 : e.asRole;
}, Sa = (0, _reselect.createSelector)([
    Qo,
    Ee
], (a, e)=>a ? e[a] : null), Bm = (0, _reselect.createSelector)([
    ct
], (a)=>{
    var e;
    return (e = a == null ? void 0 : a.subscribeParams) != null && e.subscribeToRoles ? a.subscribeParams.subscribeToRoles.length > 0 : !1;
}), ga = (0, _reselect.createSelector)(ct, (a)=>a == null ? void 0 : a.permissions), Vm = (0, _reselect.createSelector)(F, (a)=>a.recording), Fm = (0, _reselect.createSelector)(F, (a)=>a.rtmp), Gm = (0, _reselect.createSelector)(F, (a)=>a.hls), Wm = (0, _reselect.createSelector)(F, (a)=>a.transcriptions), $m = (0, _reselect.createSelector)(F, (a)=>a.sessionId), Km = (0, _reselect.createSelector)(F, (a)=>a.startedAt), qm = (0, _reselect.createSelector)(F, (a)=>!!a.isLargeRoom), jm = (0, _reselect.createSelector)(F, (a)=>!!a.isEffectsEnabled), Jm = (0, _reselect.createSelector)(F, (a)=>!!a.isVBEnabled), Qm = (0, _reselect.createSelector)(F, (a)=>a.effectsKey), zm = (a)=>a.templateAppData, Ym = (a)=>a.sessionMetadata, Ta = (a)=>a.polls, Xm = (a)=>Object.values(a.polls), Zm = (0, _reselect.createSelector)(ke, (a)=>a.filter((e)=>e.isHandRaised)), zo = (a)=>a.whiteboards, eS = (0, _reselect.createSelector)(zo, (a)=>Object.values(a)[0]);
var va = (a = "audio")=>(e)=>e.playlist[a].list, Zr = (a = "audio")=>(e)=>e.playlist[a].selection, Ma = (a = "audio")=>(e)=>e.playlist[a].progress, ya = (a = "audio")=>(e)=>e.playlist[a].currentTime, ka = (a = "audio")=>(e)=>e.playlist[a].playbackRate, Ea = (a = "audio")=>(e)=>e.playlist[a].volume, Pa = (a = "audio")=>(0, _reselect.createSelector)(va(a), (e)=>Object.values(e)), ba = (a = "audio")=>(0, _reselect.createSelector)(va(a), Zr(a), (e, t)=>{
        if (t.id) return e[t.id];
    }), Aa = {
    selection: Zr("audio"),
    progress: Ma("audio"),
    currentTime: ya("audio"),
    playbackRate: ka("audio"),
    volume: Ea("audio"),
    list: Pa("audio"),
    selectedItem: ba("audio")
}, Ia = {
    selection: Zr("video"),
    progress: Ma("video"),
    currentTime: ya("video"),
    playbackRate: ka("video"),
    volume: Ea("video"),
    list: Pa("video"),
    selectedItem: ba("video")
};
function H(a) {
    return (e)=>(t)=>a(t, e);
}
var wt = "HMS-Store:", b = class {
    static v(e, ...t) {
        this.log(0, e, ...t);
    }
    static d(...e) {
        this.log(1, ...e);
    }
    static i(...e) {
        this.log(2, ...e);
    }
    static w(...e) {
        this.log(3, ...e);
    }
    static e(...e) {
        this.log(6, ...e);
    }
    static time(e) {
        this.log(4, "[HMSPerformanceTiming]", e);
    }
    static timeEnd(e) {
        this.log(5, "[HMSPerformanceTiming]", e, e);
    }
    static cleanup() {
        performance.clearMarks(), performance.clearMeasures();
    }
    static log(e, ...t) {
        if (!(this.level.valueOf() > e.valueOf())) switch(e){
            case 0:
                console.log(wt, ...t);
                break;
            case 1:
                console.debug(wt, ...t);
                break;
            case 2:
                console.info(wt, ...t);
                break;
            case 3:
                console.warn(wt, ...t);
                break;
            case 6:
                console.error(wt, ...t);
                break;
            case 4:
                performance.mark(t[1]);
                break;
            case 5:
                {
                    let i = t[0], r = t[1];
                    try {
                        let s = performance.measure(r, r);
                        this.log(1, i, r, s == null ? void 0 : s.duration), performance.clearMarks(r), performance.clearMeasures(r);
                    } catch (s) {
                        this.log(1, i, r, s);
                    }
                    break;
                }
        }
    }
};
b.level = 0;
var es = (a, e)=>e, _t = (a, e)=>e, Ra = (a, e)=>e, Yo = (a, e)=>e, Xo = (a, e)=>e, Y = (0, _reselect.createSelector)([
    z,
    es
], (a, e)=>e ? a[e] : null), ts = (0, _reselect.createSelector)([
    N,
    _t
], (a, e)=>e ? a[e] : null), Zo = (0, _reselect.createSelector)([
    N,
    _t
], (a, e)=>{
    if (!e) return null;
    let t = a[e];
    return (t == null ? void 0 : t.type) === "video" ? t : null;
}), en = (0, _reselect.createSelector)([
    N,
    _t
], (a, e)=>{
    if (!e) return null;
    let t = a[e];
    return (t == null ? void 0 : t.type) === "audio" ? t : null;
}), tn = (0, _reselect.createSelector)([
    N,
    _t
], (a, e)=>{
    if (!e) return null;
    let t = a[e];
    return (t == null ? void 0 : t.type) === "audio" && (t == null ? void 0 : t.source) === "screen" ? t : null;
}), rn = (0, _reselect.createSelector)([
    N,
    _t
], (a, e)=>{
    if (!e) return null;
    let t = a[e];
    return (t == null ? void 0 : t.type) === "video" && (t == null ? void 0 : t.source) === "screen" ? t : null;
}), sn = (0, _reselect.createSelector)([
    Ta,
    Xo
], (a, e)=>e ? a[e] : null), ee = H(Y), uS = H((0, _reselect.createSelector)([
    zr,
    Yo
], (a, e)=>{
    if (a) return e ? a[e] : a;
}));
function pS(a) {
    return (e)=>{
        if (e.sessionStore) return a ? e.sessionStore[a] : e.sessionStore;
    };
}
var hS = (...a)=>(0, _reselect.createSelector)([
        zr
    ], (e)=>{
        if (e) {
            if (a && a.length > 0) {
                let t = e;
                for (let i of a){
                    if (!i) return t;
                    t = t == null ? void 0 : t[i];
                }
                return t;
            }
            return e;
        }
    }), mS = H((0, _reselect.createSelector)(Y, (a)=>a == null ? void 0 : a.name)), SS = H((0, _reselect.createSelector)(Y, (a)=>a == null ? void 0 : a.type)), Ii = H(ts), Ha = H(Zo), gS = H(en), TS = H(tn), fS = H(rn), an = H((a, e)=>{
    let t = Y(a, e);
    if (t && t.videoTrack && t.videoTrack !== "") return a.tracks[t.videoTrack];
}), on = H((a, e)=>{
    let t = Y(a, e);
    if (t && t.audioTrack && t.audioTrack !== "") return a.tracks[t.audioTrack];
}), vS = an, MS = H((a, e)=>{
    let t = Y(a, e);
    return (t == null ? void 0 : t.auxiliaryTracks.map((i)=>a.tracks[i])) || [];
}), Ca = (a, e)=>e ? a.speakers[e] : null, yS = H((0, _reselect.createSelector)(Ca, (a)=>(a == null ? void 0 : a.audioLevel) || 0)), nn = (a, e)=>{
    let t = on(e)(a);
    return Ca(a, t == null ? void 0 : t.id);
}, kS = H((0, _reselect.createSelector)(nn, (a)=>(a == null ? void 0 : a.audioLevel) || 0)), ES = H((a, e)=>{
    if (e) return a.connectionQualities[e];
}), PS = H((a, e)=>{
    let t = Y(a, e);
    if (t) {
        let i = t == null ? void 0 : t.auxiliaryTracks.find((r)=>gt(a.tracks[r]));
        return i ? a.tracks[i] : void 0;
    }
}), bS = H((0, _reselect.createSelector)(N, Y, (a, e)=>{
    let t = e == null ? void 0 : e.auxiliaryTracks.find((i)=>{
        let r = a[i];
        return ft(r) && Tt(r);
    });
    return t ? a[t] : void 0;
})), AS = H((0, _reselect.createSelector)(N, Y, (a, e)=>{
    let t = e == null ? void 0 : e.auxiliaryTracks.find((i)=>{
        let r = a[i];
        return ft(r) && gt(r);
    });
    return t ? a[t] : void 0;
})), IS = H((0, _reselect.createSelector)(N, Y, (a, e)=>{
    let t = e == null ? void 0 : e.auxiliaryTracks.find((i)=>{
        let r = a[i];
        return ci(r) && gt(r);
    });
    return t ? a[t] : void 0;
})), La = H((0, _reselect.createSelector)(N, Y, (a, e)=>Fe(a, e))), RS = (a)=>(0, _reselect.createSelector)(La(a), (e)=>e.video), Da = (a)=>(0, _reselect.createSelector)(La(a), (e)=>e.audio), HS = H((a, e)=>{
    let t = Y(a, e);
    return ze(a, t == null ? void 0 : t.audioTrack);
}), CS = H((a, e)=>{
    let t = Y(a, e);
    return ze(a, t == null ? void 0 : t.videoTrack);
}), wa = H((a, e)=>{
    if (e && a.tracks[e]) return a.tracks[e].volume === 0;
}), LS = H((a, e)=>{
    let t = Y(a, e);
    return wa(t == null ? void 0 : t.audioTrack)(a);
}), DS = H((a, e)=>{
    let t = Da(e)(a);
    return wa(t == null ? void 0 : t.id)(a);
}), _a = H((a, e)=>{
    let t = ts(a, e);
    if (t) {
        if (t.type !== "audio") {
            b.w("Please pass audio track here");
            return;
        }
        return t.volume;
    }
}), wS = H((a, e)=>{
    let t = Y(a, e);
    return _a(t == null ? void 0 : t.audioTrack)(a);
}), _S = H((a, e)=>{
    let t = Da(e)(a);
    return _a(t == null ? void 0 : t.id)(a);
}), NS = H((a, e)=>{
    let t = ts(a, e);
    if (t) {
        if (t.type !== "video") {
            b.w("Please pass video track here");
            return;
        }
        return t.layer;
    }
}), Na = (0, _reselect.createSelector)([
    Dt,
    Ie,
    es
], (a, e, t)=>{
    if (t) return a.filter((i)=>{
        var r;
        return !i.recipientPeer && !((r = i.recipientRoles) != null && r.length) || i.sender && ![
            e,
            t
        ].includes(i.sender) ? !1 : [
            e,
            t
        ].includes(i.recipientPeer);
    });
}), Oa = (0, _reselect.createSelector)([
    Dt,
    Ra
], (a, e)=>{
    if (e) return a.filter((t)=>{
        var i, r;
        return (i = t.recipientRoles) != null && i.length ? (r = t.recipientRoles) == null ? void 0 : r.includes(e) : !1;
    });
}), cn = (0, _reselect.createSelector)(Dt, (a)=>a.filter((e)=>{
        var t;
        return !e.recipientPeer && !((t = e.recipientRoles) != null && t.length);
    })), dn = (0, _reselect.createSelector)([
    Oa,
    Ra
], (a)=>a ? a.filter((e)=>!e.read).length : 0), ln = (0, _reselect.createSelector)([
    Na,
    es
], (a)=>a ? a.filter((e)=>!e.read).length : 0), OS = (0, _reselect.createSelector)(cn, (a)=>a.filter((e)=>!e.read).length), xS = H(Na), US = H(Oa), BS = H(dn), VS = H(ln), FS = (a)=>(0, _reselect.createSelector)([
        ke
    ], (e)=>e.filter((t)=>t.roleName === a)), GS = (a)=>(0, _reselect.createSelector)([
        ke
    ], (e)=>e.filter((t)=>t.roleName ? a.includes(t.roleName) : !1)), WS = (a)=>(0, _reselect.createSelector)(ee(a), (e)=>{
        try {
            return e != null && e.metadata && e.metadata !== "" ? JSON.parse(e.metadata) : {};
        } catch (t) {
            return console.error("cannot parse peer metadata", t), {};
        }
    }), $S = (a)=>(0, _reselect.createSelector)(ee(a), (e)=>!!(e != null && e.isHandRaised)), KS = (a)=>(0, _reselect.createSelector)(ee(a), (e)=>e == null ? void 0 : e.name), xa = H(sn), qS = (a)=>(0, _reselect.createSelector)(Ai, (e)=>e[a]), jS = (a)=>(0, _reselect.createSelector)(ct, (e)=>e != null && e.permissions.transcriptions ? e.permissions.transcriptions[a].length > 0 : !1);
var XS = (0, _reselect.createSelector)([
    z,
    N
], (a, e)=>Object.values(a).map((i)=>{
        var r;
        return {
            peer: i,
            isAudioEnabled: i.audioTrack ? (r = e[i.audioTrack]) == null ? void 0 : r.enabled : !1
        };
    })), un = (a)=>a.roleChangeRequests[0] || null, ZS = (0, _reselect.createSelector)([
    un,
    z,
    Ee
], (a, e, t)=>a ? {
        requestedBy: a.requestedBy ? e[a.requestedBy] : void 0,
        role: t[a.roleName],
        token: a.token
    } : null), eg = (0, _reselect.createSelector)([
    ct
], (a)=>vt(a)), tg = (0, _reselect.createSelector)([
    Sa
], (a)=>vt(a));
var pn = (a)=>(0, _reselect.createSelector)([
        Ee
    ], (e)=>e[a]), og = (a)=>(0, _reselect.createSelector)(pn(a), (e)=>vt(e)), hn = (0, _reselect.createSelector)([
    Z,
    N
], (a, e)=>{
    let t = null;
    return a && (t = e[a]), (t == null ? void 0 : t.plugins) || [];
}), mn = (0, _reselect.createSelector)([
    le,
    N
], (a, e)=>{
    let t = null;
    return a && (t = e[a]), (t == null ? void 0 : t.plugins) || [];
}), ng = (a)=>(0, _reselect.createSelector)([
        hn
    ], (e)=>e.includes(a)), cg = (a)=>(0, _reselect.createSelector)([
        mn
    ], (e)=>e.includes(a)), dg = (a)=>(0, _reselect.createSelector)(ke, (e)=>e.find(a)), lg = (a)=>(0, _reselect.createSelector)(ke, (e)=>e.filter(a)), ug = (a)=>(0, _reselect.createSelector)(F, (e)=>e.joinedAt && Date.now() - e.joinedAt.getTime() <= a);
var Hi = {
    0: "PEER_JOINED",
    1: "PEER_LEFT",
    8: "ROLE_UPDATED",
    10: "NAME_UPDATED",
    11: "METADATA_UPDATED",
    12: "HAND_RAISE_CHANGED"
}, Nt = {
    0: "TRACK_ADDED",
    1: "TRACK_REMOVED",
    2: "TRACK_MUTED",
    3: "TRACK_UNMUTED",
    5: "TRACK_DEGRADED",
    6: "TRACK_RESTORED",
    4: "TRACK_DESCRIPTION_CHANGED"
}, Ci = {
    0: "POLL_CREATED",
    1: "POLL_STARTED",
    2: "POLL_STOPPED",
    4: "POLL_VOTES_UPDATED",
    3: "POLLS_LIST"
}, Ua = {
    TRANSCRIPTION_STATE_UPDATED: "TRANSCRIPTION_STATE_UPDATED"
};
var is = "hmsNotification", Li = class {
    constructor(e){
        this.id = 0;
        this.onNotification = (e, t)=>{
            let i = (r)=>{
                if (t) {
                    let s;
                    if (Array.isArray(t) ? s = t.includes(r.type) : s = t === r.type, !s) return;
                }
                e(r);
            };
            return this.eventEmitter.addListener(is, i), ()=>{
                this.eventEmitter.removeListener(is, i);
            };
        };
        this.store = e, this.eventEmitter = new (0, _eventemitter2.EventEmitter2)({
            maxListeners: Object.keys(Pr).length
        });
    }
    sendPlaylistTrackEnded(e) {
        let t = this.createNotification("PLAYLIST_TRACK_ENDED", e, "info");
        this.emitEvent(t);
    }
    sendDeviceChange(e) {
        var i;
        let t = this.createNotification("DEVICE_CHANGE_UPDATE", e, e.error ? "error" : "info", `Selected ${e.type} device - ${(i = e.selection) == null ? void 0 : i.label}`);
        this.emitEvent(t);
    }
    sendLeaveRoom(e) {
        var r;
        let t = (r = e.requestedBy) == null ? void 0 : r.name, i = this.createNotification(e.roomEnded || !t ? "ROOM_ENDED" : "REMOVED_FROM_ROOM", e, "info", `${e.roomEnded ? "Room ended" : "Removed from room"} ${t ? `by ${t}` : ""}`);
        this.emitEvent(i);
    }
    sendPeerList(e) {
        if (e.length === 0) return;
        let t = this.createNotification("PEER_LIST", e, "info");
        this.emitEvent(t);
    }
    sendPeerUpdate(e, t) {
        let i = this.store.getState(ee(t == null ? void 0 : t.id)) || t, r = Hi[e];
        if (r && i) {
            let s = this.createNotification(r, i, "info");
            this.emitEvent(s);
        }
    }
    sendTrackUpdate(e, t) {
        let i = this.store.getState(Ii(t)), r = Nt[e];
        if (r) {
            let s = this.createNotification(r, i, "info");
            this.emitEvent(s);
        }
    }
    sendMessageReceived(e) {
        let t = this.createNotification("NEW_MESSAGE", e, "info");
        this.emitEvent(t);
    }
    sendError(e) {
        let t = this.createNotification("ERROR", e, "error");
        this.emitEvent(t);
    }
    sendReconnecting(e) {
        let t = this.createNotification("RECONNECTING", e, "error");
        this.emitEvent(t);
    }
    sendReconnected() {
        let e = this.createNotification("RECONNECTED", null, "info");
        this.emitEvent(e);
    }
    sendChangeTrackStateRequest(e) {
        let t = this.createNotification("CHANGE_TRACK_STATE_REQUEST", e, "info");
        this.emitEvent(t);
    }
    sendChangeMultiTrackStateRequest(e) {
        let t = this.createNotification("CHANGE_MULTI_TRACK_STATE_REQUEST", e, "info");
        this.emitEvent(t);
    }
    sendPollUpdate(e, t) {
        let i = Ci[e], r = this.store.getState(xa(t));
        if (i) {
            let s = this.createNotification(i, r, "info");
            this.emitEvent(s);
        }
    }
    sendTranscriptionUpdate(e) {
        let t = this.createNotification(Ua.TRANSCRIPTION_STATE_UPDATED, e, "info");
        this.emitEvent(t);
    }
    emitEvent(e) {
        this.eventEmitter.emit(is, e);
    }
    createNotification(e, t, i, r = "") {
        return this.id++, {
            id: this.id,
            type: e,
            message: r,
            data: t,
            severity: i
        };
    }
};
var Di = class {
    constructor(e){
        this.queuedUpdates = {};
        this.timers = {};
        this.DEFAULT_INTERVAL_MS = 50;
        this.store = e;
    }
    setState(e, t, i = this.DEFAULT_INTERVAL_MS) {
        this.queuedUpdates[t] = this.queuedUpdates[t] || [], this.queuedUpdates[t].push(e), !this.timers[t] && (window ? this.timers[t] = window.setTimeout(()=>this.setStateBatched(t), i) : this.setStateBatched(t));
    }
    setStateBatched(e) {
        var t;
        if (((t = this.queuedUpdates[e]) == null ? void 0 : t.length) > 0) {
            let i = (r)=>{
                this.queuedUpdates[e].forEach((s)=>{
                    try {
                        s(r);
                    } catch (o) {
                        b.w("failed to update store", o);
                    }
                });
            };
            console.time(`timed-${e}`), this.store.namedSetState(i, e), console.timeEnd(`timed-${e}`);
        }
        delete this.queuedUpdates[e], window && this.timers[e] && (window.clearTimeout(this.timers[e]), delete this.timers[e]);
    }
};
function Ba(a) {
    return a instanceof ie || a instanceof O;
}
var Va = (a, e)=>{
    let t = Ot(Object.keys(a), Object.keys(e));
    for (let i of t){
        let r = a[i], s = e[i];
        je(r, s) ? (ae(r.auxiliaryTracks, s.auxiliaryTracks) && (s.auxiliaryTracks = r.auxiliaryTracks), r.groups && ae(r.groups, s.groups) && (s.groups = r.groups), Object.assign(r, s)) : as(r, s) ? delete a[i] : wi(r, s) && (a[i] = s);
    }
}, Fa = (a, e)=>{
    let t = Ot(Object.keys(a), Object.keys(e));
    for (let i of t){
        let r = a[i], s = e[i];
        je(r, s) ? (ss(r, s), Object.assign(r, s)) : as(r, s) ? delete a[i] : wi(r, s) && (a[i] = s);
    }
}, Ga = (a, e)=>{
    let t = Ot(Object.keys(a), Object.keys(e));
    for (let i of t){
        let r = a[i], s = e[i];
        je(r, s) ? (r.questions && ae(r.questions, s.questions) && (s.questions = r.questions), Object.assign(r, s)) : wi(r, s) && (a[i] = s);
    }
}, rs = (a, e)=>{
    let t = Ot(Object.keys(a), Object.keys(e));
    for (let i of t){
        let r = a[i], s = e[i];
        je(r, s) ? Object.assign(r, s) : as(r, s) ? delete a[i] : wi(r, s) && (a[i] = s);
    }
}, Wa = (a, e, t)=>{
    let i = t.reduce((s, o)=>(s[o.firstTrackId] = Object.values(e[o.getTrackIDBeingSent()] || {}).sort((n, d)=>!n.rid || !d.rid ? 0 : n.rid < d.rid ? -1 : 1), s), {}), r = Ot(Object.keys(a), Object.keys(i));
    for (let s of r){
        if (!i[s]) {
            delete a[s];
            continue;
        }
        a[s] = i[s];
    }
}, ss = (a, e)=>{
    a.plugins && ae(a.plugins, e.plugins) && (e.plugins = a.plugins), a.type === "video" && a.layerDefinitions && ae(a.layerDefinitions, e.layerDefinitions) && (e.layerDefinitions = a.layerDefinitions);
}, je = (a, e)=>a && e, as = (a, e)=>a && !e, wi = (a, e)=>!a && e, ae = (a, e)=>{
    if (a === e || a.length === 0 && (e == null ? void 0 : e.length) === 0) return !0;
    if (!a || !e || a.length !== e.length) return !1;
    for(let t = 0; t < a.length; t++)if (a[t] !== e[t]) return !1;
    return !0;
}, Ot = (a, e)=>{
    let t = new Set;
    for (let i of a)t.add(i);
    for (let i of e)t.add(i);
    return Array.from(t);
};
var _ = class a {
    static convertPeer(e) {
        var t, i, r;
        return {
            id: e.peerId,
            name: e.name,
            roleName: (t = e.role) == null ? void 0 : t.name,
            isLocal: e.isLocal,
            videoTrack: (i = e.videoTrack) == null ? void 0 : i.trackId,
            audioTrack: (r = e.audioTrack) == null ? void 0 : r.trackId,
            auxiliaryTracks: e.auxiliaryTracks.map((s)=>s.trackId),
            customerUserId: e.customerUserId,
            metadata: e.metadata,
            joinedAt: e.joinedAt,
            groups: e.groups,
            isHandRaised: e.isHandRaised,
            type: e.type
        };
    }
    static convertTrack(e, t) {
        let i = {
            id: e.trackId,
            source: e.source,
            type: e.type,
            enabled: e.enabled,
            displayEnabled: e.enabled,
            peerId: e.peerId || t
        };
        return this.enrichTrack(i, e), i;
    }
    static enrichTrack(e, t) {
        let i = t.getMediaTrackSettings();
        t instanceof ie && (e.volume = t.getVolume() || 0), a.updateDeviceID(e, t), a.enrichLocalTrack(e, t), e.type === "video" && (e.source === "screen" ? (e.displaySurface = i.displaySurface, a.enrichScreenTrack(e, t)) : e.source === "regular" && (e.facingMode = i.facingMode), e.height = i.height, e.width = i.width, a.enrichVideoTrack(e, t)), a.enrichPluginsDetails(e, t);
    }
    static enrichLocalTrack(e, t) {
        (t instanceof G || t instanceof de) && (e.isPublished = t.isPublished);
    }
    static updateDeviceID(e, t) {
        var i;
        t instanceof G || t instanceof de ? e.deviceID = t.settings.deviceId : e.deviceID = (i = t.getMediaTrackSettings()) == null ? void 0 : i.deviceId;
    }
    static enrichVideoTrack(e, t) {
        t instanceof O && (e.layer = t.getLayer(), e.preferredLayer = t.getPreferredLayer(), e.degraded = t.degraded), (t instanceof O || t instanceof G) && (ae(t.getSimulcastDefinitions(), e.layerDefinitions) || (e.layerDefinitions = t.getSimulcastDefinitions()));
    }
    static enrichScreenTrack(e, t) {
        var i, r;
        if (t instanceof G) {
            let s = (i = t.getCaptureHandle) == null ? void 0 : i.call(t);
            (s == null ? void 0 : s.handle) !== ((r = e.captureHandle) == null ? void 0 : r.handle) && (e.captureHandle = s), t.isCurrentTab && (e.displaySurface = "selfBrowser");
        }
    }
    static enrichPluginsDetails(e, t) {
        (t instanceof G || t instanceof de) && (ae(t.getPlugins(), e.plugins) || (e.plugins = t.getPlugins()));
    }
    static convertRoom(e, t) {
        let { recording: i, rtmp: r, hls: s, transcriptions: o } = a.convertRecordingStreamingState(e.recording, e.rtmp, e.hls, e.transcriptions);
        return {
            id: e.id,
            name: e.name,
            localPeer: t,
            recording: i,
            rtmp: r,
            hls: s,
            transcriptions: o,
            sessionId: e.sessionId,
            startedAt: e.startedAt,
            joinedAt: e.joinedAt,
            peerCount: e.peerCount,
            isLargeRoom: e.large_room_optimization,
            isEffectsEnabled: e.isEffectsEnabled,
            disableNoneLayerRequest: e.disableNoneLayerRequest,
            isVBEnabled: e.isVBEnabled,
            effectsKey: e.effectsKey,
            isHipaaEnabled: e.isHipaaEnabled,
            isNoiseCancellationEnabled: e.isNoiseCancellationEnabled
        };
    }
    static convertMessage(e, t) {
        var i, r, s, o;
        return {
            sender: (i = e.peer) == null ? void 0 : i.peer_id,
            senderName: (r = e.peer) == null ? void 0 : r.info.name,
            senderRole: (s = e.peer) == null ? void 0 : s.role,
            senderUserId: (o = e.peer) == null ? void 0 : o.info.user_id,
            recipientPeer: e.private ? t : void 0,
            recipientRoles: e.roles,
            time: new Date(e.timestamp),
            type: e.info.type,
            message: e.info.message,
            id: e.message_id
        };
    }
    static convertRoles(e) {
        let t = {};
        return e && e.forEach((i)=>{
            t[i.name] = i;
        }), t;
    }
    static convertRoleChangeRequest(e) {
        var t;
        return {
            requestedBy: (t = e.requestedBy) == null ? void 0 : t.peerId,
            roleName: e.role.name,
            token: e.token
        };
    }
    static convertException(e) {
        let t = "trackType" in e, i = {
            code: e.code,
            action: e.action,
            name: e.name,
            message: e.message,
            description: e.description,
            isTerminal: e.isTerminal,
            nativeError: e.nativeError,
            timestamp: new Date
        };
        return t && (i.trackType = e == null ? void 0 : e.trackType), i;
    }
    static convertDeviceChangeUpdate(e) {
        let t = {
            devices: e.devices,
            selection: e.selection,
            type: e.type
        };
        return e.error && (t.error = this.convertException(e.error)), t;
    }
    static convertPlaylist(e) {
        let t = this.getConvertedPlaylistType(e, "audio"), i = this.getConvertedPlaylistType(e, "video");
        return {
            audio: t,
            video: i
        };
    }
    static convertPlaylistItem(e, t) {
        let i = t.type, r = e.getCurrentSelection(i), s = e.isPlaying(i), o = t.url === (r == null ? void 0 : r.url);
        return M(m({}, t), {
            type: t.type,
            selected: o,
            playing: o && s
        });
    }
    static getConvertedPlaylistType(e, t) {
        let i = {}, r = e.getCurrentSelection(t), s = e.getCurrentProgress(t), o = e.getVolume(t), n = e.getList(t), d = e.getCurrentIndex(t);
        return e.getList(t).forEach((u)=>{
            i[u.id] = a.convertPlaylistItem(e, u);
        }), {
            list: i,
            selection: {
                id: r == null ? void 0 : r.id,
                hasPrevious: d > 0,
                hasNext: d < n.length - 1
            },
            progress: s,
            volume: o,
            currentTime: e.getCurrentTime(t),
            playbackRate: e.getPlaybackRate(t)
        };
    }
    static convertRecordingStreamingState(e, t, i, r) {
        var s;
        return {
            recording: {
                browser: m({
                    running: !1
                }, e == null ? void 0 : e.browser),
                server: m({
                    running: !1
                }, e == null ? void 0 : e.server),
                hls: m({
                    running: !1
                }, e == null ? void 0 : e.hls)
            },
            rtmp: m({
                running: !1
            }, t),
            hls: {
                variants: ((s = i == null ? void 0 : i.variants) == null ? void 0 : s.map((o)=>o)) || [],
                running: !!(i != null && i.running),
                error: i == null ? void 0 : i.error
            },
            transcriptions: r || []
        };
    }
};
var xt = class {
    constructor(e, t, i, r){
        this.playlistManager = e;
        this.syncPlaylistState = i;
        this.store = r;
        this.type = t;
    }
    play(e) {
        return c(this, null, function*() {
            if (!e) {
                b.w("Please pass id to play");
                return;
            }
            yield this.playlistManager.setEnabled(!0, {
                id: e,
                type: this.type
            });
        });
    }
    pause() {
        return c(this, null, function*() {
            let e = this.type === "audio" ? Aa : Ia, t = this.store.getState(e.selection);
            if (!t.id) {
                b.w("No item is currently playing to pause");
                return;
            }
            yield this.playlistManager.setEnabled(!1, {
                id: t.id,
                type: this.type
            });
        });
    }
    playNext() {
        return c(this, null, function*() {
            yield this.playlistManager.playNext(this.type);
        });
    }
    playPrevious() {
        return c(this, null, function*() {
            yield this.playlistManager.playPrevious(this.type);
        });
    }
    seek(e) {
        this.playlistManager.seek(e, this.type), this.syncPlaylistState(`seekOn${this.type}Playlist`);
    }
    seekTo(e) {
        this.playlistManager.seekTo(e, this.type), this.syncPlaylistState(`seekToOn${this.type}Playlist`);
    }
    setVolume(e) {
        this.playlistManager.setVolume(e, this.type), this.syncPlaylistState(`setVolumeOn${this.type}Playlist`);
    }
    setList(e) {
        this.playlistManager.setList(e), this.syncPlaylistState(`setListOn${this.type}Playlist`);
    }
    stop() {
        return c(this, null, function*() {
            yield this.playlistManager.stop(this.type), this.syncPlaylistState(`stop${this.type}Playlist`);
        });
    }
    setIsAutoplayOn(e) {
        this.playlistManager.setIsAutoplayOn(this.type, e);
    }
    setPlaybackRate(e) {
        this.playlistManager.setPlaybackRate(this.type, e), this.syncPlaylistState(`set${this.type}PlaybackRate`);
    }
    removeItem(e) {
        return c(this, null, function*() {
            let t = yield this.playlistManager.removeItem(e, this.type);
            return t && this.syncPlaylistState(`remove${this.type}PlaylistItem`), t;
        });
    }
    clearList() {
        return c(this, null, function*() {
            yield this.playlistManager.clearList(this.type), this.syncPlaylistState(`clear${this.type}Playlist`);
        });
    }
};
var _i = class {
    constructor(e, t){
        this.sdk = e;
        this.setLocally = t;
    }
    get sdkSessionStore() {
        return this.sdk.getSessionStore();
    }
    set(e, t) {
        return c(this, null, function*() {
            let { value: i } = yield this.sdkSessionStore.set(String(e), t);
            this.setLocally({
                key: e,
                value: i
            });
        });
    }
    observe(e) {
        return c(this, null, function*() {
            let t = Array.isArray(e) ? e.map((i)=>String(i)) : [
                String(e)
            ];
            yield this.sdkSessionStore.observe(t);
        });
    }
    unobserve(e) {
        return c(this, null, function*() {
            let t = Array.isArray(e) ? e.map((i)=>String(i)) : [
                String(e)
            ];
            yield this.sdkSessionStore.unobserve(t);
        });
    }
};
var Ni = class {
    constructor(e, t){
        this.TAG = "[BeamSpeakerLabelsLogger]";
        this.intervalMs = 100, this.shouldMonitor = !1, this.hasStarted = !1, this.unsubs = [], this.analysers = {}, this.store = e, this.actions = t;
    }
    start() {
        return c(this, null, function*() {
            if (this.hasStarted) return;
            this.hasStarted = !0, b.d("starting audio level monitor for remote peers", this.store);
            let e = this.store.getState(Be);
            b.d("starting audio levels is connected to room", e), e && (yield this.monitorAudioLevels());
            let t = this.store.subscribe(this.monitorAudioLevels.bind(this), Be);
            this.unsubs.push(t);
        });
    }
    stop() {
        return c(this, null, function*() {
            this.hasStarted && (this.hasStarted = !1, this.shouldMonitor = !1, this.unsubs.forEach((e)=>e()), b.d("stopped audio level monitor for remote peers"));
        });
    }
    monitorAudioLevels() {
        return c(this, null, function*() {
            if (!this.store.getState(Be)) {
                this.shouldMonitor && (b.i("room no longer connected, stopping audio level monitoring for remote"), this.shouldMonitor = !1);
                return;
            }
            if (this.shouldMonitor) return;
            b.i("monitoring audio levels"), this.shouldMonitor = !0;
            let t = ()=>{
                this.shouldMonitor ? (this.logAllPeersAudioLevels(), setTimeout(t, this.intervalMs)) : b.i("stopped monitoring audio levels");
            };
            setTimeout(t, 1e3);
        });
    }
    logAllPeersAudioLevels() {
        return c(this, null, function*() {
            var r;
            if (!window.__triggerBeamEvent__) return;
            let e = this.store.getState(ke), t = e.filter((s)=>!!s.audioTrack);
            b.d(this.TAG, "Peers Without audio track", e.filter((s)=>!s.audioTrack).map((s)=>s.id).join(","));
            let i = [];
            for (let s of t){
                let o = this.actions.getTrackById(s.audioTrack || ""), n = (r = o == null ? void 0 : o.stream) == null ? void 0 : r.nativeStream;
                if (s.joinedAt && n) {
                    let d = yield this.getAudioLevel(s, n);
                    b.d(this.TAG, s.id, d), d.level > 0 && i.push(d);
                }
            }
            if (i.length > 0) {
                let s = {
                    event: "app-audio-level",
                    data: i
                };
                b.d("logging audio levels", JSON.stringify(i)), window.__triggerBeamEvent__(JSON.stringify(s));
            }
        });
    }
    getAudioLevel(e, t) {
        return c(this, null, function*() {
            this.analysers[t.id] || (this.analysers[t.id] = this.createAnalyserNode(t));
            let i = this.analysers[t.id], r = this.calculateAudioLevel(i);
            return {
                peerId: e.id,
                peerName: e.name,
                level: r
            };
        });
    }
    createAnalyserNode(e) {
        this.audioContext || (this.audioContext = new AudioContext);
        let t = this.audioContext.createAnalyser();
        return this.audioContext.createMediaStreamSource(e).connect(t), t;
    }
    calculateAudioLevel(e) {
        let t = new Uint8Array(e.fftSize);
        e.getByteTimeDomainData(t);
        let i = .009, r = i;
        for (let n of t)r = Math.max(r, (n - 128) / 128);
        let s = (Math.log(i) - Math.log(r)) / Math.log(i);
        return Math.ceil(Math.min(Math.max(s * 100, 0), 100));
    }
};
var $a = 2e4, Ka = 1e4, dt = {
    name: "diagnostics-role",
    priority: 1,
    publishParams: {
        allowed: [
            "audio",
            "video"
        ],
        audio: {
            bitRate: 32,
            codec: "opus"
        },
        video: {
            bitRate: 100,
            codec: "vp8",
            frameRate: 30,
            height: 720,
            width: 1280
        },
        screen: {
            bitRate: 100,
            codec: "vp8",
            frameRate: 10,
            height: 1080,
            width: 1920
        }
    },
    subscribeParams: {
        subscribeToRoles: [],
        maxSubsBitRate: 3200
    },
    permissions: {
        browserRecording: !1,
        changeRole: !1,
        endRoom: !1,
        hlsStreaming: !1,
        mute: !1,
        pollRead: !1,
        pollWrite: !1,
        removeOthers: !1,
        rtmpStreaming: !1,
        unmute: !1
    }
}, qa = "https://100ms.live/test-audio.wav";
var Oi = class {
    constructor(){
        this.networkScores = [];
        this.lastPushedAt = 0;
    }
    pushScore(e) {
        !e || e < 0 || (this.networkScores.length === 0 ? (this.networkScores.push(e), this.lastPushedAt = Date.now()) : this.addPendingCQSTillNow());
    }
    addPendingCQSTillNow() {
        if (this.networkScores.length > 0) {
            let e = (Date.now() - this.lastPushedAt) / 1e3;
            for(; e > 0;)this.networkScores.push(this.networkScores[this.networkScores.length - 1]), e -= 1;
            this.lastPushedAt = Date.now();
        }
    }
    getCQS() {
        return this.networkScores.reduce((e, t)=>e + t, 0) / this.networkScores.length;
    }
};
var gn = (a)=>!!a && !isNaN(a), oe = (a)=>a[a.length - 1], Ve = (a, e)=>{
    let t = a.filter((i)=>gn(e(i)));
    return t.reduce((i, r)=>i + (e(r) || 0), 0) / t.length;
}, xi = class {
    constructor(e){
        this.sdk = e;
        this.peerStatsList = [];
        this.localAudioTrackStatsList = [];
        this.localVideoTrackStatsList = [];
        this.remoteAudioTrackStatsList = [];
        this.remoteVideoTrackStatsList = [];
    }
    handleStatsUpdate(e) {
        return c(this, null, function*() {
            var n, d, u, p, h, T, g, f;
            let t = e.getLocalPeerStats();
            t && this.peerStatsList.push(t);
            let i = (u = (d = (n = this.sdk.getLocalPeer()) == null ? void 0 : n.audioTrack) == null ? void 0 : d.nativeTrack) == null ? void 0 : u.id, r = (T = (h = (p = this.sdk.getLocalPeer()) == null ? void 0 : p.videoTrack) == null ? void 0 : h.nativeTrack) == null ? void 0 : T.id, s = e.getLocalTrackStats();
            s && (i && this.localAudioTrackStatsList.push(s[i]), r && this.localVideoTrackStatsList.push(s[r]));
            let o = yield (f = (g = this.sdk.getWebrtcInternals()) == null ? void 0 : g.getSubscribePeerConnection()) == null ? void 0 : f.getStats();
            o == null || o.forEach((E)=>{
                if (E.type === "inbound-rtp") {
                    let v = E.kind === "audio" ? this.remoteAudioTrackStatsList : this.remoteVideoTrackStatsList, R = Ht("bytesReceived", E, oe(v));
                    v.push(M(m({}, E), {
                        bitrate: R
                    }));
                }
            });
        });
    }
    buildReport() {
        var E, v, R, $, ue, ge, pe, St, hs, ms;
        let e = (E = oe(this.peerStatsList)) == null ? void 0 : E.publish, t = (v = oe(this.peerStatsList)) == null ? void 0 : v.subscribe, i = e != null && e.responsesReceived ? ((e == null ? void 0 : e.totalRoundTripTime) || 0) / e.responsesReceived : 0, r = t != null && t.responsesReceived ? ((t == null ? void 0 : t.totalRoundTripTime) || 0) / t.responsesReceived : 0, s = Number(((i + r) / 2 * 1e3).toFixed(2)), o = ((R = oe(this.remoteAudioTrackStatsList)) == null ? void 0 : R.packetsReceived) || 0, n = (($ = oe(this.remoteVideoTrackStatsList)) == null ? void 0 : $.packetsReceived) || 0, d = this.localAudioTrackStatsList.map((B)=>B ? Ve(Object.values(B), (te)=>te.bitrate) : 0), u = this.localVideoTrackStatsList.map((B)=>B ? Ve(Object.values(B), (te)=>te.bitrate) : 0), p = ((ue = oe(this.remoteAudioTrackStatsList)) == null ? void 0 : ue.jitter) || 0, h = ((ge = oe(this.remoteVideoTrackStatsList)) == null ? void 0 : ge.jitter) || 0, T = Math.max(p, h), g = oe(this.localAudioTrackStatsList), f = oe(this.localVideoTrackStatsList);
        return {
            combined: {
                roundTripTime: s,
                packetsReceived: o + n,
                packetsLost: (t == null ? void 0 : t.packetsLost) || 0,
                bytesSent: (e == null ? void 0 : e.bytesSent) || 0,
                bytesReceived: (t == null ? void 0 : t.bytesReceived) || 0,
                bitrateSent: Ve(this.peerStatsList, (B)=>{
                    var te;
                    return (te = B.publish) == null ? void 0 : te.bitrate;
                }),
                bitrateReceived: Ve(this.peerStatsList, (B)=>{
                    var te;
                    return (te = B.subscribe) == null ? void 0 : te.bitrate;
                }),
                jitter: T
            },
            audio: {
                roundTripTime: s,
                packetsReceived: o,
                packetsLost: ((pe = oe(this.remoteAudioTrackStatsList)) == null ? void 0 : pe.packetsLost) || 0,
                bytesReceived: ((St = oe(this.remoteAudioTrackStatsList)) == null ? void 0 : St.bytesReceived) || 0,
                bitrateSent: Ve(d, (B)=>B),
                bitrateReceived: Ve(this.remoteAudioTrackStatsList, (B)=>B.bitrate),
                bytesSent: g ? Object.values(g).reduce((B, te)=>B + (te.bytesSent || 0), 0) : 0,
                jitter: p
            },
            video: {
                roundTripTime: s,
                packetsLost: ((hs = oe(this.remoteVideoTrackStatsList)) == null ? void 0 : hs.packetsLost) || 0,
                bytesReceived: ((ms = oe(this.remoteVideoTrackStatsList)) == null ? void 0 : ms.bytesReceived) || 0,
                packetsReceived: n,
                bitrateSent: Ve(u, (B)=>B),
                bitrateReceived: Ve(this.remoteVideoTrackStatsList, (B)=>B.bitrate),
                bytesSent: f ? Object.values(f).reduce((B, te)=>B + (te.bytesSent || 0), 0) : 0,
                jitter: h
            }
        };
    }
};
var Tn = ((n)=>(n[n.STARTING = 0] = "STARTING", n[n.INIT_FETCHED = 1] = "INIT_FETCHED", n[n.SIGNAL_CONNECTED = 2] = "SIGNAL_CONNECTED", n[n.ICE_ESTABLISHED = 3] = "ICE_ESTABLISHED", n[n.MEDIA_CAPTURED = 4] = "MEDIA_CAPTURED", n[n.MEDIA_PUBLISHED = 5] = "MEDIA_PUBLISHED", n[n.COMPLETED = 6] = "COMPLETED", n))(Tn || {});
var ja, Ja, Ui = class {
    constructor(e, t, i, r, s = $a){
        this.sdk = e;
        this.sdkListener = t;
        this.progressCallback = i;
        this.completionCallback = r;
        this.connectivityDuration = s;
        this.wsConnected = !1;
        this.initConnected = !1;
        this.isPublishICEConnected = !1;
        this.isSubscribeICEConnected = !1;
        this.gatheredPublishICECandidates = [];
        this.gatheredSubscribeICECandidates = [];
        this.errors = [];
        this.isAudioTrackCaptured = !1;
        this.isVideoTrackCaptured = !1;
        this.isAudioTrackPublished = !1;
        this.isVideoTrackPublished = !1;
        this.cqsCalculator = new Oi;
        this.timestamp = Date.now();
        this.onRoomUpdate = this.sdkListener.onRoomUpdate.bind(this.sdkListener);
        this.onPeerUpdate = this.sdkListener.onPeerUpdate.bind(this.sdkListener);
        this.onMessageReceived = this.sdkListener.onMessageReceived.bind(this.sdkListener);
        this.onReconnected = this.sdkListener.onReconnected.bind(this.sdkListener);
        this.onRoleChangeRequest = this.sdkListener.onRoleChangeRequest.bind(this.sdkListener);
        this.onRoleUpdate = this.sdkListener.onRoleUpdate.bind(this.sdkListener);
        this.onChangeTrackStateRequest = this.sdkListener.onChangeTrackStateRequest.bind(this.sdkListener);
        this.onChangeMultiTrackStateRequest = this.sdkListener.onChangeMultiTrackStateRequest.bind(this.sdkListener);
        this.onRemovedFromRoom = this.sdkListener.onRemovedFromRoom.bind(this.sdkListener);
        this.onNetworkQuality = (ja = this.sdkListener.onNetworkQuality) == null ? void 0 : ja.bind(this.sdkListener);
        this.onPreview = this.sdkListener.onPreview.bind(this.sdkListener);
        this.onDeviceChange = (Ja = this.sdkListener.onDeviceChange) == null ? void 0 : Ja.bind(this.sdkListener);
        this.onSessionStoreUpdate = this.sdkListener.onSessionStoreUpdate.bind(this.sdkListener);
        this.onPollsUpdate = this.sdkListener.onPollsUpdate.bind(this.sdkListener);
        this.onWhiteboardUpdate = this.sdkListener.onWhiteboardUpdate.bind(this.sdkListener);
        this.handleConnectionQualityUpdate = (e)=>{
            let t = e.find((i)=>{
                var r, s;
                return i.peerID === ((s = (r = this.sdk) == null ? void 0 : r.store.getLocalPeer()) == null ? void 0 : s.peerId);
            });
            this.cqsCalculator.pushScore(t == null ? void 0 : t.downlinkQuality);
        };
        this.statsCollector = new xi(e), this.state = 0;
    }
    get state() {
        return this._state;
    }
    set state(e) {
        var t;
        e === void 0 || this._state !== void 0 && e < this._state || (this._state = e, (t = this.progressCallback) == null || t.call(this, e));
    }
    onICESuccess(e) {
        e ? this.isPublishICEConnected = !0 : this.isSubscribeICEConnected = !0, this.isPublishICEConnected && this.isSubscribeICEConnected && (this.state = 3);
    }
    onSelectedICECandidatePairChange(e, t) {
        t ? this.selectedPublishICECandidate = e : this.selectedSubscribeICECandidate = e;
    }
    onICECandidate(e, t) {
        t ? this.gatheredPublishICECandidates.push(e) : this.gatheredSubscribeICECandidates.push(e);
    }
    onMediaPublished(e) {
        switch(e.type){
            case "audio":
                this.isAudioTrackPublished = !0;
                break;
            case "video":
                this.isVideoTrackPublished = !0;
                break;
            default:
                break;
        }
        this.isVideoTrackPublished && this.isAudioTrackPublished && (this.state = 5);
    }
    onInitSuccess(e) {
        this.websocketURL = e, this.initConnected = !0, this.state = 1;
    }
    onSignallingSuccess() {
        this.wsConnected = !0, this.state = 2;
    }
    onJoin(e) {
        var t, i;
        this.sdkListener.onJoin(e), (t = this.sdk.getWebrtcInternals()) == null || t.onStatsChange((r)=>this.statsCollector.handleStatsUpdate(r)), (i = this.sdk.getWebrtcInternals()) == null || i.start(), this.cleanupTimer = window.setTimeout(()=>{
            this.cleanupAndReport();
        }, this.connectivityDuration);
    }
    onError(e) {
        this.sdkListener.onError(e), this.errors.push(e), e != null && e.isTerminal && this.cleanupAndReport();
    }
    onTrackUpdate(e, t, i) {
        if (this.sdkListener.onTrackUpdate(e, t, i), i.isLocal && e === 0) {
            switch(t.type){
                case "audio":
                    this.isAudioTrackCaptured = !0;
                    break;
                case "video":
                    this.isVideoTrackCaptured = !0;
                    break;
                default:
                    break;
            }
            this.isVideoTrackCaptured && this.isAudioTrackCaptured && (this.state = 4);
        }
    }
    onReconnecting(e) {
        this.sdkListener.onReconnecting(e), this.cqsCalculator.addPendingCQSTillNow();
    }
    cleanupAndReport() {
        var e;
        clearTimeout(this.cleanupTimer), this.cleanupTimer = void 0, this.state === 5 && (this.state = 6), (e = this.completionCallback) == null || e.call(this, this.buildReport()), this.sdk.leave();
    }
    buildReport() {
        this.cqsCalculator.addPendingCQSTillNow();
        let e = this.cqsCalculator.getCQS(), t = this.statsCollector.buildReport();
        return {
            testTimestamp: this.timestamp,
            connectivityState: this.state,
            errors: this.errors,
            signallingReport: {
                isConnected: this.wsConnected,
                isInitConnected: this.initConnected,
                websocketUrl: this.websocketURL
            },
            mediaServerReport: {
                stats: t,
                connectionQualityScore: e,
                isPublishICEConnected: this.isPublishICEConnected,
                isSubscribeICEConnected: this.isSubscribeICEConnected,
                publishICECandidatePairSelected: this.selectedPublishICECandidate,
                subscribeICECandidatePairSelected: this.selectedSubscribeICECandidate,
                publishIceCandidatesGathered: this.gatheredPublishICECandidates,
                subscribeIceCandidatesGathered: this.gatheredSubscribeICECandidates
            }
        };
    }
};
var Je = class {
    constructor(e){
        this.recording = {
            server: {
                running: !1
            },
            browser: {
                running: !1
            },
            hls: {
                running: !1
            }
        };
        this.rtmp = {
            running: !1
        };
        this.hls = {
            running: !1,
            variants: []
        };
        this.transcriptions = [];
        this.id = e;
    }
};
var Bi = (a, e, t)=>c(void 0, null, function*() {
        let r = Error("something went wrong during fetch");
        for(let s = 0; s < 4; s++)try {
            let o = yield fetch(a, e), n = yield o.clone().json();
            if (t && t.length && !o.ok && t.includes(n.code)) throw S.APIErrors.ServerErrors(n.code, "GET_TOKEN", n.message, !1);
            return o;
        } catch (o) {
            r = o;
        }
        throw [
            "Failed to fetch",
            "NetworkError"
        ].some((s)=>r.message.includes(s)) ? S.APIErrors.EndpointUnreachable("GET_TOKEN", r.message) : r;
    });
var Ut = class {
    constructor(e, t){
        this.sdk = e;
        this.sdkListener = t;
        this.recordedAudio = qa;
        this.sdk.setIsDiagnostics(!0), this.initSdkWithLocalPeer();
    }
    get localPeer() {
        var e;
        return (e = this.sdk) == null ? void 0 : e.store.getLocalPeer();
    }
    checkBrowserSupport() {
        kt(), yt();
    }
    requestPermission(e) {
        return c(this, null, function*() {
            try {
                let t = yield navigator.mediaDevices.getUserMedia(e);
                return t.getTracks().forEach((i)=>i.stop()), yield this.sdk.deviceManager.init(!0), {
                    audio: t.getAudioTracks().length > 0,
                    video: t.getVideoTracks().length > 0
                };
            } catch (t) {
                throw _e(t, this.sdk.localTrackManager.getErrorType(!!e.video, !!e.audio));
            }
        });
    }
    startCameraCheck(e) {
        return c(this, null, function*() {
            var s, o, n, d;
            if (this.initSdkWithLocalPeer(), !this.localPeer) throw new Error("Local peer not found");
            this.sdk.store.setSimulcastEnabled(!1), this.localPeer.role = M(m({}, dt), {
                publishParams: M(m({}, dt.publishParams), {
                    allowed: [
                        "video"
                    ]
                })
            });
            let t = new xe().video(new q().deviceId(e || "default").build()).build(), i = yield (s = this.sdk) == null ? void 0 : s.localTrackManager.getLocalTracks({
                audio: !1,
                video: !0
            }, t), r = i == null ? void 0 : i.find((u)=>u.type === "video");
            if (!r) throw new Error("No video track found");
            (o = this.sdk) == null || o.deviceManager.init(!0), this.localPeer.videoTrack = r, (d = (n = this.sdk) == null ? void 0 : n.listener) == null || d.onPeerUpdate(9, [
                this.localPeer
            ]);
        });
    }
    stopCameraCheck() {
        var e, t;
        (t = (e = this.localPeer) == null ? void 0 : e.videoTrack) == null || t.cleanup(), this.localPeer && (this.localPeer.videoTrack = void 0);
    }
    startMicCheck(s) {
        return c(this, arguments, function*({ inputDevice: e, onError: t, onStop: i, time: r = Ka }) {
            var u, p, h, T;
            this.initSdkWithLocalPeer((g)=>{
                this.stopMicCheck(), t == null || t(g);
            });
            let o = yield this.getLocalAudioTrack(e);
            if ((u = this.sdk) == null || u.deviceManager.init(!0), !this.localPeer) throw new Error("Local peer not found");
            if (!o) throw new Error("No audio track found");
            this.localPeer.audioTrack = o, (p = this.sdk) == null || p.initPreviewTrackAudioLevelMonitor(), (T = (h = this.sdk) == null ? void 0 : h.listener) == null || T.onPeerUpdate(9, [
                this.localPeer
            ]), this.mediaRecorder = new MediaRecorder(o.stream.nativeStream);
            let n = [];
            this.mediaRecorder.ondataavailable = function(g) {
                n.push(g.data);
            }, this.mediaRecorder.onstop = ()=>{
                var f, E;
                let g = new Blob(n, {
                    type: (f = this.mediaRecorder) == null ? void 0 : f.mimeType
                });
                this.recordedAudio = URL.createObjectURL(g), (E = this.onStopMicCheck) == null || E.call(this);
            }, this.mediaRecorder.start();
            let d = setTimeout(()=>{
                this.stopMicCheck();
            }, r);
            this.onStopMicCheck = ()=>{
                clearTimeout(d), i == null || i();
            };
        });
    }
    stopMicCheck() {
        var e, t, i;
        (e = this.mediaRecorder) == null || e.stop(), (i = (t = this.localPeer) == null ? void 0 : t.audioTrack) == null || i.cleanup(), this.localPeer && (this.localPeer.audioTrack = void 0);
    }
    getRecordedAudio() {
        return this.recordedAudio;
    }
    startConnectivityCheck(e, t, i, r) {
        return c(this, null, function*() {
            if (!this.sdk) throw new Error("SDK not found");
            this.connectivityCheck = new Ui(this.sdk, this.sdkListener, e, t, r);
            let s = yield this.getAuthToken(i);
            yield this.sdk.leave(), yield this.sdk.join({
                authToken: s,
                userName: "diagnostics-test"
            }, this.connectivityCheck), this.sdk.addConnectionQualityListener({
                onConnectionQualityUpdate: (o)=>{
                    var n;
                    (n = this.connectivityCheck) == null || n.handleConnectionQualityUpdate(o);
                }
            });
        });
    }
    stopConnectivityCheck() {
        return c(this, null, function*() {
            var e;
            return (e = this.connectivityCheck) == null ? void 0 : e.cleanupAndReport();
        });
    }
    initSdkWithLocalPeer(e) {
        var r, s, o;
        this.sdkListener && ((r = this.sdk) == null || r.initStoreAndManagers(M(m({}, this.sdkListener), {
            onError: (n)=>{
                e == null || e(n), this.sdkListener.onError(n);
            }
        })));
        let t = new qe({
            name: "diagnostics-peer",
            role: dt,
            type: "regular"
        });
        (s = this.sdk) == null || s.store.addPeer(t);
        let i = new Je("diagnostics-room");
        this.sdk.store.setRoom(i), this.sdkListener.onRoomUpdate("ROOM_PEER_COUNT_UPDATED", i), (o = this.sdk) == null || o.deviceManager.init(!0);
    }
    getAuthToken(e) {
        return c(this, null, function*() {
            let t = new URL("https://api.100ms.live/v2/diagnostics/token");
            e && t.searchParams.append("region", e);
            let i = yield Bi(t.toString(), {
                method: "GET"
            }, [
                429,
                500,
                501,
                502,
                503,
                504,
                505,
                506,
                507,
                508,
                509,
                510,
                511
            ]), r = yield i.json();
            if (!i.ok) throw S.APIErrors.ServerErrors(r.code, "GET_TOKEN", r.message, !1);
            let { token: s } = r;
            if (!s) throw Error(r.message);
            return s;
        });
    }
    getLocalAudioTrack(e) {
        return c(this, null, function*() {
            var r;
            if (!this.localPeer) return;
            this.localPeer.role = M(m({}, dt), {
                publishParams: M(m({}, dt.publishParams), {
                    allowed: [
                        "audio"
                    ]
                })
            });
            let t = new xe().audio(new Q().deviceId(e || "default").build()).build(), i = yield (r = this.sdk) == null ? void 0 : r.localTrackManager.getLocalTracks({
                audio: !0,
                video: !1
            }, t);
            return i == null ? void 0 : i.find((s)=>s.type === "audio");
        });
    }
};
var Vi = class {
    constructor(e, t, i){
        this.isRoomJoinCalled = !1;
        this.ignoredMessageTypes = [];
        this.setProgress = ({ type: e, progress: t })=>{
            this.setState((i)=>{
                i.playlist[e].progress = t, i.playlist[e].currentTime = this.sdk.getPlaylistManager().getCurrentTime(e);
            }, "playlistProgress");
        };
        this.syncPlaylistState = (e)=>{
            this.setState((t)=>{
                Object.assign(t.playlist, _.convertPlaylist(this.sdk.getPlaylistManager()));
            }, e);
        };
        this.sendPeerUpdateNotification = (e, t)=>{
            let i = this.store.getState(ee(t.peerId)), r = Hi[e] || "peerUpdate";
            if (e === 8) this.syncRoomState(r), this.updateMidCallPreviewRoomState(e, t);
            else if ([
                0,
                1
            ].includes(e)) this.syncRoomState(r), i || (i = this.store.getState(ee(t.peerId)));
            else if ([
                12,
                13,
                14
            ].includes(e)) this.syncRoomState(r), i || (i = this.store.getState(ee(t.peerId)));
            else {
                let s = _.convertPeer(t);
                this.setState((o)=>{
                    let n = o.peers[s.id];
                    je(n, s) && (ae(n.auxiliaryTracks, s.auxiliaryTracks) && (n.auxiliaryTracks = s.auxiliaryTracks), Object.assign(n, s)), i = s;
                }, r);
            }
            this.hmsNotifications.sendPeerUpdate(e, i);
        };
        this.getSDKHMSPeer = (e)=>this.sdk.getPeerMap()[e];
        this.setState = (e, t)=>this.store.namedSetState(e, t);
        this.store = e, this.sdk = t, this.hmsNotifications = i, this.sessionStore = new _i(this.sdk, this.setSessionStoreValueLocally.bind(this)), this.actionBatcher = new Di(e);
    }
    submitSessionFeedback(e, t) {
        return this.sdk.submitSessionFeedback(e, t);
    }
    getLocalTrack(e) {
        return this.sdk.store.getLocalPeerTracks().find((t)=>t.trackId === e);
    }
    get interactivityCenter() {
        return this.sdk.getInteractivityCenter();
    }
    setPlaylistSettings(e) {
        this.sdk.updatePlaylistSettings(e);
    }
    refreshDevices() {
        return c(this, null, function*() {
            yield this.sdk.refreshDevices();
        });
    }
    unblockAudio() {
        return c(this, null, function*() {
            yield this.sdk.getAudioOutput().unblockAutoplay();
        });
    }
    setVolume(e, t) {
        return c(this, null, function*() {
            t ? yield this.setTrackVolume(e, t) : (yield this.sdk.getAudioOutput().setVolume(e), this.syncRoomState("setOutputVolume"));
        });
    }
    setAudioOutputDevice(e) {
        return c(this, null, function*() {
            (yield this.sdk.getAudioOutput().setDevice(e)) && this.setState((i)=>{
                i.settings.audioOutputDeviceId = e;
            }, "setAudioOutputDevice");
        });
    }
    setPreferredLayer(e, t) {
        return c(this, null, function*() {
            var r;
            let i = this.getTrackById(e);
            if (i) {
                if (i instanceof O) {
                    if (t === "none") {
                        b.d("layer none will be ignored");
                        return;
                    }
                    if (((r = this.store.getState(Ha(e))) == null ? void 0 : r.preferredLayer) === t) {
                        b.d(`preferred layer is already ${t}`);
                        return;
                    }
                    this.setState((o)=>{
                        let n = o.tracks[e];
                        n && (n.preferredLayer = t);
                    }, "setPreferredLayer"), yield i.setPreferredLayer(t);
                } else b.d(`track ${e} is not a remote video track`);
            } else this.logPossibleInconsistency(`track ${e} not present, unable to set preffer layer`);
        });
    }
    getNativeTrackById(e) {
        var t;
        return (t = this.sdk.store.getTrackById(e)) == null ? void 0 : t.nativeTrack;
    }
    getTrackById(e) {
        return this.sdk.store.getTrackById(e);
    }
    getAuthTokenByRoomCode(e, t) {
        return this.sdk.getAuthTokenByRoomCode(e, t);
    }
    preview(e) {
        return c(this, null, function*() {
            let t = this.store.getState(se);
            if (t === "Preview" || t === "Connecting") {
                this.logPossibleInconsistency("attempting to call preview while room is in preview/connecting");
                return;
            }
            try {
                t !== "Connected" && this.setState((i)=>{
                    i.room.roomState = "Connecting";
                }, "connecting"), yield this.sdkPreviewWithListeners(e);
            } catch (i) {
                throw b.e("Cannot show preview. Failed to connect to room - ", i), i;
            }
        });
    }
    cancelMidCallPreview() {
        return c(this, null, function*() {
            return this.sdk.cancelMidCallPreview();
        });
    }
    join(e) {
        return c(this, null, function*() {
            if (this.isRoomJoinCalled) {
                this.logPossibleInconsistency("room join is called again");
                return;
            }
            try {
                this.isRoomJoinCalled = !0, this.setState((t)=>{
                    t.room.roomState = "Connecting";
                }, "join"), yield this.sdkJoinWithListeners(e);
            } catch (t) {
                throw this.isRoomJoinCalled = !1, b.e("Failed to connect to room - ", t), t;
            }
        });
    }
    leave() {
        return c(this, null, function*() {
            let e = this.store.getState(Be), t = !0;
            e || (t = !1, this.logPossibleInconsistency("room leave is called when no room is connected"));
            let i = this.store.getState(se);
            return this.setState((r)=>{
                r.room.roomState = "Disconnecting";
            }, "leaving"), this.sdk.leave(t).then(()=>{
                this.resetState("leave"), this.beamSpeakerLabelsLogger && this.beamSpeakerLabelsLogger.stop().catch(b.e), b.i("left room");
            }).catch((r)=>{
                b.e("error in leaving room - ", r), this.setState((s)=>{
                    s.room.roomState = i;
                }, "revertLeave");
            });
        });
    }
    setScreenShareEnabled(e, t) {
        return c(this, null, function*() {
            typeof t == "boolean" && (t = {
                audioOnly: t
            });
            try {
                e ? yield this.startScreenShare(t) : yield this.stopScreenShare();
            } catch (i) {
                throw this.hmsNotifications.sendError(_.convertException(i)), i;
            }
        });
    }
    addTrack(e, t = "regular") {
        return c(this, null, function*() {
            yield this.sdk.addTrack(e, t), this.syncRoomState("addTrack");
        });
    }
    removeTrack(e) {
        return c(this, null, function*() {
            yield this.sdk.removeTrack(e), this.syncRoomState("removeTrack");
        });
    }
    setLocalAudioEnabled(e) {
        return c(this, null, function*() {
            let t = this.store.getState(le);
            t && (yield this.setEnabledTrack(t, e));
        });
    }
    setLocalVideoEnabled(e) {
        return c(this, null, function*() {
            let t = this.store.getState(Z);
            t && (yield this.setEnabledTrack(t, e));
        });
    }
    setEnabledTrack(e, t) {
        return c(this, null, function*() {
            var s;
            if (((s = this.store.getState().tracks[e]) == null ? void 0 : s.enabled) === t) {
                this.logPossibleInconsistency(`local track[${e}] enabled state - ${t}`);
                return;
            }
            this.setState((o)=>{
                o.tracks[e] ? o.tracks[e].displayEnabled = t : this.logPossibleInconsistency("track id not found for setEnabled");
            }, "displayEnabled");
            try {
                yield this.setEnabledSDKTrack(e, t), this.syncRoomState("setEnabled");
            } catch (o) {
                throw this.setState((n)=>{
                    n.tracks[e].displayEnabled = !t;
                }, "rollbackDisplayEnabled"), this.hmsNotifications.sendError(_.convertException(o)), o;
            }
            let r = t ? 3 : 2;
            this.hmsNotifications.sendTrackUpdate(r, e);
        });
    }
    autoSelectAudioOutput(e) {
        return c(this, null, function*() {
            yield this.sdk.autoSelectAudioOutput(e);
        });
    }
    setAudioSettings(e) {
        return c(this, null, function*() {
            let t = this.store.getState(le);
            t && (yield this.setSDKLocalAudioTrackSettings(t, e), this.syncRoomState("setAudioSettings"));
        });
    }
    setVideoSettings(e) {
        return c(this, null, function*() {
            let t = this.store.getState(Z);
            t && (yield this.setSDKLocalVideoTrackSettings(t, e), this.syncRoomState("setVideoSettings"));
        });
    }
    switchCamera() {
        return c(this, null, function*() {
            let e = this.store.getState(Z);
            if (e) {
                let t = this.sdk.store.getLocalPeerTracks().find((i)=>i.trackId === e);
                t && (yield t.switchCamera(), this.syncRoomState("switchCamera"));
            }
        });
    }
    sendMessage(e) {
        this.sendBroadcastMessage(e);
    }
    sendBroadcastMessage(e, t) {
        return c(this, null, function*() {
            let { message_id: i, timestamp: r } = yield this.sdk.sendBroadcastMessage(e, t);
            this.updateMessageInStore({
                message: e,
                type: t,
                id: i,
                time: r
            });
        });
    }
    sendGroupMessage(e, t, i) {
        return c(this, null, function*() {
            let r = this.store.getState(Ee), s = t.map((d)=>r[d]), { message_id: o, timestamp: n } = yield this.sdk.sendGroupMessage(e, s, i);
            this.updateMessageInStore({
                message: e,
                recipientRoles: t,
                type: i,
                id: o,
                time: n
            });
        });
    }
    sendDirectMessage(e, t, i) {
        return c(this, null, function*() {
            let { message_id: r, timestamp: s } = yield this.sdk.sendDirectMessage(e, t, i);
            this.updateMessageInStore({
                message: e,
                recipientPeer: t,
                type: i,
                id: r,
                time: s
            });
        });
    }
    updateMessageInStore(e) {
        var s;
        if (!e.message) throw b.w("sendMessage", "Failed to send message", e), Error(`sendMessage Failed - ${JSON.stringify(e)}`);
        if (!!e.type && this.ignoredMessageTypes.includes(e.type)) return;
        let i = this.sdk.getLocalPeer(), r = {
            read: !0,
            id: e.id,
            time: new Date(e.time),
            message: e.message,
            type: e.type || "chat",
            recipientPeer: e.recipientPeer,
            recipientRoles: e.recipientRoles,
            senderName: i == null ? void 0 : i.name,
            sender: i == null ? void 0 : i.peerId,
            senderRole: (s = i == null ? void 0 : i.role) == null ? void 0 : s.name,
            ignored: !1
        };
        this.setState((o)=>{
            o.messages.byID[r.id] = r, o.messages.allIDs.push(r.id);
        }, "newMessage");
    }
    setMessageRead(e, t) {
        this.setState((i)=>{
            t ? i.messages.byID[t] ? i.messages.byID[t].read = e : this.logPossibleInconsistency("no message with id is found") : i.messages.allIDs.forEach((r)=>{
                i.messages.byID[r].read = e;
            });
        }, "setMessageRead");
    }
    attachVideo(e, t) {
        return c(this, null, function*() {
            if (this.localAndVideoUnmuting(e)) return new Promise((i)=>{
                let r = this.store.subscribe((s)=>c(this, null, function*() {
                        s && (yield this.attachVideoInternal(e, t), r(), i());
                    }), Yr);
            });
            yield this.attachVideoInternal(e, t);
        });
    }
    detachVideo(e, t) {
        return c(this, null, function*() {
            let i = this.getTrackById(e);
            (i == null ? void 0 : i.type) === "video" ? yield this.sdk.detachVideo(i, t) : (t && (t.srcObject = null), b.d("possible inconsistency detected - no video track found to remove sink"));
        });
    }
    addPluginToVideoTrack(e, t) {
        return c(this, null, function*() {
            return this.addRemoveVideoPlugin(e, "add", t);
        });
    }
    addPluginsToVideoStream(e) {
        return c(this, null, function*() {
            return this.addRemoveMediaStreamVideoPlugins(e, "add");
        });
    }
    removePluginsFromVideoStream(e) {
        return c(this, null, function*() {
            return this.addRemoveMediaStreamVideoPlugins(e, "remove");
        });
    }
    addPluginToAudioTrack(e) {
        return c(this, null, function*() {
            return this.addRemoveAudioPlugin(e, "add");
        });
    }
    validateVideoPluginSupport(e) {
        let t = {};
        if (t.isSupported = !1, !e) return b.w("no plugin passed in for checking support"), t.errMsg = "no plugin passed in for checking support", t;
        let i = this.store.getState(Z);
        if (!i) return b.w("video Track not added to local peer yet"), t.errMsg = "call this function only after local peer has video track", t;
        let r = this.getTrackById(i);
        return r ? t = r.validatePlugin(e) : (b.w(`track ${i} not present, unable to validate plugin`), t.errMsg = `track ${i} not present, unable to validate plugin`), t;
    }
    validateAudioPluginSupport(e) {
        let t = {};
        if (t.isSupported = !1, !e) return b.w('no plugin passed in for checking support"'), t.errMsg = 'no plugin passed in for checking support"', t;
        let i = this.store.getState(le);
        if (!i) return b.w("audio track not added to local peer yet"), t.errMsg = "call this function only after local peer has audio track", t;
        let r = this.getTrackById(i);
        return r ? t = r.validatePlugin(e) : (b.w(`track ${i} not present, unable to validate plugin`), t.errMsg = `track ${i} not present, unable to validate plugin`), t;
    }
    removePluginFromVideoTrack(e) {
        return c(this, null, function*() {
            return this.addRemoveVideoPlugin(e, "remove");
        });
    }
    removePluginFromAudioTrack(e) {
        return c(this, null, function*() {
            return this.addRemoveAudioPlugin(e, "remove");
        });
    }
    changeRole(e, t, i = !1) {
        return c(this, null, function*() {
            yield this.sdk.changeRoleOfPeer(e, t, i);
        });
    }
    changeRoleOfPeer(e, t, i = !1) {
        return c(this, null, function*() {
            yield this.sdk.changeRoleOfPeer(e, t, i);
        });
    }
    changeRoleOfPeersWithRoles(e, t) {
        return c(this, null, function*() {
            let i = this.sdk.getRoles().filter((r)=>e.includes(r.name));
            yield this.sdk.changeRoleOfPeersWithRoles(i, t);
        });
    }
    acceptChangeRole(e) {
        return c(this, null, function*() {
            let t = e.requestedBy ? this.getSDKHMSPeer(e.requestedBy.id) : void 0;
            t || b.w(`peer for which role change is requested no longer available - ${e.requestedBy}`);
            let i = {
                requestedBy: t,
                role: e.role,
                token: e.token
            };
            yield this.sdk.acceptChangeRole(i), this.removeRoleChangeRequest(e);
        });
    }
    raiseLocalPeerHand() {
        return c(this, null, function*() {
            yield this.sdk.raiseLocalPeerHand();
        });
    }
    lowerLocalPeerHand() {
        return c(this, null, function*() {
            yield this.sdk.lowerLocalPeerHand();
        });
    }
    raiseRemotePeerHand(e) {
        return c(this, null, function*() {
            yield this.sdk.raiseRemotePeerHand(e);
        });
    }
    lowerRemotePeerHand(e) {
        return c(this, null, function*() {
            yield this.sdk.lowerRemotePeerHand(e);
        });
    }
    getPeer(e) {
        return c(this, null, function*() {
            let t = yield this.sdk.getPeer(e);
            if (t) return _.convertPeer(t);
        });
    }
    findPeerByName(e) {
        return c(this, null, function*() {
            let { offset: t, peers: i, eof: r } = yield this.sdk.findPeerByName(e);
            return {
                offset: t,
                eof: r,
                peers: i.map((s)=>_.convertPeer(s))
            };
        });
    }
    getPeerListIterator(e) {
        let t = this.sdk.getPeerListIterator(e);
        return {
            hasNext: ()=>t.hasNext(),
            next: ()=>c(this, null, function*() {
                    return (yield t.next()).map((r)=>_.convertPeer(r));
                }),
            findPeers: ()=>c(this, null, function*() {
                    return (yield t.findPeers()).map((r)=>_.convertPeer(r));
                }),
            getTotal: ()=>t.getTotal()
        };
    }
    initAppData(e) {
        this.setState((t)=>{
            t.appData = e;
        }, "initAppData");
    }
    setAppData(e, t, i) {
        let r = (t == null ? void 0 : t.constructor.name) === "Object";
        this.setState((s)=>{
            if (s.appData) i && r ? Object.assign(s.appData[e], t) : s.appData[e] = t;
            else {
                let o = {
                    [e]: t
                };
                s.appData = o;
            }
        }, `setAppData-${e}`);
    }
    rejectChangeRole(e) {
        this.removeRoleChangeRequest(e);
    }
    endRoom(e, t) {
        return c(this, null, function*() {
            let i = this.store.getState(ga);
            if (!(i != null && i.endRoom)) {
                b.w("You are not allowed to perform this action - endRoom");
                return;
            }
            let r = this.store.getState(se);
            this.setState((s)=>{
                s.room.roomState = "Disconnecting";
            }, "endingRoom");
            try {
                yield this.sdk.endRoom(e, t), this.resetState("endRoom");
            } catch (s) {
                b.e("error in ending room - ", s), this.setState((o)=>{
                    o.room.roomState = r;
                }, "revertEndRoom");
            }
        });
    }
    removePeer(e, t) {
        return c(this, null, function*() {
            var r;
            let i = (r = this.sdk.getLocalPeer()) == null ? void 0 : r.peerId;
            e !== i && (yield this.sdk.removePeer(e, t));
        });
    }
    startRTMPOrRecording(e) {
        return c(this, null, function*() {
            yield this.sdk.startRTMPOrRecording(e);
        });
    }
    stopRTMPAndRecording() {
        return c(this, null, function*() {
            yield this.sdk.stopRTMPAndRecording();
        });
    }
    startHLSStreaming(e) {
        return c(this, null, function*() {
            yield this.sdk.startHLSStreaming(e);
        });
    }
    stopHLSStreaming(e) {
        return c(this, null, function*() {
            yield this.sdk.stopHLSStreaming(e);
        });
    }
    startTranscription(e) {
        return c(this, null, function*() {
            yield this.sdk.startTranscription(e);
        });
    }
    stopTranscription(e) {
        return c(this, null, function*() {
            yield this.sdk.stopTranscription(e);
        });
    }
    sendHLSTimedMetadata(e) {
        return c(this, null, function*() {
            yield this.sdk.sendHLSTimedMetadata(e);
        });
    }
    changeName(e) {
        return c(this, null, function*() {
            yield this.sdk.changeName(e);
        });
    }
    changeMetadata(e) {
        return c(this, null, function*() {
            typeof e != "string" && (e = JSON.stringify(e)), yield this.sdk.changeMetadata(e);
        });
    }
    setSessionMetadata(e) {
        return c(this, null, function*() {
            yield this.sdk.setSessionMetadata(e), this.setState((t)=>{
                t.sessionMetadata = e;
            }, "setSessionMetadata"), this.setSessionStoreValueLocally({
                key: "default",
                value: e
            }, "setSessionMetadata");
        });
    }
    populateSessionMetadata() {
        return c(this, null, function*() {
            let e = yield this.sdk.getSessionMetadata();
            this.setState((t)=>{
                t.sessionMetadata = e;
            }, "populateSessionMetadata"), this.setSessionStoreValueLocally({
                key: "default",
                value: e
            }, "populateSessionmetadata");
        });
    }
    setRemoteTrackEnabled(e, t) {
        return c(this, null, function*() {
            if (typeof e == "string") {
                let i = this.getTrackById(e);
                i && Ba(i) ? yield this.sdk.changeTrackState(i, t) : this.logPossibleInconsistency(`No remote track with ID ${e} found for change track state`);
            } else Array.isArray(e) && e.forEach((i)=>this.setRemoteTrackEnabled(i, t));
        });
    }
    setRemoteTracksEnabled(e) {
        return c(this, null, function*() {
            let t = {
                enabled: e.enabled,
                type: e.type,
                source: e.source
            };
            if (e.roles) {
                let i = this.store.getState(Ee);
                t.roles = e.roles.map((r)=>i[r]);
            }
            yield this.sdk.changeMultiTrackState(t);
        });
    }
    setLogLevel(e) {
        b.level = e, this.sdk.setLogLevel(e);
    }
    setFrameworkInfo(e) {
        this.sdk.setFrameworkInfo(e);
    }
    ignoreMessageTypes(e, t = !1) {
        if (t) this.ignoredMessageTypes = e;
        else for (let i of e)this.ignoredMessageTypes.includes(i) || this.ignoredMessageTypes.push(i);
    }
    enableBeamSpeakerLabelsLogging() {
        return c(this, null, function*() {
            this.beamSpeakerLabelsLogger || (b.i("enabling beam speaker labels logging"), this.beamSpeakerLabelsLogger = new Ni(this.store, this), yield this.beamSpeakerLabelsLogger.start());
        });
    }
    initDiagnostics() {
        let e = new Ut(this.sdk, {
            onJoin: this.onJoin.bind(this),
            onPreview: this.onPreview.bind(this),
            onRoomUpdate: this.onRoomUpdate.bind(this),
            onPeerUpdate: this.onPeerUpdate.bind(this),
            onTrackUpdate: this.onTrackUpdate.bind(this),
            onMessageReceived: this.onMessageReceived.bind(this),
            onError: this.onError.bind(this),
            onReconnected: this.onReconnected.bind(this),
            onReconnecting: this.onReconnecting.bind(this),
            onRoleChangeRequest: this.onRoleChangeRequest.bind(this),
            onRoleUpdate: this.onRoleUpdate.bind(this),
            onDeviceChange: this.onDeviceChange.bind(this),
            onChangeTrackStateRequest: this.onChangeTrackStateRequest.bind(this),
            onChangeMultiTrackStateRequest: this.onChangeMultiTrackStateRequest.bind(this),
            onRemovedFromRoom: this.onRemovedFromRoom.bind(this),
            onNetworkQuality: this.onNetworkQuality.bind(this),
            onSessionStoreUpdate: this.onSessionStoreUpdate.bind(this),
            onPollsUpdate: this.onPollsUpdate.bind(this),
            onWhiteboardUpdate: this.onWhiteboardUpdate.bind(this)
        });
        return this.sdk.addAudioListener({
            onAudioLevelUpdate: this.onAudioLevelUpdate.bind(this)
        }), this.sdk.addConnectionQualityListener({
            onConnectionQualityUpdate: this.onConnectionQualityUpdate.bind(this)
        }), e;
    }
    resetState(e = "resetState") {
        this.isRoomJoinCalled = !1, b.cleanup(), this.setState((t)=>{
            Object.assign(t, oi());
        }, e);
    }
    getDebugInfo() {
        return this.sdk.getDebugInfo();
    }
    sdkJoinWithListeners(e) {
        return c(this, null, function*() {
            yield this.sdk.join(e, {
                onJoin: this.onJoin.bind(this),
                onPreview: this.onPreview.bind(this),
                onRoomUpdate: this.onRoomUpdate.bind(this),
                onPeerUpdate: this.onPeerUpdate.bind(this),
                onTrackUpdate: this.onTrackUpdate.bind(this),
                onMessageReceived: this.onMessageReceived.bind(this),
                onError: this.onError.bind(this),
                onReconnected: this.onReconnected.bind(this),
                onReconnecting: this.onReconnecting.bind(this),
                onRoleChangeRequest: this.onRoleChangeRequest.bind(this),
                onRoleUpdate: this.onRoleUpdate.bind(this),
                onDeviceChange: this.onDeviceChange.bind(this),
                onChangeTrackStateRequest: this.onChangeTrackStateRequest.bind(this),
                onChangeMultiTrackStateRequest: this.onChangeMultiTrackStateRequest.bind(this),
                onRemovedFromRoom: this.onRemovedFromRoom.bind(this),
                onNetworkQuality: this.onNetworkQuality.bind(this),
                onSessionStoreUpdate: this.onSessionStoreUpdate.bind(this),
                onPollsUpdate: this.onPollsUpdate.bind(this),
                onWhiteboardUpdate: this.onWhiteboardUpdate.bind(this),
                onSFUMigration: this.onSFUMigration.bind(this)
            }), this.sdk.addAudioListener({
                onAudioLevelUpdate: this.onAudioLevelUpdate.bind(this)
            }), this.sdk.addConnectionQualityListener({
                onConnectionQualityUpdate: this.onConnectionQualityUpdate.bind(this)
            });
        });
    }
    onSFUMigration() {
        this.syncRoomState("SFUMigration");
    }
    onRemovedFromRoom(e) {
        var r;
        let t = this.store.getState(ee((r = e.requestedBy) == null ? void 0 : r.peerId));
        this.hmsNotifications.sendLeaveRoom(M(m({}, e), {
            requestedBy: t || void 0
        }));
        let i = e.roomEnded || !t ? "roomEnded" : "removedFromRoom";
        b.i(`resetting state after peer removed ${i}`, e), this.resetState(i);
    }
    onDeviceChange(e) {
        let t = e.devices;
        if (!t) return;
        let i = this.store.getState(re);
        if (this.setState((r)=>{
            ae(r.devices.audioInput, t.audioInput) || (r.devices.audioInput = t.audioInput), ae(r.devices.videoInput, t.videoInput) || (r.devices.videoInput = t.videoInput), ae(r.devices.audioOutput, t.audioOutput) || (r.devices.audioOutput = t.audioOutput);
            let s = this.sdk.getLocalPeer();
            i != null && i.id && s && Object.assign(r.settings, this.getMediaSettings(s));
        }, "deviceChange"), e.selection && !e.internal) {
            let r = _.convertDeviceChangeUpdate(e);
            this.hmsNotifications.sendDeviceChange(r);
        }
    }
    sdkPreviewWithListeners(e) {
        return c(this, null, function*() {
            yield this.sdk.preview(e, {
                onPreview: this.onPreview.bind(this),
                onError: this.onError.bind(this),
                onReconnected: this.onReconnected.bind(this),
                onReconnecting: this.onReconnecting.bind(this),
                onDeviceChange: this.onDeviceChange.bind(this),
                onRoomUpdate: this.onRoomUpdate.bind(this),
                onPeerUpdate: this.onPeerUpdate.bind(this),
                onNetworkQuality: this.onNetworkQuality.bind(this),
                onTrackUpdate: this.onTrackUpdate.bind(this)
            }), this.sdk.addAudioListener({
                onAudioLevelUpdate: this.onAudioLevelUpdate.bind(this)
            });
        });
    }
    onNetworkQuality(e) {
        this.setState((t)=>{
            var r;
            let i = t.room.localPeer || ((r = this.sdk.getLocalPeer()) == null ? void 0 : r.peerId);
            i && (t.connectionQualities[i] = {
                peerID: i,
                downlinkQuality: e
            });
        }, "ConnectionQuality");
    }
    onSessionStoreUpdate(e) {
        this.setSessionStoreValueLocally(e, "sessionStoreUpdate");
    }
    onPollsUpdate(e, t) {
        let i = Ci[e];
        this.setState((r)=>{
            let s = t.reduce((o, n)=>{
                var d;
                return o[n.id] = M(m({}, n), {
                    questions: (d = n.questions) == null ? void 0 : d.map((u)=>{
                        var p, h;
                        return M(m({}, u), {
                            answer: u.answer ? m({}, u.answer) : void 0,
                            options: (p = u.options) == null ? void 0 : p.map((T)=>m({}, T)),
                            responses: (h = u.responses) == null ? void 0 : h.map((T)=>m({}, T))
                        });
                    })
                }), o;
            }, {});
            Ga(r.polls, s);
        }, i), t.forEach((r)=>this.hmsNotifications.sendPollUpdate(e, r.id));
    }
    onWhiteboardUpdate(e) {
        this.setState((t)=>{
            t.whiteboards[e.id] = e;
        }, "whiteboardUpdate");
    }
    startScreenShare(e) {
        return c(this, null, function*() {
            this.store.getState(Xr) ? this.logPossibleInconsistency("start screenshare is called while it's on") : (yield this.sdk.startScreenShare(()=>this.syncRoomState("screenshareStopped"), e), this.syncRoomState("startScreenShare"));
        });
    }
    stopScreenShare() {
        return c(this, null, function*() {
            this.store.getState(Xr) ? (yield this.sdk.stopScreenShare(), this.syncRoomState("stopScreenShare")) : this.logPossibleInconsistency("stop screenshare is called while it's not on");
        });
    }
    attachVideoInternal(e, t) {
        return c(this, null, function*() {
            let i = this.getTrackById(e);
            i || (i = this.getLocalTrack(e)), i && i.type === "video" ? yield this.sdk.attachVideo(i, t) : this.logPossibleInconsistency("no video track found to add sink");
        });
    }
    syncRoomState(e) {
        e = `${e}_fullSync`, b.time(`store-sync-${e}`);
        let t = {}, i = [], r = {}, s = {}, o = {}, n, d = this.sdk.getPeers();
        for (let g of d){
            let f = _.convertPeer(g);
            t[f.id] = f, i.push(f.id), o[f.id] = {
                peerID: f.id,
                downlinkQuality: g.networkQuality || -1
            };
            let E = [
                g.audioTrack,
                g.videoTrack,
                ...g.auxiliaryTracks
            ];
            for (let v of E){
                if (!v) continue;
                let R = _.convertTrack(v);
                r[R.id] = R;
            }
            if (g.isLocal) {
                let v = g;
                n = this.getPreviewFields(v), Object.assign(s, this.getMediaSettings(v));
            }
        }
        let u = this.sdk.getRecordingState(), p = this.sdk.getRTMPState(), h = this.sdk.getHLSState(), T = this.sdk.getTranscriptionState();
        this.setState((g)=>{
            var v;
            g.room.peers = i;
            let f = g.peers, E = g.tracks;
            Va(f, t), Fa(E, r), Object.assign(g.settings, s), g.room.isConnected && Object.assign(g.connectionQualities, o), (v = g.preview) != null && v.localPeer && n != null && n.localPeer ? Object.assign(g.preview, n) : g.preview = n, Object.assign(g.roles, _.convertRoles(this.sdk.getRoles())), Object.assign(g.playlist, _.convertPlaylist(this.sdk.getPlaylistManager())), Object.assign(g.room, _.convertRecordingStreamingState(u, p, h, T)), Object.assign(g.templateAppData, this.sdk.getTemplateAppData());
        }, e), b.timeEnd(`store-sync-${e}`);
    }
    onPreview(e) {
        this.setState((t)=>{
            var i;
            Object.assign(t.room, _.convertRoom(e, (i = this.sdk.getLocalPeer()) == null ? void 0 : i.peerId)), t.room.roomState = "Preview";
        }, "previewStart"), this.syncRoomState("previewSync");
    }
    onJoin(e) {
        let t = this.sdk.getPlaylistManager();
        this.audioPlaylist = new xt(t, "audio", this.syncPlaylistState.bind(this), this.store), this.videoPlaylist = new xt(t, "video", this.syncRoomState.bind(this), this.store), this.syncRoomState("joinSync"), this.setState((i)=>{
            var r;
            Object.assign(i.room, _.convertRoom(e, (r = this.sdk.getLocalPeer()) == null ? void 0 : r.peerId)), i.room.isConnected = !0, i.room.roomState = "Connected";
        }, "joined"), t.onProgress(this.setProgress), t.onNewTrackStart((i)=>{
            this.syncPlaylistState(`${i.type}PlaylistUpdate`);
        }), t.onPlaylistEnded((i)=>{
            this.syncPlaylistState(`${i}PlaylistEnded`);
        }), t.onCurrentTrackEnded((i)=>{
            this.hmsNotifications.sendPlaylistTrackEnded(_.convertPlaylistItem(t, i)), this.syncPlaylistState(`${i.type}PlaylistItemEnded`);
        });
    }
    onRoomUpdate(e, t) {
        this.setState((i)=>{
            var r;
            Object.assign(i.room, _.convertRoom(t, (r = this.sdk.getLocalPeer()) == null ? void 0 : r.peerId));
        }, e), e === "TRANSCRIPTION_STATE_UPDATED" && this.hmsNotifications.sendTranscriptionUpdate(t.transcriptions);
    }
    onPeerUpdate(e, t) {
        if (![
            4,
            5
        ].includes(e)) {
            if (Array.isArray(t)) {
                let i = this.store.getState(z), r = t.filter((o)=>!i[o.peerId]);
                if (this.syncRoomState("peersJoined"), this.store.getState(Be)) {
                    let o = [];
                    for (let n of t){
                        let d = this.store.getState(ee(n.peerId));
                        d && o.push(d);
                    }
                    this.hmsNotifications.sendPeerList(o);
                } else r.forEach((o)=>{
                    let n = this.store.getState(ee(o.peerId));
                    n && this.hmsNotifications.sendPeerUpdate(0, n);
                });
                return;
            }
            this.sendPeerUpdateNotification(e, t);
        }
    }
    onTrackUpdate(e, t, i) {
        if (e === 1) this.hmsNotifications.sendTrackUpdate(e, t.trackId), this.handleTrackRemove(t, i);
        else if ([
            0,
            1
        ].includes(e)) {
            let r = Nt[e];
            this.syncRoomState(r), this.hmsNotifications.sendTrackUpdate(e, t.trackId);
        } else {
            let r = Nt[e] || "trackUpdate", s = _.convertTrack(t);
            this.setState((o)=>{
                let n = o.tracks[s.id];
                je(n, s) && (ss(n, s), Object.assign(n, s));
            }, r), this.hmsNotifications.sendTrackUpdate(e, t.trackId);
        }
    }
    onMessageReceived(e) {
        let t = _.convertMessage(e, this.store.getState(Ie));
        t.read = !1, t.ignored = this.ignoredMessageTypes.includes(t.type), t.type === "hms_transcript" && (t.ignored = !0), this.putMessageInStore(t), this.hmsNotifications.sendMessageReceived(t);
    }
    putMessageInStore(e) {
        e.ignored || this.actionBatcher.setState((t)=>{
            t.messages.byID[e.id] = e, t.messages.allIDs.push(e.id);
        }, "newMessage", 150);
    }
    onAudioLevelUpdate(e) {
        this.setState((t)=>{
            let i = {};
            e.forEach((s)=>{
                if (!s.track || !s.peer) return;
                let o = s.track.trackId;
                i[o] = s.audioLevel, t.speakers[o] || (t.speakers[o] = {
                    audioLevel: s.audioLevel,
                    peerID: s.peer.peerId,
                    trackID: o
                });
            });
            let r = Object.entries(t.speakers);
            for (let [s, o] of r)o.audioLevel = i[s] || 0, o.audioLevel === 0 && delete t.speakers[s];
        }, "audioLevel");
    }
    onConnectionQualityUpdate(e) {
        this.setState((t)=>{
            e.forEach((i)=>{
                let r = i.peerID;
                r && (t.connectionQualities[r] ? Object.assign(t.connectionQualities[r], i) : t.connectionQualities[r] = i);
            });
        }, "connectionQuality");
    }
    onChangeTrackStateRequest(e) {
        var s;
        let t = this.store.getState(ee((s = e.requestedBy) == null ? void 0 : s.peerId)), i = this.getStoreLocalTrackIDfromSDKTrack(e.track), r = this.store.getState(Ii(i));
        if (!r) return this.logPossibleInconsistency(`Not found track for which track state change was requested, ${e.track}`);
        e.enabled || this.syncRoomState("changeTrackStateRequest"), this.hmsNotifications.sendChangeTrackStateRequest({
            requestedBy: t || void 0,
            track: r,
            enabled: e.enabled
        });
    }
    onChangeMultiTrackStateRequest(e) {
        var s;
        let t = this.store.getState(ee((s = e.requestedBy) == null ? void 0 : s.peerId));
        e.enabled || this.syncRoomState("changeMultiTrackStateRequest");
        let i = [], r = this.store.getState(N);
        for (let o of e.tracks){
            let n = this.getStoreLocalTrackIDfromSDKTrack(o);
            n && r[n] && i.push(r[n]);
        }
        this.hmsNotifications.sendChangeMultiTrackStateRequest({
            requestedBy: t || void 0,
            tracks: i,
            enabled: e.enabled,
            type: e.type,
            source: e.source
        });
    }
    onReconnected() {
        this.syncRoomState("reconnectedSync"), this.hmsNotifications.sendReconnected(), this.setState((e)=>{
            e.room.roomState = e.room.isConnected ? "Connected" : "Preview";
        }, "reconnected");
    }
    onReconnecting(e) {
        let t = _.convertException(e);
        b.e("Reconnection: received error from sdk", t), this.hmsNotifications.sendReconnecting(t), this.setState((i)=>{
            i.room.roomState = "Reconnecting", i.errors.push(t);
        }, "reconnecting");
    }
    onError(e) {
        let t = _.convertException(e);
        t.isTerminal ? (this.leave().then(()=>b.e("error from SDK, left room.")), this.setState((i)=>{
            i.room.roomState = "Failed", i.errors.push(t);
        }, "errorTerminal")) : this.store.getState().errors.length < 50 && this.setState((r)=>{
            r.errors.push(t);
        }, "error"), this.syncRoomState("errorSync"), this.hmsNotifications.sendError(t), b.e("received error from sdk", t instanceof k ? `${t}` : t);
    }
    handleTrackRemove(e, t) {
        this.setState((i)=>{
            let r = i.peers[t.peerId], s = i.tracks, o = e.trackId;
            if (r) {
                if (o === r.audioTrack) delete r.audioTrack;
                else if (o === r.videoTrack) delete r.videoTrack;
                else {
                    let n = r.auxiliaryTracks.indexOf(o);
                    n > -1 && r.auxiliaryTracks.splice(n, 1);
                }
            }
            delete s[o];
        }, "trackRemoved");
    }
    setEnabledSDKTrack(e, t) {
        return c(this, null, function*() {
            let i = this.getLocalTrack(e);
            i ? yield i.setEnabled(t) : this.logPossibleInconsistency(`track ${e} not present, unable to enabled/disable`);
        });
    }
    setSDKLocalVideoTrackSettings(e, t) {
        return c(this, null, function*() {
            let i = this.getLocalTrack(e);
            i ? yield i.setSettings(t) : this.logPossibleInconsistency(`local track ${e} not present, unable to set settings`);
        });
    }
    setSDKLocalAudioTrackSettings(e, t) {
        return c(this, null, function*() {
            let i = this.getLocalTrack(e);
            i ? yield i.setSettings(t) : this.logPossibleInconsistency(`local track ${e} not present, unable to set settings`);
        });
    }
    getMediaSettings(e) {
        var s;
        let t = this.store.getState(ua), i = e.audioTrack, r = e.videoTrack;
        return {
            audioInputDeviceId: (i == null ? void 0 : i.settings.deviceId) || t.audioInputDeviceId,
            videoInputDeviceId: (r == null ? void 0 : r.settings.deviceId) || t.videoInputDeviceId,
            audioOutputDeviceId: (s = this.sdk.getAudioOutput().getDevice()) == null ? void 0 : s.deviceId,
            audioMode: (i == null ? void 0 : i.settings.audioMode) || "voice"
        };
    }
    getPreviewFields(e) {
        var i, r;
        if (!e.isInPreview()) return;
        let t = _.convertPeer(e);
        return {
            localPeer: t.id,
            audioTrack: t.audioTrack,
            videoTrack: t.videoTrack,
            asRole: ((i = e.asRole) == null ? void 0 : i.name) || ((r = e.role) == null ? void 0 : r.name)
        };
    }
    setTrackVolume(e, t) {
        return c(this, null, function*() {
            let i = this.getTrackById(t);
            i ? i instanceof we ? (yield i.setVolume(e), this.setState((r)=>{
                let s = r.tracks[t];
                s && s.type === "audio" && (s.volume = e);
            }, "trackVolume")) : b.w(`track ${t} is not an audio track`) : this.logPossibleInconsistency(`track ${t} not present, unable to set volume`);
        });
    }
    localAndVideoUnmuting(e) {
        let t = this.store.getState(re);
        if ((t == null ? void 0 : t.videoTrack) !== e) return !1;
        let i = this.store.getState(ha), r = this.store.getState(Yr);
        return i && !r;
    }
    logPossibleInconsistency(e) {
        b.w("possible inconsistency detected - ", e);
    }
    addRemoveVideoPlugin(e, t, i) {
        return c(this, null, function*() {
            if (!e) {
                b.w("Invalid plugin received in store");
                return;
            }
            let r = this.store.getState(Z);
            if (r) {
                let s = this.getLocalTrack(r);
                s ? (t === "add" ? yield s.addPlugin(e, i) : t === "remove" && (yield s.removePlugin(e)), this.syncRoomState(`${t}VideoPlugin`)) : this.logPossibleInconsistency(`track ${r} not present, unable to ${t} plugin`);
            }
        });
    }
    addRemoveMediaStreamVideoPlugins(e, t) {
        return c(this, null, function*() {
            if (e.length === 0) {
                b.w("Invalid plugin received in store");
                return;
            }
            let i = this.store.getState(Z);
            if (i) {
                let r = this.getLocalTrack(i);
                r ? (t === "add" ? yield r.addStreamPlugins(e) : t === "remove" && (yield r.removeStreamPlugins(e)), this.syncRoomState(`${t}MediaStreamPlugin`)) : this.logPossibleInconsistency(`track ${i} not present, unable to ${t} plugin`);
            }
        });
    }
    addRemoveAudioPlugin(e, t) {
        return c(this, null, function*() {
            try {
                if (!e) {
                    b.w("Invalid plugin received in store");
                    return;
                }
                let i = this.store.getState(le);
                if (i) {
                    let r = this.getLocalTrack(i);
                    r ? (t === "add" ? yield r.addPlugin(e) : t === "remove" && (yield r.removePlugin(e)), this.syncRoomState(`${t}AudioPlugin`)) : this.logPossibleInconsistency(`track ${i} not present, unable to ${t} plugin`);
                }
            } catch (i) {
                console.error(i);
            }
        });
    }
    onRoleChangeRequest(e) {
        this.setState((t)=>{
            t.roleChangeRequests.length === 0 && t.roleChangeRequests.push(_.convertRoleChangeRequest(e));
        }, "roleChangeRequest");
    }
    removeRoleChangeRequest(e) {
        this.setState((t)=>{
            let i = t.roleChangeRequests.findIndex((r)=>r.token === e.token);
            i !== -1 && t.roleChangeRequests.splice(i, 1);
        }, "removeRoleChangeRequest");
    }
    onRoleUpdate() {
        this.syncRoomState("roleUpdate");
    }
    getStoreLocalTrackIDfromSDKTrack(e) {
        return this.store.getState(pa).find((i)=>{
            var r;
            return ((r = this.getTrackById(i)) == null ? void 0 : r.trackId) === e.trackId;
        });
    }
    updateMidCallPreviewRoomState(e, t) {
        t.isLocal && e === 8 && this.store.getState(ma) && this.setState((i)=>{
            i.room.roomState = "Connected";
        }, "midCallPreviewCompleted");
    }
    setSessionStoreValueLocally(e, t = "setSessionStore") {
        let i = Array.isArray(e) ? e : [
            e
        ];
        this.setState((r)=>{
            i.forEach((s)=>{
                r.sessionStore[s.key] = s.value;
            });
        }, t);
    }
    hasActiveElements(e) {
        let t = Object.keys(this.store.getState().whiteboards).length > 0, i = Object.keys(this.store.getState().polls).length > 0, r = Object.keys(this.store.getState().peers).length > 0, s = e.getState().remoteTrackStats;
        return r && (t || i || Object.values(s).some((o)=>o && typeof o.bitrate == "number" && o.bitrate > 0));
    }
};
var Fi = (a)=>U ? `${a} ${document.title}` : a;
var Gi = class {
    constructor(e, t){
        this.eventBus = e;
        this.listener = t;
        this.TAG = "[NetworkTestManager]";
        this.controller = new AbortController;
        this.start = (e)=>c(this, null, function*() {
                var u;
                if (!e) return;
                let { url: t, timeout: i, scoreMap: r } = e, s = this.controller.signal, o = Date.now(), n = 0, d = J(i).then(()=>{
                    this.controller.abort();
                });
                try {
                    let h = (u = (yield fetch(`${t}?${Date.now()}`, {
                        signal: s
                    })).body) == null ? void 0 : u.getReader();
                    if (!h) throw Error("unable to process request");
                    let T = ()=>c(this, null, function*() {
                            if (h) try {
                                let g = !1;
                                for(; !g;){
                                    let { value: f, done: E } = yield h.read();
                                    g = E, f && (n += f.byteLength, this.sendScore({
                                        scoreMap: r,
                                        downloadedSize: n,
                                        startTime: o
                                    }));
                                }
                            } catch (g) {
                                g.name !== "AbortError" && l.d(this.TAG, g);
                            }
                        });
                    return Promise.race([
                        T(),
                        d
                    ]).then(()=>{
                        this.sendScore({
                            scoreMap: r,
                            downloadedSize: n,
                            startTime: o,
                            finished: !0
                        });
                    }).catch((g)=>{
                        l.d(this.TAG, g), this.updateScoreToListener(0), this.eventBus.analytics.publish(y.previewNetworkQuality({
                            error: g.message
                        }));
                    });
                } catch (p) {
                    p.name !== "AbortError" ? (l.d(this.TAG, p), this.updateScoreToListener(0), this.eventBus.analytics.publish(y.previewNetworkQuality({
                        error: p.message
                    }))) : l.d(this.TAG, p);
                }
            });
        this.stop = ()=>{
            this.controller.signal.aborted || this.controller.abort();
        };
        this.sendScore = ({ scoreMap: e, downloadedSize: t, startTime: i, finished: r = !1 })=>{
            let s = (Date.now() - i) / 1e3, n = t / 1024 / s * 8, d = -1;
            for(let u in e){
                let p = e[u];
                n >= p.low && (!p.high || n <= p.high) && (d = Number(u));
            }
            this.updateScoreToListener(d), r && this.eventBus.analytics.publish(y.previewNetworkQuality({
                score: d,
                downLink: n.toFixed(2)
            }));
        };
    }
    updateScoreToListener(e) {
        var t, i;
        e !== this.score && (this.score = e, (i = (t = this.listener) == null ? void 0 : t.onNetworkQuality) == null || i.call(t, e));
    }
};
var Bt = class {
    constructor(e, t, i, r, s, o){
        this.store = e;
        this.transport = t;
        this.deviceManager = i;
        this.publish = r;
        this.removeAuxiliaryTrack = s;
        this.listener = o;
        this.handleLocalPeerRoleUpdate = (i)=>c(this, [
                i
            ], function*({ oldRole: e, newRole: t }) {
                var s;
                let r = this.store.getLocalPeer();
                r && (yield this.diffRolesAndPublishTracks({
                    oldRole: e,
                    newRole: t
                }), (s = this.listener) == null || s.onPeerUpdate(8, r));
            });
        this.diffRolesAndPublishTracks = (i)=>c(this, [
                i
            ], function*({ oldRole: e, newRole: t }) {
                var g, f, E, v, R, $;
                let r = new Set(e.publishParams.allowed), s = new Set(t.publishParams.allowed), o = this.removeTrack(r, s, "video"), n = this.removeTrack(r, s, "audio"), d = this.removeTrack(r, s, "screen"), u = this.hasSimulcastDifference((g = e.publishParams.simulcast) == null ? void 0 : g.video, (f = t.publishParams.simulcast) == null ? void 0 : f.video), p = this.hasSimulcastDifference((E = e.publishParams.simulcast) == null ? void 0 : E.screen, (v = t.publishParams.simulcast) == null ? void 0 : v.screen), h = ($ = (R = this.store.getLocalPeer()) == null ? void 0 : R.videoTrack) == null ? void 0 : $.enabled;
                yield this.removeAudioTrack(n), yield this.removeVideoTracks(o || u), yield this.removeScreenTracks(d || p);
                let T = this.getSettings();
                u && (T.isVideoMuted = !h), yield this.publish(T), yield this.syncDevices(T, t);
            });
    }
    syncDevices(e, t) {
        return c(this, null, function*() {
            (!e.isAudioMuted || !e.isVideoMuted) && t.publishParams.allowed.length > 0 && (yield this.deviceManager.init(!0));
        });
    }
    removeVideoTracks(e) {
        return c(this, null, function*() {
            var i;
            if (!e) return;
            let t = this.store.getLocalPeer();
            t != null && t.videoTrack && (t.videoTrack.isPublished ? yield this.transport.unpublish([
                t.videoTrack
            ]) : yield t.videoTrack.cleanup(), (i = this.listener) == null || i.onTrackUpdate(1, t.videoTrack, t), t.videoTrack = void 0), yield this.removeAuxTracks((r)=>r.source !== "screen" && r.type === "video");
        });
    }
    removeAudioTrack(e) {
        return c(this, null, function*() {
            var i;
            if (!e) return;
            let t = this.store.getLocalPeer();
            t != null && t.audioTrack && (t.audioTrack.isPublished ? yield this.transport.unpublish([
                t.audioTrack
            ]) : yield t.audioTrack.cleanup(), (i = this.listener) == null || i.onTrackUpdate(1, t.audioTrack, t), t.audioTrack = void 0), yield this.removeAuxTracks((r)=>r.source !== "screen" && r.type === "audio");
        });
    }
    removeScreenTracks(e) {
        return c(this, null, function*() {
            e && (yield this.removeAuxTracks((t)=>t.source === "screen"));
        });
    }
    removeAuxTracks(e) {
        return c(this, null, function*() {
            let t = this.store.getLocalPeer();
            if (t != null && t.auxiliaryTracks) {
                let i = [
                    ...t.auxiliaryTracks
                ];
                for (let r of i)e(r) && (yield this.removeAuxiliaryTrack(r.trackId));
            }
        });
    }
    removeTrack(e, t, i) {
        return e.has(i) && !t.has(i);
    }
    hasSimulcastDifference(e, t) {
        var i, r, s;
        return !e && !t ? !1 : ((i = e == null ? void 0 : e.layers) == null ? void 0 : i.length) !== ((r = t == null ? void 0 : t.layers) == null ? void 0 : r.length) ? !0 : !!((s = e == null ? void 0 : e.layers) != null && s.some((o)=>{
            var d;
            let n = (d = t == null ? void 0 : t.layers) == null ? void 0 : d.find((u)=>u.rid === o.rid);
            return (n == null ? void 0 : n.maxBitrate) !== o.maxBitrate || (n == null ? void 0 : n.maxFramerate) !== o.maxFramerate;
        }));
    }
    getSettings() {
        let { isAudioMuted: e, isVideoMuted: t } = this.getMutedStatus(), { audioInputDeviceId: i, audioOutputDeviceId: r } = this.getAudioDeviceSettings(), s = this.getVideoInputDeviceId();
        return {
            isAudioMuted: e,
            isVideoMuted: t,
            audioInputDeviceId: i,
            audioOutputDeviceId: r,
            videoDeviceId: s
        };
    }
    getMutedStatus() {
        var t, i, r;
        let e = (t = this.store.getConfig()) == null ? void 0 : t.settings;
        return {
            isAudioMuted: (i = e == null ? void 0 : e.isAudioMuted) != null ? i : !0,
            isVideoMuted: (r = e == null ? void 0 : e.isVideoMuted) != null ? r : !0
        };
    }
    getAudioDeviceSettings() {
        var r, s, o;
        let e = (r = this.store.getConfig()) == null ? void 0 : r.settings, t = ((s = this.deviceManager.currentSelection.audioInput) == null ? void 0 : s.deviceId) || (e == null ? void 0 : e.audioInputDeviceId) || "default", i = ((o = this.deviceManager.currentSelection.audioOutput) == null ? void 0 : o.deviceId) || (e == null ? void 0 : e.audioOutputDeviceId) || "default";
        return {
            audioInputDeviceId: t,
            audioOutputDeviceId: i
        };
    }
    getVideoInputDeviceId() {
        var t, i;
        let e = (t = this.store.getConfig()) == null ? void 0 : t.settings;
        return ((i = this.deviceManager.currentSelection.videoInput) == null ? void 0 : i.deviceId) || (e == null ? void 0 : e.videoDeviceId) || "default";
    }
};
var os = class {
    constructor(){
        this.TAG = "[HTTPAnalyticsTransport]";
        this.failedEvents = new fe("client-events");
        this.isConnected = !0;
        this.env = null;
        this.websocketURL = "";
    }
    setEnv(e) {
        this.env = e, this.flushFailedEvents();
    }
    setWebsocketEndpoint(e) {
        this.websocketURL = e;
    }
    sendEvent(e) {
        if (!this.env) {
            this.addEventToStorage(e);
            return;
        }
        let t = {
            event: e.name,
            payload: e.properties,
            event_id: String(e.timestamp),
            peer: e.metadata.peer,
            timestamp: e.timestamp,
            device_id: e.device_id,
            cluster: {
                websocket_url: this.websocketURL
            }
        }, i = this.env === "prod" ? ea : ta;
        fetch(i, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${e.metadata.token}`,
                user_agent_v2: e.metadata.userAgent
            },
            body: JSON.stringify(t)
        }).then((r)=>{
            if (r.status === 401) {
                this.removeFromStorage(e);
                return;
            }
            if (r.status !== 200) throw Error(r.statusText);
            this.removeFromStorage(e);
        }).catch((r)=>{
            l.v(this.TAG, "Failed to send event", r, e), this.addEventToStorage(e);
        });
    }
    flushFailedEvents() {
        let e = this.failedEvents.get();
        e == null || e.forEach((t)=>this.sendEvent(t));
    }
    addEventToStorage(e) {
        let t = this.failedEvents.get() || [];
        t.find((i)=>i.timestamp === e.timestamp) || (t.length === 100 && t.shift(), t.push(e), this.failedEvents.set(t));
    }
    removeFromStorage(e) {
        let t = this.failedEvents.get() || [], i = t.findIndex((r)=>r.timestamp === e.timestamp);
        i > -1 && (t.splice(i, 1), this.failedEvents.set(t));
    }
}, He = new os;
var Vt = class {
    constructor(e){
        this.type = e.type, this.source = e.source || "regular", this.description = "", e instanceof De ? (this.mute = !e.enabled, this.track_id = e.publishedTrackId, this.stream_id = e.stream.id) : (this.mute = e.mute, this.track_id = e.track_id, this.stream_id = e.stream_id);
    }
};
var Ft = class {
    constructor(){
        this.TAG = "[Store]:";
        this.knownRoles = {};
        this.peers = {};
        this.tracks = new Map;
        this.peerTrackStates = {};
        this.speakers = [];
        this.roleDetailsArrived = !1;
        this.env = "prod";
        this.simulcastEnabled = !1;
        this.userAgent = Et(this.env);
        this.polls = new Map;
        this.whiteboards = new Map;
        this.addPermissionToRole = (e, t, i, r)=>{
            var o;
            if (!this.knownRoles[e]) {
                l.d(this.TAG, `role ${e} is not present in given roles`, this.knownRoles);
                return;
            }
            let s = this.knownRoles[e].permissions;
            t === "transcriptions" && r ? s[t] = M(m({}, s[t]), {
                [r]: [
                    i
                ]
            }) : t === "whiteboard" && (s[t] || (s[t] = []), (o = s[t]) == null || o.push(i));
        };
        this.addWhiteboardPluginToRole = (e)=>{
            var i, r, s;
            let t = e == null ? void 0 : e.permissions;
            (i = t == null ? void 0 : t.admin) == null || i.forEach((o)=>this.addPermissionToRole(o, "whiteboard", "admin")), (r = t == null ? void 0 : t.reader) == null || r.forEach((o)=>this.addPermissionToRole(o, "whiteboard", "read")), (s = t == null ? void 0 : t.writer) == null || s.forEach((o)=>this.addPermissionToRole(o, "whiteboard", "write"));
        };
        this.addTranscriptionsPluginToRole = (e = [])=>{
            var t, i;
            for (let r of e)(i = (t = r.permissions) == null ? void 0 : t.admin) == null || i.forEach((s)=>this.addPermissionToRole(s, "transcriptions", "admin", r.mode));
        };
        this.handleNoiseCancellationPlugin = (e)=>{
            this.room && (this.room.isNoiseCancellationEnabled = !!(e != null && e.enabled) && !!this.room.isNoiseCancellationEnabled);
        };
    }
    getConfig() {
        return this.config;
    }
    setSimulcastEnabled(e) {
        this.simulcastEnabled = e;
    }
    removeRemoteTracks() {
        this.tracks.forEach((e)=>{
            (e instanceof ie || e instanceof O) && (this.removeTrack(e), delete this.peerTrackStates[e.trackId]);
        });
    }
    getEnv() {
        return this.env;
    }
    getPublishParams() {
        let e = this.getLocalPeer(), t = (e == null ? void 0 : e.asRole) || (e == null ? void 0 : e.role);
        return t == null ? void 0 : t.publishParams;
    }
    getRoom() {
        return this.room;
    }
    getPolicyForRole(e) {
        return this.knownRoles[e];
    }
    getKnownRoles() {
        return this.knownRoles;
    }
    getTemplateAppData() {
        return this.templateAppData;
    }
    getLocalPeer() {
        if (this.localPeerId && this.peers[this.localPeerId]) return this.peers[this.localPeerId];
    }
    getRemotePeers() {
        return Object.values(this.peers).filter((e)=>!e.isLocal);
    }
    getPeers() {
        return Object.values(this.peers);
    }
    getPeerMap() {
        return this.peers;
    }
    getPeerById(e) {
        if (this.peers[e]) return this.peers[e];
    }
    getTracksMap() {
        return this.tracks;
    }
    getTracks() {
        return Array.from(this.tracks.values());
    }
    getVideoTracks() {
        return this.getTracks().filter((e)=>e.type === "video");
    }
    getRemoteVideoTracks() {
        return this.getTracks().filter((e)=>e instanceof O);
    }
    getAudioTracks() {
        return this.getTracks().filter((e)=>e.type === "audio");
    }
    getPeerTracks(e) {
        let t = e ? this.peers[e] : void 0, i = [];
        return t != null && t.videoTrack && i.push(t.videoTrack), t != null && t.audioTrack && i.push(t.audioTrack), i.concat((t == null ? void 0 : t.auxiliaryTracks) || []);
    }
    getLocalPeerTracks() {
        return this.getPeerTracks(this.localPeerId);
    }
    hasTrack(e) {
        return this.tracks.has(e);
    }
    getTrackById(e) {
        var r, s;
        let t = Array.from(this.tracks.values()).find((o)=>o.trackId === e);
        if (t) return t;
        let i = this.getLocalPeer();
        if (i) {
            if ((r = i.audioTrack) != null && r.isPublishedTrackId(e)) return i.audioTrack;
            if ((s = i.videoTrack) != null && s.isPublishedTrackId(e)) return i.videoTrack;
        }
    }
    getPeerByTrackId(e) {
        let t = Array.from(this.tracks.values()).find((i)=>i.trackId === e);
        return t != null && t.peerId ? this.peers[t.peerId] : void 0;
    }
    getSpeakers() {
        return this.speakers;
    }
    getSpeakerPeers() {
        return this.speakers.map((e)=>e.peer);
    }
    getUserAgent() {
        return this.userAgent;
    }
    createAndSetUserAgent(e) {
        this.userAgent = Et(this.env, e);
    }
    setRoom(e) {
        this.room = e;
    }
    setKnownRoles(e) {
        var i, r;
        if (this.knownRoles = e.known_roles, this.addPluginsToRoles(e.plugins), this.roleDetailsArrived = !0, this.templateAppData = e.app_data, !this.simulcastEnabled) return;
        let t = (i = this.knownRoles[e.name]) == null ? void 0 : i.publishParams;
        this.videoLayers = this.convertSimulcastLayers((r = t.simulcast) == null ? void 0 : r.video), this.updatePeersPolicy();
    }
    hasRoleDetailsArrived() {
        return this.roleDetailsArrived;
    }
    setConfig(e) {
        var t, i, r;
        if (X.rememberDevices(!!e.rememberDeviceSelection), e.rememberDeviceSelection) {
            let s = X.getSelection();
            s && (e.settings || (e.settings = {}), (t = s.audioInput) != null && t.deviceId && (e.settings.audioInputDeviceId = e.settings.audioInputDeviceId || s.audioInput.deviceId), (i = s.audioOutput) != null && i.deviceId && (e.settings.audioOutputDeviceId = e.settings.audioOutputDeviceId || s.audioOutput.deviceId), (r = s.videoInput) != null && r.deviceId && (e.settings.videoDeviceId = e.settings.videoDeviceId || s.videoInput.deviceId));
        }
        e.autoManageVideo = e.autoManageVideo !== !1, e.autoManageWakeLock = e.autoManageWakeLock !== !1, this.config = e, this.setEnv();
    }
    addPeer(e) {
        this.peers[e.peerId] = e, e.isLocal && (this.localPeerId = e.peerId);
    }
    addTrack(e) {
        this.tracks.set(e, e);
    }
    getTrackState(e) {
        return this.peerTrackStates[e];
    }
    setTrackState(e) {
        this.peerTrackStates[e.trackInfo.track_id] = e;
    }
    removeTrackState(e) {
        delete this.peerTrackStates[e];
    }
    removePeer(e) {
        this.localPeerId === e && (this.localPeerId = void 0), delete this.peers[e];
    }
    removeTrack(e) {
        this.tracks.delete(e);
    }
    updateSpeakers(e) {
        this.speakers = e;
    }
    updateAudioOutputVolume(e) {
        return c(this, null, function*() {
            for (let t of this.getAudioTracks())yield t.setVolume(e);
        });
    }
    updateAudioOutputDevice(e) {
        return c(this, null, function*() {
            let t = [];
            this.getAudioTracks().forEach((i)=>{
                i instanceof ie && t.push(i.setOutputDevice(e));
            }), yield Promise.all(t);
        });
    }
    getSimulcastLayers(e) {
        var t;
        return !this.simulcastEnabled || ![
            "screen",
            "regular"
        ].includes(e) ? [] : e === "screen" ? [] : ((t = this.videoLayers) == null ? void 0 : t.layers) || [];
    }
    convertSimulcastLayers(e) {
        if (e) return M(m({}, e), {
            layers: (e.layers || []).map((t)=>M(m({}, t), {
                    maxBitrate: t.maxBitrate * 1e3
                }))
        });
    }
    getSimulcastDefinitionsForPeer(e, t) {
        var n, d, u;
        if ([
            !e || !e.role,
            t === "screen",
            !this.simulcastEnabled
        ].some((p)=>!!p)) return [];
        let i = this.getPolicyForRole(e.role.name).publishParams, r, s, o;
        return t === "regular" ? (r = (n = i.simulcast) == null ? void 0 : n.video, s = i.video.width, o = i.video.height) : t === "screen" && (r = (d = i.simulcast) == null ? void 0 : d.screen, s = i.screen.width, o = i.screen.height), ((u = r == null ? void 0 : r.layers) == null ? void 0 : u.map((p)=>{
            let h = We[p.rid], T = {
                width: Math.floor(s / p.scaleResolutionDownBy),
                height: Math.floor(o / p.scaleResolutionDownBy)
            };
            return {
                layer: h,
                resolution: T
            };
        })) || [];
    }
    setPoll(e) {
        this.polls.set(e.id, e);
    }
    getPoll(e) {
        return this.polls.get(e);
    }
    setWhiteboard(e) {
        this.whiteboards.set(e.id, e);
    }
    getWhiteboards() {
        return this.whiteboards;
    }
    getWhiteboard(e) {
        return e ? this.whiteboards.get(e) : this.whiteboards.values().next().value;
    }
    getErrorListener() {
        return this.errorListener;
    }
    cleanup() {
        let e = this.getTracks();
        for (let t of e)t.cleanup();
        this.room = void 0, this.config = void 0, this.localPeerId = void 0, this.roleDetailsArrived = !1;
    }
    setErrorListener(e) {
        this.errorListener = e;
    }
    updatePeersPolicy() {
        this.getPeers().forEach((e)=>{
            var t;
            if (!e.role) {
                (t = this.errorListener) == null || t.onError(S.GenericErrors.InvalidRole("VALIDATION", ""));
                return;
            }
            e.role = this.getPolicyForRole(e.role.name);
        });
    }
    addPluginsToRoles(e) {
        e && Object.keys(e).forEach((t)=>{
            let i = t;
            switch(i){
                case "whiteboard":
                    this.addWhiteboardPluginToRole(e[i]);
                    break;
                case "transcriptions":
                    this.addTranscriptionsPluginToRole(e[i]);
                    break;
                case "noiseCancellation":
                    this.handleNoiseCancellationPlugin(e[i]);
                    break;
                default:
                    break;
            }
        });
    }
    setEnv() {
        var r;
        let t = ((r = this.config) == null ? void 0 : r.initEndpoint).split("https://")[1], i = "prod";
        t.startsWith("prod") ? i = "prod" : t.startsWith("qa") ? i = "qa" : t.startsWith("dev") && (i = "dev"), this.env = i, He.setEnv(i);
    }
};
var Wi = class {
    constructor(){
        this.TAG = "[WakeLockManager]";
        this.wakeLock = null;
        this.acquireLock = ()=>c(this, null, function*() {
                yield this.requestWakeLock(), document == null || document.addEventListener("visibilitychange", this.visibilityHandler);
            });
        this.cleanup = ()=>c(this, null, function*() {
                if (this.wakeLock && !this.wakeLock.released) try {
                    yield this.wakeLock.release(), l.d(this.TAG, "Wake lock released");
                } catch (e) {
                    let t = e;
                    l.w(this.TAG, "Error while releasing wake lock", `name=${t.name}, message=${t.message}`);
                }
                document == null || document.removeEventListener("visibilitychange", this.visibilityHandler), this.wakeLock = null;
            });
        this.visibilityHandler = ()=>c(this, null, function*() {
                (document == null ? void 0 : document.visibilityState) === "visible" && (!this.wakeLock || this.wakeLock.released) && (l.d(this.TAG, "Re-acquiring wake lock due to visibility change"), yield this.requestWakeLock());
            });
        this.requestWakeLock = ()=>c(this, null, function*() {
                try {
                    if (!("wakeLock" in navigator)) {
                        l.d(this.TAG, "Wake lock feature not supported");
                        return;
                    }
                    this.wakeLock = yield navigator.wakeLock.request("screen"), l.d(this.TAG, "Wake lock acquired");
                } catch (e) {
                    let t = e;
                    l.w(this.TAG, "Error acquiring wake lock", `name=${t.name}, message=${t.message}`);
                }
            });
    }
};
var $i = class {
    constructor(e){
        this.store = e;
        this.bufferSize = 100;
        this.TAG = "[AnalyticsEventsService]";
        this.transport = null;
        this.pendingEvents = [];
        this.level = 1;
    }
    setTransport(e) {
        this.transport = e;
    }
    reset() {
        this.transport = null, this.pendingEvents = [];
    }
    queue(e) {
        if (e.level >= this.level && (this.pendingEvents.push(e), this.pendingEvents.length > this.bufferSize)) {
            let t = this.pendingEvents.shift();
            l.d(this.TAG, "Max buffer size reached", "Removed event to accommodate new events", t);
        }
        return this;
    }
    flushFailedClientEvents() {
        He.flushFailedEvents();
    }
    flush() {
        var e;
        try {
            for(; this.pendingEvents.length > 0;){
                let t = this.pendingEvents.shift();
                t && (t.metadata.peer.peer_id = (e = this.store.getLocalPeer()) == null ? void 0 : e.peerId, t.metadata.userAgent = this.store.getUserAgent(), this.transport && this.transport.transportProvider.isConnected ? this.transport.sendEvent(t) : this.sendClientEventOnHTTP(t));
            }
        } catch (t) {
            l.w(this.TAG, "Flush Failed", t);
        }
    }
    sendClientEventOnHTTP(e) {
        var r, s, o, n;
        let t = this.store.getRoom(), i = this.store.getLocalPeer();
        e.metadata.token = (r = this.store.getConfig()) == null ? void 0 : r.authToken, e.metadata.peer = {
            session_id: t == null ? void 0 : t.sessionId,
            room_id: t == null ? void 0 : t.id,
            room_name: t == null ? void 0 : t.name,
            template_id: t == null ? void 0 : t.templateId,
            joined_at: (s = t == null ? void 0 : t.joinedAt) == null ? void 0 : s.getTime(),
            session_started_at: (o = t == null ? void 0 : t.startedAt) == null ? void 0 : o.getTime(),
            role: (n = i == null ? void 0 : i.role) == null ? void 0 : n.name,
            user_name: i == null ? void 0 : i.name,
            user_data: i == null ? void 0 : i.metadata,
            peer_id: i == null ? void 0 : i.peerId
        }, He.sendEvent(e);
    }
};
var Qa = {
    autoplayFailed: void 0,
    initialized: !1,
    autoplayCheckPromise: void 0
}, Gt = class {
    constructor(e, t, i){
        this.store = e;
        this.deviceManager = t;
        this.eventBus = i;
        this.autoPausedTracks = new Set;
        this.TAG = "[AudioSinkManager]:";
        this.volume = 100;
        this.state = m({}, Qa);
        this.handleAudioPaused = (e)=>c(this, null, function*() {
                l.d(this.TAG, "Audio Paused", e.target.id);
                let t = this.store.getTrackById(e.target.id);
                t && this.autoPausedTracks.add(t);
            });
        this.handleTrackUpdate = ({ track: e })=>{
            l.d(this.TAG, "Track updated", `${e}`);
        };
        this.handleTrackAdd = (r)=>c(this, [
                r
            ], function*({ track: e, peer: t, callListener: i = !0 }) {
                var o, n;
                let s = document.createElement("audio");
                s.style.display = "none", s.id = e.trackId, s.addEventListener("pause", this.handleAudioPaused), s.onerror = ()=>c(this, null, function*() {
                        var u, p;
                        l.e(this.TAG, "error on audio element", s.error);
                        let d = S.TracksErrors.AudioPlaybackError(`Audio playback error for track - ${e.trackId} code - ${(u = s == null ? void 0 : s.error) == null ? void 0 : u.code}`);
                        this.eventBus.analytics.publish(y.audioPlaybackError(d)), ((p = s == null ? void 0 : s.error) == null ? void 0 : p.code) === MediaError.MEDIA_ERR_DECODE && (this.removeAudioElement(s, e), yield J(500), yield this.handleTrackAdd({
                            track: e,
                            peer: t,
                            callListener: !1
                        }), this.state.autoplayFailed || this.eventBus.analytics.publish(y.audioRecovered("Audio recovered after media decode error")));
                    }), e.setAudioElement(s), yield e.setVolume(this.volume), l.d(this.TAG, "Audio track added", `${e}`), this.init(), (o = this.audioSink) == null || o.append(s), this.outputDevice && (yield e.setOutputDevice(this.outputDevice)), s.srcObject = new MediaStream([
                    e.nativeTrack
                ]), i && ((n = this.listener) == null || n.onTrackUpdate(0, e, t)), yield this.handleAutoplayError(e);
            });
        this.handleAutoplayError = (e)=>c(this, null, function*() {
                if (this.state.autoplayFailed === void 0 && (this.state.autoplayCheckPromise || (this.state.autoplayCheckPromise = new Promise((t)=>{
                    this.playAudioFor(e).then(t);
                })), yield this.state.autoplayCheckPromise), this.state.autoplayFailed) {
                    this.autoPausedTracks.add(e);
                    return;
                }
                yield this.playAudioFor(e);
            });
        this.handleAudioDeviceChange = (e)=>c(this, null, function*() {
                e.isUserSelection || e.error || !e.selection || e.type === "video" || (yield this.unpauseAudioTracks());
            });
        this.handleTrackRemove = (e)=>{
            this.autoPausedTracks.delete(e);
            let t = document.getElementById(e.trackId);
            t && this.removeAudioElement(t, e), this.audioSink && this.audioSink.childElementCount === 0 && (this.state.autoplayCheckPromise = void 0, this.state.autoplayFailed = void 0), l.d(this.TAG, "Audio track removed", `${e}`);
        };
        this.unpauseAudioTracks = ()=>c(this, null, function*() {
                let e = [];
                this.autoPausedTracks.forEach((t)=>{
                    e.push(this.playAudioFor(t));
                }), yield Promise.all(e);
            });
        this.removeAudioElement = (e, t)=>{
            e && (l.d(this.TAG, "removing audio element", `${t}`), e.removeEventListener("pause", this.handleAudioPaused), e.srcObject = null, e.remove(), t.setAudioElement(null));
        };
        this.eventBus.audioTrackAdded.subscribe(this.handleTrackAdd), this.eventBus.audioTrackRemoved.subscribe(this.handleTrackRemove), this.eventBus.audioTrackUpdate.subscribe(this.handleTrackUpdate), this.eventBus.deviceChange.subscribe(this.handleAudioDeviceChange), this.eventBus.localVideoUnmutedNatively.subscribe(this.unpauseAudioTracks), this.eventBus.localAudioUnmutedNatively.subscribe(this.unpauseAudioTracks);
    }
    setListener(e) {
        this.listener = e;
    }
    get outputDevice() {
        return this.deviceManager.outputDevice;
    }
    getVolume() {
        return this.volume;
    }
    setVolume(e) {
        return c(this, null, function*() {
            yield this.store.updateAudioOutputVolume(e), this.volume = e;
        });
    }
    unblockAutoplay() {
        return c(this, null, function*() {
            this.autoPausedTracks.size > 0 && (yield this.unpauseAudioTracks()), yield ce.resumeContext();
        });
    }
    init(e) {
        if (this.state.initialized || this.audioSink) return;
        this.state.initialized = !0;
        let t = document.createElement("div");
        t.id = `HMS-SDK-audio-sink-${(0, _uuid.v4)()}`, (e && document.getElementById(e) || document.body).append(t), this.audioSink = t, l.d(this.TAG, "audio sink created", this.audioSink);
    }
    cleanup() {
        var e;
        (e = this.audioSink) == null || e.remove(), this.audioSink = void 0, this.eventBus.audioTrackAdded.unsubscribe(this.handleTrackAdd), this.eventBus.audioTrackRemoved.unsubscribe(this.handleTrackRemove), this.eventBus.audioTrackUpdate.unsubscribe(this.handleTrackUpdate), this.eventBus.deviceChange.unsubscribe(this.handleAudioDeviceChange), this.eventBus.localVideoUnmutedNatively.unsubscribe(this.unpauseAudioTracks), this.eventBus.localAudioUnmutedNatively.unsubscribe(this.unpauseAudioTracks), this.autoPausedTracks = new Set, this.state = m({}, Qa);
    }
    playAudioFor(e) {
        return c(this, null, function*() {
            let t = e.getAudioElement();
            if (!t) {
                l.w(this.TAG, "No audio element found on track", e.trackId);
                return;
            }
            try {
                yield t.play(), this.state.autoplayFailed = !1, this.autoPausedTracks.delete(e), l.d(this.TAG, "Played track", `${e}`);
            } catch (i) {
                this.autoPausedTracks.add(e), l.w(this.TAG, "Failed to play track", `${e}`, i);
                let r = i;
                if (!this.state.autoplayFailed && r.name === "NotAllowedError") {
                    this.state.autoplayFailed = !0;
                    let s = S.TracksErrors.AutoplayBlocked("AUTOPLAY", "");
                    s.addNativeError(r), this.eventBus.analytics.publish(y.autoplayError()), this.eventBus.autoplayError.publish(s);
                }
            }
        });
    }
};
var Ki = class {
    constructor(e){
        this.eventBus = e;
        this.pluginUsage = new Map;
        this.pluginLastAddedAt = new Map;
        this.getPluginUsage = (e)=>{
            if (this.pluginUsage.has(e) || this.pluginUsage.set(e, 0), this.pluginLastAddedAt.has(e)) {
                let i = this.pluginLastAddedAt.get(e) || 0, r = i ? Date.now() - i : 0;
                this.pluginUsage.set(e, (this.pluginUsage.get(e) || 0) + r), this.pluginLastAddedAt.delete(e);
            }
            return this.pluginUsage.get(e);
        };
        this.updatePluginUsageData = (e)=>{
            var i;
            let t = ((i = e.properties) == null ? void 0 : i.plugin_name) || "";
            switch(e.name){
                case "mediaPlugin.toggled.on":
                case "mediaPlugin.added":
                    {
                        let r = e.properties.added_at || Date.now();
                        this.pluginLastAddedAt.set(t, r);
                        break;
                    }
                case "mediaPlugin.toggled.off":
                case "mediaPlugin.stats":
                    if (this.pluginLastAddedAt.has(t)) {
                        let r = e.properties.duration || (Date.now() - (this.pluginLastAddedAt.get(t) || 0)) / 1e3;
                        this.pluginUsage.set(t, (this.pluginUsage.get(t) || 0) + Math.max(r, 0) * 1e3), this.pluginLastAddedAt.delete(t);
                    }
                    break;
                default:
            }
        };
        this.cleanup = ()=>{
            this.pluginLastAddedAt.clear(), this.pluginUsage.clear();
        };
        this.eventBus.analytics.subscribe((t)=>this.updatePluginUsageData(t));
    }
};
var Wt = class {
    constructor(e, t){
        this.store = e;
        this.eventBus = t;
        this.audioInput = [];
        this.audioOutput = [];
        this.videoInput = [];
        this.hasWebcamPermission = !1;
        this.hasMicrophonePermission = !1;
        this.currentSelection = {
            audioInput: void 0,
            videoInput: void 0,
            audioOutput: void 0
        };
        this.TAG = "[Device Manager]:";
        this.initialized = !1;
        this.videoInputChanged = !1;
        this.audioInputChanged = !1;
        this.earpieceSelected = !1;
        this.timer = null;
        this.updateOutputDevice = (e, t)=>c(this, null, function*() {
                let i = this.audioOutput.find((r)=>r.deviceId === e);
                return i && (this.outputDevice = i, yield this.store.updateAudioOutputDevice(i), this.eventBus.analytics.publish(y.deviceChange({
                    isUserSelection: t,
                    selection: {
                        audioOutput: i
                    },
                    devices: this.getDevices(),
                    type: "audioOutput"
                })), X.updateSelection("audioOutput", {
                    deviceId: i.deviceId,
                    groupId: i.groupId
                })), i;
            });
        this.getCurrentSelection = ()=>{
            var o, n;
            let e = this.store.getLocalPeer(), t = this.createIdentifier((o = e == null ? void 0 : e.audioTrack) == null ? void 0 : o.getMediaTrackSettings()), i = this.createIdentifier((n = e == null ? void 0 : e.videoTrack) == null ? void 0 : n.getMediaTrackSettings()), r = this.audioInput.find((d)=>this.createIdentifier(d) === t), s = this.videoInput.find((d)=>this.createIdentifier(d) === i);
            return {
                audioInput: r,
                videoInput: s,
                audioOutput: this.outputDevice
            };
        };
        this.computeChange = (e, t)=>e.length !== t.length ? !0 : t.some((i)=>!e.includes(this.createIdentifier(i)));
        this.enumerateDevices = ()=>c(this, null, function*() {
                try {
                    let e = yield navigator.mediaDevices.enumerateDevices(), t = this.videoInput.map(this.createIdentifier), i = this.audioInput.map(this.createIdentifier);
                    this.audioInput = [], this.audioOutput = [], this.videoInput = [], e.forEach((r)=>{
                        r.kind === "audioinput" && r.label ? (this.hasMicrophonePermission = !0, this.audioInput.push(r)) : r.kind === "audiooutput" ? this.audioOutput.push(r) : r.kind === "videoinput" && r.label && (this.hasWebcamPermission = !0, this.videoInput.push(r));
                    }), this.videoInputChanged = this.computeChange(t, this.videoInput), this.audioInputChanged = this.computeChange(i, this.audioInput), X.setDevices({
                        videoInput: [
                            ...this.videoInput
                        ],
                        audioInput: [
                            ...this.audioInput
                        ],
                        audioOutput: [
                            ...this.audioOutput
                        ]
                    }), this.logDevices("Enumerate Devices");
                } catch (e) {
                    l.e(this.TAG, "Failed enumerating devices", e);
                }
            });
        this.updateToActualDefaultDevice = ()=>c(this, null, function*() {
                var r, s, o, n, d;
                let e = this.store.getLocalPeer();
                if (!((s = (r = this.store.getConfig()) == null ? void 0 : r.settings) == null ? void 0 : s.videoDeviceId) && e != null && e.videoTrack && (yield e.videoTrack.setSettings({
                    deviceId: (o = this.videoInput[0]) == null ? void 0 : o.deviceId
                }, !0)), !((d = (n = this.store.getConfig()) == null ? void 0 : n.settings) == null ? void 0 : d.audioInputDeviceId) && e != null && e.audioTrack) {
                    let u = ()=>{
                        var T;
                        let h = this.audioInput.find((g)=>!g.label.toLowerCase().includes("iphone"));
                        return Hs() && h ? h == null ? void 0 : h.deviceId : (T = this.getNewAudioInputDevice()) == null ? void 0 : T.deviceId;
                    };
                    u() && (yield e.audioTrack.setSettings({
                        deviceId: u()
                    }, !0));
                }
            });
        this.handleDeviceChange = mi(()=>c(this, null, function*() {
                yield this.enumerateDevices(), this.logDevices("After Device Change");
                let e = this.store.getLocalPeer();
                yield this.setOutputDevice(!0), yield this.handleAudioInputDeviceChange(e == null ? void 0 : e.audioTrack), yield this.handleVideoInputDeviceChange(e == null ? void 0 : e.videoTrack), this.eventBus.analytics.publish(y.deviceChange({
                    selection: this.getCurrentSelection(),
                    type: "change",
                    devices: this.getDevices()
                }));
            }), 500).bind(this);
        this.handleAudioInputDeviceChange = (e)=>c(this, null, function*() {
                if (!e) {
                    l.d(this.TAG, "No Audio track on local peer");
                    return;
                }
                if (!this.audioInputChanged) {
                    l.d(this.TAG, "No Change in AudioInput Device");
                    return;
                }
                let t = this.getNewAudioInputDevice();
                if (!t || !t.deviceId) {
                    this.eventBus.analytics.publish(y.deviceChange({
                        selection: {
                            audioInput: t
                        },
                        error: S.TracksErrors.SelectedDeviceMissing("audio"),
                        devices: this.getDevices(),
                        type: "audioInput"
                    })), l.e(this.TAG, "Audio device not found");
                    return;
                }
                let { settings: i } = e, r = new Q().codec(i.codec).maxBitrate(i.maxBitrate).deviceId(t.deviceId).audioMode(i.audioMode).build();
                try {
                    yield e.setSettings(r, !0), this.eventBus.deviceChange.publish({
                        devices: this.getDevices(),
                        selection: t,
                        type: "audioInput"
                    }), this.logDevices("Audio Device Change Success");
                } catch (s) {
                    l.e(this.TAG, "[Audio Device Change]", s), this.eventBus.analytics.publish(y.deviceChange({
                        selection: {
                            audioInput: t
                        },
                        devices: this.getDevices(),
                        type: "audioInput",
                        error: s
                    })), this.eventBus.deviceChange.publish({
                        error: s,
                        selection: t,
                        type: "audioInput",
                        devices: this.getDevices()
                    });
                }
            });
        this.handleVideoInputDeviceChange = (e)=>c(this, null, function*() {
                if (!e) {
                    l.d(this.TAG, "No video track on local peer");
                    return;
                }
                if (!this.videoInputChanged) {
                    l.d(this.TAG, "No Change in VideoInput Device");
                    return;
                }
                let t = this.videoInput[0];
                if (!t || !t.deviceId) {
                    this.eventBus.analytics.publish(y.deviceChange({
                        selection: {
                            videoInput: t
                        },
                        error: S.TracksErrors.SelectedDeviceMissing("video"),
                        devices: this.getDevices(),
                        type: "video"
                    })), l.e(this.TAG, "Video device not found");
                    return;
                }
                let { settings: i } = e, r = new q().codec(i.codec).maxBitrate(i.maxBitrate).maxFramerate(i.maxFramerate).setWidth(i.width).setHeight(i.height).deviceId(t.deviceId).build();
                try {
                    yield e.setSettings(r, !0), this.eventBus.deviceChange.publish({
                        devices: this.getDevices(),
                        selection: t,
                        type: "video"
                    }), this.logDevices("Video Device Change Success");
                } catch (s) {
                    l.e(this.TAG, "[Video Device Change]", s), this.eventBus.analytics.publish(y.deviceChange({
                        selection: {
                            videoInput: t
                        },
                        devices: this.getDevices(),
                        type: "video",
                        error: s
                    })), this.eventBus.deviceChange.publish({
                        error: s,
                        type: "video",
                        selection: t,
                        devices: this.getDevices()
                    });
                }
            });
        this.startPollingForDevices = ()=>c(this, null, function*() {
                let { earpiece: e } = this.categorizeAudioInputDevices();
                e && (this.timer = setTimeout(()=>{
                    c(this, null, function*() {
                        yield this.enumerateDevices(), yield this.autoSelectAudioOutput(), this.startPollingForDevices();
                    });
                }, 5e3));
            });
        this.autoSelectAudioOutput = (e)=>c(this, null, function*() {
                var u, p;
                let { bluetoothDevice: t, earpiece: i, speakerPhone: r, wired: s } = this.categorizeAudioInputDevices(), o = (u = this.store.getLocalPeer()) == null ? void 0 : u.audioTrack;
                if (!o || !i) return;
                let n = this.getManuallySelectedAudioDevice(), d = (n == null ? void 0 : n.deviceId) || (t == null ? void 0 : t.deviceId) || (s == null ? void 0 : s.deviceId) || (r == null ? void 0 : r.deviceId);
                if (!(!e && o.settings.deviceId === d && this.earpieceSelected)) try {
                    (!this.earpieceSelected || e) && ((t == null ? void 0 : t.deviceId) === d ? this.earpieceSelected = !0 : (l.d(this.TAG, "selecting earpiece"), yield o.setSettings({
                        deviceId: i == null ? void 0 : i.deviceId
                    }, !0), e && (yield J(e)), this.earpieceSelected = !0)), yield o.setSettings({
                        deviceId: d
                    }, !0);
                    let h = (p = this.audioInput.find((T)=>T.deviceId === d)) == null ? void 0 : p.groupId;
                    this.eventBus.deviceChange.publish({
                        isUserSelection: !1,
                        type: "audioInput",
                        selection: {
                            deviceId: d,
                            groupId: h
                        },
                        devices: this.getDevices(),
                        internal: !0
                    });
                } catch (h) {
                    this.eventBus.error.publish(h);
                }
            });
        let i = ({ enabled: r, track: s })=>r && s.source === "regular";
        this.eventBus.localVideoEnabled.waitFor(i).then(()=>{
            this.videoInput.length === 0 && this.init(!0);
        }), this.eventBus.localAudioEnabled.waitFor(i).then(()=>{
            this.audioInput.length === 0 && this.init(!0);
        }), this.eventBus.deviceChange.subscribe(({ type: r, isUserSelection: s, selection: o })=>{
            if (s) {
                let n = r === "video" ? "videoInput" : r, d = this[n].find((u)=>this.createIdentifier(u) === this.createIdentifier(o));
                this.eventBus.analytics.publish(y.deviceChange({
                    selection: {
                        [n]: d
                    },
                    devices: this.getDevices(),
                    type: r,
                    isUserSelection: s
                }));
            }
        });
    }
    init(e = !1, t = !0) {
        return c(this, null, function*() {
            this.initialized && !e || (!this.initialized && navigator.mediaDevices.addEventListener("devicechange", this.handleDeviceChange), this.initialized = !0, yield this.enumerateDevices(), e || (yield this.updateToActualDefaultDevice(), this.startPollingForDevices()), yield this.autoSelectAudioOutput(), this.logDevices("Init"), yield this.setOutputDevice(), this.eventBus.deviceChange.publish({
                devices: this.getDevices()
            }), t && this.eventBus.analytics.publish(y.deviceChange({
                selection: this.getCurrentSelection(),
                type: "list",
                devices: this.getDevices()
            })));
        });
    }
    getDevices() {
        return {
            audioInput: this.audioInput,
            audioOutput: this.audioOutput,
            videoInput: this.videoInput
        };
    }
    cleanup() {
        this.timer && (clearTimeout(this.timer), this.timer = null), this.initialized = !1, this.earpieceSelected = !1, this.audioInput = [], this.audioOutput = [], this.videoInput = [], this.outputDevice = void 0, navigator.mediaDevices.removeEventListener("devicechange", this.handleDeviceChange);
    }
    createIdentifier(e) {
        return e ? `${e.deviceId}${e.groupId}` : "";
    }
    getNewAudioInputDevice() {
        var i, r;
        let e = this.getManuallySelectedAudioDevice();
        if (e) return e;
        (r = (i = this.store.getLocalPeer()) == null ? void 0 : i.audioTrack) == null || r.resetManuallySelectedDeviceId();
        let t = this.audioInput.find((s)=>s.deviceId === "default");
        return t ? this.audioInput.find((o)=>o.deviceId !== "default" && t.label.includes(o.label)) : this.audioInput[0];
    }
    setOutputDevice(e = !1) {
        return c(this, null, function*() {
            let t = this.getNewAudioInputDevice(), i = this.createIdentifier(this.outputDevice);
            this.outputDevice = this.getAudioOutputDeviceMatchingInput(t), this.outputDevice || (this.outputDevice = this.audioOutput.find((r)=>this.createIdentifier(r) === i), this.outputDevice || (this.outputDevice = this.audioOutput.find((r)=>r.deviceId === "default") || this.audioOutput[0])), yield this.store.updateAudioOutputDevice(this.outputDevice), e && i !== this.createIdentifier(this.outputDevice) && (this.eventBus.analytics.publish(y.deviceChange({
                selection: {
                    audioOutput: this.outputDevice
                },
                devices: this.getDevices(),
                type: "audioOutput"
            })), this.eventBus.deviceChange.publish({
                selection: this.outputDevice,
                type: "audioOutput",
                devices: this.getDevices()
            }));
        });
    }
    getManuallySelectedAudioDevice() {
        let e = this.store.getLocalPeer(), t = e == null ? void 0 : e.audioTrack;
        return this.audioInput.find((i)=>i.deviceId === (t == null ? void 0 : t.getManuallySelectedDeviceId()));
    }
    categorizeAudioInputDevices() {
        let e = null, t = null, i = null, r = null;
        for (let s of this.audioInput){
            let o = Nr(s.label);
            o === "SPEAKERPHONE" ? t = s : o === "WIRED" ? i = s : o === "BLUETOOTH" ? e = s : o === "EARPIECE" && (r = s);
        }
        return {
            bluetoothDevice: e,
            speakerPhone: t,
            wired: i,
            earpiece: r
        };
    }
    getAudioOutputDeviceMatchingInput(e) {
        var o, n;
        let t = ((n = (o = this.store.getConfig()) == null ? void 0 : o.settings) == null ? void 0 : n.speakerAutoSelectionBlacklist) || [];
        if (t === "all" || !e) return;
        let i = e.label.toLowerCase() || "";
        if (t.some((d)=>i.includes(d.toLowerCase()))) return;
        let r = this.audioOutput.find((d)=>e.deviceId !== "default" && d.label === e.label);
        if (r) return r;
        let s = this.audioOutput.find((d)=>d.groupId === e.groupId);
        if (s && this.audioOutput[0].deviceId === "default" && s.groupId === this.audioOutput[0].groupId) return s;
    }
    logDevices(e = "") {
        l.d(this.TAG, e, JSON.stringify({
            videoInput: [
                ...this.videoInput
            ],
            audioInput: [
                ...this.audioInput
            ],
            audioOutput: [
                ...this.audioOutput
            ],
            selected: this.getCurrentSelection()
        }, null, 4));
    }
};
var qi = class {
    constructor(e, t){
        this.deviceManager = e;
        this.audioSinkManager = t;
    }
    getVolume() {
        return this.audioSinkManager.getVolume();
    }
    setVolume(e) {
        if (e < 0 || e > 100) throw Error("Please pass a valid number between 0-100");
        this.audioSinkManager.setVolume(e);
    }
    getDevice() {
        return this.deviceManager.outputDevice;
    }
    setDevice(e) {
        return this.deviceManager.updateOutputDevice(e, !0);
    }
    unblockAutoplay() {
        return c(this, null, function*() {
            yield this.audioSinkManager.unblockAutoplay(), yield ce.resumeContext();
        });
    }
};
var $t = class {
    static handleError(e) {
        if (e.status === 404) throw S.APIErrors.EndpointUnreachable("FEEDBACK", e.statusText);
        if (e.status >= 400) throw S.APIErrors.ServerErrors(e.status, "FEEDBACK", e == null ? void 0 : e.statusText);
    }
    static sendFeedback(s) {
        return c(this, arguments, function*({ token: e, eventEndpoint: t = "https://event.100ms.live", info: i, feedback: r }) {
            l.d(this.TAG, `sendFeedback: feedbackEndpoint=${t} peerId=${i.peer.peer_id} session=${i.peer.session_id} `);
            let o = new URL("v2/client/feedback", t), n = M(m({}, i), {
                payload: r
            });
            try {
                let d = yield fetch(o, {
                    headers: {
                        Authorization: `Bearer ${e}`
                    },
                    body: JSON.stringify(n),
                    method: "POST"
                });
                try {
                    this.handleError(d);
                    return;
                } catch (u) {
                    throw l.e(this.TAG, "error", u.message, d.status), u instanceof k ? u : S.APIErrors.ServerErrors(d.status, "FEEDBACK", u.message);
                }
            } catch (d) {
                let u = d;
                throw [
                    "Failed to fetch",
                    "NetworkError",
                    "ECONNRESET"
                ].some((p)=>u.message.includes(p)) ? S.APIErrors.EndpointUnreachable("FEEDBACK", u.message) : u;
            }
        });
    }
};
$t.TAG = "[FeedbackService]";
var x = class {
    constructor(e, t){
        this.eventName = e;
        this.eventEmitter = t;
        this.publish = (e)=>{
            this.eventEmitter.emit(this.eventName, e);
        };
        this.subscribe = (e)=>{
            this.eventEmitter.on(this.eventName, e);
        };
        this.subscribeOnce = (e)=>{
            this.eventEmitter.once(this.eventName, e);
        };
        this.unsubscribe = (e)=>{
            this.eventEmitter.off(this.eventName, e);
        };
        this.waitFor = (e)=>this.eventEmitter.waitFor(this.eventName, {
                filter: e
            });
        this.removeAllListeners = ()=>{
            this.eventEmitter.removeAllListeners(this.eventName);
        };
    }
};
var Kt = class {
    constructor(){
        this.eventEmitter = new (0, _eventemitter2.EventEmitter2);
        this.analytics = new x(V.ANALYTICS, this.eventEmitter);
        this.deviceChange = new x(V.DEVICE_CHANGE, this.eventEmitter);
        this.localAudioEnabled = new x(V.LOCAL_AUDIO_ENABLED, this.eventEmitter);
        this.localVideoEnabled = new x(V.LOCAL_VIDEO_ENABLED, this.eventEmitter);
        this.localVideoUnmutedNatively = new x(V.LOCAL_VIDEO_UNMUTED_NATIVELY, this.eventEmitter);
        this.localAudioUnmutedNatively = new x(V.LOCAL_AUDIO_UNMUTED_NATIVELY, this.eventEmitter);
        this.statsUpdate = new x(V.STATS_UPDATE, this.eventEmitter);
        this.trackDegraded = new x(V.TRACK_DEGRADED, this.eventEmitter);
        this.trackRestored = new x(V.TRACK_RESTORED, this.eventEmitter);
        this.trackAudioLevelUpdate = new x(V.TRACK_AUDIO_LEVEL_UPDATE, this.eventEmitter);
        this.audioPluginFailed = new x(V.AUDIO_PLUGIN_FAILED, this.eventEmitter);
        this.localAudioSilence = new x(V.LOCAL_AUDIO_SILENCE, this.eventEmitter);
        this.policyChange = new x(V.POLICY_CHANGE, this.eventEmitter);
        this.localRoleUpdate = new x(V.LOCAL_ROLE_UPDATE, this.eventEmitter);
        this.audioTrackUpdate = new x(V.AUDIO_TRACK_UPDATE, this.eventEmitter);
        this.audioTrackAdded = new x(V.AUDIO_TRACK_ADDED, this.eventEmitter);
        this.audioTrackRemoved = new x(V.AUDIO_TRACK_REMOVED, this.eventEmitter);
        this.autoplayError = new x(V.AUTOPLAY_ERROR, this.eventEmitter);
        this.leave = new x(V.LEAVE, this.eventEmitter);
        this.error = new x(V.ERROR, this.eventEmitter);
    }
};
var ji = class {
    constructor(e, t, i){
        this.store = e;
        this.listener = t;
        this.audioListener = i;
    }
    handleActiveSpeakers(e) {
        var s, o, n;
        let t = e["speaker-list"], i = t.map((d)=>({
                audioLevel: d.level,
                peer: this.store.getPeerById(d.peer_id),
                track: this.store.getTrackById(d.track_id)
            }));
        (s = this.audioListener) == null || s.onAudioLevelUpdate(i), this.store.updateSpeakers(i);
        let r = t[0];
        if (r) {
            let d = this.store.getPeerById(r.peer_id);
            (o = this.listener) == null || o.onPeerUpdate(4, d);
        } else (n = this.listener) == null || n.onPeerUpdate(5, null);
    }
};
var Ji = class {
    constructor(e){
        this.listener = e;
        this.TAG = "[BroadcastManager]";
    }
    handleNotification(e, t) {
        e === "on-broadcast" && this.handleBroadcast(t);
    }
    handleBroadcast(e) {
        var t, i;
        l.d(this.TAG, `Received Message from sender=${(t = e == null ? void 0 : e.peer) == null ? void 0 : t.peer_id}: ${e}`), (i = this.listener) == null || i.onMessageReceived(e);
    }
};
var Qi = class {
    constructor(e, t){
        this.store = e;
        this.listener = t;
    }
    handleQualityUpdate(e) {
        var r;
        let i = e.peers.map((s)=>{
            let o = this.store.getPeerById(s.peer_id);
            return o && o.updateNetworkQuality(s.downlink_score), {
                peerID: s.peer_id,
                downlinkQuality: s.downlink_score
            };
        });
        (r = this.listener) == null || r.onConnectionQualityUpdate(i);
    }
};
var lt = class {
    constructor(e, t, i){
        this.store = e;
        this.eventBus = t;
        this.listener = i;
        this.TAG = "[TrackManager]";
        this.tracksToProcess = new Map;
        this.handleTrackAdd = (e)=>{
            l.d(this.TAG, "ONTRACKADD", `${e}`), this.tracksToProcess.set(e.trackId, e), this.processPendingTracks();
        };
        this.handleTrackRemovedPermanently = (e)=>{
            l.d(this.TAG, "ONTRACKREMOVE permanently", e), Object.keys(e.tracks).forEach((i)=>{
                var n;
                let r = this.store.getTrackState(i);
                if (!r) return;
                let s = this.store.getTrackById(i);
                if (!s) {
                    l.d(this.TAG, "Track not found in store");
                    return;
                }
                s.type === "audio" && this.eventBus.audioTrackRemoved.publish(s), this.store.removeTrack(s);
                let o = this.store.getPeerById(r.peerId);
                o && (this.removePeerTracks(o, s), (n = this.listener) == null || n.onTrackUpdate(1, s, o));
            });
        };
        this.handleTrackLayerUpdate = (e)=>{
            for(let t in e.tracks){
                let i = e.tracks[t], r = this.store.getTrackById(t);
                !r || !this.store.getPeerByTrackId(t) || r instanceof O && this.setLayer(r, i);
            }
        };
        this.handleTrackUpdate = (e, t = !0)=>{
            var s, o;
            let i = this.store.getPeerById(e.peer.peer_id), r = e.peer;
            if (!i && !r) {
                l.d(this.TAG, "Track Update ignored - Peer not added to store");
                return;
            }
            i || (i = ye(r, this.store), this.store.addPeer(i));
            for(let n in e.tracks){
                let d = Object.assign({}, (s = this.store.getTrackState(n)) == null ? void 0 : s.trackInfo), u = e.tracks[n], p = this.store.getTrackById(n);
                if (this.store.setTrackState({
                    peerId: e.peer.peer_id,
                    trackInfo: m(m({}, d), u)
                }), !p || this.tracksToProcess.has(n)) this.processTrackInfo(u, e.peer.peer_id, t), this.processPendingTracks();
                else {
                    p.setEnabled(!u.mute);
                    let h = this.processTrackUpdate(p, d, u);
                    h && ((o = this.listener) == null || o.onTrackUpdate(h, p, i));
                }
            }
        };
        this.processTrackInfo = (e, t, i)=>{};
        this.processPendingTracks = ()=>{
            new Map(this.tracksToProcess).forEach((t)=>{
                var s;
                let i = this.store.getTrackState(t.trackId);
                if (!i) {
                    l.d(this.TAG, "TrackState not added to store", `peerId - ${t.peerId}`, `trackId -${t.trackId}`);
                    return;
                }
                let r = this.store.getPeerById(i.peerId);
                if (!r) {
                    l.d(this.TAG, "Peer not added to store, peerId", i.peerId);
                    return;
                }
                t.source = i.trackInfo.source, t.peerId = r.peerId, t.logIdentifier = r.name, t.setEnabled(!i.trackInfo.mute), this.addAudioTrack(r, t), this.addVideoTrack(r, t), t.type === "audio" ? this.eventBus.audioTrackAdded.publish({
                    track: t,
                    peer: r
                }) : (s = this.listener) == null || s.onTrackUpdate(0, t, r), this.tracksToProcess.delete(t.trackId);
            });
        };
    }
    handleTrackMetadataAdd(e) {
        l.d(this.TAG, "TRACK_METADATA_ADD", JSON.stringify(e, null, 2));
        for(let t in e.tracks){
            let i = e.tracks[t];
            this.store.setTrackState({
                peerId: e.peer.peer_id,
                trackInfo: i
            });
        }
        this.processPendingTracks();
    }
    handleTrackRemove(e, t = !0) {
        var s;
        l.d(this.TAG, "ONTRACKREMOVE", `${e}`);
        let i = this.store.getTrackState(e.trackId);
        if (!i) return;
        if (!this.store.hasTrack(e)) {
            l.d(this.TAG, "Track not found in store");
            return;
        }
        if (t) {
            this.store.removeTrack(e);
            let o = this.store.getPeerById(i.peerId);
            if (!o) return;
            this.removePeerTracks(o, e), (s = this.listener) == null || s.onTrackUpdate(1, e, o), e.type === "audio" && this.eventBus.audioTrackRemoved.publish(e);
        }
    }
    setLayer(e, t) {
        var s, o;
        let i = this.store.getPeerByTrackId(e.trackId);
        if (!i) return;
        e.setLayerFromServer(t) ? (s = this.listener) == null || s.onTrackUpdate(5, e, i) : (o = this.listener) == null || o.onTrackUpdate(6, e, i);
    }
    removePeerTracks(e, t) {
        let i = e.auxiliaryTracks.indexOf(t);
        i > -1 ? (e.auxiliaryTracks.splice(i, 1), l.d(this.TAG, "auxiliary track removed", `${t}`)) : t.type === "audio" && e.audioTrack === t ? (e.audioTrack = void 0, l.d(this.TAG, "audio track removed", `${t}`)) : t.type === "video" && e.videoTrack === t && (e.videoTrack = void 0, l.d(this.TAG, "video track removed", `${t}`));
    }
    addAudioTrack(e, t) {
        var i;
        t.type === "audio" && (t.source === "regular" && (!e.audioTrack || ((i = e.audioTrack) == null ? void 0 : i.trackId) === t.trackId) ? e.audioTrack = t : e.auxiliaryTracks.push(t), this.store.addTrack(t), l.d(this.TAG, "audio track added", `${t}`));
    }
    addVideoTrack(e, t) {
        if (t.type !== "video") return;
        let i = t, r = this.store.getSimulcastDefinitionsForPeer(e, i.source);
        if (i.setSimulcastDefinitons(r), this.addAsPrimaryVideoTrack(e, i)) e.videoTrack ? e.videoTrack.replaceTrack(i) : e.videoTrack = i, this.store.addTrack(e.videoTrack);
        else {
            let s = e.auxiliaryTracks.findIndex((o)=>o.trackId === i.trackId);
            s === -1 ? (e.auxiliaryTracks.push(i), this.store.addTrack(i)) : (e.auxiliaryTracks[s].replaceTrack(i), this.store.addTrack(e.auxiliaryTracks[s]));
        }
        l.d(this.TAG, "video track added", `${t}`);
    }
    addAsPrimaryVideoTrack(e, t) {
        var i;
        return t.source === "regular" && (!e.videoTrack || ((i = e.videoTrack) == null ? void 0 : i.trackId) === t.trackId);
    }
    processTrackUpdate(e, t, i) {
        let r;
        return t.mute !== i.mute ? (r = i.mute ? 2 : 3, e.type === "audio" && this.eventBus.audioTrackUpdate.publish({
            track: e,
            enabled: !i.mute
        })) : t.description !== i.description && (r = 4), r;
    }
};
var zi = class extends lt {
    constructor(t, i, r, s){
        super(t, i, s);
        this.transport = r;
        this.TAG = "[OnDemandTrackManager]";
        this.processTrackInfo = (t, i, r = !0)=>{
            var u, p;
            if (t.type !== "video") return;
            let s = this.store.getPeerById(i);
            if (!s || !this.isPeerRoleSubscribed(i)) {
                l.d(this.TAG, `no peer in store for peerId: ${i}`);
                return;
            }
            let o = new Pe(new MediaStream, this.transport.getSubscribeConnection()), n = be.getEmptyVideoTrack();
            n.enabled = !t.mute;
            let d = new O(o, n, t.source, (u = this.store.getRoom()) == null ? void 0 : u.disableNoneLayerRequest);
            d.setTrackId(t.track_id), d.peerId = s.peerId, d.logIdentifier = s.name, this.addVideoTrack(s, d), r && ((p = this.listener) == null || p.onTrackUpdate(0, s.videoTrack, s));
        };
    }
    handleTrackMetadataAdd(t) {
        super.handleTrackMetadataAdd(t);
        for(let i in t.tracks)t.tracks[i].type === "video" && this.processTrackInfo(t.tracks[i], t.peer.peer_id);
    }
    handleTrackRemove(t) {
        let i = t.type === "video" && t.source === "regular";
        super.handleTrackRemove(t, !i), i && this.processTrackInfo({
            track_id: t.trackId,
            mute: !t.enabled,
            type: t.type,
            source: t.source,
            stream_id: t.stream.id
        }, t.peerId, !1);
    }
    addAsPrimaryVideoTrack(t, i) {
        return i.source !== "regular" ? !1 : !t.videoTrack || t.videoTrack.trackId === i.trackId ? !0 : t.videoTrack.enabled && ve(t.videoTrack.nativeTrack);
    }
    isPeerRoleSubscribed(t) {
        var s, o, n, d;
        if (!t) return !0;
        let i = this.store.getLocalPeer(), r = this.store.getPeerById(t);
        return r && ((d = (o = (s = i == null ? void 0 : i.role) == null ? void 0 : s.subscribeParams) == null ? void 0 : o.subscribeToRoles) == null ? void 0 : d.includes((n = r.role) == null ? void 0 : n.name));
    }
};
var Yi = class {
    constructor(e, t, i, r){
        this.store = e;
        this.peerManager = t;
        this.trackManager = i;
        this.listener = r;
        this.TAG = "[PeerListManager]";
        this.handleInitialPeerList = (e)=>{
            let t = Object.values(e.peers);
            this.peerManager.handlePeerList(t);
        };
        this.handleReconnectPeerList = (e)=>{
            this.handleRepeatedPeerList(e.peers);
        };
        this.handlePreviewRoomState = (e)=>{
            if (!this.store.hasRoleDetailsArrived()) return;
            let t = e.peers;
            if (t == null) {
                e.peer_count === 0 && this.handleRepeatedPeerList({});
                return;
            }
            Object.keys(t).forEach((i)=>{
                t[i].tracks = {}, t[i].is_from_room_state = !0;
            }), this.handleRepeatedPeerList(t);
        };
        this.handleRepeatedPeerList = (e)=>{
            let t = this.store.getRemotePeers(), i = Object.values(e), r = t.filter((o)=>!e[o.peerId]);
            r.length > 0 && l.d(this.TAG, `${r}`), r.forEach((o)=>{
                var d;
                let n = {
                    peer_id: o.peerId,
                    role: ((d = o.role) == null ? void 0 : d.name) || "",
                    info: {
                        name: o.name,
                        data: o.metadata || "",
                        user_id: o.customerUserId || "",
                        type: o.type
                    },
                    tracks: {},
                    groups: [],
                    realtime: o.realtime
                };
                this.peerManager.handlePeerLeave(n);
            });
            let s = [];
            i.forEach((o)=>{
                let n = this.store.getPeerById(o.peer_id), d = Object.values(o.tracks);
                n && (this.store.getPeerTracks(n.peerId).forEach((p)=>{
                    var h;
                    o.tracks[p.trackId] || (this.removePeerTrack(n, p.trackId), (h = this.listener) == null || h.onTrackUpdate(1, p, n));
                }), d.forEach((p)=>{
                    this.store.getTrackById(p.track_id) || this.store.setTrackState({
                        peerId: n.peerId,
                        trackInfo: p
                    });
                }), this.trackManager.handleTrackUpdate({
                    peer: o,
                    tracks: o.tracks
                }, !1), this.peerManager.handlePeerUpdate(o)), s.push(o);
            }), s.length > 0 && this.peerManager.handlePeerList(s);
        };
    }
    handleNotification(e, t, i) {
        if (e === "peer-list") {
            let r = t;
            i ? (l.d(this.TAG, "RECONNECT_PEER_LIST event", JSON.stringify(r, null, 2)), this.handleReconnectPeerList(r)) : (l.d(this.TAG, "PEER_LIST event", JSON.stringify(r, null, 2)), this.handleInitialPeerList(r));
        } else if (e === "room-state") {
            let r = t;
            this.handlePreviewRoomState(r);
        }
    }
    removePeerTrack(e, t) {
        var i, r;
        if (l.d(this.TAG, `removing track - ${t} from ${e}`), ((i = e.audioTrack) == null ? void 0 : i.trackId) === t) e.audioTrack = void 0;
        else if (((r = e.videoTrack) == null ? void 0 : r.trackId) === t) e.videoTrack = void 0;
        else {
            let s = e.auxiliaryTracks.findIndex((o)=>o.trackId === t);
            s >= 0 && e.auxiliaryTracks.splice(s, 1);
        }
    }
};
var L = (a)=>a ? new Date(a) : void 0;
var Xi = class {
    constructor(e, t, i){
        this.store = e;
        this.trackManager = t;
        this.listener = i;
        this.TAG = "[PeerManager]";
        this.handlePeerList = (e)=>{
            var r, s;
            if (e.length === 0) {
                (r = this.listener) == null || r.onPeerUpdate(9, []);
                return;
            }
            let t = [], i = new Set(e.map((o)=>o.peer_id));
            this.store.getRemotePeers().forEach(({ peerId: o, fromRoomState: n })=>{
                !i.has(o) && n && this.store.removePeer(o);
            });
            for (let o of e)t.push(this.makePeer(o));
            (s = this.listener) == null || s.onPeerUpdate(9, t), this.trackManager.processPendingTracks();
        };
        this.handlePeerJoin = (e)=>{
            var i;
            let t = this.makePeer(e);
            (i = this.listener) == null || i.onPeerUpdate(0, t), this.trackManager.processPendingTracks();
        };
        this.handlePeerLeave = (e)=>{
            var i, r, s, o;
            let t = this.store.getPeerById(e.peer_id);
            this.store.removePeer(e.peer_id), l.d(this.TAG, "PEER_LEAVE", e.peer_id, `remainingPeers=${this.store.getPeers().length}`), t && (t.audioTrack && ((i = this.listener) == null || i.onTrackUpdate(1, t.audioTrack, t)), t.videoTrack && ((r = this.listener) == null || r.onTrackUpdate(1, t.videoTrack, t)), (s = t.auxiliaryTracks) == null || s.forEach((n)=>{
                var d;
                (d = this.listener) == null || d.onTrackUpdate(1, n, t);
            }), (o = this.listener) == null || o.onPeerUpdate(1, t));
        };
    }
    handleNotification(e, t) {
        switch(e){
            case "on-peer-join":
                {
                    let i = t;
                    this.handlePeerJoin(i);
                    break;
                }
            case "on-peer-leave":
                {
                    let i = t;
                    this.handlePeerLeave(i);
                    break;
                }
            case "on-peer-update":
                this.handlePeerUpdate(t);
                break;
            default:
                break;
        }
    }
    handlePeerUpdate(e) {
        var s, o, n, d, u;
        let t = this.store.getPeerById(e.peer_id);
        if (!t && e.realtime) {
            t = this.makePeer(e), (s = this.listener) == null || s.onPeerUpdate(t.isHandRaised ? 12 : 14, t);
            return;
        }
        if (t && !t.isLocal && !e.realtime) {
            this.store.removePeer(t.peerId), (o = this.listener) == null || o.onPeerUpdate(13, t);
            return;
        }
        if (!t) {
            l.d(this.TAG, `peer ${e.peer_id} not found`);
            return;
        }
        if (t.role && t.role.name !== e.role) {
            let p = this.store.getPolicyForRole(e.role);
            t.updateRole(p), this.updateSimulcastLayersForPeer(t), (n = this.listener) == null || n.onPeerUpdate(8, t);
        }
        let i = t.isHandRaised;
        t.updateGroups(e.groups);
        let r = (d = e.groups) == null ? void 0 : d.includes(Ae);
        i !== r && ((u = this.listener) == null || u.onPeerUpdate(12, t)), this.handlePeerInfoUpdate(m({
            peer: t
        }, e.info));
    }
    handlePeerInfoUpdate({ peer: e, name: t, data: i }) {
        var r, s;
        e && (t && e.name !== t && (e.updateName(t), (r = this.listener) == null || r.onPeerUpdate(10, e)), i && e.metadata !== i && (e.updateMetadata(i), (s = this.listener) == null || s.onPeerUpdate(11, e)));
    }
    makePeer(e) {
        let t = this.store.getPeerById(e.peer_id);
        t || (t = ye(e, this.store), t.realtime = e.realtime, t.joinedAt = L(e.joined_at), t.fromRoomState = !!e.is_from_room_state, this.store.addPeer(t), l.d(this.TAG, "adding to the peerList", `${t}`));
        for(let i in e.tracks){
            let r = e.tracks[i];
            this.store.setTrackState({
                peerId: e.peer_id,
                trackInfo: r
            }), r.type === "video" && this.trackManager.processTrackInfo(r, e.peer_id, !1);
        }
        return t;
    }
    updateSimulcastLayersForPeer(e) {
        this.store.getPeerTracks(e.peerId).forEach((t)=>{
            if (t.type === "video" && [
                "regular",
                "screen"
            ].includes(t.source)) {
                let i = t, r = this.store.getSimulcastDefinitionsForPeer(e, i.source);
                i.setSimulcastDefinitons(r);
            }
        });
    }
};
var Zi = class {
    constructor(e, t){
        this.store = e;
        this.eventBus = t;
    }
    handlePolicyChange(e) {
        let t = this.store.getLocalPeer();
        if (t && !t.role) {
            let r = e.known_roles[e.name];
            t.updateRole(r);
        }
        this.store.setKnownRoles(e);
        let i = this.store.getRoom();
        i ? i.templateId = e.template_id : l.w("[PolicyChangeManager]", "on policy change - room not present"), this.updateLocalPeerRole(e), this.eventBus.policyChange.publish(e);
    }
    updateLocalPeerRole(e) {
        var i;
        let t = this.store.getLocalPeer();
        if (t != null && t.role && t.role.name !== e.name) {
            let r = this.store.getPolicyForRole(e.name), s = t.role;
            t.updateRole(r), r.name === ((i = t.asRole) == null ? void 0 : i.name) && delete t.asRole, this.eventBus.localRoleUpdate.publish({
                oldRole: s,
                newRole: r
            });
        }
    }
};
var ns = ((f)=>(f.FLAG_SERVER_SUB_DEGRADATION = "subscribeDegradation", f.FLAG_SERVER_SIMULCAST = "simulcast", f.FLAG_NON_WEBRTC_DISABLE_OFFER = "nonWebRTCDisableOffer", f.FLAG_PUBLISH_STATS = "publishStats", f.FLAG_SUBSCRIBE_STATS = "subscribeStats", f.FLAG_ON_DEMAND_TRACKS = "onDemandTracks", f.FLAG_DISABLE_VIDEO_TRACK_AUTO_UNSUBSCRIBE = "disableVideoTrackAutoUnsubscribe", f.FLAG_WHITEBOARD_ENABLED = "whiteboardEnabled", f.FLAG_EFFECTS_SDK_ENABLED = "effectsSDKEnabled", f.FLAG_VB_ENABLED = "vb", f.FLAG_HIPAA_ENABLED = "hipaa", f.FLAG_NOISE_CANCELLATION = "noiseCancellation", f.FLAG_SCALE_SCREENSHARE_BASED_ON_PIXELS = "scaleScreenshareBasedOnPixels", f.FLAG_DISABLE_NONE_LAYER_REQUEST = "disableNoneLayerRequest", f))(ns || {});
var qt = (a, e, t)=>{
    let i = t === "qa" ? aa : sa, r = new URL(i);
    return r.searchParams.set("endpoint", `https://${e}`), r.searchParams.set("token", a), r.toString();
};
var er = class {
    constructor(e, t, i){
        this.transport = e;
        this.store = t;
        this.listener = i;
        this.TAG = "[HMSWhiteboardInteractivityCenter]";
    }
    get isEnabled() {
        return this.transport.isFlagEnabled("whiteboardEnabled");
    }
    open(e) {
        return c(this, null, function*() {
            var o;
            if (!this.isEnabled) return l.w(this.TAG, "Whiteboard is not enabled for customer");
            let t = this.store.getWhiteboard(e == null ? void 0 : e.id), i = t == null ? void 0 : t.id;
            if (t || (i = (yield this.transport.signal.createWhiteboard(this.getCreateOptionsWithDefaults(e))).id), !i) throw new Error(`Whiteboard ID: ${i} not found`);
            let r = yield this.transport.signal.getWhiteboard({
                id: i
            }), s = M(m({}, t), {
                title: e == null ? void 0 : e.title,
                attributes: e == null ? void 0 : e.attributes,
                id: r.id,
                url: qt(r.token, r.addr, this.store.getEnv()),
                token: r.token,
                addr: r.addr,
                owner: r.owner,
                permissions: r.permissions || [],
                open: !0
            });
            this.store.setWhiteboard(s), (o = this.listener) == null || o.onWhiteboardUpdate(s);
        });
    }
    close(e) {
        return c(this, null, function*() {
            var r;
            if (!this.isEnabled) return l.w(this.TAG, "Whiteboard is not enabled for customer");
            let t = this.store.getWhiteboard(e);
            if (!t) throw new Error(`Whiteboard ID: ${e} not found`);
            let i = {
                id: t.id,
                title: t.title,
                open: !1
            };
            this.store.setWhiteboard(i), (r = this.listener) == null || r.onWhiteboardUpdate(i);
        });
    }
    setListener(e) {
        this.listener = e;
    }
    handleLocalRoleUpdate() {
        return c(this, null, function*() {
            var t, i, r;
            let e = this.store.getWhiteboards();
            for (let s of e.values())if (s.url) {
                let o = yield this.transport.signal.getWhiteboard({
                    id: s.id
                }), n = this.store.getLocalPeer(), u = (n == null ? void 0 : n.customerUserId) === o.owner ? (i = (t = n.role) == null ? void 0 : t.permissions.whiteboard) == null ? void 0 : i.includes("admin") : o.permissions.length > 0, p = M(m({}, s), {
                    id: o.id,
                    url: qt(o.token, o.addr, this.store.getEnv()),
                    token: o.token,
                    addr: o.addr,
                    owner: o.owner,
                    permissions: o.permissions,
                    open: u
                });
                this.store.setWhiteboard(p), (r = this.listener) == null || r.onWhiteboardUpdate(p);
            }
        });
    }
    getCreateOptionsWithDefaults(e) {
        var o;
        let t = Object.values(this.store.getKnownRoles()), i = [], r = [], s = [];
        return t.forEach((n)=>{
            var d, u, p;
            (d = n.permissions.whiteboard) != null && d.includes("read") && i.push(n.name), (u = n.permissions.whiteboard) != null && u.includes("write") && r.push(n.name), (p = n.permissions.whiteboard) != null && p.includes("admin") && s.push(n.name);
        }), {
            title: (e == null ? void 0 : e.title) || `${(o = this.store.getRoom()) == null ? void 0 : o.id} Whiteboard`,
            reader: (e == null ? void 0 : e.reader) || i,
            writer: (e == null ? void 0 : e.writer) || r,
            admin: (e == null ? void 0 : e.admin) || s
        };
    }
};
var jt = class {
    constructor(e, t, i){
        this.transport = e;
        this.store = t;
        this.listener = i;
        this.whiteboard = new er(e, t, i);
    }
    setListener(e) {
        this.listener = e, this.whiteboard.setListener(e);
    }
    createPoll(e) {
        return c(this, null, function*() {
            var o, n;
            let t = {
                customerID: "userid",
                peerID: "peerid",
                userName: "username"
            }, { poll_id: i } = yield this.transport.signal.setPollInfo(M(m({}, e), {
                mode: e.mode ? t[e.mode] : void 0,
                poll_id: e.id,
                vote: e.rolesThatCanVote,
                responses: e.rolesThatCanViewResponses
            }));
            e.id || (e.id = i), Array.isArray(e.questions) && (yield this.addQuestionsToPoll(e.id, e.questions));
            let r = yield this.transport.signal.getPollQuestions({
                poll_id: e.id,
                index: 0,
                count: 50
            }), s = tr(M(m({}, e), {
                poll_id: e.id,
                state: "created",
                created_by: (o = this.store.getLocalPeer()) == null ? void 0 : o.peerId
            }));
            s.questions = r.questions.map(({ question: d, options: u, answer: p })=>M(m({}, d), {
                    options: u,
                    answer: p
                })), (n = this.listener) == null || n.onPollsUpdate(0, [
                s
            ]);
        });
    }
    startPoll(e) {
        return c(this, null, function*() {
            typeof e == "string" ? yield this.transport.signal.startPoll({
                poll_id: e
            }) : (yield this.createPoll(e), yield this.transport.signal.startPoll({
                poll_id: e.id
            }));
        });
    }
    addQuestionsToPoll(e, t) {
        return c(this, null, function*() {
            t.length > 0 && (yield this.transport.signal.setPollQuestions({
                poll_id: e,
                questions: t.map((i, r)=>this.createQuestionSetParams(i, r))
            }));
        });
    }
    stopPoll(e) {
        return c(this, null, function*() {
            yield this.transport.signal.stopPoll({
                poll_id: e
            });
        });
    }
    addResponsesToPoll(e, t) {
        return c(this, null, function*() {
            let i = this.store.getPoll(e);
            if (!i) throw new Error("Invalid poll ID - Poll not found");
            let r = t.map((s)=>{
                var n, d;
                let o = this.getQuestionInPoll(i, s.questionIndex);
                return o.type === "single-choice" ? (s.option = s.option || ((n = s.options) == null ? void 0 : n[0]) || -1, delete s.text, delete s.options) : o.type === "multiple-choice" ? ((d = s.options) == null || d.sort(), delete s.text, delete s.option) : (delete s.option, delete s.options), s.skipped && (delete s.option, delete s.options, delete s.text), m({
                    duration: 0,
                    type: o.type,
                    question: s.questionIndex
                }, s);
            });
            yield this.transport.signal.setPollResponses({
                poll_id: e,
                responses: r
            });
        });
    }
    fetchLeaderboard(e, t, i) {
        return c(this, null, function*() {
            var p, h;
            let r = this.store.getPoll(e);
            if (!r) throw new Error("Invalid poll ID - Poll not found");
            let s = (h = (p = this.store.getLocalPeer()) == null ? void 0 : p.role) == null ? void 0 : h.permissions, o = !!(s != null && s.pollRead || s != null && s.pollWrite);
            if (r.anonymous || r.state !== "stopped" || !o) return {
                entries: [],
                hasNext: !1
            };
            let n = yield this.transport.signal.fetchPollLeaderboard({
                poll_id: r.id,
                count: i,
                offset: t
            }), d = {
                avgScore: n.avg_score,
                avgTime: n.avg_time,
                votedUsers: n.voted_users,
                totalUsers: n.total_users,
                correctUsers: n.correct_users
            };
            return {
                entries: n.questions.map((T)=>({
                        position: T.position,
                        totalResponses: T.total_responses,
                        correctResponses: T.correct_responses,
                        duration: T.duration,
                        peer: T.peer,
                        score: T.score
                    })),
                hasNext: !n.last,
                summary: d
            };
        });
    }
    getPollResponses(e, t) {
        return c(this, null, function*() {
            var s, o;
            let i = yield this.transport.signal.getPollResponses({
                poll_id: e.id,
                index: 0,
                count: 50,
                self: t
            }), r = JSON.parse(JSON.stringify(e));
            (s = i.responses) == null || s.forEach(({ response: n, peer: d, final: u })=>{
                var h, T;
                let p = (h = e == null ? void 0 : e.questions) == null ? void 0 : h.find((g)=>g.index === n.question);
                if (p) {
                    let g = {
                        id: n.response_id,
                        questionIndex: n.question,
                        option: n.option,
                        options: n.options,
                        text: n.text,
                        responseFinal: u,
                        peer: {
                            peerid: d.peerid,
                            userHash: d.hash,
                            userid: d.userid,
                            username: d.username
                        },
                        skipped: n.skipped,
                        type: n.type,
                        update: n.update
                    }, f = p.responses && !t ? [
                        ...p.responses
                    ] : [];
                    (T = r.questions) != null && T[n.question - 1] && (r.questions[n.question - 1].responses = [
                        ...f,
                        g
                    ]);
                }
            }), this.store.setPoll(r), (o = this.listener) == null || o.onPollsUpdate(4, [
                r
            ]);
        });
    }
    getPolls() {
        return c(this, null, function*() {
            var s, o, n;
            let e = yield this.transport.signal.getPollsList({
                count: 50,
                state: "started"
            }), t = [], i = (o = (s = this.store.getLocalPeer()) == null ? void 0 : s.role) == null ? void 0 : o.permissions.pollWrite, r = [
                ...e.polls
            ];
            if (i) {
                let d = yield this.transport.signal.getPollsList({
                    count: 50,
                    state: "created"
                }), u = yield this.transport.signal.getPollsList({
                    count: 50,
                    state: "stopped"
                });
                r = [
                    ...d.polls,
                    ...r,
                    ...u.polls
                ];
            }
            for (let d of r){
                let u = yield this.transport.signal.getPollQuestions({
                    poll_id: d.poll_id,
                    index: 0,
                    count: 50
                }), p = tr(d), h = this.store.getPoll(d.poll_id);
                p.questions = u.questions.map(({ question: T, options: g, answer: f }, E)=>{
                    var v, R;
                    return M(m({}, T), {
                        options: g,
                        answer: f,
                        responses: (R = (v = h == null ? void 0 : h.questions) == null ? void 0 : v[E]) == null ? void 0 : R.responses
                    });
                }), t.push(p), this.store.setPoll(p);
            }
            return (n = this.listener) == null || n.onPollsUpdate(3, t), t;
        });
    }
    createQuestionSetParams(e, t) {
        var o, n;
        if (e.index) {
            let d = (o = e.options) == null ? void 0 : o.map((u, p)=>M(m({}, u), {
                    index: p + 1
                }));
            return {
                question: M(m({}, e), {
                    index: t + 1
                }),
                options: d,
                answer: e.answer
            };
        }
        let i = M(m({}, e), {
            index: t + 1
        }), r, s = e.answer || {
            hidden: !1
        };
        return Array.isArray(e.options) && [
            "single-choice",
            "multiple-choice"
        ].includes(e.type) ? (r = (n = e.options) == null ? void 0 : n.map((d, u)=>({
                index: u + 1,
                text: d.text,
                weight: d.weight
            })), e.type === "single-choice" ? s.option = e.options.findIndex((d)=>d.isCorrectAnswer) + 1 || void 0 : s.options = e.options.map((d, u)=>d.isCorrectAnswer ? u + 1 : void 0).filter((d)=>!!d)) : (s == null || delete s.options, s == null || delete s.option), {
            question: i,
            options: r,
            answer: s
        };
    }
    getQuestionInPoll(e, t) {
        var r;
        let i = (r = e == null ? void 0 : e.questions) == null ? void 0 : r.find((s)=>s.index === t);
        if (!i) throw new Error("Invalid question index - Question not found in poll");
        return i;
    }
}, tr = (a)=>{
    let e = {
        userid: "customerID",
        peerid: "peerID",
        username: "userName"
    };
    return {
        id: a.poll_id,
        title: a.title,
        startedBy: a.started_by,
        createdBy: a.created_by,
        anonymous: a.anonymous,
        type: a.type,
        duration: a.duration,
        locked: a.locked,
        mode: a.mode ? e[a.mode] : void 0,
        visibility: a.visibility,
        rolesThatCanVote: a.vote || [],
        rolesThatCanViewResponses: a.responses || [],
        state: a.state,
        stoppedBy: a.stopped_by,
        startedAt: L(a.started_at),
        stoppedAt: L(a.stopped_at),
        createdAt: L(a.created_at)
    };
};
var ir = class {
    constructor(e, t, i){
        this.store = e;
        this.transport = t;
        this.listener = i;
    }
    handleNotification(e, t) {
        switch(e){
            case "on-poll-start":
                this.handlePollStart(t);
                break;
            case "on-poll-stop":
                this.handlePollStop(t);
                break;
            case "on-poll-stats":
                this.handlePollStats(t);
                break;
            default:
                break;
        }
    }
    handlePollStart(e) {
        return c(this, null, function*() {
            var i, r;
            let t = [];
            for (let s of e.polls){
                let o = this.store.getPoll(s.poll_id);
                if (o && o.state === "started") {
                    (i = this.listener) == null || i.onPollsUpdate(1, [
                        o
                    ]);
                    return;
                }
                let n = yield this.transport.signal.getPollQuestions({
                    poll_id: s.poll_id,
                    index: 0,
                    count: 50
                }), d = tr(s);
                d.questions = n.questions.map(({ question: u, options: p, answer: h })=>M(m({}, u), {
                        options: p,
                        answer: h
                    })), yield this.updatePollResponses(d, !0), t.push(d), this.store.setPoll(d);
            }
            (r = this.listener) == null || r.onPollsUpdate(1, t);
        });
    }
    handlePollStop(e) {
        return c(this, null, function*() {
            var i;
            let t = [];
            for (let r of e.polls){
                let s = this.store.getPoll(r.poll_id);
                if (s) {
                    s.state = "stopped", s.stoppedAt = L(r.stopped_at), s.stoppedBy = r.stopped_by;
                    let o = yield this.transport.signal.getPollResult({
                        poll_id: r.poll_id
                    });
                    this.updatePollResult(s, o), t.push(s);
                }
            }
            t.length > 0 && ((i = this.listener) == null || i.onPollsUpdate(2, t));
        });
    }
    handlePollStats(e) {
        return c(this, null, function*() {
            var i;
            let t = [];
            for (let r of e.polls){
                let s = this.store.getPoll(r.poll_id);
                if (!s) return;
                this.updatePollResult(s, r), t.push(s);
            }
            t.length > 0 && ((i = this.listener) == null || i.onPollsUpdate(4, t));
        });
    }
    updatePollResult(e, t) {
        var i;
        e.result = m({}, e.result), e.result.totalUsers = t.user_count, e.result.maxUsers = t.max_user, e.result.totalResponses = t.total_response, (i = t.questions) == null || i.forEach((r)=>{
            var o, n;
            let s = (o = e.questions) == null ? void 0 : o.find((d)=>d.index === r.question);
            s && (s.result = m({}, s.result), s.result.correctResponses = r.correct, s.result.skippedCount = r.skipped, s.result.totalResponses = r.total, (n = r.options) == null || n.forEach((d, u)=>{
                var h;
                let p = (h = s.options) == null ? void 0 : h[u];
                p && p.voteCount !== d && (p.voteCount = d);
            }));
        });
    }
    updatePollResponses(e, t) {
        return c(this, null, function*() {
            var r;
            (r = (yield this.transport.signal.getPollResponses({
                poll_id: e.id,
                index: 0,
                count: 50,
                self: t
            })).responses) == null || r.forEach(({ response: s, peer: o, final: n })=>{
                var p;
                let d = (p = e == null ? void 0 : e.questions) == null ? void 0 : p.find((h)=>h.index === s.question);
                if (!d) return;
                let u = {
                    id: s.response_id,
                    questionIndex: s.question,
                    option: s.option,
                    options: s.options,
                    text: s.text,
                    responseFinal: n,
                    peer: {
                        peerid: o.peerid,
                        userHash: o.hash,
                        userid: o.userid,
                        username: o.username
                    },
                    skipped: s.skipped,
                    type: s.type,
                    update: s.update
                };
                Array.isArray(d.responses) && d.responses.length > 0 ? d.responses.find(({ id: h })=>h === u.id) || d.responses.push(u) : d.responses = [
                    u
                ];
            });
        });
    }
};
var rr = class {
    constructor(e, t){
        this.store = e;
        this.listener = t;
    }
    handleNotification(e, t) {
        switch(e){
            case "on-role-change-request":
                this.handleRoleChangeRequest(t);
                break;
            case "on-track-update-request":
                this.handleTrackUpdateRequest(t);
                break;
            case "on-change-track-mute-state-request":
                this.handleChangeTrackStateRequest(t);
                break;
            default:
                return;
        }
    }
    handleRoleChangeRequest(e) {
        var i;
        let t = {
            requestedBy: e.requested_by ? this.store.getPeerById(e.requested_by) : void 0,
            role: this.store.getPolicyForRole(e.role),
            token: e.token
        };
        (i = this.listener) == null || i.onRoleChangeRequest(t);
    }
    handleTrackUpdateRequest(e) {
        let { requested_by: t, track_id: i, mute: r } = e, s = t ? this.store.getPeerById(t) : void 0, o = this.store.getLocalPeerTracks().find((d)=>d.publishedTrackId === i);
        if (!o) return;
        let n = ()=>{
            var d;
            (d = this.listener) == null || d.onChangeTrackStateRequest({
                requestedBy: s,
                track: o,
                enabled: !r
            });
        };
        if (r) {
            if (o.enabled === !r) return;
            o.setEnabled(!r).then(n);
        } else n();
    }
    handleChangeTrackStateRequest(e) {
        var u;
        let { type: t, source: i, value: r, requested_by: s } = e, o = s ? this.store.getPeerById(s) : void 0, n = !r, d = this.getTracksToBeUpdated({
            type: t,
            source: i,
            enabled: n
        });
        if (d.length !== 0) {
            if (n) (u = this.listener) == null || u.onChangeMultiTrackStateRequest({
                requestedBy: o,
                tracks: d,
                type: t,
                source: i,
                enabled: !0
            });
            else {
                let p = [];
                for (let h of d)p.push(h.setEnabled(!1));
                Promise.all(p).then(()=>{
                    var h;
                    (h = this.listener) == null || h.onChangeMultiTrackStateRequest({
                        requestedBy: o,
                        tracks: d,
                        enabled: !1
                    });
                });
            }
        }
    }
    getTracksToBeUpdated({ type: e, source: t, enabled: i }) {
        let s = this.store.getLocalPeerTracks();
        return e && (s = s.filter((o)=>o.type === e)), t && (s = s.filter((o)=>o.source === t)), s.filter((o)=>o.enabled !== i);
    }
};
var sr = class {
    constructor(e, t){
        this.store = e;
        this.listener = t;
        this.TAG = "[RoomUpdateManager]";
    }
    handleNotification(e, t) {
        switch(e){
            case "peer-list":
                this.onRoomState(t.room);
                break;
            case "on-rtmp-update":
                this.updateRTMPStatus(t);
                break;
            case "on-record-update":
                this.updateRecordingStatus(t);
                break;
            case "room-state":
                this.handlePreviewRoomState(t);
                break;
            case "room-info":
                this.handleRoomInfo(t);
                break;
            case "session-info":
                this.handleSessionInfo(t);
                break;
            case "on-hls-update":
                this.updateHLSStatus(t);
                break;
            case "on-transcription-update":
                this.handleTranscriptionStatus([
                    t
                ]);
                break;
            default:
                break;
        }
    }
    handleRoomInfo(e) {
        let t = this.store.getRoom();
        if (!t) {
            l.w(this.TAG, "on session info - room not present");
            return;
        }
        t.description = e.description, t.large_room_optimization = e.large_room_optimization, t.max_size = e.max_size, t.name = e.name;
    }
    handleSessionInfo(e) {
        var i;
        let t = this.store.getRoom();
        if (!t) {
            l.w(this.TAG, "on session info - room not present");
            return;
        }
        t.sessionId = e.session_id, t.peerCount !== e.peer_count && (t.peerCount = e.peer_count, (i = this.listener) == null || i.onRoomUpdate("ROOM_PEER_COUNT_UPDATED", t));
    }
    handlePreviewRoomState(e) {
        let { room: t } = e;
        this.onRoomState(t);
    }
    onRoomState(e) {
        var u, p, h, T;
        let { recording: t, streaming: i, transcriptions: r, session_id: s, started_at: o, name: n } = e, d = this.store.getRoom();
        if (!d) {
            l.w(this.TAG, "on room state - room not present");
            return;
        }
        d.name = n, d.rtmp.running = this.isStreamingRunning((u = i == null ? void 0 : i.rtmp) == null ? void 0 : u.state), d.rtmp.startedAt = L((p = i == null ? void 0 : i.rtmp) == null ? void 0 : p.started_at), d.rtmp.state = (h = i == null ? void 0 : i.rtmp) == null ? void 0 : h.state, d.recording.server = this.getPeerListSFURecording(t), d.recording.browser = this.getPeerListBrowserRecording(t), d.recording.hls = this.getPeerListHLSRecording(t), d.hls = this.convertHls(i == null ? void 0 : i.hls), d.transcriptions = this.addTranscriptionDetail(r), d.sessionId = s, d.startedAt = L(o), (T = this.listener) == null || T.onRoomUpdate("RECORDING_STATE_UPDATED", d);
    }
    addTranscriptionDetail(e) {
        return e ? e.map((t)=>({
                state: t.state,
                mode: t.mode,
                initialised_at: L(t.initialised_at),
                started_at: L(t.started_at),
                stopped_at: L(t.stopped_at),
                updated_at: L(t.updated_at),
                error: this.toSdkError(t == null ? void 0 : t.error)
            })) : [];
    }
    isRecordingRunning(e) {
        return e ? ![
            "none",
            "paused",
            "stopped",
            "failed"
        ].includes(e) : !1;
    }
    isStreamingRunning(e) {
        return e ? ![
            "none",
            "stopped",
            "failed"
        ].includes(e) : !1;
    }
    initHLS(e) {
        let t = this.store.getRoom(), i = {
            running: !0,
            variants: []
        };
        return t ? (e != null && e.variants && e.variants.forEach((r, s)=>{
            var o, n, d;
            r.state !== "initialised" ? i.variants.push({
                meetingURL: r == null ? void 0 : r.meetingURL,
                url: r == null ? void 0 : r.url,
                metadata: r == null ? void 0 : r.metadata,
                playlist_type: r == null ? void 0 : r.playlist_type,
                startedAt: L((o = e == null ? void 0 : e.variants) == null ? void 0 : o[s].started_at),
                initialisedAt: L((n = e == null ? void 0 : e.variants) == null ? void 0 : n[s].initialised_at),
                state: r.state,
                stream_type: r == null ? void 0 : r.stream_type
            }) : i.variants.push({
                initialisedAt: L((d = e == null ? void 0 : e.variants) == null ? void 0 : d[s].initialised_at),
                url: ""
            });
        }), i) : (l.w(this.TAG, "on hls - room not present"), i);
    }
    updateHLSStatus(e) {
        var r;
        let t = this.store.getRoom(), i = e.variants && e.variants.length > 0 ? e.variants.some((s)=>this.isStreamingRunning(s.state)) : !1;
        if (!t) {
            l.w(this.TAG, "on hls - room not present");
            return;
        }
        e.enabled = i, t.hls = this.convertHls(e), (r = this.listener) == null || r.onRoomUpdate("HLS_STREAMING_STATE_UPDATED", t);
    }
    handleTranscriptionStatus(e) {
        var i;
        let t = this.store.getRoom();
        if (!t) {
            l.w(this.TAG, "on transcription - room not present");
            return;
        }
        t.transcriptions = this.addTranscriptionDetail(e) || [], (i = this.listener) == null || i.onRoomUpdate("TRANSCRIPTION_STATE_UPDATED", t);
    }
    convertHls(e) {
        var r;
        if (e != null && e.variants && e.variants.length > 0 ? e.variants.some((s)=>s.state === "initialised") : !1) return this.initHLS(e);
        let i = {
            running: !!(e != null && e.enabled),
            variants: [],
            error: this.toSdkError(e == null ? void 0 : e.error)
        };
        return (r = e == null ? void 0 : e.variants) == null || r.forEach((s)=>{
            i.variants.push({
                meetingURL: s == null ? void 0 : s.meeting_url,
                url: s == null ? void 0 : s.url,
                metadata: s == null ? void 0 : s.metadata,
                playlist_type: s == null ? void 0 : s.playlist_type,
                startedAt: L(s == null ? void 0 : s.started_at),
                initialisedAt: L(s == null ? void 0 : s.initialised_at),
                state: s.state,
                stream_type: s == null ? void 0 : s.stream_type
            });
        }), i;
    }
    getHLSRecording(e) {
        var r, s;
        let t = {
            running: !1
        }, i = this.isRecordingRunning(e == null ? void 0 : e.state);
        return (i || (e == null ? void 0 : e.state) === "paused") && (t = {
            running: i,
            singleFilePerLayer: !!((r = e == null ? void 0 : e.hls_recording) != null && r.single_file_per_layer),
            hlsVod: !!((s = e == null ? void 0 : e.hls_recording) != null && s.hls_vod),
            startedAt: L(e == null ? void 0 : e.started_at),
            initialisedAt: L(e == null ? void 0 : e.initialised_at),
            state: e == null ? void 0 : e.state,
            error: this.toSdkError(e == null ? void 0 : e.error)
        }), t;
    }
    getPeerListHLSRecording(e) {
        var r, s;
        let t = e == null ? void 0 : e.hls;
        return {
            running: this.isRecordingRunning(t == null ? void 0 : t.state),
            startedAt: L(t == null ? void 0 : t.started_at),
            initialisedAt: L(t == null ? void 0 : t.initialised_at),
            state: t == null ? void 0 : t.state,
            singleFilePerLayer: (r = t == null ? void 0 : t.config) == null ? void 0 : r.single_file_per_layer,
            hlsVod: (s = t == null ? void 0 : t.config) == null ? void 0 : s.hls_vod
        };
    }
    getPeerListBrowserRecording(e) {
        let t = e == null ? void 0 : e.browser;
        return {
            running: this.isRecordingRunning(t == null ? void 0 : t.state),
            startedAt: L(t == null ? void 0 : t.started_at),
            state: t == null ? void 0 : t.state
        };
    }
    getPeerListSFURecording(e) {
        let t = e == null ? void 0 : e.sfu;
        return {
            running: this.isRecordingRunning(t == null ? void 0 : t.state),
            startedAt: L(t == null ? void 0 : t.started_at),
            state: t == null ? void 0 : t.state
        };
    }
    updateRecordingStatus(e) {
        var s;
        let t = this.store.getRoom(), i = this.isRecordingRunning(e.state);
        if (!t) {
            l.w(this.TAG, `set recording status running=${i} - room not present`);
            return;
        }
        let r;
        e.type === "sfu" ? (t.recording.server = {
            running: i,
            startedAt: i ? L(e.started_at) : void 0,
            error: this.toSdkError(e.error),
            state: e.state
        }, r = "SERVER_RECORDING_STATE_UPDATED") : e.type === "HLS" ? (t.recording.hls = this.getHLSRecording(e), r = "RECORDING_STATE_UPDATED") : (t.recording.browser = {
            running: i,
            startedAt: i ? L(e.started_at) : void 0,
            error: this.toSdkError(e.error),
            state: e == null ? void 0 : e.state
        }, r = "BROWSER_RECORDING_STATE_UPDATED"), (s = this.listener) == null || s.onRoomUpdate(r, t);
    }
    updateRTMPStatus(e) {
        var r, s;
        let t = this.store.getRoom(), i = this.isStreamingRunning(e.state);
        if (!t) {
            l.w(this.TAG, "on policy change - room not present");
            return;
        }
        if (!i) {
            t.rtmp = {
                running: i,
                state: e.state,
                error: this.toSdkError(e.error)
            }, (r = this.listener) == null || r.onRoomUpdate("RTMP_STREAMING_STATE_UPDATED", t);
            return;
        }
        t.rtmp = {
            running: i,
            startedAt: i ? L(e.started_at) : void 0,
            state: e.state,
            error: this.toSdkError(e.error)
        }, (s = this.listener) == null || s.onRoomUpdate("RTMP_STREAMING_STATE_UPDATED", t);
    }
    toSdkError(e) {
        if (!(e != null && e.code)) return;
        let t = e.message || "error in streaming/recording", i = new k(e.code, "ServerErrors", "NONE", t, t);
        return l.e(this.TAG, "error in streaming/recording", i), i;
    }
};
var ar = class {
    constructor(e, t){
        this.store = e;
        this.listener = t;
    }
    handleNotification(e, t) {
        e === "on-metadata-change" && this.handleMetadataChange(t);
    }
    handleMetadataChange(e) {
        var i;
        let t = e.values.map((r)=>({
                key: r.key,
                value: r.data,
                updatedAt: L(r.updated_at),
                updatedBy: r.updated_by ? this.store.getPeerById(r.updated_by) : void 0
            }));
        (i = this.listener) == null || i.onSessionStoreUpdate(t);
    }
};
var or = class {
    constructor(e, t, i){
        this.store = e;
        this.transport = t;
        this.listener = i;
    }
    handleNotification(e, t) {
        switch(e){
            case "on-whiteboard-update":
                this.handleWhiteboardUpdate(t);
                break;
            default:
                break;
        }
    }
    handleWhiteboardUpdate(e) {
        return c(this, null, function*() {
            var n;
            let t = this.store.getLocalPeer(), i = this.store.getWhiteboard(e.id), r = e.owner === (t == null ? void 0 : t.peerId) || e.owner === (t == null ? void 0 : t.customerUserId), s = e.state === "open", o = {
                id: e.id,
                title: e.title,
                attributes: e.attributes
            };
            if (o.open = r ? i == null ? void 0 : i.open : s, o.owner = o.open ? e.owner : void 0, o.open) {
                if (r) o.url = i == null ? void 0 : i.url, o.token = i == null ? void 0 : i.token, o.addr = i == null ? void 0 : i.addr, o.permissions = i == null ? void 0 : i.permissions;
                else {
                    let d = yield this.transport.signal.getWhiteboard({
                        id: e.id
                    });
                    o.url = qt(d.token, d.addr, this.store.getEnv()), o.token = d.token, o.addr = d.addr, o.permissions = d.permissions, o.open = d.permissions.length > 0;
                }
            }
            this.store.setWhiteboard(o), (n = this.listener) == null || n.onWhiteboardUpdate(o);
        });
    }
};
var nr = class {
    constructor(e, t, i, r, s, o){
        this.store = e;
        this.transport = i;
        this.listener = r;
        this.audioListener = s;
        this.connectionQualityListener = o;
        this.TAG = "[HMSNotificationManager]";
        this.hasConsistentRoomStateArrived = !1;
        this.ignoreNotification = (e)=>{
            if (e === "peer-list") this.hasConsistentRoomStateArrived = !0;
            else if (e === "room-state") return this.hasConsistentRoomStateArrived;
            return !1;
        };
        this.handleTrackAdd = (e)=>{
            this.trackManager.handleTrackAdd(e);
        };
        this.handleTrackRemove = (e)=>{
            this.trackManager.handleTrackRemove(e);
        };
        this.updateLocalPeer = ({ name: e, metadata: t })=>{
            let i = this.store.getLocalPeer();
            this.peerManager.handlePeerInfoUpdate({
                peer: i,
                name: e,
                data: t
            });
        };
        let n = this.transport.isFlagEnabled("onDemandTracks");
        this.trackManager = n ? new zi(this.store, t, this.transport, this.listener) : new lt(this.store, t, this.listener), this.peerManager = new Xi(this.store, this.trackManager, this.listener), this.peerListManager = new Yi(this.store, this.peerManager, this.trackManager, this.listener), this.broadcastManager = new Ji(this.listener), this.policyChangeManager = new Zi(this.store, t), this.requestManager = new rr(this.store, this.listener), this.activeSpeakerManager = new ji(this.store, this.listener, this.audioListener), this.connectionQualityManager = new Qi(this.store, this.connectionQualityListener), this.roomUpdateManager = new sr(this.store, this.listener), this.sessionMetadataManager = new ar(this.store, this.listener), this.pollsManager = new ir(this.store, this.transport, this.listener), this.whiteboardManager = new or(this.store, this.transport, this.listener);
    }
    setListener(e) {
        this.listener = e, this.trackManager.listener = e, this.peerManager.listener = e, this.peerListManager.listener = e, this.broadcastManager.listener = e, this.requestManager.listener = e, this.activeSpeakerManager.listener = e, this.roomUpdateManager.listener = e, this.sessionMetadataManager.listener = e, this.pollsManager.listener = e, this.whiteboardManager.listener = e;
    }
    setAudioListener(e) {
        this.audioListener = e, this.activeSpeakerManager.audioListener = e;
    }
    setConnectionQualityListener(e) {
        this.connectionQualityListener = e, this.connectionQualityManager.listener = e;
    }
    handleNotification(e, t = !1) {
        var s, o;
        let i = e.method, r = e.params;
        [
            "active-speakers",
            "sfu-stats",
            "on-connection-quality-update",
            void 0
        ].includes(i) || l.d(this.TAG, `Received notification - ${i}`, {
            notification: r
        }), i === "sfu-stats" && (s = window.HMS) != null && s.ON_SFU_STATS && typeof ((o = window.HMS) == null ? void 0 : o.ON_SFU_STATS) == "function" && window.HMS.ON_SFU_STATS(e.params), !this.ignoreNotification(i) && (this.roomUpdateManager.handleNotification(i, r), this.peerManager.handleNotification(i, r), this.requestManager.handleNotification(i, r), this.peerListManager.handleNotification(i, r, t), this.broadcastManager.handleNotification(i, r), this.sessionMetadataManager.handleNotification(i, r), this.pollsManager.handleNotification(i, r), this.whiteboardManager.handleNotification(i, r), this.handleIsolatedMethods(i, r));
    }
    handleIsolatedMethods(e, t) {
        switch(e){
            case "on-track-add":
                this.trackManager.handleTrackMetadataAdd(t);
                break;
            case "on-track-update":
                this.trackManager.handleTrackUpdate(t);
                break;
            case "on-track-remove":
                if (!t.peer) {
                    l.d(this.TAG, `Ignoring sfu notification - ${e}`, {
                        notification: t
                    });
                    return;
                }
                this.trackManager.handleTrackRemovedPermanently(t);
                break;
            case "on-track-layer-update":
                this.trackManager.handleTrackLayerUpdate(t);
                break;
            case "active-speakers":
                this.activeSpeakerManager.handleActiveSpeakers(t);
                break;
            case "on-connection-quality-update":
                this.connectionQualityManager.handleQualityUpdate(t);
                break;
            case "on-policy-change":
                this.policyChangeManager.handlePolicyChange(t);
                break;
            case "node-info":
                this.transport.setSFUNodeId(t.sfu_node_id);
                break;
            default:
                break;
        }
    }
};
var cr = class {
    constructor(e){
        this.transport = e;
        this.observedKeys = new Set;
    }
    get(e) {
        return c(this, null, function*() {
            let { data: t, updated_at: i } = yield this.transport.signal.getSessionMetadata(e);
            return {
                value: t,
                updatedAt: L(i)
            };
        });
    }
    set(e, t) {
        return c(this, null, function*() {
            let { data: i, updated_at: r } = yield this.transport.signal.setSessionMetadata({
                key: e,
                data: t
            }), s = L(r);
            return {
                value: i,
                updatedAt: s
            };
        });
    }
    observe(e) {
        return c(this, null, function*() {
            let t = new Set(this.observedKeys);
            if (e.forEach((i)=>this.observedKeys.add(i)), this.observedKeys.size !== t.size) try {
                yield this.transport.signal.listenMetadataChange(Array.from(this.observedKeys));
            } catch (i) {
                throw this.observedKeys = t, i;
            }
        });
    }
    unobserve(e) {
        return c(this, null, function*() {
            let t = new Set(this.observedKeys);
            if (this.observedKeys = new Set([
                ...this.observedKeys
            ].filter((i)=>!e.includes(i))), this.observedKeys.size !== t.size) try {
                yield this.transport.signal.listenMetadataChange(Array.from(this.observedKeys));
            } catch (i) {
                throw this.observedKeys = t, i;
            }
        });
    }
};
var dr = class {
    constructor(e, t, i = "", r = "", s = "https://prod-init.100ms.live/init", o = !1, n){
        this.authToken = e;
        this.peerId = t;
        this.peerName = i;
        this.data = r;
        this.endpoint = s;
        this.autoSubscribeVideo = o;
        this.iceServers = n;
    }
};
var j = ((s)=>(s[s.ConnectFailed = 0] = "ConnectFailed", s[s.SignalDisconnect = 1] = "SignalDisconnect", s[s.JoinWSMessageFailed = 2] = "JoinWSMessageFailed", s[s.PublishIceConnectionFailed = 3] = "PublishIceConnectionFailed", s[s.SubscribeIceConnectionFailed = 4] = "SubscribeIceConnectionFailed", s))(j || {}), za = {
    0: [],
    1: [],
    2: [
        1
    ],
    3: [
        1
    ],
    4: [
        1
    ]
};
var lr = ((n)=>(n.Disconnected = "Disconnected", n.Connecting = "Connecting", n.Joined = "Joined", n.Preview = "Preview", n.Failed = "Failed", n.Reconnecting = "Reconnecting", n.Leaving = "Leaving", n))(lr || {});
var ur = class {
    constructor(e){
        this.promise = new Promise((t, i)=>{
            this.resolve = t, this.reject = i, e(t, i);
        });
    }
};
var pr = class {
    constructor(e, t){
        this.onStateChange = e;
        this.sendEvent = t;
        this.TAG = "[RetryScheduler]";
        this.inProgress = new Map;
        this.retryTaskIds = [];
    }
    schedule(n) {
        return c(this, arguments, function*({ category: e, error: t, task: i, originalState: r, maxRetryTime: s = 6e4, changeState: o = !0 }) {
            yield this.scheduleTask({
                category: e,
                error: t,
                changeState: o,
                task: i,
                originalState: r,
                maxRetryTime: s,
                failedAt: Date.now()
            });
        });
    }
    reset() {
        this.retryTaskIds.forEach((e)=>clearTimeout(e)), this.retryTaskIds = [], this.inProgress.clear();
    }
    isTaskInProgress(e) {
        return !!this.inProgress.get(e);
    }
    scheduleTask(u) {
        return c(this, arguments, function*({ category: e, error: t, changeState: i, task: r, originalState: s, failedAt: o, maxRetryTime: n = 6e4, failedRetryCount: d = 0 }) {
            if (l.d(this.TAG, "schedule: ", {
                category: j[e],
                error: t
            }), d === 0) {
                let v = this.inProgress.get(e);
                if (v) {
                    l.d(this.TAG, `schedule: Already a task for ${j[e]} scheduled, waiting for its completion`), yield v.promise;
                    return;
                }
                let R = new ur(($, ue)=>{});
                this.inProgress.set(e, R), this.sendEvent(t, e);
            }
            let p = !1, h = za[e];
            for(let v in h){
                let R = h[parseInt(v)];
                try {
                    let $ = this.inProgress.get(R);
                    $ && (l.d(this.TAG, `schedule: Suspending retry task of ${j[e]}, waiting for ${j[R]} to recover`), yield $.promise, l.d(this.TAG, `schedule: Resuming retry task ${j[e]} as it's dependency ${j[R]} is recovered`));
                } catch ($) {
                    l.d(this.TAG, `schedule: Stopping retry task of ${j[e]} as it's dependency ${j[R]} failed to recover`), p = !0;
                    break;
                }
            }
            let T = (v)=>{
                if (this.inProgress.delete(e), this.sendEvent(v, e), this.reset(), i) this.onStateChange("Failed", v);
                else throw v;
            }, g = Date.now() - o;
            if (g >= n || p) return t.description += `. [${j[e]}] Could not recover after ${g} milliseconds`, p && (t.description += ` Could not recover all of it's required dependencies - [${h.map((v)=>j[v]).toString()}]`), t.isTerminal = !0, T(t);
            i && this.onStateChange("Reconnecting", t);
            let f = this.getDelayForRetryCount(e);
            l.d(this.TAG, `schedule: [${j[e]}] [failedRetryCount=${d}] Scheduling retry task in ${f}ms`);
            let E;
            try {
                E = yield this.setTimeoutPromise(r, f);
            } catch (v) {
                E = !1;
                let R = v;
                if (R.isTerminal) return l.e(this.TAG, `[${j[e]}] Un-caught terminal exception ${R.name} in retry-task`, v), T(R);
                l.w(this.TAG, `[${j[e]}] Un-caught exception ${R.name} in retry-task, initiating retry`, v);
            }
            if (E) {
                let v = this.inProgress.get(e);
                this.inProgress.delete(e), v == null || v.resolve(d), i && this.inProgress.size === 0 && this.onStateChange(s), l.d(this.TAG, `schedule: [${j[e]}] [failedRetryCount=${d}] Recovered \u267B\uFE0F after ${g}ms`);
            } else yield this.scheduleTask({
                category: e,
                error: t,
                changeState: i,
                task: r,
                originalState: s,
                maxRetryTime: n,
                failedAt: o,
                failedRetryCount: d + 1
            });
        });
    }
    getDelayForRetryCount(e) {
        let t = e === 2 ? Math.random() * 2 : Math.random(), i = 0;
        return e === 2 ? i = 2 + t : e === 1 && (i = 1), i * 1e3;
    }
    setTimeoutPromise(e, t) {
        return c(this, null, function*() {
            return new Promise((i, r)=>{
                let s = window.setTimeout(()=>c(this, null, function*() {
                        try {
                            let o = yield e();
                            o && this.retryTaskIds.splice(this.retryTaskIds.indexOf(s), 1), i(o);
                        } catch (o) {
                            r(o);
                        }
                    }), t);
                this.retryTaskIds.push(s);
            });
        });
    }
};
var hr = class extends Ne {
    constructor(){
        super(100);
        this.localStorage = new fe("hms-analytics");
        this.localStorage.clear(), this.initLocalStorageQueue();
    }
    enqueue(t) {
        super.enqueue(t), this.localStorage.set(this.storage);
    }
    dequeue() {
        let t = super.dequeue();
        return this.localStorage.set(this.storage), t;
    }
    initLocalStorageQueue() {
        var t;
        (t = this.localStorage.get()) == null || t.forEach((i)=>{
            let r = new C(i);
            super.enqueue(r);
        });
    }
};
var mr = class {
    constructor(){
        this.TAG = "[AnalyticsTransport]";
        this.eventCount = 0;
        this.lastResetTime = Date.now();
        this.MAX_EVENTS_PER_MINUTE = 200;
        this.RESET_INTERVAL_MS = 6e4;
    }
    checkRateLimit() {
        let e = Date.now();
        if (e - this.lastResetTime >= this.RESET_INTERVAL_MS && (this.eventCount = 0, this.lastResetTime = e), this.eventCount >= this.MAX_EVENTS_PER_MINUTE) throw new Error("Too many events being sent, please check the implementation.");
        this.eventCount++;
    }
    sendEvent(e) {
        try {
            this.checkRateLimit();
        } catch (t) {
            throw l.w(this.TAG, "Rate limit exceeded", t), t;
        }
        try {
            this.sendSingleEvent(e), this.flushFailedEvents();
        } catch (t) {
            l.w(this.TAG, "sendEvent failed", t);
        }
    }
    flushFailedEvents(e) {
        var t;
        try {
            for(l.d(this.TAG, "Flushing failed events", this.failedEvents); this.failedEvents.size() > 0;){
                let i = this.failedEvents.dequeue();
                i && (((t = i.metadata) == null ? void 0 : t.peer.peer_id) === e || !i.metadata.peer.peer_id ? this.sendSingleEvent(i) : He.sendEvent(i));
            }
        } catch (i) {
            l.w(this.TAG, "flushFailedEvents failed", i);
        }
    }
    sendSingleEvent(e) {
        try {
            this.transportProvider.sendEvent(e), l.d(this.TAG, "Sent event", e.name, e);
        } catch (t) {
            throw l.w(this.TAG, `${this.transportProvider.TAG}.sendEvent failed, adding to local storage events`, {
                event: e,
                error: t
            }), this.failedEvents.enqueue(e), t;
        }
    }
};
var Sr = class extends mr {
    constructor(t){
        super();
        this.transportProvider = t;
        this.failedEvents = new hr;
    }
};
var ut = class {
    constructor(e, t, i, r){
        this.store = e;
        this.eventBus = t;
        this.sampleWindowSize = i;
        this.pushInterval = r;
        this.shouldSendEvent = !1;
        this.sequenceNum = 1;
        this.stop = ()=>{
            this.shouldSendEvent && this.sendEvent(), this.eventBus.statsUpdate.unsubscribe(this.handleStatsUpdate.bind(this)), this.shouldSendEvent = !1;
        };
        this.start();
    }
    start() {
        this.shouldSendEvent || (this.stop(), this.shouldSendEvent = !0, this.eventBus.statsUpdate.subscribe(this.handleStatsUpdate.bind(this)), this.startLoop().catch((e)=>l.e("[StatsAnalytics]", e.message)));
    }
    startLoop() {
        return c(this, null, function*() {
            for(; this.shouldSendEvent;)yield J(this.pushInterval * 1e3), this.sendEvent();
        });
    }
    sendEvent() {
        this.trackAnalytics.forEach((e)=>{
            e.clearSamples();
        });
    }
    cleanTrackAnalyticsAndCreateSample(e) {
        this.trackAnalytics.forEach((t)=>{
            !this.store.hasTrack(t.track) && !(t.samples.length > 0) && this.trackAnalytics.delete(t.track_id);
        }), e && this.trackAnalytics.forEach((t)=>{
            t.createSample();
        });
    }
}, pt = class {
    constructor({ track: e, ssrc: t, rid: i, kind: r, sampleWindowSize: s }){
        this.samples = [];
        this.tempStats = [];
        this.track = e, this.ssrc = t, this.rid = i, this.kind = r, this.track_id = this.track.trackId, this.source = this.track.source, this.sampleWindowSize = s;
    }
    pushTempStat(e) {
        this.tempStats.push(e);
    }
    createSample() {
        this.tempStats.length !== 0 && (this.samples.push(this.collateSample()), this.prevLatestStat = this.getLatestStat(), this.tempStats.length = 0);
    }
    clearSamples() {
        this.samples.length = 0;
    }
    getLatestStat() {
        return this.tempStats[this.tempStats.length - 1];
    }
    getFirstStat() {
        return this.tempStats[0];
    }
    calculateSum(e) {
        if (typeof this.getLatestStat()[e] == "number") return this.tempStats.reduce((i, r)=>i + (r[e] || 0), 0);
    }
    calculateAverage(e, t = !0) {
        let i = this.calculateSum(e), r = i !== void 0 ? i / this.tempStats.length : void 0;
        return r ? t ? Math.round(r) : r : void 0;
    }
    calculateDifferenceForSample(e) {
        var r;
        let t = Number((r = this.prevLatestStat) == null ? void 0 : r[e]) || 0;
        return (Number(this.getLatestStat()[e]) || 0) - t;
    }
    calculateDifferenceAverage(e, t = !0) {
        let i = this.calculateDifferenceForSample(e) / this.tempStats.length;
        return t ? Math.round(i) : i;
    }
    calculateInstancesOfHigh(e, t) {
        if (typeof this.getLatestStat()[e] == "number") return this.tempStats.reduce((r, s)=>r + ((s[e] || 0) > t ? 1 : 0), 0);
    }
}, gr = (a, e)=>a && e && (a.frameWidth !== e.frameWidth || a.frameHeight !== e.frameHeight), Tr = (a, e)=>a && e && a.enabled !== e.enabled, Jt = (a)=>Object.entries(a).filter(([, e])=>e !== void 0).reduce((e, [t, i])=>(e[t] = i, e), {});
var Qt = class extends ut {
    constructor(){
        super(...arguments);
        this.trackAnalytics = new Map;
    }
    toAnalytics() {
        var r, s;
        let t = [], i = [];
        return this.trackAnalytics.forEach((o)=>{
            o.track.type === "audio" ? t.push(o.toAnalytics()) : o.track.type === "video" && i.push(o.toAnalytics());
        }), {
            audio: t,
            video: i,
            joined_at: (s = (r = this.store.getRoom()) == null ? void 0 : r.joinedAt) == null ? void 0 : s.getTime(),
            sequence_num: this.sequenceNum++,
            max_window_sec: 30
        };
    }
    sendEvent() {
        this.eventBus.analytics.publish(y.publishStats(this.toAnalytics())), super.sendEvent();
    }
    handleStatsUpdate(t) {
        let i = !1, r = t.getLocalTrackStats();
        Object.keys(r).forEach((s)=>{
            let o = r[s], n = this.store.getLocalPeerTracks().find((d)=>d.getTrackIDBeingSent() === s);
            Object.keys(o).forEach((d)=>{
                var g, f, E;
                let u = o[d];
                if (!n) return;
                let p = this.getTrackIdentifier(n.trackId, u), h = M(m({}, u), {
                    availableOutgoingBitrate: (f = (g = t.getLocalPeerStats()) == null ? void 0 : g.publish) == null ? void 0 : f.availableOutgoingBitrate
                });
                if (p && this.trackAnalytics.has(p)) (E = this.trackAnalytics.get(p)) == null || E.pushTempStat(h);
                else if (n) {
                    let v = new cs({
                        track: n,
                        sampleWindowSize: this.sampleWindowSize,
                        rid: u.rid,
                        ssrc: u.ssrc.toString(),
                        kind: u.kind
                    });
                    v.pushTempStat(h), this.trackAnalytics.set(this.getTrackIdentifier(n.trackId, u), v);
                }
                let T = this.trackAnalytics.get(p);
                T != null && T.shouldCreateSample() && (i = !0);
            });
        }), this.cleanTrackAnalyticsAndCreateSample(i);
    }
    getTrackIdentifier(t, i) {
        return i.rid ? `${t}:${i.rid}` : t;
    }
}, cs = class extends pt {
    constructor(){
        super(...arguments);
        this.samples = [];
        this.collateSample = ()=>{
            let t = this.getLatestStat(), i = t.qualityLimitationDurations, r = i && {
                bandwidth_sec: i.bandwidth,
                cpu_sec: i.cpu,
                other_sec: i.other
            }, s = t.frameHeight ? {
                height_px: this.getLatestStat().frameHeight,
                width_px: this.getLatestStat().frameWidth
            } : void 0, o = this.calculateAverage("jitter", !1), n = o ? Math.round(o * 1e3) : void 0, d = this.calculateAverage("roundTripTime", !1), u = d ? Math.round(d * 1e3) : void 0;
            return Jt({
                timestamp: Date.now(),
                avg_available_outgoing_bitrate_bps: this.calculateAverage("availableOutgoingBitrate"),
                avg_bitrate_bps: this.calculateAverage("bitrate"),
                avg_fps: this.calculateAverage("framesPerSecond"),
                total_packets_lost: this.getLatestStat().packetsLost,
                total_packets_sent: this.getLatestStat().packetsSent,
                total_packet_sent_delay_sec: parseFloat(this.calculateDifferenceForSample("totalPacketSendDelay").toFixed(4)),
                total_fir_count: this.calculateDifferenceForSample("firCount"),
                total_pli_count: this.calculateDifferenceForSample("pliCount"),
                total_nack_count: this.calculateDifferenceForSample("nackCount"),
                avg_jitter_ms: n,
                avg_round_trip_time_ms: u,
                total_quality_limitation: r,
                resolution: s
            });
        };
        this.shouldCreateSample = ()=>{
            let t = this.tempStats.length, i = this.tempStats[t - 1], r = this.tempStats[t - 2];
            return t === 30 || Tr(i, r) || i.kind === "video" && gr(i, r);
        };
        this.toAnalytics = ()=>({
                track_id: this.track_id,
                ssrc: this.ssrc,
                source: this.source,
                rid: this.rid,
                samples: this.samples
            });
    }
};
var zt = class extends ut {
    constructor(){
        super(...arguments);
        this.trackAnalytics = new Map;
    }
    toAnalytics() {
        var r, s;
        let t = [], i = [];
        return this.trackAnalytics.forEach((o)=>{
            o.track.type === "audio" ? t.push(o.toAnalytics()) : o.track.type === "video" && i.push(o.toAnalytics());
        }), {
            audio: t,
            video: i,
            joined_at: (s = (r = this.store.getRoom()) == null ? void 0 : r.joinedAt) == null ? void 0 : s.getTime(),
            sequence_num: this.sequenceNum++,
            max_window_sec: 10
        };
    }
    sendEvent() {
        this.eventBus.analytics.publish(y.subscribeStats(this.toAnalytics())), super.sendEvent();
    }
    handleStatsUpdate(t) {
        let i = t.getAllRemoteTracksStats(), r = !1;
        Object.keys(i).forEach((s)=>{
            var f, E;
            let o = this.store.getTrackById(s), n = i[s], d = (f = this.trackAnalytics.get(s)) == null ? void 0 : f.getLatestStat(), p = ((v, R)=>{
                let $ = (R == null ? void 0 : R.jitterBufferDelay) || 0, ue = (R == null ? void 0 : R.jitterBufferEmittedCount) || 0, ge = ((v == null ? void 0 : v.jitterBufferDelay) || 0) - $, pe = ((v == null ? void 0 : v.jitterBufferEmittedCount) || 0) - ue;
                return pe > 0 ? ge * 1e3 / pe : (R == null ? void 0 : R.calculatedJitterBufferDelay) || 0;
            })(n, d), h = this.calculateAvSyncForStat(n, t), T = M(m({}, n), {
                calculatedJitterBufferDelay: p,
                avSync: h
            });
            if (n.kind === "video") {
                let v = o.getPreferredLayerDefinition();
                T.expectedFrameHeight = v == null ? void 0 : v.resolution.height, T.expectedFrameWidth = v == null ? void 0 : v.resolution.width;
            }
            if (this.trackAnalytics.has(s)) (E = this.trackAnalytics.get(s)) == null || E.pushTempStat(T);
            else if (o) {
                let v = new ls({
                    track: o,
                    sampleWindowSize: this.sampleWindowSize,
                    ssrc: n.ssrc.toString(),
                    kind: n.kind
                });
                v.pushTempStat(T), this.trackAnalytics.set(s, v);
            }
            let g = this.trackAnalytics.get(s);
            g != null && g.shouldCreateSample() && (r = !0);
        }), this.cleanTrackAnalyticsAndCreateSample(r);
    }
    calculateAvSyncForStat(t, i) {
        if (!t.peerID || !t.estimatedPlayoutTimestamp || t.kind !== "video") return;
        let r = this.store.getPeerById(t.peerID), s = r == null ? void 0 : r.audioTrack, o = r == null ? void 0 : r.videoTrack;
        if (!(s && o && s.enabled && o.enabled)) return Rt;
        let d = i.getRemoteTrackStats(s.trackId);
        if (!d) return Rt;
        if (d.estimatedPlayoutTimestamp) return d.estimatedPlayoutTimestamp - t.estimatedPlayoutTimestamp;
    }
}, ls = class extends pt {
    constructor(){
        super(...arguments);
        this.samples = [];
        this.collateSample = ()=>{
            let t = this.getLatestStat(), i = this.getFirstStat(), r = {
                timestamp: Date.now(),
                total_pli_count: this.calculateDifferenceForSample("pliCount"),
                total_nack_count: this.calculateDifferenceForSample("nackCount"),
                avg_jitter_buffer_delay: this.calculateAverage("calculatedJitterBufferDelay", !1)
            };
            if (t.kind === "video") return Jt(M(m({}, r), {
                avg_av_sync_ms: this.calculateAvgAvSyncForSample(),
                avg_frames_received_per_sec: this.calculateDifferenceAverage("framesReceived"),
                avg_frames_dropped_per_sec: this.calculateDifferenceAverage("framesDropped"),
                avg_frames_decoded_per_sec: this.calculateDifferenceAverage("framesDecoded"),
                frame_width: this.calculateAverage("frameWidth"),
                frame_height: this.calculateAverage("frameHeight"),
                expected_frame_width: this.calculateAverage("expectedFrameWidth"),
                expected_frame_height: this.calculateAverage("expectedFrameHeight"),
                pause_count: this.calculateDifferenceForSample("pauseCount"),
                pause_duration_seconds: this.calculateDifferenceForSample("totalPausesDuration"),
                freeze_count: this.calculateDifferenceForSample("freezeCount"),
                freeze_duration_seconds: this.calculateDifferenceForSample("totalFreezesDuration")
            }));
            {
                let s = (t.concealedSamples || 0) - (t.silentConcealedSamples || 0) - ((i.concealedSamples || 0) - (i.silentConcealedSamples || 0));
                return Jt(M(m({}, r), {
                    audio_level: this.calculateInstancesOfHigh("audioLevel", .05),
                    audio_concealed_samples: s,
                    audio_total_samples_received: this.calculateDifferenceForSample("totalSamplesReceived"),
                    audio_concealment_events: this.calculateDifferenceForSample("concealmentEvents"),
                    fec_packets_discarded: this.calculateDifferenceForSample("fecPacketsDiscarded"),
                    fec_packets_received: this.calculateDifferenceForSample("fecPacketsReceived"),
                    total_samples_duration: this.calculateDifferenceForSample("totalSamplesDuration"),
                    total_packets_received: this.calculateDifferenceForSample("packetsReceived"),
                    total_packets_lost: this.calculateDifferenceForSample("packetsLost")
                }));
            }
        };
        this.shouldCreateSample = ()=>{
            let t = this.tempStats.length, i = this.tempStats[t - 1], r = this.tempStats[t - 2];
            return t === 10 || Tr(i, r) || i.kind === "video" && gr(i, r);
        };
        this.toAnalytics = ()=>({
                track_id: this.track_id,
                ssrc: this.ssrc,
                source: this.source,
                rid: this.rid,
                samples: this.samples
            });
    }
    calculateAvgAvSyncForSample() {
        let i = this.tempStats.map((r)=>r.avSync).filter((r)=>r !== void 0 && r !== Rt);
        return i.length === 0 ? Rt : i.reduce((r, s)=>r + s, 0) / i.length;
    }
};
var ht = ((t)=>(t[t.Publish = 0] = "Publish", t[t.Subscribe = 1] = "Subscribe", t))(ht || {});
function Ya(a, e) {
    var r;
    let t = _sdpTransform.parse(a.sdp);
    if (!((r = t.origin) != null && r.username.startsWith("mozilla"))) return a;
    let i = e ? Array.from(e.values()) : [];
    return t.media.forEach((s)=>{
        var d, u, p;
        let o = (d = s.msid) == null ? void 0 : d.split(" ")[0], n = (u = i.find((h)=>h.type === s.type && h.stream_id === o)) == null ? void 0 : u.track_id;
        n && (s.msid = (p = s.msid) == null ? void 0 : p.replace(/\s(.+)/, ` ${n}`));
    }), {
        type: a.type,
        sdp: _sdpTransform.write(t)
    };
}
function Xa(a, e) {
    var s;
    if (!(a != null && a.sdp) || !e) return;
    let i = _sdpTransform.parse(a.sdp).media.find((o)=>he(o.mid) && parseInt(o.mid) === parseInt(e));
    return (s = i == null ? void 0 : i.msid) == null ? void 0 : s.split(" ")[1];
}
function Za(a) {
    return a.sdp.includes("usedtx=1") ? a : {
        type: a.type,
        sdp: a.sdp.replace("useinbandfec=1", "useinbandfec=1;usedtx=1")
    };
}
var Ce = "[HMSConnection]", Qe = class {
    constructor(e, t){
        this.candidates = new Array;
        this.role = e, this.signal = t;
    }
    get iceConnectionState() {
        return this.nativeConnection.iceConnectionState;
    }
    get connectionState() {
        return this.nativeConnection.connectionState;
    }
    get action() {
        return this.role === 0 ? "PUBLISH" : "SUBSCRIBE";
    }
    setSfuNodeId(e) {
        this.sfuNodeId = e;
    }
    addTransceiver(e, t) {
        return this.nativeConnection.addTransceiver(e, t);
    }
    createOffer(e, t) {
        return c(this, null, function*() {
            try {
                let i = yield this.nativeConnection.createOffer(t);
                return l.d(Ce, `[role=${this.role}] createOffer offer=${JSON.stringify(i, null, 1)}`), Za(Ya(i, e));
            } catch (i) {
                throw S.WebrtcErrors.CreateOfferFailed(this.action, i.message);
            }
        });
    }
    createAnswer(e) {
        return c(this, null, function*() {
            try {
                let t = yield this.nativeConnection.createAnswer(e);
                return l.d(Ce, `[role=${this.role}] createAnswer answer=${JSON.stringify(t, null, 1)}`), t;
            } catch (t) {
                throw S.WebrtcErrors.CreateAnswerFailed(this.action, t.message);
            }
        });
    }
    setLocalDescription(e) {
        return c(this, null, function*() {
            try {
                l.d(Ce, `[role=${this.role}] setLocalDescription description=${JSON.stringify(e, null, 1)}`), yield this.nativeConnection.setLocalDescription(e);
            } catch (t) {
                throw S.WebrtcErrors.SetLocalDescriptionFailed(this.action, t.message);
            }
        });
    }
    setRemoteDescription(e) {
        return c(this, null, function*() {
            try {
                l.d(Ce, `[role=${this.role}] setRemoteDescription description=${JSON.stringify(e, null, 1)}`), yield this.nativeConnection.setRemoteDescription(e);
            } catch (t) {
                throw S.WebrtcErrors.SetRemoteDescriptionFailed(this.action, t.message);
            }
        });
    }
    addIceCandidate(e) {
        return c(this, null, function*() {
            if (this.nativeConnection.signalingState === "closed") {
                l.d(Ce, `[role=${this.role}] addIceCandidate signalling state closed`);
                return;
            }
            l.d(Ce, `[role=${this.role}] addIceCandidate candidate=${JSON.stringify(e, null, 1)}`), yield this.nativeConnection.addIceCandidate(e);
        });
    }
    get remoteDescription() {
        return this.nativeConnection.remoteDescription;
    }
    getSenders() {
        return this.nativeConnection.getSenders();
    }
    handleSelectedIceCandidatePairs() {
        try {
            (this.role === 0 ? this.getSenders() : this.getReceivers()).forEach((t)=>{
                var r;
                let i = (r = t.track) == null ? void 0 : r.kind;
                if (t.transport) {
                    let s = t.transport.iceTransport, o = ()=>{
                        typeof s.getSelectedCandidatePair == "function" && (this.selectedCandidatePair = s.getSelectedCandidatePair(), this.selectedCandidatePair && (this.observer.onSelectedCandidatePairChange(this.selectedCandidatePair), l.d(Ce, `${ht[this.role]} connection`, `selected ${i || "unknown"} candidate pair`, JSON.stringify(this.selectedCandidatePair, null, 2))));
                    };
                    typeof s.onselectedcandidatepairchange == "function" && (s.onselectedcandidatepairchange = o), o();
                }
            });
        } catch (e) {
            l.w(Ce, `Error in logging selected ice candidate pair for ${ht[this.role]} connection`, e);
        }
    }
    removeTrack(e) {
        this.nativeConnection.signalingState !== "closed" && this.nativeConnection.removeTrack(e);
    }
    setMaxBitrateAndFramerate(e, t) {
        return c(this, null, function*() {
            let i = (t == null ? void 0 : t.maxBitrate) || e.settings.maxBitrate, r = e instanceof G && e.settings.maxFramerate, s = this.getSenders().find((o)=>{
                var n;
                return ((n = o == null ? void 0 : o.track) == null ? void 0 : n.id) === e.getTrackIDBeingSent();
            });
            if (s) {
                let o = s.getParameters();
                o.encodings.length === 1 && (i && (o.encodings[0].maxBitrate = i * 1e3), r && (o.encodings[0].maxFramerate = r)), yield s.setParameters(o);
            } else l.w(Ce, `no sender found to setMaxBitrate for track - ${e.trackId}, sentTrackId - ${e.getTrackIDBeingSent()}`);
        });
    }
    getStats() {
        return c(this, null, function*() {
            return yield this.nativeConnection.getStats();
        });
    }
    close() {
        this.nativeConnection.close();
    }
    getReceivers() {
        return this.nativeConnection.getReceivers();
    }
};
var Xt = class extends Qe {
    constructor(t, i, r){
        super(0, t);
        this.TAG = "[HMSPublishConnection]";
        this.observer = r, this.nativeConnection = new RTCPeerConnection(i), this.channel = this.nativeConnection.createDataChannel(vi, {
            protocol: "SCTP"
        }), this.channel.onerror = (s)=>l.e(this.TAG, `publish data channel onerror ${s}`, s), this.nativeConnection.onicecandidate = ({ candidate: s })=>{
            s && (this.observer.onIceCandidate(s), t.trickle(this.role, s));
        }, this.nativeConnection.oniceconnectionstatechange = ()=>{
            this.observer.onIceConnectionChange(this.nativeConnection.iceConnectionState);
        }, this.nativeConnection.onconnectionstatechange = ()=>{
            this.observer.onConnectionStateChange(this.nativeConnection.connectionState), this.nativeConnection.sctp && (this.nativeConnection.sctp.transport.onstatechange = ()=>{
                var s;
                this.observer.onDTLSTransportStateChange((s = this.nativeConnection.sctp) == null ? void 0 : s.transport.state);
            }, this.nativeConnection.sctp.transport.onerror = (s)=>{
                var o;
                this.observer.onDTLSTransportError(new Error((o = s == null ? void 0 : s.error) == null ? void 0 : o.errorDetail));
            });
        };
    }
    close() {
        super.close(), this.channel.close();
    }
    initAfterJoin() {
        this.nativeConnection.onnegotiationneeded = ()=>c(this, null, function*() {
                l.d(this.TAG, "onnegotiationneeded"), yield this.observer.onRenegotiationNeeded();
            });
    }
};
var Zt = class {
    constructor(e, t, i = ""){
        this.TAG = "[HMSDataChannel]";
        this.nativeChannel = e, this.observer = t, this.metadata = i, e.onmessage = (r)=>{
            this.observer.onMessage(r.data);
        };
    }
    get id() {
        return this.nativeChannel.id;
    }
    get label() {
        return this.nativeChannel.label;
    }
    get readyState() {
        return this.nativeChannel.readyState;
    }
    send(e) {
        l.d(this.TAG, `[${this.metadata}] Sending [size=${e.length}] message=${e}`), this.nativeChannel.send(e);
    }
    close() {
        this.nativeChannel.close();
    }
};
var ei = class extends Qe {
    constructor(t, i, r, s){
        super(1, t);
        this.isFlagEnabled = r;
        this.TAG = "[HMSSubscribeConnection]";
        this.remoteStreams = new Map;
        this.MAX_RETRIES = 3;
        this.pendingMessageQueue = [];
        this.eventEmitter = new (0, _eventemitter2Default.default)({
            maxListeners: 60
        });
        this.handlePendingApiMessages = ()=>{
            this.eventEmitter.emit("open", !0), this.pendingMessageQueue.length > 0 && (l.d(this.TAG, "Found pending message queue, sending messages"), this.pendingMessageQueue.forEach((t)=>this.sendOverApiDataChannel(t)), this.pendingMessageQueue.length = 0);
        };
        this.sendMessage = (t, i)=>c(this, null, function*() {
                var s;
                ((s = this.apiChannel) == null ? void 0 : s.readyState) !== "open" && (yield this.eventEmitter.waitFor("open"));
                let r;
                for(let o = 0; o < this.MAX_RETRIES; o++){
                    this.apiChannel.send(t), r = yield this.waitForResponse(i);
                    let n = r.error;
                    if (n) {
                        if (n.code === 404) {
                            l.d(this.TAG, `Track not found ${i}`, {
                                request: t,
                                try: o + 1,
                                error: n
                            });
                            break;
                        }
                        if (l.d(this.TAG, `Failed sending ${i}`, {
                            request: t,
                            try: o + 1,
                            error: n
                        }), !(n.code / 100 === 5 || n.code === 429)) throw Error(`code=${n.code}, message=${n.message}`);
                        let u = (2 + Math.random() * 2) * 1e3;
                        yield Oe(u);
                    } else break;
                }
                return r;
            });
        this.waitForResponse = (t)=>c(this, null, function*() {
                let i = yield this.eventEmitter.waitFor("message", function(s) {
                    return s.includes(t);
                }), r = JSON.parse(i[0]);
                return l.d(this.TAG, `response for ${t} -`, JSON.stringify(r, null, 2)), r;
            });
        this.observer = s, this.nativeConnection = new RTCPeerConnection(i), this.initNativeConnectionCallbacks();
    }
    initNativeConnectionCallbacks() {
        this.nativeConnection.oniceconnectionstatechange = ()=>{
            this.observer.onIceConnectionChange(this.nativeConnection.iceConnectionState);
        }, this.nativeConnection.onconnectionstatechange = ()=>{
            this.observer.onConnectionStateChange(this.nativeConnection.connectionState);
        }, this.nativeConnection.ondatachannel = (t)=>{
            t.channel.label === vi && (this.apiChannel = new Zt(t.channel, {
                onMessage: (i)=>{
                    this.eventEmitter.emit("message", i), this.observer.onApiChannelMessage(i);
                }
            }, `role=${this.role}`), t.channel.onopen = this.handlePendingApiMessages);
        }, this.nativeConnection.onicecandidate = (t)=>{
            t.candidate !== null && (this.observer.onIceCandidate(t.candidate), this.signal.trickle(this.role, t.candidate));
        }, this.nativeConnection.ontrack = (t)=>{
            var p;
            let i = t.streams[0], r = i.id;
            if (!this.remoteStreams.has(r)) {
                let h = new Pe(i, this);
                this.remoteStreams.set(r, h);
            }
            i.addEventListener("removetrack", (h)=>{
                if (h.track.id !== t.track.id) return;
                let T = s.tracks.findIndex((g)=>{
                    var f;
                    return g.nativeTrack.id === h.track.id && t.transceiver.mid === ((f = g.transceiver) == null ? void 0 : f.mid);
                });
                if (T >= 0) {
                    let g = s.tracks[T];
                    this.observer.onTrackRemove(g), s.tracks.splice(T, 1), s.tracks.length === 0 && this.remoteStreams.delete(r);
                }
            });
            let s = this.remoteStreams.get(r), o = t.track.kind === "audio", n = o ? ie : O, d = o ? new n(s, t.track) : new n(s, t.track, void 0, this.isFlagEnabled("disableNoneLayerRequest"));
            t.track.kind === "video" && s.setVideoLayerLocally("none", "addTrack", "subscribeConnection"), d.transceiver = t.transceiver;
            let u = Xa(this.remoteDescription, (p = t.transceiver) == null ? void 0 : p.mid);
            u && d.setSdpTrackId(u), s.tracks.push(d), this.observer.onTrackAdd(d);
        };
    }
    sendOverApiDataChannel(t) {
        this.apiChannel && this.apiChannel.readyState === "open" ? this.apiChannel.send(t) : (l.w(this.TAG, `API Data channel not ${this.apiChannel ? "open" : "present"}, queueing`, t), this.pendingMessageQueue.push(t));
    }
    sendOverApiDataChannelWithResponse(t, i) {
        return c(this, null, function*() {
            let r = (0, _uuid.v4)();
            if (t.method === "prefer-video-track-state" && this.isFlagEnabled("disableVideoTrackAutoUnsubscribe") && t.params.max_spatial_layer === "none") return l.d(this.TAG, "video auto unsubscribe is disabled, request is ignored"), {
                id: r
            };
            let s = JSON.stringify(m({
                id: i || r,
                jsonrpc: "2.0"
            }, t));
            return this.sendMessage(s, r);
        });
    }
    close() {
        var t;
        super.close(), (t = this.apiChannel) == null || t.close();
    }
};
var eo = (a, e)=>!e || e.length === 0 ? a : e.map((i)=>({
            urls: i.urls,
            credentialType: "password",
            credential: i.password,
            username: i.userName
        }));
var vr = "[InitService]", ti = class {
    static handleError(e, t) {
        switch(e.status){
            case 404:
                throw S.APIErrors.EndpointUnreachable("INIT", t.message || e.statusText);
            case 200:
                break;
            default:
                throw S.APIErrors.ServerErrors(t.code || e.status, "INIT", t.message || (e == null ? void 0 : e.statusText));
        }
    }
    static fetchInitConfig(n) {
        return c(this, arguments, function*({ token: e, peerId: t, userAgent: i, initEndpoint: r = "https://prod-init.100ms.live", region: s = "", iceServers: o }) {
            l.d(vr, `fetchInitConfig: initEndpoint=${r} token=${e} peerId=${t} region=${s} `);
            let d = bn(r, t, i, s);
            try {
                let u = yield fetch(d, {
                    headers: {
                        Authorization: `Bearer ${e}`
                    }
                });
                try {
                    let p = yield u.clone().json();
                    return this.handleError(u, p), l.d(vr, `config is ${JSON.stringify(p, null, 2)}`), An(p, o);
                } catch (p) {
                    let h = yield u.text();
                    throw l.e(vr, "json error", p.message, h), p instanceof k ? p : S.APIErrors.ServerErrors(u.status, "INIT", p.message);
                }
            } catch (u) {
                let p = u;
                throw [
                    "Failed to fetch",
                    "NetworkError",
                    "ECONNRESET"
                ].some((h)=>p.message.includes(h)) ? S.APIErrors.EndpointUnreachable("INIT", p.message) : p;
            }
        });
    }
};
function bn(a, e, t, i) {
    try {
        let r = new URL("/init", a);
        return i && i.trim().length > 0 && r.searchParams.set("region", i.trim()), r.searchParams.set("peer_id", e), r.searchParams.set("user_agent_v2", t), r.toString();
    } catch (r) {
        let s = r;
        throw l.e(vr, s.name, s.message), s;
    }
}
function An(a, e) {
    var t;
    return M(m({}, a), {
        rtcConfiguration: M(m({}, a.rtcConfiguration), {
            iceServers: eo((t = a.rtcConfiguration) == null ? void 0 : t.ice_servers, e)
        })
    });
}
var ii = class {
    constructor(e){
        this.TAG = "[SIGNAL]: ";
        this.pongResponseTimes = new Ne(5);
        this.isJoinCompleted = !1;
        this.pendingTrickle = [];
        this.socket = null;
        this.callbacks = new Map;
        this._isConnected = !1;
        this.id = 0;
        this.onCloseHandler = ()=>{};
        this.resolvePingOnAnyResponse = ()=>{
            this.callbacks.forEach((e, t)=>{
                var i;
                ((i = e.metadata) == null ? void 0 : i.method) === "ping" && (e.resolve({
                    timestamp: Date.now()
                }), this.callbacks.delete(t));
            });
        };
        this.offlineListener = ()=>{
            l.d(this.TAG, "Window network offline"), this.setIsConnected(!1, "Window network offline");
        };
        this.onlineListener = ()=>{
            l.d(this.TAG, "Window network online"), this.observer.onNetworkOnline();
        };
        this.observer = e, window.addEventListener("offline", this.offlineListener), window.addEventListener("online", this.onlineListener), this.onMessageHandler = this.onMessageHandler.bind(this);
    }
    get isConnected() {
        return this._isConnected;
    }
    setSfuNodeId(e) {
        this.sfuNodeId = e;
    }
    setIsConnected(e, t = "") {
        l.d(this.TAG, `isConnected set id: ${this.id}, oldValue: ${this._isConnected}, newValue: ${e}`), this._isConnected !== e && (this._isConnected && !e ? (this._isConnected = e, this.rejectPendingCalls(t), this.observer.onOffline(t)) : !this._isConnected && e && (this._isConnected = e, this.observer.onOnline()));
    }
    getPongResponseTimes() {
        return this.pongResponseTimes.toList();
    }
    internalCall(e, t) {
        return c(this, null, function*() {
            var s;
            let i = (0, _uuid.v4)(), r = {
                method: e,
                params: t,
                id: i,
                jsonrpc: "2.0"
            };
            (s = this.socket) == null || s.send(JSON.stringify(r));
            try {
                return yield new Promise((n, d)=>{
                    this.callbacks.set(i, {
                        resolve: n,
                        reject: d,
                        metadata: {
                            method: e
                        }
                    });
                });
            } catch (o) {
                if (o instanceof k) throw o;
                let n = o;
                throw S.WebsocketMethodErrors.ServerErrors(Number(n.code), br(e), n.message);
            }
        });
    }
    notify(e, t) {
        var r, s;
        let i = {
            method: e,
            params: t
        };
        ((r = this.socket) == null ? void 0 : r.readyState) === WebSocket.OPEN && ((s = this.socket) == null || s.send(JSON.stringify(i)));
    }
    open(e) {
        return new Promise((t, i)=>{
            let r = !1;
            this.socket && (this.socket.close(), this.socket.removeEventListener("close", this.onCloseHandler), this.socket.removeEventListener("message", this.onMessageHandler)), this.socket = new WebSocket(e);
            let s = ()=>{
                l.e(this.TAG, "Error from websocket"), r = !0, i(S.WebSocketConnectionErrors.FailedToConnect("JOIN", "Error opening websocket connection"));
            };
            this.onCloseHandler = (n)=>{
                l.w(`Websocket closed code=${n.code}`), r ? this.setIsConnected(!1, `code: ${n.code}${n.code !== 1e3 ? ", unexpected websocket close" : ""}`) : (r = !0, i(S.WebSocketConnectionErrors.AbnormalClose("JOIN", `Error opening websocket connection - websocket closed unexpectedly with code=${n.code}`)));
            }, this.socket.addEventListener("error", s);
            let o = ()=>{
                var n, d;
                r = !0, t(), this.setIsConnected(!0), this.id++, (n = this.socket) == null || n.removeEventListener("open", o), (d = this.socket) == null || d.removeEventListener("error", s), this.pingPongLoop(this.id);
            };
            this.socket.addEventListener("open", o), this.socket.addEventListener("close", this.onCloseHandler), this.socket.addEventListener("message", this.onMessageHandler);
        });
    }
    close() {
        return c(this, null, function*() {
            window.removeEventListener("offline", this.offlineListener), window.removeEventListener("online", this.onlineListener), this.socket ? (this.socket.close(1e3, "Normal Close"), this.setIsConnected(!1, "code: 1000, normal websocket close"), this.socket.removeEventListener("close", this.onCloseHandler), this.socket.removeEventListener("message", this.onMessageHandler)) : this.setIsConnected(!1, "websocket not connected yet");
        });
    }
    join(e, t, i, r, s, o, n) {
        return c(this, null, function*() {
            if (!this.isConnected) throw S.WebSocketConnectionErrors.WebSocketConnectionLost("JOIN", "Failed to send join over WS connection");
            let d = {
                name: e,
                disableVidAutoSub: i,
                data: t,
                offer: n,
                server_sub_degrade: r,
                simulcast: s,
                onDemandTracks: o
            }, u = yield this.internalCall("join", d);
            return this.isJoinCompleted = !0, this.pendingTrickle.forEach(({ target: p, candidate: h })=>this.trickle(p, h)), this.pendingTrickle.length = 0, l.d(this.TAG, `join: response=${JSON.stringify(u, null, 1)}`), u;
        });
    }
    trickle(e, t) {
        this.isJoinCompleted ? this.notify("trickle", {
            target: e,
            candidate: t,
            sfu_node_id: this.sfuNodeId
        }) : this.pendingTrickle.push({
            target: e,
            candidate: t
        });
    }
    offer(e, t) {
        return c(this, null, function*() {
            return yield this.call("offer", {
                desc: e,
                tracks: Object.fromEntries(t),
                sfu_node_id: this.sfuNodeId
            });
        });
    }
    answer(e) {
        this.notify("answer", {
            desc: e,
            sfu_node_id: this.sfuNodeId
        });
    }
    trackUpdate(e) {
        this.notify("track-update", {
            tracks: Object.fromEntries(e)
        });
    }
    broadcast(e) {
        return c(this, null, function*() {
            return yield this.call("broadcast", e);
        });
    }
    leave(e) {
        this.notify("leave", {
            client_reason: e
        });
    }
    endRoom(e, t) {
        return c(this, null, function*() {
            yield this.call("end-room", {
                lock: e,
                reason: t
            });
        });
    }
    sendEvent(e) {
        if (!this.isConnected) throw Error(`${this.TAG} not connected. Could not send event ${e}`);
        this.notify("analytics", e.toSignalParams());
    }
    ping(e) {
        let t = Date.now(), i = new Promise((s)=>{
            setTimeout(()=>{
                s(Date.now() - t);
            }, e + 1);
        }), r = this.internalCall("ping", {
            timestamp: t
        }).then(()=>Date.now() - t).catch(()=>Date.now() - t);
        return Promise.race([
            i,
            r
        ]);
    }
    requestRoleChange(e) {
        return c(this, null, function*() {
            yield this.call("role-change-request", e);
        });
    }
    requestBulkRoleChange(e) {
        return c(this, null, function*() {
            yield this.call("role-change-request", e);
        });
    }
    acceptRoleChangeRequest(e) {
        return c(this, null, function*() {
            yield this.call("role-change", e);
        });
    }
    requestTrackStateChange(e) {
        return c(this, null, function*() {
            yield this.call("track-update-request", e);
        });
    }
    requestMultiTrackStateChange(e) {
        return c(this, null, function*() {
            yield this.call("change-track-mute-state-request", e);
        });
    }
    removePeer(e) {
        return c(this, null, function*() {
            yield this.call("peer-leave-request", e);
        });
    }
    startRTMPOrRecording(e) {
        return c(this, null, function*() {
            yield this.call("rtmp-start", m({}, e));
        });
    }
    stopRTMPAndRecording() {
        return c(this, null, function*() {
            yield this.call("rtmp-stop", {});
        });
    }
    startHLSStreaming(e) {
        return c(this, null, function*() {
            yield this.call("hls-start", m({}, e));
        });
    }
    stopHLSStreaming(e) {
        return c(this, null, function*() {
            yield this.call("hls-stop", m({}, e));
        });
    }
    startTranscription(e) {
        return c(this, null, function*() {
            yield this.call("transcription-start", m({}, e));
        });
    }
    stopTranscription(e) {
        return c(this, null, function*() {
            yield this.call("transcription-stop", m({}, e));
        });
    }
    sendHLSTimedMetadata(e) {
        return c(this, null, function*() {
            yield this.call("hls-timed-metadata", m({}, e));
        });
    }
    updatePeer(e) {
        return c(this, null, function*() {
            yield this.call("peer-update", m({}, e));
        });
    }
    getPeer(e) {
        return c(this, null, function*() {
            return yield this.call("get-peer", m({}, e));
        });
    }
    joinGroup(e) {
        return c(this, null, function*() {
            return yield this.call("group-join", {
                name: e
            });
        });
    }
    leaveGroup(e) {
        return c(this, null, function*() {
            return yield this.call("group-leave", {
                name: e
            });
        });
    }
    addToGroup(e, t) {
        return c(this, null, function*() {
            yield this.call("group-add", {
                name: t,
                peer_id: e
            });
        });
    }
    removeFromGroup(e, t) {
        return c(this, null, function*() {
            yield this.call("group-remove", {
                name: t,
                peer_id: e
            });
        });
    }
    peerIterNext(e) {
        return c(this, null, function*() {
            return yield this.call("peer-iter-next", e);
        });
    }
    findPeers(e) {
        return c(this, null, function*() {
            return yield this.call("find-peer", e);
        });
    }
    findPeerByName(e) {
        return c(this, null, function*() {
            return yield this.call("peer-name-search", e);
        });
    }
    setSessionMetadata(e) {
        if (!this.isConnected) throw S.WebSocketConnectionErrors.WebSocketConnectionLost("RECONNECT_SIGNAL", "Failed to set session store value due to network disconnection");
        return this.call("set-metadata", m({}, e));
    }
    listenMetadataChange(e) {
        if (!this.isConnected) throw S.WebSocketConnectionErrors.WebSocketConnectionLost("RECONNECT_SIGNAL", "Failed to observe session store key due to network disconnection");
        return this.call("listen-metadata-change", {
            keys: e
        });
    }
    getSessionMetadata(e) {
        if (!this.isConnected) throw S.WebSocketConnectionErrors.WebSocketConnectionLost("RECONNECT_SIGNAL", "Failed to set session store value due to network disconnection");
        return this.call("get-metadata", {
            key: e
        });
    }
    setPollInfo(e) {
        return this.call("poll-info-set", m({}, e));
    }
    getPollInfo(e) {
        return this.call("poll-info-get", m({}, e));
    }
    setPollQuestions(e) {
        return this.call("poll-questions-set", m({}, e));
    }
    startPoll(e) {
        return this.call("poll-start", m({}, e));
    }
    stopPoll(e) {
        return this.call("poll-stop", m({}, e));
    }
    getPollQuestions(e) {
        return this.call("poll-questions-get", m({}, e));
    }
    setPollResponses(e) {
        return this.call("poll-response", m({}, e));
    }
    getPollResponses(e) {
        return this.call("poll-responses", m({}, e));
    }
    getPollsList(e) {
        return this.call("poll-list", m({}, e));
    }
    getPollResult(e) {
        return this.call("poll-result", m({}, e));
    }
    createWhiteboard(e) {
        return this.validateConnection(), this.call("whiteboard-create", m({}, e));
    }
    getWhiteboard(e) {
        return this.validateConnection(), this.call("whiteboard-get", m({}, e));
    }
    fetchPollLeaderboard(e) {
        return this.call("poll-leaderboard", m({}, e));
    }
    validateConnection() {
        if (!this.isConnected) throw S.WebSocketConnectionErrors.WebSocketConnectionLost("RECONNECT_SIGNAL", "Failed to send message due to network disconnection");
    }
    onMessageHandler(e) {
        let t = e.data, i = JSON.parse(t);
        if (this.resolvePingOnAnyResponse(), i.id) this.handleResponseWithId(i);
        else if (i.method) this.handleResponseWithMethod(i);
        else throw Error(`WebSocket message has no 'method' or 'id' field, message=${i}`);
    }
    handleResponseWithId(e) {
        let t = e, i = t.id;
        if (this.callbacks.has(i)) {
            let r = this.callbacks.get(i);
            this.callbacks.delete(i), t.result ? r.resolve(t.result) : r.reject(t.error);
        } else this.observer.onNotification(t);
    }
    handleResponseWithMethod(e) {
        switch(e.method){
            case "offer":
                this.observer.onOffer(e.params);
                break;
            case "trickle":
                this.observer.onTrickle(e.params);
                break;
            case "on-error":
                this.observer.onServerError(S.WebsocketMethodErrors.ServerErrors(Number(e.params.code), "on-error", e.params.message));
                break;
            case "on-warning":
                l.w(this.TAG, e.params);
                break;
            default:
                this.observer.onNotification(e);
                break;
        }
    }
    rejectPendingCalls(e = "") {
        this.callbacks.forEach((t, i)=>{
            var r, s, o, n;
            ((r = t.metadata) == null ? void 0 : r.method) !== "ping" && (l.e(this.TAG, `rejecting pending callback ${(s = t.metadata) == null ? void 0 : s.method}, id=${i}`), t.reject(S.WebSocketConnectionErrors.WebSocketConnectionLost((o = t.metadata) != null && o.method ? br((n = t.metadata) == null ? void 0 : n.method) : "RECONNECT_SIGNAL", e)), this.callbacks.delete(i));
        });
    }
    pingPongLoop(e) {
        return c(this, null, function*() {
            var i, r;
            let t = ((i = window.HMS) == null ? void 0 : i.PING_TIMEOUT) || 12e3;
            if (this.isConnected) {
                let s = yield this.ping(t);
                this.pongResponseTimes.enqueue(s), s > t ? (l.d(this.TAG, `Pong timeout ${e}, pageHidden=${Rs()}`), this.id === e && this.setIsConnected(!1, "ping pong failure")) : setTimeout(()=>this.pingPongLoop(e), ((r = window.HMS) == null ? void 0 : r.PING_INTERVAL) || 3e3);
            }
        });
    }
    call(e, t) {
        return c(this, null, function*() {
            let r = S.WebsocketMethodErrors.ServerErrors(500, e, `Default ${e} error`), s;
            for(s = 1; s <= 3; s++)try {
                return this.validateConnection(), l.d(this.TAG, `Try number ${s} sending ${e}`, t), yield this.internalCall(e, t);
            } catch (o) {
                if (r = o, l.e(this.TAG, `Failed sending ${e} try: ${s}`, {
                    method: e,
                    params: t,
                    error: r
                }), !(parseInt(`${r.code / 100}`) === 5 || r.code === 429 || r.code === 1003)) break;
                let d = (2 + Math.random() * 2) * 1e3;
                yield Oe(d);
            }
            throw l.e(`Sending ${e} over WS failed after ${Math.min(s, 3)} retries`, {
                method: e,
                params: t,
                error: r
            }), r;
        });
    }
};
var to = ()=>{
    if (!U || typeof navigator.connection == "undefined") return;
    let a = navigator.connection;
    return {
        downlink: a.downlink,
        downlinkMax: a.downlinkMax,
        effectiveType: a.effectiveType,
        rtt: a.rtt,
        saveData: a.saveData,
        type: a.type
    };
};
var I = "[HMSTransport]:", ri = class {
    constructor(e, t, i, r, s, o, n){
        this.observer = e;
        this.deviceManager = t;
        this.store = i;
        this.eventBus = r;
        this.analyticsEventsService = s;
        this.analyticsTimer = o;
        this.pluginUsageTracker = n;
        this.state = "Disconnected";
        this.trackStates = new Map;
        this.publishConnection = null;
        this.subscribeConnection = null;
        this.maxSubscribeBitrate = 0;
        this.joinRetryCount = 0;
        this.publishDisconnectTimer = 0;
        this.onScreenshareStop = ()=>{};
        this.screenStream = new Set;
        this.callbacks = new Map;
        this.setListener = (e)=>{
            this.listener = e;
        };
        this.setOnScreenshareStop = (e)=>{
            this.onScreenshareStop = e;
        };
        this.signalObserver = {
            onOffer: (e)=>c(this, null, function*() {
                    try {
                        if (!this.subscribeConnection) return;
                        if (e.sfu_node_id && this.subscribeConnection.sfuNodeId && this.subscribeConnection.sfuNodeId !== e.sfu_node_id) {
                            l.d(I, "ignoring old offer");
                            return;
                        }
                        yield this.subscribeConnection.setRemoteDescription(e), l.d(I, `[SUBSCRIBE] Adding ${this.subscribeConnection.candidates.length} ice-candidates`, this.subscribeConnection.candidates);
                        for (let i of this.subscribeConnection.candidates)yield this.subscribeConnection.addIceCandidate(i);
                        this.subscribeConnection.candidates.length = 0;
                        let t = yield this.subscribeConnection.createAnswer();
                        yield this.subscribeConnection.setLocalDescription(t), this.signal.answer(t), l.d(I, "[role=SUBSCRIBE] onOffer renegotiation DONE \u2705");
                    } catch (t) {
                        l.d(I, "[role=SUBSCRIBE] onOffer renegotiation FAILED \u274C", t), this.state = "Failed";
                        let i;
                        t instanceof k ? i = t : i = S.GenericErrors.Unknown("SUBSCRIBE", t.message), this.observer.onFailure(i), this.eventBus.analytics.publish(y.subscribeFail(i));
                    }
                }),
            onTrickle: (e)=>c(this, null, function*() {
                    let t = e.target === 0 ? this.publishConnection : this.subscribeConnection;
                    t != null && t.remoteDescription ? yield t.addIceCandidate(e.candidate) : t == null || t.candidates.push(e.candidate);
                }),
            onNotification: (e)=>this.observer.onNotification(e),
            onServerError: (e)=>c(this, null, function*() {
                    yield this.observer.onStateChange("Failed", e);
                }),
            onFailure: (e)=>{
                this.joinParameters && this.retryScheduler.schedule({
                    category: 1,
                    error: e,
                    task: this.retrySignalDisconnectTask,
                    originalState: this.state
                });
            },
            onOffline: (e)=>c(this, null, function*() {
                    l.d(I, "socket offline", lr[this.state]);
                    try {
                        this.state !== "Leaving" && this.joinParameters && this.retryScheduler.schedule({
                            category: 1,
                            error: S.WebSocketConnectionErrors.WebSocketConnectionLost("RECONNECT_SIGNAL", e),
                            task: this.retrySignalDisconnectTask,
                            originalState: this.state
                        });
                    } catch (t) {
                        console.error(t);
                    }
                }),
            onOnline: ()=>{
                var e;
                l.d(I, "socket online", lr[this.state]), this.analyticsSignalTransport.flushFailedEvents((e = this.store.getLocalPeer()) == null ? void 0 : e.peerId);
            },
            onNetworkOnline: ()=>{
                this.analyticsEventsService.flushFailedClientEvents();
            }
        };
        this.signal = new ii(this.signalObserver);
        this.analyticsSignalTransport = new Sr(this.signal);
        this.publishDtlsStateTimer = 0;
        this.lastPublishDtlsState = "new";
        this.handleLocalRoleUpdate = (i)=>c(this, [
                i
            ], function*({ oldRole: e, newRole: t }) {
                !this.doesRoleNeedWebRTC(e) && this.doesRoleNeedWebRTC(t) && (l.d(I, "Local peer role updated to webrtc role, creating PeerConnections and performing inital publish negotiation \u23F3"), this.createPeerConnections(), yield this.negotiateOnFirstPublish());
            });
        this.retryPublishIceFailedTask = ()=>c(this, null, function*() {
                if (this.publishConnection) {
                    let e = new Promise((t, i)=>{
                        this.callbacks.set(rt, {
                            promise: {
                                resolve: t,
                                reject: i
                            },
                            action: "RESTART_ICE",
                            extra: {}
                        });
                    });
                    yield this.performPublishRenegotiation({
                        iceRestart: this.publishConnection.connectionState !== "connected"
                    }), yield e;
                }
                return !0;
            });
        this.retrySubscribeIceFailedTask = ()=>c(this, null, function*() {
                if (this.subscribeConnection && this.subscribeConnection.connectionState !== "connected") {
                    let e = new Promise((i, r)=>{
                        this.callbacks.set(st, {
                            promise: {
                                resolve: i,
                                reject: r
                            },
                            action: "RESTART_ICE",
                            extra: {}
                        });
                    }), t = new Promise((i)=>{
                        setTimeout(i, 6e4, !1);
                    });
                    return Promise.race([
                        e,
                        t
                    ]);
                }
                return !0;
            });
        this.retrySignalDisconnectTask = ()=>c(this, null, function*() {
                var t;
                l.d(I, "retrySignalDisconnectTask", {
                    signalConnected: this.signal.isConnected
                }), this.signal.isConnected || (yield this.internalConnect(this.joinParameters.authToken, this.joinParameters.endpoint, this.joinParameters.peerId, this.joinParameters.iceServers));
                let e = (t = this.store.getRoom()) != null && t.joinedAt ? this.signal.isConnected && (yield this.retryPublishIceFailedTask()) : this.signal.isConnected;
                return this.signal.trackUpdate(this.trackStates), e;
            });
        this.webrtcInternals = new yi(this.store, this.eventBus);
        let d = (u, p)=>c(this, null, function*() {
                u !== this.state && (this.state = u, yield this.observer.onStateChange(this.state, p));
            });
        this.retryScheduler = new pr(d, this.sendErrorAnalyticsEvent.bind(this)), this.eventBus.statsUpdate.subscribe((u)=>{
            var h, T;
            let p = ((T = (h = u.getLocalPeerStats()) == null ? void 0 : h.subscribe) == null ? void 0 : T.bitrate) || 0;
            this.maxSubscribeBitrate = Math.max(this.maxSubscribeBitrate, p);
        }), this.eventBus.localAudioEnabled.subscribe(({ track: u, enabled: p })=>this.trackUpdate(u, p)), this.eventBus.localVideoEnabled.subscribe(({ track: u, enabled: p })=>this.trackUpdate(u, p));
    }
    getWebsocketEndpoint() {
        if (this.initConfig) return this.initConfig.endpoint;
    }
    getWebrtcInternals() {
        return this.webrtcInternals;
    }
    isFlagEnabled(e) {
        var r;
        let t = (r = this.initConfig) == null ? void 0 : r.config;
        return ((t == null ? void 0 : t.enabledFlags) || []).includes(e);
    }
    setConnectivityListener(e) {
        this.connectivityListener = e;
    }
    preview(e, t, i, r, s = !1, o) {
        return c(this, null, function*() {
            let n = yield this.connect(e, t, i, r, s, o);
            return this.state = "Preview", this.observer.onStateChange(this.state), n;
        });
    }
    join(e, t, i, r, s = !1, o) {
        return c(this, null, function*() {
            l.d(I, "join: started \u23F0");
            try {
                (!this.signal.isConnected || !this.initConfig) && (yield this.connect(e, r, t, i, s, o)), this.validateNotDisconnected("connect"), this.initConfig && (yield this.waitForLocalRoleAvailability(), yield this.createConnectionsAndNegotiateJoin(i, s), this.initStatsAnalytics(), l.d(I, "\u2705 join: Negotiated over PUBLISH connection"));
            } catch (n) {
                l.e(I, `join: failed \u274C [token=${e}]`, n), this.state = "Failed";
                let d = n;
                throw d.isTerminal = d.isTerminal || d.code === 500, yield this.observer.onStateChange(this.state, d), d;
            }
            l.d(I, "\u2705 join: successful"), this.state = "Joined", this.observer.onStateChange(this.state);
        });
    }
    connect(e, t, i, r, s = !1, o) {
        return c(this, null, function*() {
            this.setTransportStateForConnect(), this.joinParameters = new dr(e, i, r.name, r.metaData, t, s, o);
            try {
                return yield this.internalConnect(e, t, i, o);
            } catch (n) {
                if (n instanceof k && ([
                    P.WebSocketConnectionErrors.WEBSOCKET_CONNECTION_LOST,
                    P.WebSocketConnectionErrors.FAILED_TO_CONNECT,
                    P.WebSocketConnectionErrors.ABNORMAL_CLOSE,
                    P.APIErrors.ENDPOINT_UNREACHABLE
                ].includes(n.code) || n.code.toString().startsWith("5") || n.code.toString().startsWith("429"))) {
                    let u = ()=>c(this, null, function*() {
                            return yield this.internalConnect(e, t, i, o), !!(this.initConfig && this.initConfig.endpoint);
                        });
                    yield this.retryScheduler.schedule({
                        category: 0,
                        error: n,
                        task: u,
                        originalState: this.state,
                        changeState: !1
                    });
                } else throw n;
            }
        });
    }
    leave(i) {
        return c(this, arguments, function*(e, t = "user request") {
            var r, s, o;
            this.retryScheduler.reset(), this.joinParameters = void 0, l.d(I, "leaving in transport");
            try {
                let n = this.pluginUsageTracker.getPluginUsage("HMSKrispPlugin");
                if (n && this.eventBus.analytics.publish(y.getKrispUsage(n)), this.state = "Leaving", (r = this.publishStatsAnalytics) == null || r.stop(), (s = this.subscribeStatsAnalytics) == null || s.stop(), (o = this.webrtcInternals) == null || o.cleanup(), this.clearPeerConnections(), e) try {
                    this.signal.leave(t), l.d(I, "signal leave done");
                } catch (d) {
                    l.w(I, "failed to send leave on websocket to server", d);
                }
                this.analyticsEventsService.flushFailedClientEvents(), this.analyticsEventsService.reset(), yield this.signal.close();
            } catch (n) {
                this.eventBus.analytics.publish(y.disconnect(n)), l.e(I, "leave: FAILED \u274C", n);
            } finally{
                this.state = "Disconnected", this.observer.onStateChange(this.state);
            }
        });
    }
    publish(e) {
        return c(this, null, function*() {
            var t;
            for (let i of e)try {
                yield this.publishTrack(i), (t = this.connectivityListener) == null || t.onMediaPublished(i);
            } catch (r) {
                this.eventBus.analytics.publish(y.publish({
                    devices: this.deviceManager.getDevices(),
                    error: r
                }));
            }
        });
    }
    unpublish(e) {
        return c(this, null, function*() {
            for (let t of e)yield this.unpublishTrack(t);
        });
    }
    setSFUNodeId(e) {
        var t, i;
        this.signal.setSfuNodeId(e), this.sfuNodeId ? e && this.sfuNodeId !== e && (this.sfuNodeId = e, this.handleSFUMigration()) : (this.sfuNodeId = e, (t = this.publishConnection) == null || t.setSfuNodeId(e), (i = this.subscribeConnection) == null || i.setSfuNodeId(e));
    }
    handleSFUMigration() {
        return c(this, null, function*() {
            var s, o;
            l.time("sfu migration"), this.clearPeerConnections();
            let e = this.store.getPeerMap();
            this.store.removeRemoteTracks();
            for(let n in e){
                let d = e[n];
                d.isLocal || (d.audioTrack = void 0, d.videoTrack = void 0, d.auxiliaryTracks = []);
            }
            let t = this.store.getLocalPeer();
            if (!t) return;
            this.createPeerConnections(), this.trackStates.clear(), yield this.negotiateOnFirstPublish();
            let i = new Map;
            if (t.audioTrack) {
                let n = t.audioTrack.stream;
                i.get(n.id) || i.set(n.id, new Se(new MediaStream));
                let d = t.audioTrack.clone(i.get(n.id));
                this.store.removeTrack(t.audioTrack), t.audioTrack.cleanup(), yield this.publishTrack(d), t.audioTrack = d;
            }
            if (t.videoTrack) {
                let n = t.videoTrack.stream;
                i.get(n.id) || i.set(n.id, new Se(new MediaStream)), this.store.removeTrack(t.videoTrack);
                let d = t.videoTrack.clone(i.get(n.id));
                t.videoTrack.cleanup(), yield this.publishTrack(d), t.videoTrack = d;
            }
            let r = [];
            for(; t.auxiliaryTracks.length > 0;){
                let n = t.auxiliaryTracks.shift();
                if (n) {
                    let d = n.stream;
                    i.get(d.id) || i.set(d.id, new Se(n.source === "screen" ? d.nativeStream.clone() : new MediaStream)), this.store.removeTrack(n);
                    let u = n.clone(i.get(d.id));
                    u.type === "video" && u.source === "screen" && (this.screenStream.add(d.nativeStream), this.screenStream.add(u.stream.nativeStream), u.nativeTrack.addEventListener("ended", this.onScreenshareStop)), n.cleanup(), yield this.publishTrack(u), r.push(u);
                }
            }
            t.auxiliaryTracks = r, i.clear(), (o = (s = this.listener) == null ? void 0 : s.onSFUMigration) == null || o.call(s), l.timeEnd("sfu migration");
        });
    }
    trackUpdate(e, t) {
        var s;
        let r = Array.from(this.trackStates.values()).find((o)=>e.type === o.type && e.source === o.source);
        if (r) {
            let o = new Vt(M(m({}, r), {
                mute: !t
            }));
            this.trackStates.set(r.track_id, o), l.d(I, "Track Update", this.trackStates, e), this.signal.trackUpdate(new Map([
                [
                    r.track_id,
                    o
                ]
            ]));
            let n = this.store.getLocalPeer();
            n && t === e.enabled && ((s = this.listener) == null || s.onTrackUpdate(t ? 3 : 2, e, n));
        }
    }
    publishTrack(e) {
        return c(this, null, function*() {
            e.publishedTrackId = e.getTrackIDBeingSent(), l.d(I, `\u23F3 publishTrack: trackId=${e.trackId}, toPublishTrackId=${e.publishedTrackId}`, `${e}`), this.trackStates.set(e.publishedTrackId, new Vt(e));
            let t = new Promise((s, o)=>{
                this.callbacks.set(rt, {
                    promise: {
                        resolve: s,
                        reject: o
                    },
                    action: "PUBLISH",
                    extra: {}
                });
            }), i = e.stream;
            i.setConnection(this.publishConnection);
            let r = this.store.getSimulcastLayers(e.source);
            i.addTransceiver(e, r), l.time(`publish-${e.trackId}-${e.type}`), yield t, l.timeEnd(`publish-${e.trackId}-${e.type}`), this.store.addTrack(e), yield i.setMaxBitrateAndFramerate(e).then(()=>{
                l.d(I, `Setting maxBitrate=${e.settings.maxBitrate} kpbs${e instanceof G ? ` and maxFramerate=${e.settings.maxFramerate}` : ""} for ${e.source} ${e.type} ${e.trackId}`);
            }).catch((s)=>l.w(I, "Failed setting maxBitrate and maxFramerate", s)), e.isPublished = !0, l.d(I, `\u2705 publishTrack: trackId=${e.trackId}`, `${e}`, this.callbacks);
        });
    }
    unpublishTrack(e) {
        return c(this, null, function*() {
            if (l.d(I, `\u23F3 unpublishTrack: trackId=${e.trackId}`, `${e}`), e.publishedTrackId && this.trackStates.has(e.publishedTrackId)) this.trackStates.delete(e.publishedTrackId);
            else {
                let s = Array.from(this.trackStates.values()).find((o)=>e.type === o.type && e.source === o.source);
                s && this.trackStates.delete(s.track_id);
            }
            let t = new Promise((r, s)=>{
                this.callbacks.set(rt, {
                    promise: {
                        resolve: r,
                        reject: s
                    },
                    action: "UNPUBLISH",
                    extra: {}
                });
            });
            e.stream.removeSender(e), yield t, yield e.cleanup(), e.source === "screen" && this.screenStream && this.screenStream.forEach((r)=>{
                r.getTracks().forEach((s)=>{
                    s.stop();
                }), this.screenStream.delete(r);
            }), this.store.removeTrack(e), l.d(I, `\u2705 unpublishTrack: trackId=${e.trackId}`, this.callbacks);
        });
    }
    clearPeerConnections() {
        return c(this, null, function*() {
            var e, t;
            clearTimeout(this.publishDtlsStateTimer), this.publishDtlsStateTimer = 0, clearTimeout(this.publishDisconnectTimer), this.publishDisconnectTimer = 0, this.lastPublishDtlsState = "new", (e = this.publishConnection) == null || e.close(), (t = this.subscribeConnection) == null || t.close(), this.publishConnection = null, this.subscribeConnection = null;
        });
    }
    waitForLocalRoleAvailability() {
        if (!this.store.hasRoleDetailsArrived()) return new Promise((e)=>{
            this.eventBus.policyChange.subscribeOnce(()=>e());
        });
    }
    createConnectionsAndNegotiateJoin(e, t = !1) {
        return c(this, null, function*() {
            let i = this.doesLocalPeerNeedWebRTC();
            i && this.createPeerConnections(), this.analyticsTimer.start("join_response_time"), yield this.negotiateJoinWithRetry({
                name: e.name,
                data: e.metaData,
                autoSubscribeVideo: t,
                isWebRTC: i
            }), this.analyticsTimer.end("join_response_time");
        });
    }
    createPeerConnections() {
        var t, i, r;
        let e = (s, o, n = !1)=>{
            ([
                "disconnected",
                "failed"
            ].includes(o) ? l.w.bind(l) : l.d.bind(l))(I, `${ht[s]} ${n ? "ice" : ""} connection state change: ${o}`);
        };
        if (this.initConfig) {
            let s = {
                onRenegotiationNeeded: ()=>c(this, null, function*() {
                        yield this.performPublishRenegotiation();
                    }),
                onDTLSTransportStateChange: (n)=>{
                    var p, h, T;
                    if ((n === "failed" ? l.w.bind(l) : l.d.bind(l))(I, `Publisher on dtls transport state change: ${n}`), !n || this.lastPublishDtlsState === n || (this.lastPublishDtlsState = n, this.publishDtlsStateTimer !== 0 && (clearTimeout(this.publishDtlsStateTimer), this.publishDtlsStateTimer = 0), n !== "connecting" && n !== "failed")) return;
                    let u = (T = (h = (p = this.initConfig) == null ? void 0 : p.config) == null ? void 0 : h.dtlsStateTimeouts) == null ? void 0 : T[n];
                    !u || u <= 0 || (this.publishDtlsStateTimer = window.setTimeout(()=>{
                        var f;
                        let g = (f = this.publishConnection) == null ? void 0 : f.nativeConnection.connectionState;
                        if (g && n && g === n) {
                            let E = S.WebrtcErrors.ICEFailure("PUBLISH", `DTLS transport state ${n} timeout:${u}ms`, !0);
                            this.eventBus.analytics.publish(y.disconnect(E)), this.observer.onFailure(E);
                        }
                    }, u));
                },
                onDTLSTransportError: (n)=>{
                    l.e(I, `onDTLSTransportError ${n.name} ${n.message}`, n), this.eventBus.analytics.publish(y.disconnect(n));
                },
                onIceConnectionChange: (n)=>c(this, null, function*() {
                        e(0, n, !0);
                    }),
                onConnectionStateChange: (n)=>c(this, null, function*() {
                        var d, u, p, h, T, g, f, E;
                        e(0, n, !1), n !== "new" && (n === "connected" ? ((d = this.connectivityListener) == null || d.onICESuccess(!0), (u = this.publishConnection) == null || u.handleSelectedIceCandidatePairs()) : n === "failed" ? yield this.handleIceConnectionFailure(0, S.WebrtcErrors.ICEFailure("PUBLISH", `local candidate - ${(T = (h = (p = this.publishConnection) == null ? void 0 : p.selectedCandidatePair) == null ? void 0 : h.local) == null ? void 0 : T.candidate}; remote candidate - ${(E = (f = (g = this.publishConnection) == null ? void 0 : g.selectedCandidatePair) == null ? void 0 : f.remote) == null ? void 0 : E.candidate}`)) : this.publishDisconnectTimer = window.setTimeout(()=>{
                            var v, R, $, ue, ge, pe, St;
                            ((v = this.publishConnection) == null ? void 0 : v.connectionState) !== "connected" && this.handleIceConnectionFailure(0, S.WebrtcErrors.ICEDisconnected("PUBLISH", `local candidate - ${(ue = ($ = (R = this.publishConnection) == null ? void 0 : R.selectedCandidatePair) == null ? void 0 : $.local) == null ? void 0 : ue.candidate}; remote candidate - ${(St = (pe = (ge = this.publishConnection) == null ? void 0 : ge.selectedCandidatePair) == null ? void 0 : pe.remote) == null ? void 0 : St.candidate}`));
                        }, 5e3));
                    }),
                onIceCandidate: (n)=>{
                    var d;
                    (d = this.connectivityListener) == null || d.onICECandidate(n, !0);
                },
                onSelectedCandidatePairChange: (n)=>{
                    var d;
                    (d = this.connectivityListener) == null || d.onSelectedICECandidatePairChange(n, !0);
                }
            }, o = {
                onApiChannelMessage: (n)=>{
                    this.observer.onNotification(JSON.parse(n));
                },
                onTrackAdd: (n)=>{
                    l.d(I, "[Subscribe] onTrackAdd", `${n}`), this.observer.onTrackAdd(n);
                },
                onTrackRemove: (n)=>{
                    l.d(I, "[Subscribe] onTrackRemove", `${n}`), this.observer.onTrackRemove(n);
                },
                onIceConnectionChange: (n)=>c(this, null, function*() {
                        var d;
                        if (e(1, n, !0), n === "connected") {
                            let u = this.callbacks.get(st);
                            this.callbacks.delete(st), (d = this.connectivityListener) == null || d.onICESuccess(!1), u && u.promise.resolve(!0);
                        }
                    }),
                onConnectionStateChange: (n)=>c(this, null, function*() {
                        var d, u, p, h, T, g, f;
                        if (e(1, n, !1), n === "failed") yield this.handleIceConnectionFailure(1, S.WebrtcErrors.ICEFailure("SUBSCRIBE", `local candidate - ${(p = (u = (d = this.subscribeConnection) == null ? void 0 : d.selectedCandidatePair) == null ? void 0 : u.local) == null ? void 0 : p.candidate}; remote candidate - ${(g = (T = (h = this.subscribeConnection) == null ? void 0 : h.selectedCandidatePair) == null ? void 0 : T.remote) == null ? void 0 : g.candidate}`));
                        else if (n === "disconnected") setTimeout(()=>{
                            var E, v, R, $, ue, ge, pe;
                            ((E = this.subscribeConnection) == null ? void 0 : E.connectionState) === "disconnected" && this.handleIceConnectionFailure(1, S.WebrtcErrors.ICEDisconnected("SUBSCRIBE", `local candidate - ${($ = (R = (v = this.subscribeConnection) == null ? void 0 : v.selectedCandidatePair) == null ? void 0 : R.local) == null ? void 0 : $.candidate}; remote candidate - ${(pe = (ge = (ue = this.subscribeConnection) == null ? void 0 : ue.selectedCandidatePair) == null ? void 0 : ge.remote) == null ? void 0 : pe.candidate}`));
                        }, 5e3);
                        else if (n === "connected") {
                            (f = this.subscribeConnection) == null || f.handleSelectedIceCandidatePairs();
                            let E = this.callbacks.get(st);
                            this.callbacks.delete(st), E && E.promise.resolve(!0);
                        }
                    }),
                onIceCandidate: (n)=>{
                    var d;
                    (d = this.connectivityListener) == null || d.onICECandidate(n, !1);
                },
                onSelectedCandidatePairChange: (n)=>{
                    var d;
                    (d = this.connectivityListener) == null || d.onSelectedICECandidatePairChange(n, !1);
                }
            };
            this.publishConnection || (this.publishConnection = new Xt(this.signal, this.initConfig.rtcConfiguration, s)), this.subscribeConnection || (this.subscribeConnection = new ei(this.signal, this.initConfig.rtcConfiguration, this.isFlagEnabled.bind(this), o));
        }
        (r = this.webrtcInternals) == null || r.setPeerConnections({
            publish: (t = this.publishConnection) == null ? void 0 : t.nativeConnection,
            subscribe: (i = this.subscribeConnection) == null ? void 0 : i.nativeConnection
        });
    }
    negotiateJoinWithRetry(s) {
        return c(this, arguments, function*({ name: e, data: t, autoSubscribeVideo: i, isWebRTC: r = !0 }) {
            try {
                yield this.negotiateJoin({
                    name: e,
                    data: t,
                    autoSubscribeVideo: i,
                    isWebRTC: r
                });
            } catch (o) {
                l.e(I, "Join negotiation failed \u274C", o);
                let n = o instanceof k ? o : S.WebsocketMethodErrors.ServerErrors(500, "JOIN", `Websocket join error - ${o.message}`), d = parseInt(`${n.code / 100}`) === 5 || [
                    P.WebSocketConnectionErrors.WEBSOCKET_CONNECTION_LOST,
                    429
                ].includes(n.code);
                if (n.code === 410 && (n.isTerminal = !0), d) {
                    this.joinRetryCount = 0, n.isTerminal = !1;
                    let u = ()=>c(this, null, function*() {
                            return this.joinRetryCount++, yield this.negotiateJoin({
                                name: e,
                                data: t,
                                autoSubscribeVideo: i,
                                isWebRTC: r
                            });
                        });
                    yield this.retryScheduler.schedule({
                        category: 2,
                        error: n,
                        task: u,
                        originalState: "Joined",
                        changeState: !1
                    });
                } else throw o;
            }
        });
    }
    negotiateJoin(s) {
        return c(this, arguments, function*({ name: e, data: t, autoSubscribeVideo: i, isWebRTC: r = !0 }) {
            return r ? yield this.negotiateJoinWebRTC({
                name: e,
                data: t,
                autoSubscribeVideo: i
            }) : yield this.negotiateJoinNonWebRTC({
                name: e,
                data: t,
                autoSubscribeVideo: i
            });
        });
    }
    negotiateJoinWebRTC(r) {
        return c(this, arguments, function*({ name: e, data: t, autoSubscribeVideo: i }) {
            if (l.d(I, "\u23F3 join: Negotiating over PUBLISH connection"), !this.publishConnection) return l.e(I, "Publish peer connection not found, cannot negotiate"), !1;
            let s = yield this.publishConnection.createOffer();
            yield this.publishConnection.setLocalDescription(s);
            let o = this.isFlagEnabled("subscribeDegradation"), n = this.isFlagEnabled("simulcast"), d = this.isFlagEnabled("onDemandTracks"), u = yield this.signal.join(e, t, !i, o, n, d, s);
            this.setSFUNodeId(u == null ? void 0 : u.sfu_node_id), yield this.publishConnection.setRemoteDescription(u);
            for (let p of this.publishConnection.candidates)yield this.publishConnection.addIceCandidate(p);
            return this.publishConnection.initAfterJoin(), !!u;
        });
    }
    negotiateJoinNonWebRTC(r) {
        return c(this, arguments, function*({ name: e, data: t, autoSubscribeVideo: i }) {
            l.d(I, "\u23F3 join: Negotiating Non-WebRTC");
            let s = this.isFlagEnabled("subscribeDegradation"), o = this.isFlagEnabled("simulcast"), n = this.isFlagEnabled("onDemandTracks"), d = yield this.signal.join(e, t, !i, s, o, n);
            return this.setSFUNodeId(d == null ? void 0 : d.sfu_node_id), !!d;
        });
    }
    negotiateOnFirstPublish() {
        return c(this, null, function*() {
            if (l.d(I, "\u23F3 Negotiating offer over PUBLISH connection"), !this.publishConnection) return l.e(I, "Publish peer connection not found, cannot negotiate"), !1;
            try {
                let e = yield this.publishConnection.createOffer(this.trackStates);
                yield this.publishConnection.setLocalDescription(e);
                let t = yield this.signal.offer(e, this.trackStates);
                yield this.publishConnection.setRemoteDescription(t);
                for (let i of this.publishConnection.candidates)yield this.publishConnection.addIceCandidate(i);
                return this.publishConnection.initAfterJoin(), !!t;
            } catch (e) {
                if (e instanceof k && e.code === 421) return !0;
                throw e;
            }
        });
    }
    performPublishRenegotiation(e) {
        return c(this, null, function*() {
            l.d(I, "\u23F3 [role=PUBLISH] onRenegotiationNeeded START", this.trackStates);
            let t = this.callbacks.get(rt);
            if (!t) {
                l.w(I, "no callback found for renegotiation");
                return;
            }
            if (!this.publishConnection) {
                l.e(I, "Publish peer connection not found, cannot renegotiate");
                return;
            }
            try {
                let i = yield this.publishConnection.createOffer(this.trackStates, e);
                yield this.publishConnection.setLocalDescription(i), l.time("renegotiation-offer-exchange");
                let r = yield this.signal.offer(i, this.trackStates);
                this.callbacks.delete(rt), l.timeEnd("renegotiation-offer-exchange"), yield this.publishConnection.setRemoteDescription(r), t.promise.resolve(!0), l.d(I, "[role=PUBLISH] onRenegotiationNeeded DONE \u2705");
            } catch (i) {
                let r;
                i instanceof k ? r = i : r = S.GenericErrors.Unknown("PUBLISH", i.message), r.code === 421 ? t.promise.resolve(!0) : t.promise.reject(r), l.d(I, "[role=PUBLISH] onRenegotiationNeeded FAILED \u274C");
            }
        });
    }
    handleIceConnectionFailure(e, t) {
        return c(this, null, function*() {
            this.retryScheduler.isTaskInProgress(4) || (e === 0 ? this.retryScheduler.schedule({
                category: 3,
                error: t,
                task: this.retryPublishIceFailedTask,
                originalState: "Joined"
            }) : this.retryScheduler.schedule({
                category: 4,
                error: t,
                task: this.retrySubscribeIceFailedTask,
                originalState: "Joined"
            }));
        });
    }
    internalConnect(e, t, i, r) {
        return c(this, null, function*() {
            var o, n, d;
            l.d(I, "connect: started \u23F0");
            let s = new Date;
            try {
                this.analyticsTimer.start("init_response_time"), this.initConfig = yield ti.fetchInitConfig({
                    token: e,
                    peerId: i,
                    userAgent: this.store.getUserAgent(),
                    initEndpoint: t,
                    iceServers: r
                }), (o = this.connectivityListener) == null || o.onInitSuccess(this.initConfig.endpoint);
                let u = this.store.getRoom();
                return u && (u.effectsKey = (n = this.initConfig.config.vb) == null ? void 0 : n.effectsKey, u.isEffectsEnabled = this.isFlagEnabled("effectsSDKEnabled"), u.disableNoneLayerRequest = this.isFlagEnabled("disableNoneLayerRequest"), u.isVBEnabled = this.isFlagEnabled("vb"), u.isHipaaEnabled = this.isFlagEnabled("hipaa"), u.isNoiseCancellationEnabled = this.isFlagEnabled("noiseCancellation")), this.analyticsTimer.end("init_response_time"), He.setWebsocketEndpoint(this.initConfig.endpoint), this.validateNotDisconnected("post init"), yield this.openSignal(e, i), this.observer.onConnected(), (d = this.connectivityListener) == null || d.onSignallingSuccess(), this.store.setSimulcastEnabled(this.isFlagEnabled("simulcast")), l.d(I, "Adding Analytics Transport: JsonRpcSignal"), this.analyticsEventsService.setTransport(this.analyticsSignalTransport), this.analyticsEventsService.flush(), this.initConfig;
            } catch (u) {
                throw this.state !== "Reconnecting" && this.eventBus.analytics.publish(y.connect(u, this.getAdditionalAnalyticsProperties(), s, new Date, t)), l.e(I, "\u274C internal connect: failed", u), u;
            }
        });
    }
    validateNotDisconnected(e) {
        if (this.state === "Disconnected") throw l.w(I, "aborting join as transport state is disconnected"), S.GenericErrors.ValidationFailed(`leave called before join could complete - stage=${e}`);
    }
    openSignal(e, t) {
        return c(this, null, function*() {
            if (!this.initConfig) throw S.APIErrors.InitConfigNotAvailable("INIT", "Init Config not found");
            l.d(I, "\u23F3 internal connect: connecting to ws endpoint", this.initConfig.endpoint);
            let i = new URL(this.initConfig.endpoint);
            i.searchParams.set("peer", t), i.searchParams.set("token", e), i.searchParams.set("user_agent_v2", this.store.getUserAgent()), i.searchParams.set("protocol_version", ia), i.searchParams.set("protocol_spec", ra), this.endpoint = i.toString(), this.analyticsTimer.start("ws_connect_time"), yield this.signal.open(this.endpoint), this.analyticsTimer.end("ws_connect_time"), this.analyticsTimer.start("on_policy_change_time"), this.analyticsTimer.start("room_state_time"), l.d(I, "\u2705 internal connect: connected to ws endpoint");
        });
    }
    initStatsAnalytics() {
        var e, t;
        this.isFlagEnabled("publishStats") && (this.publishStatsAnalytics = new Qt(this.store, this.eventBus, this.getValueFromInitConfig("publishStats", "maxSampleWindowSize", 30), this.getValueFromInitConfig("publishStats", "maxSamplePushInterval", 300)), (e = this.getWebrtcInternals()) == null || e.start()), this.isFlagEnabled("subscribeStats") && (this.subscribeStatsAnalytics = new zt(this.store, this.eventBus, this.getValueFromInitConfig("subscribeStats", "maxSampleWindowSize", 10), this.getValueFromInitConfig("subscribeStats", "maxSamplePushInterval", 60)), (t = this.getWebrtcInternals()) == null || t.start());
    }
    getValueFromInitConfig(e, t, i) {
        var r, s;
        return ((s = (r = this.initConfig) == null ? void 0 : r.config[e]) == null ? void 0 : s[t]) || i;
    }
    doesRoleNeedWebRTC(e) {
        var r, s;
        if (!this.isFlagEnabled("nonWebRTCDisableOffer")) return !0;
        let t = !!(e.publishParams.allowed && ((r = e.publishParams.allowed) == null ? void 0 : r.length) > 0), i = !!(e.subscribeParams.subscribeToRoles && ((s = e.subscribeParams.subscribeToRoles) == null ? void 0 : s.length) > 0);
        return t || i;
    }
    doesLocalPeerNeedWebRTC() {
        var t;
        let e = (t = this.store.getLocalPeer()) == null ? void 0 : t.role;
        return e ? this.doesRoleNeedWebRTC(e) : !0;
    }
    setTransportStateForConnect() {
        if (this.state === "Failed" && (this.state = "Disconnected"), this.state !== "Disconnected" && this.state !== "Reconnecting") throw S.WebsocketMethodErrors.AlreadyJoined("JOIN", `Cannot join a meeting in ${this.state} state`);
        this.state === "Disconnected" && (this.state = "Connecting", this.observer.onStateChange(this.state));
    }
    sendErrorAnalyticsEvent(e, t) {
        let i = this.getAdditionalAnalyticsProperties(), r;
        switch(t){
            case 0:
                r = y.connect(e, i);
                break;
            case 1:
                r = y.disconnect(e, i);
                break;
            case 2:
                r = y.join({
                    error: e,
                    time: this.analyticsTimer.getTimeTaken("join_time"),
                    init_response_time: this.analyticsTimer.getTimeTaken("init_response_time"),
                    ws_connect_time: this.analyticsTimer.getTimeTaken("ws_connect_time"),
                    on_policy_change_time: this.analyticsTimer.getTimeTaken("on_policy_change_time"),
                    local_audio_track_time: this.analyticsTimer.getTimeTaken("local_audio_track_time"),
                    local_video_track_time: this.analyticsTimer.getTimeTaken("local_video_track_time"),
                    retries_join: this.joinRetryCount
                });
                break;
            case 3:
                r = y.publish({
                    error: e
                });
                break;
            case 4:
                r = y.subscribeFail(e);
                break;
        }
        this.eventBus.analytics.publish(r);
    }
    getSubscribeConnection() {
        return this.subscribeConnection;
    }
    getAdditionalAnalyticsProperties() {
        var o, n, d, u, p, h, T, g;
        let e = to(), t = typeof document != "undefined" && document.hidden, i = this.store.getRemoteVideoTracks().filter((f)=>f.degraded).length, r = (u = (d = (n = (o = this.getWebrtcInternals()) == null ? void 0 : o.getCurrentStats()) == null ? void 0 : n.getLocalPeerStats()) == null ? void 0 : d.publish) == null ? void 0 : u.bitrate, s = (g = (T = (h = (p = this.getWebrtcInternals()) == null ? void 0 : p.getCurrentStats()) == null ? void 0 : h.getLocalPeerStats()) == null ? void 0 : T.subscribe) == null ? void 0 : g.bitrate;
        return {
            network_info: e,
            document_hidden: t,
            num_degraded_tracks: i,
            bitrate: {
                publish: r,
                subscribe: s
            },
            max_sub_bitrate: this.maxSubscribeBitrate,
            recent_pong_response_times: this.signal.getPongResponseTimes(),
            transport_state: this.state
        };
    }
};
function Mr(a) {
    if (!a || a.length === 0) throw S.APIErrors.InvalidTokenFormat("INIT", "Token cannot be an empty string or undefined or null");
    let e = a.split(".");
    if (e.length !== 3) throw S.APIErrors.InvalidTokenFormat("INIT", "Expected 3 '.' separate fields - header, payload and signature respectively");
    let t = atob(e[1]);
    try {
        let i = JSON.parse(t);
        return {
            roomId: i.room_id,
            userId: i.user_id,
            role: i.role
        };
    } catch (i) {
        throw S.APIErrors.InvalidTokenFormat("INIT", `couldn't parse to json - ${i.message}`);
    }
}
var ro = {
    published: !1,
    isInitialised: !1,
    isReconnecting: !1,
    isPreviewInProgress: !1,
    isPreviewCalled: !1,
    isJoinInProgress: !1,
    deviceManagersInitialised: !1
}, yr = class {
    constructor(){
        this.TAG = "[HMSSdk]:";
        this.transportState = "Disconnected";
        this.analyticsTimer = new Ti;
        this.sdkState = m({}, ro);
        this.isDiagnostics = !1;
        this.playlistSettings = {
            video: {
                bitrate: $r
            },
            audio: {
                bitrate: Kr
            }
        };
        this.handleAutoplayError = (e)=>{
            var t, i;
            (i = (t = this.errorListener) == null ? void 0 : t.onError) == null || i.call(t, e);
        };
        this.observer = {
            onNotification: (e)=>{
                var t;
                if (e.method === "on-peer-leave-request") {
                    this.handlePeerLeaveRequest(e.params);
                    return;
                }
                switch(e.method){
                    case "on-policy-change":
                        this.analyticsTimer.end("on_policy_change_time");
                        break;
                    case "peer-list":
                        this.analyticsTimer.end("peer_list_time"), this.sendJoinAnalyticsEvent(this.sdkState.isPreviewCalled);
                        break;
                    case "room-state":
                        this.analyticsTimer.end("room_state_time");
                        break;
                    default:
                }
                (t = this.notificationManager) == null || t.handleNotification(e, this.sdkState.isReconnecting);
            },
            onConnected: ()=>{
                this.initNotificationManager();
            },
            onTrackAdd: (e)=>{
                var t;
                (t = this.notificationManager) == null || t.handleTrackAdd(e);
            },
            onTrackRemove: (e)=>{
                var t;
                (t = this.notificationManager) == null || t.handleTrackRemove(e);
            },
            onFailure: (e)=>{
                var t;
                (t = this.errorListener) == null || t.onError(e);
            },
            onStateChange: (e, t)=>c(this, null, function*() {
                    var r, s;
                    let i = (o)=>c(this, null, function*() {
                            var n, d;
                            yield this.internalLeave(!0, o), !this.sdkState.isPreviewInProgress && !this.sdkState.isJoinInProgress && ((d = (n = this.errorListener) == null ? void 0 : n.onError) == null || d.call(n, o)), this.sdkState.isReconnecting = !1;
                        });
                    switch(e){
                        case "Preview":
                        case "Joined":
                            this.initNotificationManager(), this.transportState === "Reconnecting" && ((r = this.listener) == null || r.onReconnected());
                            break;
                        case "Failed":
                            yield i(t);
                            break;
                        case "Reconnecting":
                            this.sdkState.isReconnecting = !0, (s = this.listener) == null || s.onReconnecting(t);
                            break;
                    }
                    this.transportState = e, l.d(this.TAG, "Transport State Change", this.transportState);
                })
        };
        this.handlePeerLeaveRequest = (e)=>{
            var r;
            let t = e.requested_by ? this.store.getPeerById(e.requested_by) : void 0, i = {
                roomEnded: e.room_end,
                reason: e.reason,
                requestedBy: t
            };
            (r = this.listener) == null || r.onRemovedFromRoom(i), this.internalLeave(!1);
        };
        this.handlePreviewError = (e)=>{
            var t;
            this.analyticsTimer.end("preview_time"), e && ((t = this.errorListener) == null || t.onError(e)), this.sendPreviewAnalyticsEvent(e), this.sdkState.isPreviewInProgress = !1;
        };
        this.handleDeviceChange = (e)=>{
            var i, r;
            if (e.isUserSelection) return;
            l.d(this.TAG, "Device Change event", e), (r = (i = this.deviceChangeListener) == null ? void 0 : i.onDeviceChange) == null || r.call(i, e), (()=>{
                var s, o, n, d;
                if (e.error && e.type) {
                    let u = e.type.includes("audio") ? (s = this.localPeer) == null ? void 0 : s.audioTrack : (o = this.localPeer) == null ? void 0 : o.videoTrack;
                    (n = this.errorListener) == null || n.onError(e.error), [
                        P.TracksErrors.CANT_ACCESS_CAPTURE_DEVICE,
                        P.TracksErrors.DEVICE_IN_USE,
                        P.TracksErrors.DEVICE_NOT_AVAILABLE
                    ].includes(e.error.code) && u && (u.setEnabled(!1), (d = this.listener) == null || d.onTrackUpdate(2, u, this.localPeer));
                }
            })();
        };
        this.handleAudioPluginError = (e)=>{
            var t;
            l.e(this.TAG, "Audio Plugin Error event", e), (t = this.errorListener) == null || t.onError(e);
        };
        this.handleError = (e)=>{
            var t;
            l.e(this.TAG, e), (t = this.errorListener) == null || t.onError(e);
        };
        this.handleLocalRoleUpdate = (i)=>c(this, [
                i
            ], function*({ oldRole: e, newRole: t }) {
                var r;
                this.deviceManager.currentSelection = this.deviceManager.getCurrentSelection(), yield this.transport.handleLocalRoleUpdate({
                    oldRole: e,
                    newRole: t
                }), yield (r = this.roleChangeManager) == null ? void 0 : r.handleLocalPeerRoleUpdate({
                    oldRole: e,
                    newRole: t
                }), yield this.interactivityCenter.whiteboard.handleLocalRoleUpdate();
            });
        this.unpauseRemoteVideoTracks = ()=>{
            this.store.getRemoteVideoTracks().forEach((e)=>e.handleTrackUnmute());
        };
        this.sendAudioPresenceFailed = ()=>{
            var t;
            let e = S.TracksErrors.NoAudioDetected("PREVIEW");
            l.w(this.TAG, "Audio Presence Failure", this.transportState, e), this.isDiagnostics && ((t = this.listener) == null || t.onError(e));
        };
        this.sendJoinAnalyticsEvent = (e = !1, t)=>{
            this.eventBus.analytics.publish(y.join(M(m({
                error: t
            }, this.analyticsTimer.getTimes()), {
                time: this.analyticsTimer.getTimeTaken("join_time"),
                is_preview_called: e,
                retries_join: this.transport.joinRetryCount
            })));
        };
        this.sendPreviewAnalyticsEvent = (e)=>{
            this.eventBus.analytics.publish(y.preview(M(m({
                error: e
            }, this.analyticsTimer.getTimes()), {
                time: this.analyticsTimer.getTimeTaken("preview_time")
            })));
        };
        this.sendAnalyticsEvent = (e)=>{
            this.isDiagnostics || this.analyticsEventsService.queue(e).flush();
        };
    }
    setSessionPeerInfo(e, t) {
        var r, s, o, n;
        let i = this.store.getRoom();
        if (!t || !i) {
            l.e(this.TAG, "setSessionPeerInfo> Local peer or room is undefined");
            return;
        }
        this.sessionPeerInfo = {
            peer: {
                peer_id: t.peerId,
                role: (r = t.role) == null ? void 0 : r.name,
                joined_at: ((s = t.joinedAt) == null ? void 0 : s.valueOf()) || 0,
                room_name: i.name,
                session_started_at: ((o = i.startedAt) == null ? void 0 : o.valueOf()) || 0,
                user_data: t.customerUserId,
                user_name: t.name,
                template_id: i.templateId,
                session_id: i.sessionId,
                token: (n = this.store.getConfig()) == null ? void 0 : n.authToken
            },
            agent: this.store.getUserAgent(),
            device_id: li(),
            cluster: {
                websocket_url: e
            },
            timestamp: Date.now()
        };
    }
    initNotificationManager() {
        this.notificationManager || (this.notificationManager = new nr(this.store, this.eventBus, this.transport, this.listener, this.audioListener));
    }
    initStoreAndManagers(e) {
        var t, i;
        if (this.listener = e, this.errorListener = e, this.deviceChangeListener = e, (t = this.store) == null || t.setErrorListener(this.errorListener), this.sdkState.isInitialised) {
            (i = this.notificationManager) == null || i.setListener(this.listener), this.audioSinkManager.setListener(this.listener), this.interactivityCenter.setListener(this.listener), this.transport.setListener(this.listener);
            return;
        }
        this.sdkState.isInitialised = !0, this.store = new Ft, this.store.setErrorListener(this.errorListener), this.eventBus = new Kt, this.pluginUsageTracker = new Ki(this.eventBus), this.wakeLockManager = new Wi, this.networkTestManager = new Gi(this.eventBus, this.listener), this.playlistManager = new Lt(this, this.eventBus), this.deviceManager = new Wt(this.store, this.eventBus), this.audioSinkManager = new Gt(this.store, this.deviceManager, this.eventBus), this.audioOutput = new qi(this.deviceManager, this.audioSinkManager), this.audioSinkManager.setListener(this.listener), this.eventBus.autoplayError.subscribe(this.handleAutoplayError), this.localTrackManager = new be(this.store, this.observer, this.deviceManager, this.eventBus, this.analyticsTimer), this.analyticsEventsService = new $i(this.store), this.transport = new ri(this.observer, this.deviceManager, this.store, this.eventBus, this.analyticsEventsService, this.analyticsTimer, this.pluginUsageTracker), "onInitSuccess" in e && this.transport.setConnectivityListener(e), this.sessionStore = new cr(this.transport), this.interactivityCenter = new jt(this.transport, this.store, this.listener), this.eventBus.analytics.subscribe(this.sendAnalyticsEvent), this.eventBus.deviceChange.subscribe(this.handleDeviceChange), this.eventBus.localVideoUnmutedNatively.subscribe(this.unpauseRemoteVideoTracks), this.eventBus.localAudioUnmutedNatively.subscribe(this.unpauseRemoteVideoTracks), this.eventBus.audioPluginFailed.subscribe(this.handleAudioPluginError), this.eventBus.error.subscribe(this.handleError);
    }
    validateJoined(e) {
        if (!this.localPeer) throw S.GenericErrors.NotConnected("VALIDATION", `Not connected - ${e}`);
    }
    sendHLSAnalytics(e) {
        this.sendAnalyticsEvent(y.hlsPlayerError(e));
    }
    refreshDevices() {
        return c(this, null, function*() {
            this.validateJoined("refreshDevices"), yield this.deviceManager.init(!0);
        });
    }
    getWebrtcInternals() {
        var e;
        return (e = this.transport) == null ? void 0 : e.getWebrtcInternals();
    }
    getDebugInfo() {
        var r;
        if (!this.transport) throw l.e(this.TAG, "Transport is not defined"), new Error("getDebugInfo can only be called after join");
        let e = this.transport.getWebsocketEndpoint(), t = Object.values(ns).filter((s)=>this.transport.isFlagEnabled(s)), i = (r = this.store.getConfig()) == null ? void 0 : r.initEndpoint;
        return {
            websocketURL: e,
            enabledFlags: t,
            initEndpoint: i
        };
    }
    getSessionStore() {
        return this.sessionStore;
    }
    getPlaylistManager() {
        return this.playlistManager;
    }
    getRecordingState() {
        var e;
        return (e = this.store.getRoom()) == null ? void 0 : e.recording;
    }
    getRTMPState() {
        var e;
        return (e = this.store.getRoom()) == null ? void 0 : e.rtmp;
    }
    getHLSState() {
        var e;
        return (e = this.store.getRoom()) == null ? void 0 : e.hls;
    }
    getTranscriptionState() {
        var e;
        return (e = this.store.getRoom()) == null ? void 0 : e.transcriptions;
    }
    getTemplateAppData() {
        return this.store.getTemplateAppData();
    }
    getInteractivityCenter() {
        return this.interactivityCenter;
    }
    getPeerListIterator(e) {
        return new ki(this.transport, this.store, e);
    }
    updatePlaylistSettings(e) {
        e.video && Object.assign(this.playlistSettings.video, e.video), e.audio && Object.assign(this.playlistSettings.audio, e.audio);
    }
    get localPeer() {
        var e;
        return (e = this.store) == null ? void 0 : e.getLocalPeer();
    }
    preview(e, t) {
        return c(this, null, function*() {
            if (kt(), yt(), this.sdkState.isPreviewInProgress) return Promise.reject(S.GenericErrors.PreviewAlreadyInProgress("PREVIEW", "Preview already called"));
            if ([
                "Joined",
                "Reconnecting"
            ].includes(this.transportState)) return this.midCallPreview(e.asRole, e.settings);
            this.analyticsTimer.start("preview_time"), this.setUpPreview(e, t);
            let i = !1, r = !1, s = setTimeout(()=>{
                var o, n;
                (!i || !r) && ((n = (o = this.listener) == null ? void 0 : o.onNetworkQuality) == null || n.call(o, -1));
            }, 3e3);
            return new Promise((o, n)=>{
                let d = ()=>c(this, null, function*() {
                        var h;
                        if (this.localPeer) {
                            let T = e.asRole && this.store.getPolicyForRole(e.asRole);
                            this.localPeer.asRole = T || this.localPeer.role;
                        }
                        let u = yield this.localTrackManager.getTracksToPublish(e.settings);
                        u.forEach((T)=>{
                            var g;
                            if (this.setLocalPeerTrack(T), T.isTrackNotPublishing()) {
                                let f = S.TracksErrors.NoDataInTrack(`${T.type} track has no data. muted: ${T.nativeTrack.muted}, readyState: ${T.nativeTrack.readyState}`);
                                l.e(this.TAG, f), this.sendAnalyticsEvent(y.publish({
                                    devices: this.deviceManager.getDevices(),
                                    error: f
                                })), (g = this.listener) == null || g.onError(f);
                            }
                        }), (h = this.localPeer) != null && h.audioTrack && this.initPreviewTrackAudioLevelMonitor(), yield this.initDeviceManagers(), this.sdkState.isPreviewInProgress = !1, this.analyticsTimer.end("preview_time");
                        let p = this.store.getRoom();
                        p && t.onPreview(p, u), this.sendPreviewAnalyticsEvent(), o();
                    });
                this.eventBus.policyChange.subscribeOnce(d), this.eventBus.leave.subscribeOnce(this.handlePreviewError), this.eventBus.leave.subscribeOnce((u)=>n(u)), this.transport.preview(e.authToken, e.initEndpoint, this.localPeer.peerId, {
                    name: e.userName,
                    metaData: e.metaData || ""
                }, e.autoVideoSubscribe, e.iceServers).then((u)=>{
                    var p;
                    i = !0, clearTimeout(s), u && e.captureNetworkQualityInPreview && this.networkTestManager.start((p = u.config) == null ? void 0 : p.networkHealth).then(()=>{
                        r = !0;
                    });
                }).catch((u)=>{
                    this.handlePreviewError(u), n(u);
                });
            });
        });
    }
    midCallPreview(e, t) {
        return c(this, null, function*() {
            var s, o;
            if (!this.localPeer || this.transportState !== "Joined") throw S.GenericErrors.NotConnected("VALIDATION", "Not connected - midCallPreview");
            let i = e && this.store.getPolicyForRole(e);
            if (!i) throw S.GenericErrors.InvalidRole("PREVIEW", `role ${e} does not exist in policy`);
            this.localPeer.asRole = i;
            let r = yield this.localTrackManager.getTracksToPublish(t);
            r.forEach((n)=>this.setLocalPeerTrack(n)), (s = this.localPeer) != null && s.audioTrack && this.initPreviewTrackAudioLevelMonitor(), yield this.initDeviceManagers(), (o = this.listener) == null || o.onPreview(this.store.getRoom(), r);
        });
    }
    cancelMidCallPreview() {
        return c(this, null, function*() {
            var e, t, i;
            if ((!this.localPeer || !this.localPeer.isInPreview()) && l.w(this.TAG, "Cannot cancel mid call preview as preview is not in progress"), (e = this.localPeer) != null && e.asRole && this.localPeer.role) {
                let r = this.localPeer.asRole, s = this.localPeer.role;
                delete this.localPeer.asRole, yield (t = this.roleChangeManager) == null ? void 0 : t.diffRolesAndPublishTracks({
                    oldRole: r,
                    newRole: s
                }), (i = this.listener) == null || i.onPeerUpdate(8, this.localPeer);
            }
        });
    }
    join(e, t) {
        return c(this, null, function*() {
            var d, u, p, h, T, g, f, E;
            if (kt(), yt(), this.sdkState.isPreviewInProgress) throw S.GenericErrors.NotReady("JOIN", "Preview is in progress, can't join");
            (u = (d = this.eventBus) == null ? void 0 : d.leave) == null || u.unsubscribe(this.handlePreviewError), this.analyticsTimer.start("join_time"), this.sdkState.isJoinInProgress = !0;
            let { roomId: i, userId: r, role: s } = Mr(e.authToken), o = ((h = (p = this.localPeer) == null ? void 0 : p.asRole) == null ? void 0 : h.name) || ((g = (T = this.localPeer) == null ? void 0 : T.role) == null ? void 0 : g.name);
            (f = this.networkTestManager) == null || f.stop(), this.commonSetup(e, i, t), this.removeDevicesFromConfig(e), this.store.setConfig(e), this.store.createAndSetUserAgent(this.frameworkInfo), ce.resumeContext();
            let n = this.store.getConfig();
            n != null && n.autoManageWakeLock && this.wakeLockManager.acquireLock(), this.localPeer ? (this.localPeer.name = e.userName, this.localPeer.role = this.store.getPolicyForRole(s), this.localPeer.customerUserId = r, this.localPeer.metadata = e.metaData, delete this.localPeer.asRole) : this.createAndAddLocalPeerToStore(e, s, r), this.roleChangeManager = new Bt(this.store, this.transport, this.deviceManager, this.getAndPublishTracks.bind(this), this.removeTrack.bind(this), this.listener), this.eventBus.localRoleUpdate.subscribe(this.handleLocalRoleUpdate), l.d(this.TAG, `\u23F3 Joining room ${i}`), l.time(`join-room-${i}`);
            try {
                yield this.transport.join(e.authToken, this.localPeer.peerId, {
                    name: e.userName,
                    metaData: e.metaData
                }, e.initEndpoint, e.autoVideoSubscribe, e.iceServers), l.d(this.TAG, `\u2705 Joined room ${i}`), this.analyticsTimer.start("peer_list_time"), yield this.notifyJoin(), this.sdkState.isJoinInProgress = !1, yield this.publish(e.settings, o);
            } catch (v) {
                throw this.analyticsTimer.end("join_time"), this.sdkState.isJoinInProgress = !1, (E = this.listener) == null || E.onError(v), this.sendJoinAnalyticsEvent(this.sdkState.isPreviewCalled, v), l.e(this.TAG, "Unable to join room", v), v;
            }
            l.timeEnd(`join-room-${i}`);
        });
    }
    stringifyMetadata(e) {
        e.metaData && typeof e.metaData != "string" ? e.metaData = JSON.stringify(e.metaData) : e.metaData || (e.metaData = "");
    }
    cleanup() {
        var e, t, i;
        this.cleanDeviceManagers(), this.eventBus.analytics.unsubscribe(this.sendAnalyticsEvent), this.eventBus.localVideoUnmutedNatively.unsubscribe(this.unpauseRemoteVideoTracks), this.eventBus.localAudioUnmutedNatively.unsubscribe(this.unpauseRemoteVideoTracks), this.eventBus.error.unsubscribe(this.handleError), this.analyticsTimer.cleanup(), X.cleanup(), this.playlistManager.cleanup(), (e = this.wakeLockManager) == null || e.cleanup(), be.cleanup(), this.notificationManager = void 0, l.cleanup(), this.sdkState = m({}, ro), this.localPeer && ((t = this.localPeer.audioTrack) == null || t.cleanup(), this.localPeer.audioTrack = void 0, (i = this.localPeer.videoTrack) == null || i.cleanup(), this.localPeer.videoTrack = void 0), this.store.cleanup(), this.listener = void 0, this.roleChangeManager && this.eventBus.localRoleUpdate.unsubscribe(this.handleLocalRoleUpdate);
    }
    leave(e) {
        return this.internalLeave(e);
    }
    internalLeave(e = !0, t) {
        return c(this, null, function*() {
            var r, s, o, n;
            let i = (r = this.store) == null ? void 0 : r.getRoom();
            if (i) {
                for(; (this.sdkState.isPreviewInProgress || this.sdkState.isJoinInProgress) && !(t != null && t.isTerminal);)yield Oe(100);
                let d = i.id;
                this.setSessionPeerInfo(this.transport.getWebsocketEndpoint() || "", this.localPeer), (s = this.networkTestManager) == null || s.stop(), this.eventBus.leave.publish(t);
                let u = (o = this.localPeer) == null ? void 0 : o.peerId;
                l.d(this.TAG, `\u23F3 Leaving room ${d}, peerId=${u}`), yield (n = this.transport) == null ? void 0 : n.leave(e, t ? "sdk request" : "user request"), this.cleanup(), l.d(this.TAG, `\u2705 Left room ${d}, peerId=${u}`);
            }
        });
    }
    getAuthTokenByRoomCode(e, t) {
        return c(this, null, function*() {
            let i = (t || {}).endpoint || "https://auth.100ms.live/v2/token";
            this.analyticsTimer.start("GET_TOKEN");
            let r = yield Bi(i, {
                method: "POST",
                body: JSON.stringify({
                    code: e.roomCode,
                    user_id: e.userId
                })
            }, [
                429,
                500,
                501,
                502,
                503,
                504,
                505,
                506,
                507,
                508,
                509,
                510,
                511
            ]), s = yield r.json();
            if (this.analyticsTimer.end("GET_TOKEN"), !r.ok) throw S.APIErrors.ServerErrors(s.code, "GET_TOKEN", s.message, !1);
            let { token: o } = s;
            if (!o) throw Error(s.message);
            return o;
        });
    }
    getLocalPeer() {
        return this.store.getLocalPeer();
    }
    getPeers() {
        return this.store.getPeers();
    }
    getPeerMap() {
        return this.store.getPeerMap();
    }
    getAudioOutput() {
        return this.audioOutput;
    }
    sendMessage(e, t) {
        this.sendMessageInternal({
            message: t,
            type: e
        });
    }
    sendBroadcastMessage(e, t) {
        return c(this, null, function*() {
            return yield this.sendMessageInternal({
                message: e,
                type: t
            });
        });
    }
    sendGroupMessage(e, t, i) {
        return c(this, null, function*() {
            let r = this.store.getKnownRoles();
            if ((t.filter((o)=>r[o.name]) || []).length === 0) throw S.GenericErrors.ValidationFailed("No valid role is present", t);
            return yield this.sendMessageInternal({
                message: e,
                recipientRoles: t,
                type: i
            });
        });
    }
    sendDirectMessage(e, t, i) {
        return c(this, null, function*() {
            var o, n;
            if (((o = this.localPeer) == null ? void 0 : o.peerId) === t) throw S.GenericErrors.ValidationFailed("Cannot send message to self");
            let r = !!((n = this.store.getRoom()) != null && n.large_room_optimization), s = this.store.getPeerById(t);
            if (!s) {
                if (r) {
                    let d = yield this.transport.signal.getPeer({
                        peer_id: t
                    });
                    if (!d) throw S.GenericErrors.ValidationFailed("Invalid peer - peer not present in the room", t);
                    s = ye(d, this.store);
                } else throw S.GenericErrors.ValidationFailed("Invalid peer - peer not present in the room", t);
            }
            return yield this.sendMessageInternal({
                message: e,
                recipientPeer: s,
                type: i
            });
        });
    }
    submitSessionFeedback(e, t) {
        return c(this, null, function*() {
            if (!this.sessionPeerInfo) throw l.e(this.TAG, "submitSessionFeedback> session is undefined"), new Error("session is undefined");
            let i = this.sessionPeerInfo.peer.token;
            if (!i) throw l.e(this.TAG, "submitSessionFeedback> token is undefined"), new Error("Internal error, token is not present");
            try {
                yield $t.sendFeedback({
                    token: i,
                    info: this.sessionPeerInfo,
                    feedback: e,
                    eventEndpoint: t
                }), l.i(this.TAG, "submitSessionFeedback> submitted feedback"), this.sessionPeerInfo = void 0;
            } catch (r) {
                throw l.e(this.TAG, "submitSessionFeedback> error occured ", r), new Error("Unable to submit feedback");
            }
        });
    }
    getPeer(e) {
        return c(this, null, function*() {
            let t = yield this.transport.signal.getPeer({
                peer_id: e
            });
            if (t) return ye(t, this.store);
        });
    }
    findPeerByName(r) {
        return c(this, arguments, function*({ query: e, limit: t = 10, offset: i }) {
            let { peers: s, offset: o, eof: n } = yield this.transport.signal.findPeerByName({
                query: e == null ? void 0 : e.toLowerCase(),
                limit: t,
                offset: i
            });
            return s.length > 0 ? {
                offset: o,
                eof: n,
                peers: s.map((d)=>ye({
                        peer_id: d.peer_id,
                        role: d.role,
                        groups: [],
                        info: {
                            name: d.name,
                            data: "",
                            user_id: "",
                            type: d.type
                        }
                    }, this.store))
            } : {
                offset: o,
                peers: []
            };
        });
    }
    sendMessageInternal(s) {
        return c(this, arguments, function*({ recipientRoles: e, recipientPeer: t, type: i = "chat", message: r }) {
            if (r.replace(/\u200b/g, " ").trim() === "") throw l.w(this.TAG, "sendMessage", "Ignoring empty message send"), S.GenericErrors.ValidationFailed("Empty message not allowed");
            let o = {
                info: {
                    message: r,
                    type: i
                }
            };
            return e != null && e.length && (o.roles = e.map((n)=>n.name)), t != null && t.peerId && (o.peer_id = t.peerId), l.d(this.TAG, "Sending Message: ", o), yield this.transport.signal.broadcast(o);
        });
    }
    startScreenShare(e, t) {
        return c(this, null, function*() {
            var n, d, u;
            let i = this.store.getPublishParams();
            if (!i) return;
            let { allowed: r } = i;
            if (!(r && r.includes("screen"))) {
                l.e(this.TAG, `Role ${(n = this.localPeer) == null ? void 0 : n.role} cannot share screen`);
                return;
            }
            if ((u = (d = this.localPeer) == null ? void 0 : d.auxiliaryTracks) != null && u.find((p)=>p.source === "screen")) throw Error("Cannot share multiple screens");
            let o = yield this.getScreenshareTracks(e, t);
            if (!this.localPeer) {
                l.d(this.TAG, "Screenshared when not connected"), o.forEach((p)=>{
                    p.cleanup();
                });
                return;
            }
            this.transport.setOnScreenshareStop(()=>{
                this.stopEndedScreenshare(e);
            }), yield this.transport.publish(o), o.forEach((p)=>{
                var h, T, g;
                p.peerId = (h = this.localPeer) == null ? void 0 : h.peerId, (T = this.localPeer) == null || T.auxiliaryTracks.push(p), (g = this.listener) == null || g.onTrackUpdate(0, p, this.localPeer);
            });
        });
    }
    stopEndedScreenshare(e) {
        return c(this, null, function*() {
            l.d(this.TAG, "\u2705 Screenshare ended natively"), yield this.stopScreenShare(), e();
        });
    }
    stopScreenShare() {
        return c(this, null, function*() {
            var t;
            l.d(this.TAG, "\u2705 Screenshare ended from app");
            let e = (t = this.localPeer) == null ? void 0 : t.auxiliaryTracks.filter((i)=>i.source === "screen");
            if (e) for (let i of e)yield this.removeTrack(i.trackId);
        });
    }
    addTrack(e, t = "regular") {
        return c(this, null, function*() {
            var u, p, h, T;
            if (!e) {
                l.w(this.TAG, "Please pass a valid MediaStreamTrack");
                return;
            }
            if (!this.localPeer) throw S.GenericErrors.NotConnected("VALIDATION", "No local peer present, cannot addTrack");
            if (this.localPeer.auxiliaryTracks.find((g)=>g.trackId === e.id)) return;
            let r = e.kind, s = new MediaStream([
                e
            ]), o = new Se(s), n = r === "audio" ? de : G, d = new n(o, e, t, this.eventBus);
            yield this.applySettings(d), yield this.setPlaylistSettings({
                track: e,
                hmsTrack: d,
                source: t
            }), yield (u = this.transport) == null ? void 0 : u.publish([
                d
            ]), d.peerId = (p = this.localPeer) == null ? void 0 : p.peerId, (h = this.localPeer) == null || h.auxiliaryTracks.push(d), (T = this.listener) == null || T.onTrackUpdate(0, d, this.localPeer);
        });
    }
    removeTrack(e, t = !1) {
        return c(this, null, function*() {
            var r;
            if (!this.localPeer) throw S.GenericErrors.NotConnected("VALIDATION", "No local peer present, cannot removeTrack");
            let i = this.localPeer.auxiliaryTracks.findIndex((s)=>s.trackId === e);
            if (i > -1) {
                let s = this.localPeer.auxiliaryTracks[i];
                s.isPublished ? yield this.transport.unpublish([
                    s
                ]) : yield s.cleanup(), t || this.stopPlaylist(s), this.localPeer.auxiliaryTracks.splice(i, 1), (r = this.listener) == null || r.onTrackUpdate(1, s, this.localPeer);
            } else l.w(this.TAG, `No track found for ${e}`);
        });
    }
    setAnalyticsLevel(e) {
        this.analyticsEventsService.level = e;
    }
    setLogLevel(e) {
        l.level = e;
    }
    autoSelectAudioOutput(e) {
        var t;
        (t = this.deviceManager) == null || t.autoSelectAudioOutput(e);
    }
    addAudioListener(e) {
        var t;
        this.audioListener = e, (t = this.notificationManager) == null || t.setAudioListener(e);
    }
    addConnectionQualityListener(e) {
        var t;
        (t = this.notificationManager) == null || t.setConnectionQualityListener(e);
    }
    setIsDiagnostics(e) {
        this.isDiagnostics = e;
    }
    changeRole(e, t, i = !1) {
        return c(this, null, function*() {
            var r;
            yield (r = this.transport) == null ? void 0 : r.signal.requestRoleChange({
                requested_for: e,
                role: t,
                force: i
            });
        });
    }
    changeRoleOfPeer(e, t, i = !1) {
        return c(this, null, function*() {
            var r;
            yield (r = this.transport) == null ? void 0 : r.signal.requestRoleChange({
                requested_for: e,
                role: t,
                force: i
            });
        });
    }
    changeRoleOfPeersWithRoles(e, t) {
        return c(this, null, function*() {
            var i;
            e.length <= 0 || !t || (yield (i = this.transport) == null ? void 0 : i.signal.requestBulkRoleChange({
                roles: e.map((r)=>r.name),
                role: t,
                force: !0
            }));
        });
    }
    acceptChangeRole(e) {
        return c(this, null, function*() {
            var t, i;
            yield (i = this.transport) == null ? void 0 : i.signal.acceptRoleChangeRequest({
                requested_by: (t = e.requestedBy) == null ? void 0 : t.peerId,
                role: e.role.name,
                token: e.token
            });
        });
    }
    endRoom(e, t) {
        return c(this, null, function*() {
            var i;
            if (!this.localPeer) throw S.GenericErrors.NotConnected("VALIDATION", "No local peer present, cannot end room");
            yield (i = this.transport) == null ? void 0 : i.signal.endRoom(e, t), yield this.leave();
        });
    }
    removePeer(e, t) {
        return c(this, null, function*() {
            var i;
            if (!this.localPeer) throw S.GenericErrors.NotConnected("VALIDATION", "No local peer present, cannot remove peer");
            yield (i = this.transport) == null ? void 0 : i.signal.removePeer({
                requested_for: e,
                reason: t
            });
        });
    }
    startRTMPOrRecording(e) {
        return c(this, null, function*() {
            var i, r;
            if (!this.localPeer) throw S.GenericErrors.NotConnected("VALIDATION", "No local peer present, cannot start streaming or recording");
            let t = {
                meeting_url: e.meetingURL,
                record: e.record
            };
            (i = e.rtmpURLs) != null && i.length && (t.rtmp_urls = e.rtmpURLs), e.resolution && (t.resolution = e.resolution), yield (r = this.transport) == null ? void 0 : r.signal.startRTMPOrRecording(t);
        });
    }
    stopRTMPAndRecording() {
        return c(this, null, function*() {
            var e;
            if (!this.localPeer) throw S.GenericErrors.NotConnected("VALIDATION", "No local peer present, cannot stop streaming or recording");
            yield (e = this.transport) == null ? void 0 : e.signal.stopRTMPAndRecording();
        });
    }
    startHLSStreaming(e) {
        return c(this, null, function*() {
            var i;
            if (!this.localPeer) throw S.GenericErrors.NotConnected("VALIDATION", "No local peer present, cannot start HLS streaming");
            let t = {};
            e && e.variants && e.variants.length > 0 && (t.variants = e.variants.map((r)=>{
                let s = {
                    meeting_url: r.meetingURL
                };
                return r.metadata && (s.metadata = r.metadata), s;
            })), e != null && e.recording && (t.hls_recording = {
                single_file_per_layer: e.recording.singleFilePerLayer,
                hls_vod: e.recording.hlsVod
            }), yield (i = this.transport) == null ? void 0 : i.signal.startHLSStreaming(t);
        });
    }
    stopHLSStreaming(e) {
        return c(this, null, function*() {
            var t, i, r;
            if (!this.localPeer) throw S.GenericErrors.NotConnected("VALIDATION", "No local peer present, cannot stop HLS streaming");
            if (e) {
                let s = {
                    variants: (t = e == null ? void 0 : e.variants) == null ? void 0 : t.map((o)=>{
                        let n = {
                            meeting_url: o.meetingURL
                        };
                        return o.metadata && (n.metadata = o.metadata), n;
                    }),
                    stop_reason: e.stop_reason
                };
                yield (i = this.transport) == null ? void 0 : i.signal.stopHLSStreaming(s);
            } else yield (r = this.transport) == null ? void 0 : r.signal.stopHLSStreaming();
        });
    }
    startTranscription(e) {
        return c(this, null, function*() {
            var i;
            if (!this.localPeer) throw S.GenericErrors.NotConnected("VALIDATION", "No local peer present, cannot start transcriptions");
            let t = {
                mode: e.mode
            };
            yield (i = this.transport) == null ? void 0 : i.signal.startTranscription(t);
        });
    }
    stopTranscription(e) {
        return c(this, null, function*() {
            var i;
            if (!this.localPeer) throw S.GenericErrors.NotConnected("VALIDATION", "No local peer present, cannot stop transcriptions");
            if (!e) throw S.GenericErrors.Signalling("VALIDATION", "No mode is passed to stop the transcription");
            let t = {
                mode: e.mode
            };
            yield (i = this.transport) == null ? void 0 : i.signal.stopTranscription(t);
        });
    }
    sendHLSTimedMetadata(e) {
        return c(this, null, function*() {
            var t;
            if (this.validateJoined("sendHLSTimedMetadata"), e.length > 0) {
                let i = {
                    metadata_objs: e
                };
                yield (t = this.transport) == null ? void 0 : t.signal.sendHLSTimedMetadata(i);
            }
        });
    }
    changeName(e) {
        return c(this, null, function*() {
            var i, r;
            this.validateJoined("changeName");
            let t = this.store.getLocalPeer();
            t && t.name !== e && (yield (i = this.transport) == null ? void 0 : i.signal.updatePeer({
                name: e
            }), (r = this.notificationManager) == null || r.updateLocalPeer({
                name: e
            }));
        });
    }
    changeMetadata(e) {
        return c(this, null, function*() {
            var t, i;
            this.validateJoined("changeMetadata"), yield (t = this.transport) == null ? void 0 : t.signal.updatePeer({
                data: e
            }), (i = this.notificationManager) == null || i.updateLocalPeer({
                metadata: e
            });
        });
    }
    setSessionMetadata(e) {
        return c(this, null, function*() {
            var t;
            yield (t = this.transport) == null ? void 0 : t.signal.setSessionMetadata({
                key: "default",
                data: e
            });
        });
    }
    getSessionMetadata() {
        return c(this, null, function*() {
            var t;
            return (yield (t = this.transport) == null ? void 0 : t.signal.getSessionMetadata("default")).data;
        });
    }
    getRoles() {
        return Object.values(this.store.getKnownRoles());
    }
    changeTrackState(e, t) {
        return c(this, null, function*() {
            var r;
            if (e.type === "video" && e.source !== "regular") {
                l.w(this.TAG, "Muting non-regular video tracks is currently not supported");
                return;
            }
            if (e.enabled === t) {
                l.w(this.TAG, `Aborting change track state, track already has enabled - ${t}`, e);
                return;
            }
            if (!this.store.getTrackById(e.trackId)) throw S.GenericErrors.ValidationFailed("No track found for change track state", e);
            let i = this.store.getPeerByTrackId(e.trackId);
            if (!i) throw S.GenericErrors.ValidationFailed("No peer found for change track state", e);
            yield (r = this.transport) == null ? void 0 : r.signal.requestTrackStateChange({
                requested_for: i.peerId,
                track_id: e.trackId,
                stream_id: e.stream.id,
                mute: !t
            });
        });
    }
    changeMultiTrackState(e) {
        return c(this, null, function*() {
            var o;
            if (typeof e.enabled != "boolean") throw S.GenericErrors.ValidationFailed("Pass a boolean for enabled");
            let { enabled: t, roles: i, type: r, source: s } = e;
            yield (o = this.transport) == null ? void 0 : o.signal.requestMultiTrackStateChange({
                value: !t,
                type: r,
                source: s,
                roles: i == null ? void 0 : i.map((n)=>n == null ? void 0 : n.name)
            });
        });
    }
    raiseLocalPeerHand() {
        return c(this, null, function*() {
            var e;
            this.validateJoined("raiseLocalPeerHand"), yield (e = this.transport) == null ? void 0 : e.signal.joinGroup(Ae);
        });
    }
    lowerLocalPeerHand() {
        return c(this, null, function*() {
            var e;
            this.validateJoined("lowerLocalPeerHand"), yield (e = this.transport) == null ? void 0 : e.signal.leaveGroup(Ae);
        });
    }
    raiseRemotePeerHand(e) {
        return c(this, null, function*() {
            var t;
            yield (t = this.transport) == null ? void 0 : t.signal.addToGroup(e, Ae);
        });
    }
    lowerRemotePeerHand(e) {
        return c(this, null, function*() {
            var t;
            yield (t = this.transport) == null ? void 0 : t.signal.removeFromGroup(e, Ae);
        });
    }
    setFrameworkInfo(e) {
        this.frameworkInfo = m(m({}, this.frameworkInfo), e);
    }
    attachVideo(e, t) {
        return c(this, null, function*() {
            let i = this.store.getConfig();
            i != null && i.autoManageVideo ? e.attach(t) : yield e.addSink(t);
        });
    }
    detachVideo(e, t) {
        return c(this, null, function*() {
            let i = this.store.getConfig();
            i != null && i.autoManageVideo ? e.detach(t) : yield e.removeSink(t);
        });
    }
    publish(e, t) {
        return c(this, null, function*() {
            var i, r, s;
            if ([
                this.store.getPublishParams(),
                !this.sdkState.published,
                !Ge
            ].every((o)=>!!o)) {
                let o = t && t !== ((r = (i = this.localPeer) == null ? void 0 : i.role) == null ? void 0 : r.name) ? ()=>{
                    var n;
                    return (n = this.roleChangeManager) == null ? void 0 : n.diffRolesAndPublishTracks({
                        oldRole: this.store.getPolicyForRole(t),
                        newRole: this.localPeer.role
                    });
                } : ()=>this.getAndPublishTracks(e);
                yield (s = o == null ? void 0 : o()) == null ? void 0 : s.catch((n)=>{
                    var d;
                    l.e(this.TAG, "Error in publish", n), (d = this.listener) == null || d.onError(n);
                });
            }
        });
    }
    getAndPublishTracks(e) {
        return c(this, null, function*() {
            var i, r;
            let t = yield this.localTrackManager.getTracksToPublish(e);
            yield this.initDeviceManagers(), yield this.setAndPublishTracks(t), (r = (i = this.localPeer) == null ? void 0 : i.audioTrack) == null || r.initAudioLevelMonitor(), this.sdkState.published = !0;
        });
    }
    setAndPublishTracks(e) {
        return c(this, null, function*() {
            var t, i;
            for (let r of e){
                if (yield this.transport.publish([
                    r
                ]), r.isTrackNotPublishing()) {
                    let s = S.TracksErrors.NoDataInTrack(`${r.type} track has no data. muted: ${r.nativeTrack.muted}, readyState: ${r.nativeTrack.readyState}`);
                    l.e(this.TAG, s), this.sendAnalyticsEvent(y.publish({
                        devices: this.deviceManager.getDevices(),
                        error: s
                    })), (t = this.listener) == null || t.onError(s);
                }
                yield this.setLocalPeerTrack(r), (i = this.listener) == null || i.onTrackUpdate(0, r, this.localPeer);
            }
        });
    }
    setLocalPeerTrack(e) {
        return c(this, null, function*() {
            var t;
            switch(e.peerId = (t = this.localPeer) == null ? void 0 : t.peerId, e.type){
                case "audio":
                    this.localPeer.audioTrack = e, yield this.deviceManager.autoSelectAudioOutput();
                    break;
                case "video":
                    this.localPeer.videoTrack = e;
                    break;
            }
        });
    }
    initDeviceManagers() {
        return c(this, null, function*() {
            var e, t, i, r, s;
            this.sdkState.deviceManagersInitialised || (this.sdkState.deviceManagersInitialised = !0, yield this.deviceManager.init(), (yield this.deviceManager.updateOutputDevice((t = (e = this.store.getConfig()) == null ? void 0 : e.settings) == null ? void 0 : t.audioOutputDeviceId)) || (yield this.deviceManager.updateOutputDevice((r = (i = X.getSelection()) == null ? void 0 : i.audioOutput) == null ? void 0 : r.deviceId)), this.audioSinkManager.init((s = this.store.getConfig()) == null ? void 0 : s.audioSinkElementId));
        });
    }
    cleanDeviceManagers() {
        this.eventBus.deviceChange.unsubscribe(this.handleDeviceChange), this.eventBus.audioPluginFailed.unsubscribe(this.handleAudioPluginError), this.eventBus.autoplayError.unsubscribe(this.handleAutoplayError), this.deviceManager.cleanup(), this.audioSinkManager.cleanup();
    }
    initPreviewTrackAudioLevelMonitor() {
        var t;
        let e = (t = this.localPeer) == null ? void 0 : t.audioTrack;
        e == null || e.initAudioLevelMonitor(), this.eventBus.trackAudioLevelUpdate.subscribe((i)=>{
            var s;
            let r = i && i.track.trackId === (e == null ? void 0 : e.trackId) ? [
                {
                    audioLevel: i.audioLevel,
                    peer: this.localPeer,
                    track: e
                }
            ] : [];
            this.store.updateSpeakers(r), (s = this.audioListener) == null || s.onAudioLevelUpdate(r);
        }), this.eventBus.localAudioSilence.subscribe(this.sendAudioPresenceFailed);
    }
    notifyJoin() {
        var i;
        let e = this.store.getLocalPeer(), t = this.store.getRoom();
        if (!t) {
            l.w(this.TAG, "notify join - room not present");
            return;
        }
        if (t.joinedAt = new Date, e && (e.joinedAt = t.joinedAt), e != null && e.role) {
            this.analyticsTimer.end("join_time"), (i = this.listener) == null || i.onJoin(t);
            return;
        }
        return new Promise((r, s)=>{
            this.eventBus.policyChange.subscribeOnce(()=>{
                var o;
                this.analyticsTimer.end("join_time"), (o = this.listener) == null || o.onJoin(t), r();
            }), this.eventBus.leave.subscribeOnce((o)=>{
                s(o);
            });
        });
    }
    setUpPreview(e, t) {
        this.sdkState.isPreviewCalled = !0, this.sdkState.isPreviewInProgress = !0;
        let { roomId: i, userId: r, role: s } = Mr(e.authToken);
        this.commonSetup(e, i, t), this.store.setConfig(e), this.store.createAndSetUserAgent(this.frameworkInfo), this.createAndAddLocalPeerToStore(e, s, r, e.asRole);
    }
    setPlaylistSettings(r) {
        return c(this, arguments, function*({ track: e, hmsTrack: t, source: i }) {
            var s, o;
            if (i === "videoplaylist") {
                let n = {};
                if (e.kind === "audio") n.maxBitrate = ((s = this.playlistSettings.audio) == null ? void 0 : s.bitrate) || Kr;
                else {
                    n.maxBitrate = ((o = this.playlistSettings.video) == null ? void 0 : o.bitrate) || $r;
                    let { width: d, height: u } = e.getSettings();
                    n.width = d, n.height = u;
                }
                yield t.setSettings(n);
            } else i === "audioplaylist" && (yield t.setSettings({
                maxBitrate: 64
            }));
        });
    }
    createAndAddLocalPeerToStore(e, t, i, r) {
        let s = this.store.getPolicyForRole(t), o = r ? this.store.getPolicyForRole(r) : void 0, n = new qe({
            name: e.userName || "",
            customerUserId: i,
            metadata: e.metaData || "",
            role: s,
            asRole: o || s,
            type: "regular"
        });
        this.store.addPeer(n);
    }
    commonSetup(e, t, i) {
        this.stringifyMetadata(e), e.initEndpoint || (e.initEndpoint = "https://prod-init.100ms.live"), this.initStoreAndManagers(i), this.store.getRoom() || this.store.setRoom(new Je(t));
    }
    removeDevicesFromConfig(e) {
        this.store.getConfig() && e.settings && (delete e.settings.audioOutputDeviceId, delete e.settings.videoDeviceId, delete e.settings.audioInputDeviceId);
    }
    getScreenshareTracks(e, t) {
        return c(this, null, function*() {
            let i = this.transport.isFlagEnabled("scaleScreenshareBasedOnPixels"), [r, s] = yield this.localTrackManager.getLocalScreen(t, i), o = ()=>{
                this.stopEndedScreenshare(e);
            }, n = [];
            if (t != null && t.audioOnly) {
                if (r.nativeTrack.stop(), !s) throw S.TracksErrors.NothingToReturn("TRACK", "Select share audio when sharing screen", "No audio found");
                n.push(s), s.nativeTrack.addEventListener("ended", o);
            } else n.push(r), r.nativeTrack.addEventListener("ended", o), s && n.push(s);
            return n;
        });
    }
    stopPlaylist(e) {
        e.source === "audioplaylist" ? this.playlistManager.stop("audio") : e.source === "videoplaylist" && this.playlistManager.stop("video");
    }
    applySettings(e) {
        return c(this, null, function*() {
            Ns(this.store);
            let t = this.store.getPublishParams();
            if (t) {
                if (e instanceof G) {
                    let i = e.source === "regular" ? "video" : e.source === "screen" ? "screen" : "";
                    if (!i || !t.allowed.includes(i)) return;
                    let r = t[i];
                    if (!r) return;
                    let s = new q().codec(r.codec).maxBitrate(r.bitRate).maxFramerate(r.frameRate).setWidth(r.width).setHeight(r.height).build();
                    yield e.setSettings(s);
                } else if (e instanceof de) {
                    if (!t.allowed.includes("audio")) return;
                    let i = new Q().codec(t.audio.codec).maxBitrate(t.audio.bitRate).build();
                    yield e.setSettings(i);
                }
            }
        });
    }
};
var mt = class a {
    constructor(e, t, i){
        this.getStats = ()=>(this.stats || (this.stats = new si(this.store, this.sdk)), this.stats);
        this.getDiagnosticsSDK = ()=>(this.diagnostics || (this.diagnostics = this.actions.initDiagnostics()), this.diagnostics);
        e ? this.store = e : this.store = a.createNewHMSStore(Fi("HMSStore"), oi), i ? this.notifications = i : this.notifications = new Li(this.store), t ? this.actions = t : (this.sdk = new yr, this.actions = new Vi(this.store, this.sdk, this.notifications)), this.actions.setFrameworkInfo({
            type: "js",
            sdkVersion: Ir().version
        }), this.initialTriggerOnSubscribe = !1, U && (window.__hms = this);
    }
    triggerOnSubscribe() {
        this.initialTriggerOnSubscribe || (a.makeStoreTriggerOnSubscribe(this.store), this.initialTriggerOnSubscribe = !0);
    }
    getStore() {
        return this.store;
    }
    getHMSActions() {
        return this.actions;
    }
    getActions() {
        return this.actions;
    }
    getNotifications() {
        return {
            onNotification: this.notifications.onNotification
        };
    }
    static createNewHMSStore(e, t) {
        let i = (0, _vanillaDefault.default)(()=>t()), r = i.setState;
        i.setState = (n)=>{
            let d = typeof n == "function" ? (0, _immer.produce)(n) : n;
            r(d);
        };
        let s = i.getState;
        i.getState = (n)=>n ? n(s()) : s(), a.compareWithShallowCheckInSubscribe(i);
        let o = a.setUpDevtools(i, e);
        return M(m({}, i), {
            namedSetState: o
        });
    }
    static makeStoreTriggerOnSubscribe(e) {
        let t = e.subscribe;
        e.subscribe = (i, r, s)=>(i(e.getState(r), void 0), t(i, r, s));
    }
    static compareWithShallowCheckInSubscribe(e) {
        let t = e.subscribe;
        e.subscribe = (i, r, s)=>(r || (r = (o)=>o), s = s || (0, _shallowDefault.default), t(i, r, s));
    }
    static setUpDevtools(e, t) {
        let i;
        try {
            i = window.__REDUX_DEVTOOLS_EXTENSION__ || window.top.__REDUX_DEVTOOLS_EXTENSION__;
        } catch (o) {}
        if (!i) return (o)=>{
            e.setState(o);
        };
        let r = i.connect(a.devtoolsOptions(t));
        r.prefix = t ? `${t} > ` : "";
        let s = e.setState;
        return e.setState = (o)=>{
            s(o), r.send(`${r.prefix}setState`, e.getState());
        }, r.subscribe(a.devtoolsSubscribe(r, e, s)), r.send("setUpStore", e.getState()), (o, n)=>{
            s(o);
            let d = n || `${r.prefix}action`;
            r.send(d, e.getState());
        };
    }
    static devtoolsOptions(e) {
        return {
            name: e,
            actionsBlacklist: [
                "audioLevel",
                "playlistProgress",
                "connectionQuality"
            ]
        };
    }
    static devtoolsSubscribe(e, t, i) {
        return (r)=>{
            var s, o, n, d;
            if (r.type === "DISPATCH" && r.state) [
                "JUMP_TO_ACTION",
                "JUMP_TO_STATE"
            ].includes(r.payload.type) ? i(JSON.parse(r.state)) : t.setState(JSON.parse(r.state));
            else if (r.type === "DISPATCH" && ((s = r.payload) == null ? void 0 : s.type) === "COMMIT") e.init(t.getState());
            else if (r.type === "DISPATCH" && ((o = r.payload) == null ? void 0 : o.type) === "IMPORT_STATE") {
                let u = (n = r.payload.nextLiftedState) == null ? void 0 : n.actionsById;
                (((d = r.payload.nextLiftedState) == null ? void 0 : d.computedStates) || []).forEach(({ state: h }, T)=>{
                    let g = u[T] || `${e.prefix}setState`;
                    T === 0 ? e.init(h) : (i(h), e.send(g, t.getState()));
                });
            }
        };
    }
};
var ao = (a, e, t)=>{
    let i;
    t.getState(se) === "Connected" && (i = so(a, e, t)), t.subscribe((r)=>{
        [
            "Connected",
            "Reconnecting"
        ].includes(r) ? i || (i = so(a, e, t)) : [
            "Disconnected",
            "Failed"
        ].includes(r) && i && (xn(e, r), i(), i = void 0);
    }, se);
}, so = (a, e, t)=>{
    var s, o;
    let i = Nn(t, e);
    (s = a.getWebrtcInternals()) == null || s.start();
    let r = (o = a.getWebrtcInternals()) == null ? void 0 : o.onStatsChange((n)=>On(e, n, t, a));
    return ()=>{
        i(), r && r();
    };
}, Nn = (a, e)=>{
    let t, i, r;
    return a.getState(Ie) ? e.namedSetState((s)=>{
        s.localPeer.id = a.getState(Ie);
    }, "localpeer-id") : t = a.subscribe((s)=>{
        s && e.namedSetState((o)=>{
            o.localPeer.id = s;
        }, "localpeer-id");
    }, Ie), a.getState(Z) ? e.namedSetState((s)=>{
        s.localPeer.videoTrack = a.getState(Z);
    }, "localpeer-videotrack-id") : i = a.subscribe((s)=>{
        s && e.namedSetState((o)=>{
            o.localPeer.videoTrack = s;
        }, "localpeer-videotrack-id");
    }, Z), a.getState(le) ? e.namedSetState((s)=>{
        s.localPeer.audioTrack = a.getState(le);
    }, "localpeer-audiotrack-id") : r = a.subscribe((s)=>{
        s && e.namedSetState((o)=>{
            o.localPeer.audioTrack = s;
        }, "localpeer-audiotrack-id");
    }, le), ()=>{
        t == null || t(), i == null || i(), r == null || r();
    };
}, On = (a, e, t, i)=>{
    let r = t.getState(N);
    a.namedSetState((s)=>{
        let o = t.getState(Ie), n = {}, d = Object.keys(r).filter((p)=>r[p].peerId !== o);
        for (let p of d){
            let h = e.getRemoteTrackStats(p);
            h && (n[p] = h);
        }
        rs(s.remoteTrackStats, n);
        let u = {
            [o]: e.getLocalPeerStats()
        };
        rs(s.peerStats, u), Wa(s.localTrackStats, e.getLocalTrackStats(), i.store.getLocalPeerTracks());
    }, "webrtc-stats");
}, xn = (a, e = "resetState")=>{
    a.namedSetState((t)=>{
        Object.assign(t, ni());
    }, e);
};
var si = class {
    constructor(e, t){
        this.hmsStore = e;
        this.sdk = t;
        this.store = mt.createNewHMSStore(Fi("HMSStatsStore"), ni), this.getState = this.store.getState, this.subscribe = this.store.subscribe, this.getPublishPeerConnection = ()=>new Promise((i)=>{
                var r, s;
                this.hmsStore.getState(se) === "Connected" ? i((s = (r = this.sdk) == null ? void 0 : r.getWebrtcInternals()) == null ? void 0 : s.getPublishPeerConnection()) : this.hmsStore.subscribe((o)=>{
                    var n, d;
                    o === "Connected" && i((d = (n = this.sdk) == null ? void 0 : n.getWebrtcInternals()) == null ? void 0 : d.getPublishPeerConnection());
                }, se);
            }), this.getSubscribePeerConnection = ()=>new Promise((i)=>{
                var r, s;
                this.hmsStore.getState(se) === "Connected" ? i((s = (r = this.sdk) == null ? void 0 : r.getWebrtcInternals()) == null ? void 0 : s.getSubscribePeerConnection()) : this.hmsStore.subscribe((o)=>{
                    var n, d;
                    o === "Connected" && i((d = (n = this.sdk) == null ? void 0 : n.getWebrtcInternals()) == null ? void 0 : d.getSubscribePeerConnection());
                }, se);
            }), this.sdk && ao(this.sdk, this.store, this.hmsStore);
    }
};
var Un = (a)=>a.localPeer.id, Bn = (a)=>a.localPeer.audioTrack, Vn = (a)=>a.localPeer.videoTrack, Fn = (a, e)=>e, oo = (a, e)=>e, Gn = (a)=>a.remoteTrackStats, no = (a)=>a.peerStats, us = (a)=>a.localTrackStats, Le = (0, _reselect.createSelector)([
    no,
    Un
], (a, e)=>a[e]), Wn = (0, _reselect.createSelector)(Le, (a)=>{
    var e;
    return (e = a == null ? void 0 : a.subscribe) == null ? void 0 : e.packetsLost;
}), $n = (0, _reselect.createSelector)(Le, (a)=>{
    var e;
    return (e = a == null ? void 0 : a.subscribe) == null ? void 0 : e.jitter;
}), Kn = (0, _reselect.createSelector)(Le, (a)=>{
    var e;
    return (e = a == null ? void 0 : a.publish) == null ? void 0 : e.bitrate;
}), qn = (0, _reselect.createSelector)(Le, (a)=>{
    var e;
    return (e = a == null ? void 0 : a.subscribe) == null ? void 0 : e.bitrate;
}), jn = (0, _reselect.createSelector)(Le, (a)=>{
    var e;
    return (e = a == null ? void 0 : a.publish) == null ? void 0 : e.availableOutgoingBitrate;
}), Jn = (0, _reselect.createSelector)(Le, (a)=>{
    var e;
    return (e = a == null ? void 0 : a.subscribe) == null ? void 0 : e.availableIncomingBitrate;
}), Qn = (0, _reselect.createSelector)(Le, (a)=>{
    var e;
    return (e = a == null ? void 0 : a.publish) == null ? void 0 : e.bytesSent;
}), zn = (0, _reselect.createSelector)(Le, (a)=>{
    var e;
    return (e = a == null ? void 0 : a.subscribe) == null ? void 0 : e.bytesReceived;
}), Yn = (0, _reselect.createSelector)([
    no,
    Fn
], (a, e)=>e ? a[e] : void 0), Xn = (0, _reselect.createSelector)([
    Gn,
    oo
], (a, e)=>e ? a[e] : void 0), ps = (0, _reselect.createSelector)([
    us,
    oo
], (a, e)=>e ? a[e] : void 0), Zn = H(Yn), ec = H(Xn), tc = (0, _reselect.createSelector)([
    us,
    Bn
], (a, e)=>{
    var t;
    return e ? (t = a[e]) == null ? void 0 : t[0] : void 0;
}), ic = H((0, _reselect.createSelector)(ps, (a)=>a == null ? void 0 : a[0])), rc = (0, _reselect.createSelector)([
    us,
    Vn
], (a, e)=>{
    var t;
    return e ? (t = a[e]) == null ? void 0 : t[0] : void 0;
}), sc = H((0, _reselect.createSelector)(ps, (a)=>a)), ac = (a)=>H((0, _reselect.createSelector)(ps, (e)=>{
        let t = Object.keys(We).find((i)=>We[i] === a);
        return a && (e == null ? void 0 : e.find((i)=>i.rid === t)) || (e == null ? void 0 : e[0]);
    })), oc = {
    localPeerStats: Le,
    packetsLost: Wn,
    jitter: $n,
    publishBitrate: Kn,
    subscribeBitrate: qn,
    availablePublishBitrate: jn,
    availableSubscribeBitrate: Jn,
    totalBytesSent: Qn,
    totalBytesReceived: zn,
    peerStatsByID: Zn,
    trackStatsByID: ec,
    localAudioTrackStatsByID: ic,
    localVideoTrackStatsByID: sc,
    localVideoTrackStatsByLayer: ac,
    localAudioTrackStats: tc,
    localVideoTrackStats: rc
};

},{"4e18345d8e205b4a":"euskh","reselect":"gWNo9","ua-parser-js":"dB36x","uuid":"f1qTK","lodash.isequal":"97Naw","webrtc-adapter":"27l12","eventemitter2":"bLuyj","immer":"7ADmA","zustand/shallow":"5XiGX","zustand/vanilla":"folPr","sdp-transform":"jUb7g","@parcel/transformer-js/src/esmodule-helpers.js":"glwFn"}],"euskh":[function(require,module,exports,__globalThis) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function() {
    try {
        if (typeof setTimeout === 'function') cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error('process.binding is not supported');
};
process.cwd = function() {
    return '/';
};
process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() {
    return 0;
};

},{}],"gWNo9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultMemoize", ()=>defaultMemoize);
parcelHelpers.export(exports, "createSelectorCreator", ()=>createSelectorCreator);
parcelHelpers.export(exports, "createSelector", ()=>createSelector);
parcelHelpers.export(exports, "createStructuredSelector", ()=>createStructuredSelector);
function defaultEqualityCheck(a, b) {
    return a === b;
}
function areArgumentsShallowlyEqual(equalityCheck, prev, next) {
    if (prev === null || next === null || prev.length !== next.length) return false;
    // Do this in a for loop (and not a `forEach` or an `every`) so we can determine equality as fast as possible.
    var length = prev.length;
    for(var i = 0; i < length; i++){
        if (!equalityCheck(prev[i], next[i])) return false;
    }
    return true;
}
function defaultMemoize(func) {
    var equalityCheck = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityCheck;
    var lastArgs = null;
    var lastResult = null;
    // we reference arguments instead of spreading them for performance reasons
    return function() {
        if (!areArgumentsShallowlyEqual(equalityCheck, lastArgs, arguments)) // apply arguments instead of spreading for performance.
        lastResult = func.apply(null, arguments);
        lastArgs = arguments;
        return lastResult;
    };
}
function getDependencies(funcs) {
    var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;
    if (!dependencies.every(function(dep) {
        return typeof dep === 'function';
    })) {
        var dependencyTypes = dependencies.map(function(dep) {
            return typeof dep;
        }).join(', ');
        throw new Error('Selector creators expect all input-selectors to be functions, ' + ('instead received the following types: [' + dependencyTypes + ']'));
    }
    return dependencies;
}
function createSelectorCreator(memoize) {
    for(var _len = arguments.length, memoizeOptions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)memoizeOptions[_key - 1] = arguments[_key];
    return function() {
        for(var _len2 = arguments.length, funcs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++)funcs[_key2] = arguments[_key2];
        var recomputations = 0;
        var resultFunc = funcs.pop();
        var dependencies = getDependencies(funcs);
        var memoizedResultFunc = memoize.apply(undefined, [
            function() {
                recomputations++;
                // apply arguments instead of spreading for performance.
                return resultFunc.apply(null, arguments);
            }
        ].concat(memoizeOptions));
        // If a selector is called with the exact same arguments we don't need to traverse our dependencies again.
        var selector = memoize(function() {
            var params = [];
            var length = dependencies.length;
            for(var i = 0; i < length; i++)// apply arguments instead of spreading and mutate a local list of params for performance.
            params.push(dependencies[i].apply(null, arguments));
            // apply arguments instead of spreading for performance.
            return memoizedResultFunc.apply(null, params);
        });
        selector.resultFunc = resultFunc;
        selector.dependencies = dependencies;
        selector.recomputations = function() {
            return recomputations;
        };
        selector.resetRecomputations = function() {
            return recomputations = 0;
        };
        return selector;
    };
}
var createSelector = createSelectorCreator(defaultMemoize);
function createStructuredSelector(selectors) {
    var selectorCreator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : createSelector;
    if (typeof selectors !== 'object') throw new Error('createStructuredSelector expects first argument to be an object ' + ('where each property is a selector, instead received a ' + typeof selectors));
    var objectKeys = Object.keys(selectors);
    return selectorCreator(objectKeys.map(function(key) {
        return selectors[key];
    }), function() {
        for(var _len3 = arguments.length, values = Array(_len3), _key3 = 0; _key3 < _len3; _key3++)values[_key3] = arguments[_key3];
        return values.reduce(function(composition, value, index) {
            composition[objectKeys[index]] = value;
            return composition;
        }, {});
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"glwFn"}],"glwFn":[function(require,module,exports,__globalThis) {
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
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
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

},{}],"dB36x":[function(require,module,exports,__globalThis) {
/////////////////////////////////////////////////////////////////////////////////
/* UAParser.js v1.0.40
   Copyright © 2012-2024 Faisal Salman <f@faisalman.com>
   MIT License */ /*
   Detect Browser, Engine, OS, CPU, and Device type/model from User-Agent data.
   Supports browser & node.js environment. 
   Demo   : https://faisalman.github.io/ua-parser-js
   Source : https://github.com/faisalman/ua-parser-js */ /////////////////////////////////////////////////////////////////////////////////
(function(window1, undefined) {
    'use strict';
    //////////////
    // Constants
    /////////////
    var LIBVERSION = '1.0.40', EMPTY = '', UNKNOWN = '?', FUNC_TYPE = 'function', UNDEF_TYPE = 'undefined', OBJ_TYPE = 'object', STR_TYPE = 'string', MAJOR = 'major', MODEL = 'model', NAME = 'name', TYPE = 'type', VENDOR = 'vendor', VERSION = 'version', ARCHITECTURE = 'architecture', CONSOLE = 'console', MOBILE = 'mobile', TABLET = 'tablet', SMARTTV = 'smarttv', WEARABLE = 'wearable', EMBEDDED = 'embedded', UA_MAX_LENGTH = 500;
    var AMAZON = 'Amazon', APPLE = 'Apple', ASUS = 'ASUS', BLACKBERRY = 'BlackBerry', BROWSER = 'Browser', CHROME = 'Chrome', EDGE = 'Edge', FIREFOX = 'Firefox', GOOGLE = 'Google', HUAWEI = 'Huawei', LG = 'LG', MICROSOFT = 'Microsoft', MOTOROLA = 'Motorola', OPERA = 'Opera', SAMSUNG = 'Samsung', SHARP = 'Sharp', SONY = 'Sony', XIAOMI = 'Xiaomi', ZEBRA = 'Zebra', FACEBOOK = 'Facebook', CHROMIUM_OS = 'Chromium OS', MAC_OS = 'Mac OS', SUFFIX_BROWSER = ' Browser';
    ///////////
    // Helper
    //////////
    var extend = function(regexes, extensions) {
        var mergedRegexes = {};
        for(var i in regexes)if (extensions[i] && extensions[i].length % 2 === 0) mergedRegexes[i] = extensions[i].concat(regexes[i]);
        else mergedRegexes[i] = regexes[i];
        return mergedRegexes;
    }, enumerize = function(arr) {
        var enums = {};
        for(var i = 0; i < arr.length; i++)enums[arr[i].toUpperCase()] = arr[i];
        return enums;
    }, has = function(str1, str2) {
        return typeof str1 === STR_TYPE ? lowerize(str2).indexOf(lowerize(str1)) !== -1 : false;
    }, lowerize = function(str) {
        return str.toLowerCase();
    }, majorize = function(version) {
        return typeof version === STR_TYPE ? version.replace(/[^\d\.]/g, EMPTY).split('.')[0] : undefined;
    }, trim = function(str, len) {
        if (typeof str === STR_TYPE) {
            str = str.replace(/^\s\s*/, EMPTY);
            return typeof len === UNDEF_TYPE ? str : str.substring(0, UA_MAX_LENGTH);
        }
    };
    ///////////////
    // Map helper
    //////////////
    var rgxMapper = function(ua, arrays) {
        var i = 0, j, k, p, q, matches, match;
        // loop through all regexes maps
        while(i < arrays.length && !matches){
            var regex = arrays[i], props = arrays[i + 1]; // odd sequence (1,3,5,..)
            j = k = 0;
            // try matching uastring with regexes
            while(j < regex.length && !matches){
                if (!regex[j]) break;
                matches = regex[j++].exec(ua);
                if (!!matches) for(p = 0; p < props.length; p++){
                    match = matches[++k];
                    q = props[p];
                    // check if given property is actually array
                    if (typeof q === OBJ_TYPE && q.length > 0) {
                        if (q.length === 2) {
                            if (typeof q[1] == FUNC_TYPE) // assign modified match
                            this[q[0]] = q[1].call(this, match);
                            else // assign given value, ignore regex match
                            this[q[0]] = q[1];
                        } else if (q.length === 3) {
                            // check whether function or regex
                            if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) // call function (usually string mapper)
                            this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined;
                            else // sanitize match using given regex
                            this[q[0]] = match ? match.replace(q[1], q[2]) : undefined;
                        } else if (q.length === 4) this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined;
                    } else this[q] = match ? match : undefined;
                }
            }
            i += 2;
        }
    }, strMapper = function(str, map) {
        for(var i in map){
            // check if current value is array
            if (typeof map[i] === OBJ_TYPE && map[i].length > 0) for(var j = 0; j < map[i].length; j++){
                if (has(map[i][j], str)) return i === UNKNOWN ? undefined : i;
            }
            else if (has(map[i], str)) return i === UNKNOWN ? undefined : i;
        }
        return map.hasOwnProperty('*') ? map['*'] : str;
    };
    ///////////////
    // String map
    //////////////
    // Safari < 3.0
    var oldSafariMap = {
        '1.0': '/8',
        '1.2': '/1',
        '1.3': '/3',
        '2.0': '/412',
        '2.0.2': '/416',
        '2.0.3': '/417',
        '2.0.4': '/419',
        '?': '/'
    }, windowsVersionMap = {
        'ME': '4.90',
        'NT 3.11': 'NT3.51',
        'NT 4.0': 'NT4.0',
        '2000': 'NT 5.0',
        'XP': [
            'NT 5.1',
            'NT 5.2'
        ],
        'Vista': 'NT 6.0',
        '7': 'NT 6.1',
        '8': 'NT 6.2',
        '8.1': 'NT 6.3',
        '10': [
            'NT 6.4',
            'NT 10.0'
        ],
        'RT': 'ARM'
    };
    //////////////
    // Regex map
    /////////////
    var regexes = {
        browser: [
            [
                /\b(?:crmo|crios)\/([\w\.]+)/i // Chrome for Android/iOS
            ],
            [
                VERSION,
                [
                    NAME,
                    'Chrome'
                ]
            ],
            [
                /edg(?:e|ios|a)?\/([\w\.]+)/i // Microsoft Edge
            ],
            [
                VERSION,
                [
                    NAME,
                    'Edge'
                ]
            ],
            [
                // Presto based
                /(opera mini)\/([-\w\.]+)/i,
                /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i // Opera
            ],
            [
                NAME,
                VERSION
            ],
            [
                /opios[\/ ]+([\w\.]+)/i // Opera mini on iphone >= 8.0
            ],
            [
                VERSION,
                [
                    NAME,
                    OPERA + ' Mini'
                ]
            ],
            [
                /\bop(?:rg)?x\/([\w\.]+)/i // Opera GX
            ],
            [
                VERSION,
                [
                    NAME,
                    OPERA + ' GX'
                ]
            ],
            [
                /\bopr\/([\w\.]+)/i // Opera Webkit
            ],
            [
                VERSION,
                [
                    NAME,
                    OPERA
                ]
            ],
            [
                // Mixed
                /\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i // Baidu
            ],
            [
                VERSION,
                [
                    NAME,
                    'Baidu'
                ]
            ],
            [
                /\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i // Maxthon
            ],
            [
                VERSION,
                [
                    NAME,
                    'Maxthon'
                ]
            ],
            [
                /(kindle)\/([\w\.]+)/i,
                /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,
                // Lunascape/Maxthon/Netfront/Jasmine/Blazer/Sleipnir
                // Trident based
                /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,
                /(?:ms|\()(ie) ([\w\.]+)/i,
                // Blink/Webkit/KHTML based                                         // Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser/QupZilla/Falkon
                /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i,
                // Rekonq/Puffin/Brave/Whale/QQBrowserLite/QQ//Vivaldi/DuckDuckGo/Klar/Helio/Dragon
                /(heytap|ovi|115)browser\/([\d\.]+)/i,
                /(weibo)__([\d\.]+)/i // Weibo
            ],
            [
                NAME,
                VERSION
            ],
            [
                /quark(?:pc)?\/([-\w\.]+)/i // Quark
            ],
            [
                VERSION,
                [
                    NAME,
                    'Quark'
                ]
            ],
            [
                /\bddg\/([\w\.]+)/i // DuckDuckGo
            ],
            [
                VERSION,
                [
                    NAME,
                    'DuckDuckGo'
                ]
            ],
            [
                /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i // UCBrowser
            ],
            [
                VERSION,
                [
                    NAME,
                    'UC' + BROWSER
                ]
            ],
            [
                /microm.+\bqbcore\/([\w\.]+)/i,
                /\bqbcore\/([\w\.]+).+microm/i,
                /micromessenger\/([\w\.]+)/i // WeChat
            ],
            [
                VERSION,
                [
                    NAME,
                    'WeChat'
                ]
            ],
            [
                /konqueror\/([\w\.]+)/i // Konqueror
            ],
            [
                VERSION,
                [
                    NAME,
                    'Konqueror'
                ]
            ],
            [
                /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i // IE11
            ],
            [
                VERSION,
                [
                    NAME,
                    'IE'
                ]
            ],
            [
                /ya(?:search)?browser\/([\w\.]+)/i // Yandex
            ],
            [
                VERSION,
                [
                    NAME,
                    'Yandex'
                ]
            ],
            [
                /slbrowser\/([\w\.]+)/i // Smart Lenovo Browser
            ],
            [
                VERSION,
                [
                    NAME,
                    'Smart Lenovo ' + BROWSER
                ]
            ],
            [
                /(avast|avg)\/([\w\.]+)/i // Avast/AVG Secure Browser
            ],
            [
                [
                    NAME,
                    /(.+)/,
                    '$1 Secure ' + BROWSER
                ],
                VERSION
            ],
            [
                /\bfocus\/([\w\.]+)/i // Firefox Focus
            ],
            [
                VERSION,
                [
                    NAME,
                    FIREFOX + ' Focus'
                ]
            ],
            [
                /\bopt\/([\w\.]+)/i // Opera Touch
            ],
            [
                VERSION,
                [
                    NAME,
                    OPERA + ' Touch'
                ]
            ],
            [
                /coc_coc\w+\/([\w\.]+)/i // Coc Coc Browser
            ],
            [
                VERSION,
                [
                    NAME,
                    'Coc Coc'
                ]
            ],
            [
                /dolfin\/([\w\.]+)/i // Dolphin
            ],
            [
                VERSION,
                [
                    NAME,
                    'Dolphin'
                ]
            ],
            [
                /coast\/([\w\.]+)/i // Opera Coast
            ],
            [
                VERSION,
                [
                    NAME,
                    OPERA + ' Coast'
                ]
            ],
            [
                /miuibrowser\/([\w\.]+)/i // MIUI Browser
            ],
            [
                VERSION,
                [
                    NAME,
                    'MIUI' + SUFFIX_BROWSER
                ]
            ],
            [
                /fxios\/([\w\.-]+)/i // Firefox for iOS
            ],
            [
                VERSION,
                [
                    NAME,
                    FIREFOX
                ]
            ],
            [
                /\bqihoobrowser\/?([\w\.]*)/i // 360
            ],
            [
                VERSION,
                [
                    NAME,
                    '360'
                ]
            ],
            [
                /\b(qq)\/([\w\.]+)/i // QQ
            ],
            [
                [
                    NAME,
                    /(.+)/,
                    '$1Browser'
                ],
                VERSION
            ],
            [
                /(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i
            ],
            [
                [
                    NAME,
                    /(.+)/,
                    '$1' + SUFFIX_BROWSER
                ],
                VERSION
            ],
            [
                /samsungbrowser\/([\w\.]+)/i // Samsung Internet
            ],
            [
                VERSION,
                [
                    NAME,
                    SAMSUNG + ' Internet'
                ]
            ],
            [
                /metasr[\/ ]?([\d\.]+)/i // Sogou Explorer
            ],
            [
                VERSION,
                [
                    NAME,
                    'Sogou Explorer'
                ]
            ],
            [
                /(sogou)mo\w+\/([\d\.]+)/i // Sogou Mobile
            ],
            [
                [
                    NAME,
                    'Sogou Mobile'
                ],
                VERSION
            ],
            [
                /(electron)\/([\w\.]+) safari/i,
                /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i // QQ/2345
            ],
            [
                NAME,
                VERSION
            ],
            [
                /(lbbrowser|rekonq)/i,
                /\[(linkedin)app\]/i // LinkedIn App for iOS & Android
            ],
            [
                NAME
            ],
            [
                /ome\/([\w\.]+) \w* ?(iron) saf/i,
                /ome\/([\w\.]+).+qihu (360)[es]e/i // 360
            ],
            [
                VERSION,
                NAME
            ],
            [
                // WebView
                /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i // Facebook App for iOS & Android
            ],
            [
                [
                    NAME,
                    FACEBOOK
                ],
                VERSION
            ],
            [
                /(Klarna)\/([\w\.]+)/i,
                /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
                /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
                /safari (line)\/([\w\.]+)/i,
                /\b(line)\/([\w\.]+)\/iab/i,
                /(alipay)client\/([\w\.]+)/i,
                /(twitter)(?:and| f.+e\/([\w\.]+))/i,
                /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i // Chromium/Instagram/Snapchat
            ],
            [
                NAME,
                VERSION
            ],
            [
                /\bgsa\/([\w\.]+) .*safari\//i // Google Search Appliance on iOS
            ],
            [
                VERSION,
                [
                    NAME,
                    'GSA'
                ]
            ],
            [
                /musical_ly(?:.+app_?version\/|_)([\w\.]+)/i // TikTok
            ],
            [
                VERSION,
                [
                    NAME,
                    'TikTok'
                ]
            ],
            [
                /headlesschrome(?:\/([\w\.]+)| )/i // Chrome Headless
            ],
            [
                VERSION,
                [
                    NAME,
                    CHROME + ' Headless'
                ]
            ],
            [
                / wv\).+(chrome)\/([\w\.]+)/i // Chrome WebView
            ],
            [
                [
                    NAME,
                    CHROME + ' WebView'
                ],
                VERSION
            ],
            [
                /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i // Android Browser
            ],
            [
                VERSION,
                [
                    NAME,
                    'Android ' + BROWSER
                ]
            ],
            [
                /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i // Chrome/OmniWeb/Arora/Tizen/Nokia
            ],
            [
                NAME,
                VERSION
            ],
            [
                /version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i // Mobile Safari
            ],
            [
                VERSION,
                [
                    NAME,
                    'Mobile Safari'
                ]
            ],
            [
                /version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i // Safari & Safari Mobile
            ],
            [
                VERSION,
                NAME
            ],
            [
                /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i // Safari < 3.0
            ],
            [
                NAME,
                [
                    VERSION,
                    strMapper,
                    oldSafariMap
                ]
            ],
            [
                /(webkit|khtml)\/([\w\.]+)/i
            ],
            [
                NAME,
                VERSION
            ],
            [
                // Gecko based
                /(navigator|netscape\d?)\/([-\w\.]+)/i // Netscape
            ],
            [
                [
                    NAME,
                    'Netscape'
                ],
                VERSION
            ],
            [
                /(wolvic|librewolf)\/([\w\.]+)/i // Wolvic/LibreWolf
            ],
            [
                NAME,
                VERSION
            ],
            [
                /mobile vr; rv:([\w\.]+)\).+firefox/i // Firefox Reality
            ],
            [
                VERSION,
                [
                    NAME,
                    FIREFOX + ' Reality'
                ]
            ],
            [
                /ekiohf.+(flow)\/([\w\.]+)/i,
                /(swiftfox)/i,
                /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,
                // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror
                /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
                /(firefox)\/([\w\.]+)/i,
                /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
                // Other
                /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Obigo/Mosaic/Go/ICE/UP.Browser
                /(links) \(([\w\.]+)/i // Links
            ],
            [
                NAME,
                [
                    VERSION,
                    /_/g,
                    '.'
                ]
            ],
            [
                /(cobalt)\/([\w\.]+)/i // Cobalt
            ],
            [
                NAME,
                [
                    VERSION,
                    /master.|lts./,
                    ""
                ]
            ]
        ],
        cpu: [
            [
                /(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i // AMD64 (x64)
            ],
            [
                [
                    ARCHITECTURE,
                    'amd64'
                ]
            ],
            [
                /(ia32(?=;))/i // IA32 (quicktime)
            ],
            [
                [
                    ARCHITECTURE,
                    lowerize
                ]
            ],
            [
                /((?:i[346]|x)86)[;\)]/i // IA32 (x86)
            ],
            [
                [
                    ARCHITECTURE,
                    'ia32'
                ]
            ],
            [
                /\b(aarch64|arm(v?8e?l?|_?64))\b/i // ARM64
            ],
            [
                [
                    ARCHITECTURE,
                    'arm64'
                ]
            ],
            [
                /\b(arm(?:v[67])?ht?n?[fl]p?)\b/i // ARMHF
            ],
            [
                [
                    ARCHITECTURE,
                    'armhf'
                ]
            ],
            [
                // PocketPC mistakenly identified as PowerPC
                /windows (ce|mobile); ppc;/i
            ],
            [
                [
                    ARCHITECTURE,
                    'arm'
                ]
            ],
            [
                /((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i // PowerPC
            ],
            [
                [
                    ARCHITECTURE,
                    /ower/,
                    EMPTY,
                    lowerize
                ]
            ],
            [
                /(sun4\w)[;\)]/i // SPARC
            ],
            [
                [
                    ARCHITECTURE,
                    'sparc'
                ]
            ],
            [
                /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i
            ],
            [
                [
                    ARCHITECTURE,
                    lowerize
                ]
            ]
        ],
        device: [
            [
                //////////////////////////
                // MOBILES & TABLETS
                /////////////////////////
                // Samsung
                /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    SAMSUNG
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
                /samsung[- ]((?!sm-[lr])[-\w]+)/i,
                /sec-(sgh\w+)/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    SAMSUNG
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Apple
                /(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i // iPod/iPhone
            ],
            [
                MODEL,
                [
                    VENDOR,
                    APPLE
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /\((ipad);[-\w\),; ]+apple/i,
                /applecoremedia\/[\w\.]+ \((ipad)/i,
                /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    APPLE
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /(macintosh);/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    APPLE
                ]
            ],
            [
                // Sharp
                /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    SHARP
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Honor
                /(?:honor)([-\w ]+)[;\)]/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    'Honor'
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Huawei
                /\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    HUAWEI
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /(?:huawei)([-\w ]+)[;\)]/i,
                /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    HUAWEI
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Xiaomi
                /\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,
                /\b; (\w+) build\/hm\1/i,
                /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,
                /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i // Xiaomi Mi
            ],
            [
                [
                    MODEL,
                    /_/g,
                    ' '
                ],
                [
                    VENDOR,
                    XIAOMI
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,
                /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i // Mi Pad tablets
            ],
            [
                [
                    MODEL,
                    /_/g,
                    ' '
                ],
                [
                    VENDOR,
                    XIAOMI
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                // OPPO
                /; (\w+) bui.+ oppo/i,
                /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    'OPPO'
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /\b(opd2\d{3}a?) bui/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    'OPPO'
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                // Vivo
                /vivo (\w+)(?: bui|\))/i,
                /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    'Vivo'
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Realme
                /\b(rmx[1-3]\d{3})(?: bui|;|\))/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    'Realme'
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Motorola
                /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                /\bmot(?:orola)?[- ](\w*)/i,
                /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    MOTOROLA
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /\b(mz60\d|xoom[2 ]{0,2}) build\//i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    MOTOROLA
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                // LG
                /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    LG
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
                /\blg-?([\d\w]+) bui/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    LG
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Lenovo
                /(ideatab[-\w ]+)/i,
                /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    'Lenovo'
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                // Nokia
                /(?:maemo|nokia).*(n900|lumia \d+)/i,
                /nokia[-_ ]?([-\w\.]*)/i
            ],
            [
                [
                    MODEL,
                    /_/g,
                    ' '
                ],
                [
                    VENDOR,
                    'Nokia'
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Google
                /(pixel c)\b/i // Google Pixel C
            ],
            [
                MODEL,
                [
                    VENDOR,
                    GOOGLE
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i // Google Pixel
            ],
            [
                MODEL,
                [
                    VENDOR,
                    GOOGLE
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Sony
                /droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    SONY
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /sony tablet [ps]/i,
                /\b(?:sony)?sgp\w+(?: bui|\))/i
            ],
            [
                [
                    MODEL,
                    'Xperia Tablet'
                ],
                [
                    VENDOR,
                    SONY
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                // OnePlus
                / (kb2005|in20[12]5|be20[12][59])\b/i,
                /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    'OnePlus'
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Amazon
                /(alexa)webm/i,
                /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
                /(kf[a-z]+)( bui|\)).+silk\//i // Kindle Fire HD
            ],
            [
                MODEL,
                [
                    VENDOR,
                    AMAZON
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i // Fire Phone
            ],
            [
                [
                    MODEL,
                    /(.+)/g,
                    'Fire Phone $1'
                ],
                [
                    VENDOR,
                    AMAZON
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // BlackBerry
                /(playbook);[-\w\),; ]+(rim)/i // BlackBerry PlayBook
            ],
            [
                MODEL,
                VENDOR,
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b((?:bb[a-f]|st[hv])100-\d)/i,
                /\(bb10; (\w+)/i // BlackBerry 10
            ],
            [
                MODEL,
                [
                    VENDOR,
                    BLACKBERRY
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Asus
                /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    ASUS
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    ASUS
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // HTC
                /(nexus 9)/i // HTC Nexus 9
            ],
            [
                MODEL,
                [
                    VENDOR,
                    'HTC'
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                // ZTE
                /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i // Alcatel/GeeksPhone/Nexian/Panasonic/Sony
            ],
            [
                VENDOR,
                [
                    MODEL,
                    /_/g,
                    ' '
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // TCL
                /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    'TCL'
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                // itel
                /(itel) ((\w+))/i
            ],
            [
                [
                    VENDOR,
                    lowerize
                ],
                MODEL,
                [
                    TYPE,
                    strMapper,
                    {
                        'tablet': [
                            'p10001l',
                            'w7001'
                        ],
                        '*': 'mobile'
                    }
                ]
            ],
            [
                // Acer
                /droid.+; ([ab][1-7]-?[0178a]\d\d?)/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    'Acer'
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                // Meizu
                /droid.+; (m[1-5] note) bui/i,
                /\bmz-([-\w]{2,})/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    'Meizu'
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Ulefone
                /; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    'Ulefone'
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Energizer
                /; (energy ?\w+)(?: bui|\))/i,
                /; energizer ([\w ]+)(?: bui|\))/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    'Energizer'
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Cat
                /; cat (b35);/i,
                /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    'Cat'
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Smartfren
                /((?:new )?andromax[\w- ]+)(?: bui|\))/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    'Smartfren'
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Nothing
                /droid.+; (a(?:015|06[35]|142p?))/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    'Nothing'
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // MIXED
                /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i,
                // BlackBerry/BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron/Infinix/Tecno/Micromax/Advan
                /; (imo) ((?!tab)[\w ]+?)(?: bui|\))/i,
                /(hp) ([\w ]+\w)/i,
                /(asus)-?(\w+)/i,
                /(microsoft); (lumia[\w ]+)/i,
                /(lenovo)[-_ ]?([-\w]+)/i,
                /(jolla)/i,
                /(oppo) ?([\w ]+) bui/i // OPPO
            ],
            [
                VENDOR,
                MODEL,
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /(imo) (tab \w+)/i,
                /(kobo)\s(ereader|touch)/i,
                /(archos) (gamepad2?)/i,
                /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                /(kindle)\/([\w\.]+)/i,
                /(nook)[\w ]+build\/(\w+)/i,
                /(dell) (strea[kpr\d ]*[\dko])/i,
                /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
                /(trinity)[- ]*(t\d{3}) bui/i,
                /(gigaset)[- ]+(q\w{1,9}) bui/i,
                /(vodafone) ([\w ]+)(?:\)| bui)/i // Vodafone
            ],
            [
                VENDOR,
                MODEL,
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /(surface duo)/i // Surface Duo
            ],
            [
                MODEL,
                [
                    VENDOR,
                    MICROSOFT
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /droid [\d\.]+; (fp\du?)(?: b|\))/i // Fairphone
            ],
            [
                MODEL,
                [
                    VENDOR,
                    'Fairphone'
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /(u304aa)/i // AT&T
            ],
            [
                MODEL,
                [
                    VENDOR,
                    'AT&T'
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /\bsie-(\w*)/i // Siemens
            ],
            [
                MODEL,
                [
                    VENDOR,
                    'Siemens'
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /\b(rct\w+) b/i // RCA Tablets
            ],
            [
                MODEL,
                [
                    VENDOR,
                    'RCA'
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b(venue[\d ]{2,7}) b/i // Dell Venue Tablets
            ],
            [
                MODEL,
                [
                    VENDOR,
                    'Dell'
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b(q(?:mv|ta)\w+) b/i // Verizon Tablet
            ],
            [
                MODEL,
                [
                    VENDOR,
                    'Verizon'
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i // Barnes & Noble Tablet
            ],
            [
                MODEL,
                [
                    VENDOR,
                    'Barnes & Noble'
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b(tm\d{3}\w+) b/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    'NuVision'
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b(k88) b/i // ZTE K Series Tablet
            ],
            [
                MODEL,
                [
                    VENDOR,
                    'ZTE'
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b(nx\d{3}j) b/i // ZTE Nubia
            ],
            [
                MODEL,
                [
                    VENDOR,
                    'ZTE'
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /\b(gen\d{3}) b.+49h/i // Swiss GEN Mobile
            ],
            [
                MODEL,
                [
                    VENDOR,
                    'Swiss'
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /\b(zur\d{3}) b/i // Swiss ZUR Tablet
            ],
            [
                MODEL,
                [
                    VENDOR,
                    'Swiss'
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b((zeki)?tb.*\b) b/i // Zeki Tablets
            ],
            [
                MODEL,
                [
                    VENDOR,
                    'Zeki'
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b([yr]\d{2}) b/i,
                /\b(dragon[- ]+touch |dt)(\w{5}) b/i // Dragon Touch Tablet
            ],
            [
                [
                    VENDOR,
                    'Dragon Touch'
                ],
                MODEL,
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b(ns-?\w{0,9}) b/i // Insignia Tablets
            ],
            [
                MODEL,
                [
                    VENDOR,
                    'Insignia'
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b((nxa|next)-?\w{0,9}) b/i // NextBook Tablets
            ],
            [
                MODEL,
                [
                    VENDOR,
                    'NextBook'
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i // Voice Xtreme Phones
            ],
            [
                [
                    VENDOR,
                    'Voice'
                ],
                MODEL,
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /\b(lvtel\-)?(v1[12]) b/i // LvTel Phones
            ],
            [
                [
                    VENDOR,
                    'LvTel'
                ],
                MODEL,
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /\b(ph-1) /i // Essential PH-1
            ],
            [
                MODEL,
                [
                    VENDOR,
                    'Essential'
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /\b(v(100md|700na|7011|917g).*\b) b/i // Envizen Tablets
            ],
            [
                MODEL,
                [
                    VENDOR,
                    'Envizen'
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b(trio[-\w\. ]+) b/i // MachSpeed Tablets
            ],
            [
                MODEL,
                [
                    VENDOR,
                    'MachSpeed'
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\btu_(1491) b/i // Rotor Tablets
            ],
            [
                MODEL,
                [
                    VENDOR,
                    'Rotor'
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /(shield[\w ]+) b/i // Nvidia Shield Tablets
            ],
            [
                MODEL,
                [
                    VENDOR,
                    'Nvidia'
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /(sprint) (\w+)/i // Sprint Phones
            ],
            [
                VENDOR,
                MODEL,
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /(kin\.[onetw]{3})/i // Microsoft Kin
            ],
            [
                [
                    MODEL,
                    /\./g,
                    ' '
                ],
                [
                    VENDOR,
                    MICROSOFT
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i // Zebra
            ],
            [
                MODEL,
                [
                    VENDOR,
                    ZEBRA
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    ZEBRA
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                ///////////////////
                // SMARTTVS
                ///////////////////
                /smart-tv.+(samsung)/i // Samsung
            ],
            [
                VENDOR,
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /hbbtv.+maple;(\d+)/i
            ],
            [
                [
                    MODEL,
                    /^/,
                    'SmartTV'
                ],
                [
                    VENDOR,
                    SAMSUNG
                ],
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i // LG SmartTV
            ],
            [
                [
                    VENDOR,
                    LG
                ],
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /(apple) ?tv/i // Apple TV
            ],
            [
                VENDOR,
                [
                    MODEL,
                    APPLE + ' TV'
                ],
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /crkey/i // Google Chromecast
            ],
            [
                [
                    MODEL,
                    CHROME + 'cast'
                ],
                [
                    VENDOR,
                    GOOGLE
                ],
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /droid.+aft(\w+)( bui|\))/i // Fire TV
            ],
            [
                MODEL,
                [
                    VENDOR,
                    AMAZON
                ],
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /\(dtv[\);].+(aquos)/i,
                /(aquos-tv[\w ]+)\)/i // Sharp
            ],
            [
                MODEL,
                [
                    VENDOR,
                    SHARP
                ],
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /(bravia[\w ]+)( bui|\))/i // Sony
            ],
            [
                MODEL,
                [
                    VENDOR,
                    SONY
                ],
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /(mitv-\w{5}) bui/i // Xiaomi
            ],
            [
                MODEL,
                [
                    VENDOR,
                    XIAOMI
                ],
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /Hbbtv.*(technisat) (.*);/i // TechniSAT
            ],
            [
                VENDOR,
                MODEL,
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
                /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i // HbbTV devices
            ],
            [
                [
                    VENDOR,
                    trim
                ],
                [
                    MODEL,
                    trim
                ],
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i // SmartTV from Unidentified Vendors
            ],
            [
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                ///////////////////
                // CONSOLES
                ///////////////////
                /(ouya)/i,
                /(nintendo) ([wids3utch]+)/i // Nintendo
            ],
            [
                VENDOR,
                MODEL,
                [
                    TYPE,
                    CONSOLE
                ]
            ],
            [
                /droid.+; (shield) bui/i // Nvidia
            ],
            [
                MODEL,
                [
                    VENDOR,
                    'Nvidia'
                ],
                [
                    TYPE,
                    CONSOLE
                ]
            ],
            [
                /(playstation [345portablevi]+)/i // Playstation
            ],
            [
                MODEL,
                [
                    VENDOR,
                    SONY
                ],
                [
                    TYPE,
                    CONSOLE
                ]
            ],
            [
                /\b(xbox(?: one)?(?!; xbox))[\); ]/i // Microsoft Xbox
            ],
            [
                MODEL,
                [
                    VENDOR,
                    MICROSOFT
                ],
                [
                    TYPE,
                    CONSOLE
                ]
            ],
            [
                ///////////////////
                // WEARABLES
                ///////////////////
                /\b(sm-[lr]\d\d[05][fnuw]?s?)\b/i // Samsung Galaxy Watch
            ],
            [
                MODEL,
                [
                    VENDOR,
                    SAMSUNG
                ],
                [
                    TYPE,
                    WEARABLE
                ]
            ],
            [
                /((pebble))app/i // Pebble
            ],
            [
                VENDOR,
                MODEL,
                [
                    TYPE,
                    WEARABLE
                ]
            ],
            [
                /(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i // Apple Watch
            ],
            [
                MODEL,
                [
                    VENDOR,
                    APPLE
                ],
                [
                    TYPE,
                    WEARABLE
                ]
            ],
            [
                /droid.+; (glass) \d/i // Google Glass
            ],
            [
                MODEL,
                [
                    VENDOR,
                    GOOGLE
                ],
                [
                    TYPE,
                    WEARABLE
                ]
            ],
            [
                /droid.+; (wt63?0{2,3})\)/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    ZEBRA
                ],
                [
                    TYPE,
                    WEARABLE
                ]
            ],
            [
                ///////////////////
                // XR
                ///////////////////
                /droid.+; (glass) \d/i // Google Glass
            ],
            [
                MODEL,
                [
                    VENDOR,
                    GOOGLE
                ],
                [
                    TYPE,
                    WEARABLE
                ]
            ],
            [
                /(pico) (4|neo3(?: link|pro)?)/i // Pico
            ],
            [
                VENDOR,
                MODEL,
                [
                    TYPE,
                    WEARABLE
                ]
            ],
            [
                /; (quest( \d| pro)?)/i // Oculus Quest
            ],
            [
                MODEL,
                [
                    VENDOR,
                    FACEBOOK
                ],
                [
                    TYPE,
                    WEARABLE
                ]
            ],
            [
                ///////////////////
                // EMBEDDED
                ///////////////////
                /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i // Tesla
            ],
            [
                VENDOR,
                [
                    TYPE,
                    EMBEDDED
                ]
            ],
            [
                /(aeobc)\b/i // Echo Dot
            ],
            [
                MODEL,
                [
                    VENDOR,
                    AMAZON
                ],
                [
                    TYPE,
                    EMBEDDED
                ]
            ],
            [
                ////////////////////
                // MIXED (GENERIC)
                ///////////////////
                /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i // Android Phones from Unidentified Vendors
            ],
            [
                MODEL,
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i // Android Tablets from Unidentified Vendors
            ],
            [
                MODEL,
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i // Unidentifiable Tablet
            ],
            [
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i // Unidentifiable Mobile
            ],
            [
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /(android[-\w\. ]{0,9});.+buil/i // Generic Android Device
            ],
            [
                MODEL,
                [
                    VENDOR,
                    'Generic'
                ]
            ]
        ],
        engine: [
            [
                /windows.+ edge\/([\w\.]+)/i // EdgeHTML
            ],
            [
                VERSION,
                [
                    NAME,
                    EDGE + 'HTML'
                ]
            ],
            [
                /(arkweb)\/([\w\.]+)/i // ArkWeb
            ],
            [
                NAME,
                VERSION
            ],
            [
                /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i // Blink
            ],
            [
                VERSION,
                [
                    NAME,
                    'Blink'
                ]
            ],
            [
                /(presto)\/([\w\.]+)/i,
                /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,
                /ekioh(flow)\/([\w\.]+)/i,
                /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                /(icab)[\/ ]([23]\.[\d\.]+)/i,
                /\b(libweb)/i
            ],
            [
                NAME,
                VERSION
            ],
            [
                /rv\:([\w\.]{1,9})\b.+(gecko)/i // Gecko
            ],
            [
                VERSION,
                NAME
            ]
        ],
        os: [
            [
                // Windows
                /microsoft (windows) (vista|xp)/i // Windows (iTunes)
            ],
            [
                NAME,
                VERSION
            ],
            [
                /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i // Windows Phone
            ],
            [
                NAME,
                [
                    VERSION,
                    strMapper,
                    windowsVersionMap
                ]
            ],
            [
                /windows nt 6\.2; (arm)/i,
                /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
                /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i
            ],
            [
                [
                    VERSION,
                    strMapper,
                    windowsVersionMap
                ],
                [
                    NAME,
                    'Windows'
                ]
            ],
            [
                // iOS/macOS
                /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
                /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
                /cfnetwork\/.+darwin/i
            ],
            [
                [
                    VERSION,
                    /_/g,
                    '.'
                ],
                [
                    NAME,
                    'iOS'
                ]
            ],
            [
                /(mac os x) ?([\w\. ]*)/i,
                /(macintosh|mac_powerpc\b)(?!.+haiku)/i // Mac OS
            ],
            [
                [
                    NAME,
                    MAC_OS
                ],
                [
                    VERSION,
                    /_/g,
                    '.'
                ]
            ],
            [
                // Mobile OSes
                /droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i // Android-x86/HarmonyOS
            ],
            [
                VERSION,
                NAME
            ],
            [
                /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish|openharmony)[-\/ ]?([\w\.]*)/i,
                /(blackberry)\w*\/([\w\.]*)/i,
                /(tizen|kaios)[\/ ]([\w\.]+)/i,
                /\((series40);/i // Series 40
            ],
            [
                NAME,
                VERSION
            ],
            [
                /\(bb(10);/i // BlackBerry 10
            ],
            [
                VERSION,
                [
                    NAME,
                    BLACKBERRY
                ]
            ],
            [
                /(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i // Symbian
            ],
            [
                VERSION,
                [
                    NAME,
                    'Symbian'
                ]
            ],
            [
                /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i // Firefox OS
            ],
            [
                VERSION,
                [
                    NAME,
                    FIREFOX + ' OS'
                ]
            ],
            [
                /web0s;.+rt(tv)/i,
                /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i // WebOS
            ],
            [
                VERSION,
                [
                    NAME,
                    'webOS'
                ]
            ],
            [
                /watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i // watchOS
            ],
            [
                VERSION,
                [
                    NAME,
                    'watchOS'
                ]
            ],
            [
                // Google Chromecast
                /crkey\/([\d\.]+)/i // Google Chromecast
            ],
            [
                VERSION,
                [
                    NAME,
                    CHROME + 'cast'
                ]
            ],
            [
                /(cros) [\w]+(?:\)| ([\w\.]+)\b)/i // Chromium OS
            ],
            [
                [
                    NAME,
                    CHROMIUM_OS
                ],
                VERSION
            ],
            [
                // Smart TVs
                /panasonic;(viera)/i,
                /(netrange)mmh/i,
                /(nettv)\/(\d+\.[\w\.]+)/i,
                // Console
                /(nintendo|playstation) ([wids345portablevuch]+)/i,
                /(xbox); +xbox ([^\);]+)/i,
                // Other
                /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
                /(mint)[\/\(\) ]?(\w*)/i,
                /(mageia|vectorlinux)[; ]/i,
                /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                // Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware/Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus/Raspbian/Plan9/Minix/RISCOS/Contiki/Deepin/Manjaro/elementary/Sabayon/Linspire
                /(hurd|linux) ?([\w\.]*)/i,
                /(gnu) ?([\w\.]*)/i,
                /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                /(haiku) (\w+)/i // Haiku
            ],
            [
                NAME,
                VERSION
            ],
            [
                /(sunos) ?([\w\.\d]*)/i // Solaris
            ],
            [
                [
                    NAME,
                    'Solaris'
                ],
                VERSION
            ],
            [
                /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
                /(unix) ?([\w\.]*)/i // UNIX
            ],
            [
                NAME,
                VERSION
            ]
        ]
    };
    /////////////////
    // Constructor
    ////////////////
    var UAParser = function(ua, extensions) {
        if (typeof ua === OBJ_TYPE) {
            extensions = ua;
            ua = undefined;
        }
        if (!(this instanceof UAParser)) return new UAParser(ua, extensions).getResult();
        var _navigator = typeof window1 !== UNDEF_TYPE && window1.navigator ? window1.navigator : undefined;
        var _ua = ua || (_navigator && _navigator.userAgent ? _navigator.userAgent : EMPTY);
        var _uach = _navigator && _navigator.userAgentData ? _navigator.userAgentData : undefined;
        var _rgxmap = extensions ? extend(regexes, extensions) : regexes;
        var _isSelfNav = _navigator && _navigator.userAgent == _ua;
        this.getBrowser = function() {
            var _browser = {};
            _browser[NAME] = undefined;
            _browser[VERSION] = undefined;
            rgxMapper.call(_browser, _ua, _rgxmap.browser);
            _browser[MAJOR] = majorize(_browser[VERSION]);
            // Brave-specific detection
            if (_isSelfNav && _navigator && _navigator.brave && typeof _navigator.brave.isBrave == FUNC_TYPE) _browser[NAME] = 'Brave';
            return _browser;
        };
        this.getCPU = function() {
            var _cpu = {};
            _cpu[ARCHITECTURE] = undefined;
            rgxMapper.call(_cpu, _ua, _rgxmap.cpu);
            return _cpu;
        };
        this.getDevice = function() {
            var _device = {};
            _device[VENDOR] = undefined;
            _device[MODEL] = undefined;
            _device[TYPE] = undefined;
            rgxMapper.call(_device, _ua, _rgxmap.device);
            if (_isSelfNav && !_device[TYPE] && _uach && _uach.mobile) _device[TYPE] = MOBILE;
            // iPadOS-specific detection: identified as Mac, but has some iOS-only properties
            if (_isSelfNav && _device[MODEL] == 'Macintosh' && _navigator && typeof _navigator.standalone !== UNDEF_TYPE && _navigator.maxTouchPoints && _navigator.maxTouchPoints > 2) {
                _device[MODEL] = 'iPad';
                _device[TYPE] = TABLET;
            }
            return _device;
        };
        this.getEngine = function() {
            var _engine = {};
            _engine[NAME] = undefined;
            _engine[VERSION] = undefined;
            rgxMapper.call(_engine, _ua, _rgxmap.engine);
            return _engine;
        };
        this.getOS = function() {
            var _os = {};
            _os[NAME] = undefined;
            _os[VERSION] = undefined;
            rgxMapper.call(_os, _ua, _rgxmap.os);
            if (_isSelfNav && !_os[NAME] && _uach && _uach.platform && _uach.platform != 'Unknown') _os[NAME] = _uach.platform.replace(/chrome os/i, CHROMIUM_OS).replace(/macos/i, MAC_OS); // backward compatibility
            return _os;
        };
        this.getResult = function() {
            return {
                ua: this.getUA(),
                browser: this.getBrowser(),
                engine: this.getEngine(),
                os: this.getOS(),
                device: this.getDevice(),
                cpu: this.getCPU()
            };
        };
        this.getUA = function() {
            return _ua;
        };
        this.setUA = function(ua) {
            _ua = typeof ua === STR_TYPE && ua.length > UA_MAX_LENGTH ? trim(ua, UA_MAX_LENGTH) : ua;
            return this;
        };
        this.setUA(_ua);
        return this;
    };
    UAParser.VERSION = LIBVERSION;
    UAParser.BROWSER = enumerize([
        NAME,
        VERSION,
        MAJOR
    ]);
    UAParser.CPU = enumerize([
        ARCHITECTURE
    ]);
    UAParser.DEVICE = enumerize([
        MODEL,
        VENDOR,
        TYPE,
        CONSOLE,
        MOBILE,
        SMARTTV,
        TABLET,
        WEARABLE,
        EMBEDDED
    ]);
    UAParser.ENGINE = UAParser.OS = enumerize([
        NAME,
        VERSION
    ]);
    ///////////
    // Export
    //////////
    // check js environment
    if (typeof exports !== UNDEF_TYPE) {
        // nodejs env
        if ("object" !== UNDEF_TYPE && module.exports) exports = module.exports = UAParser;
        exports.UAParser = UAParser;
    } else {
        // requirejs env (optional)
        if (typeof define === FUNC_TYPE && define.amd) define(function() {
            return UAParser;
        });
        else if (typeof window1 !== UNDEF_TYPE) // browser env
        window1.UAParser = UAParser;
    }
    // jQuery/Zepto specific (optional)
    // Note:
    //   In AMD env the global scope should be kept clean, but jQuery is an exception.
    //   jQuery always exports to global scope, unless jQuery.noConflict(true) is used,
    //   and we should catch that.
    var $ = typeof window1 !== UNDEF_TYPE && (window1.jQuery || window1.Zepto);
    if ($ && !$.ua) {
        var parser = new UAParser();
        $.ua = parser.getResult();
        $.ua.get = function() {
            return parser.getUA();
        };
        $.ua.set = function(ua) {
            parser.setUA(ua);
            var result = parser.getResult();
            for(var prop in result)$.ua[prop] = result[prop];
        };
    }
})(typeof window === 'object' ? window : this);

},{}],"f1qTK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "v1", ()=>(0, _v1JsDefault.default));
parcelHelpers.export(exports, "v3", ()=>(0, _v3JsDefault.default));
parcelHelpers.export(exports, "v4", ()=>(0, _v4JsDefault.default));
parcelHelpers.export(exports, "v5", ()=>(0, _v5JsDefault.default));
parcelHelpers.export(exports, "NIL", ()=>(0, _nilJsDefault.default));
parcelHelpers.export(exports, "version", ()=>(0, _versionJsDefault.default));
parcelHelpers.export(exports, "validate", ()=>(0, _validateJsDefault.default));
parcelHelpers.export(exports, "stringify", ()=>(0, _stringifyJsDefault.default));
parcelHelpers.export(exports, "parse", ()=>(0, _parseJsDefault.default));
var _v1Js = require("./v1.js");
var _v1JsDefault = parcelHelpers.interopDefault(_v1Js);
var _v3Js = require("./v3.js");
var _v3JsDefault = parcelHelpers.interopDefault(_v3Js);
var _v4Js = require("./v4.js");
var _v4JsDefault = parcelHelpers.interopDefault(_v4Js);
var _v5Js = require("./v5.js");
var _v5JsDefault = parcelHelpers.interopDefault(_v5Js);
var _nilJs = require("./nil.js");
var _nilJsDefault = parcelHelpers.interopDefault(_nilJs);
var _versionJs = require("./version.js");
var _versionJsDefault = parcelHelpers.interopDefault(_versionJs);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
var _stringifyJs = require("./stringify.js");
var _stringifyJsDefault = parcelHelpers.interopDefault(_stringifyJs);
var _parseJs = require("./parse.js");
var _parseJsDefault = parcelHelpers.interopDefault(_parseJs);

},{"./v1.js":false,"./v3.js":false,"./v4.js":"7Sd5x","./v5.js":false,"./nil.js":false,"./version.js":false,"./validate.js":false,"./stringify.js":false,"./parse.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"glwFn"}],"7Sd5x":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _rngJs = require("./rng.js");
var _rngJsDefault = parcelHelpers.interopDefault(_rngJs);
var _stringifyJs = require("./stringify.js");
var _stringifyJsDefault = parcelHelpers.interopDefault(_stringifyJs);
function v4(options, buf, offset) {
    options = options || {};
    var rnds = options.random || (options.rng || (0, _rngJsDefault.default))(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
    rnds[6] = rnds[6] & 0x0f | 0x40;
    rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided
    if (buf) {
        offset = offset || 0;
        for(var i = 0; i < 16; ++i)buf[offset + i] = rnds[i];
        return buf;
    }
    return (0, _stringifyJsDefault.default)(rnds);
}
exports.default = v4;

},{"./rng.js":"aMz2Q","./stringify.js":"9dsAN","@parcel/transformer-js/src/esmodule-helpers.js":"glwFn"}],"aMz2Q":[function(require,module,exports,__globalThis) {
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>rng);
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
    // lazy load so that environments that need to polyfill have a chance to do so
    if (!getRandomValues) {
        // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
        // find the complete implementation of crypto (msCrypto) on IE11.
        getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);
        if (!getRandomValues) throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
    return getRandomValues(rnds8);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"glwFn"}],"9dsAN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */ var byteToHex = [];
for(var i = 0; i < 256; ++i)byteToHex.push((i + 0x100).toString(16).substr(1));
function stringify(arr) {
    var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    // Note: Be careful editing this code!  It's been tuned for performance
    // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
    var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
    // of the following:
    // - One or more input array values don't map to a hex octet (leading to
    // "undefined" in the uuid)
    // - Invalid input values for the RFC `version` or `variant` fields
    if (!(0, _validateJsDefault.default)(uuid)) throw TypeError('Stringified UUID is invalid');
    return uuid;
}
exports.default = stringify;

},{"./validate.js":"3wmxZ","@parcel/transformer-js/src/esmodule-helpers.js":"glwFn"}],"3wmxZ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _regexJs = require("./regex.js");
var _regexJsDefault = parcelHelpers.interopDefault(_regexJs);
function validate(uuid) {
    return typeof uuid === 'string' && (0, _regexJsDefault.default).test(uuid);
}
exports.default = validate;

},{"./regex.js":"9mE1W","@parcel/transformer-js/src/esmodule-helpers.js":"glwFn"}],"9mE1W":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"glwFn"}],"97Naw":[function(require,module,exports,__globalThis) {
/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ /** Used as the size to enable large array optimizations. */ var global = arguments[3];
var LARGE_ARRAY_SIZE = 200;
/** Used to stand-in for `undefined` hash values. */ var HASH_UNDEFINED = '__lodash_hash_undefined__';
/** Used to compose bitmasks for value comparisons. */ var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
/** Used as references for various `Number` constants. */ var MAX_SAFE_INTEGER = 9007199254740991;
/** `Object#toString` result references. */ var argsTag = '[object Arguments]', arrayTag = '[object Array]', asyncTag = '[object AsyncFunction]', boolTag = '[object Boolean]', dateTag = '[object Date]', errorTag = '[object Error]', funcTag = '[object Function]', genTag = '[object GeneratorFunction]', mapTag = '[object Map]', numberTag = '[object Number]', nullTag = '[object Null]', objectTag = '[object Object]', promiseTag = '[object Promise]', proxyTag = '[object Proxy]', regexpTag = '[object RegExp]', setTag = '[object Set]', stringTag = '[object String]', symbolTag = '[object Symbol]', undefinedTag = '[object Undefined]', weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]', dataViewTag = '[object DataView]', float32Tag = '[object Float32Array]', float64Tag = '[object Float64Array]', int8Tag = '[object Int8Array]', int16Tag = '[object Int16Array]', int32Tag = '[object Int32Array]', uint8Tag = '[object Uint8Array]', uint8ClampedTag = '[object Uint8ClampedArray]', uint16Tag = '[object Uint16Array]', uint32Tag = '[object Uint32Array]';
/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */ var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to detect host constructors (Safari). */ var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Used to detect unsigned integer values. */ var reIsUint = /^(?:0|[1-9]\d*)$/;
/** Used to identify `toStringTag` values of typed arrays. */ var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
/** Detect free variable `global` from Node.js. */ var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
/** Detect free variable `self`. */ var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */ var root = freeGlobal || freeSelf || Function('return this')();
/** Detect free variable `exports`. */ var freeExports = exports && !exports.nodeType && exports;
/** Detect free variable `module`. */ var freeModule = freeExports && true && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */ var moduleExports = freeModule && freeModule.exports === freeExports;
/** Detect free variable `process` from Node.js. */ var freeProcess = moduleExports && freeGlobal.process;
/** Used to access faster Node.js helpers. */ var nodeUtil = function() {
    try {
        return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
}();
/* Node.js helper references. */ var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */ function arrayFilter(array, predicate) {
    var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
    while(++index < length){
        var value = array[index];
        if (predicate(value, index, array)) result[resIndex++] = value;
    }
    return result;
}
/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */ function arrayPush(array, values) {
    var index = -1, length = values.length, offset = array.length;
    while(++index < length)array[offset + index] = values[index];
    return array;
}
/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */ function arraySome(array, predicate) {
    var index = -1, length = array == null ? 0 : array.length;
    while(++index < length){
        if (predicate(array[index], index, array)) return true;
    }
    return false;
}
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */ function baseTimes(n, iteratee) {
    var index = -1, result = Array(n);
    while(++index < n)result[index] = iteratee(index);
    return result;
}
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */ function baseUnary(func) {
    return function(value) {
        return func(value);
    };
}
/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function cacheHas(cache, key) {
    return cache.has(key);
}
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */ function getValue(object, key) {
    return object == null ? undefined : object[key];
}
/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */ function mapToArray(map) {
    var index = -1, result = Array(map.size);
    map.forEach(function(value, key) {
        result[++index] = [
            key,
            value
        ];
    });
    return result;
}
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */ function overArg(func, transform) {
    return function(arg) {
        return func(transform(arg));
    };
}
/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */ function setToArray(set) {
    var index = -1, result = Array(set.size);
    set.forEach(function(value) {
        result[++index] = value;
    });
    return result;
}
/** Used for built-in method references. */ var arrayProto = Array.prototype, funcProto = Function.prototype, objectProto = Object.prototype;
/** Used to detect overreaching core-js shims. */ var coreJsData = root['__core-js_shared__'];
/** Used to resolve the decompiled source of functions. */ var funcToString = funcProto.toString;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to detect methods masquerading as native. */ var maskSrcKey = function() {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
    return uid ? 'Symbol(src)_1.' + uid : '';
}();
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var nativeObjectToString = objectProto.toString;
/** Used to detect if a method is native. */ var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
/** Built-in value references. */ var Buffer = moduleExports ? root.Buffer : undefined, Symbol = root.Symbol, Uint8Array = root.Uint8Array, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, symToStringTag = Symbol ? Symbol.toStringTag : undefined;
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeGetSymbols = Object.getOwnPropertySymbols, nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined, nativeKeys = overArg(Object.keys, Object);
/* Built-in method references that are verified to be native. */ var DataView = getNative(root, 'DataView'), Map = getNative(root, 'Map'), Promise = getNative(root, 'Promise'), Set = getNative(root, 'Set'), WeakMap = getNative(root, 'WeakMap'), nativeCreate = getNative(Object, 'create');
/** Used to detect maps, sets, and weakmaps. */ var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map), promiseCtorString = toSource(Promise), setCtorString = toSource(Set), weakMapCtorString = toSource(WeakMap);
/** Used to convert symbols to primitives and strings. */ var symbolProto = Symbol ? Symbol.prototype : undefined, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function Hash(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */ function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
    this.size = 0;
}
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
}
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? undefined : result;
    }
    return hasOwnProperty.call(data, key) ? data[key] : undefined;
}
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */ function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
    return this;
}
// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function ListCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */ function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
}
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function listCacheDelete(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) return false;
    var lastIndex = data.length - 1;
    if (index == lastIndex) data.pop();
    else splice.call(data, index, 1);
    --this.size;
    return true;
}
/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function listCacheGet(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    return index < 0 ? undefined : data[index][1];
}
/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
}
/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */ function listCacheSet(key, value) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) {
        ++this.size;
        data.push([
            key,
            value
        ]);
    } else data[index][1] = value;
    return this;
}
// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function MapCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */ function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
        'hash': new Hash,
        'map': new (Map || ListCache),
        'string': new Hash
    };
}
/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function mapCacheDelete(key) {
    var result = getMapData(this, key)['delete'](key);
    this.size -= result ? 1 : 0;
    return result;
}
/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function mapCacheGet(key) {
    return getMapData(this, key).get(key);
}
/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function mapCacheHas(key) {
    return getMapData(this, key).has(key);
}
/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */ function mapCacheSet(key, value) {
    var data = getMapData(this, key), size = data.size;
    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
}
// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */ function SetCache(values) {
    var index = -1, length = values == null ? 0 : values.length;
    this.__data__ = new MapCache;
    while(++index < length)this.add(values[index]);
}
/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */ function setCacheAdd(value) {
    this.__data__.set(value, HASH_UNDEFINED);
    return this;
}
/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */ function setCacheHas(value) {
    return this.__data__.has(value);
}
// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;
/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function Stack(entries) {
    var data = this.__data__ = new ListCache(entries);
    this.size = data.size;
}
/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */ function stackClear() {
    this.__data__ = new ListCache;
    this.size = 0;
}
/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function stackDelete(key) {
    var data = this.__data__, result = data['delete'](key);
    this.size = data.size;
    return result;
}
/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function stackGet(key) {
    return this.__data__.get(key);
}
/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function stackHas(key) {
    return this.__data__.has(key);
}
/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */ function stackSet(key, value) {
    var data = this.__data__;
    if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
            pairs.push([
                key,
                value
            ]);
            this.size = ++data.size;
            return this;
        }
        data = this.__data__ = new MapCache(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
}
// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */ function arrayLikeKeys(value, inherited) {
    var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
    for(var key in value)if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
    (key == 'length' || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == 'offset' || key == 'parent') || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || // Skip index properties.
    isIndex(key, length)))) result.push(key);
    return result;
}
/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */ function assocIndexOf(array, key) {
    var length = array.length;
    while(length--){
        if (eq(array[length][0], key)) return length;
    }
    return -1;
}
/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */ function baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */ function baseGetTag(value) {
    if (value == null) return value === undefined ? undefinedTag : nullTag;
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */ function baseIsArguments(value) {
    return isObjectLike(value) && baseGetTag(value) == argsTag;
}
/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */ function baseIsEqual(value, other, bitmask, customizer, stack) {
    if (value === other) return true;
    if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) return value !== value && other !== other;
    return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}
/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */ function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
    var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
    objTag = objTag == argsTag ? objectTag : objTag;
    othTag = othTag == argsTag ? objectTag : othTag;
    var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
    if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) return false;
        objIsArr = true;
        objIsObj = false;
    }
    if (isSameTag && !objIsObj) {
        stack || (stack = new Stack);
        return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
    }
    if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'), othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
        if (objIsWrapped || othIsWrapped) {
            var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
            stack || (stack = new Stack);
            return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
    }
    if (!isSameTag) return false;
    stack || (stack = new Stack);
    return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */ function baseIsNative(value) {
    if (!isObject(value) || isMasked(value)) return false;
    var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
}
/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */ function baseIsTypedArray(value) {
    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}
/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */ function baseKeys(object) {
    if (!isPrototype(object)) return nativeKeys(object);
    var result = [];
    for(var key in Object(object))if (hasOwnProperty.call(object, key) && key != 'constructor') result.push(key);
    return result;
}
/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */ function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
    if (arrLength != othLength && !(isPartial && othLength > arrLength)) return false;
    // Assume cyclic values are equal.
    var stacked = stack.get(array);
    if (stacked && stack.get(other)) return stacked == other;
    var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache : undefined;
    stack.set(array, other);
    stack.set(other, array);
    // Ignore non-index properties.
    while(++index < arrLength){
        var arrValue = array[index], othValue = other[index];
        if (customizer) var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
        if (compared !== undefined) {
            if (compared) continue;
            result = false;
            break;
        }
        // Recursively compare arrays (susceptible to call stack limits).
        if (seen) {
            if (!arraySome(other, function(othValue, othIndex) {
                if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) return seen.push(othIndex);
            })) {
                result = false;
                break;
            }
        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
            result = false;
            break;
        }
    }
    stack['delete'](array);
    stack['delete'](other);
    return result;
}
/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */ function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
    switch(tag){
        case dataViewTag:
            if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) return false;
            object = object.buffer;
            other = other.buffer;
        case arrayBufferTag:
            if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) return false;
            return true;
        case boolTag:
        case dateTag:
        case numberTag:
            // Coerce booleans to `1` or `0` and dates to milliseconds.
            // Invalid dates are coerced to `NaN`.
            return eq(+object, +other);
        case errorTag:
            return object.name == other.name && object.message == other.message;
        case regexpTag:
        case stringTag:
            // Coerce regexes to strings and treat strings, primitives and objects,
            // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
            // for more details.
            return object == other + '';
        case mapTag:
            var convert = mapToArray;
        case setTag:
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
            convert || (convert = setToArray);
            if (object.size != other.size && !isPartial) return false;
            // Assume cyclic values are equal.
            var stacked = stack.get(object);
            if (stacked) return stacked == other;
            bitmask |= COMPARE_UNORDERED_FLAG;
            // Recursively compare objects (susceptible to call stack limits).
            stack.set(object, other);
            var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
            stack['delete'](object);
            return result;
        case symbolTag:
            if (symbolValueOf) return symbolValueOf.call(object) == symbolValueOf.call(other);
    }
    return false;
}
/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */ function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
    if (objLength != othLength && !isPartial) return false;
    var index = objLength;
    while(index--){
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) return false;
    }
    // Assume cyclic values are equal.
    var stacked = stack.get(object);
    if (stacked && stack.get(other)) return stacked == other;
    var result = true;
    stack.set(object, other);
    stack.set(other, object);
    var skipCtor = isPartial;
    while(++index < objLength){
        key = objProps[index];
        var objValue = object[key], othValue = other[key];
        if (customizer) var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
        // Recursively compare objects (susceptible to call stack limits).
        if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
            result = false;
            break;
        }
        skipCtor || (skipCtor = key == 'constructor');
    }
    if (result && !skipCtor) {
        var objCtor = object.constructor, othCtor = other.constructor;
        // Non `Object` object instances with different constructors are not equal.
        if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) result = false;
    }
    stack['delete'](object);
    stack['delete'](other);
    return result;
}
/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */ function getAllKeys(object) {
    return baseGetAllKeys(object, keys, getSymbols);
}
/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */ function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}
/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */ function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : undefined;
}
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */ function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
    try {
        value[symToStringTag] = undefined;
        var unmasked = true;
    } catch (e) {}
    var result = nativeObjectToString.call(value);
    if (unmasked) {
        if (isOwn) value[symToStringTag] = tag;
        else delete value[symToStringTag];
    }
    return result;
}
/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */ var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
    if (object == null) return [];
    object = Object(object);
    return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
    });
};
/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */ var getTag = baseGetTag;
// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set) != setTag || WeakMap && getTag(new WeakMap) != weakMapTag) getTag = function(value) {
    var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : undefined, ctorString = Ctor ? toSource(Ctor) : '';
    if (ctorString) switch(ctorString){
        case dataViewCtorString:
            return dataViewTag;
        case mapCtorString:
            return mapTag;
        case promiseCtorString:
            return promiseTag;
        case setCtorString:
            return setTag;
        case weakMapCtorString:
            return weakMapTag;
    }
    return result;
};
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */ function isIndex(value, length) {
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */ function isKeyable(value) {
    var type = typeof value;
    return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */ function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
}
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */ function isPrototype(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
    return value === proto;
}
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */ function objectToString(value) {
    return nativeObjectToString.call(value);
}
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */ function toSource(func) {
    if (func != null) {
        try {
            return funcToString.call(func);
        } catch (e) {}
        try {
            return func + '';
        } catch (e) {}
    }
    return '';
}
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */ function eq(value, other) {
    return value === other || value !== value && other !== other;
}
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */ var isArguments = baseIsArguments(function() {
    return arguments;
}()) ? baseIsArguments : function(value) {
    return isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */ var isArray = Array.isArray;
/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */ function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
}
/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */ var isBuffer = nativeIsBuffer || stubFalse;
/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */ function isEqual(value, other) {
    return baseIsEqual(value, other);
}
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */ function isFunction(value) {
    if (!isObject(value)) return false;
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */ function isLength(value) {
    return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */ function isObject(value) {
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
    return value != null && typeof value == 'object';
}
/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */ var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */ function keys(object) {
    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */ function stubArray() {
    return [];
}
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */ function stubFalse() {
    return false;
}
module.exports = isEqual;

},{}],"27l12":[function(require,module,exports,__globalThis) {
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */ /* eslint-env node */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _adapterFactoryJs = require("./adapter_factory.js");
'use strict';
const adapter = (0, _adapterFactoryJs.adapterFactory)({
    window: typeof window === 'undefined' ? undefined : window
});
exports.default = adapter;

},{"./adapter_factory.js":"fshKD","@parcel/transformer-js/src/esmodule-helpers.js":"glwFn"}],"fshKD":[function(require,module,exports,__globalThis) {
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Shimming starts here.
parcelHelpers.export(exports, "adapterFactory", ()=>adapterFactory);
var _utils = require("./utils");
// Browser shims.
var _chromeShim = require("./chrome/chrome_shim");
var _firefoxShim = require("./firefox/firefox_shim");
var _safariShim = require("./safari/safari_shim");
var _commonShim = require("./common_shim");
var _sdp = require("sdp");
function adapterFactory({ window } = {}, options = {
    shimChrome: true,
    shimFirefox: true,
    shimSafari: true
}) {
    // Utils.
    const logging = _utils.log;
    const browserDetails = _utils.detectBrowser(window);
    const adapter = {
        browserDetails,
        commonShim: _commonShim,
        extractVersion: _utils.extractVersion,
        disableLog: _utils.disableLog,
        disableWarnings: _utils.disableWarnings,
        sdp: // Expose sdp as a convenience. For production apps include directly.
        _sdp
    };
    // Shim browser if found.
    switch(browserDetails.browser){
        case 'chrome':
            if (!_chromeShim || !_chromeShim.shimPeerConnection || !options.shimChrome) {
                logging('Chrome shim is not included in this adapter release.');
                return adapter;
            }
            if (browserDetails.version === null) {
                logging('Chrome shim can not determine version, not shimming.');
                return adapter;
            }
            logging('adapter.js shimming chrome.');
            // Export to the adapter global object visible in the browser.
            adapter.browserShim = _chromeShim;
            // Must be called before shimPeerConnection.
            _commonShim.shimAddIceCandidateNullOrEmpty(window, browserDetails);
            _commonShim.shimParameterlessSetLocalDescription(window, browserDetails);
            _chromeShim.shimGetUserMedia(window, browserDetails);
            _chromeShim.shimMediaStream(window, browserDetails);
            _chromeShim.shimPeerConnection(window, browserDetails);
            _chromeShim.shimOnTrack(window, browserDetails);
            _chromeShim.shimAddTrackRemoveTrack(window, browserDetails);
            _chromeShim.shimGetSendersWithDtmf(window, browserDetails);
            _chromeShim.shimGetStats(window, browserDetails);
            _chromeShim.shimSenderReceiverGetStats(window, browserDetails);
            _chromeShim.fixNegotiationNeeded(window, browserDetails);
            _commonShim.shimRTCIceCandidate(window, browserDetails);
            _commonShim.shimRTCIceCandidateRelayProtocol(window, browserDetails);
            _commonShim.shimConnectionState(window, browserDetails);
            _commonShim.shimMaxMessageSize(window, browserDetails);
            _commonShim.shimSendThrowTypeError(window, browserDetails);
            _commonShim.removeExtmapAllowMixed(window, browserDetails);
            break;
        case 'firefox':
            if (!_firefoxShim || !_firefoxShim.shimPeerConnection || !options.shimFirefox) {
                logging('Firefox shim is not included in this adapter release.');
                return adapter;
            }
            logging('adapter.js shimming firefox.');
            // Export to the adapter global object visible in the browser.
            adapter.browserShim = _firefoxShim;
            // Must be called before shimPeerConnection.
            _commonShim.shimAddIceCandidateNullOrEmpty(window, browserDetails);
            _commonShim.shimParameterlessSetLocalDescription(window, browserDetails);
            _firefoxShim.shimGetUserMedia(window, browserDetails);
            _firefoxShim.shimPeerConnection(window, browserDetails);
            _firefoxShim.shimOnTrack(window, browserDetails);
            _firefoxShim.shimRemoveStream(window, browserDetails);
            _firefoxShim.shimSenderGetStats(window, browserDetails);
            _firefoxShim.shimReceiverGetStats(window, browserDetails);
            _firefoxShim.shimRTCDataChannel(window, browserDetails);
            _firefoxShim.shimAddTransceiver(window, browserDetails);
            _firefoxShim.shimGetParameters(window, browserDetails);
            _firefoxShim.shimCreateOffer(window, browserDetails);
            _firefoxShim.shimCreateAnswer(window, browserDetails);
            _commonShim.shimRTCIceCandidate(window, browserDetails);
            _commonShim.shimConnectionState(window, browserDetails);
            _commonShim.shimMaxMessageSize(window, browserDetails);
            _commonShim.shimSendThrowTypeError(window, browserDetails);
            break;
        case 'safari':
            if (!_safariShim || !options.shimSafari) {
                logging('Safari shim is not included in this adapter release.');
                return adapter;
            }
            logging('adapter.js shimming safari.');
            // Export to the adapter global object visible in the browser.
            adapter.browserShim = _safariShim;
            // Must be called before shimCallbackAPI.
            _commonShim.shimAddIceCandidateNullOrEmpty(window, browserDetails);
            _commonShim.shimParameterlessSetLocalDescription(window, browserDetails);
            _safariShim.shimRTCIceServerUrls(window, browserDetails);
            _safariShim.shimCreateOfferLegacy(window, browserDetails);
            _safariShim.shimCallbacksAPI(window, browserDetails);
            _safariShim.shimLocalStreamsAPI(window, browserDetails);
            _safariShim.shimRemoteStreamsAPI(window, browserDetails);
            _safariShim.shimTrackEventTransceiver(window, browserDetails);
            _safariShim.shimGetUserMedia(window, browserDetails);
            _safariShim.shimAudioContext(window, browserDetails);
            _commonShim.shimRTCIceCandidate(window, browserDetails);
            _commonShim.shimRTCIceCandidateRelayProtocol(window, browserDetails);
            _commonShim.shimMaxMessageSize(window, browserDetails);
            _commonShim.shimSendThrowTypeError(window, browserDetails);
            _commonShim.removeExtmapAllowMixed(window, browserDetails);
            break;
        default:
            logging('Unsupported browser!');
            break;
    }
    return adapter;
}

},{"./utils":"130jN","./chrome/chrome_shim":"gnS8k","./firefox/firefox_shim":"bXIO7","./safari/safari_shim":"8DlmS","./common_shim":"bXwPT","sdp":"ipaHk","@parcel/transformer-js/src/esmodule-helpers.js":"glwFn"}],"130jN":[function(require,module,exports,__globalThis) {
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */ /* eslint-env node */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Extract browser version out of the provided user agent string.
 *
 * @param {!string} uastring userAgent string.
 * @param {!string} expr Regular expression used as match criteria.
 * @param {!number} pos position in the version string to be returned.
 * @return {!number} browser version.
 */ parcelHelpers.export(exports, "extractVersion", ()=>extractVersion);
// Wraps the peerconnection event eventNameToWrap in a function
// which returns the modified event object (or false to prevent
// the event).
parcelHelpers.export(exports, "wrapPeerConnectionEvent", ()=>wrapPeerConnectionEvent);
parcelHelpers.export(exports, "disableLog", ()=>disableLog);
/**
 * Disable or enable deprecation warnings
 * @param {!boolean} bool set to true to disable warnings.
 */ parcelHelpers.export(exports, "disableWarnings", ()=>disableWarnings);
parcelHelpers.export(exports, "log", ()=>log);
/**
 * Shows a deprecation warning suggesting the modern and spec-compatible API.
 */ parcelHelpers.export(exports, "deprecated", ()=>deprecated);
/**
 * Browser detector.
 *
 * @return {object} result containing browser and version
 *     properties.
 */ parcelHelpers.export(exports, "detectBrowser", ()=>detectBrowser);
/**
 * Remove all empty objects and undefined values
 * from a nested object -- an enhanced and vanilla version
 * of Lodash's `compact`.
 */ parcelHelpers.export(exports, "compactObject", ()=>compactObject);
/* iterates the stats graph recursively. */ parcelHelpers.export(exports, "walkStats", ()=>walkStats);
/* filter getStats for a sender/receiver track. */ parcelHelpers.export(exports, "filterStats", ()=>filterStats);
'use strict';
let logDisabled_ = true;
let deprecationWarnings_ = true;
function extractVersion(uastring, expr, pos) {
    const match = uastring.match(expr);
    return match && match.length >= pos && parseFloat(match[pos], 10);
}
function wrapPeerConnectionEvent(window1, eventNameToWrap, wrapper) {
    if (!window1.RTCPeerConnection) return;
    const proto = window1.RTCPeerConnection.prototype;
    const nativeAddEventListener = proto.addEventListener;
    proto.addEventListener = function(nativeEventName, cb) {
        if (nativeEventName !== eventNameToWrap) return nativeAddEventListener.apply(this, arguments);
        const wrappedCallback = (e)=>{
            const modifiedEvent = wrapper(e);
            if (modifiedEvent) {
                if (cb.handleEvent) cb.handleEvent(modifiedEvent);
                else cb(modifiedEvent);
            }
        };
        this._eventMap = this._eventMap || {};
        if (!this._eventMap[eventNameToWrap]) this._eventMap[eventNameToWrap] = new Map();
        this._eventMap[eventNameToWrap].set(cb, wrappedCallback);
        return nativeAddEventListener.apply(this, [
            nativeEventName,
            wrappedCallback
        ]);
    };
    const nativeRemoveEventListener = proto.removeEventListener;
    proto.removeEventListener = function(nativeEventName, cb) {
        if (nativeEventName !== eventNameToWrap || !this._eventMap || !this._eventMap[eventNameToWrap]) return nativeRemoveEventListener.apply(this, arguments);
        if (!this._eventMap[eventNameToWrap].has(cb)) return nativeRemoveEventListener.apply(this, arguments);
        const unwrappedCb = this._eventMap[eventNameToWrap].get(cb);
        this._eventMap[eventNameToWrap].delete(cb);
        if (this._eventMap[eventNameToWrap].size === 0) delete this._eventMap[eventNameToWrap];
        if (Object.keys(this._eventMap).length === 0) delete this._eventMap;
        return nativeRemoveEventListener.apply(this, [
            nativeEventName,
            unwrappedCb
        ]);
    };
    Object.defineProperty(proto, 'on' + eventNameToWrap, {
        get () {
            return this['_on' + eventNameToWrap];
        },
        set (cb) {
            if (this['_on' + eventNameToWrap]) {
                this.removeEventListener(eventNameToWrap, this['_on' + eventNameToWrap]);
                delete this['_on' + eventNameToWrap];
            }
            if (cb) this.addEventListener(eventNameToWrap, this['_on' + eventNameToWrap] = cb);
        },
        enumerable: true,
        configurable: true
    });
}
function disableLog(bool) {
    if (typeof bool !== 'boolean') return new Error('Argument type: ' + typeof bool + '. Please use a boolean.');
    logDisabled_ = bool;
    return bool ? 'adapter.js logging disabled' : 'adapter.js logging enabled';
}
function disableWarnings(bool) {
    if (typeof bool !== 'boolean') return new Error('Argument type: ' + typeof bool + '. Please use a boolean.');
    deprecationWarnings_ = !bool;
    return 'adapter.js deprecation warnings ' + (bool ? 'disabled' : 'enabled');
}
function log() {
    if (typeof window === 'object') {
        if (logDisabled_) return;
        if (typeof console !== 'undefined' && typeof console.log === 'function') console.log.apply(console, arguments);
    }
}
function deprecated(oldMethod, newMethod) {
    if (!deprecationWarnings_) return;
    console.warn(oldMethod + ' is deprecated, please use ' + newMethod + ' instead.');
}
function detectBrowser(window1) {
    // Returned result object.
    const result = {
        browser: null,
        version: null
    };
    // Fail early if it's not a browser
    if (typeof window1 === 'undefined' || !window1.navigator || !window1.navigator.userAgent) {
        result.browser = 'Not a browser.';
        return result;
    }
    const { navigator } = window1;
    if (navigator.mozGetUserMedia) {
        result.browser = 'firefox';
        result.version = parseInt(extractVersion(navigator.userAgent, /Firefox\/(\d+)\./, 1));
    } else if (navigator.webkitGetUserMedia || window1.isSecureContext === false && window1.webkitRTCPeerConnection) {
        // Chrome, Chromium, Webview, Opera.
        // Version matches Chrome/WebRTC version.
        // Chrome 74 removed webkitGetUserMedia on http as well so we need the
        // more complicated fallback to webkitRTCPeerConnection.
        result.browser = 'chrome';
        result.version = parseInt(extractVersion(navigator.userAgent, /Chrom(e|ium)\/(\d+)\./, 2));
    } else if (window1.RTCPeerConnection && navigator.userAgent.match(/AppleWebKit\/(\d+)\./)) {
        result.browser = 'safari';
        result.version = parseInt(extractVersion(navigator.userAgent, /AppleWebKit\/(\d+)\./, 1));
        result.supportsUnifiedPlan = window1.RTCRtpTransceiver && 'currentDirection' in window1.RTCRtpTransceiver.prototype;
        // Only for internal usage.
        result._safariVersion = extractVersion(navigator.userAgent, /Version\/(\d+(\.?\d+))/, 1);
    } else {
        result.browser = 'Not a supported browser.';
        return result;
    }
    return result;
}
/**
 * Checks if something is an object.
 *
 * @param {*} val The something you want to check.
 * @return true if val is an object, false otherwise.
 */ function isObject(val) {
    return Object.prototype.toString.call(val) === '[object Object]';
}
function compactObject(data) {
    if (!isObject(data)) return data;
    return Object.keys(data).reduce(function(accumulator, key) {
        const isObj = isObject(data[key]);
        const value = isObj ? compactObject(data[key]) : data[key];
        const isEmptyObject = isObj && !Object.keys(value).length;
        if (value === undefined || isEmptyObject) return accumulator;
        return Object.assign(accumulator, {
            [key]: value
        });
    }, {});
}
function walkStats(stats, base, resultSet) {
    if (!base || resultSet.has(base.id)) return;
    resultSet.set(base.id, base);
    Object.keys(base).forEach((name)=>{
        if (name.endsWith('Id')) walkStats(stats, stats.get(base[name]), resultSet);
        else if (name.endsWith('Ids')) base[name].forEach((id)=>{
            walkStats(stats, stats.get(id), resultSet);
        });
    });
}
function filterStats(result, track, outbound) {
    const streamStatsType = outbound ? 'outbound-rtp' : 'inbound-rtp';
    const filteredResult = new Map();
    if (track === null) return filteredResult;
    const trackStats = [];
    result.forEach((value)=>{
        if (value.type === 'track' && value.trackIdentifier === track.id) trackStats.push(value);
    });
    trackStats.forEach((trackStat)=>{
        result.forEach((stats)=>{
            if (stats.type === streamStatsType && stats.trackId === trackStat.id) walkStats(result, stats, filteredResult);
        });
    });
    return filteredResult;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"glwFn"}],"gnS8k":[function(require,module,exports,__globalThis) {
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */ /* eslint-env node */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "shimGetUserMedia", ()=>(0, _getusermedia.shimGetUserMedia));
parcelHelpers.export(exports, "shimGetDisplayMedia", ()=>(0, _getdisplaymedia.shimGetDisplayMedia));
parcelHelpers.export(exports, "shimMediaStream", ()=>shimMediaStream);
parcelHelpers.export(exports, "shimOnTrack", ()=>shimOnTrack);
parcelHelpers.export(exports, "shimGetSendersWithDtmf", ()=>shimGetSendersWithDtmf);
parcelHelpers.export(exports, "shimGetStats", ()=>shimGetStats);
parcelHelpers.export(exports, "shimSenderReceiverGetStats", ()=>shimSenderReceiverGetStats);
parcelHelpers.export(exports, "shimAddTrackRemoveTrackWithNative", ()=>shimAddTrackRemoveTrackWithNative);
parcelHelpers.export(exports, "shimAddTrackRemoveTrack", ()=>shimAddTrackRemoveTrack);
parcelHelpers.export(exports, "shimPeerConnection", ()=>shimPeerConnection);
// Attempt to fix ONN in plan-b mode.
parcelHelpers.export(exports, "fixNegotiationNeeded", ()=>fixNegotiationNeeded);
var _utilsJs = require("../utils.js");
var _getusermedia = require("./getusermedia");
var _getdisplaymedia = require("./getdisplaymedia");
'use strict';
function shimMediaStream(window) {
    window.MediaStream = window.MediaStream || window.webkitMediaStream;
}
function shimOnTrack(window) {
    if (typeof window === 'object' && window.RTCPeerConnection && !('ontrack' in window.RTCPeerConnection.prototype)) {
        Object.defineProperty(window.RTCPeerConnection.prototype, 'ontrack', {
            get () {
                return this._ontrack;
            },
            set (f) {
                if (this._ontrack) this.removeEventListener('track', this._ontrack);
                this.addEventListener('track', this._ontrack = f);
            },
            enumerable: true,
            configurable: true
        });
        const origSetRemoteDescription = window.RTCPeerConnection.prototype.setRemoteDescription;
        window.RTCPeerConnection.prototype.setRemoteDescription = function setRemoteDescription() {
            if (!this._ontrackpoly) {
                this._ontrackpoly = (e)=>{
                    // onaddstream does not fire when a track is added to an existing
                    // stream. But stream.onaddtrack is implemented so we use that.
                    e.stream.addEventListener('addtrack', (te)=>{
                        let receiver;
                        if (window.RTCPeerConnection.prototype.getReceivers) receiver = this.getReceivers().find((r)=>r.track && r.track.id === te.track.id);
                        else receiver = {
                            track: te.track
                        };
                        const event = new Event('track');
                        event.track = te.track;
                        event.receiver = receiver;
                        event.transceiver = {
                            receiver
                        };
                        event.streams = [
                            e.stream
                        ];
                        this.dispatchEvent(event);
                    });
                    e.stream.getTracks().forEach((track)=>{
                        let receiver;
                        if (window.RTCPeerConnection.prototype.getReceivers) receiver = this.getReceivers().find((r)=>r.track && r.track.id === track.id);
                        else receiver = {
                            track
                        };
                        const event = new Event('track');
                        event.track = track;
                        event.receiver = receiver;
                        event.transceiver = {
                            receiver
                        };
                        event.streams = [
                            e.stream
                        ];
                        this.dispatchEvent(event);
                    });
                };
                this.addEventListener('addstream', this._ontrackpoly);
            }
            return origSetRemoteDescription.apply(this, arguments);
        };
    } else // even if RTCRtpTransceiver is in window, it is only used and
    // emitted in unified-plan. Unfortunately this means we need
    // to unconditionally wrap the event.
    _utilsJs.wrapPeerConnectionEvent(window, 'track', (e)=>{
        if (!e.transceiver) Object.defineProperty(e, 'transceiver', {
            value: {
                receiver: e.receiver
            }
        });
        return e;
    });
}
function shimGetSendersWithDtmf(window) {
    // Overrides addTrack/removeTrack, depends on shimAddTrackRemoveTrack.
    if (typeof window === 'object' && window.RTCPeerConnection && !('getSenders' in window.RTCPeerConnection.prototype) && 'createDTMFSender' in window.RTCPeerConnection.prototype) {
        const shimSenderWithDtmf = function(pc, track) {
            return {
                track,
                get dtmf () {
                    if (this._dtmf === undefined) {
                        if (track.kind === 'audio') this._dtmf = pc.createDTMFSender(track);
                        else this._dtmf = null;
                    }
                    return this._dtmf;
                },
                _pc: pc
            };
        };
        // augment addTrack when getSenders is not available.
        if (!window.RTCPeerConnection.prototype.getSenders) {
            window.RTCPeerConnection.prototype.getSenders = function getSenders() {
                this._senders = this._senders || [];
                return this._senders.slice(); // return a copy of the internal state.
            };
            const origAddTrack = window.RTCPeerConnection.prototype.addTrack;
            window.RTCPeerConnection.prototype.addTrack = function addTrack(track, stream) {
                let sender = origAddTrack.apply(this, arguments);
                if (!sender) {
                    sender = shimSenderWithDtmf(this, track);
                    this._senders.push(sender);
                }
                return sender;
            };
            const origRemoveTrack = window.RTCPeerConnection.prototype.removeTrack;
            window.RTCPeerConnection.prototype.removeTrack = function removeTrack(sender) {
                origRemoveTrack.apply(this, arguments);
                const idx = this._senders.indexOf(sender);
                if (idx !== -1) this._senders.splice(idx, 1);
            };
        }
        const origAddStream = window.RTCPeerConnection.prototype.addStream;
        window.RTCPeerConnection.prototype.addStream = function addStream(stream) {
            this._senders = this._senders || [];
            origAddStream.apply(this, [
                stream
            ]);
            stream.getTracks().forEach((track)=>{
                this._senders.push(shimSenderWithDtmf(this, track));
            });
        };
        const origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
        window.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
            this._senders = this._senders || [];
            origRemoveStream.apply(this, [
                stream
            ]);
            stream.getTracks().forEach((track)=>{
                const sender = this._senders.find((s)=>s.track === track);
                if (sender) this._senders.splice(this._senders.indexOf(sender), 1);
            });
        };
    } else if (typeof window === 'object' && window.RTCPeerConnection && 'getSenders' in window.RTCPeerConnection.prototype && 'createDTMFSender' in window.RTCPeerConnection.prototype && window.RTCRtpSender && !('dtmf' in window.RTCRtpSender.prototype)) {
        const origGetSenders = window.RTCPeerConnection.prototype.getSenders;
        window.RTCPeerConnection.prototype.getSenders = function getSenders() {
            const senders = origGetSenders.apply(this, []);
            senders.forEach((sender)=>sender._pc = this);
            return senders;
        };
        Object.defineProperty(window.RTCRtpSender.prototype, 'dtmf', {
            get () {
                if (this._dtmf === undefined) {
                    if (this.track.kind === 'audio') this._dtmf = this._pc.createDTMFSender(this.track);
                    else this._dtmf = null;
                }
                return this._dtmf;
            }
        });
    }
}
function shimGetStats(window) {
    if (!window.RTCPeerConnection) return;
    const origGetStats = window.RTCPeerConnection.prototype.getStats;
    window.RTCPeerConnection.prototype.getStats = function getStats() {
        const [selector, onSucc, onErr] = arguments;
        // If selector is a function then we are in the old style stats so just
        // pass back the original getStats format to avoid breaking old users.
        if (arguments.length > 0 && typeof selector === 'function') return origGetStats.apply(this, arguments);
        // When spec-style getStats is supported, return those when called with
        // either no arguments or the selector argument is null.
        if (origGetStats.length === 0 && (arguments.length === 0 || typeof selector !== 'function')) return origGetStats.apply(this, []);
        const fixChromeStats_ = function(response) {
            const standardReport = {};
            const reports = response.result();
            reports.forEach((report)=>{
                const standardStats = {
                    id: report.id,
                    timestamp: report.timestamp,
                    type: {
                        localcandidate: 'local-candidate',
                        remotecandidate: 'remote-candidate'
                    }[report.type] || report.type
                };
                report.names().forEach((name)=>{
                    standardStats[name] = report.stat(name);
                });
                standardReport[standardStats.id] = standardStats;
            });
            return standardReport;
        };
        // shim getStats with maplike support
        const makeMapStats = function(stats) {
            return new Map(Object.keys(stats).map((key)=>[
                    key,
                    stats[key]
                ]));
        };
        if (arguments.length >= 2) {
            const successCallbackWrapper_ = function(response) {
                onSucc(makeMapStats(fixChromeStats_(response)));
            };
            return origGetStats.apply(this, [
                successCallbackWrapper_,
                selector
            ]);
        }
        // promise-support
        return new Promise((resolve, reject)=>{
            origGetStats.apply(this, [
                function(response) {
                    resolve(makeMapStats(fixChromeStats_(response)));
                },
                reject
            ]);
        }).then(onSucc, onErr);
    };
}
function shimSenderReceiverGetStats(window) {
    if (!(typeof window === 'object' && window.RTCPeerConnection && window.RTCRtpSender && window.RTCRtpReceiver)) return;
    // shim sender stats.
    if (!('getStats' in window.RTCRtpSender.prototype)) {
        const origGetSenders = window.RTCPeerConnection.prototype.getSenders;
        if (origGetSenders) window.RTCPeerConnection.prototype.getSenders = function getSenders() {
            const senders = origGetSenders.apply(this, []);
            senders.forEach((sender)=>sender._pc = this);
            return senders;
        };
        const origAddTrack = window.RTCPeerConnection.prototype.addTrack;
        if (origAddTrack) window.RTCPeerConnection.prototype.addTrack = function addTrack() {
            const sender = origAddTrack.apply(this, arguments);
            sender._pc = this;
            return sender;
        };
        window.RTCRtpSender.prototype.getStats = function getStats() {
            const sender = this;
            return this._pc.getStats().then((result)=>/* Note: this will include stats of all senders that
         *   send a track with the same id as sender.track as
         *   it is not possible to identify the RTCRtpSender.
         */ _utilsJs.filterStats(result, sender.track, true));
        };
    }
    // shim receiver stats.
    if (!('getStats' in window.RTCRtpReceiver.prototype)) {
        const origGetReceivers = window.RTCPeerConnection.prototype.getReceivers;
        if (origGetReceivers) window.RTCPeerConnection.prototype.getReceivers = function getReceivers() {
            const receivers = origGetReceivers.apply(this, []);
            receivers.forEach((receiver)=>receiver._pc = this);
            return receivers;
        };
        _utilsJs.wrapPeerConnectionEvent(window, 'track', (e)=>{
            e.receiver._pc = e.srcElement;
            return e;
        });
        window.RTCRtpReceiver.prototype.getStats = function getStats() {
            const receiver = this;
            return this._pc.getStats().then((result)=>_utilsJs.filterStats(result, receiver.track, false));
        };
    }
    if (!('getStats' in window.RTCRtpSender.prototype && 'getStats' in window.RTCRtpReceiver.prototype)) return;
    // shim RTCPeerConnection.getStats(track).
    const origGetStats = window.RTCPeerConnection.prototype.getStats;
    window.RTCPeerConnection.prototype.getStats = function getStats() {
        if (arguments.length > 0 && arguments[0] instanceof window.MediaStreamTrack) {
            const track = arguments[0];
            let sender;
            let receiver;
            let err;
            this.getSenders().forEach((s)=>{
                if (s.track === track) {
                    if (sender) err = true;
                    else sender = s;
                }
            });
            this.getReceivers().forEach((r)=>{
                if (r.track === track) {
                    if (receiver) err = true;
                    else receiver = r;
                }
                return r.track === track;
            });
            if (err || sender && receiver) return Promise.reject(new DOMException('There are more than one sender or receiver for the track.', 'InvalidAccessError'));
            else if (sender) return sender.getStats();
            else if (receiver) return receiver.getStats();
            return Promise.reject(new DOMException('There is no sender or receiver for the track.', 'InvalidAccessError'));
        }
        return origGetStats.apply(this, arguments);
    };
}
function shimAddTrackRemoveTrackWithNative(window) {
    // shim addTrack/removeTrack with native variants in order to make
    // the interactions with legacy getLocalStreams behave as in other browsers.
    // Keeps a mapping stream.id => [stream, rtpsenders...]
    window.RTCPeerConnection.prototype.getLocalStreams = function getLocalStreams() {
        this._shimmedLocalStreams = this._shimmedLocalStreams || {};
        return Object.keys(this._shimmedLocalStreams).map((streamId)=>this._shimmedLocalStreams[streamId][0]);
    };
    const origAddTrack = window.RTCPeerConnection.prototype.addTrack;
    window.RTCPeerConnection.prototype.addTrack = function addTrack(track, stream) {
        if (!stream) return origAddTrack.apply(this, arguments);
        this._shimmedLocalStreams = this._shimmedLocalStreams || {};
        const sender = origAddTrack.apply(this, arguments);
        if (!this._shimmedLocalStreams[stream.id]) this._shimmedLocalStreams[stream.id] = [
            stream,
            sender
        ];
        else if (this._shimmedLocalStreams[stream.id].indexOf(sender) === -1) this._shimmedLocalStreams[stream.id].push(sender);
        return sender;
    };
    const origAddStream = window.RTCPeerConnection.prototype.addStream;
    window.RTCPeerConnection.prototype.addStream = function addStream(stream) {
        this._shimmedLocalStreams = this._shimmedLocalStreams || {};
        stream.getTracks().forEach((track)=>{
            const alreadyExists = this.getSenders().find((s)=>s.track === track);
            if (alreadyExists) throw new DOMException('Track already exists.', 'InvalidAccessError');
        });
        const existingSenders = this.getSenders();
        origAddStream.apply(this, arguments);
        const newSenders = this.getSenders().filter((newSender)=>existingSenders.indexOf(newSender) === -1);
        this._shimmedLocalStreams[stream.id] = [
            stream
        ].concat(newSenders);
    };
    const origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
    window.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
        this._shimmedLocalStreams = this._shimmedLocalStreams || {};
        delete this._shimmedLocalStreams[stream.id];
        return origRemoveStream.apply(this, arguments);
    };
    const origRemoveTrack = window.RTCPeerConnection.prototype.removeTrack;
    window.RTCPeerConnection.prototype.removeTrack = function removeTrack(sender) {
        this._shimmedLocalStreams = this._shimmedLocalStreams || {};
        if (sender) Object.keys(this._shimmedLocalStreams).forEach((streamId)=>{
            const idx = this._shimmedLocalStreams[streamId].indexOf(sender);
            if (idx !== -1) this._shimmedLocalStreams[streamId].splice(idx, 1);
            if (this._shimmedLocalStreams[streamId].length === 1) delete this._shimmedLocalStreams[streamId];
        });
        return origRemoveTrack.apply(this, arguments);
    };
}
function shimAddTrackRemoveTrack(window, browserDetails) {
    if (!window.RTCPeerConnection) return;
    // shim addTrack and removeTrack.
    if (window.RTCPeerConnection.prototype.addTrack && browserDetails.version >= 65) return shimAddTrackRemoveTrackWithNative(window);
    // also shim pc.getLocalStreams when addTrack is shimmed
    // to return the original streams.
    const origGetLocalStreams = window.RTCPeerConnection.prototype.getLocalStreams;
    window.RTCPeerConnection.prototype.getLocalStreams = function getLocalStreams() {
        const nativeStreams = origGetLocalStreams.apply(this);
        this._reverseStreams = this._reverseStreams || {};
        return nativeStreams.map((stream)=>this._reverseStreams[stream.id]);
    };
    const origAddStream = window.RTCPeerConnection.prototype.addStream;
    window.RTCPeerConnection.prototype.addStream = function addStream(stream) {
        this._streams = this._streams || {};
        this._reverseStreams = this._reverseStreams || {};
        stream.getTracks().forEach((track)=>{
            const alreadyExists = this.getSenders().find((s)=>s.track === track);
            if (alreadyExists) throw new DOMException('Track already exists.', 'InvalidAccessError');
        });
        // Add identity mapping for consistency with addTrack.
        // Unless this is being used with a stream from addTrack.
        if (!this._reverseStreams[stream.id]) {
            const newStream = new window.MediaStream(stream.getTracks());
            this._streams[stream.id] = newStream;
            this._reverseStreams[newStream.id] = stream;
            stream = newStream;
        }
        origAddStream.apply(this, [
            stream
        ]);
    };
    const origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
    window.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
        this._streams = this._streams || {};
        this._reverseStreams = this._reverseStreams || {};
        origRemoveStream.apply(this, [
            this._streams[stream.id] || stream
        ]);
        delete this._reverseStreams[this._streams[stream.id] ? this._streams[stream.id].id : stream.id];
        delete this._streams[stream.id];
    };
    window.RTCPeerConnection.prototype.addTrack = function addTrack(track, stream) {
        if (this.signalingState === 'closed') throw new DOMException('The RTCPeerConnection\'s signalingState is \'closed\'.', 'InvalidStateError');
        const streams = [].slice.call(arguments, 1);
        if (streams.length !== 1 || !streams[0].getTracks().find((t)=>t === track)) // this is not fully correct but all we can manage without
        // [[associated MediaStreams]] internal slot.
        throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.", 'NotSupportedError');
        const alreadyExists = this.getSenders().find((s)=>s.track === track);
        if (alreadyExists) throw new DOMException('Track already exists.', 'InvalidAccessError');
        this._streams = this._streams || {};
        this._reverseStreams = this._reverseStreams || {};
        const oldStream = this._streams[stream.id];
        if (oldStream) {
            // this is using odd Chrome behaviour, use with caution:
            // https://bugs.chromium.org/p/webrtc/issues/detail?id=7815
            // Note: we rely on the high-level addTrack/dtmf shim to
            // create the sender with a dtmf sender.
            oldStream.addTrack(track);
            // Trigger ONN async.
            Promise.resolve().then(()=>{
                this.dispatchEvent(new Event('negotiationneeded'));
            });
        } else {
            const newStream = new window.MediaStream([
                track
            ]);
            this._streams[stream.id] = newStream;
            this._reverseStreams[newStream.id] = stream;
            this.addStream(newStream);
        }
        return this.getSenders().find((s)=>s.track === track);
    };
    // replace the internal stream id with the external one and
    // vice versa.
    function replaceInternalStreamId(pc, description) {
        let sdp = description.sdp;
        Object.keys(pc._reverseStreams || []).forEach((internalId)=>{
            const externalStream = pc._reverseStreams[internalId];
            const internalStream = pc._streams[externalStream.id];
            sdp = sdp.replace(new RegExp(internalStream.id, 'g'), externalStream.id);
        });
        return new RTCSessionDescription({
            type: description.type,
            sdp
        });
    }
    function replaceExternalStreamId(pc, description) {
        let sdp = description.sdp;
        Object.keys(pc._reverseStreams || []).forEach((internalId)=>{
            const externalStream = pc._reverseStreams[internalId];
            const internalStream = pc._streams[externalStream.id];
            sdp = sdp.replace(new RegExp(externalStream.id, 'g'), internalStream.id);
        });
        return new RTCSessionDescription({
            type: description.type,
            sdp
        });
    }
    [
        'createOffer',
        'createAnswer'
    ].forEach(function(method) {
        const nativeMethod = window.RTCPeerConnection.prototype[method];
        const methodObj = {
            [method] () {
                const args = arguments;
                const isLegacyCall = arguments.length && typeof arguments[0] === 'function';
                if (isLegacyCall) return nativeMethod.apply(this, [
                    (description)=>{
                        const desc = replaceInternalStreamId(this, description);
                        args[0].apply(null, [
                            desc
                        ]);
                    },
                    (err)=>{
                        if (args[1]) args[1].apply(null, err);
                    },
                    arguments[2]
                ]);
                return nativeMethod.apply(this, arguments).then((description)=>replaceInternalStreamId(this, description));
            }
        };
        window.RTCPeerConnection.prototype[method] = methodObj[method];
    });
    const origSetLocalDescription = window.RTCPeerConnection.prototype.setLocalDescription;
    window.RTCPeerConnection.prototype.setLocalDescription = function setLocalDescription() {
        if (!arguments.length || !arguments[0].type) return origSetLocalDescription.apply(this, arguments);
        arguments[0] = replaceExternalStreamId(this, arguments[0]);
        return origSetLocalDescription.apply(this, arguments);
    };
    // TODO: mangle getStats: https://w3c.github.io/webrtc-stats/#dom-rtcmediastreamstats-streamidentifier
    const origLocalDescription = Object.getOwnPropertyDescriptor(window.RTCPeerConnection.prototype, 'localDescription');
    Object.defineProperty(window.RTCPeerConnection.prototype, 'localDescription', {
        get () {
            const description = origLocalDescription.get.apply(this);
            if (description.type === '') return description;
            return replaceInternalStreamId(this, description);
        }
    });
    window.RTCPeerConnection.prototype.removeTrack = function removeTrack(sender) {
        if (this.signalingState === 'closed') throw new DOMException('The RTCPeerConnection\'s signalingState is \'closed\'.', 'InvalidStateError');
        // We can not yet check for sender instanceof RTCRtpSender
        // since we shim RTPSender. So we check if sender._pc is set.
        if (!sender._pc) throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.", 'TypeError');
        const isLocal = sender._pc === this;
        if (!isLocal) throw new DOMException('Sender was not created by this connection.', 'InvalidAccessError');
        // Search for the native stream the senders track belongs to.
        this._streams = this._streams || {};
        let stream;
        Object.keys(this._streams).forEach((streamid)=>{
            const hasTrack = this._streams[streamid].getTracks().find((track)=>sender.track === track);
            if (hasTrack) stream = this._streams[streamid];
        });
        if (stream) {
            if (stream.getTracks().length === 1) // if this is the last track of the stream, remove the stream. This
            // takes care of any shimmed _senders.
            this.removeStream(this._reverseStreams[stream.id]);
            else // relying on the same odd chrome behaviour as above.
            stream.removeTrack(sender.track);
            this.dispatchEvent(new Event('negotiationneeded'));
        }
    };
}
function shimPeerConnection(window, browserDetails) {
    if (!window.RTCPeerConnection && window.webkitRTCPeerConnection) // very basic support for old versions.
    window.RTCPeerConnection = window.webkitRTCPeerConnection;
    if (!window.RTCPeerConnection) return;
    // shim implicit creation of RTCSessionDescription/RTCIceCandidate
    if (browserDetails.version < 53) [
        'setLocalDescription',
        'setRemoteDescription',
        'addIceCandidate'
    ].forEach(function(method) {
        const nativeMethod = window.RTCPeerConnection.prototype[method];
        const methodObj = {
            [method] () {
                arguments[0] = new (method === 'addIceCandidate' ? window.RTCIceCandidate : window.RTCSessionDescription)(arguments[0]);
                return nativeMethod.apply(this, arguments);
            }
        };
        window.RTCPeerConnection.prototype[method] = methodObj[method];
    });
}
function fixNegotiationNeeded(window, browserDetails) {
    _utilsJs.wrapPeerConnectionEvent(window, 'negotiationneeded', (e)=>{
        const pc = e.target;
        if (browserDetails.version < 72 || pc.getConfiguration && pc.getConfiguration().sdpSemantics === 'plan-b') {
            if (pc.signalingState !== 'stable') return;
        }
        return e;
    });
}

},{"../utils.js":"130jN","./getusermedia":"4J7EJ","./getdisplaymedia":"lGPez","@parcel/transformer-js/src/esmodule-helpers.js":"glwFn"}],"4J7EJ":[function(require,module,exports,__globalThis) {
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */ /* eslint-env node */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "shimGetUserMedia", ()=>shimGetUserMedia);
var _utilsJs = require("../utils.js");
'use strict';
const logging = _utilsJs.log;
function shimGetUserMedia(window, browserDetails) {
    const navigator = window && window.navigator;
    if (!navigator.mediaDevices) return;
    const constraintsToChrome_ = function(c) {
        if (typeof c !== 'object' || c.mandatory || c.optional) return c;
        const cc = {};
        Object.keys(c).forEach((key)=>{
            if (key === 'require' || key === 'advanced' || key === 'mediaSource') return;
            const r = typeof c[key] === 'object' ? c[key] : {
                ideal: c[key]
            };
            if (r.exact !== undefined && typeof r.exact === 'number') r.min = r.max = r.exact;
            const oldname_ = function(prefix, name) {
                if (prefix) return prefix + name.charAt(0).toUpperCase() + name.slice(1);
                return name === 'deviceId' ? 'sourceId' : name;
            };
            if (r.ideal !== undefined) {
                cc.optional = cc.optional || [];
                let oc = {};
                if (typeof r.ideal === 'number') {
                    oc[oldname_('min', key)] = r.ideal;
                    cc.optional.push(oc);
                    oc = {};
                    oc[oldname_('max', key)] = r.ideal;
                    cc.optional.push(oc);
                } else {
                    oc[oldname_('', key)] = r.ideal;
                    cc.optional.push(oc);
                }
            }
            if (r.exact !== undefined && typeof r.exact !== 'number') {
                cc.mandatory = cc.mandatory || {};
                cc.mandatory[oldname_('', key)] = r.exact;
            } else [
                'min',
                'max'
            ].forEach((mix)=>{
                if (r[mix] !== undefined) {
                    cc.mandatory = cc.mandatory || {};
                    cc.mandatory[oldname_(mix, key)] = r[mix];
                }
            });
        });
        if (c.advanced) cc.optional = (cc.optional || []).concat(c.advanced);
        return cc;
    };
    const shimConstraints_ = function(constraints, func) {
        if (browserDetails.version >= 61) return func(constraints);
        constraints = JSON.parse(JSON.stringify(constraints));
        if (constraints && typeof constraints.audio === 'object') {
            const remap = function(obj, a, b) {
                if (a in obj && !(b in obj)) {
                    obj[b] = obj[a];
                    delete obj[a];
                }
            };
            constraints = JSON.parse(JSON.stringify(constraints));
            remap(constraints.audio, 'autoGainControl', 'googAutoGainControl');
            remap(constraints.audio, 'noiseSuppression', 'googNoiseSuppression');
            constraints.audio = constraintsToChrome_(constraints.audio);
        }
        if (constraints && typeof constraints.video === 'object') {
            // Shim facingMode for mobile & surface pro.
            let face = constraints.video.facingMode;
            face = face && (typeof face === 'object' ? face : {
                ideal: face
            });
            const getSupportedFacingModeLies = browserDetails.version < 66;
            if (face && (face.exact === 'user' || face.exact === 'environment' || face.ideal === 'user' || face.ideal === 'environment') && !(navigator.mediaDevices.getSupportedConstraints && navigator.mediaDevices.getSupportedConstraints().facingMode && !getSupportedFacingModeLies)) {
                delete constraints.video.facingMode;
                let matches;
                if (face.exact === 'environment' || face.ideal === 'environment') matches = [
                    'back',
                    'rear'
                ];
                else if (face.exact === 'user' || face.ideal === 'user') matches = [
                    'front'
                ];
                if (matches) // Look for matches in label, or use last cam for back (typical).
                return navigator.mediaDevices.enumerateDevices().then((devices)=>{
                    devices = devices.filter((d)=>d.kind === 'videoinput');
                    let dev = devices.find((d)=>matches.some((match)=>d.label.toLowerCase().includes(match)));
                    if (!dev && devices.length && matches.includes('back')) dev = devices[devices.length - 1]; // more likely the back cam
                    if (dev) constraints.video.deviceId = face.exact ? {
                        exact: dev.deviceId
                    } : {
                        ideal: dev.deviceId
                    };
                    constraints.video = constraintsToChrome_(constraints.video);
                    logging('chrome: ' + JSON.stringify(constraints));
                    return func(constraints);
                });
            }
            constraints.video = constraintsToChrome_(constraints.video);
        }
        logging('chrome: ' + JSON.stringify(constraints));
        return func(constraints);
    };
    const shimError_ = function(e) {
        if (browserDetails.version >= 64) return e;
        return {
            name: ({
                PermissionDeniedError: 'NotAllowedError',
                PermissionDismissedError: 'NotAllowedError',
                InvalidStateError: 'NotAllowedError',
                DevicesNotFoundError: 'NotFoundError',
                ConstraintNotSatisfiedError: 'OverconstrainedError',
                TrackStartError: 'NotReadableError',
                MediaDeviceFailedDueToShutdown: 'NotAllowedError',
                MediaDeviceKillSwitchOn: 'NotAllowedError',
                TabCaptureError: 'AbortError',
                ScreenCaptureError: 'AbortError',
                DeviceCaptureError: 'AbortError'
            })[e.name] || e.name,
            message: e.message,
            constraint: e.constraint || e.constraintName,
            toString () {
                return this.name + (this.message && ': ') + this.message;
            }
        };
    };
    const getUserMedia_ = function(constraints, onSuccess, onError) {
        shimConstraints_(constraints, (c)=>{
            navigator.webkitGetUserMedia(c, onSuccess, (e)=>{
                if (onError) onError(shimError_(e));
            });
        });
    };
    navigator.getUserMedia = getUserMedia_.bind(navigator);
    // Even though Chrome 45 has navigator.mediaDevices and a getUserMedia
    // function which returns a Promise, it does not accept spec-style
    // constraints.
    if (navigator.mediaDevices.getUserMedia) {
        const origGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
        navigator.mediaDevices.getUserMedia = function(cs) {
            return shimConstraints_(cs, (c)=>origGetUserMedia(c).then((stream)=>{
                    if (c.audio && !stream.getAudioTracks().length || c.video && !stream.getVideoTracks().length) {
                        stream.getTracks().forEach((track)=>{
                            track.stop();
                        });
                        throw new DOMException('', 'NotFoundError');
                    }
                    return stream;
                }, (e)=>Promise.reject(shimError_(e))));
        };
    }
}

},{"../utils.js":"130jN","@parcel/transformer-js/src/esmodule-helpers.js":"glwFn"}],"lGPez":[function(require,module,exports,__globalThis) {
/*
 *  Copyright (c) 2018 The adapter.js project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */ /* eslint-env node */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "shimGetDisplayMedia", ()=>shimGetDisplayMedia);
'use strict';
function shimGetDisplayMedia(window, getSourceId) {
    if (window.navigator.mediaDevices && 'getDisplayMedia' in window.navigator.mediaDevices) return;
    if (!window.navigator.mediaDevices) return;
    // getSourceId is a function that returns a promise resolving with
    // the sourceId of the screen/window/tab to be shared.
    if (typeof getSourceId !== 'function') {
        console.error("shimGetDisplayMedia: getSourceId argument is not a function");
        return;
    }
    window.navigator.mediaDevices.getDisplayMedia = function getDisplayMedia(constraints) {
        return getSourceId(constraints).then((sourceId)=>{
            const widthSpecified = constraints.video && constraints.video.width;
            const heightSpecified = constraints.video && constraints.video.height;
            const frameRateSpecified = constraints.video && constraints.video.frameRate;
            constraints.video = {
                mandatory: {
                    chromeMediaSource: 'desktop',
                    chromeMediaSourceId: sourceId,
                    maxFrameRate: frameRateSpecified || 3
                }
            };
            if (widthSpecified) constraints.video.mandatory.maxWidth = widthSpecified;
            if (heightSpecified) constraints.video.mandatory.maxHeight = heightSpecified;
            return window.navigator.mediaDevices.getUserMedia(constraints);
        });
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"glwFn"}],"bXIO7":[function(require,module,exports,__globalThis) {
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */ /* eslint-env node */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "shimGetUserMedia", ()=>(0, _getusermedia.shimGetUserMedia));
parcelHelpers.export(exports, "shimGetDisplayMedia", ()=>(0, _getdisplaymedia.shimGetDisplayMedia));
parcelHelpers.export(exports, "shimOnTrack", ()=>shimOnTrack);
parcelHelpers.export(exports, "shimPeerConnection", ()=>shimPeerConnection);
parcelHelpers.export(exports, "shimSenderGetStats", ()=>shimSenderGetStats);
parcelHelpers.export(exports, "shimReceiverGetStats", ()=>shimReceiverGetStats);
parcelHelpers.export(exports, "shimRemoveStream", ()=>shimRemoveStream);
parcelHelpers.export(exports, "shimRTCDataChannel", ()=>shimRTCDataChannel);
parcelHelpers.export(exports, "shimAddTransceiver", ()=>shimAddTransceiver);
parcelHelpers.export(exports, "shimGetParameters", ()=>shimGetParameters);
parcelHelpers.export(exports, "shimCreateOffer", ()=>shimCreateOffer);
parcelHelpers.export(exports, "shimCreateAnswer", ()=>shimCreateAnswer);
var _utils = require("../utils");
var _getusermedia = require("./getusermedia");
var _getdisplaymedia = require("./getdisplaymedia");
'use strict';
function shimOnTrack(window) {
    if (typeof window === 'object' && window.RTCTrackEvent && 'receiver' in window.RTCTrackEvent.prototype && !('transceiver' in window.RTCTrackEvent.prototype)) Object.defineProperty(window.RTCTrackEvent.prototype, 'transceiver', {
        get () {
            return {
                receiver: this.receiver
            };
        }
    });
}
function shimPeerConnection(window, browserDetails) {
    if (typeof window !== 'object' || !(window.RTCPeerConnection || window.mozRTCPeerConnection)) return; // probably media.peerconnection.enabled=false in about:config
    if (!window.RTCPeerConnection && window.mozRTCPeerConnection) // very basic support for old versions.
    window.RTCPeerConnection = window.mozRTCPeerConnection;
    if (browserDetails.version < 53) // shim away need for obsolete RTCIceCandidate/RTCSessionDescription.
    [
        'setLocalDescription',
        'setRemoteDescription',
        'addIceCandidate'
    ].forEach(function(method) {
        const nativeMethod = window.RTCPeerConnection.prototype[method];
        const methodObj = {
            [method] () {
                arguments[0] = new (method === 'addIceCandidate' ? window.RTCIceCandidate : window.RTCSessionDescription)(arguments[0]);
                return nativeMethod.apply(this, arguments);
            }
        };
        window.RTCPeerConnection.prototype[method] = methodObj[method];
    });
    const modernStatsTypes = {
        inboundrtp: 'inbound-rtp',
        outboundrtp: 'outbound-rtp',
        candidatepair: 'candidate-pair',
        localcandidate: 'local-candidate',
        remotecandidate: 'remote-candidate'
    };
    const nativeGetStats = window.RTCPeerConnection.prototype.getStats;
    window.RTCPeerConnection.prototype.getStats = function getStats() {
        const [selector, onSucc, onErr] = arguments;
        return nativeGetStats.apply(this, [
            selector || null
        ]).then((stats)=>{
            if (browserDetails.version < 53 && !onSucc) // Shim only promise getStats with spec-hyphens in type names
            // Leave callback version alone; misc old uses of forEach before Map
            try {
                stats.forEach((stat)=>{
                    stat.type = modernStatsTypes[stat.type] || stat.type;
                });
            } catch (e) {
                if (e.name !== 'TypeError') throw e;
                // Avoid TypeError: "type" is read-only, in old versions. 34-43ish
                stats.forEach((stat, i)=>{
                    stats.set(i, Object.assign({}, stat, {
                        type: modernStatsTypes[stat.type] || stat.type
                    }));
                });
            }
            return stats;
        }).then(onSucc, onErr);
    };
}
function shimSenderGetStats(window) {
    if (!(typeof window === 'object' && window.RTCPeerConnection && window.RTCRtpSender)) return;
    if (window.RTCRtpSender && 'getStats' in window.RTCRtpSender.prototype) return;
    const origGetSenders = window.RTCPeerConnection.prototype.getSenders;
    if (origGetSenders) window.RTCPeerConnection.prototype.getSenders = function getSenders() {
        const senders = origGetSenders.apply(this, []);
        senders.forEach((sender)=>sender._pc = this);
        return senders;
    };
    const origAddTrack = window.RTCPeerConnection.prototype.addTrack;
    if (origAddTrack) window.RTCPeerConnection.prototype.addTrack = function addTrack() {
        const sender = origAddTrack.apply(this, arguments);
        sender._pc = this;
        return sender;
    };
    window.RTCRtpSender.prototype.getStats = function getStats() {
        return this.track ? this._pc.getStats(this.track) : Promise.resolve(new Map());
    };
}
function shimReceiverGetStats(window) {
    if (!(typeof window === 'object' && window.RTCPeerConnection && window.RTCRtpSender)) return;
    if (window.RTCRtpSender && 'getStats' in window.RTCRtpReceiver.prototype) return;
    const origGetReceivers = window.RTCPeerConnection.prototype.getReceivers;
    if (origGetReceivers) window.RTCPeerConnection.prototype.getReceivers = function getReceivers() {
        const receivers = origGetReceivers.apply(this, []);
        receivers.forEach((receiver)=>receiver._pc = this);
        return receivers;
    };
    _utils.wrapPeerConnectionEvent(window, 'track', (e)=>{
        e.receiver._pc = e.srcElement;
        return e;
    });
    window.RTCRtpReceiver.prototype.getStats = function getStats() {
        return this._pc.getStats(this.track);
    };
}
function shimRemoveStream(window) {
    if (!window.RTCPeerConnection || 'removeStream' in window.RTCPeerConnection.prototype) return;
    window.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
        _utils.deprecated('removeStream', 'removeTrack');
        this.getSenders().forEach((sender)=>{
            if (sender.track && stream.getTracks().includes(sender.track)) this.removeTrack(sender);
        });
    };
}
function shimRTCDataChannel(window) {
    // rename DataChannel to RTCDataChannel (native fix in FF60):
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1173851
    if (window.DataChannel && !window.RTCDataChannel) window.RTCDataChannel = window.DataChannel;
}
function shimAddTransceiver(window) {
    // https://github.com/webrtcHacks/adapter/issues/998#issuecomment-516921647
    // Firefox ignores the init sendEncodings options passed to addTransceiver
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1396918
    if (!(typeof window === 'object' && window.RTCPeerConnection)) return;
    const origAddTransceiver = window.RTCPeerConnection.prototype.addTransceiver;
    if (origAddTransceiver) window.RTCPeerConnection.prototype.addTransceiver = function addTransceiver() {
        this.setParametersPromises = [];
        // WebIDL input coercion and validation
        let sendEncodings = arguments[1] && arguments[1].sendEncodings;
        if (sendEncodings === undefined) sendEncodings = [];
        sendEncodings = [
            ...sendEncodings
        ];
        const shouldPerformCheck = sendEncodings.length > 0;
        if (shouldPerformCheck) // If sendEncodings params are provided, validate grammar
        sendEncodings.forEach((encodingParam)=>{
            if ('rid' in encodingParam) {
                const ridRegex = /^[a-z0-9]{0,16}$/i;
                if (!ridRegex.test(encodingParam.rid)) throw new TypeError('Invalid RID value provided.');
            }
            if ('scaleResolutionDownBy' in encodingParam) {
                if (!(parseFloat(encodingParam.scaleResolutionDownBy) >= 1.0)) throw new RangeError('scale_resolution_down_by must be >= 1.0');
            }
            if ('maxFramerate' in encodingParam) {
                if (!(parseFloat(encodingParam.maxFramerate) >= 0)) throw new RangeError('max_framerate must be >= 0.0');
            }
        });
        const transceiver = origAddTransceiver.apply(this, arguments);
        if (shouldPerformCheck) {
            // Check if the init options were applied. If not we do this in an
            // asynchronous way and save the promise reference in a global object.
            // This is an ugly hack, but at the same time is way more robust than
            // checking the sender parameters before and after the createOffer
            // Also note that after the createoffer we are not 100% sure that
            // the params were asynchronously applied so we might miss the
            // opportunity to recreate offer.
            const { sender } = transceiver;
            const params = sender.getParameters();
            if (!('encodings' in params) || // Avoid being fooled by patched getParameters() below.
            params.encodings.length === 1 && Object.keys(params.encodings[0]).length === 0) {
                params.encodings = sendEncodings;
                sender.sendEncodings = sendEncodings;
                this.setParametersPromises.push(sender.setParameters(params).then(()=>{
                    delete sender.sendEncodings;
                }).catch(()=>{
                    delete sender.sendEncodings;
                }));
            }
        }
        return transceiver;
    };
}
function shimGetParameters(window) {
    if (!(typeof window === 'object' && window.RTCRtpSender)) return;
    const origGetParameters = window.RTCRtpSender.prototype.getParameters;
    if (origGetParameters) window.RTCRtpSender.prototype.getParameters = function getParameters() {
        const params = origGetParameters.apply(this, arguments);
        if (!('encodings' in params)) params.encodings = [].concat(this.sendEncodings || [
            {}
        ]);
        return params;
    };
}
function shimCreateOffer(window) {
    // https://github.com/webrtcHacks/adapter/issues/998#issuecomment-516921647
    // Firefox ignores the init sendEncodings options passed to addTransceiver
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1396918
    if (!(typeof window === 'object' && window.RTCPeerConnection)) return;
    const origCreateOffer = window.RTCPeerConnection.prototype.createOffer;
    window.RTCPeerConnection.prototype.createOffer = function createOffer() {
        if (this.setParametersPromises && this.setParametersPromises.length) return Promise.all(this.setParametersPromises).then(()=>{
            return origCreateOffer.apply(this, arguments);
        }).finally(()=>{
            this.setParametersPromises = [];
        });
        return origCreateOffer.apply(this, arguments);
    };
}
function shimCreateAnswer(window) {
    // https://github.com/webrtcHacks/adapter/issues/998#issuecomment-516921647
    // Firefox ignores the init sendEncodings options passed to addTransceiver
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1396918
    if (!(typeof window === 'object' && window.RTCPeerConnection)) return;
    const origCreateAnswer = window.RTCPeerConnection.prototype.createAnswer;
    window.RTCPeerConnection.prototype.createAnswer = function createAnswer() {
        if (this.setParametersPromises && this.setParametersPromises.length) return Promise.all(this.setParametersPromises).then(()=>{
            return origCreateAnswer.apply(this, arguments);
        }).finally(()=>{
            this.setParametersPromises = [];
        });
        return origCreateAnswer.apply(this, arguments);
    };
}

},{"../utils":"130jN","./getusermedia":"gxNeY","./getdisplaymedia":"kGvxK","@parcel/transformer-js/src/esmodule-helpers.js":"glwFn"}],"gxNeY":[function(require,module,exports,__globalThis) {
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */ /* eslint-env node */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "shimGetUserMedia", ()=>shimGetUserMedia);
var _utils = require("../utils");
'use strict';
function shimGetUserMedia(window, browserDetails) {
    const navigator = window && window.navigator;
    const MediaStreamTrack = window && window.MediaStreamTrack;
    navigator.getUserMedia = function(constraints, onSuccess, onError) {
        // Replace Firefox 44+'s deprecation warning with unprefixed version.
        _utils.deprecated('navigator.getUserMedia', 'navigator.mediaDevices.getUserMedia');
        navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);
    };
    if (!(browserDetails.version > 55 && 'autoGainControl' in navigator.mediaDevices.getSupportedConstraints())) {
        const remap = function(obj, a, b) {
            if (a in obj && !(b in obj)) {
                obj[b] = obj[a];
                delete obj[a];
            }
        };
        const nativeGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
        navigator.mediaDevices.getUserMedia = function(c) {
            if (typeof c === 'object' && typeof c.audio === 'object') {
                c = JSON.parse(JSON.stringify(c));
                remap(c.audio, 'autoGainControl', 'mozAutoGainControl');
                remap(c.audio, 'noiseSuppression', 'mozNoiseSuppression');
            }
            return nativeGetUserMedia(c);
        };
        if (MediaStreamTrack && MediaStreamTrack.prototype.getSettings) {
            const nativeGetSettings = MediaStreamTrack.prototype.getSettings;
            MediaStreamTrack.prototype.getSettings = function() {
                const obj = nativeGetSettings.apply(this, arguments);
                remap(obj, 'mozAutoGainControl', 'autoGainControl');
                remap(obj, 'mozNoiseSuppression', 'noiseSuppression');
                return obj;
            };
        }
        if (MediaStreamTrack && MediaStreamTrack.prototype.applyConstraints) {
            const nativeApplyConstraints = MediaStreamTrack.prototype.applyConstraints;
            MediaStreamTrack.prototype.applyConstraints = function(c) {
                if (this.kind === 'audio' && typeof c === 'object') {
                    c = JSON.parse(JSON.stringify(c));
                    remap(c, 'autoGainControl', 'mozAutoGainControl');
                    remap(c, 'noiseSuppression', 'mozNoiseSuppression');
                }
                return nativeApplyConstraints.apply(this, [
                    c
                ]);
            };
        }
    }
}

},{"../utils":"130jN","@parcel/transformer-js/src/esmodule-helpers.js":"glwFn"}],"kGvxK":[function(require,module,exports,__globalThis) {
/*
 *  Copyright (c) 2018 The adapter.js project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */ /* eslint-env node */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "shimGetDisplayMedia", ()=>shimGetDisplayMedia);
'use strict';
function shimGetDisplayMedia(window, preferredMediaSource) {
    if (window.navigator.mediaDevices && 'getDisplayMedia' in window.navigator.mediaDevices) return;
    if (!window.navigator.mediaDevices) return;
    window.navigator.mediaDevices.getDisplayMedia = function getDisplayMedia(constraints) {
        if (!(constraints && constraints.video)) {
            const err = new DOMException("getDisplayMedia without video constraints is undefined");
            err.name = 'NotFoundError';
            // from https://heycam.github.io/webidl/#idl-DOMException-error-names
            err.code = 8;
            return Promise.reject(err);
        }
        if (constraints.video === true) constraints.video = {
            mediaSource: preferredMediaSource
        };
        else constraints.video.mediaSource = preferredMediaSource;
        return window.navigator.mediaDevices.getUserMedia(constraints);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"glwFn"}],"8DlmS":[function(require,module,exports,__globalThis) {
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "shimLocalStreamsAPI", ()=>shimLocalStreamsAPI);
parcelHelpers.export(exports, "shimRemoteStreamsAPI", ()=>shimRemoteStreamsAPI);
parcelHelpers.export(exports, "shimCallbacksAPI", ()=>shimCallbacksAPI);
parcelHelpers.export(exports, "shimGetUserMedia", ()=>shimGetUserMedia);
parcelHelpers.export(exports, "shimConstraints", ()=>shimConstraints);
parcelHelpers.export(exports, "shimRTCIceServerUrls", ()=>shimRTCIceServerUrls);
parcelHelpers.export(exports, "shimTrackEventTransceiver", ()=>shimTrackEventTransceiver);
parcelHelpers.export(exports, "shimCreateOfferLegacy", ()=>shimCreateOfferLegacy);
parcelHelpers.export(exports, "shimAudioContext", ()=>shimAudioContext);
var _utils = require("../utils");
'use strict';
function shimLocalStreamsAPI(window) {
    if (typeof window !== 'object' || !window.RTCPeerConnection) return;
    if (!('getLocalStreams' in window.RTCPeerConnection.prototype)) window.RTCPeerConnection.prototype.getLocalStreams = function getLocalStreams() {
        if (!this._localStreams) this._localStreams = [];
        return this._localStreams;
    };
    if (!('addStream' in window.RTCPeerConnection.prototype)) {
        const _addTrack = window.RTCPeerConnection.prototype.addTrack;
        window.RTCPeerConnection.prototype.addStream = function addStream(stream) {
            if (!this._localStreams) this._localStreams = [];
            if (!this._localStreams.includes(stream)) this._localStreams.push(stream);
            // Try to emulate Chrome's behaviour of adding in audio-video order.
            // Safari orders by track id.
            stream.getAudioTracks().forEach((track)=>_addTrack.call(this, track, stream));
            stream.getVideoTracks().forEach((track)=>_addTrack.call(this, track, stream));
        };
        window.RTCPeerConnection.prototype.addTrack = function addTrack(track, ...streams) {
            if (streams) streams.forEach((stream)=>{
                if (!this._localStreams) this._localStreams = [
                    stream
                ];
                else if (!this._localStreams.includes(stream)) this._localStreams.push(stream);
            });
            return _addTrack.apply(this, arguments);
        };
    }
    if (!('removeStream' in window.RTCPeerConnection.prototype)) window.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
        if (!this._localStreams) this._localStreams = [];
        const index = this._localStreams.indexOf(stream);
        if (index === -1) return;
        this._localStreams.splice(index, 1);
        const tracks = stream.getTracks();
        this.getSenders().forEach((sender)=>{
            if (tracks.includes(sender.track)) this.removeTrack(sender);
        });
    };
}
function shimRemoteStreamsAPI(window) {
    if (typeof window !== 'object' || !window.RTCPeerConnection) return;
    if (!('getRemoteStreams' in window.RTCPeerConnection.prototype)) window.RTCPeerConnection.prototype.getRemoteStreams = function getRemoteStreams() {
        return this._remoteStreams ? this._remoteStreams : [];
    };
    if (!('onaddstream' in window.RTCPeerConnection.prototype)) {
        Object.defineProperty(window.RTCPeerConnection.prototype, 'onaddstream', {
            get () {
                return this._onaddstream;
            },
            set (f) {
                if (this._onaddstream) {
                    this.removeEventListener('addstream', this._onaddstream);
                    this.removeEventListener('track', this._onaddstreampoly);
                }
                this.addEventListener('addstream', this._onaddstream = f);
                this.addEventListener('track', this._onaddstreampoly = (e)=>{
                    e.streams.forEach((stream)=>{
                        if (!this._remoteStreams) this._remoteStreams = [];
                        if (this._remoteStreams.includes(stream)) return;
                        this._remoteStreams.push(stream);
                        const event = new Event('addstream');
                        event.stream = stream;
                        this.dispatchEvent(event);
                    });
                });
            }
        });
        const origSetRemoteDescription = window.RTCPeerConnection.prototype.setRemoteDescription;
        window.RTCPeerConnection.prototype.setRemoteDescription = function setRemoteDescription() {
            const pc = this;
            if (!this._onaddstreampoly) this.addEventListener('track', this._onaddstreampoly = function(e) {
                e.streams.forEach((stream)=>{
                    if (!pc._remoteStreams) pc._remoteStreams = [];
                    if (pc._remoteStreams.indexOf(stream) >= 0) return;
                    pc._remoteStreams.push(stream);
                    const event = new Event('addstream');
                    event.stream = stream;
                    pc.dispatchEvent(event);
                });
            });
            return origSetRemoteDescription.apply(pc, arguments);
        };
    }
}
function shimCallbacksAPI(window) {
    if (typeof window !== 'object' || !window.RTCPeerConnection) return;
    const prototype = window.RTCPeerConnection.prototype;
    const origCreateOffer = prototype.createOffer;
    const origCreateAnswer = prototype.createAnswer;
    const setLocalDescription = prototype.setLocalDescription;
    const setRemoteDescription = prototype.setRemoteDescription;
    const addIceCandidate = prototype.addIceCandidate;
    prototype.createOffer = function createOffer(successCallback, failureCallback) {
        const options = arguments.length >= 2 ? arguments[2] : arguments[0];
        const promise = origCreateOffer.apply(this, [
            options
        ]);
        if (!failureCallback) return promise;
        promise.then(successCallback, failureCallback);
        return Promise.resolve();
    };
    prototype.createAnswer = function createAnswer(successCallback, failureCallback) {
        const options = arguments.length >= 2 ? arguments[2] : arguments[0];
        const promise = origCreateAnswer.apply(this, [
            options
        ]);
        if (!failureCallback) return promise;
        promise.then(successCallback, failureCallback);
        return Promise.resolve();
    };
    let withCallback = function(description, successCallback, failureCallback) {
        const promise = setLocalDescription.apply(this, [
            description
        ]);
        if (!failureCallback) return promise;
        promise.then(successCallback, failureCallback);
        return Promise.resolve();
    };
    prototype.setLocalDescription = withCallback;
    withCallback = function(description, successCallback, failureCallback) {
        const promise = setRemoteDescription.apply(this, [
            description
        ]);
        if (!failureCallback) return promise;
        promise.then(successCallback, failureCallback);
        return Promise.resolve();
    };
    prototype.setRemoteDescription = withCallback;
    withCallback = function(candidate, successCallback, failureCallback) {
        const promise = addIceCandidate.apply(this, [
            candidate
        ]);
        if (!failureCallback) return promise;
        promise.then(successCallback, failureCallback);
        return Promise.resolve();
    };
    prototype.addIceCandidate = withCallback;
}
function shimGetUserMedia(window) {
    const navigator = window && window.navigator;
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // shim not needed in Safari 12.1
        const mediaDevices = navigator.mediaDevices;
        const _getUserMedia = mediaDevices.getUserMedia.bind(mediaDevices);
        navigator.mediaDevices.getUserMedia = (constraints)=>{
            return _getUserMedia(shimConstraints(constraints));
        };
    }
    if (!navigator.getUserMedia && navigator.mediaDevices && navigator.mediaDevices.getUserMedia) navigator.getUserMedia = (function getUserMedia(constraints, cb, errcb) {
        navigator.mediaDevices.getUserMedia(constraints).then(cb, errcb);
    }).bind(navigator);
}
function shimConstraints(constraints) {
    if (constraints && constraints.video !== undefined) return Object.assign({}, constraints, {
        video: _utils.compactObject(constraints.video)
    });
    return constraints;
}
function shimRTCIceServerUrls(window) {
    if (!window.RTCPeerConnection) return;
    // migrate from non-spec RTCIceServer.url to RTCIceServer.urls
    const OrigPeerConnection = window.RTCPeerConnection;
    window.RTCPeerConnection = function RTCPeerConnection(pcConfig, pcConstraints) {
        if (pcConfig && pcConfig.iceServers) {
            const newIceServers = [];
            for(let i = 0; i < pcConfig.iceServers.length; i++){
                let server = pcConfig.iceServers[i];
                if (server.urls === undefined && server.url) {
                    _utils.deprecated('RTCIceServer.url', 'RTCIceServer.urls');
                    server = JSON.parse(JSON.stringify(server));
                    server.urls = server.url;
                    delete server.url;
                    newIceServers.push(server);
                } else newIceServers.push(pcConfig.iceServers[i]);
            }
            pcConfig.iceServers = newIceServers;
        }
        return new OrigPeerConnection(pcConfig, pcConstraints);
    };
    window.RTCPeerConnection.prototype = OrigPeerConnection.prototype;
    // wrap static methods. Currently just generateCertificate.
    if ('generateCertificate' in OrigPeerConnection) Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
        get () {
            return OrigPeerConnection.generateCertificate;
        }
    });
}
function shimTrackEventTransceiver(window) {
    // Add event.transceiver member over deprecated event.receiver
    if (typeof window === 'object' && window.RTCTrackEvent && 'receiver' in window.RTCTrackEvent.prototype && !('transceiver' in window.RTCTrackEvent.prototype)) Object.defineProperty(window.RTCTrackEvent.prototype, 'transceiver', {
        get () {
            return {
                receiver: this.receiver
            };
        }
    });
}
function shimCreateOfferLegacy(window) {
    const origCreateOffer = window.RTCPeerConnection.prototype.createOffer;
    window.RTCPeerConnection.prototype.createOffer = function createOffer(offerOptions) {
        if (offerOptions) {
            if (typeof offerOptions.offerToReceiveAudio !== 'undefined') // support bit values
            offerOptions.offerToReceiveAudio = !!offerOptions.offerToReceiveAudio;
            const audioTransceiver = this.getTransceivers().find((transceiver)=>transceiver.receiver.track.kind === 'audio');
            if (offerOptions.offerToReceiveAudio === false && audioTransceiver) {
                if (audioTransceiver.direction === 'sendrecv') {
                    if (audioTransceiver.setDirection) audioTransceiver.setDirection('sendonly');
                    else audioTransceiver.direction = 'sendonly';
                } else if (audioTransceiver.direction === 'recvonly') {
                    if (audioTransceiver.setDirection) audioTransceiver.setDirection('inactive');
                    else audioTransceiver.direction = 'inactive';
                }
            } else if (offerOptions.offerToReceiveAudio === true && !audioTransceiver) this.addTransceiver('audio', {
                direction: 'recvonly'
            });
            if (typeof offerOptions.offerToReceiveVideo !== 'undefined') // support bit values
            offerOptions.offerToReceiveVideo = !!offerOptions.offerToReceiveVideo;
            const videoTransceiver = this.getTransceivers().find((transceiver)=>transceiver.receiver.track.kind === 'video');
            if (offerOptions.offerToReceiveVideo === false && videoTransceiver) {
                if (videoTransceiver.direction === 'sendrecv') {
                    if (videoTransceiver.setDirection) videoTransceiver.setDirection('sendonly');
                    else videoTransceiver.direction = 'sendonly';
                } else if (videoTransceiver.direction === 'recvonly') {
                    if (videoTransceiver.setDirection) videoTransceiver.setDirection('inactive');
                    else videoTransceiver.direction = 'inactive';
                }
            } else if (offerOptions.offerToReceiveVideo === true && !videoTransceiver) this.addTransceiver('video', {
                direction: 'recvonly'
            });
        }
        return origCreateOffer.apply(this, arguments);
    };
}
function shimAudioContext(window) {
    if (typeof window !== 'object' || window.AudioContext) return;
    window.AudioContext = window.webkitAudioContext;
}

},{"../utils":"130jN","@parcel/transformer-js/src/esmodule-helpers.js":"glwFn"}],"bXwPT":[function(require,module,exports,__globalThis) {
/*
 *  Copyright (c) 2017 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */ /* eslint-env node */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "shimRTCIceCandidate", ()=>shimRTCIceCandidate);
parcelHelpers.export(exports, "shimRTCIceCandidateRelayProtocol", ()=>shimRTCIceCandidateRelayProtocol);
parcelHelpers.export(exports, "shimMaxMessageSize", ()=>shimMaxMessageSize);
parcelHelpers.export(exports, "shimSendThrowTypeError", ()=>shimSendThrowTypeError);
/* shims RTCConnectionState by pretending it is the same as iceConnectionState.
 * See https://bugs.chromium.org/p/webrtc/issues/detail?id=6145#c12
 * for why this is a valid hack in Chrome. In Firefox it is slightly incorrect
 * since DTLS failures would be hidden. See
 * https://bugzilla.mozilla.org/show_bug.cgi?id=1265827
 * for the Firefox tracking bug.
 */ parcelHelpers.export(exports, "shimConnectionState", ()=>shimConnectionState);
parcelHelpers.export(exports, "removeExtmapAllowMixed", ()=>removeExtmapAllowMixed);
parcelHelpers.export(exports, "shimAddIceCandidateNullOrEmpty", ()=>shimAddIceCandidateNullOrEmpty);
// Note: Make sure to call this ahead of APIs that modify
// setLocalDescription.length
parcelHelpers.export(exports, "shimParameterlessSetLocalDescription", ()=>shimParameterlessSetLocalDescription);
var _sdp = require("sdp");
var _sdpDefault = parcelHelpers.interopDefault(_sdp);
var _utils = require("./utils");
'use strict';
function shimRTCIceCandidate(window) {
    // foundation is arbitrarily chosen as an indicator for full support for
    // https://w3c.github.io/webrtc-pc/#rtcicecandidate-interface
    if (!window.RTCIceCandidate || window.RTCIceCandidate && 'foundation' in window.RTCIceCandidate.prototype) return;
    const NativeRTCIceCandidate = window.RTCIceCandidate;
    window.RTCIceCandidate = function RTCIceCandidate(args) {
        // Remove the a= which shouldn't be part of the candidate string.
        if (typeof args === 'object' && args.candidate && args.candidate.indexOf('a=') === 0) {
            args = JSON.parse(JSON.stringify(args));
            args.candidate = args.candidate.substring(2);
        }
        if (args.candidate && args.candidate.length) {
            // Augment the native candidate with the parsed fields.
            const nativeCandidate = new NativeRTCIceCandidate(args);
            const parsedCandidate = (0, _sdpDefault.default).parseCandidate(args.candidate);
            for(const key in parsedCandidate)if (!(key in nativeCandidate)) Object.defineProperty(nativeCandidate, key, {
                value: parsedCandidate[key]
            });
            // Override serializer to not serialize the extra attributes.
            nativeCandidate.toJSON = function toJSON() {
                return {
                    candidate: nativeCandidate.candidate,
                    sdpMid: nativeCandidate.sdpMid,
                    sdpMLineIndex: nativeCandidate.sdpMLineIndex,
                    usernameFragment: nativeCandidate.usernameFragment
                };
            };
            return nativeCandidate;
        }
        return new NativeRTCIceCandidate(args);
    };
    window.RTCIceCandidate.prototype = NativeRTCIceCandidate.prototype;
    // Hook up the augmented candidate in onicecandidate and
    // addEventListener('icecandidate', ...)
    _utils.wrapPeerConnectionEvent(window, 'icecandidate', (e)=>{
        if (e.candidate) Object.defineProperty(e, 'candidate', {
            value: new window.RTCIceCandidate(e.candidate),
            writable: 'false'
        });
        return e;
    });
}
function shimRTCIceCandidateRelayProtocol(window) {
    if (!window.RTCIceCandidate || window.RTCIceCandidate && 'relayProtocol' in window.RTCIceCandidate.prototype) return;
    // Hook up the augmented candidate in onicecandidate and
    // addEventListener('icecandidate', ...)
    _utils.wrapPeerConnectionEvent(window, 'icecandidate', (e)=>{
        if (e.candidate) {
            const parsedCandidate = (0, _sdpDefault.default).parseCandidate(e.candidate.candidate);
            if (parsedCandidate.type === 'relay') // This is a libwebrtc-specific mapping of local type preference
            // to relayProtocol.
            e.candidate.relayProtocol = ({
                0: 'tls',
                1: 'tcp',
                2: 'udp'
            })[parsedCandidate.priority >> 24];
        }
        return e;
    });
}
function shimMaxMessageSize(window, browserDetails) {
    if (!window.RTCPeerConnection) return;
    if (!('sctp' in window.RTCPeerConnection.prototype)) Object.defineProperty(window.RTCPeerConnection.prototype, 'sctp', {
        get () {
            return typeof this._sctp === 'undefined' ? null : this._sctp;
        }
    });
    const sctpInDescription = function(description) {
        if (!description || !description.sdp) return false;
        const sections = (0, _sdpDefault.default).splitSections(description.sdp);
        sections.shift();
        return sections.some((mediaSection)=>{
            const mLine = (0, _sdpDefault.default).parseMLine(mediaSection);
            return mLine && mLine.kind === 'application' && mLine.protocol.indexOf('SCTP') !== -1;
        });
    };
    const getRemoteFirefoxVersion = function(description) {
        // TODO: Is there a better solution for detecting Firefox?
        const match = description.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
        if (match === null || match.length < 2) return -1;
        const version = parseInt(match[1], 10);
        // Test for NaN (yes, this is ugly)
        return version !== version ? -1 : version;
    };
    const getCanSendMaxMessageSize = function(remoteIsFirefox) {
        // Every implementation we know can send at least 64 KiB.
        // Note: Although Chrome is technically able to send up to 256 KiB, the
        //       data does not reach the other peer reliably.
        //       See: https://bugs.chromium.org/p/webrtc/issues/detail?id=8419
        let canSendMaxMessageSize = 65536;
        if (browserDetails.browser === 'firefox') {
            if (browserDetails.version < 57) {
                if (remoteIsFirefox === -1) // FF < 57 will send in 16 KiB chunks using the deprecated PPID
                // fragmentation.
                canSendMaxMessageSize = 16384;
                else // However, other FF (and RAWRTC) can reassemble PPID-fragmented
                // messages. Thus, supporting ~2 GiB when sending.
                canSendMaxMessageSize = 2147483637;
            } else if (browserDetails.version < 60) // Currently, all FF >= 57 will reset the remote maximum message size
            // to the default value when a data channel is created at a later
            // stage. :(
            // See: https://bugzilla.mozilla.org/show_bug.cgi?id=1426831
            canSendMaxMessageSize = browserDetails.version === 57 ? 65535 : 65536;
            else // FF >= 60 supports sending ~2 GiB
            canSendMaxMessageSize = 2147483637;
        }
        return canSendMaxMessageSize;
    };
    const getMaxMessageSize = function(description, remoteIsFirefox) {
        // Note: 65536 bytes is the default value from the SDP spec. Also,
        //       every implementation we know supports receiving 65536 bytes.
        let maxMessageSize = 65536;
        // FF 57 has a slightly incorrect default remote max message size, so
        // we need to adjust it here to avoid a failure when sending.
        // See: https://bugzilla.mozilla.org/show_bug.cgi?id=1425697
        if (browserDetails.browser === 'firefox' && browserDetails.version === 57) maxMessageSize = 65535;
        const match = (0, _sdpDefault.default).matchPrefix(description.sdp, 'a=max-message-size:');
        if (match.length > 0) maxMessageSize = parseInt(match[0].substring(19), 10);
        else if (browserDetails.browser === 'firefox' && remoteIsFirefox !== -1) // If the maximum message size is not present in the remote SDP and
        // both local and remote are Firefox, the remote peer can receive
        // ~2 GiB.
        maxMessageSize = 2147483637;
        return maxMessageSize;
    };
    const origSetRemoteDescription = window.RTCPeerConnection.prototype.setRemoteDescription;
    window.RTCPeerConnection.prototype.setRemoteDescription = function setRemoteDescription() {
        this._sctp = null;
        // Chrome decided to not expose .sctp in plan-b mode.
        // As usual, adapter.js has to do an 'ugly worakaround'
        // to cover up the mess.
        if (browserDetails.browser === 'chrome' && browserDetails.version >= 76) {
            const { sdpSemantics } = this.getConfiguration();
            if (sdpSemantics === 'plan-b') Object.defineProperty(this, 'sctp', {
                get () {
                    return typeof this._sctp === 'undefined' ? null : this._sctp;
                },
                enumerable: true,
                configurable: true
            });
        }
        if (sctpInDescription(arguments[0])) {
            // Check if the remote is FF.
            const isFirefox = getRemoteFirefoxVersion(arguments[0]);
            // Get the maximum message size the local peer is capable of sending
            const canSendMMS = getCanSendMaxMessageSize(isFirefox);
            // Get the maximum message size of the remote peer.
            const remoteMMS = getMaxMessageSize(arguments[0], isFirefox);
            // Determine final maximum message size
            let maxMessageSize;
            if (canSendMMS === 0 && remoteMMS === 0) maxMessageSize = Number.POSITIVE_INFINITY;
            else if (canSendMMS === 0 || remoteMMS === 0) maxMessageSize = Math.max(canSendMMS, remoteMMS);
            else maxMessageSize = Math.min(canSendMMS, remoteMMS);
            // Create a dummy RTCSctpTransport object and the 'maxMessageSize'
            // attribute.
            const sctp = {};
            Object.defineProperty(sctp, 'maxMessageSize', {
                get () {
                    return maxMessageSize;
                }
            });
            this._sctp = sctp;
        }
        return origSetRemoteDescription.apply(this, arguments);
    };
}
function shimSendThrowTypeError(window) {
    if (!(window.RTCPeerConnection && 'createDataChannel' in window.RTCPeerConnection.prototype)) return;
    // Note: Although Firefox >= 57 has a native implementation, the maximum
    //       message size can be reset for all data channels at a later stage.
    //       See: https://bugzilla.mozilla.org/show_bug.cgi?id=1426831
    function wrapDcSend(dc, pc) {
        const origDataChannelSend = dc.send;
        dc.send = function send() {
            const data = arguments[0];
            const length = data.length || data.size || data.byteLength;
            if (dc.readyState === 'open' && pc.sctp && length > pc.sctp.maxMessageSize) throw new TypeError('Message too large (can send a maximum of ' + pc.sctp.maxMessageSize + ' bytes)');
            return origDataChannelSend.apply(dc, arguments);
        };
    }
    const origCreateDataChannel = window.RTCPeerConnection.prototype.createDataChannel;
    window.RTCPeerConnection.prototype.createDataChannel = function createDataChannel() {
        const dataChannel = origCreateDataChannel.apply(this, arguments);
        wrapDcSend(dataChannel, this);
        return dataChannel;
    };
    _utils.wrapPeerConnectionEvent(window, 'datachannel', (e)=>{
        wrapDcSend(e.channel, e.target);
        return e;
    });
}
function shimConnectionState(window) {
    if (!window.RTCPeerConnection || 'connectionState' in window.RTCPeerConnection.prototype) return;
    const proto = window.RTCPeerConnection.prototype;
    Object.defineProperty(proto, 'connectionState', {
        get () {
            return ({
                completed: 'connected',
                checking: 'connecting'
            })[this.iceConnectionState] || this.iceConnectionState;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(proto, 'onconnectionstatechange', {
        get () {
            return this._onconnectionstatechange || null;
        },
        set (cb) {
            if (this._onconnectionstatechange) {
                this.removeEventListener('connectionstatechange', this._onconnectionstatechange);
                delete this._onconnectionstatechange;
            }
            if (cb) this.addEventListener('connectionstatechange', this._onconnectionstatechange = cb);
        },
        enumerable: true,
        configurable: true
    });
    [
        'setLocalDescription',
        'setRemoteDescription'
    ].forEach((method)=>{
        const origMethod = proto[method];
        proto[method] = function() {
            if (!this._connectionstatechangepoly) {
                this._connectionstatechangepoly = (e)=>{
                    const pc = e.target;
                    if (pc._lastConnectionState !== pc.connectionState) {
                        pc._lastConnectionState = pc.connectionState;
                        const newEvent = new Event('connectionstatechange', e);
                        pc.dispatchEvent(newEvent);
                    }
                    return e;
                };
                this.addEventListener('iceconnectionstatechange', this._connectionstatechangepoly);
            }
            return origMethod.apply(this, arguments);
        };
    });
}
function removeExtmapAllowMixed(window, browserDetails) {
    /* remove a=extmap-allow-mixed for webrtc.org < M71 */ if (!window.RTCPeerConnection) return;
    if (browserDetails.browser === 'chrome' && browserDetails.version >= 71) return;
    if (browserDetails.browser === 'safari' && browserDetails._safariVersion >= 13.1) return;
    const nativeSRD = window.RTCPeerConnection.prototype.setRemoteDescription;
    window.RTCPeerConnection.prototype.setRemoteDescription = function setRemoteDescription(desc) {
        if (desc && desc.sdp && desc.sdp.indexOf('\na=extmap-allow-mixed') !== -1) {
            const sdp = desc.sdp.split('\n').filter((line)=>{
                return line.trim() !== 'a=extmap-allow-mixed';
            }).join('\n');
            // Safari enforces read-only-ness of RTCSessionDescription fields.
            if (window.RTCSessionDescription && desc instanceof window.RTCSessionDescription) arguments[0] = new window.RTCSessionDescription({
                type: desc.type,
                sdp
            });
            else desc.sdp = sdp;
        }
        return nativeSRD.apply(this, arguments);
    };
}
function shimAddIceCandidateNullOrEmpty(window, browserDetails) {
    // Support for addIceCandidate(null or undefined)
    // as well as addIceCandidate({candidate: "", ...})
    // https://bugs.chromium.org/p/chromium/issues/detail?id=978582
    // Note: must be called before other polyfills which change the signature.
    if (!(window.RTCPeerConnection && window.RTCPeerConnection.prototype)) return;
    const nativeAddIceCandidate = window.RTCPeerConnection.prototype.addIceCandidate;
    if (!nativeAddIceCandidate || nativeAddIceCandidate.length === 0) return;
    window.RTCPeerConnection.prototype.addIceCandidate = function addIceCandidate() {
        if (!arguments[0]) {
            if (arguments[1]) arguments[1].apply(null);
            return Promise.resolve();
        }
        // Firefox 68+ emits and processes {candidate: "", ...}, ignore
        // in older versions.
        // Native support for ignoring exists for Chrome M77+.
        // Safari ignores as well, exact version unknown but works in the same
        // version that also ignores addIceCandidate(null).
        if ((browserDetails.browser === 'chrome' && browserDetails.version < 78 || browserDetails.browser === 'firefox' && browserDetails.version < 68 || browserDetails.browser === 'safari') && arguments[0] && arguments[0].candidate === '') return Promise.resolve();
        return nativeAddIceCandidate.apply(this, arguments);
    };
}
function shimParameterlessSetLocalDescription(window, browserDetails) {
    if (!(window.RTCPeerConnection && window.RTCPeerConnection.prototype)) return;
    const nativeSetLocalDescription = window.RTCPeerConnection.prototype.setLocalDescription;
    if (!nativeSetLocalDescription || nativeSetLocalDescription.length === 0) return;
    window.RTCPeerConnection.prototype.setLocalDescription = function setLocalDescription() {
        let desc = arguments[0] || {};
        if (typeof desc !== 'object' || desc.type && desc.sdp) return nativeSetLocalDescription.apply(this, arguments);
        // The remaining steps should technically happen when SLD comes off the
        // RTCPeerConnection's operations chain (not ahead of going on it), but
        // this is too difficult to shim. Instead, this shim only covers the
        // common case where the operations chain is empty. This is imperfect, but
        // should cover many cases. Rationale: Even if we can't reduce the glare
        // window to zero on imperfect implementations, there's value in tapping
        // into the perfect negotiation pattern that several browsers support.
        desc = {
            type: desc.type,
            sdp: desc.sdp
        };
        if (!desc.type) switch(this.signalingState){
            case 'stable':
            case 'have-local-offer':
            case 'have-remote-pranswer':
                desc.type = 'offer';
                break;
            default:
                desc.type = 'answer';
                break;
        }
        if (desc.sdp || desc.type !== 'offer' && desc.type !== 'answer') return nativeSetLocalDescription.apply(this, [
            desc
        ]);
        const func = desc.type === 'offer' ? this.createOffer : this.createAnswer;
        return func.apply(this).then((d)=>nativeSetLocalDescription.apply(this, [
                d
            ]));
    };
}

},{"sdp":"ipaHk","./utils":"130jN","@parcel/transformer-js/src/esmodule-helpers.js":"glwFn"}],"ipaHk":[function(require,module,exports,__globalThis) {
/* eslint-env node */ 'use strict';
// SDP helpers.
const SDPUtils = {};
// Generate an alphanumeric identifier for cname or mids.
// TODO: use UUIDs instead? https://gist.github.com/jed/982883
SDPUtils.generateIdentifier = function() {
    return Math.random().toString(36).substring(2, 12);
};
// The RTCP CNAME used by all peerconnections from the same JS.
SDPUtils.localCName = SDPUtils.generateIdentifier();
// Splits SDP into lines, dealing with both CRLF and LF.
SDPUtils.splitLines = function(blob) {
    return blob.trim().split('\n').map((line)=>line.trim());
};
// Splits SDP into sessionpart and mediasections. Ensures CRLF.
SDPUtils.splitSections = function(blob) {
    const parts = blob.split('\nm=');
    return parts.map((part, index)=>(index > 0 ? 'm=' + part : part).trim() + '\r\n');
};
// Returns the session description.
SDPUtils.getDescription = function(blob) {
    const sections = SDPUtils.splitSections(blob);
    return sections && sections[0];
};
// Returns the individual media sections.
SDPUtils.getMediaSections = function(blob) {
    const sections = SDPUtils.splitSections(blob);
    sections.shift();
    return sections;
};
// Returns lines that start with a certain prefix.
SDPUtils.matchPrefix = function(blob, prefix) {
    return SDPUtils.splitLines(blob).filter((line)=>line.indexOf(prefix) === 0);
};
// Parses an ICE candidate line. Sample input:
// candidate:702786350 2 udp 41819902 8.8.8.8 60769 typ relay raddr 8.8.8.8
// rport 55996"
// Input can be prefixed with a=.
SDPUtils.parseCandidate = function(line) {
    let parts;
    // Parse both variants.
    if (line.indexOf('a=candidate:') === 0) parts = line.substring(12).split(' ');
    else parts = line.substring(10).split(' ');
    const candidate = {
        foundation: parts[0],
        component: {
            1: 'rtp',
            2: 'rtcp'
        }[parts[1]] || parts[1],
        protocol: parts[2].toLowerCase(),
        priority: parseInt(parts[3], 10),
        ip: parts[4],
        address: parts[4],
        port: parseInt(parts[5], 10),
        // skip parts[6] == 'typ'
        type: parts[7]
    };
    for(let i = 8; i < parts.length; i += 2)switch(parts[i]){
        case 'raddr':
            candidate.relatedAddress = parts[i + 1];
            break;
        case 'rport':
            candidate.relatedPort = parseInt(parts[i + 1], 10);
            break;
        case 'tcptype':
            candidate.tcpType = parts[i + 1];
            break;
        case 'ufrag':
            candidate.ufrag = parts[i + 1]; // for backward compatibility.
            candidate.usernameFragment = parts[i + 1];
            break;
        default:
            if (candidate[parts[i]] === undefined) candidate[parts[i]] = parts[i + 1];
            break;
    }
    return candidate;
};
// Translates a candidate object into SDP candidate attribute.
// This does not include the a= prefix!
SDPUtils.writeCandidate = function(candidate) {
    const sdp = [];
    sdp.push(candidate.foundation);
    const component = candidate.component;
    if (component === 'rtp') sdp.push(1);
    else if (component === 'rtcp') sdp.push(2);
    else sdp.push(component);
    sdp.push(candidate.protocol.toUpperCase());
    sdp.push(candidate.priority);
    sdp.push(candidate.address || candidate.ip);
    sdp.push(candidate.port);
    const type = candidate.type;
    sdp.push('typ');
    sdp.push(type);
    if (type !== 'host' && candidate.relatedAddress && candidate.relatedPort) {
        sdp.push('raddr');
        sdp.push(candidate.relatedAddress);
        sdp.push('rport');
        sdp.push(candidate.relatedPort);
    }
    if (candidate.tcpType && candidate.protocol.toLowerCase() === 'tcp') {
        sdp.push('tcptype');
        sdp.push(candidate.tcpType);
    }
    if (candidate.usernameFragment || candidate.ufrag) {
        sdp.push('ufrag');
        sdp.push(candidate.usernameFragment || candidate.ufrag);
    }
    return 'candidate:' + sdp.join(' ');
};
// Parses an ice-options line, returns an array of option tags.
// Sample input:
// a=ice-options:foo bar
SDPUtils.parseIceOptions = function(line) {
    return line.substring(14).split(' ');
};
// Parses a rtpmap line, returns RTCRtpCoddecParameters. Sample input:
// a=rtpmap:111 opus/48000/2
SDPUtils.parseRtpMap = function(line) {
    let parts = line.substring(9).split(' ');
    const parsed = {
        payloadType: parseInt(parts.shift(), 10)
    };
    parts = parts[0].split('/');
    parsed.name = parts[0];
    parsed.clockRate = parseInt(parts[1], 10); // was: clockrate
    parsed.channels = parts.length === 3 ? parseInt(parts[2], 10) : 1;
    // legacy alias, got renamed back to channels in ORTC.
    parsed.numChannels = parsed.channels;
    return parsed;
};
// Generates a rtpmap line from RTCRtpCodecCapability or
// RTCRtpCodecParameters.
SDPUtils.writeRtpMap = function(codec) {
    let pt = codec.payloadType;
    if (codec.preferredPayloadType !== undefined) pt = codec.preferredPayloadType;
    const channels = codec.channels || codec.numChannels || 1;
    return 'a=rtpmap:' + pt + ' ' + codec.name + '/' + codec.clockRate + (channels !== 1 ? '/' + channels : '') + '\r\n';
};
// Parses a extmap line (headerextension from RFC 5285). Sample input:
// a=extmap:2 urn:ietf:params:rtp-hdrext:toffset
// a=extmap:2/sendonly urn:ietf:params:rtp-hdrext:toffset
SDPUtils.parseExtmap = function(line) {
    const parts = line.substring(9).split(' ');
    return {
        id: parseInt(parts[0], 10),
        direction: parts[0].indexOf('/') > 0 ? parts[0].split('/')[1] : 'sendrecv',
        uri: parts[1],
        attributes: parts.slice(2).join(' ')
    };
};
// Generates an extmap line from RTCRtpHeaderExtensionParameters or
// RTCRtpHeaderExtension.
SDPUtils.writeExtmap = function(headerExtension) {
    return 'a=extmap:' + (headerExtension.id || headerExtension.preferredId) + (headerExtension.direction && headerExtension.direction !== 'sendrecv' ? '/' + headerExtension.direction : '') + ' ' + headerExtension.uri + (headerExtension.attributes ? ' ' + headerExtension.attributes : '') + '\r\n';
};
// Parses a fmtp line, returns dictionary. Sample input:
// a=fmtp:96 vbr=on;cng=on
// Also deals with vbr=on; cng=on
// Non-key-value such as telephone-events `0-15` get parsed as
// {`0-15`:undefined}
SDPUtils.parseFmtp = function(line) {
    const parsed = {};
    let kv;
    const parts = line.substring(line.indexOf(' ') + 1).split(';');
    for(let j = 0; j < parts.length; j++){
        kv = parts[j].trim().split('=');
        parsed[kv[0].trim()] = kv[1];
    }
    return parsed;
};
// Generates a fmtp line from RTCRtpCodecCapability or RTCRtpCodecParameters.
SDPUtils.writeFmtp = function(codec) {
    let line = '';
    let pt = codec.payloadType;
    if (codec.preferredPayloadType !== undefined) pt = codec.preferredPayloadType;
    if (codec.parameters && Object.keys(codec.parameters).length) {
        const params = [];
        Object.keys(codec.parameters).forEach((param)=>{
            if (codec.parameters[param] !== undefined) params.push(param + '=' + codec.parameters[param]);
            else params.push(param);
        });
        line += 'a=fmtp:' + pt + ' ' + params.join(';') + '\r\n';
    }
    return line;
};
// Parses a rtcp-fb line, returns RTCPRtcpFeedback object. Sample input:
// a=rtcp-fb:98 nack rpsi
SDPUtils.parseRtcpFb = function(line) {
    const parts = line.substring(line.indexOf(' ') + 1).split(' ');
    return {
        type: parts.shift(),
        parameter: parts.join(' ')
    };
};
// Generate a=rtcp-fb lines from RTCRtpCodecCapability or RTCRtpCodecParameters.
SDPUtils.writeRtcpFb = function(codec) {
    let lines = '';
    let pt = codec.payloadType;
    if (codec.preferredPayloadType !== undefined) pt = codec.preferredPayloadType;
    if (codec.rtcpFeedback && codec.rtcpFeedback.length) // FIXME: special handling for trr-int?
    codec.rtcpFeedback.forEach((fb)=>{
        lines += 'a=rtcp-fb:' + pt + ' ' + fb.type + (fb.parameter && fb.parameter.length ? ' ' + fb.parameter : '') + '\r\n';
    });
    return lines;
};
// Parses a RFC 5576 ssrc media attribute. Sample input:
// a=ssrc:3735928559 cname:something
SDPUtils.parseSsrcMedia = function(line) {
    const sp = line.indexOf(' ');
    const parts = {
        ssrc: parseInt(line.substring(7, sp), 10)
    };
    const colon = line.indexOf(':', sp);
    if (colon > -1) {
        parts.attribute = line.substring(sp + 1, colon);
        parts.value = line.substring(colon + 1);
    } else parts.attribute = line.substring(sp + 1);
    return parts;
};
// Parse a ssrc-group line (see RFC 5576). Sample input:
// a=ssrc-group:semantics 12 34
SDPUtils.parseSsrcGroup = function(line) {
    const parts = line.substring(13).split(' ');
    return {
        semantics: parts.shift(),
        ssrcs: parts.map((ssrc)=>parseInt(ssrc, 10))
    };
};
// Extracts the MID (RFC 5888) from a media section.
// Returns the MID or undefined if no mid line was found.
SDPUtils.getMid = function(mediaSection) {
    const mid = SDPUtils.matchPrefix(mediaSection, 'a=mid:')[0];
    if (mid) return mid.substring(6);
};
// Parses a fingerprint line for DTLS-SRTP.
SDPUtils.parseFingerprint = function(line) {
    const parts = line.substring(14).split(' ');
    return {
        algorithm: parts[0].toLowerCase(),
        value: parts[1].toUpperCase()
    };
};
// Extracts DTLS parameters from SDP media section or sessionpart.
// FIXME: for consistency with other functions this should only
//   get the fingerprint line as input. See also getIceParameters.
SDPUtils.getDtlsParameters = function(mediaSection, sessionpart) {
    const lines = SDPUtils.matchPrefix(mediaSection + sessionpart, 'a=fingerprint:');
    // Note: a=setup line is ignored since we use the 'auto' role in Edge.
    return {
        role: 'auto',
        fingerprints: lines.map(SDPUtils.parseFingerprint)
    };
};
// Serializes DTLS parameters to SDP.
SDPUtils.writeDtlsParameters = function(params, setupType) {
    let sdp = 'a=setup:' + setupType + '\r\n';
    params.fingerprints.forEach((fp)=>{
        sdp += 'a=fingerprint:' + fp.algorithm + ' ' + fp.value + '\r\n';
    });
    return sdp;
};
// Parses a=crypto lines into
//   https://rawgit.com/aboba/edgertc/master/msortc-rs4.html#dictionary-rtcsrtpsdesparameters-members
SDPUtils.parseCryptoLine = function(line) {
    const parts = line.substring(9).split(' ');
    return {
        tag: parseInt(parts[0], 10),
        cryptoSuite: parts[1],
        keyParams: parts[2],
        sessionParams: parts.slice(3)
    };
};
SDPUtils.writeCryptoLine = function(parameters) {
    return 'a=crypto:' + parameters.tag + ' ' + parameters.cryptoSuite + ' ' + (typeof parameters.keyParams === 'object' ? SDPUtils.writeCryptoKeyParams(parameters.keyParams) : parameters.keyParams) + (parameters.sessionParams ? ' ' + parameters.sessionParams.join(' ') : '') + '\r\n';
};
// Parses the crypto key parameters into
//   https://rawgit.com/aboba/edgertc/master/msortc-rs4.html#rtcsrtpkeyparam*
SDPUtils.parseCryptoKeyParams = function(keyParams) {
    if (keyParams.indexOf('inline:') !== 0) return null;
    const parts = keyParams.substring(7).split('|');
    return {
        keyMethod: 'inline',
        keySalt: parts[0],
        lifeTime: parts[1],
        mkiValue: parts[2] ? parts[2].split(':')[0] : undefined,
        mkiLength: parts[2] ? parts[2].split(':')[1] : undefined
    };
};
SDPUtils.writeCryptoKeyParams = function(keyParams) {
    return keyParams.keyMethod + ':' + keyParams.keySalt + (keyParams.lifeTime ? '|' + keyParams.lifeTime : '') + (keyParams.mkiValue && keyParams.mkiLength ? '|' + keyParams.mkiValue + ':' + keyParams.mkiLength : '');
};
// Extracts all SDES parameters.
SDPUtils.getCryptoParameters = function(mediaSection, sessionpart) {
    const lines = SDPUtils.matchPrefix(mediaSection + sessionpart, 'a=crypto:');
    return lines.map(SDPUtils.parseCryptoLine);
};
// Parses ICE information from SDP media section or sessionpart.
// FIXME: for consistency with other functions this should only
//   get the ice-ufrag and ice-pwd lines as input.
SDPUtils.getIceParameters = function(mediaSection, sessionpart) {
    const ufrag = SDPUtils.matchPrefix(mediaSection + sessionpart, 'a=ice-ufrag:')[0];
    const pwd = SDPUtils.matchPrefix(mediaSection + sessionpart, 'a=ice-pwd:')[0];
    if (!(ufrag && pwd)) return null;
    return {
        usernameFragment: ufrag.substring(12),
        password: pwd.substring(10)
    };
};
// Serializes ICE parameters to SDP.
SDPUtils.writeIceParameters = function(params) {
    let sdp = 'a=ice-ufrag:' + params.usernameFragment + '\r\n' + 'a=ice-pwd:' + params.password + '\r\n';
    if (params.iceLite) sdp += 'a=ice-lite\r\n';
    return sdp;
};
// Parses the SDP media section and returns RTCRtpParameters.
SDPUtils.parseRtpParameters = function(mediaSection) {
    const description = {
        codecs: [],
        headerExtensions: [],
        fecMechanisms: [],
        rtcp: []
    };
    const lines = SDPUtils.splitLines(mediaSection);
    const mline = lines[0].split(' ');
    description.profile = mline[2];
    for(let i = 3; i < mline.length; i++){
        const pt = mline[i];
        const rtpmapline = SDPUtils.matchPrefix(mediaSection, 'a=rtpmap:' + pt + ' ')[0];
        if (rtpmapline) {
            const codec = SDPUtils.parseRtpMap(rtpmapline);
            const fmtps = SDPUtils.matchPrefix(mediaSection, 'a=fmtp:' + pt + ' ');
            // Only the first a=fmtp:<pt> is considered.
            codec.parameters = fmtps.length ? SDPUtils.parseFmtp(fmtps[0]) : {};
            codec.rtcpFeedback = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-fb:' + pt + ' ').map(SDPUtils.parseRtcpFb);
            description.codecs.push(codec);
            // parse FEC mechanisms from rtpmap lines.
            switch(codec.name.toUpperCase()){
                case 'RED':
                case 'ULPFEC':
                    description.fecMechanisms.push(codec.name.toUpperCase());
                    break;
                default:
                    break;
            }
        }
    }
    SDPUtils.matchPrefix(mediaSection, 'a=extmap:').forEach((line)=>{
        description.headerExtensions.push(SDPUtils.parseExtmap(line));
    });
    const wildcardRtcpFb = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-fb:* ').map(SDPUtils.parseRtcpFb);
    description.codecs.forEach((codec)=>{
        wildcardRtcpFb.forEach((fb)=>{
            const duplicate = codec.rtcpFeedback.find((existingFeedback)=>{
                return existingFeedback.type === fb.type && existingFeedback.parameter === fb.parameter;
            });
            if (!duplicate) codec.rtcpFeedback.push(fb);
        });
    });
    // FIXME: parse rtcp.
    return description;
};
// Generates parts of the SDP media section describing the capabilities /
// parameters.
SDPUtils.writeRtpDescription = function(kind, caps) {
    let sdp = '';
    // Build the mline.
    sdp += 'm=' + kind + ' ';
    sdp += caps.codecs.length > 0 ? '9' : '0'; // reject if no codecs.
    sdp += ' ' + (caps.profile || 'UDP/TLS/RTP/SAVPF') + ' ';
    sdp += caps.codecs.map((codec)=>{
        if (codec.preferredPayloadType !== undefined) return codec.preferredPayloadType;
        return codec.payloadType;
    }).join(' ') + '\r\n';
    sdp += 'c=IN IP4 0.0.0.0\r\n';
    sdp += 'a=rtcp:9 IN IP4 0.0.0.0\r\n';
    // Add a=rtpmap lines for each codec. Also fmtp and rtcp-fb.
    caps.codecs.forEach((codec)=>{
        sdp += SDPUtils.writeRtpMap(codec);
        sdp += SDPUtils.writeFmtp(codec);
        sdp += SDPUtils.writeRtcpFb(codec);
    });
    let maxptime = 0;
    caps.codecs.forEach((codec)=>{
        if (codec.maxptime > maxptime) maxptime = codec.maxptime;
    });
    if (maxptime > 0) sdp += 'a=maxptime:' + maxptime + '\r\n';
    if (caps.headerExtensions) caps.headerExtensions.forEach((extension)=>{
        sdp += SDPUtils.writeExtmap(extension);
    });
    // FIXME: write fecMechanisms.
    return sdp;
};
// Parses the SDP media section and returns an array of
// RTCRtpEncodingParameters.
SDPUtils.parseRtpEncodingParameters = function(mediaSection) {
    const encodingParameters = [];
    const description = SDPUtils.parseRtpParameters(mediaSection);
    const hasRed = description.fecMechanisms.indexOf('RED') !== -1;
    const hasUlpfec = description.fecMechanisms.indexOf('ULPFEC') !== -1;
    // filter a=ssrc:... cname:, ignore PlanB-msid
    const ssrcs = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:').map((line)=>SDPUtils.parseSsrcMedia(line)).filter((parts)=>parts.attribute === 'cname');
    const primarySsrc = ssrcs.length > 0 && ssrcs[0].ssrc;
    let secondarySsrc;
    const flows = SDPUtils.matchPrefix(mediaSection, 'a=ssrc-group:FID').map((line)=>{
        const parts = line.substring(17).split(' ');
        return parts.map((part)=>parseInt(part, 10));
    });
    if (flows.length > 0 && flows[0].length > 1 && flows[0][0] === primarySsrc) secondarySsrc = flows[0][1];
    description.codecs.forEach((codec)=>{
        if (codec.name.toUpperCase() === 'RTX' && codec.parameters.apt) {
            let encParam = {
                ssrc: primarySsrc,
                codecPayloadType: parseInt(codec.parameters.apt, 10)
            };
            if (primarySsrc && secondarySsrc) encParam.rtx = {
                ssrc: secondarySsrc
            };
            encodingParameters.push(encParam);
            if (hasRed) {
                encParam = JSON.parse(JSON.stringify(encParam));
                encParam.fec = {
                    ssrc: primarySsrc,
                    mechanism: hasUlpfec ? 'red+ulpfec' : 'red'
                };
                encodingParameters.push(encParam);
            }
        }
    });
    if (encodingParameters.length === 0 && primarySsrc) encodingParameters.push({
        ssrc: primarySsrc
    });
    // we support both b=AS and b=TIAS but interpret AS as TIAS.
    let bandwidth = SDPUtils.matchPrefix(mediaSection, 'b=');
    if (bandwidth.length) {
        if (bandwidth[0].indexOf('b=TIAS:') === 0) bandwidth = parseInt(bandwidth[0].substring(7), 10);
        else if (bandwidth[0].indexOf('b=AS:') === 0) // use formula from JSEP to convert b=AS to TIAS value.
        bandwidth = parseInt(bandwidth[0].substring(5), 10) * 950 - 16000;
        else bandwidth = undefined;
        encodingParameters.forEach((params)=>{
            params.maxBitrate = bandwidth;
        });
    }
    return encodingParameters;
};
// parses http://draft.ortc.org/#rtcrtcpparameters*
SDPUtils.parseRtcpParameters = function(mediaSection) {
    const rtcpParameters = {};
    // Gets the first SSRC. Note that with RTX there might be multiple
    // SSRCs.
    const remoteSsrc = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:').map((line)=>SDPUtils.parseSsrcMedia(line)).filter((obj)=>obj.attribute === 'cname')[0];
    if (remoteSsrc) {
        rtcpParameters.cname = remoteSsrc.value;
        rtcpParameters.ssrc = remoteSsrc.ssrc;
    }
    // Edge uses the compound attribute instead of reducedSize
    // compound is !reducedSize
    const rsize = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-rsize');
    rtcpParameters.reducedSize = rsize.length > 0;
    rtcpParameters.compound = rsize.length === 0;
    // parses the rtcp-mux attrіbute.
    // Note that Edge does not support unmuxed RTCP.
    const mux = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-mux');
    rtcpParameters.mux = mux.length > 0;
    return rtcpParameters;
};
SDPUtils.writeRtcpParameters = function(rtcpParameters) {
    let sdp = '';
    if (rtcpParameters.reducedSize) sdp += 'a=rtcp-rsize\r\n';
    if (rtcpParameters.mux) sdp += 'a=rtcp-mux\r\n';
    if (rtcpParameters.ssrc !== undefined && rtcpParameters.cname) sdp += 'a=ssrc:' + rtcpParameters.ssrc + ' cname:' + rtcpParameters.cname + '\r\n';
    return sdp;
};
// parses either a=msid: or a=ssrc:... msid lines and returns
// the id of the MediaStream and MediaStreamTrack.
SDPUtils.parseMsid = function(mediaSection) {
    let parts;
    const spec = SDPUtils.matchPrefix(mediaSection, 'a=msid:');
    if (spec.length === 1) {
        parts = spec[0].substring(7).split(' ');
        return {
            stream: parts[0],
            track: parts[1]
        };
    }
    const planB = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:').map((line)=>SDPUtils.parseSsrcMedia(line)).filter((msidParts)=>msidParts.attribute === 'msid');
    if (planB.length > 0) {
        parts = planB[0].value.split(' ');
        return {
            stream: parts[0],
            track: parts[1]
        };
    }
};
// SCTP
// parses draft-ietf-mmusic-sctp-sdp-26 first and falls back
// to draft-ietf-mmusic-sctp-sdp-05
SDPUtils.parseSctpDescription = function(mediaSection) {
    const mline = SDPUtils.parseMLine(mediaSection);
    const maxSizeLine = SDPUtils.matchPrefix(mediaSection, 'a=max-message-size:');
    let maxMessageSize;
    if (maxSizeLine.length > 0) maxMessageSize = parseInt(maxSizeLine[0].substring(19), 10);
    if (isNaN(maxMessageSize)) maxMessageSize = 65536;
    const sctpPort = SDPUtils.matchPrefix(mediaSection, 'a=sctp-port:');
    if (sctpPort.length > 0) return {
        port: parseInt(sctpPort[0].substring(12), 10),
        protocol: mline.fmt,
        maxMessageSize
    };
    const sctpMapLines = SDPUtils.matchPrefix(mediaSection, 'a=sctpmap:');
    if (sctpMapLines.length > 0) {
        const parts = sctpMapLines[0].substring(10).split(' ');
        return {
            port: parseInt(parts[0], 10),
            protocol: parts[1],
            maxMessageSize
        };
    }
};
// SCTP
// outputs the draft-ietf-mmusic-sctp-sdp-26 version that all browsers
// support by now receiving in this format, unless we originally parsed
// as the draft-ietf-mmusic-sctp-sdp-05 format (indicated by the m-line
// protocol of DTLS/SCTP -- without UDP/ or TCP/)
SDPUtils.writeSctpDescription = function(media, sctp) {
    let output = [];
    if (media.protocol !== 'DTLS/SCTP') output = [
        'm=' + media.kind + ' 9 ' + media.protocol + ' ' + sctp.protocol + '\r\n',
        'c=IN IP4 0.0.0.0\r\n',
        'a=sctp-port:' + sctp.port + '\r\n'
    ];
    else output = [
        'm=' + media.kind + ' 9 ' + media.protocol + ' ' + sctp.port + '\r\n',
        'c=IN IP4 0.0.0.0\r\n',
        'a=sctpmap:' + sctp.port + ' ' + sctp.protocol + ' 65535\r\n'
    ];
    if (sctp.maxMessageSize !== undefined) output.push('a=max-message-size:' + sctp.maxMessageSize + '\r\n');
    return output.join('');
};
// Generate a session ID for SDP.
// https://tools.ietf.org/html/draft-ietf-rtcweb-jsep-20#section-5.2.1
// recommends using a cryptographically random +ve 64-bit value
// but right now this should be acceptable and within the right range
SDPUtils.generateSessionId = function() {
    return Math.random().toString().substr(2, 22);
};
// Write boiler plate for start of SDP
// sessId argument is optional - if not supplied it will
// be generated randomly
// sessVersion is optional and defaults to 2
// sessUser is optional and defaults to 'thisisadapterortc'
SDPUtils.writeSessionBoilerplate = function(sessId, sessVer, sessUser) {
    let sessionId;
    const version = sessVer !== undefined ? sessVer : 2;
    if (sessId) sessionId = sessId;
    else sessionId = SDPUtils.generateSessionId();
    const user = sessUser || 'thisisadapterortc';
    // FIXME: sess-id should be an NTP timestamp.
    return "v=0\r\no=" + user + ' ' + sessionId + ' ' + version + ' IN IP4 127.0.0.1\r\n' + 's=-\r\n' + 't=0 0\r\n';
};
// Gets the direction from the mediaSection or the sessionpart.
SDPUtils.getDirection = function(mediaSection, sessionpart) {
    // Look for sendrecv, sendonly, recvonly, inactive, default to sendrecv.
    const lines = SDPUtils.splitLines(mediaSection);
    for(let i = 0; i < lines.length; i++)switch(lines[i]){
        case 'a=sendrecv':
        case 'a=sendonly':
        case 'a=recvonly':
        case 'a=inactive':
            return lines[i].substring(2);
        default:
    }
    if (sessionpart) return SDPUtils.getDirection(sessionpart);
    return 'sendrecv';
};
SDPUtils.getKind = function(mediaSection) {
    const lines = SDPUtils.splitLines(mediaSection);
    const mline = lines[0].split(' ');
    return mline[0].substring(2);
};
SDPUtils.isRejected = function(mediaSection) {
    return mediaSection.split(' ', 2)[1] === '0';
};
SDPUtils.parseMLine = function(mediaSection) {
    const lines = SDPUtils.splitLines(mediaSection);
    const parts = lines[0].substring(2).split(' ');
    return {
        kind: parts[0],
        port: parseInt(parts[1], 10),
        protocol: parts[2],
        fmt: parts.slice(3).join(' ')
    };
};
SDPUtils.parseOLine = function(mediaSection) {
    const line = SDPUtils.matchPrefix(mediaSection, 'o=')[0];
    const parts = line.substring(2).split(' ');
    return {
        username: parts[0],
        sessionId: parts[1],
        sessionVersion: parseInt(parts[2], 10),
        netType: parts[3],
        addressType: parts[4],
        address: parts[5]
    };
};
// a very naive interpretation of a valid SDP.
SDPUtils.isValidSDP = function(blob) {
    if (typeof blob !== 'string' || blob.length === 0) return false;
    const lines = SDPUtils.splitLines(blob);
    for(let i = 0; i < lines.length; i++){
        if (lines[i].length < 2 || lines[i].charAt(1) !== '=') return false;
    // TODO: check the modifier a bit more.
    }
    return true;
};
module.exports = SDPUtils;

},{}],"bLuyj":[function(require,module,exports,__globalThis) {
/*!
 * EventEmitter2
 * https://github.com/hij1nx/EventEmitter2
 *
 * Copyright (c) 2013 hij1nx
 * Licensed under the MIT license.
 */ var process = require("f0c43874c9d914b6");
!function(undefined) {
    var hasOwnProperty = Object.hasOwnProperty;
    var isArray = Array.isArray ? Array.isArray : function _isArray(obj) {
        return Object.prototype.toString.call(obj) === "[object Array]";
    };
    var defaultMaxListeners = 10;
    var nextTickSupported = false;
    var symbolsSupported = typeof Symbol === 'function';
    var reflectSupported = typeof Reflect === 'object';
    var setImmediateSupported = typeof setImmediate === 'function';
    var _setImmediate = setImmediateSupported ? setImmediate : setTimeout;
    var ownKeys = symbolsSupported ? reflectSupported && typeof Reflect.ownKeys === 'function' ? Reflect.ownKeys : function(obj) {
        var arr = Object.getOwnPropertyNames(obj);
        arr.push.apply(arr, Object.getOwnPropertySymbols(obj));
        return arr;
    } : Object.keys;
    function init() {
        this._events = {};
        if (this._conf) configure.call(this, this._conf);
    }
    function configure(conf) {
        if (conf) {
            this._conf = conf;
            conf.delimiter && (this.delimiter = conf.delimiter);
            if (conf.maxListeners !== undefined) this._maxListeners = conf.maxListeners;
            conf.wildcard && (this.wildcard = conf.wildcard);
            conf.newListener && (this._newListener = conf.newListener);
            conf.removeListener && (this._removeListener = conf.removeListener);
            conf.verboseMemoryLeak && (this.verboseMemoryLeak = conf.verboseMemoryLeak);
            conf.ignoreErrors && (this.ignoreErrors = conf.ignoreErrors);
            if (this.wildcard) this.listenerTree = {};
        }
    }
    function logPossibleMemoryLeak(count, eventName) {
        var errorMsg = "(node) warning: possible EventEmitter memory leak detected. " + count + ' listeners added. ' + 'Use emitter.setMaxListeners() to increase limit.';
        if (this.verboseMemoryLeak) errorMsg += ' Event name: ' + eventName + '.';
        var e;
        console.error(errorMsg);
        if (console.trace) console.trace();
    }
    var toArray = function(a, b, c) {
        var n = arguments.length;
        switch(n){
            case 0:
                return [];
            case 1:
                return [
                    a
                ];
            case 2:
                return [
                    a,
                    b
                ];
            case 3:
                return [
                    a,
                    b,
                    c
                ];
            default:
                var arr = new Array(n);
                while(n--)arr[n] = arguments[n];
                return arr;
        }
    };
    function toObject(keys, values) {
        var obj = {};
        var key;
        var len = keys.length;
        var valuesCount = values ? values.length : 0;
        for(var i = 0; i < len; i++){
            key = keys[i];
            obj[key] = i < valuesCount ? values[i] : undefined;
        }
        return obj;
    }
    function TargetObserver(emitter, target, options) {
        this._emitter = emitter;
        this._target = target;
        this._listeners = {};
        this._listenersCount = 0;
        var on, off;
        if (options.on || options.off) {
            on = options.on;
            off = options.off;
        }
        if (target.addEventListener) {
            on = target.addEventListener;
            off = target.removeEventListener;
        } else if (target.addListener) {
            on = target.addListener;
            off = target.removeListener;
        } else if (target.on) {
            on = target.on;
            off = target.off;
        }
        if (!on && !off) throw Error('target does not implement any known event API');
        if (typeof on !== 'function') throw TypeError('on method must be a function');
        if (typeof off !== 'function') throw TypeError('off method must be a function');
        this._on = on;
        this._off = off;
        var _observers = emitter._observers;
        if (_observers) _observers.push(this);
        else emitter._observers = [
            this
        ];
    }
    Object.assign(TargetObserver.prototype, {
        subscribe: function(event, localEvent, reducer) {
            var observer = this;
            var target = this._target;
            var emitter = this._emitter;
            var listeners = this._listeners;
            var handler = function() {
                var args = toArray.apply(null, arguments);
                var eventObj = {
                    data: args,
                    name: localEvent,
                    original: event
                };
                if (reducer) {
                    var result = reducer.call(target, eventObj);
                    if (result !== false) emitter.emit.apply(emitter, [
                        eventObj.name
                    ].concat(args));
                    return;
                }
                emitter.emit.apply(emitter, [
                    localEvent
                ].concat(args));
            };
            if (listeners[event]) throw Error('Event \'' + event + '\' is already listening');
            this._listenersCount++;
            if (emitter._newListener && emitter._removeListener && !observer._onNewListener) {
                this._onNewListener = function(_event) {
                    if (_event === localEvent && listeners[event] === null) {
                        listeners[event] = handler;
                        observer._on.call(target, event, handler);
                    }
                };
                emitter.on('newListener', this._onNewListener);
                this._onRemoveListener = function(_event) {
                    if (_event === localEvent && !emitter.hasListeners(_event) && listeners[event]) {
                        listeners[event] = null;
                        observer._off.call(target, event, handler);
                    }
                };
                listeners[event] = null;
                emitter.on('removeListener', this._onRemoveListener);
            } else {
                listeners[event] = handler;
                observer._on.call(target, event, handler);
            }
        },
        unsubscribe: function(event) {
            var observer = this;
            var listeners = this._listeners;
            var emitter = this._emitter;
            var handler;
            var events;
            var off = this._off;
            var target = this._target;
            var i;
            if (event && typeof event !== 'string') throw TypeError('event must be a string');
            function clearRefs() {
                if (observer._onNewListener) {
                    emitter.off('newListener', observer._onNewListener);
                    emitter.off('removeListener', observer._onRemoveListener);
                    observer._onNewListener = null;
                    observer._onRemoveListener = null;
                }
                var index = findTargetIndex.call(emitter, observer);
                emitter._observers.splice(index, 1);
            }
            if (event) {
                handler = listeners[event];
                if (!handler) return;
                off.call(target, event, handler);
                delete listeners[event];
                if (!--this._listenersCount) clearRefs();
            } else {
                events = ownKeys(listeners);
                i = events.length;
                while(i-- > 0){
                    event = events[i];
                    off.call(target, event, listeners[event]);
                }
                this._listeners = {};
                this._listenersCount = 0;
                clearRefs();
            }
        }
    });
    function resolveOptions(options, schema, reducers, allowUnknown) {
        var computedOptions = Object.assign({}, schema);
        if (!options) return computedOptions;
        if (typeof options !== 'object') throw TypeError('options must be an object');
        var keys = Object.keys(options);
        var length = keys.length;
        var option, value;
        var reducer;
        function reject(reason) {
            throw Error('Invalid "' + option + '" option value' + (reason ? '. Reason: ' + reason : ''));
        }
        for(var i = 0; i < length; i++){
            option = keys[i];
            if (!allowUnknown && !hasOwnProperty.call(schema, option)) throw Error('Unknown "' + option + '" option');
            value = options[option];
            if (value !== undefined) {
                reducer = reducers[option];
                computedOptions[option] = reducer ? reducer(value, reject) : value;
            }
        }
        return computedOptions;
    }
    function constructorReducer(value, reject) {
        if (typeof value !== 'function' || !value.hasOwnProperty('prototype')) reject('value must be a constructor');
        return value;
    }
    function makeTypeReducer(types) {
        var message = 'value must be type of ' + types.join('|');
        var len = types.length;
        var firstType = types[0];
        var secondType = types[1];
        if (len === 1) return function(v, reject) {
            if (typeof v === firstType) return v;
            reject(message);
        };
        if (len === 2) return function(v, reject) {
            var kind = typeof v;
            if (kind === firstType || kind === secondType) return v;
            reject(message);
        };
        return function(v, reject) {
            var kind = typeof v;
            var i = len;
            while(i-- > 0){
                if (kind === types[i]) return v;
            }
            reject(message);
        };
    }
    var functionReducer = makeTypeReducer([
        'function'
    ]);
    var objectFunctionReducer = makeTypeReducer([
        'object',
        'function'
    ]);
    function makeCancelablePromise(Promise1, executor, options) {
        var isCancelable;
        var callbacks;
        var timer = 0;
        var subscriptionClosed;
        var promise = new Promise1(function(resolve, reject, onCancel) {
            options = resolveOptions(options, {
                timeout: 0,
                overload: false
            }, {
                timeout: function(value, reject) {
                    value *= 1;
                    if (typeof value !== 'number' || value < 0 || !Number.isFinite(value)) reject('timeout must be a positive number');
                    return value;
                }
            });
            isCancelable = !options.overload && typeof Promise1.prototype.cancel === 'function' && typeof onCancel === 'function';
            function cleanup() {
                if (callbacks) callbacks = null;
                if (timer) {
                    clearTimeout(timer);
                    timer = 0;
                }
            }
            var _resolve = function(value) {
                cleanup();
                resolve(value);
            };
            var _reject = function(err) {
                cleanup();
                reject(err);
            };
            if (isCancelable) executor(_resolve, _reject, onCancel);
            else {
                callbacks = [
                    function(reason) {
                        _reject(reason || Error('canceled'));
                    }
                ];
                executor(_resolve, _reject, function(cb) {
                    if (subscriptionClosed) throw Error('Unable to subscribe on cancel event asynchronously');
                    if (typeof cb !== 'function') throw TypeError('onCancel callback must be a function');
                    callbacks.push(cb);
                });
                subscriptionClosed = true;
            }
            if (options.timeout > 0) timer = setTimeout(function() {
                var reason = Error('timeout');
                reason.code = 'ETIMEDOUT';
                timer = 0;
                promise.cancel(reason);
                reject(reason);
            }, options.timeout);
        });
        if (!isCancelable) promise.cancel = function(reason) {
            if (!callbacks) return;
            var length = callbacks.length;
            for(var i = 1; i < length; i++)callbacks[i](reason);
            // internal callback to reject the promise
            callbacks[0](reason);
            callbacks = null;
        };
        return promise;
    }
    function findTargetIndex(observer) {
        var observers = this._observers;
        if (!observers) return -1;
        var len = observers.length;
        for(var i = 0; i < len; i++){
            if (observers[i]._target === observer) return i;
        }
        return -1;
    }
    // Attention, function return type now is array, always !
    // It has zero elements if no any matches found and one or more
    // elements (leafs) if there are matches
    //
    function searchListenerTree(handlers, type, tree, i, typeLength) {
        if (!tree) return null;
        if (i === 0) {
            var kind = typeof type;
            if (kind === 'string') {
                var ns, n, l = 0, j = 0, delimiter = this.delimiter, dl = delimiter.length;
                if ((n = type.indexOf(delimiter)) !== -1) {
                    ns = new Array(5);
                    do {
                        ns[l++] = type.slice(j, n);
                        j = n + dl;
                    }while ((n = type.indexOf(delimiter, j)) !== -1);
                    ns[l++] = type.slice(j);
                    type = ns;
                    typeLength = l;
                } else {
                    type = [
                        type
                    ];
                    typeLength = 1;
                }
            } else if (kind === 'object') typeLength = type.length;
            else {
                type = [
                    type
                ];
                typeLength = 1;
            }
        }
        var listeners = null, branch, xTree, xxTree, isolatedBranch, endReached, currentType = type[i], nextType = type[i + 1], branches, _listeners;
        if (i === typeLength) //
        // If at the end of the event(s) list and the tree has listeners
        // invoke those listeners.
        //
        {
            if (tree._listeners) {
                if (typeof tree._listeners === 'function') {
                    handlers && handlers.push(tree._listeners);
                    listeners = [
                        tree
                    ];
                } else {
                    handlers && handlers.push.apply(handlers, tree._listeners);
                    listeners = [
                        tree
                    ];
                }
            }
        } else {
            if (currentType === '*') {
                //
                // If the event emitted is '*' at this part
                // or there is a concrete match at this patch
                //
                branches = ownKeys(tree);
                n = branches.length;
                while(n-- > 0){
                    branch = branches[n];
                    if (branch !== '_listeners') {
                        _listeners = searchListenerTree(handlers, type, tree[branch], i + 1, typeLength);
                        if (_listeners) {
                            if (listeners) listeners.push.apply(listeners, _listeners);
                            else listeners = _listeners;
                        }
                    }
                }
                return listeners;
            } else if (currentType === '**') {
                endReached = i + 1 === typeLength || i + 2 === typeLength && nextType === '*';
                if (endReached && tree._listeners) // The next element has a _listeners, add it to the handlers.
                listeners = searchListenerTree(handlers, type, tree, typeLength, typeLength);
                branches = ownKeys(tree);
                n = branches.length;
                while(n-- > 0){
                    branch = branches[n];
                    if (branch !== '_listeners') {
                        if (branch === '*' || branch === '**') {
                            if (tree[branch]._listeners && !endReached) {
                                _listeners = searchListenerTree(handlers, type, tree[branch], typeLength, typeLength);
                                if (_listeners) {
                                    if (listeners) listeners.push.apply(listeners, _listeners);
                                    else listeners = _listeners;
                                }
                            }
                            _listeners = searchListenerTree(handlers, type, tree[branch], i, typeLength);
                        } else if (branch === nextType) _listeners = searchListenerTree(handlers, type, tree[branch], i + 2, typeLength);
                        else // No match on this one, shift into the tree but not in the type array.
                        _listeners = searchListenerTree(handlers, type, tree[branch], i, typeLength);
                        if (_listeners) {
                            if (listeners) listeners.push.apply(listeners, _listeners);
                            else listeners = _listeners;
                        }
                    }
                }
                return listeners;
            } else if (tree[currentType]) listeners = searchListenerTree(handlers, type, tree[currentType], i + 1, typeLength);
        }
        xTree = tree['*'];
        if (xTree) //
        // If the listener tree will allow any match for this part,
        // then recursively explore all branches of the tree
        //
        searchListenerTree(handlers, type, xTree, i + 1, typeLength);
        xxTree = tree['**'];
        if (xxTree) {
            if (i < typeLength) {
                if (xxTree._listeners) // If we have a listener on a '**', it will catch all, so add its handler.
                searchListenerTree(handlers, type, xxTree, typeLength, typeLength);
                // Build arrays of matching next branches and others.
                branches = ownKeys(xxTree);
                n = branches.length;
                while(n-- > 0){
                    branch = branches[n];
                    if (branch !== '_listeners') {
                        if (branch === nextType) // We know the next element will match, so jump twice.
                        searchListenerTree(handlers, type, xxTree[branch], i + 2, typeLength);
                        else if (branch === currentType) // Current node matches, move into the tree.
                        searchListenerTree(handlers, type, xxTree[branch], i + 1, typeLength);
                        else {
                            isolatedBranch = {};
                            isolatedBranch[branch] = xxTree[branch];
                            searchListenerTree(handlers, type, {
                                '**': isolatedBranch
                            }, i + 1, typeLength);
                        }
                    }
                }
            } else if (xxTree._listeners) // We have reached the end and still on a '**'
            searchListenerTree(handlers, type, xxTree, typeLength, typeLength);
            else if (xxTree['*'] && xxTree['*']._listeners) searchListenerTree(handlers, type, xxTree['*'], typeLength, typeLength);
        }
        return listeners;
    }
    function growListenerTree(type, listener, prepend) {
        var len = 0, j = 0, i, delimiter = this.delimiter, dl = delimiter.length, ns;
        if (typeof type === 'string') {
            if ((i = type.indexOf(delimiter)) !== -1) {
                ns = new Array(5);
                do {
                    ns[len++] = type.slice(j, i);
                    j = i + dl;
                }while ((i = type.indexOf(delimiter, j)) !== -1);
                ns[len++] = type.slice(j);
            } else {
                ns = [
                    type
                ];
                len = 1;
            }
        } else {
            ns = type;
            len = type.length;
        }
        //
        // Looks for two consecutive '**', if so, don't add the event at all.
        //
        if (len > 1) for(i = 0; i + 1 < len; i++){
            if (ns[i] === '**' && ns[i + 1] === '**') return;
        }
        var tree = this.listenerTree, name;
        for(i = 0; i < len; i++){
            name = ns[i];
            tree = tree[name] || (tree[name] = {});
            if (i === len - 1) {
                if (!tree._listeners) tree._listeners = listener;
                else {
                    if (typeof tree._listeners === 'function') tree._listeners = [
                        tree._listeners
                    ];
                    if (prepend) tree._listeners.unshift(listener);
                    else tree._listeners.push(listener);
                    if (!tree._listeners.warned && this._maxListeners > 0 && tree._listeners.length > this._maxListeners) {
                        tree._listeners.warned = true;
                        logPossibleMemoryLeak.call(this, tree._listeners.length, name);
                    }
                }
                return true;
            }
        }
        return true;
    }
    function collectTreeEvents(tree, events, root, asArray) {
        var branches = ownKeys(tree);
        var i = branches.length;
        var branch, branchName, path;
        var hasListeners = tree['_listeners'];
        var isArrayPath;
        while(i-- > 0){
            branchName = branches[i];
            branch = tree[branchName];
            if (branchName === '_listeners') path = root;
            else path = root ? root.concat(branchName) : [
                branchName
            ];
            isArrayPath = asArray || typeof branchName === 'symbol';
            hasListeners && events.push(isArrayPath ? path : path.join(this.delimiter));
            if (typeof branch === 'object') collectTreeEvents.call(this, branch, events, path, isArrayPath);
        }
        return events;
    }
    function recursivelyGarbageCollect(root) {
        var keys = ownKeys(root);
        var i = keys.length;
        var obj, key, flag;
        while(i-- > 0){
            key = keys[i];
            obj = root[key];
            if (obj) {
                flag = true;
                if (key !== '_listeners' && !recursivelyGarbageCollect(obj)) delete root[key];
            }
        }
        return flag;
    }
    function Listener(emitter, event, listener) {
        this.emitter = emitter;
        this.event = event;
        this.listener = listener;
    }
    Listener.prototype.off = function() {
        this.emitter.off(this.event, this.listener);
        return this;
    };
    function setupListener(event, listener, options) {
        if (options === true) promisify = true;
        else if (options === false) async = true;
        else {
            if (!options || typeof options !== 'object') throw TypeError('options should be an object or true');
            var async = options.async;
            var promisify = options.promisify;
            var nextTick = options.nextTick;
            var objectify = options.objectify;
        }
        if (async || nextTick || promisify) {
            var _listener = listener;
            var _origin = listener._origin || listener;
            if (nextTick && !nextTickSupported) throw Error('process.nextTick is not supported');
            if (promisify === undefined) promisify = listener.constructor.name === 'AsyncFunction';
            listener = function() {
                var args = arguments;
                var context = this;
                var event = this.event;
                return promisify ? nextTick ? Promise.resolve() : new Promise(function(resolve) {
                    _setImmediate(resolve);
                }).then(function() {
                    context.event = event;
                    return _listener.apply(context, args);
                }) : (nextTick ? process.nextTick : _setImmediate)(function() {
                    context.event = event;
                    _listener.apply(context, args);
                });
            };
            listener._async = true;
            listener._origin = _origin;
        }
        return [
            listener,
            objectify ? new Listener(this, event, listener) : this
        ];
    }
    function EventEmitter(conf) {
        this._events = {};
        this._newListener = false;
        this._removeListener = false;
        this.verboseMemoryLeak = false;
        configure.call(this, conf);
    }
    EventEmitter.EventEmitter2 = EventEmitter; // backwards compatibility for exporting EventEmitter property
    EventEmitter.prototype.listenTo = function(target, events, options) {
        if (typeof target !== 'object') throw TypeError('target musts be an object');
        var emitter = this;
        options = resolveOptions(options, {
            on: undefined,
            off: undefined,
            reducers: undefined
        }, {
            on: functionReducer,
            off: functionReducer,
            reducers: objectFunctionReducer
        });
        function listen(events) {
            if (typeof events !== 'object') throw TypeError('events must be an object');
            var reducers = options.reducers;
            var index = findTargetIndex.call(emitter, target);
            var observer;
            if (index === -1) observer = new TargetObserver(emitter, target, options);
            else observer = emitter._observers[index];
            var keys = ownKeys(events);
            var len = keys.length;
            var event;
            var isSingleReducer = typeof reducers === 'function';
            for(var i = 0; i < len; i++){
                event = keys[i];
                observer.subscribe(event, events[event] || event, isSingleReducer ? reducers : reducers && reducers[event]);
            }
        }
        isArray(events) ? listen(toObject(events)) : typeof events === 'string' ? listen(toObject(events.split(/\s+/))) : listen(events);
        return this;
    };
    EventEmitter.prototype.stopListeningTo = function(target, event) {
        var observers = this._observers;
        if (!observers) return false;
        var i = observers.length;
        var observer;
        var matched = false;
        if (target && typeof target !== 'object') throw TypeError('target should be an object');
        while(i-- > 0){
            observer = observers[i];
            if (!target || observer._target === target) {
                observer.unsubscribe(event);
                matched = true;
            }
        }
        return matched;
    };
    // By default EventEmitters will print a warning if more than
    // 10 listeners are added to it. This is a useful default which
    // helps finding memory leaks.
    //
    // Obviously not all Emitters should be limited to 10. This function allows
    // that to be increased. Set to zero for unlimited.
    EventEmitter.prototype.delimiter = '.';
    EventEmitter.prototype.setMaxListeners = function(n) {
        if (n !== undefined) {
            this._maxListeners = n;
            if (!this._conf) this._conf = {};
            this._conf.maxListeners = n;
        }
    };
    EventEmitter.prototype.getMaxListeners = function() {
        return this._maxListeners;
    };
    EventEmitter.prototype.event = '';
    EventEmitter.prototype.once = function(event, fn, options) {
        return this._once(event, fn, false, options);
    };
    EventEmitter.prototype.prependOnceListener = function(event, fn, options) {
        return this._once(event, fn, true, options);
    };
    EventEmitter.prototype._once = function(event, fn, prepend, options) {
        return this._many(event, 1, fn, prepend, options);
    };
    EventEmitter.prototype.many = function(event, ttl, fn, options) {
        return this._many(event, ttl, fn, false, options);
    };
    EventEmitter.prototype.prependMany = function(event, ttl, fn, options) {
        return this._many(event, ttl, fn, true, options);
    };
    EventEmitter.prototype._many = function(event, ttl, fn, prepend, options) {
        var self = this;
        if (typeof fn !== 'function') throw new Error('many only accepts instances of Function');
        function listener() {
            if (--ttl === 0) self.off(event, listener);
            return fn.apply(this, arguments);
        }
        listener._origin = fn;
        return this._on(event, listener, prepend, options);
    };
    EventEmitter.prototype.emit = function() {
        if (!this._events && !this._all) return false;
        this._events || init.call(this);
        var type = arguments[0], ns, wildcard = this.wildcard;
        var args, l, i, j, containsSymbol;
        if (type === 'newListener' && !this._newListener) {
            if (!this._events.newListener) return false;
        }
        if (wildcard) {
            ns = type;
            if (type !== 'newListener' && type !== 'removeListener') {
                if (typeof type === 'object') {
                    l = type.length;
                    if (symbolsSupported) {
                        for(i = 0; i < l; i++)if (typeof type[i] === 'symbol') {
                            containsSymbol = true;
                            break;
                        }
                    }
                    if (!containsSymbol) type = type.join(this.delimiter);
                }
            }
        }
        var al = arguments.length;
        var handler;
        if (this._all && this._all.length) {
            handler = this._all.slice();
            for(i = 0, l = handler.length; i < l; i++){
                this.event = type;
                switch(al){
                    case 1:
                        handler[i].call(this, type);
                        break;
                    case 2:
                        handler[i].call(this, type, arguments[1]);
                        break;
                    case 3:
                        handler[i].call(this, type, arguments[1], arguments[2]);
                        break;
                    default:
                        handler[i].apply(this, arguments);
                }
            }
        }
        if (wildcard) {
            handler = [];
            searchListenerTree.call(this, handler, ns, this.listenerTree, 0, l);
        } else {
            handler = this._events[type];
            if (typeof handler === 'function') {
                this.event = type;
                switch(al){
                    case 1:
                        handler.call(this);
                        break;
                    case 2:
                        handler.call(this, arguments[1]);
                        break;
                    case 3:
                        handler.call(this, arguments[1], arguments[2]);
                        break;
                    default:
                        args = new Array(al - 1);
                        for(j = 1; j < al; j++)args[j - 1] = arguments[j];
                        handler.apply(this, args);
                }
                return true;
            } else if (handler) // need to make copy of handlers because list can change in the middle
            // of emit call
            handler = handler.slice();
        }
        if (handler && handler.length) {
            if (al > 3) {
                args = new Array(al - 1);
                for(j = 1; j < al; j++)args[j - 1] = arguments[j];
            }
            for(i = 0, l = handler.length; i < l; i++){
                this.event = type;
                switch(al){
                    case 1:
                        handler[i].call(this);
                        break;
                    case 2:
                        handler[i].call(this, arguments[1]);
                        break;
                    case 3:
                        handler[i].call(this, arguments[1], arguments[2]);
                        break;
                    default:
                        handler[i].apply(this, args);
                }
            }
            return true;
        } else if (!this.ignoreErrors && !this._all && type === 'error') {
            if (arguments[1] instanceof Error) throw arguments[1]; // Unhandled 'error' event
            else throw new Error("Uncaught, unspecified 'error' event.");
        }
        return !!this._all;
    };
    EventEmitter.prototype.emitAsync = function() {
        if (!this._events && !this._all) return false;
        this._events || init.call(this);
        var type = arguments[0], wildcard = this.wildcard, ns, containsSymbol;
        var args, l, i, j;
        if (type === 'newListener' && !this._newListener) {
            if (!this._events.newListener) return Promise.resolve([
                false
            ]);
        }
        if (wildcard) {
            ns = type;
            if (type !== 'newListener' && type !== 'removeListener') {
                if (typeof type === 'object') {
                    l = type.length;
                    if (symbolsSupported) {
                        for(i = 0; i < l; i++)if (typeof type[i] === 'symbol') {
                            containsSymbol = true;
                            break;
                        }
                    }
                    if (!containsSymbol) type = type.join(this.delimiter);
                }
            }
        }
        var promises = [];
        var al = arguments.length;
        var handler;
        if (this._all) for(i = 0, l = this._all.length; i < l; i++){
            this.event = type;
            switch(al){
                case 1:
                    promises.push(this._all[i].call(this, type));
                    break;
                case 2:
                    promises.push(this._all[i].call(this, type, arguments[1]));
                    break;
                case 3:
                    promises.push(this._all[i].call(this, type, arguments[1], arguments[2]));
                    break;
                default:
                    promises.push(this._all[i].apply(this, arguments));
            }
        }
        if (wildcard) {
            handler = [];
            searchListenerTree.call(this, handler, ns, this.listenerTree, 0);
        } else handler = this._events[type];
        if (typeof handler === 'function') {
            this.event = type;
            switch(al){
                case 1:
                    promises.push(handler.call(this));
                    break;
                case 2:
                    promises.push(handler.call(this, arguments[1]));
                    break;
                case 3:
                    promises.push(handler.call(this, arguments[1], arguments[2]));
                    break;
                default:
                    args = new Array(al - 1);
                    for(j = 1; j < al; j++)args[j - 1] = arguments[j];
                    promises.push(handler.apply(this, args));
            }
        } else if (handler && handler.length) {
            handler = handler.slice();
            if (al > 3) {
                args = new Array(al - 1);
                for(j = 1; j < al; j++)args[j - 1] = arguments[j];
            }
            for(i = 0, l = handler.length; i < l; i++){
                this.event = type;
                switch(al){
                    case 1:
                        promises.push(handler[i].call(this));
                        break;
                    case 2:
                        promises.push(handler[i].call(this, arguments[1]));
                        break;
                    case 3:
                        promises.push(handler[i].call(this, arguments[1], arguments[2]));
                        break;
                    default:
                        promises.push(handler[i].apply(this, args));
                }
            }
        } else if (!this.ignoreErrors && !this._all && type === 'error') {
            if (arguments[1] instanceof Error) return Promise.reject(arguments[1]); // Unhandled 'error' event
            else return Promise.reject("Uncaught, unspecified 'error' event.");
        }
        return Promise.all(promises);
    };
    EventEmitter.prototype.on = function(type, listener, options) {
        return this._on(type, listener, false, options);
    };
    EventEmitter.prototype.prependListener = function(type, listener, options) {
        return this._on(type, listener, true, options);
    };
    EventEmitter.prototype.onAny = function(fn) {
        return this._onAny(fn, false);
    };
    EventEmitter.prototype.prependAny = function(fn) {
        return this._onAny(fn, true);
    };
    EventEmitter.prototype.addListener = EventEmitter.prototype.on;
    EventEmitter.prototype._onAny = function(fn, prepend) {
        if (typeof fn !== 'function') throw new Error('onAny only accepts instances of Function');
        if (!this._all) this._all = [];
        // Add the function to the event listener collection.
        if (prepend) this._all.unshift(fn);
        else this._all.push(fn);
        return this;
    };
    EventEmitter.prototype._on = function(type, listener, prepend, options) {
        if (typeof type === 'function') {
            this._onAny(type, listener);
            return this;
        }
        if (typeof listener !== 'function') throw new Error('on only accepts instances of Function');
        this._events || init.call(this);
        var returnValue = this, temp;
        if (options !== undefined) {
            temp = setupListener.call(this, type, listener, options);
            listener = temp[0];
            returnValue = temp[1];
        }
        // To avoid recursion in the case that type == "newListeners"! Before
        // adding it to the listeners, first emit "newListeners".
        if (this._newListener) this.emit('newListener', type, listener);
        if (this.wildcard) {
            growListenerTree.call(this, type, listener, prepend);
            return returnValue;
        }
        if (!this._events[type]) // Optimize the case of one listener. Don't need the extra array object.
        this._events[type] = listener;
        else {
            if (typeof this._events[type] === 'function') // Change to array.
            this._events[type] = [
                this._events[type]
            ];
            // If we've already got an array, just add
            if (prepend) this._events[type].unshift(listener);
            else this._events[type].push(listener);
            // Check for listener leak
            if (!this._events[type].warned && this._maxListeners > 0 && this._events[type].length > this._maxListeners) {
                this._events[type].warned = true;
                logPossibleMemoryLeak.call(this, this._events[type].length, type);
            }
        }
        return returnValue;
    };
    EventEmitter.prototype.off = function(type, listener) {
        if (typeof listener !== 'function') throw new Error('removeListener only takes instances of Function');
        var handlers, leafs = [];
        if (this.wildcard) {
            var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
            leafs = searchListenerTree.call(this, null, ns, this.listenerTree, 0);
            if (!leafs) return this;
        } else {
            // does not use listeners(), so no side effect of creating _events[type]
            if (!this._events[type]) return this;
            handlers = this._events[type];
            leafs.push({
                _listeners: handlers
            });
        }
        for(var iLeaf = 0; iLeaf < leafs.length; iLeaf++){
            var leaf = leafs[iLeaf];
            handlers = leaf._listeners;
            if (isArray(handlers)) {
                var position = -1;
                for(var i = 0, length = handlers.length; i < length; i++)if (handlers[i] === listener || handlers[i].listener && handlers[i].listener === listener || handlers[i]._origin && handlers[i]._origin === listener) {
                    position = i;
                    break;
                }
                if (position < 0) continue;
                if (this.wildcard) leaf._listeners.splice(position, 1);
                else this._events[type].splice(position, 1);
                if (handlers.length === 0) {
                    if (this.wildcard) delete leaf._listeners;
                    else delete this._events[type];
                }
                if (this._removeListener) this.emit("removeListener", type, listener);
                return this;
            } else if (handlers === listener || handlers.listener && handlers.listener === listener || handlers._origin && handlers._origin === listener) {
                if (this.wildcard) delete leaf._listeners;
                else delete this._events[type];
                if (this._removeListener) this.emit("removeListener", type, listener);
            }
        }
        this.listenerTree && recursivelyGarbageCollect(this.listenerTree);
        return this;
    };
    EventEmitter.prototype.offAny = function(fn) {
        var i = 0, l = 0, fns;
        if (fn && this._all && this._all.length > 0) {
            fns = this._all;
            for(i = 0, l = fns.length; i < l; i++)if (fn === fns[i]) {
                fns.splice(i, 1);
                if (this._removeListener) this.emit("removeListenerAny", fn);
                return this;
            }
        } else {
            fns = this._all;
            if (this._removeListener) for(i = 0, l = fns.length; i < l; i++)this.emit("removeListenerAny", fns[i]);
            this._all = [];
        }
        return this;
    };
    EventEmitter.prototype.removeListener = EventEmitter.prototype.off;
    EventEmitter.prototype.removeAllListeners = function(type) {
        if (type === undefined) {
            !this._events || init.call(this);
            return this;
        }
        if (this.wildcard) {
            var leafs = searchListenerTree.call(this, null, type, this.listenerTree, 0), leaf, i;
            if (!leafs) return this;
            for(i = 0; i < leafs.length; i++){
                leaf = leafs[i];
                leaf._listeners = null;
            }
            this.listenerTree && recursivelyGarbageCollect(this.listenerTree);
        } else if (this._events) this._events[type] = null;
        return this;
    };
    EventEmitter.prototype.listeners = function(type) {
        var _events = this._events;
        var keys, listeners, allListeners;
        var i;
        var listenerTree;
        if (type === undefined) {
            if (this.wildcard) throw Error('event name required for wildcard emitter');
            if (!_events) return [];
            keys = ownKeys(_events);
            i = keys.length;
            allListeners = [];
            while(i-- > 0){
                listeners = _events[keys[i]];
                if (typeof listeners === 'function') allListeners.push(listeners);
                else allListeners.push.apply(allListeners, listeners);
            }
            return allListeners;
        } else {
            if (this.wildcard) {
                listenerTree = this.listenerTree;
                if (!listenerTree) return [];
                var handlers = [];
                var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
                searchListenerTree.call(this, handlers, ns, listenerTree, 0);
                return handlers;
            }
            if (!_events) return [];
            listeners = _events[type];
            if (!listeners) return [];
            return typeof listeners === 'function' ? [
                listeners
            ] : listeners;
        }
    };
    EventEmitter.prototype.eventNames = function(nsAsArray) {
        var _events = this._events;
        return this.wildcard ? collectTreeEvents.call(this, this.listenerTree, [], null, nsAsArray) : _events ? ownKeys(_events) : [];
    };
    EventEmitter.prototype.listenerCount = function(type) {
        return this.listeners(type).length;
    };
    EventEmitter.prototype.hasListeners = function(type) {
        if (this.wildcard) {
            var handlers = [];
            var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
            searchListenerTree.call(this, handlers, ns, this.listenerTree, 0);
            return handlers.length > 0;
        }
        var _events = this._events;
        var _all = this._all;
        return !!(_all && _all.length || _events && (type === undefined ? ownKeys(_events).length : _events[type]));
    };
    EventEmitter.prototype.listenersAny = function() {
        if (this._all) return this._all;
        else return [];
    };
    EventEmitter.prototype.waitFor = function(event, options) {
        var self = this;
        var type = typeof options;
        if (type === 'number') options = {
            timeout: options
        };
        else if (type === 'function') options = {
            filter: options
        };
        options = resolveOptions(options, {
            timeout: 0,
            filter: undefined,
            handleError: false,
            Promise: Promise,
            overload: false
        }, {
            filter: functionReducer,
            Promise: constructorReducer
        });
        return makeCancelablePromise(options.Promise, function(resolve, reject, onCancel) {
            function listener() {
                var filter = options.filter;
                if (filter && !filter.apply(self, arguments)) return;
                self.off(event, listener);
                if (options.handleError) {
                    var err = arguments[0];
                    err ? reject(err) : resolve(toArray.apply(null, arguments).slice(1));
                } else resolve(toArray.apply(null, arguments));
            }
            onCancel(function() {
                self.off(event, listener);
            });
            self._on(event, listener, false);
        }, {
            timeout: options.timeout,
            overload: options.overload
        });
    };
    function once(emitter, name, options) {
        options = resolveOptions(options, {
            Promise: Promise,
            timeout: 0,
            overload: false
        }, {
            Promise: constructorReducer
        });
        var _Promise = options.Promise;
        return makeCancelablePromise(_Promise, function(resolve, reject, onCancel) {
            var handler;
            if (typeof emitter.addEventListener === 'function') {
                handler = function() {
                    resolve(toArray.apply(null, arguments));
                };
                onCancel(function() {
                    emitter.removeEventListener(name, handler);
                });
                emitter.addEventListener(name, handler, {
                    once: true
                });
                return;
            }
            var eventListener = function() {
                errorListener && emitter.removeListener('error', errorListener);
                resolve(toArray.apply(null, arguments));
            };
            var errorListener;
            if (name !== 'error') {
                errorListener = function(err) {
                    emitter.removeListener(name, eventListener);
                    reject(err);
                };
                emitter.once('error', errorListener);
            }
            onCancel(function() {
                errorListener && emitter.removeListener('error', errorListener);
                emitter.removeListener(name, eventListener);
            });
            emitter.once(name, eventListener);
        }, {
            timeout: options.timeout,
            overload: options.overload
        });
    }
    var prototype = EventEmitter.prototype;
    Object.defineProperties(EventEmitter, {
        defaultMaxListeners: {
            get: function() {
                return prototype._maxListeners;
            },
            set: function(n) {
                if (typeof n !== 'number' || n < 0 || Number.isNaN(n)) throw TypeError('n must be a non-negative number');
                prototype._maxListeners = n;
            },
            enumerable: true
        },
        once: {
            value: once,
            writable: true,
            configurable: true
        }
    });
    Object.defineProperties(prototype, {
        _maxListeners: {
            value: defaultMaxListeners,
            writable: true,
            configurable: true
        },
        _observers: {
            value: null,
            writable: true,
            configurable: true
        }
    });
    if (typeof define === 'function' && define.amd) // AMD. Register as an anonymous module.
    define(function() {
        return EventEmitter;
    });
    else {
        var _global;
        // CommonJS
        module.exports = EventEmitter;
    }
}();

},{"f0c43874c9d914b6":"euskh"}],"7ADmA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Immer", ()=>un);
parcelHelpers.export(exports, "applyPatches", ()=>pn);
parcelHelpers.export(exports, "castDraft", ()=>K);
parcelHelpers.export(exports, "castImmutable", ()=>$);
parcelHelpers.export(exports, "createDraft", ()=>ln);
parcelHelpers.export(exports, "current", ()=>R);
parcelHelpers.export(exports, "enableAllPlugins", ()=>J);
parcelHelpers.export(exports, "enableES5", ()=>F);
parcelHelpers.export(exports, "enableMapSet", ()=>C);
parcelHelpers.export(exports, "enablePatches", ()=>T);
parcelHelpers.export(exports, "finishDraft", ()=>dn);
parcelHelpers.export(exports, "freeze", ()=>d);
parcelHelpers.export(exports, "immerable", ()=>L);
parcelHelpers.export(exports, "isDraft", ()=>r);
parcelHelpers.export(exports, "isDraftable", ()=>t);
parcelHelpers.export(exports, "nothing", ()=>H);
parcelHelpers.export(exports, "original", ()=>e);
parcelHelpers.export(exports, "produce", ()=>fn);
parcelHelpers.export(exports, "produceWithPatches", ()=>cn);
parcelHelpers.export(exports, "setAutoFreeze", ()=>sn);
parcelHelpers.export(exports, "setUseProxies", ()=>vn);
function n(n) {
    for(var r = arguments.length, t = Array(r > 1 ? r - 1 : 0), e = 1; e < r; e++)t[e - 1] = arguments[e];
    var i = Y[n], o = i ? "function" == typeof i ? i.apply(null, t) : i : "unknown error nr: " + n;
    throw Error("[Immer] " + o);
    throw Error("[Immer] minified error nr: " + n + (t.length ? " " + t.map(function(n) {
        return "'" + n + "'";
    }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function r(n) {
    return !!n && !!n[Q];
}
function t(n) {
    var r;
    return !!n && (function(n) {
        if (!n || "object" != typeof n) return !1;
        var r = Object.getPrototypeOf(n);
        if (null === r) return !0;
        var t = Object.hasOwnProperty.call(r, "constructor") && r.constructor;
        return t === Object || "function" == typeof t && Function.toString.call(t) === Z;
    }(n) || Array.isArray(n) || !!n[L] || !!(null === (r = n.constructor) || void 0 === r ? void 0 : r[L]) || s(n) || v(n));
}
function e(t) {
    return r(t) || n(23, t), t[Q].t;
}
function i(n, r, t) {
    void 0 === t && (t = !1), 0 === o(n) ? (t ? Object.keys : nn)(n).forEach(function(e) {
        t && "symbol" == typeof e || r(e, n[e], n);
    }) : n.forEach(function(t, e) {
        return r(e, t, n);
    });
}
function o(n) {
    var r = n[Q];
    return r ? r.i > 3 ? r.i - 4 : r.i : Array.isArray(n) ? 1 : s(n) ? 2 : v(n) ? 3 : 0;
}
function u(n, r) {
    return 2 === o(n) ? n.has(r) : Object.prototype.hasOwnProperty.call(n, r);
}
function a(n, r) {
    return 2 === o(n) ? n.get(r) : n[r];
}
function f(n, r, t) {
    var e = o(n);
    2 === e ? n.set(r, t) : 3 === e ? n.add(t) : n[r] = t;
}
function c(n, r) {
    return n === r ? 0 !== n || 1 / n == 1 / r : n != n && r != r;
}
function s(n) {
    return X && n instanceof Map;
}
function v(n) {
    return q && n instanceof Set;
}
function p(n) {
    return n.o || n.t;
}
function l(n) {
    if (Array.isArray(n)) return Array.prototype.slice.call(n);
    var r = rn(n);
    delete r[Q];
    for(var t = nn(r), e = 0; e < t.length; e++){
        var i = t[e], o = r[i];
        !1 === o.writable && (o.writable = !0, o.configurable = !0), (o.get || o.set) && (r[i] = {
            configurable: !0,
            writable: !0,
            enumerable: o.enumerable,
            value: n[i]
        });
    }
    return Object.create(Object.getPrototypeOf(n), r);
}
function d(n, e) {
    return void 0 === e && (e = !1), y(n) || r(n) || !t(n) || (o(n) > 1 && (n.set = n.add = n.clear = n.delete = h), Object.freeze(n), e && i(n, function(n, r) {
        return d(r, !0);
    }, !0)), n;
}
function h() {
    n(2);
}
function y(n) {
    return null == n || "object" != typeof n || Object.isFrozen(n);
}
function b(r) {
    var t = tn[r];
    return t || n(18, r), t;
}
function m(n, r) {
    tn[n] || (tn[n] = r);
}
function _() {
    return U || n(0), U;
}
function j(n, r) {
    r && (b("Patches"), n.u = [], n.s = [], n.v = r);
}
function g(n) {
    O(n), n.p.forEach(S), n.p = null;
}
function O(n) {
    n === U && (U = n.l);
}
function w(n) {
    return U = {
        p: [],
        l: U,
        h: n,
        m: !0,
        _: 0
    };
}
function S(n) {
    var r = n[Q];
    0 === r.i || 1 === r.i ? r.j() : r.g = !0;
}
function P(r, e) {
    e._ = e.p.length;
    var i = e.p[0], o = void 0 !== r && r !== i;
    return e.h.O || b("ES5").S(e, r, o), o ? (i[Q].P && (g(e), n(4)), t(r) && (r = M(e, r), e.l || x(e, r)), e.u && b("Patches").M(i[Q].t, r, e.u, e.s)) : r = M(e, i, []), g(e), e.u && e.v(e.u, e.s), r !== H ? r : void 0;
}
function M(n, r, t) {
    if (y(r)) return r;
    var e = r[Q];
    if (!e) return i(r, function(i, o) {
        return A(n, e, r, i, o, t);
    }, !0), r;
    if (e.A !== n) return r;
    if (!e.P) return x(n, e.t, !0), e.t;
    if (!e.I) {
        e.I = !0, e.A._--;
        var o = 4 === e.i || 5 === e.i ? e.o = l(e.k) : e.o, u = o, a = !1;
        3 === e.i && (u = new Set(o), o.clear(), a = !0), i(u, function(r, i) {
            return A(n, e, o, r, i, t, a);
        }), x(n, o, !1), t && n.u && b("Patches").N(e, t, n.u, n.s);
    }
    return e.o;
}
function A(e, i, o, a, c, s, v) {
    if (c === o && n(5), r(c)) {
        var p = M(e, c, s && i && 3 !== i.i && !u(i.R, a) ? s.concat(a) : void 0);
        if (f(o, a, p), !r(p)) return;
        e.m = !1;
    } else v && o.add(c);
    if (t(c) && !y(c)) {
        if (!e.h.D && e._ < 1) return;
        M(e, c), i && i.A.l || x(e, c);
    }
}
function x(n, r, t) {
    void 0 === t && (t = !1), !n.l && n.h.D && n.m && d(r, t);
}
function z(n, r) {
    var t = n[Q];
    return (t ? p(t) : n)[r];
}
function I(n, r) {
    if (r in n) for(var t = Object.getPrototypeOf(n); t;){
        var e = Object.getOwnPropertyDescriptor(t, r);
        if (e) return e;
        t = Object.getPrototypeOf(t);
    }
}
function k(n) {
    n.P || (n.P = !0, n.l && k(n.l));
}
function E(n) {
    n.o || (n.o = l(n.t));
}
function N(n, r, t) {
    var e = s(r) ? b("MapSet").F(r, t) : v(r) ? b("MapSet").T(r, t) : n.O ? function(n, r) {
        var t = Array.isArray(n), e = {
            i: t ? 1 : 0,
            A: r ? r.A : _(),
            P: !1,
            I: !1,
            R: {},
            l: r,
            t: n,
            k: null,
            o: null,
            j: null,
            C: !1
        }, i = e, o = en;
        t && (i = [
            e
        ], o = on);
        var u = Proxy.revocable(i, o), a = u.revoke, f = u.proxy;
        return e.k = f, e.j = a, f;
    }(r, t) : b("ES5").J(r, t);
    return (t ? t.A : _()).p.push(e), e;
}
function R(e) {
    return r(e) || n(22, e), function n(r) {
        if (!t(r)) return r;
        var e, u = r[Q], c = o(r);
        if (u) {
            if (!u.P && (u.i < 4 || !b("ES5").K(u))) return u.t;
            u.I = !0, e = D(r, c), u.I = !1;
        } else e = D(r, c);
        return i(e, function(r, t) {
            u && a(u.t, r) === t || f(e, r, n(t));
        }), 3 === c ? new Set(e) : e;
    }(e);
}
function D(n, r) {
    switch(r){
        case 2:
            return new Map(n);
        case 3:
            return Array.from(n);
    }
    return l(n);
}
function F() {
    function t(n, r) {
        var t = s[n];
        return t ? t.enumerable = r : s[n] = t = {
            configurable: !0,
            enumerable: r,
            get: function() {
                var r = this[Q];
                return f(r), en.get(r, n);
            },
            set: function(r) {
                var t = this[Q];
                f(t), en.set(t, n, r);
            }
        }, t;
    }
    function e(n) {
        for(var r = n.length - 1; r >= 0; r--){
            var t = n[r][Q];
            if (!t.P) switch(t.i){
                case 5:
                    a(t) && k(t);
                    break;
                case 4:
                    o(t) && k(t);
            }
        }
    }
    function o(n) {
        for(var r = n.t, t = n.k, e = nn(t), i = e.length - 1; i >= 0; i--){
            var o = e[i];
            if (o !== Q) {
                var a = r[o];
                if (void 0 === a && !u(r, o)) return !0;
                var f = t[o], s = f && f[Q];
                if (s ? s.t !== a : !c(f, a)) return !0;
            }
        }
        var v = !!r[Q];
        return e.length !== nn(r).length + (v ? 0 : 1);
    }
    function a(n) {
        var r = n.k;
        if (r.length !== n.t.length) return !0;
        var t = Object.getOwnPropertyDescriptor(r, r.length - 1);
        if (t && !t.get) return !0;
        for(var e = 0; e < r.length; e++)if (!r.hasOwnProperty(e)) return !0;
        return !1;
    }
    function f(r) {
        r.g && n(3, JSON.stringify(p(r)));
    }
    var s = {};
    m("ES5", {
        J: function(n, r) {
            var e = Array.isArray(n), i = function(n, r) {
                if (n) {
                    for(var e = Array(r.length), i = 0; i < r.length; i++)Object.defineProperty(e, "" + i, t(i, !0));
                    return e;
                }
                var o = rn(r);
                delete o[Q];
                for(var u = nn(o), a = 0; a < u.length; a++){
                    var f = u[a];
                    o[f] = t(f, n || !!o[f].enumerable);
                }
                return Object.create(Object.getPrototypeOf(r), o);
            }(e, n), o = {
                i: e ? 5 : 4,
                A: r ? r.A : _(),
                P: !1,
                I: !1,
                R: {},
                l: r,
                t: n,
                k: i,
                o: null,
                g: !1,
                C: !1
            };
            return Object.defineProperty(i, Q, {
                value: o,
                writable: !0
            }), i;
        },
        S: function(n, t, o) {
            o ? r(t) && t[Q].A === n && e(n.p) : (n.u && function n(r) {
                if (r && "object" == typeof r) {
                    var t = r[Q];
                    if (t) {
                        var e = t.t, o = t.k, f = t.R, c = t.i;
                        if (4 === c) i(o, function(r) {
                            r !== Q && (void 0 !== e[r] || u(e, r) ? f[r] || n(o[r]) : (f[r] = !0, k(t)));
                        }), i(e, function(n) {
                            void 0 !== o[n] || u(o, n) || (f[n] = !1, k(t));
                        });
                        else if (5 === c) {
                            if (a(t) && (k(t), f.length = !0), o.length < e.length) for(var s = o.length; s < e.length; s++)f[s] = !1;
                            else for(var v = e.length; v < o.length; v++)f[v] = !0;
                            for(var p = Math.min(o.length, e.length), l = 0; l < p; l++)o.hasOwnProperty(l) || (f[l] = !0), void 0 === f[l] && n(o[l]);
                        }
                    }
                }
            }(n.p[0]), e(n.p));
        },
        K: function(n) {
            return 4 === n.i ? o(n) : a(n);
        }
    });
}
function T() {
    function e(n) {
        if (!t(n)) return n;
        if (Array.isArray(n)) return n.map(e);
        if (s(n)) return new Map(Array.from(n.entries()).map(function(n) {
            return [
                n[0],
                e(n[1])
            ];
        }));
        if (v(n)) return new Set(Array.from(n).map(e));
        var r = Object.create(Object.getPrototypeOf(n));
        for(var i in n)r[i] = e(n[i]);
        return u(n, L) && (r[L] = n[L]), r;
    }
    function f(n) {
        return r(n) ? e(n) : n;
    }
    var c = "add";
    m("Patches", {
        $: function(r, t) {
            return t.forEach(function(t) {
                for(var i = t.path, u = t.op, f = r, s = 0; s < i.length - 1; s++){
                    var v = o(f), p = i[s];
                    "string" != typeof p && "number" != typeof p && (p = "" + p), 0 !== v && 1 !== v || "__proto__" !== p && "constructor" !== p || n(24), "function" == typeof f && "prototype" === p && n(24), "object" != typeof (f = a(f, p)) && n(15, i.join("/"));
                }
                var l = o(f), d = e(t.value), h = i[i.length - 1];
                switch(u){
                    case "replace":
                        switch(l){
                            case 2:
                                return f.set(h, d);
                            case 3:
                                n(16);
                            default:
                                return f[h] = d;
                        }
                    case c:
                        switch(l){
                            case 1:
                                return "-" === h ? f.push(d) : f.splice(h, 0, d);
                            case 2:
                                return f.set(h, d);
                            case 3:
                                return f.add(d);
                            default:
                                return f[h] = d;
                        }
                    case "remove":
                        switch(l){
                            case 1:
                                return f.splice(h, 1);
                            case 2:
                                return f.delete(h);
                            case 3:
                                return f.delete(t.value);
                            default:
                                return delete f[h];
                        }
                    default:
                        n(17, u);
                }
            }), r;
        },
        N: function(n, r, t, e) {
            switch(n.i){
                case 0:
                case 4:
                case 2:
                    return function(n, r, t, e) {
                        var o = n.t, s = n.o;
                        i(n.R, function(n, i) {
                            var v = a(o, n), p = a(s, n), l = i ? u(o, n) ? "replace" : c : "remove";
                            if (v !== p || "replace" !== l) {
                                var d = r.concat(n);
                                t.push("remove" === l ? {
                                    op: l,
                                    path: d
                                } : {
                                    op: l,
                                    path: d,
                                    value: p
                                }), e.push(l === c ? {
                                    op: "remove",
                                    path: d
                                } : "remove" === l ? {
                                    op: c,
                                    path: d,
                                    value: f(v)
                                } : {
                                    op: "replace",
                                    path: d,
                                    value: f(v)
                                });
                            }
                        });
                    }(n, r, t, e);
                case 5:
                case 1:
                    return function(n, r, t, e) {
                        var i = n.t, o = n.R, u = n.o;
                        if (u.length < i.length) {
                            var a = [
                                u,
                                i
                            ];
                            i = a[0], u = a[1];
                            var s = [
                                e,
                                t
                            ];
                            t = s[0], e = s[1];
                        }
                        for(var v = 0; v < i.length; v++)if (o[v] && u[v] !== i[v]) {
                            var p = r.concat([
                                v
                            ]);
                            t.push({
                                op: "replace",
                                path: p,
                                value: f(u[v])
                            }), e.push({
                                op: "replace",
                                path: p,
                                value: f(i[v])
                            });
                        }
                        for(var l = i.length; l < u.length; l++){
                            var d = r.concat([
                                l
                            ]);
                            t.push({
                                op: c,
                                path: d,
                                value: f(u[l])
                            });
                        }
                        i.length < u.length && e.push({
                            op: "replace",
                            path: r.concat([
                                "length"
                            ]),
                            value: i.length
                        });
                    }(n, r, t, e);
                case 3:
                    return function(n, r, t, e) {
                        var i = n.t, o = n.o, u = 0;
                        i.forEach(function(n) {
                            if (!o.has(n)) {
                                var i = r.concat([
                                    u
                                ]);
                                t.push({
                                    op: "remove",
                                    path: i,
                                    value: n
                                }), e.unshift({
                                    op: c,
                                    path: i,
                                    value: n
                                });
                            }
                            u++;
                        }), u = 0, o.forEach(function(n) {
                            if (!i.has(n)) {
                                var o = r.concat([
                                    u
                                ]);
                                t.push({
                                    op: c,
                                    path: o,
                                    value: n
                                }), e.unshift({
                                    op: "remove",
                                    path: o,
                                    value: n
                                });
                            }
                            u++;
                        });
                    }(n, r, t, e);
            }
        },
        M: function(n, r, t, e) {
            t.push({
                op: "replace",
                path: [],
                value: r === H ? void 0 : r
            }), e.push({
                op: "replace",
                path: [],
                value: n
            });
        }
    });
}
function C() {
    function r(n, r) {
        function t() {
            this.constructor = n;
        }
        a(n, r), n.prototype = (t.prototype = r.prototype, new t);
    }
    function e(n) {
        n.o || (n.R = new Map, n.o = new Map(n.t));
    }
    function o(n) {
        n.o || (n.o = new Set, n.t.forEach(function(r) {
            if (t(r)) {
                var e = N(n.A.h, r, n);
                n.p.set(r, e), n.o.add(e);
            } else n.o.add(r);
        }));
    }
    function u(r) {
        r.g && n(3, JSON.stringify(p(r)));
    }
    var a = function(n, r) {
        return (a = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(n, r) {
            n.__proto__ = r;
        } || function(n, r) {
            for(var t in r)r.hasOwnProperty(t) && (n[t] = r[t]);
        })(n, r);
    }, f = function() {
        function n(n, r) {
            return this[Q] = {
                i: 2,
                l: r,
                A: r ? r.A : _(),
                P: !1,
                I: !1,
                o: void 0,
                R: void 0,
                t: n,
                k: this,
                C: !1,
                g: !1
            }, this;
        }
        r(n, Map);
        var o = n.prototype;
        return Object.defineProperty(o, "size", {
            get: function() {
                return p(this[Q]).size;
            }
        }), o.has = function(n) {
            return p(this[Q]).has(n);
        }, o.set = function(n, r) {
            var t = this[Q];
            return u(t), p(t).has(n) && p(t).get(n) === r || (e(t), k(t), t.R.set(n, !0), t.o.set(n, r), t.R.set(n, !0)), this;
        }, o.delete = function(n) {
            if (!this.has(n)) return !1;
            var r = this[Q];
            return u(r), e(r), k(r), r.t.has(n) ? r.R.set(n, !1) : r.R.delete(n), r.o.delete(n), !0;
        }, o.clear = function() {
            var n = this[Q];
            u(n), p(n).size && (e(n), k(n), n.R = new Map, i(n.t, function(r) {
                n.R.set(r, !1);
            }), n.o.clear());
        }, o.forEach = function(n, r) {
            var t = this;
            p(this[Q]).forEach(function(e, i) {
                n.call(r, t.get(i), i, t);
            });
        }, o.get = function(n) {
            var r = this[Q];
            u(r);
            var i = p(r).get(n);
            if (r.I || !t(i)) return i;
            if (i !== r.t.get(n)) return i;
            var o = N(r.A.h, i, r);
            return e(r), r.o.set(n, o), o;
        }, o.keys = function() {
            return p(this[Q]).keys();
        }, o.values = function() {
            var n, r = this, t = this.keys();
            return (n = {})[V] = function() {
                return r.values();
            }, n.next = function() {
                var n = t.next();
                return n.done ? n : {
                    done: !1,
                    value: r.get(n.value)
                };
            }, n;
        }, o.entries = function() {
            var n, r = this, t = this.keys();
            return (n = {})[V] = function() {
                return r.entries();
            }, n.next = function() {
                var n = t.next();
                if (n.done) return n;
                var e = r.get(n.value);
                return {
                    done: !1,
                    value: [
                        n.value,
                        e
                    ]
                };
            }, n;
        }, o[V] = function() {
            return this.entries();
        }, n;
    }(), c = function() {
        function n(n, r) {
            return this[Q] = {
                i: 3,
                l: r,
                A: r ? r.A : _(),
                P: !1,
                I: !1,
                o: void 0,
                t: n,
                k: this,
                p: new Map,
                g: !1,
                C: !1
            }, this;
        }
        r(n, Set);
        var t = n.prototype;
        return Object.defineProperty(t, "size", {
            get: function() {
                return p(this[Q]).size;
            }
        }), t.has = function(n) {
            var r = this[Q];
            return u(r), r.o ? !!r.o.has(n) || !(!r.p.has(n) || !r.o.has(r.p.get(n))) : r.t.has(n);
        }, t.add = function(n) {
            var r = this[Q];
            return u(r), this.has(n) || (o(r), k(r), r.o.add(n)), this;
        }, t.delete = function(n) {
            if (!this.has(n)) return !1;
            var r = this[Q];
            return u(r), o(r), k(r), r.o.delete(n) || !!r.p.has(n) && r.o.delete(r.p.get(n));
        }, t.clear = function() {
            var n = this[Q];
            u(n), p(n).size && (o(n), k(n), n.o.clear());
        }, t.values = function() {
            var n = this[Q];
            return u(n), o(n), n.o.values();
        }, t.entries = function() {
            var n = this[Q];
            return u(n), o(n), n.o.entries();
        }, t.keys = function() {
            return this.values();
        }, t[V] = function() {
            return this.values();
        }, t.forEach = function(n, r) {
            for(var t = this.values(), e = t.next(); !e.done;)n.call(r, e.value, e.value, this), e = t.next();
        }, n;
    }();
    m("MapSet", {
        F: function(n, r) {
            return new f(n, r);
        },
        T: function(n, r) {
            return new c(n, r);
        }
    });
}
function J() {
    F(), C(), T();
}
function K(n) {
    return n;
}
function $(n) {
    return n;
}
var G, U, W = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x"), X = "undefined" != typeof Map, q = "undefined" != typeof Set, B = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect, H = W ? Symbol.for("immer-nothing") : ((G = {})["immer-nothing"] = !0, G), L = W ? Symbol.for("immer-draftable") : "__$immer_draftable", Q = W ? Symbol.for("immer-state") : "__$immer_state", V = "undefined" != typeof Symbol && Symbol.iterator || "@@iterator", Y = {
    0: "Illegal state",
    1: "Immer drafts cannot have computed properties",
    2: "This object has been frozen and should not be mutated",
    3: function(n) {
        return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + n;
    },
    4: "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
    5: "Immer forbids circular references",
    6: "The first or second argument to `produce` must be a function",
    7: "The third argument to `produce` must be a function or undefined",
    8: "First argument to `createDraft` must be a plain object, an array, or an immerable object",
    9: "First argument to `finishDraft` must be a draft returned by `createDraft`",
    10: "The given draft is already finalized",
    11: "Object.defineProperty() cannot be used on an Immer draft",
    12: "Object.setPrototypeOf() cannot be used on an Immer draft",
    13: "Immer only supports deleting array indices",
    14: "Immer only supports setting array indices and the 'length' property",
    15: function(n) {
        return "Cannot apply patch, path doesn't resolve: " + n;
    },
    16: 'Sets cannot have "replace" patches.',
    17: function(n) {
        return "Unsupported patch operation: " + n;
    },
    18: function(n) {
        return "The plugin for '" + n + "' has not been loaded into Immer. To enable the plugin, import and call `enable" + n + "()` when initializing your application.";
    },
    20: "Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available",
    21: function(n) {
        return "produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '" + n + "'";
    },
    22: function(n) {
        return "'current' expects a draft, got: " + n;
    },
    23: function(n) {
        return "'original' expects a draft, got: " + n;
    },
    24: "Patching reserved attributes like __proto__, prototype and constructor is not allowed"
}, Z = "" + Object.prototype.constructor, nn = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function(n) {
    return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n));
} : Object.getOwnPropertyNames, rn = Object.getOwnPropertyDescriptors || function(n) {
    var r = {};
    return nn(n).forEach(function(t) {
        r[t] = Object.getOwnPropertyDescriptor(n, t);
    }), r;
}, tn = {}, en = {
    get: function(n, r) {
        if (r === Q) return n;
        var e = p(n);
        if (!u(e, r)) return function(n, r, t) {
            var e, i = I(r, t);
            return i ? "value" in i ? i.value : null === (e = i.get) || void 0 === e ? void 0 : e.call(n.k) : void 0;
        }(n, e, r);
        var i = e[r];
        return n.I || !t(i) ? i : i === z(n.t, r) ? (E(n), n.o[r] = N(n.A.h, i, n)) : i;
    },
    has: function(n, r) {
        return r in p(n);
    },
    ownKeys: function(n) {
        return Reflect.ownKeys(p(n));
    },
    set: function(n, r, t) {
        var e = I(p(n), r);
        if (null == e ? void 0 : e.set) return e.set.call(n.k, t), !0;
        if (!n.P) {
            var i = z(p(n), r), o = null == i ? void 0 : i[Q];
            if (o && o.t === t) return n.o[r] = t, n.R[r] = !1, !0;
            if (c(t, i) && (void 0 !== t || u(n.t, r))) return !0;
            E(n), k(n);
        }
        return n.o[r] === t && (void 0 !== t || r in n.o) || Number.isNaN(t) && Number.isNaN(n.o[r]) || (n.o[r] = t, n.R[r] = !0), !0;
    },
    deleteProperty: function(n, r) {
        return void 0 !== z(n.t, r) || r in n.t ? (n.R[r] = !1, E(n), k(n)) : delete n.R[r], n.o && delete n.o[r], !0;
    },
    getOwnPropertyDescriptor: function(n, r) {
        var t = p(n), e = Reflect.getOwnPropertyDescriptor(t, r);
        return e ? {
            writable: !0,
            configurable: 1 !== n.i || "length" !== r,
            enumerable: e.enumerable,
            value: t[r]
        } : e;
    },
    defineProperty: function() {
        n(11);
    },
    getPrototypeOf: function(n) {
        return Object.getPrototypeOf(n.t);
    },
    setPrototypeOf: function() {
        n(12);
    }
}, on = {};
i(en, function(n, r) {
    on[n] = function() {
        return arguments[0] = arguments[0][0], r.apply(this, arguments);
    };
}), on.deleteProperty = function(r, t) {
    return isNaN(parseInt(t)) && n(13), on.set.call(this, r, t, void 0);
}, on.set = function(r, t, e) {
    return "length" !== t && isNaN(parseInt(t)) && n(14), en.set.call(this, r[0], t, e, r[0]);
};
var un = function() {
    function e(r) {
        var e = this;
        this.O = B, this.D = !0, this.produce = function(r, i, o) {
            if ("function" == typeof r && "function" != typeof i) {
                var u = i;
                i = r;
                var a = e;
                return function(n) {
                    var r = this;
                    void 0 === n && (n = u);
                    for(var t = arguments.length, e = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)e[o - 1] = arguments[o];
                    return a.produce(n, function(n) {
                        var t;
                        return (t = i).call.apply(t, [
                            r,
                            n
                        ].concat(e));
                    });
                };
            }
            var f;
            if ("function" != typeof i && n(6), void 0 !== o && "function" != typeof o && n(7), t(r)) {
                var c = w(e), s = N(e, r, void 0), v = !0;
                try {
                    f = i(s), v = !1;
                } finally{
                    v ? g(c) : O(c);
                }
                return "undefined" != typeof Promise && f instanceof Promise ? f.then(function(n) {
                    return j(c, o), P(n, c);
                }, function(n) {
                    throw g(c), n;
                }) : (j(c, o), P(f, c));
            }
            if (!r || "object" != typeof r) {
                if (void 0 === (f = i(r)) && (f = r), f === H && (f = void 0), e.D && d(f, !0), o) {
                    var p = [], l = [];
                    b("Patches").M(r, f, p, l), o(p, l);
                }
                return f;
            }
            n(21, r);
        }, this.produceWithPatches = function(n, r) {
            if ("function" == typeof n) return function(r) {
                for(var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)i[o - 1] = arguments[o];
                return e.produceWithPatches(r, function(r) {
                    return n.apply(void 0, [
                        r
                    ].concat(i));
                });
            };
            var t, i, o = e.produce(n, r, function(n, r) {
                t = n, i = r;
            });
            return "undefined" != typeof Promise && o instanceof Promise ? o.then(function(n) {
                return [
                    n,
                    t,
                    i
                ];
            }) : [
                o,
                t,
                i
            ];
        }, "boolean" == typeof (null == r ? void 0 : r.useProxies) && this.setUseProxies(r.useProxies), "boolean" == typeof (null == r ? void 0 : r.autoFreeze) && this.setAutoFreeze(r.autoFreeze);
    }
    var i = e.prototype;
    return i.createDraft = function(e) {
        t(e) || n(8), r(e) && (e = R(e));
        var i = w(this), o = N(this, e, void 0);
        return o[Q].C = !0, O(i), o;
    }, i.finishDraft = function(r, t) {
        var e = r && r[Q];
        e && e.C || n(9), e.I && n(10);
        var i = e.A;
        return j(i, t), P(void 0, i);
    }, i.setAutoFreeze = function(n) {
        this.D = n;
    }, i.setUseProxies = function(r) {
        r && !B && n(20), this.O = r;
    }, i.applyPatches = function(n, t) {
        var e;
        for(e = t.length - 1; e >= 0; e--){
            var i = t[e];
            if (0 === i.path.length && "replace" === i.op) {
                n = i.value;
                break;
            }
        }
        e > -1 && (t = t.slice(e + 1));
        var o = b("Patches").$;
        return r(n) ? o(n, t) : this.produce(n, function(n) {
            return o(n, t);
        });
    }, e;
}(), an = new un, fn = an.produce, cn = an.produceWithPatches.bind(an), sn = an.setAutoFreeze.bind(an), vn = an.setUseProxies.bind(an), pn = an.applyPatches.bind(an), ln = an.createDraft.bind(an), dn = an.finishDraft.bind(an);
exports.default = fn;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"glwFn"}],"5XiGX":[function(require,module,exports,__globalThis) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
function shallow(objA, objB) {
    if (Object.is(objA, objB)) return true;
    if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) return false;
    var keysA = Object.keys(objA);
    if (keysA.length !== Object.keys(objB).length) return false;
    for(var i = 0; i < keysA.length; i++){
        if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !Object.is(objA[keysA[i]], objB[keysA[i]])) return false;
    }
    return true;
}
exports.default = shallow;

},{}],"folPr":[function(require,module,exports,__globalThis) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
function create(createState) {
    var state;
    var listeners = new Set();
    var setState = function setState(partial, replace) {
        var nextState = typeof partial === 'function' ? partial(state) : partial;
        if (nextState !== state) {
            var _previousState = state;
            state = replace ? nextState : Object.assign({}, state, nextState);
            listeners.forEach(function(listener) {
                return listener(state, _previousState);
            });
        }
    };
    var getState = function getState() {
        return state;
    };
    var subscribeWithSelector = function subscribeWithSelector(listener, selector, equalityFn) {
        if (selector === void 0) selector = getState;
        if (equalityFn === void 0) equalityFn = Object.is;
        var currentSlice = selector(state);
        function listenerToAdd() {
            var nextSlice = selector(state);
            if (!equalityFn(currentSlice, nextSlice)) {
                var _previousSlice = currentSlice;
                listener(currentSlice = nextSlice, _previousSlice);
            }
        }
        listeners.add(listenerToAdd);
        return function() {
            return listeners.delete(listenerToAdd);
        };
    };
    var subscribe = function subscribe(listener, selector, equalityFn) {
        if (selector || equalityFn) return subscribeWithSelector(listener, selector, equalityFn);
        listeners.add(listener);
        return function() {
            return listeners.delete(listener);
        };
    };
    var destroy = function destroy() {
        return listeners.clear();
    };
    var api = {
        setState: setState,
        getState: getState,
        subscribe: subscribe,
        destroy: destroy
    };
    state = createState(setState, getState, api);
    return api;
}
exports.default = create;

},{}],"jUb7g":[function(require,module,exports,__globalThis) {
var parser = require("7a0b6ca0cc24bd20");
var writer = require("b2f281b7150f7458");
var grammar = require("217d99ab493fadc8");
exports.grammar = grammar;
exports.write = writer;
exports.parse = parser.parse;
exports.parseParams = parser.parseParams;
exports.parseFmtpConfig = parser.parseFmtpConfig; // Alias of parseParams().
exports.parsePayloads = parser.parsePayloads;
exports.parseRemoteCandidates = parser.parseRemoteCandidates;
exports.parseImageAttributes = parser.parseImageAttributes;
exports.parseSimulcastStreamList = parser.parseSimulcastStreamList;

},{"7a0b6ca0cc24bd20":"iFxq8","b2f281b7150f7458":"e5N0y","217d99ab493fadc8":"lEW9g"}],"iFxq8":[function(require,module,exports,__globalThis) {
var toIntIfInt = function(v) {
    return String(Number(v)) === v ? Number(v) : v;
};
var attachProperties = function(match, location, names, rawName) {
    if (rawName && !names) location[rawName] = toIntIfInt(match[1]);
    else {
        for(var i = 0; i < names.length; i += 1)if (match[i + 1] != null) location[names[i]] = toIntIfInt(match[i + 1]);
    }
};
var parseReg = function(obj, location, content) {
    var needsBlank = obj.name && obj.names;
    if (obj.push && !location[obj.push]) location[obj.push] = [];
    else if (needsBlank && !location[obj.name]) location[obj.name] = {};
    var keyLocation = obj.push ? {} : needsBlank ? location[obj.name] : location; // otherwise, named location or root
    attachProperties(content.match(obj.reg), keyLocation, obj.names, obj.name);
    if (obj.push) location[obj.push].push(keyLocation);
};
var grammar = require("aa02f00a5bd870a8");
var validLine = RegExp.prototype.test.bind(/^([a-z])=(.*)/);
exports.parse = function(sdp) {
    var session = {}, media = [], location = session; // points at where properties go under (one of the above)
    // parse lines we understand
    sdp.split(/(\r\n|\r|\n)/).filter(validLine).forEach(function(l) {
        var type = l[0];
        var content = l.slice(2);
        if (type === 'm') {
            media.push({
                rtp: [],
                fmtp: []
            });
            location = media[media.length - 1]; // point at latest media line
        }
        for(var j = 0; j < (grammar[type] || []).length; j += 1){
            var obj = grammar[type][j];
            if (obj.reg.test(content)) return parseReg(obj, location, content);
        }
    });
    session.media = media; // link it up
    return session;
};
var paramReducer = function(acc, expr) {
    var s = expr.split(/=(.+)/, 2);
    if (s.length === 2) acc[s[0]] = toIntIfInt(s[1]);
    else if (s.length === 1 && expr.length > 1) acc[s[0]] = undefined;
    return acc;
};
exports.parseParams = function(str) {
    return str.split(/;\s?/).reduce(paramReducer, {});
};
// For backward compatibility - alias will be removed in 3.0.0
exports.parseFmtpConfig = exports.parseParams;
exports.parsePayloads = function(str) {
    return str.toString().split(' ').map(Number);
};
exports.parseRemoteCandidates = function(str) {
    var candidates = [];
    var parts = str.split(' ').map(toIntIfInt);
    for(var i = 0; i < parts.length; i += 3)candidates.push({
        component: parts[i],
        ip: parts[i + 1],
        port: parts[i + 2]
    });
    return candidates;
};
exports.parseImageAttributes = function(str) {
    return str.split(' ').map(function(item) {
        return item.substring(1, item.length - 1).split(',').reduce(paramReducer, {});
    });
};
exports.parseSimulcastStreamList = function(str) {
    return str.split(';').map(function(stream) {
        return stream.split(',').map(function(format) {
            var scid, paused = false;
            if (format[0] !== '~') scid = toIntIfInt(format);
            else {
                scid = toIntIfInt(format.substring(1, format.length));
                paused = true;
            }
            return {
                scid: scid,
                paused: paused
            };
        });
    });
};

},{"aa02f00a5bd870a8":"lEW9g"}],"lEW9g":[function(require,module,exports,__globalThis) {
var grammar = module.exports = {
    v: [
        {
            name: 'version',
            reg: /^(\d*)$/
        }
    ],
    o: [
        {
            // o=- 20518 0 IN IP4 203.0.113.1
            // NB: sessionId will be a String in most cases because it is huge
            name: 'origin',
            reg: /^(\S*) (\d*) (\d*) (\S*) IP(\d) (\S*)/,
            names: [
                'username',
                'sessionId',
                'sessionVersion',
                'netType',
                'ipVer',
                'address'
            ],
            format: '%s %s %d %s IP%d %s'
        }
    ],
    // default parsing of these only (though some of these feel outdated)
    s: [
        {
            name: 'name'
        }
    ],
    i: [
        {
            name: 'description'
        }
    ],
    u: [
        {
            name: 'uri'
        }
    ],
    e: [
        {
            name: 'email'
        }
    ],
    p: [
        {
            name: 'phone'
        }
    ],
    z: [
        {
            name: 'timezones'
        }
    ],
    r: [
        {
            name: 'repeats'
        }
    ],
    // k: [{}], // outdated thing ignored
    t: [
        {
            // t=0 0
            name: 'timing',
            reg: /^(\d*) (\d*)/,
            names: [
                'start',
                'stop'
            ],
            format: '%d %d'
        }
    ],
    c: [
        {
            // c=IN IP4 10.47.197.26
            name: 'connection',
            reg: /^IN IP(\d) (\S*)/,
            names: [
                'version',
                'ip'
            ],
            format: 'IN IP%d %s'
        }
    ],
    b: [
        {
            // b=AS:4000
            push: 'bandwidth',
            reg: /^(TIAS|AS|CT|RR|RS):(\d*)/,
            names: [
                'type',
                'limit'
            ],
            format: '%s:%s'
        }
    ],
    m: [
        {
            // m=video 51744 RTP/AVP 126 97 98 34 31
            // NB: special - pushes to session
            // TODO: rtp/fmtp should be filtered by the payloads found here?
            reg: /^(\w*) (\d*) ([\w/]*)(?: (.*))?/,
            names: [
                'type',
                'port',
                'protocol',
                'payloads'
            ],
            format: '%s %d %s %s'
        }
    ],
    a: [
        {
            // a=rtpmap:110 opus/48000/2
            push: 'rtp',
            reg: /^rtpmap:(\d*) ([\w\-.]*)(?:\s*\/(\d*)(?:\s*\/(\S*))?)?/,
            names: [
                'payload',
                'codec',
                'rate',
                'encoding'
            ],
            format: function(o) {
                return o.encoding ? 'rtpmap:%d %s/%s/%s' : o.rate ? 'rtpmap:%d %s/%s' : 'rtpmap:%d %s';
            }
        },
        {
            // a=fmtp:108 profile-level-id=24;object=23;bitrate=64000
            // a=fmtp:111 minptime=10; useinbandfec=1
            push: 'fmtp',
            reg: /^fmtp:(\d*) ([\S| ]*)/,
            names: [
                'payload',
                'config'
            ],
            format: 'fmtp:%d %s'
        },
        {
            // a=control:streamid=0
            name: 'control',
            reg: /^control:(.*)/,
            format: 'control:%s'
        },
        {
            // a=rtcp:65179 IN IP4 193.84.77.194
            name: 'rtcp',
            reg: /^rtcp:(\d*)(?: (\S*) IP(\d) (\S*))?/,
            names: [
                'port',
                'netType',
                'ipVer',
                'address'
            ],
            format: function(o) {
                return o.address != null ? 'rtcp:%d %s IP%d %s' : 'rtcp:%d';
            }
        },
        {
            // a=rtcp-fb:98 trr-int 100
            push: 'rtcpFbTrrInt',
            reg: /^rtcp-fb:(\*|\d*) trr-int (\d*)/,
            names: [
                'payload',
                'value'
            ],
            format: 'rtcp-fb:%s trr-int %d'
        },
        {
            // a=rtcp-fb:98 nack rpsi
            push: 'rtcpFb',
            reg: /^rtcp-fb:(\*|\d*) ([\w-_]*)(?: ([\w-_]*))?/,
            names: [
                'payload',
                'type',
                'subtype'
            ],
            format: function(o) {
                return o.subtype != null ? 'rtcp-fb:%s %s %s' : 'rtcp-fb:%s %s';
            }
        },
        {
            // a=extmap:2 urn:ietf:params:rtp-hdrext:toffset
            // a=extmap:1/recvonly URI-gps-string
            // a=extmap:3 urn:ietf:params:rtp-hdrext:encrypt urn:ietf:params:rtp-hdrext:smpte-tc 25@600/24
            push: 'ext',
            reg: /^extmap:(\d+)(?:\/(\w+))?(?: (urn:ietf:params:rtp-hdrext:encrypt))? (\S*)(?: (\S*))?/,
            names: [
                'value',
                'direction',
                'encrypt-uri',
                'uri',
                'config'
            ],
            format: function(o) {
                return 'extmap:%d' + (o.direction ? '/%s' : '%v') + (o['encrypt-uri'] ? ' %s' : '%v') + ' %s' + (o.config ? ' %s' : '');
            }
        },
        {
            // a=extmap-allow-mixed
            name: 'extmapAllowMixed',
            reg: /^(extmap-allow-mixed)/
        },
        {
            // a=crypto:1 AES_CM_128_HMAC_SHA1_80 inline:PS1uQCVeeCFCanVmcjkpPywjNWhcYD0mXXtxaVBR|2^20|1:32
            push: 'crypto',
            reg: /^crypto:(\d*) ([\w_]*) (\S*)(?: (\S*))?/,
            names: [
                'id',
                'suite',
                'config',
                'sessionConfig'
            ],
            format: function(o) {
                return o.sessionConfig != null ? 'crypto:%d %s %s %s' : 'crypto:%d %s %s';
            }
        },
        {
            // a=setup:actpass
            name: 'setup',
            reg: /^setup:(\w*)/,
            format: 'setup:%s'
        },
        {
            // a=connection:new
            name: 'connectionType',
            reg: /^connection:(new|existing)/,
            format: 'connection:%s'
        },
        {
            // a=mid:1
            name: 'mid',
            reg: /^mid:([^\s]*)/,
            format: 'mid:%s'
        },
        {
            // a=msid:0c8b064d-d807-43b4-b434-f92a889d8587 98178685-d409-46e0-8e16-7ef0db0db64a
            name: 'msid',
            reg: /^msid:(.*)/,
            format: 'msid:%s'
        },
        {
            // a=ptime:20
            name: 'ptime',
            reg: /^ptime:(\d*(?:\.\d*)*)/,
            format: 'ptime:%d'
        },
        {
            // a=maxptime:60
            name: 'maxptime',
            reg: /^maxptime:(\d*(?:\.\d*)*)/,
            format: 'maxptime:%d'
        },
        {
            // a=sendrecv
            name: 'direction',
            reg: /^(sendrecv|recvonly|sendonly|inactive)/
        },
        {
            // a=ice-lite
            name: 'icelite',
            reg: /^(ice-lite)/
        },
        {
            // a=ice-ufrag:F7gI
            name: 'iceUfrag',
            reg: /^ice-ufrag:(\S*)/,
            format: 'ice-ufrag:%s'
        },
        {
            // a=ice-pwd:x9cml/YzichV2+XlhiMu8g
            name: 'icePwd',
            reg: /^ice-pwd:(\S*)/,
            format: 'ice-pwd:%s'
        },
        {
            // a=fingerprint:SHA-1 00:11:22:33:44:55:66:77:88:99:AA:BB:CC:DD:EE:FF:00:11:22:33
            name: 'fingerprint',
            reg: /^fingerprint:(\S*) (\S*)/,
            names: [
                'type',
                'hash'
            ],
            format: 'fingerprint:%s %s'
        },
        {
            // a=candidate:0 1 UDP 2113667327 203.0.113.1 54400 typ host
            // a=candidate:1162875081 1 udp 2113937151 192.168.34.75 60017 typ host generation 0 network-id 3 network-cost 10
            // a=candidate:3289912957 2 udp 1845501695 193.84.77.194 60017 typ srflx raddr 192.168.34.75 rport 60017 generation 0 network-id 3 network-cost 10
            // a=candidate:229815620 1 tcp 1518280447 192.168.150.19 60017 typ host tcptype active generation 0 network-id 3 network-cost 10
            // a=candidate:3289912957 2 tcp 1845501695 193.84.77.194 60017 typ srflx raddr 192.168.34.75 rport 60017 tcptype passive generation 0 network-id 3 network-cost 10
            push: 'candidates',
            reg: /^candidate:(\S*) (\d*) (\S*) (\d*) (\S*) (\d*) typ (\S*)(?: raddr (\S*) rport (\d*))?(?: tcptype (\S*))?(?: generation (\d*))?(?: network-id (\d*))?(?: network-cost (\d*))?/,
            names: [
                'foundation',
                'component',
                'transport',
                'priority',
                'ip',
                'port',
                'type',
                'raddr',
                'rport',
                'tcptype',
                'generation',
                'network-id',
                'network-cost'
            ],
            format: function(o) {
                var str = 'candidate:%s %d %s %d %s %d typ %s';
                str += o.raddr != null ? ' raddr %s rport %d' : '%v%v';
                // NB: candidate has three optional chunks, so %void middles one if it's missing
                str += o.tcptype != null ? ' tcptype %s' : '%v';
                if (o.generation != null) str += ' generation %d';
                str += o['network-id'] != null ? ' network-id %d' : '%v';
                str += o['network-cost'] != null ? ' network-cost %d' : '%v';
                return str;
            }
        },
        {
            // a=end-of-candidates (keep after the candidates line for readability)
            name: 'endOfCandidates',
            reg: /^(end-of-candidates)/
        },
        {
            // a=remote-candidates:1 203.0.113.1 54400 2 203.0.113.1 54401 ...
            name: 'remoteCandidates',
            reg: /^remote-candidates:(.*)/,
            format: 'remote-candidates:%s'
        },
        {
            // a=ice-options:google-ice
            name: 'iceOptions',
            reg: /^ice-options:(\S*)/,
            format: 'ice-options:%s'
        },
        {
            // a=ssrc:2566107569 cname:t9YU8M1UxTF8Y1A1
            push: 'ssrcs',
            reg: /^ssrc:(\d*) ([\w_-]*)(?::(.*))?/,
            names: [
                'id',
                'attribute',
                'value'
            ],
            format: function(o) {
                var str = 'ssrc:%d';
                if (o.attribute != null) {
                    str += ' %s';
                    if (o.value != null) str += ':%s';
                }
                return str;
            }
        },
        {
            // a=ssrc-group:FEC 1 2
            // a=ssrc-group:FEC-FR 3004364195 1080772241
            push: 'ssrcGroups',
            // token-char = %x21 / %x23-27 / %x2A-2B / %x2D-2E / %x30-39 / %x41-5A / %x5E-7E
            reg: /^ssrc-group:([\x21\x23\x24\x25\x26\x27\x2A\x2B\x2D\x2E\w]*) (.*)/,
            names: [
                'semantics',
                'ssrcs'
            ],
            format: 'ssrc-group:%s %s'
        },
        {
            // a=msid-semantic: WMS Jvlam5X3SX1OP6pn20zWogvaKJz5Hjf9OnlV
            name: 'msidSemantic',
            reg: /^msid-semantic:\s?(\w*) (\S*)/,
            names: [
                'semantic',
                'token'
            ],
            format: 'msid-semantic: %s %s' // space after ':' is not accidental
        },
        {
            // a=group:BUNDLE audio video
            push: 'groups',
            reg: /^group:(\w*) (.*)/,
            names: [
                'type',
                'mids'
            ],
            format: 'group:%s %s'
        },
        {
            // a=rtcp-mux
            name: 'rtcpMux',
            reg: /^(rtcp-mux)/
        },
        {
            // a=rtcp-rsize
            name: 'rtcpRsize',
            reg: /^(rtcp-rsize)/
        },
        {
            // a=sctpmap:5000 webrtc-datachannel 1024
            name: 'sctpmap',
            reg: /^sctpmap:([\w_/]*) (\S*)(?: (\S*))?/,
            names: [
                'sctpmapNumber',
                'app',
                'maxMessageSize'
            ],
            format: function(o) {
                return o.maxMessageSize != null ? 'sctpmap:%s %s %s' : 'sctpmap:%s %s';
            }
        },
        {
            // a=x-google-flag:conference
            name: 'xGoogleFlag',
            reg: /^x-google-flag:([^\s]*)/,
            format: 'x-google-flag:%s'
        },
        {
            // a=rid:1 send max-width=1280;max-height=720;max-fps=30;depend=0
            push: 'rids',
            reg: /^rid:([\d\w]+) (\w+)(?: ([\S| ]*))?/,
            names: [
                'id',
                'direction',
                'params'
            ],
            format: function(o) {
                return o.params ? 'rid:%s %s %s' : 'rid:%s %s';
            }
        },
        {
            // a=imageattr:97 send [x=800,y=640,sar=1.1,q=0.6] [x=480,y=320] recv [x=330,y=250]
            // a=imageattr:* send [x=800,y=640] recv *
            // a=imageattr:100 recv [x=320,y=240]
            push: 'imageattrs',
            reg: new RegExp(// a=imageattr:97
            "^imageattr:(\\d+|\\*)[\\s\\t]+(send|recv)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*)(?:[\\s\\t]+(recv|send)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*))?"),
            names: [
                'pt',
                'dir1',
                'attrs1',
                'dir2',
                'attrs2'
            ],
            format: function(o) {
                return 'imageattr:%s %s %s' + (o.dir2 ? ' %s %s' : '');
            }
        },
        {
            // a=simulcast:send 1,2,3;~4,~5 recv 6;~7,~8
            // a=simulcast:recv 1;4,5 send 6;7
            name: 'simulcast',
            reg: new RegExp(// a=simulcast:
            "^simulcast:(send|recv) ([a-zA-Z0-9\\-_~;,]+)(?:\\s?(send|recv) ([a-zA-Z0-9\\-_~;,]+))?$"),
            names: [
                'dir1',
                'list1',
                'dir2',
                'list2'
            ],
            format: function(o) {
                return 'simulcast:%s %s' + (o.dir2 ? ' %s %s' : '');
            }
        },
        {
            // old simulcast draft 03 (implemented by Firefox)
            //   https://tools.ietf.org/html/draft-ietf-mmusic-sdp-simulcast-03
            // a=simulcast: recv pt=97;98 send pt=97
            // a=simulcast: send rid=5;6;7 paused=6,7
            name: 'simulcast_03',
            reg: /^simulcast:[\s\t]+([\S+\s\t]+)$/,
            names: [
                'value'
            ],
            format: 'simulcast: %s'
        },
        {
            // a=framerate:25
            // a=framerate:29.97
            name: 'framerate',
            reg: /^framerate:(\d+(?:$|\.\d+))/,
            format: 'framerate:%s'
        },
        {
            // RFC4570
            // a=source-filter: incl IN IP4 239.5.2.31 10.1.15.5
            name: 'sourceFilter',
            reg: /^source-filter: *(excl|incl) (\S*) (IP4|IP6|\*) (\S*) (.*)/,
            names: [
                'filterMode',
                'netType',
                'addressTypes',
                'destAddress',
                'srcList'
            ],
            format: 'source-filter: %s %s %s %s %s'
        },
        {
            // a=bundle-only
            name: 'bundleOnly',
            reg: /^(bundle-only)/
        },
        {
            // a=label:1
            name: 'label',
            reg: /^label:(.+)/,
            format: 'label:%s'
        },
        {
            // RFC version 26 for SCTP over DTLS
            // https://tools.ietf.org/html/draft-ietf-mmusic-sctp-sdp-26#section-5
            name: 'sctpPort',
            reg: /^sctp-port:(\d+)$/,
            format: 'sctp-port:%s'
        },
        {
            // RFC version 26 for SCTP over DTLS
            // https://tools.ietf.org/html/draft-ietf-mmusic-sctp-sdp-26#section-6
            name: 'maxMessageSize',
            reg: /^max-message-size:(\d+)$/,
            format: 'max-message-size:%s'
        },
        {
            // RFC7273
            // a=ts-refclk:ptp=IEEE1588-2008:39-A7-94-FF-FE-07-CB-D0:37
            push: 'tsRefClocks',
            reg: /^ts-refclk:([^\s=]*)(?:=(\S*))?/,
            names: [
                'clksrc',
                'clksrcExt'
            ],
            format: function(o) {
                return 'ts-refclk:%s' + (o.clksrcExt != null ? '=%s' : '');
            }
        },
        {
            // RFC7273
            // a=mediaclk:direct=963214424
            name: 'mediaClk',
            reg: /^mediaclk:(?:id=(\S*))? *([^\s=]*)(?:=(\S*))?(?: *rate=(\d+)\/(\d+))?/,
            names: [
                'id',
                'mediaClockName',
                'mediaClockValue',
                'rateNumerator',
                'rateDenominator'
            ],
            format: function(o) {
                var str = 'mediaclk:';
                str += o.id != null ? 'id=%s %s' : '%v%s';
                str += o.mediaClockValue != null ? '=%s' : '';
                str += o.rateNumerator != null ? ' rate=%s' : '';
                str += o.rateDenominator != null ? '/%s' : '';
                return str;
            }
        },
        {
            // a=keywds:keywords
            name: 'keywords',
            reg: /^keywds:(.+)$/,
            format: 'keywds:%s'
        },
        {
            // a=content:main
            name: 'content',
            reg: /^content:(.+)/,
            format: 'content:%s'
        },
        // BFCP https://tools.ietf.org/html/rfc4583
        {
            // a=floorctrl:c-s
            name: 'bfcpFloorCtrl',
            reg: /^floorctrl:(c-only|s-only|c-s)/,
            format: 'floorctrl:%s'
        },
        {
            // a=confid:1
            name: 'bfcpConfId',
            reg: /^confid:(\d+)/,
            format: 'confid:%s'
        },
        {
            // a=userid:1
            name: 'bfcpUserId',
            reg: /^userid:(\d+)/,
            format: 'userid:%s'
        },
        {
            // a=floorid:1
            name: 'bfcpFloorId',
            reg: /^floorid:(.+) (?:m-stream|mstrm):(.+)/,
            names: [
                'id',
                'mStream'
            ],
            format: 'floorid:%s mstrm:%s'
        },
        {
            // any a= that we don't understand is kept verbatim on media.invalid
            push: 'invalid',
            names: [
                'value'
            ]
        }
    ]
};
// set sensible defaults to avoid polluting the grammar with boring details
Object.keys(grammar).forEach(function(key) {
    var objs = grammar[key];
    objs.forEach(function(obj) {
        if (!obj.reg) obj.reg = /(.*)/;
        if (!obj.format) obj.format = '%s';
    });
});

},{}],"e5N0y":[function(require,module,exports,__globalThis) {
var grammar = require("b6479ef68fdecd9");
// customized util.format - discards excess arguments and can void middle ones
var formatRegExp = /%[sdv%]/g;
var format = function(formatStr) {
    var i = 1;
    var args = arguments;
    var len = args.length;
    return formatStr.replace(formatRegExp, function(x) {
        if (i >= len) return x; // missing argument
        var arg = args[i];
        i += 1;
        switch(x){
            case '%%':
                return '%';
            case '%s':
                return String(arg);
            case '%d':
                return Number(arg);
            case '%v':
                return '';
        }
    });
// NB: we discard excess arguments - they are typically undefined from makeLine
};
var makeLine = function(type, obj, location) {
    var str = obj.format instanceof Function ? obj.format(obj.push ? location : location[obj.name]) : obj.format;
    var args = [
        type + '=' + str
    ];
    if (obj.names) for(var i = 0; i < obj.names.length; i += 1){
        var n = obj.names[i];
        if (obj.name) args.push(location[obj.name][n]);
        else args.push(location[obj.names[i]]);
    }
    else args.push(location[obj.name]);
    return format.apply(null, args);
};
// RFC specified order
// TODO: extend this with all the rest
var defaultOuterOrder = [
    'v',
    'o',
    's',
    'i',
    'u',
    'e',
    'p',
    'c',
    'b',
    't',
    'r',
    'z',
    'a'
];
var defaultInnerOrder = [
    'i',
    'c',
    'b',
    'a'
];
module.exports = function(session, opts) {
    opts = opts || {};
    // ensure certain properties exist
    if (session.version == null) session.version = 0; // 'v=0' must be there (only defined version atm)
    if (session.name == null) session.name = ' '; // 's= ' must be there if no meaningful name set
    session.media.forEach(function(mLine) {
        if (mLine.payloads == null) mLine.payloads = '';
    });
    var outerOrder = opts.outerOrder || defaultOuterOrder;
    var innerOrder = opts.innerOrder || defaultInnerOrder;
    var sdp = [];
    // loop through outerOrder for matching properties on session
    outerOrder.forEach(function(type) {
        grammar[type].forEach(function(obj) {
            if (obj.name in session && session[obj.name] != null) sdp.push(makeLine(type, obj, session));
            else if (obj.push in session && session[obj.push] != null) session[obj.push].forEach(function(el) {
                sdp.push(makeLine(type, obj, el));
            });
        });
    });
    // then for each media line, follow the innerOrder
    session.media.forEach(function(mLine) {
        sdp.push(makeLine('m', grammar.m[0], mLine));
        innerOrder.forEach(function(type) {
            grammar[type].forEach(function(obj) {
                if (obj.name in mLine && mLine[obj.name] != null) sdp.push(makeLine(type, obj, mLine));
                else if (obj.push in mLine && mLine[obj.push] != null) mLine[obj.push].forEach(function(el) {
                    sdp.push(makeLine(type, obj, el));
                });
            });
        });
    });
    return sdp.join('\r\n') + '\r\n';
};

},{"b6479ef68fdecd9":"lEW9g"}]},["1qaS4","a0t4e"], "a0t4e", "parcelRequirec265", {})

//# sourceMappingURL=100ms-test.31b563d9.js.map
