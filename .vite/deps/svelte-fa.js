import {
  add_locations,
  append_styles,
  bind_this,
  check_target,
  cleanup_styles,
  hmr,
  if_block,
  init,
  legacy_api,
  prop,
  set_attribute,
  set_class,
  slot
} from "./chunk-W6JDEWTY.js";
import {
  append,
  comment,
  ns_template,
  set_text,
  template
} from "./chunk-6DLO4GF2.js";
import {
  FILENAME,
  HMR,
  child,
  deep_read_state,
  equals,
  first_child,
  get,
  legacy_pre_effect,
  legacy_pre_effect_reset,
  mark_module_end,
  mark_module_start,
  mutable_state,
  mutate,
  pop,
  push,
  reset,
  set,
  sibling,
  strict_equals,
  template_effect
} from "./chunk-O3VKSJWS.js";
import "./chunk-W5ZXUK4B.js";
import "./chunk-SL53S5EF.js";
import "./chunk-X2E7XWBH.js";
import "./chunk-UQELHYNF.js";
import "./chunk-UGBVNEQM.js";

// node_modules/.deno/svelte-fa@4.0.3/node_modules/svelte-fa/dist/utils.js
function setCustomFontSize(element, size) {
  if (size && size !== "lg" && size !== "sm" && size !== "xs") {
    element.style.fontSize = size.replace("x", "em");
  } else {
    element.style.fontSize = "";
  }
}
function getTransform(scale, translateX, translateY, rotate, flip, translateTimes = 1, translateUnit = "", rotateUnit = "") {
  let flipX = 1;
  let flipY = 1;
  if (flip) {
    if (flip == "horizontal") {
      flipX = -1;
    } else if (flip == "vertical") {
      flipY = -1;
    } else {
      flipX = flipY = -1;
    }
  }
  if (typeof scale === "string") {
    scale = parseFloat(scale);
  }
  if (typeof translateX === "string") {
    translateX = parseFloat(translateX);
  }
  if (typeof translateY === "string") {
    translateY = parseFloat(translateY);
  }
  const x = `${translateX * translateTimes}${translateUnit}`;
  const y = `${translateY * translateTimes}${translateUnit}`;
  let output = `translate(${x},${y}) scale(${flipX * scale},${flipY * scale})`;
  if (rotate) {
    output += ` rotate(${rotate}${rotateUnit})`;
  }
  return output;
}

