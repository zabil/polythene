import defaultConfig from'polythene/shadow/theme/config';import customConfig from'polythene/config/custom';const customConfigFn=customConfig.shadow;import layout from'polythene/shadow/theme/layout';const config=customConfigFn?customConfigFn(defaultConfig):defaultConfig;import styler from'polythene/common/styler';styler.add('pe-shadow',layout(config));
//# sourceMappingURL=theme.js.map