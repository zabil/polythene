import m from "mithril";
import radioButton from "polythene-radio-button";
import iconStarOutline from "mmsvg/google/msvg/toggle/star-border";
import iconStar from "mmsvg/google/msvg/toggle/star";

radioButton.theme(".tests-radio-button-themed-radio", {
  label_font_size:   28,
  color_light_on:    "#2196F3",
  color_light_off:   "#2196F3",
  color_dark_on:     "#2196F3",
  color_dark_off:    "#2196F3",
  color_light_label: "#2196F3",
  color_dark_label:  "#2196F3"
});

const sizeNames = ["small", "regular", "medium", "large"];

const group = (name, attrs1, attrs2 = attrs1) => ({
  view: () => [
    m(radioButton, {
      ...attrs1,
      name
    }),
    m(radioButton, {
      ...attrs2,
      name
    })
  ]
});

const radioGroup = name => {
  return {
    view: () => [
      m(radioButton, {
        label: "Label",
        name
      }),
      m(radioButton, {
        label: "Label",
        checked: true,
        name
      })
    ]
  };
};

export const tests = [
  {
    name: "Option: label",
    component: radioGroup("option")
  },
  {
    name: "Option: checked",
    component: group(
      "checked",
      {
        label: "Label"
      },
      {
        label: "Label",
        checked: true
      }
    )
  },
  {
    name: "Option: value",
    component: group(
      "value",
      {
        label: "Label",
        name: "worth",
        value: "notable"
      }
    )
  },
  {
    name: "Option: size",
    component: {
      view: () => m("div", sizeNames.map(size => {
        const options = {
          name: size,
          label: "Label",
          size: size
        };
        return m("div", {
          style: {
            marginBottom: "1rem"
          }
        }, [
          m(radioButton, options),
          m(radioButton, options)
        ]);
      }))
    }
  },
  {
    name: "Themed radio button (color and font size)",
    component: group(
      "theme",
      {
        label: "Label",
        class: "tests-radio-button-themed-radio"
      },
      {
        label: "Label",
        class: "tests-radio-button-themed-radio",
        checked: true
      }
    )
  },
  {
    name: "Option: style (colors)",
    component: group(
      "style",
      {
        label: "Label",
        style: {
          color: "#EF6C00"
        }
      },
      {
        label: "Label",
        style: {
          color: "#EF6C00"
        },
        checked: true
      }
    )
  },
  {
    name: "Option: iconOn, iconOff (custom icon)",
    component: {
      view: () => m("div", sizeNames.map(size => {
        const options = {
          name: size,
          label: "Label",
          size: size,
          iconOn: {
            msvg: iconStar
          },
          iconOff: {
            msvg: iconStarOutline
          }
        };
        return m("div", {
          style: {
            marginBottom: "1rem"
          }
        }, [
          m(radioButton, options),
          m(radioButton, options)
        ]);
      }))
    }
  },

  // // Interactive

  {
    name: "Select with TAB and ENTER",
    interactive: true,
    exclude: true,
    component: {
      view: () => {
        const options = {
          label: "Label",
          name: "enter"
        };
        return [
          m("div", {
            style: {
              marginBottom: "1rem"
            }
          }, "On desktop, TAB can be used to give focus, ENTER to select."),
          m(radioButton, options),
          m(radioButton, options)
        ];
      }
    },
  },
  {
    name: "Option: disabled",
    interactive: true,
    component: group(
      "disabled",
      {
        label: "Off",
        disabled: true
      },
      {
        label: "On",
        disabled: true,
        checked: true
      }
    )
  },
  {
    name: "Option: selectable (true)",
    interactive: true,
    component: group(
      "selectable",
      {
        label: "Always",
        selectable: () => true
      }
    )
  },
  {
    name: "Option: iconButton (custom hover behaviour)",
    interactive: true,
    component: group(
      "iconButton",
      {
        label: "Hover me",
        iconButton: {
          wash: true,
          ink: false
        }
      }
    )
  },
  {
    name: "Option: getState",
    interactive: true,
    exclude: true,
    component: {
      oninit: vnode =>
        vnode.state.radio = {},
      view: vnode => {
        const options = (label, value) => ({
          name: "getState",
          value,
          label,
          getState: state => vnode.state.radio = state
        });
        return [
          m("div", {
            style: {
              marginBottom: "1rem"
            }
          }, `Value: ${vnode.state.radio.value}`),
          m(radioButton, options("First", "first")),
          m(radioButton, options("Second", "second"))
        ];
      }
    },
  },
  {
    name: "Setting the value from outside",
    interactive: true,
    exclude: true,
    component: {
      oninit: vnode =>
        vnode.state.value = undefined,
      view: vnode => {
        return [
          m("div", {
            style: {
              marginBottom: "1rem"
            }
          }, [
            m(radioButton, {
              label: "Initiator 1",
              name: "initiator",
              value: "first",
              getState: state => vnode.state.value = state.value
            }),
            m(radioButton, {
              label: "Initiator 2",
              name: "initiator",
              value: "second",
              getState: state => vnode.state.value = state.value
            })
          ]),
          m("div", {
            style: {
              marginBottom: "1rem"
            }
          }, [
            m(radioButton, {
              label: "Receiver 1",
              name: "receiver",
              value: "first",
              disabled: true,
              checked: () => vnode.state.value === "first"
            }),
            m(radioButton, {
              label: "Receiver 2",
              name: "receiver",
              value: "second",
              disabled: true,
              checked: () => vnode.state.value === "second"
            })
          ])
        ];
      }
    },
  },
  {
    name: "Option: events",
    interactive: true,
    exclude: true,
    component: {
      oninit: vnode =>
        vnode.state.value = undefined,
      view: vnode => {
        const options = (label, value) => ({
          name: "events",
          value,
          checked: () => vnode.state.value === value,
          events: {
            onclick: () => vnode.state.value = value
          }
        });
        return [
          m("div", {
            style: {
              marginBottom: "1rem"
            }
          }, `Value: ${vnode.state.value}`),
          m(radioButton, options("First", "first")),
          m(radioButton, options("Second", "second"))
        ];
      }
    },
  },

  // Dark tone

  {
    name: "Option: checked -- dark theme class",
    class: "pe-dark-tone",
    component: group(
      "checked-dark",
      {
        label: "Label"
      },
      {
        label: "Label",
        checked: true
      }
    )
  },
  {
    name: "Themed radio button (colors) -- dark theme class",
    class: "pe-dark-tone",
    component: group(
      "theme-dark",
      {
        label: "Label",
        class: "tests-radio-button-themed-radio"
      },
      {
        label: "Label",
        class: "tests-radio-button-themed-radio",
        checked: true
      }
    )
  },
  {
    name: "Option: disabled -- dark theme class",
    class: "pe-dark-tone",
    interactive: true,
    component: group(
      "disabled-dark",
      {
        label: "Off",
        disabled: true
      },
      {
        label: "On",
        disabled: true,
        checked: true
      }
    )
  },
  {
    name: "Dark tone class + light theme class",
    class: "pe-dark-tone",
    component: {
      view: () => 
        m("div", {
          style: {
            background: "#fff",
            padding: "20px"
          },
          class: "pe-light-tone"
        },
        m(radioButton, {
          label: "Label",
          name: "light-theme",
        }),
        m(radioButton, {
          label: "Label",
          checked: true,
          name: "light-theme",
        })
      )
    }
  },
  {
    name: "Dark tone class + light tone",
    class: "test-dark-theme",
    component: {
      view: () => 
        m("div", {
          style: {
            background: "#fff",
            padding: "20px"
          },
        },
        m(radioButton, {
          label: "Label",
          name: "light-tone",
        }),
        m(radioButton, {
          label: "Label",
          checked: true,
          name: "light-tone",
        })
      )
    }
  },

];