import defaultConfig from'polythene/ripple/theme/config';import customConfig from'polythene/config/custom';const customConfigFn=customConfig.ripple;import layout from'polythene/ripple/theme/layout';const config=customConfigFn?customConfigFn(defaultConfig):defaultConfig;import styler from'polythene/common/styler';styler.add('pe-ripple',layout(config));
//# sourceMappingURL=theme.js.map