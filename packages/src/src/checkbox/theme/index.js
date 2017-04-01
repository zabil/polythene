import defaultConfig from './config';
import customConfig from '../../config/custom';
const customConfigFn = customConfig.checkbox;
import layout from './layout';
import color from './color';

const config = customConfigFn ? customConfigFn(defaultConfig) : defaultConfig;

import styler from '../../common/styler';
styler.add('pe-checkbox', layout(config), color(config));

// default icons
import iconOff from './icon-off';
import iconOn from './icon-on';

export default {
    iconOff,
    iconOn
};
