import MainButton from "@components/button/MainButton";
import ButtonModal, { textType } from "@components/modal/ButtonModal";
import Modal from "@components/modal/Modal";
import Thumbnail from "@components/thumbnail/Thumbnail";
import { postVideo } from "apis/post";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import styled, { css } from "styled-components";

interface IUploadForm {
  title: string;
  file: FileList;
  thumbnail: FileList;
}

const UploadForm = () => {
  const [cateId, setCateId] = useState(1);
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [modal, setModal] = useState(false);
  const [thumbnail, setThumbnail] = useState<File>();
  const [newThumbnail, setNewThumbnail] = useState("");
  const [showAlert, setShowAlert] = useState("");
  const router = useRouter();

  const videoRef = useRef<HTMLInputElement | null>(null);

  const uploadImageRef = useRef<HTMLLabelElement>(null);

  const {
    register,
    handleSubmit,
    watch,
    resetField,
    formState: { errors },
    control,
  } = useForm<IUploadForm>({ mode: "onChange" });

  const { ref, ...rest } = register("file");

  const { mutate, isLoading } = useMutation((frm: FormData) => postVideo(frm));

  const onValid = (data: IUploadForm) => {
    if (isLoading) return;
    if (!thumbnail) return;
    console.log(data, thumbnail, cateId);

    const videoInfo = {
      title: data.title,
      length: 450,
      categoryId: cateId,
    };

    const frm = new FormData();
    frm.append("thumbnail", data.thumbnail ? data.thumbnail[0] : thumbnail);
    frm.append("video", data.file[0]);
    frm.append(
      "videoInfo",
      new Blob([JSON.stringify(videoInfo)], {
        type: "application/json",
      })
    );
    mutate(frm, {
      onSuccess: (data) => {
        console.log(data);
        if (data) {
          router.push(`/videos/${data.data.data.id}`);
        }
      },
      onError: (err) => {
        console.log(err);
      },
    });
  };

  const files = watch("file");
  useEffect(() => {
    if (
      files?.length > 0 &&
      files[0].size < 1024 * 1024 * 500 &&
      [
        "video/mp4",
        "video/mkv",
        "video/x-m4v",
        "video/avi",
        "video/mpg",
      ].includes(files[0]?.type)
    ) {
      console.log(errors.file?.message);
      console.log(files);
      const videoUrl = URL.createObjectURL(files[0]);
      console.log(videoUrl);
      setThumbnailUrl(videoUrl);
    }
  }, [files]);

  const handleThumbnail = (file: File) => {
    setThumbnail(file);
  };

  const handleButtonModalClick = (v: textType) => {
    if (v === "커버업로드") {
      uploadImageRef.current?.click();
    }
    if (v === "초기화") {
      setNewThumbnail("");
      resetField("thumbnail");
      setModal(false);
    }
  };

  // 새로운 섬네일 업로드 감지
  const images = watch("thumbnail");
  useEffect(() => {
    console.log(images);
    if (!images) return;
    if (images.length <= 0) return;
    if (
      ![
        "image/gif",
        "image/png",
        "image/jpeg",
        "image/bmp",
        "image/webp",
        "image/jpg",
      ].includes(images[0].type)
    ) {
      setShowAlert("이미지 파일만 업로드 가능합니다.");
      resetField("thumbnail");
      return;
    }
    setNewThumbnail(URL.createObjectURL(images[0]));
    setModal(false);
  }, [images]);

  return (
    <>
      (
      {modal && (
        <ButtonModal
          texts={newThumbnail ? ["커버업로드", "초기화"] : ["커버업로드"]}
          onClose={() => setModal(false)}
          onClick={handleButtonModalClick}
        />
      )}
      {showAlert && (
        <Modal mainConfirm="확인" onClickMainCofirm={() => setShowAlert("")}>
          <div>{showAlert}</div>
        </Modal>
      )}
      <Wrap onSubmit={handleSubmit(onValid)}>
        <UploadBoxWrap>
          <UploadBox clickable={!thumbnailUrl}>
            {thumbnailUrl ? (
              <>
                <Thumbnail
                  filename={files[0].name.split(".")[0]}
                  getImages={handleThumbnail}
                  videoUrl={thumbnailUrl}
                  newThumbnail={newThumbnail}
                />
                <ChangeCover onClick={() => setModal(true)}>
                  커버변경
                </ChangeCover>
              </>
            ) : (
              <UplaodIcon className="material-symbols-rounded">
                file_upload
              </UplaodIcon>
            )}
            <Controller
              control={control}
              render={() => (
                <input
                  disabled={!!thumbnailUrl}
                  {...rest}
                  ref={(e) => {
                    videoRef.current = e;
                    ref(e);
                  }}
                  accept="video/mp4,video/mkv, video/x-m4v,video/*"
                  type="file"
                  hidden
                />
              )}
              name={"file"}
              rules={{
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
                    files[0].size < 1024 * 1024 * 500 ||
                    "500메가 이하의 파일만 업로드 가능합니다.",
                },
              }}
            />
          </UploadBox>
          <UploadBox clickable hidden ref={uploadImageRef}>
            <input
              disabled={!thumbnailUrl}
              {...register("thumbnail", {
                validate: {
                  formats: (files) =>
                    !files ||
                    [
                      "image/gif",
                      "image/png",
                      "image/jpeg",
                      "image/bmp",
                      "image/webp",
                      "image/jpg",
                    ].includes(files[0]?.type) ||
                    "이미지만 업로드 가능합니다.",
                  fileSize: (files) =>
                    !files ||
                    files[0].size < 1024 * 1024 * 500 ||
                    "500메가 이하의 파일만 업로드 가능합니다.",
                },
              })}
              accept="image/*"
              type="file"
              hidden
            />
          </UploadBox>
        </UploadBoxWrap>
        <TextWrapper>
          {errors.file ? (
            <UploadText color="#FA3030">{errors.file.message}</UploadText>
          ) : (
            <UploadText>500mb이하로 업로드해주세요.</UploadText>
          )}
        </TextWrapper>
        <TitleWrap>
          <Lable>영상 제목 *</Lable>
          <UploadInput
            {...register("title", { required: "필수항목입니다." })}
            placeholder="영상 제목을 입력해주세요."
          ></UploadInput>
          {errors.title && (
            <UploadText color="#FA3030">{errors.title.message}</UploadText>
          )}
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
    </>
  );
};

const ChangeCover = styled.div`
  font-family: "Noto Sans KR";
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 10px;
  display: flex;
  justify-content: center;
  padding: 10px;
  position: absolute;
  bottom: 0;
  width: 100%;
  cursor: pointer;
`;
const TextWrapper = styled.div`
  width: 140px;
`;

const Wrap = styled.form`
  width: 100%;
  margin-top: 82px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 20px;
`;
const UploadBox = styled.label<{ clickable: boolean; hidden?: boolean }>`
  position: relative;
  cursor: ${(props) => (props.clickable ? "pointer" : "default")};
  overflow: hidden;
  width: 140px;
  height: 220px;
  border: 0.5px solid #cccccd;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.hidden &&
    css`
      display: none;
    `}
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

export default UploadForm;
