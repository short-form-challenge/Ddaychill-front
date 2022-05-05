import { useState, useEffect, FC } from "react";
import { useRouter } from "next/router";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import PaddingWrapper from "../../components/layout/PaddingWrapper";
import style from "./login.module.css";

interface LoginForm {
  email: string;
  password: string;
}

const LoginPage: FC<LoginForm> = ({ email, password }) => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const route = useRouter();

  useEffect(() => {
    console.log(loginForm);
  }, [loginForm]);

  const handleLogin = () => {
    console.log(loginForm);
  };

  const handleSignup = () => {
    route.push("/");
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("없는 이메일입니다")
      .required("이메일을 입력해주세요"),
    password: Yup.string("비밀번호가 옳지 않아")
      .min(8, "8자 이상 입력해주세요")
      .required("비밀번호를 입력해주세요"),
  });

  return (
    <>
      <PaddingWrapper padding={36}>
        <div className={style.header}>
          <div>내가 만드는 7일 간의</div>
          <div>동영상 챌린지,</div>
          <div>
            <span className={style.impact}>Dday chill</span>&nbsp;과 함께 해요
          </div>
        </div>

        <Formik
          initialValues={loginForm}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
            handleLogin();
          }}
        >
          <Form>
            <div className={style.submitBttons}>
              <Field
                className={style.userInfo}
                name="email"
                type="text"
                placeholder="이메일"
              />

              <Field
                className={style.userInfo}
                name="password"
                type="text"
                placeholder="비밀번호"
              />
              <div className={style.errorMessage}>
                <ErrorMessage name="email" />
              </div>
            </div>

            <div className={style.submitBttons}>
              <button
                type="submit"
                onClick={() => handleLogin()}
                className={`${style.mainButton} ${style.login}`}
              >
                로그인
              </button>
              <button
                type="button"
                onClick={() => handleSignup()}
                className={`${style.mainButton} ${style.signup}`}
              >
                회원가입
              </button>
            </div>
          </Form>
        </Formik>
      </PaddingWrapper>
    </>
  );
};

export default LoginPage;