// node_modules/.deno/svelte-fa@4.0.3/node_modules/svelte-fa/dist/fa.svelte
mark_module_start();
Fa[FILENAME] = "node_modules/.deno/svelte-fa@4.0.3/node_modules/svelte-fa/dist/fa.svelte";
var root_2 = add_locations(ns_template(`<title class="s-Y4nXb6iUKUqD"> </title>`), Fa[FILENAME], [[55, 6]]);
var root_3 = add_locations(ns_template(`<path class="s-Y4nXb6iUKUqD"></path>`), Fa[FILENAME], [[60, 10]]);
var root_4 = add_locations(ns_template(`<path class="s-Y4nXb6iUKUqD"></path><path class="s-Y4nXb6iUKUqD"></path>`, 1), Fa[FILENAME], [[67, 10], [73, 10]]);
var root_1 = add_locations(ns_template(`<svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg"><!><g class="s-Y4nXb6iUKUqD"><g class="s-Y4nXb6iUKUqD"><!></g></g></svg>`), Fa[FILENAME], [
  [35, 2, [[57, 4, [[58, 6]]]]]
]);
var $$css = {
  hash: "s-Y4nXb6iUKUqD",
  code: "\n  .svelte-fa-base {\n    height: 1em;\n    overflow: visible;\n    transform-origin: center;\n    vertical-align: -0.125em;\n  }\n\n  .svelte-fa-fw {\n    text-align: center;\n    width: 1.25em;\n  }\n\n  .svelte-fa-pull-left.s-Y4nXb6iUKUqD {\n    float: left;\n  }\n\n  .svelte-fa-pull-right.s-Y4nXb6iUKUqD {\n    float: right;\n  }\n\n  .svelte-fa-size-lg.s-Y4nXb6iUKUqD {\n    font-size: 1.33333em;\n    line-height: 0.75em;\n    vertical-align: -0.225em;\n  }\n\n  .svelte-fa-size-sm.s-Y4nXb6iUKUqD {\n    font-size: 0.875em;\n  }\n\n  .svelte-fa-size-xs.s-Y4nXb6iUKUqD {\n    font-size: 0.75em;\n  }\n\n  .spin.s-Y4nXb6iUKUqD {\n    animation: s-Y4nXb6iUKUqD-spin 2s 0s infinite linear;\n  }\n\n  .pulse.s-Y4nXb6iUKUqD {\n    animation: s-Y4nXb6iUKUqD-spin 1s infinite steps(8);\n  }\n\n  @keyframes s-Y4nXb6iUKUqD-spin {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmEuc3ZlbHRlIiwibWFwcGluZ3MiOiI7QUFxRkEsRUFBVSxlQUFnQixDQUFDO0FBQzNCLElBQUksV0FBVztBQUNmLElBQUksaUJBQWlCO0FBQ3JCLElBQUksd0JBQXdCO0FBQzVCLElBQUksd0JBQXdCO0FBQzVCOztBQUVBLEVBQVUsYUFBYyxDQUFDO0FBQ3pCLElBQUksa0JBQWtCO0FBQ3RCLElBQUksYUFBYTtBQUNqQjs7QUFFQSxFQUFFLG1DQUFvQixDQUFDO0FBQ3ZCLElBQUksV0FBVztBQUNmOztBQUVBLEVBQUUsb0NBQXFCLENBQUM7QUFDeEIsSUFBSSxZQUFZO0FBQ2hCOztBQUVBLEVBQUUsaUNBQWtCLENBQUM7QUFDckIsSUFBSSxvQkFBb0I7QUFDeEIsSUFBSSxtQkFBbUI7QUFDdkIsSUFBSSx3QkFBd0I7QUFDNUI7O0FBRUEsRUFBRSxpQ0FBa0IsQ0FBQztBQUNyQixJQUFJLGtCQUFrQjtBQUN0Qjs7QUFFQSxFQUFFLGlDQUFrQixDQUFDO0FBQ3JCLElBQUksaUJBQWlCO0FBQ3JCOztBQUVBLEVBQUUsb0JBQUssQ0FBQztBQUNSLElBQUksMEJBQVcsMEJBQTBCO0FBQ3pDOztBQUVBLEVBQUUscUJBQU0sQ0FBQztBQUNULElBQUksMEJBQVcseUJBQXlCO0FBQ3hDOztBQUVBLEVBQUUsMEJBQVc7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiZmEuc3ZlbHRlIl19 */"
};
function Fa($$anchor, $$props) {
  check_target(new.target);
  push($$props, false, Fa);
  append_styles($$anchor, $$css);
  const i = mutable_state();
  const transform = mutable_state();
  let clazz = prop($$props, "class", 24, () => void 0);
  let id = prop($$props, "id", 24, () => void 0);
  let style = prop($$props, "style", 24, () => void 0);
  let icon = prop($$props, "icon", 8);
  let title = prop($$props, "title", 24, () => void 0);
  let size = prop($$props, "size", 24, () => void 0);
  let color = prop($$props, "color", 24, () => void 0);
  let fw = prop($$props, "fw", 8, false);
  let pull = prop($$props, "pull", 24, () => void 0);
  let scale = prop($$props, "scale", 8, 1);
  let translateX = prop($$props, "translateX", 8, 0);
  let translateY = prop($$props, "translateY", 8, 0);
  let rotate = prop($$props, "rotate", 24, () => void 0);
  let flip = prop($$props, "flip", 24, () => void 0);
  let spin = prop($$props, "spin", 8, false);
  let pulse = prop($$props, "pulse", 8, false);
  let primaryColor = prop($$props, "primaryColor", 8, "");
  let secondaryColor = prop($$props, "secondaryColor", 8, "");
  let primaryOpacity = prop($$props, "primaryOpacity", 8, 1);
  let secondaryOpacity = prop($$props, "secondaryOpacity", 8, 0.4);
  let swapOpacity = prop($$props, "swapOpacity", 8, false);
  let svgElement = mutable_state();
  legacy_pre_effect(
    () => (get(svgElement), deep_read_state(size()), setCustomFontSize),
    () => {
      get(svgElement) && size() && setCustomFontSize(get(svgElement), size());
    }
  );
  legacy_pre_effect(() => deep_read_state(icon()), () => {
    set(i, icon() && icon().icon || [0, 0, "", [], ""]);
  });
  legacy_pre_effect(
    () => (getTransform, deep_read_state(scale()), deep_read_state(translateX()), deep_read_state(translateY()), deep_read_state(rotate()), deep_read_state(flip())),
    () => {
      set(transform, getTransform(scale(), translateX(), translateY(), rotate(), flip(), 512));
    }
  );
  legacy_pre_effect_reset();
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent_2 = ($$anchor2) => {
      var svg = root_1();
      let classes;
      var node_1 = child(svg);
      {
        var consequent = ($$anchor3) => {
          var title_1 = root_2();
          var text = child(title_1, true);
          reset(title_1);
          template_effect(() => set_text(text, title()));
          append($$anchor3, title_1);
        };
        if_block(node_1, ($$render) => {
          if (title()) $$render(consequent);
        });
      }
      var g = sibling(node_1);
      var g_1 = child(g);
      var node_2 = child(g_1);
      {
        var consequent_1 = ($$anchor3) => {
          var path = root_3();
          template_effect(() => {
            set_attribute(path, "d", get(i)[4]);
            set_attribute(path, "fill", color() || primaryColor() || "currentColor");
            set_attribute(path, "transform", `translate(${get(i)[0] / -2} ${get(i)[1] / -2})`);
          });
          append($$anchor3, path);
        };
        var alternate = ($$anchor3) => {
          var fragment_1 = root_4();
          var path_1 = first_child(fragment_1);
          var path_2 = sibling(path_1);
          template_effect(() => {
            set_attribute(path_1, "d", get(i)[4][0]);
            set_attribute(path_1, "fill", secondaryColor() || color() || "currentColor");
            set_attribute(path_1, "fill-opacity", equals(swapOpacity(), false, false) ? primaryOpacity() : secondaryOpacity());
            set_attribute(path_1, "transform", `translate(${get(i)[0] / -2} ${get(i)[1] / -2})`);
            set_attribute(path_2, "d", get(i)[4][1]);
            set_attribute(path_2, "fill", primaryColor() || color() || "currentColor");
            set_attribute(path_2, "fill-opacity", equals(swapOpacity(), false, false) ? secondaryOpacity() : primaryOpacity());
            set_attribute(path_2, "transform", `translate(${get(i)[0] / -2} ${get(i)[1] / -2})`);
          });
          append($$anchor3, fragment_1);
        };
        if_block(node_2, ($$render) => {
          if (equals(typeof get(i)[4], "string")) $$render(consequent_1);
          else $$render(alternate, false);
        });
      }
      reset(g_1);
      reset(g);
      reset(svg);
      bind_this(svg, ($$value) => set(svgElement, $$value), () => get(svgElement));
      template_effect(() => {
        set_attribute(svg, "id", id());
        classes = set_class(svg, 0, `svelte-fa svelte-fa-base ${clazz() ?? ""}`, "s-Y4nXb6iUKUqD", classes, {
          pulse: pulse(),
          "svelte-fa-size-lg": strict_equals(size(), "lg"),
          "svelte-fa-size-sm": strict_equals(size(), "sm"),
          "svelte-fa-size-xs": strict_equals(size(), "xs"),
          "svelte-fa-fw": fw(),
          "svelte-fa-pull-left": strict_equals(pull(), "left"),
          "svelte-fa-pull-right": strict_equals(pull(), "right"),
          spin: spin()
        });
        set_attribute(svg, "style", style());
        set_attribute(svg, "viewBox", `0 0 ${get(i)[0] ?? ""} ${get(i)[1] ?? ""}`);
        set_attribute(g, "transform", `translate(${get(i)[0] / 2} ${get(i)[1] / 2})`);
        set_attribute(g, "transform-origin", `${get(i)[0] / 4} 0`);
        set_attribute(g_1, "transform", get(transform));
      });
      append($$anchor2, svg);
    };
    if_block(node, ($$render) => {
      if (get(i)[4]) $$render(consequent_2);
    });
  }
  append($$anchor, fragment);
  return pop({ ...legacy_api() });
}
if (import.meta.hot) {
  Fa = hmr(Fa, () => Fa[HMR].source);
  import.meta.hot.accept((module) => {
    cleanup_styles("s-Y4nXb6iUKUqD");
    module.default[HMR].source = Fa[HMR].source;
    set(Fa[HMR].source, module.default[HMR].original);
  });
}
var fa_default = Fa;
mark_module_end(Fa);

