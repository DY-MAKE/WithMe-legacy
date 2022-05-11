# Withme_React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

### `yarn install`

install Dependencies modules

### `yarn dev`

개발 모드에서 프로젝트 실행

##### Default Port: `3000`

### `yarn dev:nb`

no browser mode

개발 모드에서 프로젝트 실행, 브라우져를 함께 실행하지 않음

##### Default Port: `3000`

### `yarn prod`

프로덕션 모드에서 프로젝트 실행

##### Default Port: `80`

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

Sourcemap 생성은 비활성화 되어있음

### `yarn lint`

Eslint 실행

### `yarn lint:fix`

Eslint 실행과 자동으로 수정 가능한 항목들을 수정

## Directory Structure

```bash
├── src
|  ├── components
|  |  └── Custom Components
|  ├── hooks
|  |  └── Custom Hooks
|  ├── pages
|  |  └── Routed Pages
|  ├── index.tsx
|  ├── react-app-env.d.ts
|  ├── reportWebVitals.ts
|  └── setupTests.ts
├── craco.config.js
├── package.json
├── tsconfig.json
├── tsconfig.paths.json
├── .env.development
├── .env.production
└── yarn.lock
```

### Environment File

CRA에서 기본으로 제공해주는 세팅 사용

.env.development => dev 모드에서 사용됨
.env.production => build 시에 사용됨

#### 환경변수 추가시 참고사항

`REACT_APP_varblename=value` 형식으로 추가

이외의 형식은 Craco에서 걸러버림
