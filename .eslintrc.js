module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/valid-template-root': 'warn',
    'no-unused-vars': 'warn',
    'semi': 'warn',
    'space-before-function-paren': 'warn',
    'vue/no-unused-components': 'warn',
    'no-multiple-empty-lines': 'warn'
  }
}
