
const style = (scopes, selector, componentVars, tint) => [{
  [scopes.map(s => s + selector).join(",")]: {
    color: componentVars["color_" + tint],
    backgroundColor: componentVars["color_" + tint + "_background"] || componentVars["color_background"],
    " .pe-button__wash": {
      opacity: componentVars["color_" + tint + "_wash_opacity"]
    },

    ".pe-button--focus, &.pe-button--selected": {
      " .pe-button__focus": {
        opacity: componentVars["color_" + tint + "_focus_opacity"],
        backgroundColor: "currentcolor"
      }
    },

    ".pe-button--disabled": {
      color: componentVars["color_" + tint + "_disabled"]
    }
  }
}];

const noTouchStyle = (scopes, selector, componentVars, tint) => {
  const backgroundColor = tint === "light"
    ? "currentcolor"
    : componentVars["color_" + tint];
  return [{
    [scopes.map(s => s + selector + ":hover").join(",")]: {
      " .pe-button__wash": {
        backgroundColor: backgroundColor
      }
    }
  }];
};

export default (selector, componentVars) => [
  style([".pe-dark-theme", ".pe-dark-theme "], selector, componentVars, "dark"), // has/inside dark theme
  style(["", ".pe-light-theme", ".pe-light-theme "], selector, componentVars, "light"), // normal, has/inside light theme
  noTouchStyle(["html.pe-no-touch .pe-dark-theme "], selector, componentVars, "dark"), // inside dark theme
  noTouchStyle(["html.pe-no-touch ", "html.pe-no-touch .pe-light-theme "], selector, componentVars, "light"),
];
