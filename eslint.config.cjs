// const simpleImportSort = require('eslint-plugin-simple-import-sort')
// const tsEslint = require('@typescript-eslint/eslint-plugin')
// const tsParser = require('@typescript-eslint/parser')
// const love = require('eslint-config-love').default

// module.exports = [
//   {
//     files: ['**/*.ts', '**/*.tsx', '**/*.js'],
//     languageOptions: {
//       parser: tsParser,
//       parserOptions: {
//         project: ['./tsconfig.json'],
//         sourceType: 'module'
//       }
//     },
//     plugins: {
//       '@typescript-eslint': tsEslint,
//       'simple-import-sort': simpleImportSort
//     },
//     rules: {
//       ...love.rules,
//       'simple-import-sort/imports': 'error',
//       'simple-import-sort/exports': 'error'
//     }
//   }
// ]

import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.json'],
        sourceType: 'module'
      }
    },
    plugins: { "simple-import-sort": simpleImportSort },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },
  eslintConfigPrettier,
);