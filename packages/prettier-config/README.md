# @conychoi/prettier-config

공통 Prettier 설정

## 설치

```bash
pnpm add -D @conychoi/prettier-config prettier
```

## 사용법

`package.json`에 `prettier` 필드로 패키지명을 적어주면 됩니다.

```json
{
  "prettier": "@conychoi/prettier-config"
}
```

별도 파일로 두고 싶다면 프로젝트 루트에 `.prettierrc.js`를 만들고 그대로 내보냅니다.

```js
module.exports = require("@conychoi/prettier-config");
```

### 확장하고 싶다면

```js
module.exports = {
  ...require("@conychoi/prettier-config"),
  semi: false, // 이 프로젝트만 세미콜론 제외
};
```

## 설정 값

| 옵션             | 값         |
| ---------------- | ---------- |
| `semi`           | `true`     |
| `singleQuote`    | `false`    |
| `tabWidth`       | `2`        |
| `useTabs`        | `false`    |
| `trailingComma`  | `"all"`    |
| `printWidth`     | `100`      |
| `bracketSpacing` | `true`     |
| `arrowParens`    | `"always"` |
| `endOfLine`      | `"lf"`     |

## 기술스택

- peerDependency: prettier (>=3.0.0)

## 배포

이 패키지는 [conychoi/packages](https://github.com/hwanyoungChoi/packages) 모노레포에서
changesets로 관리합니다. 배포 절차는
[루트 README](https://github.com/hwanyoungChoi/packages#배포)를 참고하세요.
