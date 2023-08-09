# 웹툰 모아봐요

## Overview

![프로젝트 이미지](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/407e559d-25bf-43dd-9da7-c5b1653057e6/ogImg.png)

프로젝트 이미지

> **프로젝트명 
웹툰 모아봐요

프로젝트 기간 
2023년 2월 20일 ~ 3월 17일**
https://github.com/JHni2/collect-webtoons
> 

## Project

### 프로젝트 소개

여러 플랫폼에 있는 웹툰을 매번 찾아 보는 게 번거롭지 않으셨나요?

이러한 번거로움을 해소하기 위해 플랫폼이 다른 웹툰들을 한 곳에 모았습니다!

이전보다 편하게 웹툰을 즐겨보세요. 😎

플랫폼이 다르지만 관심 웹툰을 설정할 수 있는 것은 덤입니다!

### 시연 영상

https://www.youtube.com/watch?v=SX02wPurmEo

### 배포 링크

[웹툰 모아봐요](https://collect-webtoons.vercel.app/)

### **기술 스택**

**`React`** **`Vite`** **`Typescript`** **`Recoil`** **`Tailwind CSS`** **`Firebase`**

### 폴더 구조

```
📦src
 ┣ 📂assets
 ┃ ┗ 📂css
 ┃ ┃ ┣ 📂img
 ┃ ┃ ┃ ┣ 📜check-circle-fill.svg
 ┃ ┃ ┃ ┣ 📜check-circle.svg
 ┃ ┃ ┃ ┗ 📜google.svg
 ┃ ┃ ┣ 📜style.css
 ┃ ┃ ┗ 📜tailwind.css
 ┣ 📂components
 ┃ ┣ 📜FavoriteList.tsx
 ┃ ┣ 📜FilterNav.tsx
 ┃ ┣ 📜Footer.tsx
 ┃ ┣ 📜Header.tsx
 ┃ ┣ 📜IndexPage.tsx
 ┃ ┣ 📜InputSearch.tsx
 ┃ ┣ 📜JoinPage.tsx
 ┃ ┣ 📜Loading.tsx
 ┃ ┣ 📜LoginPage.tsx
 ┃ ┣ 📜Pagination.tsx
 ┃ ┣ 📜SearchedWebtoonList.tsx
 ┃ ┣ 📜SearchPage.tsx
 ┃ ┣ 📜UserModal.tsx
 ┃ ┣ 📜UserPage.tsx
 ┃ ┣ 📜WebtoonDetailPage.tsx
 ┃ ┗ 📜WebtoonFilter.tsx
 ┣ 📂constants
 ┃ ┗ 📜week.ts
 ┣ 📂context
 ┃ ┣ 📜SearchToggleContext.tsx
 ┃ ┣ 📜UserInfoContext.tsx
 ┃ ┗ 📜UserModalContext.tsx
 ┣ 📂helpers
 ┃ ┗ 📜helpers.ts
 ┣ 📂pages
 ┃ ┣ 📜Index.tsx
 ┃ ┣ 📜Join.tsx
 ┃ ┣ 📜Login.tsx
 ┃ ┣ 📜Search.tsx
 ┃ ┗ 📜User.tsx
 ┣ 📂stores
 ┃ ┗ 📂Webtoon
 ┃ ┃ ┣ 📜types.ts
 ┃ ┃ ┣ 📜WebtoonData.ts
 ┃ ┃ ┗ 📜webtoons.ts
 ┣ 📜App.tsx
 ┣ 📜firebase.tsx
 ┣ 📜main.tsx
 ┗ 📜vite-env.d.ts
```

### 프로젝트 주요 기능

1. **웹툰 모아보기 ****
    - 요일, 장르, 플랫폼별 필터링
        
        ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/089cdebb-6831-4cf1-a08c-a4a1fc1343f6/Untitled.png)
        

1.  **제목 / 작가로 검색하기**
    - 검색 키워드 자동 완성 및 검색  **

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9e1bea1b-64c3-4019-9506-9a33532ebd84/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ea7fc9c9-ee53-4beb-90ab-e89eeeab0092/Untitled.png)

1. **웹툰 상세 페이지**
    - 관심 웹툰 설정

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4d68b83e-850d-4b31-b999-b8f6ccbc9662/Untitled.png)

1. **마이 페이지**
    - 관심 웹툰
    - 관심 웹툰과 같은 장르의 추천 웹툰

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/aa67d428-7f95-43a4-bd50-2cf2430244cd/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6da82860-9f46-443b-bc01-85a8190e4ef8/Untitled.png)

1. **회원가입 및 로그인**
    - 이메일 로그인, 소셜 로그인(구글)
    - 이메일 회원 가입

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/17e5db61-06e7-4fe3-ac54-921214adc2d9/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/71886c3c-c27d-4859-83e7-0192956f3c9a/Untitled.png)

## 기술 특장점

- React를 사용해 웹 페이지를 효율적으로 구현하고 관리했어요.
- Typescript를 사용해 코드에 맞는 타입을 지정해 버그를 방지했어요.
- Recoil을 사용해 쉽게 웹툰 정보를 불러왔어요.
- Tailwind CSS를 사용해 css 속성을 직관적으로 표현하고 효율적으로 사용했어요.
- Firebase의 Firesotr에 user, webtoon 컬렉션을 만들어 사용했어요.

## Trouble Shooting

firestore에서 웹툰 데이터를 가져오면서 아래와 같은 오류가 발생했어요.

<aside>
👾 Uncaught (in promise) FirebaseError: Quota exceeded.

</aside>

무슨 오류인가 검색해보니 프로젝트가 무료 한도를 초과해서 발생한 에러였어요.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d0f7d58e-a2d3-4979-bb38-e657b3f5a629/Untitled.png)

아래 코드처럼 웹툰 정보를 가져올 때마다 서버에서 직접 정보를 가져왔기 때문에 읽기 사용량이 나올 수밖에 없었어요.

```jsx
const filtered_webtoons = async () => {
    const q = query(collection(db, 'webtoon'))
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc: DocumentData) => {
      doc.data().searchKeyword && doc.data().searchKeyword.includes(searchQuery.keyword) && setSearchedWebtoons([...searchedWebtoons, doc.data()])
    })
  }
```

그래서 서버에서 직접 정보를 가져오는 방법 대신, 전역 상태 관리 라이브러리를 사용해서 웹툰 정보를 가져오는 방법으로 방향을 바꾸었어요.

Redux와 Recoil 중에 어떤 라이브러리를 선택할까 생각하던 중, Recoil이 React에 최적화돼있고, 비동기 요청이 간단하기 때문에 Recoil을 선택했어요.

Recoil을 사용해 웹툰 정보를 가져온 결과, 아래 사진과 같이 현저히 줄어든 사용량을 볼 수 있었어요.