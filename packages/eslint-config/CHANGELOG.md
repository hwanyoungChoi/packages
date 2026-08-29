# @conychoi/eslint-config

## 1.0.1

### Patch Changes

- e52cae5: README 수정
  
  - 잘못된 패키지명 정정 — npm에 배포된 README가 `@superbin/eslint-config`로 표기돼 있고,
    설치 안내가 다른 패키지(`@conychoi/prettier-config`)를 가리키고 있었습니다.
  - 설치 안내를 pnpm 기준으로 변경
  - peerDependency 표기를 실제 값에 맞게 정정 (`eslint >=9.0.0` → `>=9.7.0 <10`)
  - ESLint 10 / TypeScript 6+ 미지원 안내 추가
  - 배포 절차를 모노레포 changesets 기준으로 변경
  
  `package.json`에 `repository` · `homepage` · `bugs` 필드를 추가해 npm 페이지에서
  저장소로 연결되도록 했습니다. 설정 자체의 동작 변경은 없습니다.
