import m from "mithril";
import listTile from "polythene-list-tile";
import { filterSupportedAttributes } from "polythene-core";
import { customTheme } from "./theme";
import classes from "./classes";

const view = vnode => {
  const attrs = vnode.attrs;
  const element = attrs.element || "div";
  const props = Object.assign(
    {},
    filterSupportedAttributes(attrs),
    {
      class: [
        classes.component,
        attrs.borders ? classes.borders : null,
        attrs.indentedBorders ? classes.indentedBorders : null,
        attrs.header ? classes.hasHeader : null,
        attrs.compact ? classes.compact : null,
        attrs.tone === "dark" ? "pe-dark-tone" : null,
        attrs.tone === "light" ? "pe-light-tone" : null,
        attrs.class
      ].join(" "),
    }
  );
  let headerOpts;
  if (attrs.header) {
    headerOpts = Object.assign({}, attrs.header);
    headerOpts.class = [
      classes.header,
      headerOpts.class || null
    ].join(" ");
  }
  const content = [
    headerOpts ? m(listTile, headerOpts) : null,
    attrs.tiles
      ? attrs.tiles
      : attrs.content
        ? attrs.content
        : attrs.children || vnode.children
  ];
  return m(element, props, [attrs.before, content, attrs.after]);
};

export default {
  theme: customTheme, // accepts (selector, vars)
  view
};