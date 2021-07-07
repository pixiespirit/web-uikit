module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended'
    // 'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  rules: {
    // eslint currently not detect props typing definitions
    // as a props validator
    // https://github.com/yannickcr/eslint-plugin-react/issues/2353
    'react/prop-types': 'off',

    // TODO: Turn it on again and fix errors
    'react/display-name': 'off',

    // I prefers pass children as prop if it is a single ReactNode child
    // (no-nested-child)
    'react/no-children-prop': 'off',

    // 'prettier/prettier': ['error', {}, { usePrettierrc: true }],

    // Eslint false positive: Consider enum as unused variables
    // https://github.com/typescript-eslint/typescript-eslint/issues/2621
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',

    // https://reactjs.org/docs/hooks-rules.html
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn' // Checks effect dependencies
  },
  settings: {
    // Warning: React version not specified in eslint-plugin-react settings
    // https://github.com/yannickcr/eslint-plugin-react/issues/1955
    react: {
      version: '17'
    }
  },
  globals: {
    JSX: 'readonly'
  }
};
