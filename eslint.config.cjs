const simpleImportSort = require('eslint-plugin-simple-import-sort')
const tsEslint = require('@typescript-eslint/eslint-plugin')
const tsParser = require('@typescript-eslint/parser')
const love = require('eslint-config-love').default

module.exports = [
  {
    ...love,
    files: ['**/*.ts', '**/*.tsx', '**/*.js'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: ['./tsconfig.json'],
        sourceType: 'module'
      }
    },
    plugins: {
      '@typescript-eslint': tsEslint,
      'simple-import-sort': simpleImportSort
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error'
    }
  }
]
