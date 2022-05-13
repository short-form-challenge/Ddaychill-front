import { AnimatePresence } from "framer-motion";
import faker from "@faker-js/faker";
import { IVideo } from "interface/video";
import { cls } from "libs/utils";
import { useMutation, useQueryClient } from "react-query";
import { deleteVideo, postToggleLike } from "apis/post";
import { useEffect, useRef, useState } from "react";
import ButtonModal, { textType } from "@components/modal/ButtonModal";
import { useRouter } from "next/router";
import InfoModal from "@components/modal/InfoModal";
import Modal from "@components/modal/Modal";
import {
  Avatar,
  ContentBox,
  DetailWrapper,
  Info,
  Nickname,
  Profile,
  VideoWrapper,
} from "./style";

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

  const [videoCurrentTime, setVideoCurrentTime] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);

  const { mutate: toggleLike, isLoading: likeLoading } = useMutation(
    (videoId: number) => postToggleLike(videoId, data?.isLiked!)
  );

  const { mutate: deleteMutate, isLoading: deleteLoading } = useMutation(
    (videoId: number) => deleteVideo(videoId)
  );

  // 좋아요 클릭시 핸들러
  const handleLikeClick = (videoId: number) => {
    if (likeLoading) return;
    toggleLike(+videoId, {
      onSuccess: (data) => {
        queryClient.invalidateQueries(["videoDetail", videoId]);
      },
      onError: (err) => {
        console.log(err);
      },
    });
  };

  // 삭제 클릭시 핸들러
  const handleDelete = () => {
    if (deleteLoading) return;
    deleteMutate(data?.id!, {
      onSuccess: (data) => {
        queryClient.invalidateQueries(["videos", 1]);
        router.push("/");
      },
      onError: (err) => {
        console.log(err);
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
      setVideoCurrentTime(videoRef.current?.currentTime!);
      setVideoDuration(videoRef.current?.duration!);
    };

    videoRef.current?.addEventListener("timeupdate", getCurrentTime);
    return () => {
      videoRef.current?.removeEventListener("timeupdate", getCurrentTime);
    };
  }, [videoRef]);

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
            done={(videoCurrentTime / videoDuration) * 100}
            videoCurrentTime={videoCurrentTime}
            videoDuration={videoDuration}
            onClose={() => setShowInfo(false)}
            data={data}
          />
        )}
      </AnimatePresence>
      {showDelete && (
        <Modal
          subConfirm="예"
          onClickSubConfirm={handleDelete}
          mainConfirm="아니오"
          onClickMainCofirm={() => setShowDelete(false)}
        >
          <div>영상을 정말 삭제하시겠습니까?</div>
        </Modal>
      )}
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
            onClick={() => handleLikeClick(data?.id!)}
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

export default VideoDetail;
