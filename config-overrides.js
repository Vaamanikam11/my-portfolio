// config-overrides.js
const { override, addBabelPlugin, addBabelPreset } = require('customize-cra');
const path = require('path');

module.exports = override(
  addBabelPreset('@babel/preset-env'),
  addBabelPreset('@babel/preset-react'),
  addBabelPlugin('@babel/plugin-proposal-optional-chaining'),
  (config) => {
    const oneOfRule = config.module.rules.find(rule => rule.oneOf);
    const tsRule = oneOfRule.oneOf.find(rule => rule.test && rule.test.toString().includes('ts|tsx'));

    tsRule.include = [
      tsRule.include,
      path.resolve(__dirname, 'node_modules/@emailjs')
    ];

    return config;
  }
);
