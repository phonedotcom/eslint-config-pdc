module.exports = {
  overrides: [
    {
      files: ['.js', '*.ts', '*.tsx'],
      extends: [
        'eslint-config-standard-with-typescript',
        'eslint-config-prettier'
      ],
      parserOptions: { project: ['tsconfig.json'] },
      plugins: ['simple-import-sort'],
      rules: {
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error'
      }
    }
  ]
}
