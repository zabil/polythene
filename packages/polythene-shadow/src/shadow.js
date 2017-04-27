import m from "mithril";
import { filterSupportedAttributes } from "polythene-core";
import { customTheme } from "./theme";
import classes from "./classes";

const view = vnode => {
  const attrs = vnode.attrs;
  const depthClass = `${classes.depth_n}${Math.min(5, attrs.z !== undefined ? attrs.z : 1)}`;
  const element = attrs.element || "div";
  const props = Object.assign(
    {},
    filterSupportedAttributes(attrs),
    {
      class: [
        classes.component,
        attrs.animated && classes.animated,
        attrs.class
      ].join(" ")
    }
  );
  const content = attrs.content
    ? attrs.content
    : attrs.children || vnode.children;
  const shadowContent = [
    content,
    m("div", {
      class: [classes.bottomShadow, depthClass].join(" ")
    }),
    m("div", {
      class: [classes.topShadow, depthClass].join(" ")
    })
  ];
  return m(element, props, [attrs.before, shadowContent, attrs.after]);
};

export default {
  theme: customTheme, // accepts (selector, vars)
  view
};