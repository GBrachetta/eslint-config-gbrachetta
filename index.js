const stylistic = require("@stylistic/eslint-plugin");
const tseslint = require("@typescript-eslint/eslint-plugin");
const importPlugin = require("eslint-plugin-import");
const prettierPlugin = require("eslint-plugin-prettier");
const reactPlugin = require("eslint-plugin-react");
const sortDestructureKeys = require("eslint-plugin-sort-destructure-keys");
const sortExports = require("eslint-plugin-sort-exports");
const sortKeysFix = require("eslint-plugin-sort-keys-fix");
const sortProperties = require("eslint-plugin-sort-properties");
const unicorn = require("eslint-plugin-unicorn");

const cssImportOrder = require("./rules/css-import-order");

module.exports = [
  {
    languageOptions: {
      ecmaVersion: "latest",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      sourceType: "module",
    },

    plugins: {
      "@stylistic": stylistic,
      import: importPlugin,
      local: {
        rules: {
          "css-import-order": cssImportOrder,
        },
      },
      prettier: prettierPlugin,
      react: reactPlugin,
      "sort-destructure-keys": sortDestructureKeys,
      "sort-exports": sortExports,
      "sort-keys-fix": sortKeysFix,
      "sort-properties": sortProperties,
    },

    rules: {
      "@stylistic/arrow-spacing": "warn",
      "@stylistic/member-delimiter-style": "warn",
      "@stylistic/no-trailing-spaces": "warn",
      "@stylistic/padding-line-between-statements": [
        "warn",
        {
          blankLine: "always",
          next: ["return", "export", "function", "block-like"],
          prev: "*",
        },
        {
          blankLine: "always",
          next: ["const", "export", "return"],
          prev: "import",
        },
        {
          blankLine: "always",
          next: "*",
          prev: ["default", "directive", "const", "let", "block-like"],
        },
        {
          blankLine: "any",
          next: ["case"],
          prev: ["case"],
        },
        {
          blankLine: "any",
          next: ["let"],
          prev: ["let"],
        },
        {
          blankLine: "any",
          next: ["const"],
          prev: ["const"],
        },
      ],
      "@stylistic/space-before-blocks": "warn",
      "@stylistic/spaced-comment": ["warn", "always"],

      "import/order": [
        "warn",
        {
          alphabetize: {
            caseInsensitive: true,
            order: "asc",
          },
          distinctGroup: false,
          groups: [
            "builtin",
            "external",
            "internal",
            ["sibling", "parent"],
            "index",
            "type",
            "object",
            "unknown",
          ],
          "newlines-between": "always",
          pathGroups: [
            {
              group: "external",
              pattern: "react",
              position: "before",
            },
          ],
          pathGroupsExcludedImportTypes: ["builtin"],
        },
      ],

      "local/css-import-order": "warn",

      "no-var": "off",
      "prefer-const": "warn",

      "prettier/prettier": [
        "warn",
        {
          arrowParens: "always",
          bracketSameLine: false,
          bracketSpacing: true,
          embeddedLanguageFormatting: "auto",
          htmlWhitespaceSensitivity: "css",
          insertPragma: false,
          jsxSingleQuote: false,
          plugins: ["prettier-plugin-tailwindcss"],
          printWidth: 80,
          proseWrap: "preserve",
          quoteProps: "as-needed",
          requirePragma: false,
          semi: true,
          singleAttributePerLine: true,
          singleQuote: false,
          tabWidth: 2,
          trailingComma: "all",
          useTabs: false,
          vueIndentScriptAndStyle: false,
        },
      ],

      "react/jsx-no-undef": "off",
      "react/jsx-sort-props": "warn",
      "react/no-unknown-property": "off",
      "react/self-closing-comp": "warn",

      "sort-destructure-keys/sort-destructure-keys": [
        "warn",
        {
          caseSensitive: false,
        },
      ],

      "sort-exports/sort-exports": [
        "warn",
        {
          disableAutofixer: true,
          ignoreCase: true,
          sortDir: "asc",
          sortExportKindFirst: "type",
        },
      ],

      "sort-imports": [
        "warn",
        {
          allowSeparatedGroups: false,
          ignoreCase: false,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
        },
      ],

      "sort-keys-fix/sort-keys-fix": "warn",
      "sort-properties/sort-interface": "warn",
    },

    settings: {
      react: {
        version: "detect",
      },
    },
  },

  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: importPlugin.flatConfigs.typescript.rules,
    settings: importPlugin.flatConfigs.typescript.settings,
  },

  ...tseslint.configs["flat/recommended"],

  {
    files: ["**/*.ts", "**/*.tsx"],

    rules: {
      "@typescript-eslint/adjacent-overload-signatures": "warn",
      "@typescript-eslint/array-type": "warn",
      "@typescript-eslint/consistent-type-assertions": [
        "warn",
        { assertionStyle: "as" },
      ],
      "@typescript-eslint/no-dynamic-delete": "warn",
      "@typescript-eslint/no-empty-object-type": [
        "warn",
        {
          allowInterfaces: "with-single-extends",
        },
      ],
      "@typescript-eslint/no-extra-non-null-assertion": "warn",
      "@typescript-eslint/no-extraneous-class": "warn",
      "@typescript-eslint/no-use-before-define": [
        "error",
        {
          classes: false,
          functions: false,
          typedefs: false,
          variables: false,
        },
      ],
      "@typescript-eslint/no-useless-constructor": "warn",
      "@typescript-eslint/prefer-for-of": "warn",
      "@typescript-eslint/prefer-function-type": "warn",
      "@typescript-eslint/prefer-namespace-keyword": "warn",
      "@typescript-eslint/unified-signatures": "warn",

      "default-case": "off",
      "no-dupe-class-members": "off",
      "no-undef": "off",
      "no-use-before-define": "off",
      "react/prop-types": "off",
    },
  },

  unicorn.configs["flat/recommended"],

  {
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "no-var": "off",
      "prefer-const": "warn",
      "unicorn/better-regex": "off",
      "unicorn/consistent-function-scoping": "off",
      "unicorn/empty-brace-spaces": "off",
      "unicorn/filename-case": [
        "warn",
        {
          cases: {
            kebabCase: true,
            pascalCase: true,
          },
        },
      ],
      "unicorn/no-negated-condition": "off",
      "unicorn/no-null": "off",
      "unicorn/prefer-module": "off",
      "unicorn/prevent-abbreviations": [
        "error",
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
    },
  },
];
