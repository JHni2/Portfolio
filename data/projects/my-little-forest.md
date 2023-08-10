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
![bud-success.drawio.png](https://file.notion.so/f/s/befff80f-efe7-4bae-ba7e-ab53c06ff54f/bud-success.drawio.png?id=8e77263e-3c9f-4378-956e-3c22c0360959&table=block&spaceId=1785e024-9056-47a4-86a6-cabed72497fe&expirationTimestamp=1691762400000&signature=K3udt9A21rwbE42SDdmxjfeeWaZIO6SPfZ_CS7Fajts&downloadName=bud-success.drawio.png)

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
![Untitled](https://file.notion.so/f/s/6d5f6911-9ffa-46b0-9f7c-137675259111/Untitled.png?id=4d502ddf-4248-4b83-98f3-83c466092e8a&table=block&spaceId=1785e024-9056-47a4-86a6-cabed72497fe&expirationTimestamp=1691762400000&signature=XJv73DJs5PWl05V9cgifNGHSrnY3KHJpKQ5kHodMN8Q&downloadName=Untitled.png)

### 🔗 주요 기능

1.  **검색 및 필터링**
    - 키워드 검색 시 서버에 과도한 api 요청이 전송되는 것을 막기 위해 사용자가 키워드 입력을 마쳤을 때 검색이 진행되도록 했습니다.
    - 키워드 필터 검색 시 사용자가 선택한 필터를 input창에 입력해주어 사용자 편의성을 높였습니다.
    - 사용자 접근성을 고려해, 음성 검색을 추가하였습니다. 음성 검색 결과를 input창에 입력해주어 사용자 편의성을 높였습니다.
    - 최신순, 인기순, 내림차순, 오름차순으로 정렬이 가능하도록 했습니다.
    ![Untitled](https://file.notion.so/f/s/9d2ba556-1e8a-4cee-88dd-f2490d525e99/%EA%B2%80%EC%83%89_%EB%B0%8F_%ED%95%84%EB%8D%94_%EA%B8%B0%EB%8A%A5.gif?id=b505abc6-826a-4c08-9888-a09079d0b0dd&table=block&spaceId=1785e024-9056-47a4-86a6-cabed72497fe&expirationTimestamp=1691762400000&signature=nxXVMg07dYGWagneJi0X4uoRbdRiA5E5bwzlx4s81J4&downloadName=%EA%B2%80%EC%83%89+%EB%B0%8F+%ED%95%84%EB%8D%94+%EA%B8%B0%EB%8A%A5.gif)

1.  **뉴스**
    - useInfinityQuery와 react-intersection-observer를 활용한 무한스크롤
    옵저버를 활용해, 뷰포트 안에 옵저버가 보여지는 시점에 다음페이지를 불러오도록 했습니다.
    뷰포트의 크기를 계산해 Yscroll 값을 활용하는 방법도 있었지만, 더 효율적이고 안정적인 방법인 observer를 활용했습니다.
    - 사용자 편의성을 위해 약 한페이지 정도 이상의 스크롤이 발생하면, 정해진 Yscroll값에 따라 scroll to top 버튼이 생기도록 구현했습니다.
    뉴스 상세보기페이지에서도 스크롤 이벤트를 감지해 전체 내용을 볼 수 있도록 디자인했습니다.
    ![Untitled](https://file.notion.so/f/s/b4612843-13f0-4495-9381-7a8d17d61c84/ezgif.com-optimize_(1).gif?id=a8b4f85b-03b0-40e4-991b-beb5da12899b&table=block&spaceId=1785e024-9056-47a4-86a6-cabed72497fe&expirationTimestamp=1691762400000&signature=WesTpDIu_OXnpXgZvB_gLYclP-MvkpF9Rxug0AzXd8w&downloadName=ezgif.com-optimize+%281%29.gif)

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
    ![Untitled](https://file.notion.so/f/s/e2cebb99-de71-4685-ba34-8b223e8cf127/ezgif.com-resize.gif?id=be8594db-7019-442e-8b6c-dcc5e5ef950e&table=block&spaceId=1785e024-9056-47a4-86a6-cabed72497fe&expirationTimestamp=1691762400000&signature=ZRfH84DthOkWsREgyeR6G2nlspfgUhKDH8Q2rA_yivI&downloadName=ezgif.com-resize.gif)

1.  **실시간 채팅**
    - STOMP JS를 사용해 STOMP 연결, 구독, 발행 로직을 구현하였습니다.
    - 메시지를 실시간으로 state에 저장하고 화면에 노출하는 방식으로, 별도의 API 요청 없이 채팅 메시지를 주고 받을 수 있습니다.
    - 채팅방에서 호스트가 퇴장하면 채팅방 사라지고, 모든 유저들에게는 채팅방이 삭제되었다는 모달 알림창과 함께 채팅방 리스트로 이동됩니다.
    - 채팅방의 호스트는 채팅방의 다른 유저에게 호스트를 위임함으로서 채팅방이 삭제되는 것을 방지할 수 있습니다.
    - 현재 채팅방의 참여중인 유저의 수와 그 리스트가 실시간으로 반영되는 것을 조회할 수 있습니다. 
    ![Untitled](https://file.notion.so/f/s/2863361b-3818-43b3-82bd-a6f4d820f468/ezgif.com-resize_(1).gif?id=28dcaf7b-6d4d-44b6-9018-78bff6172c7a&table=block&spaceId=1785e024-9056-47a4-86a6-cabed72497fe&expirationTimestamp=1691762400000&signature=jnxMslnuDukKUgRHy3WQnn8bBnlmqn-Q3dMFAaFLG8s&downloadName=ezgif.com-resize+%281%29.gif)

1.  **이미지 업로드**
    - 유저가 업로드한 이미지를 미리보기로 확인할 수 있게 코드를 구현하였습니다.
    뷰포트의 크기를 계산해 Yscroll 값을 활용하는 방법도 있었지만, 더 효율적이고 안정적인 방법인 observer를 활용했습니다.
    - 서버의 부하를 최대한 줄이기 위해, Browser Image Compression를 사용해 이미지 용량과 사이즈가 너무 과도하게 크지 않도록 최적화해서 서버로 이미지를 업로드하였습니다. 
    ![Untitled](https://file.notion.so/f/s/2713891f-bca1-48a2-bb81-2f8b4154a577/ezgif.com-video-to-gif.gif?id=b726dcbd-9dd3-4fd5-8e16-84efcd231d84&table=block&spaceId=1785e024-9056-47a4-86a6-cabed72497fe&expirationTimestamp=1691762400000&signature=Li2CWsUEbnjxseeEuXVqrSpwL4Fz1LMEdzHGkMtTt1s&downloadName=ezgif.com-video-to-gif.gif)

1.  **실시간 알림**
    - FCM 서버로부터 푸시 알림을 보낼 디바이스들을 식별하기 위한 FCM 토큰을 발급 받습니다.
    - 사용자가 로그인을 시도할 때 사용자에게 알림 권한 허용을 요청한 후, 
    이전에 발급받은 FCM 토큰을 서버로 전달합니다.   
    ![Untitled](https://file.notion.so/f/s/db13fd63-1ad8-48f6-8ea2-c0be849617dd/ezgif.com-video-to-gif_(2).gif?id=5e3e1ace-a4cf-462d-843e-27bbc8972a50&table=block&spaceId=1785e024-9056-47a4-86a6-cabed72497fe&expirationTimestamp=1691762400000&signature=-zTz4unJz-4preXbfy9ziTRglx3fsDwW5jq9GPae8zU&downloadName=ezgif.com-video-to-gif+%282%29.gif)

1.  **JWT를 이요한 사용자 인증**
    - JWT는 개인 정보이므로 보안을 위해 recoil atom에 access token을 저장 및 관리했습니다.
    - store는 페이지가 새로고침되면 휘발되는 정보이므로 recoil Effects를 사용해 전역관리가 필요한 사용자의 데이터를 스토리지에 저장해 관리했습니다. 이를 통해 사용자 경험에 영향을 주지 않고 토큰 만료 및 재발급 과정을 처리할 수 있습니다.
    - axios interceptors를 이용해 모든 API 요청으로부터 토큰의 만료시간의 경과 여부를 검사하고, 만료시간이 지난 토큰으로 API 요청이 들어간다면, 요청을 중 새로운 토큰을 발급받아 요청하고 저장합니다.
    - 405 error(리프레시 토큰 만료)가 떨어지는 경우 로그아웃 처리합니다.
    ![Untitled](https://file.notion.so/f/s/2d6578c9-44b0-4e8b-b0c4-e8b21f0b8167/ezgif.com-crop_(8).gif?id=12f781ef-a9a5-4964-89f6-a9033bff759c&table=block&spaceId=1785e024-9056-47a4-86a6-cabed72497fe&expirationTimestamp=1691762400000&signature=WA8K948QzhBFPsc1TpWSakfPbkB63mD0HBidQwbpt4Y&downloadName=ezgif.com-crop+%288%29.gif)
