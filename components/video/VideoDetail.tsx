import { motion } from "framer-motion";
import styled from "styled-components";
import faker from "@faker-js/faker";
import { IVideo } from "interface/video";
import { cls } from "libs/utils";
import { useMutation, useQueryClient } from "react-query";
import { postToggleLike } from "apis/post";
import { useState } from "react";
import MainButton from "@components/button/MainButton";
import ButtonModal from "@components/modal/ButtonModal";
import { useRouter } from "next/router";

interface Props {
  data: IVideo | undefined;
  isLoading: boolean;
}

export interface IButtons {
  text?: string;
  action?: () => void;
}

const VideoDetail = ({ data, isLoading }: Props) => {
  const isLoggedIn = true;
  const queryClient = useQueryClient();
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const buttons: (IButtons | null)[] = [
    {
      text: "정보",
      action: () => {
        setShowModal(false);
        setShowInfo(true);
        setShowDelete(false);
      },
    },
    ...[
      isLoggedIn
        ? {
            text: "수정",
            action: () => {
              router.push("/");
            },
          }
        : null,
    ],
    ...[
      isLoggedIn
        ? {
            text: "삭제",
            action: () => {
              setShowDelete(true);
              setShowModal(false);
              setShowInfo(false);
            },
          }
        : null,
    ],
  ];

  console.log();

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
      },
    });
  };

  return (
    <DetailWrapper>
      {showModal && (
        <ButtonModal
          buttons={buttons.filter((v) => v !== null)}
          onClose={() => setShowModal(false)}
        />
      )}
      <VideoWrapper>
        <img src={data?.thumb} alt="" />
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
