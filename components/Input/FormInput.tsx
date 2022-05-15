import { Dispatch, FC, SetStateAction, ChangeEvent } from "react";
import { ISignupForm, ISignupFormVaild } from "interface/auth";
import axios from "axios";
import styled from "styled-components";
import { API } from "config";

import {
  checkEmail,
  checkPassword,
  dobbleCheckPassword,
  checkNickName,
} from "utils/signupValidation";

interface FormInputValue {
  [key: string]: any;
  data: any;
  setSignupValues: Dispatch<SetStateAction<ISignupForm>>;
  signupValues: ISignupForm;
  setIsValid: Dispatch<SetStateAction<ISignupFormVaild>>;
  isValid: ISignupFormVaild;
}

const FormInput: FC<FormInputValue> = ({
  setSignupValues,
  signupValues,
  data,
  setIsValid,
  isValid,
  emailResValid,
  setEmailResValid,
  nicknameResValid,
  setNicknameResValid,
}) => {
  const validateInputValue = (
    value: string,
    name: string,
    resStatus?: boolean
  ) => {
    switch (name) {
      case "email":
        setIsValid((prev) => ({
          ...prev,
          email: checkEmail(value, resStatus),
        }));
        break;
      case "password":
        setIsValid((prev) => ({
          ...prev,
          password: checkPassword(value),
        }));
        break;
      case "passwordCheck":
        setIsValid((prev) => ({
          ...prev,
          passwordCheck: dobbleCheckPassword(value, signupValues.password),
        }));
        break;
      case "nickName":
        setIsValid((prev) => ({
          ...prev,
          nickName: checkNickName(value, resStatus),
        }));
        break;
    }
  };

  let timer: ReturnType<typeof setTimeout>;
  const debouncInputValue = async (
    event: ChangeEvent<HTMLInputElement>,
    fieldName: string
  ) => {
    event.preventDefault();
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(async function () {
      setSignupValues({
        ...signupValues,
        [data.valueName]: event.target.value,
      });

      if (fieldName === "email") {
        try {
          const res = await axios.get(
            `${API}/validate/email?email=${event.target.value}`
          );
          if (res.status === 200) {
            setEmailResValid(true);
            validateInputValue(event.target.value, data.valueName, true);
          } else {
            setEmailResValid(false);
          }
        } catch (err) {
          console.log(err);
        }
      }
      if (fieldName === "nickName") {
        try {
          const res = await axios.get(
            `${API}/validate/nickname?nickname=${event.target.value}`
          );
          console.log(res.status);
          if (res.status === 200) {
            setNicknameResValid(true);
            validateInputValue(event.target.value, data.valueName, true);
          } else {
            setNicknameResValid(false);
          }
        } catch (err) {
          console.log(err);
        }
      }
    }, 500);
  };

  const handleValueimmediately = (event: any) => {
    setSignupValues({
      ...signupValues,
      [data.valueName]: event.target.value,
    });

    validateInputValue(event.target.value, data.valueName);
  };

  return (
    <FormWrapper>
      <InputLable>
        {data?.name}
        <sup>&nbsp;*</sup>
      </InputLable>
      <InputText>
        <SignupInput
          placeholder={data.placeholder}
          type={data.type}
          onChange={(e) => {
            e.preventDefault();
            if (data.valueName === "email" || data.valueName === "nickName") {
              debouncInputValue(e, data.valueName);
            } else {
              handleValueimmediately(e);
            }
          }}
          autoComplete="off"
          maxLength={data.maxlength}
        />
        {isValid[data.valueName] && (
          <IconValid className="material-symbols-rounded">done</IconValid>
        )}
      </InputText>
      {isValid[data.valueName] !== null &&
        (isValid[data.valueName] ? (
          <ValidMsg>{data?.validation?.isValied}</ValidMsg>
        ) : (
          <ValidationMsg>{data?.validation?.inValied}</ValidationMsg>
        ))}
    </FormWrapper>
  );
};

export default FormInput;

const FormWrapper = styled.div`
  margin: 8px 0;
  width: 100%;
`;

const SignupInput = styled.input`
  border: none;
  border-bottom: 1px solid #cccccd;
  margin-bottom: 1rem;
  height: 35px;
  width: 100%;
  &:focus {
    outline: none;
    border-bottom: 1px solid #4d23d6;
  }

  &::placeholder {
    font-size: 14px;
    color: #ccc;
    margin-bottom: 3px;
  }
`;

const ValidationMsg = styled.div`
  width: 100%;
  color: #fa3030;
  font-size: 10px;
`;

const ValidMsg = styled.div`
  width: 100%;
  color: black;
  font-size: 10px;
`;

const InputText = styled.div`
  position: relative;
`;

const InputLable = styled.div`
  font-size: 12px;
  font-weight: 700;
  width: 100%;
  text-align: start;
`;

const IconValid = styled.span`
  position: absolute;
  right: 3px;
`;
