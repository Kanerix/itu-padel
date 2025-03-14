import {
  ReactiveValue
} from "./chunk-HWIQLP67.js";
import "./chunk-X6XJE3KK.js";
import "./chunk-SC7S7I7C.js";
import "./chunk-W6JDEWTY.js";
import "./chunk-6DLO4GF2.js";
import {
  get,
  on,
  set,
  source
} from "./chunk-O3VKSJWS.js";
import {
  true_default
} from "./chunk-W5ZXUK4B.js";
import "./chunk-UQELHYNF.js";
import {
  __privateAdd,
  __privateGet,
  __privateMethod
} from "./chunk-UGBVNEQM.js";

// node_modules/.deno/svelte@5.22.4/node_modules/svelte/src/reactivity/window/index.js
var scrollX = new ReactiveValue(
  true_default ? () => window.scrollX : () => void 0,
  (update) => on(window, "scroll", update)
);
var scrollY = new ReactiveValue(
  true_default ? () => window.scrollY : () => void 0,
  (update) => on(window, "scroll", update)
);
var innerWidth = new ReactiveValue(
  true_default ? () => window.innerWidth : () => void 0,
  (update) => on(window, "resize", update)
);
var innerHeight = new ReactiveValue(
  true_default ? () => window.innerHeight : () => void 0,
  (update) => on(window, "resize", update)
);
var outerWidth = new ReactiveValue(
  true_default ? () => window.outerWidth : () => void 0,
  (update) => on(window, "resize", update)
);
var outerHeight = new ReactiveValue(
  true_default ? () => window.outerHeight : () => void 0,
  (update) => on(window, "resize", update)
);
var screenLeft = new ReactiveValue(
  true_default ? () => window.screenLeft : () => void 0,
  (update) => {
    let value = window.screenLeft;
    let frame = requestAnimationFrame(function check() {
      frame = requestAnimationFrame(check);
      if (value !== (value = window.screenLeft)) {
        update();
      }
    });
    return () => {
      cancelAnimationFrame(frame);
    };
  }
);
var screenTop = new ReactiveValue(
  true_default ? () => window.screenTop : () => void 0,
  (update) => {
    let value = window.screenTop;
    let frame = requestAnimationFrame(function check() {
      frame = requestAnimationFrame(check);
      if (value !== (value = window.screenTop)) {
        update();
      }
    });
    return () => {
      cancelAnimationFrame(frame);
    };
  }
);
var online = new ReactiveValue(
  true_default ? () => navigator.onLine : () => void 0,
  (update) => {
    const unsub_online = on(window, "online", update);
    const unsub_offline = on(window, "offline", update);
    return () => {
      unsub_online();
      unsub_offline();
    };
  }
);
var _dpr, _DevicePixelRatio_instances, update_fn, _a;
var devicePixelRatio = new (_a = class {
  constructor() {
    __privateAdd(this, _DevicePixelRatio_instances);
    __privateAdd(this, _dpr, source(true_default ? window.devicePixelRatio : void 0));
    if (true_default) {
      __privateMethod(this, _DevicePixelRatio_instances, update_fn).call(this);
    }
  }
  get current() {
    get(__privateGet(this, _dpr));
    return true_default ? window.devicePixelRatio : void 0;
  }
}, _dpr = new WeakMap(), _DevicePixelRatio_instances = new WeakSet(), update_fn = function() {
  const off = on(
    window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),
    "change",
    () => {
      set(__privateGet(this, _dpr), window.devicePixelRatio);
      off();
      __privateMethod(this, _DevicePixelRatio_instances, update_fn).call(this);
    }
  );
}, _a)();
export {
  devicePixelRatio,
  innerHeight,
  innerWidth,
  online,
  outerHeight,
  outerWidth,
  screenLeft,
  screenTop,
  scrollX,
  scrollY
};
//# sourceMappingURL=svelte_reactivity_window.js.map
