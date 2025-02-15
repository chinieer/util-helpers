const { version } = require('./package.json');
const { MODULE_TYPE, NODE_ENV } = process.env;

const plugins = [
  ["minify-replace", {
    replacements: [
      {
        identifierName: "BUILD_VERSION",
        replacement: {
          type: "stringLiteral",
          value: version,
        },
      }
    ]
  }]
];

const presets = [
  [
    '@babel/env',
    {
      modules: MODULE_TYPE === 'esm' ? false : 'auto',
      targets: NODE_ENV === 'test' ? { node: 'current' } : ['> 1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9']
    }
  ]
];

if (MODULE_TYPE === 'cjs') {
  plugins.push('@babel/transform-modules-commonjs');
}

if (MODULE_TYPE === 'esm' || NODE_ENV === 'test') {
  plugins.push('@babel/transform-runtime');
}

if (NODE_ENV === 'test') {
  presets.push('@babel/preset-typescript');
}

module.exports = {
  presets,
  plugins
};
