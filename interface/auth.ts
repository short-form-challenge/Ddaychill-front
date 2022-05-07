interface IValidation {
  isValied: string;
  inValied: string;
}

export interface ISignupItem {
  id: number;
  name: string;
  valueName: string;
  placeholder: string;
  validation?: IValidation;
  maxlength: string;
  type: string;
  [key: string]: any;
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

export interface ILoginForm {
  email: string;
  password: string;
}
