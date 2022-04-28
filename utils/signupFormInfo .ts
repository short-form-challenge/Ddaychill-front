export const signupFormInfo = [
  {
    id: 0,
    name: "이메일",
    valueName: "email",
    placeholder: "이메일을 입력하세요",
    validation: {
      isValied: "사용 가능한 이메일입니다.",
      inValied: "이미 사용중인 이메일입니다.",
    },
  },
  {
    id: 1,
    name: "비밀번호",
    valueName: "password",
    placeholder: "비밀번호를 입력하세요",
    validation: {
      isValied: "영문 대/소문자, 숫자를 사용하세요",
      inValied: "영문 대/소문자, 숫자를 모두 사용하세요",
    },
  },
  {
    id: 2,
    name: "비밀번호 확인",
    valueName: "passwordCheck",
    placeholder: "비밀번호를 한번 더 입력하세요",
    validation: {
      isValied: "",
      inValied: "비밀번호가 일치하지 않습니다",
    },
  },
  {
    id: 3,
    name: "닉네임",
    valueName: "nickName",
    placeholder: "닉네임을 입력하세요",
    validation: {
      isValied: "",
      inValied: "이미 사용중인 닉네임입니다.",
    },
  },
];
