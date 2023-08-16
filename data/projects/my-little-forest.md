## Overview


🌲 **멋진 개발자를 꿈꾸는 우리가 꾸준히 성장하는 이곳,  My Little Forest  🌲**


💭 깃허브를 활용해서 함께 코딩을 재밌게 할 수 있는 개발자 커뮤니티가 있다면 어떨까?

💭 개발자에게 중요한건 알지만… 생각보다 어려운 꾸준함을, 함께 공유한다면 어떨까? 

### My Little Forest 는

꿈꾸는 모든 개발자분들의 개발 놀이터, 커뮤니티 플랫폼입니다.

🥜 커밋으로 하나되는 우리들의 개발 놀이터. 하루하루 커밋하며 나무를 키워보세요!

🌱 경쟁과 함께, 빠른 변화들에 적응하며 달려야 하는 우리의 현실을 잠시 벗어나, 나만의 숲을 가꾸고 친구들과 함께 공유해보세요!

🌷 요즘 핫한 개발 트렌드는 뭐야? 최신 IT뉴스와 정보도 놓치지 말고 챙기세요!

🎄 우리들의 좌충우돌 개발 이야기, 현업 이야기를 함께 나누고 공유해보아요!

## 시연 영상

https://youtu.be/C5DPI5JN3uM

## Project

