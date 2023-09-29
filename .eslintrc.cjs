module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['@yurychang/react', '@yurychang/typescript', 'prettier'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
};
