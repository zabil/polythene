import { mixin } from "polythene-css";

const borderStyle = componentVars => {
  return mixin.hairline("border-bottom"), {
    "border-style": "none none solid none",
    "border-width": componentVars.border_width_bordered + "px"
  };
};

const createStyles = componentVars => {
  return [{
    ".pe-list": {
      padding: componentVars.padding + "px 0",

      "&.pe-list--header": {
        "padding-top": 0
      },

      "&.pe-list--compact": {
        padding: componentVars.padding_compact + "px 0",
      },

      "& + &": [
        mixin.hairline("border-top"), {
          "border-style": "solid none none none",
          "border-width": componentVars.border_width_stacked + "px"
        }
      ],

      "&.pe-list--borders": {
        " .pe-list-tile:not(.pe-list__header)": {
          "&:not(:last-child)": {
            "&": borderStyle(componentVars)
          }
        }
      },

      "&.pe-list--borders-indented": {
        "border-top": "none",

        " .pe-list-tile:not(.pe-list__header)": {
          "&:not(:last-child)": {
            " .pe-list-tile__content:not(.pe-list-tile__content--front)": borderStyle(componentVars)
          }
        }
      }
    }
  }];
};

export default componentVars => mixin.createStyles(componentVars, createStyles);
