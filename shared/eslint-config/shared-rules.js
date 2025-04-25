import unusedImports from "eslint-plugin-unused-imports";

export default {
  plugins: {
    "unused-imports": unusedImports,
  },
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
    "react/display-name": "off",
    "turbo/no-undeclared-env-vars": "off",
    "no-unused-vars": "off",
    "import/no-extraneous-dependencies": "off",
    "import/extensions": "off",
    "import/prefer-default-export": "off",
    "class-methods-use-this": "off",
    "no-restricted-syntax": "off",
    "no-await-in-loop": "off",
    "no-useless-constructor": "off",
    "no-useless-escape": "off",
    "react-hooks/exhaustive-deps": "off",
    "sort-imports": [
      "error",
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
      },
    ],
    "unused-imports/no-unused-imports": "error",
  },
};
