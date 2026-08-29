# @conychoi/prettier-config

## 1.0.1

### Patch Changes

- e52cae5: README 수정
  
  - 깨진 코드펜스 복구 — 설치 예시가 백틱 4개로 열려 있어 "사용법" 섹션 전체가
    코드블록 안으로 들어간 채 npm에 렌더링되고 있었습니다.
  - 설치 안내를 pnpm 기준으로 변경
  - `package.json`의 `prettier` 필드를 쓰는 방법을 기본 사용법으로 안내
  - peerDependency 표기를 실제 값에 맞게 정정 (`^3.0.0` → `>=3.0.0`)
  - 설정 값 표 추가
  - 배포 절차를 모노레포 changesets 기준으로 변경
  
  `package.json`에 `repository` · `homepage` · `bugs` 필드를 추가해 npm 페이지에서
  저장소로 연결되도록 했습니다. 설정 자체의 동작 변경은 없습니다.
