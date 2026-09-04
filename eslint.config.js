const eslintConfigGbrachetta = require("./index.js");

module.exports = [
  ...eslintConfigGbrachetta,

  {
    files: ["eslint.config.js", "index.js"],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },

  {
    files: ["eslint.config.js", "**/*.config.js", "**/.*rc.js"],
    rules: {
      "import/no-commonjs": "off",
      "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    },
  },
];
