import m from 'mithril';
import { endEvent, filterSupportedAttributes, isTouch, moveEvent } from 'polythene-core';
import { flex, mixin, styler } from 'polythene-css';
import { vars } from 'polythene-theme';

var classes = {
  component: "pe-slider",

  // elements
  control: "pe-slider__control",
  label: "pe-slider__label",
  pin: "pe-slider__pin",
  thumb: "pe-slider__thumb",
  tick: "pe-slider__ticks-tick",
  ticks: "pe-slider__ticks",
  track: "pe-slider__track",
  trackBar: "pe-slider__track-bar",
  trackBarValue: "pe-slider__track-bar-value",
  trackPart: "pe-slider__track-part",
  trackPartRest: "pe-slider__track-rest",
  trackPartValue: "pe-slider__track-value",

  // states
  hasFocus: "pe-slider--focus",
  hasPin: "pe-slider--pin",
  hasTicks: "pe-slider--ticks",
  hasTrack: "pe-slider--track",
  isActive: "pe-slider--active",
  isAtMin: "pe-slider--min",
  isDisabled: "pe-slider--disabled"
};

var rgba = vars.rgba;

var lightForeground = vars.color_light_foreground;
var darkForeground = vars.color_dark_foreground;
var activeColor = vars.color_primary; // or override in CSS by setting 'color' property on '.pe-slider'
var thumb_size = 12;
var thumb_touch_size = Math.max(40, thumb_size);
var thumb_border_width = 2;
var active_thumb_scale = 3 / 2;
var disabled_thumb_scale = 2 / 3;
var active_pin_thumb_scale = 2 / 6;
var largestThumbSize = active_thumb_scale * thumb_size;
var largestElement = Math.max(thumb_touch_size, largestThumbSize);
var height = Math.max(52, largestThumbSize);
var side_spacing = Math.max(10, largestElement / 2 - thumb_size / 2);
var horizontal_layout_side_spacing = side_spacing + 4; // optimization for horizontal layout

