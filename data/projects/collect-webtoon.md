## Overview

![overview](https://github.com/JHni2/Portfolio/assets/105628384/50432707-d9ab-4d7d-9e03-17175cdf228a)

- **프로젝트명: 웹툰 모아봐요**
- **프로젝트 기간: 2023년 2월 20일 ~ 3월 17일**

- https://github.com/JHni2/collect-webtoons

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

React, Vite, Typescript, Recoil, Tailwind CSS, Firebase

### 프로젝트 주요 기능

1. **웹툰 모아보기**
    - 요일, 장르, 플랫폼별 필터링
        
    ![메인 화면](https://github.com/JHni2/Portfolio/assets/105628384/8698bc25-ddd8-4c86-97c0-725cf690c402)
        

2.  **제목 / 작가로 검색하기**
    - 검색 키워드 자동 완성 및 검색

![검색 키워드 자동 완성](https://github.com/JHni2/Portfolio/assets/105628384/07f72f71-e1bb-4461-8411-17d160e30a05)

![검색 페이지](https://github.com/JHni2/Portfolio/assets/105628384/94d7ab4f-ff7b-47fb-9922-253fc8d47d5c)


3. **웹툰 상세 페이지**
    - 관심 웹툰 설정

![웹툰 상세 페이지](https://github.com/JHni2/Portfolio/assets/105628384/47d66991-1c49-43b8-9bff-2ea377187893)


4. **마이 페이지**
    - 관심 웹툰 확인
    - 관심 웹툰과 같은 장르의 추천 웹툰

![마이페이지](https://github.com/JHni2/Portfolio/assets/105628384/873f757d-6569-45a2-8e56-733ca9162761)


5. **회원가입 및 로그인**
    - 이메일 로그인, 소셜 로그인(구글)

![로그인 화면](https://github.com/JHni2/Portfolio/assets/105628384/8a78a8db-411e-4f49-8427-b6c99b67d26e)

![회원가입 화면](https://github.com/JHni2/Portfolio/assets/105628384/6002114a-4863-4a1f-9b4b-628caac7c57a)

## 기술 특장점

- React를 사용해 웹 페이지를 효율적으로 구현하고 관리했어요.
- Typescript를 사용해 코드에 맞는 타입을 지정해 버그를 방지했어요.
- Recoil을 사용해 쉽게 웹툰 정보를 불러왔어요.
- Tailwind CSS를 사용해 css 속성을 직관적으로 표현하고 효율적으로 사용했어요.
- Firebase의 Firesotr에 user, webtoon 컬렉션을 만들어 사용했어요.

## Trouble Shooting

firestore에서 웹툰 데이터를 가져오면서 아래와 같은 오류가 발생했어요.

> Uncaught (in promise) FirebaseError: Quota exceeded.


무슨 오류인가 검색해보니 프로젝트가 무료 한도를 초과해서 발생한 에러였어요.

![트러블슈팅 1](https://github.com/JHni2/Portfolio/assets/105628384/f65be7d7-d967-4dfc-9186-8f78d6194a1b)

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
![트러블슈팅 2](https://github.com/JHni2/Portfolio/assets/105628384/9d108ba8-b2dd-4ad6-8fb6-d0072c470c1a)