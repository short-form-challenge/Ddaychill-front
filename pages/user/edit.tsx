import Modal from "@components/modal/Modal";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";

const ProfileModify: NextPage = () => {
  const router = useRouter();
  const [isModalVisible, setIsModalVisible] = useState(false);
  function onClickToggleModal() {
    setIsModalVisible((prev) => !prev);
  }
  return (
    <Wrapper>
      <Header>
        <GoBackButton onClick={() => router.push("./mypage")}>
          <span className="material-symbols-rounded">arrow_back_ios</span>
        </GoBackButton>
        <ScreenName>내 정보 수정</ScreenName>
        <SaveButton onClick={onClickToggleModal}>저장</SaveButton>
      </Header>
      <ImageWrap>
        <ProfileImage>
          <ModifyImageButton>
            <ModifyImageButtonText>편집</ModifyImageButtonText>
          </ModifyImageButton>
        </ProfileImage>
      </ImageWrap>
      <ModifyInputWrap>
        <InputItem>
          <InputLable>닉네임</InputLable>
          <ModifyInput placeholder="닉네임을 적어주세요"></ModifyInput>
        </InputItem>
        <InputItem>
          <InputLable>가입 이메일</InputLable>
          <ModifyInput placeholder="Ddaychill@gmail.com"></ModifyInput>
        </InputItem>
      </ModifyInputWrap>
      {isModalVisible && (
        <Modal mainConfirm={"확인"} onClickMainCofirm={onClickToggleModal}>
          수정이 완료되었습니다.
        </Modal>
      )}
    </Wrapper>
  );
};

export default ProfileModify;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
`;
const Header = styled.div`
  width: 100%;
  height: 76px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const GoBackButton = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  left: 0px;
  cursor: pointer;
`;
const ScreenName = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  color: #252525;
`;
const SaveButton = styled.div`
  position: absolute;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 26px;
  color: #252525;
  right: 8px;
  cursor: pointer;
`;
const ImageWrap = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
`;
const ProfileImage = styled.div`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background-color: sandybrown;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
`;
const ModifyImageButton = styled.div`
  width: 100%;
  height: 34px;
  background: rgba(196, 196, 196, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const ModifyImageButtonText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  color: #ffffff;
`;
const ModifyInputWrap = styled.div`
  margin-top: 38px;
`;
const InputItem = styled.div`
  margin-bottom: 32px;
`;
const InputLable = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 17px;
  color: #252525;
`;
const ModifyInput = styled.input`
  width: 100%;
  margin-top: 9px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-top-width: 0px;
  border-bottom-width: 1px;
  border-bottom-color: #cccccd;
  padding-bottom: 8px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #252525;
  outline: none;

  ::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #cccccd;
  }
`;
