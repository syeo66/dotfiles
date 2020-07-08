module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier', 'simple-import-sort', 'react-hooks'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: { modules: true },
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/member-delimiter-style': ['error', { multiline: { delimiter: 'none' } }],
    'no-console': 'error',
    'no-else-return': 'error',
    'no-empty': 'error',
    'no-shadow': 'error',
    'prefer-destructuring': 'error',
    'prefer-template': 'error',
    'prettier/prettier': 'error',
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'simple-import-sort/sort': 'error',
    'sort-keys': 'error',
    'sort-vars': 'error',
    // 'sort-imports': 'error',
    complexity: ['warn', 15],
    eqeqeq: 'error',
  },
}
