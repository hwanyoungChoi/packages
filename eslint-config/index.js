import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import tseslint from "typescript-eslint";

export default [
  {
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "**/build/**",
      "**/coverage/**",
      "**/.turbo/**",
      "**/.cache/**",
      "**/.eslintcache",
      "**/*.tsbuildinfo",
      "**/*.min.js",
      "**/generated/**",
      "**/public/**",
      "**/.environment/**",
      "**/*.env*",
      "**/package-lock.json",
      "**/pnpm-lock.yaml",
      "**/yarn.lock",

      // 설정 파일 (CommonJS — require/module.exports 사용)
      "**/*.config.js",
      "**/*.config.cjs",
      "**/.prettierrc.js",
      "**/.prettierrc.cjs",
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  {
    rules: {
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            ["parent", "sibling", "index"],
            "object",
            "type",
            "unknown",
          ],
          "newlines-between": "always",
          alphabetize: { order: "asc" },
        },
      ],
      "import/no-unresolved": "off",
      "import/namespace": "off",
      "import/named": "off",

      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        { prefer: "type-imports" },
      ],
      "@typescript-eslint/ban-ts-comment": [
        "warn",
        {
          "ts-ignore": false,
          "ts-expect-error": "allow-with-description",
          "ts-nocheck": true,
          "ts-check": false,
        },
      ],
      "@typescript-eslint/no-empty-object-type": "warn",

      "no-console": "warn",
      "no-undef": "off",
    },
    settings: {
      "import/resolver": {
        node: true,
      },
    },
  },
  prettier,
];
