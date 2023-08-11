## Overview

![프로젝트 이미지](https://github.com/JHni2/collect-webtoons/assets/105628384/1696d2c7-5ef7-4476-820b-f9714c762766)

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
        
    ![Untitled](https://github.com/JHni2/collect-webtoons/assets/105628384/19c4214f-a5b5-4424-b2fd-5e30d0575c2c)
        

2.  **제목 / 작가로 검색하기**
    - 검색 키워드 자동 완성 및 검색

![Untitled](https://github.com/JHni2/collect-webtoons/assets/105628384/c6eff97a-7ec3-48b6-a067-52ae96c0b364)

![Untitled](https://github.com/JHni2/collect-webtoons/assets/105628384/50a90e15-7235-4acb-a3fa-e74a17621f00)


3. **웹툰 상세 페이지**
    - 관심 웹툰 설정

![Untitled](https://github.com/JHni2/collect-webtoons/assets/105628384/ad62af85-3439-44f9-8ea9-23ff8f768d3f)


4. **마이 페이지**
    - 관심 웹툰 확인
    - 관심 웹툰과 같은 장르의 추천 웹툰

![Untitled](https://github.com/JHni2/collect-webtoons/assets/105628384/580f53a7-9650-461d-a15a-49e98a4fa988)


5. **회원가입 및 로그인**
    - 이메일 로그인, 소셜 로그인(구글)

![Untitled](https://github.com/JHni2/collect-webtoons/assets/105628384/c642172c-afd2-4073-b40a-9eaa62b45d72)

![Untitled](https://github.com/JHni2/collect-webtoons/assets/105628384/40409953-2125-4aa3-ada3-63dbb84b91dd)

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

![Untitled](https://file.notion.so/f/s/d0f7d58e-a2d3-4979-bb38-e657b3f5a629/Untitled.png?id=1201f793-a91e-4514-a536-33011f58999e&table=block&spaceId=1785e024-9056-47a4-86a6-cabed72497fe&expirationTimestamp=1691762400000&signature=7AcgLZK1JunLq03YsXnbig-xuVFZFTcDUNf24JhkIPU&downloadName=Untitled.png)

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
![Untitled](https://file.notion.so/f/s/80608b2c-2458-4a59-88c0-d1a2bf5acde7/Untitled.png?id=d930431e-e85d-4094-9330-329abff4ee6a&table=block&spaceId=1785e024-9056-47a4-86a6-cabed72497fe&expirationTimestamp=1691762400000&signature=3s5_1MUV8idvzlrukkbnhah-82zBw18Ak9roUB6xqVo&downloadName=Untitled.png)