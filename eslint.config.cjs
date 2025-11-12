const { defineConfig } = require("eslint/config");
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const simpleImportSort = require("eslint-plugin-simple-import-sort");

module.exports = defineConfig([
  eslint.configs.recommended,
  tseslint.configs.recommended,
	{
    files: ['**/*.ts', '**/*.tsx', '**/*.js'],
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error'
    }
	},
]);
