import m from 'mithril';
import { icon } from 'polythene-icon';
import { ripple } from 'polythene-ripple';
import { filterSupportedAttributes } from 'polythene-core';
import { flex, mixin, styler } from 'polythene-css';
import { vars } from 'polythene-theme';

var rgba = vars.rgba;

// SPECS
//
// heights:
// single line: 48
// single line, dense: 40
// single line, with icon: 48
// single line, with icon, dense: 40
// single line, with avatar: 56
// single line, with avatar, dense: 48
// two-line: 72
// two-line, dense: 60
// three-line: 88
// three-line, dense: 76

var single_height = 48;
var padding = 8;
var single_with_icon_height = 56;

var vars$1 = {
  single_height: single_height,
  single_line_height: single_height - 2 * padding - (2 * 5 + 1),
  single_with_icon_height: single_with_icon_height,
  single_with_icon_line_height: single_with_icon_height - 2 * padding - (2 * 5 + 1),
  padding: 13,
  compact_padding: 9,
  subtitle_line_count: 1,
  has_subtitle_padding: 15,
  high_subtitle_line_count: 2,
  has_high_subtitle_padding: 13,
  front_item_width: 72,
  side_padding: 2 * vars.grid_unit_component,
  font_size_title: 16,
  font_size_subtitle: 14,
  line_height_subtitle: 20,
  font_size_list_header: 14,
  font_size_small: 12,

  color_light_title: rgba(vars.color_light_foreground, vars.blend_light_text_primary),
  color_light_subtitle: rgba(vars.color_light_foreground, vars.blend_light_text_secondary),
  color_light_info: rgba(vars.color_light_foreground, vars.blend_light_text_tertiary),
  color_light_text_disabled: rgba(vars.color_light_foreground, vars.blend_light_text_disabled),
  color_light_list_header: rgba(vars.color_light_foreground, vars.blend_light_text_tertiary),
  color_light_secondary: rgba(vars.color_light_foreground, vars.blend_light_text_secondary),
  color_light_background: "inherit",
  color_light_background_hover: rgba(vars.color_light_foreground, vars.blend_light_background_hover),
  color_light_background_selected: rgba(vars.color_light_foreground, vars.blend_light_background_hover),

  color_dark_title: rgba(vars.color_dark_foreground, vars.blend_dark_text_primary),
  color_dark_subtitle: rgba(vars.color_dark_foreground, vars.blend_dark_text_secondary),
  color_dark_info: rgba(vars.color_dark_foreground, vars.blend_dark_text_tertiary),
  color_dark_text_disabled: rgba(vars.color_dark_foreground, vars.blend_dark_text_disabled),
  color_dark_list_header: rgba(vars.color_dark_foreground, vars.blend_dark_text_tertiary),
  color_dark_secondary: rgba(vars.color_dark_foreground, vars.blend_dark_text_secondary),
  color_dark_background: "inherit",
  color_dark_background_hover: rgba(vars.color_dark_foreground, vars.blend_dark_background_hover),
  color_dark_background_selected: rgba(vars.color_dark_foreground, vars.blend_dark_background_hover)
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var paddingH = function paddingH(h) {
  return {
    "padding-left": h + "px",
    "padding-right": h + "px"
  };
};

var paddingV = function paddingV(top, bottom) {
  return {
    "padding-top": top + "px",
    "padding-bottom": (bottom || top) + "px"
  };
};

var layout = (function (selector, componentVars) {
  return [_defineProperty({}, selector, [flex.layout, {
    position: "relative",
    overflow: "hidden",

    ".pe-list-tile--sticky": [mixin.sticky(2)],

    " .pe-list-tile__primary, .pe-list-tile__secondary": [flex.layoutHorizontal, {
      "text-decoration": "none",
      color: "inherit",
      border: "none"
    }],

    " .pe-list-tile__primary": [flex.flex(), {
      position: "relative",

      " .pe-list-tile__content:not(.pe-list-tile__content--front)": [flex.flex(), paddingV(componentVars.padding, componentVars.padding + 1)]
    }],

    " .pe-list-tile__secondary": {
      "text-align": "right",
      "font-size": componentVars.font_size_title + "px",
      position: "relative"
    },

    " .pe-list-tile__content": [flex.layoutVertical, flex.selfCenter, paddingH(componentVars.side_padding), {
      ".pe-list-tile__content--front": [paddingV(componentVars.padding - 5), {
        width: componentVars.front_item_width + "px"
      }],

      " small": {
        "font-size": componentVars.font_size_small + "px"
      }
    }],

    " .pe-list-tile__content--front + .pe-list-tile__content": {
      "padding-left": 0
    },

    " .pe-list-tile__title": [mixin.ellipsis(1), {
      "font-size": componentVars.font_size_title + "px",
      "font-weight": vars.font_weight_normal,
      "line-height": componentVars.single_line_height + "px"
    }],

    " .pe-list-tile__subtitle": [mixin.ellipsis(componentVars.subtitle_line_count, componentVars.line_height_subtitle), {
      "font-size": componentVars.font_size_subtitle + "px",
      "line-height": componentVars.line_height_subtitle + "px",

      ".pe-list-tile__high-subtitle": [mixin.ellipsis(componentVars.high_subtitle_line_count, componentVars.line_height_subtitle), {
        "white-space": "normal"
      }]
    }],

    ".pe-list-tile--selected, &.pe-list-tile--disabled": {
      " a": {
        "pointer-events": "none"
      }
    },

    ".pe-list-tile--subtitle": {
      " .pe-list-tile__content": [paddingV(componentVars.has_subtitle_padding, componentVars.has_subtitle_padding + 1), {
        " .pe-list-tile__title": {
          padding: 0
        }
      }]
    },

    ".pe-list-tile--high-subtitle": {
      " .pe-list-tile--high-subtitle .pe-list-tile__secondary": [flex.layoutHorizontal, flex.layoutStart],
      " .pe-list-tile__content": [flex.selfStart, paddingV(componentVars.has_high_subtitle_padding, componentVars.has_high_subtitle_padding + 1), {
        " .pe-list-tile__title": {
          padding: 0
        }
      }]
    },

    // List header
    ".pe-list__header": {
      height: componentVars.single_height + "px",

      " .pe-list-tile__content": {
        "padding-top": 0,
        "padding-bottom": 0
      },
      " .pe-list-tile__title": [mixin.ellipsis(1, componentVars.single_height), {
        "font-size": componentVars.font_size_list_header + "px",
        "font-weight": vars.font_weight_medium,
        "line-height": componentVars.single_height + "px",
        padding: 0
      }]
    },

    // Compact list

    " .pe-list--compact &, &.pe-list-tile--compact": {
      ":not(.pe-list__header)": {
        " .pe-list-tile__content": paddingV(componentVars.compact_padding, componentVars.compact_padding + 1)
      }
    },

    // Firefox only
    "@supports (-moz-appearance:none) and (display:contents)": {
      " .pe-list-tile__primary, .pe-list-tile__content": {
        overflow: "hidden"
      }
    },

    // Menu

    ".pe-dialog .pe-menu__content &": {
      " .pe-list-tile__title": mixin.ellipsis("none")
    },

    ".pe-menu__content &": {
      ":not(.pe-list-tile--disabled)": {
        cursor: "default",

        "&, .pe-list-tile__primary, .pe-list-tile__secondary": {
          " .pe-list-tile__title, .pe-list-tile__subtitle": [mixin.vendorize({
            userSelect: "none"
          }, vars.prefixes_user_select)]
        }
      }
    },

    // Non-touch

    "html.pe-no-touch .pe-list--hoverable &, \
      html.pe-no-touch .pe-list--selectable &, \
      html.pe-no-touch &.pe-list-tile--hoverable, \
      html.pe-no-touch &.pe-list-tile--selectable": {
      ":not(.pe-list__header):not(.pe-list-tile--disabled):not(.pe-list-tile--selected):hover": {
        cursor: "pointer"
      }
    }
  }])];
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scope, selector, componentVars, tint) {
  return [_defineProperty$1({}, scope + selector, {
    color: componentVars["color_" + tint + "_title"],
    backgroundColor: componentVars["color_" + tint + "_background"],

    ".pe-list__header": {
      color: componentVars["color_" + tint + "_list_header"],

      " .pe-list-tile__primary, pe-list-tile__secondary": {
        backgroundColor: "inherit"
      }
    },

    " .pe-list-tile__subtitle": {
      color: componentVars["color_" + tint + "_subtitle"]
    },

    " .pe-list-tile__secondary": {
      color: componentVars["color_" + tint + "_secondary"]
    },

    ".pe-list-tile--disabled": {
      "&, .pe-list-tile__title, .pe-list-tile__content, .pe-list-tile__subtitle": {
        color: componentVars["color_" + tint + "_text_disabled"]
      }
    },
    ".pe-list-tile--selected": {
      " .pe-list-tile__primary, pe-list-tile__secondary": {
        backgroundColor: componentVars["color_" + tint + "_background_selected"]
      }
    }
  })];
};

var noTouchStyle = function noTouchStyle(scope, selector, componentVars, tint) {
  return [_defineProperty$1({}, scope + selector + ":hover", {
    ":not(.pe-list__header):not(.pe-list-tile--disabled)": {
      " .pe-list-tile__primary, .pe-list-tile__secondary": {
        backgroundColor: componentVars["color_" + tint + "_background_hover"]
      }
    }
  })];
};

var color = (function (selector, componentVars) {
  return [style("", selector, componentVars, "light"), style(".pe-dark-theme ", selector, componentVars, "dark"), // inside dark theme
  noTouchStyle("html.pe-no-touch .pe-list-tile--hoverable", selector, componentVars, "light"), noTouchStyle("html.pe-no-touch .pe-dark-theme .pe-list-tile--hoverable", selector, componentVars, "dark"), noTouchStyle("html.pe-no-touch .pe-list--hoverable ", selector, componentVars, "light"), noTouchStyle("html.pe-no-touch .pe-dark-theme .pe-list--hoverable ", selector, componentVars, "dark")];
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout, color];
var selector = ".pe-list-tile";

var customTheme = function customTheme(customSelector, customVars) {
  return styler.generateStyles([customSelector, selector], _extends$1({}, vars$1, customVars), fns);
};

styler.generateStyles([selector], vars$1, fns);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var classes = {
  component: "pe-list-tile",
  primary: "pe-list-tile__primary",
  secondary: "pe-list-tile__secondary",
  content: "pe-list-tile__content",
  contentFront: "pe-list-tile__content--front",
  title: "pe-list-tile__title",
  subtitle: "pe-list-tile__subtitle",
  highSubtitle: "pe-list-tile__high-subtitle",
  selected: "pe-list-tile--selected",
  disabled: "pe-list-tile--disabled",
  sticky: "pe-list-tile--sticky",
  hasSubtitle: "pe-list-tile--subtitle",
  hasHighSubtitle: "pe-list-tile--high-subtitle",
  hasFront: "pe-list-tile--front",
  compact: "pe-list-tile--compact",
  hoverable: "pe-list-tile--hoverable",
  selectable: "pe-list-tile--selectable"
};

var primaryContent = function primaryContent(attrs, children) {
  var element = attrs.element ? attrs.element : attrs.url ? "a" : "div";
  var contentFrontClass = classes.content + " " + classes.contentFront;
  var frontComp = attrs.front ? m("div", { class: contentFrontClass }, attrs.front) : attrs.indent ? m("div", { class: contentFrontClass }) : null;
  var props = _extends({}, filterSupportedAttributes(attrs), attrs.url, attrs.events, {
    class: classes.primary,
    style: null
  });
  return m(element, props, [frontComp, m("div", {
    class: classes.content,
    style: attrs.style
  }, [attrs.content ? attrs.content : children, attrs.title && !attrs.content ? m("div", {
    class: classes.title
  }, attrs.title) : null, attrs.subtitle ? m("div", {
    class: classes.subtitle
  }, attrs.subtitle) : null, attrs.highSubtitle ? m("div", {
    class: classes.subtitle + " " + classes.highSubtitle
  }, attrs.highSubtitle) : null])]);
};

var secondaryContent = function secondaryContent() {
  var secondaryAttrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var element = secondaryAttrs.element ? secondaryAttrs.element : secondaryAttrs.url ? "a" : "div";
  return m(element, _extends({}, filterSupportedAttributes(secondaryAttrs), secondaryAttrs.url, {
    class: classes.secondary
  }), m("div", {
    class: classes.content
  }, [secondaryAttrs.icon ? m(icon, secondaryAttrs.icon) : null, secondaryAttrs.content ? secondaryAttrs.content : null]));
};

var view = function view(vnode) {
  var attrs = vnode.attrs;
  var element = attrs.element || "div";
  var heightClass = attrs.subtitle ? classes.hasSubtitle : attrs.highSubtitle ? classes.hasHighSubtitle : attrs.front || attrs.indent ? classes.hasFront : null;

  var props = _extends({}, filterSupportedAttributes(attrs), {
    class: [classes.component, attrs.selected ? classes.selected : null, attrs.disabled ? classes.disabled : null, attrs.sticky ? classes.sticky : null, attrs.compact ? classes.compact : null, attrs.hoverable ? classes.hoverable : null, attrs.selectable ? classes.selectable : null, heightClass, attrs.class].join(" ")
    // events and url are attached to primary content to not interfere with controls
  });

  var primaryAttrs = _extends({}, attrs);
  delete primaryAttrs.id;
  delete primaryAttrs.class;
  var content = [attrs.ink && !attrs.disabled ? m(ripple, attrs.ripple) : null, primaryContent(primaryAttrs, attrs.children || vnode.children), attrs.secondary ? secondaryContent(attrs.secondary) : null];
  return m(element, props, [attrs.before, content, attrs.after]);
};

var listTile = {
  theme: customTheme, // accepts (selector, vars)
  view: view
};

export { listTile, classes, vars$1 as vars };