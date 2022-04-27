import { IPost } from "interface/post";
import {
  CardWrapper,
  Contents,
  ImgWrapper,
  MainContent,
  SubContent,
} from "./style";

interface Props {
  item: IPost;
}

const VideoCard = ({ item }: Props) => {
  return (
    <CardWrapper>
      <ImgWrapper>
        {/* <img src={item.thumb} /> */}
        <img
          src="https://i.pinimg.com/originals/33/ba/3a/33ba3ace628b4ca03ec66a2696bc78c6.jpg"
          alt=""
        />
      </ImgWrapper>
      <Contents>
        <MainContent>
          <h3>{item.title}</h3>
          <span>2022.04.22</span>
        </MainContent>
        <SubContent>
          <span className="material-symbols-rounded liked">favorite</span>
          <span className="likeCount">{item.like}개</span>
        </SubContent>
      </Contents>
    </CardWrapper>
  );
};
export default VideoCard;
