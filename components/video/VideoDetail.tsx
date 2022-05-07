import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import faker from "@faker-js/faker";
import { IVideo } from "interface/video";
import { cls } from "libs/utils";
import { useMutation, useQueryClient } from "react-query";
import { postToggleLike } from "apis/post";
import { useEffect, useRef, useState } from "react";
import ButtonModal, { textType } from "@components/modal/ButtonModal";
import { useRouter } from "next/router";
import InfoModal from "@components/modal/InfoModal";

interface Props {
  data: IVideo | undefined;
  isLoading: boolean;
}

export interface IButtons {
  text: string;
  action: () => void;
}

const VideoDetail = ({ data, isLoading }: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const queryClient = useQueryClient();
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  // 효진님
  const [videoCurrentProgress, setVideoCurrentProgress] = useState(0);

  const { mutate: toggleLike, isLoading: likeLoading } = useMutation(
    (videoId: string) => postToggleLike(videoId)
  );

  const handleLikeClick = (videoId: string) => {
    if (likeLoading) return;
    toggleLike(videoId, {
      onSuccess: (data) => {
        queryClient.invalidateQueries(["videoDetail", videoId]);
      },
      onError: (err) => {
        console.log(err);
        console.log(showDelete);
      },
    });
  };

  const handleButtonModalClick = (v: textType) => {
    if (v === "정보") {
      setShowModal(false);
      setShowInfo(true);
      setShowDelete(false);
    }
    if (v === "수정") {
      router.push("/");
    }
    if (v === "삭제") {
      setShowDelete(true);
      setShowModal(false);
      setShowInfo(false);
    }
  };

  useEffect(() => {
    const getCurrentTime = () => {
      setVideoCurrentProgress(
        (videoRef.current?.currentTime! / videoRef.current?.duration!) * 100
      );
    };

    videoRef.current?.addEventListener("timeupdate", getCurrentTime);
    return () => {
      videoRef.current?.removeEventListener("timeupdate", getCurrentTime);
    };
  }, []);

  return (
    <DetailWrapper>
      {showModal && (
        <ButtonModal
          texts={["정보", "수정", "삭제"]}
          onClose={() => setShowModal(false)}
          onClick={handleButtonModalClick}
        />
      )}
      <AnimatePresence initial={false}>
        {showInfo && (
          <InfoModal
            done={videoCurrentProgress}
            onClose={() => setShowInfo(false)}
            data={data}
          />
        )}
      </AnimatePresence>
      <VideoWrapper>
        <video
          src="/assets/video/sslc-banner.mp4"
          ref={videoRef}
          autoPlay
          muted
        />
      </VideoWrapper>
      <ContentBox>
        <Profile>
          <Avatar>
            <img src={faker.image.cats()} alt="" />
          </Avatar>
          <Nickname>@{data?.user.nickName}</Nickname>
        </Profile>
        <Info>
          <svg
            onClick={() => setShowModal((prev) => !prev)}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
          <span
            onClick={() => handleLikeClick(String(data?.id))}
            className={cls(
              "material-symbols-rounded",
              data?.isLiked ? "liked" : ""
            )}
          >
            favorite
          </span>
          <span className="likeCount">{data?.like}개</span>
        </Info>
      </ContentBox>
    </DetailWrapper>
  );
};

const DetailWrapper = styled(motion.div)`
  position: relative;
  height: 100%;
  padding-bottom: 80px;
`;

const VideoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  overflow: hidden;
  height: 100%;
  img {
    height: 100%;
    object-fit: cover;
  }
`;

const ContentBox = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  bottom: 90px;
  z-index: 30;
  width: 100%;
  padding: 0 15px;
  padding-bottom: 10px;
`;

const Profile = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 70px;
`;

const Avatar = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 10px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

const Nickname = styled.div`
  color: white;
  font-weight: 600;
  font-size: 14px;
`;

const Info = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  svg {
    cursor: pointer;
    width: 30px;
    height: 30px;
  }
  .material-symbols-rounded {
    cursor: pointer;
    font-size: 40px;
    margin-bottom: 5px;
    margin-top: 20px;
  }
  .likeCount {
    font-weight: 700;
    font-size: 12px;
  }
`;

export default VideoDetail;
