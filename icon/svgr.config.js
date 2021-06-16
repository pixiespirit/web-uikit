const svgrTemplate = require('./svgr.template');

module.exports = {
  // The way to set the color of the svg instead of fix "fill/stroke" attribute
  // https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#currentcolor_keyword
  replaceAttrValues: {
    '#333C44': 'currentColor',
    '#FFD66C': 'currentColor'
  },
  icon: true,
  titleProp: false,
  typescript: true,
  template: svgrTemplate.template,
  filenameCase: 'pascal'
};
