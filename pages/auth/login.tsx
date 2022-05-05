import { FC, useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import PaddingWrapper from "../../components/layout/PaddingWrapper";
import MainButton from "../../components/button/MainButton";
import Modal from "../../components/modal/Modal";

interface LoginForm {
  email: string;
  password: string;
}

const LoginPage: FC<LoginForm> = ({ email, password }) => {
  const [showModal, setShowModal] = useState(false);
  const [loginForm, setLoginForm] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const route = useRouter();

  const handleLogin = () => {
    console.log("handleLogin", loginForm);
    setShowModal(true);
  };

  const handleSignup = () => {
    route.push("/auth/signup");
  };

  // const { data } = useLogin();

  return (
    <>
      {showModal && (
        <Modal mainConfirm="확인" onClickMainCofirm={() => setShowModal(false)}>
          <span>
            이메일 또는 비밀번호가 <br /> 일치하지 않습니다
          </span>
        </Modal>
      )}
      <PaddingWrapper padding={36}>
        <Header>
          <div>내가 만드는 7일 간의</div>
          <div>동영상 챌린지,</div>
          <div>
            <span>Dday chill</span>&nbsp;과 함께 해요
          </div>
        </Header>
        <InputForms>
          <LoginInput
            placeholder="이메일"
            type="text"
            onChange={(e) =>
              setLoginForm({ ...loginForm, email: e.target.value })
            }
          />
          <LoginInput
            placeholder="비밀번호"
            type="password"
            onChange={(e) =>
              setLoginForm({ ...loginForm, password: e.target.value })
            }
          />
        </InputForms>
        <Buttons>
          <MainButton
            disabled={loginForm.email === "" || loginForm.password === ""}
            onClick={() => handleLogin()}
            text="로그인"
          />
          {loginForm.email === "" && loginForm.password === "" && (
            <SignupButton onClick={() => handleSignup()}>회원가입</SignupButton>
          )}
        </Buttons>
      </PaddingWrapper>
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

// const ErrorMessage = styled.div`
//   font-size: 10px;
//   color: #fa3030;
// `;
