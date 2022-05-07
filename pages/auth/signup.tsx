import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import styled from "styled-components";

import PaddingWrapperDiv from "@components/layout/PaddingWrapper";
import MainButton from "@components/button/MainButton";
import FormInput from "@components/Input/FormInput";
import BackButtonHeader from "@components/header/BackButtonHeader";
import Modal from "@components/modal/Modal";
import { signupFormInfo } from "utils/signupFormInfo";
import { ISignupForm, ISignupFormVaild } from "interface/auth";

const Signup = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [showCencleModal, setShowCencleModal] = useState(false);
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

  const submitSignupForm = async () => {
    try {
      const res = await axios.post("http://3.35.10.54:8080/signup", {
        email: signupValues.email,
        password: signupValues.password,
        nickname: signupValues.nickName,
      });

      console.log("회원가입", res);
      // 토큰 받아서 저장하기
      setShowModal(true);
    } catch (err) {
      setShowCencleModal(true);
      console.log(err);
    }
  };

  return (
    <>
      {showModal && (
        <Modal
          mainConfirm="확인"
          onClickMainCofirm={() => {
            setShowModal(false);
            router.push("/");
          }}
        >
          <span>
            환영합니다!
            <br />
            회원가입이 완료되었습니다.
          </span>
        </Modal>
      )}
      {showCencleModal && (
        <Modal
          mainConfirm="아니오"
          subConfirm="예"
          onClickMainCofirm={() => setShowCencleModal(false)}
          onClickSubConfirm={() => {
            router.back();
            setShowCencleModal(false);
          }}
        >
          <div>회원가입을 종료하시겠습니까?</div>
        </Modal>
      )}
      <BackButtonHeader text="회원가입" isCloseButton={true}></BackButtonHeader>
      <PaddingWrapperDiv padding={35}>
        <Flex>
          {signupFormInfo.map((el) => {
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
            onClick={() => submitSignupForm()}
            // 임시
            disabled={!signupValues.nickName}
          />
        </ButtonDivider>
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