// node_modules/.deno/svelte-fa@4.0.3/node_modules/svelte-fa/dist/fa-layers.svelte
mark_module_start();
Fa_layers[FILENAME] = "node_modules/.deno/svelte-fa@4.0.3/node_modules/svelte-fa/dist/fa-layers.svelte";
var root = add_locations(template(`<span><!></span>`), Fa_layers[FILENAME], [[14, 0]]);
var $$css2 = {
  hash: "s-ntfg3D48QQdP",
  code: "\n  .svelte-fa-layers.s-ntfg3D48QQdP {\n    display: inline-block;\n    position: relative;\n  }\n\n  .svelte-fa-layers.s-ntfg3D48QQdP .svelte-fa {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    top: 0;\n    margin: auto;\n    text-align: center;\n  }\n\n  .svelte-fa-layers.s-ntfg3D48QQdP .svelte-fa-layers-text {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n\n  .svelte-fa-layers.s-ntfg3D48QQdP .svelte-fa-layers-text span {\n    display: inline-block;\n  }\n\n  .svelte-fa-pull-left.s-ntfg3D48QQdP {\n    float: left;\n  }\n\n  .svelte-fa-pull-right.s-ntfg3D48QQdP {\n    float: right;\n  }\n\n  .svelte-fa-size-lg.s-ntfg3D48QQdP {\n    font-size: 1.33333em;\n    line-height: 0.75em;\n    vertical-align: -0.225em;\n  }\n\n  .svelte-fa-size-sm.s-ntfg3D48QQdP {\n    font-size: 0.875em;\n  }\n\n  .svelte-fa-size-xs.s-ntfg3D48QQdP {\n    font-size: 0.75em;\n  }\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmEtbGF5ZXJzLnN2ZWx0ZSIsIm1hcHBpbmdzIjoiO0FBNkJBLEVBQUUsZ0NBQWlCLENBQUM7QUFDcEIsSUFBSSxxQkFBcUI7QUFDekIsSUFBSSxrQkFBa0I7QUFDdEI7O0FBRUEsRUFBRSxnQ0FBaUIsQ0FBUyxVQUFXLENBQUM7QUFDeEMsSUFBSSxrQkFBa0I7QUFDdEIsSUFBSSxTQUFTO0FBQ2IsSUFBSSxPQUFPO0FBQ1gsSUFBSSxRQUFRO0FBQ1osSUFBSSxNQUFNO0FBQ1YsSUFBSSxZQUFZO0FBQ2hCLElBQUksa0JBQWtCO0FBQ3RCOztBQUVBLEVBQUUsZ0NBQWlCLENBQVMsc0JBQXVCLENBQUM7QUFDcEQsSUFBSSxrQkFBa0I7QUFDdEIsSUFBSSxRQUFRO0FBQ1osSUFBSSxTQUFTO0FBQ2IsSUFBSSxnQ0FBZ0M7QUFDcEM7O0FBRUEsRUFBRSxnQ0FBaUIsQ0FBUywyQkFBNEIsQ0FBQztBQUN6RCxJQUFJLHFCQUFxQjtBQUN6Qjs7QUFFQSxFQUFFLG1DQUFvQixDQUFDO0FBQ3ZCLElBQUksV0FBVztBQUNmOztBQUVBLEVBQUUsb0NBQXFCLENBQUM7QUFDeEIsSUFBSSxZQUFZO0FBQ2hCOztBQUVBLEVBQUUsaUNBQWtCLENBQUM7QUFDckIsSUFBSSxvQkFBb0I7QUFDeEIsSUFBSSxtQkFBbUI7QUFDdkIsSUFBSSx3QkFBd0I7QUFDNUI7O0FBRUEsRUFBRSxpQ0FBa0IsQ0FBQztBQUNyQixJQUFJLGtCQUFrQjtBQUN0Qjs7QUFFQSxFQUFFLGlDQUFrQixDQUFDO0FBQ3JCLElBQUksaUJBQWlCO0FBQ3JCIiwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJmYS1sYXllcnMuc3ZlbHRlIl19 */"
};
function Fa_layers($$anchor, $$props) {
  check_target(new.target);
  push($$props, false, Fa_layers);
  append_styles($$anchor, $$css2);
  let clazz = prop($$props, "class", 24, () => void 0);
  let id = prop($$props, "id", 24, () => void 0);
  let style = prop($$props, "style", 24, () => void 0);
  let size = prop($$props, "size", 24, () => void 0);
  let pull = prop($$props, "pull", 24, () => void 0);
  let containerElement = mutable_state();
  legacy_pre_effect(
    () => (get(containerElement), deep_read_state(size()), setCustomFontSize),
    () => {
      get(containerElement) && size() && setCustomFontSize(get(containerElement), size());
    }
  );
  legacy_pre_effect_reset();
  init();
  var span = root();
  let classes;
  var node = child(span);
  slot(node, $$props, "default", {}, null);
  reset(span);
  bind_this(span, ($$value) => set(containerElement, $$value), () => get(containerElement));
  template_effect(() => {
    set_attribute(span, "id", id());
    classes = set_class(span, 1, `svelte-fa-layers svelte-fa-base svelte-fa-fw ${clazz() ?? ""}`, "s-ntfg3D48QQdP", classes, {
      "svelte-fa-pull-left": strict_equals(pull(), "left"),
      "svelte-fa-pull-right": strict_equals(pull(), "right"),
      "svelte-fa-size-lg": strict_equals(size(), "lg"),
      "svelte-fa-size-sm": strict_equals(size(), "sm"),
      "svelte-fa-size-xs": strict_equals(size(), "xs")
    });
    set_attribute(span, "style", style());
  });
  append($$anchor, span);
  return pop({ ...legacy_api() });
}
if (import.meta.hot) {
  Fa_layers = hmr(Fa_layers, () => Fa_layers[HMR].source);
  import.meta.hot.accept((module) => {
    cleanup_styles("s-ntfg3D48QQdP");
    module.default[HMR].source = Fa_layers[HMR].source;
    set(Fa_layers[HMR].source, module.default[HMR].original);
  });
}
var fa_layers_default = Fa_layers;
mark_module_end(Fa_layers);

