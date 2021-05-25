module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  ignorePatterns: ['dist/*', 'node_modules/*'],
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    'airbnb/whitespace',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
  },
};
