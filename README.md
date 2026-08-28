# @conychoi packages

개인 프로젝트에서 공통으로 사용하는 설정 패키지 모음입니다.
pnpm workspace 기반 모노레포로 관리합니다.

## Packages

| Package                                                                              | Version                                                                                                                   | Description        |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| [@conychoi/eslint-config](https://www.npmjs.com/package/@conychoi/eslint-config)     | [![npm](https://img.shields.io/npm/v/@conychoi/eslint-config)](https://www.npmjs.com/package/@conychoi/eslint-config)     | ESLint 공통 설정   |
| [@conychoi/prettier-config](https://www.npmjs.com/package/@conychoi/prettier-config) | [![npm](https://img.shields.io/npm/v/@conychoi/prettier-config)](https://www.npmjs.com/package/@conychoi/prettier-config) | Prettier 공통 설정 |

## 구조

```
.
├── packages/
│   ├── eslint-config/     — @conychoi/eslint-config
│   └── prettier-config/   — @conychoi/prettier-config
├── .changeset/            — 버전 관리 · CHANGELOG
├── eslint.config.mjs      — 이 레포 자체에 자기 설정을 적용 (dogfooding)
├── pnpm-workspace.yaml
└── package.json           — 워크스페이스 루트 (private)
```

이 레포는 자기가 배포하는 설정을 스스로에게 적용합니다.
`eslint.config.mjs`와 루트 `package.json`의 `prettier` 필드가 워크스페이스 링크를 통해
`@conychoi/eslint-config` · `@conychoi/prettier-config`를 그대로 사용하므로,
설정을 바꾸면 이 레포의 lint 결과에 바로 반영됩니다.

## 요구사항

- Node.js >= 20
- pnpm >= 10

패키지 매니저는 pnpm으로 고정돼 있습니다. `package.json`의 `packageManager` 필드로 버전이
핀되어 있으므로 [corepack](https://nodejs.org/api/corepack.html)을 켜두면 자동으로 맞춰집니다.

```bash
corepack enable
```

npm이나 yarn으로 설치를 시도하면 `preinstall` 훅에서 차단됩니다.

## 개발

```bash
pnpm install          # 의존성 설치
pnpm lint             # 전체 lint
pnpm lint:fix         # lint 자동 수정
pnpm format           # prettier 적용
pnpm format:check     # 포맷 검사만
```

특정 패키지에만 명령을 실행하려면 `--filter`를 씁니다.

```bash
pnpm --filter @conychoi/eslint-config <command>
```

## 배포

[changesets](https://github.com/changesets/changesets)로 버전과 CHANGELOG를 관리합니다.

1. 패키지를 수정한 PR에 changeset을 함께 넣습니다.

   ```bash
   pnpm changeset
   ```

   수정한 패키지와 버전 단계(patch / minor / major)를 고르고 변경 요약을 적으면
   `.changeset/*.md` 파일이 생성됩니다. 이 파일을 커밋에 포함하세요.
   릴리즈가 필요 없는 변경이면 `pnpm changeset --empty`로 빈 changeset을 넣습니다.

2. main에 머지된 뒤 버전을 올리고 배포합니다.

   ```bash
   pnpm version-packages   # changeset 기반으로 버전 · CHANGELOG 갱신
   pnpm release            # npm 배포
   ```
