import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

interface FormInputValue {
  setSignupValues: Dispatch<SetStateAction<Object>>;
  signupValues: Dispatch<SetStateAction<Object>>;
  // data: object;
}
const FormInput: React.FC<FormInputValue> = ({
  setSignupValues,
  signupValues,
  data,
  ...rest
}) => {
  console.log(data);
  return (
    <FormWrapper>
      <InputLable>
        {data?.name}
        <sup>&nbsp;*</sup>
      </InputLable>
      <InputText>
        <LoginInput
          placeholder={data.placeholder}
          onChange={(e) =>
            setSignupValues({
              ...signupValues,
              [data.valueName]: e.target.value,
            })
          }
        />
        <IconValid className="material-symbols-rounded">done</IconValid>
      </InputText>
      <ValidationMsg>{data?.validation?.isValied}</ValidationMsg>
      <ValidationMsg>{data?.validation?.inValied}</ValidationMsg>
    </FormWrapper>
  );
};

export default FormInput;

const FormWrapper = styled.div`
  margin: 8px 0;
  width: 100%;
`;

const LoginInput = styled.input`
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
