import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import ts from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginOnlyWarn from "eslint-plugin-only-warn";
import path from "path";
import { fileURLToPath } from "url";
import globals from "globals";
import next from "@vercel/style-guide/eslint/next";
import { fixupConfigRules } from "@eslint/compat";
import sharedRules from "./shared-rules.js";
import turboConfig from "eslint-config-turbo/flat";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/**
 * A custom ESLint configuration for libraries that use Next.js.
 *
 * @type {import("eslint").Linter.Config[]}
 * */
export default ts.config(
  {
    ignores: [
      // Ignore dotfiles
      ".*.js",
      "node_modules/",
      ".next/",
      "coverage",
      "jest.config.ts",
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
        ...globals.browser,
      },
    },
  },
  {
    plugins: {
      ["only-warn"]: eslintPluginOnlyWarn,
    },
  },
  js.configs.recommended,
  ...fixupConfigRules(compat.config(next)),
  ...turboConfig,
  ...ts.config({
    files: ["**/*.js?(x)", "**/*.ts?(x)"],
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
