# Dday Chill

## **서비스 컨셉**

- 브랜드 이름: Dday7(chill)

       단기목표를 정해서 습관을 들이기 위해 7일동안 숏폼 영상을 올리는 플랫폼입니다.

- 자신이 정한 목표 카테고리에 영상을 올리고 사람들과 공유합니다.
- 7일 연속 영상을 업로드하면 뱃지(보상)를 받을 수 있고, 혼자 하는 것보다 사람들과 영상을 공유하면서 함께 의지를 다지기위한 목적을 가지고있습니다.

## 배포
[🔗 배포 링크 이동](https://dday7.vercel.app/)

(현재 백엔드 배포 중지로 서비스 이용 불가)

## 기술 스택

- create-next-app
- Next.js
- TypeScript
- ESlint + Prettier
- Docker
  - DockerFile을 이용하여 도커배포 진행
  - Docker-compose를 사용하여 컨테이너 관리 진행

## 프로젝트 실행

```
$ yarn
$ npm run dev
```

## 페이지
### 도전 리스트 & 상세
<div>
<img width="300" alt="dday7 영상리스트" src="https://user-images.githubusercontent.com/88178866/232329884-e1c92f5f-6de9-4edf-b807-d3b066801961.png">
<img width="300" alt="dday7 영상 상세" src="https://user-images.githubusercontent.com/88178866/232329946-3179a163-f4d2-4480-8374-b940feba7c6d.png">
</div>

### 회원가입 & 로그인
<div>
<img width="300" alt="dday7 회원가입" src="https://user-images.githubusercontent.com/88178866/232329923-bcf3b44e-bfd5-4ec7-ba61-229bf3ca7dbe.png">
<img width="300" alt="dday7 로그인" src="https://user-images.githubusercontent.com/88178866/232329930-e4923b3a-9a7f-41b2-8e28-813d4f0e9da5.png">
</div>

### 프로필
<div>
<img width="300" alt="dday7 프로필" src="https://user-images.githubusercontent.com/88178866/232330019-00def896-2f86-4fd2-bb21-e16c41b1870d.png">
<img width="300" alt="dday7 내 정보편집" src="https://user-images.githubusercontent.com/88178866/232329936-a0b618a2-8578-4058-bfdc-26102600a357.png">
<img width="300" alt="dday7 뱃지" src="https://user-images.githubusercontent.com/88178866/232329938-c2c3d3da-cedb-47e4-a683-96c3c9720406.png">
</div>



## 타겟 고객(영상 업로드 고객, 영상 시청 고객)

1. 공통
    1. 목표를 세우되 3일 이상 실천하지 못하는 고객
        1. ex) 아가리어터 등
    2. 같은 목표를 가진 사람과 함께 목표를 실천하고 싶은 고객
    3. 자신의 일상을 공유하는 것을 좋아하는 MZ세대
2. 운동 (Health)
    1. 운동 등 취미를 공유하고 싶은 고객
    2. 운동 방법을 공유 하고 싶은 고객
    3. 운동에 대한 조언을 받고 싶은 고객
        1. 댓글 기능 추후 개발 예정
3. 공부 (study)
    1. 공무원 등 장기 시험을 준비하는 고객
    2. 혼공 생활에 긴장감을 주고 싶은 고객 

## 장기적인 비지니스 모델

1. 운동 (Health)

![image](https://user-images.githubusercontent.com/88178866/232328099-7ad7d036-0101-4289-b7f8-656342df5c58.png)

2. 공부 (Study)

![image](https://user-images.githubusercontent.com/88178866/232328109-8296f97a-154f-440e-ac7b-cd1ec9f32463.png)
