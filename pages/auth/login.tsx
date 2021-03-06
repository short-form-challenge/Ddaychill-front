import { FC, useState, useRef } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { API } from "config";

import styled from "styled-components";
import { ILoginForm } from "interface/auth";
import PaddingWrapperDiv from "@components/layout/PaddingWrapper";
import MainButton from "@components/button/MainButton";
import Modal from "@components/modal/Modal";
import { checkLoginEmail, checkPassword } from "@utiles/signupValidation";
import BackButtonHeader from "@components/header/BackButtonHeader";

const LoginPage: FC<ILoginForm> = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [showModal, setShowModal] = useState(false);
  const [loginForm, setLoginForm] = useState<ILoginForm>({
    email: "",
    password: "",
  });

  const route = useRouter();

  const submitLoginForm = async (email: string, password: string) => {
    try {
      const res = await axios.post(`${API}/signin`, {
        email: email,
        password: password,
      });

      const token = res.headers["x-auth-token"];
      sessionStorage.setItem("accessToken", token);

      route.push({
        pathname: "/",
        query: { isLogin: true },
      });
    } catch (err) {
      console.log(err);
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setLoginForm({ ...loginForm, email: "", password: "" });
  };
  const handleLogin = () => {
    const emailValue = emailRef?.current!.value;
    const passwordValue = passwordRef?.current!.value;

    submitLoginForm(emailValue, passwordValue);
  };

  const handleSignup = () => {
    route.push("/auth/signup");
  };

  return (
    <>
      {showModal && (
        <Modal mainConfirm="확인" onClickMainCofirm={() => closeModal()}>
          <span>
            이메일 또는 비밀번호가 <br /> 일치하지 않습니다
          </span>
        </Modal>
      )}
      <BackButtonHeader text="" isCloseButton={true} />
      <PaddingWrapperDiv padding={36}>
        <Header>
          <div>내가 만드는 7일 간의</div>
          <div>동영상 챌린지,</div>
          <div>
            <span>Dday chill</span>&nbsp;과 함께 해요
          </div>
        </Header>
        <InputForms>
          <LoginInput
            ref={emailRef}
            placeholder="이메일"
            type="text"
            onChange={(e) =>
              setLoginForm({ ...loginForm, email: e.target.value })
            }
            value={loginForm.email}
            autoComplete="off"
          />
          <LoginInput
            ref={passwordRef}
            placeholder="비밀번호"
            type="password"
            onChange={(e) =>
              setLoginForm({ ...loginForm, password: e.target.value })
            }
            value={loginForm.password}
            autoComplete="off"
          />
        </InputForms>
        <Buttons>
          <MainButton
            text="로그인"
            onClick={() => handleLogin()}
            type="button"
            disabled={
              !checkLoginEmail(loginForm.email) ||
              !checkPassword(loginForm.password)
            }
          />
          {loginForm.email === "" && loginForm.password === "" && (
            <SignupButton onClick={() => handleSignup()}>회원가입</SignupButton>
          )}
        </Buttons>
      </PaddingWrapperDiv>
    </>
  );
};

export default LoginPage;

const Header = styled.div`
  font-size: 20px;
  font-weight: 900;
  line-height: 1.5;
  margin: 62px 0 38px 0;

  span {
    font-family: "Noto Sans", sans-serif;
    color: #4d23d6;
    font-weight: 700;
  }
`;

const InputForms = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 38px;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginInput = styled.input`
  border: none;
  border-bottom: 1px solid #cccccd;
  margin-bottom: 1rem;
  height: 35px;

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

const SignupButton = styled.button`
  border: none;
  padding: 13px 0px;
  border-radius: 8px;
  margin-bottom: 8px;
  font-weight: 500;
  background-color: white;
  color: #4d23d6;
  border: 1px solid #4d23d6;
  width: 100%;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;
