import defaultConfig from './config';
import customConfig from '../../config/custom';
const customConfigFn = customConfig.card;
import layout from './layout';
import color from './color';

const config = customConfigFn ? customConfigFn(defaultConfig) : defaultConfig;

import styler from '../../common/styler';
styler.add('pe-card', layout(config), color(config));
