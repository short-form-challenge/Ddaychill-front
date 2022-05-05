<<<<<<< HEAD
import { Dispatch, SetStateAction, FC } from "react";
=======
import { Dispatch, FC, SetStateAction, useState, useEffect } from "react";
>>>>>>> 2e389e45d2d58533328a6e62316a6f75587a48ee
import styled from "styled-components";

import PaddingWrapper from "../../components/layout/PaddingWrapper";
import MainButton from "../../components/button/MainButton";

import { ISignupForm } from "interface/auth";

interface ISignupFormWithProps extends ISignupForm {
  setSignupValues: Dispatch<SetStateAction<Object>>;
  signupValues: Dispatch<SetStateAction<Object>>;
}

<<<<<<< HEAD
const Signup: FC<ISignupFormWithProps> = () => {
  // const [signupValues, setSignupValues] = useState<ISignupForm>({
  //   email: "",
  //   password: "",
  //   passwordCheck: "",
  //   nickName: "",
  // });
  // const [isValid, setIsValid] = useState<ISignupFormVaild>({
  //   email: null,
  //   password: null,
  //   passwordCheck: null,
  //   nickName: null,
  // });
=======
type FormProps = SignupForm & Props;

const Signup: FC<FormProps> = () => {
  const [signupValues, setSignupValues] = useState<SignupForm>({
    email: "",
    password: "",
    passwordCheck: "",
    nickName: "",
  });
  const [isValid, setIsValid] = useState<boolean>({
    email: null,
    password: null,
    passwordCheck: null,
    nickName: null,
  });

  useEffect(() => {
    console.log(signupValues);
  }, [signupValues]);
>>>>>>> 2e389e45d2d58533328a6e62316a6f75587a48ee

  return (
    <>
      <PaddingWrapper padding={35}>
        <form>
          <Flex>
            {/* {signupFormInfo.map((el) => {
              console.log(el);
              return (
                <FormInput
                  key={el.id}
                  data={el}
                  setSignupValues={setSignupValues}
                  signupValues={signupValues}
                  isValid={isValid}
                  setIsValid={setIsValid}
                />
              );
            })} */}
          </Flex>
          <ButtonDivider>
            <MainButton
              text="확인"
              type="submit"
              onClick={() => console.log("hi")}
              // 임시
              // disabled={!signupValues.nickName}
            />
          </ButtonDivider>
        </form>
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
