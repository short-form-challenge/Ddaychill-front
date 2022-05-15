import Modal from "@components/modal/Modal";
import axios from "axios";
import { API } from "config";
import { IProfile } from "interface/profile";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import styled from "styled-components";

const ProfileModify: NextPage = () => {
  const router = useRouter();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [nickNm, setNickNme] = useState("");
  const [file, setFile] = useState("");
  const [previewImg, setPreviewImg] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  function onClickToggleModal() {
    setIsModalVisible((prev) => !prev);
  }
  const [item, setItem] = useState<IProfile>({});
  const [errMsg, setErrMsg] = useState("");
  useEffect(() => {
    getMyData();
  }, []);

  const getMyData = async () => {
    try {
      const res = await axios.get(`${API}/users/myProfile`, {
        headers: {
          "X-AUTH-TOKEN": `${sessionStorage.getItem("accessToken")}`,
        },
      });
      setItem(res.data.data);
    } catch (error) {
      // alert(error);
    }
  };
  function onChangeNickNm(event: ChangeEvent<HTMLInputElement>) {
    setNickNme(event.target.value);
  }

  function onChangeImage(event: any) {
    const file = event.target.files[0];
    if (!file) {
      alert("파일이 없습니다!");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      alert("파일 용량이 너무 큽니다. (제한: 5MB");
      return;
    }
    if (!file.type.includes("jpeg") && !file.type.includes("png")) {
      alert("jpeg 또는 png만 업로드 가능합니다.");
      return;
    }
    setFile(file);
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data: any) => {
      setPreviewImg(data.target.result);
    };
  }

  const putEditNickNm = async () => {
    const frm = new FormData();
    frm.append("profileFile", file);
    if (nickNm === "" && file === "") {
      alert("수정한 사항이 없습니다!");
      return;
    }
    if (nickNm !== "") {
      try {
        const res = await axios.get(
          `${API}/validate/nickname?nickname=${nickNm}`
        );
        console.log(res);
      } catch (error) {
        setErrMsg("이미 사용중인 닉네임입니다.");
        return;
      }
    }
    try {
      const res = await axios.put(
        nickNm !== ""
          ? `${API}/users/profile?nickname=${nickNm}`
          : `${API}/users/profile`,
        frm,
        {
          headers: {
            "X-AUTH-TOKEN": `${sessionStorage.getItem("accessToken")}`,
          },
        }
      );
      onClickToggleModal();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  function onClickUploadImage() {
    fileRef.current?.click();
  }
  return (
    <>
      <Wrapper>
        <Header>
          <GoBackButton onClick={() => router.push("./mypage")}>
            <span className="material-symbols-rounded">arrow_back_ios</span>
          </GoBackButton>
          <ScreenName>내 정보 수정</ScreenName>
          <SaveButton
            onClick={() => {
              putEditNickNm();
            }}
          >
            저장
          </SaveButton>
        </Header>
        <ImageWrap>
          {file ? (
            <ProfileImageWrap onClick={onClickUploadImage}>
              <PreviewImage src={previewImg} />
            </ProfileImageWrap>
          ) : item.profileFilePath ? (
            <ProfileImage
              api={API}
              path={item.profileFilePath}
              onClick={onClickUploadImage}
            >
              <ModifyImageButton>
                <ModifyImageButtonText>편집</ModifyImageButtonText>
              </ModifyImageButton>
            </ProfileImage>
          ) : (
            <NoProfileImage onClick={onClickUploadImage}>
              <ModifyImageButton>
                <ModifyImageButtonText>편집</ModifyImageButtonText>
              </ModifyImageButton>
            </NoProfileImage>
          )}
          <input
            ref={fileRef}
            type="file"
            className="imgInput"
            accept="image/*"
            name="file"
            onChange={onChangeImage}
            hidden
          />
        </ImageWrap>
        <ModifyInputWrap>
          <InputItem>
            <InputLable>닉네임</InputLable>
            <ModifyInput
              onChange={onChangeNickNm}
              placeholder={item.nickname}
            ></ModifyInput>
            <ErrorText>{errMsg}</ErrorText>
          </InputItem>

          <InputItem>
            <InputLable>가입 이메일</InputLable>
            <ModifyEmailInput
              placeholder={item.email}
              readOnly
            ></ModifyEmailInput>
          </InputItem>
        </ModifyInputWrap>
      </Wrapper>
      {isModalVisible && (
        <Modal
          mainConfirm={"확인"}
          onClickMainCofirm={() => {
            onClickToggleModal();
            router.push("/user/mypage");
          }}
        >
          수정이 완료되었습니다.
        </Modal>
      )}
    </>
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
  cursor: pointer;
  position: absolute;
  width: 24px;
  height: 24px;
  left: 0px;
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
  position: relative;
  margin-top: 10px;
  display: flex;
  justify-content: center;
`;
const ProfileImageWrap = styled.div`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
  background-size: cover;
  cursor: pointer;
`;
const ProfileImage = styled.div<{ api: string; path: string }>`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background-image: ${(props) => `url(${props.api + props.path})`};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
  background-size: cover;
  cursor: pointer;
`;
const NoProfileImage = styled.div`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background-image: url(/assets/img/noProfileImage.png);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
  background-size: cover;
  cursor: pointer;
`;
const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const ModifyImageButton = styled.div`
  width: 100%;
  height: 34px;
  background: rgba(196, 196, 196, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  bottom: 0;
`;
const ModifyImageButtonText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  color: #ffffff;
`;
const ModifyEmailInput = styled.input`
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
    color: #8c8c8c;
  }
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
    color: #252525;
  }
`;
const ErrorText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  color: #fa3030;
  margin-top: 6px;
`;
