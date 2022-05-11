import { FC, useState, useRef } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { API } from "config";

import styled from "styled-components";
import { ILoginForm } from "interface/auth";
import PaddingWrapperDiv from "@components/layout/PaddingWrapper";
import MainButton from "@components/button/MainButton";
import Modal from "@components/modal/Modal";
import { checkEmail, checkPassword } from "@utiles/signupValidation";

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
        // const res = await axios.post(`/api/isLogin`, { -> 지우지마세욤~
        email: email,
        password: password,
        // headers: {
        //   "X-AUTH-TOKEN": sessionStorage.getItem("accessToken"),
        // },
      });
      console.log("로그인", res);
      const token = res.headers["X-AUTH_TOKEN"];
      sessionStorage.setItem("accessToken", token);

      route.push("/");
    } catch (err) {
      console.log(err);
      // status에 따라 할 수도!
      setShowModal(true);
    }
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
        <Modal mainConfirm="확인" onClickMainCofirm={() => setShowModal(false)}>
          <span>
            이메일 또는 비밀번호가 <br /> 일치하지 않습니다
          </span>
        </Modal>
      )}
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
            autoComplete="off"
          />
          <LoginInput
            ref={passwordRef}
            placeholder="비밀번호"
            type="password"
            onChange={(e) =>
              setLoginForm({ ...loginForm, password: e.target.value })
            }
            autoComplete="off"
          />
        </InputForms>
        <Buttons>
          <MainButton
            text="로그인"
            onClick={() => handleLogin()}
            disabled={
              !checkEmail(loginForm.email) || !checkPassword(loginForm.password)
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

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;
