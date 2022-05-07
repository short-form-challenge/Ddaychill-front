import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";

import PaddingWrapperDiv from "@components/layout/PaddingWrapper";
import MainButton from "@components/button/MainButton";
import FormInput from "@components/Input/FormInput";
import BackButtonHeader from "@components/header/BackButtonHeader";
import { signupFormInfo } from "utils/signupFormInfo";
import { ISignupForm, ISignupFormVaild } from "interface/auth";

const Signup = () => {
  const router = useRouter();
  const [signupValues, setSignupValues] = useState<ISignupForm>({
    email: "",
    password: "",
    passwordCheck: "",
    nickName: "",
  });

  const [isValid, setIsValid] = useState<ISignupFormVaild>({
    email: null,
    password: null,
    passwordCheck: null,
    nickName: null,
  });

  return (
    <>
      <BackButtonHeader
        text="회원가입"
        isBackButton={true}
        onClickBackButton={() => router.back()}
      ></BackButtonHeader>
      <PaddingWrapperDiv padding={35}>
        <form>
          <Flex>
            {signupFormInfo.map((el) => {
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
            })}
          </Flex>
          <ButtonDivider>
            <MainButton
              text="확인"
              onClick={() => console.log("hi")}
              // 임시
              disabled={!signupValues.nickName}
            />
          </ButtonDivider>
        </form>
      </PaddingWrapperDiv>
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
