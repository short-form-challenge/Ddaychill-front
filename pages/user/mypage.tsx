import Modal from "@components/modal/Modal";
import axios from "axios";
import { API } from "config";
import { IProfile } from "interface/profile";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import styled from "styled-components";
// import styles from "styles/user/mypage.module.scss";

const MyPage: NextPage = () => {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(false);
  const [isWithdrawalModal, setIsWithdrawalModal] = useState(false);
  const [isLogOutModal, setIsLogOutModal] = useState(false);
  const [item, setItem] = useState<IProfile>({
    challenges: [],
    nickname: "",
    ongoingChallengeCnt: 0,
    profileFilePath: "",
    totalBadgeCnt: 0,
    userId: 0,
  });
  const day =
    item.challenges?.length === 0
      ? 0
      : item.challenges && item.challenges[0].dayCnt;

  useEffect(() => {
    getMyData();
    if (window.sessionStorage.getItem("accessToken")) {
      setIsAuth(true);
    }
  }, []);

  const getMyData = async () => {
    const token = sessionStorage.getItem("accessToken");
    if (!token) return;
    try {
      const res = await axios.get(`${API}/users/myProfile`, {
        headers: {
          "X-AUTH-TOKEN": `${token}`,
        },
      });
      setItem(res.data.data);
    } catch (error) {
      // alert(error);
    }
  };
  const onClickDeleteUser = async () => {
    try {
      const res = await axios.delete(`${API}/users`, {
        headers: {
          "X-AUTH-TOKEN": `${sessionStorage.getItem("accessToken")}`,
        },
      });
      console.log(res);
      onClickToggleWithdrawalModal();
      sessionStorage.removeItem("accessToken");
      alert("회원탈퇴가 완료되었습니다.");
      router.push("/");
    } catch (error) {}
  };
  function onClickToggleWithdrawalModal() {
    setIsWithdrawalModal((prev) => !prev);
  }
  function onClickToggleLogOutModal() {
    setIsLogOutModal((prev) => !prev);
  }

  const handleLogout = () => {
    sessionStorage.removeItem("accessToken");
    router.push("/");
  };
  return (
    <>
      <Wrapper>
        <ProfileBG>
          {isAuth ? (
            <UserInfoWrap>
              {item.profileFilePath ? (
                <UserPhoto src={`${API + item.profileFilePath}`} />
              ) : (
                <UserPhoto src="/assets/img/noProfileImage.png" />
              )}
              <UserNameWrap>
                <UserName>{item.nickname}</UserName>
                <ChallengeDay>Day {day}</ChallengeDay>
              </UserNameWrap>
            </UserInfoWrap>
          ) : (
            <LoginMenuWrap>
              <LoginButton onClick={() => router.push("/auth/login")}>
                로그인
              </LoginButton>
              <LoginButton onClick={() => router.push("/auth/signup")}>
                회원가입
              </LoginButton>
            </LoginMenuWrap>
          )}
          <ChallengeStatus>
            {isAuth
              ? `${item.nickname}${
                  Number(day) < 5
                    ? "님 오늘도 힘내세요!"
                    : Number(day) < 7
                    ? "님 거의 다왔어요! 힘내세요!"
                    : "님 마지막 날이에요! 파이팅!"
                }`
              : "Dday Chill 과 함께 목표 달성을 해보는건 어떠세요?"}
          </ChallengeStatus>
          <ChallengeCntWrap>
            <CntWrap>
              <CntLable>목표 달성</CntLable>
              <CntNumber>{item.totalBadgeCnt}</CntNumber>
            </CntWrap>
            <CntLine></CntLine>
            <CntWrap>
              <CntLable>진행중인 목표</CntLable>
              <CntNumber>{item.challenges && item.challenges.length}</CntNumber>
            </CntWrap>
          </ChallengeCntWrap>
        </ProfileBG>
        <MenuWrap>
          <MenuItem onClick={() => router.push("./edit")}>
            <MenuText>내 계정</MenuText>
            <ArrowIcon>
              <span className="material-symbols-rounded">
                arrow_forward_ios
              </span>
            </ArrowIcon>
          </MenuItem>
          <MenuItem onClick={() => router.push("./badgelist")}>
            <MenuText>뱃지 현황</MenuText>
            <ArrowIcon>
              <span className="material-symbols-rounded">
                arrow_forward_ios
              </span>
            </ArrowIcon>
          </MenuItem>
          {isAuth && (
            <AccountMenuWrap>
              <AccountMenu>
                <AccountMenuText onClick={onClickToggleWithdrawalModal}>
                  탈퇴하기
                </AccountMenuText>
                <AccountLine></AccountLine>
                <AccountMenuText onClick={onClickToggleLogOutModal}>
                  로그아웃
                </AccountMenuText>
              </AccountMenu>
            </AccountMenuWrap>
          )}
        </MenuWrap>
      </Wrapper>
      {isWithdrawalModal && (
        <Modal
          mainConfirm="아니오"
          subConfirm="예"
          onClickMainCofirm={onClickToggleWithdrawalModal}
          onClickSubConfirm={onClickDeleteUser}
        >
          정말 탈퇴하시겠습니까?
        </Modal>
      )}
      {isLogOutModal && (
        <Modal
          mainConfirm="아니오"
          subConfirm="예"
          onClickMainCofirm={onClickToggleLogOutModal}
          onClickSubConfirm={handleLogout}
        >
          로그아웃 하시겠습니까?
        </Modal>
      )}
    </>
  );
};

export default MyPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const ProfileBG = styled.div`
  width: 100%;
  padding: 20px 20px;
  background: linear-gradient(197.78deg, #4d23d6 30.81%, #139ae9 107.31%);
`;
const UserInfoWrap = styled.div`
  margin-top: 66px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const UserPhoto = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
`;
const UserNameWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
`;
const UserName = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  color: #ffffff;
`;
const ChallengeDay = styled.div`
  //   padding: 6px 14px;
  width: 61px;
  height: 29px;
  background: #ffffff;
  border-radius: 6px;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 17px;
  color: #4d23d6;
  margin-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LoginMenuWrap = styled.div`
  margin-top: 50px;
`;
const LoginButton = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 26px;
  color: #ffffff;
  margin-bottom: 26px;
  text-decoration: 1px underline;
  text-underline-position: under;
  cursor: pointer;
`;
const ChallengeStatus = styled.div`
  width: 100%;
  height: 36px;
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.3);
  margin-top: 36px;
  padding-left: 16px;
  border-radius: 6px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 26px;
  color: #ffffff;
`;
const ChallengeCntWrap = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CntWrap = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const CntLable = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 26px;
  color: #ffffff;
`;
const CntNumber = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  text-align: center;
  color: #ffffff;
`;
const CntLine = styled.div`
  height: 39px;
  width: 1px;
  background-color: #ffffff;
`;
const MenuWrap = styled.div`
  padding: 0px 20px;
`;
const MenuItem = styled.div`
  height: 58px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.5px solid #cccccd;
  cursor: pointer;
`;
const MenuText = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  color: #252525;
`;
const ArrowIcon = styled.div`
  width: 24px;
  height: 24px;
`;
const AccountMenuWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const AccountMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  bottom: 110px;
`;
const AccountMenuText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 16px;
  color: #cccccd;
  cursor: pointer;
`;
const AccountLine = styled.div`
  height: 10px;
  width: 1px;
  background-color: #cccccd;
  margin: 0px 8px;
`;
