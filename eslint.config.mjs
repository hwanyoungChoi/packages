import baseConfig from "@conychoi/eslint-config";
import oxlintCompat from "@conychoi/oxlint-config/eslint";

export default [...baseConfig, ...oxlintCompat()];
