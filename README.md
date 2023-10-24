# Eslint config with TypeScript support

1. Install the package

    ```bash
    npm i -D eslint-config-gbrachetta
    ```

2. Add to **"gbrachetta"** to `.eslintrc.json`

   ```json
   {
     "extends": [
       // [other extends]
       "gbrachetta"
     ]
   }
   ```

3. If on VSCode, intall the estension [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens) to display errors.
4. If you use VSCode and want to lint and format on save, add the following values to `settings.json`

   ```json
   {
      "editor.codeActionsOnSave": { "source.fixAll.eslint": true },
      "editor.formatOnSave": true,
   }
   ```
