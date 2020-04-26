module.exports = {
  extends: ['airbnb-base', 'prettier'],
  env: {
    node: true,
  },
  rules: {
    'no-unused-vars': [2, { vars: 'all', args: 'after-used', argsIgnorePattern: '^_' }],
    'no-console': ['error', { allow: ['error'] }],
    'no-underscore-dangle': ['error', { allowAfterThis: true }],
    'no-tabs': ['error', { allowIndentationTabs: true }],
    indent: ['error', 'tab'],
  },
};
