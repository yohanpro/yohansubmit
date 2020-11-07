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

<hr>

## 구현내용 설명

<br>

### `Next.js` 사용

사용 이유 : 자동 Bundle, SSR 기능 제공, 간편한 코드 스플리팅 기능 제공

### 유저 데이터 테이블 Component

사용 라이브러리 :`react-data-table-component`

사용 이유 : 데이터정렬 및 자동 필터 , 페이지네이션 기능 , row 확장 기능 제공

#### 구현 방법

- 받아와야 할 데이터들을 (환자 기본 정보 + 사망 정보)를 SSR을 통해 미리 받아 온후 Prop으로 전달
- `getStaticProps` : Next.js에서 미리 빌드 타임에 미리 정적 파일을 받아와 prop으로 전달
- `getStaticprops`내에서 사망여부를 포함한 데이터 전반을 map하여 공통 데이터로 사용

#### 환자 상세정보 조회시 (row 클릭)

- 환자에 해당하는 열을 상세보기(전체방문수, 진단정보)를 원할 시 `api`내에 있는 `getAllVisitCount`, `getConditionData`를 호출하여 보여줌.
- `useMemo` 훅을 사용하여 추후 다시 계산과정 최소화.
<hr>

### spinner 컴포넌트 구현

1000개 정도되는 데이터 양이라 약 1초 정도의 로딩시간이 걸려서 짧은편이지만, 의도적으로 2초의 대기시간동안 spinner를 보여주는 UX 삽입

### Pie Chart 컴포넌트

사용 라이브러리 : `highcharts-react`

사용이유: 높은 다운로드 수와 많은 example 및 코드 제공

Chart.js를 따로 모듈화 컴포넌트로 만들어 코드 재사용성을 높임.