// node_modules/.deno/svelte-fa@4.0.3/node_modules/svelte-fa/dist/fa-layers-text.svelte
mark_module_start();
Fa_layers_text[FILENAME] = "node_modules/.deno/svelte-fa@4.0.3/node_modules/svelte-fa/dist/fa-layers-text.svelte";
var root2 = add_locations(template(`<span><span><!></span></span>`), Fa_layers_text[FILENAME], [[24, 0, [[26, 2]]]]);
var $$css3 = {
  hash: "s-0V4f3eoxGGsA",
  code: "\n  .container.s-0V4f3eoxGGsA {\n    display: inline-block;\n    height: auto;\n  }\n\n  .svelte-fa-size-lg.s-0V4f3eoxGGsA {\n    font-size: 1.33333em;\n    line-height: 0.75em;\n    vertical-align: -0.225em;\n  }\n\n  .svelte-fa-size-sm.s-0V4f3eoxGGsA {\n    font-size: 0.875em;\n  }\n\n  .svelte-fa-size-xs.s-0V4f3eoxGGsA {\n    font-size: 0.75em;\n  }\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmEtbGF5ZXJzLXRleHQuc3ZlbHRlIiwibWFwcGluZ3MiOiI7QUF1Q0EsRUFBRSx5QkFBVSxDQUFDO0FBQ2IsSUFBSSxxQkFBcUI7QUFDekIsSUFBSSxZQUFZO0FBQ2hCOztBQUVBLEVBQUUsaUNBQWtCLENBQUM7QUFDckIsSUFBSSxvQkFBb0I7QUFDeEIsSUFBSSxtQkFBbUI7QUFDdkIsSUFBSSx3QkFBd0I7QUFDNUI7O0FBRUEsRUFBRSxpQ0FBa0IsQ0FBQztBQUNyQixJQUFJLGtCQUFrQjtBQUN0Qjs7QUFFQSxFQUFFLGlDQUFrQixDQUFDO0FBQ3JCLElBQUksaUJBQWlCO0FBQ3JCIiwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJmYS1sYXllcnMtdGV4dC5zdmVsdGUiXX0= */"
};
function Fa_layers_text($$anchor, $$props) {
  check_target(new.target);
  push($$props, false, Fa_layers_text);
  append_styles($$anchor, $$css3);
  const transform = mutable_state();
  let clazz = prop($$props, "class", 24, () => void 0);
  let id = prop($$props, "id", 24, () => void 0);
  let style = prop($$props, "style", 24, () => void 0);
  let size = prop($$props, "size", 24, () => void 0);
  let color = prop($$props, "color", 8, "");
  let scale = prop($$props, "scale", 8, 1);
  let translateX = prop($$props, "translateX", 8, 0);
  let translateY = prop($$props, "translateY", 8, 0);
  let rotate = prop($$props, "rotate", 24, () => void 0);
  let flip = prop($$props, "flip", 24, () => void 0);
  let containerElement = mutable_state();
  legacy_pre_effect(
    () => (get(containerElement), deep_read_state(size()), setCustomFontSize),
    () => {
      get(containerElement) && size() && setCustomFontSize(get(containerElement), size());
    }
  );
  legacy_pre_effect(
    () => (get(containerElement), deep_read_state(color())),
    () => {
      get(containerElement) && color() && mutate(containerElement, get(containerElement).style.color = color());
    }
  );
  legacy_pre_effect(
    () => (getTransform, deep_read_state(scale()), deep_read_state(translateX()), deep_read_state(translateY()), deep_read_state(rotate()), deep_read_state(flip())),
    () => {
      set(transform, getTransform(scale(), translateX(), translateY(), rotate(), flip(), 1, "em", "deg"));
    }
  );
  legacy_pre_effect(
    () => (get(containerElement), get(transform)),
    () => {
      get(containerElement) && get(transform) && mutate(containerElement, get(containerElement).style.transform = get(transform));
    }
  );
  legacy_pre_effect_reset();
  init();
  var span = root2();
  var span_1 = child(span);
  let classes;
  var node = child(span_1);
  slot(node, $$props, "default", {}, null);
  reset(span_1);
  bind_this(span_1, ($$value) => set(containerElement, $$value), () => get(containerElement));
  reset(span);
  template_effect(() => {
    set_attribute(span, "id", id());
    set_class(span, 1, `svelte-fa-layers-text ${clazz() ?? ""}`, "s-0V4f3eoxGGsA");
    classes = set_class(span_1, 1, "svelte-fa-base container s-0V4f3eoxGGsA", null, classes, {
      "svelte-fa-size-lg": strict_equals(size(), "lg"),
      "svelte-fa-size-sm": strict_equals(size(), "sm"),
      "svelte-fa-size-xs": strict_equals(size(), "xs")
    });
    set_attribute(span_1, "style", style());
  });
  append($$anchor, span);
  return pop({ ...legacy_api() });
}
if (import.meta.hot) {
  Fa_layers_text = hmr(Fa_layers_text, () => Fa_layers_text[HMR].source);
  import.meta.hot.accept((module) => {
    cleanup_styles("s-0V4f3eoxGGsA");
    module.default[HMR].source = Fa_layers_text[HMR].source;
    set(Fa_layers_text[HMR].source, module.default[HMR].original);
  });
}
var fa_layers_text_default = Fa_layers_text;
mark_module_end(Fa_layers_text);

// node_modules/.deno/svelte-fa@4.0.3/node_modules/svelte-fa/dist/index.js
var dist_default = fa_default;
export {
  fa_default as Fa,
  fa_layers_default as FaLayers,
  fa_layers_text_default as FaLayersText,
  dist_default as default
};
//# sourceMappingURL=svelte-fa.js.map
