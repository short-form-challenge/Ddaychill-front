import { Avatar } from "@components/video/style";
import faker from "@faker-js/faker";
import { IVideo } from "interface/video";
import styled from "styled-components";
import { BackDrop, InfoCard } from "./style";

interface Props {
  data: IVideo | undefined;
  onClose: () => void;
  done: number;
}

const animate = {
  initial: {
    transform: `translateY(500px)`,
    opacity: 1,
    transition: `transform 2s ease`,
  },
  animate: {
    transform: `translateY(0px)`,
    opacity: 1,
    transition: `transform 0.33s ease`,
  },
  exit: {
    transform: `translateY(500px)`,
    opacity: 1,
    transition: `transform 2s ease`,
  },
};

const InfoModal = ({ data, onClose, done }: Props) => {
  return (
    <BackDrop modalPosition={"bottom"}>
      <InfoCard
        variants={animate}
        initial="initial"
        animate="animate"
        exit="exit"
        key={data?.id}
      >
        <CloseBtn>
          <span onClick={onClose} className="material-symbols-rounded">
            close
          </span>
        </CloseBtn>
        <UserInfo>
          <Avatar>
            <img src={faker.image.cats()} alt="" />
          </Avatar>
          <span>@{data?.user.nickName}</span>
        </UserInfo>
        <ContentInfo>
          <h3>{data?.title}</h3>
          <span>
            게시일: {data?.createdAt.split("T")[0].replaceAll("-", ".")}
          </span>
        </ContentInfo>
        <CountInfo>
          <Count>
            <div>{data?.like}</div>
            <span>좋아요 수</span>
          </Count>
          <Count>
            <div>3,928</div>
            <span>조회수</span>
          </Count>
        </CountInfo>
        <ProgressBar>
          <ProgressBarDone done={done}></ProgressBarDone>
        </ProgressBar>
        <VideoTime>
          <span>0:00</span>
          <span>5:00</span>
        </VideoTime>
      </InfoCard>
    </BackDrop>
  );
};

const CloseBtn = styled.div`
  text-align: end;
  span {
    cursor: pointer;
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  span {
    font-weight: 700;
    font-size: 14px;
  }
`;

const ContentInfo = styled.div`
  padding: 14px 0;
  h3 {
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    margin-bottom: 5px;
  }
  span {
    font-weight: 400;
    font-size: 12px;
    color: #cccccd;
  }
`;

const CountInfo = styled.div`
  width: 100%;
  display: flex;
  margin: 10px 0;
`;

const Count = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3px;
  div {
    font-weight: 700;
    font-size: 16px;
    line-height: 23px;
    margin-bottom: 5px;
  }
  span {
    font-size: 12px;
    font-weight: 400;
    color: #252525;
  }
  &:first-child {
    border-right: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

const ProgressBar = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 8px;
  background: #efefef;
`;
const ProgressBarDone = styled.div<{ done: number }>`
  width: ${(props) => (props.done ? `${props.done}%` : "0px")};
  height: 8px;
  background: #4d23d6;
`;

const VideoTime = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  span {
    margin-top: 5px;
    font-size: 12px;
    font-weight: 400;
    color: #cccccd;
  }
`;

export default InfoModal;
