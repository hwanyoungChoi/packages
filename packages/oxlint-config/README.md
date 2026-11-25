# @conychoi/oxlint-config

Oxlint 설정. [`@conychoi/eslint-config`](https://www.npmjs.com/package/@conychoi/eslint-config)와 **함께 쓰는** 구성입니다.

[Oxlint](https://oxc.rs/docs/guide/usage/linter)는 Rust로 만든 린터로, ESLint와 규칙 이름이 같고 훨씬 빠릅니다.
다만 아직 일부 규칙(`import/order`, React Native 규칙 등)이 없어서 ESLint를 완전히 대체하지는 않고,
아래처럼 역할을 나눕니다.

```
oxlint    — 대부분의 검사 (TypeScript, React, Hooks, Next.js)
eslint    — Oxlint에 없는 규칙만 (import/order, react-native)
prettier  — 포맷
```

ESLint에서는 Oxlint가 이미 검사하는 규칙을 꺼서 같은 규칙을 두 번 돌리지 않습니다.

## 설치

```bash
pnpm add -D @conychoi/oxlint-config oxlint
```

ESLint와 함께 쓴다면 `@conychoi/eslint-config`도 설치합니다.

```bash
pnpm add -D @conychoi/eslint-config eslint typescript
```

## 사용법

### 1. Oxlint

프로젝트 루트에 `.oxlintrc.json`을 만들고 프리셋을 `extends`합니다.

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "extends": ["./node_modules/@conychoi/oxlint-config/next.json"]
}
```

| 프리셋       | 대상                      |
| ------------ | ------------------------- |
| `base.json`  | TypeScript만 (React 없이) |
| `react.json` | React (React Native 포함) |
| `next.json`  | Next.js                   |

`.oxlintrc.json`의 `extends`는 패키지명이 아니라 **파일 경로**만 받기 때문에 `./node_modules/...` 경로로 적습니다.

### 2. ESLint

ESLint 설정 배열의 **마지막**에 `oxlintCompat()`을 spread합니다.

```js
// eslint.config.mjs
import nextConfig from "@conychoi/eslint-config/next";
import oxlintCompat from "@conychoi/oxlint-config/eslint";

export default [...nextConfig, ...oxlintCompat()];
```

`oxlintCompat()`은 프로젝트의 `.oxlintrc.json`을 읽어서 Oxlint가 켜둔 규칙을 ESLint에서 끕니다.
설정 파일이 다른 위치에 있다면 경로를 넘겨주세요 — `oxlintCompat("./config/.oxlintrc.json")`.

### 3. scripts

Oxlint를 먼저 돌립니다.

```json
{
  "scripts": {
    "lint": "oxlint && eslint .",
    "lint:fix": "oxlint --fix && eslint . --fix"
  }
}
```

## React Native

Oxlint에는 React Native 규칙이 없습니다. `react.json`을 쓰고, React Native 규칙은 ESLint 쪽
`@conychoi/eslint-config/react-native`가 계속 담당합니다.

```json
{ "extends": ["./node_modules/@conychoi/oxlint-config/react.json"] }
```

```js
import rnConfig from "@conychoi/eslint-config/react-native";
import oxlintCompat from "@conychoi/oxlint-config/eslint";

export default [...rnConfig, ...oxlintCompat()];
```

## 주의할 점

- **무시 경로는 상속되지 않습니다.** Oxlint는 `extends`로 `rules` · `plugins` · `categories`만 물려받습니다.
  대신 `.gitignore`에 적힌 경로는 자동으로 건너뜁니다. `node_modules`, `dist`, `build`가 `.gitignore`에
  들어 있다면 따로 적을 필요가 없습니다. 반대로 `.gitignore`가 없으면 `node_modules`까지 검사하니 주의하세요.
  그 밖에 무시할 경로가 있다면 프로젝트의 `.oxlintrc.json`에 `ignorePatterns`로 적어주세요.
- **ESLint 쪽보다 조금 더 엄격할 수 있습니다.** Oxlint의 correctness 카테고리를 통째로 켜기 때문에
  `@conychoi/eslint-config`에 없는 규칙(unicorn, oxc 등)이 일부 함께 켜집니다.
  `react/set-state-in-effect`는 기존 코드에서 바로 error가 나지 않도록 warn으로 낮춰뒀습니다.

## 설정 구조

```
base.json    — TypeScript + import + correctness 카테고리
  ↑
react.json   — + React / Hooks 규칙
  ↑
next.json    — + Next.js 규칙
eslint.js    — ESLint에서 겹치는 규칙을 끄는 헬퍼 (eslint-plugin-oxlint)
```

## 기술스택

- peerDependency: oxlint (^1.95.0), eslint (>=9.7.0 <10, 선택)
- 포함: eslint-plugin-oxlint

## 배포

이 패키지는 [conychoi/packages](https://github.com/hwanyoungChoi/packages) 모노레포에서
changesets로 관리합니다. 배포 절차는
[루트 README](https://github.com/hwanyoungChoi/packages#배포)를 참고하세요.
