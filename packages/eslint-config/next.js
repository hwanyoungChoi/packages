import nextPlugin from "@next/eslint-plugin-next";

import reactConfig from "./react.js";

export default [
  ...reactConfig,
  {
    ignores: ["**/.next/**", "**/out/**", "**/next-env.d.ts"],
  },
  {
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      "@next/next/no-img-element": "warn",
    },
  },
];
