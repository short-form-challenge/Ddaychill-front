import { Dispatch, SetStateAction, useState, useEffect } from "react";
import styled from "styled-components";
import FormInput from "@components/Input/FormInput";
import PaddingWrapper from "../../components/layout/PaddingWrapper";
import MainButton from "../../components/button/MainButton";
import { signupFormInfo } from "utils/signupFormInfo ";

interface SignupForm {
  email: string;
  password: string;
  passwordCheck: string;
  nickName: string;
}

interface Props {
  setSignupValues: Dispatch<SetStateAction<Object>>;
  signupValues: Dispatch<SetStateAction<Object>>;
}

type FormProps = SignupForm & Props;

const Signup: React.FC<FormProps> = () => {
  const [signupValues, setSignupValues] = useState<SignupForm>({
    email: "",
    password: "",
    passwordCheck: "",
    nickName: "",
  });

  useEffect(() => {
    console.log(signupValues);
  }, [signupValues]);

  return (
    <>
      <PaddingWrapper padding={35}>
        <Flex>
          {signupFormInfo.map((el) => {
            console.log(el);
            return (
              <FormInput
                key={el.id}
                data={el}
                setSignupValues={setSignupValues}
                signupValues={signupValues}
              />
            );
          })}
        </Flex>
        <ButtonDivider>
          <MainButton
            text="확인"
            type="submit"
            onClick={() => console.log(signupValues)}
            // 임시
            disabled={!signupValues.nickName}
          />
        </ButtonDivider>
      </PaddingWrapper>
    </>
  );
};

export default Signup;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

const ButtonDivider = styled.div`
  margin-top: 26px;
`;
