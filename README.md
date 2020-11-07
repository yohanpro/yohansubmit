## 프로젝트 실행 가이드

1. git clone

```bash
$ git clone git@github.com:yohanpro/yohansubmit.git
```

2. npm install

```bash
$ npm i
```

3. 실행하기 : `기본포트 3000`

- 개발 모드 (development)

```bash
$ npm run dev
```

- production 모드

```bash
$ npm run build
$ npm run start
```

<hr>

## 프로젝트 구조

```
.
+-- api
+-- componenets
|   +-- DataTable
|       +-- index.js
        +-- PersonDetail.js
|   +-- PieChart
|       +-- Chart.js
        +-- index.js
+-- pages
|   +-- _app.js
|   +-- index.js
+-- styles
|   +-- _components.scss
|   +-- _layout.scss
|   +-- _base.scss
|   +-- main.scss
+-- SyntheaDatas  <- 이 폴더 아래에 json 데이터를 넣어주세요
+-- jsconfig.json
+-- package.json

```

- `api`: 전체방문수와 진단정보를 가져오는 함수 위치
- `components` : 파이차트와 환자 차트 컴포넌트들 위치
- `components/Datatable` : 환자차트 컴포넌트
- `components/PersonDetial` : 환자차트에서 row expand시 나타나는 컴포넌트
- `components/PieChart/index` : 파이차트 컴포넌트
- `components/PieChart/Chart` : 각각의 (민족, 성별, 인종) 파이차트 공통 컴포넌트
- `pages/_app.js`: 공통 css 및 스크립트를 적용하기 위하여 nextjs에 제공하는 파일
- `styles`: scss 파일 위치
- `jsconfig.json`: 파일경로를 단순화하기 위한 설정파일(ex '../../components'-> 'components')

 <hr>

## SyntheaDatas 폴더 아래에 json 파일 필요

- condition_occurrence.json
- death.json
- person.json
- visit_occurrence.json
