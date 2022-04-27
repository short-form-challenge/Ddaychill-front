import { IPost } from "interface/post";
import Link from "next/link";
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
    <Link key={item.id} href={`/?videoId=${item.id}`}>
      <CardWrapper>
        <ImgWrapper>
          <img src={item.thumb} />
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
    </Link>
  );
};
export default VideoCard;
