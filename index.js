module.exports = {
  env: {
    es6: true,
  },

  extends: [
    'plugin:css-import-order/recommended',
    'plugin:unicorn/recommended',
  ],
  overrides: [
    {
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
      ],
      files: ['*.ts', '*.tsx'],
      parser: require.resolve('@typescript-eslint/parser'),
      plugins: ['@typescript-eslint/eslint-plugin'],
      rules: {
        '@typescript-eslint/adjacent-overload-signatures': 'warn',
        '@typescript-eslint/array-type': 'warn',
        '@typescript-eslint/consistent-type-assertions': [
          'warn',
          { assertionStyle: 'as' },
        ],
        '@typescript-eslint/member-delimiter-style': 'warn',
        '@typescript-eslint/no-dynamic-delete': 'warn',
        '@typescript-eslint/no-empty-interface': [
          'warn',
          { allowSingleExtends: true },
        ],
        '@typescript-eslint/no-extra-non-null-assertion': 'warn',
        '@typescript-eslint/no-extraneous-class': 'warn',
        '@typescript-eslint/no-unused-vars': [
          'off',
          { argsIgnorePattern: '^_' },
        ],
        '@typescript-eslint/no-use-before-define': [
          'error',
          {
            classes: false,
            functions: false,
            typedefs: false,
            variables: false,
          },
        ],
        '@typescript-eslint/no-useless-constructor': 'warn',
        '@typescript-eslint/prefer-for-of': 'warn',
        '@typescript-eslint/prefer-function-type': 'warn',
        '@typescript-eslint/prefer-namespace-keyword': 'warn',
        '@typescript-eslint/unified-signatures': 'warn',

        'default-case': 'off',
        'no-dupe-class-members': 'off',
        'no-undef': 'off',
        'no-use-before-define': 'off',

        'react/prop-types': 'off',
      },
    },
    {
      env: {
        node: true,
      },
      files: ['*.config.js', '.*rc.js'],
      rules: {
        'import/no-commonjs': 'off',
        'import/no-extraneous-dependencies': [
          'error',
          { devDependencies: true },
        ],
      },
    },
  ],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },

  plugins: [
    '@stylistic',
    '@typescript-eslint',
    'eslint-plugin-import',
    'eslint-plugin-react',
    'prettier',
    'sort-destructure-keys',
    'sort-exports',
    'sort-keys-fix',
    'typescript-sort-keys',
    'unused-imports',
  ],

  rules: {
    '@stylistic/arrow-spacing': 1,
    '@stylistic/no-trailing-spaces': 1,
    '@stylistic/padding-line-between-statements': [
      1,
      {
        blankLine: 'always',
        next: ['return', 'export', 'function', 'block-like'],
        prev: '*',
      },
      {
        blankLine: 'always',
        next: ['const', 'export', 'return'],
        prev: 'import',
      },
      {
        blankLine: 'always',
        next: '*',
        prev: ['default', 'directive', 'const', 'let', 'block-like'],
      },
      {
        blankLine: 'any',
        next: ['case'],
        prev: ['case'],
      },
      {
        blankLine: 'any',
        next: ['let'],
        prev: ['let'],
      },
      {
        blankLine: 'any',
        next: ['const'],
        prev: ['const'],
      },
    ],
    '@stylistic/space-before-blocks': 1,
    '@stylistic/spaced-comment': [1, 'always'],
    '@typescript-eslint/no-unused-vars': 0,
    'css-import-order/css-import-order': 1,
    'import/order': [
      1,
      {
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
        },
        groups: [
          'builtin',
          'external',
          'internal',
          ['sibling', 'parent'],
          'index',
          'type',
          'object',
          'unknown',
        ],
        'newlines-between': 'always',
      },
    ],
    'prefer-const': 1,
    'prettier/prettier': [
      1,
      {
        arrowParens: 'always',
        bracketSameLine: false,
        bracketSpacing: true,
        embeddedLanguageFormatting: 'auto',
        htmlWhitespaceSensitivity: 'css',
        insertPragma: false,
        jsxSingleQuote: false,
        plugins: ['prettier-plugin-tailwindcss'],
        printWidth: 80,
        proseWrap: 'preserve',
        quoteProps: 'as-needed',
        requirePragma: false,
        semi: true,
        singleAttributePerLine: true,
        singleQuote: false,
        tabWidth: 2,
        trailingComma: 'all',
        useTabs: false,
        vueIndentScriptAndStyle: false,
      },
    ],
    'react/jsx-no-undef': 0,
    'react/jsx-sort-props': 1,
    'react/no-unknown-property': 0,
    'react/self-closing-comp': 1,
    'sort-destructure-keys/sort-destructure-keys': [
      1,
      {
        caseSensitive: false,
      },
    ],
    'sort-exports/sort-exports': [
      1,
      {
        ignoreCase: true,
        sortDir: 'asc',
        sortExportKindFirst: 'type',
      },
    ],
    'sort-imports': [
      1,
      {
        allowSeparatedGroups: false,
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
    'sort-keys-fix/sort-keys-fix': 1,
    'typescript-sort-keys/interface': 1,
    'unicorn/empty-brace-spaces': 0,
    'unicorn/prefer-module': 0,
    'unicorn/prevent-abbreviations': [
      2,
      {
        replacements: {
          cmd: {
            command: true,
          },
          e: false,
          errCb: {
            handleError: true,
          },
          props: false,
          ref: false,
          res: false,
        },
      },
    ],
    'unused-imports/no-unused-vars': [
      1,
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        vars: 'all',
        varsIgnorePattern: '^_',
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