var vars$1 = {
  height: height,
  side_spacing: side_spacing,
  horizontal_layout_side_spacing: horizontal_layout_side_spacing,
  thumb_size: thumb_size,
  thumb_touch_size: thumb_touch_size,
  track_height: height,
  bar_height: 2,
  thumb_border_width: thumb_border_width,
  active_thumb_scale: active_thumb_scale,
  animation_duration: vars.animation_duration,
  disabled_thumb_scale: disabled_thumb_scale,
  active_pin_thumb_scale: active_pin_thumb_scale,

  step_width: 2,
  pin_height: 32,
  pin_width: 26,
  pin_font_size: 10,

  color_light_track_active: rgba(lightForeground, .38),
  color_light_track_inactive: rgba(lightForeground, .26),
  color_light_track_value: rgba(activeColor),
  // background color may be set in theme; disabled by default
  // color_light_thumb_background:        undefined,
  color_light_thumb_off: rgba(lightForeground, .26),
  color_light_thumb_off_focus: rgba(lightForeground),
  color_light_thumb_off_focus_opacity: .08,
  color_light_thumb_on: rgba(activeColor),
  color_light_thumb_on_focus_opacity: .11,
  color_light_thumb_inactive: rgba(lightForeground, .26),
  color_light_tick: rgba(lightForeground, 1),
  color_light_icon: vars.rgba(vars.color_light_foreground, vars.blend_light_text_secondary),
  color_light_disabled_icon: vars.rgba(vars.color_light_foreground, vars.blend_light_text_disabled),
  color_light_label: vars.rgba(vars.color_light_foreground, vars.blend_light_text_secondary),
  color_light_disabled_label: vars.rgba(vars.color_light_foreground, vars.blend_light_text_disabled),

  color_dark_track_active: rgba(darkForeground, .3),
  color_dark_track_inactive: rgba(darkForeground, .2),
  color_dark_track_value: rgba(activeColor),
  // background color may be set in theme; disabled by default
  // color_dark_thumb_background:         undefined,
  color_dark_thumb_off: rgba(darkForeground, .2),
  color_dark_thumb_off_focus: rgba(darkForeground),
  color_dark_thumb_off_focus_opacity: .08,
  color_dark_thumb_on: rgba(activeColor),
  color_dark_thumb_on_focus_opacity: .11,
  color_dark_thumb_inactive: rgba(darkForeground, .2),
  color_dark_tick: rgba(darkForeground, 1),
  color_dark_icon: vars.rgba(vars.color_dark_foreground, vars.blend_dark_text_secondary),
  color_dark_disabled_icon: vars.rgba(vars.color_dark_foreground, vars.blend_dark_text_disabled),
  color_dark_label: vars.rgba(vars.color_dark_foreground, vars.blend_dark_text_secondary),
  color_dark_disabled_label: vars.rgba(vars.color_dark_foreground, vars.blend_dark_text_disabled)
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var positionBorder = function positionBorder(thumbSize, borderWidth) {
  return {
    borderWidth: borderWidth + "px",
    width: thumbSize - 2 * borderWidth + "px",
    height: thumbSize - 2 * borderWidth + "px",
    left: "2px",
    top: "2px"
  };
};

var layout = (function (selector, componentVars) {
  var thumbSize = Math.max(componentVars.thumb_size, 2 * componentVars.thumb_border_width);
  var scaledThumbDiff = (componentVars.active_thumb_scale - 1) * thumbSize / 2;
  var barOffset = thumbSize / 2;
  var scaledBorderWidth = Math.max(1, componentVars.thumb_border_width / componentVars.active_thumb_scale);
  var thumbTouchSize = componentVars.thumb_touch_size;
  var stepsOffset = barOffset - 1;

  return [_defineProperty({}, selector, [flex.layoutHorizontal, flex.flexGrow(1), {
    userSelect: "none",
    height: componentVars.height + "px",
    marginTop: (componentVars.height - componentVars.track_height) / 2 + "px ",

    " > .pe-icon": [flex.layoutCenter, {
      height: componentVars.height + "px"
    }],

    " .pe-slider__track": [flex.layoutHorizontal, flex.flexGrow(1), mixin.defaultTransition("transform", componentVars.animation_duration), {
      userSelect: "none",
      position: "relative",
      height: componentVars.track_height + "px",
      margin: "0 " + componentVars.side_spacing + "px",
      outline: 0
    }],
    " div + .pe-slider__track": {
      margin: "0 " + componentVars.horizontal_layout_side_spacing + "px"
    },

    " .pe-slider__control": [flex.selfCenter, mixin.defaultTransition("transform, background", componentVars.animation_duration), {
      userSelect: "none",
      width: thumbSize + "px",
      height: thumbSize + "px",
      lineHeight: 0,
      borderRadius: "50%",
      outline: 0,
      zIndex: 1,
      position: "relative",

      // touch area
      "&:before": [mixin.defaultTransition("background-color", componentVars.animation_duration), {
        content: "\"\"",
        position: "absolute",
        borderRadius: "50%",
        left: -thumbTouchSize / 2 + thumbSize / 2 + "px",
        top: -thumbTouchSize / 2 + thumbSize / 2 + "px",
        width: thumbTouchSize + "px",
        height: thumbTouchSize + "px"
      }],

      // border
      "&:after": [mixin.defaultTransition("border", componentVars.animation_duration), positionBorder(thumbSize, componentVars.thumb_border_width), {
        content: "\"\"",
        position: "absolute",
        borderRadius: "50%",
        borderStyle: "solid"
      }]
    }],

    " .pe-slider__thumb": [mixin.defaultTransition("opacity", componentVars.animation_duration), mixin.fit(), {
      "&, .pe-icon": {
        width: "inherit",
        height: "inherit"
      }
    }],

    " .pe-slider__label": {
      height: componentVars.height + "px",
      lineHeight: componentVars.height + "px",
      minWidth: vars.unit_icon_size + "px",
      textAlign: "center",
      fontSize: "16px",
      fontWeight: vars.font_weight_medium
    },

    " .pe-slider__track-part": [flex.flex(), {
      userSelect: "none",
      height: componentVars.bar_height + "px",
      margin: (componentVars.track_height - componentVars.bar_height) / 2 + "px 0",
      overflow: "hidden" // Firefox otherwise uses 6x at 0%
    }],

    " .pe-slider__track-value, .pe-slider__track-rest": flex.layoutHorizontal,

    " .pe-slider__track-bar": [flex.flex(), {
      position: "relative",
      overflow: "hidden"
    }],
    " .pe-slider__track-bar-value": [flex.flex(), mixin.defaultTransition("transform, background-color", componentVars.animation_duration), {
      height: componentVars.bar_height + "px"
    }],
    " .pe-slider__track-value .pe-slider__track-bar": {
      marginLeft: barOffset + "px"
    },
    " .pe-slider__track-rest .pe-slider__track-bar": {
      marginRight: barOffset + "px"
    },

    " .pe-slider__ticks": [flex.layoutJustified, {
      userSelect: "none",
      position: "absolute",
      width: "calc(100% - " + 2 * stepsOffset + "px)",
      height: componentVars.bar_height + "px",
      left: 0,
      top: componentVars.height / 2 - 1 + "px",
      margin: "0 " + stepsOffset + "px",
      pointerEvents: "none"
    }],

    " .pe-slider__ticks-tick": {
      width: componentVars.step_width + "px",
      height: componentVars.bar_height + "px"
    },

    " .pe-slider__pin": [mixin.defaultTransition("transform", ".11s"), {
      transform: "translateZ(0) scale(0) translate(0, 0)",
      transformOrigin: "bottom",
      position: "absolute",
      zIndex: 1,
      width: componentVars.pin_width + "px",
      height: 0,
      left: 0, // set in js
      top: 0,
      margin: "0 " + stepsOffset + "px 0 " + (stepsOffset - componentVars.pin_width / 2 + 1) + "px",
      pointerEvents: "none",

      "&::before": {
        transform: "rotate(-45deg)",
        content: "\"\"",
        position: "absolute",
        top: 0,
        left: 0,
        width: componentVars.pin_width + "px",
        height: componentVars.pin_width + "px",
        borderRadius: "50% 50% 50% 0",
        backgroundColor: "inherit"
      },
      "&::after": {
        content: "attr(value)",
        position: "absolute",
        top: 0,
        left: 0,
        width: componentVars.pin_width + "px",
        height: componentVars.pin_height + "px",
        textAlign: "center",
        color: "#fff",
        fontSize: componentVars.pin_font_size + "px",
        lineHeight: componentVars.pin_width + "px"
      }
    }],

    "&.pe-slider--active:not(.pe-slider--ticks)": {
      " .pe-slider__control": {
        transform: "scale(" + componentVars.active_thumb_scale + ")",
        borderWidth: scaledBorderWidth + "px"
      },
      // left side
      " .pe-slider__track-value .pe-slider__track-bar-value": {
        transform: "translateX(" + -scaledThumbDiff + "px)"
      },
      // right side
      " .pe-slider__track-rest .pe-slider__track-bar-value": {
        transform: "translateX(" + scaledThumbDiff + "px)"
      }
    },

    "&.pe-slider--pin.pe-slider--active, &.pe-slider--pin.pe-slider--focus": {
      " .pe-slider__pin": {
        transform: "translateZ(0) scale(1) translate(0, -24px)"
      },
      " .pe-slider__control": {
        transform: "scale(" + componentVars.active_pin_thumb_scale + ")"
      }
    },

    "&:not(.pe-slider--disabled)": {
      " .pe-slider__control": {
        cursor: "pointer"
      },
      "&.pe-slider--track": {
        " .pe-slider__track": {
          cursor: "pointer"
        }
      }
    },

    "&.pe-slider--disabled": {
      " .pe-slider__control": {
        transform: "scale(" + componentVars.disabled_thumb_scale + ")",
        borderWidth: 0
      },
      "&.pe-slider--min": {
        " .pe-slider__control:after": [positionBorder(thumbSize, 1 / componentVars.disabled_thumb_scale * componentVars.thumb_border_width)]
      }
    }
  }])];
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scopes, selector, componentVars, tint) {
  return [_defineProperty$1({}, scopes.map(function (s) {
    return s + selector;
  }).join(","), {
    color: componentVars["color_" + tint + "_thumb_on"], // override by specifying "color"

    " .pe-slider__control": {
      "&:after": {
        borderColor: "transparent"
      }
    },
    " .pe-slider__track-bar-value": {
      background: componentVars["color_" + tint + "_track_inactive"]
    },

    " .pe-slider__ticks-tick": {
      background: componentVars["color_" + tint + "_tick"]
    },

    " .pe-slider__pin": {
      backgroundColor: "currentcolor"
    },

    " > .pe-icon": {
      color: componentVars["color_" + tint + "_disabled_icon"]
    },

    " .pe-slider__label": {
      color: componentVars["color_" + tint + "_disabled_label"]
    },

    // states

    "&.pe-slider--active": {
      " .pe-slider__track-bar-value": {
        background: componentVars["color_" + tint + "_track_active"]
      }
    },

    ".pe-slider--disabled": {
      " .pe-slider__control": {
        background: componentVars["color_" + tint + "_thumb_inactive"]
      }
    },

    "&:not(.pe-slider--disabled)": {
      " .pe-slider__control": {
        backgroundColor: componentVars["color_" + tint + "_thumb_background"] || "currentcolor",

        "&:before": {
          opacity: componentVars["color_" + tint + "_thumb_off_focus_opacity"]
        }
      },
      " .pe-slider__track-value .pe-slider__track-bar-value": {
        background: "currentcolor"
      },
      "&.pe-slider--focus.pe-slider--min:not(.pe-slider--pin) .pe-slider__control:before,\
      &.pe-slider--min:not(.pe-slider--pin) .pe-slider__control:focus:before": {
        backgroundColor: componentVars["color_" + tint + "_thumb_off_focus"]
      },
      "&.pe-slider--focus:not(.pe-slider--min):not(.pe-slider--pin) .pe-slider__control:before,\
      &:not(.pe-slider--min):not(.pe-slider--pin) .pe-slider__control:focus:before": {
        backgroundColor: "currentcolor",
        opacity: componentVars["color_" + tint + "_thumb_on_focus_opacity"]
      },
      " > .pe-icon": {
        color: componentVars["color_" + tint + "_icon"]
      },
      " .pe-slider__label": {
        color: componentVars["color_" + tint + "_label"]
      }
    },

    "&.pe-slider--min:not(.pe-slider--disabled)": {
      " .pe-slider__control": {
        backgroundColor: "transparent"
      },
      " .pe-slider__thumb": {
        opacity: 0
      },
      " .pe-slider__control:after": {
        borderColor: componentVars["color_" + tint + "_track_inactive"]
      },
      "&.pe-slider--active .pe-slider__control:after": {
        borderColor: componentVars["color_" + tint + "_track_active"]
      },
      "&.pe-slider--ticks": {
        " .pe-slider__control": {
          backgroundColor: componentVars["color_" + tint + "_tick"]
        },
        " .pe-slider__control:after": {
          borderColor: "transparent"
        }
      },
      " .pe-slider__pin": {
        backgroundColor: componentVars["color_" + tint + "_track_inactive"]
      }
    }
  })];
};

var color = (function (selector, componentVars) {
  return [style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, "dark"), // has/inside dark theme
  style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, "light")];
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout, color];
var selector = "." + classes.component;

var customTheme = function customTheme(customSelector, customVars) {
  return styler.generateStyles([customSelector, selector], _extends$1({}, vars$1, customVars), fns);
};

styler.generateStyles([selector], vars$1, fns);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var focusElement = void 0;

var deFocus = function deFocus(state) {
  if (focusElement) {
    focusElement.blur();
  }
  focusElement = undefined;
  state.hasFocus = false;
};

var focus = function focus(state, el) {
  deFocus(state);
  focusElement = el;
  state.hasFocus = true;
};

var positionFromEvent = function positionFromEvent(e, isVertical) {
  return isTouch ? isVertical ? e.touches[0].pageY : e.touches[0].pageX : isVertical ? e.pageY : e.pageX;
};

var updatePinPosition = function updatePinPosition(state) {
  if (state.controlEl && state.pinEl) {
    var left = state.fraction() * state.rangeWidth;
    state.pinEl.style.left = left + "px";
  }
};

var updateValue = function updateValue(state, value) {
  state.setValue(value);
  updatePinPosition(state);
};

var generateTickMarks = function generateTickMarks(min, max, stepSize) {
  var steps = Math.round((max - min) / stepSize);
  var items = [];
  var s = steps + 1;
  while (s > 0) {
    items.push(m("div", { class: classes.tick }));
    s--;
  }
  return items;
};

var readRangeData = function readRangeData(state) {
  if (state.controlEl) {
    // range is from the far left to the far right minus the thumb width (max x is at the left side of the thumb)
    state.controlWidth = vars$1.thumb_size;
    state.rangeWidth = state.trackEl.getBoundingClientRect().width - state.controlWidth;
    var styles = window.getComputedStyle(state.trackEl);
    state.rangeOffset = parseFloat(styles.marginLeft);
  }
};

var calculateClickOffset = function calculateClickOffset(state) {
  var controlOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  state.clickOffset = state.trackEl.getBoundingClientRect().left - (state.rangeOffset - state.controlWidth / 2) + controlOffset;
};

var initControlEvent = function initControlEvent(state, e) {
  var controlPos = state.controlEl.getBoundingClientRect().left;
  var eventPos = positionFromEvent(e);
  var controlOffset = eventPos - controlPos - state.controlWidth / 2;
  calculateClickOffset(state, controlOffset);
};

var initTrackEvent = function initTrackEvent(state) {
  return calculateClickOffset(state, 0);
};

var handlePosEvent = function handlePosEvent(state, e) {
  var pos = positionFromEvent(e) - state.clickOffset;
  var value = state.min + (pos - state.rangeOffset) / state.rangeWidth * (state.max - state.min);
  updateValue(state, value);
  m.redraw();
};

var startDrag = function startDrag(state, attrs, e) {
  if (state.isDragging) return;
  e.preventDefault();
  state.isDragging = true;
  state.isActive = true;
  deFocus(state);

  var drag = function drag(e) {
    if (!state.isDragging) return;
    handlePosEvent(state, e);
  };

  var endDrag = function endDrag() {
    if (!state.isDragging) return;
    state.isDragging = false;
    state.isActive = false;
    deFocus(state);
    window.removeEventListener(moveEvent, drag);
    window.removeEventListener(endEvent, endDrag);
    m.redraw();
  };

  window.addEventListener(moveEvent, drag);
  window.addEventListener(endEvent, endDrag);

  readRangeData(state);

  if (attrs.pin) {
    updatePinPosition(state);
  }
};

var startTrack = function startTrack(state, attrs, e) {
  e.preventDefault();
  if (state.isDragging) {
    return;
  }
  readRangeData(state);
  initTrackEvent(state);
  handlePosEvent(state, e);
  startDrag(state, attrs, e);
};

var createSlider = function createSlider(state, attrs, hasTicks, interactiveTrack) {
  var fraction = state.fraction();
  var stepCount = Math.max(10, parseInt(attrs.step, 10) || 1); // not more than 100 steps on the screen

  var onStartTrack = function onStartTrack(e) {
    return startTrack(state, attrs, e);
  };

  var onInitDrag = function onInitDrag(e) {
    readRangeData(state);
    initControlEvent(state, e);
    startDrag(state, attrs, e);
  };

  var flexValueCss = fraction + " 1 0%";
  var flexRestValue = 1 - fraction;
  var flexRestCss = flexRestValue + " 1 0%";

  return [m("div", _extends({}, {
    class: classes.track,
    oncreate: function oncreate(_ref) {
      var dom = _ref.dom;

      state.trackEl = dom;
      if (attrs.pin) {
        setTimeout(function () {
          updatePinPosition(state);
        }, 0);
      }
    }
  }, interactiveTrack && !attrs.disabled && !isTouch ? { onmousedown: onStartTrack } : null, interactiveTrack && !attrs.disabled && isTouch ? { ontouchstart: onStartTrack } : null), [m("div", {
    class: classes.trackPart + " " + classes.trackPartValue,
    style: {
      flex: flexValueCss,
      "-ms-flex": flexValueCss,
      webkitFlex: flexValueCss
    }
  }, m("div", { class: classes.trackBar }, m("div", { class: classes.trackBarValue }))), m("div", _extends({}, {
    class: classes.control,
    oncreate: function oncreate(_ref2) {
      var dom = _ref2.dom;
      return state.controlEl = dom;
    }
  }, attrs.disabled ? { disabled: true } : {
    tabindex: attrs.tabindex || 0,
    onfocus: function onfocus() {
      return focus(state, state.controlEl);
    },
    onblur: function onblur() {
      return deFocus(state);
    },
    onkeydown: function onkeydown(e) {
      if (e.which === 27) {
        // ESCAPE
        state.controlEl.blur(e);
      } else if (e.which === 37) {
        // LEFT
        state.decrease(e.shiftKey);
      } else if (e.which === 38) {
        // UP
        state.increase(e.shiftKey);
      } else if (e.which === 39) {
        // RIGHT
        state.increase(e.shiftKey);
      } else if (e.which === 40) {
        // DOWN
        state.decrease(e.shiftKey);
      }
      readRangeData(state);
      updatePinPosition(state);
    }
  }, !attrs.disabled && !isTouch ? { onmousedown: onInitDrag } : null, !attrs.disabled && isTouch ? { ontouchstart: onInitDrag } : null, attrs.events ? attrs.events : null, hasTicks ? { step: stepCount } : null), attrs.icon ? m("div", { class: classes.thumb }, attrs.icon) : null), m("div", {
    class: classes.trackPart + " " + classes.trackPartRest,
    style: {
      flex: flexRestCss,
      "-ms-flex": flexRestCss,
      webkitFlex: flexRestCss,
      maxWidth: flexRestValue * 100 + "%" // for IE Edge
    }
  }, m("div", { class: classes.trackBar }, m("div", { class: classes.trackBarValue }))), hasTicks && !attrs.disabled ? m("div", { class: classes.ticks }, generateTickMarks(state.min, state.max, stepCount)) : null, hasTicks && attrs.pin && !attrs.disabled ? m("div", {
    class: classes.pin,
    value: Math.round(state.value()),
    oncreate: function oncreate(_ref3) {
      var dom = _ref3.dom;
      return state.pinEl = dom;
    }
  }) : null])];
};

var view = function view(_ref4) {
  var attrs = _ref4.attrs,
      state = _ref4.state;

  if (typeof attrs.value === "function") {
    state.setValue(attrs.value());
  }
  var element = attrs.element || "div";
  var hasTicks = attrs.ticks !== undefined && attrs.ticks !== false;
  var interactiveTrack = attrs.interactiveTrack !== undefined ? attrs.interactiveTrack : true;
  var props = _extends({}, filterSupportedAttributes(attrs), {
    class: [classes.component, attrs.disabled ? classes.isDisabled : null, attrs.pin ? classes.hasPin : null, interactiveTrack ? classes.hasTrack : null, state.isActive ? classes.isActive : null, state.hasFocus ? classes.hasFocus : null, state.fraction() === 0 ? classes.isAtMin : null, hasTicks ? classes.hasTicks : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.class].join(" ")
  });
  var content = createSlider(state, attrs, hasTicks, interactiveTrack);
  return m(element, props, [attrs.before, content, attrs.after]);
};

var oninit = function oninit(vnode) {
  var attrs = vnode.attrs;
  var min = attrs.min !== undefined ? attrs.min : 0;
  var max = attrs.max !== undefined ? attrs.max : 100;
  var step = attrs.step !== undefined ? attrs.step : 1;
  var defaultValue = 0;
  var _fraction = min;
  var _value = defaultValue;

  if (typeof attrs.value === "function") {
    var v = attrs.value();
    _value = v !== undefined ? v : defaultValue;
  } else {
    _value = attrs.value !== undefined ? attrs.value : defaultValue;
  }

  var setValue = function setValue(v) {
    if (v < min) v = min;
    if (v > max) v = max;
    _value = step ? Math.round(v / step) * step : v;
    _fraction = (_value - min) / (max - min);
    if (attrs.getValue) {
      attrs.getValue(_value);
    }
  };

  setValue(_value);

  vnode.state = _extends(vnode.state, {
    min: min,
    max: max,
    trackEl: null,
    controlEl: null,
    pinEl: null,
    setValue: setValue,
    value: function value() {
      return _value;
    },
    fraction: function fraction() {
      return _fraction;
    },
    increase: function increase(multiply) {
      return setValue(_value + (multiply ? 10 : 1) * (step || 1));
    },
    decrease: function decrease(multiply) {
      return setValue(_value - (multiply ? 10 : 1) * (step || 1));
    },
    isActive: false,
    hasFocus: false,
    isDragging: false,
    // coordinates
    controlWidth: 0,
    rangeWidth: 0,
    rangeOffset: 0,
    clickOffset: 0
  });
};

var slider = {
  theme: customTheme, // accepts (selector, vars)
  oninit: oninit,
  view: view
};

export { classes, vars$1 as vars };export default slider;