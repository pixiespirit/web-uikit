import cssPrefix from 'autoprefixer';
import copy from 'rollup-plugin-copy';
import del from 'rollup-plugin-delete';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';

/** @type {import("rollup-plugin-postcss").PostCSSPluginConf } */
const postcssOptions = {
  plugins: [cssPrefix],
  minimize: false,
  extract: 'bundle.css'
};

/** @type {import("rollup").RollupOptions} */
const bundleMain = {
  input: 'src/index.ts',
  output: [
    { file: 'dist/cjs.js', format: 'cjs' },
    { file: 'dist/esm.js', format: 'esm' }
  ],
  external: [
    'react',
    'react-dom',
    'react/jsx-runtime',
    'classnames',
    'lodash.chunk',
    'react-multi-ref',
    '@pixiepkg/icon'
  ],
  plugins: [
    del({ targets: 'dist' }),
    copy({ targets: [{ src: 'font', dest: 'dist' }] }),
    copy({ targets: [{ src: 'src/theme', dest: 'dist' }] }),
    postcss(postcssOptions),
    typescript({
      typescript: require('ttypescript'),
      useTsconfigDeclarationDir: true
    }),
    copy({ targets: [{ src: 'package.json', dest: 'dist' }] }),

  ]
};

export default [bundleMain];
