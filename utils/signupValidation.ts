const checkNum = /[0-9]/;
const checkEng = /[a-zA-Z]/;
const checkKor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

export const checkLoginEmail = (value: string) => {
  const exptext = /^[A-Za-z0-9_.-]+@[A-Za-z0-9-]+\.[A-Za-z0-9-]+/;
  if (exptext.test(value)) {
    return true;
  }
  return false;
};

export const checkEmail = (value: string, resStatus: boolean | undefined) => {
  const exptext = /^[A-Za-z0-9_.-]+@[A-Za-z0-9-]+\.[A-Za-z0-9-]+/;
  if (exptext.test(value) && resStatus) {
    return true;
  }
  return false;
};

export const checkPassword = (value: string) => {
  if (value.length > 7 && checkEng.test(value) && checkNum.test(value)) {
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

export const checkNickName = (
  value: string,
  resStatus: boolean | undefined
) => {
  if (
    value.length > 1 &&
    value.length < 10 &&
    (checkEng.test(value) || checkKor.test(value)) &&
    !!resStatus
  ) {
    return true;
  } else {
    return false;
  }
};
