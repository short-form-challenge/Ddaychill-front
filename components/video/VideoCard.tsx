import { IVideo } from "interface/video";
import { cls } from "libs/utils";
import Link from "next/link";
import {
  CardWrapper,
  Contents,
  ImgWrapper,
  MainContent,
  SubContent,
} from "./style";

interface Props {
  item: IVideo;
}

const VideoCard = ({ item }: Props) => {
  return (
    <Link key={item.id} href={`/videos/${item.id}`}>
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
            <span
              className={cls(
                "material-symbols-rounded",
                item.isLiked ? "liked" : "unliked"
              )}
            >
              favorite
            </span>
            <span className="likeCount">{item.like}개</span>
          </SubContent>
        </Contents>
      </CardWrapper>
    </Link>
  );
};
export default VideoCard;
