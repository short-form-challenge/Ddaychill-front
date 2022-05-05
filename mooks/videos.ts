import { faker } from "@faker-js/faker";

export default [
  {
    id: 1,
    title: "바다 앞에서 요기",
    thumb: faker.image.sports(0, 0, true),
    like: 2023,
    isLiked: false,
    createdAt: faker.date.between(
      "2022-03-01T00:00:00.000Z",
      "2022-05-01T00:00:00.000Z"
    ),
    user: {
      id: 1,
      nickName: "레오와 두리",
    },
    category: {
      id: 1,
      text: "운동",
    },
  },
  {
    id: 2,
    title: "월요일 운동",
    thumb: faker.image.sports(0, 0, true),
    like: 20,
    isLiked: false,
    createdAt: faker.date.between(
      "2022-03-01T00:00:00.000Z",
      "2022-05-01T00:00:00.000Z"
    ),
    user: {
      id: 2,
      nickName: "야옹 멍멍",
    },
    category: {
      id: 1,
      text: "운동",
    },
  },
  {
    id: 3,
    title: "일요일 러닝",
    thumb: faker.image.sports(0, 0, true),
    like: 202,
    isLiked: false,
    createdAt: faker.date.between(
      "2022-03-01T00:00:00.000Z",
      "2022-05-01T00:00:00.000Z"
    ),
    user: {
      id: 3,
      nickName: "클레오",
    },
    category: {
      id: 1,
      text: "운동",
    },
  },
  {
    id: 4,
    title: "근력키우기",
    thumb: faker.image.sports(0, 0, true),
    like: 2042,
    isLiked: false,
    createdAt: faker.date.between(
      "2022-03-01T00:00:00.000Z",
      "2022-05-01T00:00:00.000Z"
    ),
    user: {
      id: 4,
      nickName: "딸기",
    },
    category: {
      id: 1,
      text: "운동",
    },
  },
  {
    id: 5,
    title: "3대측정일!",
    thumb: faker.image.sports(0, 0, true),
    like: 202,
    isLiked: false,
    createdAt: faker.date.between(
      "2022-03-01T00:00:00.000Z",
      "2022-05-01T00:00:00.000Z"
    ),
    user: {
      id: 5,
      nickName: "김계란",
    },
    category: {
      id: 1,
      text: "운동",
    },
  },
  {
    id: 6,
    title: "매일 주짓수수련",
    thumb: faker.image.sports(0, 0, true),
    like: 202,
    isLiked: false,
    createdAt: faker.date.between(
      "2022-03-01T00:00:00.000Z",
      "2022-05-01T00:00:00.000Z"
    ),
    user: {
      id: 1,
      nickName: "레오와 두리",
    },
    category: {
      id: 1,
      text: "운동",
    },
  },
  {
    id: 7,
    title: "오랜만에 공부",
    thumb: faker.image.cats(0, 0, true),
    like: 2023,
    isLiked: false,
    createdAt: faker.date.between(
      "2022-03-01T00:00:00.000Z",
      "2022-05-01T00:00:00.000Z"
    ),
    user: {
      id: 1,
      nickName: "레오와 두리",
    },
    category: {
      id: 2,
      text: "공부",
    },
  },
  {
    id: 8,
    title: "월요일 영어공부",
    thumb: faker.image.cats(0, 0, true),
    like: 20,
    isLiked: false,
    createdAt: faker.date.between(
      "2022-03-01T00:00:00.000Z",
      "2022-05-01T00:00:00.000Z"
    ),
    user: {
      id: 2,
      nickName: "야옹 멍멍",
    },
    category: {
      id: 2,
      text: "공부",
    },
  },
  {
    id: 9,
    title: "이제 하루남았다~!",
    thumb: faker.image.cats(0, 0, true),
    like: 202,
    isLiked: false,
    createdAt: faker.date.between(
      "2022-03-01T00:00:00.000Z",
      "2022-05-01T00:00:00.000Z"
    ),
    user: {
      id: 3,
      nickName: "클레오",
    },
    category: {
      id: 2,
      text: "공부",
    },
  },
  {
    id: 10,
    title: "월요일 공부..",
    thumb: faker.image.cats(0, 0, true),
    like: 2042,
    isLiked: false,
    createdAt: faker.date.between(
      "2022-03-01T00:00:00.000Z",
      "2022-05-01T00:00:00.000Z"
    ),
    user: {
      id: 4,
      nickName: "딸기",
    },
    category: {
      id: 2,
      text: "공부",
    },
  },
  {
    id: 11,
    title: "공부합시다",
    thumb: faker.image.cats(0, 0, true),
    like: 202,
    isLiked: false,
    createdAt: faker.date.between(
      "2022-03-01T00:00:00.000Z",
      "2022-05-01T00:00:00.000Z"
    ),
    user: {
      id: 1,
      nickName: "레오와 두리",
    },
    category: {
      id: 2,
      text: "공부",
    },
  },
  {
    id: 12,
    title: "일요일 공부",
    thumb: faker.image.cats(0, 0, true),
    like: 202,
    isLiked: false,
    createdAt: faker.date.between(
      "2022-03-01T00:00:00.000Z",
      "2022-05-01T00:00:00.000Z"
    ),
    user: {
      id: 10,
      nickName: "두리",
    },
    category: {
      id: 2,
      text: "공부",
    },
  },
  {
    id: 13,
    title: "바다 앞에서 요기",
    thumb: faker.image.sports(0, 0, true),
    like: 2023,
    isLiked: false,
    createdAt: faker.date.between(
      "2022-03-01T00:00:00.000Z",
      "2022-05-01T00:00:00.000Z"
    ),
    user: {
      id: 1,
      nickName: "레오와 두리",
    },
    category: {
      id: 1,
      text: "운동",
    },
  },
  {
    id: 14,
    title: "월요일 운동",
    thumb: faker.image.sports(0, 0, true),
    like: 20,
    isLiked: false,
    createdAt: faker.date.between(
      "2022-03-01T00:00:00.000Z",
      "2022-05-01T00:00:00.000Z"
    ),
    user: {
      id: 2,
      nickName: "야옹 멍멍",
    },
    category: {
      id: 1,
      text: "운동",
    },
  },
  {
    id: 15,
    title: "일요일 러닝",
    thumb: faker.image.sports(0, 0, true),
    like: 202,
    isLiked: false,
    createdAt: faker.date.between(
      "2022-03-01T00:00:00.000Z",
      "2022-05-01T00:00:00.000Z"
    ),
    user: {
      id: 3,
      nickName: "클레오",
    },
    category: {
      id: 1,
      text: "운동",
    },
  },
  {
    id: 16,
    title: "근력키우기",
    thumb: faker.image.sports(0, 0, true),
    like: 2042,
    isLiked: false,
    createdAt: faker.date.between(
      "2022-03-01T00:00:00.000Z",
      "2022-05-01T00:00:00.000Z"
    ),
    user: {
      id: 4,
      nickName: "딸기",
    },
    category: {
      id: 1,
      text: "운동",
    },
  },
  {
    id: 17,
    title: "3대측정일!",
    thumb: faker.image.sports(0, 0, true),
    like: 202,
    isLiked: false,
    createdAt: faker.date.between(
      "2022-03-01T00:00:00.000Z",
      "2022-05-01T00:00:00.000Z"
    ),
    user: {
      id: 5,
      nickName: "김계란",
    },
    category: {
      id: 1,
      text: "운동",
    },
  },
  {
    id: 18,
    title: "매일 주짓수수련",
    thumb: faker.image.sports(0, 0, true),
    like: 202,
    isLiked: false,
    createdAt: faker.date.between(
      "2022-03-01T00:00:00.000Z",
      "2022-05-01T00:00:00.000Z"
    ),
    user: {
      id: 1,
      nickName: "레오와 두리",
    },
    category: {
      id: 1,
      text: "운동",
    },
  },
  {
    id: 19,
    title: "오랜만에 공부",
    thumb: faker.image.cats(0, 0, true),
    like: 2023,
    isLiked: false,
    createdAt: faker.date.between(
      "2022-03-01T00:00:00.000Z",
      "2022-05-01T00:00:00.000Z"
    ),
    user: {
      id: 1,
      nickName: "레오와 두리",
    },
    category: {
      id: 2,
      text: "공부",
    },
  },
  {
    id: 20,
    title: "월요일 영어공부",
    thumb: faker.image.cats(0, 0, true),
    like: 20,
    isLiked: false,
    createdAt: faker.date.between(
      "2022-03-01T00:00:00.000Z",
      "2022-05-01T00:00:00.000Z"
    ),
    user: {
      id: 2,
      nickName: "야옹 멍멍",
    },
    category: {
      id: 2,
      text: "공부",
    },
  },
  {
    id: 21,
    title: "이제 하루남았다~!",
    thumb: faker.image.cats(0, 0, true),
    like: 202,
    isLiked: false,
    createdAt: faker.date.between(
      "2022-03-01T00:00:00.000Z",
      "2022-05-01T00:00:00.000Z"
    ),
    user: {
      id: 3,
      nickName: "클레오",
    },
    category: {
      id: 2,
      text: "공부",
    },
  },
  {
    id: 22,
    title: "월요일 공부..",
    thumb: faker.image.cats(0, 0, true),
    like: 2042,
    isLiked: false,
    createdAt: faker.date.between(
      "2022-03-01T00:00:00.000Z",
      "2022-05-01T00:00:00.000Z"
    ),
    user: {
      id: 4,
      nickName: "딸기",
    },
    category: {
      id: 2,
      text: "공부",
    },
  },
  {
    id: 23,
    title: "공부합시다",
    thumb: faker.image.cats(0, 0, true),
    like: 202,
    isLiked: false,
    createdAt: faker.date.between(
      "2022-03-01T00:00:00.000Z",
      "2022-05-01T00:00:00.000Z"
    ),
    user: {
      id: 1,
      nickName: "레오와 두리",
    },
    category: {
      id: 2,
      text: "공부",
    },
  },
  {
    id: 24,
    title: "일요일 공부",
    thumb: faker.image.cats(0, 0, true),
    like: 202,
    isLiked: false,
    createdAt: faker.date.between(
      "2022-03-01T00:00:00.000Z",
      "2022-05-01T00:00:00.000Z"
    ),
    user: {
      id: 10,
      nickName: "두리",
    },
    category: {
      id: 2,
      text: "공부",
    },
  },
];
