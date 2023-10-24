module.exports = {
  env: {
    es6: true,
  },

  extends: 'plugin:css-import-order/recommended',
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
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/array-type': 'error',
        '@typescript-eslint/consistent-type-assertions': [
          'error',
          { assertionStyle: 'as' },
        ],
        '@typescript-eslint/member-delimiter-style': 'error',
        '@typescript-eslint/no-dynamic-delete': 'error',
        '@typescript-eslint/no-empty-interface': [
          'error',
          { allowSingleExtends: true },
        ],
        '@typescript-eslint/no-extra-non-null-assertion': 'error',
        '@typescript-eslint/no-extraneous-class': 'error',
        '@typescript-eslint/no-unused-vars': [
          'error',
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
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/prefer-for-of': 'error',
        '@typescript-eslint/prefer-function-type': 'error',
        '@typescript-eslint/prefer-namespace-keyword': 'error',
        '@typescript-eslint/unified-signatures': 'error',

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
    'prettier',
    'sort-destructure-keys',
    'typescript-sort-keys',
    'sort-keys-fix',
    '@typescript-eslint',
    'sort-exports',
  ],

  rules: {
    '@typescript-eslint/no-unused-vars': 1,
    'arrow-spacing': 1,
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
    'no-trailing-spaces': 1,
    'padding-line-between-statements': [
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
        prev: ['case', 'default', 'directive', 'const', 'let', 'block-like'],
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
    'space-before-blocks': 1,
    'spaced-comment': [1, 'always'],
    'typescript-sort-keys/interface': 1,
  },

  settings: {
    react: {
      version: 'detect',
    },
  },
};
