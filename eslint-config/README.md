# @superbin/eslint-config

ESLint 설정 (flat config)

## 설치

```bash
npm install --save-dev @conychoi/prettier-config
```

## 사용법

프로젝트 루트에 `eslint.config.mjs` 파일을 만들고 (또는 `eslint.config.js` + `"type": "module"`):

### Next.js 프로젝트

```js
import nextConfig from "@superbin/eslint-config/next";

export default nextConfig;
```

### React 프로젝트

```js
import reactConfig from "@superbin/eslint-config/react";

export default reactConfig;
```

### React Native 프로젝트

```js
import rnConfig from "@superbin/eslint-config/react-native";

export default rnConfig;
```

### TypeScript만 (React 없이)

```js
import baseConfig from "@superbin/eslint-config";

export default baseConfig;
```

## 설정 구조

```
index.js          — TypeScript + import 정렬 + prettier 충돌 방지
  ↑
react.js          — + React / Hooks 규칙
  ↑               ↑
next.js           react-native.js
(+ Next.js 규칙)   (+ React Native 규칙, 느슨한 프리셋)
```

상위 설정을 자동으로 포함하므로, `next`나 `react-native`를 쓰면 `react`와 `index` 규칙도 적용됩니다.

## 포함된 주요 규칙

### import 정렬 (자동 fix)

```
1. builtin    — Node.js 내장 모듈 (fs, path)
2. external   — 외부 모듈 (react, axios)
3. internal   — 절대 경로 모듈 (@/lib, @/components)
4. relative   — 상대 경로 모듈 (../utils, ./hooks)
5. type       — 타입 임포트
```

그룹 사이에 빈 줄이 삽입되며, 각 그룹 내에서 알파벳 순으로 정렬됩니다.

### TypeScript

- `no-explicit-any` — any 사용 시 경고
- `no-unused-vars` — 미사용 변수 경고 (`_` 접두사 허용)
- `consistent-type-imports` — `import type` 권장

### React (react, next, react-native 설정에 포함)

- `rules-of-hooks` — Hooks 규칙 위반 시 에러
- `exhaustive-deps` — useEffect 의존성 누락 경고

## 확장하고 싶다면

flat config는 배열을 spread해서 항목을 덧붙이는 형태로 확장합니다.

```js
import nextConfig from "@superbin/eslint-config/next";

export default [
  ...nextConfig,
  {
    rules: {
      "no-console": "off",
    },
  },
];
```

## 기술스택

- peerDependency: eslint (>=9.0.0), typescript (>=5.0.0)
- 포함: typescript-eslint, eslint-plugin-import, eslint-plugin-react, eslint-plugin-react-hooks, eslint-plugin-react-native, @next/eslint-plugin-next, eslint-config-prettier

## 배포

```bash
npm publish
```
