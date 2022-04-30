const checkNum = /[0-9]/;
const checkEng = /[a-zA-Z]/;
const checkSpc = /[~!@#$%^&*()_+|<>?:{}]/;
const checkKor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

export const checkEmail = (value) => {
  const exptext = /^[A-Za-z0-9_.-]+@[A-Za-z0-9-]+\.[A-Za-z0-9-]+/;
  if (exptext.test(value) === false) {
    console.log("ㄴㄴ");
    return false;
  }
  console.log("ㅇㅇ");
  return true;
};

export const checkPassword = (value) => {
  if (value.length > 8) {
    return true;
  } else {
    return false;
  }
};

export const dobbleCheckPassword = (value, password) => {
  if (value.length > 8 && value === password) {
    return true;
  } else {
    return false;
  }
};

export const checkNickName = (value) => {
  if (
    value.length > 2 &&
    value.length < 10 &&
    (checkEng.test(value) || checkKor.test(value))
  ) {
    return true;
  } else {
    return false;
  }
};