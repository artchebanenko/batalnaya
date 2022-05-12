module.exports = {
  'parserOptions': {
    'ecmaVersion': 12,
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true,
    },
  },
  'rules': {
    'semi': ['error', 'never'],
    'quotes': ['error', 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }],
    'comma-dangle': ['error', 'always-multiline'],
    'indent': ['error', 2],
    'block-spacing': ['error', 'always'],
  },
}