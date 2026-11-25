import oxlint from "eslint-plugin-oxlint";

/**
 * Oxlint가 이미 검사하는 규칙을 ESLint에서 끈다.
 * ESLint 설정 배열의 마지막에 spread해서 사용한다.
 *
 * @param {string} [oxlintConfigPath] 프로젝트의 Oxlint 설정 파일 경로 (ESLint 실행 위치 기준)
 */
export default function oxlintCompat(oxlintConfigPath = "./.oxlintrc.json") {
  return oxlint.buildFromOxlintConfigFile(oxlintConfigPath);
}
