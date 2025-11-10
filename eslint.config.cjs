module.exports = (async function config() {
  const { love } = require('eslint-config-love')
  const simpleImportSort = require('eslint-plugin-simple-import-sort')

  return [
    {
      ...love,
      files: ['**/*.js', '**/*.ts', '**/*.tsx'],
      languageOptions: {
        parserOptions: {
          project: ['tsconfig.json']
        }
      },
      plugins: {
        'simple-import-sort': simpleImportSort
      },
      rules: {
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error'
      }
    }
  ]
})()
