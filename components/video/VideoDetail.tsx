import styled from "styled-components";

const VideoDetail = () => {
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
            <img src="" alt="" />
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

const DetailWrapper = styled.div`
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

  height: 100%;
  img {
    width: 100%;
    aspect-ratio: 1 / 1.44;
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

const Profile = styled.div``;

const Avatar = styled.div``;

const Nickname = styled.div`
  color: white;
  font-weight: 600;
`;

const Info = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  svg {
    width: 35px;
    height: 35px;
  }
  .material-symbols-rounded {
    font-size: 40px;
    margin-bottom: 10px;
    margin-top: 20px;
  }
  .likeCount {
    font-weight: 700;
    font-size: 12px;
  }
`;

export default VideoDetail;