### ⚙ 프로젝트 아키텍쳐
![아키텍쳐](https://github.com/JHni2/Portfolio/assets/105628384/c36bf3f9-293b-47cd-acc2-fa03afd047f8)

### 🛠 기술 스택
### Frontend

- React
- Typescript
- Recoil
- Tanstack-Query
- React-router-dom
- Axios
- StompJS
- Lodash
- browser-image-compression
- firebase

***Styles***

- Tailwind CSS
- framer-motion
- headlessui

### Backend

- Language : Java 11
- Framework : Springboot
- Build Tool : Gradle
- DB : MySQL , Redis
- Test : Junit, Postman
- JPA
- Auth : Jwt
- Spring Security
- Docker
- Cloud Storage Service : AWS S3
- Firebase Cloud Messaging
- WebSocket
- STOMP
- Github API
- Naver News API
- Jsoup
- Spring Scheduler
- Spring Batch
- Query DSL

### CI / CD

- Deploy
    - Vercel
    - Docker
    - Cloud Service  : Google Cloud Platform
    - Jenkins
- Communication
    - Slack
    - Github

### 📋 ERD
![ERD](https://github.com/JHni2/Portfolio/assets/105628384/acab7c66-b14d-4055-a70d-94dcce520a26)

### 🔗 주요 기능

1.  **검색 및 필터링**
    - 키워드 검색 시 서버에 과도한 api 요청이 전송되는 것을 막기 위해 사용자가 키워드 입력을 마쳤을 때 검색이 진행되도록 했습니다.
    - 키워드 필터 검색 시 사용자가 선택한 필터를 input창에 입력해주어 사용자 편의성을 높였습니다.
    - 사용자 접근성을 고려해, 음성 검색을 추가하였습니다. 음성 검색 결과를 input창에 입력해주어 사용자 편의성을 높였습니다.
    - 최신순, 인기순, 내림차순, 오름차순으로 정렬이 가능하도록 했습니다.
    ![검색 및 필터링](https://github.com/JHni2/Portfolio/assets/105628384/afb2c6f2-0c87-4a04-9824-f06492436716)

1.  **뉴스**
    - useInfinityQuery와 react-intersection-observer를 활용한 무한스크롤
    옵저버를 활용해, 뷰포트 안에 옵저버가 보여지는 시점에 다음페이지를 불러오도록 했습니다.
    뷰포트의 크기를 계산해 Yscroll 값을 활용하는 방법도 있었지만, 더 효율적이고 안정적인 방법인 observer를 활용했습니다.
    - 사용자 편의성을 위해 약 한페이지 정도 이상의 스크롤이 발생하면, 정해진 Yscroll값에 따라 scroll to top 버튼이 생기도록 구현했습니다.
    뉴스 상세보기페이지에서도 스크롤 이벤트를 감지해 전체 내용을 볼 수 있도록 디자인했습니다.
    ![뉴스](https://github.com/JHni2/Portfolio/assets/105628384/ff7defde-affa-4dde-829a-3ba19d7c6d1e)

1.  **커뮤니티**
    - 파일 업로드를 구현할 때, 폼을 통해서 파일을 등록해서 전송합니다.
    웹 브라우저가 보내는 HTTP 메시지는 Content-Type 속성이 multipart/form-data로 지정되고 정해진 형식에 따라 메시지를 인코딩하여 전송합니다.
    - 게시글 수정시, 기존의 게시글 데이터를 불러와 input default value로 적용합니다.
    새로고침시 데이터가 undefined되는 것을 방지하기 위해 useEffect를 통해, 데이터 isLoading의 상태가 false가 되며 refetching이 완료되는 시점에 다시 데이터를 적용하도록 설정했습니다.
    - 게시글 수정 중 새로고침이나 뒤로가기 버튼 클릭시, 수정중인 데이터가 손실될 수 있다는 메세지를 담은 컨펌 모달창을 띄웁니다.
    - 게시글에서 게시글 수정 삭제를 포함한 좋아요, 스크랩, 팔로우, 댓글 등의 이벤트가 발생했을 때, 변경되는 상태를 반영한 화면을 실시간으로 반영해서 보여줍니다.
    - 본인이 작성한 게시글에 달린 댓글은 게시글작성자에 의해 고정(오른쪽으로 밀기) 및 삭제(왼쪽으로 밀기)될 수 있습니다.
    - 질문 작성자가 답변을 채택하면, 채택된 답변은 상단에 고정되며, 더이상의 답변을 추가하거나, 기존에 작성된 질문 및 답변의 수정 및 삭제가 불가능해집니다.
    - 원하는 유저를 팔로우하고, 팔로우한 유저의 게시글 알림등을 받아볼 수 있습니다.
    ![개발 피드 - 게시글 작성, 수정 및 삭제](https://github.com/JHni2/Portfolio/assets/105628384/fe87eceb-b9bf-4ef9-beef-ea81939c1ac9)
    ![QnA 피드 - 답변 작성](https://github.com/JHni2/Portfolio/assets/105628384/11986113-3653-4198-9320-dd81c5d990b9)
    ![QnA 피드 - 답변 채택](https://github.com/JHni2/Portfolio/assets/105628384/5145bb1d-fca4-4f7d-9a91-6c4ee9188852)


1.  **실시간 채팅**
    - STOMP JS를 사용해 STOMP 연결, 구독, 발행 로직을 구현하였습니다.
    - 메시지를 실시간으로 state에 저장하고 화면에 노출하는 방식으로, 별도의 API 요청 없이 채팅 메시지를 주고 받을 수 있습니다.
    - 채팅방에서 호스트가 퇴장하면 채팅방 사라지고, 모든 유저들에게는 채팅방이 삭제되었다는 모달 알림창과 함께 채팅방 리스트로 이동됩니다.
    - 채팅방의 호스트는 채팅방의 다른 유저에게 호스트를 위임함으로서 채팅방이 삭제되는 것을 방지할 수 있습니다.
    - 현재 채팅방의 참여중인 유저의 수와 그 리스트가 실시간으로 반영되는 것을 조회할 수 있습니다. 
    ![실시간 채팅](https://github.com/JHni2/Portfolio/assets/105628384/5e161cc6-aa5d-46dd-ae7a-e65641595c27)

1.  **이미지 업로드**
    - 유저가 업로드한 이미지를 미리보기로 확인할 수 있게 코드를 구현하였습니다.
    뷰포트의 크기를 계산해 Yscroll 값을 활용하는 방법도 있었지만, 더 효율적이고 안정적인 방법인 observer를 활용했습니다.
    - 서버의 부하를 최대한 줄이기 위해, Browser Image Compression를 사용해 이미지 용량과 사이즈가 너무 과도하게 크지 않도록 최적화해서 서버로 이미지를 업로드하였습니다. 
    ![이미지 업로드](https://github.com/JHni2/Portfolio/assets/105628384/6a2198bc-1548-4cb8-8e7c-fcc76f00ddea)

1.  **실시간 알림**
    - FCM 서버로부터 푸시 알림을 보낼 디바이스들을 식별하기 위한 FCM 토큰을 발급 받습니다.
    - 사용자가 로그인을 시도할 때 사용자에게 알림 권한 허용을 요청한 후, 
    이전에 발급받은 FCM 토큰을 서버로 전달합니다.   
    ![실시간 알림](https://github.com/JHni2/Portfolio/assets/105628384/77a19b3d-3b2e-4da1-8e1b-95e982cce0d4)
    ![알림 관리](https://github.com/JHni2/Portfolio/assets/105628384/538c6a77-3157-4f06-aad6-85535e170e3f)

1.  **JWT를 이요한 사용자 인증**
    - JWT는 개인 정보이므로 보안을 위해 recoil atom에 access token을 저장 및 관리했습니다.
    - store는 페이지가 새로고침되면 휘발되는 정보이므로 recoil Effects를 사용해 전역관리가 필요한 사용자의 데이터를 스토리지에 저장해 관리했습니다. 이를 통해 사용자 경험에 영향을 주지 않고 토큰 만료 및 재발급 과정을 처리할 수 있습니다.
    - axios interceptors를 이용해 모든 API 요청으로부터 토큰의 만료시간의 경과 여부를 검사하고, 만료시간이 지난 토큰으로 API 요청이 들어간다면, 요청을 중 새로운 토큰을 발급받아 요청하고 저장합니다.
    - 405 error(리프레시 토큰 만료)가 떨어지는 경우 로그아웃 처리합니다.
    ![로그아웃](https://github.com/JHni2/Portfolio/assets/105628384/0815bec8-55b4-47a5-b0f5-327f37943902)
