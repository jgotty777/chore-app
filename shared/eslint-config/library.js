import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import ts from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginOnlyWarn from "eslint-plugin-only-warn";
import path from "path";
import { fileURLToPath } from "url";
import globals from "globals";
import turboConfig from "eslint-config-turbo/flat";
import sharedRules from "./shared-rules.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default ts.config(
  {
    ignores: [
      // Ignore dotfiles
      ".*.js",
      "jest.config.ts",
      "node_modules/",
      "dist/",
      "coverage/",
      "setupFilesForTesting.ts",
    ],
  },
  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.node,
      },
    },
  },
  {
    plugins: {
      ["only-warn"]: eslintPluginOnlyWarn,
    },
  },
  js.configs.recommended,
  ...turboConfig,
  ...ts.config({
    files: ["**/*.js?(x)", "**/*.ts?(x)", "**/*.t.ts?(x)"],
    extends: [...ts.configs.recommended],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.json"],
        tsconfigRootDir: process.cwd(),
      },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      "@typescript-eslint/no-empty-object-type": [
        "error",
        { allowInterfaces: "always" },
      ],
      "@typescript-eslint/no-require-imports": [
        "error",
        { allow: ["parse-address"] },
      ],
    },
  }),
  eslintConfigPrettier,
  sharedRules
);
