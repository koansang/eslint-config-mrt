module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
        jsx: true,
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    // @typescript-eslint rules: https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules
    indent: 'off',
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
  },
  settings: {
    react: {
        version: 'detect',
    },
  },
};
