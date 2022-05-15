import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { API } from "config";
import styled from "styled-components";

import { signupFormInfo } from "@utiles/sighupFormInfo";
import PaddingWrapperDiv from "@components/layout/PaddingWrapper";
import MainButton from "@components/button/MainButton";
import FormInput from "@components/Input/FormInput";
import BackButtonHeader from "@components/header/BackButtonHeader";
import Modal from "@components/modal/Modal";
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
  const [emailResValid, setEmailResValid] = useState(false);
  const [nicknameResValid, setNicknameResValid] = useState(false);

  const submitSignupForm = async () => {
    try {
      await axios.post(`${API}/signup`, {
        email: signupValues.email,
        password: signupValues.password,
        nickname: signupValues.nickName,
      });

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
            router.push("/auth/login");
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
                emailResValid={emailResValid}
                setEmailResValid={setEmailResValid}
                nicknameResValid={nicknameResValid}
                setNicknameResValid={setNicknameResValid}
              />
            );
          })}
        </Flex>
        <ButtonDivider>
          <MainButton
            type="button"
            text="확인"
            onClick={() => submitSignupForm()}
            // 임시
            disabled={
              !signupValues.nickName || !emailResValid || !nicknameResValid
            }
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
