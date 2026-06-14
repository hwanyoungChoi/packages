import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

import reactConfig from "./react.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const compat = new FlatCompat({ baseDirectory: __dirname });

export default [
  ...reactConfig,
  {
    ignores: [
      "**/ios/build/**",
      "**/android/build/**",
      "**/android/app/build/**",
      "**/.expo/**",
      "**/.expo-shared/**",
    ],
  },
  ...compat.config({
    plugins: ["react-native"],
    extends: ["plugin:react-native/all"],
    env: { "react-native/react-native": true },
    rules: {
      "react-native/no-unused-styles": "warn",
      "react-native/split-platform-components": "off",
      "react-native/no-inline-styles": "off",
      "react-native/no-color-literals": "off",
      "react-native/no-raw-text": "off",
      "react-native/sort-styles": "off",
      "react-native/no-single-element-style-arrays": "off",
    },
  }),
];
