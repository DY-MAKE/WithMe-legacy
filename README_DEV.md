# 프로젝트별 README

[React Readme](https://github.com/DY-MAKE/WithMe/blob/develop/client/README.md)

[Nest Readme](https://github.com/DY-MAKE/WithMe/blob/develop/server/README.md)

---

## Available Scripts

### Run

default port is 3001
http://localhost:3001

```bash
# development
$ yarn dev

# production mode
$ yarn prod
```

### Build

```bash
# Build all
$ yarn build
```

## Branch

브랜치 관리 방법
**기본적으로 git-flow를 사용합니다.**

### master

출시 전용 브랜치
오류 없이 유지시키기

만약 병합 이후 오류가 발생한다면 해당 커밋은 **revert**

### develop

개발 전용 브랜치, master 병합 전 코드 충돌이나 오류들을 확인하는 브랜치

만약 병합 이후 오류가 발생한다면 해당 커밋은 **revert**

### feature/

새로운 기능 개발/개선등 작업이 필요할 때 사용

브랜치에서의 개발이 완료되면 develop 브랜치로 병합

##### Example

`feature/UserLogin`
`feature/OptimizeSearchEngine`

## Commit Convention

프로젝트 커밋에 관련된 규칙

### Commit Message

커밋 메세지에 들어가야 하는 정보

- **CommitType**: 커밋 종류
- **title**: 커밋에 대한 간단한 요약
- **description**: 세부적인 수정 사항, '-' 을 줄 시작에 입력

#### Commit Type

- **feat (Feature)**: 새로운 기능 추가
- **fix**: 버그 수정
- **docs**: 문서 수정
- **style**: 코드 포매팅
- **ref (Refactor)**: 코드 리팩토링

#### Commit Example

```
feat: User 로그인 구현

- UserContext 추가
- Login API 추가
- Login 페이지 추가
```

```
fix: API 통신 이슈 해결

- 백엔드 Base URL이 잘못 세팅되어 있던 문제 해결
```
