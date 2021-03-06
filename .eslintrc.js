module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: 'tsconfig.json',
    ecmaVersion: 'ES2020',
  },
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: [
    '*.js',
    'scripts',
    'src/external',
    'src/generated',
    'src/protos/**/*.ts',
  ],
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  rules: {
    'no-implicit-coercion': 'error',
    'radix': 'error',
    'no-console': 'warn',
    'no-multi-spaces': 'error',
    'no-trailing-spaces': 'error',
    'no-multiple-empty-lines': ['error', {
      'max': 1,
      'maxEOF': 0,
    }],
    'eol-last': ['error', 'always'],
    'multiline-ternary': ['error', 'always-multiline'],
    'operator-linebreak': ['error', 'before'],
    'object-property-newline': 'error',
    'object-curly-newline': ['error', {
      'ObjectExpression': {
        'minProperties': 1,
      },
      'ObjectPattern': {
        'multiline': true,
      },
      'ImportDeclaration': {
        'multiline': true,
      },
      'ExportDeclaration': {
        'multiline': true,
      },
    }],
    'semi-spacing': 'error',
    'space-in-parens': 'error',
    'space-before-blocks': 'error',
    'block-spacing': 'error',
    'arrow-spacing': 'error',
    'array-bracket-spacing': 'error',
    'array-element-newline': ['error', 'consistent'],
    'indent': ['error', 2, {
      'SwitchCase': 1,
    }],
    // https://github.com/typescript-eslint/typescript-eslint/issues/1824
    // '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'error',
    '@typescript-eslint/quotes': ['error', 'single'],
    '@typescript-eslint/semi': 'error',
    '@typescript-eslint/brace-style': ['error', 'stroustrup'],
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
    '@typescript-eslint/comma-spacing': 'error',
    '@typescript-eslint/keyword-spacing': 'error',
    '@typescript-eslint/no-duplicate-imports': 'error',
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],
    '@typescript-eslint/type-annotation-spacing': 'error',
    '@typescript-eslint/typedef': ['warn', {
      'arrayDestructuring': true,
      'arrowParameter': true,
      'memberVariableDeclaration': true,
      'objectDestructuring': true,
      'parameter': true,
      'propertyDeclaration': true,
      'variableDeclaration': true,
      'variableDeclarationIgnoreFunction': true,
    }],
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'warn',
    '@typescript-eslint/array-type': ['error', {
      'default': 'generic',
    }],
    '@typescript-eslint/member-delimiter-style': ['error', {
      'singleline': {
        'requireLast': true,
      }
    }],
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'warn',
    '@typescript-eslint/no-unsafe-member-access': 'warn',
    '@typescript-eslint/no-unsafe-return': 'warn',
  },
};
