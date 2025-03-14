import {
  createSubscriber
} from "./chunk-X6XJE3KK.js";
import {
  __privateAdd,
  __privateGet,
  __privateSet
} from "./chunk-UGBVNEQM.js";

// node_modules/.deno/svelte@5.22.4/node_modules/svelte/src/reactivity/reactive-value.js
var _fn, _subscribe;
var ReactiveValue = class {
  /**
   *
   * @param {() => T} fn
   * @param {(update: () => void) => void} onsubscribe
   */
  constructor(fn, onsubscribe) {
    __privateAdd(this, _fn);
    __privateAdd(this, _subscribe);
    __privateSet(this, _fn, fn);
    __privateSet(this, _subscribe, createSubscriber(onsubscribe));
  }
  get current() {
    __privateGet(this, _subscribe).call(this);
    return __privateGet(this, _fn).call(this);
  }
};
_fn = new WeakMap();
_subscribe = new WeakMap();

export {
  ReactiveValue
};
//# sourceMappingURL=chunk-HWIQLP67.js.map
