# ESLint config with TypeScript support

A thorough ESLint configuration for React and TypeScript projects, based on Prettier conventions with additional autofixable sorting rules.

## Installation

Install the package:

```bash
npm i -D eslint-config-gbrachetta
```

## Configuration

This package uses ESLint's flat config format.

Create or update `eslint.config.js`:

```js
const eslintConfigGbrachetta = require("eslint-config-gbrachetta");

module.exports = [
  ...eslintConfigGbrachetta,
];
```

If your project uses an ES module configuration (`eslint.config.js` with `"type": "module"` in `package.json`), use:

```js
import eslintConfigGbrachetta from "eslint-config-gbrachetta";

export default [
  ...eslintConfigGbrachetta,
];
```

## VS Code

If you use VS Code, install the [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens) extension to display ESLint errors and warnings directly in the editor.

To lint and format files on save, add the following to your VS Code `settings.json`:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.formatOnSave": true
}
```
