interface IValidation {
  isValied: string;
  inValied: string;
}

export interface ISignupItem {
  // [key: string]: string;
  id: number;
  name: string;
  valueName: string;
  placeholder: string;
  validation?: IValidation;
  maxlength: string;
  type: string;
}

export interface ISignupForm {
  email: string;
  password: string;
  passwordCheck: string;
  nickName: string;
}

export interface ISignupFormVaild {
  email: boolean | null;
  password: boolean | null;
  passwordCheck: boolean | null;
  nickName: boolean | null;
}
