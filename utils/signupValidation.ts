// const checkNum = /[0-9]/;
const checkEng = /[a-zA-Z]/;
// const checkSpc = /[~!@#$%^&*()_+|<>?:{}]/;
const checkKor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

export const checkEmail = (value: string) => {
  const exptext = /^[A-Za-z0-9_.-]+@[A-Za-z0-9-]+\.[A-Za-z0-9-]+/;
  if (exptext.test(value) === false) {
    console.log("ㄴㄴ");
    return false;
  }
  return true;
};

export const checkPassword = (value: string) => {
  if (value.length > 7) {
    return true;
  } else {
    return false;
  }
};

export const dobbleCheckPassword = (value: string, password: string) => {
  if (value.length > 7 && value === password) {
    return true;
  } else {
    return false;
  }
};

export const checkNickName = (value: string) => {
  if (
    value.length > 1 &&
    value.length < 10 &&
    (checkEng.test(value) || checkKor.test(value))
  ) {
    return true;
  } else {
    return false;
  }
};
