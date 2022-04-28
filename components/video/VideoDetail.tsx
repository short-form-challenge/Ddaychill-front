import { motion } from "framer-motion";
import { useRouter } from "next/router";
import styled from "styled-components";
import faker from "@faker-js/faker";

const VideoDetail = () => {
  const {
    query: { videoId },
  } = useRouter();
  console.log(videoId);
  return (
    <DetailWrapper>
      <VideoWrapper>
        <img
          src="https://i.pinimg.com/originals/33/ba/3a/33ba3ace628b4ca03ec66a2696bc78c6.jpg"
          alt=""
        />
      </VideoWrapper>
      <ContentBox>
        <Profile>
          <Avatar>
            <img src={faker.image.cats()} alt="" />
          </Avatar>
          <Nickname>@레오와 두리</Nickname>
        </Profile>
        <Info>
          <svg
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
          <span className="material-symbols-rounded liked">favorite</span>
          <span className="likeCount">10개</span>
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
    width: 30px;
    height: 30px;
  }
  .material-symbols-rounded {
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
