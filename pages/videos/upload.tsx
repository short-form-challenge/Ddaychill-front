import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import MainButton from "@components/button/MainButton";
import BackButtonHeader from "@components/header/BackButtonHeader";
import Modal from "@components/modal/Modal";
import { useRouter } from "next/router";
import Thumbnail from "@components/thumbnail/Thumbnail";

interface UploadForm {
  title: string;
  cateId: number;
  file: FileList;
}

const Upload = () => {
  const [cateId, setCateId] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [videoPreview, setVideoPreview] = useState("");
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<UploadForm>();

  const onValid = (data: UploadForm) => {
    console.log(data);
  };

  const onInValid = (err) => {
    console.log(err);
  };

  function onClickToggleModal() {
    setIsModalVisible((prev) => !prev);
  }

  const files = watch("file");
  useEffect(() => {
    if (files?.length > 0) {
      console.log(files);
      const videoUrl = URL.createObjectURL(files[0]);
      console.log(videoUrl);
      setThumbnailUrl(videoUrl);
    }
  }, [files]);

  return (
    <>
      <BackButtonHeader
        isBackButton={true}
        text="영상 업로드"
        onClickBackButton={onClickToggleModal}
      />
      <Wrap onSubmit={handleSubmit(onValid, onInValid)}>
        <UploadBoxWrap>
          <UploadBox>
            {thumbnailUrl ? (
              <Thumbnail videoUrl={thumbnailUrl} />
            ) : (
              <UplaodIcon className="material-symbols-rounded">
                file_upload
              </UplaodIcon>
            )}
            <input
              {...register("file", {
                required: "필수 항목입니다.",
                validate: {
                  formats: (files) =>
                    [
                      "video/mp4",
                      "video/mkv",
                      "video/x-m4v",
                      "video/avi",
                      "video/mpg",
                    ].includes(files[0]?.type) || "비디오만 업로드 가능합니다.",
                  fileSize: (files) =>
                    files[0].size < 500 ||
                    "500메가 이하의 파일만 업로드 가능합니다.",
                },
              })}
              accept="video/mp4,video/mkv, video/x-m4v,video/*"
              type="file"
              hidden
            />
          </UploadBox>
        </UploadBoxWrap>
        {errors.file ? (
          <UploadText color="#FA3030">{errors.file.message}</UploadText>
        ) : (
          <UploadText>500mb이하로 업로드해주세요.</UploadText>
        )}
        {videoPreview && <video src={videoPreview} ref={videoRef} />}
        <TitleWrap>
          <Lable>영상 제목 *</Lable>
          <UploadInput placeholder="영상 제목을 입력해주세요."></UploadInput>
        </TitleWrap>
        <CategoryWrap>
          <Lable>영상 종류 *</Lable>
          <CategoryBoxWrap>
            <CategoryBox selected={cateId === 1} onClick={() => setCateId(1)}>
              운동
            </CategoryBox>
            <CategoryBox selected={cateId === 2} onClick={() => setCateId(2)}>
              공부
            </CategoryBox>
          </CategoryBoxWrap>
        </CategoryWrap>
        <UploadButtonWrap>
          <MainButton type="submit" text={"업로드"} />
        </UploadButtonWrap>
      </Wrap>
      {isModalVisible && (
        <Modal
          mainConfirm="아니오"
          subConfirm="예"
          onClickMainCofirm={onClickToggleModal}
          onClickSubConfirm={() => router.back()}
        >
          영상 업로드를 취소하시겠습니까?
        </Modal>
      )}
    </>
  );
};

export default Upload;
const Wrap = styled.form`
  width: 100%;
  margin-top: 82px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 20px;
`;
const UploadBox = styled.label`
  overflow: hidden;
  width: 140px;
  height: 220px;
  border: 0.5px solid #cccccd;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const UplaodIcon = styled.span`
  font-size: 24px;
  color: #cccccd;
`;

const UploadBoxWrap = styled.div``;
const UploadText = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  color: ${(props) => (props.color ? props.color : "#cccccd")};
  margin-top: 6px;
`;
const TitleWrap = styled.div`
  width: 100%;
  margin-top: 22px;
`;
const Lable = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: #252525;
`;
const CategoryWrap = styled.div`
  width: 100%;
  margin-top: 28px;
`;
const CategoryBoxWrap = styled.div`
  display: flex;
  margin-top: 14px;
`;
const UploadInput = styled.input`
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
const CategoryBox = styled.div<{ selected: boolean }>`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 17px;
  color: ${(props) => (props.selected ? "#4D23D6" : "#CCCCCD")};
  background: #ffffff;
  border: 1px solid ${(props) => (props.selected ? "#4D23D6" : "#CCCCCD")};
  border-radius: 6px;
  padding: 9px 28px;
  margin-right: 10px;
  cursor: pointer;
`;
const UploadButtonWrap = styled.div`
  width: 100%;
  display: flex;
  margin-top: 100px;
`;
