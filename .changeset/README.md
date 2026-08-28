# Changesets

이 디렉토리는 [changesets](https://github.com/changesets/changesets)가 관리합니다.
패키지 버전 관리와 CHANGELOG 생성, npm 배포를 담당합니다.

패키지를 수정했다면 PR에 changeset을 함께 넣어주세요:

```bash
pnpm changeset
```

수정한 패키지와 버전 단계(patch / minor / major)를 고르고 변경 요약을 적으면
`.changeset/*.md` 파일이 생성됩니다. 이 파일을 커밋에 포함하면 됩니다.
