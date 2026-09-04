module.exports = {
  create(context) {
    const sourceCode = context.sourceCode;

    return {
      Program(node) {
        const imports = node.body.filter(
          (statement) => statement.type === "ImportDeclaration",
        );

        const cssImports = imports.filter(
          (statement) =>
            statement.specifiers.length === 0 &&
            /\.css$/i.test(statement.source.value),
        );

        const nonCssImports = imports.filter(
          (statement) => !cssImports.includes(statement),
        );

        if (cssImports.length === 0 || nonCssImports.length === 0) {
          return;
        }

        const lastNonCssImport = nonCssImports.at(-1);
        const firstCssImport = cssImports[0];

        if (lastNonCssImport.range[0] < firstCssImport.range[0]) {
          return;
        }

        context.report({
          fix(fixer) {
            const sortedImports = [
              ...nonCssImports.map((statement) =>
                sourceCode.getText(statement),
              ),
              "",
              ...cssImports.map((statement) => sourceCode.getText(statement)),
            ].join("\n");

            return fixer.replaceTextRange(
              [imports[0].range[0], imports.at(-1).range[1]],
              sortedImports,
            );
          },
          messageId: "cssImportOrder",

          node: firstCssImport,
        });
      },
    };
  },

  meta: {
    docs: {
      description: "Require CSS side-effect imports after regular imports.",
    },
    fixable: "code",
    messages: {
      cssImportOrder: "CSS imports should come after regular imports.",
    },
    schema: [],
    type: "layout",
  },
};
