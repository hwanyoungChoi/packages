# @conychoi/prettier-config

공통 prettier 설정

## 설치

````bash
npm install --save-dev @conychoi/prettier-config

## 사용법

프로젝트 루트에 `.prettierrc.js` 파일을 만들고 설치한 패키지를 내보내기만 하면 됩니다.

```js
module.exports = require("@conychoi/prettier-config");
````

확장하고싶다면

```js
module.exports = {
  ...require("@conychoi/prettier-config"),
  semi: false, // 이 프로젝트만 세미콜론 제외
};
```

## 기술스택

- peerDependency: prettier (^3.0.0)

## 배포

```bash
npm publish
```
